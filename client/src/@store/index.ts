import { combineReducers } from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import { authReducer, authStateType } from './auth/reducer';
import { profileReducer, profileStateType } from './profile/reducer';
import { usersStateType } from './users/reducer';
import { usersReducer } from './users/slice';
import { layoutStateType } from './layout/reducer';
import { layoutReducer } from './layout/slice';

export interface RootState {
  auth: authStateType;
  layout: layoutStateType;
  profile: profileStateType;
  // users: usersStateType;
  users: any;
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
