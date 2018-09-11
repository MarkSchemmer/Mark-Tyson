import React, { Component } from "react";
import Year from "../year/year.jsx";


class Years extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
<div>{this.props.data.map((yearX, index) => {
  return <Year key={yearX.year} yearX={yearX} />;
})}
</div>
    );
  }
}

export default Years;
