import { all, fork } from 'redux-saga/effects';
import auth from './@store/auth/sagas';
import profile from './@store/profile/sagas';
import users from './@store/users/sagas';

export function* rootSaga(): IterableIterator<any> {
  yield all([fork(auth), fork(profile), fork(users)]);
}
