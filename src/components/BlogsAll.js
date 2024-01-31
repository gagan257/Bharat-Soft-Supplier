import React from "react";
import backgroundImage from "../Images/bg-blogs.jpg";

import Blog23Jan2024 from "./blogsdata/blog23jan2024";
import Blog13Jan2024 from "./blogsdata/blog13jan2024";
import Blog2Jan2024 from "./blogsdata/blog2jan2024";
import Blog27Dec2023 from "./blogsdata/blog27dec2023";
import Blog15Dec2023 from "./blogsdata/blog15dec2023";

export default function BlogsAll() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2 className="text-center pt-5">
        <span data-aos="fade-left" data-aos-delay="700" data-aos-once="true">
          Welcome
        </span>{" "}
        <span data-aos="fade-left" data-aos-delay="1500" data-aos-once="true">
          to
        </span>{" "}
        <span
          className="blogs-all-span-head"
          data-aos="fade-left"
          data-aos-delay="2000"
          data-aos-once="true"
        >
          Blogs
        </span>
      </h2>
      <p
        className="text-center blogs-all-p pt-2 pb-5"
        data-aos="fade-right"
        data-aos-delay="2400"
        data-aos-once="true"
      >
        Step into a world of words – where ideas unfold and stories unfold.
        Welcome to our vibrant blogosphere!
      </p>
      <div className="container-fluid pb-5">
        <div className="row">
          <div className="accordion" id="accordionBlogs">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h5 className="card-title">
                    India's Unparalleled Software Development Excellence: A
                    Personal Exploration for Dutch Enterprises
                  </h5>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionBlogs"
              >
                <div className="accordion-body">
                  <Blog23Jan2024 />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <h5 className="card-title">
                    Navigating Success: Key Considerations When Choosing an
                    Outsourced Software Development Company
                  </h5>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionBlogs"
              >
                <div className="accordion-body">
                  <Blog13Jan2024 />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <h5 className="card-title">
                    The Irreplaceable Role of Human Developers in the Era of
                    ChatGPT
                  </h5>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionBlogs"
              >
                <div className="accordion-body">
                  <Blog2Jan2024 />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseFour"
                >
                  <h5 className="card-title">
                    India: A Dynamic Global Power Hub and Recent Achievements
                  </h5>
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionBlogs"
              >
                <div className="accordion-body">
                  <Blog27Dec2023 />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="true"
                  aria-controls="collapseFive"
                >
                  <h5 className="card-title">
                    Mastering API Product Management: A Comprehensive Guide to
                    Evolution and Success
                  </h5>
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionBlogs"
              >
                <div className="accordion-body">
                  <Blog15Dec2023 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
