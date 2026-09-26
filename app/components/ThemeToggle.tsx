"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true); // SSR default matches <html className="dark">

  useEffect(() => {
    const sync = () => setDark(document.documentElement.classList.contains("dark"));
    sync(); // adopt the theme the init script already applied
    window.addEventListener("themechange", sync);
    return () => window.removeEventListener("themechange", sync);
  }, []);

  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    document.cookie = `theme=${next};path=/;max-age=31536000;samesite=lax`;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode — cookie still covers refreshes */
    }
    window.dispatchEvent(new Event("themechange"));
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Light mode" : "Dark mode"}
      className="group relative grid h-10 w-10 place-items-center overflow-hidden rounded-lg text-zinc-400 transition hover:bg-white/10 hover:text-white dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
    >
      {/* Moon */}
      <svg
        aria-hidden
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`absolute transition-all duration-300 motion-reduce:transition-none ${
          dark
            ? "translate-y-0 rotate-0 opacity-100"
            : "translate-y-4 rotate-45 opacity-0"
        }`}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>

      {/* Sun */}
      <svg
        aria-hidden
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`absolute transition-all duration-300 motion-reduce:transition-none ${
          dark
            ? "-translate-y-4 -rotate-45 opacity-0"
            : "translate-y-0 rotate-0 opacity-100"
        }`}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    </button>
  );
}
