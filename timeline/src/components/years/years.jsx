import React, { Component } from "react";
import Year from "../year/year.jsx";

const Years = (props) => {
    return (
      <div>
        {props.years.map(yearX => (
          <Year years={props.years} yearX={yearX} key={yearX.year} handleClick={props.handleClick} />
        ))}
      </div>
    )
  }

export default Years;
