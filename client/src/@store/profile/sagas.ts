import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { ProfileType } from '../../@types';
import { ProfileAPI } from '../../@api/profile';
import { actions } from './actions';

export function* getProfileSaga(
  // action: ReturnType<typeof actions.fetchProfileAsync.request>,
  action: any,
): Generator {
  try {
    const response: any = yield call(ProfileAPI.getProfile, action.payload);
    yield put(actions.fetchProfileAsync.success(response));
  } catch (err) {
    yield put(actions.fetchProfileAsync.failure(err));
  }
}
