# WebDev Learning Playground

A frontend-only modern, interactive learning platform for mastering full-stack web development concepts through **structured lessons**, **live demos**, and **progress tracking**.

Learn **JavaScript**, **TypeScript**, **Git**, **HTTP & APIs**, **Node.js**, **React**, **Redux**, and **Testing** at your own pace with hands-on examples you can edit and experiment with directly in the browser.

---

## Key Features

- **Structured Lessons**: Each topic includes core concepts, real-world examples, and step-by-step walkthroughs
- **Interactive Demos**: Live, editable widgets (counters, stopwatches, HTTP simulators, event loop visualizers) show concepts in action
- **Code Walkthroughs**: Click through realistic examples to highlight which lines implement each concept
- **Progress Tracking**: Check off topics and sub-topics as you learn; progress is saved locally in your browser
- **Light & Dark Themes**: Easy on the eyes, any time of day
- **Data-Driven Content**: All lessons defined in JSON; easy to update and extend
- **Zero Backend**: No server, no account, no sign-up — everything runs locally

---

## Learning Path

Topics are ordered to build from fundamentals up to advanced patterns:

| Step | Topic                                 | Concepts Covered                                                                             |
| ---- | ------------------------------------- | -------------------------------------------------------------------------------------------- |
| 1    | **JavaScript Basics** _(coming soon)_ | Variables, scope, functions, closures, arrays, objects, destructuring, promises, async/await |
| 2    | **TypeScript Basics** _(coming soon)_ | Static types, interfaces, generics, typing functions & components                            |
| 3    | **Git**                               | Cloning, staging, committing, branching, merging, rebase, stash, conflict resolution         |
| 4    | **HTTP & Web APIs**                   | Methods, status codes, headers, cookies, CORS, REST/JSON, fetch, auth, WebSockets, SSE       |
| 5    | **Node.js**                           | Event loop, modules, built-in HTTP module, streams                                           |
| 6    | **React**                             | Components, JSX, props, state, hooks, performance optimization with `memo`                   |
| 7    | **Redux**                             | Actions, reducers, `configureStore`, `createSlice`, async thunks                             |
| 8    | **Unit Testing**                      | Unit, integration, and component testing; mocking; spies; fixtures; TDD                      |

> **JavaScript Basics** and **TypeScript Basics** are currently placeholders — full lessons and demos coming soon.

---

## Tech Stack

Built with modern, production-grade tools:

- **[React 19](https://react.dev/)** + **[React Router](https://reactrouter.com/)** — Component-based UI & routing
- **[Redux Toolkit](https://redux-toolkit.js.org/)** + **[React Redux](https://react-redux.js.org/)** — Predictable state management
- **[Tailwind CSS 4](https://tailwindcss.com/)** — Utility-first styling
- **[Vite](https://vite.dev/)** — Lightning-fast dev server & production builds
- **[oxlint](https://oxc.rs/docs/guide/usage/linter.html)** — Fast, zero-config linting

---

## Quick Start

Clone or download the project, then:

```bash
npm install
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173`).

### Other Useful Commands

```bash
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
npm run lint     # Run oxlint
```

---

## Progress Tracking

Every topic and sub-topic has a checkbox. Checking it off:

✓ Marks the topic as complete  
✓ Saves automatically to `learningToolProgress` cookie  
✓ Persists across browser sessions (no account needed)  
✓ Stays local to your device (nothing sent to servers)

**Reset progress:** Clear your browser cookies.

### How It Works

- **Storage:** `src/context/ProgressContext.jsx` manages state via cookies
- **API:** `useProgress()` hook provides `isTopicDone()`, `toggleTopic()`, etc.
- **Utilities:** `src/utils/cookies.js` handles low-level get/set/delete

---

## Project Structure

```
src/
├── components/                    # Reusable UI components
│   ├── CodeBlock.jsx
│   ├── Header.jsx, Footer.jsx
│   ├── TopicCard.jsx, ContentCard.jsx
│   ├── git-demos/                 # Interactive Git lessons
│   ├── http-demos/                # HTTP & API demos
│   ├── javascript-demos/          # JavaScript concept demos
│   ├── node-demos/                # Node.js runtime demos
│   ├── react-demos/               # React hooks & components
│   ├── redux-demos/               # Redux state management
│   ├── typescript-demos/          # TypeScript examples
│   ├── testing-demos/             # Testing patterns
│   └── websockets-demos/          # WebSocket examples
├── context/
│   └── ProgressContext.jsx        # Progress state & cookie management
├── data/                          # JSON-driven content
│   ├── learningContent.json       # Topic metadata & ordering
│   ├── cheatsheets.json
│   └── learning/
│       ├── javascriptContent.json
│       ├── typescriptContent.json
│       ├── gitContent.json
│       ├── httpContent.json
│       ├── nodeContent.json
│       ├── reactContent.json
│       ├── reduxContent.json
│       └── testingContent.json
├── pages/
│   ├── Main.jsx                   # Home page (lists topics)
│   └── learning/                  # Topic pages (Git.jsx, React.jsx, ...)
├── redux/
│   ├── store.js
│   └── [slices].js                # Slices for demos & progress
├── utils/
│   ├── cookies.js                 # Cookie utilities
│   └── [other helpers]
├── App.jsx                        # Router setup
├── App.css, index.css
└── main.jsx                       # Entry point
```

---

## Goals & Vision

This project is designed to:

- Provide a **self-paced, visual learning experience** for modern web development
- Show concepts through **working code and interactive examples**, not just documentation
- Make it **easy to extend** with new topics (just add JSON + React components)
- Demonstrate **modern React patterns** (hooks, context, Redux, testing)
- Serve as a **reference and playground** for hands-on learning

## Adding a New Topic

1. Add an entry to `src/data/learningContent.json` in the right spot for the learning order, including a unique `key` (used to store its progress-tracking checkbox state, e.g. `"key": "git"`).
2. Create a `src/data/learning/<topic>Content.json` file with the same shape as the existing ones (`introduction`, `coreConcepts`, `gettingStarted`, `practiceTopics`, `fullExample`, ...).
3. Build any interactive demos in a new `src/components/<topic>-demos/` folder.
4. Create `src/pages/learning/<Topic>.jsx`, following the pattern in `Git.jsx`, `React.jsx`, or `Redux.jsx`. When rendering `<PracticeTopicCard>` for each practice topic, pass `topicKey="<the same key from step 1>"` so its sub-topic checkboxes save correctly.
5. Register the route in `src/App.jsx` and add a link in `src/components/Header.jsx`.

```

```
