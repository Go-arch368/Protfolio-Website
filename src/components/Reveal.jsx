import useReveal from "../hooks/useReveal";

/** Generic fade-up reveal wrapper with configurable delay. */
export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
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
