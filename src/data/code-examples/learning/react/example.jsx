import { useEffect, useState } from "react";

// A small presentational component - it only reads the "name" prop,
// it never touches state directly.
function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function App() {
  // useState gives this component its own piece of memory that
  // survives between re-renders.
  const [name, setName] = useState("Explorer");
  const [count, setCount] = useState(0);

  // useEffect runs after React commits this render to the screen.
  // Because count is in the dependency array, it only re-runs
  // when count actually changes.
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Greeting name={name} />

      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default App;
