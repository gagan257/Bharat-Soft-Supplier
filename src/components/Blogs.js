import React from "react";
import backgroundImage from "../Images/bg-blogs.jpg";
import Image1 from "../Images/India-Unparalleled-Software-Development-Excellence.png";
import Image2 from "../Images/The-Irreplaceable-Role-of-Human-Developers.png";
import Image3 from "../Images/Navigating-Success-Key-Considerations-When-Choosing-an-Outsourced-Software-Development-Company.png";

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
          <div
            className="card shadow-sm mt-2 mb-2"
            data-aos="slide-right"
            data-aos-delay="1200"
            data-aos-once="true"
          >
            <div className="card-header">Featured</div>
            <img
              src={Image1}
              className="card-img-top"
              alt="Blog-Featured-1-Img"
            />
            <div className="card-body">
              <h5 className="card-title">
                India's Unparalleled Software Development Excellence: A Personal
                Exploration for Dutch Enterprises
              </h5>
              <p className="card-text">
                In the ever-evolving tapestry of global software development,
                India stands as a beacon of innovation and expertise. Allow me,
                a seasoned CTO with over two decades of industry experience, to
                guide you through why India remains the optimal choice for
                software development....
              </p>
            </div>
            <div className="card-footer text-muted">
              <span className="blog-creator-name">Pragnesh Gandhi</span> <br />
              23 January 2024
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card shadow-sm mt-2 mb-2"
            data-aos="slide-up"
            data-aos-delay="1000"
            data-aos-once="true"
          >
            <div className="card-header">Featured</div>
            <img
              src={Image2}
              className="card-img-top"
              alt="Blog-Featured-2-Img"
            />
            <div className="card-body">
              <h5 className="card-title">
                The Irreplaceable Role of Human Developers in the Era of ChatGPT
              </h5>
              <p className="card-text">
                In the era of ChatGPT and advanced artificial intelligence, the
                conversation often revolves around the capabilities of automated
                systems. However, as a seasoned developer, I advocate for the
                indispensable role of human developers in shaping the landscape
                of software and AI-driven technologies.....
              </p>
            </div>
            <div className="card-footer text-muted">
              <span className="blog-creator-name">Pragnesh Gandhi</span> <br />2
              January 2024
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card shadow-sm mt-2 mb-2"
            data-aos="slide-right"
            data-aos-delay="1200"
            data-aos-once="true"
          >
            <div className="card-header">Featured</div>
            <img
              src={Image3}
              className="card-img-top"
              alt="Blog-Featured-3-Img"
            />
            <div className="card-body">
              <h5 className="card-title">
                Navigating Success: Key Considerations When Choosing an
                Outsourced Software Development Company
              </h5>
              <p className="card-text">
                In an era driven by digital transformation, choosing the right
                software development partner is crucial for businesses aiming to
                stay competitive and innovative. Outsourcing software
                development can offer numerous advantages, but success depends
                on selecting the right partner....
              </p>
            </div>
            <div className="card-footer text-muted">
              <span className="blog-creator-name">Pragnesh Gandhi</span> <br />
              13 January 2024
            </div>
          </div>
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
            Read All Blogs
          </button>
        </div>
      </div>
    </div>
  );
}
