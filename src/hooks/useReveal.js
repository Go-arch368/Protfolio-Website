import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to ref.current.
 * Adds "visible" class when element enters viewport.
 */
export default function useReveal(options = {}) {
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
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px", ...options }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
