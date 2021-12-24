import { combineReducers } from 'redux';
// import { authReducer, authStateType } from './auth/reducer';
import { authReducer, AuthInitialStateType } from './auth/slice';
import { LayoutInitialStateType, layoutReducer } from './layout/slice';
import { profileReducer, profileStateType } from './profile/reducer';
import { UsersInitialStateType, usersReducer } from './users/slice';

export interface RootState {
  auth: AuthInitialStateType;
  layout: LayoutInitialStateType;
  profile: profileStateType;
  users: UsersInitialStateType;
}

// https://github.com/reduxjs/redux/issues/2709
export const rootReducer = () =>
  combineReducers<RootState>({
    auth: authReducer,
    layout: layoutReducer,
    profile: profileReducer,
    users: usersReducer,
  });

// export type RootState = StateType<typeof rootReducer>;
