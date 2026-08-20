import { Link } from "react-router-dom";
import NavLink from "./NavLink";

function Header() {
  return (
    <header className="bg-heading text-white py-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        <Link to="/" className="no-underline text-white">
          <h1 className="m-0 text-2xl">Learning Tool</h1>
        </Link>
        <nav className="flex gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/redux">Redux</NavLink>
          <NavLink to="/react">React</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
