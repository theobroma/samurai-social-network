import { RootState } from '../index';

export const getUserId = (state: RootState): number | null => {
  return state.auth.id;
};
