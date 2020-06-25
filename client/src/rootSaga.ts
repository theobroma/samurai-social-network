import { all } from 'redux-saga/effects';
import { loginSaga } from './@store/auth/sagas';

export function* rootSaga(): IterableIterator<any> {
  yield all([loginSaga()]);
}
