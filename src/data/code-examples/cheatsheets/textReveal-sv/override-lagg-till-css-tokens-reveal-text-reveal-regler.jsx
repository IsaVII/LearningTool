/* src/styles/reveal.css */
:root {
  --duration-base: 280ms; /* används för reduced-motion opacity fallback */
  --duration-moderate: 420ms; /* reveal + text-reveal transition-längd */
  --ease-emerge: cubic-bezier(0.16, 1, 0.3, 1); /* snabb start, mjuk landning */
  --reveal-distance: 24px; /* hur långt innehåll reser in från */
}

/* ---- Text reveal (per ord/char, driven av <TextReveal>) ---- */
.text-reveal-piece {
  display: inline-block;
  transform: translateY(110%);
  opacity: 0;
  transition:
    transform var(--duration-moderate) var(--ease-emerge),
    opacity var(--duration-moderate) var(--ease-emerge);
}
.text-reveal-piece.is-visible {
  transform: translateY(0);
  opacity: 1;
}

/* ---- Content reveal (driven av <Reveal>) ---- */
.reveal {
  opacity: 0;
  transition:
    opacity var(--duration-moderate) var(--ease-emerge),
    transform var(--duration-moderate) var(--ease-emerge);
  will-change: opacity, transform;
}
.reveal-up {
  transform: translateY(var(--reveal-distance));
}
.reveal-down {
  transform: translateY(calc(var(--reveal-distance) * -1));
}
.reveal-left {
  transform: translateX(var(--reveal-distance));
}
.reveal-right {
  transform: translateX(calc(var(--reveal-distance) * -1));
}
.reveal-scale {
  transform: scale(0.96);
}
.reveal.is-visible {
  opacity: 1;
  transform: translate(0, 0) scale(1);
  will-change: auto;
}

/* Stagger barn till en revealed container - para ihop med
   --stagger-index custom property som Reveal sätter inline per barn. */
.stagger-children > * {
  transition-delay: calc(var(--stagger-index, 0) * 70ms);
}

/* ---- Reduced motion: behåll fade, släpp resandet ---- */
@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-moderate: 1ms;
  }

  .reveal,
  .reveal-up,
  .reveal-down,
  .reveal-left,
  .reveal-right,
  .reveal-scale {
    transform: none !important;
    transition: opacity var(--duration-base) linear;
  }

  .text-reveal-piece {
    transform: none !important;
    transition: opacity var(--duration-base) linear;
  }
}
