import { RootState } from '../index';

export const getUsers = (state: RootState): any => {
  return state.users;
};
