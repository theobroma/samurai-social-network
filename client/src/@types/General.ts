export type AuthData = {
  id: number | null;
  email: string | null;
  login: string | null;
};

export type Photos = {
  small: string | null;
  large: string | null;
};

export type User = {
  id: number;
  name: string;
  status: string | null;
  uniqueUrlName: string | null;
  photos: Photos;
  followed: boolean;
};

export type Profile = {
  aboutMe: string | null;
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string;
  contacts: {
    github: string | null;
    vk: string | null;
    facebook: string | null;
    instagram: string | null;
    twitter: string | null;
    website: string | null;
    youtube: string | null;
    mainLink: string | null;
  };
  photos: Photos;
};

// =======================================
export type DialogType = {
  id: number;
  name: string;
};
export type MessageType = {
  id: number;
  text: string;
};

export type PostType = {
  id: number;
  text: string;
  likesCount: number;
};
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
export type ContactsKeys = Extract<keyof ContactsType, string>;

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
  photos: {
    small: string | null;
    large: string | null;
  };
  followed: boolean;
};

export type GetStringKeys<T> = Extract<keyof T, string>;

export type ItemsViewType = 'LIST' | 'GRID';
