import { z } from "zod";
export const loginRequest = z.object({
  username: z.string().min(1, {
    message: "Username must be filled!",
  }),
  password: z.string().min(1, {
    message: "Password must be filled!",
  }),
});

export type loginRequest = z.infer<typeof loginRequest>;
