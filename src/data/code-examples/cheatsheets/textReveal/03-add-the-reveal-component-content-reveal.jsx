// src/components/motion/Reveal.jsx
import useScrollReveal from "../../hooks/useScrollReveal";

function Reveal({
  children,
  as: Tag = "div",
  direction = "up",
  variant = "default",
  index = 0,
  className = "",
  ...rest
}) {
  const { ref, isVisible } = useScrollReveal();

  
if (variant === "fade") {
    return (
      <Tag
        ref={ref}
        className={`reveal-fade ${isVisible ? "is-visible" : ""} ${className}`}
        style={{ "--stagger-index": index }}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
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
