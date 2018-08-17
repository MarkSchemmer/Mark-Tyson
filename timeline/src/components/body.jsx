import React, { Component } from "react";
import DataX from "../data/data.json";
import Years from "./years";

class Body extends Component {
  render() {
    const myJson = DataX;
    return <Years years={myJson.years} />;
  }
}

export default Body;
