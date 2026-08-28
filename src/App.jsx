import { lazy, Suspense } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import Main from "./pages/Main";
import PageLoader from "./components/PageLoader";
import CookiePolicy from "./pages/CookiePolicy";

import "./App.css";

// Route-based code splitting: Main (the landing page) loads eagerly since
// it's what every visitor hits first, but every other page - each topic
// lesson and cheat sheet - is only fetched when its route is actually
// visited. This keeps the initial bundle small; syntax highlighting, demo
// components, etc. for a page nobody opens never has to be downloaded.
const JavaScript = lazy(() => import("./pages/learning/JavaScript"));
const TypeScript = lazy(() => import("./pages/learning/TypeScript"));
const Git = lazy(() => import("./pages/learning/Git"));
const Http = lazy(() => import("./pages/learning/Http"));
const Node = lazy(() => import("./pages/learning/Node"));
const React = lazy(() => import("./pages/learning/React"));
const Redux = lazy(() => import("./pages/learning/Redux"));
const WebSockets = lazy(() => import("./pages/learning/WebSockets"));
const Testing = lazy(() => import("./pages/learning/Testing"));
const GithubPages = lazy(() => import("./pages/cheatsheets/GithubPages"));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/" element={<Main />} />
              <Route path="/javascript" element={<JavaScript />} />
              <Route path="/typescript" element={<TypeScript />} />
              <Route path="/git" element={<Git />} />
              <Route path="/http" element={<Http />} />
              <Route path="/node" element={<Node />} />
              <Route path="/react" element={<React />} />
              <Route path="/redux" element={<Redux />} />
              <Route path="/websockets" element={<WebSockets />} />
              <Route path="/testing" element={<Testing />} />
              <Route path="/githubpages" element={<GithubPages />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
