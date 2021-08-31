import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { authReducer, authStateType } from './auth/reducer';
import { LayoutInitialStateType, layoutReducer } from './layout/slice';
import { profileReducer, profileStateType } from './profile/reducer';
import { UsersInitialStateType, usersReducer } from './users/slice';

export interface RootState {
  auth: authStateType;
  layout: LayoutInitialStateType;
  profile: profileStateType;
  router: RouterState;
  users: UsersInitialStateType;
}

// https://github.com/reduxjs/redux/issues/2709
export const rootReducer = (history: History) =>
  combineReducers<RootState>({
    auth: authReducer,
    layout: layoutReducer,
    profile: profileReducer,
    router: connectRouter(history),
    users: usersReducer,
  });

// export type RootState = StateType<typeof rootReducer>;
