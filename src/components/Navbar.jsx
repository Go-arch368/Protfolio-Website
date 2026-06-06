import { useState, useEffect } from "react";
import { SOCIAL } from "../data";

const NAV_LINKS = [
  { label: "Work",       href: "#work"       },
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills"     },
  { label: "Contact",    href: "#contact"    },
];

/* SVG icons */
const IconGH = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default function Navbar({ scrollProgress }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Gold scroll progress bar — fixed at very top */}
      <div
        className="fixed top-0 left-0 z-[100] h-[2px] bg-[var(--color-gold)] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(10,10,10,0.92)] backdrop-blur-xl border-b border-[var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1160px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">

          {/* GT Logo */}
          <a
            href="#"
            className="font-serif text-[1.65rem] font-semibold text-[var(--color-gold)] tracking-wider hover:opacity-80 transition-opacity"
          >
            GT
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[var(--color-cream-2)] hover:text-[var(--color-gold)] gold-link transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
            {/* Resume button */}
            <a
              href={SOCIAL.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.68rem] uppercase tracking-[0.12em] px-5 py-2 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)] transition-all duration-300 rounded-[2px]"
            >
              Resume
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span className={`block w-[22px] h-[1px] bg-[var(--color-cream)] transition-all duration-300 origin-center ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block w-[22px] h-[1px] bg-[var(--color-cream)] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-[22px] h-[1px] bg-[var(--color-cream)] transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}>
          <nav className="flex flex-col gap-4 px-6 pb-6 pt-3 border-t border-[var(--color-border)] bg-[var(--color-bg)]">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-[0.8rem] uppercase tracking-[0.12em] text-[var(--color-cream-2)] hover:text-[var(--color-gold)] transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href={SOCIAL.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="font-mono text-[0.78rem] uppercase tracking-[0.1em] px-4 py-2.5 border border-[var(--color-gold)] text-[var(--color-gold)] text-center rounded-[2px] mt-2"
            >
              Resume
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
