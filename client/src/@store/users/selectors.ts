import { RootState } from '../index';
import { UsersFilterType } from '../../@types';
import { usersStateType } from './reducer';

export const getUsers = (state: RootState): usersStateType => {
  return state.users;
};

export const getUsersFilter = (state: RootState): UsersFilterType => {
  return state.users.filter;
};
