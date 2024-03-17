import React from "react";
import img1 from "../Images/add-comp-col1-icon.svg";
import img2 from "../Images/add-comp-col2-icon.svg";
import img3 from "../Images/add-comp-col3-icon.svg";
export default function AddCompany() {
  return (
    <div className="container-fluid add-comp-div pb-3 pt-3">
      <h2
        className="text-center add-comp-h2 pt-3 pb-1 text-white"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-once="true"
      >
        Add your software company
      </h2>
      <h4
        className="text-center text-white add-comp-h4"
        data-aos="slide-right"
        data-aos-delay="800"
        data-aos-once="true"
      >
        to our platform to connect with clients.
      </h4>
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex">
            <img
              src={img1}
              alt=""
              height={120}
              width={120}
              className="mb-4 mt-4"
              data-aos="slide-up"
              data-aos-delay="500"
              data-aos-once="true"
            />
          </div>
          <div className="col-md-8 text-white">
            <h4
              className="mt-4 text-center mb-4"
              data-aos="slide-right"
              data-aos-delay="500"
              data-aos-once="true"
            >
              We specialize in linking software clients with software suppliers.
              Familiarize yourself with our services, share details about your
              ideal client, and let us handle the rest for you.
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 d-flex">
            <img
              src={img2}
              alt=""
              height={120}
              width={120}
              className="mb-4 mt-4"
              data-aos="slide-up"
              data-aos-delay="500"
              data-aos-once="true"
            />
          </div>
          <div className="col-md-8 text-white">
            <h4
              className="mt-4 mb-4 text-center"
              data-aos="slide-right"
              data-aos-delay="500"
              data-aos-once="true"
            >
              Annually, we engage with over 40,000 potential clients through our
              online and offline marketing initiatives. Seize this opportunity
              to elevate your company's visibility and get it noticed!
            </h4>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-4 d-flex">
            <img
              src={img3}
              alt=""
              height={120}
              width={120}
              className="mb-4 mt-4"
              data-aos="slide-up"
              data-aos-delay="500"
              data-aos-once="true"
            />
          </div>
          <div className="col-md-8 text-white">
            <h4
              className="mt-4 text-center mb-4"
              data-aos="slide-right"
              data-aos-delay="500"
              data-aos-once="true"
            >
              Every day, we receive numerous software requests from prospective
              clients worldwide. Keep a close watch on your inbox, as we
              promptly forward each potential match to you.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
