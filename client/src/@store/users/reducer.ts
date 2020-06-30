import { createReducer } from 'typesafe-actions';
import { ProfileType, UserType } from '../../@types';
import { actions } from './actions';
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
}).handleAction(actions.fetchUsersAsync.success, (state: any, action: any) => ({
  ...state,
  ...action.payload,
}));

export default usersReducer;
