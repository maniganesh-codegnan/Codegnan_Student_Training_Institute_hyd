import React from "react";
import "./Navbar.css";
import img from "../photos/codegnan.png";
// import "../photos";

const NavbarHeader = (
  <nav className="navbar">
    <div className="logo">
      <img src={img} alt="Codegnan Logo" className="logo-img" />
    </div>
    <ul className="nav-links">
      <li>
        <a href=" " target="_blank">
          Trainings ▼
        </a>
      </li>
      <li>
        <a href=" " target="_blank">
          Resources ▼
        </a>
      </li>
      <li>
        <a href=" " target="_blank">
          Placements ▼
        </a>
      </li>
      <li>
        <a href=" " target="_blank">
          About ▼
        </a>
      </li>
      <li>
        <a href=" " target="_blank">
          Campuses ▼
        </a>
      </li>
      <li>
        <a href=" " target="_blank">
          Contact ▼
        </a>
      </li>
    </ul>
  </nav>
);

const Navbar = () => {
  return <>{NavbarHeader}</>;
};

export default Navbar;
