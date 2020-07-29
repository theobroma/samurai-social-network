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

export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type PhotosType = {
  small: string | null;
  large: string | null;
};

export type ProfileType = {
  userId: number | null;
  lookingForAJob: boolean | null;
  lookingForAJobDescription: string | null;
  aboutMe?: string | null;
  fullName: string | null;
  contacts: ContactsType;
  photos: PhotosType;
};

export type UserType = {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
  followed: boolean;
};

// export type ContactsKeys = Extract<keyof ContactsType, string>;
// export type GetStringKeys<T> = Extract<keyof T, string>;

export type ItemsViewType = 'LIST' | 'GRID';

export type UsersFilterType = {
  term: string;
  friend: boolean | null;
};

export type IDType = number | null;
