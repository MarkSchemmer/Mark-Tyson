import React, { Component } from "react";
import Header from "./components/header/header.jsx";
import Body from "./components/body/body.jsx";
import "./components/body/body.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Body />
      </React.Fragment>
    );
  }
}

export default App;
