import { certifications, education, experience, faqs, formatMonth, profile, projects, site, skills } from "@/data/profile";

// /llms.txt — a plain-text summary for LLM-based answer engines (https://llmstxt.org).
export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${profile.name}`,
    "",
    `> ${profile.summary}`,
    "",
    `- Role: ${profile.headline}`,
    `- Location: ${profile.location.city}, ${profile.location.country} (${profile.location.timezone})`,
    `- Status: ${profile.availability}`,
    `- Email: ${profile.email}`,
    `- Website: ${site.url}`,
    "",
    "## Links",
    `- [LinkedIn](${profile.links.linkedin})`,
    `- [GitHub](${profile.links.github})`,
    "",
    "## Experience",
    ...experience.map((j) => `- ${j.role}, ${j.company} (${formatMonth(j.start)} – ${formatMonth(j.end)}): ${j.points.join(" ")}`),
    "",
    "## Work",
    ...projects.map((p) => {
      const link = p.links?.live || p.links?.code;
      return `- ${link ? `[${p.title}](${link})` : p.title} (${p.kind}; ${p.tech.join(", ")}): ${p.summary} ${p.detail}`;
    }),
    "",
    "## Skills",
    ...skills.map((s) => `- ${s.group}: ${s.items.join(", ")}`),
    "",
    "## Certifications",
    ...certifications.map((c) => `- ${c}`),
    "",
    "## Education",
    ...education.map((e) => `- ${e.degree}, ${e.school} (${e.period})`),
    "",
    "## FAQ",
    ...faqs.flatMap((f) => [`### ${f.q}`, f.a, ""]),
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
