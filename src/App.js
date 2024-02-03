// import logo from './logo.svg';
import "./App.css";
import BlogsAll from "./components/BlogsAll.js";
import Navbar from "./components/Navbar.js";
import Banner from "./components/banner.js";
import About from "./components/about.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer.js";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/blogs" element={<BlogsAll />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
