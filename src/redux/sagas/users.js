import { put, call } from 'redux-saga/effects';

import {
  getUsers
} from '../../api/users';

import {
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAIL,
} from '../modules/users';

function* onLoadUsers() {
  try {
    const users = yield call(getUsers);
    yield put({ type: LOAD_USERS_SUCCESS, result: users.data });
  } catch (error) {
    yield put({ type: LOAD_USERS_FAIL, error });
  }
}

export default [
  onLoadUsers
];
