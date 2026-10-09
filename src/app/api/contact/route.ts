import { profile } from "@/data/profile";

// Delivery:
//  - If RESEND_API_KEY is set (Vercel → Settings → Environment Variables), mail goes through Resend.
//  - Otherwise it falls back to FormSubmit, which needs no account: the first message triggers a
//    one-time activation email to CONTACT_TO (default: the profile email). Click it once and later messages arrive.
const TO = process.env.CONTACT_TO || profile.email;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return Response.json({ error: "The form data was empty." }, { status: 400 });

  // Bots fill the hidden field; pretend success so they don't retry.
  if (clean(body.company, 200)) return Response.json({ ok: true });

  const name = clean(body.name, 100);
  const email = clean(body.email, 200);
  const message = clean(body.message, 5000);
  if (!name) return Response.json({ error: "Please add your name." }, { status: 400 });
  if (!EMAIL_RE.test(email)) return Response.json({ error: "Please check your email address." }, { status: 400 });
  if (message.length < 10) return Response.json({ error: "Please write a few more words." }, { status: 400 });

  const subject = `Portfolio enquiry from ${name}`;
  try {
    const res = process.env.RESEND_API_KEY
      ? await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            from: process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>",
            to: [TO],
            reply_to: email,
            subject,
            text: `${message}\n\n— ${name} <${email}>`,
          }),
        })
      : await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(TO)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name, email, message, _subject: subject, _replyto: email, _template: "box", _captcha: "false" }),
        });
    if (!res.ok) throw new Error(`Mail provider responded ${res.status}`);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("contact form delivery failed", err);
    return Response.json({ error: "The message couldn't be delivered right now." }, { status: 502 });
  }
}
