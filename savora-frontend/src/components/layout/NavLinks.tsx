import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants/navigation";

function NavLinks() {
  return (
    <ul className="hidden md:flex items-center gap-10">
      {navLinks.map((link) => (
        <li key={link.name}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `transition hover:text-orange-500 ${
                isActive
                  ? "text-orange-500 font-semibold"
                  : "text-gray-700"
              }`
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;