// export type DialogType = {
//   id: number;
//   name: string;
// };
// export type MessageType = {
//   id: number;
//   text: string;
// };
// export type PostType = {
//   id: number;
//   text: string;
//   likesCount: number;
// };

export type PhotosType = {
  small: string | null;
  large: string | null;
};

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

export type IDType = number | null;

export type LoadingStateType = 'idle' | 'pending';
