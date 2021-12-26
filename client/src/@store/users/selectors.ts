import { RootState } from '../index';

export const getUsers = (state: RootState) => {
  return state.users;
};

export const getUsersFilter = (state: RootState) => {
  return state.users.filter;
};
