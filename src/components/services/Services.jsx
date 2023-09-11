import React from "react";
import "./Services.css";
import { services, info } from "../../nav";

const Services = () => {
  return (
    <div id="Services" className="services-container">
      <div className="services-text">
        <h5>Service Spectrum</h5>
        {services.map((item, index) => {
          return <p>{item.text}</p>;
        })}
      </div>
      <div className="services-info">
        {info.map((item, index) => {
          return (
            <div className="img">
              <img src={item.image} alt="services" loading="lazy" />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
