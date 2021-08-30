import { instance } from './index';

type ErrorMessage = string;
type Url = string;

export const SecurityAPI = {
  getCaptchaUrl: async (): Promise<Url | ErrorMessage> => {
    try {
      const response = await instance.get('security/get-captcha-url');
      return response.status === 200 ? response.data.url : response.data;
    } catch (e: any) {
      return e.message;
    }
  },
};
