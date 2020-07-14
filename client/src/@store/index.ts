import { combineReducers } from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import { authReducer } from './auth/reducer';
import { profileReducer } from './profile/reducer';
import { usersReducer } from './users/reducer';

export interface RootState {
  auth: any;
  profile: any;
  users: any;
  router: RouterState;
}

export const rootReducer = (history: History) =>
  combineReducers<RootState>({
    auth: authReducer,
    profile: profileReducer,
    users: usersReducer,
    router: connectRouter(history),
  });

// TODO: refactor type. https://github.com/reduxjs/redux/issues/2709
// export const rootReducer = (history: History) =>
//   combineReducers({
//     auth: authReducer,
//     profile: profileReducer,
//     users: usersReducer,
//     router: connectRouter(history),
//   } as any);

// export type RootState = ReturnType<typeof rootReducer>;
