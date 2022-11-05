import * as z from 'zod';

import { PhotosSchema } from './z.profile';

const UserSchema = z.object({
  followed: z.boolean(),
  id: z.number(),
  name: z.string(),
  photos: PhotosSchema,
  status: z.string().nullable(),
  uniqueUrlName: z.string().nullable(),
});

export type UserType = z.infer<typeof UserSchema>;

export const UsersResponseSchema = z.object({
  items: z.array(UserSchema),
  totalCount: z.number(),
  error: z.string().nullable(),
});

export type UsersResponseType = z.infer<typeof UsersResponseSchema>;
