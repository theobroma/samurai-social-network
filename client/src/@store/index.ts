import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import { authReducer, authStateType } from './auth/reducer';
import { profileReducer, profileStateType } from './profile/reducer';
import { usersReducer, usersStateType } from './users/reducer';
import { layoutReducer, layoutStateType } from './layout/reducer';

export interface RootState {
  auth: authStateType;
  layout: layoutStateType;
  profile: profileStateType;
  users: usersStateType;
  router: RouterState;
}

// https://github.com/reduxjs/redux/issues/2709
export const rootReducer = (history: History) =>
  combineReducers<RootState>({
    auth: authReducer,
    layout: layoutReducer,
    profile: profileReducer,
    users: usersReducer,
    router: connectRouter(history),
  });

// export type RootState = StateType<typeof rootReducer>;
