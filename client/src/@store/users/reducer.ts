import { createReducer } from 'typesafe-actions';
import { ProfileType, UserType } from '../../@types';
import { actions } from './actions';

const userInitialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>,
};
export type InitialStateType = typeof userInitialState;

export const usersReducer = createReducer(userInitialState, {
  // [CONSTANT]: (state) => {
  //   return {
  //     ...state,
  //   };
  // },
}).handleAction(actions.fetchUsersAsync.success, (state: any, action: any) => ({
  ...state,
  ...action.payload,
}));

export default usersReducer;
