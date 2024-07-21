import * as yup from "yup";
import { z } from "zod";
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email"),
  message: yup.string(),
});

export type ContactSchema = yup.InferType<typeof schema>;

export const createMessageRequest = z.object({
  name: z.string().min(1, {
    message: "Name must be filled.",
  }),
  email: z.string().min(1, {
    message: "Email must be filled.",
  }),
  message: z.string(),
  // time: z.date(),
});

export type CreateMessageRequest = z.infer<typeof createMessageRequest>;
