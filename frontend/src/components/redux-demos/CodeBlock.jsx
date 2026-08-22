function CodeBlock({ children }) {
  return (
    <pre className="bg-surface border border-line rounded p-4 overflow-x-auto text-sm font-mono text-heading-alt whitespace-pre">
      {children}
    </pre>
  );
}

export default CodeBlock;
