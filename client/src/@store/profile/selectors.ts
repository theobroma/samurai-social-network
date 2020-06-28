import { RootState } from '../index';
// import { ProfileType } from '../../@types';

export const getProfile = (state: RootState): any => {
  return state.profile;
};
