import React from "react";
import Image from "../../Images/The-Irreplaceable-Role-of-Human-Developers.png";

import { Link } from "react-router-dom";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function blog2jan2024P() {
  return (
    <div>
      <div
        className="card shadow-lg mt-2 mb-2"
        data-aos="slide-up"
        data-aos-delay="1000"
        data-aos-once="true"
      >
        <img src={Image} className="card-img-top" alt="Blog-Featured-2-Img" />
        <div className="card-body">
          <h5 className="card-title">
            The Irreplaceable Role of Human Developers in the Era of ChatGPT
          </h5>
          <p className="card-text">
            In the era of ChatGPT and advanced artificial intelligence, the
            conversation often revolves around the capabilities of automated
            systems. However, as a seasoned developer, I advocate for the
            indispensable role of human developers in shaping the landscape of
            software and AI-driven technologies.....
          </p>
        </div>
        <div className="card-footer text-muted">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <span className="blog-creator-name">Pragnesh Gandhi</span>{" "}
                <br />2 January 2024
              </div>
              <div className="col-md-6">
                <button
                  type="button"
                  className="btn btn-outline-dark btn-block"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                  data-aos-once="true"
                >
                  <Link to="/blog/2-January-2024" onClick={scrollToTop}>
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
