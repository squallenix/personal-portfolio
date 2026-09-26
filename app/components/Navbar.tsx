"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"
        }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 bg-white dark:bg-gray-800  transition-all duration-500 ${scrolled ? "mx-4 md:mx-auto" : ""
          }`}
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 font-mono text-sm font-bold text-[#05060a] shadow-lg shadow-emerald-500/25 transition-transform duration-300 group-hover:rotate-6">
            N
          </span>
          <span className="font-semibold tracking-tight text-zinc-900 dark:text-white">
            Nizam<span className="text-emerald-500 dark:text-emerald-400"> Uddin</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${active === l.href
                ? "bg-zinc-900/[0.06] text-zinc-900 dark:bg-white/10 dark:text-white"
                : "text-zinc-500 hover:bg-zinc-900/[0.04] hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
                }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-4 py-2 text-sm font-semibold text-[#05060a] shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-400/40 hover:brightness-110"
          >
            Hire me
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-lg text-zinc-500 hover:bg-zinc-900/[0.06] hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-strong mx-4 mt-2 rounded-2xl p-3 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-zinc-600 transition hover:bg-zinc-900/[0.05] hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
