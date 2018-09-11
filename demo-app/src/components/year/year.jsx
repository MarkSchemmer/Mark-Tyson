import React from "react";
import {Element} from 'react-scroll';
class Year extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="year">
        <div className="text">
          <h3>{this.props.yearX.year}</h3>
          <p>{this.props.yearX.text}</p>
          <Element name={this.props.yearX.year} />
        </div>
        <img alt="" src={this.props.yearX.img} />
      </div>
    );
  }
}

export default Year;
