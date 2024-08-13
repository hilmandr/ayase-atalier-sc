import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar, serial } from "drizzle-orm/pg-core";

export const project = pgTable("project", {
  id: varchar("id").primaryKey().notNull(),
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
  id: varchar("id").primaryKey(),
  username: varchar("username").notNull(),
  password: varchar("password").notNull(),
});

export type Project = InferSelectModel<typeof project>;
export type NewProject = InferInsertModel<typeof project>;

export type User = InferSelectModel<typeof user>;

export const message = pgTable("message", {
  id: varchar("id").primaryKey().notNull(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  message: varchar("message").notNull(),
  time: timestamp("time").notNull(),
});
export type Message = InferSelectModel<typeof message>;
export type NewMessage = InferInsertModel<typeof message>;
