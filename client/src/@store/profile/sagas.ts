import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { ProfileAPI } from '../../@api/profile';
import {
  fetchProfileAsync,
  fetchStatusAsync,
  updateStatusAsync,
  updateProfileAsync,
  updateAvatarAsync,
} from './actions';
import { getUserId } from '../auth/selectors';
import { IDType } from '../../@types';
import { StatusAPI } from '../../@api/status';

export function* getProfileSaga(
  action: ReturnType<typeof fetchProfileAsync.request>,
): SagaIterator<void> {
  try {
    const res = yield call(ProfileAPI.getProfile, action.payload);
    if (res.data.error) {
      yield put(fetchProfileAsync.failure(res.data.error));
    } else {
      yield put(fetchProfileAsync.success(res.data));
    }
  } catch (err: any) {
    yield put(fetchProfileAsync.failure(err));
  }
}

export function* getStatusSaga(
  action: ReturnType<typeof fetchStatusAsync.request>,
): SagaIterator<void> {
  try {
    // const userId: number | null = yield select(getUserId);
    const res = yield call(StatusAPI.getStatus, action.payload);
    yield put(fetchStatusAsync.success(res.data));
  } catch (err: any) {
    yield put(fetchStatusAsync.failure(err));
  }
}

export function* updateStatusSaga(
  action: ReturnType<typeof updateStatusAsync.request>,
): SagaIterator<void> {
  try {
    const response = yield call(StatusAPI.updateStatus, action.payload);
    yield put(updateStatusAsync.success(response));
    // refetch status
    const userId: IDType = yield select(getUserId);
    yield put(fetchStatusAsync.request(userId));
  } catch (err: any) {
    yield put(updateStatusAsync.failure(err));
  }
}

export function* updateProfileSaga(
  action: ReturnType<typeof updateProfileAsync.request>,
): SagaIterator<void> {
  try {
    const response = yield call(ProfileAPI.updateProfile, action.payload);
    yield put(updateProfileAsync.success(response));
    // refetch profile
    const userId: IDType = yield select(getUserId);
    yield put(fetchProfileAsync.request(userId));
  } catch (err: any) {
    yield put(updateProfileAsync.failure(err));
  }
}

export function* updateAvatarSaga(
  action: ReturnType<typeof updateAvatarAsync.request>,
): SagaIterator<void> {
  try {
    const response = yield call(ProfileAPI.saveAvatar, action.payload);
    yield put(updateAvatarAsync.success(response));
    // refetch profile
    const userId: IDType = yield select(getUserId);
    yield put(fetchProfileAsync.request(userId));
  } catch (err: any) {
    yield put(updateAvatarAsync.failure(err));
  }
}

function* rootSagas(): any {
  yield all([
    takeLatest(fetchProfileAsync.request, getProfileSaga),
    takeLatest(fetchStatusAsync.request, getStatusSaga),
    takeLatest(updateStatusAsync.request, updateStatusSaga),
    takeLatest(updateProfileAsync.request, updateProfileSaga),
    takeLatest(updateAvatarAsync.request, updateAvatarSaga),
  ]);
}

export default rootSagas;
