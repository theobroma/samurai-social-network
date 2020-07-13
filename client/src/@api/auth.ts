import {
  instance,
  ResponseAPI,
  ResultCodes,
  ResultCodeWithCaptcha,
} from './index';

type AuthMeData = {
  id: number;
  email: string;
  login: string;
};
type AuthLogin = {
  userId: number;
};

export const AuthAPI = {
  me() {
    return instance
      .get<ResponseAPI<AuthMeData>>(`auth/me`)
      .then((res) => res.data);
  },
  login(
    email: string,
    password: string,
    rememberMe = false,
    captcha: string | null = null,
  ) {
    return instance
      .post<ResponseAPI<AuthLogin, ResultCodes | ResultCodeWithCaptcha>>(
        'auth/login',
        {
          email,
          password,
          rememberMe,
          captcha,
        },
      )
      .then((res) => res.data);
  },
  logout: async (): Promise<any> => {
    try {
      const response = await instance.delete('auth/login');
      return response;
    } catch (e) {
      return e.message;
    }
  },
};
