import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { ProfileAPI } from '../../@api/profile';
import {
  fetchProfileAsync,
  fetchStatusAsync,
  updateStatusAsync,
  updateProfileAsync,
} from './actions';
import { getUserId } from '../auth/selectors';

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
    const userId = yield select(getUserId);
    const response: any = yield call(ProfileAPI.getStatus, action.payload);
    yield put(fetchStatusAsync.success(response));
  } catch (err) {
    yield put(fetchStatusAsync.failure(err));
  }
}

export function* updateStatusSaga(
  // action: ReturnType<typeof actions.fetchProfileAsync.request>,
  action: any,
): Generator {
  try {
    const response: any = yield call(ProfileAPI.updateStatus, action.payload);
    yield put(updateStatusAsync.success(response));
    // refetch status
    const userId = yield select(getUserId);
    yield put(fetchStatusAsync.request(userId));
  } catch (err) {
    yield put(updateStatusAsync.failure(err));
  }
}

export function* updateProfileSaga(
  // action: ReturnType<typeof actions.fetchProfileAsync.request>,
  action: any,
): Generator {
  try {
    const response: any = yield call(ProfileAPI.updateProfile, action.payload);
    yield put(updateProfileAsync.success(response));
    // refetch profile
    const userId = yield select(getUserId);
    yield put(fetchProfileAsync.request(userId));
  } catch (err) {
    yield put(updateProfileAsync.failure(err));
  }
}

function* rootSagas() {
  yield all([
    takeLatest(fetchProfileAsync.request, getProfileSaga),
    takeLatest(fetchStatusAsync.request, getStatusSaga),
    takeLatest(updateStatusAsync.request, updateStatusSaga),
    takeLatest(updateProfileAsync.request, updateProfileSaga),
  ]);
}

export default rootSagas;
