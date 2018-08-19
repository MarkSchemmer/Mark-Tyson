import React, { Component } from "react";
import { Element } from 'react-scroll'
const Year = (props) => {
    const { yearX } = props;
    return (
      <div className="">
        <div className="">
          <h3>{yearX.year}</h3>
          <p>{yearX.text}</p>
          <Element name={yearX.year} ></Element>
          <button onClick={() => props.handleClick(Number(yearX.year)+1)} name={yearX.year} className={yearX.year + " btn btn-success btn-bg"} ><i class="fas fa-arrow-down"></i></button>
          <button onClick={() => props.handleClick(Number(yearX.year)-1)} name={yearX.year} className={yearX.year + " btn btn-success btn-bg"} ><i class="fas fa-arrow-up"></i></button>
        </div>
  
        <img alt="" src={yearX.img} />
      </div>
    )
  }

export default Year;
