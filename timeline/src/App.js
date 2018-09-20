import React, { Component } from "react";
import Header from "./components/header/header.jsx";
import DataX from "./data.json";
import "./body.css";
import "./App.css";
import { scroller } from "react-scroll";
import Years from "./components/years/years";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myJson: DataX
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = year => {
    scroller.scrollTo(year, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -400
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header
          years={this.state.myJson.years}
          handleClick={this.handleClick}
        />
        <Years years={this.state.myJson.years} handleClick={this.handleClick} />
      </React.Fragment>
    );
  }
}

export default App;
