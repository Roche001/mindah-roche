import React from "react";
import "./index.css";
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
    <>
      <Top />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
