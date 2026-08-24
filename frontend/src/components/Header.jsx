import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="bg-navbar text-white py-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        <Link to="/" className="no-underline text-white">
          <h1 className="m-0 text-2xl">Learning Tool</h1>
        </Link>
        <div className="flex items-center gap-8">
          <nav className="flex gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/redux">Redux</NavLink>
            <NavLink to="/react">React</NavLink>
            <NavLink to="/node">Node.js</NavLink>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
