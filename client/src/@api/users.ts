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
  getUsers: async (currentPage: number, pageSize: number): Promise<any> => {
    try {
      return await instance
        .get<any>(`users?page=${currentPage}&count=${pageSize}`)
        .then((res) => res.data);
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
