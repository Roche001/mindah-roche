import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div id="Home" className="home-container">
      <div className="banner">
        <h4>Hello, my name is</h4>
        <h2>Mindah Roche</h2>
        <p>I am a Data Scientist</p>
      </div>
      <div className="home-quot">
        <p>
          “Helping you appreciate the power of using data to derive insights and
          make powerful decisions.”
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
