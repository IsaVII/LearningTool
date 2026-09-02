// src/components/motion/Reveal.jsx
import useScrollReveal from "../../hooks/useScrollReveal";

function Reveal({
  children,
  as: Tag = "div",
  direction = "up",
  index = 0,
  className = "",
  ...rest
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${direction} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ "--stagger-index": index }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
