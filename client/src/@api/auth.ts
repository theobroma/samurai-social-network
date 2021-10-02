import {
  instance,
  APIResponseType,
  ResultCodesEnum,
  ResultCodeForCapcthaEnum,
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
      .get<APIResponseType<AuthMeData>>(`auth/me`)
      .then((res) => res.data);
  },
  login: async (
    email: string,
    password: string,
    rememberMe = false,
    captcha: string | null = null,
  ): Promise<any> => {
    try {
      const res =
        await instance.post<// APIResponseType<AuthLogin, ResultCodesEnum | ResultCodeForCapcthaEnum>
        any>('auth/login', {
          email,
          password,
          rememberMe,
          captcha,
        });
      return res.data;
    } catch (e: any) {
      return e.message;
    }
  },
  logout: async (): Promise<any> => {
    try {
      const res = await instance.delete('auth/login');
      return res.data;
    } catch (e: any) {
      return e.message;
    }
  },
};
