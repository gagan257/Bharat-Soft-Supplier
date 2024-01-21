import React from "react";
import backgroundImage from "../Images/form-bg.jpg";
export default function form() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container mt-5 pt-5">
        <h2 className="text-center mb-4">
          Your
          <br />
          <span className="form-title">PROJECT IDEA</span>
        </h2>
        <p className="text-center form-p mb-5">
          Fill the form and describe your project idea.{" "}
          <span>Software Supplier</span> will get back to you.
        </p>
        <form>
          <div class="row">
            <div class="col-md">
              <input
                type="text"
                class="form-control"
                placeholder="Your First Name"
                aria-label="First Name"
                data-aos="slide-right"
                data-aos-delay="1000"
                required
              />
            </div>
            <div class="col-md">
              <input
                type="text"
                class="form-control"
                placeholder="Your Last Name"
                aria-label="Last Name"
                data-aos="slide-right"
                data-aos-delay="1200"
                required
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md">
              <input
                type="text"
                class="form-control"
                placeholder="Email(for further communication)"
                aria-label="Email"
                data-aos="slide-right"
                data-aos-delay="1000"
                required
              />
            </div>
            <div class="col-md">
              <input
                type="text"
                class="form-control"
                placeholder="Your Company Name"
                aria-label="Company"
                data-aos="slide-right"
                data-aos-delay="1200"
                required
              />
            </div>
            <div className="row mt-3 mb-3">
              <div>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Explain your Project Idea and Needs"
                  aria-label="Project Idea"
                  data-aos="slide-right"
                  data-aos-delay="1000"
                  required
                ></textarea>
              </div>
            </div>
            <button
              className="btn btn-primary btn-lg btn-block mt-5 mb-5"
              data-aos="zoom-right"
              data-aos-delay="1000"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
