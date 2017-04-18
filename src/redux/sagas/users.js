import { put, call, take } from 'redux-saga/effects';

import {
  getUsers
} from '../../api/users';

import {
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAIL,
  LOAD_USERS,
} from '../modules/users';

function* onLoadUsers() {
  while (true) {
    yield take(LOAD_USERS);

    try {
      const users = yield call(getUsers);
      yield put({ type: LOAD_USERS_SUCCESS, result: users.data });
    } catch (error) {
      yield put({ type: LOAD_USERS_FAIL, error });
    }
  }
}

export default [
  onLoadUsers
];
