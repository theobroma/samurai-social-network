import * as z from 'zod';

export const LoginResponseSchema = z.object({
  data: z.object({ userId: z.number() }),
  messages: z.array(z.string()),
  fieldsErrors: z.array(z.unknown()),
  resultCode: z.number(),
});

export type LoginResponseType = z.infer<typeof LoginResponseSchema>;

const MeResponseSchema = z.object({
  data: z.object({ id: z.number(), login: z.string(), email: z.string() }),
  messages: z.array(z.string()),
  fieldsErrors: z.array(z.unknown()),
  resultCode: z.number(),
});

export type MeResponseType = z.infer<typeof MeResponseSchema>;
