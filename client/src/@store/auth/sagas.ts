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

// const getAuthUserData = 'AUTH/getUserAuthData';
// const clearAuthUserData = 'AUTH/clearAuthData';
// const startLogin = 'AUTH/login';

const getAuthUserData = 'AUTH/getUserAuthData';
export const startAuthenticationProcess = () => ({ type: getAuthUserData });

const clearAuthUserData = 'AUTH/clearAuthData';
export const startLogoutProcess = () => ({ type: clearAuthUserData });

const startLogin = 'AUTH/login';
export const startLoginProcess = (payload: LoginPayload) => ({
  type: startLogin,
  payload,
});

export function* loginSaga(action: any) {
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

export function* authMeSaga() {
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

function* rootSagas() {
  yield all([
    yield takeLatest(getAuthUserData, authMeSaga),
    // yield takeLatest(clearAuthUserData, logout);
    yield takeLatest(startLogin, loginSaga),
    yield takeLatest(actions.logoutAsync.request, logoutSaga),
  ]);
}

export default rootSagas;
