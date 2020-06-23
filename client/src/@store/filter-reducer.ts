// import { createReducer } from 'typesafe-actions';
import { SET_FILTER } from './constants';
import { FilterAction } from './actions';
// import { FilterType } from './types';

export const filterInitialState = 'SHOW_ALL';

export const filterReducer = (
  state = filterInitialState,
  action: FilterAction,
): string => {
  if (action.type === SET_FILTER) {
    return action.payload;
  }
  return state;
};

export default filterReducer;
