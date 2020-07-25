import { createReducer } from 'typesafe-actions';
import { UserType, UsersFilterType } from '../../@types';
import {
  fetchUsersAsync,
  UsersActionType,
  followUserAsync,
  unfollowUserAsync,
} from './actions';
import { SET_CURRENT_PAGE, SET_USERS_FILTER } from './constants';

export const usersInitialState = {
  items: [] as Array<UserType>,
  pageSize: 10,
  totalCount: 0,
  currentPage: 1,
  filter: {
    term: 'abc',
    friend: null,
  } as UsersFilterType,
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
    [SET_USERS_FILTER]: (state, { payload: filter }) => {
      return {
        ...state,
        filter,
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
  .handleAction(followUserAsync.success, (state: usersStateType) => {
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
  })
  .handleAction(
    unfollowUserAsync.request,
    (state: usersStateType, action: UsersActionType) => {
      return {
        ...state,
        followingInProgress: [...state.followingInProgress, action.payload],
      };
    },
  )
  .handleAction(unfollowUserAsync.success, (state: usersStateType) => {
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
  })
  .handleAction(
    fetchUsersAsync.success,
    (state: usersStateType, action: UsersActionType) => ({
      ...state,
      ...action.payload,
    }),
  );

export default usersReducer;
