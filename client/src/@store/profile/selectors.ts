import { RootState } from '../index';
import { ProfileType } from '../../@types';

export const getProfile = (state: RootState): ProfileType => {
  return state.profile.profile;
};
