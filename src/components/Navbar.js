import React from "react";
import logo from "../Images/nav-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light p-3 shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="130" height="60" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/company-search" className="nav-link m-3">
              <i className="fa-solid fa-magnifying-glass"></i> Company search
            </Link>
            <Link to="/developer-search" className="nav-link m-3">
              <i className="fa-solid fa-laptop-file"></i> Developer search
            </Link>
            <Link to="/company-map" className="nav-link m-3">
              <i className="fa-solid fa-location-dot"></i> Company map
            </Link>
            <Link to="/knowledge-center" className="nav-link m-3">
              <i className="fa-solid fa-book"></i> Knowledge center
            </Link>
            <Link to="/about" className="nav-link m-3">
              <i className="fa-solid fa-user"></i> About Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
