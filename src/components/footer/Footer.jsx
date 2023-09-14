import React from "react";
import "./Footer.css";
import { MdOutlineCopyright } from "react-icons/md";
import { footer } from "../../nav";

const Footer = () => {
  return (
    <div className="footer">
      {" "}
      <div className="footer-sec">
        {footer.map((item, index) => {
          return (
            <a href={item.link} target="blank">
              <h5>{item.title}</h5>
            </a>
          );
        })}
      </div>
      <div className="footer-part">
        <p>
          <MdOutlineCopyright /> 2023 Mindah Roche
        </p>
      </div>
    </div>
  );
};

export default Footer;
