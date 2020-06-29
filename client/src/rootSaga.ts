import { all, takeEvery } from 'redux-saga/effects';
import { loginSaga } from './@store/auth/sagas';
import { getProfileSaga } from './@store/profile/sagas';
import { fetchProfileAsync } from './@store/profile/actions';
// import { fetchUsersAsync } from './@store/users/actions';
// import { getUsersSaga } from './@store/users/sagas';

export function* rootSaga(): IterableIterator<any> {
  yield all([
    loginSaga(),
    takeEvery(fetchProfileAsync.request, getProfileSaga),
    // takeEvery(fetchUsersAsync.request, getUsersSaga),
  ]);
}
