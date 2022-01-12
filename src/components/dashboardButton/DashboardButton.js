import React from "react";
import "./dashboardButton.css";
export default function DashboardButton(props) {
  const { title, description, image, href } = props;
  return (
    <div className="dashboard__wrap--box">
      <a href={href}>
        <img src={image} alt="logoimage" />
        <h2>{title}</h2>
      </a>
    </div>
  );
}
