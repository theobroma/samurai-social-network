import { RootState } from '../index';
import { UsersFilterType } from '../../@types';

export const getUsers = (state: RootState): any => {
  return state.users;
};

export const getUsersFilter = (state: RootState): UsersFilterType => {
  return state.users.filter;
};
