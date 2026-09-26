import {
  profile,
  stats,
  skills,
  techMarquee,
  experience,
  repos,
} from "@/lib/data";
import Reveal from "./components/Reveal";
import Typewriter from "./components/Typewriter";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";

function SectionHeading({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: string;
  sub?: string;
}) {
  return (
    <Reveal>
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 font-mono text-sm tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
          {kicker}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
          {title}
        </h2>
        {sub && <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">{sub}</p>}
      </div>
    </Reveal>
  );
}

export default function Home() {
  const featured = repos.filter((r) => r.highlight);
  const others = repos.filter((r) => !r.highlight);

  return (
    <>
      <div className="backdrop-scene" aria-hidden />

      <Navbar />

      <main id="top" className="mx-auto max-w-6xl px-6">
        {/* ============ HERO ============ */}
        <section className="relative flex min-h-screen flex-col justify-center py-28">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-400/[0.07] px-4 py-1.5 text-sm text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/[0.07] dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-zinc-900 sm:text-7xl dark:text-white">
              Hi, I&apos;m {profile.name.split(" ")[0]}.
              <br />
              <Typewriter />
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {profile.about}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-7 py-3.5 font-semibold text-[#05060a] shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-emerald-400/40 hover:brightness-110"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="glass rounded-xl px-7 py-3.5 font-semibold text-zinc-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-emerald-400/10 dark:text-white"
              >
                Get in touch
              </a>
              <div className="flex items-center gap-1">
                {[
                  {
                    label: "GitHub",
                    href: profile.github,
                    icon: (
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.02c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.05.78 2.13v3.16c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    ),
                  },
                  {
                    label: "LinkedIn",
                    href: profile.linkedin,
                    icon: (
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                    ),
                  },

                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="glass grid h-11 w-11 place-items-center rounded-xl text-zinc-500 transition-all duration-300 hover:-translate-y-1 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-300"
                  >
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* floating stat chips */}
          <Reveal delay={400}>
            <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-5 text-center">
                  <div className="text-2xl font-bold text-gradient sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ============ ABOUT ============ */}
        <section id="about" className="scroll-mt-24 py-24">
          <SectionHeading
            kicker="About me"
            title="A builder across the whole stack"
            sub={profile.aboutLong}
          />
          <div className="grid gap-6 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <div className="glass h-full rounded-3xl p-8">
                <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold text-zinc-900 dark:text-white">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-400/10 text-emerald-500 ring-1 ring-emerald-400/20 dark:text-emerald-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 21s-7-4.35-9-8.5C1.5 8.5 3.5 5 7 5c2 0 3.5 1 5 3 1.5-2 3-3 5-3 3.5 0 5.5 3.5 4 7.5C19 16.65 12 21 12 21Z" />
                    </svg>
                  </span>
                  What drives me
                </h3>
                <div className="space-y-4 text-zinc-600 leading-relaxed dark:text-zinc-400">
                  <p>
                    I enjoy the full journey of a product: sketching the
                    interface, designing the schema, wiring the API, and
                    polishing the last 5% that makes software feel great.
                  </p>
                  <p>
                    Right now I&apos;m deep into the Next.js + Prisma +
                    PostgreSQL ecosystem at my internship, while exploring
                    local LLM tooling and on-device AI in my side projects.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-2">
              <div className="glass flex h-full flex-col rounded-3xl p-8">
                <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold text-zinc-900 dark:text-white">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-400/10 text-emerald-500 ring-1 ring-emerald-400/20 dark:text-emerald-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                  </span>
                  Details
                </h3>
                <dl className="space-y-4 text-sm">
                  {[
                    ["Location", profile.location],
                    ["Education", "B.Sc. CSE, Stamford University Bangladesh"],
                    ["Focus", "Web platforms · APIs · AI tooling"],
                    ["Status", profile.availability],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-b border-zinc-900/[0.08] pb-3 dark:border-white/[0.06]">
                      <dt className="text-zinc-500">{k}</dt>
                      <dd className="text-right font-medium text-zinc-700 dark:text-zinc-200">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ TECH MARQUEE ============ */}
        <section className="py-8">
          <Reveal>
            <div className="glass relative overflow-hidden rounded-2xl py-5">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f0f2f6] to-transparent dark:from-[#0a0c12]" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f0f2f6] to-transparent dark:from-[#0a0c12]" />
              <div className="flex w-max animate-marquee">
                {[0, 1].map((group) => (
                  <div
                    key={group}
                    aria-hidden={group === 1}
                    className="flex w-max shrink-0 gap-4 pr-4"
                  >
                    {techMarquee.map((t) => (
                      <span
                        key={t}
                        className="flex items-center gap-2 whitespace-nowrap rounded-full bg-white/[0.04] px-5 py-2 font-mono text-sm text-zinc-500 ring-1 ring-zinc-900/10 dark:text-zinc-300 dark:bg-white/[0.04] dark:ring-white/10"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {t}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ============ SKILLS ============ */}
        <section id="skills" className="scroll-mt-24 py-24">
          <SectionHeading
            kicker="Skills"
            title="Tools I reach for"
            sub="A snapshot of the languages and frameworks I use across web, backend, AI and systems work."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill, i) => (
              <Reveal key={skill.name} delay={i * 60}>
                <div className="glass group rounded-2xl p-5 transition-colors duration-300 hover:border-emerald-300/30">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-medium text-zinc-700 dark:text-zinc-200">{skill.name}</span>
                    <span className="font-mono text-xs text-emerald-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-zinc-900/[0.07] dark:bg-white/[0.07]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============ EXPERIENCE ============ */}
        <section id="work" className="scroll-mt-24 py-24">
          <SectionHeading kicker="Experience" title="Where I've been" />
          <div className="relative ml-3 border-l border-zinc-900/10 pl-8 dark:border-white/10">
            {experience.map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <div className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full bg-[#f5f7fa] ring-2 ring-emerald-500/60 dark:bg-[#0a0c12] dark:ring-emerald-400/60">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <p className="mb-1 font-mono text-xs tracking-wider text-emerald-400 uppercase">
                    {item.period}
                  </p>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
                  <p className="mt-0.5 text-sm text-zinc-500">{item.org}</p>
                  <ul className="mt-4 space-y-2">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400/70" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============ PROJECTS ============ */}
        <section id="projects" className="scroll-mt-24 py-24">
          <SectionHeading
            kicker="Projects"
            title="Things I've built"
            sub="Flagship work first, then the rest of the shelf — everything lives on GitHub."
          />

          <div className="mb-14 grid gap-6 lg:grid-cols-3">
            {featured.map((repo, i) => (
              <Reveal key={repo.name} delay={i * 120}>
                <ProjectCard repo={repo} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 className="mb-8 flex items-center gap-4 text-sm font-semibold tracking-widest text-zinc-500 uppercase">
              More projects
              <span className="h-px flex-1 bg-zinc-900/10 dark:bg-white/10" />
            </h3>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((repo, i) => (
              <Reveal key={repo.name} delay={i * 80}>
                <ProjectCard repo={repo} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 text-center">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-3 rounded-xl px-7 py-3.5 font-semibold text-zinc-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-emerald-400/10 dark:text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-300">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.02c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.05.78 2.13v3.16c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
                See everything on GitHub
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            </div>
          </Reveal>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="scroll-mt-24 py-24">
          <Reveal>
            <div className="glass-strong relative overflow-hidden rounded-[2rem] p-10 text-center sm:p-16">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[80px]"
              />
              <Reveal delay={100}>
                <p className="font-mono text-sm uppercase tracking-widest text-emerald-500 dark:text-emerald-400">
                  Contact
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
                  Let&apos;s build something
                  <br />
                  <span className="text-gradient">worth shipping.</span>
                </h2>
                <p className="mx-auto mt-5 max-w-md text-zinc-400">
                  I&apos;m open to internships, junior roles and interesting
                  collaborations. My inbox is always open.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-8 py-4 font-semibold text-[#05060a] shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-emerald-400/40 hover:brightness-110"
                  >
                    Say hello 👋
                  </a>
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="glass rounded-xl px-8 py-4 font-semibold text-zinc-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-emerald-400/10 dark:text-white"
                  >
                    {profile.phone}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-10 flex flex-col items-center gap-1 text-sm text-zinc-500">
                  <span>{profile.email}</span>
                  <span>
                    {profile.address} · {profile.location}
                  </span>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </section>

        {/* ============ FOOTER ============ */}
        <footer className="flex flex-col items-center gap-4 border-t border-zinc-900/[0.08] py-10 text-sm text-zinc-500 dark:border-white/[0.06] sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js &
            Tailwind.
          </p>
          <div className="flex items-center gap-5">
            {[
              { name: "GitHub", href: profile.github },
              { name: "LinkedIn", href: profile.linkedin },
              { name: "Email", href: `mailto:${profile.email}` },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-300"
              >
                {s.name}
              </a>
            ))}
          </div>
        </footer>
      </main>
    </>
  );
}
