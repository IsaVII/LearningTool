import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

const TOPICS = [
  { to: "/javascript", label: "JavaScript Basics" },
  { to: "/typescript", label: "TypeScript Basics" },
  { to: "/git", label: "Git" },
  { to: "/http", label: "HTTP & Web APIs" },
  { to: "/node", label: "Node.js" },
  { to: "/react", label: "React" },
  { to: "/redux", label: "Redux" },
  { to: "/testing", label: "Unit Tests" },
];

function HomeIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 9.5V19a1 1 0 0 0 1 1H10a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V9.5" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const { pathname } = useLocation();

  // Close the menu whenever the route changes (e.g. a topic link was
  // clicked), so navigating away always leaves the menu tucked back in.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close on outside click or Escape, only while open.
  useEffect(() => {
    if (!menuOpen) return undefined;

    function handlePointerDown(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 bg-navbar text-white shadow-lg shadow-black/10 border-b border-white/10">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Brand */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 no-underline text-white"
        >
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-accent/20 text-accent transition-colors duration-200 group-hover:bg-accent/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M12 3 2 8l10 5 10-5-10-5Z" />
              <path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
            </svg>
          </span>
          <h1 className="m-0 text-xl font-semibold tracking-tight">
            Learning Tool
          </h1>
        </Link>

        {/* Controls */}
        <div className="flex items-center gap-1">
          <Link
            to="/"
            aria-label="Home"
            aria-current={isHome ? "page" : undefined}
            className={`grid place-items-center w-9 h-9 rounded-full transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 ${
              isHome ? "text-accent" : "text-white"
            }`}
            title="Home"
          >
            <HomeIcon />
          </Link>

          <span className="w-px h-6 bg-white/15 mx-1" aria-hidden="true" />

          <ThemeToggle />

          <span className="w-px h-6 bg-white/15 mx-1" aria-hidden="true" />

          {/* Hamburger */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open topics menu"}
            aria-expanded={menuOpen}
            aria-controls="topics-menu"
            className="relative grid place-items-center w-9 h-9 rounded-full transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            <span className="relative block w-5 h-4" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${
                  menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-5 bg-current rounded-full transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${
                  menuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/30 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Topics dropdown */}
      <nav
        id="topics-menu"
        ref={menuRef}
        aria-label="Topics"
        className={`absolute right-4 top-full mt-2 w-64 origin-top-right rounded-xl border border-white/10 bg-navbar shadow-xl shadow-black/20 transition-all duration-200 ${
          menuOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
        }`}
      >
        <p className="px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-white/40">
          Topics
        </p>
        <ul className="list-none m-0 p-2 flex flex-col">
          {TOPICS.map((topic) => (
            <li key={topic.to}>
              <NavLink
                to={topic.to}
                className={`group flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-[15px] hover:bg-white/10 ${
                  pathname === topic.to ? "bg-accent/15" : ""
                }`}
              >
                {topic.label}
                <ChevronIcon />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
