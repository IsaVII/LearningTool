import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Git from "./pages/learning/Git";
import Http from "./pages/learning/Http";
import Main from "./pages/Main";
import Node from "./pages/learning/Node";
import Redux from "./pages/learning/Redux";
import React from "./pages/learning/React";
import Testing from "./pages/learning/Testing";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/redux" element={<Redux />} />
            <Route path="/react" element={<React />} />
            <Route path="/node" element={<Node />} />
            <Route path="/http" element={<Http />} />
            <Route path="/git" element={<Git />} />
            <Route path="/testing" element={<Testing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
