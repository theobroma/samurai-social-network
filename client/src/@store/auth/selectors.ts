import { ROLE } from '../../@types/ROLE';
import { RootState } from '../index';
import { IDType } from '../../@types';

export const getUserId = (state: RootState): IDType => {
  return state.auth.userId;
};

export const getUserRole = (state: RootState): ROLE => {
  return state.auth.userRole;
};

export const getCaptchaUrl = (state: RootState): string | null => {
  return state.auth.captchaUrl;
};

export const isAuthSelector = (state: RootState) => {
  return state.auth.isAuth;
};
