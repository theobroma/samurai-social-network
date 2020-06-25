// apiKey is https://social-network.samuraijs.com/ access string
import axios, { AxiosInstance } from 'axios';
import { apiKey } from './keys';

export const instance: AxiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': apiKey,
  },
});

export enum ResultCodes {
  Success = 0,
  Error = 1,
}
export enum ResultCodeWithCaptcha {
  CaptchaIsRequired = 10,
}

export type ResponseAPI<D = {}, RC = ResultCodes> = {
  data: D;
  resultCode: RC;
  messages: Array<string>;
};
