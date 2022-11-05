import type {
  StandardResponseType,
  UsersFilterType,
  UsersResponseType,
} from '../@types';

import { instance } from './index';

export const UsersAPI = {
  // pageSize max = 100
  getUsers(currentPage: number, pageSize: number, filter: UsersFilterType) {
    return instance.get<UsersResponseType>(
      `users?page=${currentPage}&count=${pageSize}&term=${filter.term}${
        filter.friend === null ? '' : `&friend=${filter.friend}`
      }`,
    );
  },
  followUser(id: number) {
    return instance.post<StandardResponseType>(`follow/${id}`);
  },
  unfollowUser(id: number) {
    return instance.delete<StandardResponseType>(`follow/${id}`);
  },
};
