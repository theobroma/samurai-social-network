import { createReducer } from 'typesafe-actions';
import { TOGGLE_FILTER } from './constants';
import { ClientsListType, ClientsActionType } from './types';

export const authInitialState: ClientsListType = {
  data: [],
};

export const authReducer = createReducer<any, any>(authInitialState, {
  [TOGGLE_FILTER]: (state) => {
    return {
      ...state,
    };
  },
});

export default authReducer;
