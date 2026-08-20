import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-700 text-white py-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        <Link to="/" className="no-underline text-white">
          <h1 className="m-0 text-2xl">Learning Tool</h1>
        </Link>
        <nav className="flex gap-8">
          <Link
            to="/"
            className="text-white no-underline hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/redux"
            className="text-white no-underline hover:text-blue-500 transition-colors duration-300"
          >
            Redux
          </Link>
          <Link
            to="/react"
            className="text-white no-underline hover:text-blue-500 transition-colors duration-300"
          >
            React
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
