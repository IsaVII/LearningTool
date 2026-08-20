# Learning Tool - Redux & React Education App

A modern learning application built with React, Redux, and React Router. Designed to teach Redux fundamentals and other web development topics through structured content.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── Header.css
│   ├── Footer.jsx      # Footer component
│   └── Footer.css
├── layouts/            # Layout components
│   ├── MainLayout.jsx  # Main app layout with header and footer
│   └── MainLayout.css
├── pages/              # Page components
│   ├── Main.jsx        # Homepage with topics overview
│   ├── Pages.css
│   └── learning/       # Learning page components
│       ├── Redux.jsx   # Redux learning page
│       ├── React.jsx   # React learning page (future)
│       └── Learning.css
├── routes/             # Route configuration
│   └── index.js        # Router setup using React Router v7
├── redux/              # Redux store and slices
│   ├── store.js        # Redux store configuration
│   └── README.md       # Redux folder documentation
├── data/               # Static data files
│   └── learningContent.json  # Learning topics metadata
├── App.jsx             # Main App component
├── App.css             # Global app styles
├── main.jsx            # React entry point
├── index.css           # Global styles with Tailwind
└── assets/             # Static assets
```

## Available Routes

- `/` - Home page with topics overview
- `/redux` - Redux learning content
- `/react` - React learning content (placeholder)

## Features

- **Header Navigation** - Easy navigation between pages
- **Responsive Layout** - Mobile-friendly design
- **Learning Content** - JSON-based content for extensibility
- **Redux Setup** - Pre-configured Redux store with Redux Toolkit
- **React Router** - Client-side routing setup

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Dependencies

- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - State management
- **React Redux** - Redux bindings for React
- **Tailwind CSS** - Utility-first CSS
- **Vite** - Build tool

## Adding New Learning Topics

1. Add topic to `src/data/learningContent.json`:

```json
{
  "id": 3,
  "title": "TypeScript",
  "description": "Learn TypeScript basics",
  "route": "/typescript",
  "screenshot": "/images/typescript.png",
  "difficulty": "intermediate",
  "estimatedTime": "2.5 hours"
}
```

2. Create page component in `src/pages/learning/TypeScript.jsx`

3. Add route in `src/routes/index.js`:

```javascript
{
  path: 'typescript',
  element: <TypeScript />,
}
```

## Redux Store Structure

The Redux store is configured in `src/redux/store.js` using Redux Toolkit's `configureStore`.

Add slices in `src/redux/slices/` (create the folder as needed):

- Use `createSlice` for reducers
- Export actions and selectors
- Import in store.js to add to reducer

Example:

```javascript
// src/redux/slices/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

## Styling

The app uses:

- **CSS Modules** - Component-scoped styles (Header.css, Footer.css, etc.)
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Variables** - Global theme variables in index.css

Color scheme supports light and dark modes via CSS variables.

## Future Enhancements

- [ ] Add interactive code examples
- [ ] Add quizzes and assessments
- [ ] Add user progress tracking with Redux
- [ ] Add dark mode toggle
- [ ] Add more learning topics
- [ ] Add search functionality
- [ ] Add bookmarking feature
