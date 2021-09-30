import { RootState } from '../index';
import { IDType } from '../../@types';

export const getUserId = (state: RootState): IDType => {
  return state.auth.userId;
};

export const getCaptchaUrl = (state: RootState): string | null => {
  return state.auth.captchaUrl;
};

export const isAuthSelector = (state: RootState) => {
  return state.auth.isAuth;
};
