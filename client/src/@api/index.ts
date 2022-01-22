// REACT_APP_API_KEY is https://social-network.samuraijs.com/ access string
import axios from 'axios';
import { UserType, PhotosType } from '../@types';

export const API_KEY = process.env.REACT_APP_API_KEY as string;
export const API_URL = 'https://social-network.samuraijs.com/api/1.0/';

export const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'API-KEY': API_KEY,
  },
});

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCapcthaEnum {
  CaptchaIsRequired = 10,
}

export type DataType = Record<string, unknown>;

export type APIResponseType<D = DataType, RC = ResultCodesEnum> = {
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
