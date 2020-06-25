import { combineReducers } from 'redux';
import { authReducer } from './auth/reducer';
import { profileReducer } from './profile/reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
