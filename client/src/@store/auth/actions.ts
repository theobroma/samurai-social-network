import { createAction, createAsyncAction, ActionType } from 'typesafe-actions';
import {
  SET_USER_ID,
  GET_AUTH_USER_DATA,
  SET_AUTH_USER_DATA,
  CLEAR_AUTH_USER_DATA,
  CLEAR_CAPTCHA,
  START_LOGIN,
} from './constants';
import { LoginPayload } from './types';
import { APIResponseType, CaptchaType } from '../../@api';

// create action functions
export const startLoginProcess = createAction(START_LOGIN)<LoginPayload>();
export const setUserId = createAction(SET_USER_ID)<number>();
export const startAuthenticationProcess = createAction(GET_AUTH_USER_DATA)();
export const setAuthUserData = createAction(SET_AUTH_USER_DATA)<
  Record<string, any> // yes any
>();
export const clearAuthUserData = createAction(CLEAR_AUTH_USER_DATA)();
export const clearCaptcha = createAction(CLEAR_CAPTCHA)();

export const logoutAsync = createAsyncAction(
  '@@auth/LOGOUT_REQUEST',
  '@@auth/LOGOUT_SUCCESS',
  '@@auth/LOGOUT_FAILURE',
)<void, APIResponseType, Error>();

export const captchaAsync = createAsyncAction(
  '@@auth/CAPTCHA_REQUEST',
  '@@auth/CAPTCHA_SUCCESS',
  '@@auth/CAPTCHA_FAILURE',
)<void, CaptchaType, Error>();

export const actions = {
  startLoginProcess,
  setUserId,
  startAuthenticationProcess,
  setAuthUserData,
  clearAuthUserData,
  clearCaptcha,
  logoutAsync,
  captchaAsync,
};

export type AuthActionType = ActionType<typeof actions>;
