import Reveal from "./Reveal";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section
      id="work"
      className="border-t border-[var(--color-border)] py-24 md:py-32 px-6 md:px-10 max-w-[1160px] mx-auto"
    >
      <Reveal>
        <span className="block font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-gold)] mb-5">
          Selected Projects
        </span>
        <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-light tracking-tight text-[var(--color-cream)] mb-16">
          Things I've built
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.num} delay={i * 120}>
            <article className="card-glow bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[4px] p-8 flex flex-col gap-5 relative overflow-hidden h-full border-t-[var(--color-gold)] border-t-2">

              {/* Number */}
              <span className="font-mono text-[0.62rem] tracking-[0.18em] text-[var(--color-gold-dim)]">
                {p.num}
              </span>

              {/* Title */}
              <h3 className="font-serif text-[1.5rem] font-normal tracking-tight text-[var(--color-cream)]">
                {p.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-[0.78rem] text-[var(--color-cream-2)] leading-[1.8] flex-1">
                {p.desc}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[0.58rem] tracking-[0.06em] text-[var(--color-gold)] border border-[var(--color-border)] px-2.5 py-1 rounded-[2px]"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Action links */}
              {p.links && (
                <div className="flex flex-wrap gap-2.5 pt-4 border-t border-[var(--color-border)]">
                  {p.links.map((lnk) => (
                    <a
                      key={lnk.url}
                      href={lnk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center font-mono text-[0.62rem] uppercase tracking-wider px-3.5 py-2.5 border border-[var(--color-border-strong)] text-[var(--color-cream-2)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] hover:bg-[var(--color-gold-bg)] rounded-[2px] transition-all duration-300"
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
}
