export type Repo = {
  name: string;
  title: string;
  tagline: string;
  description: string;
  languages: string[];
  github: string;
  highlight?: boolean;
  year: string;
};

export const profile = {
  name: "Nizam Uddin",
  handle: "squallenix",
  role: "Full-Stack Developer",
  location: "Dhaka, Bangladesh",
  email: "squallenix12@gmail.com",
  phone: "+880 1616 748375",
  address: "269/C, Khilgaon, Dhaka-1219",
  github: "https://github.com/squallenix",
  linkedin: "https://www.linkedin.com/in/nizam-uddin-50524a213/",
  about:
    "Motivated Full-Stack Developer with a solid foundation in front-end and back-end development. Experienced in building responsive user interfaces, developing APIs, and working with databases — eager to contribute to team-based projects and deliver reliable, user-friendly applications.",
  aboutLong:
    "I'm a full-stack developer and CSE undergraduate at Stamford University Bangladesh. I love taking a product from an empty repo to something people actually use — responsive front-ends, well-structured REST APIs, and AI-powered tools that run entirely on-device. Currently a Full-Stack Developer Intern at MSR Creation, shipping features across the stack with Next.js, Prisma and PostgreSQL.",
  availability: "Open to internships & junior roles",
};

export const stats = [
  { value: "10+", label: "Public projects" },
  { value: "8+", label: "Languages & stacks" },
  { value: "3", label: "Professional builds" },
  { value: "∞", label: "Curiosity" },
];

export const skills: { name: string; level: number }[] = [
  { name: "TypeScript / JavaScript", level: 80 },
  { name: "React / Next.js", level: 80 },
  { name: "Node.js / Express", level: 85 },
  { name: "Prisma / PostgreSQL", level: 80 },
  { name: "Python / AI tooling", level: 90 },
  { name: "Java / Dart", level: 70 },
  { name: "C / C++", level: 80 },
  { name: "Server management", level: 80 },
];

export const techMarquee = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express 5",
  "Prisma",
  "PostgreSQL",
  "Python",
  "Qwen LLM",
  "Java",
  "Dart",
  "C/C++",
  "Jupyter",
  "Linux",
  "REST APIs",
  "JWT Auth",
];

export const experience = [
  {
    period: "2026 June — Present",
    title: "Full-Stack Developer Intern",
    org: "MSR Creation",
    points: [
      "Building and shipping features across the stack in an ongoing internship.",
      "Working with responsive UIs, REST APIs and database-backed workflows.",
    ],
  },
  {
    period: "Ongoing",
    title: "B.Sc. in Computer Science & Engineering",
    org: "Stamford University Bangladesh",
    points: [
      "Coursework across web engineering, databases, AI and systems programming.",
      "Side projects spanning web platforms, ML notebooks and systems tools.",
    ],
  },
];

export const repos: Repo[] = [
  {
    name: "edu-app",
    title: "Education Assistant Platform",
    tagline: "Web platform for education",
    description:
      "A web-based education platform with role-based access for admins, teachers and students. Supports online exams, teacher-managed classes, student enrollment and resource downloads — admins and teachers can create exams and upload study materials.",
    languages: ["TypeScript", "React", "Next.js", "PostgreSQL"],
    github: "https://github.com/squallenix/edu-app",
    highlight: true,
    year: "2026",
  },
  {
    name: "car_rent_backend_structure",
    title: "Car Rental Management Backend",
    tagline: "Scalable rental REST API",
    description:
      "A scalable car-rental REST API with modular architecture, JWT authentication and role-based access for admins, customers and drivers. Supports vehicle management, rental requests, trips, offers, reviews, reports and cloud file storage.",
    languages: ["Node.js", "Express 5", "Prisma", "PostgreSQL", "TypeScript"],
    github: "https://github.com/squallenix/car_rent_backend_structure",
    highlight: true,
    year: "2026",
  },
  {
    name: "AI_Assistant",
    title: "AI Assistant",
    tagline: "On-device conversational AI",
    description:
      "An advanced intelligent assistant integrating a local Qwen LLM with voice and chat interfaces. Implements modular voice I/O, chat management, session persistence, user auth and database management — a privacy-friendly on-device assistant with a plugin-friendly architecture.",
    languages: ["Python", "Qwen LLM", "Voice I/O", "SQLite"],
    github: "https://github.com/squallenix/AI_Assistant",
    highlight: true,
    year: "2026",
  },
  {
    name: "donation_site",
    title: "Donation Site",
    tagline: "Crowdfunding-style web app",
    description:
      "A modern donation platform web app for creating campaigns and collecting contributions, built with a typed front-end stack.",
    languages: ["TypeScript", "React"],
    github: "https://github.com/squallenix/donation_site",
    year: "2026",
  },
  {
    name: "student-management-api",
    title: "Student Management API",
    tagline: "Academic records REST API",
    description:
      "REST API for managing students, courses and academic records with clean resource separation and validation.",
    languages: ["JavaScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/squallenix/student-management-api",
    year: "2026",
  },
  {
    name: "ai_assistant_data",
    title: "AI Assistant Data",
    tagline: "Assistant data tooling",
    description:
      "Companion data layer for the AI Assistant — tools and web surfaces for managing assistant data, sessions and models.",
    languages: ["HTML", "Data tooling"],
    github: "https://github.com/squallenix/ai_assistant_data",
    year: "2026",
  },
  {
    name: "Weather",
    title: "Weather App",
    tagline: "Desktop weather client",
    description:
      "A weather application built in Java — fetches and displays current conditions with a clean desktop UI.",
    languages: ["Java", "Desktop"],
    github: "https://github.com/squallenix/Weather",
    year: "2025",
  },
  {
    name: "atm_management",
    title: "ATM Management System",
    tagline: "Banking console system",
    description:
      "An ATM management system in Java covering accounts, authentication, deposits, withdrawals and transaction history.",
    languages: ["Java", "OOP"],
    github: "https://github.com/squallenix/atm_management",
    year: "2025",
  },
  {
    name: "Emotion-recognition",
    title: "Emotion Recognition",
    tagline: "ML emotion models",
    description:
      "Developing models to recognize emotions — notebooks exploring datasets, training pipelines and evaluation for facial/emotional classification.",
    languages: ["Python", "Jupyter", "ML"],
    github: "https://github.com/squallenix/Emotion-recognition",
    year: "2025",
  },
  {
    name: "Snake-game",
    title: "Snake Game",
    tagline: "Classic game in C",
    description:
      "The classic Snake game implemented from scratch in C with terminal rendering and keyboard controls.",
    languages: ["C", "Terminal"],
    github: "https://github.com/squallenix/Snake-game",
    year: "2024",
  },
];

export const socials = [
  { name: "GitHub", href: profile.github },
  { name: "LinkedIn", href: profile.linkedin },
  { name: "Email", href: `mailto:${profile.email}` },
];
