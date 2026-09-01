import{a as e,i as t}from"./TextReveal-BmuH47v_.js";import{t as n}from"./CheatSheetLayout-BH6MCR61.js";var r={title:`Text Reveal & Content Reveal Cheat Sheet`,introduction:{heading:`Scroll-Triggered Text & Content Reveals`,description:`A drop-in scroll-reveal system for React: a <Reveal> component that fades/slides any block of content into view once it scrolls onto the screen, and a <TextReveal> component that animates a heading in word-by-word. Both are built on a single IntersectionObserver-based hook, cost nothing while off-screen, fire once per element, and automatically respect prefers-reduced-motion. This is framework-light - it only needs React and plain CSS, so it drops into any React project whether or not you're using Tailwind.`},prerequisites:[`A React 18+ project (Vite, CRA, Next.js client components, etc.)`,`Comfortable adding a couple of small hook files and a CSS file to your project`,`No animation library required - this uses the native IntersectionObserver API and CSS transitions only`],steps:[{id:1,title:`Add the Reduced-Motion Hook`,description:`Every reveal checks this first. It tracks the OS-level prefers-reduced-motion setting and stays in sync if the user flips it mid-session, so reveals can skip straight to their end state for anyone who's asked for less motion.`,code:`// src/hooks/useReducedMotion.js
import { useEffect, useState } from "react";

function useReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e) => setReduced(e.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return reduced;
}

export default useReducedMotion;`,note:`Keep this as its own hook - both Reveal and TextReveal (and any future motion component) share it, so the reduced-motion check only has to be written once.`},{id:2,title:`Add the useScrollReveal Hook`,description:`This is the engine behind both components. It watches an element with an IntersectionObserver, flips isVisible to true the moment it scrolls into the viewport, and disconnects immediately after - reveals are a one-time entrance, not something that re-triggers every time someone scrolls past. With reduced motion on, isVisible just starts true so the element renders in its final state right away.`,code:`// src/hooks/useScrollReveal.js
import { useEffect, useRef, useState } from "react";
import useReducedMotion from "./useReducedMotion";

function useScrollReveal({ threshold = 0.2, rootMargin = "0px 0px -10% 0px" } = {}) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, threshold, rootMargin]);

  return { ref, isVisible };
}

export default useScrollReveal;`,note:`rootMargin: "0px 0px -10% 0px" shrinks the bottom of the viewport by 10% before counting as "intersecting", so elements reveal a little before they'd otherwise hit the very edge of the screen - tune this per project if you want reveals to fire earlier or later.`},{id:3,title:`Add the Reveal Component (content reveal)`,description:"Wraps any block of content - a card, a section, a list item - and adds the classes that drive the CSS animation in the next step. `direction` picks which way it travels in from (up/down/left/right/scale), and `index` feeds a --stagger-index CSS variable so a list of these staggers automatically when their shared parent has the .stagger-children class.",code:`// src/components/motion/Reveal.jsx
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
        className={\`reveal-fade \${isVisible ? "is-visible" : ""} \${className}\`}
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
      className={\`reveal reveal-\${direction} \${isVisible ? "is-visible" : ""} \${className}\`}
      style={{ "--stagger-index": index }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;`,highlightLines:[]},{id:4,title:`Add the TextReveal Component (word-by-word text reveal)`,description:`Meant for hero headings and section titles, not long body copy. It splits the text into words, clips each one inside an overflow-hidden wrapper, and animates them into place left-to-right with a short per-word delay once the heading scrolls into view.`,code:`// src/components/motion/TextReveal.jsx
import useScrollReveal from "../../hooks/useScrollReveal";

function TextReveal({ text, as: Tag = "h2", className = "", wordDelay = 40 }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.4 });
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span
            key={i}
            style={{ overflow: "hidden", display: "inline-block" }}
          >
            <span
              className={\`text-reveal-piece \${isVisible ? "is-visible" : ""}\`}
              style={{ transitionDelay: \`\${i * wordDelay}ms\` }}
            >
              {word}
              {i < words.length - 1 ? "\\u00A0" : ""}
            </span>
          </span>
        ))}
      </span>
    </Tag>
  );
}

export default TextReveal;`,note:`Splitting text into separate spans breaks word boundaries for some screen readers, so the full, untouched string is also rendered via aria-label on the outer tag, and the split-up visual copy is marked aria-hidden. Assistive tech reads the real sentence; sighted users see the animated one.`},{id:5,title:`Add the CSS: Tokens, Reveal & Text-Reveal Rules`,description:`This is the trimmed reveal-and-text-reveal slice of a CSS file (import it once, e.g. from your app's root component or main entry file). It defines the timing/easing tokens both components rely on, the .reveal base state plus its directional variants, the .text-reveal-piece states, and a media query that strips the motion out for prefers-reduced-motion while keeping a plain opacity fade so state changes are still perceivable.`,code:`/* src/styles/reveal.css */
:root {
  --duration-base: 280ms; /* used for the reduced-motion opacity fallback */
  --duration-moderate: 420ms; /* reveal + text-reveal transition length */
  --ease-emerge: cubic-bezier(0.16, 1, 0.3, 1); /* fast start, soft landing */
  --reveal-distance: 24px; /* how far content travels in from */
}

/* ---- Text reveal (per word/char, driven by <TextReveal>) ---- */
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

/* ---- Content reveal (driven by <Reveal>) ---- */
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

/* Stagger children of a revealed container - pair with the
   --stagger-index custom property Reveal sets inline per child. */
.stagger-children > * {
  transition-delay: calc(var(--stagger-index, 0) * 70ms);
}

/* ---- Reduced motion: keep the fade, drop the travel ---- */
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
    transform: none;
  }
}

/* ---- Reveal variant: fading ---- */
.reveal-fade {
  opacity: 0.2;
  transition: opacity var(--duration-moderate) var(--ease-emerge);
  will-change: opacity;
}
.reveal-fade.is-visible {
  opacity: 1;
  will-change: auto;
}

@media (prefers-reduced-motion: reduce) {
  .reveal-fade {
    transition: opacity var(--duration-base) linear;
  }
}`,note:`If your project already has a broader design-token system (durations/easings defined elsewhere), just add the .reveal*, .text-reveal-piece, .stagger-children, and reduced-motion rules - skip redeclaring tokens you already have.`},{id:6,title:`Import the CSS Once`,description:`Import the stylesheet in your app's entry point so the classes are available everywhere.`,code:`// src/main.jsx (or App.jsx)
import "./styles/reveal.css";`},{id:7,title:`Use TextReveal for Headings`,description:`Drop it in wherever you'd normally put an <h1>/<h2> - pass the heading text as a prop instead of as children, since the component needs the raw string to split into words.`,code:`import TextReveal from "./components/motion/TextReveal";

function Hero() {
  return (
    <TextReveal
      as="h1"
      text="Welcome to the Playground"
      className="text-4xl font-bold"
    />
  );
}`},{id:8,title:`Use Reveal for Content Blocks`,description:`Wrap a card, section, or any element you want to animate in on scroll. For a grid or list of items, add .stagger-children to the parent and pass an incrementing index to each Reveal so they cascade in one after another instead of all firing at once.`,code:`import Reveal from "./components/motion/Reveal";

function FeatureGrid({ items }) {
  return (
    <div className="stagger-children grid grid-cols-2 gap-8">
      {items.map((item, i) => (
        <Reveal key={item.id} index={i % 4} direction="up">
          <div className="card">{item.title}</div>
        </Reveal>
      ))}
    </div>
  );
}`,highlightLines:[]}],whatYouMightBeMissing:{heading:`Common Gotchas`,categories:[{title:`Reveal never fires`,items:[`The wrapped element (or a parent) has display: contents or is unmounted/re-mounted on every render, which resets the observer before it can fire`,`The element is taller than the viewport and never fully satisfies the threshold - lower threshold (e.g. 0.1) for very tall sections`,`index is only for the --stagger-index delay, not for keys - forgetting a stable key (e.g. an item id) on repeated <Reveal> elements can cause remounts that restart the animation`]},{title:`Text reveal looks broken`,items:[`Passing JSX children instead of a text prop - TextReveal needs a plain string so it can call .split(" ")`,`Using it on long paragraphs - it's designed for short headings; word-by-word staggering on body copy reads as slow and gimmicky`,`Forgetting overflow-hidden on the per-word wrapper (already included in the component) if you customize the markup - without it words slide in from below the whole viewport instead of clipping cleanly`]},{title:`Accessibility`,items:[`Always keep the aria-hidden split copy plus the aria-label with the real string - some screen readers read split <span> content word-by-fragment otherwise`,`Never skip the prefers-reduced-motion handling - for some users animated motion causes real discomfort, not just preference`]}]},gettingStarted:{heading:`Quick Start Checklist`,steps:[`Add src/hooks/useReducedMotion.js and src/hooks/useScrollReveal.js`,`Add src/components/motion/Reveal.jsx and TextReveal.jsx`,`Add src/styles/reveal.css and import it once from your entry file`,`Use <TextReveal text="..." as="h1" /> for hero/section headings`,`Wrap cards/sections in <Reveal> and add .stagger-children to a shared parent for cascading grids/lists`]}},i={title:`Text Reveal & Content Reveal Cheat Sheet`,introduction:{heading:`Scroll-Triggered Text & Content Reveals`,description:`Ett drop-in scroll-reveal-system för React: en <Reveal>-komponent som fadar/glider in vilket block av innehåll som helst i vyn när det scrollas in på skärmen, och en <TextReveal>-komponent som animerar en rubrik ord-för-ord. Båda är byggda på en enda IntersectionObserver-baserad hook, kostar ingenting när de är off-screen, triggas en gång per element och respekterar automatiskt prefers-reduced-motion. Detta är ramverk-lätt - det behöver bara React och vanlig CSS, så det passar in i vilket React-projekt som helst oavsett om du använder Tailwind eller inte.`},prerequisites:[`Ett React 18+ projekt (Vite, CRA, Next.js client components, etc.)`,`Bekväm med att lägga till ett par små hook-filer och en CSS-fil i ditt projekt`,`Inget animationsbibliotek krävs - detta använder native IntersectionObserver API och endast CSS-transitions`],steps:[{id:1,title:`Lägg till Reduced-Motion Hook`,description:`Varje reveal kontrollerar detta först. Den spårar OS-nivå prefers-reduced-motion-inställningen och håller sig synkroniserad om användaren ändrar den mitt i sessionen, så reveals kan hoppa direkt till sitt sluttillstånd för alla som har bett om mindre rörelse.`,code:`// src/hooks/useReducedMotion.js
import { useEffect, useState } from "react";

function useReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e) => setReduced(e.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return reduced;
}

export default useReducedMotion;`,note:`Behåll detta som en egen hook - både Reveal och TextReveal (och alla framtida rörelsekomponenter) delar den, så reduced-motion-kontrollen behöver bara skrivas en gång.`},{id:2,title:`Lägg till useScrollReveal Hook`,description:`Detta är motorn bakom båda komponenterna. Den tittar på ett element med en IntersectionObserver, vänder isVisible till true i samma ögonblick som det scrollas in i viewporten, och kopplar från omedelbart efter - reveals är en engångs-entré, inte något som triggas om varje gång någon scrollar förbi. Med reducerad rörelse på startar isVisible bara som true så elementet renderas i sitt slutgiltiga tillstånd direkt.`,code:`// src/hooks/useScrollReveal.js
import { useEffect, useRef, useState } from "react";
import useReducedMotion from "./useReducedMotion";

function useScrollReveal({ threshold = 0.2, rootMargin = "0px 0px -10% 0px" } = {}) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, threshold, rootMargin]);

  return { ref, isVisible };
}

export default useScrollReveal;`,note:`rootMargin: "0px 0px -10% 0px" krymper viewportens botten med 10% innan den räknas som "intersecting", så element reveals lite innan de annars skulle nå kanten av skärmen - justera detta per projekt om du vill att reveals ska trigga tidigare eller senare.`},{id:3,title:`Lägg till Reveal-komponenten (innehålls-reveal)`,description:"Wrappar vilket innehållsblock som helst - ett kort, en sektion, ett listobjekt - och lägger till klasserna som driver CSS-animationen i nästa steg. `direction` väljer vilken väg den reser in från (up/down/left/right/scale), och `index` matar en --stagger-index CSS-variabel så en lista av dessa automatiskt stagger när deras delade förälder har .stagger-children-klassen.",code:`// src/components/motion/Reveal.jsx
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
      className={\`reveal reveal-\${direction} \${isVisible ? "is-visible" : ""} \${className}\`}
      style={{ "--stagger-index": index }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;`,highlightLines:[12,15]},{id:4,title:`Lägg till TextReveal-komponenten (ord-för-ord text reveal)`,description:`Avsedd för hero-rubriker och sektionstitlar, inte långt brödtext. Den delar upp texten i ord, clippar varje ett inuti en overflow-hidden wrapper, och animerar dem på plats från vänster till höger med en kort fördröjning per ord när rubriken scrollar in i vyn.`,code:`// src/components/motion/TextReveal.jsx
import useScrollReveal from "../../hooks/useScrollReveal";

function TextReveal({ text, as: Tag = "h2", className = "", wordDelay = 40 }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.4 });
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span
            key={i}
            style={{ overflow: "hidden", display: "inline-block" }}
          >
            <span
              className={\`text-reveal-piece \${isVisible ? "is-visible" : ""}\`}
              style={{ transitionDelay: \`\${i * wordDelay}ms\` }}
            >
              {word}
              {i < words.length - 1 ? "\\u00A0" : ""}
            </span>
          </span>
        ))}
      </span>
    </Tag>
  );
}

export default TextReveal;`,note:`Att dela upp text i separata spans bryter ordgränser för vissa skärmläsare, så den fulla, orörda strängen renderas också via aria-label på den yttre taggen, och den uppdelade visuella kopian är markerad aria-hidden. Hjälpande teknologi läser den verkliga meningen; seende användare ser den animerade.`},{id:5,title:`Lägg till CSS: Tokens, Reveal & Text-Reveal-regler`,description:`Detta är den trimmade reveal-and-text-reveal-delen av en CSS-fil (importera den en gång, t.ex. från din apps rotkomponent eller huvudentry-fil). Den definierar timing/easing-tokens som båda komponenterna förlitar sig på, .reveal-basstaten plus dess riktningsvarianter, .text-reveal-piece-states, och en media query som tar bort rörelsen för prefers-reduced-motion medan den behåller en vanlig opacity-fade så state-ändringar fortfarande är märkbara.`,code:`/* src/styles/reveal.css */
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
}`,note:`Om ditt projekt redan har ett bredare design-token-system (durationer/easings definierade någon annanstans), lägg bara till .reveal*, .text-reveal-piece, .stagger-children och reduced-motion-reglerna - hoppa över att omdeklarera tokens du redan har.`},{id:6,title:`Importera CSS en gång`,description:`Importera stylesheetn i din apps entry point så klasserna är tillgängliga överallt.`,code:`// src/main.jsx (eller App.jsx)
import "./styles/reveal.css";`},{id:7,title:`Använd TextReveal för Rubriker`,description:`Släpp in den där du normalt skulle sätta en <h1>/<h2> - skicka rubrik-texten som en prop istället för som children, eftersom komponenten behöver den råa strängen för att dela upp i ord.`,code:`import TextReveal from "./components/motion/TextReveal";

function Hero() {
  return (
    <TextReveal
      as="h1"
      text="Välkommen till Playground"
      className="text-4xl font-bold"
    />
  );
}`},{id:8,title:`Använd Reveal för Innehållsblock`,description:`Wrappa ett kort, sektion eller vilket element du vill animera in på scroll. För ett rutnät eller lista av objekt, lägg till .stagger-children till föräldern och skicka ett inkrementande index till varje Reveal så de kaskaderar in en efter en istället för att alla trigga på en gång.`,code:`import Reveal from "./components/motion/Reveal";

function FeatureGrid({ items }) {
  return (
    <div className="stagger-children grid grid-cols-2 gap-8">
      {items.map((item, i) => (
        <Reveal key={item.id} index={i % 4} direction="up">
          <div className="card">{item.title}</div>
        </Reveal>
      ))}
    </div>
  );
}`,highlightLines:[5,7]}],whatYouMightBeMissing:{heading:`Vanliga Fallgropar`,categories:[{title:`Reveal triggar aldrig`,items:[`Det wrappade elementet (eller en förälder) har display: contents eller är unmounted/re-mounted på varje render, vilket återställer observern innan den kan trigga`,`Elementet är högre än viewporten och uppfyller aldrig helt tröskelvärdet - sänk threshold (t.ex. 0.1) för mycket höga sektioner`,`index är bara för --stagger-index-fördröjningen, inte för keys - att glömma en stabil key (t.ex. ett item-id) på upprepade <Reveal>-element kan orsaka remounts som startar om animationen`]},{title:`Text reveal ser trasig ut`,items:[`Skicka JSX children istället för en text-prop - TextReveal behöver en vanlig sträng så den kan anropa .split(" ")`,`Använda den på långa stycken - den är designad för korta rubriker; ord-för-ord-staggering på brödtext läses som långsam och gimmickig`,`Glömma overflow-hidden på per-ord-wrappern (redan inkluderad i komponenten) om du anpassar markeringen - utan den glider ord in från under hela viewporten istället för att klippa rent`]},{title:`Tillgänglighet`,items:[`Behåll alltid aria-hidden split copy plus aria-label med den verkliga strängen - vissa skärmläsare läser split <span>-innehåll ord-för-fragment annars`,`Hoppa aldrig över prefers-reduced-motion-hanteringen - för vissa användare orsakar animerad rörelse verkligt obehag, inte bara preferens`]}]},gettingStarted:{heading:`Snabbstarts-checklista`,steps:[`Lägg till src/hooks/useReducedMotion.js och src/hooks/useScrollReveal.js`,`Lägg till src/components/motion/Reveal.jsx och TextReveal.jsx`,`Lägg till src/styles/reveal.css och importera den en gång från din entry-fil`,`Använd <TextReveal text="..." as="h1" /> för hero/sektionsrubriker`,`Wrappa kort/sektioner i <Reveal> och lägg till .stagger-children till en delad förälder för kaskaderande rutnät/listor`]}},a=t(),o={en:r,sv:i};function s(){let{i18n:t}=e(),r=o[t.language]||o.en;return(0,a.jsx)(n,{title:r.title,introduction:r.introduction,prerequisites:r.prerequisites,steps:r.steps,whatYouMightBeMissing:r.whatYouMightBeMissing,gettingStarted:r.gettingStarted,source:r.source})}export{s as default};