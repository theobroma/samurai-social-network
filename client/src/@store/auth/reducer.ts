import { createReducer } from 'typesafe-actions';
import { SET_USER_ID, SET_AUTH_USER_DATA } from './constants';
// import { ClientsListType, ClientsActionType } from './types';

export const authInitialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  captchaUrl: null as string | null,
  errorMessage: null as string | null,
  isAuthorized: false,
  isFetching: false,
};

export const authReducer = createReducer<any, any>(authInitialState, {
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
    };
  },
});

export default authReducer;
