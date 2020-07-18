import { createAsyncAction, ActionType, createAction } from 'typesafe-actions';
import { UserType } from '../../@types';
import { SET_CURRENT_PAGE } from './constants';

export const fetchUsersAsync = createAsyncAction(
  'FETCH_USERS_REQUEST',
  'FETCH_USERS_SUCCESS',
  'FETCH_USERS_FAILURE',
)<any, any, Error>();

export const setCurrentPage = createAction(SET_CURRENT_PAGE)<number>();

export const followUserAsync = createAsyncAction(
  'FOLLOW_USER_REQUEST',
  'FOLLOW_USER_SUCCESS',
  'FOLLOW_USER_FAILURE',
)<number, any, Error>();

export const unfollowUserAsync = createAsyncAction(
  'UNFOLLOW_USER_REQUEST',
  'UNFOLLOW_USER_SUCCESS',
  'UNFOLLOW_USER_FAILURE',
)<number, any, Error>();

export const actions = {
  fetchUsersAsync,
  setCurrentPage,
  followUserAsync,
  unfollowUserAsync,
};

export type UsersActionType = ActionType<typeof actions>;
