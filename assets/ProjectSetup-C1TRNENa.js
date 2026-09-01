import{a as e,i as t}from"./TextReveal-Dxbhpb2T.js";import{t as n}from"./CheatSheetLayout-VBK75Yo7.js";var r={title:`React + Redux Project Setup + Tailwind`,introduction:{heading:`Setting Up a Modern React & Redux Project with Vite`,description:`A complete guide to scaffolding a production-ready React application with Redux state management, Tailwind CSS, routing, and folder structure. This covers the essential packages and configurations needed to start developing immediately.`},prerequisites:[`Node.js 16+ and npm installed`,`A text editor (VS Code, etc.)`,`Basic familiarity with npm and command line`],steps:[{id:1,title:`Create a Vite React Project`,description:`Use Vite to scaffold a new React project. Vite is much faster than Create React App and is the modern standard for new React projects.`,code:`npm create vite@latest frontend -- --template react`,language:`bash`,note:`Replace 'frontend' with your desired project name. The --template react flag ensures you get a React setup.`},{id:2,title:`Navigate to Project & Install Dependencies`,description:`Enter the project directory and install the base dependencies that come with Vite React.`,code:`cd frontend
npm install`,language:`bash`},{id:3,title:`Install Redux State Management`,description:`Redux Toolkit simplifies Redux setup with less boilerplate. react-redux binds Redux to React components via hooks.`,code:`npm install @reduxjs/toolkit react-redux`,language:`bash`,note:`Redux Toolkit includes Redux, Redux Thunk for async actions, and Immer for immutable updates.`},{id:4,title:`Install Tailwind CSS with Vite Plugin (Optional)`,description:`Tailwind CSS provides utility-first styling. The @tailwindcss/vite plugin enables faster builds with Vite.`,code:`npm install tailwindcss postcss autoprefixer @tailwindcss/vite`,language:`bash`},{id:5,title:`Configure Tailwind in vite.config.js (Optional)`,description:`Add the Tailwind plugin to your Vite configuration for proper PostCSS processing.`,code:`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
})`,language:`javascript`,highlightLines:[3,6],note:`The order matters: tailwindcss() should come before react().`},{id:6,title:`Add Tailwind Directives to CSS (Optional)`,description:`Update your main CSS file (usually src/index.css) to include Tailwind's utility layers.`,code:`@tailwind base;
@tailwind components;
@tailwind utilities;`,language:`css`,note:`Replace any existing CSS content in your main CSS file with these directives.`},{id:7,title:`Install React Router for Navigation`,description:`React Router enables client-side routing for multi-page navigation without server requests.`,code:`npm install react-router-dom`,language:`bash`},{id:8,title:`Create Redux Store Structure`,description:`Set up your Redux store with slices. Create a store.js file to configure Redux.`,code:`// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // Add your slices here
    // example: exampleSlice,
  },
});`,language:`javascript`,note:`You'll add more slices (reducer files) as you build features.`},{id:9,title:`Wrap Your App with Redux Provider`,description:`Connect Redux to your React app by wrapping the root component with the Redux Provider.`,code:`// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { store } from './redux/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)`,language:`javascript`,highlightLines:[4,6,10,11]},{id:10,title:`Create Routes with React Router`,description:`Set up basic routing in your App component.`,code:`// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App`,language:`javascript`},{id:11,title:`Optional: Add Development Tools`,description:`Install packages that improve development experience (ESLint, Prettier, Redux DevTools).`,code:`npm install --save-dev eslint prettier
npm install @reduxjs/toolkit redux-devtools`,language:`bash`,note:`ESLint finds bugs, Prettier formats code. Redux DevTools helps debug Redux state changes.`},{id:12,title:`Optional: Environment Variables Setup`,description:`Create a .env.local file for API keys and environment-specific configuration (not committed to git).`,code:`# .env.local
VITE_API_URL=http://localhost:3000/api
VITE_API_KEY=your_key_here`,language:`bash`,note:`In Vite, variables must start with VITE_ to be accessible in the client. Access them as import.meta.env.VITE_API_URL`}],folderStructure:{heading:`Recommended Folder Structure`,description:`This structure scales well for medium-sized applications:`,structure:`frontend/
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── pages/             # Full page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── ...
│   ├── redux/             # Redux state management
│   │   ├── store.js
│   │   ├── slices/        # Redux slices
│   │   │   ├── userSlice.js
│   │   │   ├── authSlice.js
│   │   │   └── ...
│   │   └── ...
│   ├── hooks/             # Custom React hooks
│   │   ├── useAuth.js
│   │   └── ...
│   ├── utils/             # Utility functions
│   │   ├── api.js         # API calls
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── styles/            # Global styles
│   │   └── globals.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── .env.local             # Environment variables (gitignored)
├── .env.example           # Template for .env.local
├── .gitignore
├── vite.config.js
├── package.json
└── README.md`},backendSetup:{heading:`Optional: Backend Project Setup`,description:`If you need a backend server (Node.js/Express), create it alongside your frontend:`,steps:[{step:`Create backend directory`,code:`mkdir backend && cd backend && npm init -y`},{step:`Install Express and essentials`,code:`npm install express cors dotenv axios`},{step:`Basic Express server`,code:`// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(3000, () => console.log('Server on port 3000'));`}]},whatYouMightBeMissing:{heading:`What Else You Might Want`,categories:[{title:`API & Data Fetching`,items:[`axios (npm install axios) - Promise-based HTTP client`,`fetch API (built-in) - Native browser API`,`React Query / TanStack Query - Server state management`]},{title:`Code Quality & Formatting`,items:[`ESLint (npm install --save-dev eslint) - Code linting`,`Prettier (npm install --save-dev prettier) - Code formatting`,`husky (pre-commit hooks) - Run tests before committing`]},{title:`Testing`,items:[`Vitest (npm install --save-dev vitest) - Unit testing`,`React Testing Library (npm install --save-dev @testing-library/react) - Component testing`,`Playwright (npm install --save-dev @playwright/test) - E2E testing`]},{title:`UI & Styling`,items:[`Headless UI (npm install @headlessui/react) - Accessible UI components`,`React Icons (npm install react-icons) - Icon library`,`Framer Motion (npm install framer-motion) - Animation library`]},{title:`Development & Debugging`,items:[`Redux DevTools (npm install redux-devtools) - Debug Redux state`,`React Developer Tools (browser extension) - React debugging`,`Vite Plugin Inspect - Analyze Vite plugins`]},{title:`TypeScript (Optional but Recommended)`,items:[`Create project with: npm create vite@latest frontend -- --template react-ts`,`npm install --save-dev typescript @types/react @types/react-dom`,`Strongly typed Redux actions and reducers`]}]},gettingStarted:{heading:`Quick Start Checklist`,steps:[`npm create vite@latest frontend -- --template react`,`cd frontend && npm install`,`npm install @reduxjs/toolkit react-redux react-router-dom`,`npm install tailwindcss postcss autoprefixer @tailwindcss/vite`,`Update vite.config.js with Tailwind plugin`,`Add Tailwind directives to src/index.css`,`Create src/redux/store.js`,`Wrap App with Redux Provider in main.jsx`,`Create pages/ and components/ folders`,`npm run dev (start development server)`,`🎉 Ready to build!`]},source:{label:`Vite Official Docs`,url:`https://vitejs.dev/`}},i={title:`React + Redux Projektinställning + Tailwind`,introduction:{heading:`Sätta upp ett Modernt React & Redux Projekt med Vite`,description:`En komplett guide för att skapa ett produktionsklart React-program med Redux state management, Tailwind CSS, routing och mappstruktur. Detta täcker de väsentliga paketen och konfigurationerna som behövs för att börja utveckla omedelbart.`},prerequisites:[`Node.js 16+ och npm installerat`,`En textredigerare (VS Code, etc.)`,`Grundläggande förståelse för npm och kommandoraden`],steps:[{id:1,title:`Skapa ett Vite React Projekt`,description:`Använd Vite för att skapa ett nytt React-projekt. Vite är mycket snabbare än Create React App och är den moderna standarden för nya React-projekt.`,code:`npm create vite@latest frontend -- --template react`,language:`bash`,note:`Ersätt 'frontend' med ditt önskade projektnamn. Flaggan --template react säkerställer att du får en React-inställning.`},{id:2,title:`Navigera till Projektet & Installera Beroenden`,description:`Gå in i projektkatalogen och installera basberoendena som kommer med Vite React.`,code:`cd frontend
npm install`,language:`bash`},{id:3,title:`Installera Redux State Management`,description:`Redux Toolkit förenklar Redux-inställning med mindre boilerplate. react-redux binder Redux till React-komponenter via hooks.`,code:`npm install @reduxjs/toolkit react-redux`,language:`bash`,note:`Redux Toolkit inkluderar Redux, Redux Thunk för asynkrona actions, och Immer för oföränderliga uppdateringar.`},{id:4,title:`Installera Tailwind CSS med Vite Plugin (Valfritt)`,description:`Tailwind CSS tillhandahåller utility-first styling. @tailwindcss/vite plugin möjliggör snabbare builds med Vite.`,code:`npm install tailwindcss postcss autoprefixer @tailwindcss/vite`,language:`bash`},{id:5,title:`Konfigurera Tailwind i vite.config.js (Valfritt)`,description:`Lägg till Tailwind-pluginet i din Vite-konfiguration för korrekt PostCSS-bearbetning.`,code:`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
})`,language:`javascript`,highlightLines:[3,6],note:`Ordningen spelar roll: tailwindcss() ska komma före react().`},{id:6,title:`Lägg till Tailwind-direktiv till CSS (Valfritt)`,description:`Uppdatera din huvud-CSS-fil (vanligtvis src/index.css) för att inkludera Tailwinds utility-lager.`,code:`@tailwind base;
@tailwind components;
@tailwind utilities;`,language:`css`,note:`Ersätt eventuellt befintligt CSS-innehåll i din huvud-CSS-fil med dessa direktiv.`},{id:7,title:`Installera React Router för Navigering`,description:`React Router möjliggör klient-side routing för flersidig navigering utan serverförfrågningar.`,code:`npm install react-router-dom`,language:`bash`},{id:8,title:`Skapa Redux Store-struktur`,description:`Sätt upp din Redux store med slices. Skapa en store.js-fil för att konfigurera Redux.`,code:`// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // Lägg till dina slices här
    // exempel: exampleSlice,
  },
});`,language:`javascript`,note:`Du kommer att lägga till fler slices (reducer-filer) när du bygger funktioner.`},{id:9,title:`Wrappa din App med Redux Provider`,description:`Anslut Redux till din React-app genom att wrappa rotkomponenten med Redux Provider.`,code:`// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { store } from './redux/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)`,language:`javascript`,highlightLines:[4,6,10,11]},{id:10,title:`Skapa Routes med React Router`,description:`Sätt upp grundläggande routing i din App-komponent.`,code:`// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App`,language:`javascript`},{id:11,title:`Valfritt: Lägg till Utvecklingsverktyg`,description:`Installera paket som förbättrar utvecklingsupplevelsen (ESLint, Prettier, Redux DevTools).`,code:`npm install --save-dev eslint prettier
npm install @reduxjs/toolkit redux-devtools`,language:`bash`,note:`ESLint hittar buggar, Prettier formaterar kod. Redux DevTools hjälper till att debugga Redux state-ändringar.`},{id:12,title:`Valfritt: Inställning av Miljövariabler`,description:`Skapa en .env.local-fil för API-nycklar och miljöspecifik konfiguration (inte committad till git).`,code:`# .env.local
VITE_API_URL=http://localhost:3000/api
VITE_API_KEY=your_key_here`,language:`bash`,note:`I Vite måste variabler börja med VITE_ för att vara tillgängliga i klienten. Få åtkomst till dem som import.meta.env.VITE_API_URL`}],folderStructure:{heading:`Rekommenderad Mappstruktur`,description:`Denna struktur skalar väl för medelstora applikationer:`,structure:`frontend/
├── src/
│   ├── components/        # Återanvändbara React-komponenter
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── pages/             # Hela sidkomponenter
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── ...
│   ├── redux/             # Redux state management
│   │   ├── store.js
│   │   ├── slices/        # Redux slices
│   │   │   ├── userSlice.js
│   │   │   ├── authSlice.js
│   │   │   └── ...
│   │   └── ...
│   ├── hooks/             # Anpassade React hooks
│   │   ├── useAuth.js
│   │   └── ...
│   ├── utils/             # Verktygsfunktioner
│   │   ├── api.js         # API-anrop
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── styles/            # Globala stilar
│   │   └── globals.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── .env.local             # Miljövariabler (gitignored)
├── .env.example           # Mall för .env.local
├── .gitignore
├── vite.config.js
├── package.json
└── README.md`},backendSetup:{heading:`Valfritt: Backend-projektinställning`,description:`Om du behöver en backend-server (Node.js/Express), skapa den vid sidan av din frontend:`,steps:[{step:`Skapa backend-katalog`,code:`mkdir backend && cd backend && npm init -y`},{step:`Installera Express och grundläggande paket`,code:`npm install express cors dotenv axios`},{step:`Grundläggande Express-server`,code:`// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hej från backend!' });
});

app.listen(3000, () => console.log('Server på port 3000'));`}]},whatYouMightBeMissing:{heading:`Vad du kanske vill ha`,categories:[{title:`API & Datahämtning`,items:[`axios (npm install axios) - Promise-baserad HTTP-klient`,`fetch API (inbyggd) - Native browser API`,`React Query / TanStack Query - Server state management`]},{title:`Kodkvalitet & Formatering`,items:[`ESLint (npm install --save-dev eslint) - Kodlinting`,`Prettier (npm install --save-dev prettier) - Kodformatering`,`husky (pre-commit hooks) - Kör tester före commit`]},{title:`Testning`,items:[`Vitest (npm install --save-dev vitest) - Unit testing`,`React Testing Library (npm install --save-dev @testing-library/react) - Komponenttestning`,`Playwright (npm install --save-dev @playwright/test) - E2E testing`]},{title:`UI & Styling`,items:[`Headless UI (npm install @headlessui/react) - Tillgängliga UI-komponenter`,`React Icons (npm install react-icons) - Ikonbibliotek`,`Framer Motion (npm install framer-motion) - Animationsbibliotek`]},{title:`Utveckling & Debugging`,items:[`Redux DevTools (npm install redux-devtools) - Debugga Redux state`,`React Developer Tools (browser extension) - React debugging`,`Vite Plugin Inspect - Analysera Vite plugins`]},{title:`TypeScript (Valfritt men Rekommenderat)`,items:[`Skapa projekt med: npm create vite@latest frontend -- --template react-ts`,`npm install --save-dev typescript @types/react @types/react-dom`,`Starkt typade Redux actions och reducers`]}]},gettingStarted:{heading:`Snabbstarts-checklista`,steps:[`npm create vite@latest frontend -- --template react`,`cd frontend && npm install`,`npm install @reduxjs/toolkit react-redux react-router-dom`,`npm install tailwindcss postcss autoprefixer @tailwindcss/vite`,`Uppdatera vite.config.js med Tailwind plugin`,`Lägg till Tailwind-direktiv till src/index.css`,`Skapa src/redux/store.js`,`Wrappa App med Redux Provider i main.jsx`,`Skapa pages/ och components/ mappar`,`npm run dev (starta utvecklingsserver)`,`🎉 Redo att bygga!`]},source:{label:`Vite Officiell Dokumentation`,url:`https://vitejs.dev/`}},a=t(),o={en:r,sv:i};function s(){let{i18n:t}=e(),r=o[t.language]||o.en;return(0,a.jsx)(n,{title:r.title,introduction:r.introduction,prerequisites:r.prerequisites,steps:r.steps,folderStructure:r.folderStructure,backendSetup:r.backendSetup,whatYouMightBeMissing:r.whatYouMightBeMissing,gettingStarted:r.gettingStarted,source:r.source})}export{s as default};