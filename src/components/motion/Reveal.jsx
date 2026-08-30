import useScrollReveal from "../../hooks/useScrollReveal";

/**
 * Wraps any content so it reveals in as it scrolls into view.
 * `direction` picks which .reveal-* variant to use (up/down/left/right/
 * scale, from motion.css); `index` feeds --stagger-index so a list of
 * these staggers automatically when a shared parent has
 * .stagger-children (see TopicCard usage in Main.jsx).
 */
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
