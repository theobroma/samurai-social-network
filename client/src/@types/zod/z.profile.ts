import * as z from 'zod';

const ContactsShema = z.object({
  facebook: z.string().nullable(),
  website: z.string().nullable(),
  vk: z.string().nullable(),
  twitter: z.string().nullable(),
  instagram: z.string().nullable(),
  youtube: z.string().nullable(),
  github: z.string().nullable(),
  mainLink: z.string().nullable(),
});

export type ContactsType = z.infer<typeof ContactsShema>;
export type ContactsKeys = Extract<keyof ContactsType, string>;

const PhotosSchema = z.object({
  small: z.string().nullable(),
  large: z.string().nullable(),
});

export type PhotosType = z.infer<typeof PhotosSchema>;

const ProfileResponseSchema = z.object({
  aboutMe: z.string(),
  contacts: ContactsShema,
  lookingForAJob: z.boolean(),
  lookingForAJobDescription: z.string(),
  fullName: z.string(),
  userId: z.number(),
  photos: PhotosSchema,
});

export type ProfileResponseType = z.infer<typeof ProfileResponseSchema>;
