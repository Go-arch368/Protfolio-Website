import { useEffect, useRef } from "react";
import { SKILLS } from "../data";

function SkillTag({ label, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          io.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const isLearning = label === "Currently Learning";

  return (
    <span
      ref={ref}
      className={`skill-tag font-mono text-[0.72rem] tracking-[0.05em] px-4 py-2 rounded-full border cursor-default select-none ${
        isLearning
          ? "border-[var(--color-gold)] text-[var(--color-gold)] bg-[var(--color-gold-bg)]"
          : "border-[var(--color-border)] text-[var(--color-cream-2)] bg-[var(--color-surface)]"
      }`}
    >
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-[var(--color-border)] py-24 md:py-32 px-6 md:px-10 max-w-[1160px] mx-auto"
    >
      <div className="reveal mb-16" ref={(() => {
        const r = { current: null };
        return (el) => {
          if (el && !r.current) {
            r.current = el;
            const io = new IntersectionObserver(([e]) => {
              if (e.isIntersecting) { el.classList.add("visible"); io.unobserve(el); }
            }, { threshold: 0.08 });
            io.observe(el);
          }
        };
      })()}>
        <span className="block font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-gold)] mb-5">
          Expertise
        </span>
        <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-light tracking-tight text-[var(--color-cream)]">
          Skills & Stack
        </h2>
      </div>

      <div className="space-y-10">
        {SKILLS.map((cat, ci) => {
          const isLearning = cat.category === "Currently Learning";
          return (
            <div
              key={cat.category}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 items-start border-b border-[var(--color-border)] pb-8 last:border-b-0"
            >
              {/* Category label */}
              <span
                className={`font-mono text-[0.65rem] uppercase tracking-[0.16em] pt-2 ${
                  isLearning ? "text-[var(--color-gold)]" : "text-[var(--color-cream-3)]"
                }`}
              >
                {cat.category}
              </span>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((s, si) => (
                  <SkillTag
                    key={s}
                    label={s}
                    delay={(ci * 40) + (si * 30)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
