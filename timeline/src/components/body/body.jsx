import React, { Component } from "react";
import DataX from "./data.json";
import Years from "../years/years.jsx";

class Body extends Component {
  render() {
    const myJson = DataX;
    return <Years years={myJson.years} />;
  }
}

export default Body;
