import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}
