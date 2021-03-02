// REACT_APP_API_KEY is https://social-network.samuraijs.com/ access string
import axios, { AxiosInstance } from 'axios';
import { UserType, PhotosType } from '../@types';

export const instance: AxiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': process.env.REACT_APP_API_KEY,
  },
});

console.log(process.env)


export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCapcthaEnum {
  CaptchaIsRequired = 10,
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D;
  messages: Array<string>;
  resultCode: RC;
};

export type GetItemsType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};

export type PhotosDataType = {
  photos: PhotosType;
};

export type CaptchaType = string;
