import { ROLE } from '../../@types/ROLE';
import { RootState } from '../index';
import { IDType } from '../../@types';

export const getUserId = (state: RootState): IDType => {
  return state.auth.id;
};

export const getUserRole = (state: RootState): ROLE => {
  return state.auth.userRole;
};

export const getCaptchaUrl = (state: RootState): string | null => {
  return state.auth.captchaUrl;
};
