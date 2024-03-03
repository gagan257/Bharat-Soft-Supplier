import React from "react";
import image from "../Images/company-map-india.png";

export default function companyMap() {
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <h2 className="text-center">
            <span className="company-map-heading">Company</span> Map
          </h2>
        </div>
        <div className="row mt-5 d-flex justify-content-center">
          <div className="col-md-12 text-center">
            <img src={image} alt="" className="shadow-lg rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
