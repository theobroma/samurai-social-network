import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { ProfileType } from '../../@types';
import { ProfileAPI } from '../../@api/profile';
import { fetchProfileAsync, fetchStatusAsync } from './actions';

export function* getProfileSaga(
  // action: ReturnType<typeof actions.fetchProfileAsync.request>,
  action: any,
): Generator {
  try {
    const response: any = yield call(ProfileAPI.getProfile, action.payload);
    yield put(fetchProfileAsync.success(response));
  } catch (err) {
    yield put(fetchProfileAsync.failure(err));
  }
}

export function* getStatusSaga(
  // action: ReturnType<typeof actions.fetchProfileAsync.request>,
  action: any,
): Generator {
  try {
    const response: any = yield call(ProfileAPI.getStatus, action.payload);
    yield put(fetchStatusAsync.success(response));
  } catch (err) {
    yield put(fetchStatusAsync.failure(err));
  }
}
