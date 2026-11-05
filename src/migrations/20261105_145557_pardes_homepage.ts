import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_cards_section_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cards_section_cards_link_appearance" AS ENUM('teal', 'outlineRed', 'outlineRedSmall');
  CREATE TYPE "public"."enum_pages_blocks_image_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_image_text_links_link_appearance" AS ENUM('teal', 'outlineRed', 'outlineRedSmall');
  CREATE TYPE "public"."enum_pages_blocks_image_text_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_image_text_image_width" AS ENUM('half', 'third', 'quarter');
  CREATE TYPE "public"."enum_pages_blocks_image_text_background" AS ENUM('light', 'gray');
  CREATE TYPE "public"."enum_pages_blocks_image_text_heading_style" AS ENUM('medium', 'bold');
  CREATE TYPE "public"."enum_pages_blocks_people_carousel_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_people_carousel_link_appearance" AS ENUM('teal', 'outlineRed', 'outlineRedSmall');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_section_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_section_cards_link_appearance" AS ENUM('teal', 'outlineRed', 'outlineRedSmall');
  CREATE TYPE "public"."enum__pages_v_blocks_image_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_image_text_links_link_appearance" AS ENUM('teal', 'outlineRed', 'outlineRedSmall');
  CREATE TYPE "public"."enum__pages_v_blocks_image_text_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_image_text_image_width" AS ENUM('half', 'third', 'quarter');
  CREATE TYPE "public"."enum__pages_v_blocks_image_text_background" AS ENUM('light', 'gray');
  CREATE TYPE "public"."enum__pages_v_blocks_image_text_heading_style" AS ENUM('medium', 'bold');
  CREATE TYPE "public"."enum__pages_v_blocks_people_carousel_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_people_carousel_link_appearance" AS ENUM('teal', 'outlineRed', 'outlineRedSmall');
  CREATE TYPE "public"."enum_header_nav_items_sub_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_donate_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_columns_links_link_type" AS ENUM('reference', 'custom');
  ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'pardes';
  ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'pardes';
  CREATE TABLE "pages_blocks_cards_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"title" varchar,
  	"description" varchar,
  	"enable_link" boolean,
  	"link_type" "enum_pages_blocks_cards_section_cards_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_cards_section_cards_link_appearance" DEFAULT 'teal'
  );
  
  CREATE TABLE "pages_blocks_cards_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_impact_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_impact_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"name" varchar,
  	"location" varchar,
  	"detail" varchar
  );
  
  CREATE TABLE "pages_blocks_impact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_image_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_image_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_image_text_links_link_appearance" DEFAULT 'teal'
  );
  
  CREATE TABLE "pages_blocks_image_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_position" "enum_pages_blocks_image_text_image_position" DEFAULT 'left',
  	"image_width" "enum_pages_blocks_image_text_image_width" DEFAULT 'half',
  	"background" "enum_pages_blocks_image_text_background" DEFAULT 'light',
  	"media_id" integer,
  	"title" varchar,
  	"heading_style" "enum_pages_blocks_image_text_heading_style" DEFAULT 'medium',
  	"body" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_people_carousel_people" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"photo_id" integer,
  	"name" varchar
  );
  
  CREATE TABLE "pages_blocks_people_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"enable_link" boolean,
  	"link_type" "enum_pages_blocks_people_carousel_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_people_carousel_link_appearance" DEFAULT 'teal',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cards_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"title" varchar,
  	"description" varchar,
  	"enable_link" boolean,
  	"link_type" "enum__pages_v_blocks_cards_section_cards_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_cards_section_cards_link_appearance" DEFAULT 'teal',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cards_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_impact_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_impact_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"name" varchar,
  	"location" varchar,
  	"detail" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_impact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_image_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_image_text_links_link_appearance" DEFAULT 'teal',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_position" "enum__pages_v_blocks_image_text_image_position" DEFAULT 'left',
  	"image_width" "enum__pages_v_blocks_image_text_image_width" DEFAULT 'half',
  	"background" "enum__pages_v_blocks_image_text_background" DEFAULT 'light',
  	"media_id" integer,
  	"title" varchar,
  	"heading_style" "enum__pages_v_blocks_image_text_heading_style" DEFAULT 'medium',
  	"body" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_people_carousel_people" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"photo_id" integer,
  	"name" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_people_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"enable_link" boolean,
  	"link_type" "enum__pages_v_blocks_people_carousel_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_people_carousel_link_appearance" DEFAULT 'teal',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "header_nav_items_sub_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_sub_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "footer_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_columns_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL
  );
  
  ALTER TABLE "footer_nav_items" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "footer_nav_items" CASCADE;
  ALTER TABLE "pages" ADD COLUMN "hero_title" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_title" varchar;
  ALTER TABLE "header" ADD COLUMN "donate_link_type" "enum_header_donate_link_type" DEFAULT 'reference';
  ALTER TABLE "header" ADD COLUMN "donate_link_new_tab" boolean;
  ALTER TABLE "header" ADD COLUMN "donate_link_url" varchar;
  ALTER TABLE "header" ADD COLUMN "donate_link_label" varchar NOT NULL;
  ALTER TABLE "header" ADD COLUMN "dedication" varchar;
  ALTER TABLE "footer" ADD COLUMN "social_facebook" varchar;
  ALTER TABLE "footer" ADD COLUMN "social_instagram" varchar;
  ALTER TABLE "footer" ADD COLUMN "social_linkedin" varchar;
  ALTER TABLE "footer" ADD COLUMN "social_tiktok" varchar;
  ALTER TABLE "footer" ADD COLUMN "newsletter_form_id" integer;
  ALTER TABLE "footer" ADD COLUMN "newsletter_heading" varchar DEFAULT 'Sign up for our newsletter!';
  ALTER TABLE "footer" ADD COLUMN "newsletter_button_label" varchar DEFAULT 'Sign me up';
  ALTER TABLE "pages_blocks_cards_section_cards" ADD CONSTRAINT "pages_blocks_cards_section_cards_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_section_cards" ADD CONSTRAINT "pages_blocks_cards_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cards_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_section" ADD CONSTRAINT "pages_blocks_cards_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_impact_stats" ADD CONSTRAINT "pages_blocks_impact_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_impact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_impact_testimonials" ADD CONSTRAINT "pages_blocks_impact_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_impact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_impact" ADD CONSTRAINT "pages_blocks_impact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_text_links" ADD CONSTRAINT "pages_blocks_image_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_image_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_text" ADD CONSTRAINT "pages_blocks_image_text_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_text" ADD CONSTRAINT "pages_blocks_image_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_people_carousel_people" ADD CONSTRAINT "pages_blocks_people_carousel_people_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_people_carousel_people" ADD CONSTRAINT "pages_blocks_people_carousel_people_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_people_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_people_carousel" ADD CONSTRAINT "pages_blocks_people_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_section_cards" ADD CONSTRAINT "_pages_v_blocks_cards_section_cards_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_section_cards" ADD CONSTRAINT "_pages_v_blocks_cards_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cards_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_section" ADD CONSTRAINT "_pages_v_blocks_cards_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_impact_stats" ADD CONSTRAINT "_pages_v_blocks_impact_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_impact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_impact_testimonials" ADD CONSTRAINT "_pages_v_blocks_impact_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_impact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_impact" ADD CONSTRAINT "_pages_v_blocks_impact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_text_links" ADD CONSTRAINT "_pages_v_blocks_image_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_image_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_text" ADD CONSTRAINT "_pages_v_blocks_image_text_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_text" ADD CONSTRAINT "_pages_v_blocks_image_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_people_carousel_people" ADD CONSTRAINT "_pages_v_blocks_people_carousel_people_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_people_carousel_people" ADD CONSTRAINT "_pages_v_blocks_people_carousel_people_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_people_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_people_carousel" ADD CONSTRAINT "_pages_v_blocks_people_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items_sub_items" ADD CONSTRAINT "header_nav_items_sub_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns_links" ADD CONSTRAINT "footer_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns" ADD CONSTRAINT "footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_cards_section_cards_order_idx" ON "pages_blocks_cards_section_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_cards_section_cards_parent_id_idx" ON "pages_blocks_cards_section_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cards_section_cards_media_idx" ON "pages_blocks_cards_section_cards" USING btree ("media_id");
  CREATE INDEX "pages_blocks_cards_section_order_idx" ON "pages_blocks_cards_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_cards_section_parent_id_idx" ON "pages_blocks_cards_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cards_section_path_idx" ON "pages_blocks_cards_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_impact_stats_order_idx" ON "pages_blocks_impact_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_impact_stats_parent_id_idx" ON "pages_blocks_impact_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_impact_testimonials_order_idx" ON "pages_blocks_impact_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_impact_testimonials_parent_id_idx" ON "pages_blocks_impact_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_impact_order_idx" ON "pages_blocks_impact" USING btree ("_order");
  CREATE INDEX "pages_blocks_impact_parent_id_idx" ON "pages_blocks_impact" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_impact_path_idx" ON "pages_blocks_impact" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_text_links_order_idx" ON "pages_blocks_image_text_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_text_links_parent_id_idx" ON "pages_blocks_image_text_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_text_order_idx" ON "pages_blocks_image_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_text_parent_id_idx" ON "pages_blocks_image_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_text_path_idx" ON "pages_blocks_image_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_text_media_idx" ON "pages_blocks_image_text" USING btree ("media_id");
  CREATE INDEX "pages_blocks_people_carousel_people_order_idx" ON "pages_blocks_people_carousel_people" USING btree ("_order");
  CREATE INDEX "pages_blocks_people_carousel_people_parent_id_idx" ON "pages_blocks_people_carousel_people" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_people_carousel_people_photo_idx" ON "pages_blocks_people_carousel_people" USING btree ("photo_id");
  CREATE INDEX "pages_blocks_people_carousel_order_idx" ON "pages_blocks_people_carousel" USING btree ("_order");
  CREATE INDEX "pages_blocks_people_carousel_parent_id_idx" ON "pages_blocks_people_carousel" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_people_carousel_path_idx" ON "pages_blocks_people_carousel" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cards_section_cards_order_idx" ON "_pages_v_blocks_cards_section_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cards_section_cards_parent_id_idx" ON "_pages_v_blocks_cards_section_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cards_section_cards_media_idx" ON "_pages_v_blocks_cards_section_cards" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_cards_section_order_idx" ON "_pages_v_blocks_cards_section" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cards_section_parent_id_idx" ON "_pages_v_blocks_cards_section" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cards_section_path_idx" ON "_pages_v_blocks_cards_section" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_impact_stats_order_idx" ON "_pages_v_blocks_impact_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_impact_stats_parent_id_idx" ON "_pages_v_blocks_impact_stats" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_impact_testimonials_order_idx" ON "_pages_v_blocks_impact_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_impact_testimonials_parent_id_idx" ON "_pages_v_blocks_impact_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_impact_order_idx" ON "_pages_v_blocks_impact" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_impact_parent_id_idx" ON "_pages_v_blocks_impact" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_impact_path_idx" ON "_pages_v_blocks_impact" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_text_links_order_idx" ON "_pages_v_blocks_image_text_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_text_links_parent_id_idx" ON "_pages_v_blocks_image_text_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_text_order_idx" ON "_pages_v_blocks_image_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_text_parent_id_idx" ON "_pages_v_blocks_image_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_text_path_idx" ON "_pages_v_blocks_image_text" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_text_media_idx" ON "_pages_v_blocks_image_text" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_people_carousel_people_order_idx" ON "_pages_v_blocks_people_carousel_people" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_people_carousel_people_parent_id_idx" ON "_pages_v_blocks_people_carousel_people" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_people_carousel_people_photo_idx" ON "_pages_v_blocks_people_carousel_people" USING btree ("photo_id");
  CREATE INDEX "_pages_v_blocks_people_carousel_order_idx" ON "_pages_v_blocks_people_carousel" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_people_carousel_parent_id_idx" ON "_pages_v_blocks_people_carousel" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_people_carousel_path_idx" ON "_pages_v_blocks_people_carousel" USING btree ("_path");
  CREATE INDEX "header_nav_items_sub_items_order_idx" ON "header_nav_items_sub_items" USING btree ("_order");
  CREATE INDEX "header_nav_items_sub_items_parent_id_idx" ON "header_nav_items_sub_items" USING btree ("_parent_id");
  CREATE INDEX "footer_columns_links_order_idx" ON "footer_columns_links" USING btree ("_order");
  CREATE INDEX "footer_columns_links_parent_id_idx" ON "footer_columns_links" USING btree ("_parent_id");
  CREATE INDEX "footer_columns_order_idx" ON "footer_columns" USING btree ("_order");
  CREATE INDEX "footer_columns_parent_id_idx" ON "footer_columns" USING btree ("_parent_id");
  ALTER TABLE "footer" ADD CONSTRAINT "footer_newsletter_form_id_forms_id_fk" FOREIGN KEY ("newsletter_form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "footer_newsletter_newsletter_form_idx" ON "footer" USING btree ("newsletter_form_id");
  DROP TYPE "public"."enum_footer_nav_items_link_type";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_footer_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "footer_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  ALTER TABLE "pages_blocks_cards_section_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cards_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_impact_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_impact_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_impact" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_image_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_image_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_people_carousel_people" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_people_carousel" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cards_section_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cards_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_impact_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_impact_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_impact" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_image_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_image_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_people_carousel_people" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_people_carousel" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_nav_items_sub_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_columns_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_columns" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_cards_section_cards" CASCADE;
  DROP TABLE "pages_blocks_cards_section" CASCADE;
  DROP TABLE "pages_blocks_impact_stats" CASCADE;
  DROP TABLE "pages_blocks_impact_testimonials" CASCADE;
  DROP TABLE "pages_blocks_impact" CASCADE;
  DROP TABLE "pages_blocks_image_text_links" CASCADE;
  DROP TABLE "pages_blocks_image_text" CASCADE;
  DROP TABLE "pages_blocks_people_carousel_people" CASCADE;
  DROP TABLE "pages_blocks_people_carousel" CASCADE;
  DROP TABLE "_pages_v_blocks_cards_section_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_cards_section" CASCADE;
  DROP TABLE "_pages_v_blocks_impact_stats" CASCADE;
  DROP TABLE "_pages_v_blocks_impact_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_impact" CASCADE;
  DROP TABLE "_pages_v_blocks_image_text_links" CASCADE;
  DROP TABLE "_pages_v_blocks_image_text" CASCADE;
  DROP TABLE "_pages_v_blocks_people_carousel_people" CASCADE;
  DROP TABLE "_pages_v_blocks_people_carousel" CASCADE;
  DROP TABLE "header_nav_items_sub_items" CASCADE;
  DROP TABLE "footer_columns_links" CASCADE;
  DROP TABLE "footer_columns" CASCADE;
  ALTER TABLE "footer" DROP CONSTRAINT "footer_newsletter_form_id_forms_id_fk";
  
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DATA TYPE text;
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DEFAULT 'lowImpact'::text;
  DROP TYPE "public"."enum_pages_hero_type";
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DEFAULT 'lowImpact'::"public"."enum_pages_hero_type";
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DATA TYPE "public"."enum_pages_hero_type" USING "hero_type"::"public"."enum_pages_hero_type";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE text;
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DEFAULT 'lowImpact'::text;
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DEFAULT 'lowImpact'::"public"."enum__pages_v_version_hero_type";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE "public"."enum__pages_v_version_hero_type" USING "version_hero_type"::"public"."enum__pages_v_version_hero_type";
  DROP INDEX "footer_newsletter_newsletter_form_idx";
  ALTER TABLE "footer_nav_items" ADD CONSTRAINT "footer_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "footer_nav_items_order_idx" ON "footer_nav_items" USING btree ("_order");
  CREATE INDEX "footer_nav_items_parent_id_idx" ON "footer_nav_items" USING btree ("_parent_id");
  ALTER TABLE "pages" DROP COLUMN "hero_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_title";
  ALTER TABLE "header" DROP COLUMN "donate_link_type";
  ALTER TABLE "header" DROP COLUMN "donate_link_new_tab";
  ALTER TABLE "header" DROP COLUMN "donate_link_url";
  ALTER TABLE "header" DROP COLUMN "donate_link_label";
  ALTER TABLE "header" DROP COLUMN "dedication";
  ALTER TABLE "footer" DROP COLUMN "social_facebook";
  ALTER TABLE "footer" DROP COLUMN "social_instagram";
  ALTER TABLE "footer" DROP COLUMN "social_linkedin";
  ALTER TABLE "footer" DROP COLUMN "social_tiktok";
  ALTER TABLE "footer" DROP COLUMN "newsletter_form_id";
  ALTER TABLE "footer" DROP COLUMN "newsletter_heading";
  ALTER TABLE "footer" DROP COLUMN "newsletter_button_label";
  DROP TYPE "public"."enum_pages_blocks_cards_section_cards_link_type";
  DROP TYPE "public"."enum_pages_blocks_cards_section_cards_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_image_text_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_image_text_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_image_text_image_position";
  DROP TYPE "public"."enum_pages_blocks_image_text_image_width";
  DROP TYPE "public"."enum_pages_blocks_image_text_background";
  DROP TYPE "public"."enum_pages_blocks_image_text_heading_style";
  DROP TYPE "public"."enum_pages_blocks_people_carousel_link_type";
  DROP TYPE "public"."enum_pages_blocks_people_carousel_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cards_section_cards_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cards_section_cards_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_image_text_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_image_text_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_image_text_image_position";
  DROP TYPE "public"."enum__pages_v_blocks_image_text_image_width";
  DROP TYPE "public"."enum__pages_v_blocks_image_text_background";
  DROP TYPE "public"."enum__pages_v_blocks_image_text_heading_style";
  DROP TYPE "public"."enum__pages_v_blocks_people_carousel_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_people_carousel_link_appearance";
  DROP TYPE "public"."enum_header_nav_items_sub_items_link_type";
  DROP TYPE "public"."enum_header_donate_link_type";
  DROP TYPE "public"."enum_footer_columns_links_link_type";`)
}
