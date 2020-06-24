import { createReducer } from 'typesafe-actions';
import { SET_USER_ID } from './constants';
// import { ClientsListType, ClientsActionType } from './types';

export const authInitialState = {
  id: null as number | null,
};

export const authReducer = createReducer<any, any>(authInitialState, {
  [SET_USER_ID]: (state, { payload: userId }) => {
    return {
      ...state,
      id: userId,
    };
  },
});

export default authReducer;
