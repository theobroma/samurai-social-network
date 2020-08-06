import { call, put, takeLatest, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { SagaIterator } from 'redux-saga';
import { SecurityAPI } from '../../@api/security';
import { AuthAPI } from '../../@api/auth';
import { actions } from './actions';
import { ROLE } from '../../@types';
import { GET_AUTH_USER_DATA, START_LOGIN } from './constants';

export function* loginSaga(action: any): SagaIterator<void> {
  try {
    const response = yield call(
      AuthAPI.login,
      action.payload.email,
      action.payload.password,
      action.payload.rememberMe,
      action.payload.captcha,
    );

    if (response.resultCode === 0) {
      yield put(actions.setUserId(response.data.userId));
      yield put(actions.clearCaptcha());
      yield put(push('/profile'));
    }

    if (response.resultCode === 10) {
      yield all([
        put(actions.captchaAsync.request()),
        // put(actions.setErrorMessage(response.error)),
      ]);
    } else {
      //   put(actions.setErrorMessage(response.error));
    }
  } catch (e) {
    console.log(e.message);
  } finally {
    // yield put(actions.setFetchingStatus(false));
  }
}

export function* logoutSaga(): SagaIterator<void> {
  try {
    const response = yield call(AuthAPI.logout);

    if (response.data.resultCode === 0) {
      yield all([
        put(actions.clearAuthUserData()),
        // put(actions.logoutAsync.success(response)),
        put(push('/login')),
      ]);
    }
  } catch (err) {
    yield put(actions.logoutAsync.failure(err));
  }
}

export function* authMeSaga(): SagaIterator<void> {
  try {
    // yield put(actions.setFetchingStatus(true));
    const response = yield call(AuthAPI.me);
    let userRole = ROLE.GUEST;
    if (response.data.id) {
      userRole = ROLE.USER;
    }
    if (typeof response === 'string') {
      // yield put(actions.setErrorMessage(response));
    } else {
      yield all([
        put(actions.setAuthUserData({ ...response.data, userRole })),
        // put(actions.loginSuccess()),
      ]);
    }
  } catch (e) {
    console.log(e.message);
  } finally {
    // yield put(actions.setFetchingStatus(false));
  }
}

export function* captchaSaga(): SagaIterator<void> {
  try {
    const response = yield call(SecurityAPI.getCaptchaUrl);
    yield put(actions.captchaAsync.success(response));
  } catch (err) {
    yield put(actions.captchaAsync.failure(err));
  }
}

function* rootSagas() {
  yield all([
    yield takeLatest(START_LOGIN, loginSaga),
    yield takeLatest(GET_AUTH_USER_DATA, authMeSaga),
    yield takeLatest(actions.captchaAsync.request, captchaSaga),
    yield takeLatest(actions.logoutAsync.request, logoutSaga),
  ]);
}

export default rootSagas;
