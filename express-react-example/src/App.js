import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <Router>
        <a href="/home" style={{margin: "5px"}}>Home</a>
        <a href="/about" style={{margin: "5px"}}>About</a>
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
