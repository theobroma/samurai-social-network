import { createReducer } from 'typesafe-actions';
import { UserType } from '../../@types';
import { fetchUsersAsync, UsersAction } from './actions';
import { SET_CURRENT_PAGE } from './constants';

const userInitialState = {
  items: [] as Array<UserType>,
  pageSize: 10,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>,
};
export type InitialStateType = typeof userInitialState;

export const usersReducer = createReducer(userInitialState, {
  [SET_CURRENT_PAGE]: (state, { payload: page }) => {
    return {
      ...state,
      currentPage: page,
    };
  },
}).handleAction(
  fetchUsersAsync.success,
  (state: InitialStateType, action: UsersAction) => ({
    ...state,
    ...action.payload,
  }),
);

export default usersReducer;
