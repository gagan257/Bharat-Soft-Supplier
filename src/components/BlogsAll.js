import React from "react";
import backgroundImage from "../Images/bg-blogs.jpg";

import Blog23Jan2024P from "./blogs-preview/blog23jan2024P";
import Blog2Jan2024P from "./blogs-preview/blog2jan2024P";
import Blog13Jan2024P from "./blogs-preview/blog13jan2024P";
import Blog27Dec2023P from "./blogs-preview/blog27dec2023P";
import Blog15Dec2023P from "./blogs-preview/blog15dec2023P";

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
          <div className="col-md-6">
            <Blog23Jan2024P />
          </div>
          <div className="col-md-6">
            <Blog13Jan2024P />
          </div>
          <div className="col-md-6">
            <Blog2Jan2024P />
          </div>
          <div className="col-md-6">
            <Blog27Dec2023P />
          </div>
          <div className="col-md-6">
            <Blog15Dec2023P />
          </div>
        </div>
      </div>
    </div>
  );
}
