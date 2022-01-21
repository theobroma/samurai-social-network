import { RootState } from '../index';

export const getProfile = (state: RootState) => {
  return state.profile.profile;
};
