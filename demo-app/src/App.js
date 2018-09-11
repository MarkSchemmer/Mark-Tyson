<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
import './App.css';
>>>>>>> fae0cbf15cc02c7d52485a87574fcf4b5b2afd56

  render() {
    return (
<<<<<<< HEAD
      <React.Fragment>
        <Header data={this.state.myData.years} handleClick={this.handleClick} />
        <Years data={this.state.myData.years} />
      </React.Fragment>
=======
      <div className="">
      </div>
>>>>>>> fae0cbf15cc02c7d52485a87574fcf4b5b2afd56
    );
  }
}

export default App;
