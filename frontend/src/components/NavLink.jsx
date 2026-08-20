import { Link } from "react-router-dom";

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-white no-underline hover:text-accent transition-colors duration-300"
    >
      {children}
    </Link>
  );
}

export default NavLink;
