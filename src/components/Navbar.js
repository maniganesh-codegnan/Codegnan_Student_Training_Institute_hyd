import React from "react";
import "./Navbar.css";
import img from "../photos/codegnan2.png";

const Navbar = () => {
  return (
    <div className="container-fluid headerCls">
      <nav className="navbar navbar-expand-lg">
        <div className="logo">
          <img src={img} alt="Codegnan Logo" className="logo-img" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto nav-links">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Trainings ▼
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Resources ▼
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Placements ▼
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                About ▼
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Campuses ▼
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Contact ▼
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
