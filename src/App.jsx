import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./components/top/Top";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <Top />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route About path="About" exact element={<About />} />
        <Route Services path="Services" exact element={<Services />} />
        <Route Portfolio path="Portfolio" exact element={<Portfolio />} />
        <Route Contact path="Contact" exact element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
