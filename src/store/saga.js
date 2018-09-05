import { put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './action';
import * as actionTypes from './constants';

function* getUsersSaga(action) {
  try {
    const response = yield axios.get('http://localhost:3001/users');
    yield put(actions.getUsersSuccess(response));
  } catch (error) {
    console.log(error);
    yield put(actions.getUsersFail(error));
  }
}

function* deleteUserSaga(action) {
  try {
    yield axios.patch(`http://localhost:3001/users/${action.id}`,{"status": "deleted"});
    yield put(actions.deleteUserSuccess());
    yield put(actions.getUsers());
  } catch (error) {
    yield put(actions.deleteUserFail(error));
  }
}

export function* fetchSaga() {
    yield all([
      takeEvery(actionTypes.GET_USERS, getUsersSaga),
      takeEvery(actionTypes.DELETE_USER, deleteUserSaga)
    ]);
  }