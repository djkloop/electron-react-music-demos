// @flow
import { combineReducers } from 'redux';
import appState from './app/index.reducer';

const rootReducer = combineReducers({
  appState
});

export default rootReducer;
