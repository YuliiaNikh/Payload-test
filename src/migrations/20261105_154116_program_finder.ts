import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_program_finder_options_programs_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "program_finder_options_programs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_program_finder_options_programs_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "program_finder_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"reply" varchar DEFAULT 'Here are some programs that might fit you:'
  );
  
  CREATE TABLE "program_finder" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"launcher_label" varchar DEFAULT 'Lets Find You a Program!',
  	"title" varchar DEFAULT 'Hi there 👋',
  	"greeting" varchar DEFAULT 'Hi!
  I’m here to help :)
  What program are you looking for?',
  	"follow_up" varchar DEFAULT 'Do you want me to narrow it down or look at something else?',
  	"no_match" varchar DEFAULT 'I couldn’t find a program for that. Try one of these:',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "program_finder_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  ALTER TABLE "program_finder_options_programs" ADD CONSTRAINT "program_finder_options_programs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."program_finder_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "program_finder_options" ADD CONSTRAINT "program_finder_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."program_finder"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "program_finder_rels" ADD CONSTRAINT "program_finder_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."program_finder"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "program_finder_rels" ADD CONSTRAINT "program_finder_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "program_finder_rels" ADD CONSTRAINT "program_finder_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "program_finder_options_programs_order_idx" ON "program_finder_options_programs" USING btree ("_order");
  CREATE INDEX "program_finder_options_programs_parent_id_idx" ON "program_finder_options_programs" USING btree ("_parent_id");
  CREATE INDEX "program_finder_options_order_idx" ON "program_finder_options" USING btree ("_order");
  CREATE INDEX "program_finder_options_parent_id_idx" ON "program_finder_options" USING btree ("_parent_id");
  CREATE INDEX "program_finder_rels_order_idx" ON "program_finder_rels" USING btree ("order");
  CREATE INDEX "program_finder_rels_parent_idx" ON "program_finder_rels" USING btree ("parent_id");
  CREATE INDEX "program_finder_rels_path_idx" ON "program_finder_rels" USING btree ("path");
  CREATE INDEX "program_finder_rels_pages_id_idx" ON "program_finder_rels" USING btree ("pages_id");
  CREATE INDEX "program_finder_rels_posts_id_idx" ON "program_finder_rels" USING btree ("posts_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "program_finder_options_programs" CASCADE;
  DROP TABLE "program_finder_options" CASCADE;
  DROP TABLE "program_finder" CASCADE;
  DROP TABLE "program_finder_rels" CASCADE;
  DROP TYPE "public"."enum_program_finder_options_programs_link_type";`)
}
