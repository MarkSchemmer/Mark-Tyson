import React, { Component } from "react";
import "./header.css";

const Header = props => {
  return (
    <div id="header">
      <h1>Tyson Huotari</h1>
      <h2>Front End Web Developer</h2>
      <div className="years">
        {props.years.map((year, index) => (
          <a
            onClick={() => props.handleClick(year.year)}
            key={year.year}
            style={{ left: 200 + index * 125 + "px" }}
          >
            {year.year}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
