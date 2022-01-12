// import logoWhite from '../../assests/img/logo-white.png'
import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <a href="index.html">
          <img
            src={
              "https://hungry-hugle-70ea8a.netlify.com/public/images/logo.png"
            }
            alt=""
          />
        </a>
      </div>
    </nav>
  );
}
