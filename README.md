# Learning Tool

An interactive web app for learning modern web development - from **JavaScript** and **TypeScript** fundamentals up through **Git**, **HTTP**, **Node.js**, **React**, **Redux**, and **Testing** - through short explanations, real syntax-highlighted code, and live, editable demos you can play with right in the page.

Topics are laid out in a suggested learning order, and you can check off topics and individual sub-topics as you go - your progress is saved in your browser and picks up right where you left off.

## Features

- 📚 **Structured lessons** - each topic covers core concepts, a full worked example, and a getting-started checklist
- 🕹️ **Live demos** - click through interactive widgets (a counter, a stopwatch, a simulated HTTP server, an event loop visualizer, ...) that show the concept in action, not just in prose
- 🧭 **Step-by-step code walkthroughs** - click a step to highlight exactly which lines of a realistic example it's talking about
- ✅ **Progress tracking** - check off topics on the home page and individual sub-topics/demos inside each lesson; progress is saved in a cookie, so it's remembered across visits without needing an account or backend
- 🌗 **Light/dark theme**, data-driven content, and a small footprint (no backend required)

## Topics

Topics are ordered to roughly match how you'd want to learn them - language fundamentals first, then the tools and concepts that build on top of them.

| #   | Topic                                 | What you'll learn                                                                                 |
| --- | ------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 1   | **JavaScript Basics** _(coming soon)_ | Variables & scope, functions & closures, arrays/objects, destructuring, promises, and async/await |
| 2   | **TypeScript Basics** _(coming soon)_ | Static types, interfaces, generics, and typing functions/components on top of JavaScript          |
| 3   | **Git**                               | Cloning, staging & committing, branching & merging, rebase, stash, and resolving conflicts        |
| 4   | **HTTP & Web APIs**                   | Methods & status codes, headers & cookies, CORS, REST/JSON, fetch, auth, WebSockets, and SSE      |
| 5   | **Node.js**                           | The runtime and event loop, modules, the built-in `http` module, and streams                      |
| 6   | **React**                             | Components, JSX, props, state, hooks, and performance with `memo`                                 |
| 7   | **Redux**                             | Actions, reducers, `configureStore`, `createSlice`, and async thunks                              |
| 8   | **Unit Tests**                        | Unit, integration, and component testing, mocking, spies, fixtures, and TDD                       |

> The **JavaScript Basics** and **TypeScript Basics** pages are currently placeholders describing what's planned - full lessons and demos are coming.

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

## Progress Tracking

Every topic on the home page and every sub-topic (practice topic/demo) inside a lesson has a checkbox next to it. Checking one off:

- Marks it as done with a visual checkmark
- Is saved automatically to a cookie (`learningToolProgress`) in your browser, so it's remembered the next time you visit
- Doesn't require an account, sign-in, or backend - everything stays on your machine

Clearing your browser cookies (or the site's cookies specifically) resets your progress. There's no sync between devices/browsers, since nothing is sent to a server.

Under the hood this lives in `src/context/ProgressContext.jsx`, which reads/writes the cookie via the small helpers in `src/utils/cookies.js` and exposes a `useProgress()` hook (`isTopicDone`, `toggleTopic`, `isSubtopicDone`, `toggleSubtopic`, ...) to any component that needs it.

## Project Structure

```
  src/
    ├── components/          # Shared UI (Header, Footer, CodeBlock, TopicCard, ...)
    │   ├── git-demos/         # Interactive demos for the Git page
    │   ├── http-demos/        # Interactive demos for the HTTP page
    │   ├── node-demos/        # Interactive demos for the Node.js page
    │   ├── react-demos/       # Interactive demos for the React page
    │   ├── redux-demos/       # Interactive demos for the Redux page
    │   └── testing-demos/     # Interactive demos for the Testing page
    ├── context/
    │   └── ProgressContext.jsx  # Topic/sub-topic completion state, backed by a cookie
    ├── data/                 # JSON content that drives each lesson
    │   ├── learningContent.json  # Topics shown on the home page, in learning order
    │   ├── learning/
    │   │   ├── javascriptContent.json  # Placeholder content
    │   │   ├── typescriptContent.json  # Placeholder content
    │   │   ├── gitContent.json
    │   │   ├── httpContent.json
    │   │   ├── nodeContent.json
    │   │   ├── reactContent.json
    │   │   ├── reduxContent.json
    │   │   └── testingContent.json
    │   └── cheatsheets/
    ├── pages/
    │   ├── Main.jsx          # Home page, lists topics
    │   └── learning/         # One page per topic (JavaScript.jsx, Git.jsx, React.jsx, ...)
    ├── redux/                # Redux store + slices used by the Redux demos
    ├── utils/
    │   └── cookies.js        # Tiny get/set/delete cookie helpers
    ├── App.jsx               # Routes
    └── main.jsx              # Entry point
```

Lesson content lives in JSON so the copy can change without touching component code; the interactive demos are real, hand-written components mapped to a lesson's "practice topics" by title.

## Adding a New Topic

1. Add an entry to `src/data/learningContent.json` in the right spot for the learning order, including a unique `key` (used to store its progress-tracking checkbox state, e.g. `"key": "git"`).
2. Create a `src/data/learning/<topic>Content.json` file with the same shape as the existing ones (`introduction`, `coreConcepts`, `gettingStarted`, `practiceTopics`, `fullExample`, ...).
3. Build any interactive demos in a new `src/components/<topic>-demos/` folder.
4. Create `src/pages/learning/<Topic>.jsx`, following the pattern in `Git.jsx`, `React.jsx`, or `Redux.jsx`. When rendering `<PracticeTopicCard>` for each practice topic, pass `topicKey="<the same key from step 1>"` so its sub-topic checkboxes save correctly.
5. Register the route in `src/App.jsx` and add a link in `src/components/Header.jsx`.
