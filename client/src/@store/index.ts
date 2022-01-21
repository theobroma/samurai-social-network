import { combineReducers } from 'redux';
import { AuthInitialStateType, authReducer } from './auth/slice';
import { LayoutInitialStateType, layoutReducer } from './layout/slice';
import { ProfileInitialStateType, profileReducer } from './profile/slice';
import { StatusInitialStateType, statusReducer } from './status/slice';
import { UsersInitialStateType, usersReducer } from './users/slice';

export interface RootState {
  auth: AuthInitialStateType;
  layout: LayoutInitialStateType;
  profile: ProfileInitialStateType;
  status: StatusInitialStateType;
  users: UsersInitialStateType;
}

// https://github.com/reduxjs/redux/issues/2709
export const rootReducer = () =>
  combineReducers<RootState>({
    auth: authReducer,
    layout: layoutReducer,
    profile: profileReducer,
    status: statusReducer,
    users: usersReducer,
  });

// export type RootState = StateType<typeof rootReducer>;
