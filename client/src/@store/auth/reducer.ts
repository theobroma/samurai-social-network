import { createReducer } from 'typesafe-actions';
import {
  SET_USER_ID,
  SET_AUTH_USER_DATA,
  CLEAR_AUTH_USER_DATA,
  CLEAR_CAPTCHA,
} from './constants';
import { ROLE } from '../../@types';
import { AuthActionType, actions } from './actions';

export const authInitialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  captchaUrl: null as string | null,
  // errorMessage: null as string | null,
  // isAuthorized: false,
  // isFetching: false,
  userRole: ROLE.GUEST,
};

export type authStateType = typeof authInitialState;

//  TODO:AuthActionType
export const authReducer = createReducer<authStateType, AuthActionType>(
  authInitialState,
  {
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
    [CLEAR_CAPTCHA]: (state) => {
      return {
        ...state,
        captchaUrl: null,
      };
    },
  },
).handleAction(actions.captchaAsync.success, (state, action) => ({
  ...state,
  captchaUrl: action.payload,
}));

export default authReducer;
