import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="flex space-x-4">
        <NavLink
          to="/todos"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-nav-link" : ""}`
          }
        >
          Todos
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-nav-link" : ""}`
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
