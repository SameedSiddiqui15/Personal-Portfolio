"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";

type Status = { kind: "idle" | "sending" | "sent" | "error"; message?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(body.error || "The message couldn't be sent.");
      form.reset();
      setStatus({ kind: "sent", message: "Message sent. I'll reply within two working days." });
    } catch (err) {
      const reason = err instanceof Error ? err.message : "The message couldn't be sent.";
      setStatus({ kind: "error", message: `${reason} You can email me directly at ${profile.email}.` });
    }
  }

  const sending = status.kind === "sending";
  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={100} />
      </div>
      <div className="field">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={200} />
      </div>
      <div className="field">
        <label htmlFor="contact-message">What are you building?</label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          placeholder="A short description, your timeline and a budget range if you have one."
        />
      </div>
      {/* Honeypot: hidden from people, filled in by bots. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
        <button className="btn btn-primary" type="submit" disabled={sending}>
          {sending ? "Sending…" : "Send message"}
        </button>
        {(status.kind === "sent" || status.kind === "error") && (
          <p className={`form-note ${status.kind === "sent" ? "ok" : "err"}`} role="status">
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
