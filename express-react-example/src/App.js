import React, { Component } from 'react';
import './App.css';
import { urls } from "./constants";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <Router>
        <h1> {process.env.REACT_APP_BASE_URL} </h1>
        <h2> {process.env.NODE_ENV} </h2>
        <a href={`${urls.BASE_URL}/home`} style={{margin: "5px"}}>Home</a>
        <a href={`${urls.BASE_URL}/about`} style={{margin: "5px"}}>About</a>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
