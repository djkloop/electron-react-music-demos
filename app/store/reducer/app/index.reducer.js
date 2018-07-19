// @flow
import { CHANGE_TITLE, RELOAD_INIT_LIST } from '../../storeTypes';
import appStates from '../../model/app/index.store';

export type appStateType = {
  +title: string
};

type actionType = {
  +type: string,
  +value: string | undefined
};

export default function appState(state = appStates, action: actionType) {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case CHANGE_TITLE:
      newState.title = action.value;
      return newState;
    case RELOAD_INIT_LIST:
      newState.list = action.value;
      return newState;
    default:
      return state;
  }
}
