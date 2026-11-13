import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_listing_filters_type" AS ENUM('taxonomy', 'person', 'date', 'search', 'az', 'sort');
  CREATE TYPE "public"."enum_pages_blocks_listing_filters_taxonomy" AS ENUM('category', 'tag', 'type', 'industry', 'topic', 'department');
  CREATE TYPE "public"."enum_pages_blocks_listing_filters_display" AS ENUM('tabs', 'select', 'checkboxes');
  CREATE TYPE "public"."enum_pages_blocks_listing_collection" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_pages_blocks_listing_when" AS ENUM('all', 'upcoming', 'past');
  CREATE TYPE "public"."enum_pages_blocks_listing_default_sort" AS ENUM('newest', 'oldest', 'az', 'za', 'updated');
  CREATE TYPE "public"."enum_pages_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  CREATE TYPE "public"."enum_pages_blocks_listing_layout" AS ENUM('grid2', 'grid3', 'grid4', 'list', 'slider');
  CREATE TYPE "public"."enum_pages_blocks_listing_paging" AS ENUM('numbers', 'loadMore', 'none');
  CREATE TYPE "public"."enum_pages_blocks_listing_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_listing_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_listing_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_filters_type" AS ENUM('taxonomy', 'person', 'date', 'search', 'az', 'sort');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_filters_taxonomy" AS ENUM('category', 'tag', 'type', 'industry', 'topic', 'department');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_filters_display" AS ENUM('tabs', 'select', 'checkboxes');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_collection" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_when" AS ENUM('all', 'upcoming', 'past');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_default_sort" AS ENUM('newest', 'oldest', 'az', 'za', 'updated');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_layout" AS ENUM('grid2', 'grid3', 'grid4', 'list', 'slider');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_paging" AS ENUM('numbers', 'loadMore', 'none');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_posts_blocks_listing_filters_type" AS ENUM('taxonomy', 'person', 'date', 'search', 'az', 'sort');
  CREATE TYPE "public"."enum_posts_blocks_listing_filters_taxonomy" AS ENUM('category', 'tag', 'type', 'industry', 'topic', 'department');
  CREATE TYPE "public"."enum_posts_blocks_listing_filters_display" AS ENUM('tabs', 'select', 'checkboxes');
  CREATE TYPE "public"."enum_posts_blocks_listing_collection" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_posts_blocks_listing_when" AS ENUM('all', 'upcoming', 'past');
  CREATE TYPE "public"."enum_posts_blocks_listing_default_sort" AS ENUM('newest', 'oldest', 'az', 'za', 'updated');
  CREATE TYPE "public"."enum_posts_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  CREATE TYPE "public"."enum_posts_blocks_listing_layout" AS ENUM('grid2', 'grid3', 'grid4', 'list', 'slider');
  CREATE TYPE "public"."enum_posts_blocks_listing_paging" AS ENUM('numbers', 'loadMore', 'none');
  CREATE TYPE "public"."enum_posts_blocks_listing_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_posts_blocks_listing_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_posts_blocks_listing_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_filters_type" AS ENUM('taxonomy', 'person', 'date', 'search', 'az', 'sort');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_filters_taxonomy" AS ENUM('category', 'tag', 'type', 'industry', 'topic', 'department');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_filters_display" AS ENUM('tabs', 'select', 'checkboxes');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_collection" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_when" AS ENUM('all', 'upcoming', 'past');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_default_sort" AS ENUM('newest', 'oldest', 'az', 'za', 'updated');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_layout" AS ENUM('grid2', 'grid3', 'grid4', 'list', 'slider');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_paging" AS ENUM('numbers', 'loadMore', 'none');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_events_blocks_listing_filters_type" AS ENUM('taxonomy', 'person', 'date', 'search', 'az', 'sort');
  CREATE TYPE "public"."enum_events_blocks_listing_filters_taxonomy" AS ENUM('category', 'tag', 'type', 'industry', 'topic', 'department');
  CREATE TYPE "public"."enum_events_blocks_listing_filters_display" AS ENUM('tabs', 'select', 'checkboxes');
  CREATE TYPE "public"."enum_events_blocks_listing_collection" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_events_blocks_listing_when" AS ENUM('all', 'upcoming', 'past');
  CREATE TYPE "public"."enum_events_blocks_listing_default_sort" AS ENUM('newest', 'oldest', 'az', 'za', 'updated');
  CREATE TYPE "public"."enum_events_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  CREATE TYPE "public"."enum_events_blocks_listing_layout" AS ENUM('grid2', 'grid3', 'grid4', 'list', 'slider');
  CREATE TYPE "public"."enum_events_blocks_listing_paging" AS ENUM('numbers', 'loadMore', 'none');
  CREATE TYPE "public"."enum_events_blocks_listing_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_events_blocks_listing_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_events_blocks_listing_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__events_v_blocks_listing_filters_type" AS ENUM('taxonomy', 'person', 'date', 'search', 'az', 'sort');
  CREATE TYPE "public"."enum__events_v_blocks_listing_filters_taxonomy" AS ENUM('category', 'tag', 'type', 'industry', 'topic', 'department');
  CREATE TYPE "public"."enum__events_v_blocks_listing_filters_display" AS ENUM('tabs', 'select', 'checkboxes');
  CREATE TYPE "public"."enum__events_v_blocks_listing_collection" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__events_v_blocks_listing_when" AS ENUM('all', 'upcoming', 'past');
  CREATE TYPE "public"."enum__events_v_blocks_listing_default_sort" AS ENUM('newest', 'oldest', 'az', 'za', 'updated');
  CREATE TYPE "public"."enum__events_v_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  CREATE TYPE "public"."enum__events_v_blocks_listing_layout" AS ENUM('grid2', 'grid3', 'grid4', 'list', 'slider');
  CREATE TYPE "public"."enum__events_v_blocks_listing_paging" AS ENUM('numbers', 'loadMore', 'none');
  CREATE TYPE "public"."enum__events_v_blocks_listing_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__events_v_blocks_listing_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__events_v_blocks_listing_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_resources_blocks_listing_filters_type" AS ENUM('taxonomy', 'person', 'date', 'search', 'az', 'sort');
  CREATE TYPE "public"."enum_resources_blocks_listing_filters_taxonomy" AS ENUM('category', 'tag', 'type', 'industry', 'topic', 'department');
  CREATE TYPE "public"."enum_resources_blocks_listing_filters_display" AS ENUM('tabs', 'select', 'checkboxes');
  CREATE TYPE "public"."enum_resources_blocks_listing_collection" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_resources_blocks_listing_when" AS ENUM('all', 'upcoming', 'past');
  CREATE TYPE "public"."enum_resources_blocks_listing_default_sort" AS ENUM('newest', 'oldest', 'az', 'za', 'updated');
  CREATE TYPE "public"."enum_resources_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  CREATE TYPE "public"."enum_resources_blocks_listing_layout" AS ENUM('grid2', 'grid3', 'grid4', 'list', 'slider');
  CREATE TYPE "public"."enum_resources_blocks_listing_paging" AS ENUM('numbers', 'loadMore', 'none');
  CREATE TYPE "public"."enum_resources_blocks_listing_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_resources_blocks_listing_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_resources_blocks_listing_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_filters_type" AS ENUM('taxonomy', 'person', 'date', 'search', 'az', 'sort');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_filters_taxonomy" AS ENUM('category', 'tag', 'type', 'industry', 'topic', 'department');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_filters_display" AS ENUM('tabs', 'select', 'checkboxes');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_collection" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_when" AS ENUM('all', 'upcoming', 'past');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_default_sort" AS ENUM('newest', 'oldest', 'az', 'za', 'updated');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_layout" AS ENUM('grid2', 'grid3', 'grid4', 'list', 'slider');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_paging" AS ENUM('numbers', 'loadMore', 'none');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_glossary_blocks_listing_filters_type" AS ENUM('taxonomy', 'person', 'date', 'search', 'az', 'sort');
  CREATE TYPE "public"."enum_glossary_blocks_listing_filters_taxonomy" AS ENUM('category', 'tag', 'type', 'industry', 'topic', 'department');
  CREATE TYPE "public"."enum_glossary_blocks_listing_filters_display" AS ENUM('tabs', 'select', 'checkboxes');
  CREATE TYPE "public"."enum_glossary_blocks_listing_collection" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_glossary_blocks_listing_when" AS ENUM('all', 'upcoming', 'past');
  CREATE TYPE "public"."enum_glossary_blocks_listing_default_sort" AS ENUM('newest', 'oldest', 'az', 'za', 'updated');
  CREATE TYPE "public"."enum_glossary_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  CREATE TYPE "public"."enum_glossary_blocks_listing_layout" AS ENUM('grid2', 'grid3', 'grid4', 'list', 'slider');
  CREATE TYPE "public"."enum_glossary_blocks_listing_paging" AS ENUM('numbers', 'loadMore', 'none');
  CREATE TYPE "public"."enum_glossary_blocks_listing_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_glossary_blocks_listing_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_glossary_blocks_listing_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_filters_type" AS ENUM('taxonomy', 'person', 'date', 'search', 'az', 'sort');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_filters_taxonomy" AS ENUM('category', 'tag', 'type', 'industry', 'topic', 'department');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_filters_display" AS ENUM('tabs', 'select', 'checkboxes');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_collection" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_when" AS ENUM('all', 'upcoming', 'past');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_default_sort" AS ENUM('newest', 'oldest', 'az', 'za', 'updated');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_layout" AS ENUM('grid2', 'grid3', 'grid4', 'list', 'slider');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_paging" AS ENUM('numbers', 'loadMore', 'none');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_people_blocks_listing_filters_type" AS ENUM('taxonomy', 'person', 'date', 'search', 'az', 'sort');
  CREATE TYPE "public"."enum_people_blocks_listing_filters_taxonomy" AS ENUM('category', 'tag', 'type', 'industry', 'topic', 'department');
  CREATE TYPE "public"."enum_people_blocks_listing_filters_display" AS ENUM('tabs', 'select', 'checkboxes');
  CREATE TYPE "public"."enum_people_blocks_listing_collection" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_people_blocks_listing_when" AS ENUM('all', 'upcoming', 'past');
  CREATE TYPE "public"."enum_people_blocks_listing_default_sort" AS ENUM('newest', 'oldest', 'az', 'za', 'updated');
  CREATE TYPE "public"."enum_people_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  CREATE TYPE "public"."enum_people_blocks_listing_layout" AS ENUM('grid2', 'grid3', 'grid4', 'list', 'slider');
  CREATE TYPE "public"."enum_people_blocks_listing_paging" AS ENUM('numbers', 'loadMore', 'none');
  CREATE TYPE "public"."enum_people_blocks_listing_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_people_blocks_listing_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_people_blocks_listing_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__people_v_blocks_listing_filters_type" AS ENUM('taxonomy', 'person', 'date', 'search', 'az', 'sort');
  CREATE TYPE "public"."enum__people_v_blocks_listing_filters_taxonomy" AS ENUM('category', 'tag', 'type', 'industry', 'topic', 'department');
  CREATE TYPE "public"."enum__people_v_blocks_listing_filters_display" AS ENUM('tabs', 'select', 'checkboxes');
  CREATE TYPE "public"."enum__people_v_blocks_listing_collection" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__people_v_blocks_listing_when" AS ENUM('all', 'upcoming', 'past');
  CREATE TYPE "public"."enum__people_v_blocks_listing_default_sort" AS ENUM('newest', 'oldest', 'az', 'za', 'updated');
  CREATE TYPE "public"."enum__people_v_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  CREATE TYPE "public"."enum__people_v_blocks_listing_layout" AS ENUM('grid2', 'grid3', 'grid4', 'list', 'slider');
  CREATE TYPE "public"."enum__people_v_blocks_listing_paging" AS ENUM('numbers', 'loadMore', 'none');
  CREATE TYPE "public"."enum__people_v_blocks_listing_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__people_v_blocks_listing_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__people_v_blocks_listing_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_reusable_blocks_listing_filters_type" AS ENUM('taxonomy', 'person', 'date', 'search', 'az', 'sort');
  CREATE TYPE "public"."enum_reusable_blocks_listing_filters_taxonomy" AS ENUM('category', 'tag', 'type', 'industry', 'topic', 'department');
  CREATE TYPE "public"."enum_reusable_blocks_listing_filters_display" AS ENUM('tabs', 'select', 'checkboxes');
  CREATE TYPE "public"."enum_reusable_blocks_listing_collection" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_reusable_blocks_listing_when" AS ENUM('all', 'upcoming', 'past');
  CREATE TYPE "public"."enum_reusable_blocks_listing_default_sort" AS ENUM('newest', 'oldest', 'az', 'za', 'updated');
  CREATE TYPE "public"."enum_reusable_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  CREATE TYPE "public"."enum_reusable_blocks_listing_layout" AS ENUM('grid2', 'grid3', 'grid4', 'list', 'slider');
  CREATE TYPE "public"."enum_reusable_blocks_listing_paging" AS ENUM('numbers', 'loadMore', 'none');
  CREATE TYPE "public"."enum_reusable_blocks_listing_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_reusable_blocks_listing_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_reusable_blocks_listing_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_filters_type" AS ENUM('taxonomy', 'person', 'date', 'search', 'az', 'sort');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_filters_taxonomy" AS ENUM('category', 'tag', 'type', 'industry', 'topic', 'department');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_filters_display" AS ENUM('tabs', 'select', 'checkboxes');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_collection" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_when" AS ENUM('all', 'upcoming', 'past');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_default_sort" AS ENUM('newest', 'oldest', 'az', 'za', 'updated');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_layout" AS ENUM('grid2', 'grid3', 'grid4', 'list', 'slider');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_paging" AS ENUM('numbers', 'loadMore', 'none');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_filters_type" AS ENUM('taxonomy', 'person', 'date', 'search', 'az', 'sort');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_filters_taxonomy" AS ENUM('category', 'tag', 'type', 'industry', 'topic', 'department');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_filters_display" AS ENUM('tabs', 'select', 'checkboxes');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_collection" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_when" AS ENUM('all', 'upcoming', 'past');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_default_sort" AS ENUM('newest', 'oldest', 'az', 'za', 'updated');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_layout" AS ENUM('grid2', 'grid3', 'grid4', 'list', 'slider');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_paging" AS ENUM('numbers', 'loadMore', 'none');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_style_align" AS ENUM('start', 'center');
  CREATE TABLE "pages_blocks_listing_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_listing_filters_type",
  	"taxonomy" "enum_pages_blocks_listing_filters_taxonomy",
  	"display" "enum_pages_blocks_listing_filters_display" DEFAULT 'tabs'
  );
  
  CREATE TABLE "pages_blocks_listing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"collection" "enum_pages_blocks_listing_collection" DEFAULT 'posts',
  	"when" "enum_pages_blocks_listing_when" DEFAULT 'all',
  	"related_to_current" boolean,
  	"exclude_current" boolean DEFAULT true,
  	"per_page" numeric DEFAULT 9,
  	"default_sort" "enum_pages_blocks_listing_default_sort" DEFAULT 'newest',
  	"card_style" "enum_pages_blocks_listing_card_style" DEFAULT 'standard',
  	"layout" "enum_pages_blocks_listing_layout" DEFAULT 'grid3',
  	"paging" "enum_pages_blocks_listing_paging" DEFAULT 'numbers',
  	"style_background" "enum_pages_blocks_listing_style_background" DEFAULT 'default',
  	"style_spacing" "enum_pages_blocks_listing_style_spacing" DEFAULT 'md',
  	"style_align" "enum_pages_blocks_listing_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_listing_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_listing_filters_type",
  	"taxonomy" "enum__pages_v_blocks_listing_filters_taxonomy",
  	"display" "enum__pages_v_blocks_listing_filters_display" DEFAULT 'tabs',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_listing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"collection" "enum__pages_v_blocks_listing_collection" DEFAULT 'posts',
  	"when" "enum__pages_v_blocks_listing_when" DEFAULT 'all',
  	"related_to_current" boolean,
  	"exclude_current" boolean DEFAULT true,
  	"per_page" numeric DEFAULT 9,
  	"default_sort" "enum__pages_v_blocks_listing_default_sort" DEFAULT 'newest',
  	"card_style" "enum__pages_v_blocks_listing_card_style" DEFAULT 'standard',
  	"layout" "enum__pages_v_blocks_listing_layout" DEFAULT 'grid3',
  	"paging" "enum__pages_v_blocks_listing_paging" DEFAULT 'numbers',
  	"style_background" "enum__pages_v_blocks_listing_style_background" DEFAULT 'default',
  	"style_spacing" "enum__pages_v_blocks_listing_style_spacing" DEFAULT 'md',
  	"style_align" "enum__pages_v_blocks_listing_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_listing_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_posts_blocks_listing_filters_type",
  	"taxonomy" "enum_posts_blocks_listing_filters_taxonomy",
  	"display" "enum_posts_blocks_listing_filters_display" DEFAULT 'tabs'
  );
  
  CREATE TABLE "posts_blocks_listing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"collection" "enum_posts_blocks_listing_collection" DEFAULT 'posts',
  	"when" "enum_posts_blocks_listing_when" DEFAULT 'all',
  	"related_to_current" boolean,
  	"exclude_current" boolean DEFAULT true,
  	"per_page" numeric DEFAULT 9,
  	"default_sort" "enum_posts_blocks_listing_default_sort" DEFAULT 'newest',
  	"card_style" "enum_posts_blocks_listing_card_style" DEFAULT 'standard',
  	"layout" "enum_posts_blocks_listing_layout" DEFAULT 'grid3',
  	"paging" "enum_posts_blocks_listing_paging" DEFAULT 'numbers',
  	"style_background" "enum_posts_blocks_listing_style_background" DEFAULT 'default',
  	"style_spacing" "enum_posts_blocks_listing_style_spacing" DEFAULT 'md',
  	"style_align" "enum_posts_blocks_listing_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_listing_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__posts_v_blocks_listing_filters_type",
  	"taxonomy" "enum__posts_v_blocks_listing_filters_taxonomy",
  	"display" "enum__posts_v_blocks_listing_filters_display" DEFAULT 'tabs',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_listing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"collection" "enum__posts_v_blocks_listing_collection" DEFAULT 'posts',
  	"when" "enum__posts_v_blocks_listing_when" DEFAULT 'all',
  	"related_to_current" boolean,
  	"exclude_current" boolean DEFAULT true,
  	"per_page" numeric DEFAULT 9,
  	"default_sort" "enum__posts_v_blocks_listing_default_sort" DEFAULT 'newest',
  	"card_style" "enum__posts_v_blocks_listing_card_style" DEFAULT 'standard',
  	"layout" "enum__posts_v_blocks_listing_layout" DEFAULT 'grid3',
  	"paging" "enum__posts_v_blocks_listing_paging" DEFAULT 'numbers',
  	"style_background" "enum__posts_v_blocks_listing_style_background" DEFAULT 'default',
  	"style_spacing" "enum__posts_v_blocks_listing_style_spacing" DEFAULT 'md',
  	"style_align" "enum__posts_v_blocks_listing_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_listing_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_events_blocks_listing_filters_type",
  	"taxonomy" "enum_events_blocks_listing_filters_taxonomy",
  	"display" "enum_events_blocks_listing_filters_display" DEFAULT 'tabs'
  );
  
  CREATE TABLE "events_blocks_listing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"collection" "enum_events_blocks_listing_collection" DEFAULT 'posts',
  	"when" "enum_events_blocks_listing_when" DEFAULT 'all',
  	"related_to_current" boolean,
  	"exclude_current" boolean DEFAULT true,
  	"per_page" numeric DEFAULT 9,
  	"default_sort" "enum_events_blocks_listing_default_sort" DEFAULT 'newest',
  	"card_style" "enum_events_blocks_listing_card_style" DEFAULT 'standard',
  	"layout" "enum_events_blocks_listing_layout" DEFAULT 'grid3',
  	"paging" "enum_events_blocks_listing_paging" DEFAULT 'numbers',
  	"style_background" "enum_events_blocks_listing_style_background" DEFAULT 'default',
  	"style_spacing" "enum_events_blocks_listing_style_spacing" DEFAULT 'md',
  	"style_align" "enum_events_blocks_listing_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_listing_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__events_v_blocks_listing_filters_type",
  	"taxonomy" "enum__events_v_blocks_listing_filters_taxonomy",
  	"display" "enum__events_v_blocks_listing_filters_display" DEFAULT 'tabs',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_listing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"collection" "enum__events_v_blocks_listing_collection" DEFAULT 'posts',
  	"when" "enum__events_v_blocks_listing_when" DEFAULT 'all',
  	"related_to_current" boolean,
  	"exclude_current" boolean DEFAULT true,
  	"per_page" numeric DEFAULT 9,
  	"default_sort" "enum__events_v_blocks_listing_default_sort" DEFAULT 'newest',
  	"card_style" "enum__events_v_blocks_listing_card_style" DEFAULT 'standard',
  	"layout" "enum__events_v_blocks_listing_layout" DEFAULT 'grid3',
  	"paging" "enum__events_v_blocks_listing_paging" DEFAULT 'numbers',
  	"style_background" "enum__events_v_blocks_listing_style_background" DEFAULT 'default',
  	"style_spacing" "enum__events_v_blocks_listing_style_spacing" DEFAULT 'md',
  	"style_align" "enum__events_v_blocks_listing_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_listing_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_resources_blocks_listing_filters_type",
  	"taxonomy" "enum_resources_blocks_listing_filters_taxonomy",
  	"display" "enum_resources_blocks_listing_filters_display" DEFAULT 'tabs'
  );
  
  CREATE TABLE "resources_blocks_listing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"collection" "enum_resources_blocks_listing_collection" DEFAULT 'posts',
  	"when" "enum_resources_blocks_listing_when" DEFAULT 'all',
  	"related_to_current" boolean,
  	"exclude_current" boolean DEFAULT true,
  	"per_page" numeric DEFAULT 9,
  	"default_sort" "enum_resources_blocks_listing_default_sort" DEFAULT 'newest',
  	"card_style" "enum_resources_blocks_listing_card_style" DEFAULT 'standard',
  	"layout" "enum_resources_blocks_listing_layout" DEFAULT 'grid3',
  	"paging" "enum_resources_blocks_listing_paging" DEFAULT 'numbers',
  	"style_background" "enum_resources_blocks_listing_style_background" DEFAULT 'default',
  	"style_spacing" "enum_resources_blocks_listing_style_spacing" DEFAULT 'md',
  	"style_align" "enum_resources_blocks_listing_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_listing_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__resources_v_blocks_listing_filters_type",
  	"taxonomy" "enum__resources_v_blocks_listing_filters_taxonomy",
  	"display" "enum__resources_v_blocks_listing_filters_display" DEFAULT 'tabs',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_listing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"collection" "enum__resources_v_blocks_listing_collection" DEFAULT 'posts',
  	"when" "enum__resources_v_blocks_listing_when" DEFAULT 'all',
  	"related_to_current" boolean,
  	"exclude_current" boolean DEFAULT true,
  	"per_page" numeric DEFAULT 9,
  	"default_sort" "enum__resources_v_blocks_listing_default_sort" DEFAULT 'newest',
  	"card_style" "enum__resources_v_blocks_listing_card_style" DEFAULT 'standard',
  	"layout" "enum__resources_v_blocks_listing_layout" DEFAULT 'grid3',
  	"paging" "enum__resources_v_blocks_listing_paging" DEFAULT 'numbers',
  	"style_background" "enum__resources_v_blocks_listing_style_background" DEFAULT 'default',
  	"style_spacing" "enum__resources_v_blocks_listing_style_spacing" DEFAULT 'md',
  	"style_align" "enum__resources_v_blocks_listing_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "glossary_blocks_listing_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_glossary_blocks_listing_filters_type",
  	"taxonomy" "enum_glossary_blocks_listing_filters_taxonomy",
  	"display" "enum_glossary_blocks_listing_filters_display" DEFAULT 'tabs'
  );
  
  CREATE TABLE "glossary_blocks_listing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"collection" "enum_glossary_blocks_listing_collection" DEFAULT 'posts',
  	"when" "enum_glossary_blocks_listing_when" DEFAULT 'all',
  	"related_to_current" boolean,
  	"exclude_current" boolean DEFAULT true,
  	"per_page" numeric DEFAULT 9,
  	"default_sort" "enum_glossary_blocks_listing_default_sort" DEFAULT 'newest',
  	"card_style" "enum_glossary_blocks_listing_card_style" DEFAULT 'standard',
  	"layout" "enum_glossary_blocks_listing_layout" DEFAULT 'grid3',
  	"paging" "enum_glossary_blocks_listing_paging" DEFAULT 'numbers',
  	"style_background" "enum_glossary_blocks_listing_style_background" DEFAULT 'default',
  	"style_spacing" "enum_glossary_blocks_listing_style_spacing" DEFAULT 'md',
  	"style_align" "enum_glossary_blocks_listing_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_listing_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__glossary_v_blocks_listing_filters_type",
  	"taxonomy" "enum__glossary_v_blocks_listing_filters_taxonomy",
  	"display" "enum__glossary_v_blocks_listing_filters_display" DEFAULT 'tabs',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_listing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"collection" "enum__glossary_v_blocks_listing_collection" DEFAULT 'posts',
  	"when" "enum__glossary_v_blocks_listing_when" DEFAULT 'all',
  	"related_to_current" boolean,
  	"exclude_current" boolean DEFAULT true,
  	"per_page" numeric DEFAULT 9,
  	"default_sort" "enum__glossary_v_blocks_listing_default_sort" DEFAULT 'newest',
  	"card_style" "enum__glossary_v_blocks_listing_card_style" DEFAULT 'standard',
  	"layout" "enum__glossary_v_blocks_listing_layout" DEFAULT 'grid3',
  	"paging" "enum__glossary_v_blocks_listing_paging" DEFAULT 'numbers',
  	"style_background" "enum__glossary_v_blocks_listing_style_background" DEFAULT 'default',
  	"style_spacing" "enum__glossary_v_blocks_listing_style_spacing" DEFAULT 'md',
  	"style_align" "enum__glossary_v_blocks_listing_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_listing_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_people_blocks_listing_filters_type",
  	"taxonomy" "enum_people_blocks_listing_filters_taxonomy",
  	"display" "enum_people_blocks_listing_filters_display" DEFAULT 'tabs'
  );
  
  CREATE TABLE "people_blocks_listing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"collection" "enum_people_blocks_listing_collection" DEFAULT 'posts',
  	"when" "enum_people_blocks_listing_when" DEFAULT 'all',
  	"related_to_current" boolean,
  	"exclude_current" boolean DEFAULT true,
  	"per_page" numeric DEFAULT 9,
  	"default_sort" "enum_people_blocks_listing_default_sort" DEFAULT 'newest',
  	"card_style" "enum_people_blocks_listing_card_style" DEFAULT 'standard',
  	"layout" "enum_people_blocks_listing_layout" DEFAULT 'grid3',
  	"paging" "enum_people_blocks_listing_paging" DEFAULT 'numbers',
  	"style_background" "enum_people_blocks_listing_style_background" DEFAULT 'default',
  	"style_spacing" "enum_people_blocks_listing_style_spacing" DEFAULT 'md',
  	"style_align" "enum_people_blocks_listing_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "_people_v_blocks_listing_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__people_v_blocks_listing_filters_type",
  	"taxonomy" "enum__people_v_blocks_listing_filters_taxonomy",
  	"display" "enum__people_v_blocks_listing_filters_display" DEFAULT 'tabs',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_listing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"collection" "enum__people_v_blocks_listing_collection" DEFAULT 'posts',
  	"when" "enum__people_v_blocks_listing_when" DEFAULT 'all',
  	"related_to_current" boolean,
  	"exclude_current" boolean DEFAULT true,
  	"per_page" numeric DEFAULT 9,
  	"default_sort" "enum__people_v_blocks_listing_default_sort" DEFAULT 'newest',
  	"card_style" "enum__people_v_blocks_listing_card_style" DEFAULT 'standard',
  	"layout" "enum__people_v_blocks_listing_layout" DEFAULT 'grid3',
  	"paging" "enum__people_v_blocks_listing_paging" DEFAULT 'numbers',
  	"style_background" "enum__people_v_blocks_listing_style_background" DEFAULT 'default',
  	"style_spacing" "enum__people_v_blocks_listing_style_spacing" DEFAULT 'md',
  	"style_align" "enum__people_v_blocks_listing_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "reusable_blocks_listing_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_reusable_blocks_listing_filters_type",
  	"taxonomy" "enum_reusable_blocks_listing_filters_taxonomy",
  	"display" "enum_reusable_blocks_listing_filters_display" DEFAULT 'tabs'
  );
  
  CREATE TABLE "reusable_blocks_listing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"collection" "enum_reusable_blocks_listing_collection" DEFAULT 'posts',
  	"when" "enum_reusable_blocks_listing_when" DEFAULT 'all',
  	"related_to_current" boolean,
  	"exclude_current" boolean DEFAULT true,
  	"per_page" numeric DEFAULT 9,
  	"default_sort" "enum_reusable_blocks_listing_default_sort" DEFAULT 'newest',
  	"card_style" "enum_reusable_blocks_listing_card_style" DEFAULT 'standard',
  	"layout" "enum_reusable_blocks_listing_layout" DEFAULT 'grid3',
  	"paging" "enum_reusable_blocks_listing_paging" DEFAULT 'numbers',
  	"style_background" "enum_reusable_blocks_listing_style_background" DEFAULT 'default',
  	"style_spacing" "enum_reusable_blocks_listing_style_spacing" DEFAULT 'md',
  	"style_align" "enum_reusable_blocks_listing_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_listing_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__reusable_v_blocks_listing_filters_type",
  	"taxonomy" "enum__reusable_v_blocks_listing_filters_taxonomy",
  	"display" "enum__reusable_v_blocks_listing_filters_display" DEFAULT 'tabs',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_listing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"collection" "enum__reusable_v_blocks_listing_collection" DEFAULT 'posts',
  	"when" "enum__reusable_v_blocks_listing_when" DEFAULT 'all',
  	"related_to_current" boolean,
  	"exclude_current" boolean DEFAULT true,
  	"per_page" numeric DEFAULT 9,
  	"default_sort" "enum__reusable_v_blocks_listing_default_sort" DEFAULT 'newest',
  	"card_style" "enum__reusable_v_blocks_listing_card_style" DEFAULT 'standard',
  	"layout" "enum__reusable_v_blocks_listing_layout" DEFAULT 'grid3',
  	"paging" "enum__reusable_v_blocks_listing_paging" DEFAULT 'numbers',
  	"style_background" "enum__reusable_v_blocks_listing_style_background" DEFAULT 'default',
  	"style_spacing" "enum__reusable_v_blocks_listing_style_spacing" DEFAULT 'md',
  	"style_align" "enum__reusable_v_blocks_listing_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "cpt_defaults_blocks_listing_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_cpt_defaults_blocks_listing_filters_type" NOT NULL,
  	"taxonomy" "enum_cpt_defaults_blocks_listing_filters_taxonomy",
  	"display" "enum_cpt_defaults_blocks_listing_filters_display" DEFAULT 'tabs'
  );
  
  CREATE TABLE "cpt_defaults_blocks_listing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"collection" "enum_cpt_defaults_blocks_listing_collection" DEFAULT 'posts' NOT NULL,
  	"when" "enum_cpt_defaults_blocks_listing_when" DEFAULT 'all',
  	"related_to_current" boolean,
  	"exclude_current" boolean DEFAULT true,
  	"per_page" numeric DEFAULT 9,
  	"default_sort" "enum_cpt_defaults_blocks_listing_default_sort" DEFAULT 'newest',
  	"card_style" "enum_cpt_defaults_blocks_listing_card_style" DEFAULT 'standard',
  	"layout" "enum_cpt_defaults_blocks_listing_layout" DEFAULT 'grid3',
  	"paging" "enum_cpt_defaults_blocks_listing_paging" DEFAULT 'numbers',
  	"style_background" "enum_cpt_defaults_blocks_listing_style_background" DEFAULT 'default',
  	"style_spacing" "enum_cpt_defaults_blocks_listing_style_spacing" DEFAULT 'md',
  	"style_align" "enum_cpt_defaults_blocks_listing_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "pages_rels" ADD COLUMN "tags_id" integer;
  ALTER TABLE "pages_rels" ADD COLUMN "event_types_id" integer;
  ALTER TABLE "pages_rels" ADD COLUMN "industries_id" integer;
  ALTER TABLE "pages_rels" ADD COLUMN "resource_types_id" integer;
  ALTER TABLE "pages_rels" ADD COLUMN "topics_id" integer;
  ALTER TABLE "pages_rels" ADD COLUMN "departments_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "tags_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "event_types_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "industries_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "resource_types_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "topics_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "departments_id" integer;
  ALTER TABLE "posts_locales" ADD COLUMN "letter" varchar;
  ALTER TABLE "posts_rels" ADD COLUMN "event_types_id" integer;
  ALTER TABLE "posts_rels" ADD COLUMN "industries_id" integer;
  ALTER TABLE "posts_rels" ADD COLUMN "resource_types_id" integer;
  ALTER TABLE "posts_rels" ADD COLUMN "topics_id" integer;
  ALTER TABLE "posts_rels" ADD COLUMN "departments_id" integer;
  ALTER TABLE "_posts_v_locales" ADD COLUMN "version_letter" varchar;
  ALTER TABLE "_posts_v_rels" ADD COLUMN "event_types_id" integer;
  ALTER TABLE "_posts_v_rels" ADD COLUMN "industries_id" integer;
  ALTER TABLE "_posts_v_rels" ADD COLUMN "resource_types_id" integer;
  ALTER TABLE "_posts_v_rels" ADD COLUMN "topics_id" integer;
  ALTER TABLE "_posts_v_rels" ADD COLUMN "departments_id" integer;
  ALTER TABLE "events_locales" ADD COLUMN "letter" varchar;
  ALTER TABLE "events_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "events_rels" ADD COLUMN "tags_id" integer;
  ALTER TABLE "events_rels" ADD COLUMN "industries_id" integer;
  ALTER TABLE "events_rels" ADD COLUMN "resource_types_id" integer;
  ALTER TABLE "events_rels" ADD COLUMN "topics_id" integer;
  ALTER TABLE "events_rels" ADD COLUMN "departments_id" integer;
  ALTER TABLE "_events_v_locales" ADD COLUMN "version_letter" varchar;
  ALTER TABLE "_events_v_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "_events_v_rels" ADD COLUMN "tags_id" integer;
  ALTER TABLE "_events_v_rels" ADD COLUMN "industries_id" integer;
  ALTER TABLE "_events_v_rels" ADD COLUMN "resource_types_id" integer;
  ALTER TABLE "_events_v_rels" ADD COLUMN "topics_id" integer;
  ALTER TABLE "_events_v_rels" ADD COLUMN "departments_id" integer;
  ALTER TABLE "resources_locales" ADD COLUMN "letter" varchar;
  ALTER TABLE "resources_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "resources_rels" ADD COLUMN "tags_id" integer;
  ALTER TABLE "resources_rels" ADD COLUMN "event_types_id" integer;
  ALTER TABLE "resources_rels" ADD COLUMN "resource_types_id" integer;
  ALTER TABLE "resources_rels" ADD COLUMN "departments_id" integer;
  ALTER TABLE "_resources_v_locales" ADD COLUMN "version_letter" varchar;
  ALTER TABLE "_resources_v_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "_resources_v_rels" ADD COLUMN "tags_id" integer;
  ALTER TABLE "_resources_v_rels" ADD COLUMN "event_types_id" integer;
  ALTER TABLE "_resources_v_rels" ADD COLUMN "resource_types_id" integer;
  ALTER TABLE "_resources_v_rels" ADD COLUMN "departments_id" integer;
  ALTER TABLE "glossary_locales" ADD COLUMN "letter" varchar;
  ALTER TABLE "glossary_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "glossary_rels" ADD COLUMN "tags_id" integer;
  ALTER TABLE "glossary_rels" ADD COLUMN "event_types_id" integer;
  ALTER TABLE "glossary_rels" ADD COLUMN "industries_id" integer;
  ALTER TABLE "glossary_rels" ADD COLUMN "resource_types_id" integer;
  ALTER TABLE "glossary_rels" ADD COLUMN "topics_id" integer;
  ALTER TABLE "glossary_rels" ADD COLUMN "departments_id" integer;
  ALTER TABLE "_glossary_v_locales" ADD COLUMN "version_letter" varchar;
  ALTER TABLE "_glossary_v_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "_glossary_v_rels" ADD COLUMN "tags_id" integer;
  ALTER TABLE "_glossary_v_rels" ADD COLUMN "event_types_id" integer;
  ALTER TABLE "_glossary_v_rels" ADD COLUMN "industries_id" integer;
  ALTER TABLE "_glossary_v_rels" ADD COLUMN "resource_types_id" integer;
  ALTER TABLE "_glossary_v_rels" ADD COLUMN "topics_id" integer;
  ALTER TABLE "_glossary_v_rels" ADD COLUMN "departments_id" integer;
  ALTER TABLE "people_locales" ADD COLUMN "letter" varchar;
  -- Backfill the A-Z key for items saved before it existed (the save hook keeps it current afterwards)
  UPDATE "posts_locales" SET "letter" = upper(left(btrim("title"), 1)) WHERE "title" IS NOT NULL;
  UPDATE "events_locales" SET "letter" = upper(left(btrim("title"), 1)) WHERE "title" IS NOT NULL;
  UPDATE "resources_locales" SET "letter" = upper(left(btrim("title"), 1)) WHERE "title" IS NOT NULL;
  UPDATE "glossary_locales" SET "letter" = upper(left(btrim("title"), 1)) WHERE "title" IS NOT NULL;
  UPDATE "people_locales" SET "letter" = upper(left(btrim("title"), 1)) WHERE "title" IS NOT NULL;
  ALTER TABLE "people_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "people_rels" ADD COLUMN "tags_id" integer;
  ALTER TABLE "people_rels" ADD COLUMN "event_types_id" integer;
  ALTER TABLE "people_rels" ADD COLUMN "industries_id" integer;
  ALTER TABLE "people_rels" ADD COLUMN "resource_types_id" integer;
  ALTER TABLE "people_rels" ADD COLUMN "topics_id" integer;
  ALTER TABLE "people_rels" ADD COLUMN "departments_id" integer;
  ALTER TABLE "_people_v_locales" ADD COLUMN "version_letter" varchar;
  ALTER TABLE "_people_v_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "_people_v_rels" ADD COLUMN "tags_id" integer;
  ALTER TABLE "_people_v_rels" ADD COLUMN "event_types_id" integer;
  ALTER TABLE "_people_v_rels" ADD COLUMN "industries_id" integer;
  ALTER TABLE "_people_v_rels" ADD COLUMN "resource_types_id" integer;
  ALTER TABLE "_people_v_rels" ADD COLUMN "topics_id" integer;
  ALTER TABLE "_people_v_rels" ADD COLUMN "departments_id" integer;
  ALTER TABLE "reusable_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "reusable_rels" ADD COLUMN "tags_id" integer;
  ALTER TABLE "reusable_rels" ADD COLUMN "event_types_id" integer;
  ALTER TABLE "reusable_rels" ADD COLUMN "industries_id" integer;
  ALTER TABLE "reusable_rels" ADD COLUMN "resource_types_id" integer;
  ALTER TABLE "reusable_rels" ADD COLUMN "topics_id" integer;
  ALTER TABLE "reusable_rels" ADD COLUMN "departments_id" integer;
  ALTER TABLE "_reusable_v_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "_reusable_v_rels" ADD COLUMN "tags_id" integer;
  ALTER TABLE "_reusable_v_rels" ADD COLUMN "event_types_id" integer;
  ALTER TABLE "_reusable_v_rels" ADD COLUMN "industries_id" integer;
  ALTER TABLE "_reusable_v_rels" ADD COLUMN "resource_types_id" integer;
  ALTER TABLE "_reusable_v_rels" ADD COLUMN "topics_id" integer;
  ALTER TABLE "_reusable_v_rels" ADD COLUMN "departments_id" integer;
  ALTER TABLE "cpt_defaults_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "cpt_defaults_rels" ADD COLUMN "tags_id" integer;
  ALTER TABLE "cpt_defaults_rels" ADD COLUMN "event_types_id" integer;
  ALTER TABLE "cpt_defaults_rels" ADD COLUMN "industries_id" integer;
  ALTER TABLE "cpt_defaults_rels" ADD COLUMN "resource_types_id" integer;
  ALTER TABLE "cpt_defaults_rels" ADD COLUMN "topics_id" integer;
  ALTER TABLE "cpt_defaults_rels" ADD COLUMN "departments_id" integer;
  ALTER TABLE "pages_blocks_listing_filters" ADD CONSTRAINT "pages_blocks_listing_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_listing" ADD CONSTRAINT "pages_blocks_listing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_listing_filters" ADD CONSTRAINT "_pages_v_blocks_listing_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_listing" ADD CONSTRAINT "_pages_v_blocks_listing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_listing_filters" ADD CONSTRAINT "posts_blocks_listing_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_listing" ADD CONSTRAINT "posts_blocks_listing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_listing_filters" ADD CONSTRAINT "_posts_v_blocks_listing_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_listing" ADD CONSTRAINT "_posts_v_blocks_listing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_listing_filters" ADD CONSTRAINT "events_blocks_listing_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_listing" ADD CONSTRAINT "events_blocks_listing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_listing_filters" ADD CONSTRAINT "_events_v_blocks_listing_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_listing" ADD CONSTRAINT "_events_v_blocks_listing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_listing_filters" ADD CONSTRAINT "resources_blocks_listing_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_listing" ADD CONSTRAINT "resources_blocks_listing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_listing_filters" ADD CONSTRAINT "_resources_v_blocks_listing_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_listing" ADD CONSTRAINT "_resources_v_blocks_listing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_listing_filters" ADD CONSTRAINT "glossary_blocks_listing_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_listing" ADD CONSTRAINT "glossary_blocks_listing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_listing_filters" ADD CONSTRAINT "_glossary_v_blocks_listing_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_listing" ADD CONSTRAINT "_glossary_v_blocks_listing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_listing_filters" ADD CONSTRAINT "people_blocks_listing_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_listing" ADD CONSTRAINT "people_blocks_listing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_listing_filters" ADD CONSTRAINT "_people_v_blocks_listing_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_listing" ADD CONSTRAINT "_people_v_blocks_listing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_listing_filters" ADD CONSTRAINT "reusable_blocks_listing_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_listing" ADD CONSTRAINT "reusable_blocks_listing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_listing_filters" ADD CONSTRAINT "_reusable_v_blocks_listing_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_listing" ADD CONSTRAINT "_reusable_v_blocks_listing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_listing_filters" ADD CONSTRAINT "cpt_defaults_blocks_listing_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_listing" ADD CONSTRAINT "cpt_defaults_blocks_listing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_listing_filters_order_idx" ON "pages_blocks_listing_filters" USING btree ("_order");
  CREATE INDEX "pages_blocks_listing_filters_parent_id_idx" ON "pages_blocks_listing_filters" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_listing_filters_locale_idx" ON "pages_blocks_listing_filters" USING btree ("_locale");
  CREATE INDEX "pages_blocks_listing_order_idx" ON "pages_blocks_listing" USING btree ("_order");
  CREATE INDEX "pages_blocks_listing_parent_id_idx" ON "pages_blocks_listing" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_listing_path_idx" ON "pages_blocks_listing" USING btree ("_path");
  CREATE INDEX "pages_blocks_listing_locale_idx" ON "pages_blocks_listing" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_listing_filters_order_idx" ON "_pages_v_blocks_listing_filters" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_listing_filters_parent_id_idx" ON "_pages_v_blocks_listing_filters" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_listing_filters_locale_idx" ON "_pages_v_blocks_listing_filters" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_listing_order_idx" ON "_pages_v_blocks_listing" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_listing_parent_id_idx" ON "_pages_v_blocks_listing" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_listing_path_idx" ON "_pages_v_blocks_listing" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_listing_locale_idx" ON "_pages_v_blocks_listing" USING btree ("_locale");
  CREATE INDEX "posts_blocks_listing_filters_order_idx" ON "posts_blocks_listing_filters" USING btree ("_order");
  CREATE INDEX "posts_blocks_listing_filters_parent_id_idx" ON "posts_blocks_listing_filters" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_listing_filters_locale_idx" ON "posts_blocks_listing_filters" USING btree ("_locale");
  CREATE INDEX "posts_blocks_listing_order_idx" ON "posts_blocks_listing" USING btree ("_order");
  CREATE INDEX "posts_blocks_listing_parent_id_idx" ON "posts_blocks_listing" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_listing_path_idx" ON "posts_blocks_listing" USING btree ("_path");
  CREATE INDEX "posts_blocks_listing_locale_idx" ON "posts_blocks_listing" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_listing_filters_order_idx" ON "_posts_v_blocks_listing_filters" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_listing_filters_parent_id_idx" ON "_posts_v_blocks_listing_filters" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_listing_filters_locale_idx" ON "_posts_v_blocks_listing_filters" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_listing_order_idx" ON "_posts_v_blocks_listing" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_listing_parent_id_idx" ON "_posts_v_blocks_listing" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_listing_path_idx" ON "_posts_v_blocks_listing" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_listing_locale_idx" ON "_posts_v_blocks_listing" USING btree ("_locale");
  CREATE INDEX "events_blocks_listing_filters_order_idx" ON "events_blocks_listing_filters" USING btree ("_order");
  CREATE INDEX "events_blocks_listing_filters_parent_id_idx" ON "events_blocks_listing_filters" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_listing_filters_locale_idx" ON "events_blocks_listing_filters" USING btree ("_locale");
  CREATE INDEX "events_blocks_listing_order_idx" ON "events_blocks_listing" USING btree ("_order");
  CREATE INDEX "events_blocks_listing_parent_id_idx" ON "events_blocks_listing" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_listing_path_idx" ON "events_blocks_listing" USING btree ("_path");
  CREATE INDEX "events_blocks_listing_locale_idx" ON "events_blocks_listing" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_listing_filters_order_idx" ON "_events_v_blocks_listing_filters" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_listing_filters_parent_id_idx" ON "_events_v_blocks_listing_filters" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_listing_filters_locale_idx" ON "_events_v_blocks_listing_filters" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_listing_order_idx" ON "_events_v_blocks_listing" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_listing_parent_id_idx" ON "_events_v_blocks_listing" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_listing_path_idx" ON "_events_v_blocks_listing" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_listing_locale_idx" ON "_events_v_blocks_listing" USING btree ("_locale");
  CREATE INDEX "resources_blocks_listing_filters_order_idx" ON "resources_blocks_listing_filters" USING btree ("_order");
  CREATE INDEX "resources_blocks_listing_filters_parent_id_idx" ON "resources_blocks_listing_filters" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_listing_filters_locale_idx" ON "resources_blocks_listing_filters" USING btree ("_locale");
  CREATE INDEX "resources_blocks_listing_order_idx" ON "resources_blocks_listing" USING btree ("_order");
  CREATE INDEX "resources_blocks_listing_parent_id_idx" ON "resources_blocks_listing" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_listing_path_idx" ON "resources_blocks_listing" USING btree ("_path");
  CREATE INDEX "resources_blocks_listing_locale_idx" ON "resources_blocks_listing" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_listing_filters_order_idx" ON "_resources_v_blocks_listing_filters" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_listing_filters_parent_id_idx" ON "_resources_v_blocks_listing_filters" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_listing_filters_locale_idx" ON "_resources_v_blocks_listing_filters" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_listing_order_idx" ON "_resources_v_blocks_listing" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_listing_parent_id_idx" ON "_resources_v_blocks_listing" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_listing_path_idx" ON "_resources_v_blocks_listing" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_listing_locale_idx" ON "_resources_v_blocks_listing" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_listing_filters_order_idx" ON "glossary_blocks_listing_filters" USING btree ("_order");
  CREATE INDEX "glossary_blocks_listing_filters_parent_id_idx" ON "glossary_blocks_listing_filters" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_listing_filters_locale_idx" ON "glossary_blocks_listing_filters" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_listing_order_idx" ON "glossary_blocks_listing" USING btree ("_order");
  CREATE INDEX "glossary_blocks_listing_parent_id_idx" ON "glossary_blocks_listing" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_listing_path_idx" ON "glossary_blocks_listing" USING btree ("_path");
  CREATE INDEX "glossary_blocks_listing_locale_idx" ON "glossary_blocks_listing" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_listing_filters_order_idx" ON "_glossary_v_blocks_listing_filters" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_listing_filters_parent_id_idx" ON "_glossary_v_blocks_listing_filters" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_listing_filters_locale_idx" ON "_glossary_v_blocks_listing_filters" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_listing_order_idx" ON "_glossary_v_blocks_listing" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_listing_parent_id_idx" ON "_glossary_v_blocks_listing" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_listing_path_idx" ON "_glossary_v_blocks_listing" USING btree ("_path");
  CREATE INDEX "_glossary_v_blocks_listing_locale_idx" ON "_glossary_v_blocks_listing" USING btree ("_locale");
  CREATE INDEX "people_blocks_listing_filters_order_idx" ON "people_blocks_listing_filters" USING btree ("_order");
  CREATE INDEX "people_blocks_listing_filters_parent_id_idx" ON "people_blocks_listing_filters" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_listing_filters_locale_idx" ON "people_blocks_listing_filters" USING btree ("_locale");
  CREATE INDEX "people_blocks_listing_order_idx" ON "people_blocks_listing" USING btree ("_order");
  CREATE INDEX "people_blocks_listing_parent_id_idx" ON "people_blocks_listing" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_listing_path_idx" ON "people_blocks_listing" USING btree ("_path");
  CREATE INDEX "people_blocks_listing_locale_idx" ON "people_blocks_listing" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_listing_filters_order_idx" ON "_people_v_blocks_listing_filters" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_listing_filters_parent_id_idx" ON "_people_v_blocks_listing_filters" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_listing_filters_locale_idx" ON "_people_v_blocks_listing_filters" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_listing_order_idx" ON "_people_v_blocks_listing" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_listing_parent_id_idx" ON "_people_v_blocks_listing" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_listing_path_idx" ON "_people_v_blocks_listing" USING btree ("_path");
  CREATE INDEX "_people_v_blocks_listing_locale_idx" ON "_people_v_blocks_listing" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_listing_filters_order_idx" ON "reusable_blocks_listing_filters" USING btree ("_order");
  CREATE INDEX "reusable_blocks_listing_filters_parent_id_idx" ON "reusable_blocks_listing_filters" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_listing_filters_locale_idx" ON "reusable_blocks_listing_filters" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_listing_order_idx" ON "reusable_blocks_listing" USING btree ("_order");
  CREATE INDEX "reusable_blocks_listing_parent_id_idx" ON "reusable_blocks_listing" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_listing_path_idx" ON "reusable_blocks_listing" USING btree ("_path");
  CREATE INDEX "reusable_blocks_listing_locale_idx" ON "reusable_blocks_listing" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_listing_filters_order_idx" ON "_reusable_v_blocks_listing_filters" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_listing_filters_parent_id_idx" ON "_reusable_v_blocks_listing_filters" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_listing_filters_locale_idx" ON "_reusable_v_blocks_listing_filters" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_listing_order_idx" ON "_reusable_v_blocks_listing" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_listing_parent_id_idx" ON "_reusable_v_blocks_listing" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_listing_path_idx" ON "_reusable_v_blocks_listing" USING btree ("_path");
  CREATE INDEX "_reusable_v_blocks_listing_locale_idx" ON "_reusable_v_blocks_listing" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_listing_filters_order_idx" ON "cpt_defaults_blocks_listing_filters" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_listing_filters_parent_id_idx" ON "cpt_defaults_blocks_listing_filters" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_listing_filters_locale_idx" ON "cpt_defaults_blocks_listing_filters" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_listing_order_idx" ON "cpt_defaults_blocks_listing" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_listing_parent_id_idx" ON "cpt_defaults_blocks_listing" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_listing_path_idx" ON "cpt_defaults_blocks_listing" USING btree ("_path");
  CREATE INDEX "cpt_defaults_blocks_listing_locale_idx" ON "cpt_defaults_blocks_listing" USING btree ("_locale");
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_event_types_fk" FOREIGN KEY ("event_types_id") REFERENCES "public"."event_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_resource_types_fk" FOREIGN KEY ("resource_types_id") REFERENCES "public"."resource_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_event_types_fk" FOREIGN KEY ("event_types_id") REFERENCES "public"."event_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_resource_types_fk" FOREIGN KEY ("resource_types_id") REFERENCES "public"."resource_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_event_types_fk" FOREIGN KEY ("event_types_id") REFERENCES "public"."event_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_resource_types_fk" FOREIGN KEY ("resource_types_id") REFERENCES "public"."resource_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_event_types_fk" FOREIGN KEY ("event_types_id") REFERENCES "public"."event_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_resource_types_fk" FOREIGN KEY ("resource_types_id") REFERENCES "public"."resource_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_resource_types_fk" FOREIGN KEY ("resource_types_id") REFERENCES "public"."resource_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_resource_types_fk" FOREIGN KEY ("resource_types_id") REFERENCES "public"."resource_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_rels" ADD CONSTRAINT "resources_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_rels" ADD CONSTRAINT "resources_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_rels" ADD CONSTRAINT "resources_rels_event_types_fk" FOREIGN KEY ("event_types_id") REFERENCES "public"."event_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_rels" ADD CONSTRAINT "resources_rels_resource_types_fk" FOREIGN KEY ("resource_types_id") REFERENCES "public"."resource_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_rels" ADD CONSTRAINT "resources_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_rels" ADD CONSTRAINT "_resources_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_rels" ADD CONSTRAINT "_resources_v_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_rels" ADD CONSTRAINT "_resources_v_rels_event_types_fk" FOREIGN KEY ("event_types_id") REFERENCES "public"."event_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_rels" ADD CONSTRAINT "_resources_v_rels_resource_types_fk" FOREIGN KEY ("resource_types_id") REFERENCES "public"."resource_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_rels" ADD CONSTRAINT "_resources_v_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_rels" ADD CONSTRAINT "glossary_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_rels" ADD CONSTRAINT "glossary_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_rels" ADD CONSTRAINT "glossary_rels_event_types_fk" FOREIGN KEY ("event_types_id") REFERENCES "public"."event_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_rels" ADD CONSTRAINT "glossary_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_rels" ADD CONSTRAINT "glossary_rels_resource_types_fk" FOREIGN KEY ("resource_types_id") REFERENCES "public"."resource_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_rels" ADD CONSTRAINT "glossary_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_rels" ADD CONSTRAINT "glossary_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_rels" ADD CONSTRAINT "_glossary_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_rels" ADD CONSTRAINT "_glossary_v_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_rels" ADD CONSTRAINT "_glossary_v_rels_event_types_fk" FOREIGN KEY ("event_types_id") REFERENCES "public"."event_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_rels" ADD CONSTRAINT "_glossary_v_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_rels" ADD CONSTRAINT "_glossary_v_rels_resource_types_fk" FOREIGN KEY ("resource_types_id") REFERENCES "public"."resource_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_rels" ADD CONSTRAINT "_glossary_v_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_rels" ADD CONSTRAINT "_glossary_v_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_rels" ADD CONSTRAINT "people_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_rels" ADD CONSTRAINT "people_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_rels" ADD CONSTRAINT "people_rels_event_types_fk" FOREIGN KEY ("event_types_id") REFERENCES "public"."event_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_rels" ADD CONSTRAINT "people_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_rels" ADD CONSTRAINT "people_rels_resource_types_fk" FOREIGN KEY ("resource_types_id") REFERENCES "public"."resource_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_rels" ADD CONSTRAINT "people_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_rels" ADD CONSTRAINT "people_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_rels" ADD CONSTRAINT "_people_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_rels" ADD CONSTRAINT "_people_v_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_rels" ADD CONSTRAINT "_people_v_rels_event_types_fk" FOREIGN KEY ("event_types_id") REFERENCES "public"."event_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_rels" ADD CONSTRAINT "_people_v_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_rels" ADD CONSTRAINT "_people_v_rels_resource_types_fk" FOREIGN KEY ("resource_types_id") REFERENCES "public"."resource_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_rels" ADD CONSTRAINT "_people_v_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_rels" ADD CONSTRAINT "_people_v_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_rels" ADD CONSTRAINT "reusable_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_rels" ADD CONSTRAINT "reusable_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_rels" ADD CONSTRAINT "reusable_rels_event_types_fk" FOREIGN KEY ("event_types_id") REFERENCES "public"."event_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_rels" ADD CONSTRAINT "reusable_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_rels" ADD CONSTRAINT "reusable_rels_resource_types_fk" FOREIGN KEY ("resource_types_id") REFERENCES "public"."resource_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_rels" ADD CONSTRAINT "reusable_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_rels" ADD CONSTRAINT "reusable_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_rels" ADD CONSTRAINT "_reusable_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_rels" ADD CONSTRAINT "_reusable_v_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_rels" ADD CONSTRAINT "_reusable_v_rels_event_types_fk" FOREIGN KEY ("event_types_id") REFERENCES "public"."event_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_rels" ADD CONSTRAINT "_reusable_v_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_rels" ADD CONSTRAINT "_reusable_v_rels_resource_types_fk" FOREIGN KEY ("resource_types_id") REFERENCES "public"."resource_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_rels" ADD CONSTRAINT "_reusable_v_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_rels" ADD CONSTRAINT "_reusable_v_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_rels" ADD CONSTRAINT "cpt_defaults_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_rels" ADD CONSTRAINT "cpt_defaults_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_rels" ADD CONSTRAINT "cpt_defaults_rels_event_types_fk" FOREIGN KEY ("event_types_id") REFERENCES "public"."event_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_rels" ADD CONSTRAINT "cpt_defaults_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_rels" ADD CONSTRAINT "cpt_defaults_rels_resource_types_fk" FOREIGN KEY ("resource_types_id") REFERENCES "public"."resource_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_rels" ADD CONSTRAINT "cpt_defaults_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_rels" ADD CONSTRAINT "cpt_defaults_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_rels_categories_id_idx" ON "pages_rels" USING btree ("categories_id","locale");
  CREATE INDEX "pages_rels_tags_id_idx" ON "pages_rels" USING btree ("tags_id","locale");
  CREATE INDEX "pages_rels_event_types_id_idx" ON "pages_rels" USING btree ("event_types_id","locale");
  CREATE INDEX "pages_rels_industries_id_idx" ON "pages_rels" USING btree ("industries_id","locale");
  CREATE INDEX "pages_rels_resource_types_id_idx" ON "pages_rels" USING btree ("resource_types_id","locale");
  CREATE INDEX "pages_rels_topics_id_idx" ON "pages_rels" USING btree ("topics_id","locale");
  CREATE INDEX "pages_rels_departments_id_idx" ON "pages_rels" USING btree ("departments_id","locale");
  CREATE INDEX "_pages_v_rels_categories_id_idx" ON "_pages_v_rels" USING btree ("categories_id","locale");
  CREATE INDEX "_pages_v_rels_tags_id_idx" ON "_pages_v_rels" USING btree ("tags_id","locale");
  CREATE INDEX "_pages_v_rels_event_types_id_idx" ON "_pages_v_rels" USING btree ("event_types_id","locale");
  CREATE INDEX "_pages_v_rels_industries_id_idx" ON "_pages_v_rels" USING btree ("industries_id","locale");
  CREATE INDEX "_pages_v_rels_resource_types_id_idx" ON "_pages_v_rels" USING btree ("resource_types_id","locale");
  CREATE INDEX "_pages_v_rels_topics_id_idx" ON "_pages_v_rels" USING btree ("topics_id","locale");
  CREATE INDEX "_pages_v_rels_departments_id_idx" ON "_pages_v_rels" USING btree ("departments_id","locale");
  CREATE INDEX "posts_letter_idx" ON "posts_locales" USING btree ("letter","_locale");
  CREATE INDEX "posts_rels_event_types_id_idx" ON "posts_rels" USING btree ("event_types_id","locale");
  CREATE INDEX "posts_rels_industries_id_idx" ON "posts_rels" USING btree ("industries_id","locale");
  CREATE INDEX "posts_rels_resource_types_id_idx" ON "posts_rels" USING btree ("resource_types_id","locale");
  CREATE INDEX "posts_rels_topics_id_idx" ON "posts_rels" USING btree ("topics_id","locale");
  CREATE INDEX "posts_rels_departments_id_idx" ON "posts_rels" USING btree ("departments_id","locale");
  CREATE INDEX "_posts_v_version_version_letter_idx" ON "_posts_v_locales" USING btree ("version_letter","_locale");
  CREATE INDEX "_posts_v_rels_event_types_id_idx" ON "_posts_v_rels" USING btree ("event_types_id","locale");
  CREATE INDEX "_posts_v_rels_industries_id_idx" ON "_posts_v_rels" USING btree ("industries_id","locale");
  CREATE INDEX "_posts_v_rels_resource_types_id_idx" ON "_posts_v_rels" USING btree ("resource_types_id","locale");
  CREATE INDEX "_posts_v_rels_topics_id_idx" ON "_posts_v_rels" USING btree ("topics_id","locale");
  CREATE INDEX "_posts_v_rels_departments_id_idx" ON "_posts_v_rels" USING btree ("departments_id","locale");
  CREATE INDEX "events_letter_idx" ON "events_locales" USING btree ("letter","_locale");
  CREATE INDEX "events_rels_categories_id_idx" ON "events_rels" USING btree ("categories_id","locale");
  CREATE INDEX "events_rels_tags_id_idx" ON "events_rels" USING btree ("tags_id","locale");
  CREATE INDEX "events_rels_industries_id_idx" ON "events_rels" USING btree ("industries_id","locale");
  CREATE INDEX "events_rels_resource_types_id_idx" ON "events_rels" USING btree ("resource_types_id","locale");
  CREATE INDEX "events_rels_topics_id_idx" ON "events_rels" USING btree ("topics_id","locale");
  CREATE INDEX "events_rels_departments_id_idx" ON "events_rels" USING btree ("departments_id","locale");
  CREATE INDEX "_events_v_version_version_letter_idx" ON "_events_v_locales" USING btree ("version_letter","_locale");
  CREATE INDEX "_events_v_rels_categories_id_idx" ON "_events_v_rels" USING btree ("categories_id","locale");
  CREATE INDEX "_events_v_rels_tags_id_idx" ON "_events_v_rels" USING btree ("tags_id","locale");
  CREATE INDEX "_events_v_rels_industries_id_idx" ON "_events_v_rels" USING btree ("industries_id","locale");
  CREATE INDEX "_events_v_rels_resource_types_id_idx" ON "_events_v_rels" USING btree ("resource_types_id","locale");
  CREATE INDEX "_events_v_rels_topics_id_idx" ON "_events_v_rels" USING btree ("topics_id","locale");
  CREATE INDEX "_events_v_rels_departments_id_idx" ON "_events_v_rels" USING btree ("departments_id","locale");
  CREATE INDEX "resources_letter_idx" ON "resources_locales" USING btree ("letter","_locale");
  CREATE INDEX "resources_rels_categories_id_idx" ON "resources_rels" USING btree ("categories_id","locale");
  CREATE INDEX "resources_rels_tags_id_idx" ON "resources_rels" USING btree ("tags_id","locale");
  CREATE INDEX "resources_rels_event_types_id_idx" ON "resources_rels" USING btree ("event_types_id","locale");
  CREATE INDEX "resources_rels_resource_types_id_idx" ON "resources_rels" USING btree ("resource_types_id","locale");
  CREATE INDEX "resources_rels_departments_id_idx" ON "resources_rels" USING btree ("departments_id","locale");
  CREATE INDEX "_resources_v_version_version_letter_idx" ON "_resources_v_locales" USING btree ("version_letter","_locale");
  CREATE INDEX "_resources_v_rels_categories_id_idx" ON "_resources_v_rels" USING btree ("categories_id","locale");
  CREATE INDEX "_resources_v_rels_tags_id_idx" ON "_resources_v_rels" USING btree ("tags_id","locale");
  CREATE INDEX "_resources_v_rels_event_types_id_idx" ON "_resources_v_rels" USING btree ("event_types_id","locale");
  CREATE INDEX "_resources_v_rels_resource_types_id_idx" ON "_resources_v_rels" USING btree ("resource_types_id","locale");
  CREATE INDEX "_resources_v_rels_departments_id_idx" ON "_resources_v_rels" USING btree ("departments_id","locale");
  CREATE INDEX "glossary_letter_idx" ON "glossary_locales" USING btree ("letter","_locale");
  CREATE INDEX "glossary_rels_categories_id_idx" ON "glossary_rels" USING btree ("categories_id","locale");
  CREATE INDEX "glossary_rels_tags_id_idx" ON "glossary_rels" USING btree ("tags_id","locale");
  CREATE INDEX "glossary_rels_event_types_id_idx" ON "glossary_rels" USING btree ("event_types_id","locale");
  CREATE INDEX "glossary_rels_industries_id_idx" ON "glossary_rels" USING btree ("industries_id","locale");
  CREATE INDEX "glossary_rels_resource_types_id_idx" ON "glossary_rels" USING btree ("resource_types_id","locale");
  CREATE INDEX "glossary_rels_topics_id_idx" ON "glossary_rels" USING btree ("topics_id","locale");
  CREATE INDEX "glossary_rels_departments_id_idx" ON "glossary_rels" USING btree ("departments_id","locale");
  CREATE INDEX "_glossary_v_version_version_letter_idx" ON "_glossary_v_locales" USING btree ("version_letter","_locale");
  CREATE INDEX "_glossary_v_rels_categories_id_idx" ON "_glossary_v_rels" USING btree ("categories_id","locale");
  CREATE INDEX "_glossary_v_rels_tags_id_idx" ON "_glossary_v_rels" USING btree ("tags_id","locale");
  CREATE INDEX "_glossary_v_rels_event_types_id_idx" ON "_glossary_v_rels" USING btree ("event_types_id","locale");
  CREATE INDEX "_glossary_v_rels_industries_id_idx" ON "_glossary_v_rels" USING btree ("industries_id","locale");
  CREATE INDEX "_glossary_v_rels_resource_types_id_idx" ON "_glossary_v_rels" USING btree ("resource_types_id","locale");
  CREATE INDEX "_glossary_v_rels_topics_id_idx" ON "_glossary_v_rels" USING btree ("topics_id","locale");
  CREATE INDEX "_glossary_v_rels_departments_id_idx" ON "_glossary_v_rels" USING btree ("departments_id","locale");
  CREATE INDEX "people_letter_idx" ON "people_locales" USING btree ("letter","_locale");
  CREATE INDEX "people_rels_categories_id_idx" ON "people_rels" USING btree ("categories_id","locale");
  CREATE INDEX "people_rels_tags_id_idx" ON "people_rels" USING btree ("tags_id","locale");
  CREATE INDEX "people_rels_event_types_id_idx" ON "people_rels" USING btree ("event_types_id","locale");
  CREATE INDEX "people_rels_industries_id_idx" ON "people_rels" USING btree ("industries_id","locale");
  CREATE INDEX "people_rels_resource_types_id_idx" ON "people_rels" USING btree ("resource_types_id","locale");
  CREATE INDEX "people_rels_topics_id_idx" ON "people_rels" USING btree ("topics_id","locale");
  CREATE INDEX "people_rels_departments_id_idx" ON "people_rels" USING btree ("departments_id","locale");
  CREATE INDEX "_people_v_version_version_letter_idx" ON "_people_v_locales" USING btree ("version_letter","_locale");
  CREATE INDEX "_people_v_rels_categories_id_idx" ON "_people_v_rels" USING btree ("categories_id","locale");
  CREATE INDEX "_people_v_rels_tags_id_idx" ON "_people_v_rels" USING btree ("tags_id","locale");
  CREATE INDEX "_people_v_rels_event_types_id_idx" ON "_people_v_rels" USING btree ("event_types_id","locale");
  CREATE INDEX "_people_v_rels_industries_id_idx" ON "_people_v_rels" USING btree ("industries_id","locale");
  CREATE INDEX "_people_v_rels_resource_types_id_idx" ON "_people_v_rels" USING btree ("resource_types_id","locale");
  CREATE INDEX "_people_v_rels_topics_id_idx" ON "_people_v_rels" USING btree ("topics_id","locale");
  CREATE INDEX "_people_v_rels_departments_id_idx" ON "_people_v_rels" USING btree ("departments_id","locale");
  CREATE INDEX "reusable_rels_categories_id_idx" ON "reusable_rels" USING btree ("categories_id","locale");
  CREATE INDEX "reusable_rels_tags_id_idx" ON "reusable_rels" USING btree ("tags_id","locale");
  CREATE INDEX "reusable_rels_event_types_id_idx" ON "reusable_rels" USING btree ("event_types_id","locale");
  CREATE INDEX "reusable_rels_industries_id_idx" ON "reusable_rels" USING btree ("industries_id","locale");
  CREATE INDEX "reusable_rels_resource_types_id_idx" ON "reusable_rels" USING btree ("resource_types_id","locale");
  CREATE INDEX "reusable_rels_topics_id_idx" ON "reusable_rels" USING btree ("topics_id","locale");
  CREATE INDEX "reusable_rels_departments_id_idx" ON "reusable_rels" USING btree ("departments_id","locale");
  CREATE INDEX "_reusable_v_rels_categories_id_idx" ON "_reusable_v_rels" USING btree ("categories_id","locale");
  CREATE INDEX "_reusable_v_rels_tags_id_idx" ON "_reusable_v_rels" USING btree ("tags_id","locale");
  CREATE INDEX "_reusable_v_rels_event_types_id_idx" ON "_reusable_v_rels" USING btree ("event_types_id","locale");
  CREATE INDEX "_reusable_v_rels_industries_id_idx" ON "_reusable_v_rels" USING btree ("industries_id","locale");
  CREATE INDEX "_reusable_v_rels_resource_types_id_idx" ON "_reusable_v_rels" USING btree ("resource_types_id","locale");
  CREATE INDEX "_reusable_v_rels_topics_id_idx" ON "_reusable_v_rels" USING btree ("topics_id","locale");
  CREATE INDEX "_reusable_v_rels_departments_id_idx" ON "_reusable_v_rels" USING btree ("departments_id","locale");
  CREATE INDEX "cpt_defaults_rels_categories_id_idx" ON "cpt_defaults_rels" USING btree ("categories_id","locale");
  CREATE INDEX "cpt_defaults_rels_tags_id_idx" ON "cpt_defaults_rels" USING btree ("tags_id","locale");
  CREATE INDEX "cpt_defaults_rels_event_types_id_idx" ON "cpt_defaults_rels" USING btree ("event_types_id","locale");
  CREATE INDEX "cpt_defaults_rels_industries_id_idx" ON "cpt_defaults_rels" USING btree ("industries_id","locale");
  CREATE INDEX "cpt_defaults_rels_resource_types_id_idx" ON "cpt_defaults_rels" USING btree ("resource_types_id","locale");
  CREATE INDEX "cpt_defaults_rels_topics_id_idx" ON "cpt_defaults_rels" USING btree ("topics_id","locale");
  CREATE INDEX "cpt_defaults_rels_departments_id_idx" ON "cpt_defaults_rels" USING btree ("departments_id","locale");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_listing_filters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_listing" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_listing_filters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_listing" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_listing_filters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_listing" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_listing_filters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_listing" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_listing_filters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_listing" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_listing_filters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_listing" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_listing_filters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_listing" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_listing_filters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_listing" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_listing_filters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_listing" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_listing_filters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_listing" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_listing_filters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_listing" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_listing_filters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_listing" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_listing_filters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_listing" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_listing_filters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_listing" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_listing_filters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_listing" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_listing_filters" CASCADE;
  DROP TABLE "pages_blocks_listing" CASCADE;
  DROP TABLE "_pages_v_blocks_listing_filters" CASCADE;
  DROP TABLE "_pages_v_blocks_listing" CASCADE;
  DROP TABLE "posts_blocks_listing_filters" CASCADE;
  DROP TABLE "posts_blocks_listing" CASCADE;
  DROP TABLE "_posts_v_blocks_listing_filters" CASCADE;
  DROP TABLE "_posts_v_blocks_listing" CASCADE;
  DROP TABLE "events_blocks_listing_filters" CASCADE;
  DROP TABLE "events_blocks_listing" CASCADE;
  DROP TABLE "_events_v_blocks_listing_filters" CASCADE;
  DROP TABLE "_events_v_blocks_listing" CASCADE;
  DROP TABLE "resources_blocks_listing_filters" CASCADE;
  DROP TABLE "resources_blocks_listing" CASCADE;
  DROP TABLE "_resources_v_blocks_listing_filters" CASCADE;
  DROP TABLE "_resources_v_blocks_listing" CASCADE;
  DROP TABLE "glossary_blocks_listing_filters" CASCADE;
  DROP TABLE "glossary_blocks_listing" CASCADE;
  DROP TABLE "_glossary_v_blocks_listing_filters" CASCADE;
  DROP TABLE "_glossary_v_blocks_listing" CASCADE;
  DROP TABLE "people_blocks_listing_filters" CASCADE;
  DROP TABLE "people_blocks_listing" CASCADE;
  DROP TABLE "_people_v_blocks_listing_filters" CASCADE;
  DROP TABLE "_people_v_blocks_listing" CASCADE;
  DROP TABLE "reusable_blocks_listing_filters" CASCADE;
  DROP TABLE "reusable_blocks_listing" CASCADE;
  DROP TABLE "_reusable_v_blocks_listing_filters" CASCADE;
  DROP TABLE "_reusable_v_blocks_listing" CASCADE;
  DROP TABLE "cpt_defaults_blocks_listing_filters" CASCADE;
  DROP TABLE "cpt_defaults_blocks_listing" CASCADE;
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_categories_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_tags_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_event_types_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_industries_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_resource_types_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_topics_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_departments_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_categories_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_tags_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_event_types_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_industries_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_resource_types_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_topics_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_departments_fk";
  
  ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_event_types_fk";
  
  ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_industries_fk";
  
  ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_resource_types_fk";
  
  ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_topics_fk";
  
  ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_departments_fk";
  
  ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_event_types_fk";
  
  ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_industries_fk";
  
  ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_resource_types_fk";
  
  ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_topics_fk";
  
  ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_departments_fk";
  
  ALTER TABLE "events_rels" DROP CONSTRAINT "events_rels_categories_fk";
  
  ALTER TABLE "events_rels" DROP CONSTRAINT "events_rels_tags_fk";
  
  ALTER TABLE "events_rels" DROP CONSTRAINT "events_rels_industries_fk";
  
  ALTER TABLE "events_rels" DROP CONSTRAINT "events_rels_resource_types_fk";
  
  ALTER TABLE "events_rels" DROP CONSTRAINT "events_rels_topics_fk";
  
  ALTER TABLE "events_rels" DROP CONSTRAINT "events_rels_departments_fk";
  
  ALTER TABLE "_events_v_rels" DROP CONSTRAINT "_events_v_rels_categories_fk";
  
  ALTER TABLE "_events_v_rels" DROP CONSTRAINT "_events_v_rels_tags_fk";
  
  ALTER TABLE "_events_v_rels" DROP CONSTRAINT "_events_v_rels_industries_fk";
  
  ALTER TABLE "_events_v_rels" DROP CONSTRAINT "_events_v_rels_resource_types_fk";
  
  ALTER TABLE "_events_v_rels" DROP CONSTRAINT "_events_v_rels_topics_fk";
  
  ALTER TABLE "_events_v_rels" DROP CONSTRAINT "_events_v_rels_departments_fk";
  
  ALTER TABLE "resources_rels" DROP CONSTRAINT "resources_rels_categories_fk";
  
  ALTER TABLE "resources_rels" DROP CONSTRAINT "resources_rels_tags_fk";
  
  ALTER TABLE "resources_rels" DROP CONSTRAINT "resources_rels_event_types_fk";
  
  ALTER TABLE "resources_rels" DROP CONSTRAINT "resources_rels_resource_types_fk";
  
  ALTER TABLE "resources_rels" DROP CONSTRAINT "resources_rels_departments_fk";
  
  ALTER TABLE "_resources_v_rels" DROP CONSTRAINT "_resources_v_rels_categories_fk";
  
  ALTER TABLE "_resources_v_rels" DROP CONSTRAINT "_resources_v_rels_tags_fk";
  
  ALTER TABLE "_resources_v_rels" DROP CONSTRAINT "_resources_v_rels_event_types_fk";
  
  ALTER TABLE "_resources_v_rels" DROP CONSTRAINT "_resources_v_rels_resource_types_fk";
  
  ALTER TABLE "_resources_v_rels" DROP CONSTRAINT "_resources_v_rels_departments_fk";
  
  ALTER TABLE "glossary_rels" DROP CONSTRAINT "glossary_rels_categories_fk";
  
  ALTER TABLE "glossary_rels" DROP CONSTRAINT "glossary_rels_tags_fk";
  
  ALTER TABLE "glossary_rels" DROP CONSTRAINT "glossary_rels_event_types_fk";
  
  ALTER TABLE "glossary_rels" DROP CONSTRAINT "glossary_rels_industries_fk";
  
  ALTER TABLE "glossary_rels" DROP CONSTRAINT "glossary_rels_resource_types_fk";
  
  ALTER TABLE "glossary_rels" DROP CONSTRAINT "glossary_rels_topics_fk";
  
  ALTER TABLE "glossary_rels" DROP CONSTRAINT "glossary_rels_departments_fk";
  
  ALTER TABLE "_glossary_v_rels" DROP CONSTRAINT "_glossary_v_rels_categories_fk";
  
  ALTER TABLE "_glossary_v_rels" DROP CONSTRAINT "_glossary_v_rels_tags_fk";
  
  ALTER TABLE "_glossary_v_rels" DROP CONSTRAINT "_glossary_v_rels_event_types_fk";
  
  ALTER TABLE "_glossary_v_rels" DROP CONSTRAINT "_glossary_v_rels_industries_fk";
  
  ALTER TABLE "_glossary_v_rels" DROP CONSTRAINT "_glossary_v_rels_resource_types_fk";
  
  ALTER TABLE "_glossary_v_rels" DROP CONSTRAINT "_glossary_v_rels_topics_fk";
  
  ALTER TABLE "_glossary_v_rels" DROP CONSTRAINT "_glossary_v_rels_departments_fk";
  
  ALTER TABLE "people_rels" DROP CONSTRAINT "people_rels_categories_fk";
  
  ALTER TABLE "people_rels" DROP CONSTRAINT "people_rels_tags_fk";
  
  ALTER TABLE "people_rels" DROP CONSTRAINT "people_rels_event_types_fk";
  
  ALTER TABLE "people_rels" DROP CONSTRAINT "people_rels_industries_fk";
  
  ALTER TABLE "people_rels" DROP CONSTRAINT "people_rels_resource_types_fk";
  
  ALTER TABLE "people_rels" DROP CONSTRAINT "people_rels_topics_fk";
  
  ALTER TABLE "people_rels" DROP CONSTRAINT "people_rels_departments_fk";
  
  ALTER TABLE "_people_v_rels" DROP CONSTRAINT "_people_v_rels_categories_fk";
  
  ALTER TABLE "_people_v_rels" DROP CONSTRAINT "_people_v_rels_tags_fk";
  
  ALTER TABLE "_people_v_rels" DROP CONSTRAINT "_people_v_rels_event_types_fk";
  
  ALTER TABLE "_people_v_rels" DROP CONSTRAINT "_people_v_rels_industries_fk";
  
  ALTER TABLE "_people_v_rels" DROP CONSTRAINT "_people_v_rels_resource_types_fk";
  
  ALTER TABLE "_people_v_rels" DROP CONSTRAINT "_people_v_rels_topics_fk";
  
  ALTER TABLE "_people_v_rels" DROP CONSTRAINT "_people_v_rels_departments_fk";
  
  ALTER TABLE "reusable_rels" DROP CONSTRAINT "reusable_rels_categories_fk";
  
  ALTER TABLE "reusable_rels" DROP CONSTRAINT "reusable_rels_tags_fk";
  
  ALTER TABLE "reusable_rels" DROP CONSTRAINT "reusable_rels_event_types_fk";
  
  ALTER TABLE "reusable_rels" DROP CONSTRAINT "reusable_rels_industries_fk";
  
  ALTER TABLE "reusable_rels" DROP CONSTRAINT "reusable_rels_resource_types_fk";
  
  ALTER TABLE "reusable_rels" DROP CONSTRAINT "reusable_rels_topics_fk";
  
  ALTER TABLE "reusable_rels" DROP CONSTRAINT "reusable_rels_departments_fk";
  
  ALTER TABLE "_reusable_v_rels" DROP CONSTRAINT "_reusable_v_rels_categories_fk";
  
  ALTER TABLE "_reusable_v_rels" DROP CONSTRAINT "_reusable_v_rels_tags_fk";
  
  ALTER TABLE "_reusable_v_rels" DROP CONSTRAINT "_reusable_v_rels_event_types_fk";
  
  ALTER TABLE "_reusable_v_rels" DROP CONSTRAINT "_reusable_v_rels_industries_fk";
  
  ALTER TABLE "_reusable_v_rels" DROP CONSTRAINT "_reusable_v_rels_resource_types_fk";
  
  ALTER TABLE "_reusable_v_rels" DROP CONSTRAINT "_reusable_v_rels_topics_fk";
  
  ALTER TABLE "_reusable_v_rels" DROP CONSTRAINT "_reusable_v_rels_departments_fk";
  
  ALTER TABLE "cpt_defaults_rels" DROP CONSTRAINT "cpt_defaults_rels_categories_fk";
  
  ALTER TABLE "cpt_defaults_rels" DROP CONSTRAINT "cpt_defaults_rels_tags_fk";
  
  ALTER TABLE "cpt_defaults_rels" DROP CONSTRAINT "cpt_defaults_rels_event_types_fk";
  
  ALTER TABLE "cpt_defaults_rels" DROP CONSTRAINT "cpt_defaults_rels_industries_fk";
  
  ALTER TABLE "cpt_defaults_rels" DROP CONSTRAINT "cpt_defaults_rels_resource_types_fk";
  
  ALTER TABLE "cpt_defaults_rels" DROP CONSTRAINT "cpt_defaults_rels_topics_fk";
  
  ALTER TABLE "cpt_defaults_rels" DROP CONSTRAINT "cpt_defaults_rels_departments_fk";
  
  DROP INDEX "pages_rels_categories_id_idx";
  DROP INDEX "pages_rels_tags_id_idx";
  DROP INDEX "pages_rels_event_types_id_idx";
  DROP INDEX "pages_rels_industries_id_idx";
  DROP INDEX "pages_rels_resource_types_id_idx";
  DROP INDEX "pages_rels_topics_id_idx";
  DROP INDEX "pages_rels_departments_id_idx";
  DROP INDEX "_pages_v_rels_categories_id_idx";
  DROP INDEX "_pages_v_rels_tags_id_idx";
  DROP INDEX "_pages_v_rels_event_types_id_idx";
  DROP INDEX "_pages_v_rels_industries_id_idx";
  DROP INDEX "_pages_v_rels_resource_types_id_idx";
  DROP INDEX "_pages_v_rels_topics_id_idx";
  DROP INDEX "_pages_v_rels_departments_id_idx";
  DROP INDEX "posts_letter_idx";
  DROP INDEX "posts_rels_event_types_id_idx";
  DROP INDEX "posts_rels_industries_id_idx";
  DROP INDEX "posts_rels_resource_types_id_idx";
  DROP INDEX "posts_rels_topics_id_idx";
  DROP INDEX "posts_rels_departments_id_idx";
  DROP INDEX "_posts_v_version_version_letter_idx";
  DROP INDEX "_posts_v_rels_event_types_id_idx";
  DROP INDEX "_posts_v_rels_industries_id_idx";
  DROP INDEX "_posts_v_rels_resource_types_id_idx";
  DROP INDEX "_posts_v_rels_topics_id_idx";
  DROP INDEX "_posts_v_rels_departments_id_idx";
  DROP INDEX "events_letter_idx";
  DROP INDEX "events_rels_categories_id_idx";
  DROP INDEX "events_rels_tags_id_idx";
  DROP INDEX "events_rels_industries_id_idx";
  DROP INDEX "events_rels_resource_types_id_idx";
  DROP INDEX "events_rels_topics_id_idx";
  DROP INDEX "events_rels_departments_id_idx";
  DROP INDEX "_events_v_version_version_letter_idx";
  DROP INDEX "_events_v_rels_categories_id_idx";
  DROP INDEX "_events_v_rels_tags_id_idx";
  DROP INDEX "_events_v_rels_industries_id_idx";
  DROP INDEX "_events_v_rels_resource_types_id_idx";
  DROP INDEX "_events_v_rels_topics_id_idx";
  DROP INDEX "_events_v_rels_departments_id_idx";
  DROP INDEX "resources_letter_idx";
  DROP INDEX "resources_rels_categories_id_idx";
  DROP INDEX "resources_rels_tags_id_idx";
  DROP INDEX "resources_rels_event_types_id_idx";
  DROP INDEX "resources_rels_resource_types_id_idx";
  DROP INDEX "resources_rels_departments_id_idx";
  DROP INDEX "_resources_v_version_version_letter_idx";
  DROP INDEX "_resources_v_rels_categories_id_idx";
  DROP INDEX "_resources_v_rels_tags_id_idx";
  DROP INDEX "_resources_v_rels_event_types_id_idx";
  DROP INDEX "_resources_v_rels_resource_types_id_idx";
  DROP INDEX "_resources_v_rels_departments_id_idx";
  DROP INDEX "glossary_letter_idx";
  DROP INDEX "glossary_rels_categories_id_idx";
  DROP INDEX "glossary_rels_tags_id_idx";
  DROP INDEX "glossary_rels_event_types_id_idx";
  DROP INDEX "glossary_rels_industries_id_idx";
  DROP INDEX "glossary_rels_resource_types_id_idx";
  DROP INDEX "glossary_rels_topics_id_idx";
  DROP INDEX "glossary_rels_departments_id_idx";
  DROP INDEX "_glossary_v_version_version_letter_idx";
  DROP INDEX "_glossary_v_rels_categories_id_idx";
  DROP INDEX "_glossary_v_rels_tags_id_idx";
  DROP INDEX "_glossary_v_rels_event_types_id_idx";
  DROP INDEX "_glossary_v_rels_industries_id_idx";
  DROP INDEX "_glossary_v_rels_resource_types_id_idx";
  DROP INDEX "_glossary_v_rels_topics_id_idx";
  DROP INDEX "_glossary_v_rels_departments_id_idx";
  DROP INDEX "people_letter_idx";
  DROP INDEX "people_rels_categories_id_idx";
  DROP INDEX "people_rels_tags_id_idx";
  DROP INDEX "people_rels_event_types_id_idx";
  DROP INDEX "people_rels_industries_id_idx";
  DROP INDEX "people_rels_resource_types_id_idx";
  DROP INDEX "people_rels_topics_id_idx";
  DROP INDEX "people_rels_departments_id_idx";
  DROP INDEX "_people_v_version_version_letter_idx";
  DROP INDEX "_people_v_rels_categories_id_idx";
  DROP INDEX "_people_v_rels_tags_id_idx";
  DROP INDEX "_people_v_rels_event_types_id_idx";
  DROP INDEX "_people_v_rels_industries_id_idx";
  DROP INDEX "_people_v_rels_resource_types_id_idx";
  DROP INDEX "_people_v_rels_topics_id_idx";
  DROP INDEX "_people_v_rels_departments_id_idx";
  DROP INDEX "reusable_rels_categories_id_idx";
  DROP INDEX "reusable_rels_tags_id_idx";
  DROP INDEX "reusable_rels_event_types_id_idx";
  DROP INDEX "reusable_rels_industries_id_idx";
  DROP INDEX "reusable_rels_resource_types_id_idx";
  DROP INDEX "reusable_rels_topics_id_idx";
  DROP INDEX "reusable_rels_departments_id_idx";
  DROP INDEX "_reusable_v_rels_categories_id_idx";
  DROP INDEX "_reusable_v_rels_tags_id_idx";
  DROP INDEX "_reusable_v_rels_event_types_id_idx";
  DROP INDEX "_reusable_v_rels_industries_id_idx";
  DROP INDEX "_reusable_v_rels_resource_types_id_idx";
  DROP INDEX "_reusable_v_rels_topics_id_idx";
  DROP INDEX "_reusable_v_rels_departments_id_idx";
  DROP INDEX "cpt_defaults_rels_categories_id_idx";
  DROP INDEX "cpt_defaults_rels_tags_id_idx";
  DROP INDEX "cpt_defaults_rels_event_types_id_idx";
  DROP INDEX "cpt_defaults_rels_industries_id_idx";
  DROP INDEX "cpt_defaults_rels_resource_types_id_idx";
  DROP INDEX "cpt_defaults_rels_topics_id_idx";
  DROP INDEX "cpt_defaults_rels_departments_id_idx";
  ALTER TABLE "pages_rels" DROP COLUMN "categories_id";
  ALTER TABLE "pages_rels" DROP COLUMN "tags_id";
  ALTER TABLE "pages_rels" DROP COLUMN "event_types_id";
  ALTER TABLE "pages_rels" DROP COLUMN "industries_id";
  ALTER TABLE "pages_rels" DROP COLUMN "resource_types_id";
  ALTER TABLE "pages_rels" DROP COLUMN "topics_id";
  ALTER TABLE "pages_rels" DROP COLUMN "departments_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN "categories_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN "tags_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN "event_types_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN "industries_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN "resource_types_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN "topics_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN "departments_id";
  ALTER TABLE "posts_locales" DROP COLUMN "letter";
  ALTER TABLE "posts_rels" DROP COLUMN "event_types_id";
  ALTER TABLE "posts_rels" DROP COLUMN "industries_id";
  ALTER TABLE "posts_rels" DROP COLUMN "resource_types_id";
  ALTER TABLE "posts_rels" DROP COLUMN "topics_id";
  ALTER TABLE "posts_rels" DROP COLUMN "departments_id";
  ALTER TABLE "_posts_v_locales" DROP COLUMN "version_letter";
  ALTER TABLE "_posts_v_rels" DROP COLUMN "event_types_id";
  ALTER TABLE "_posts_v_rels" DROP COLUMN "industries_id";
  ALTER TABLE "_posts_v_rels" DROP COLUMN "resource_types_id";
  ALTER TABLE "_posts_v_rels" DROP COLUMN "topics_id";
  ALTER TABLE "_posts_v_rels" DROP COLUMN "departments_id";
  ALTER TABLE "events_locales" DROP COLUMN "letter";
  ALTER TABLE "events_rels" DROP COLUMN "categories_id";
  ALTER TABLE "events_rels" DROP COLUMN "tags_id";
  ALTER TABLE "events_rels" DROP COLUMN "industries_id";
  ALTER TABLE "events_rels" DROP COLUMN "resource_types_id";
  ALTER TABLE "events_rels" DROP COLUMN "topics_id";
  ALTER TABLE "events_rels" DROP COLUMN "departments_id";
  ALTER TABLE "_events_v_locales" DROP COLUMN "version_letter";
  ALTER TABLE "_events_v_rels" DROP COLUMN "categories_id";
  ALTER TABLE "_events_v_rels" DROP COLUMN "tags_id";
  ALTER TABLE "_events_v_rels" DROP COLUMN "industries_id";
  ALTER TABLE "_events_v_rels" DROP COLUMN "resource_types_id";
  ALTER TABLE "_events_v_rels" DROP COLUMN "topics_id";
  ALTER TABLE "_events_v_rels" DROP COLUMN "departments_id";
  ALTER TABLE "resources_locales" DROP COLUMN "letter";
  ALTER TABLE "resources_rels" DROP COLUMN "categories_id";
  ALTER TABLE "resources_rels" DROP COLUMN "tags_id";
  ALTER TABLE "resources_rels" DROP COLUMN "event_types_id";
  ALTER TABLE "resources_rels" DROP COLUMN "resource_types_id";
  ALTER TABLE "resources_rels" DROP COLUMN "departments_id";
  ALTER TABLE "_resources_v_locales" DROP COLUMN "version_letter";
  ALTER TABLE "_resources_v_rels" DROP COLUMN "categories_id";
  ALTER TABLE "_resources_v_rels" DROP COLUMN "tags_id";
  ALTER TABLE "_resources_v_rels" DROP COLUMN "event_types_id";
  ALTER TABLE "_resources_v_rels" DROP COLUMN "resource_types_id";
  ALTER TABLE "_resources_v_rels" DROP COLUMN "departments_id";
  ALTER TABLE "glossary_locales" DROP COLUMN "letter";
  ALTER TABLE "glossary_rels" DROP COLUMN "categories_id";
  ALTER TABLE "glossary_rels" DROP COLUMN "tags_id";
  ALTER TABLE "glossary_rels" DROP COLUMN "event_types_id";
  ALTER TABLE "glossary_rels" DROP COLUMN "industries_id";
  ALTER TABLE "glossary_rels" DROP COLUMN "resource_types_id";
  ALTER TABLE "glossary_rels" DROP COLUMN "topics_id";
  ALTER TABLE "glossary_rels" DROP COLUMN "departments_id";
  ALTER TABLE "_glossary_v_locales" DROP COLUMN "version_letter";
  ALTER TABLE "_glossary_v_rels" DROP COLUMN "categories_id";
  ALTER TABLE "_glossary_v_rels" DROP COLUMN "tags_id";
  ALTER TABLE "_glossary_v_rels" DROP COLUMN "event_types_id";
  ALTER TABLE "_glossary_v_rels" DROP COLUMN "industries_id";
  ALTER TABLE "_glossary_v_rels" DROP COLUMN "resource_types_id";
  ALTER TABLE "_glossary_v_rels" DROP COLUMN "topics_id";
  ALTER TABLE "_glossary_v_rels" DROP COLUMN "departments_id";
  ALTER TABLE "people_locales" DROP COLUMN "letter";
  ALTER TABLE "people_rels" DROP COLUMN "categories_id";
  ALTER TABLE "people_rels" DROP COLUMN "tags_id";
  ALTER TABLE "people_rels" DROP COLUMN "event_types_id";
  ALTER TABLE "people_rels" DROP COLUMN "industries_id";
  ALTER TABLE "people_rels" DROP COLUMN "resource_types_id";
  ALTER TABLE "people_rels" DROP COLUMN "topics_id";
  ALTER TABLE "people_rels" DROP COLUMN "departments_id";
  ALTER TABLE "_people_v_locales" DROP COLUMN "version_letter";
  ALTER TABLE "_people_v_rels" DROP COLUMN "categories_id";
  ALTER TABLE "_people_v_rels" DROP COLUMN "tags_id";
  ALTER TABLE "_people_v_rels" DROP COLUMN "event_types_id";
  ALTER TABLE "_people_v_rels" DROP COLUMN "industries_id";
  ALTER TABLE "_people_v_rels" DROP COLUMN "resource_types_id";
  ALTER TABLE "_people_v_rels" DROP COLUMN "topics_id";
  ALTER TABLE "_people_v_rels" DROP COLUMN "departments_id";
  ALTER TABLE "reusable_rels" DROP COLUMN "categories_id";
  ALTER TABLE "reusable_rels" DROP COLUMN "tags_id";
  ALTER TABLE "reusable_rels" DROP COLUMN "event_types_id";
  ALTER TABLE "reusable_rels" DROP COLUMN "industries_id";
  ALTER TABLE "reusable_rels" DROP COLUMN "resource_types_id";
  ALTER TABLE "reusable_rels" DROP COLUMN "topics_id";
  ALTER TABLE "reusable_rels" DROP COLUMN "departments_id";
  ALTER TABLE "_reusable_v_rels" DROP COLUMN "categories_id";
  ALTER TABLE "_reusable_v_rels" DROP COLUMN "tags_id";
  ALTER TABLE "_reusable_v_rels" DROP COLUMN "event_types_id";
  ALTER TABLE "_reusable_v_rels" DROP COLUMN "industries_id";
  ALTER TABLE "_reusable_v_rels" DROP COLUMN "resource_types_id";
  ALTER TABLE "_reusable_v_rels" DROP COLUMN "topics_id";
  ALTER TABLE "_reusable_v_rels" DROP COLUMN "departments_id";
  ALTER TABLE "cpt_defaults_rels" DROP COLUMN "categories_id";
  ALTER TABLE "cpt_defaults_rels" DROP COLUMN "tags_id";
  ALTER TABLE "cpt_defaults_rels" DROP COLUMN "event_types_id";
  ALTER TABLE "cpt_defaults_rels" DROP COLUMN "industries_id";
  ALTER TABLE "cpt_defaults_rels" DROP COLUMN "resource_types_id";
  ALTER TABLE "cpt_defaults_rels" DROP COLUMN "topics_id";
  ALTER TABLE "cpt_defaults_rels" DROP COLUMN "departments_id";
  DROP TYPE "public"."enum_pages_blocks_listing_filters_type";
  DROP TYPE "public"."enum_pages_blocks_listing_filters_taxonomy";
  DROP TYPE "public"."enum_pages_blocks_listing_filters_display";
  DROP TYPE "public"."enum_pages_blocks_listing_collection";
  DROP TYPE "public"."enum_pages_blocks_listing_when";
  DROP TYPE "public"."enum_pages_blocks_listing_default_sort";
  DROP TYPE "public"."enum_pages_blocks_listing_card_style";
  DROP TYPE "public"."enum_pages_blocks_listing_layout";
  DROP TYPE "public"."enum_pages_blocks_listing_paging";
  DROP TYPE "public"."enum_pages_blocks_listing_style_background";
  DROP TYPE "public"."enum_pages_blocks_listing_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_listing_style_align";
  DROP TYPE "public"."enum__pages_v_blocks_listing_filters_type";
  DROP TYPE "public"."enum__pages_v_blocks_listing_filters_taxonomy";
  DROP TYPE "public"."enum__pages_v_blocks_listing_filters_display";
  DROP TYPE "public"."enum__pages_v_blocks_listing_collection";
  DROP TYPE "public"."enum__pages_v_blocks_listing_when";
  DROP TYPE "public"."enum__pages_v_blocks_listing_default_sort";
  DROP TYPE "public"."enum__pages_v_blocks_listing_card_style";
  DROP TYPE "public"."enum__pages_v_blocks_listing_layout";
  DROP TYPE "public"."enum__pages_v_blocks_listing_paging";
  DROP TYPE "public"."enum__pages_v_blocks_listing_style_background";
  DROP TYPE "public"."enum__pages_v_blocks_listing_style_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_listing_style_align";
  DROP TYPE "public"."enum_posts_blocks_listing_filters_type";
  DROP TYPE "public"."enum_posts_blocks_listing_filters_taxonomy";
  DROP TYPE "public"."enum_posts_blocks_listing_filters_display";
  DROP TYPE "public"."enum_posts_blocks_listing_collection";
  DROP TYPE "public"."enum_posts_blocks_listing_when";
  DROP TYPE "public"."enum_posts_blocks_listing_default_sort";
  DROP TYPE "public"."enum_posts_blocks_listing_card_style";
  DROP TYPE "public"."enum_posts_blocks_listing_layout";
  DROP TYPE "public"."enum_posts_blocks_listing_paging";
  DROP TYPE "public"."enum_posts_blocks_listing_style_background";
  DROP TYPE "public"."enum_posts_blocks_listing_style_spacing";
  DROP TYPE "public"."enum_posts_blocks_listing_style_align";
  DROP TYPE "public"."enum__posts_v_blocks_listing_filters_type";
  DROP TYPE "public"."enum__posts_v_blocks_listing_filters_taxonomy";
  DROP TYPE "public"."enum__posts_v_blocks_listing_filters_display";
  DROP TYPE "public"."enum__posts_v_blocks_listing_collection";
  DROP TYPE "public"."enum__posts_v_blocks_listing_when";
  DROP TYPE "public"."enum__posts_v_blocks_listing_default_sort";
  DROP TYPE "public"."enum__posts_v_blocks_listing_card_style";
  DROP TYPE "public"."enum__posts_v_blocks_listing_layout";
  DROP TYPE "public"."enum__posts_v_blocks_listing_paging";
  DROP TYPE "public"."enum__posts_v_blocks_listing_style_background";
  DROP TYPE "public"."enum__posts_v_blocks_listing_style_spacing";
  DROP TYPE "public"."enum__posts_v_blocks_listing_style_align";
  DROP TYPE "public"."enum_events_blocks_listing_filters_type";
  DROP TYPE "public"."enum_events_blocks_listing_filters_taxonomy";
  DROP TYPE "public"."enum_events_blocks_listing_filters_display";
  DROP TYPE "public"."enum_events_blocks_listing_collection";
  DROP TYPE "public"."enum_events_blocks_listing_when";
  DROP TYPE "public"."enum_events_blocks_listing_default_sort";
  DROP TYPE "public"."enum_events_blocks_listing_card_style";
  DROP TYPE "public"."enum_events_blocks_listing_layout";
  DROP TYPE "public"."enum_events_blocks_listing_paging";
  DROP TYPE "public"."enum_events_blocks_listing_style_background";
  DROP TYPE "public"."enum_events_blocks_listing_style_spacing";
  DROP TYPE "public"."enum_events_blocks_listing_style_align";
  DROP TYPE "public"."enum__events_v_blocks_listing_filters_type";
  DROP TYPE "public"."enum__events_v_blocks_listing_filters_taxonomy";
  DROP TYPE "public"."enum__events_v_blocks_listing_filters_display";
  DROP TYPE "public"."enum__events_v_blocks_listing_collection";
  DROP TYPE "public"."enum__events_v_blocks_listing_when";
  DROP TYPE "public"."enum__events_v_blocks_listing_default_sort";
  DROP TYPE "public"."enum__events_v_blocks_listing_card_style";
  DROP TYPE "public"."enum__events_v_blocks_listing_layout";
  DROP TYPE "public"."enum__events_v_blocks_listing_paging";
  DROP TYPE "public"."enum__events_v_blocks_listing_style_background";
  DROP TYPE "public"."enum__events_v_blocks_listing_style_spacing";
  DROP TYPE "public"."enum__events_v_blocks_listing_style_align";
  DROP TYPE "public"."enum_resources_blocks_listing_filters_type";
  DROP TYPE "public"."enum_resources_blocks_listing_filters_taxonomy";
  DROP TYPE "public"."enum_resources_blocks_listing_filters_display";
  DROP TYPE "public"."enum_resources_blocks_listing_collection";
  DROP TYPE "public"."enum_resources_blocks_listing_when";
  DROP TYPE "public"."enum_resources_blocks_listing_default_sort";
  DROP TYPE "public"."enum_resources_blocks_listing_card_style";
  DROP TYPE "public"."enum_resources_blocks_listing_layout";
  DROP TYPE "public"."enum_resources_blocks_listing_paging";
  DROP TYPE "public"."enum_resources_blocks_listing_style_background";
  DROP TYPE "public"."enum_resources_blocks_listing_style_spacing";
  DROP TYPE "public"."enum_resources_blocks_listing_style_align";
  DROP TYPE "public"."enum__resources_v_blocks_listing_filters_type";
  DROP TYPE "public"."enum__resources_v_blocks_listing_filters_taxonomy";
  DROP TYPE "public"."enum__resources_v_blocks_listing_filters_display";
  DROP TYPE "public"."enum__resources_v_blocks_listing_collection";
  DROP TYPE "public"."enum__resources_v_blocks_listing_when";
  DROP TYPE "public"."enum__resources_v_blocks_listing_default_sort";
  DROP TYPE "public"."enum__resources_v_blocks_listing_card_style";
  DROP TYPE "public"."enum__resources_v_blocks_listing_layout";
  DROP TYPE "public"."enum__resources_v_blocks_listing_paging";
  DROP TYPE "public"."enum__resources_v_blocks_listing_style_background";
  DROP TYPE "public"."enum__resources_v_blocks_listing_style_spacing";
  DROP TYPE "public"."enum__resources_v_blocks_listing_style_align";
  DROP TYPE "public"."enum_glossary_blocks_listing_filters_type";
  DROP TYPE "public"."enum_glossary_blocks_listing_filters_taxonomy";
  DROP TYPE "public"."enum_glossary_blocks_listing_filters_display";
  DROP TYPE "public"."enum_glossary_blocks_listing_collection";
  DROP TYPE "public"."enum_glossary_blocks_listing_when";
  DROP TYPE "public"."enum_glossary_blocks_listing_default_sort";
  DROP TYPE "public"."enum_glossary_blocks_listing_card_style";
  DROP TYPE "public"."enum_glossary_blocks_listing_layout";
  DROP TYPE "public"."enum_glossary_blocks_listing_paging";
  DROP TYPE "public"."enum_glossary_blocks_listing_style_background";
  DROP TYPE "public"."enum_glossary_blocks_listing_style_spacing";
  DROP TYPE "public"."enum_glossary_blocks_listing_style_align";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_filters_type";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_filters_taxonomy";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_filters_display";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_collection";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_when";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_default_sort";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_card_style";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_layout";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_paging";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_style_background";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_style_spacing";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_style_align";
  DROP TYPE "public"."enum_people_blocks_listing_filters_type";
  DROP TYPE "public"."enum_people_blocks_listing_filters_taxonomy";
  DROP TYPE "public"."enum_people_blocks_listing_filters_display";
  DROP TYPE "public"."enum_people_blocks_listing_collection";
  DROP TYPE "public"."enum_people_blocks_listing_when";
  DROP TYPE "public"."enum_people_blocks_listing_default_sort";
  DROP TYPE "public"."enum_people_blocks_listing_card_style";
  DROP TYPE "public"."enum_people_blocks_listing_layout";
  DROP TYPE "public"."enum_people_blocks_listing_paging";
  DROP TYPE "public"."enum_people_blocks_listing_style_background";
  DROP TYPE "public"."enum_people_blocks_listing_style_spacing";
  DROP TYPE "public"."enum_people_blocks_listing_style_align";
  DROP TYPE "public"."enum__people_v_blocks_listing_filters_type";
  DROP TYPE "public"."enum__people_v_blocks_listing_filters_taxonomy";
  DROP TYPE "public"."enum__people_v_blocks_listing_filters_display";
  DROP TYPE "public"."enum__people_v_blocks_listing_collection";
  DROP TYPE "public"."enum__people_v_blocks_listing_when";
  DROP TYPE "public"."enum__people_v_blocks_listing_default_sort";
  DROP TYPE "public"."enum__people_v_blocks_listing_card_style";
  DROP TYPE "public"."enum__people_v_blocks_listing_layout";
  DROP TYPE "public"."enum__people_v_blocks_listing_paging";
  DROP TYPE "public"."enum__people_v_blocks_listing_style_background";
  DROP TYPE "public"."enum__people_v_blocks_listing_style_spacing";
  DROP TYPE "public"."enum__people_v_blocks_listing_style_align";
  DROP TYPE "public"."enum_reusable_blocks_listing_filters_type";
  DROP TYPE "public"."enum_reusable_blocks_listing_filters_taxonomy";
  DROP TYPE "public"."enum_reusable_blocks_listing_filters_display";
  DROP TYPE "public"."enum_reusable_blocks_listing_collection";
  DROP TYPE "public"."enum_reusable_blocks_listing_when";
  DROP TYPE "public"."enum_reusable_blocks_listing_default_sort";
  DROP TYPE "public"."enum_reusable_blocks_listing_card_style";
  DROP TYPE "public"."enum_reusable_blocks_listing_layout";
  DROP TYPE "public"."enum_reusable_blocks_listing_paging";
  DROP TYPE "public"."enum_reusable_blocks_listing_style_background";
  DROP TYPE "public"."enum_reusable_blocks_listing_style_spacing";
  DROP TYPE "public"."enum_reusable_blocks_listing_style_align";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_filters_type";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_filters_taxonomy";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_filters_display";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_collection";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_when";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_default_sort";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_card_style";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_layout";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_paging";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_style_background";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_style_spacing";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_style_align";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_filters_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_filters_taxonomy";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_filters_display";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_collection";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_when";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_default_sort";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_card_style";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_layout";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_paging";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_style_background";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_style_spacing";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_style_align";`)
}
