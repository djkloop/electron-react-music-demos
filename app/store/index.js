import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSageMiddleware from 'redux-saga';
import rootSagas from './sage';
import rootReducer from './reducer';

const middleware = [];
const enhancers = [];
// redux-sage
const sagaMiddleware = createSageMiddleware();
middleware.push(sagaMiddleware);

// redux-logger
const logger = createLogger({
  level: 'info',
  collapsed: true
});
middleware.push(logger);

// redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

enhancers.push(applyMiddleware(...middleware));
const enhancer = composeEnhancers(...enhancers);

const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSagas);

export default store;
