import React, { Component } from "react";
import Year from "./year";

class Years extends Component {
  render() {
    return (
      <div>
        {this.props.years.map(yearX => (
          <Year years={this.props.years} yearX={yearX} key={yearX.year} />
        ))}
      </div>
    );
  }
}

export default Years;
