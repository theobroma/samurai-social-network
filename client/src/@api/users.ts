import { instance, ResponseAPI } from './index';
import { UsersFilterType } from '../@types';

// type UsersGet = {
//   items: Array<UserType>;
//   totalCount: number;
//   error: string;
// };

// type UsersQueryType = {
//   currentPage: number;
//   pageSize: number;
//   term: string;
//   friend: boolean;
// };

export const UsersAPI = {
  // pageSize max = 100
  getUsers: async (
    currentPage: number,
    pageSize: number,
    filter: UsersFilterType,
  ): Promise<any> => {
    try {
      const response = await instance.get<any>(
        `users?page=${currentPage}&count=${pageSize}&term=${filter.term}${
          filter.friend === null ? '' : `&friend=${filter.friend}`
        }`,
      );
      return response.data;
    } catch (e) {
      return e.message;
    }
  },

  followUser: async (id: number): Promise<any> => {
    try {
      const response = await instance.post<ResponseAPI>(`follow/${id}`);
      return response.data;
    } catch (e) {
      return e.message;
    }
  },

  unfollowUser: async (id: number): Promise<any> => {
    try {
      const response = await instance.delete<ResponseAPI>(`follow/${id}`);
      return response.data;
    } catch (e) {
      return e.message;
    }
  },
};
