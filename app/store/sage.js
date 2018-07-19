import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import path from 'path';
import { reloadInitList } from './actions/app/index.actions';
import { GET_INIT_LIST } from './storeTypes';

function* GetInitList() {
  const res = yield axios.get(path.resolve(__dirname, '..', 'mock/list.json'));
  const action = reloadInitList(res.data);
  yield put(action);
}

function* rootSagas() {
  yield takeEvery(GET_INIT_LIST, GetInitList);
}

export default rootSagas;
