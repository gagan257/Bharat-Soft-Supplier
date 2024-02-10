import React from "react";
import Image from "../../Images/India-A-Dynamic-Global-Power-Hub-and-Recent-Achievements.png";

import { Link } from "react-router-dom";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function blog27dec2023P() {
  return (
    <div>
      <div
        className="card shadow-lg mt-2 mb-2"
        data-aos="slide-up"
        data-aos-delay="1000"
        data-aos-once="true"
      >
        <img src={Image} className="card-img-top" alt="Blog-Featured-2-Img" />
        <div className="card-body card-body-prev">
          <h5 className="card-title">
            India: A Dynamic Global Power Hub and Recent Achievements
          </h5>
          <p className="card-text">
            In the ever-evolving landscape of the 21st century, India has not
            only emerged as a global power hub but has also made significant
            strides across various domains. This blog delves into the
            multifaceted reasons behind India's ascent and highlights some of
            its recent achievements that underscore its growing influence on the
            world stage. In the era of ChatGPT and advanced artificial
            intelligence, the conversation often revolves around the
            capabilities of automated systems. However, as a seasoned developer,
            I advocate for the indispensable role of human developers in shaping
            the landscape of software and AI-driven technologies
          </p>
        </div>
        <div className="card-footer text-muted">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <span className="blog-creator-name">Pragnesh Gandhi</span>{" "}
                <br />
                27 December 2023
              </div>
              <div className="col-md-6">
                <button
                  type="button"
                  className="btn btn-outline-dark btn-block"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                  data-aos-once="true"
                >
                  <Link to="/blog/27-December-2023" onClick={scrollToTop}>
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
