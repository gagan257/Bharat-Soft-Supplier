import React from "react";
import Image from "../../Images/India-Unparalleled-Software-Development-Excellence.png";

import { Link } from "react-router-dom";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function blog23jan2024P() {
  return (
    <div>
      <div
        className="card shadow-lg mt-2 mb-2"
        data-aos="slide-right"
        data-aos-delay="1200"
        data-aos-once="true"
      >
        <img src={Image} className="card-img-top" alt="Blog-Featured-1-Img" />
        <div className="card-body">
          <h5 className="card-title">
            India's Unparalleled Software Development Excellence: A Personal
            Exploration for Dutch Enterprises
          </h5>
          <p className="card-text">
            In the ever-evolving tapestry of global software development, India
            stands as a beacon of innovation and expertise. Allow me, a seasoned
            CTO with over two decades of industry experience, to guide you
            through why India remains the optimal choice for software
            development....
          </p>
        </div>
        <div className="card-footer text-muted">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <span className="blog-creator-name">Pragnesh Gandhi</span>{" "}
                <br />
                23 January 2024
              </div>
              <div className="col-md-6">
                <button
                  type="button"
                  className="btn btn-outline-dark btn-block"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                  data-aos-once="true"
                >
                  <Link to="/blog/23-January-2024" onClick={scrollToTop}>
                    Read Blog
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
