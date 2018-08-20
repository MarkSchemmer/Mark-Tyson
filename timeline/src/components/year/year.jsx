import React, { Component } from "react";
import { Element } from "react-scroll";
const Year = props => {
  const showDownArrow = () => {
    if (props.IsLastYear) {
      return null;
    } else {
      return (
        <a onClick={() => props.handleClick(Number(yearX.year) + 1)}>
          <i className="fas fa-angle-down" />
        </a>
      );
    }
  };

  const { yearX } = props;
  console.log(yearX.year);
  return (
    <div className="year">
      <div className="text">
        <h3>{yearX.year}</h3>
        <p>{yearX.text}</p>
        <Element name={yearX.year} />
        {showDownArrow()}
      </div>
      <img alt="" src={yearX.img} />
    </div>
  );
};

export default Year;
