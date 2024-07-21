import { z } from "zod";

export const login = z.object({
  username: z.string().min(1, {
    message: "Title must be filled.",
  }),
  password: z.string().min(1, {
    message: "Title must be filled.",
  }),
});
export type LoginValidation = z.infer<typeof login>;
