import { UsersFilterType, UsersResponseType } from '../@types';
import { APIResponseType, instance } from './index';

export const UsersAPI = {
  // pageSize max = 100
  getUsers(currentPage: number, pageSize: number, filter: UsersFilterType) {
    return instance.get<UsersResponseType>(
      `users?page=${currentPage}&count=${pageSize}&term=${filter.term}${
        filter.friend === null ? '' : `&friend=${filter.friend}`
      }`,
    );
  },

  followUser: async (id: number) => {
    try {
      const response = await instance.post<APIResponseType>(`follow/${id}`);
      return response.data;
    } catch (e: any) {
      return e.message;
    }
  },

  unfollowUser: async (id: number) => {
    try {
      const response = await instance.delete<APIResponseType>(`follow/${id}`);
      return response.data;
    } catch (e: any) {
      return e.message;
    }
  },
};
