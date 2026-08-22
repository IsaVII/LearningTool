import { memo, useEffect, useState } from "react";
import CodeBlock from "./CodeBlock";

function RenderCounter({ label }) {
  // Logging inside an effect (not during render) is a side effect done the
  // safe way: it runs after the commit, so it can never make render itself
  // impure or unpredictable.
  useEffect(() => {
    console.log(`${label} rendered`);
  });

  return (
    <div className="bg-surface rounded p-4 border border-line flex-1 min-w-[140px]">
      <p className="text-sm text-subtle mb-1">{label}</p>
      <p className="text-xs text-muted">check the console ↗</p>
    </div>
  );
}

const MemoRenderCounter = memo(RenderCounter);

function RenderCountDemo() {
  const [tick, setTick] = useState(0);

  return (
    <div className="bg-surface-alt border border-line rounded p-6">
      <p className="text-muted mb-4">
        Open your browser console, then click the button below. It only
        changes unrelated state in the parent - the plain child logs a new
        line on every click, but the <code>memo</code>-wrapped child stays
        silent because its own props never change.
      </p>

      <div className="flex flex-wrap gap-4 mb-4">
        <RenderCounter label="Without memo" />
        <MemoRenderCounter label="With React.memo" />
      </div>

      <button
        onClick={() => setTick((t) => t + 1)}
        className="bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition-opacity mb-4"
      >
        Trigger parent re-render ({tick})
      </button>

      <CodeBlock>{`const Child = memo(function Child({ label }) {
  useEffect(() => console.log(label + " rendered"));
  return <p>{label}</p>;
});`}</CodeBlock>
    </div>
  );
}

export default RenderCountDemo;
