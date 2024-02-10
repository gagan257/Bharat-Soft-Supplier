import React from "react";
import MailBoxImg from "../Images/mailBox.svg";

export default function whyus() {
  return (
    <div className="mb-5 pb-5">
      <h2 className="text-center mt-5 pt-3 mb-4">
        <span
          className="whyus-span"
          data-aos="zoom-in"
          data-aos-delay="800"
          data-aos-once="true"
        >
          SHARE YOUR PROJECT IDEA
          <br />
        </span>
        <span>and receive offers from your suppliers </span>
        <br /> in your{" "}
        <span
          className="whyus-span-2"
          data-aos="zoom-in"
          data-aos-delay="1200"
          data-aos-once="true"
        >
          Inbox
        </span>
        .
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <h4 className="whyus-advantage mb-4 mt-4">What you will get:</h4>
            <div className="whyus-li ml-5">
              <li data-aos="zoom-in" data-aos-delay="400" data-aos-once="true">
                A list of top 3 suppliers
              </li>
              <li data-aos="zoom-in" data-aos-delay="500" data-aos-once="true">
                Contact details of suppliers
              </li>
              <li data-aos="zoom-in" data-aos-delay="600" data-aos-once="true">
                Draft collaboration agreements
              </li>
              <li data-aos="zoom-in" data-aos-delay="800" data-aos-once="true">
                Rough pricing indications
              </li>
            </div>
          </div>
          <div
            className="col-md-2 text-center mt-4"
            data-aos="slide-right"
            data-aos-delay="6000"
            data-aos-once="true"
          >
            <img
              src={MailBoxImg}
              alt="Mail_Box_Image"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
