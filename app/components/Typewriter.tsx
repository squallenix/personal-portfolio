"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Full-Stack Developer",
  "Next.js & React Craftsman",
  "API & Database Builder",
  "AI Tooling Explorer",
  "Lifelong Learner",
];

export default function Typewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIndex];
    let delay = deleting ? 40 : 75;

    if (!deleting && text === current) {
      delay = 1800; // hold the full phrase
    } else if (deleting && text === "") {
      delay = 350; // pause before next phrase
    }

    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
      } else {
        const next = deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1);
        setText(next);
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, phraseIndex]);

  return (
    <span className="text-gradient font-semibold">
      {text}
      <span className="animate-blink ml-0.5 inline-block h-[1em] w-[3px] translate-y-[0.15em] rounded-sm bg-emerald-300" />
    </span>
  );
}
