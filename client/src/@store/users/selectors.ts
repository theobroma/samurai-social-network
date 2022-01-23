import { RootState } from '../configureStore';

export const getUsers = (state: RootState) => {
  return state.users;
};

export const getUsersFilter = (state: RootState) => {
  return state.users.filter;
};
