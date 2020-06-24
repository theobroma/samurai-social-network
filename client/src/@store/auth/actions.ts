import { createAction } from 'typesafe-actions';
// import { createAsyncAction } from 'typesafe-actions';
import { SET_USER_ID } from './constants';

// create action functions
export const setUserId = createAction(SET_USER_ID)<string>();

export const actions = {
  setUserId,
};

// const fetchTodosAsync = createAsyncAction(
//   'LOGIN_REQUEST',
//   'FETCH_TODOS_SUCCESS',
//   'FETCH_TODOS_FAILURE',
// )<string, Todo[], Error>();
