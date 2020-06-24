import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { AuthAPI } from '../../@api/socialNetworkAPIs';

export function* loginSaga() {
  console.log('Hello Sagas!');
}
