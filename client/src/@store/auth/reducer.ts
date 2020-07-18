import { createReducer } from 'typesafe-actions';
import { SET_USER_ID, SET_AUTH_USER_DATA } from './constants';
import { ROLE } from '../../@types';
// import { ClientsListType, ClientsActionType } from './types';

export const authInitialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  captchaUrl: null as string | null,
  errorMessage: null as string | null,
  isAuthorized: false,
  isFetching: false,
  userRole: 'guest' as ROLE,
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
      userRole: user.userRole || 'guest',
    };
  },
});

export default authReducer;
