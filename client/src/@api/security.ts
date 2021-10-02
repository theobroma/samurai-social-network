import { instance } from './index';

type ErrorMessage = string;
type Url = string;

export const SecurityAPI = {
  getCaptchaUrl: async (): Promise<Url | ErrorMessage> => {
    try {
      const response = await instance.get('security/get-captcha-url');
      const { url } = response.data;
      return response.status === 200 ? url : response.data;
    } catch (e: any) {
      return e.message;
    }
  },
};
