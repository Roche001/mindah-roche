import React, { useState } from "react";
import "./Top.css";
import { bar } from "../../nav";
import { GiHamburgerMenu } from "react-icons/gi";

const Top = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleClick = () => {
    toggleMenu();
  };
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#Home">
          <img src="././assets/som1.png" alt="logo" loading="lazy" />
        </a>
      </div>

      <div className="top-icon" onClick={toggleMenu}>
        <h4>
          <GiHamburgerMenu />
        </h4>
      </div>
      <div className={menuOpen ? "menu-items-one" : "menu-items"}>
        <div className="side-bar">
          {bar.map((item, index) => {
            return (
              <div key={index} className="menu-one">
                <a href={item.titleLink} onClick={handleClick}>
                  <h5>{item.title}</h5>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Top;
