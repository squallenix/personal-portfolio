import type { Repo } from "@/lib/data";

export default function ProjectCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    >
      {/* glow border */}
      <div
        aria-hidden
        className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-400/50 via-cyan-400/20 to-violet-500/40 opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="glass relative flex h-full flex-col rounded-2xl p-6 transition-transform duration-500 group-hover:-translate-y-1.5">
        <div className="mb-4 flex items-start justify-between gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.06] ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-emerald-400/15 group-hover:ring-emerald-300/30">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-300">
              {repo.highlight ? (
                <>
                  <path d="m12 3 1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3Z" />
                </>
              ) : (
                <>
                  <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                </>
              )}
            </svg>
          </span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300">
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </div>

        <h3 className="text-lg font-semibold tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-200">
          {repo.title}
        </h3>
        <p className="mt-0.5 font-mono text-xs text-emerald-400/80">
          {repo.tagline}
        </p>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
          {repo.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {repo.languages.map((lang) => (
            <span
              key={lang}
              className="rounded-full bg-white/[0.05] px-2.5 py-1 font-mono text-[11px] text-zinc-300 ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-white/[0.08]"
            >
              {lang}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 text-xs text-zinc-500">
          <span className="font-mono">{repo.name}</span>
          <span>{repo.year}</span>
        </div>
      </div>
    </a>
  );
}
