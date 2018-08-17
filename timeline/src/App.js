import React, { Component } from "react";
import Header from "./components/header.jsx";
import Body from "./components/body.jsx";
import "./App.css";

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
