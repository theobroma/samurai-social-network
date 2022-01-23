import { RootState } from '../configureStore';

export const getUserId = (state: RootState) => {
  return state.auth.userId;
};

export const getCaptchaUrl = (state: RootState) => {
  return state.auth.captchaUrl;
};

export const isAuthSelector = (state: RootState) => {
  return state.auth.isAuth;
};
