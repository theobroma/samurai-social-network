import { combineReducers } from 'redux';
import { authReducer } from './auth/reducer';
import { profileReducer } from './profile/reducer';
import { usersReducer } from './users/reducer';

// TODO: refactor type. https://github.com/reduxjs/redux/issues/2709
export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  users: usersReducer,
} as any);

export type RootState = ReturnType<typeof rootReducer>;
