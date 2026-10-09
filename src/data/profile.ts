// Single source of truth for everything the site says about Sameed.
// The page, the JSON-LD, the sitemap and /llms.txt all read from here,
// so update facts in this file only.

export const site = {
  url: "https://personal-portfolio-of-sameed.vercel.app",
  locale: "en_US",
};

export const profile = {
  name: "Sameed Siddiqui",
  shortName: "Sameed",
  role: "Frontend Engineer",
  headline: "Frontend Engineer · Angular & Next.js · TypeScript",
  location: { city: "Karachi", region: "Sindh", country: "Pakistan", countryCode: "PK", timezone: "PKT (UTC+5)" },
  availability: "Available for freelance projects",
  email: "sameedsiddiqui15@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/sameedsiddiqui15/",
    github: "https://github.com/SameedSiddiqui15",
  },
  // One-paragraph answer to "Who is Sameed Siddiqui?" — written to be quotable by search and AI answer engines.
  summary:
    "Sameed Siddiqui is a frontend engineer based in Karachi, Pakistan, who builds scalable, high-performance web applications with Angular, React and Next.js in TypeScript. He spent over a year at TriA Tech Solution building production modules such as dynamic forms, hierarchical drag-and-drop systems, filterable lazy-loaded data views and admin panels, and now works with clients as a freelancer.",
  about: [
    "I build frontends that stay fast and easy to change after launch. Most of my work is in Angular, React and Next.js with TypeScript, styled with Tailwind CSS.",
    "At TriA Tech Solution I went from intern to Junior Developer, shipping complex modules: dynamic forms, hierarchical drag-and-drop, filtering and lazy loading, and structured admin panels. I worked closely with backend teams on API integration and performance.",
    "I care about clean architecture, reusable components and code that the next developer can read. I'm currently studying Artificial Intelligence at Dawood University of Engineering and Technology.",
  ],
};

export type Experience = {
  role: string;
  company: string;
  type: string;
  start: string; // ISO yyyy-mm
  end: string | null;
  location: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Freelance Frontend Developer",
    company: "Independent",
    type: "Freelance",
    start: "2026-04",
    end: null,
    location: "Remote",
    points: [
      "Building and improving web applications for clients with Angular, Next.js and TypeScript.",
      "Owning projects end to end: UI architecture, API integration, performance and deployment.",
    ],
  },
  {
    role: "Junior Developer",
    company: "TriA Tech Solution (Pvt) Ltd",
    type: "Full-time",
    start: "2025-09",
    end: "2026-03",
    location: "Karachi",
    points: [
      "Built dynamic UI in Angular, TypeScript and Tailwind CSS for scalable, maintainable web applications.",
      "Implemented reusable components, structured modules and clean architecture practices.",
      "Delivered filtering, sorting, lazy loading and API integrations.",
      "Worked with backend teams on data flow and performance optimization.",
    ],
  },
  {
    role: "WordPress Developer",
    company: "Acquire Axis",
    type: "Contract",
    start: "2025-09",
    end: "2025-10",
    location: "Remote",
    points: [
      "Built and customized responsive client websites with WordPress themes and plugins.",
      "Improved UI and site performance while working full-time at TriA.",
    ],
  },
  {
    role: "Frontend Developer (Intern)",
    company: "TriA Tech Solution (Pvt) Ltd",
    type: "Internship",
    start: "2025-01",
    end: "2025-08",
    location: "Karachi",
    points: [
      "Developed responsive UI with HTML, CSS, JavaScript and Tailwind CSS on real client projects.",
      "Fixed UI/UX issues and built features with component-based architecture and API integration.",
      "Converted to a full-time Junior Developer role.",
    ],
  },
];

export type Project = {
  title: string;
  kind: "Client work" | "Personal";
  summary: string;
  detail: string;
  tech: string[];
  links?: { live?: string; code?: string };
};

