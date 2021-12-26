import { all, fork } from 'redux-saga/effects';
import auth from './@store/auth/sagas';
import profile from './@store/profile/sagas';

export function* rootSaga(): IterableIterator<any> {
  yield all([fork(auth), fork(profile)]);
}
