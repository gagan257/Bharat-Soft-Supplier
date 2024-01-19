import React from "react";
import logo from "../Images/logo-black.svg";
const CustomNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light p-3 shadow-sm">
      <div className="container-fluid">
        <a class="navbar-brand" href="/">
          <img src={logo} alt="Bootstrap" width="130" height="60" />
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
        <div
          className="collapse navbar-collapse d-flex"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="/">
              Company search
            </a>
            <a className="nav-link" href="/">
              Developer search
            </a>
            <a className="nav-link" href="/">
              Company map
            </a>
            <a className="nav-link" href="/">
              Knowledge center
            </a>
            <button href="/" className="btn btn-warning nav-btn">
              Share Your Project
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
