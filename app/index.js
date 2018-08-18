import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faFolder,
  faUserCircle,
  faFile,
  faDotCircle,
  faCoffee,
  faChevronRight,
  faHeart,
  faAlignJustify,
  faMusic,
  faCopyright,
  faList,
  faPlusCircle,
  faMinusCircle,
  faTimesCircle,
  faSearch,
  faChevronLeft,
  faHeadphones,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import Root from './rerender/Root';
import './app.global.css';

library.add(
  faMinusCircle,
  faTimesCircle,
  fab,
  faPlusCircle,
  faList,
  faUserCircle,
  faFolder,
  faFile,
  faUser,
  faDotCircle,
  faCheckSquare,
  faCoffee,
  faHeart,
  faMusic,
  faSearch,
  faHeadphones,
  faAlignJustify,
  faChevronRight,
  faCopyright,
  faChevronLeft
);
render(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./rerender/Root', () => {
    const NextRoot = require('./rerender/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
