import { useState, useEffect, useRef, useCallback } from "react";

/* ══════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════ */
const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    num: "01",
    title: "JobFinder",
    desc: "Full stack job portal with role-based access for Admin, Recruiter and Candidate. JWT auth, live video/audio capture, real-time messaging, job fair management, and email verification.",
    tags: ["React.js", "Node.js", "MongoDB", "Redux", "Cloudinary"],
    links: [
      { label: "Live Site", url: "https://job-applying-portal-frontend.onrender.com/" },
      { label: "GitHub Repo", url: "https://github.com/Go-arch368/Job-Applying-Portal" }
    ]
  },
  {
    num: "02",
    title: "Claritev — Enterprise Micro-Frontend",
    desc: "Contributed to a large-scale enterprise app using Microfrontend architecture. Built Practitioner modules, configured API proxies, delivered Jira tickets in Agile/Scrum. Separate Host, Remote, and shared UI library repos.",
    tags: ["React.js", "TypeScript", "Vite", "Microfrontend", "REST APIs"],
    links: [
      { label: "Host App", url: "https://github.com/Go-arch368/Host_App-Micro-FE" },
      { label: "Remote Practitioner", url: "https://github.com/Go-arch368/Remote_Practitioner" },
      { label: "Practitioner App", url: "https://github.com/Go-arch368/Practitioner-App" },
      { label: "proLinkCommonUI", url: "https://github.com/Go-arch368/proLinkCommonUI" },
      { label: "prvcommonUI Library", url: "https://github.com/Go-arch368/prvcommonUI---Library" }
    ]
  },
  {
    num: "03",
    title: "URL Shortener",
    desc: "URL shortener with short-link generation, redirect logic, click analytics, IP-based geolocation detection, and device-type identification. TypeScript added to core utilities.",
    tags: ["Node.js", "TypeScript", "REST API", "Analytics"],
    link: "https://github.com/Go-arch368/url-shortener"
  },
  {
    num: "04",
    title: "Zotly",
    desc: "SaaS conversational dashboard with analytics widgets, role-based access control, and data visualisation using Recharts.",
    tags: ["React.js", "Node.js", "Recharts", "RBAC"]
  },
  {
    num: "05",
    title: "District Business",
    desc: "B2B marketplace platform built with Next.js and Tailwind CSS, supporting buyer and seller workflows with multi-locale routing.",
    tags: ["Next.js", "Tailwind", "RESTful APIs", "MongoDB"]
  }
];

const STATS = [
  { value: "1.5+", label: "Years of\nExperience" },
  { value: "3", label: "Production\nProjects" },
  { value: "2", label: "Personal\nProjects" },
];

const SKILLS = [
  "React.js", "Next.js", "JavaScript (ES6+)", "TypeScript",
  "Node.js", "Express.js", "MongoDB", "PostgreSQL",
  "Tailwind CSS", "Redux", "REST APIs", "JWT Auth",
  "Git", "GitHub", "Vercel", "Render",
  "Postman", "Stripe", "Recharts", "Spring Boot",
  "Core Java", "OOPs",
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
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
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  /* ─────────────────── NAVBAR ─────────────────── */
  const Navbar = () => (
    <header className="sticky top-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-xl border-b border-[var(--color-border)]">
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
        </nav>
      )}
    </header>
  );

  /* ─────────────────── HERO ─────────────────── */
  const Hero = () => (
    <section className="min-h-[100dvh] flex flex-col justify-center px-6 md:px-10 max-w-[1140px] mx-auto relative">
      {/* Eyebrow */}
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-cream-3)] mb-10">
        Full-stack Developer
      </p>

      {/* Headline */}
      <h1 className="font-serif italic text-[clamp(2.8rem,7.5vw,5.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-[var(--color-cream)] max-w-4xl mb-10">
        Building scalable
        <br />
        web apps,{" "}
        <span className="text-[var(--color-gold)]">thoughtfully</span>
        <span className="text-[var(--color-gold)] cursor-blink">.</span>
      </h1>

      {/* Subtitle */}
      <p className="font-mono text-[0.85rem] text-[var(--color-cream-2)] leading-relaxed max-w-xl mb-14">
        Full Stack Developer with 1.5 years of experience
        <br className="hidden sm:block" />
        building production-grade apps across the MERN stack &amp; Next.js.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4">
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
              {/* Number + Arrow/Link */}
              <div className="flex justify-between items-center">
                <span className="font-mono text-[0.65rem] tracking-[0.15em] text-[var(--color-gold-dim)]">
                  {p.num}
                </span>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-cream-3)] hover:text-[var(--color-gold)] transition-colors"
                    aria-label={`View GitHub repo for ${p.title}`}
                  >
                    ↗
                  </a>
                )}
              </div>

              {/* Title */}
              <h3 className="font-serif not-italic text-[1.45rem] font-normal tracking-tight text-[var(--color-cream)] mt-1">
                {p.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-[0.78rem] text-[var(--color-cream-2)] leading-[1.75] flex-1">
                {p.desc}
              </p>

              {/* Multi-links list */}
              {p.links && (
                <div className="flex flex-col gap-2 pt-3 border-t border-[var(--color-border)]">
                  <span className="font-mono text-[0.6rem] text-[var(--color-cream-3)] uppercase tracking-wider">GitHub Repos:</span>
                  <div className="flex flex-col gap-1.5">
                    {p.links.map((lnk) => (
                      <a
                        key={lnk.url}
                        href={lnk.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[0.68rem] tracking-[0.06em] text-[var(--color-gold)] hover:text-[#d4b45a] hover:underline transition-colors"
                      >
                        → {lnk.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[0.6rem] tracking-[0.06em] text-[var(--color-gold)] border border-[var(--color-border)] px-2.5 py-1 rounded-[2px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
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
            Open to{" "}
            <strong className="text-[var(--color-cream)] font-medium">Full Stack</strong>{" "}
            or{" "}
            <strong className="text-[var(--color-cream)] font-medium">Frontend Developer</strong>{" "}
            roles focused on impact-driven engineering. I believe great software is
            built at the intersection of clean code, thoughtful UX, and relentless
            iteration.
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
          Skills
        </h2>
      </Reveal>

      <div className="flex flex-wrap gap-3">
        {SKILLS.map((s, i) => (
          <Reveal key={s} as="span" delay={i * 30}>
            <span className="font-mono text-[0.72rem] tracking-[0.06em] text-[var(--color-cream-2)] border border-[var(--color-border)] px-5 py-2.5 rounded-full bg-[var(--color-surface)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-300 cursor-default select-none">
              {s}
            </span>
          </Reveal>
        ))}
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
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
