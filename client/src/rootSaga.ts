import { all, takeEvery } from 'redux-saga/effects';
import { loginSaga } from './@store/auth/sagas';
import { getProfileSaga, getStatusSaga } from './@store/profile/sagas';
import { fetchProfileAsync, fetchStatusAsync } from './@store/profile/actions';
import {
  fetchUsersAsync,
  followUserAsync,
  unfollowUserAsync,
} from './@store/users/actions';
import {
  getUsersSaga,
  followUserSaga,
  unfollowUserSaga,
} from './@store/users/sagas';

export function* rootSaga(): IterableIterator<any> {
  yield all([
    loginSaga(),
    takeEvery(fetchProfileAsync.request, getProfileSaga),
    takeEvery(fetchUsersAsync.request, getUsersSaga),
    takeEvery(fetchStatusAsync.request, getStatusSaga),
    takeEvery(followUserAsync.request, followUserSaga),
    takeEvery(unfollowUserAsync.request, unfollowUserSaga),
  ]);
}
