import { combineReducers } from 'redux';
import { authReducer } from './auth/reducer';
import { profileReducer } from './profile/reducer';
import { usersReducer } from './users/reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
