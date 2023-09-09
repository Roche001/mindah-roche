import React from "react";
import "./index.css";
import Top from "./components/top/Top";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Top />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
