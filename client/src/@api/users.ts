import { instance, ResponseAPI } from './index';
import { UserType } from '../@types';

type UsersGet = {
  items: Array<UserType>;
  totalCount: number;
  error: string;
};

export const UsersAPI = {
  // pageSize max = 100
  getUsers: async (currentPage: number, pageSize = 10): Promise<any> => {
    try {
      const response = await instance.get<any>(
        `users?page=${currentPage}&count=${pageSize}`,
      );
      return response.data;
    } catch (e) {
      return e.message;
    }
  },

  followUser: async (id: number): Promise<any> => {
    // return instance.post<ResponseAPI>(`follow/${id}`).then((res) => res.data);
    try {
      const response = await instance.post<ResponseAPI>(`follow/${id}`);
      return response.data;
    } catch (e) {
      return e.message;
    }
  },
  // unfollow(id: number) {
  //   return instance.delete(`unfollow/${id}`).then((res) => res.data) as Promise<
  //     Response
  //   >;
  // },
};
