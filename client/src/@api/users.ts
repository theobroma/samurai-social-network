import { instance, ResponseAPI } from './index';
import { UserType } from '../@types';

type UsersGet = {
  items: Array<UserType>;
  totalCount: number;
  error: string;
};

export const UsersAPI = {
  // getUsers1(currentPage: number, pageSize: number) {
  //   return instance
  //     .get<any>(`users?page=${currentPage}&count=${pageSize}`)
  //     .then((res) => res.data);
  // },
  // pageSize max = 100
  getUsers: async (currentPage: number, pageSize = 100): Promise<any> => {
    try {
      const response = await instance.get<any>(
        `users?page=${currentPage}&count=${pageSize}`,
      );
      return response.data;
    } catch (e) {
      return e.message;
    }
  },

  // follow(id: number) {
  //   return instance.post<ResponseAPI>(`follow/${id}`).then((res) => res.data);
  // },
  // unfollow(id: number) {
  //   return instance.delete(`unfollow/${id}`).then((res) => res.data) as Promise<
  //     Response
  //   >;
  // },
};
