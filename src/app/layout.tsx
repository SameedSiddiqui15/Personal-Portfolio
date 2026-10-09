import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Syne } from "next/font/google";
import "./globals.css";
import { profile, site } from "@/data/profile";
import JsonLd from "./components/JsonLd";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
  display: "swap",
});
const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const title = `${profile.name} · Frontend Engineer (Angular, Next.js, TypeScript)`;
const description =
  "Sameed Siddiqui is a Karachi-based frontend engineer building fast, scalable web apps with Angular, React and Next.js in TypeScript. Available for freelance projects.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s · ${profile.name}` },
  description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  keywords: [
    "Sameed Siddiqui",
    "frontend engineer",
    "frontend developer Karachi",
    "Angular developer",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "freelance web developer Pakistan",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: `${profile.name} Portfolio`,
    title,
    description,
    locale: site.locale,
    firstName: "Sameed",
    lastName: "Siddiqui",
    username: "sameedsiddiqui15",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#08090d",
  colorScheme: "dark",
};

// Runs before paint so the saved theme applies without a flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${syne.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
