import createBrowserHistory from 'history/createBrowserHistory';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

import AppStore from '../model/App';

class RootStore {
  constructor() {
    this.app = new AppStore(this);
  }
}

const combineStore = new RootStore();
const routingStore = new RouterStore();

const stores = {
  routing: routingStore,
  combineStore
};

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routingStore);

export { stores, history };
