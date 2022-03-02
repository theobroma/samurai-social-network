import * as z from 'zod';

export const LoginResponseSchema = z.object({
  data: z.object({ userId: z.number() }),
  messages: z.array(z.string()),
  fieldsErrors: z.array(z.unknown()),
  resultCode: z.number(),
});
export type LoginResponseType = z.infer<typeof LoginResponseSchema>;

export const MeResponseSchema = z.object({
  data: z.object({ id: z.number(), login: z.string(), email: z.string() }),
  messages: z.array(z.string()),
  fieldsErrors: z.array(z.unknown()),
  resultCode: z.number(),
});
export type MeResponseType = z.infer<typeof MeResponseSchema>;

// same as standard
export const LogoutResponseSchema = LoginResponseSchema.omit({
  data: true,
}).extend({
  data: z.object({ userId: z.optional(z.number()) }),
  //   data: z.any(),
});
export type LogoutResponseType = z.infer<typeof LogoutResponseSchema>;

export const CaptchaResponseSchema = z.object({
  url: z.string(),
});
export type CaptchaResponseType = z.infer<typeof CaptchaResponseSchema>;
