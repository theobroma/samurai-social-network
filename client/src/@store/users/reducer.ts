import { createReducer } from 'typesafe-actions';
import { UserType } from '../../@types';
import {
  fetchUsersAsync,
  UsersActionType,
  followUserAsync,
  unfollowUserAsync,
} from './actions';
import { SET_CURRENT_PAGE } from './constants';

export const usersInitialState = {
  items: [] as Array<UserType>,
  pageSize: 10,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>,
};
export type usersStateType = typeof usersInitialState;

export const usersReducer = createReducer<usersStateType, UsersActionType>(
  usersInitialState,
  {
    [SET_CURRENT_PAGE]: (state, { payload: page }) => {
      return {
        ...state,
        currentPage: page,
      };
    },
  },
)
  .handleAction(
    followUserAsync.request,
    (state: usersStateType, action: UsersActionType) => {
      return {
        ...state,
        followingInProgress: [...state.followingInProgress, action.payload],
      };
    },
  )
  .handleAction(
    followUserAsync.success,
    (state: usersStateType, action: UsersActionType) => {
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
    (state: usersStateType, action: UsersActionType) => {
      return {
        ...state,
        followingInProgress: [...state.followingInProgress, action.payload],
      };
    },
  )
  .handleAction(
    unfollowUserAsync.success,
    (state: usersStateType, action: UsersActionType) => {
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
    (state: usersStateType, action: UsersActionType) => ({
      ...state,
      ...action.payload,
    }),
  );

export default usersReducer;
