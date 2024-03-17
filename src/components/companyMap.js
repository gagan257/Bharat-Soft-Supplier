import React from "react";
import image from "../Images/company-map-india.png";

export default function companyMap() {
  const Companies = [
    { name: "Flipkart", location: "Bengaluru, Karnataka" },
    { name: "Zomato", location: "Gurugram, Haryana" },
    { name: "Swiggy", location: "Bengaluru, Karnataka" },
    { name: "Ola Cabs", location: "Bengaluru, Karnataka" },
    { name: "Paytm", location: "Noida, Uttar Pradesh" },
    { name: "Freshworks", location: "Chennai, Tamil Nadu" },
    { name: "Byju’s", location: "Bengaluru, Karnataka" },
    { name: "MakeMyTrip", location: "Gurugram, Haryana" },
    { name: "Infosys", location: "Bengaluru, Karnataka" },
    {
      name: "Tata Consultancy Services (TCS)",
      location: "Mumbai, Maharashtra",
    },
  ];
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
        <div className="row">
          <h2 className="mt-5 mb-4">Company List</h2>
          <ul>
            {Companies.map((company, index) => (
              <li key={index}>
                <strong>{company.name}</strong> - {company.location}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
