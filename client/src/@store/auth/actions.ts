import { createAction } from 'typesafe-actions';
// import { createAsyncAction } from 'typesafe-actions';
import { TOGGLE_FILTER } from './constants';

// create action functions
export const toggleFilter = createAction(TOGGLE_FILTER)<string>();

export const actions = {
  toggleFilter,
};

// const fetchTodosAsync = createAsyncAction(
//   'LOGIN_REQUEST',
//   'FETCH_TODOS_SUCCESS',
//   'FETCH_TODOS_FAILURE',
// )<string, Todo[], Error>();
