import React from "react";
import Years from "./components/years/years.jsx";
import Header from "./components/header/header.jsx";
import json from "./data.json";
import "./body.css";

import {scroller} from 'react-scroll';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myData: json };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick = year => {
      scroller.scrollTo(year, {
        duration:1500,
        delay:100,
        smooth:true,
        offset:-400
      });
  }

  render() {
    return (
      <React.Fragment>
        <Header data={this.state.myData.years} handleClick={this.handleClick} />
        <Years data={this.state.myData.years} />
      </React.Fragment>
    );
  }
}

export default App;
