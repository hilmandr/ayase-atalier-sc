import { z } from "zod";

export const createProjectRequest = z.object({
  title: z.string().min(1, {
    message: "Title must be filled.",
  }),
  place: z.string().min(1, {
    message: "Place must be filled.",
  }),
  client: z.string().min(1, {
    message: "Place must be filled.",
  }),
  date: z.date(),
  summary: z.string().min(1, {
    message: "Place must be filled.",
  }),
  thumbnail: z.string().optional(),
  content: z.string().min(1, {
    message: "Place must be filled.",
  }),
});

export const updateProjectRequest = z.object({
  slug: z.string(),
  title: z.string().min(1, {
    message: "Title must be filled.",
  }),
  place: z.string().min(1, {
    message: "Place must be filled.",
  }),
  client: z.string().min(1, {
    message: "Place must be filled.",
  }),
  date: z.date(),
  summary: z.string().min(1, {
    message: "Place must be filled.",
  }),
  thumbnail: z.string().optional(),
  content: z.string().min(1, {
    message: "Place must be filled.",
  }),
});

export type CreateProjectRequest = z.infer<typeof createProjectRequest>;
export type UpdateProjectRequest = z.infer<typeof updateProjectRequest>;
