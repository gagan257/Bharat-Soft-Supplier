import React from "react";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function privacyPolicy() {
  return (
    <div>
      <div
        className="container mt-5 mb-5"
        data-aos="slide-right"
        data-aos-delay="1000"
        data-aos-once="true"
      >
        <h2 className="text-center">
          Our <span className="policy-span">Privacy Policy</span>
        </h2>
        <p className="text-center mt-4">
          Bharat Soft Suppliers ("us," "we," or "our") manages the
          www.bharatsoftsuppliers.com website (the "Service"). This page
          notifies you about our practices concerning the gathering,
          utilization, and disclosure of personal data when utilizing our
          Service, and it outlines the choices you have related to that data.
          The Privacy Policy for Bharat Soft Suppliers is overseen through Free
          Privacy Policy. We utilize your data to deliver and enhance the
          Service. By utilizing the Service, you consent to the gathering and
          utilization of information following this policy. Unless explicitly
          defined in this Privacy Policy, the terms used herein hold the same
          meanings as those in our Terms and Conditions, accessible from
          <Link
            to="/terms-and-conditions"
            className="text-primary"
            onClick={scrollToTop}
          >
            {" "}
            Terms and Conditions
          </Link>
        </p>
        <h3 className="text-center pt-2 pb-2">
          <span className="policy-span">Information Collection</span> And Use
        </h3>
        <p className="text-center">
          We collect several different types of information for various purposes
          to provide and improve our Service to you.
        </p>
        <h3 className="text-center pt-2 pb-2">
          Types of <span className="policy-span">Data Collected</span>
        </h3>
        <ul>
          <h4>Personal Data</h4>
          <p className="ml-3">
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you ("Personal Data"). Personally identifiable information
            may include, but is not limited to:
          </p>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Company name and website</li>
          <li>Cookies and Usage Data</li>
        </ul>
        <ul className="mt-3">
          <h4>Usage Data</h4>
          <p>
            We may also collect information how the Service is accessed and used
            ("Usage Data"). This Usage Data may include information such as your
            computer's Internet Protocol address (e.g. IP address), browser
            type, browser version, the pages of our Service that you visit, the
            time and date of your visit, the time spent on those pages, unique
            device identifiers and other diagnostic data.
          </p>
        </ul>
        <ul className="mt-3">
          <h4>Tracking & Cookies Data</h4>
          <p>
            We use cookies and similar tracking technologies to track the
            activity on our Service and hold certain information. Cookies are
            files with small amount of data which may include an anonymous
            unique identifier. Cookies are sent to your browser from a website
            and stored on your device. Tracking technologies also used are
            beacons, tags, and scripts to collect and track information and to
            improve and analyze our Service. You can instruct your browser to
            refuse all cookies or to indicate when a cookie is being sent.
            However, if you do not accept cookies, you may not be able to use
            some portions of our Service.
          </p>
        </ul>
        <ul className="mt-3">
          <h4>Use of Data</h4>
          <p>
            Your Software Supplier uses the collected data for various purposes:
          </p>
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>
            To allow you to participate in interactive features of our Service
            when you choose to do so
          </li>
          <li>To provide customer care and support</li>
          <li>
            To provide analysis or valuable information so that we can improve
            the Service
          </li>
          <li>To monitor the usage of the Service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>
        <ul className="mt-3">
          <h4>Transfer Of Data</h4>
          <p>
            Your information, including Personal Data, may be transferred to —
            and maintained on — computers located outside of your state,
            province, country or other governmental jurisdiction where the data
            protection laws may differ than those from your jurisdiction. Your
            consent to this Privacy Policy followed by your submission of such
            information represents your agreement to that transfer. Your
            Software Supplier will take all steps reasonably necessary to ensure
            that your data is treated securely and in accordance with this
            Privacy Policy and no transfer of your Personal Data will take place
            to an organization or a country unless there are adequate controls
            in place including the security of your data and other personal
            information.
          </p>
        </ul>
        <ul className="mt-3">
          <h4>Disclosure Of Data</h4>
          <p>
            Your Software Supplier may disclose your Personal Data in the good
            faith belief that such action is necessary to:
          </p>
          <li>To comply with a legal obligation</li>
          <li>
            To protect and defend the rights or property of Your Software
            Supplier
          </li>
          <li>
            To prevent or investigate possible wrongdoing in connection with the
            Service
          </li>
          <li>
            To protect the personal safety of users of the Service or the public
          </li>
          <li>To protect against legal liability</li>
        </ul>
        <h3 className="mt-3 text-center">
          <span className="policy-span">Contact</span> Us
        </h3>
        <p className="text-center">
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <h5 className="text-center">By email: hello@bellegirllifestyles.com</h5>
      </div>
    </div>
  );
}
