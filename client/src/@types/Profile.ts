import { PhotosType } from './General';

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
// export type GetStringKeys<T> = Extract<keyof T, string>;

export enum ContactsColorsEnum {
  github = '#24292f',
  vk = '#4a76a8',
  facebook = '#1877f2',
  instagram = '#c32aa3',
  twitter = '#1da1f2',
  website = '#24292f',
  youtube = '#ff0000',
  mainLink = '#24292f',
}

export type ProfileType = {
  userId: number | null;
  lookingForAJob: boolean | null;
  lookingForAJobDescription: string | null;
  aboutMe?: string | null;
  fullName: string | null;
  contacts: ContactsType;
  photos: PhotosType;
};
