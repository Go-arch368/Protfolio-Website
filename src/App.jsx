import { useState, useEffect, useRef, useCallback } from "react";

/* ══════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════ */
const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    num: "01",
    title: "JobFinder",
    desc: "Full stack job portal with role-based access for Admin, Recruiter, and Candidate. Solves the friction of job matching with real-time features, secure authentication, and online interactions.",
    tags: ["React.js", "Node.js", "MongoDB", "Redux", "Cloudinary"],
    links: [
      { label: "Live Demo", url: "https://job-applying-portal-frontend.onrender.com/" },
      { label: "GitHub", url: "https://github.com/Go-arch368/Job-Applying-Portal" }
    ]
  },
  {
    num: "02",
    title: "Claritev — Enterprise Micro-Frontend",
    desc: "Large-scale healthcare practitioner administration platform. Solves data orchestration complexity by separating distinct sub-modules into microfrontends powered by a shared core UI library.",
    tags: ["React.js", "TypeScript", "Vite", "Microfrontend", "REST APIs"],
    links: [
      { label: "Host App", url: "https://github.com/Go-arch368/Host_App-Micro-FE" },
      { label: "Remote App", url: "https://github.com/Go-arch368/Remote_Practitioner" },
      { label: "Practitioner", url: "https://github.com/Go-arch368/Practitioner-App" },
      { label: "Common UI", url: "https://github.com/Go-arch368/proLinkCommonUI" },
      { label: "UI Library", url: "https://github.com/Go-arch368/prvcommonUI---Library" }
    ]
  },
  {
    num: "03",
    title: "URL Shortener",
    desc: "High-performance link redirection tool. Solves bulk url sharing issues by providing click-through analytics, device profiling, and IP-based geolocation tracking.",
    tags: ["Node.js", "TypeScript", "REST API", "Analytics"],
    links: [
      { label: "GitHub", url: "https://github.com/Go-arch368/url-shortener" }
    ]
  },
  {
    num: "04",
    title: "Zotly",
    desc: "Conversational analytics SaaS dashboard. Solves business insight latency by displaying agent performance metrics and chat statistics inside unified interactive widget cards.",
    tags: ["React.js", "Node.js", "Recharts", "RBAC"]
  },
  {
    num: "05",
    title: "District Business",
    desc: "B2B marketplace web platform. Solves vendor procurement fragmentation through specialized catalog routing, internationalization parameters, and trade request portals.",
    tags: ["Next.js", "Tailwind", "RESTful APIs", "MongoDB"]
  }
];

const STATS = [
  { value: "1.5+", label: "Years of\nExperience" },
  { value: "3", label: "Production\nProjects" },
  { value: "2", label: "Personal\nProjects" },
];

const SKILLS_CATEGORIES = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Redux", "TypeScript", "JavaScript (ES6+)"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "JWT Auth"]
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Vercel", "Render", "Postman", "Stripe", "Recharts"]
  },
  {
    title: "Learning",
    skills: ["AWS", "Docker", "LLM APIs"]
  }
];

const EXPERIENCE = [
  {
    role: "Frontend Developer",
    company: "Algorithra AI",
    period: "Jan 2025 – Mar 2026",
    bullets: [
      "District Business (B2B marketplace) — Built seller workflows, catalog management dashboards, and multi-locale routing using Next.js and Tailwind.",
      "Zotly (SaaS conversational dashboard) — Configured secure role-based access control, analytics data feeds, and interactive widget cards using Recharts.",
      "Claritev (Enterprise Microfrontend) — Developed modular medical practitioner view remotes and built dynamic custom utilities inside a common shared UI library."
    ]
  }
];

const UPSKILLING = [
  "TypeScript", "PostgreSQL", "AWS", "Docker", "LLM APIs"
];

/* ══════════════════════════════════════════════════════
   HOOK — Scroll reveal
══════════════════════════════════════════════════════ */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          io.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ══════════════════════════════════════════════════════
   COMPONENT — Reveal wrapper
══════════════════════════════════════════════════════ */
function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ══════════════════════════════════════════════════════
   COMPONENT — Section label
══════════════════════════════════════════════════════ */
function SectionLabel({ children }) {
  return (
    <span className="block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-5">
      {children}
    </span>
  );
}

