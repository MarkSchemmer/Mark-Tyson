import React, { Component } from "react";
import "./header.css";

const  Header = (props) => {
    return (
      <div id="header">
        <h1>Tyson Huotari</h1>
        <h2>Front End Web Developer</h2>
        {props.years.map(year => <h1 onClick={() => props.handleClick(year.year) } style={{display:'inline-block',marginRight:'10px'}} key={year.year} className="btn btn-success btn-bg">{year.year}</h1>)}
      </div>
    )
}

export default Header;
