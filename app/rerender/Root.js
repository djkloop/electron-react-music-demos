// @flow
import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { Router } from 'react-router';
import Routes from '../routes';

type Props = {
  store: {},
  history: {}
};

export default class Root extends Component<Props> {
  render() {
    return (
      <Provider {...this.props.store}>
        <Router history={this.props.history}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}
