import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { AuthAPI } from '../../@api/auth';
// import { AuthAPI } from '../../@api/socialNetworkAPIs';
import { actions } from './actions';

export type LoginPayload = {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: string;
};

const getAuthUserData = 'AUTH/getUserAuthData';
const clearAuthUserData = 'AUTH/clearAuthData';
const startLogin = 'AUTH/login';

export const startAuthenticationProcess = () => ({ type: getAuthUserData });
export const startLogoutProcess = () => ({ type: clearAuthUserData });
export const startLoginProcess = (payload: LoginPayload) => ({
  type: startLogin,
  payload,
});

export function* loginSaga() {
  yield takeEvery(getAuthUserData, authMe);
  // yield takeLatest(clearAuthUserData, logout);
  yield takeLatest(startLogin, login);
}

export function* login(action: any) {
  try {
    const response = yield call(
      AuthAPI.login,
      action.payload.email,
      action.payload.password,
      action.payload.rememberMe,
    );
    if (response.resultCode === 0) {
      yield put(actions.setUserId(response.data.userId));
    }
    // else if (response.resultCode === 10) {
    //   yield all([
    //     call(captchaRequest),
    //     put(actions.setErrorMessage(response.error)),
    //   ]);
    // }
    else {
      //   put(actions.setErrorMessage(response.error));
    }
  } catch (e) {
    console.log(e.message);
  } finally {
    // yield put(actions.setFetchingStatus(false));
  }
}

export function* authMe() {
  try {
    // yield put(actions.setFetchingStatus(true));
    const response = yield call(AuthAPI.me);
    if (typeof response === 'string') {
      // yield put(actions.setErrorMessage(response));
    } else {
      yield all([
        put(actions.setAuthUserData(response.data)),
        // put(actions.loginSuccess()),
      ]);
    }
  } catch (e) {
    console.log(e.message);
  } finally {
    // yield put(actions.setFetchingStatus(false));
  }
}
