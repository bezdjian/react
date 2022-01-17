import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = {
    color: "orange",
  };

  return (
    <nav className="p-2">
      <NavLink activeStyle={activeStyle} exact to="/" className="p-1">
        Home
      </NavLink>
      |
      <NavLink activeStyle={activeStyle} exact to="/courses" className="p-1">
        Courses
      </NavLink>
      |
      <NavLink activeStyle={activeStyle} to="/about" className="p-1">
        About
      </NavLink>
    </nav>
  );
}

export default Header;
