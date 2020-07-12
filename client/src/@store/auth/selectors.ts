import { ROLE } from '../../@types/ROLE';
import { RootState } from '../index';

export const getUserId = (state: RootState): number | null => {
  return state.auth.id;
};

export const getUserRole = (state: RootState): ROLE => {
  return state.auth.userRole;
};
