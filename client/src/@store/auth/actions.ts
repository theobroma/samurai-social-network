import { createAction, createAsyncAction, ActionType } from 'typesafe-actions';
import {
  SET_USER_ID,
  SET_AUTH_USER_DATA,
  CLEAR_AUTH_USER_DATA,
  CLEAR_CAPTCHA,
} from './constants';

// create action functions
export const setUserId = createAction(SET_USER_ID)<string>();
export const setAuthUserData = createAction(SET_AUTH_USER_DATA)<
  Record<string, any>
>();
export const clearAuthUserData = createAction(CLEAR_AUTH_USER_DATA)();
export const clearCaptcha = createAction(CLEAR_CAPTCHA)();

export const logoutAsync = createAsyncAction(
  '@@auth/LOGOUT_REQUEST',
  '@@auth/LOGOUT_SUCCESS',
  '@@auth/LOGOUT_FAILURE',
)<any, any, Error>();

export const captchaAsync = createAsyncAction(
  '@@auth/CAPTCHA_REQUEST',
  '@@auth/CAPTCHA_SUCCESS',
  '@@auth/CAPTCHA_FAILURE',
)<any, any, Error>();

export const actions = {
  setUserId,
  setAuthUserData,
  clearAuthUserData,
  captchaAsync,
  logoutAsync,
  clearCaptcha,
};

export type AuthActionType = ActionType<typeof actions>;
