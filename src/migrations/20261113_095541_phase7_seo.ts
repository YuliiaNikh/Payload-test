import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_hubspot_form_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_pages_blocks_hubspot_form_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_pages_blocks_hubspot_form_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_pages_blocks_hubspot_form_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_pages_blocks_hubspot_form_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_pages_blocks_hubspot_form_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_pages_blocks_hubspot_form_display" AS ENUM('inline', 'popup');
  CREATE TYPE "public"."enum_pages_blocks_hubspot_form_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_hubspot_form_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_hubspot_form_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_pages_blocks_hubspot_form_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__pages_v_blocks_hubspot_form_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__pages_v_blocks_hubspot_form_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__pages_v_blocks_hubspot_form_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__pages_v_blocks_hubspot_form_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__pages_v_blocks_hubspot_form_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__pages_v_blocks_hubspot_form_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__pages_v_blocks_hubspot_form_display" AS ENUM('inline', 'popup');
  CREATE TYPE "public"."enum__pages_v_blocks_hubspot_form_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_hubspot_form_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_hubspot_form_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_hubspot_form_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_posts_blocks_hubspot_form_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_posts_blocks_hubspot_form_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_posts_blocks_hubspot_form_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_posts_blocks_hubspot_form_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_posts_blocks_hubspot_form_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_posts_blocks_hubspot_form_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_posts_blocks_hubspot_form_display" AS ENUM('inline', 'popup');
  CREATE TYPE "public"."enum_posts_blocks_hubspot_form_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_posts_blocks_hubspot_form_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_posts_blocks_hubspot_form_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_posts_blocks_hubspot_form_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__posts_v_blocks_hubspot_form_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__posts_v_blocks_hubspot_form_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__posts_v_blocks_hubspot_form_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__posts_v_blocks_hubspot_form_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__posts_v_blocks_hubspot_form_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__posts_v_blocks_hubspot_form_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__posts_v_blocks_hubspot_form_display" AS ENUM('inline', 'popup');
  CREATE TYPE "public"."enum__posts_v_blocks_hubspot_form_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__posts_v_blocks_hubspot_form_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__posts_v_blocks_hubspot_form_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_hubspot_form_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_events_blocks_hubspot_form_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_events_blocks_hubspot_form_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_events_blocks_hubspot_form_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_events_blocks_hubspot_form_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_events_blocks_hubspot_form_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_events_blocks_hubspot_form_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_events_blocks_hubspot_form_display" AS ENUM('inline', 'popup');
  CREATE TYPE "public"."enum_events_blocks_hubspot_form_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_events_blocks_hubspot_form_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_events_blocks_hubspot_form_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_events_blocks_hubspot_form_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__events_v_blocks_hubspot_form_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__events_v_blocks_hubspot_form_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__events_v_blocks_hubspot_form_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__events_v_blocks_hubspot_form_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__events_v_blocks_hubspot_form_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__events_v_blocks_hubspot_form_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__events_v_blocks_hubspot_form_display" AS ENUM('inline', 'popup');
  CREATE TYPE "public"."enum__events_v_blocks_hubspot_form_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__events_v_blocks_hubspot_form_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__events_v_blocks_hubspot_form_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__events_v_blocks_hubspot_form_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_resources_blocks_hubspot_form_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_resources_blocks_hubspot_form_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_resources_blocks_hubspot_form_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_resources_blocks_hubspot_form_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_resources_blocks_hubspot_form_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_resources_blocks_hubspot_form_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_resources_blocks_hubspot_form_display" AS ENUM('inline', 'popup');
  CREATE TYPE "public"."enum_resources_blocks_hubspot_form_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_resources_blocks_hubspot_form_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_resources_blocks_hubspot_form_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_resources_blocks_hubspot_form_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__resources_v_blocks_hubspot_form_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__resources_v_blocks_hubspot_form_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__resources_v_blocks_hubspot_form_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__resources_v_blocks_hubspot_form_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__resources_v_blocks_hubspot_form_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__resources_v_blocks_hubspot_form_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__resources_v_blocks_hubspot_form_display" AS ENUM('inline', 'popup');
  CREATE TYPE "public"."enum__resources_v_blocks_hubspot_form_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__resources_v_blocks_hubspot_form_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__resources_v_blocks_hubspot_form_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__resources_v_blocks_hubspot_form_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_glossary_blocks_hubspot_form_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_glossary_blocks_hubspot_form_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_glossary_blocks_hubspot_form_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_glossary_blocks_hubspot_form_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_glossary_blocks_hubspot_form_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_glossary_blocks_hubspot_form_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_glossary_blocks_hubspot_form_display" AS ENUM('inline', 'popup');
  CREATE TYPE "public"."enum_glossary_blocks_hubspot_form_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_glossary_blocks_hubspot_form_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_glossary_blocks_hubspot_form_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_glossary_blocks_hubspot_form_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__glossary_v_blocks_hubspot_form_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__glossary_v_blocks_hubspot_form_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__glossary_v_blocks_hubspot_form_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__glossary_v_blocks_hubspot_form_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__glossary_v_blocks_hubspot_form_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__glossary_v_blocks_hubspot_form_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__glossary_v_blocks_hubspot_form_display" AS ENUM('inline', 'popup');
  CREATE TYPE "public"."enum__glossary_v_blocks_hubspot_form_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__glossary_v_blocks_hubspot_form_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__glossary_v_blocks_hubspot_form_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__glossary_v_blocks_hubspot_form_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_people_blocks_hubspot_form_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_people_blocks_hubspot_form_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_people_blocks_hubspot_form_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_people_blocks_hubspot_form_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_people_blocks_hubspot_form_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_people_blocks_hubspot_form_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_people_blocks_hubspot_form_display" AS ENUM('inline', 'popup');
  CREATE TYPE "public"."enum_people_blocks_hubspot_form_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_people_blocks_hubspot_form_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_people_blocks_hubspot_form_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_people_blocks_hubspot_form_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__people_v_blocks_hubspot_form_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__people_v_blocks_hubspot_form_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__people_v_blocks_hubspot_form_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__people_v_blocks_hubspot_form_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__people_v_blocks_hubspot_form_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__people_v_blocks_hubspot_form_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__people_v_blocks_hubspot_form_display" AS ENUM('inline', 'popup');
  CREATE TYPE "public"."enum__people_v_blocks_hubspot_form_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__people_v_blocks_hubspot_form_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__people_v_blocks_hubspot_form_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__people_v_blocks_hubspot_form_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_reusable_blocks_hubspot_form_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_reusable_blocks_hubspot_form_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_reusable_blocks_hubspot_form_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_reusable_blocks_hubspot_form_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_reusable_blocks_hubspot_form_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_reusable_blocks_hubspot_form_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_reusable_blocks_hubspot_form_display" AS ENUM('inline', 'popup');
  CREATE TYPE "public"."enum_reusable_blocks_hubspot_form_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_reusable_blocks_hubspot_form_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_reusable_blocks_hubspot_form_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_reusable_blocks_hubspot_form_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__reusable_v_blocks_hubspot_form_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__reusable_v_blocks_hubspot_form_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__reusable_v_blocks_hubspot_form_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__reusable_v_blocks_hubspot_form_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__reusable_v_blocks_hubspot_form_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__reusable_v_blocks_hubspot_form_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__reusable_v_blocks_hubspot_form_display" AS ENUM('inline', 'popup');
  CREATE TYPE "public"."enum__reusable_v_blocks_hubspot_form_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__reusable_v_blocks_hubspot_form_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__reusable_v_blocks_hubspot_form_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__reusable_v_blocks_hubspot_form_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_redirects_type" AS ENUM('301', '302');
  CREATE TYPE "public"."enum_site_settings_hubspot_region" AS ENUM('na1', 'eu1');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_display" AS ENUM('inline', 'popup');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_vis_match" AS ENUM('all', 'any');
  CREATE TABLE "pages_blocks_hubspot_form_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_hubspot_form_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hubspot_form_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_hubspot_form_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_pages_blocks_hubspot_form_vis_rules_field_name",
  	"field_operator" "enum_pages_blocks_hubspot_form_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_pages_blocks_hubspot_form_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_pages_blocks_hubspot_form_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "pages_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"form_id" varchar,
  	"display" "enum_pages_blocks_hubspot_form_display" DEFAULT 'inline',
  	"button_label" varchar DEFAULT 'Contact us',
  	"style_background" "enum_pages_blocks_hubspot_form_style_background" DEFAULT 'default',
  	"style_spacing" "enum_pages_blocks_hubspot_form_style_spacing" DEFAULT 'md',
  	"style_align" "enum_pages_blocks_hubspot_form_style_align" DEFAULT 'start',
  	"vis_match" "enum_pages_blocks_hubspot_form_vis_match" DEFAULT 'all',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hubspot_form_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__pages_v_blocks_hubspot_form_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_hubspot_form_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_hubspot_form_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__pages_v_blocks_hubspot_form_vis_rules_field_name",
  	"field_operator" "enum__pages_v_blocks_hubspot_form_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__pages_v_blocks_hubspot_form_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__pages_v_blocks_hubspot_form_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"form_id" varchar,
  	"display" "enum__pages_v_blocks_hubspot_form_display" DEFAULT 'inline',
  	"button_label" varchar DEFAULT 'Contact us',
  	"style_background" "enum__pages_v_blocks_hubspot_form_style_background" DEFAULT 'default',
  	"style_spacing" "enum__pages_v_blocks_hubspot_form_style_spacing" DEFAULT 'md',
  	"style_align" "enum__pages_v_blocks_hubspot_form_style_align" DEFAULT 'start',
  	"vis_match" "enum__pages_v_blocks_hubspot_form_vis_match" DEFAULT 'all',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_hubspot_form_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_posts_blocks_hubspot_form_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_hubspot_form_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_posts_blocks_hubspot_form_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_posts_blocks_hubspot_form_vis_rules_field_name",
  	"field_operator" "enum_posts_blocks_hubspot_form_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_posts_blocks_hubspot_form_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_posts_blocks_hubspot_form_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "posts_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"form_id" varchar,
  	"display" "enum_posts_blocks_hubspot_form_display" DEFAULT 'inline',
  	"button_label" varchar DEFAULT 'Contact us',
  	"style_background" "enum_posts_blocks_hubspot_form_style_background" DEFAULT 'default',
  	"style_spacing" "enum_posts_blocks_hubspot_form_style_spacing" DEFAULT 'md',
  	"style_align" "enum_posts_blocks_hubspot_form_style_align" DEFAULT 'start',
  	"vis_match" "enum_posts_blocks_hubspot_form_vis_match" DEFAULT 'all',
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_hubspot_form_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__posts_v_blocks_hubspot_form_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_hubspot_form_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__posts_v_blocks_hubspot_form_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__posts_v_blocks_hubspot_form_vis_rules_field_name",
  	"field_operator" "enum__posts_v_blocks_hubspot_form_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__posts_v_blocks_hubspot_form_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__posts_v_blocks_hubspot_form_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"form_id" varchar,
  	"display" "enum__posts_v_blocks_hubspot_form_display" DEFAULT 'inline',
  	"button_label" varchar DEFAULT 'Contact us',
  	"style_background" "enum__posts_v_blocks_hubspot_form_style_background" DEFAULT 'default',
  	"style_spacing" "enum__posts_v_blocks_hubspot_form_style_spacing" DEFAULT 'md',
  	"style_align" "enum__posts_v_blocks_hubspot_form_style_align" DEFAULT 'start',
  	"vis_match" "enum__posts_v_blocks_hubspot_form_vis_match" DEFAULT 'all',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_hubspot_form_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_events_blocks_hubspot_form_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "events_blocks_hubspot_form_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_events_blocks_hubspot_form_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_events_blocks_hubspot_form_vis_rules_field_name",
  	"field_operator" "enum_events_blocks_hubspot_form_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_events_blocks_hubspot_form_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_events_blocks_hubspot_form_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "events_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"form_id" varchar,
  	"display" "enum_events_blocks_hubspot_form_display" DEFAULT 'inline',
  	"button_label" varchar DEFAULT 'Contact us',
  	"style_background" "enum_events_blocks_hubspot_form_style_background" DEFAULT 'default',
  	"style_spacing" "enum_events_blocks_hubspot_form_style_spacing" DEFAULT 'md',
  	"style_align" "enum_events_blocks_hubspot_form_style_align" DEFAULT 'start',
  	"vis_match" "enum_events_blocks_hubspot_form_vis_match" DEFAULT 'all',
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_hubspot_form_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__events_v_blocks_hubspot_form_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_events_v_blocks_hubspot_form_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__events_v_blocks_hubspot_form_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__events_v_blocks_hubspot_form_vis_rules_field_name",
  	"field_operator" "enum__events_v_blocks_hubspot_form_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__events_v_blocks_hubspot_form_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__events_v_blocks_hubspot_form_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"form_id" varchar,
  	"display" "enum__events_v_blocks_hubspot_form_display" DEFAULT 'inline',
  	"button_label" varchar DEFAULT 'Contact us',
  	"style_background" "enum__events_v_blocks_hubspot_form_style_background" DEFAULT 'default',
  	"style_spacing" "enum__events_v_blocks_hubspot_form_style_spacing" DEFAULT 'md',
  	"style_align" "enum__events_v_blocks_hubspot_form_style_align" DEFAULT 'start',
  	"vis_match" "enum__events_v_blocks_hubspot_form_vis_match" DEFAULT 'all',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_hubspot_form_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_resources_blocks_hubspot_form_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "resources_blocks_hubspot_form_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_resources_blocks_hubspot_form_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_resources_blocks_hubspot_form_vis_rules_field_name",
  	"field_operator" "enum_resources_blocks_hubspot_form_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_resources_blocks_hubspot_form_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_resources_blocks_hubspot_form_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "resources_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"form_id" varchar,
  	"display" "enum_resources_blocks_hubspot_form_display" DEFAULT 'inline',
  	"button_label" varchar DEFAULT 'Contact us',
  	"style_background" "enum_resources_blocks_hubspot_form_style_background" DEFAULT 'default',
  	"style_spacing" "enum_resources_blocks_hubspot_form_style_spacing" DEFAULT 'md',
  	"style_align" "enum_resources_blocks_hubspot_form_style_align" DEFAULT 'start',
  	"vis_match" "enum_resources_blocks_hubspot_form_vis_match" DEFAULT 'all',
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_hubspot_form_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__resources_v_blocks_hubspot_form_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_resources_v_blocks_hubspot_form_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__resources_v_blocks_hubspot_form_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__resources_v_blocks_hubspot_form_vis_rules_field_name",
  	"field_operator" "enum__resources_v_blocks_hubspot_form_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__resources_v_blocks_hubspot_form_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__resources_v_blocks_hubspot_form_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"form_id" varchar,
  	"display" "enum__resources_v_blocks_hubspot_form_display" DEFAULT 'inline',
  	"button_label" varchar DEFAULT 'Contact us',
  	"style_background" "enum__resources_v_blocks_hubspot_form_style_background" DEFAULT 'default',
  	"style_spacing" "enum__resources_v_blocks_hubspot_form_style_spacing" DEFAULT 'md',
  	"style_align" "enum__resources_v_blocks_hubspot_form_style_align" DEFAULT 'start',
  	"vis_match" "enum__resources_v_blocks_hubspot_form_vis_match" DEFAULT 'all',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "glossary_blocks_hubspot_form_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_glossary_blocks_hubspot_form_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "glossary_blocks_hubspot_form_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_glossary_blocks_hubspot_form_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_glossary_blocks_hubspot_form_vis_rules_field_name",
  	"field_operator" "enum_glossary_blocks_hubspot_form_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_glossary_blocks_hubspot_form_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_glossary_blocks_hubspot_form_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "glossary_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"form_id" varchar,
  	"display" "enum_glossary_blocks_hubspot_form_display" DEFAULT 'inline',
  	"button_label" varchar DEFAULT 'Contact us',
  	"style_background" "enum_glossary_blocks_hubspot_form_style_background" DEFAULT 'default',
  	"style_spacing" "enum_glossary_blocks_hubspot_form_style_spacing" DEFAULT 'md',
  	"style_align" "enum_glossary_blocks_hubspot_form_style_align" DEFAULT 'start',
  	"vis_match" "enum_glossary_blocks_hubspot_form_vis_match" DEFAULT 'all',
  	"block_name" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_hubspot_form_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__glossary_v_blocks_hubspot_form_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_glossary_v_blocks_hubspot_form_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__glossary_v_blocks_hubspot_form_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__glossary_v_blocks_hubspot_form_vis_rules_field_name",
  	"field_operator" "enum__glossary_v_blocks_hubspot_form_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__glossary_v_blocks_hubspot_form_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__glossary_v_blocks_hubspot_form_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"form_id" varchar,
  	"display" "enum__glossary_v_blocks_hubspot_form_display" DEFAULT 'inline',
  	"button_label" varchar DEFAULT 'Contact us',
  	"style_background" "enum__glossary_v_blocks_hubspot_form_style_background" DEFAULT 'default',
  	"style_spacing" "enum__glossary_v_blocks_hubspot_form_style_spacing" DEFAULT 'md',
  	"style_align" "enum__glossary_v_blocks_hubspot_form_style_align" DEFAULT 'start',
  	"vis_match" "enum__glossary_v_blocks_hubspot_form_vis_match" DEFAULT 'all',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_hubspot_form_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_people_blocks_hubspot_form_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "people_blocks_hubspot_form_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_people_blocks_hubspot_form_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_people_blocks_hubspot_form_vis_rules_field_name",
  	"field_operator" "enum_people_blocks_hubspot_form_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_people_blocks_hubspot_form_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_people_blocks_hubspot_form_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "people_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"form_id" varchar,
  	"display" "enum_people_blocks_hubspot_form_display" DEFAULT 'inline',
  	"button_label" varchar DEFAULT 'Contact us',
  	"style_background" "enum_people_blocks_hubspot_form_style_background" DEFAULT 'default',
  	"style_spacing" "enum_people_blocks_hubspot_form_style_spacing" DEFAULT 'md',
  	"style_align" "enum_people_blocks_hubspot_form_style_align" DEFAULT 'start',
  	"vis_match" "enum_people_blocks_hubspot_form_vis_match" DEFAULT 'all',
  	"block_name" varchar
  );
  
  CREATE TABLE "_people_v_blocks_hubspot_form_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__people_v_blocks_hubspot_form_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_people_v_blocks_hubspot_form_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__people_v_blocks_hubspot_form_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__people_v_blocks_hubspot_form_vis_rules_field_name",
  	"field_operator" "enum__people_v_blocks_hubspot_form_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__people_v_blocks_hubspot_form_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__people_v_blocks_hubspot_form_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"form_id" varchar,
  	"display" "enum__people_v_blocks_hubspot_form_display" DEFAULT 'inline',
  	"button_label" varchar DEFAULT 'Contact us',
  	"style_background" "enum__people_v_blocks_hubspot_form_style_background" DEFAULT 'default',
  	"style_spacing" "enum__people_v_blocks_hubspot_form_style_spacing" DEFAULT 'md',
  	"style_align" "enum__people_v_blocks_hubspot_form_style_align" DEFAULT 'start',
  	"vis_match" "enum__people_v_blocks_hubspot_form_vis_match" DEFAULT 'all',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "reusable_blocks_hubspot_form_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_reusable_blocks_hubspot_form_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "reusable_blocks_hubspot_form_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_reusable_blocks_hubspot_form_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_reusable_blocks_hubspot_form_vis_rules_field_name",
  	"field_operator" "enum_reusable_blocks_hubspot_form_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_reusable_blocks_hubspot_form_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_reusable_blocks_hubspot_form_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "reusable_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"form_id" varchar,
  	"display" "enum_reusable_blocks_hubspot_form_display" DEFAULT 'inline',
  	"button_label" varchar DEFAULT 'Contact us',
  	"style_background" "enum_reusable_blocks_hubspot_form_style_background" DEFAULT 'default',
  	"style_spacing" "enum_reusable_blocks_hubspot_form_style_spacing" DEFAULT 'md',
  	"style_align" "enum_reusable_blocks_hubspot_form_style_align" DEFAULT 'start',
  	"vis_match" "enum_reusable_blocks_hubspot_form_vis_match" DEFAULT 'all',
  	"block_name" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_hubspot_form_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__reusable_v_blocks_hubspot_form_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_reusable_v_blocks_hubspot_form_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__reusable_v_blocks_hubspot_form_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__reusable_v_blocks_hubspot_form_vis_rules_field_name",
  	"field_operator" "enum__reusable_v_blocks_hubspot_form_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__reusable_v_blocks_hubspot_form_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__reusable_v_blocks_hubspot_form_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"form_id" varchar,
  	"display" "enum__reusable_v_blocks_hubspot_form_display" DEFAULT 'inline',
  	"button_label" varchar DEFAULT 'Contact us',
  	"style_background" "enum__reusable_v_blocks_hubspot_form_style_background" DEFAULT 'default',
  	"style_spacing" "enum__reusable_v_blocks_hubspot_form_style_spacing" DEFAULT 'md',
  	"style_align" "enum__reusable_v_blocks_hubspot_form_style_align" DEFAULT 'start',
  	"vis_match" "enum__reusable_v_blocks_hubspot_form_vis_match" DEFAULT 'all',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"type" "enum_redirects_type" NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"events_id" integer,
  	"resources_id" integer,
  	"glossary_id" integer,
  	"people_id" integer
  );
  
  CREATE TABLE "cpt_defaults_blocks_hubspot_form_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_cpt_defaults_blocks_hubspot_form_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cpt_defaults_blocks_hubspot_form_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_cpt_defaults_blocks_hubspot_form_vis_rules_type" NOT NULL,
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_cpt_defaults_blocks_hubspot_form_vis_rules_field_name",
  	"field_operator" "enum_cpt_defaults_blocks_hubspot_form_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_cpt_defaults_blocks_hubspot_form_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_cpt_defaults_blocks_hubspot_form_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "cpt_defaults_blocks_hubspot_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"form_id" varchar NOT NULL,
  	"display" "enum_cpt_defaults_blocks_hubspot_form_display" DEFAULT 'inline',
  	"button_label" varchar DEFAULT 'Contact us',
  	"style_background" "enum_cpt_defaults_blocks_hubspot_form_style_background" DEFAULT 'default',
  	"style_spacing" "enum_cpt_defaults_blocks_hubspot_form_style_spacing" DEFAULT 'md',
  	"style_align" "enum_cpt_defaults_blocks_hubspot_form_style_align" DEFAULT 'start',
  	"vis_match" "enum_cpt_defaults_blocks_hubspot_form_vis_match" DEFAULT 'all',
  	"block_name" varchar
  );
  
  ALTER TABLE "pages" ADD COLUMN "meta_noindex" boolean;
  ALTER TABLE "pages_locales" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "pages_locales" ADD COLUMN "meta_canonical" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_meta_noindex" boolean;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_meta_description" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_meta_image_id" integer;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_meta_canonical" varchar;
  ALTER TABLE "posts" ADD COLUMN "meta_noindex" boolean;
  ALTER TABLE "posts_locales" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "posts_locales" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "posts_locales" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "posts_locales" ADD COLUMN "meta_canonical" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_meta_noindex" boolean;
  ALTER TABLE "_posts_v_locales" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_posts_v_locales" ADD COLUMN "version_meta_description" varchar;
  ALTER TABLE "_posts_v_locales" ADD COLUMN "version_meta_image_id" integer;
  ALTER TABLE "_posts_v_locales" ADD COLUMN "version_meta_canonical" varchar;
  ALTER TABLE "events" ADD COLUMN "meta_noindex" boolean;
  ALTER TABLE "events_locales" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "events_locales" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "events_locales" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "events_locales" ADD COLUMN "meta_canonical" varchar;
  ALTER TABLE "_events_v" ADD COLUMN "version_meta_noindex" boolean;
  ALTER TABLE "_events_v_locales" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_events_v_locales" ADD COLUMN "version_meta_description" varchar;
  ALTER TABLE "_events_v_locales" ADD COLUMN "version_meta_image_id" integer;
  ALTER TABLE "_events_v_locales" ADD COLUMN "version_meta_canonical" varchar;
  ALTER TABLE "resources" ADD COLUMN "meta_noindex" boolean;
  ALTER TABLE "resources_locales" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "resources_locales" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "resources_locales" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "resources_locales" ADD COLUMN "meta_canonical" varchar;
  ALTER TABLE "_resources_v" ADD COLUMN "version_meta_noindex" boolean;
  ALTER TABLE "_resources_v_locales" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_resources_v_locales" ADD COLUMN "version_meta_description" varchar;
  ALTER TABLE "_resources_v_locales" ADD COLUMN "version_meta_image_id" integer;
  ALTER TABLE "_resources_v_locales" ADD COLUMN "version_meta_canonical" varchar;
  ALTER TABLE "glossary" ADD COLUMN "meta_noindex" boolean;
  ALTER TABLE "glossary_locales" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "glossary_locales" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "glossary_locales" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "glossary_locales" ADD COLUMN "meta_canonical" varchar;
  ALTER TABLE "_glossary_v" ADD COLUMN "version_meta_noindex" boolean;
  ALTER TABLE "_glossary_v_locales" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_glossary_v_locales" ADD COLUMN "version_meta_description" varchar;
  ALTER TABLE "_glossary_v_locales" ADD COLUMN "version_meta_image_id" integer;
  ALTER TABLE "_glossary_v_locales" ADD COLUMN "version_meta_canonical" varchar;
  ALTER TABLE "people" ADD COLUMN "meta_noindex" boolean;
  ALTER TABLE "people_locales" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "people_locales" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "people_locales" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "people_locales" ADD COLUMN "meta_canonical" varchar;
  ALTER TABLE "_people_v" ADD COLUMN "version_meta_noindex" boolean;
  ALTER TABLE "_people_v_locales" ADD COLUMN "version_meta_title" varchar;
  ALTER TABLE "_people_v_locales" ADD COLUMN "version_meta_description" varchar;
  ALTER TABLE "_people_v_locales" ADD COLUMN "version_meta_image_id" integer;
  ALTER TABLE "_people_v_locales" ADD COLUMN "version_meta_canonical" varchar;
  ALTER TABLE "categories" ADD COLUMN "meta_noindex" boolean;
  ALTER TABLE "categories_locales" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "categories_locales" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "categories_locales" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "categories_locales" ADD COLUMN "meta_canonical" varchar;
  ALTER TABLE "tags" ADD COLUMN "meta_noindex" boolean;
  ALTER TABLE "tags_locales" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "tags_locales" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "tags_locales" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "tags_locales" ADD COLUMN "meta_canonical" varchar;
  ALTER TABLE "event_types" ADD COLUMN "meta_noindex" boolean;
  ALTER TABLE "event_types_locales" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "event_types_locales" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "event_types_locales" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "event_types_locales" ADD COLUMN "meta_canonical" varchar;
  ALTER TABLE "industries" ADD COLUMN "meta_noindex" boolean;
  ALTER TABLE "industries_locales" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "industries_locales" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "industries_locales" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "industries_locales" ADD COLUMN "meta_canonical" varchar;
  ALTER TABLE "resource_types" ADD COLUMN "meta_noindex" boolean;
  ALTER TABLE "resource_types_locales" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "resource_types_locales" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "resource_types_locales" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "resource_types_locales" ADD COLUMN "meta_canonical" varchar;
  ALTER TABLE "topics" ADD COLUMN "meta_noindex" boolean;
  ALTER TABLE "topics_locales" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "topics_locales" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "topics_locales" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "topics_locales" ADD COLUMN "meta_canonical" varchar;
  ALTER TABLE "departments" ADD COLUMN "meta_noindex" boolean;
  ALTER TABLE "departments_locales" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "departments_locales" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "departments_locales" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "departments_locales" ADD COLUMN "meta_canonical" varchar;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "redirects_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "seo_image_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "hubspot_portal_id" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "hubspot_region" "enum_site_settings_hubspot_region" DEFAULT 'na1';
  ALTER TABLE "site_settings" ADD COLUMN "hubspot_tracking" boolean;
  ALTER TABLE "site_settings_locales" ADD COLUMN "seo_title_pattern" varchar DEFAULT '%title% | %site%';
  ALTER TABLE "site_settings_locales" ADD COLUMN "seo_description" varchar;
  ALTER TABLE "pages_blocks_hubspot_form_vis_rules_device_show" ADD CONSTRAINT "pages_blocks_hubspot_form_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_hubspot_form_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hubspot_form_vis_rules" ADD CONSTRAINT "pages_blocks_hubspot_form_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hubspot_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hubspot_form" ADD CONSTRAINT "pages_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hubspot_form_vis_rules_device_show" ADD CONSTRAINT "_pages_v_blocks_hubspot_form_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v_blocks_hubspot_form_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hubspot_form_vis_rules" ADD CONSTRAINT "_pages_v_blocks_hubspot_form_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hubspot_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hubspot_form" ADD CONSTRAINT "_pages_v_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_hubspot_form_vis_rules_device_show" ADD CONSTRAINT "posts_blocks_hubspot_form_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts_blocks_hubspot_form_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_hubspot_form_vis_rules" ADD CONSTRAINT "posts_blocks_hubspot_form_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_hubspot_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_hubspot_form" ADD CONSTRAINT "posts_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_hubspot_form_vis_rules_device_show" ADD CONSTRAINT "_posts_v_blocks_hubspot_form_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v_blocks_hubspot_form_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_hubspot_form_vis_rules" ADD CONSTRAINT "_posts_v_blocks_hubspot_form_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_hubspot_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_hubspot_form" ADD CONSTRAINT "_posts_v_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_hubspot_form_vis_rules_device_show" ADD CONSTRAINT "events_blocks_hubspot_form_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events_blocks_hubspot_form_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_hubspot_form_vis_rules" ADD CONSTRAINT "events_blocks_hubspot_form_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_hubspot_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_hubspot_form" ADD CONSTRAINT "events_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_hubspot_form_vis_rules_device_show" ADD CONSTRAINT "_events_v_blocks_hubspot_form_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v_blocks_hubspot_form_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_hubspot_form_vis_rules" ADD CONSTRAINT "_events_v_blocks_hubspot_form_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_hubspot_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_hubspot_form" ADD CONSTRAINT "_events_v_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_hubspot_form_vis_rules_device_show" ADD CONSTRAINT "resources_blocks_hubspot_form_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources_blocks_hubspot_form_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_hubspot_form_vis_rules" ADD CONSTRAINT "resources_blocks_hubspot_form_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_hubspot_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_hubspot_form" ADD CONSTRAINT "resources_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_hubspot_form_vis_rules_device_show" ADD CONSTRAINT "_resources_v_blocks_hubspot_form_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_resources_v_blocks_hubspot_form_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_hubspot_form_vis_rules" ADD CONSTRAINT "_resources_v_blocks_hubspot_form_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_hubspot_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_hubspot_form" ADD CONSTRAINT "_resources_v_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_hubspot_form_vis_rules_device_show" ADD CONSTRAINT "glossary_blocks_hubspot_form_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."glossary_blocks_hubspot_form_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_hubspot_form_vis_rules" ADD CONSTRAINT "glossary_blocks_hubspot_form_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_hubspot_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_hubspot_form" ADD CONSTRAINT "glossary_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_hubspot_form_vis_rules_device_show" ADD CONSTRAINT "_glossary_v_blocks_hubspot_form_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_glossary_v_blocks_hubspot_form_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_hubspot_form_vis_rules" ADD CONSTRAINT "_glossary_v_blocks_hubspot_form_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_hubspot_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_hubspot_form" ADD CONSTRAINT "_glossary_v_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_hubspot_form_vis_rules_device_show" ADD CONSTRAINT "people_blocks_hubspot_form_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."people_blocks_hubspot_form_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_hubspot_form_vis_rules" ADD CONSTRAINT "people_blocks_hubspot_form_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_hubspot_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_hubspot_form" ADD CONSTRAINT "people_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_hubspot_form_vis_rules_device_show" ADD CONSTRAINT "_people_v_blocks_hubspot_form_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_people_v_blocks_hubspot_form_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_hubspot_form_vis_rules" ADD CONSTRAINT "_people_v_blocks_hubspot_form_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_hubspot_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_hubspot_form" ADD CONSTRAINT "_people_v_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_hubspot_form_vis_rules_device_show" ADD CONSTRAINT "reusable_blocks_hubspot_form_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."reusable_blocks_hubspot_form_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_hubspot_form_vis_rules" ADD CONSTRAINT "reusable_blocks_hubspot_form_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_hubspot_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_hubspot_form" ADD CONSTRAINT "reusable_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_hubspot_form_vis_rules_device_show" ADD CONSTRAINT "_reusable_v_blocks_hubspot_form_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_reusable_v_blocks_hubspot_form_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_hubspot_form_vis_rules" ADD CONSTRAINT "_reusable_v_blocks_hubspot_form_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_hubspot_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_hubspot_form" ADD CONSTRAINT "_reusable_v_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_glossary_fk" FOREIGN KEY ("glossary_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_hubspot_form_vis_rules_device_show" ADD CONSTRAINT "cpt_defaults_blocks_hubspot_form_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cpt_defaults_blocks_hubspot_form_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_hubspot_form_vis_rules" ADD CONSTRAINT "cpt_defaults_blocks_hubspot_form_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_hubspot_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_hubspot_form" ADD CONSTRAINT "cpt_defaults_blocks_hubspot_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_hubspot_form_vis_rules_device_show_order_idx" ON "pages_blocks_hubspot_form_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "pages_blocks_hubspot_form_vis_rules_device_show_parent_idx" ON "pages_blocks_hubspot_form_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "pages_blocks_hubspot_form_vis_rules_device_show_locale_idx" ON "pages_blocks_hubspot_form_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "pages_blocks_hubspot_form_vis_rules_order_idx" ON "pages_blocks_hubspot_form_vis_rules" USING btree ("_order");
  CREATE INDEX "pages_blocks_hubspot_form_vis_rules_parent_id_idx" ON "pages_blocks_hubspot_form_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hubspot_form_vis_rules_locale_idx" ON "pages_blocks_hubspot_form_vis_rules" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hubspot_form_order_idx" ON "pages_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX "pages_blocks_hubspot_form_parent_id_idx" ON "pages_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hubspot_form_path_idx" ON "pages_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX "pages_blocks_hubspot_form_locale_idx" ON "pages_blocks_hubspot_form" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_hubspot_form_vis_rules_device_show_order_idx" ON "_pages_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_pages_v_blocks_hubspot_form_vis_rules_device_show_parent_idx" ON "_pages_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_pages_v_blocks_hubspot_form_vis_rules_device_show_locale_idx" ON "_pages_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_pages_v_blocks_hubspot_form_vis_rules_order_idx" ON "_pages_v_blocks_hubspot_form_vis_rules" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hubspot_form_vis_rules_parent_id_idx" ON "_pages_v_blocks_hubspot_form_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hubspot_form_vis_rules_locale_idx" ON "_pages_v_blocks_hubspot_form_vis_rules" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_hubspot_form_order_idx" ON "_pages_v_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hubspot_form_parent_id_idx" ON "_pages_v_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hubspot_form_path_idx" ON "_pages_v_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hubspot_form_locale_idx" ON "_pages_v_blocks_hubspot_form" USING btree ("_locale");
  CREATE INDEX "posts_blocks_hubspot_form_vis_rules_device_show_order_idx" ON "posts_blocks_hubspot_form_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "posts_blocks_hubspot_form_vis_rules_device_show_parent_idx" ON "posts_blocks_hubspot_form_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "posts_blocks_hubspot_form_vis_rules_device_show_locale_idx" ON "posts_blocks_hubspot_form_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "posts_blocks_hubspot_form_vis_rules_order_idx" ON "posts_blocks_hubspot_form_vis_rules" USING btree ("_order");
  CREATE INDEX "posts_blocks_hubspot_form_vis_rules_parent_id_idx" ON "posts_blocks_hubspot_form_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_hubspot_form_vis_rules_locale_idx" ON "posts_blocks_hubspot_form_vis_rules" USING btree ("_locale");
  CREATE INDEX "posts_blocks_hubspot_form_order_idx" ON "posts_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX "posts_blocks_hubspot_form_parent_id_idx" ON "posts_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_hubspot_form_path_idx" ON "posts_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX "posts_blocks_hubspot_form_locale_idx" ON "posts_blocks_hubspot_form" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_hubspot_form_vis_rules_device_show_order_idx" ON "_posts_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_posts_v_blocks_hubspot_form_vis_rules_device_show_parent_idx" ON "_posts_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_posts_v_blocks_hubspot_form_vis_rules_device_show_locale_idx" ON "_posts_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_posts_v_blocks_hubspot_form_vis_rules_order_idx" ON "_posts_v_blocks_hubspot_form_vis_rules" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_hubspot_form_vis_rules_parent_id_idx" ON "_posts_v_blocks_hubspot_form_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_hubspot_form_vis_rules_locale_idx" ON "_posts_v_blocks_hubspot_form_vis_rules" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_hubspot_form_order_idx" ON "_posts_v_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_hubspot_form_parent_id_idx" ON "_posts_v_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_hubspot_form_path_idx" ON "_posts_v_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_hubspot_form_locale_idx" ON "_posts_v_blocks_hubspot_form" USING btree ("_locale");
  CREATE INDEX "events_blocks_hubspot_form_vis_rules_device_show_order_idx" ON "events_blocks_hubspot_form_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "events_blocks_hubspot_form_vis_rules_device_show_parent_idx" ON "events_blocks_hubspot_form_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "events_blocks_hubspot_form_vis_rules_device_show_locale_idx" ON "events_blocks_hubspot_form_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "events_blocks_hubspot_form_vis_rules_order_idx" ON "events_blocks_hubspot_form_vis_rules" USING btree ("_order");
  CREATE INDEX "events_blocks_hubspot_form_vis_rules_parent_id_idx" ON "events_blocks_hubspot_form_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_hubspot_form_vis_rules_locale_idx" ON "events_blocks_hubspot_form_vis_rules" USING btree ("_locale");
  CREATE INDEX "events_blocks_hubspot_form_order_idx" ON "events_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX "events_blocks_hubspot_form_parent_id_idx" ON "events_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_hubspot_form_path_idx" ON "events_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX "events_blocks_hubspot_form_locale_idx" ON "events_blocks_hubspot_form" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_hubspot_form_vis_rules_device_show_order_idx" ON "_events_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_events_v_blocks_hubspot_form_vis_rules_device_show_parent_idx" ON "_events_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_events_v_blocks_hubspot_form_vis_rules_device_show_locale_idx" ON "_events_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_events_v_blocks_hubspot_form_vis_rules_order_idx" ON "_events_v_blocks_hubspot_form_vis_rules" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_hubspot_form_vis_rules_parent_id_idx" ON "_events_v_blocks_hubspot_form_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_hubspot_form_vis_rules_locale_idx" ON "_events_v_blocks_hubspot_form_vis_rules" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_hubspot_form_order_idx" ON "_events_v_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_hubspot_form_parent_id_idx" ON "_events_v_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_hubspot_form_path_idx" ON "_events_v_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_hubspot_form_locale_idx" ON "_events_v_blocks_hubspot_form" USING btree ("_locale");
  CREATE INDEX "resources_blocks_hubspot_form_vis_rules_device_show_order_idx" ON "resources_blocks_hubspot_form_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "resources_blocks_hubspot_form_vis_rules_device_show_parent_idx" ON "resources_blocks_hubspot_form_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "resources_blocks_hubspot_form_vis_rules_device_show_locale_idx" ON "resources_blocks_hubspot_form_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "resources_blocks_hubspot_form_vis_rules_order_idx" ON "resources_blocks_hubspot_form_vis_rules" USING btree ("_order");
  CREATE INDEX "resources_blocks_hubspot_form_vis_rules_parent_id_idx" ON "resources_blocks_hubspot_form_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_hubspot_form_vis_rules_locale_idx" ON "resources_blocks_hubspot_form_vis_rules" USING btree ("_locale");
  CREATE INDEX "resources_blocks_hubspot_form_order_idx" ON "resources_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX "resources_blocks_hubspot_form_parent_id_idx" ON "resources_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_hubspot_form_path_idx" ON "resources_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX "resources_blocks_hubspot_form_locale_idx" ON "resources_blocks_hubspot_form" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_hubspot_form_vis_rules_device_show_order_idx" ON "_resources_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_resources_v_blocks_hubspot_form_vis_rules_device_show_parent_idx" ON "_resources_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_resources_v_blocks_hubspot_form_vis_rules_device_show_locale_idx" ON "_resources_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_resources_v_blocks_hubspot_form_vis_rules_order_idx" ON "_resources_v_blocks_hubspot_form_vis_rules" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_hubspot_form_vis_rules_parent_id_idx" ON "_resources_v_blocks_hubspot_form_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_hubspot_form_vis_rules_locale_idx" ON "_resources_v_blocks_hubspot_form_vis_rules" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_hubspot_form_order_idx" ON "_resources_v_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_hubspot_form_parent_id_idx" ON "_resources_v_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_hubspot_form_path_idx" ON "_resources_v_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_hubspot_form_locale_idx" ON "_resources_v_blocks_hubspot_form" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_hubspot_form_vis_rules_device_show_order_idx" ON "glossary_blocks_hubspot_form_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "glossary_blocks_hubspot_form_vis_rules_device_show_parent_idx" ON "glossary_blocks_hubspot_form_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "glossary_blocks_hubspot_form_vis_rules_device_show_locale_idx" ON "glossary_blocks_hubspot_form_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "glossary_blocks_hubspot_form_vis_rules_order_idx" ON "glossary_blocks_hubspot_form_vis_rules" USING btree ("_order");
  CREATE INDEX "glossary_blocks_hubspot_form_vis_rules_parent_id_idx" ON "glossary_blocks_hubspot_form_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_hubspot_form_vis_rules_locale_idx" ON "glossary_blocks_hubspot_form_vis_rules" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_hubspot_form_order_idx" ON "glossary_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX "glossary_blocks_hubspot_form_parent_id_idx" ON "glossary_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_hubspot_form_path_idx" ON "glossary_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX "glossary_blocks_hubspot_form_locale_idx" ON "glossary_blocks_hubspot_form" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_hubspot_form_vis_rules_device_show_order_idx" ON "_glossary_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_glossary_v_blocks_hubspot_form_vis_rules_device_show_parent_idx" ON "_glossary_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_glossary_v_blocks_hubspot_form_vis_rules_device_show_locale_idx" ON "_glossary_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_glossary_v_blocks_hubspot_form_vis_rules_order_idx" ON "_glossary_v_blocks_hubspot_form_vis_rules" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_hubspot_form_vis_rules_parent_id_idx" ON "_glossary_v_blocks_hubspot_form_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_hubspot_form_vis_rules_locale_idx" ON "_glossary_v_blocks_hubspot_form_vis_rules" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_hubspot_form_order_idx" ON "_glossary_v_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_hubspot_form_parent_id_idx" ON "_glossary_v_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_hubspot_form_path_idx" ON "_glossary_v_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX "_glossary_v_blocks_hubspot_form_locale_idx" ON "_glossary_v_blocks_hubspot_form" USING btree ("_locale");
  CREATE INDEX "people_blocks_hubspot_form_vis_rules_device_show_order_idx" ON "people_blocks_hubspot_form_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "people_blocks_hubspot_form_vis_rules_device_show_parent_idx" ON "people_blocks_hubspot_form_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "people_blocks_hubspot_form_vis_rules_device_show_locale_idx" ON "people_blocks_hubspot_form_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "people_blocks_hubspot_form_vis_rules_order_idx" ON "people_blocks_hubspot_form_vis_rules" USING btree ("_order");
  CREATE INDEX "people_blocks_hubspot_form_vis_rules_parent_id_idx" ON "people_blocks_hubspot_form_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_hubspot_form_vis_rules_locale_idx" ON "people_blocks_hubspot_form_vis_rules" USING btree ("_locale");
  CREATE INDEX "people_blocks_hubspot_form_order_idx" ON "people_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX "people_blocks_hubspot_form_parent_id_idx" ON "people_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_hubspot_form_path_idx" ON "people_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX "people_blocks_hubspot_form_locale_idx" ON "people_blocks_hubspot_form" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_hubspot_form_vis_rules_device_show_order_idx" ON "_people_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_people_v_blocks_hubspot_form_vis_rules_device_show_parent_idx" ON "_people_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_people_v_blocks_hubspot_form_vis_rules_device_show_locale_idx" ON "_people_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_people_v_blocks_hubspot_form_vis_rules_order_idx" ON "_people_v_blocks_hubspot_form_vis_rules" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_hubspot_form_vis_rules_parent_id_idx" ON "_people_v_blocks_hubspot_form_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_hubspot_form_vis_rules_locale_idx" ON "_people_v_blocks_hubspot_form_vis_rules" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_hubspot_form_order_idx" ON "_people_v_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_hubspot_form_parent_id_idx" ON "_people_v_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_hubspot_form_path_idx" ON "_people_v_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX "_people_v_blocks_hubspot_form_locale_idx" ON "_people_v_blocks_hubspot_form" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_hubspot_form_vis_rules_device_show_order_idx" ON "reusable_blocks_hubspot_form_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "reusable_blocks_hubspot_form_vis_rules_device_show_parent_idx" ON "reusable_blocks_hubspot_form_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "reusable_blocks_hubspot_form_vis_rules_device_show_locale_idx" ON "reusable_blocks_hubspot_form_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "reusable_blocks_hubspot_form_vis_rules_order_idx" ON "reusable_blocks_hubspot_form_vis_rules" USING btree ("_order");
  CREATE INDEX "reusable_blocks_hubspot_form_vis_rules_parent_id_idx" ON "reusable_blocks_hubspot_form_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_hubspot_form_vis_rules_locale_idx" ON "reusable_blocks_hubspot_form_vis_rules" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_hubspot_form_order_idx" ON "reusable_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX "reusable_blocks_hubspot_form_parent_id_idx" ON "reusable_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_hubspot_form_path_idx" ON "reusable_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX "reusable_blocks_hubspot_form_locale_idx" ON "reusable_blocks_hubspot_form" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_hubspot_form_vis_rules_device_show_order_idx" ON "_reusable_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_reusable_v_blocks_hubspot_form_vis_rules_device_show_parent_idx" ON "_reusable_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_reusable_v_blocks_hubspot_form_vis_rules_device_show_locale_idx" ON "_reusable_v_blocks_hubspot_form_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_reusable_v_blocks_hubspot_form_vis_rules_order_idx" ON "_reusable_v_blocks_hubspot_form_vis_rules" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_hubspot_form_vis_rules_parent_id_idx" ON "_reusable_v_blocks_hubspot_form_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_hubspot_form_vis_rules_locale_idx" ON "_reusable_v_blocks_hubspot_form_vis_rules" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_hubspot_form_order_idx" ON "_reusable_v_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_hubspot_form_parent_id_idx" ON "_reusable_v_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_hubspot_form_path_idx" ON "_reusable_v_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX "_reusable_v_blocks_hubspot_form_locale_idx" ON "_reusable_v_blocks_hubspot_form" USING btree ("_locale");
  CREATE UNIQUE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX "redirects_rels_posts_id_idx" ON "redirects_rels" USING btree ("posts_id");
  CREATE INDEX "redirects_rels_events_id_idx" ON "redirects_rels" USING btree ("events_id");
  CREATE INDEX "redirects_rels_resources_id_idx" ON "redirects_rels" USING btree ("resources_id");
  CREATE INDEX "redirects_rels_glossary_id_idx" ON "redirects_rels" USING btree ("glossary_id");
  CREATE INDEX "redirects_rels_people_id_idx" ON "redirects_rels" USING btree ("people_id");
  CREATE INDEX "cpt_defaults_blocks_hubspot_form_vis_rules_device_show_order_idx" ON "cpt_defaults_blocks_hubspot_form_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "cpt_defaults_blocks_hubspot_form_vis_rules_device_show_parent_idx" ON "cpt_defaults_blocks_hubspot_form_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "cpt_defaults_blocks_hubspot_form_vis_rules_device_show_locale_idx" ON "cpt_defaults_blocks_hubspot_form_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "cpt_defaults_blocks_hubspot_form_vis_rules_order_idx" ON "cpt_defaults_blocks_hubspot_form_vis_rules" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_hubspot_form_vis_rules_parent_id_idx" ON "cpt_defaults_blocks_hubspot_form_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_hubspot_form_vis_rules_locale_idx" ON "cpt_defaults_blocks_hubspot_form_vis_rules" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_hubspot_form_order_idx" ON "cpt_defaults_blocks_hubspot_form" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_hubspot_form_parent_id_idx" ON "cpt_defaults_blocks_hubspot_form" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_hubspot_form_path_idx" ON "cpt_defaults_blocks_hubspot_form" USING btree ("_path");
  CREATE INDEX "cpt_defaults_blocks_hubspot_form_locale_idx" ON "cpt_defaults_blocks_hubspot_form" USING btree ("_locale");
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events_locales" ADD CONSTRAINT "events_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v_locales" ADD CONSTRAINT "_events_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resources_locales" ADD CONSTRAINT "resources_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_resources_v_locales" ADD CONSTRAINT "_resources_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "glossary_locales" ADD CONSTRAINT "glossary_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_glossary_v_locales" ADD CONSTRAINT "_glossary_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "people_locales" ADD CONSTRAINT "people_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_people_v_locales" ADD CONSTRAINT "_people_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "categories_locales" ADD CONSTRAINT "categories_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tags_locales" ADD CONSTRAINT "tags_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "event_types_locales" ADD CONSTRAINT "event_types_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "industries_locales" ADD CONSTRAINT "industries_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resource_types_locales" ADD CONSTRAINT "resource_types_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "topics_locales" ADD CONSTRAINT "topics_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "departments_locales" ADD CONSTRAINT "departments_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages_locales" USING btree ("meta_image_id","_locale");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE INDEX "posts_meta_meta_image_idx" ON "posts_locales" USING btree ("meta_image_id","_locale");
  CREATE INDEX "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE INDEX "events_meta_meta_image_idx" ON "events_locales" USING btree ("meta_image_id","_locale");
  CREATE INDEX "_events_v_version_meta_version_meta_image_idx" ON "_events_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE INDEX "resources_meta_meta_image_idx" ON "resources_locales" USING btree ("meta_image_id","_locale");
  CREATE INDEX "_resources_v_version_meta_version_meta_image_idx" ON "_resources_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE INDEX "glossary_meta_meta_image_idx" ON "glossary_locales" USING btree ("meta_image_id","_locale");
  CREATE INDEX "_glossary_v_version_meta_version_meta_image_idx" ON "_glossary_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE INDEX "people_meta_meta_image_idx" ON "people_locales" USING btree ("meta_image_id","_locale");
  CREATE INDEX "_people_v_version_meta_version_meta_image_idx" ON "_people_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE INDEX "categories_meta_meta_image_idx" ON "categories_locales" USING btree ("meta_image_id","_locale");
  CREATE INDEX "tags_meta_meta_image_idx" ON "tags_locales" USING btree ("meta_image_id","_locale");
  CREATE INDEX "event_types_meta_meta_image_idx" ON "event_types_locales" USING btree ("meta_image_id","_locale");
  CREATE INDEX "industries_meta_meta_image_idx" ON "industries_locales" USING btree ("meta_image_id","_locale");
  CREATE INDEX "resource_types_meta_meta_image_idx" ON "resource_types_locales" USING btree ("meta_image_id","_locale");
  CREATE INDEX "topics_meta_meta_image_idx" ON "topics_locales" USING btree ("meta_image_id","_locale");
  CREATE INDEX "departments_meta_meta_image_idx" ON "departments_locales" USING btree ("meta_image_id","_locale");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "site_settings_seo_seo_image_idx" ON "site_settings" USING btree ("seo_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_hubspot_form_vis_rules_device_show" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_hubspot_form_vis_rules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_hubspot_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_hubspot_form_vis_rules_device_show" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_hubspot_form_vis_rules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_hubspot_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_hubspot_form_vis_rules_device_show" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_hubspot_form_vis_rules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_hubspot_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_hubspot_form_vis_rules_device_show" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_hubspot_form_vis_rules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_hubspot_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_hubspot_form_vis_rules_device_show" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_hubspot_form_vis_rules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_hubspot_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_hubspot_form_vis_rules_device_show" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_hubspot_form_vis_rules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_hubspot_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_hubspot_form_vis_rules_device_show" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_hubspot_form_vis_rules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_hubspot_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_hubspot_form_vis_rules_device_show" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_hubspot_form_vis_rules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_hubspot_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_hubspot_form_vis_rules_device_show" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_hubspot_form_vis_rules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_hubspot_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_hubspot_form_vis_rules_device_show" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_hubspot_form_vis_rules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_hubspot_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_hubspot_form_vis_rules_device_show" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_hubspot_form_vis_rules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_hubspot_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_hubspot_form_vis_rules_device_show" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_hubspot_form_vis_rules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_hubspot_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_hubspot_form_vis_rules_device_show" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_hubspot_form_vis_rules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_hubspot_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_hubspot_form_vis_rules_device_show" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_hubspot_form_vis_rules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_hubspot_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "redirects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "redirects_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_hubspot_form_vis_rules_device_show" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_hubspot_form_vis_rules" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_hubspot_form" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_hubspot_form_vis_rules_device_show" CASCADE;
  DROP TABLE "pages_blocks_hubspot_form_vis_rules" CASCADE;
  DROP TABLE "pages_blocks_hubspot_form" CASCADE;
  DROP TABLE "_pages_v_blocks_hubspot_form_vis_rules_device_show" CASCADE;
  DROP TABLE "_pages_v_blocks_hubspot_form_vis_rules" CASCADE;
  DROP TABLE "_pages_v_blocks_hubspot_form" CASCADE;
  DROP TABLE "posts_blocks_hubspot_form_vis_rules_device_show" CASCADE;
  DROP TABLE "posts_blocks_hubspot_form_vis_rules" CASCADE;
  DROP TABLE "posts_blocks_hubspot_form" CASCADE;
  DROP TABLE "_posts_v_blocks_hubspot_form_vis_rules_device_show" CASCADE;
  DROP TABLE "_posts_v_blocks_hubspot_form_vis_rules" CASCADE;
  DROP TABLE "_posts_v_blocks_hubspot_form" CASCADE;
  DROP TABLE "events_blocks_hubspot_form_vis_rules_device_show" CASCADE;
  DROP TABLE "events_blocks_hubspot_form_vis_rules" CASCADE;
  DROP TABLE "events_blocks_hubspot_form" CASCADE;
  DROP TABLE "_events_v_blocks_hubspot_form_vis_rules_device_show" CASCADE;
  DROP TABLE "_events_v_blocks_hubspot_form_vis_rules" CASCADE;
  DROP TABLE "_events_v_blocks_hubspot_form" CASCADE;
  DROP TABLE "resources_blocks_hubspot_form_vis_rules_device_show" CASCADE;
  DROP TABLE "resources_blocks_hubspot_form_vis_rules" CASCADE;
  DROP TABLE "resources_blocks_hubspot_form" CASCADE;
  DROP TABLE "_resources_v_blocks_hubspot_form_vis_rules_device_show" CASCADE;
  DROP TABLE "_resources_v_blocks_hubspot_form_vis_rules" CASCADE;
  DROP TABLE "_resources_v_blocks_hubspot_form" CASCADE;
  DROP TABLE "glossary_blocks_hubspot_form_vis_rules_device_show" CASCADE;
  DROP TABLE "glossary_blocks_hubspot_form_vis_rules" CASCADE;
  DROP TABLE "glossary_blocks_hubspot_form" CASCADE;
  DROP TABLE "_glossary_v_blocks_hubspot_form_vis_rules_device_show" CASCADE;
  DROP TABLE "_glossary_v_blocks_hubspot_form_vis_rules" CASCADE;
  DROP TABLE "_glossary_v_blocks_hubspot_form" CASCADE;
  DROP TABLE "people_blocks_hubspot_form_vis_rules_device_show" CASCADE;
  DROP TABLE "people_blocks_hubspot_form_vis_rules" CASCADE;
  DROP TABLE "people_blocks_hubspot_form" CASCADE;
  DROP TABLE "_people_v_blocks_hubspot_form_vis_rules_device_show" CASCADE;
  DROP TABLE "_people_v_blocks_hubspot_form_vis_rules" CASCADE;
  DROP TABLE "_people_v_blocks_hubspot_form" CASCADE;
  DROP TABLE "reusable_blocks_hubspot_form_vis_rules_device_show" CASCADE;
  DROP TABLE "reusable_blocks_hubspot_form_vis_rules" CASCADE;
  DROP TABLE "reusable_blocks_hubspot_form" CASCADE;
  DROP TABLE "_reusable_v_blocks_hubspot_form_vis_rules_device_show" CASCADE;
  DROP TABLE "_reusable_v_blocks_hubspot_form_vis_rules" CASCADE;
  DROP TABLE "_reusable_v_blocks_hubspot_form" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "cpt_defaults_blocks_hubspot_form_vis_rules_device_show" CASCADE;
  DROP TABLE "cpt_defaults_blocks_hubspot_form_vis_rules" CASCADE;
  DROP TABLE "cpt_defaults_blocks_hubspot_form" CASCADE;
  ALTER TABLE "pages_locales" DROP CONSTRAINT "pages_locales_meta_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v_locales" DROP CONSTRAINT "_pages_v_locales_version_meta_image_id_media_id_fk";
  
  ALTER TABLE "posts_locales" DROP CONSTRAINT "posts_locales_meta_image_id_media_id_fk";
  
  ALTER TABLE "_posts_v_locales" DROP CONSTRAINT "_posts_v_locales_version_meta_image_id_media_id_fk";
  
  ALTER TABLE "events_locales" DROP CONSTRAINT "events_locales_meta_image_id_media_id_fk";
  
  ALTER TABLE "_events_v_locales" DROP CONSTRAINT "_events_v_locales_version_meta_image_id_media_id_fk";
  
  ALTER TABLE "resources_locales" DROP CONSTRAINT "resources_locales_meta_image_id_media_id_fk";
  
  ALTER TABLE "_resources_v_locales" DROP CONSTRAINT "_resources_v_locales_version_meta_image_id_media_id_fk";
  
  ALTER TABLE "glossary_locales" DROP CONSTRAINT "glossary_locales_meta_image_id_media_id_fk";
  
  ALTER TABLE "_glossary_v_locales" DROP CONSTRAINT "_glossary_v_locales_version_meta_image_id_media_id_fk";
  
  ALTER TABLE "people_locales" DROP CONSTRAINT "people_locales_meta_image_id_media_id_fk";
  
  ALTER TABLE "_people_v_locales" DROP CONSTRAINT "_people_v_locales_version_meta_image_id_media_id_fk";
  
  ALTER TABLE "categories_locales" DROP CONSTRAINT "categories_locales_meta_image_id_media_id_fk";
  
  ALTER TABLE "tags_locales" DROP CONSTRAINT "tags_locales_meta_image_id_media_id_fk";
  
  ALTER TABLE "event_types_locales" DROP CONSTRAINT "event_types_locales_meta_image_id_media_id_fk";
  
  ALTER TABLE "industries_locales" DROP CONSTRAINT "industries_locales_meta_image_id_media_id_fk";
  
  ALTER TABLE "resource_types_locales" DROP CONSTRAINT "resource_types_locales_meta_image_id_media_id_fk";
  
  ALTER TABLE "topics_locales" DROP CONSTRAINT "topics_locales_meta_image_id_media_id_fk";
  
  ALTER TABLE "departments_locales" DROP CONSTRAINT "departments_locales_meta_image_id_media_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_redirects_fk";
  
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_seo_image_id_media_id_fk";
  
  DROP INDEX "pages_meta_meta_image_idx";
  DROP INDEX "_pages_v_version_meta_version_meta_image_idx";
  DROP INDEX "posts_meta_meta_image_idx";
  DROP INDEX "_posts_v_version_meta_version_meta_image_idx";
  DROP INDEX "events_meta_meta_image_idx";
  DROP INDEX "_events_v_version_meta_version_meta_image_idx";
  DROP INDEX "resources_meta_meta_image_idx";
  DROP INDEX "_resources_v_version_meta_version_meta_image_idx";
  DROP INDEX "glossary_meta_meta_image_idx";
  DROP INDEX "_glossary_v_version_meta_version_meta_image_idx";
  DROP INDEX "people_meta_meta_image_idx";
  DROP INDEX "_people_v_version_meta_version_meta_image_idx";
  DROP INDEX "categories_meta_meta_image_idx";
  DROP INDEX "tags_meta_meta_image_idx";
  DROP INDEX "event_types_meta_meta_image_idx";
  DROP INDEX "industries_meta_meta_image_idx";
  DROP INDEX "resource_types_meta_meta_image_idx";
  DROP INDEX "topics_meta_meta_image_idx";
  DROP INDEX "departments_meta_meta_image_idx";
  DROP INDEX "payload_locked_documents_rels_redirects_id_idx";
  DROP INDEX "site_settings_seo_seo_image_idx";
  ALTER TABLE "pages" DROP COLUMN "meta_noindex";
  ALTER TABLE "pages_locales" DROP COLUMN "meta_title";
  ALTER TABLE "pages_locales" DROP COLUMN "meta_description";
  ALTER TABLE "pages_locales" DROP COLUMN "meta_image_id";
  ALTER TABLE "pages_locales" DROP COLUMN "meta_canonical";
  ALTER TABLE "_pages_v" DROP COLUMN "version_meta_noindex";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_meta_title";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_meta_description";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_meta_image_id";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_meta_canonical";
  ALTER TABLE "posts" DROP COLUMN "meta_noindex";
  ALTER TABLE "posts_locales" DROP COLUMN "meta_title";
  ALTER TABLE "posts_locales" DROP COLUMN "meta_description";
  ALTER TABLE "posts_locales" DROP COLUMN "meta_image_id";
  ALTER TABLE "posts_locales" DROP COLUMN "meta_canonical";
  ALTER TABLE "_posts_v" DROP COLUMN "version_meta_noindex";
  ALTER TABLE "_posts_v_locales" DROP COLUMN "version_meta_title";
  ALTER TABLE "_posts_v_locales" DROP COLUMN "version_meta_description";
  ALTER TABLE "_posts_v_locales" DROP COLUMN "version_meta_image_id";
  ALTER TABLE "_posts_v_locales" DROP COLUMN "version_meta_canonical";
  ALTER TABLE "events" DROP COLUMN "meta_noindex";
  ALTER TABLE "events_locales" DROP COLUMN "meta_title";
  ALTER TABLE "events_locales" DROP COLUMN "meta_description";
  ALTER TABLE "events_locales" DROP COLUMN "meta_image_id";
  ALTER TABLE "events_locales" DROP COLUMN "meta_canonical";
  ALTER TABLE "_events_v" DROP COLUMN "version_meta_noindex";
  ALTER TABLE "_events_v_locales" DROP COLUMN "version_meta_title";
  ALTER TABLE "_events_v_locales" DROP COLUMN "version_meta_description";
  ALTER TABLE "_events_v_locales" DROP COLUMN "version_meta_image_id";
  ALTER TABLE "_events_v_locales" DROP COLUMN "version_meta_canonical";
  ALTER TABLE "resources" DROP COLUMN "meta_noindex";
  ALTER TABLE "resources_locales" DROP COLUMN "meta_title";
  ALTER TABLE "resources_locales" DROP COLUMN "meta_description";
  ALTER TABLE "resources_locales" DROP COLUMN "meta_image_id";
  ALTER TABLE "resources_locales" DROP COLUMN "meta_canonical";
  ALTER TABLE "_resources_v" DROP COLUMN "version_meta_noindex";
  ALTER TABLE "_resources_v_locales" DROP COLUMN "version_meta_title";
  ALTER TABLE "_resources_v_locales" DROP COLUMN "version_meta_description";
  ALTER TABLE "_resources_v_locales" DROP COLUMN "version_meta_image_id";
  ALTER TABLE "_resources_v_locales" DROP COLUMN "version_meta_canonical";
  ALTER TABLE "glossary" DROP COLUMN "meta_noindex";
  ALTER TABLE "glossary_locales" DROP COLUMN "meta_title";
  ALTER TABLE "glossary_locales" DROP COLUMN "meta_description";
  ALTER TABLE "glossary_locales" DROP COLUMN "meta_image_id";
  ALTER TABLE "glossary_locales" DROP COLUMN "meta_canonical";
  ALTER TABLE "_glossary_v" DROP COLUMN "version_meta_noindex";
  ALTER TABLE "_glossary_v_locales" DROP COLUMN "version_meta_title";
  ALTER TABLE "_glossary_v_locales" DROP COLUMN "version_meta_description";
  ALTER TABLE "_glossary_v_locales" DROP COLUMN "version_meta_image_id";
  ALTER TABLE "_glossary_v_locales" DROP COLUMN "version_meta_canonical";
  ALTER TABLE "people" DROP COLUMN "meta_noindex";
  ALTER TABLE "people_locales" DROP COLUMN "meta_title";
  ALTER TABLE "people_locales" DROP COLUMN "meta_description";
  ALTER TABLE "people_locales" DROP COLUMN "meta_image_id";
  ALTER TABLE "people_locales" DROP COLUMN "meta_canonical";
  ALTER TABLE "_people_v" DROP COLUMN "version_meta_noindex";
  ALTER TABLE "_people_v_locales" DROP COLUMN "version_meta_title";
  ALTER TABLE "_people_v_locales" DROP COLUMN "version_meta_description";
  ALTER TABLE "_people_v_locales" DROP COLUMN "version_meta_image_id";
  ALTER TABLE "_people_v_locales" DROP COLUMN "version_meta_canonical";
  ALTER TABLE "categories" DROP COLUMN "meta_noindex";
  ALTER TABLE "categories_locales" DROP COLUMN "meta_title";
  ALTER TABLE "categories_locales" DROP COLUMN "meta_description";
  ALTER TABLE "categories_locales" DROP COLUMN "meta_image_id";
  ALTER TABLE "categories_locales" DROP COLUMN "meta_canonical";
  ALTER TABLE "tags" DROP COLUMN "meta_noindex";
  ALTER TABLE "tags_locales" DROP COLUMN "meta_title";
  ALTER TABLE "tags_locales" DROP COLUMN "meta_description";
  ALTER TABLE "tags_locales" DROP COLUMN "meta_image_id";
  ALTER TABLE "tags_locales" DROP COLUMN "meta_canonical";
  ALTER TABLE "event_types" DROP COLUMN "meta_noindex";
  ALTER TABLE "event_types_locales" DROP COLUMN "meta_title";
  ALTER TABLE "event_types_locales" DROP COLUMN "meta_description";
  ALTER TABLE "event_types_locales" DROP COLUMN "meta_image_id";
  ALTER TABLE "event_types_locales" DROP COLUMN "meta_canonical";
  ALTER TABLE "industries" DROP COLUMN "meta_noindex";
  ALTER TABLE "industries_locales" DROP COLUMN "meta_title";
  ALTER TABLE "industries_locales" DROP COLUMN "meta_description";
  ALTER TABLE "industries_locales" DROP COLUMN "meta_image_id";
  ALTER TABLE "industries_locales" DROP COLUMN "meta_canonical";
  ALTER TABLE "resource_types" DROP COLUMN "meta_noindex";
  ALTER TABLE "resource_types_locales" DROP COLUMN "meta_title";
  ALTER TABLE "resource_types_locales" DROP COLUMN "meta_description";
  ALTER TABLE "resource_types_locales" DROP COLUMN "meta_image_id";
  ALTER TABLE "resource_types_locales" DROP COLUMN "meta_canonical";
  ALTER TABLE "topics" DROP COLUMN "meta_noindex";
  ALTER TABLE "topics_locales" DROP COLUMN "meta_title";
  ALTER TABLE "topics_locales" DROP COLUMN "meta_description";
  ALTER TABLE "topics_locales" DROP COLUMN "meta_image_id";
  ALTER TABLE "topics_locales" DROP COLUMN "meta_canonical";
  ALTER TABLE "departments" DROP COLUMN "meta_noindex";
  ALTER TABLE "departments_locales" DROP COLUMN "meta_title";
  ALTER TABLE "departments_locales" DROP COLUMN "meta_description";
  ALTER TABLE "departments_locales" DROP COLUMN "meta_image_id";
  ALTER TABLE "departments_locales" DROP COLUMN "meta_canonical";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "redirects_id";
  ALTER TABLE "site_settings" DROP COLUMN "seo_image_id";
  ALTER TABLE "site_settings" DROP COLUMN "hubspot_portal_id";
  ALTER TABLE "site_settings" DROP COLUMN "hubspot_region";
  ALTER TABLE "site_settings" DROP COLUMN "hubspot_tracking";
  ALTER TABLE "site_settings_locales" DROP COLUMN "seo_title_pattern";
  ALTER TABLE "site_settings_locales" DROP COLUMN "seo_description";
  DROP TYPE "public"."enum_pages_blocks_hubspot_form_vis_rules_device_show";
  DROP TYPE "public"."enum_pages_blocks_hubspot_form_vis_rules_type";
  DROP TYPE "public"."enum_pages_blocks_hubspot_form_vis_rules_field_name";
  DROP TYPE "public"."enum_pages_blocks_hubspot_form_vis_rules_field_operator";
  DROP TYPE "public"."enum_pages_blocks_hubspot_form_vis_rules_items_type";
  DROP TYPE "public"."enum_pages_blocks_hubspot_form_vis_rules_items_when";
  DROP TYPE "public"."enum_pages_blocks_hubspot_form_display";
  DROP TYPE "public"."enum_pages_blocks_hubspot_form_style_background";
  DROP TYPE "public"."enum_pages_blocks_hubspot_form_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_hubspot_form_style_align";
  DROP TYPE "public"."enum_pages_blocks_hubspot_form_vis_match";
  DROP TYPE "public"."enum__pages_v_blocks_hubspot_form_vis_rules_device_show";
  DROP TYPE "public"."enum__pages_v_blocks_hubspot_form_vis_rules_type";
  DROP TYPE "public"."enum__pages_v_blocks_hubspot_form_vis_rules_field_name";
  DROP TYPE "public"."enum__pages_v_blocks_hubspot_form_vis_rules_field_operator";
  DROP TYPE "public"."enum__pages_v_blocks_hubspot_form_vis_rules_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_hubspot_form_vis_rules_items_when";
  DROP TYPE "public"."enum__pages_v_blocks_hubspot_form_display";
  DROP TYPE "public"."enum__pages_v_blocks_hubspot_form_style_background";
  DROP TYPE "public"."enum__pages_v_blocks_hubspot_form_style_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_hubspot_form_style_align";
  DROP TYPE "public"."enum__pages_v_blocks_hubspot_form_vis_match";
  DROP TYPE "public"."enum_posts_blocks_hubspot_form_vis_rules_device_show";
  DROP TYPE "public"."enum_posts_blocks_hubspot_form_vis_rules_type";
  DROP TYPE "public"."enum_posts_blocks_hubspot_form_vis_rules_field_name";
  DROP TYPE "public"."enum_posts_blocks_hubspot_form_vis_rules_field_operator";
  DROP TYPE "public"."enum_posts_blocks_hubspot_form_vis_rules_items_type";
  DROP TYPE "public"."enum_posts_blocks_hubspot_form_vis_rules_items_when";
  DROP TYPE "public"."enum_posts_blocks_hubspot_form_display";
  DROP TYPE "public"."enum_posts_blocks_hubspot_form_style_background";
  DROP TYPE "public"."enum_posts_blocks_hubspot_form_style_spacing";
  DROP TYPE "public"."enum_posts_blocks_hubspot_form_style_align";
  DROP TYPE "public"."enum_posts_blocks_hubspot_form_vis_match";
  DROP TYPE "public"."enum__posts_v_blocks_hubspot_form_vis_rules_device_show";
  DROP TYPE "public"."enum__posts_v_blocks_hubspot_form_vis_rules_type";
  DROP TYPE "public"."enum__posts_v_blocks_hubspot_form_vis_rules_field_name";
  DROP TYPE "public"."enum__posts_v_blocks_hubspot_form_vis_rules_field_operator";
  DROP TYPE "public"."enum__posts_v_blocks_hubspot_form_vis_rules_items_type";
  DROP TYPE "public"."enum__posts_v_blocks_hubspot_form_vis_rules_items_when";
  DROP TYPE "public"."enum__posts_v_blocks_hubspot_form_display";
  DROP TYPE "public"."enum__posts_v_blocks_hubspot_form_style_background";
  DROP TYPE "public"."enum__posts_v_blocks_hubspot_form_style_spacing";
  DROP TYPE "public"."enum__posts_v_blocks_hubspot_form_style_align";
  DROP TYPE "public"."enum__posts_v_blocks_hubspot_form_vis_match";
  DROP TYPE "public"."enum_events_blocks_hubspot_form_vis_rules_device_show";
  DROP TYPE "public"."enum_events_blocks_hubspot_form_vis_rules_type";
  DROP TYPE "public"."enum_events_blocks_hubspot_form_vis_rules_field_name";
  DROP TYPE "public"."enum_events_blocks_hubspot_form_vis_rules_field_operator";
  DROP TYPE "public"."enum_events_blocks_hubspot_form_vis_rules_items_type";
  DROP TYPE "public"."enum_events_blocks_hubspot_form_vis_rules_items_when";
  DROP TYPE "public"."enum_events_blocks_hubspot_form_display";
  DROP TYPE "public"."enum_events_blocks_hubspot_form_style_background";
  DROP TYPE "public"."enum_events_blocks_hubspot_form_style_spacing";
  DROP TYPE "public"."enum_events_blocks_hubspot_form_style_align";
  DROP TYPE "public"."enum_events_blocks_hubspot_form_vis_match";
  DROP TYPE "public"."enum__events_v_blocks_hubspot_form_vis_rules_device_show";
  DROP TYPE "public"."enum__events_v_blocks_hubspot_form_vis_rules_type";
  DROP TYPE "public"."enum__events_v_blocks_hubspot_form_vis_rules_field_name";
  DROP TYPE "public"."enum__events_v_blocks_hubspot_form_vis_rules_field_operator";
  DROP TYPE "public"."enum__events_v_blocks_hubspot_form_vis_rules_items_type";
  DROP TYPE "public"."enum__events_v_blocks_hubspot_form_vis_rules_items_when";
  DROP TYPE "public"."enum__events_v_blocks_hubspot_form_display";
  DROP TYPE "public"."enum__events_v_blocks_hubspot_form_style_background";
  DROP TYPE "public"."enum__events_v_blocks_hubspot_form_style_spacing";
  DROP TYPE "public"."enum__events_v_blocks_hubspot_form_style_align";
  DROP TYPE "public"."enum__events_v_blocks_hubspot_form_vis_match";
  DROP TYPE "public"."enum_resources_blocks_hubspot_form_vis_rules_device_show";
  DROP TYPE "public"."enum_resources_blocks_hubspot_form_vis_rules_type";
  DROP TYPE "public"."enum_resources_blocks_hubspot_form_vis_rules_field_name";
  DROP TYPE "public"."enum_resources_blocks_hubspot_form_vis_rules_field_operator";
  DROP TYPE "public"."enum_resources_blocks_hubspot_form_vis_rules_items_type";
  DROP TYPE "public"."enum_resources_blocks_hubspot_form_vis_rules_items_when";
  DROP TYPE "public"."enum_resources_blocks_hubspot_form_display";
  DROP TYPE "public"."enum_resources_blocks_hubspot_form_style_background";
  DROP TYPE "public"."enum_resources_blocks_hubspot_form_style_spacing";
  DROP TYPE "public"."enum_resources_blocks_hubspot_form_style_align";
  DROP TYPE "public"."enum_resources_blocks_hubspot_form_vis_match";
  DROP TYPE "public"."enum__resources_v_blocks_hubspot_form_vis_rules_device_show";
  DROP TYPE "public"."enum__resources_v_blocks_hubspot_form_vis_rules_type";
  DROP TYPE "public"."enum__resources_v_blocks_hubspot_form_vis_rules_field_name";
  DROP TYPE "public"."enum__resources_v_blocks_hubspot_form_vis_rules_field_operator";
  DROP TYPE "public"."enum__resources_v_blocks_hubspot_form_vis_rules_items_type";
  DROP TYPE "public"."enum__resources_v_blocks_hubspot_form_vis_rules_items_when";
  DROP TYPE "public"."enum__resources_v_blocks_hubspot_form_display";
  DROP TYPE "public"."enum__resources_v_blocks_hubspot_form_style_background";
  DROP TYPE "public"."enum__resources_v_blocks_hubspot_form_style_spacing";
  DROP TYPE "public"."enum__resources_v_blocks_hubspot_form_style_align";
  DROP TYPE "public"."enum__resources_v_blocks_hubspot_form_vis_match";
  DROP TYPE "public"."enum_glossary_blocks_hubspot_form_vis_rules_device_show";
  DROP TYPE "public"."enum_glossary_blocks_hubspot_form_vis_rules_type";
  DROP TYPE "public"."enum_glossary_blocks_hubspot_form_vis_rules_field_name";
  DROP TYPE "public"."enum_glossary_blocks_hubspot_form_vis_rules_field_operator";
  DROP TYPE "public"."enum_glossary_blocks_hubspot_form_vis_rules_items_type";
  DROP TYPE "public"."enum_glossary_blocks_hubspot_form_vis_rules_items_when";
  DROP TYPE "public"."enum_glossary_blocks_hubspot_form_display";
  DROP TYPE "public"."enum_glossary_blocks_hubspot_form_style_background";
  DROP TYPE "public"."enum_glossary_blocks_hubspot_form_style_spacing";
  DROP TYPE "public"."enum_glossary_blocks_hubspot_form_style_align";
  DROP TYPE "public"."enum_glossary_blocks_hubspot_form_vis_match";
  DROP TYPE "public"."enum__glossary_v_blocks_hubspot_form_vis_rules_device_show";
  DROP TYPE "public"."enum__glossary_v_blocks_hubspot_form_vis_rules_type";
  DROP TYPE "public"."enum__glossary_v_blocks_hubspot_form_vis_rules_field_name";
  DROP TYPE "public"."enum__glossary_v_blocks_hubspot_form_vis_rules_field_operator";
  DROP TYPE "public"."enum__glossary_v_blocks_hubspot_form_vis_rules_items_type";
  DROP TYPE "public"."enum__glossary_v_blocks_hubspot_form_vis_rules_items_when";
  DROP TYPE "public"."enum__glossary_v_blocks_hubspot_form_display";
  DROP TYPE "public"."enum__glossary_v_blocks_hubspot_form_style_background";
  DROP TYPE "public"."enum__glossary_v_blocks_hubspot_form_style_spacing";
  DROP TYPE "public"."enum__glossary_v_blocks_hubspot_form_style_align";
  DROP TYPE "public"."enum__glossary_v_blocks_hubspot_form_vis_match";
  DROP TYPE "public"."enum_people_blocks_hubspot_form_vis_rules_device_show";
  DROP TYPE "public"."enum_people_blocks_hubspot_form_vis_rules_type";
  DROP TYPE "public"."enum_people_blocks_hubspot_form_vis_rules_field_name";
  DROP TYPE "public"."enum_people_blocks_hubspot_form_vis_rules_field_operator";
  DROP TYPE "public"."enum_people_blocks_hubspot_form_vis_rules_items_type";
  DROP TYPE "public"."enum_people_blocks_hubspot_form_vis_rules_items_when";
  DROP TYPE "public"."enum_people_blocks_hubspot_form_display";
  DROP TYPE "public"."enum_people_blocks_hubspot_form_style_background";
  DROP TYPE "public"."enum_people_blocks_hubspot_form_style_spacing";
  DROP TYPE "public"."enum_people_blocks_hubspot_form_style_align";
  DROP TYPE "public"."enum_people_blocks_hubspot_form_vis_match";
  DROP TYPE "public"."enum__people_v_blocks_hubspot_form_vis_rules_device_show";
  DROP TYPE "public"."enum__people_v_blocks_hubspot_form_vis_rules_type";
  DROP TYPE "public"."enum__people_v_blocks_hubspot_form_vis_rules_field_name";
  DROP TYPE "public"."enum__people_v_blocks_hubspot_form_vis_rules_field_operator";
  DROP TYPE "public"."enum__people_v_blocks_hubspot_form_vis_rules_items_type";
  DROP TYPE "public"."enum__people_v_blocks_hubspot_form_vis_rules_items_when";
  DROP TYPE "public"."enum__people_v_blocks_hubspot_form_display";
  DROP TYPE "public"."enum__people_v_blocks_hubspot_form_style_background";
  DROP TYPE "public"."enum__people_v_blocks_hubspot_form_style_spacing";
  DROP TYPE "public"."enum__people_v_blocks_hubspot_form_style_align";
  DROP TYPE "public"."enum__people_v_blocks_hubspot_form_vis_match";
  DROP TYPE "public"."enum_reusable_blocks_hubspot_form_vis_rules_device_show";
  DROP TYPE "public"."enum_reusable_blocks_hubspot_form_vis_rules_type";
  DROP TYPE "public"."enum_reusable_blocks_hubspot_form_vis_rules_field_name";
  DROP TYPE "public"."enum_reusable_blocks_hubspot_form_vis_rules_field_operator";
  DROP TYPE "public"."enum_reusable_blocks_hubspot_form_vis_rules_items_type";
  DROP TYPE "public"."enum_reusable_blocks_hubspot_form_vis_rules_items_when";
  DROP TYPE "public"."enum_reusable_blocks_hubspot_form_display";
  DROP TYPE "public"."enum_reusable_blocks_hubspot_form_style_background";
  DROP TYPE "public"."enum_reusable_blocks_hubspot_form_style_spacing";
  DROP TYPE "public"."enum_reusable_blocks_hubspot_form_style_align";
  DROP TYPE "public"."enum_reusable_blocks_hubspot_form_vis_match";
  DROP TYPE "public"."enum__reusable_v_blocks_hubspot_form_vis_rules_device_show";
  DROP TYPE "public"."enum__reusable_v_blocks_hubspot_form_vis_rules_type";
  DROP TYPE "public"."enum__reusable_v_blocks_hubspot_form_vis_rules_field_name";
  DROP TYPE "public"."enum__reusable_v_blocks_hubspot_form_vis_rules_field_operator";
  DROP TYPE "public"."enum__reusable_v_blocks_hubspot_form_vis_rules_items_type";
  DROP TYPE "public"."enum__reusable_v_blocks_hubspot_form_vis_rules_items_when";
  DROP TYPE "public"."enum__reusable_v_blocks_hubspot_form_display";
  DROP TYPE "public"."enum__reusable_v_blocks_hubspot_form_style_background";
  DROP TYPE "public"."enum__reusable_v_blocks_hubspot_form_style_spacing";
  DROP TYPE "public"."enum__reusable_v_blocks_hubspot_form_style_align";
  DROP TYPE "public"."enum__reusable_v_blocks_hubspot_form_vis_match";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_redirects_type";
  DROP TYPE "public"."enum_site_settings_hubspot_region";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_vis_rules_device_show";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_vis_rules_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_vis_rules_field_name";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_vis_rules_field_operator";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_vis_rules_items_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_vis_rules_items_when";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_display";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_style_background";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_style_spacing";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_style_align";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hubspot_form_vis_match";`)
}
