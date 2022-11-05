import type { RootState } from '../configureStore';

export const profileSelector = (state: RootState) => {
  return state.profile.profile;
};
