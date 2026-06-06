import Reveal from "./Reveal";
import { SOCIAL } from "../data";

const CONTACT_CARDS = [
  {
    label: "Email",
    value: "gowthamtj0808@gmail.com",
    href:  "mailto:gowthamtj0808@gmail.com",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Go-arch368",
    href:  SOCIAL.github,
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "gowtham-t-015888225",
    href:  SOCIAL.linkedin,
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--color-border)] py-28 md:py-40 px-6 md:px-10 max-w-[1160px] mx-auto"
    >
      {/* Heading */}
      <div className="text-center mb-16 md:mb-20">
        <Reveal>
          <span className="block font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-gold)] mb-5">
            Get In Touch
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-serif italic text-[clamp(2.4rem,6vw,4.5rem)] font-light tracking-[-0.02em] leading-[1.1] text-[var(--color-cream)] mb-5">
            Have a project in mind?
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="font-mono text-[0.82rem] text-[var(--color-cream-3)]">
            Let's build something great together.
          </p>
        </Reveal>
      </div>

      {/* 3 contact cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        {CONTACT_CARDS.map((card, i) => (
          <Reveal key={card.label} delay={i * 100}>
            <a
              href={card.href}
              target={card.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-8 border border-[var(--color-border)] rounded-[4px] hover:border-[var(--color-gold)] hover:bg-[var(--color-surface)] transition-all duration-300 text-center group"
            >
              <span className="text-[var(--color-cream-3)] group-hover:text-[var(--color-gold)] transition-colors duration-300">
                {card.icon}
              </span>
              <div>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--color-cream-3)] block mb-1.5">
                  {card.label}
                </span>
                <span className="font-mono text-[0.78rem] text-[var(--color-cream-2)] group-hover:text-[var(--color-gold)] transition-colors duration-300 break-all">
                  {card.value}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {/* CTA button */}
      <Reveal delay={300}>
        <div className="text-center">
          <a
            href="mailto:gowthamtj0808@gmail.com"
            className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] px-10 py-4 bg-[var(--color-gold)] text-[var(--color-bg)] font-medium hover:bg-[#d4b45a] transition-colors duration-300 rounded-[2px]"
          >
            Send me an Email →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
