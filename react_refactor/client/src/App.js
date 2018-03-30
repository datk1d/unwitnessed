import React, { Component } from 'react';
import {Route, Redirect, Switch, BrowserRouter as Router} from 'react-router-dom';

import Landing from './components/Landing';

//import logo from './logo.svg';

import './reset.css';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/unwitnessed/home"
              component={Landing}
            />
            <Redirect to="/unwitnessed/home" />
          </Switch>
        </Router>
      </div>
    );
  }
}
