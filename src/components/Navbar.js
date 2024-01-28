import React from "react";
import logo from "../Images/nav-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-light p-3 shadow-lg"
      data-aos="slide-right"
      data-aos-delay="200"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            width="130"
            height="60"
            data-aos="fade-right"
            data-aos-delay="800"
          />
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
              <i
                className="fa-solid fa-magnifying-glass"
                data-aos="zoom-in"
                data-aos-delay="1000"
              ></i>{" "}
              <span data-aos="fade-up" data-aos-delay="800">
                Supplier search
              </span>
            </Link>
            <Link to="/developer-search" className="nav-link m-3">
              <i
                className="fa-solid fa-laptop-file"
                data-aos="zoom-in"
                data-aos-delay="1200"
              ></i>{" "}
              <span data-aos="fade-up" data-aos-delay="800">
                Developer search
              </span>
            </Link>
            <Link to="/company-map" className="nav-link m-3">
              <i
                className="fa-solid fa-location-dot"
                data-aos="zoom-in"
                data-aos-delay="1400"
              ></i>{" "}
              <span data-aos="fade-up" data-aos-delay="800">
                Company map
              </span>
            </Link>
            <Link to="/blogs" className="nav-link m-3">
              <i
                className="fa-solid fa-book"
                data-aos="zoom-in"
                data-aos-delay="1600"
              ></i>{" "}
              <span data-aos="fade-up" data-aos-delay="800">
                Blogs
              </span>
            </Link>
            <Link to="/about" className="nav-link m-3">
              <i
                className="fa-solid fa-user"
                data-aos="zoom-in"
                data-aos-delay="1800"
              ></i>{" "}
              <span data-aos="fade-up" data-aos-delay="800">
                About Us
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
