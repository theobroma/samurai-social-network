import { createAction } from 'typesafe-actions';
import { SET_USER_ID, SET_AUTH_USER_DATA } from './constants';

// create action functions
export const setUserId = createAction(SET_USER_ID)<string>();
export const setAuthUserData = createAction(SET_AUTH_USER_DATA)<
  Record<string, any>
>();

export const actions = {
  setUserId,
  setAuthUserData,
};
