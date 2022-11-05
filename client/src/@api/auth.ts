import type {
  CaptchaResponseType,
  LoginResponseType,
  LogoutResponseType,
  MeResponseType,
} from '../@types';

import { instance } from './index';

export const AuthAPI = {
  me() {
    return instance.get<MeResponseType>(`/auth/me`);
  },
  login(
    email: string,
    password: string,
    rememberMe = false,
    captcha: string | null = null,
  ) {
    return instance.post<LoginResponseType>('auth/login', {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete<LogoutResponseType>(`/auth/login`);
  },
  getCaptchaUrl() {
    return instance.get<CaptchaResponseType>('security/get-captcha-url');
  },
};
