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
