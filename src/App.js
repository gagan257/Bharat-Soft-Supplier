// import logo from './logo.svg';
import "./App.css";
import BlogsAll from "./components/BlogsAll.js";
import Navbar from "./components/Navbar.js";
import Banner from "./components/banner.js";
import CompanySearch from "./components/companySearch.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/company-search" element={<CompanySearch />} />
          <Route path="/blogs" element={<BlogsAll />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
