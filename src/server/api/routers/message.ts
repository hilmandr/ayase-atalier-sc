import { eq, ilike, or } from "drizzle-orm";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { message } from "~/server/db/schema";
import { z } from "zod";
import { createMessageRequest } from "~/lib/validations/contact.validation";
import { uuid } from 'uuidv4';

export const messageRouter = createTRPCRouter({
  getMessages: publicProcedure
    .input(z.object({ search: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.db.query.message.findMany({
        where: input.search
          ? or(
              ilike(message.name, `%${input.search}%`),
              ilike(message.message, `%${input.search}%`),
            )
          : undefined,
      });
    }),

  getMessageById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.db.query.message.findFirst({
        where: eq(message.id, input.id),
      });
    }),

  createMessage: publicProcedure
    .input(createMessageRequest)
    .mutation(({ input, ctx }) => {
      return ctx.db
        .insert(message)
        .values({ ...input, time: new Date() || "", id:uuid() })
        .returning();
    }),

  deleteMessage: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.db.delete(message).where(eq(message.id, input.id));
    }),
});
