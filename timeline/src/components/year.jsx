import React, { Component } from "react";

class Year extends Component {
  render() {
    const { yearX } = this.props;
    return (
      <div className="year">
        <div className="text">
          <h3>{yearX.year}</h3>
          <p>{yearX.text}</p>
        </div>
        <img alt="" src={yearX.img} />
      </div>
    );
  }
}

export default Year;
