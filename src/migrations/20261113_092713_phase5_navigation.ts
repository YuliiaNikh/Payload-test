import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_appearance_header" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum_pages_appearance_footer" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum__pages_v_version_appearance_header" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum__pages_v_version_appearance_footer" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum_posts_appearance_header" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum_posts_appearance_footer" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum__posts_v_version_appearance_header" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum__posts_v_version_appearance_footer" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum_events_appearance_header" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum_events_appearance_footer" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum__events_v_version_appearance_header" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum__events_v_version_appearance_footer" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum_resources_appearance_header" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum_resources_appearance_footer" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum__resources_v_version_appearance_header" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum__resources_v_version_appearance_footer" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum_glossary_appearance_header" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum_glossary_appearance_footer" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum__glossary_v_version_appearance_header" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum__glossary_v_version_appearance_footer" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum_people_appearance_header" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum_people_appearance_footer" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum__people_v_version_appearance_header" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum__people_v_version_appearance_footer" AS ENUM('default', 'custom', 'none');
  CREATE TYPE "public"."enum_headers_menu_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_headers_menu_mega_columns_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_headers_menu_mega_columns_links_icon" AS ENUM('none', 'star', 'chart', 'book', 'calendar', 'users', 'globe', 'bolt', 'shield', 'chat');
  CREATE TYPE "public"."enum_headers_menu_type" AS ENUM('link', 'dropdown', 'mega');
  CREATE TYPE "public"."enum_headers_menu_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_headers_menu_mega_auto_collection" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_headers_menu_mega_promo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_headers_menu_mega_bottom_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_headers_variant" AS ENUM('default', 'minimal', 'transparent');
  CREATE TYPE "public"."enum_headers_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_headers_cta_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_headers_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__headers_v_version_menu_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__headers_v_version_menu_mega_columns_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__headers_v_version_menu_mega_columns_links_icon" AS ENUM('none', 'star', 'chart', 'book', 'calendar', 'users', 'globe', 'bolt', 'shield', 'chat');
  CREATE TYPE "public"."enum__headers_v_version_menu_type" AS ENUM('link', 'dropdown', 'mega');
  CREATE TYPE "public"."enum__headers_v_version_menu_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__headers_v_version_menu_mega_auto_collection" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__headers_v_version_menu_mega_promo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__headers_v_version_menu_mega_bottom_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__headers_v_version_variant" AS ENUM('default', 'minimal', 'transparent');
  CREATE TYPE "public"."enum__headers_v_version_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__headers_v_version_cta_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__headers_v_published_locale" AS ENUM('en', 'he');
  CREATE TYPE "public"."enum__headers_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_footers_columns_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footers_social_platform" AS ENUM('linkedin', 'facebook', 'instagram', 'x', 'youtube');
  CREATE TYPE "public"."enum_footers_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__footers_v_version_columns_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__footers_v_version_social_platform" AS ENUM('linkedin', 'facebook', 'instagram', 'x', 'youtube');
  CREATE TYPE "public"."enum__footers_v_published_locale" AS ENUM('en', 'he');
  CREATE TYPE "public"."enum__footers_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "headers_menu_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_headers_menu_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "headers_menu_mega_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_headers_menu_mega_columns_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"description" varchar,
  	"icon" "enum_headers_menu_mega_columns_links_icon" DEFAULT 'none'
  );
  
  CREATE TABLE "headers_menu_mega_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar
  );
  
  CREATE TABLE "headers_menu" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"type" "enum_headers_menu_type" DEFAULT 'link',
  	"link_type" "enum_headers_menu_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"mega_auto_enabled" boolean,
  	"mega_auto_heading" varchar,
  	"mega_auto_collection" "enum_headers_menu_mega_auto_collection" DEFAULT 'posts',
  	"mega_auto_count" numeric DEFAULT 3,
  	"mega_promo_enabled" boolean,
  	"mega_promo_image_id" integer,
  	"mega_promo_title" varchar,
  	"mega_promo_text" varchar,
  	"mega_promo_link_type" "enum_headers_menu_mega_promo_link_type" DEFAULT 'reference',
  	"mega_promo_link_new_tab" boolean,
  	"mega_promo_link_url" varchar,
  	"mega_promo_link_label" varchar,
  	"mega_bottom_link_type" "enum_headers_menu_mega_bottom_link_type" DEFAULT 'reference',
  	"mega_bottom_link_new_tab" boolean,
  	"mega_bottom_link_url" varchar,
  	"mega_bottom_link_label" varchar
  );
  
  CREATE TABLE "headers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_headers_variant" DEFAULT 'default',
  	"show_language_switcher" boolean DEFAULT true,
  	"logo_id" integer,
  	"cta_type" "enum_headers_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_label" varchar,
  	"cta_appearance" "enum_headers_cta_appearance" DEFAULT 'primary',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "headers_locales" (
  	"_status" "enum_headers_status" DEFAULT 'draft',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "headers_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" integer,
  	"posts_id" integer,
  	"events_id" integer,
  	"resources_id" integer,
  	"glossary_id" integer,
  	"people_id" integer
  );
  
  CREATE TABLE "_headers_v_version_menu_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__headers_v_version_menu_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_headers_v_version_menu_mega_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__headers_v_version_menu_mega_columns_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"description" varchar,
  	"icon" "enum__headers_v_version_menu_mega_columns_links_icon" DEFAULT 'none',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_headers_v_version_menu_mega_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_headers_v_version_menu" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"type" "enum__headers_v_version_menu_type" DEFAULT 'link',
  	"link_type" "enum__headers_v_version_menu_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"mega_auto_enabled" boolean,
  	"mega_auto_heading" varchar,
  	"mega_auto_collection" "enum__headers_v_version_menu_mega_auto_collection" DEFAULT 'posts',
  	"mega_auto_count" numeric DEFAULT 3,
  	"mega_promo_enabled" boolean,
  	"mega_promo_image_id" integer,
  	"mega_promo_title" varchar,
  	"mega_promo_text" varchar,
  	"mega_promo_link_type" "enum__headers_v_version_menu_mega_promo_link_type" DEFAULT 'reference',
  	"mega_promo_link_new_tab" boolean,
  	"mega_promo_link_url" varchar,
  	"mega_promo_link_label" varchar,
  	"mega_bottom_link_type" "enum__headers_v_version_menu_mega_bottom_link_type" DEFAULT 'reference',
  	"mega_bottom_link_new_tab" boolean,
  	"mega_bottom_link_url" varchar,
  	"mega_bottom_link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_headers_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_variant" "enum__headers_v_version_variant" DEFAULT 'default',
  	"version_show_language_switcher" boolean DEFAULT true,
  	"version_logo_id" integer,
  	"version_cta_type" "enum__headers_v_version_cta_type" DEFAULT 'reference',
  	"version_cta_new_tab" boolean,
  	"version_cta_url" varchar,
  	"version_cta_label" varchar,
  	"version_cta_appearance" "enum__headers_v_version_cta_appearance" DEFAULT 'primary',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__headers_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_headers_v_locales" (
  	"version__status" "enum__headers_v_version_status" DEFAULT 'draft',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_headers_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" integer,
  	"posts_id" integer,
  	"events_id" integer,
  	"resources_id" integer,
  	"glossary_id" integer,
  	"people_id" integer
  );
  
  CREATE TABLE "footers_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footers_columns_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "footers_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar
  );
  
  CREATE TABLE "footers_social" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_footers_social_platform",
  	"url" varchar
  );
  
  CREATE TABLE "footers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "footers_locales" (
  	"text" varchar,
  	"legal" varchar,
  	"_status" "enum_footers_status" DEFAULT 'draft',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "footers_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" integer,
  	"posts_id" integer,
  	"events_id" integer,
  	"resources_id" integer,
  	"glossary_id" integer,
  	"people_id" integer
  );
  
  CREATE TABLE "_footers_v_version_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__footers_v_version_columns_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_footers_v_version_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_footers_v_version_social" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__footers_v_version_social_platform",
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_footers_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__footers_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_footers_v_locales" (
  	"version_text" varchar,
  	"version_legal" varchar,
  	"version__status" "enum__footers_v_version_status" DEFAULT 'draft',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_footers_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" integer,
  	"posts_id" integer,
  	"events_id" integer,
  	"resources_id" integer,
  	"glossary_id" integer,
  	"people_id" integer
  );
  
  ALTER TABLE "pages" ADD COLUMN "appearance_header" "enum_pages_appearance_header" DEFAULT 'default';
  ALTER TABLE "pages" ADD COLUMN "appearance_header_ref_id" integer;
  ALTER TABLE "pages" ADD COLUMN "appearance_footer" "enum_pages_appearance_footer" DEFAULT 'default';
  ALTER TABLE "pages" ADD COLUMN "appearance_footer_ref_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_appearance_header" "enum__pages_v_version_appearance_header" DEFAULT 'default';
  ALTER TABLE "_pages_v" ADD COLUMN "version_appearance_header_ref_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_appearance_footer" "enum__pages_v_version_appearance_footer" DEFAULT 'default';
  ALTER TABLE "_pages_v" ADD COLUMN "version_appearance_footer_ref_id" integer;
  ALTER TABLE "posts" ADD COLUMN "appearance_header" "enum_posts_appearance_header" DEFAULT 'default';
  ALTER TABLE "posts" ADD COLUMN "appearance_header_ref_id" integer;
  ALTER TABLE "posts" ADD COLUMN "appearance_footer" "enum_posts_appearance_footer" DEFAULT 'default';
  ALTER TABLE "posts" ADD COLUMN "appearance_footer_ref_id" integer;
  ALTER TABLE "_posts_v" ADD COLUMN "version_appearance_header" "enum__posts_v_version_appearance_header" DEFAULT 'default';
  ALTER TABLE "_posts_v" ADD COLUMN "version_appearance_header_ref_id" integer;
  ALTER TABLE "_posts_v" ADD COLUMN "version_appearance_footer" "enum__posts_v_version_appearance_footer" DEFAULT 'default';
  ALTER TABLE "_posts_v" ADD COLUMN "version_appearance_footer_ref_id" integer;
  ALTER TABLE "events" ADD COLUMN "appearance_header" "enum_events_appearance_header" DEFAULT 'default';
  ALTER TABLE "events" ADD COLUMN "appearance_header_ref_id" integer;
  ALTER TABLE "events" ADD COLUMN "appearance_footer" "enum_events_appearance_footer" DEFAULT 'default';
  ALTER TABLE "events" ADD COLUMN "appearance_footer_ref_id" integer;
  ALTER TABLE "_events_v" ADD COLUMN "version_appearance_header" "enum__events_v_version_appearance_header" DEFAULT 'default';
  ALTER TABLE "_events_v" ADD COLUMN "version_appearance_header_ref_id" integer;
  ALTER TABLE "_events_v" ADD COLUMN "version_appearance_footer" "enum__events_v_version_appearance_footer" DEFAULT 'default';
  ALTER TABLE "_events_v" ADD COLUMN "version_appearance_footer_ref_id" integer;
  ALTER TABLE "resources" ADD COLUMN "appearance_header" "enum_resources_appearance_header" DEFAULT 'default';
  ALTER TABLE "resources" ADD COLUMN "appearance_header_ref_id" integer;
  ALTER TABLE "resources" ADD COLUMN "appearance_footer" "enum_resources_appearance_footer" DEFAULT 'default';
  ALTER TABLE "resources" ADD COLUMN "appearance_footer_ref_id" integer;
  ALTER TABLE "_resources_v" ADD COLUMN "version_appearance_header" "enum__resources_v_version_appearance_header" DEFAULT 'default';
  ALTER TABLE "_resources_v" ADD COLUMN "version_appearance_header_ref_id" integer;
  ALTER TABLE "_resources_v" ADD COLUMN "version_appearance_footer" "enum__resources_v_version_appearance_footer" DEFAULT 'default';
  ALTER TABLE "_resources_v" ADD COLUMN "version_appearance_footer_ref_id" integer;
  ALTER TABLE "glossary" ADD COLUMN "appearance_header" "enum_glossary_appearance_header" DEFAULT 'default';
  ALTER TABLE "glossary" ADD COLUMN "appearance_header_ref_id" integer;
  ALTER TABLE "glossary" ADD COLUMN "appearance_footer" "enum_glossary_appearance_footer" DEFAULT 'default';
  ALTER TABLE "glossary" ADD COLUMN "appearance_footer_ref_id" integer;
  ALTER TABLE "_glossary_v" ADD COLUMN "version_appearance_header" "enum__glossary_v_version_appearance_header" DEFAULT 'default';
  ALTER TABLE "_glossary_v" ADD COLUMN "version_appearance_header_ref_id" integer;
  ALTER TABLE "_glossary_v" ADD COLUMN "version_appearance_footer" "enum__glossary_v_version_appearance_footer" DEFAULT 'default';
  ALTER TABLE "_glossary_v" ADD COLUMN "version_appearance_footer_ref_id" integer;
  ALTER TABLE "people" ADD COLUMN "appearance_header" "enum_people_appearance_header" DEFAULT 'default';
  ALTER TABLE "people" ADD COLUMN "appearance_header_ref_id" integer;
  ALTER TABLE "people" ADD COLUMN "appearance_footer" "enum_people_appearance_footer" DEFAULT 'default';
  ALTER TABLE "people" ADD COLUMN "appearance_footer_ref_id" integer;
  ALTER TABLE "_people_v" ADD COLUMN "version_appearance_header" "enum__people_v_version_appearance_header" DEFAULT 'default';
  ALTER TABLE "_people_v" ADD COLUMN "version_appearance_header_ref_id" integer;
  ALTER TABLE "_people_v" ADD COLUMN "version_appearance_footer" "enum__people_v_version_appearance_footer" DEFAULT 'default';
  ALTER TABLE "_people_v" ADD COLUMN "version_appearance_footer_ref_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "headers_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "footers_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "default_header_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "default_footer_id" integer;
  ALTER TABLE "headers_menu_links" ADD CONSTRAINT "headers_menu_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."headers_menu"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "headers_menu_mega_columns_links" ADD CONSTRAINT "headers_menu_mega_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."headers_menu_mega_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "headers_menu_mega_columns" ADD CONSTRAINT "headers_menu_mega_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."headers_menu"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "headers_menu" ADD CONSTRAINT "headers_menu_mega_promo_image_id_media_id_fk" FOREIGN KEY ("mega_promo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "headers_menu" ADD CONSTRAINT "headers_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."headers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "headers" ADD CONSTRAINT "headers_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "headers_locales" ADD CONSTRAINT "headers_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."headers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "headers_rels" ADD CONSTRAINT "headers_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."headers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "headers_rels" ADD CONSTRAINT "headers_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "headers_rels" ADD CONSTRAINT "headers_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "headers_rels" ADD CONSTRAINT "headers_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "headers_rels" ADD CONSTRAINT "headers_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "headers_rels" ADD CONSTRAINT "headers_rels_glossary_fk" FOREIGN KEY ("glossary_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "headers_rels" ADD CONSTRAINT "headers_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_headers_v_version_menu_links" ADD CONSTRAINT "_headers_v_version_menu_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_headers_v_version_menu"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_headers_v_version_menu_mega_columns_links" ADD CONSTRAINT "_headers_v_version_menu_mega_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_headers_v_version_menu_mega_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_headers_v_version_menu_mega_columns" ADD CONSTRAINT "_headers_v_version_menu_mega_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_headers_v_version_menu"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_headers_v_version_menu" ADD CONSTRAINT "_headers_v_version_menu_mega_promo_image_id_media_id_fk" FOREIGN KEY ("mega_promo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_headers_v_version_menu" ADD CONSTRAINT "_headers_v_version_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_headers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_headers_v" ADD CONSTRAINT "_headers_v_parent_id_headers_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."headers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_headers_v" ADD CONSTRAINT "_headers_v_version_logo_id_media_id_fk" FOREIGN KEY ("version_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_headers_v_locales" ADD CONSTRAINT "_headers_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_headers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_headers_v_rels" ADD CONSTRAINT "_headers_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_headers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_headers_v_rels" ADD CONSTRAINT "_headers_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_headers_v_rels" ADD CONSTRAINT "_headers_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_headers_v_rels" ADD CONSTRAINT "_headers_v_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_headers_v_rels" ADD CONSTRAINT "_headers_v_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_headers_v_rels" ADD CONSTRAINT "_headers_v_rels_glossary_fk" FOREIGN KEY ("glossary_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_headers_v_rels" ADD CONSTRAINT "_headers_v_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footers_columns_links" ADD CONSTRAINT "footers_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footers_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footers_columns" ADD CONSTRAINT "footers_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footers_social" ADD CONSTRAINT "footers_social_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footers_locales" ADD CONSTRAINT "footers_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footers_rels" ADD CONSTRAINT "footers_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footers_rels" ADD CONSTRAINT "footers_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footers_rels" ADD CONSTRAINT "footers_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footers_rels" ADD CONSTRAINT "footers_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footers_rels" ADD CONSTRAINT "footers_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footers_rels" ADD CONSTRAINT "footers_rels_glossary_fk" FOREIGN KEY ("glossary_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footers_rels" ADD CONSTRAINT "footers_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footers_v_version_columns_links" ADD CONSTRAINT "_footers_v_version_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footers_v_version_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footers_v_version_columns" ADD CONSTRAINT "_footers_v_version_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footers_v_version_social" ADD CONSTRAINT "_footers_v_version_social_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footers_v" ADD CONSTRAINT "_footers_v_parent_id_footers_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_footers_v_locales" ADD CONSTRAINT "_footers_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footers_v_rels" ADD CONSTRAINT "_footers_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_footers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footers_v_rels" ADD CONSTRAINT "_footers_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footers_v_rels" ADD CONSTRAINT "_footers_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footers_v_rels" ADD CONSTRAINT "_footers_v_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footers_v_rels" ADD CONSTRAINT "_footers_v_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footers_v_rels" ADD CONSTRAINT "_footers_v_rels_glossary_fk" FOREIGN KEY ("glossary_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footers_v_rels" ADD CONSTRAINT "_footers_v_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "headers_menu_links_order_idx" ON "headers_menu_links" USING btree ("_order");
  CREATE INDEX "headers_menu_links_parent_id_idx" ON "headers_menu_links" USING btree ("_parent_id");
  CREATE INDEX "headers_menu_links_locale_idx" ON "headers_menu_links" USING btree ("_locale");
  CREATE INDEX "headers_menu_mega_columns_links_order_idx" ON "headers_menu_mega_columns_links" USING btree ("_order");
  CREATE INDEX "headers_menu_mega_columns_links_parent_id_idx" ON "headers_menu_mega_columns_links" USING btree ("_parent_id");
  CREATE INDEX "headers_menu_mega_columns_links_locale_idx" ON "headers_menu_mega_columns_links" USING btree ("_locale");
  CREATE INDEX "headers_menu_mega_columns_order_idx" ON "headers_menu_mega_columns" USING btree ("_order");
  CREATE INDEX "headers_menu_mega_columns_parent_id_idx" ON "headers_menu_mega_columns" USING btree ("_parent_id");
  CREATE INDEX "headers_menu_mega_columns_locale_idx" ON "headers_menu_mega_columns" USING btree ("_locale");
  CREATE INDEX "headers_menu_order_idx" ON "headers_menu" USING btree ("_order");
  CREATE INDEX "headers_menu_parent_id_idx" ON "headers_menu" USING btree ("_parent_id");
  CREATE INDEX "headers_menu_locale_idx" ON "headers_menu" USING btree ("_locale");
  CREATE INDEX "headers_menu_mega_promo_mega_promo_image_idx" ON "headers_menu" USING btree ("mega_promo_image_id");
  CREATE INDEX "headers_logo_idx" ON "headers" USING btree ("logo_id");
  CREATE INDEX "headers_updated_at_idx" ON "headers" USING btree ("updated_at");
  CREATE INDEX "headers_created_at_idx" ON "headers" USING btree ("created_at");
  CREATE INDEX "headers__status_idx" ON "headers_locales" USING btree ("_status","_locale");
  CREATE UNIQUE INDEX "headers_locales_locale_parent_id_unique" ON "headers_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "headers_locales_parent_id_idx" ON "headers_locales" USING btree ("_parent_id");
  CREATE INDEX "headers_rels_order_idx" ON "headers_rels" USING btree ("order");
  CREATE INDEX "headers_rels_parent_idx" ON "headers_rels" USING btree ("parent_id");
  CREATE INDEX "headers_rels_path_idx" ON "headers_rels" USING btree ("path");
  CREATE INDEX "headers_rels_locale_idx" ON "headers_rels" USING btree ("locale");
  CREATE INDEX "headers_rels_pages_id_idx" ON "headers_rels" USING btree ("pages_id","locale");
  CREATE INDEX "headers_rels_posts_id_idx" ON "headers_rels" USING btree ("posts_id","locale");
  CREATE INDEX "headers_rels_events_id_idx" ON "headers_rels" USING btree ("events_id","locale");
  CREATE INDEX "headers_rels_resources_id_idx" ON "headers_rels" USING btree ("resources_id","locale");
  CREATE INDEX "headers_rels_glossary_id_idx" ON "headers_rels" USING btree ("glossary_id","locale");
  CREATE INDEX "headers_rels_people_id_idx" ON "headers_rels" USING btree ("people_id","locale");
  CREATE INDEX "_headers_v_version_menu_links_order_idx" ON "_headers_v_version_menu_links" USING btree ("_order");
  CREATE INDEX "_headers_v_version_menu_links_parent_id_idx" ON "_headers_v_version_menu_links" USING btree ("_parent_id");
  CREATE INDEX "_headers_v_version_menu_links_locale_idx" ON "_headers_v_version_menu_links" USING btree ("_locale");
  CREATE INDEX "_headers_v_version_menu_mega_columns_links_order_idx" ON "_headers_v_version_menu_mega_columns_links" USING btree ("_order");
  CREATE INDEX "_headers_v_version_menu_mega_columns_links_parent_id_idx" ON "_headers_v_version_menu_mega_columns_links" USING btree ("_parent_id");
  CREATE INDEX "_headers_v_version_menu_mega_columns_links_locale_idx" ON "_headers_v_version_menu_mega_columns_links" USING btree ("_locale");
  CREATE INDEX "_headers_v_version_menu_mega_columns_order_idx" ON "_headers_v_version_menu_mega_columns" USING btree ("_order");
  CREATE INDEX "_headers_v_version_menu_mega_columns_parent_id_idx" ON "_headers_v_version_menu_mega_columns" USING btree ("_parent_id");
  CREATE INDEX "_headers_v_version_menu_mega_columns_locale_idx" ON "_headers_v_version_menu_mega_columns" USING btree ("_locale");
  CREATE INDEX "_headers_v_version_menu_order_idx" ON "_headers_v_version_menu" USING btree ("_order");
  CREATE INDEX "_headers_v_version_menu_parent_id_idx" ON "_headers_v_version_menu" USING btree ("_parent_id");
  CREATE INDEX "_headers_v_version_menu_locale_idx" ON "_headers_v_version_menu" USING btree ("_locale");
  CREATE INDEX "_headers_v_version_menu_mega_promo_mega_promo_image_idx" ON "_headers_v_version_menu" USING btree ("mega_promo_image_id");
  CREATE INDEX "_headers_v_parent_idx" ON "_headers_v" USING btree ("parent_id");
  CREATE INDEX "_headers_v_version_version_logo_idx" ON "_headers_v" USING btree ("version_logo_id");
  CREATE INDEX "_headers_v_version_version_updated_at_idx" ON "_headers_v" USING btree ("version_updated_at");
  CREATE INDEX "_headers_v_version_version_created_at_idx" ON "_headers_v" USING btree ("version_created_at");
  CREATE INDEX "_headers_v_created_at_idx" ON "_headers_v" USING btree ("created_at");
  CREATE INDEX "_headers_v_updated_at_idx" ON "_headers_v" USING btree ("updated_at");
  CREATE INDEX "_headers_v_snapshot_idx" ON "_headers_v" USING btree ("snapshot");
  CREATE INDEX "_headers_v_published_locale_idx" ON "_headers_v" USING btree ("published_locale");
  CREATE INDEX "_headers_v_latest_idx" ON "_headers_v" USING btree ("latest");
  CREATE INDEX "_headers_v_autosave_idx" ON "_headers_v" USING btree ("autosave");
  CREATE INDEX "_headers_v_version_version__status_idx" ON "_headers_v_locales" USING btree ("version__status","_locale");
  CREATE UNIQUE INDEX "_headers_v_locales_locale_parent_id_unique" ON "_headers_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_headers_v_locales_parent_id_idx" ON "_headers_v_locales" USING btree ("_parent_id");
  CREATE INDEX "_headers_v_rels_order_idx" ON "_headers_v_rels" USING btree ("order");
  CREATE INDEX "_headers_v_rels_parent_idx" ON "_headers_v_rels" USING btree ("parent_id");
  CREATE INDEX "_headers_v_rels_path_idx" ON "_headers_v_rels" USING btree ("path");
  CREATE INDEX "_headers_v_rels_locale_idx" ON "_headers_v_rels" USING btree ("locale");
  CREATE INDEX "_headers_v_rels_pages_id_idx" ON "_headers_v_rels" USING btree ("pages_id","locale");
  CREATE INDEX "_headers_v_rels_posts_id_idx" ON "_headers_v_rels" USING btree ("posts_id","locale");
  CREATE INDEX "_headers_v_rels_events_id_idx" ON "_headers_v_rels" USING btree ("events_id","locale");
  CREATE INDEX "_headers_v_rels_resources_id_idx" ON "_headers_v_rels" USING btree ("resources_id","locale");
  CREATE INDEX "_headers_v_rels_glossary_id_idx" ON "_headers_v_rels" USING btree ("glossary_id","locale");
  CREATE INDEX "_headers_v_rels_people_id_idx" ON "_headers_v_rels" USING btree ("people_id","locale");
  CREATE INDEX "footers_columns_links_order_idx" ON "footers_columns_links" USING btree ("_order");
  CREATE INDEX "footers_columns_links_parent_id_idx" ON "footers_columns_links" USING btree ("_parent_id");
  CREATE INDEX "footers_columns_links_locale_idx" ON "footers_columns_links" USING btree ("_locale");
  CREATE INDEX "footers_columns_order_idx" ON "footers_columns" USING btree ("_order");
  CREATE INDEX "footers_columns_parent_id_idx" ON "footers_columns" USING btree ("_parent_id");
  CREATE INDEX "footers_columns_locale_idx" ON "footers_columns" USING btree ("_locale");
  CREATE INDEX "footers_social_order_idx" ON "footers_social" USING btree ("_order");
  CREATE INDEX "footers_social_parent_id_idx" ON "footers_social" USING btree ("_parent_id");
  CREATE INDEX "footers_updated_at_idx" ON "footers" USING btree ("updated_at");
  CREATE INDEX "footers_created_at_idx" ON "footers" USING btree ("created_at");
  CREATE INDEX "footers__status_idx" ON "footers_locales" USING btree ("_status","_locale");
  CREATE UNIQUE INDEX "footers_locales_locale_parent_id_unique" ON "footers_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "footers_locales_parent_id_idx" ON "footers_locales" USING btree ("_parent_id");
  CREATE INDEX "footers_rels_order_idx" ON "footers_rels" USING btree ("order");
  CREATE INDEX "footers_rels_parent_idx" ON "footers_rels" USING btree ("parent_id");
  CREATE INDEX "footers_rels_path_idx" ON "footers_rels" USING btree ("path");
  CREATE INDEX "footers_rels_locale_idx" ON "footers_rels" USING btree ("locale");
  CREATE INDEX "footers_rels_pages_id_idx" ON "footers_rels" USING btree ("pages_id","locale");
  CREATE INDEX "footers_rels_posts_id_idx" ON "footers_rels" USING btree ("posts_id","locale");
  CREATE INDEX "footers_rels_events_id_idx" ON "footers_rels" USING btree ("events_id","locale");
  CREATE INDEX "footers_rels_resources_id_idx" ON "footers_rels" USING btree ("resources_id","locale");
  CREATE INDEX "footers_rels_glossary_id_idx" ON "footers_rels" USING btree ("glossary_id","locale");
  CREATE INDEX "footers_rels_people_id_idx" ON "footers_rels" USING btree ("people_id","locale");
  CREATE INDEX "_footers_v_version_columns_links_order_idx" ON "_footers_v_version_columns_links" USING btree ("_order");
  CREATE INDEX "_footers_v_version_columns_links_parent_id_idx" ON "_footers_v_version_columns_links" USING btree ("_parent_id");
  CREATE INDEX "_footers_v_version_columns_links_locale_idx" ON "_footers_v_version_columns_links" USING btree ("_locale");
  CREATE INDEX "_footers_v_version_columns_order_idx" ON "_footers_v_version_columns" USING btree ("_order");
  CREATE INDEX "_footers_v_version_columns_parent_id_idx" ON "_footers_v_version_columns" USING btree ("_parent_id");
  CREATE INDEX "_footers_v_version_columns_locale_idx" ON "_footers_v_version_columns" USING btree ("_locale");
  CREATE INDEX "_footers_v_version_social_order_idx" ON "_footers_v_version_social" USING btree ("_order");
  CREATE INDEX "_footers_v_version_social_parent_id_idx" ON "_footers_v_version_social" USING btree ("_parent_id");
  CREATE INDEX "_footers_v_parent_idx" ON "_footers_v" USING btree ("parent_id");
  CREATE INDEX "_footers_v_version_version_updated_at_idx" ON "_footers_v" USING btree ("version_updated_at");
  CREATE INDEX "_footers_v_version_version_created_at_idx" ON "_footers_v" USING btree ("version_created_at");
  CREATE INDEX "_footers_v_created_at_idx" ON "_footers_v" USING btree ("created_at");
  CREATE INDEX "_footers_v_updated_at_idx" ON "_footers_v" USING btree ("updated_at");
  CREATE INDEX "_footers_v_snapshot_idx" ON "_footers_v" USING btree ("snapshot");
  CREATE INDEX "_footers_v_published_locale_idx" ON "_footers_v" USING btree ("published_locale");
  CREATE INDEX "_footers_v_latest_idx" ON "_footers_v" USING btree ("latest");
  CREATE INDEX "_footers_v_autosave_idx" ON "_footers_v" USING btree ("autosave");
  CREATE INDEX "_footers_v_version_version__status_idx" ON "_footers_v_locales" USING btree ("version__status","_locale");
  CREATE UNIQUE INDEX "_footers_v_locales_locale_parent_id_unique" ON "_footers_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_footers_v_locales_parent_id_idx" ON "_footers_v_locales" USING btree ("_parent_id");
  CREATE INDEX "_footers_v_rels_order_idx" ON "_footers_v_rels" USING btree ("order");
  CREATE INDEX "_footers_v_rels_parent_idx" ON "_footers_v_rels" USING btree ("parent_id");
  CREATE INDEX "_footers_v_rels_path_idx" ON "_footers_v_rels" USING btree ("path");
  CREATE INDEX "_footers_v_rels_locale_idx" ON "_footers_v_rels" USING btree ("locale");
  CREATE INDEX "_footers_v_rels_pages_id_idx" ON "_footers_v_rels" USING btree ("pages_id","locale");
  CREATE INDEX "_footers_v_rels_posts_id_idx" ON "_footers_v_rels" USING btree ("posts_id","locale");
  CREATE INDEX "_footers_v_rels_events_id_idx" ON "_footers_v_rels" USING btree ("events_id","locale");
  CREATE INDEX "_footers_v_rels_resources_id_idx" ON "_footers_v_rels" USING btree ("resources_id","locale");
  CREATE INDEX "_footers_v_rels_glossary_id_idx" ON "_footers_v_rels" USING btree ("glossary_id","locale");
  CREATE INDEX "_footers_v_rels_people_id_idx" ON "_footers_v_rels" USING btree ("people_id","locale");
  ALTER TABLE "pages" ADD CONSTRAINT "pages_appearance_header_ref_id_headers_id_fk" FOREIGN KEY ("appearance_header_ref_id") REFERENCES "public"."headers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_appearance_footer_ref_id_footers_id_fk" FOREIGN KEY ("appearance_footer_ref_id") REFERENCES "public"."footers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_appearance_header_ref_id_headers_id_fk" FOREIGN KEY ("version_appearance_header_ref_id") REFERENCES "public"."headers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_appearance_footer_ref_id_footers_id_fk" FOREIGN KEY ("version_appearance_footer_ref_id") REFERENCES "public"."footers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_appearance_header_ref_id_headers_id_fk" FOREIGN KEY ("appearance_header_ref_id") REFERENCES "public"."headers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_appearance_footer_ref_id_footers_id_fk" FOREIGN KEY ("appearance_footer_ref_id") REFERENCES "public"."footers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_appearance_header_ref_id_headers_id_fk" FOREIGN KEY ("version_appearance_header_ref_id") REFERENCES "public"."headers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_appearance_footer_ref_id_footers_id_fk" FOREIGN KEY ("version_appearance_footer_ref_id") REFERENCES "public"."footers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_appearance_header_ref_id_headers_id_fk" FOREIGN KEY ("appearance_header_ref_id") REFERENCES "public"."headers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_appearance_footer_ref_id_footers_id_fk" FOREIGN KEY ("appearance_footer_ref_id") REFERENCES "public"."footers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_version_appearance_header_ref_id_headers_id_fk" FOREIGN KEY ("version_appearance_header_ref_id") REFERENCES "public"."headers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_version_appearance_footer_ref_id_footers_id_fk" FOREIGN KEY ("version_appearance_footer_ref_id") REFERENCES "public"."footers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resources" ADD CONSTRAINT "resources_appearance_header_ref_id_headers_id_fk" FOREIGN KEY ("appearance_header_ref_id") REFERENCES "public"."headers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resources" ADD CONSTRAINT "resources_appearance_footer_ref_id_footers_id_fk" FOREIGN KEY ("appearance_footer_ref_id") REFERENCES "public"."footers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_resources_v" ADD CONSTRAINT "_resources_v_version_appearance_header_ref_id_headers_id_fk" FOREIGN KEY ("version_appearance_header_ref_id") REFERENCES "public"."headers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_resources_v" ADD CONSTRAINT "_resources_v_version_appearance_footer_ref_id_footers_id_fk" FOREIGN KEY ("version_appearance_footer_ref_id") REFERENCES "public"."footers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "glossary" ADD CONSTRAINT "glossary_appearance_header_ref_id_headers_id_fk" FOREIGN KEY ("appearance_header_ref_id") REFERENCES "public"."headers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "glossary" ADD CONSTRAINT "glossary_appearance_footer_ref_id_footers_id_fk" FOREIGN KEY ("appearance_footer_ref_id") REFERENCES "public"."footers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_glossary_v" ADD CONSTRAINT "_glossary_v_version_appearance_header_ref_id_headers_id_fk" FOREIGN KEY ("version_appearance_header_ref_id") REFERENCES "public"."headers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_glossary_v" ADD CONSTRAINT "_glossary_v_version_appearance_footer_ref_id_footers_id_fk" FOREIGN KEY ("version_appearance_footer_ref_id") REFERENCES "public"."footers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "people" ADD CONSTRAINT "people_appearance_header_ref_id_headers_id_fk" FOREIGN KEY ("appearance_header_ref_id") REFERENCES "public"."headers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "people" ADD CONSTRAINT "people_appearance_footer_ref_id_footers_id_fk" FOREIGN KEY ("appearance_footer_ref_id") REFERENCES "public"."footers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_people_v" ADD CONSTRAINT "_people_v_version_appearance_header_ref_id_headers_id_fk" FOREIGN KEY ("version_appearance_header_ref_id") REFERENCES "public"."headers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_people_v" ADD CONSTRAINT "_people_v_version_appearance_footer_ref_id_footers_id_fk" FOREIGN KEY ("version_appearance_footer_ref_id") REFERENCES "public"."footers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_headers_fk" FOREIGN KEY ("headers_id") REFERENCES "public"."headers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_footers_fk" FOREIGN KEY ("footers_id") REFERENCES "public"."footers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_default_header_id_headers_id_fk" FOREIGN KEY ("default_header_id") REFERENCES "public"."headers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_default_footer_id_footers_id_fk" FOREIGN KEY ("default_footer_id") REFERENCES "public"."footers"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_appearance_appearance_header_ref_idx" ON "pages" USING btree ("appearance_header_ref_id");
  CREATE INDEX "pages_appearance_appearance_footer_ref_idx" ON "pages" USING btree ("appearance_footer_ref_id");
  CREATE INDEX "_pages_v_version_appearance_version_appearance_header_re_idx" ON "_pages_v" USING btree ("version_appearance_header_ref_id");
  CREATE INDEX "_pages_v_version_appearance_version_appearance_footer_re_idx" ON "_pages_v" USING btree ("version_appearance_footer_ref_id");
  CREATE INDEX "posts_appearance_appearance_header_ref_idx" ON "posts" USING btree ("appearance_header_ref_id");
  CREATE INDEX "posts_appearance_appearance_footer_ref_idx" ON "posts" USING btree ("appearance_footer_ref_id");
  CREATE INDEX "_posts_v_version_appearance_version_appearance_header_re_idx" ON "_posts_v" USING btree ("version_appearance_header_ref_id");
  CREATE INDEX "_posts_v_version_appearance_version_appearance_footer_re_idx" ON "_posts_v" USING btree ("version_appearance_footer_ref_id");
  CREATE INDEX "events_appearance_appearance_header_ref_idx" ON "events" USING btree ("appearance_header_ref_id");
  CREATE INDEX "events_appearance_appearance_footer_ref_idx" ON "events" USING btree ("appearance_footer_ref_id");
  CREATE INDEX "_events_v_version_appearance_version_appearance_header_r_idx" ON "_events_v" USING btree ("version_appearance_header_ref_id");
  CREATE INDEX "_events_v_version_appearance_version_appearance_footer_r_idx" ON "_events_v" USING btree ("version_appearance_footer_ref_id");
  CREATE INDEX "resources_appearance_appearance_header_ref_idx" ON "resources" USING btree ("appearance_header_ref_id");
  CREATE INDEX "resources_appearance_appearance_footer_ref_idx" ON "resources" USING btree ("appearance_footer_ref_id");
  CREATE INDEX "_resources_v_version_appearance_version_appearance_heade_idx" ON "_resources_v" USING btree ("version_appearance_header_ref_id");
  CREATE INDEX "_resources_v_version_appearance_version_appearance_foote_idx" ON "_resources_v" USING btree ("version_appearance_footer_ref_id");
  CREATE INDEX "glossary_appearance_appearance_header_ref_idx" ON "glossary" USING btree ("appearance_header_ref_id");
  CREATE INDEX "glossary_appearance_appearance_footer_ref_idx" ON "glossary" USING btree ("appearance_footer_ref_id");
  CREATE INDEX "_glossary_v_version_appearance_version_appearance_header_idx" ON "_glossary_v" USING btree ("version_appearance_header_ref_id");
  CREATE INDEX "_glossary_v_version_appearance_version_appearance_footer_idx" ON "_glossary_v" USING btree ("version_appearance_footer_ref_id");
  CREATE INDEX "people_appearance_appearance_header_ref_idx" ON "people" USING btree ("appearance_header_ref_id");
  CREATE INDEX "people_appearance_appearance_footer_ref_idx" ON "people" USING btree ("appearance_footer_ref_id");
  CREATE INDEX "_people_v_version_appearance_version_appearance_header_r_idx" ON "_people_v" USING btree ("version_appearance_header_ref_id");
  CREATE INDEX "_people_v_version_appearance_version_appearance_footer_r_idx" ON "_people_v" USING btree ("version_appearance_footer_ref_id");
  CREATE INDEX "payload_locked_documents_rels_headers_id_idx" ON "payload_locked_documents_rels" USING btree ("headers_id");
  CREATE INDEX "payload_locked_documents_rels_footers_id_idx" ON "payload_locked_documents_rels" USING btree ("footers_id");
  CREATE INDEX "site_settings_default_header_idx" ON "site_settings" USING btree ("default_header_id");
  CREATE INDEX "site_settings_default_footer_idx" ON "site_settings" USING btree ("default_footer_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "headers_menu_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "headers_menu_mega_columns_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "headers_menu_mega_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "headers_menu" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "headers" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "headers_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "headers_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_headers_v_version_menu_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_headers_v_version_menu_mega_columns_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_headers_v_version_menu_mega_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_headers_v_version_menu" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_headers_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_headers_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_headers_v_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footers_columns_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footers_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footers_social" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footers" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footers_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footers_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_footers_v_version_columns_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_footers_v_version_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_footers_v_version_social" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_footers_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_footers_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_footers_v_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "headers_menu_links" CASCADE;
  DROP TABLE "headers_menu_mega_columns_links" CASCADE;
  DROP TABLE "headers_menu_mega_columns" CASCADE;
  DROP TABLE "headers_menu" CASCADE;
  DROP TABLE "headers" CASCADE;
  DROP TABLE "headers_locales" CASCADE;
  DROP TABLE "headers_rels" CASCADE;
  DROP TABLE "_headers_v_version_menu_links" CASCADE;
  DROP TABLE "_headers_v_version_menu_mega_columns_links" CASCADE;
  DROP TABLE "_headers_v_version_menu_mega_columns" CASCADE;
  DROP TABLE "_headers_v_version_menu" CASCADE;
  DROP TABLE "_headers_v" CASCADE;
  DROP TABLE "_headers_v_locales" CASCADE;
  DROP TABLE "_headers_v_rels" CASCADE;
  DROP TABLE "footers_columns_links" CASCADE;
  DROP TABLE "footers_columns" CASCADE;
  DROP TABLE "footers_social" CASCADE;
  DROP TABLE "footers" CASCADE;
  DROP TABLE "footers_locales" CASCADE;
  DROP TABLE "footers_rels" CASCADE;
  DROP TABLE "_footers_v_version_columns_links" CASCADE;
  DROP TABLE "_footers_v_version_columns" CASCADE;
  DROP TABLE "_footers_v_version_social" CASCADE;
  DROP TABLE "_footers_v" CASCADE;
  DROP TABLE "_footers_v_locales" CASCADE;
  DROP TABLE "_footers_v_rels" CASCADE;
  ALTER TABLE "pages" DROP CONSTRAINT "pages_appearance_header_ref_id_headers_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_appearance_footer_ref_id_footers_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_appearance_header_ref_id_headers_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_appearance_footer_ref_id_footers_id_fk";
  
  ALTER TABLE "posts" DROP CONSTRAINT "posts_appearance_header_ref_id_headers_id_fk";
  
  ALTER TABLE "posts" DROP CONSTRAINT "posts_appearance_footer_ref_id_footers_id_fk";
  
  ALTER TABLE "_posts_v" DROP CONSTRAINT "_posts_v_version_appearance_header_ref_id_headers_id_fk";
  
  ALTER TABLE "_posts_v" DROP CONSTRAINT "_posts_v_version_appearance_footer_ref_id_footers_id_fk";
  
  ALTER TABLE "events" DROP CONSTRAINT "events_appearance_header_ref_id_headers_id_fk";
  
  ALTER TABLE "events" DROP CONSTRAINT "events_appearance_footer_ref_id_footers_id_fk";
  
  ALTER TABLE "_events_v" DROP CONSTRAINT "_events_v_version_appearance_header_ref_id_headers_id_fk";
  
  ALTER TABLE "_events_v" DROP CONSTRAINT "_events_v_version_appearance_footer_ref_id_footers_id_fk";
  
  ALTER TABLE "resources" DROP CONSTRAINT "resources_appearance_header_ref_id_headers_id_fk";
  
  ALTER TABLE "resources" DROP CONSTRAINT "resources_appearance_footer_ref_id_footers_id_fk";
  
  ALTER TABLE "_resources_v" DROP CONSTRAINT "_resources_v_version_appearance_header_ref_id_headers_id_fk";
  
  ALTER TABLE "_resources_v" DROP CONSTRAINT "_resources_v_version_appearance_footer_ref_id_footers_id_fk";
  
  ALTER TABLE "glossary" DROP CONSTRAINT "glossary_appearance_header_ref_id_headers_id_fk";
  
  ALTER TABLE "glossary" DROP CONSTRAINT "glossary_appearance_footer_ref_id_footers_id_fk";
  
  ALTER TABLE "_glossary_v" DROP CONSTRAINT "_glossary_v_version_appearance_header_ref_id_headers_id_fk";
  
  ALTER TABLE "_glossary_v" DROP CONSTRAINT "_glossary_v_version_appearance_footer_ref_id_footers_id_fk";
  
  ALTER TABLE "people" DROP CONSTRAINT "people_appearance_header_ref_id_headers_id_fk";
  
  ALTER TABLE "people" DROP CONSTRAINT "people_appearance_footer_ref_id_footers_id_fk";
  
  ALTER TABLE "_people_v" DROP CONSTRAINT "_people_v_version_appearance_header_ref_id_headers_id_fk";
  
  ALTER TABLE "_people_v" DROP CONSTRAINT "_people_v_version_appearance_footer_ref_id_footers_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_headers_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_footers_fk";
  
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_default_header_id_headers_id_fk";
  
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_default_footer_id_footers_id_fk";
  
  DROP INDEX "pages_appearance_appearance_header_ref_idx";
  DROP INDEX "pages_appearance_appearance_footer_ref_idx";
  DROP INDEX "_pages_v_version_appearance_version_appearance_header_re_idx";
  DROP INDEX "_pages_v_version_appearance_version_appearance_footer_re_idx";
  DROP INDEX "posts_appearance_appearance_header_ref_idx";
  DROP INDEX "posts_appearance_appearance_footer_ref_idx";
  DROP INDEX "_posts_v_version_appearance_version_appearance_header_re_idx";
  DROP INDEX "_posts_v_version_appearance_version_appearance_footer_re_idx";
  DROP INDEX "events_appearance_appearance_header_ref_idx";
  DROP INDEX "events_appearance_appearance_footer_ref_idx";
  DROP INDEX "_events_v_version_appearance_version_appearance_header_r_idx";
  DROP INDEX "_events_v_version_appearance_version_appearance_footer_r_idx";
  DROP INDEX "resources_appearance_appearance_header_ref_idx";
  DROP INDEX "resources_appearance_appearance_footer_ref_idx";
  DROP INDEX "_resources_v_version_appearance_version_appearance_heade_idx";
  DROP INDEX "_resources_v_version_appearance_version_appearance_foote_idx";
  DROP INDEX "glossary_appearance_appearance_header_ref_idx";
  DROP INDEX "glossary_appearance_appearance_footer_ref_idx";
  DROP INDEX "_glossary_v_version_appearance_version_appearance_header_idx";
  DROP INDEX "_glossary_v_version_appearance_version_appearance_footer_idx";
  DROP INDEX "people_appearance_appearance_header_ref_idx";
  DROP INDEX "people_appearance_appearance_footer_ref_idx";
  DROP INDEX "_people_v_version_appearance_version_appearance_header_r_idx";
  DROP INDEX "_people_v_version_appearance_version_appearance_footer_r_idx";
  DROP INDEX "payload_locked_documents_rels_headers_id_idx";
  DROP INDEX "payload_locked_documents_rels_footers_id_idx";
  DROP INDEX "site_settings_default_header_idx";
  DROP INDEX "site_settings_default_footer_idx";
  ALTER TABLE "pages" DROP COLUMN "appearance_header";
  ALTER TABLE "pages" DROP COLUMN "appearance_header_ref_id";
  ALTER TABLE "pages" DROP COLUMN "appearance_footer";
  ALTER TABLE "pages" DROP COLUMN "appearance_footer_ref_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_appearance_header";
  ALTER TABLE "_pages_v" DROP COLUMN "version_appearance_header_ref_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_appearance_footer";
  ALTER TABLE "_pages_v" DROP COLUMN "version_appearance_footer_ref_id";
  ALTER TABLE "posts" DROP COLUMN "appearance_header";
  ALTER TABLE "posts" DROP COLUMN "appearance_header_ref_id";
  ALTER TABLE "posts" DROP COLUMN "appearance_footer";
  ALTER TABLE "posts" DROP COLUMN "appearance_footer_ref_id";
  ALTER TABLE "_posts_v" DROP COLUMN "version_appearance_header";
  ALTER TABLE "_posts_v" DROP COLUMN "version_appearance_header_ref_id";
  ALTER TABLE "_posts_v" DROP COLUMN "version_appearance_footer";
  ALTER TABLE "_posts_v" DROP COLUMN "version_appearance_footer_ref_id";
  ALTER TABLE "events" DROP COLUMN "appearance_header";
  ALTER TABLE "events" DROP COLUMN "appearance_header_ref_id";
  ALTER TABLE "events" DROP COLUMN "appearance_footer";
  ALTER TABLE "events" DROP COLUMN "appearance_footer_ref_id";
  ALTER TABLE "_events_v" DROP COLUMN "version_appearance_header";
  ALTER TABLE "_events_v" DROP COLUMN "version_appearance_header_ref_id";
  ALTER TABLE "_events_v" DROP COLUMN "version_appearance_footer";
  ALTER TABLE "_events_v" DROP COLUMN "version_appearance_footer_ref_id";
  ALTER TABLE "resources" DROP COLUMN "appearance_header";
  ALTER TABLE "resources" DROP COLUMN "appearance_header_ref_id";
  ALTER TABLE "resources" DROP COLUMN "appearance_footer";
  ALTER TABLE "resources" DROP COLUMN "appearance_footer_ref_id";
  ALTER TABLE "_resources_v" DROP COLUMN "version_appearance_header";
  ALTER TABLE "_resources_v" DROP COLUMN "version_appearance_header_ref_id";
  ALTER TABLE "_resources_v" DROP COLUMN "version_appearance_footer";
  ALTER TABLE "_resources_v" DROP COLUMN "version_appearance_footer_ref_id";
  ALTER TABLE "glossary" DROP COLUMN "appearance_header";
  ALTER TABLE "glossary" DROP COLUMN "appearance_header_ref_id";
  ALTER TABLE "glossary" DROP COLUMN "appearance_footer";
  ALTER TABLE "glossary" DROP COLUMN "appearance_footer_ref_id";
  ALTER TABLE "_glossary_v" DROP COLUMN "version_appearance_header";
  ALTER TABLE "_glossary_v" DROP COLUMN "version_appearance_header_ref_id";
  ALTER TABLE "_glossary_v" DROP COLUMN "version_appearance_footer";
  ALTER TABLE "_glossary_v" DROP COLUMN "version_appearance_footer_ref_id";
  ALTER TABLE "people" DROP COLUMN "appearance_header";
  ALTER TABLE "people" DROP COLUMN "appearance_header_ref_id";
  ALTER TABLE "people" DROP COLUMN "appearance_footer";
  ALTER TABLE "people" DROP COLUMN "appearance_footer_ref_id";
  ALTER TABLE "_people_v" DROP COLUMN "version_appearance_header";
  ALTER TABLE "_people_v" DROP COLUMN "version_appearance_header_ref_id";
  ALTER TABLE "_people_v" DROP COLUMN "version_appearance_footer";
  ALTER TABLE "_people_v" DROP COLUMN "version_appearance_footer_ref_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "headers_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "footers_id";
  ALTER TABLE "site_settings" DROP COLUMN "default_header_id";
  ALTER TABLE "site_settings" DROP COLUMN "default_footer_id";
  DROP TYPE "public"."enum_pages_appearance_header";
  DROP TYPE "public"."enum_pages_appearance_footer";
  DROP TYPE "public"."enum__pages_v_version_appearance_header";
  DROP TYPE "public"."enum__pages_v_version_appearance_footer";
  DROP TYPE "public"."enum_posts_appearance_header";
  DROP TYPE "public"."enum_posts_appearance_footer";
  DROP TYPE "public"."enum__posts_v_version_appearance_header";
  DROP TYPE "public"."enum__posts_v_version_appearance_footer";
  DROP TYPE "public"."enum_events_appearance_header";
  DROP TYPE "public"."enum_events_appearance_footer";
  DROP TYPE "public"."enum__events_v_version_appearance_header";
  DROP TYPE "public"."enum__events_v_version_appearance_footer";
  DROP TYPE "public"."enum_resources_appearance_header";
  DROP TYPE "public"."enum_resources_appearance_footer";
  DROP TYPE "public"."enum__resources_v_version_appearance_header";
  DROP TYPE "public"."enum__resources_v_version_appearance_footer";
  DROP TYPE "public"."enum_glossary_appearance_header";
  DROP TYPE "public"."enum_glossary_appearance_footer";
  DROP TYPE "public"."enum__glossary_v_version_appearance_header";
  DROP TYPE "public"."enum__glossary_v_version_appearance_footer";
  DROP TYPE "public"."enum_people_appearance_header";
  DROP TYPE "public"."enum_people_appearance_footer";
  DROP TYPE "public"."enum__people_v_version_appearance_header";
  DROP TYPE "public"."enum__people_v_version_appearance_footer";
  DROP TYPE "public"."enum_headers_menu_links_link_type";
  DROP TYPE "public"."enum_headers_menu_mega_columns_links_link_type";
  DROP TYPE "public"."enum_headers_menu_mega_columns_links_icon";
  DROP TYPE "public"."enum_headers_menu_type";
  DROP TYPE "public"."enum_headers_menu_link_type";
  DROP TYPE "public"."enum_headers_menu_mega_auto_collection";
  DROP TYPE "public"."enum_headers_menu_mega_promo_link_type";
  DROP TYPE "public"."enum_headers_menu_mega_bottom_link_type";
  DROP TYPE "public"."enum_headers_variant";
  DROP TYPE "public"."enum_headers_cta_type";
  DROP TYPE "public"."enum_headers_cta_appearance";
  DROP TYPE "public"."enum_headers_status";
  DROP TYPE "public"."enum__headers_v_version_menu_links_link_type";
  DROP TYPE "public"."enum__headers_v_version_menu_mega_columns_links_link_type";
  DROP TYPE "public"."enum__headers_v_version_menu_mega_columns_links_icon";
  DROP TYPE "public"."enum__headers_v_version_menu_type";
  DROP TYPE "public"."enum__headers_v_version_menu_link_type";
  DROP TYPE "public"."enum__headers_v_version_menu_mega_auto_collection";
  DROP TYPE "public"."enum__headers_v_version_menu_mega_promo_link_type";
  DROP TYPE "public"."enum__headers_v_version_menu_mega_bottom_link_type";
  DROP TYPE "public"."enum__headers_v_version_variant";
  DROP TYPE "public"."enum__headers_v_version_cta_type";
  DROP TYPE "public"."enum__headers_v_version_cta_appearance";
  DROP TYPE "public"."enum__headers_v_published_locale";
  DROP TYPE "public"."enum__headers_v_version_status";
  DROP TYPE "public"."enum_footers_columns_links_link_type";
  DROP TYPE "public"."enum_footers_social_platform";
  DROP TYPE "public"."enum_footers_status";
  DROP TYPE "public"."enum__footers_v_version_columns_links_link_type";
  DROP TYPE "public"."enum__footers_v_version_social_platform";
  DROP TYPE "public"."enum__footers_v_published_locale";
  DROP TYPE "public"."enum__footers_v_version_status";`)
}
