import React, { Component } from "react";
import Year from "../year/year.jsx";

const Years = props => {
  return (
    <div>
      {props.years.map((yearX, index) => (
        <Year
          years={props.years}
          yearX={yearX}
          key={yearX.year}
          handleClick={props.handleClick}
          IsLastYear={index === props.years.length - 1}
        />
      ))}
    </div>
  );
};

export default Years;
