import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar, serial } from "drizzle-orm/pg-core";

export const project = pgTable("project", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: varchar("slug").notNull(),
  title: varchar("title").notNull(),
  place: varchar("place").notNull(),
  client: varchar("client").notNull(),
  date: timestamp("date").notNull(),
  summary: varchar("summary").notNull(),
  thumbnail: varchar("thumbnail").notNull(),
  content: varchar("content").notNull(),
});

export const user = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey(),
  username: varchar("username").notNull(),
  password: varchar("password").notNull(),
});

export type Project = InferSelectModel<typeof project>;
export type NewProject = InferInsertModel<typeof project>;

export type User = InferSelectModel<typeof user>;
