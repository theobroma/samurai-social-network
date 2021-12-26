import { all, fork } from 'redux-saga/effects';
import profile from './@store/profile/sagas';

export function* rootSaga(): IterableIterator<any> {
  yield all([fork(profile)]);
}
