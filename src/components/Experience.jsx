import Reveal from "./Reveal";
import { EXPERIENCE } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[var(--color-border)] py-24 md:py-32 px-6 md:px-10 max-w-[1160px] mx-auto"
    >
      <Reveal>
        <span className="block font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-gold)] mb-5">
          Work Experience
        </span>
        <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-light tracking-tight text-[var(--color-cream)] mb-16">
          Where I've worked
        </h2>
      </Reveal>

      {/* Timeline */}
      <div className="relative">
        {/* Gold vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[var(--color-border)] ml-[6px]" />

        {EXPERIENCE.map((exp, ei) => (
          <Reveal key={exp.company} delay={ei * 100} className="relative pl-12 md:pl-14 pb-16 last:pb-0">
            {/* Timeline dot */}
            <div className="absolute left-0 top-1.5 w-[13px] h-[13px] rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-bg)]" />

            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-baseline gap-3 mb-1">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-gold)]">
                  {exp.period}
                </span>
                <span className="font-mono text-[0.6rem] text-[var(--color-cream-3)]">
                  · {exp.duration} · Team: {exp.team}
                </span>
              </div>
              <h3 className="font-serif text-[1.6rem] font-normal tracking-tight text-[var(--color-cream)] leading-tight">
                {exp.role}
              </h3>
              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.78rem] text-[var(--color-cream-2)] hover:text-[var(--color-gold)] transition-colors duration-300 mt-1 inline-block"
              >
                {exp.company} ↗
              </a>
            </div>

            {/* Project bullets */}
            <div className="space-y-8">
              {exp.projects.map((proj, pi) => (
                <Reveal key={proj.name} delay={pi * 100}>
                  <div className="border border-[var(--color-border)] rounded-[4px] p-6 md:p-8 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface)] transition-all duration-300">
                    {/* Project header */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-gold-dim)]">
                        0{pi + 1}
                      </span>
                      <span className="w-4 h-[0.5px] bg-[var(--color-border)]" />
                      <h4 className="font-serif text-[1.25rem] text-[var(--color-cream)] font-normal">
                        {proj.name}
                      </h4>
                      <span className="font-mono text-[0.6rem] text-[var(--color-cream-3)]">
                        · {proj.subtitle}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-mono text-[0.78rem] text-[var(--color-cream-2)] leading-[1.8] mb-5">
                      {proj.desc}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {proj.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[0.6rem] tracking-[0.06em] text-[var(--color-gold)] border border-[var(--color-border)] px-2.5 py-1 rounded-[2px]"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
