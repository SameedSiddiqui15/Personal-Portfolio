"use client";

import { useMemo, useState } from "react";
import { allTech, projects, type Project } from "@/data/profile";

const ALL = "All";

export default function Work() {
  const [active, setActive] = useState(ALL);

  const counts = useMemo(() => {
    const c: Record<string, number> = { [ALL]: projects.length };
    for (const t of allTech) c[t] = projects.filter((p) => p.tech.includes(t)).length;
    return c;
  }, []);

  const visible = active === ALL ? projects : projects.filter((p) => p.tech.includes(active));
  const client = visible.filter((p) => p.kind === "Client work");
  const personal = visible.filter((p) => p.kind === "Personal");
  const tags = [ALL, ...[...allTech].sort((a, b) => counts[b] - counts[a])];

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects by technology">
        {tags.map((t) => (
          <button key={t} type="button" className="chip" aria-pressed={active === t} onClick={() => setActive(t)}>
            {t}
            <span className="n">{counts[t]}</span>
          </button>
        ))}
      </div>
      <p className="label" aria-live="polite" style={{ marginBottom: "1.5rem" }}>
        Showing {visible.length} of {projects.length}
        {active !== ALL && ` · ${active}`}
      </p>
      {client.length > 0 && <Group title="Client work · built at TriA Tech Solution & Acquire Axis" items={client} />}
      {personal.length > 0 && <Group title="Personal & early work" items={personal} />}
    </>
  );
}

function Group({ title, items }: { title: string; items: Project[] }) {
  return (
    <div className="work-group">
      <span className="label">{title}</span>
      <div className="cards">
        {items.map((p) => (
          <article key={p.title} className="card">
            <h3>{p.title}</h3>
            <p className="summary">{p.summary}</p>
            <p className="detail">{p.detail}</p>
            <ul className="tags" aria-label="Technologies">
              {p.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {p.links ? (
              <div className="card-links">
                {p.links.live && (
                  <a href={p.links.live} target="_blank" rel="noopener noreferrer">
                    Live site ↗
                  </a>
                )}
                {p.links.code && (
                  <a href={p.links.code} target="_blank" rel="noopener noreferrer">
                    Source ↗
                  </a>
                )}
              </div>
            ) : (
              <span className="private">Client code · private</span>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
