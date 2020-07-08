import { createReducer } from 'typesafe-actions';
import { UserType } from '../../@types';
import {
  fetchUsersAsync,
  UsersAction,
  followUserAsync,
  unfollowUserAsync,
} from './actions';
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
})
  .handleAction(
    followUserAsync.request,
    (state: InitialStateType, action: UsersAction) => {
      return {
        ...state,
        followingInProgress: [...state.followingInProgress, action.payload],
      };
    },
  )
  .handleAction(
    followUserAsync.success,
    (state: InitialStateType, action: UsersAction) => {
      return {
        ...state,
        // TODO: mb refactor
        items: state.items.map((item: UserType) => {
          if (item.id === state.followingInProgress[0])
            return { ...item, followed: true };
          return item;
        }),
        followingInProgress: [],
      };
    },
  )
  .handleAction(
    unfollowUserAsync.request,
    (state: InitialStateType, action: UsersAction) => {
      return {
        ...state,
        followingInProgress: [...state.followingInProgress, action.payload],
      };
    },
  )
  .handleAction(
    unfollowUserAsync.success,
    (state: InitialStateType, action: UsersAction) => {
      return {
        ...state,
        // TODO: mb refactor
        items: state.items.map((item: UserType) => {
          if (item.id === state.followingInProgress[0])
            return { ...item, followed: false };
          return item;
        }),
        followingInProgress: [],
      };
    },
  )
  .handleAction(
    fetchUsersAsync.success,
    (state: InitialStateType, action: UsersAction) => ({
      ...state,
      ...action.payload,
    }),
  );

export default usersReducer;
