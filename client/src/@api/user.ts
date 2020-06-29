import { instance, ResponseAPI } from './index';
import { UserType } from '../@types';

type UsersGet = {
  items: Array<UserType>;
  totalCount: number;
  error: string;
};

export const userApi = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get<UsersGet>(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },
  follow(id: number) {
    return instance.post<ResponseAPI>(`follow/${id}`).then((res) => res.data);
  },
  unfollow(id: number) {
    return instance.delete(`unfollow/${id}`).then((res) => res.data) as Promise<
      Response
    >;
  },
};
