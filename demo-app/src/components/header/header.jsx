import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div id="header">
        <h1>Tyson</h1>
        <h2>Front End Dev</h2>
        <div>
          {this.props.data.map((year,index) => (
            <a
            onClick={() => this.props.handleClick(year.year)} 
            style={{left:200+index*125+"px"}} 
            key={year.year}>{year.year}</a>)
          )}
        </div>
      </div>
    );
  }
}

export default Header;
