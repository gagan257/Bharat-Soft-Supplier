import React from "react";

export default function footer() {
  return (
    <footer class="w-100 py-4 flex-shrink-0">
      <div class="container py-4">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <h2 class="footer-brand">Bharat Soft Suppliers</h2>
            <p class="small text-white">
              We connect software clients with software suppliers.
            </p>
            <p class="small text-white mb-0">
              &copy;2024 All rights reserved.{" "}
            </p>
          </div>
          <div class="col-lg-2 col-md-6">
            <h5 class="text-white mb-3">
              <span className="footer-brand pt-5">Q</span>uick links
            </h5>
            <ul class="list-unstyled text-white">
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
                <a href="/">About Us</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6">
            <h5 class="text-white mb-3">
              <span className="footer-brand pt-5">F</span>urther Information
            </h5>
            <ul class="list-unstyled text-white">
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
