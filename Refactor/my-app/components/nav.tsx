import React from "react";
import "./nav.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="experience">Experience</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
