import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { getSiteUrl, profile, techMarquee } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: "Nizam Uddin — Junior Full-Stack Engineer",
  description:
    "Portfolio of Nizam Uddin, a Junior Full-Stack Engineer at FoundExe building responsive UIs, scalable APIs and AI-powered tools with Next.js, Prisma, PostgreSQL and Python.",
  keywords: [
    "Nizam Uddin",
    "squallenix",
    "Junior Full-Stack Engineer",
    "Full-Stack Developer",
    "FoundExe",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  openGraph: {
    title: "Nizam Uddin — Junior Full-Stack Engineer",
    description:
      "Junior Full-Stack Engineer crafting responsive interfaces, scalable APIs and AI-powered tools.",
    url: siteUrl,
    type: "website",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.handle,
  url: siteUrl,
  jobTitle: profile.role,
  worksFor: {
    "@type": "Organization",
    name: "FoundExe",
    url: "https://www.foundexe.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Stamford University Bangladesh",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: techMarquee,
};

/* Runs before paint to apply the stored theme (or the OS preference)
   and set the canonical cookie, avoiding any flash of wrong theme. */
const themeInitScript = `(function(){try{
var m=document.cookie.match(/(?:^|; )theme=(light|dark)/);
var s=m&&m[1]?m[1]:localStorage.getItem('theme');
if(s!=='light'&&s!=='dark'){s=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
var d=s==='dark';
document.documentElement.classList.toggle('dark',d);
document.cookie='theme='+s+';path=/;max-age=31536000;samesite=lax';
}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} font-sans antialiased bg-[#f5f7fa] text-zinc-800 dark:bg-[#05060a] dark:text-zinc-200 min-h-screen overflow-x-hidden selection:bg-emerald-300/40 selection:text-zinc-900 dark:selection:bg-emerald-400/30 dark:selection:text-white`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
