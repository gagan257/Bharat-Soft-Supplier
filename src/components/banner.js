import React from "react";
import backgroundImage from "../Images/banner-img.avif";

export default function banner() {
  return (
    <div
      className="container-fluid banner-div"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <h2 className="text-center banner-heading">
          Find the best <span className="banner-span">software suppliers</span>{" "}
          from India.
        </h2>
        <p className="banner-sub-text text-center mt-3">
          Our platform is specifically crafted to facilitate the connection
          between software clients and software suppliers.
        </p>
        <div className="btn-div">
          <button className="btn btn-primary btn-lg btn-block banner-btn mt-5 mb-5">
            Why Us?
          </button>
        </div>
      </div>
    </div>
  );
}
