# Learning Tool

An interactive web app for learning modern JavaScript topics - **React**, **Redux**, and **Node.js** - through short explanations, real syntax-highlighted code, and live, editable demos you can play with right in the page.

## Features

- 📚 **Structured lessons** - each topic covers core concepts, a full worked example, and a getting-started checklist
- 🕹️ **Live demos** - click through interactive widgets (a counter, a stopwatch, a simulated HTTP server, an event loop visualizer, ...) that show the concept in action, not just in prose
- 🧭 **Step-by-step code walkthroughs** - click a step to highlight exactly which lines of a realistic example it's talking about
- 🌗 **Light/dark theme**, data-driven content, and a small footprint (no backend required)

## Topics

| Topic | What you'll learn |
| --- | --- |
| **React** | Components, JSX, props, state, hooks, and performance with `memo` |
| **Redux** | Actions, reducers, `configureStore`, `createSlice`, and async thunks |
| **Node.js** | The runtime and event loop, modules, the built-in `http` module, and streams |

## Tech Stack

- [React 19](https://react.dev/) + [React Router](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/) / [React Redux](https://react-redux.js.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Vite](https://vite.dev/) for dev/build tooling, [oxlint](https://oxc.rs/docs/guide/usage/linter.html) for linting

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`).

Other useful scripts, run from `frontend/`:

```bash
npm run build    # production build, output to frontend/dist
npm run preview  # preview the production build locally
npm run lint     # lint with oxlint
```

## Project Structure

```
frontend/
└── src/
    ├── components/          # Shared UI (Header, Footer, CodeBlock, ...)
    │   ├── node-demos/       # Interactive demos for the Node.js page
    │   ├── react-demos/      # Interactive demos for the React page
    │   └── redux-demos/      # Interactive demos for the Redux page
    ├── data/                 # JSON content that drives each lesson
    │   ├── learningContent.json  # Topics shown on the home page
    │   ├── nodeContent.json
    │   ├── reactContent.json
    │   └── reduxContent.json
    ├── pages/
    │   ├── Main.jsx          # Home page, lists topics
    │   └── learning/         # One page per topic (Node.jsx, React.jsx, Redux.jsx)
    ├── redux/                # Redux store + slices used by the Redux demos
    ├── App.jsx               # Routes
    └── main.jsx              # Entry point
```

Lesson content lives in JSON so the copy can change without touching component code; the interactive demos are real, hand-written components mapped to a lesson's "practice topics" by title.

## Adding a New Topic

1. Add an entry to `src/data/learningContent.json` so it shows up on the home page.
2. Create a `src/data/<topic>Content.json` file with the same shape as the existing ones (`introduction`, `coreConcepts`, `gettingStarted`, `practiceTopics`, `fullExample`, ...).
3. Build any interactive demos in a new `src/components/<topic>-demos/` folder.
4. Create `src/pages/learning/<Topic>.jsx`, following the pattern in `Node.jsx`, `React.jsx`, or `Redux.jsx`.
5. Register the route in `src/App.jsx` and add a link in `src/components/Header.jsx`.

## License

No license has been specified for this project yet.
