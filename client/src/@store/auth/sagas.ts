import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
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
  yield takeLatest(actions.logoutAsync.request, logoutSaga);
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
      yield put(push('/profile'));
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

export function* logoutSaga(
  // action: ReturnType<typeof actions.fetchProfileAsync.request>,
  action: any,
): Generator {
  try {
    const response: any = yield call(AuthAPI.logout);

    if (response.data.resultCode === 0) {
      yield all([
        put(
          actions.setAuthUserData({
            id: null,
            email: null,
            login: null,
            userRole: 'guest',
          }),
        ),
        put(actions.logoutAsync.success(response)),
        put(push('/login')),
      ]);
    }
  } catch (err) {
    yield put(actions.logoutAsync.failure(err));
  }
}

export function* authMe() {
  try {
    // yield put(actions.setFetchingStatus(true));
    const response = yield call(AuthAPI.me);
    let userRole = 'guest';
    if (response.data.id) {
      userRole = 'user';
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
