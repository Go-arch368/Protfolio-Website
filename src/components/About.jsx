import Reveal from "./Reveal";
import { ABOUT_STATS, UPSKILLING } from "../data";

export default function About() {
  return (
    <section id="about" className="border-t border-[var(--color-border)] py-24 md:py-32 px-6 md:px-10 max-w-[1160px] mx-auto">
      <Reveal>
        <span className="block font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-gold)] mb-5">
          About Me
        </span>
        <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-light tracking-tight text-[var(--color-cream)] mb-16">
          Who I am
        </h2>
      </Reveal>

      {/* 2-column */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 mb-16">

        {/* LEFT — Photo + Bio */}
        <Reveal className="flex flex-col gap-8">
          {/* Photo */}
          <div className="flex items-center gap-6">
            <div className="w-[90px] h-[90px] rounded-full p-[2.5px] bg-[var(--color-gold)] flex-shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-[var(--color-surface)]">
                <img
                  src="/profile.jpg"
                  alt="Gowtham T"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div>
              <p className="font-serif text-[1.35rem] font-normal text-[var(--color-cream)] leading-tight">Gowtham T</p>
              <p className="font-mono text-[0.72rem] text-[var(--color-cream-3)] mt-1">Full Stack Developer · Coimbatore, India</p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4">
            <p className="font-mono text-[0.82rem] text-[var(--color-cream-2)] leading-[1.9]">
              Full Stack Developer with 1.5 years of professional experience building scalable web applications across the MERN stack with Next.js. Delivered production-grade features across three projects — a B2B marketplace (DistrictBusiness), a SaaS conversational dashboard (Zotly), and an enterprise Microfrontend system (Claritev).
            </p>
            <p className="font-mono text-[0.82rem] text-[var(--color-cream-2)] leading-[1.9]">
              Open to <strong className="text-[var(--color-cream)] font-medium">Full Stack</strong> or{" "}
              <strong className="text-[var(--color-cream)] font-medium">Frontend Developer</strong> roles focused on impact-driven engineering.
            </p>
          </div>
        </Reveal>

        {/* RIGHT — Stat boxes */}
        <div className="grid grid-cols-2 gap-4 self-start">
          {ABOUT_STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="border border-[var(--color-border)] rounded-[4px] p-6 hover:bg-[var(--color-surface)] hover:border-[var(--color-border-strong)] transition-all duration-300">
                <span className="font-serif text-[2.2rem] font-light text-[var(--color-gold)] leading-none block">
                  {s.value}
                </span>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-[var(--color-cream-3)] mt-2 block leading-snug">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Currently upskilling row */}
      <Reveal>
        <div className="border-t border-[var(--color-border)] pt-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-cream-3)] whitespace-nowrap">
            Currently upskilling →
          </span>
          <div className="flex flex-wrap gap-3">
            {UPSKILLING.map((u, i) => (
              <span
                key={u}
                className="font-mono text-[0.68rem] tracking-[0.06em] px-4 py-2 border border-[var(--color-border-strong)] text-[var(--color-gold)] rounded-[2px] hover:bg-[var(--color-gold-bg)] transition-colors duration-300"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {u}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
