import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { AuthAPI } from '../../@api/socialNetworkAPIs';

export type LoginPayload = {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: string;
};

const startLogin = 'AUTH/login';
export const startLoginProcess = (payload: LoginPayload) => ({
  type: startLogin,
  payload,
});

export function* loginSaga() {
  //   yield takeEvery(getAuthUserData, authMe);
  //   yield takeLatest(clearAuthUserData, logout);
  yield takeLatest(startLogin, login);
}

export function* login(action: any) {
  try {
    const user = yield call(
      AuthAPI.login,
      action.payload.email,
      action.payload.password,
      action.payload.rememberMe,
    );
    yield put({ type: 'USER_FETCH_SUCCEEDED', user });
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

// export function* loginSaga() {
//   yield takeEvery(getAuthUserData, authMe);
//   yield takeLatest(clearAuthUserData, logout);
//   yield takeLatest(startLogin, login);
// }

// function* login(action: SagaAction<LoginPayload>) {
//   try {
//     yield put(actions.setFetchingStatus(true));
//     const response = yield call(
//       AuthAPI.login,
//       action.payload.email,
//       action.payload.password,
//       action.payload.rememberMe,
//       action.payload.captcha,
//     );
//     if (response.resultCode === 0) {
//       yield put(actions.setUserId(response.userId));
//     } else if (response.resultCode === 10) {
//       yield all([
//         call(captchaRequest),
//         put(actions.setErrorMessage(response.error)),
//       ]);
//     } else {
//       put(actions.setErrorMessage(response.error));
//     }
//   } catch (e) {
//     console.log(e.message);
//   } finally {
//     yield put(actions.setFetchingStatus(false));
//   }
// }
