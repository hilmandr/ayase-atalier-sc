CREATE TABLE IF NOT EXISTS "message" (
	"id" varchar PRIMARY KEY  NOT NULL,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"message" varchar NOT NULL,
	"time" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project" (
	"id" varchar PRIMARY KEY NOT NULL,
	"slug" varchar NOT NULL,
	"title" varchar NOT NULL,
	"place" varchar NOT NULL,
	"client" varchar NOT NULL,
	"date" timestamp NOT NULL,
	"summary" varchar NOT NULL,
	"thumbnail" varchar NOT NULL,
	"content" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" varchar PRIMARY KEY NOT NULL,
	"username" varchar NOT NULL,
	"password" varchar NOT NULL
);
