import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { fetchUsersAsync, followUserAsync, unfollowUserAsync } from './actions';
import { UsersAPI } from '../../@api/users';
import { getUsersFilter } from './selectors';
import { UsersFilterType } from '../../@types';

export function* getUsersSaga(
  action: ReturnType<typeof fetchUsersAsync.request>,
): SagaIterator<void> {
  try {
    // github.com/redux-saga/redux-saga/issues/2015
    const usersFilter: UsersFilterType = yield select(getUsersFilter);
    const res = yield call(
      UsersAPI.getUsers,
      action.payload.currentPage,
      action.payload.pageSize,
      usersFilter,
    );
    if (res.error) {
      yield put(fetchUsersAsync.failure(res.error));
    } else {
      yield put(fetchUsersAsync.success(res));
    }
  } catch (err: any) {
    yield put(fetchUsersAsync.failure(err));
  }
}

export function* followUserSaga(
  action: ReturnType<typeof followUserAsync.request>,
): SagaIterator<void> {
  try {
    const response = yield call(UsersAPI.followUser, action.payload);
    yield put(followUserAsync.success(response));
  } catch (err: any) {
    yield put(followUserAsync.failure(err));
  }
}

export function* unfollowUserSaga(
  action: ReturnType<typeof unfollowUserAsync.request>,
): SagaIterator<void> {
  try {
    const response = yield call(UsersAPI.unfollowUser, action.payload);
    yield put(unfollowUserAsync.success(response));
  } catch (err: any) {
    yield put(unfollowUserAsync.failure(err));
  }
}

function* rootSagas(): any {
  yield all([
    takeLatest(fetchUsersAsync.request, getUsersSaga),
    takeLatest(followUserAsync.request, followUserSaga),
    takeLatest(unfollowUserAsync.request, unfollowUserSaga),
  ]);
}

export default rootSagas;
