import { RootState } from '../configureStore';

export const getProfile = (state: RootState) => {
  return state.profile.profile;
};
