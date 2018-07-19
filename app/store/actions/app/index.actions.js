// @flow
import {
  CHANGE_TITLE,
  GET_INIT_LIST,
  RELOAD_INIT_LIST
} from '../../storeTypes';

export const a = 3;

export function changeTitle(value) {
  return {
    type: CHANGE_TITLE,
    value
  };
}

export function getInitList() {
  return {
    type: GET_INIT_LIST
  };
}

export function reloadInitList(value) {
  return {
    type: RELOAD_INIT_LIST,
    value
  };
}
