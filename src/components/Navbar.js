import React from "react";
import logo from "../Images/logo-black.svg";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light p-3 shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" width="130" height="60" />
        </a>
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
            <a className="nav-link m-3" aria-current="page" href="/">
              <i className="fa-solid fa-magnifying-glass"></i> Company search
            </a>
            <a className="nav-link m-3" href="/">
              <i className="fa-solid fa-laptop-file"></i> Developer search
            </a>
            <a className="nav-link m-3" href="/">
              <i className="fa-solid fa-location-dot"></i> Company map
            </a>
            <a className="nav-link m-3" href="/">
              <i className="fa-solid fa-book"></i> Knowledge center
            </a>
            <a className="nav-link m-3" href="/">
              <i className="fa-solid fa-user"></i> About Us
            </a>
            {/* <button href="/" className="btn btn-warning btn-nav">
              Share Your Project
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
