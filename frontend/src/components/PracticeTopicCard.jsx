import { useState } from "react";

function PracticeTopicCard({ title, description, demo }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-surface-alt border-l-4 border-accent rounded transition-all duration-300 hover:bg-surface-alt-hover">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left p-6 flex items-start justify-between gap-4"
        aria-expanded={open}
        disabled={!demo}
      >
        <span className="block">
          <span className="block m-0 mb-2 text-heading font-semibold">
            {title}
          </span>
          <span className="block text-sm text-muted">{description}</span>
        </span>

        {demo && (
          <span className="shrink-0 mt-1 text-sm font-medium text-accent whitespace-nowrap">
            {open ? "Hide ✕" : "Try it ▸"}
          </span>
        )}
      </button>

      {open && demo && <div className="px-6 pb-6">{demo}</div>}
    </div>
  );
}

export default PracticeTopicCard;
