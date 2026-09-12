import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-20">
      <Link
        to={"/"}
        className="text-primary text-2xl font-black font-merriweather"
      >
        Food Ninja
      </Link>
      <ul className="hidden  md:flex items-center  gap-4 text-gray-600">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline text-primary font-bold" : ""
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-primary font-bold" : ""
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline text-primary font-bold" : ""
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="md:hidden">
        <div className="size-8 flex flex-col justify-between">
          <span className="h-1 w-full bg-primary"></span>
          <span className="h-1 w-full bg-primary"></span>
          <span className="h-1 w-full bg-primary"></span>
        </div>
      </div>
    </div>
  );
}
