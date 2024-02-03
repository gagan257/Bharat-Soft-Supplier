import React from "react";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function footer() {
  return (
    <footer className="w-100 py-4 flex-shrink-0 shadow-lg">
      <div className="container">
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
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li className="m-2">
                <Link to="/" onClick={scrollToTop}>
                  Developer search
                </Link>
              </li>
              <li className="m-2">
                <Link to="/" onClick={scrollToTop}>
                  Company map
                </Link>
              </li>
              <li className="m-2">
                <Link to="/blogs" onClick={scrollToTop}>
                  Blogs
                </Link>
              </li>
              <li className="m-2">
                <Link to="/about" onClick={scrollToTop}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">
              <span className="footer-brand pt-5">F</span>urther Information
            </h5>
            <ul className="list-unstyled text-white">
              <li className="m-2">
                <Link to="/privacy-policy" onClick={scrollToTop}>
                  Privacy Policy
                </Link>
              </li>
              <li className="m-2">
                <Link to="/terms-and-conditions" onClick={scrollToTop}>
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
