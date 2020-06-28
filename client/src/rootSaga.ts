import { all, takeEvery } from 'redux-saga/effects';
import { loginSaga } from './@store/auth/sagas';
import { getProfileSaga } from './@store/profile/sagas';
import { actions } from './@store/profile/actions';

export function* rootSaga(): IterableIterator<any> {
  yield all([
    loginSaga(),
    takeEvery(actions.fetchProfileAsync.request, getProfileSaga),
  ]);
}
