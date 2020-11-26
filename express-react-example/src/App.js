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
        <a href={`${urls.BASE_URL}${urls.BASE_ROUTE}/home`} style={{margin: "5px"}}>Home</a>
        <a href={`${urls.BASE_URL}${urls.BASE_ROUTE}/about`} style={{margin: "5px"}}>About</a>
        <Switch> 
          <Route exact path={`${urls.BASE_ROUTE}/home`} component={Home} />
          <Route exact path={`${urls.BASE_ROUTE}/about`} component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;