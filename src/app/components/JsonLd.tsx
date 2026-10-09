import { certifications, education, faqs, profile, site, skills } from "@/data/profile";

// Structured data for search engines and AI answer engines:
// who the person is (Person), what this page is (ProfilePage/WebSite), and common questions (FAQPage).
export default function JsonLd() {
  const personId = `${site.url}/#person`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        givenName: "Sameed",
        familyName: "Siddiqui",
        jobTitle: profile.role,
        description: profile.summary,
        url: site.url,
        email: `mailto:${profile.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: profile.location.city,
          addressRegion: profile.location.region,
          addressCountry: profile.location.countryCode,
        },
        sameAs: [profile.links.linkedin, profile.links.github],
        knowsAbout: skills.flatMap((s) => s.items),
        knowsLanguage: ["en", "ur"],
        alumniOf: education.map((e) => ({ "@type": "EducationalOrganization", name: e.school })),
        hasCredential: certifications.map((c) => ({
          "@type": "EducationalOccupationalCredential",
          name: c,
          credentialCategory: "certificate",
        })),
        hasOccupation: {
          "@type": "Occupation",
          name: "Frontend Developer",
          occupationLocation: { "@type": "City", name: profile.location.city },
          skills: "Angular, React, Next.js, TypeScript, Tailwind CSS",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: `${profile.name} Portfolio`,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profilepage`,
        url: site.url,
        name: `${profile.name} · ${profile.role}`,
        isPartOf: { "@id": `${site.url}/#website` },
        mainEntity: { "@id": personId },
        dateModified: new Date().toISOString().slice(0, 10),
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
