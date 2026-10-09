import {
  certifications,
  education,
  experience,
  faqs,
  formatMonth,
  profile,
  skills,
} from "@/data/profile";
import ThemeToggle from "./components/ThemeToggle";
import Work from "./components/Work";
import ContactForm from "./components/ContactForm";
import CopyButton from "./components/CopyButton";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const stack = ["Angular", "Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs", "WordPress", "Git"];

export default function Home() {
  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="brand" aria-label={`${profile.name}, back to top`}>
            <span className="brand-mark" aria-hidden="true">
              SS
            </span>
            <span>{profile.name}</span>
          </a>
          <nav aria-label="Sections">
            <ul className="nav-links">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="main">
        {/* ---------- Hero ---------- */}
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div>
              <span className="status">
                <span className="dot" aria-hidden="true" />
                {profile.availability} · {profile.location.city}, PK
              </span>
              <h1 id="hero-title">
                Frontend that ships <span className="accent">fast</span> and scales.
              </h1>
              <p className="lede">
                I&apos;m <strong>{profile.name}</strong>, a frontend engineer building production web apps with{" "}
                <strong>Angular</strong>, <strong>React</strong> and <strong>Next.js</strong> in TypeScript.
              </p>
              <div className="cta-row">
                <a href="#work" className="btn btn-primary">
                  See my work
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Start a project
                </a>
              </div>
            </div>

            <div className="code-card" aria-label="Profile summary as code">
              <div className="code-head" aria-hidden="true">
                <i />
                <i />
                <i />
                <span className="label">sameed.ts</span>
              </div>
              <pre>
                <code>
                  <span className="tk-k">export const</span> <span className="tk-p">sameed</span> = {"{"}
                  {"\n"}  role: <span className="tk-s">&quot;Frontend Engineer&quot;</span>,
                  {"\n"}  based: <span className="tk-s">&quot;Karachi · UTC+5&quot;</span>,
                  {"\n"}  stack: [<span className="tk-s">&quot;Angular&quot;</span>, <span className="tk-s">&quot;Next.js&quot;</span>,
                  {"\n"}          <span className="tk-s">&quot;React&quot;</span>, <span className="tk-s">&quot;TypeScript&quot;</span>],
                  {"\n"}  shipped: [
                  {"\n"}    <span className="tk-s">&quot;dynamic forms&quot;</span>,
                  {"\n"}    <span className="tk-s">&quot;drag-and-drop trees&quot;</span>,
                  {"\n"}    <span className="tk-s">&quot;lazy-loaded data views&quot;</span>,
                  {"\n"}    <span className="tk-s">&quot;admin panels&quot;</span>,
                  {"\n"}  ],
                  {"\n"}  status: <span className="tk-s">&quot;open to freelance&quot;</span>,
                  {"\n"}{"}"};
                </code>
              </pre>
            </div>
          </div>
          <div className="ticker" aria-hidden="true">
            <div className="ticker-track">
              {[...stack, ...stack].map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- About ---------- */}
        <section className="section" id="about" aria-labelledby="about-title">
          <div className="wrap about-grid reveal">
            <h2 id="about-title" className="label" style={{ margin: 0 }}>
              About
            </h2>
            <div>
              <div className="about-body">
                {profile.about.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </div>
              <dl className="facts">
                <div className="fact">
                  <dt className="label">Focus</dt>
                  <dd style={{ margin: 0 }}>
                    <b>Frontend engineering</b>
                  </dd>
                </div>
                <div className="fact">
                  <dt className="label">Experience</dt>
                  <dd style={{ margin: 0 }}>
                    <b>Since Jan 2025</b>
                  </dd>
                </div>
                <div className="fact">
                  <dt className="label">Based in</dt>
                  <dd style={{ margin: 0 }}>
                    <b>Karachi, Pakistan</b>
                  </dd>
                </div>
                <div className="fact">
                  <dt className="label">Works</dt>
                  <dd style={{ margin: 0 }}>
                    <b>Remote · {profile.location.timezone}</b>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* ---------- Experience ---------- */}
        <section className="section" id="experience" aria-labelledby="exp-title">
          <div className="wrap">
            <div className="section-head">
              <span className="label">Experience</span>
              <h2 id="exp-title">From intern to shipping production modules in under a year.</h2>
            </div>
            <ol className="timeline">
              {experience.map((job) => (
                <li key={job.role + job.start} className="job reveal">
                  <div className="job-when">
                    <time dateTime={job.start}>{formatMonth(job.start)}</time>
                    {job.end ? (
                      <time dateTime={job.end}>– {formatMonth(job.end)}</time>
                    ) : (
                      <span className="now">– Present</span>
                    )}
                    <span>
                      {job.type} · {job.location}
                    </span>
                  </div>
                  <div>
                    <h3>{job.role}</h3>
                    <p className="org">{job.company}</p>
                    <ul>
                      {job.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Work ---------- */}
        <section className="section" id="work" aria-labelledby="work-title">
          <div className="wrap">
            <div className="section-head">
              <span className="label">Selected work</span>
              <h2 id="work-title">Modules I&apos;ve built for real products, and the projects I learned on.</h2>
            </div>
            <Work />
          </div>
        </section>

        {/* ---------- Skills ---------- */}
        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="wrap">
            <div className="section-head">
              <span className="label">Skills</span>
              <h2 id="skills-title">The stack I use every day.</h2>
            </div>
            <div className="skills reveal">
              {skills.map((g) => (
                <div key={g.group}>
                  <h3 className="label">{g.group}</h3>
                  <ul>
                    {g.items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Credentials ---------- */}
        <section className="section" id="credentials" aria-labelledby="cred-title">
          <div className="wrap">
            <div className="section-head">
              <span className="label">Credentials</span>
              <h2 id="cred-title">Certifications and education.</h2>
            </div>
            <div className="creds reveal">
              <div>
                <h3 className="label">Certifications</h3>
                <ul>
                  {certifications.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="label">Education</h3>
                <ul>
                  {education.map((e) => (
                    <li key={e.school}>
                      {e.degree}
                      <span>
                        {e.school} · {e.period}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className="section" id="faq" aria-labelledby="faq-title">
          <div className="wrap">
            <div className="section-head">
              <span className="label">FAQ</span>
              <h2 id="faq-title">Questions clients usually ask first.</h2>
            </div>
            <div className="faq">
              {faqs.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>
                    <h3 style={{ margin: 0, font: "inherit" }}>{f.q}</h3>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section className="section" id="contact" aria-labelledby="contact-title" style={{ borderBottom: 0 }}>
          <div className="wrap contact">
            <div>
              <span className="label">Contact</span>
              <h2 id="contact-title">
                Let&apos;s build <span style={{ color: "var(--accent)" }}>it.</span>
              </h2>
              <p className="lede">
                Tell me about the product, the timeline and what&apos;s blocking you. I reply within two working days.
              </p>
              <div className="direct">
                <div className="direct-row">
                  <span className="label" style={{ minWidth: "5.5rem" }}>
                    Email
                  </span>
                  <span className="email">{profile.email}</span>
                  <CopyButton text={profile.email} />
                </div>
                <div className="direct-row">
                  <span className="label" style={{ minWidth: "5.5rem" }}>
                    LinkedIn
                  </span>
                  <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer me">
                    /in/sameedsiddiqui15 ↗
                  </a>
                </div>
                <div className="direct-row">
                  <span className="label" style={{ minWidth: "5.5rem" }}>
                    GitHub
                  </span>
                  <a href={profile.links.github} target="_blank" rel="noopener noreferrer me">
                    @SameedSiddiqui15 ↗
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap footer-inner">
          <span>
            © {new Date().getFullYear()} {profile.name} · {profile.role}, Karachi
          </span>
          <nav aria-label="Profiles">
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer me">
              LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer me">
              GitHub
            </a>
            <a href="/llms.txt">llms.txt</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
