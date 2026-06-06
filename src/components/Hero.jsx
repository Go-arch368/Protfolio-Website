import { useEffect, useRef, useState } from "react";
import { SOCIAL, STATS } from "../data";

/* SVG Icons */
const IconGH = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
const IconLI = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);
const IconMail = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

/* Animated counter that counts from 0 up to target on reveal */
function Counter({ target, suffix = "", decimal = false }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const end = target;
        const steps = 40;
        const increment = end / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= end) { setVal(end); clearInterval(timer); }
          else setVal(parseFloat(current.toFixed(1)));
        }, 35);
        io.unobserve(el);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  const display = decimal ? val.toFixed(1) : Math.round(val);
  return <span ref={ref}>{display}{suffix}</span>;
}

export default function Hero() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center px-6 md:px-10 max-w-[1160px] mx-auto relative pt-10 pb-24">

      {/* Open to work badge */}
      <div className="flex items-center gap-3 mb-10"
        style={{ animation: "heroLine 0.6s ease 0.1s both" }}>
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-green-500/25 bg-green-500/5 font-mono text-[0.62rem] uppercase tracking-wider text-green-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
          Open to Work
        </span>
      </div>

      {/* Two-column layout on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
        <div>
          {/* Headline — each line animates in */}
          <h1 className="font-serif italic text-[clamp(3rem,8vw,6rem)] font-light leading-[1.04] tracking-[-0.025em] text-[var(--color-cream)] mb-10">
            <span className="hero-line" style={{ animationDelay: "0.2s" }}>Building things</span>
            <span className="hero-line" style={{ animationDelay: "0.4s" }}>for the web,</span>
            <span className="hero-line text-[var(--color-gold)]" style={{ animationDelay: "0.6s" }}>
              thoughtfully<span className="cursor-blink">.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-mono text-[0.82rem] text-[var(--color-cream-2)] leading-[1.85] max-w-xl mb-12"
            style={{ animation: "heroLine 0.7s ease 0.8s both" }}
          >
            Full Stack Developer · React · Next.js · Node.js · MERN
            <br />
            1.5 years experience · Coimbatore, India
          </p>

          {/* CTAs + Social Icons */}
          <div
            className="flex flex-wrap items-center gap-5 mb-16"
            style={{ animation: "heroLine 0.7s ease 1s both" }}
          >
            <a
              href="#work"
              className="font-mono text-[0.72rem] uppercase tracking-[0.12em] px-7 py-3 bg-[var(--color-gold)] text-[var(--color-bg)] font-medium hover:bg-[#d4b45a] transition-colors duration-300 rounded-[2px]"
            >
              View My Work
            </a>
            <a
              href={SOCIAL.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.72rem] uppercase tracking-[0.12em] px-7 py-3 border border-[var(--color-border-strong)] text-[var(--color-gold)] hover:border-[var(--color-gold)] hover:bg-[var(--color-gold-bg)] transition-all duration-300 rounded-[2px]"
            >
              Download Resume ↗
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-5 border-l border-[var(--color-border)] pl-6 ml-1 h-8">
              {[
                { href: SOCIAL.github,   icon: <IconGH />,   label: "GitHub"   },
                { href: SOCIAL.linkedin, icon: <IconLI />,   label: "LinkedIn" },
                { href: SOCIAL.email,    icon: <IconMail />, label: "Email"    },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-[var(--color-cream-2)] hover:text-[var(--color-gold)] transition-colors duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Animated stat counters */}
          <div
            className="flex flex-wrap gap-8 md:gap-14"
            style={{ animation: "heroLine 0.7s ease 1.15s both" }}
          >
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-serif text-[2.2rem] font-light text-[var(--color-gold)] leading-none">
                  <Counter target={s.value} suffix={s.suffix} decimal={s.decimal} />
                </span>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--color-cream-3)] whitespace-pre-line leading-snug">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Photo */}
        <div
          className="flex justify-center lg:justify-end"
          style={{ animation: "heroLine 0.8s ease 0.5s both" }}
        >
          <div className="relative">
            {/* Gold ring */}
            <div className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full p-[3px] bg-[var(--color-gold)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[var(--color-surface)]">
                <img
                  src="/profile.jpg"
                  alt="Gowtham T"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            {/* Decorative corner dots */}
            <span className="absolute -top-2 -right-2 w-2.5 h-2.5 rounded-full bg-[var(--color-gold)] opacity-60" />
            <span className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full border border-[var(--color-gold)] opacity-40" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-6 md:left-10 flex items-center gap-3">
        <span className="block w-10 h-[0.5px] bg-[var(--color-cream-3)] relative overflow-hidden line-sweep" />
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[var(--color-cream-3)]">scroll</span>
      </div>
    </section>
  );
}
