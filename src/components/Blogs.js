import React from "react";
import backgroundImage from "../Images/bg-blogs.jpg";
import Blog23jan2024P from "./blogs-preview/blog23jan2024P";
import Blog13jan2024P from "./blogs-preview/blog13jan2024P";
import Blog2jan2024P from "./blogs-preview/blog2jan2024P";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Blogs() {
  return (
    <div
      className="container-fluid mt-5 pb-5"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <h2 className="text-center mb-5 pt-5">
          Explore Our{" "}
          <span
            className="blogs-span"
            data-aos="zoom-in"
            data-aos-delay="1400"
            data-aos-once="true"
          >
            Blogs
          </span>
        </h2>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Blog2jan2024P />
        </div>
        <div className="col-md-4">
          <Blog13jan2024P />
        </div>
        <div className="col-md-4">
          <Blog23jan2024P />
        </div>
      </div>
      <div className="container">
        <div className="text-center mt-5 mb-5">
          <button
            type="button"
            className="btn btn-outline-dark btn-block"
            data-aos="zoom-in"
            data-aos-delay="900"
            data-aos-once="true"
          >
            <Link to="/blogs" onClick={scrollToTop}>
              Explore All Blogs
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
