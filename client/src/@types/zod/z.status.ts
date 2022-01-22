import * as z from 'zod';

export const StatusResponseSchema = z.string();

export type StatusResponseType = z.infer<typeof StatusResponseSchema>;
