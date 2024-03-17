import "./App.css";
import BlogsAll from "./components/BlogsAll.js";
import Navbar from "./components/Navbar.js";
import Banner from "./components/banner.js";
import About from "./components/about.js";
import CompanyMap from "./components/companyMap.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer.js";
import RegistrationForm from "./components/form2.js";
import PrivacyPolicy from "./components/privacyPolicy.js";
import TandC from "./components/termsAndConditions.js";
import Blog2Jan2024 from "../src/components/blogsdata/blog2jan2024.js";
import Blog13Jan2024 from "../src/components/blogsdata/blog13jan2024.js";
import Blog23Jan2024 from "../src/components/blogsdata/blog23jan2024.js";
import Blog15Dec2023 from "../src/components/blogsdata/blog15dec2023.js";
import Blog27Dec2023 from "../src/components/blogsdata/blog27dec2023.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/blogs" element={<BlogsAll />} />
          <Route path="/about" element={<About />} />
          <Route path="/company-map" element={<CompanyMap />} />
          <Route
            path="/company-register"
            element={<RegistrationForm formId="01HS6P66B2M61M02DRQJP0BWH7" />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TandC />} />
          <Route path="/blog/2-January-2024" element={<Blog2Jan2024 />} />
          <Route path="/blog/13-January-2024" element={<Blog13Jan2024 />} />
          <Route path="/blog/23-January-2024" element={<Blog23Jan2024 />} />
          <Route path="/blog/15-December-2023" element={<Blog15Dec2023 />} />
          <Route path="/blog/27-December-2023" element={<Blog27Dec2023 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
