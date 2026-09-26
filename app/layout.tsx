import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Nizam Uddin — Full-Stack Developer",
  description:
    "Portfolio of Nizam Uddin, a full-stack developer building responsive UIs, scalable APIs and AI-powered tools with Next.js, Prisma, PostgreSQL and Python.",
  keywords: [
    "Nizam Uddin",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  openGraph: {
    title: "Nizam Uddin — Full-Stack Developer",
    description:
      "Full-stack developer crafting responsive interfaces, scalable APIs and AI-powered tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${mono.variable} font-sans antialiased bg-[#05060a] text-zinc-200 min-h-screen overflow-x-hidden selection:bg-emerald-400/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
