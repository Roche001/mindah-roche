import React from "react";
import "./Home.css";
import { text } from "../../nav";

const Home = () => {
  return (
    <div className="home-container">
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
      <div className="about">
        <div className="about-h4">
          <h4>About Me</h4>
        </div>

        <div className="about-container">
          <div className="about-text">
            {text.map((item, index) => {
              return <p>{item.title}</p>;
            })}
          </div>
          <div className="about-pic ">
            <img
              src="../../assets/mindah.png"
              alt="Mindah-Roche"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