/* ══════════════════════════════════════════════════════
   APP
══════════════════════════════════════════════════════ */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ─────────────────── NAVBAR ─────────────────── */
  const Navbar = () => (
    <header className="sticky top-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-xl border-b border-[var(--color-border)]">
      {/* Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-[1.5px] bg-[var(--color-gold)] z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-[1140px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#"
          className="font-serif text-[1.35rem] font-medium text-[var(--color-cream)] tracking-wide hover:text-[var(--color-gold)] transition-colors duration-300"
        >
          Gowtham T
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-10 items-center" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--color-cream-2)] hover:text-[var(--color-gold)] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[0.5px] after:bg-[var(--color-gold)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/16_aEeUhUv-017JEn7_dnltzLlrWNd1pv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.68rem] uppercase tracking-[0.12em] px-4.5 py-1.5 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)] transition-all duration-300 rounded-[2px]"
          >
            Resume
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer bg-transparent border-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-[22px] h-[1px] bg-[var(--color-cream)] transition-all duration-300 ${
              menuOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[1px] bg-[var(--color-cream)] transition-all duration-300 ${
              menuOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-5 px-6 pb-6 pt-3 border-t border-[var(--color-border)] bg-[var(--color-bg)]">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className="font-mono text-[0.8rem] uppercase tracking-[0.14em] text-[var(--color-cream-2)] hover:text-[var(--color-gold)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/16_aEeUhUv-017JEn7_dnltzLlrWNd1pv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.8rem] uppercase tracking-[0.14em] text-center py-2.5 border border-[var(--color-gold)] text-[var(--color-gold)] rounded-[2px]"
            onClick={closeMenu}
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  );

  /* ─────────────────── HERO ─────────────────── */
  const Hero = () => (
    <section className="min-h-[100dvh] flex flex-col justify-center px-6 md:px-10 max-w-[1140px] mx-auto relative pt-12">
      {/* Eyebrow / Badges */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 font-mono text-[0.62rem] uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 dot-pulse" />
          Open to work
        </span>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-cream-3)]">
          Full-stack Developer
        </span>
      </div>

      {/* Headline */}
      <h1 className="font-serif italic text-[clamp(2.8rem,7.5vw,5.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-[var(--color-cream)] max-w-4xl mb-10">
        Building scalable
        <br />
        web apps,{" "}
        <span className="text-[var(--color-gold)]">thoughtfully</span>
        <span className="text-[var(--color-gold)] cursor-blink">.</span>
      </h1>

      {/* Subtitle */}
      <p className="font-mono text-[0.85rem] text-[var(--color-cream-2)] leading-relaxed max-w-2xl mb-14">
        Full Stack Developer with 1.5 years of experience building production-grade applications across the MERN stack with Next.js.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-5">
        <a
          href="#work"
          className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] px-7 py-3 rounded-[2px] bg-[var(--color-gold)] text-[var(--color-bg)] font-medium hover:bg-[#d4b45a] transition-colors duration-300"
        >
          View Work
        </a>
        <a
          href="https://drive.google.com/file/d/16_aEeUhUv-017JEn7_dnltzLlrWNd1pv/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] px-7 py-3 rounded-[2px] border border-[var(--color-border-strong)] text-[var(--color-gold)] hover:border-[var(--color-gold)] hover:bg-[rgba(201,168,76,0.06)] transition-all duration-300"
        >
          Resume ↗
        </a>

        {/* Social Icons */}
        <div className="flex items-center gap-4.5 sm:ml-4 border-l border-[var(--color-border)] pl-6 h-8">
          <a
            href="https://github.com/Go-arch368"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-cream-2)] hover:text-[var(--color-gold)] transition-colors duration-300"
            title="GitHub"
          >
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/gowtham-t-015888225"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-cream-2)] hover:text-[var(--color-gold)] transition-colors duration-300"
            title="LinkedIn"
          >
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-6 md:left-10 flex items-center gap-4">
        <span className="block w-10 h-[0.5px] bg-[var(--color-cream-3)] relative overflow-hidden line-sweep" />
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--color-cream-3)]">
          scroll
        </span>
      </div>
    </section>
  );

  /* ─────────────────── PROJECTS ─────────────────── */
  const Projects = () => (
    <section
      id="work"
      className="border-t border-[var(--color-border)] py-24 md:py-32 px-6 md:px-10 max-w-[1140px] mx-auto"
    >
      <Reveal>
        <SectionLabel>Selected Work</SectionLabel>
        <h2 className="font-serif not-italic text-[clamp(1.8rem,3.5vw,2.75rem)] font-light tracking-tight text-[var(--color-cream)] mb-14 md:mb-20">
          Projects
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.num} delay={i * 100}>
            <article className="card-glow bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[4px] p-8 md:p-9 flex flex-col gap-5 relative overflow-hidden border-t-[var(--color-gold)] border-t-[1.5px] h-full">
              {/* Number + Accent */}
              <div className="flex justify-between items-center">
                <span className="font-mono text-[0.65rem] tracking-[0.15em] text-[var(--color-gold-dim)]">
                  {p.num}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] opacity-30" />
              </div>

              {/* Title */}
              <h3 className="font-serif not-italic text-[1.45rem] font-normal tracking-tight text-[var(--color-cream)] mt-1">
                {p.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-[0.78rem] text-[var(--color-cream-2)] leading-[1.75] flex-1">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[0.6rem] tracking-[0.06em] text-[var(--color-gold)] border border-[var(--color-border)] px-2.5 py-1 rounded-[2px]"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Project Action Buttons */}
              {p.links && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border)] mt-2">
                  {p.links.map((lnk) => (
                    <a
                      key={lnk.url}
                      href={lnk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 font-mono text-[0.62rem] uppercase tracking-wider px-3.5 py-2 border border-[var(--color-border-strong)] hover:border-[var(--color-gold)] text-[var(--color-cream-2)] hover:text-[var(--color-gold)] hover:bg-[rgba(201,168,76,0.04)] rounded-[2px] transition-all duration-300 flex-1 text-center"
                    >
                      {lnk.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );

  /* ─────────────────── EXPERIENCE ─────────────────── */
  const Experience = () => (
    <section
      id="experience"
      className="border-t border-[var(--color-border)] py-24 md:py-32 px-6 md:px-10 max-w-[1140px] mx-auto"
    >
      <Reveal>
        <SectionLabel>Career Path</SectionLabel>
        <h2 className="font-serif not-italic text-[clamp(1.8rem,3.5vw,2.75rem)] font-light tracking-tight text-[var(--color-cream)] mb-14 md:mb-20">
          Work Experience
        </h2>
      </Reveal>

      <div className="relative border-l border-[var(--color-border)] ml-2 md:ml-4 pl-6 md:pl-10 space-y-12">
        {EXPERIENCE.map((exp, i) => (
          <Reveal key={exp.company + i} delay={i * 100}>
            {/* Timeline Dot */}
            <div className="absolute -left-[7px] w-[13px] h-[13px] rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-gold)]" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
              {/* Header: Role / Company */}
              <div className="lg:col-span-1">
                <span className="font-mono text-[0.68rem] text-[var(--color-gold)] uppercase tracking-wider block mb-1">
                  {exp.period}
                </span>
                <h3 className="font-serif text-[1.4rem] font-normal tracking-tight text-[var(--color-cream)]">
                  {exp.role}
                </h3>
                <span className="font-mono text-[0.8rem] text-[var(--color-cream-2)] block mt-1">
                  at {exp.company}
                </span>
              </div>

              {/* Description / Bullet Points */}
              <div className="lg:col-span-2">
                <ul className="space-y-4 font-mono text-[0.78rem] text-[var(--color-cream-2)] leading-relaxed list-none">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx} className="relative pl-5 before:content-['→'] before:absolute before:left-0 before:text-[var(--color-gold)]">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );

  /* ─────────────────── ABOUT ─────────────────── */
  const About = () => (
    <section
      id="about"
      className="border-t border-[var(--color-border)] py-24 md:py-32 px-6 md:px-10 max-w-[1140px] mx-auto"
    >
      <Reveal>
        <SectionLabel>Background</SectionLabel>
        <h2 className="font-serif not-italic text-[clamp(1.8rem,3.5vw,2.75rem)] font-light tracking-tight text-[var(--color-cream)] mb-14 md:mb-20">
          About
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
        {/* Bio */}
        <Reveal className="space-y-6">
          <p className="font-mono text-[0.82rem] text-[var(--color-cream-2)] leading-[1.9]">
            Full Stack Developer with 1.5 years of professional experience building
            scalable web applications across the MERN stack with Next.js. Delivered
            production-grade features across three projects — a B2B marketplace
            (DistrictBusiness), a SaaS conversational dashboard (Zotly), and an
            enterprise Microfrontend system (Claritev).
          </p>
          <p className="font-mono text-[0.82rem] text-[var(--color-cream-2)] leading-[1.9]">
            Open to <strong className="text-[var(--color-cream)] font-medium">Full Stack</strong> or <strong className="text-[var(--color-cream)] font-medium">Frontend Developer</strong> roles focused on impact-driven engineering.
          </p>
          <a
            href="#contact"
            className="inline-block font-mono text-[0.72rem] uppercase tracking-[0.1em] text-[var(--color-gold)] border-b border-[var(--color-gold)] pb-1 hover:text-[#d4b45a] hover:border-[#d4b45a] transition-colors duration-300 mt-3"
          >
            Let's work together →
          </a>
        </Reveal>

        {/* Stats */}
        <div className="border border-[var(--color-border)] rounded-[4px] overflow-hidden self-start">
          {STATS.map((s, i) => (
            <Reveal key={s.value} delay={i * 120}>
              <div
                className={`flex items-baseline gap-7 p-7 md:p-8 hover:bg-[var(--color-surface)] transition-colors duration-300 ${
                  i < STATS.length - 1 ? "border-b border-[var(--color-border)]" : ""
                }`}
              >
                <span className="font-serif not-italic text-[clamp(2.2rem,3.5vw,3rem)] font-light tracking-tight text-[var(--color-gold)] leading-none whitespace-nowrap">
                  {s.value}
                </span>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--color-cream-3)] leading-snug whitespace-pre-line">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );

  /* ─────────────────── SKILLS ─────────────────── */
  const Skills = () => (
    <section className="border-t border-[var(--color-border)] py-24 md:py-32 px-6 md:px-10 max-w-[1140px] mx-auto">
      <Reveal>
        <SectionLabel>Expertise</SectionLabel>
        <h2 className="font-serif not-italic text-[clamp(1.8rem,3.5vw,2.75rem)] font-light tracking-tight text-[var(--color-cream)] mb-14 md:mb-20">
          Skills & Stack
        </h2>
      </Reveal>

      <div className="space-y-12">
        {SKILLS_CATEGORIES.map((cat, idx) => (
          <Reveal key={cat.title} delay={idx * 80}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start border-b border-[var(--color-border)] pb-8 last:border-b-0">
              {/* Category Name */}
              <div className="md:col-span-1">
                <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.15em] text-[var(--color-gold)]">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="md:col-span-3 flex flex-wrap gap-2.5">
                {cat.skills.map((s, i) => (
                  <span
                    key={s}
                    className="font-mono text-[0.72rem] tracking-[0.06em] text-[var(--color-cream-2)] border border-[var(--color-border)] px-4 py-2 rounded-full bg-[var(--color-surface)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-300 cursor-default select-none"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );

  /* ─────────────────── UPSKILLING ─────────────────── */
  const Upskilling = () => (
    <section className="border-t border-[var(--color-border)] py-16 md:py-24 px-6 md:px-10 bg-[var(--color-surface)]">
      <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[var(--color-gold)] block mb-2">
            Professional Growth
          </span>
          <h3 className="font-serif italic text-[1.65rem] font-light text-[var(--color-cream)]">
            Currently upskilling in
          </h3>
        </div>
        <div className="flex flex-wrap gap-3.5">
          {UPSKILLING.map((u, i) => (
            <span
              key={u}
              className="font-mono text-[0.7rem] uppercase tracking-[0.1em] px-4.5 py-2.5 border border-[var(--color-border-strong)] text-[var(--color-gold)] rounded-[2px]"
            >
              {u}
            </span>
          ))}
        </div>
      </div>
    </section>
  );

  /* ─────────────────── CONTACT ─────────────────── */
  const Contact = () => (
    <section
      id="contact"
      className="border-t border-[var(--color-border)] py-28 md:py-40 px-6 md:px-10 max-w-[1140px] mx-auto text-center"
    >
      <Reveal>
        <SectionLabel>Get In Touch</SectionLabel>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-serif italic text-[clamp(2.2rem,5.5vw,4.25rem)] font-light tracking-[-0.02em] leading-[1.1] text-[var(--color-cream)] mb-6">
          Have a project in mind?
        </h2>
      </Reveal>
      <Reveal delay={140}>
        <p className="font-mono text-[0.82rem] text-[var(--color-cream-3)] mb-14">
          Let's build something great together.
        </p>
      </Reveal>
      <Reveal delay={200}>
        <a
          href="mailto:gowthamtj0808@gmail.com"
          className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] px-8 py-3.5 rounded-[2px] bg-[var(--color-gold)] text-[var(--color-bg)] font-medium hover:bg-[#d4b45a] transition-colors duration-300"
        >
          Get in touch →
        </a>
      </Reveal>
    </section>
  );

  /* ─────────────────── FOOTER ─────────────────── */
  const Footer = () => (
    <footer className="border-t border-[var(--color-border)] py-7 px-6 md:px-10 bg-[var(--color-bg)]">
      <div className="max-w-[1140px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="font-mono text-[0.68rem] tracking-[0.06em] text-[var(--color-cream-3)]">
          © 2025 Gowtham T
        </p>
        <nav className="flex gap-8" aria-label="Social links">
          <a
            href="https://github.com/Go-arch368"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-[var(--color-cream-3)] hover:text-[var(--color-gold)] transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/gowtham-t-015888225"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-[var(--color-cream-3)] hover:text-[var(--color-gold)] transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-[var(--color-cream-3)] hover:text-[var(--color-gold)] transition-colors duration-300"
          >
            Twitter
          </a>
        </nav>
      </div>
    </footer>
  );

  /* ─────────────────── RENDER ─────────────────── */
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Skills />
        <Upskilling />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
