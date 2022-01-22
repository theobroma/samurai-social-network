import * as z from 'zod';

export const StandardResponseSchema = z.object({
  data: z.object({ userId: z.optional(z.number()) }),
  //   data: z.any(),
  messages: z.array(z.string()),
  fieldsErrors: z.array(z.unknown()),
  resultCode: z.number(),
});
export type StandardResponseType = z.infer<typeof StandardResponseSchema>;
