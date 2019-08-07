import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Test } from './components';

const history = createBrowserHistory();
export default class App extends Component {
  render() {
    return (
      <div>
        <Test />
      </div>
    );
  }
}
