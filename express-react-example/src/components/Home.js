import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return(
      <div>
        <h1>Home</h1>
        <p>this is my home</p>
        <p>{this.props.location.pathname}</p>
      </div>
    )
  }
}