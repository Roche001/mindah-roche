import React from "react";
import "./Contact.css";
import { contact } from "../../nav";

const Contact = () => {
  return (
    <div className="contact-cont">
      {contact.map((item, index) => {
        return (
          <div className="cont-one">
            <h5>{item.title}</h5>
            <h6>{item.titleInfo}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
