import React from "react";
import backgroundImage from "../Images/bg-blogs.jpg";
import Image1 from "../Images/India-Unparalleled-Software-Development-Excellence.png";
import Image2 from "../Images/The-Irreplaceable-Role-of-Human-Developers.png";
import Image3 from "../Images/Navigating-Success-Key-Considerations-When-Choosing-an-Outsourced-Software-Development-Company.png";

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
      <div className="container-fluid">
        <div className="row">
          <div class="card mb-3">
            <div class="row">
              <div class="col-md-4 m-0 p-0">
                <img src={Image2} class="img-fluid rounded-start" alt="" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
