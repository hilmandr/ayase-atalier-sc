import { eq, ilike, or } from "drizzle-orm";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { project } from "~/server/db/schema";
import { z } from "zod";
import {
  createProjectRequest,
  updateProjectRequest,
} from "~/lib/validations/project.validation";
import { slugify } from "~/lib/utils";
import { uuid } from "uuidv4";

export const projectRouter = createTRPCRouter({
  getProjects: publicProcedure
    .input(z.object({ search: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.db.query.project.findMany({
        where: input.search
          ? or(
              ilike(project.title, `%${input.search}%`),
              ilike(project.place, `%${input.search}%`),
            )
          : undefined,
      });
    }),

  getProjectBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.db.query.project.findFirst({
        where: eq(project.slug, input.slug),
      });
    }),

  createProject: publicProcedure
    .input(createProjectRequest)
    .mutation(({ input, ctx }) => {
      const slug = slugify(input.title);

      return ctx.db
        .insert(project)
        .values({
          ...input,
          thumbnail: input.thumbnail || "",
          slug,
          id: uuid()
        })
        .returning();
    }),

  updateProject: publicProcedure
    .input(updateProjectRequest)
    .mutation(({ input, ctx }) => {
      const slug = slugify(input.title);

      return ctx.db
        .update(project)
        .set({
          ...input,
          thumbnail: input.thumbnail || "",
          slug,
        })
        .where(eq(project.slug, input.slug || ""))
        .returning();
    }),

  deleteProject: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.db.delete(project).where(eq(project.id, input.id));
    }),
});
