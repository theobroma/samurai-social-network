import type { RootState } from '../configureStore';

export const userIdSelector = (state: RootState) => {
  return state.auth.userId;
};

export const captchaUrlSelector = (state: RootState) => {
  return state.auth.captchaUrl;
};

export const isAuthSelector = (state: RootState) => {
  return state.auth.isAuth;
};
