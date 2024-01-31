import React from "react";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <footer className="w-100 py-4 flex-shrink-0 shadow-lg">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h2 className="footer-brand">Bharat Soft Suppliers</h2>
            <p className="small text-white">
              We connect software clients with software suppliers.
            </p>
            <p className="small text-white mb-5">
              &copy;2024 All rights reserved.{" "}
            </p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-3">
              <span className="footer-brand pt-5">Q</span>uick links
            </h5>
            <ul className="list-unstyled text-white">
              <li className="m-2">
                <a href="/">Supplier search</a>
              </li>
              <li className="m-2">
                <a href="/">Developer search</a>
              </li>
              <li className="m-2">
                <a href="/">Company map</a>
              </li>
              <li className="m-2">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="m-2">
                <a href="/">About Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">
              <span className="footer-brand pt-5">F</span>urther Information
            </h5>
            <ul className="list-unstyled text-white">
              <li className="m-2">
                <a href="/">Privacy Policy</a>
              </li>
              <li className="m-2">
                <a href="/">Terms and Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
