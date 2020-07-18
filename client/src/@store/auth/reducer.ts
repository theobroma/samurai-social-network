import { createReducer } from 'typesafe-actions';
import {
  SET_USER_ID,
  SET_AUTH_USER_DATA,
  CLEAR_AUTH_USER_DATA,
} from './constants';
import { ROLE } from '../../@types';
import { AuthActionType } from './actions';

export const authInitialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  captchaUrl: null as string | null,
  errorMessage: null as string | null,
  isAuthorized: false,
  isFetching: false,
  userRole: ROLE.GUEST,
};

export type authStateType = typeof authInitialState;

export const authReducer = createReducer<authStateType, any>(authInitialState, {
  [SET_USER_ID]: (state, { payload: userId }) => {
    return {
      ...state,
      id: userId,
    };
  },
  [SET_AUTH_USER_DATA]: (state, { payload: user }) => {
    return {
      ...state,
      id: user.id,
      email: user.email,
      login: user.login,
      userRole: user.userRole || ROLE.GUEST,
    };
  },
  [CLEAR_AUTH_USER_DATA]: (state) => {
    return {
      ...state,
      id: null,
      email: null,
      login: null,
      userRole: ROLE.GUEST,
    };
  },
});

export default authReducer;
