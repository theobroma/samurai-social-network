// REACT_APP_API_KEY is https://social-network.samuraijs.com/ access string
// https://stackoverflow.com/a/52947618/3988363
// https://github.com/karpolan/react-mui-pro-starter/blob/main/src/api/axios.js
import axios from 'axios';

export const API_KEY = process.env.REACT_APP_API_KEY as string;
export const API_URL = 'https://social-network.samuraijs.com/api/1.0/';

export const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'API-KEY': API_KEY,
  },
});
