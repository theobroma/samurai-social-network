import { createAsyncAction, ActionType, createAction } from 'typesafe-actions';
// import { UserType } from '../../@types';
import { SET_CURRENT_PAGE, SET_USERS_FILTER } from './constants';
import { UsersFilterType } from '../../@types';

export const setCurrentPage = createAction(SET_CURRENT_PAGE)<number>();
export const setUsersFilter = createAction(SET_USERS_FILTER)<UsersFilterType>();

export const fetchUsersAsync = createAsyncAction(
  '@@users/FETCH_USERS_REQUEST',
  '@@users/FETCH_USERS_SUCCESS',
  '@@users/FETCH_USERS_FAILURE',
)<any, any, Error>();

export const followUserAsync = createAsyncAction(
  '@@users/FOLLOW_USER_REQUEST',
  '@@users/FOLLOW_USER_SUCCESS',
  '@@users/FOLLOW_USER_FAILURE',
)<number, any, Error>();

export const unfollowUserAsync = createAsyncAction(
  '@@users/UNFOLLOW_USER_REQUEST',
  '@@users/UNFOLLOW_USER_SUCCESS',
  '@@users/UNFOLLOW_USER_FAILURE',
)<number, any, Error>();

export const actions = {
  setCurrentPage,
  setUsersFilter,
  fetchUsersAsync,
  followUserAsync,
  unfollowUserAsync,
};

export type UsersActionType = ActionType<typeof actions>;
