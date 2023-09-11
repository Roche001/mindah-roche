import React from "react";
import "./About.css";
import { text } from "../../nav";

const About = () => {
  return (
    <div id="About" className="about">
      <div className="about-container">
        <div className="about-text">
          <div className="about-h4">
            <h4>About Me</h4>
          </div>
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
  );
};

export default About;