export const projects: Project[] = [
  {
    title: "Dynamic form engine",
    kind: "Client work",
    summary: "Forms generated from configuration instead of hand-written templates.",
    detail:
      "Built at TriA Tech Solution. Fields, validation and conditional sections are driven by data, so new forms ship without new components.",
    tech: ["Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Hierarchical drag-and-drop",
    kind: "Client work",
    summary: "Reorder nested items across levels while keeping the tree consistent.",
    detail:
      "Built at TriA Tech Solution. Handles parent–child moves and keeps the UI state in sync with the backend after each drop.",
    tech: ["Angular", "TypeScript"],
  },
  {
    title: "Data views with filtering & lazy loading",
    kind: "Client work",
    summary: "Large lists that stay responsive: filter, sort and load on demand.",
    detail:
      "Built at TriA Tech Solution. Combined server-side filtering and sorting with lazy loading to keep first paint fast on big datasets.",
    tech: ["Angular", "TypeScript", "REST APIs"],
  },
  {
    title: "Admin panels",
    kind: "Client work",
    summary: "Structured admin areas built from reusable modules.",
    detail:
      "Built at TriA Tech Solution. Shared layout, table and form components so each new admin section reused the same building blocks.",
    tech: ["Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Client WordPress sites",
    kind: "Client work",
    summary: "Responsive business websites with custom theme work.",
    detail: "Built for Acquire Axis clients. Theme and plugin customization, UI enhancements and performance tuning.",
    tech: ["WordPress", "CSS"],
  },
  {
    title: "This portfolio",
    kind: "Personal",
    summary: "Statically rendered Next.js site with structured data for search and AI answer engines.",
    detail: "Next.js App Router, TypeScript, JSON-LD (Person, FAQ), sitemap, llms.txt and a light/dark theme.",
    tech: ["Next.js", "TypeScript", "React"],
    links: { code: "https://github.com/SameedSiddiqui15/Personal-Portfolio" },
  },
  {
    title: "Resume Builder",
    kind: "Personal",
    summary: "Build and share a resume from a form. GIAIC hackathon project.",
    detail: "Editable resume generated from form input, written in TypeScript without a framework.",
    tech: ["TypeScript", "HTML", "CSS"],
    links: { live: "https://milestone5-task2-by-sameed.vercel.app", code: "https://github.com/SameedSiddiqui15/Hackathon" },
  },
  {
    title: "To-Do List",
    kind: "Personal",
    summary: "Task list app built while learning React state and components.",
    detail: "Add, complete and remove tasks. A React practice project.",
    tech: ["React", "JavaScript", "CSS"],
    links: { live: "https://todolist-nine-pearl.vercel.app", code: "https://github.com/SameedSiddiqui15/todolist" },
  },
  {
    title: "Yoga website",
    kind: "Personal",
    summary: "Multi-section landing site, my first complete HTML & CSS build.",
    detail: "Responsive layout built from scratch without frameworks.",
    tech: ["HTML", "CSS"],
    links: { live: "https://yoga-web-by-sameed.vercel.app", code: "https://github.com/SameedSiddiqui15/yoga-web-by-Sameed" },
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Frameworks", items: ["Angular", "React", "Next.js", "WordPress"] },
  { group: "Languages", items: ["TypeScript", "JavaScript", "HTML", "CSS"] },
  { group: "Styling", items: ["Tailwind CSS", "Bootstrap", "Responsive design"] },
  { group: "Engineering", items: ["Component architecture", "OOP", "REST API integration", "Lazy loading", "Performance optimization"] },
  { group: "Tools", items: ["Git & GitHub", "Vercel", "Claude Code", "AI-assisted development"] },
];

export const certifications = [
  "Certified GenAI, Web3 and Metaverse Developer",
  "React JS Development",
  "Certified Web Professional – Web Developer (CWP)",
  "Microsoft Office Specialist",
];

export const education = [
  { school: "Dawood University of Engineering and Technology", degree: "BS, Artificial Intelligence", period: "In progress" },
  { school: "Government Dehli Inter Science College", degree: "Intermediate, Computer Science", period: "2024 – 2026" },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "Who is Sameed Siddiqui?",
    a: profile.summary,
  },
  {
    q: "Is Sameed Siddiqui available for hire?",
    a: "Yes. Sameed is available for freelance frontend projects, remote or in Karachi. Send a message through the contact form or email sameedsiddiqui15@gmail.com.",
  },
  {
    q: "What technologies does Sameed work with?",
    a: "Angular, React and Next.js with TypeScript, styled with Tailwind CSS or Bootstrap, plus WordPress for content sites. He integrates REST APIs and focuses on reusable components and performance.",
  },
  {
    q: "What kind of projects is he best suited for?",
    a: "Data-heavy web apps and dashboards: dynamic forms, admin panels, filterable and lazy-loaded data views, and drag-and-drop interfaces. He also builds marketing sites in Next.js and WordPress.",
  },
  {
    q: "Where is Sameed based and which time zone does he work in?",
    a: "Karachi, Pakistan, in Pakistan Standard Time (UTC+5). He works remotely with teams in other time zones.",
  },
];

export const allTech = Array.from(new Set(projects.flatMap((p) => p.tech)));

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function formatMonth(iso: string | null) {
  if (!iso) return "Present";
  const [y, m] = iso.split("-").map(Number);
  return `${months[m - 1]} ${y}`;
}
