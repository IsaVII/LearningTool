import SyntaxHighlightedCode from "./SyntaxHighlightedCode";

/**
 * Renders a block of code, colored to match VS Code's default "Dark+"
 * theme so keywords, strings, JSX tags, etc. are easy to tell apart at a
 * glance.
 *
 **/
function CodeBlock({ children, showLineNumbers = false, highlightLines = [] }) {
  const lines = Array.isArray(children)
    ? children
    : String(children ?? "").split("\n");
  const highlightSet = new Set(highlightLines);

  return (
    <pre className=" border border-line rounded p-4 overflow-x-auto text-sm font-mono whitespace-pre text-left">
      {/*
        NOTE: index.css has a global `code { display: inline-flex }` rule
        for inline code mentions in prose (e.g. <code>count</code>). That
        rule lives outside any Tailwind @layer, so it beats Tailwind
        utility classes like `block` regardless of specificity. Without
        this inline style override, this <code>'s children (one <div>
        per line) get laid out as flex-row items side by side instead of
        stacking - i.e. every line ends up on the same visual row.
      */}
      <code style={{ display: "block" }}>
        {lines.map((line, i) => {
          const lineNumber = i + 1;
          const isHighlighted = highlightSet.has(lineNumber);

          return (
            <div
              key={lineNumber}
              className={`flex w-full ${
                isHighlighted
                  ? "bg-white/10 -mx-4 px-4 border-l-2 border-accent"
                  : ""
              }`}
            >
              {showLineNumbers && (
                <span className="select-none text-right pr-4 mr-2 text-[#6e7681] w-7 shrink-0">
                  {lineNumber}
                </span>
              )}
              <span className="flex-1 block">
                <SyntaxHighlightedCode code={line.length ? line : " "} />
              </span>
            </div>
          );
        })}
      </code>
    </pre>
  );
}

export default CodeBlock;
