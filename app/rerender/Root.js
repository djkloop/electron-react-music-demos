// @flow
import React, { Component } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import Routes from '../routes';
import store from '../store';

const history = createHistory();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}
