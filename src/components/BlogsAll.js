import React from "react";
import backgroundImage from "../Images/bg-blogs.jpg";

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
        data-aos="fade-left"
        data-aos-delay="2400"
        data-aos-once="true"
      >
        Step into a world of words – where ideas unfold and stories unfold.
        Welcome to our vibrant blogosphere!
      </p>
      <p>WORKING ON THIS PAGE...</p>
    </div>
  );
}
