import { createAction } from 'typesafe-actions';
import { TOGGLE_FILTER } from './constants';

// create action functions
export const toggleFilter = createAction(TOGGLE_FILTER)<string>();

export const actions = {
  toggleFilter,
};
