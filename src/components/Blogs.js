import React from "react";
import backgroundImage from "../Images/bg-blogs.jpg";

export default function Blogs() {
  return (
    <div
      className="container-fluid mt-5 pb-5"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <h2 className="text-center mb-5 pt-5">
          Explore Our{" "}
          <span className="blogs-span" data-aos="zoom-in" data-aos-delay="1400">
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
          >
            <div className="card-header">Featured</div>
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
              <a href="/" className="btn btn-primary">
                Explore more...
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card shadow-sm mt-2 mb-2"
            data-aos="slide-up"
            data-aos-delay="1000"
          >
            <div className="card-header">Featured</div>
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
              <a href="/" className="btn btn-primary">
                Explore more...
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card shadow-sm mt-2 mb-2"
            data-aos="slide-right"
            data-aos-delay="1200"
          >
            <div className="card-header">Featured</div>
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
              <a href="/" className="btn btn-primary">
                Explore more...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
