import { createAsyncAction, ActionType } from 'typesafe-actions';
import { UserType } from '../../@types';

// Create the set of async actions
export const fetchUsersAsync = createAsyncAction(
  'FETCH_USERS_REQUEST',
  'FETCH_USERS_SUCCESS',
  'FETCH_USERS_FAILURE',
)<number | null, any, Error>();

export const actions = {
  fetchUsersAsync,
};

export type UsersAction = ActionType<typeof actions>;
