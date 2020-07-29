import { instance, APIResponseType, GetItemsType } from './index';
import { UsersFilterType } from '../@types';

export const UsersAPI = {
  // pageSize max = 100
  getUsers: async (
    currentPage: number,
    pageSize: number,
    filter: UsersFilterType,
  ) => {
    try {
      const response = await instance.get<GetItemsType>(
        `users?page=${currentPage}&count=${pageSize}&term=${filter.term}${
          filter.friend === null ? '' : `&friend=${filter.friend}`
        }`,
      );
      return response.data;
    } catch (e) {
      return e.message;
    }
  },

  followUser: async (id: number) => {
    try {
      const response = await instance.post<APIResponseType>(`follow/${id}`);
      return response.data;
    } catch (e) {
      return e.message;
    }
  },

  unfollowUser: async (id: number) => {
    try {
      const response = await instance.delete<APIResponseType>(`follow/${id}`);
      return response.data;
    } catch (e) {
      return e.message;
    }
  },
};
