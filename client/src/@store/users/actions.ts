import { createAsyncAction, ActionType, createAction } from 'typesafe-actions';
import { UserType } from '../../@types';
import { SET_CURRENT_PAGE } from './constants';

export const fetchUsersAsync = createAsyncAction(
  'FETCH_USERS_REQUEST',
  'FETCH_USERS_SUCCESS',
  'FETCH_USERS_FAILURE',
)<any, any, Error>();

export const setCurrentPage = createAction(SET_CURRENT_PAGE)<number>();

export const actions = {
  fetchUsersAsync,
  setCurrentPage,
};

export type UsersAction = ActionType<typeof actions>;
