import React from "react";
import "./loginForm.css";

export default function LoginNavBar() {
  return (
    <nav className="login_nav">
      <div className="login_nav__logo">
        <a href="index.html">
          <img
            src="https://hungry-hugle-70ea8a.netlify.com/public/images/logo.png"
            alt=""
          />
        </a>
      </div>
    </nav>
  );
}
