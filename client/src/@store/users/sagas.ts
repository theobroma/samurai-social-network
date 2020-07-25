import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import { fetchUsersAsync, followUserAsync, unfollowUserAsync } from './actions';
import { UsersAPI } from '../../@api/users';
import { getUsersFilter } from './selectors';

export function* getUsersSaga(
  action: ReturnType<typeof fetchUsersAsync.request>,
): Generator {
  try {
    const usersFilter: any = yield select(getUsersFilter);
    const response = yield call(
      UsersAPI.getUsers,
      action.payload.currentPage,
      action.payload.pageSize,
      usersFilter.term,
      usersFilter.friend,
    );
    yield put(fetchUsersAsync.success(response));
  } catch (err) {
    yield put(fetchUsersAsync.failure(err));
  }
}

export function* followUserSaga(
  action: ReturnType<typeof followUserAsync.request>,
): Generator {
  try {
    const response = yield call(UsersAPI.followUser, action.payload);
    yield put(followUserAsync.success(response));
  } catch (err) {
    yield put(followUserAsync.failure(err));
  }
}

export function* unfollowUserSaga(
  action: ReturnType<typeof unfollowUserAsync.request>,
): Generator {
  try {
    const response = yield call(UsersAPI.unfollowUser, action.payload);
    yield put(unfollowUserAsync.success(response));
  } catch (err) {
    yield put(unfollowUserAsync.failure(err));
  }
}

function* rootSagas() {
  yield all([
    takeLatest(fetchUsersAsync.request, getUsersSaga),
    takeLatest(followUserAsync.request, followUserSaga),
    takeLatest(unfollowUserAsync.request, unfollowUserSaga),
  ]);
}

export default rootSagas;
