/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import Main from './rerender/components/Main/Main';
import HomePage from './rerender/views/HomePage';
import OtherPage from './rerender/views/OtherPage';

export default () => (
  <Main>
    <Switch>
      <Route path="/other" component={OtherPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Main>
);
