import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { fetchUsersAsync, followUserAsync } from './actions';
import { UsersAPI } from '../../@api/users';

export function* getUsersSaga(
  // action: ReturnType<typeof actions.fetchProfileAsync.request>,
  action: any,
): Generator {
  try {
    const response: any = yield call(UsersAPI.getUsers, action.payload);
    yield put(fetchUsersAsync.success(response));
  } catch (err) {
    yield put(fetchUsersAsync.failure(err));
  }
}

export function* followUserSaga(
  // action: ReturnType<typeof actions.fetchProfileAsync.request>,
  action: any,
): Generator {
  try {
    const response: any = yield call(UsersAPI.followUser, action.payload);
    yield put(followUserAsync.success(response));
  } catch (err) {
    yield put(followUserAsync.failure(err));
  }
}
