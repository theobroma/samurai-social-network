import { PhotosType } from './zod/z.profile';

export type UserType = {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
  followed: boolean;
};

export type ItemsViewType = 'LIST' | 'GRID';

export type UsersFilterType = {
  term: string;
  friend: boolean | null;
};

export type IDType = number;

export type LoadingStateType = 'idle' | 'pending';
