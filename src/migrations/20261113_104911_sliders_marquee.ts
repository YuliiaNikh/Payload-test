import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_listing_slider_per_view" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_pages_blocks_logos_display" AS ENUM('row', 'marquee');
  CREATE TYPE "public"."enum_pages_blocks_logos_speed" AS ENUM('slow', 'normal', 'fast');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_slider_per_view" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_logos_display" AS ENUM('row', 'marquee');
  CREATE TYPE "public"."enum__pages_v_blocks_logos_speed" AS ENUM('slow', 'normal', 'fast');
  CREATE TYPE "public"."enum_posts_blocks_listing_slider_per_view" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_posts_blocks_logos_display" AS ENUM('row', 'marquee');
  CREATE TYPE "public"."enum_posts_blocks_logos_speed" AS ENUM('slow', 'normal', 'fast');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_slider_per_view" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__posts_v_blocks_logos_display" AS ENUM('row', 'marquee');
  CREATE TYPE "public"."enum__posts_v_blocks_logos_speed" AS ENUM('slow', 'normal', 'fast');
  CREATE TYPE "public"."enum_events_blocks_listing_slider_per_view" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_events_blocks_logos_display" AS ENUM('row', 'marquee');
  CREATE TYPE "public"."enum_events_blocks_logos_speed" AS ENUM('slow', 'normal', 'fast');
  CREATE TYPE "public"."enum__events_v_blocks_listing_slider_per_view" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__events_v_blocks_logos_display" AS ENUM('row', 'marquee');
  CREATE TYPE "public"."enum__events_v_blocks_logos_speed" AS ENUM('slow', 'normal', 'fast');
  CREATE TYPE "public"."enum_resources_blocks_listing_slider_per_view" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_resources_blocks_logos_display" AS ENUM('row', 'marquee');
  CREATE TYPE "public"."enum_resources_blocks_logos_speed" AS ENUM('slow', 'normal', 'fast');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_slider_per_view" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__resources_v_blocks_logos_display" AS ENUM('row', 'marquee');
  CREATE TYPE "public"."enum__resources_v_blocks_logos_speed" AS ENUM('slow', 'normal', 'fast');
  CREATE TYPE "public"."enum_glossary_blocks_listing_slider_per_view" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_glossary_blocks_logos_display" AS ENUM('row', 'marquee');
  CREATE TYPE "public"."enum_glossary_blocks_logos_speed" AS ENUM('slow', 'normal', 'fast');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_slider_per_view" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__glossary_v_blocks_logos_display" AS ENUM('row', 'marquee');
  CREATE TYPE "public"."enum__glossary_v_blocks_logos_speed" AS ENUM('slow', 'normal', 'fast');
  CREATE TYPE "public"."enum_people_blocks_listing_slider_per_view" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_people_blocks_logos_display" AS ENUM('row', 'marquee');
  CREATE TYPE "public"."enum_people_blocks_logos_speed" AS ENUM('slow', 'normal', 'fast');
  CREATE TYPE "public"."enum__people_v_blocks_listing_slider_per_view" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__people_v_blocks_logos_display" AS ENUM('row', 'marquee');
  CREATE TYPE "public"."enum__people_v_blocks_logos_speed" AS ENUM('slow', 'normal', 'fast');
  CREATE TYPE "public"."enum_reusable_blocks_listing_slider_per_view" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_reusable_blocks_logos_display" AS ENUM('row', 'marquee');
  CREATE TYPE "public"."enum_reusable_blocks_logos_speed" AS ENUM('slow', 'normal', 'fast');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_slider_per_view" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__reusable_v_blocks_logos_display" AS ENUM('row', 'marquee');
  CREATE TYPE "public"."enum__reusable_v_blocks_logos_speed" AS ENUM('slow', 'normal', 'fast');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_slider_per_view" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_logos_display" AS ENUM('row', 'marquee');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_logos_speed" AS ENUM('slow', 'normal', 'fast');
  ALTER TYPE "public"."enum_pages_blocks_listing_card_style" ADD VALUE 'feature';
  ALTER TYPE "public"."enum__pages_v_blocks_listing_card_style" ADD VALUE 'feature';
  ALTER TYPE "public"."enum_posts_blocks_listing_card_style" ADD VALUE 'feature';
  ALTER TYPE "public"."enum__posts_v_blocks_listing_card_style" ADD VALUE 'feature';
  ALTER TYPE "public"."enum_events_blocks_listing_card_style" ADD VALUE 'feature';
  ALTER TYPE "public"."enum__events_v_blocks_listing_card_style" ADD VALUE 'feature';
  ALTER TYPE "public"."enum_resources_blocks_listing_card_style" ADD VALUE 'feature';
  ALTER TYPE "public"."enum__resources_v_blocks_listing_card_style" ADD VALUE 'feature';
  ALTER TYPE "public"."enum_glossary_blocks_listing_card_style" ADD VALUE 'feature';
  ALTER TYPE "public"."enum__glossary_v_blocks_listing_card_style" ADD VALUE 'feature';
  ALTER TYPE "public"."enum_people_blocks_listing_card_style" ADD VALUE 'feature';
  ALTER TYPE "public"."enum__people_v_blocks_listing_card_style" ADD VALUE 'feature';
  ALTER TYPE "public"."enum_reusable_blocks_listing_card_style" ADD VALUE 'feature';
  ALTER TYPE "public"."enum__reusable_v_blocks_listing_card_style" ADD VALUE 'feature';
  ALTER TYPE "public"."enum_cpt_defaults_blocks_listing_card_style" ADD VALUE 'feature';
  DROP TABLE "pages_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "pages_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "pages_blocks_dynamic_field" CASCADE;
  DROP TABLE "_pages_v_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "_pages_v_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "_pages_v_blocks_dynamic_field" CASCADE;
  DROP TABLE "posts_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "posts_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "posts_blocks_dynamic_field" CASCADE;
  DROP TABLE "_posts_v_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "_posts_v_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "_posts_v_blocks_dynamic_field" CASCADE;
  DROP TABLE "events_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "events_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "events_blocks_dynamic_field" CASCADE;
  DROP TABLE "_events_v_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "_events_v_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "_events_v_blocks_dynamic_field" CASCADE;
  DROP TABLE "resources_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "resources_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "resources_blocks_dynamic_field" CASCADE;
  DROP TABLE "_resources_v_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "_resources_v_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "_resources_v_blocks_dynamic_field" CASCADE;
  DROP TABLE "glossary_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "glossary_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "glossary_blocks_dynamic_field" CASCADE;
  DROP TABLE "_glossary_v_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "_glossary_v_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "_glossary_v_blocks_dynamic_field" CASCADE;
  DROP TABLE "people_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "people_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "people_blocks_dynamic_field" CASCADE;
  DROP TABLE "_people_v_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "_people_v_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "_people_v_blocks_dynamic_field" CASCADE;
  DROP TABLE "reusable_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "reusable_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "reusable_blocks_dynamic_field" CASCADE;
  DROP TABLE "_reusable_v_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "_reusable_v_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "_reusable_v_blocks_dynamic_field" CASCADE;
  DROP TABLE "cpt_defaults_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "cpt_defaults_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "cpt_defaults_blocks_dynamic_field" CASCADE;
  ALTER TABLE "pages_blocks_listing" ADD COLUMN "slider_per_view" "enum_pages_blocks_listing_slider_per_view" DEFAULT '3';
  ALTER TABLE "pages_blocks_listing" ADD COLUMN "slider_arrows" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_listing" ADD COLUMN "slider_dots" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_listing" ADD COLUMN "slider_full_width" boolean;
  ALTER TABLE "pages_blocks_listing" ADD COLUMN "slider_autoplay" boolean;
  ALTER TABLE "pages_blocks_listing" ADD COLUMN "slider_interval" numeric DEFAULT 5;
  ALTER TABLE "pages_blocks_logos" ADD COLUMN "display" "enum_pages_blocks_logos_display" DEFAULT 'row';
  ALTER TABLE "pages_blocks_logos" ADD COLUMN "speed" "enum_pages_blocks_logos_speed" DEFAULT 'normal';
  ALTER TABLE "_pages_v_blocks_listing" ADD COLUMN "slider_per_view" "enum__pages_v_blocks_listing_slider_per_view" DEFAULT '3';
  ALTER TABLE "_pages_v_blocks_listing" ADD COLUMN "slider_arrows" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_listing" ADD COLUMN "slider_dots" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_listing" ADD COLUMN "slider_full_width" boolean;
  ALTER TABLE "_pages_v_blocks_listing" ADD COLUMN "slider_autoplay" boolean;
  ALTER TABLE "_pages_v_blocks_listing" ADD COLUMN "slider_interval" numeric DEFAULT 5;
  ALTER TABLE "_pages_v_blocks_logos" ADD COLUMN "display" "enum__pages_v_blocks_logos_display" DEFAULT 'row';
  ALTER TABLE "_pages_v_blocks_logos" ADD COLUMN "speed" "enum__pages_v_blocks_logos_speed" DEFAULT 'normal';
  ALTER TABLE "posts_blocks_listing" ADD COLUMN "slider_per_view" "enum_posts_blocks_listing_slider_per_view" DEFAULT '3';
  ALTER TABLE "posts_blocks_listing" ADD COLUMN "slider_arrows" boolean DEFAULT true;
  ALTER TABLE "posts_blocks_listing" ADD COLUMN "slider_dots" boolean DEFAULT false;
  ALTER TABLE "posts_blocks_listing" ADD COLUMN "slider_full_width" boolean;
  ALTER TABLE "posts_blocks_listing" ADD COLUMN "slider_autoplay" boolean;
  ALTER TABLE "posts_blocks_listing" ADD COLUMN "slider_interval" numeric DEFAULT 5;
  ALTER TABLE "posts_blocks_logos" ADD COLUMN "display" "enum_posts_blocks_logos_display" DEFAULT 'row';
  ALTER TABLE "posts_blocks_logos" ADD COLUMN "speed" "enum_posts_blocks_logos_speed" DEFAULT 'normal';
  ALTER TABLE "_posts_v_blocks_listing" ADD COLUMN "slider_per_view" "enum__posts_v_blocks_listing_slider_per_view" DEFAULT '3';
  ALTER TABLE "_posts_v_blocks_listing" ADD COLUMN "slider_arrows" boolean DEFAULT true;
  ALTER TABLE "_posts_v_blocks_listing" ADD COLUMN "slider_dots" boolean DEFAULT false;
  ALTER TABLE "_posts_v_blocks_listing" ADD COLUMN "slider_full_width" boolean;
  ALTER TABLE "_posts_v_blocks_listing" ADD COLUMN "slider_autoplay" boolean;
  ALTER TABLE "_posts_v_blocks_listing" ADD COLUMN "slider_interval" numeric DEFAULT 5;
  ALTER TABLE "_posts_v_blocks_logos" ADD COLUMN "display" "enum__posts_v_blocks_logos_display" DEFAULT 'row';
  ALTER TABLE "_posts_v_blocks_logos" ADD COLUMN "speed" "enum__posts_v_blocks_logos_speed" DEFAULT 'normal';
  ALTER TABLE "events_blocks_listing" ADD COLUMN "slider_per_view" "enum_events_blocks_listing_slider_per_view" DEFAULT '3';
  ALTER TABLE "events_blocks_listing" ADD COLUMN "slider_arrows" boolean DEFAULT true;
  ALTER TABLE "events_blocks_listing" ADD COLUMN "slider_dots" boolean DEFAULT false;
  ALTER TABLE "events_blocks_listing" ADD COLUMN "slider_full_width" boolean;
  ALTER TABLE "events_blocks_listing" ADD COLUMN "slider_autoplay" boolean;
  ALTER TABLE "events_blocks_listing" ADD COLUMN "slider_interval" numeric DEFAULT 5;
  ALTER TABLE "events_blocks_logos" ADD COLUMN "display" "enum_events_blocks_logos_display" DEFAULT 'row';
  ALTER TABLE "events_blocks_logos" ADD COLUMN "speed" "enum_events_blocks_logos_speed" DEFAULT 'normal';
  ALTER TABLE "_events_v_blocks_listing" ADD COLUMN "slider_per_view" "enum__events_v_blocks_listing_slider_per_view" DEFAULT '3';
  ALTER TABLE "_events_v_blocks_listing" ADD COLUMN "slider_arrows" boolean DEFAULT true;
  ALTER TABLE "_events_v_blocks_listing" ADD COLUMN "slider_dots" boolean DEFAULT false;
  ALTER TABLE "_events_v_blocks_listing" ADD COLUMN "slider_full_width" boolean;
  ALTER TABLE "_events_v_blocks_listing" ADD COLUMN "slider_autoplay" boolean;
  ALTER TABLE "_events_v_blocks_listing" ADD COLUMN "slider_interval" numeric DEFAULT 5;
  ALTER TABLE "_events_v_blocks_logos" ADD COLUMN "display" "enum__events_v_blocks_logos_display" DEFAULT 'row';
  ALTER TABLE "_events_v_blocks_logos" ADD COLUMN "speed" "enum__events_v_blocks_logos_speed" DEFAULT 'normal';
  ALTER TABLE "resources_blocks_listing" ADD COLUMN "slider_per_view" "enum_resources_blocks_listing_slider_per_view" DEFAULT '3';
  ALTER TABLE "resources_blocks_listing" ADD COLUMN "slider_arrows" boolean DEFAULT true;
  ALTER TABLE "resources_blocks_listing" ADD COLUMN "slider_dots" boolean DEFAULT false;
  ALTER TABLE "resources_blocks_listing" ADD COLUMN "slider_full_width" boolean;
  ALTER TABLE "resources_blocks_listing" ADD COLUMN "slider_autoplay" boolean;
  ALTER TABLE "resources_blocks_listing" ADD COLUMN "slider_interval" numeric DEFAULT 5;
  ALTER TABLE "resources_blocks_logos" ADD COLUMN "display" "enum_resources_blocks_logos_display" DEFAULT 'row';
  ALTER TABLE "resources_blocks_logos" ADD COLUMN "speed" "enum_resources_blocks_logos_speed" DEFAULT 'normal';
  ALTER TABLE "_resources_v_blocks_listing" ADD COLUMN "slider_per_view" "enum__resources_v_blocks_listing_slider_per_view" DEFAULT '3';
  ALTER TABLE "_resources_v_blocks_listing" ADD COLUMN "slider_arrows" boolean DEFAULT true;
  ALTER TABLE "_resources_v_blocks_listing" ADD COLUMN "slider_dots" boolean DEFAULT false;
  ALTER TABLE "_resources_v_blocks_listing" ADD COLUMN "slider_full_width" boolean;
  ALTER TABLE "_resources_v_blocks_listing" ADD COLUMN "slider_autoplay" boolean;
  ALTER TABLE "_resources_v_blocks_listing" ADD COLUMN "slider_interval" numeric DEFAULT 5;
  ALTER TABLE "_resources_v_blocks_logos" ADD COLUMN "display" "enum__resources_v_blocks_logos_display" DEFAULT 'row';
  ALTER TABLE "_resources_v_blocks_logos" ADD COLUMN "speed" "enum__resources_v_blocks_logos_speed" DEFAULT 'normal';
  ALTER TABLE "glossary_blocks_listing" ADD COLUMN "slider_per_view" "enum_glossary_blocks_listing_slider_per_view" DEFAULT '3';
  ALTER TABLE "glossary_blocks_listing" ADD COLUMN "slider_arrows" boolean DEFAULT true;
  ALTER TABLE "glossary_blocks_listing" ADD COLUMN "slider_dots" boolean DEFAULT false;
  ALTER TABLE "glossary_blocks_listing" ADD COLUMN "slider_full_width" boolean;
  ALTER TABLE "glossary_blocks_listing" ADD COLUMN "slider_autoplay" boolean;
  ALTER TABLE "glossary_blocks_listing" ADD COLUMN "slider_interval" numeric DEFAULT 5;
  ALTER TABLE "glossary_blocks_logos" ADD COLUMN "display" "enum_glossary_blocks_logos_display" DEFAULT 'row';
  ALTER TABLE "glossary_blocks_logos" ADD COLUMN "speed" "enum_glossary_blocks_logos_speed" DEFAULT 'normal';
  ALTER TABLE "_glossary_v_blocks_listing" ADD COLUMN "slider_per_view" "enum__glossary_v_blocks_listing_slider_per_view" DEFAULT '3';
  ALTER TABLE "_glossary_v_blocks_listing" ADD COLUMN "slider_arrows" boolean DEFAULT true;
  ALTER TABLE "_glossary_v_blocks_listing" ADD COLUMN "slider_dots" boolean DEFAULT false;
  ALTER TABLE "_glossary_v_blocks_listing" ADD COLUMN "slider_full_width" boolean;
  ALTER TABLE "_glossary_v_blocks_listing" ADD COLUMN "slider_autoplay" boolean;
  ALTER TABLE "_glossary_v_blocks_listing" ADD COLUMN "slider_interval" numeric DEFAULT 5;
  ALTER TABLE "_glossary_v_blocks_logos" ADD COLUMN "display" "enum__glossary_v_blocks_logos_display" DEFAULT 'row';
  ALTER TABLE "_glossary_v_blocks_logos" ADD COLUMN "speed" "enum__glossary_v_blocks_logos_speed" DEFAULT 'normal';
  ALTER TABLE "people_blocks_listing" ADD COLUMN "slider_per_view" "enum_people_blocks_listing_slider_per_view" DEFAULT '3';
  ALTER TABLE "people_blocks_listing" ADD COLUMN "slider_arrows" boolean DEFAULT true;
  ALTER TABLE "people_blocks_listing" ADD COLUMN "slider_dots" boolean DEFAULT false;
  ALTER TABLE "people_blocks_listing" ADD COLUMN "slider_full_width" boolean;
  ALTER TABLE "people_blocks_listing" ADD COLUMN "slider_autoplay" boolean;
  ALTER TABLE "people_blocks_listing" ADD COLUMN "slider_interval" numeric DEFAULT 5;
  ALTER TABLE "people_blocks_logos" ADD COLUMN "display" "enum_people_blocks_logos_display" DEFAULT 'row';
  ALTER TABLE "people_blocks_logos" ADD COLUMN "speed" "enum_people_blocks_logos_speed" DEFAULT 'normal';
  ALTER TABLE "_people_v_blocks_listing" ADD COLUMN "slider_per_view" "enum__people_v_blocks_listing_slider_per_view" DEFAULT '3';
  ALTER TABLE "_people_v_blocks_listing" ADD COLUMN "slider_arrows" boolean DEFAULT true;
  ALTER TABLE "_people_v_blocks_listing" ADD COLUMN "slider_dots" boolean DEFAULT false;
  ALTER TABLE "_people_v_blocks_listing" ADD COLUMN "slider_full_width" boolean;
  ALTER TABLE "_people_v_blocks_listing" ADD COLUMN "slider_autoplay" boolean;
  ALTER TABLE "_people_v_blocks_listing" ADD COLUMN "slider_interval" numeric DEFAULT 5;
  ALTER TABLE "_people_v_blocks_logos" ADD COLUMN "display" "enum__people_v_blocks_logos_display" DEFAULT 'row';
  ALTER TABLE "_people_v_blocks_logos" ADD COLUMN "speed" "enum__people_v_blocks_logos_speed" DEFAULT 'normal';
  ALTER TABLE "reusable_blocks_listing" ADD COLUMN "slider_per_view" "enum_reusable_blocks_listing_slider_per_view" DEFAULT '3';
  ALTER TABLE "reusable_blocks_listing" ADD COLUMN "slider_arrows" boolean DEFAULT true;
  ALTER TABLE "reusable_blocks_listing" ADD COLUMN "slider_dots" boolean DEFAULT false;
  ALTER TABLE "reusable_blocks_listing" ADD COLUMN "slider_full_width" boolean;
  ALTER TABLE "reusable_blocks_listing" ADD COLUMN "slider_autoplay" boolean;
  ALTER TABLE "reusable_blocks_listing" ADD COLUMN "slider_interval" numeric DEFAULT 5;
  ALTER TABLE "reusable_blocks_logos" ADD COLUMN "display" "enum_reusable_blocks_logos_display" DEFAULT 'row';
  ALTER TABLE "reusable_blocks_logos" ADD COLUMN "speed" "enum_reusable_blocks_logos_speed" DEFAULT 'normal';
  ALTER TABLE "_reusable_v_blocks_listing" ADD COLUMN "slider_per_view" "enum__reusable_v_blocks_listing_slider_per_view" DEFAULT '3';
  ALTER TABLE "_reusable_v_blocks_listing" ADD COLUMN "slider_arrows" boolean DEFAULT true;
  ALTER TABLE "_reusable_v_blocks_listing" ADD COLUMN "slider_dots" boolean DEFAULT false;
  ALTER TABLE "_reusable_v_blocks_listing" ADD COLUMN "slider_full_width" boolean;
  ALTER TABLE "_reusable_v_blocks_listing" ADD COLUMN "slider_autoplay" boolean;
  ALTER TABLE "_reusable_v_blocks_listing" ADD COLUMN "slider_interval" numeric DEFAULT 5;
  ALTER TABLE "_reusable_v_blocks_logos" ADD COLUMN "display" "enum__reusable_v_blocks_logos_display" DEFAULT 'row';
  ALTER TABLE "_reusable_v_blocks_logos" ADD COLUMN "speed" "enum__reusable_v_blocks_logos_speed" DEFAULT 'normal';
  ALTER TABLE "cpt_defaults_blocks_listing" ADD COLUMN "slider_per_view" "enum_cpt_defaults_blocks_listing_slider_per_view" DEFAULT '3';
  ALTER TABLE "cpt_defaults_blocks_listing" ADD COLUMN "slider_arrows" boolean DEFAULT true;
  ALTER TABLE "cpt_defaults_blocks_listing" ADD COLUMN "slider_dots" boolean DEFAULT false;
  ALTER TABLE "cpt_defaults_blocks_listing" ADD COLUMN "slider_full_width" boolean;
  ALTER TABLE "cpt_defaults_blocks_listing" ADD COLUMN "slider_autoplay" boolean;
  ALTER TABLE "cpt_defaults_blocks_listing" ADD COLUMN "slider_interval" numeric DEFAULT 5;
  ALTER TABLE "cpt_defaults_blocks_logos" ADD COLUMN "display" "enum_cpt_defaults_blocks_logos_display" DEFAULT 'row';
  ALTER TABLE "cpt_defaults_blocks_logos" ADD COLUMN "speed" "enum_cpt_defaults_blocks_logos_speed" DEFAULT 'normal';
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_field";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_format";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_field";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_format";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_field";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_format";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_field";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_format";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_field";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_format";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_field";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_format";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_field";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_format";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_field";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_format";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_field";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_format";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_field";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_format";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_field";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_format";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_field";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_format";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_field";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_format";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_field";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_format";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_field";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_format";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_match";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TABLE "pages_blocks_dynamic_field_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_dynamic_field_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_dynamic_field_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_dynamic_field_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_pages_blocks_dynamic_field_vis_rules_field_name",
  	"field_operator" "enum_pages_blocks_dynamic_field_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_pages_blocks_dynamic_field_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_pages_blocks_dynamic_field_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "pages_blocks_dynamic_field" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"field" "enum_pages_blocks_dynamic_field_field",
  	"format" "enum_pages_blocks_dynamic_field_format" DEFAULT 'text',
  	"style_background" "enum_pages_blocks_dynamic_field_style_background" DEFAULT 'default',
  	"style_spacing" "enum_pages_blocks_dynamic_field_style_spacing" DEFAULT 'md',
  	"style_align" "enum_pages_blocks_dynamic_field_style_align" DEFAULT 'start',
  	"vis_match" "enum_pages_blocks_dynamic_field_vis_match" DEFAULT 'all',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dynamic_field_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__pages_v_blocks_dynamic_field_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_dynamic_field_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_dynamic_field_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__pages_v_blocks_dynamic_field_vis_rules_field_name",
  	"field_operator" "enum__pages_v_blocks_dynamic_field_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__pages_v_blocks_dynamic_field_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__pages_v_blocks_dynamic_field_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dynamic_field" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"field" "enum__pages_v_blocks_dynamic_field_field",
  	"format" "enum__pages_v_blocks_dynamic_field_format" DEFAULT 'text',
  	"style_background" "enum__pages_v_blocks_dynamic_field_style_background" DEFAULT 'default',
  	"style_spacing" "enum__pages_v_blocks_dynamic_field_style_spacing" DEFAULT 'md',
  	"style_align" "enum__pages_v_blocks_dynamic_field_style_align" DEFAULT 'start',
  	"vis_match" "enum__pages_v_blocks_dynamic_field_vis_match" DEFAULT 'all',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_dynamic_field_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_posts_blocks_dynamic_field_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_dynamic_field_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_posts_blocks_dynamic_field_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_posts_blocks_dynamic_field_vis_rules_field_name",
  	"field_operator" "enum_posts_blocks_dynamic_field_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_posts_blocks_dynamic_field_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_posts_blocks_dynamic_field_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "posts_blocks_dynamic_field" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"field" "enum_posts_blocks_dynamic_field_field",
  	"format" "enum_posts_blocks_dynamic_field_format" DEFAULT 'text',
  	"style_background" "enum_posts_blocks_dynamic_field_style_background" DEFAULT 'default',
  	"style_spacing" "enum_posts_blocks_dynamic_field_style_spacing" DEFAULT 'md',
  	"style_align" "enum_posts_blocks_dynamic_field_style_align" DEFAULT 'start',
  	"vis_match" "enum_posts_blocks_dynamic_field_vis_match" DEFAULT 'all',
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_dynamic_field_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__posts_v_blocks_dynamic_field_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_dynamic_field_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__posts_v_blocks_dynamic_field_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__posts_v_blocks_dynamic_field_vis_rules_field_name",
  	"field_operator" "enum__posts_v_blocks_dynamic_field_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__posts_v_blocks_dynamic_field_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__posts_v_blocks_dynamic_field_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_dynamic_field" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"field" "enum__posts_v_blocks_dynamic_field_field",
  	"format" "enum__posts_v_blocks_dynamic_field_format" DEFAULT 'text',
  	"style_background" "enum__posts_v_blocks_dynamic_field_style_background" DEFAULT 'default',
  	"style_spacing" "enum__posts_v_blocks_dynamic_field_style_spacing" DEFAULT 'md',
  	"style_align" "enum__posts_v_blocks_dynamic_field_style_align" DEFAULT 'start',
  	"vis_match" "enum__posts_v_blocks_dynamic_field_vis_match" DEFAULT 'all',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_dynamic_field_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_events_blocks_dynamic_field_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "events_blocks_dynamic_field_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_events_blocks_dynamic_field_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_events_blocks_dynamic_field_vis_rules_field_name",
  	"field_operator" "enum_events_blocks_dynamic_field_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_events_blocks_dynamic_field_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_events_blocks_dynamic_field_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "events_blocks_dynamic_field" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"field" "enum_events_blocks_dynamic_field_field",
  	"format" "enum_events_blocks_dynamic_field_format" DEFAULT 'text',
  	"style_background" "enum_events_blocks_dynamic_field_style_background" DEFAULT 'default',
  	"style_spacing" "enum_events_blocks_dynamic_field_style_spacing" DEFAULT 'md',
  	"style_align" "enum_events_blocks_dynamic_field_style_align" DEFAULT 'start',
  	"vis_match" "enum_events_blocks_dynamic_field_vis_match" DEFAULT 'all',
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_dynamic_field_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__events_v_blocks_dynamic_field_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_events_v_blocks_dynamic_field_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__events_v_blocks_dynamic_field_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__events_v_blocks_dynamic_field_vis_rules_field_name",
  	"field_operator" "enum__events_v_blocks_dynamic_field_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__events_v_blocks_dynamic_field_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__events_v_blocks_dynamic_field_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_dynamic_field" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"field" "enum__events_v_blocks_dynamic_field_field",
  	"format" "enum__events_v_blocks_dynamic_field_format" DEFAULT 'text',
  	"style_background" "enum__events_v_blocks_dynamic_field_style_background" DEFAULT 'default',
  	"style_spacing" "enum__events_v_blocks_dynamic_field_style_spacing" DEFAULT 'md',
  	"style_align" "enum__events_v_blocks_dynamic_field_style_align" DEFAULT 'start',
  	"vis_match" "enum__events_v_blocks_dynamic_field_vis_match" DEFAULT 'all',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_dynamic_field_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_resources_blocks_dynamic_field_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "resources_blocks_dynamic_field_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_resources_blocks_dynamic_field_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_resources_blocks_dynamic_field_vis_rules_field_name",
  	"field_operator" "enum_resources_blocks_dynamic_field_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_resources_blocks_dynamic_field_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_resources_blocks_dynamic_field_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "resources_blocks_dynamic_field" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"field" "enum_resources_blocks_dynamic_field_field",
  	"format" "enum_resources_blocks_dynamic_field_format" DEFAULT 'text',
  	"style_background" "enum_resources_blocks_dynamic_field_style_background" DEFAULT 'default',
  	"style_spacing" "enum_resources_blocks_dynamic_field_style_spacing" DEFAULT 'md',
  	"style_align" "enum_resources_blocks_dynamic_field_style_align" DEFAULT 'start',
  	"vis_match" "enum_resources_blocks_dynamic_field_vis_match" DEFAULT 'all',
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_dynamic_field_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__resources_v_blocks_dynamic_field_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_resources_v_blocks_dynamic_field_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__resources_v_blocks_dynamic_field_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__resources_v_blocks_dynamic_field_vis_rules_field_name",
  	"field_operator" "enum__resources_v_blocks_dynamic_field_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__resources_v_blocks_dynamic_field_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__resources_v_blocks_dynamic_field_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_dynamic_field" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"field" "enum__resources_v_blocks_dynamic_field_field",
  	"format" "enum__resources_v_blocks_dynamic_field_format" DEFAULT 'text',
  	"style_background" "enum__resources_v_blocks_dynamic_field_style_background" DEFAULT 'default',
  	"style_spacing" "enum__resources_v_blocks_dynamic_field_style_spacing" DEFAULT 'md',
  	"style_align" "enum__resources_v_blocks_dynamic_field_style_align" DEFAULT 'start',
  	"vis_match" "enum__resources_v_blocks_dynamic_field_vis_match" DEFAULT 'all',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "glossary_blocks_dynamic_field_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_glossary_blocks_dynamic_field_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "glossary_blocks_dynamic_field_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_glossary_blocks_dynamic_field_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_glossary_blocks_dynamic_field_vis_rules_field_name",
  	"field_operator" "enum_glossary_blocks_dynamic_field_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_glossary_blocks_dynamic_field_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_glossary_blocks_dynamic_field_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "glossary_blocks_dynamic_field" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"field" "enum_glossary_blocks_dynamic_field_field",
  	"format" "enum_glossary_blocks_dynamic_field_format" DEFAULT 'text',
  	"style_background" "enum_glossary_blocks_dynamic_field_style_background" DEFAULT 'default',
  	"style_spacing" "enum_glossary_blocks_dynamic_field_style_spacing" DEFAULT 'md',
  	"style_align" "enum_glossary_blocks_dynamic_field_style_align" DEFAULT 'start',
  	"vis_match" "enum_glossary_blocks_dynamic_field_vis_match" DEFAULT 'all',
  	"block_name" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_dynamic_field_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__glossary_v_blocks_dynamic_field_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_glossary_v_blocks_dynamic_field_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__glossary_v_blocks_dynamic_field_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__glossary_v_blocks_dynamic_field_vis_rules_field_name",
  	"field_operator" "enum__glossary_v_blocks_dynamic_field_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__glossary_v_blocks_dynamic_field_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__glossary_v_blocks_dynamic_field_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_dynamic_field" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"field" "enum__glossary_v_blocks_dynamic_field_field",
  	"format" "enum__glossary_v_blocks_dynamic_field_format" DEFAULT 'text',
  	"style_background" "enum__glossary_v_blocks_dynamic_field_style_background" DEFAULT 'default',
  	"style_spacing" "enum__glossary_v_blocks_dynamic_field_style_spacing" DEFAULT 'md',
  	"style_align" "enum__glossary_v_blocks_dynamic_field_style_align" DEFAULT 'start',
  	"vis_match" "enum__glossary_v_blocks_dynamic_field_vis_match" DEFAULT 'all',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_dynamic_field_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_people_blocks_dynamic_field_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "people_blocks_dynamic_field_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_people_blocks_dynamic_field_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_people_blocks_dynamic_field_vis_rules_field_name",
  	"field_operator" "enum_people_blocks_dynamic_field_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_people_blocks_dynamic_field_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_people_blocks_dynamic_field_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "people_blocks_dynamic_field" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"field" "enum_people_blocks_dynamic_field_field",
  	"format" "enum_people_blocks_dynamic_field_format" DEFAULT 'text',
  	"style_background" "enum_people_blocks_dynamic_field_style_background" DEFAULT 'default',
  	"style_spacing" "enum_people_blocks_dynamic_field_style_spacing" DEFAULT 'md',
  	"style_align" "enum_people_blocks_dynamic_field_style_align" DEFAULT 'start',
  	"vis_match" "enum_people_blocks_dynamic_field_vis_match" DEFAULT 'all',
  	"block_name" varchar
  );
  
  CREATE TABLE "_people_v_blocks_dynamic_field_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__people_v_blocks_dynamic_field_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_people_v_blocks_dynamic_field_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__people_v_blocks_dynamic_field_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__people_v_blocks_dynamic_field_vis_rules_field_name",
  	"field_operator" "enum__people_v_blocks_dynamic_field_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__people_v_blocks_dynamic_field_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__people_v_blocks_dynamic_field_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_dynamic_field" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"field" "enum__people_v_blocks_dynamic_field_field",
  	"format" "enum__people_v_blocks_dynamic_field_format" DEFAULT 'text',
  	"style_background" "enum__people_v_blocks_dynamic_field_style_background" DEFAULT 'default',
  	"style_spacing" "enum__people_v_blocks_dynamic_field_style_spacing" DEFAULT 'md',
  	"style_align" "enum__people_v_blocks_dynamic_field_style_align" DEFAULT 'start',
  	"vis_match" "enum__people_v_blocks_dynamic_field_vis_match" DEFAULT 'all',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "reusable_blocks_dynamic_field_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_reusable_blocks_dynamic_field_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "reusable_blocks_dynamic_field_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_reusable_blocks_dynamic_field_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_reusable_blocks_dynamic_field_vis_rules_field_name",
  	"field_operator" "enum_reusable_blocks_dynamic_field_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_reusable_blocks_dynamic_field_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_reusable_blocks_dynamic_field_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "reusable_blocks_dynamic_field" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"field" "enum_reusable_blocks_dynamic_field_field",
  	"format" "enum_reusable_blocks_dynamic_field_format" DEFAULT 'text',
  	"style_background" "enum_reusable_blocks_dynamic_field_style_background" DEFAULT 'default',
  	"style_spacing" "enum_reusable_blocks_dynamic_field_style_spacing" DEFAULT 'md',
  	"style_align" "enum_reusable_blocks_dynamic_field_style_align" DEFAULT 'start',
  	"vis_match" "enum_reusable_blocks_dynamic_field_vis_match" DEFAULT 'all',
  	"block_name" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_dynamic_field_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__reusable_v_blocks_dynamic_field_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_reusable_v_blocks_dynamic_field_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__reusable_v_blocks_dynamic_field_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__reusable_v_blocks_dynamic_field_vis_rules_field_name",
  	"field_operator" "enum__reusable_v_blocks_dynamic_field_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__reusable_v_blocks_dynamic_field_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__reusable_v_blocks_dynamic_field_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_dynamic_field" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"field" "enum__reusable_v_blocks_dynamic_field_field",
  	"format" "enum__reusable_v_blocks_dynamic_field_format" DEFAULT 'text',
  	"style_background" "enum__reusable_v_blocks_dynamic_field_style_background" DEFAULT 'default',
  	"style_spacing" "enum__reusable_v_blocks_dynamic_field_style_spacing" DEFAULT 'md',
  	"style_align" "enum__reusable_v_blocks_dynamic_field_style_align" DEFAULT 'start',
  	"vis_match" "enum__reusable_v_blocks_dynamic_field_vis_match" DEFAULT 'all',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "cpt_defaults_blocks_dynamic_field_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_cpt_defaults_blocks_dynamic_field_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cpt_defaults_blocks_dynamic_field_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_cpt_defaults_blocks_dynamic_field_vis_rules_type" NOT NULL,
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_cpt_defaults_blocks_dynamic_field_vis_rules_field_name",
  	"field_operator" "enum_cpt_defaults_blocks_dynamic_field_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_cpt_defaults_blocks_dynamic_field_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_cpt_defaults_blocks_dynamic_field_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "cpt_defaults_blocks_dynamic_field" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"field" "enum_cpt_defaults_blocks_dynamic_field_field" NOT NULL,
  	"format" "enum_cpt_defaults_blocks_dynamic_field_format" DEFAULT 'text',
  	"style_background" "enum_cpt_defaults_blocks_dynamic_field_style_background" DEFAULT 'default',
  	"style_spacing" "enum_cpt_defaults_blocks_dynamic_field_style_spacing" DEFAULT 'md',
  	"style_align" "enum_cpt_defaults_blocks_dynamic_field_style_align" DEFAULT 'start',
  	"vis_match" "enum_cpt_defaults_blocks_dynamic_field_vis_match" DEFAULT 'all',
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE text;
  ALTER TABLE "pages_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::text;
  DROP TYPE "public"."enum_pages_blocks_listing_card_style";
  CREATE TYPE "public"."enum_pages_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  ALTER TABLE "pages_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::"public"."enum_pages_blocks_listing_card_style";
  ALTER TABLE "pages_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE "public"."enum_pages_blocks_listing_card_style" USING "card_style"::"public"."enum_pages_blocks_listing_card_style";
  ALTER TABLE "_pages_v_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE text;
  ALTER TABLE "_pages_v_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::text;
  DROP TYPE "public"."enum__pages_v_blocks_listing_card_style";
  CREATE TYPE "public"."enum__pages_v_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  ALTER TABLE "_pages_v_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::"public"."enum__pages_v_blocks_listing_card_style";
  ALTER TABLE "_pages_v_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE "public"."enum__pages_v_blocks_listing_card_style" USING "card_style"::"public"."enum__pages_v_blocks_listing_card_style";
  ALTER TABLE "posts_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE text;
  ALTER TABLE "posts_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::text;
  DROP TYPE "public"."enum_posts_blocks_listing_card_style";
  CREATE TYPE "public"."enum_posts_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  ALTER TABLE "posts_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::"public"."enum_posts_blocks_listing_card_style";
  ALTER TABLE "posts_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE "public"."enum_posts_blocks_listing_card_style" USING "card_style"::"public"."enum_posts_blocks_listing_card_style";
  ALTER TABLE "_posts_v_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE text;
  ALTER TABLE "_posts_v_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::text;
  DROP TYPE "public"."enum__posts_v_blocks_listing_card_style";
  CREATE TYPE "public"."enum__posts_v_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  ALTER TABLE "_posts_v_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::"public"."enum__posts_v_blocks_listing_card_style";
  ALTER TABLE "_posts_v_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE "public"."enum__posts_v_blocks_listing_card_style" USING "card_style"::"public"."enum__posts_v_blocks_listing_card_style";
  ALTER TABLE "events_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE text;
  ALTER TABLE "events_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::text;
  DROP TYPE "public"."enum_events_blocks_listing_card_style";
  CREATE TYPE "public"."enum_events_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  ALTER TABLE "events_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::"public"."enum_events_blocks_listing_card_style";
  ALTER TABLE "events_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE "public"."enum_events_blocks_listing_card_style" USING "card_style"::"public"."enum_events_blocks_listing_card_style";
  ALTER TABLE "_events_v_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE text;
  ALTER TABLE "_events_v_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::text;
  DROP TYPE "public"."enum__events_v_blocks_listing_card_style";
  CREATE TYPE "public"."enum__events_v_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  ALTER TABLE "_events_v_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::"public"."enum__events_v_blocks_listing_card_style";
  ALTER TABLE "_events_v_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE "public"."enum__events_v_blocks_listing_card_style" USING "card_style"::"public"."enum__events_v_blocks_listing_card_style";
  ALTER TABLE "resources_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE text;
  ALTER TABLE "resources_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::text;
  DROP TYPE "public"."enum_resources_blocks_listing_card_style";
  CREATE TYPE "public"."enum_resources_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  ALTER TABLE "resources_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::"public"."enum_resources_blocks_listing_card_style";
  ALTER TABLE "resources_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE "public"."enum_resources_blocks_listing_card_style" USING "card_style"::"public"."enum_resources_blocks_listing_card_style";
  ALTER TABLE "_resources_v_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE text;
  ALTER TABLE "_resources_v_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::text;
  DROP TYPE "public"."enum__resources_v_blocks_listing_card_style";
  CREATE TYPE "public"."enum__resources_v_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  ALTER TABLE "_resources_v_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::"public"."enum__resources_v_blocks_listing_card_style";
  ALTER TABLE "_resources_v_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE "public"."enum__resources_v_blocks_listing_card_style" USING "card_style"::"public"."enum__resources_v_blocks_listing_card_style";
  ALTER TABLE "glossary_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE text;
  ALTER TABLE "glossary_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::text;
  DROP TYPE "public"."enum_glossary_blocks_listing_card_style";
  CREATE TYPE "public"."enum_glossary_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  ALTER TABLE "glossary_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::"public"."enum_glossary_blocks_listing_card_style";
  ALTER TABLE "glossary_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE "public"."enum_glossary_blocks_listing_card_style" USING "card_style"::"public"."enum_glossary_blocks_listing_card_style";
  ALTER TABLE "_glossary_v_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE text;
  ALTER TABLE "_glossary_v_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::text;
  DROP TYPE "public"."enum__glossary_v_blocks_listing_card_style";
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  ALTER TABLE "_glossary_v_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::"public"."enum__glossary_v_blocks_listing_card_style";
  ALTER TABLE "_glossary_v_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE "public"."enum__glossary_v_blocks_listing_card_style" USING "card_style"::"public"."enum__glossary_v_blocks_listing_card_style";
  ALTER TABLE "people_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE text;
  ALTER TABLE "people_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::text;
  DROP TYPE "public"."enum_people_blocks_listing_card_style";
  CREATE TYPE "public"."enum_people_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  ALTER TABLE "people_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::"public"."enum_people_blocks_listing_card_style";
  ALTER TABLE "people_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE "public"."enum_people_blocks_listing_card_style" USING "card_style"::"public"."enum_people_blocks_listing_card_style";
  ALTER TABLE "_people_v_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE text;
  ALTER TABLE "_people_v_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::text;
  DROP TYPE "public"."enum__people_v_blocks_listing_card_style";
  CREATE TYPE "public"."enum__people_v_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  ALTER TABLE "_people_v_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::"public"."enum__people_v_blocks_listing_card_style";
  ALTER TABLE "_people_v_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE "public"."enum__people_v_blocks_listing_card_style" USING "card_style"::"public"."enum__people_v_blocks_listing_card_style";
  ALTER TABLE "reusable_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE text;
  ALTER TABLE "reusable_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::text;
  DROP TYPE "public"."enum_reusable_blocks_listing_card_style";
  CREATE TYPE "public"."enum_reusable_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  ALTER TABLE "reusable_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::"public"."enum_reusable_blocks_listing_card_style";
  ALTER TABLE "reusable_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE "public"."enum_reusable_blocks_listing_card_style" USING "card_style"::"public"."enum_reusable_blocks_listing_card_style";
  ALTER TABLE "_reusable_v_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE text;
  ALTER TABLE "_reusable_v_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::text;
  DROP TYPE "public"."enum__reusable_v_blocks_listing_card_style";
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  ALTER TABLE "_reusable_v_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::"public"."enum__reusable_v_blocks_listing_card_style";
  ALTER TABLE "_reusable_v_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE "public"."enum__reusable_v_blocks_listing_card_style" USING "card_style"::"public"."enum__reusable_v_blocks_listing_card_style";
  ALTER TABLE "cpt_defaults_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE text;
  ALTER TABLE "cpt_defaults_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::text;
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_card_style";
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_card_style" AS ENUM('standard', 'horizontal', 'compact', 'person', 'event');
  ALTER TABLE "cpt_defaults_blocks_listing" ALTER COLUMN "card_style" SET DEFAULT 'standard'::"public"."enum_cpt_defaults_blocks_listing_card_style";
  ALTER TABLE "cpt_defaults_blocks_listing" ALTER COLUMN "card_style" SET DATA TYPE "public"."enum_cpt_defaults_blocks_listing_card_style" USING "card_style"::"public"."enum_cpt_defaults_blocks_listing_card_style";
  ALTER TABLE "pages_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "pages_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "pages_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dynamic_field" ADD CONSTRAINT "pages_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "_pages_v_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "_pages_v_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dynamic_field" ADD CONSTRAINT "_pages_v_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "posts_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "posts_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_dynamic_field" ADD CONSTRAINT "posts_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "_posts_v_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "_posts_v_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_dynamic_field" ADD CONSTRAINT "_posts_v_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "events_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "events_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_dynamic_field" ADD CONSTRAINT "events_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "_events_v_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "_events_v_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_dynamic_field" ADD CONSTRAINT "_events_v_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "resources_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "resources_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_dynamic_field" ADD CONSTRAINT "resources_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "_resources_v_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_resources_v_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "_resources_v_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_dynamic_field" ADD CONSTRAINT "_resources_v_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "glossary_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."glossary_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "glossary_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_dynamic_field" ADD CONSTRAINT "glossary_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "_glossary_v_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_glossary_v_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "_glossary_v_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_dynamic_field" ADD CONSTRAINT "_glossary_v_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "people_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."people_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "people_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_dynamic_field" ADD CONSTRAINT "people_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "_people_v_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_people_v_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "_people_v_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_dynamic_field" ADD CONSTRAINT "_people_v_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "reusable_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."reusable_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "reusable_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_dynamic_field" ADD CONSTRAINT "reusable_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "_reusable_v_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_reusable_v_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "_reusable_v_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_dynamic_field" ADD CONSTRAINT "_reusable_v_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "cpt_defaults_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cpt_defaults_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "cpt_defaults_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_dynamic_field" ADD CONSTRAINT "cpt_defaults_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "pages_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "pages_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "pages_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "pages_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "pages_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "pages_blocks_dynamic_field_vis_rules_order_idx" ON "pages_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "pages_blocks_dynamic_field_vis_rules_parent_id_idx" ON "pages_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dynamic_field_vis_rules_locale_idx" ON "pages_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "pages_blocks_dynamic_field_order_idx" ON "pages_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "pages_blocks_dynamic_field_parent_id_idx" ON "pages_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dynamic_field_path_idx" ON "pages_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "pages_blocks_dynamic_field_locale_idx" ON "pages_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "_pages_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_pages_v_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "_pages_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_pages_v_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "_pages_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_pages_v_blocks_dynamic_field_vis_rules_order_idx" ON "_pages_v_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dynamic_field_vis_rules_parent_id_idx" ON "_pages_v_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dynamic_field_vis_rules_locale_idx" ON "_pages_v_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_dynamic_field_order_idx" ON "_pages_v_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dynamic_field_parent_id_idx" ON "_pages_v_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dynamic_field_path_idx" ON "_pages_v_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dynamic_field_locale_idx" ON "_pages_v_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "posts_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "posts_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "posts_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "posts_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "posts_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "posts_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "posts_blocks_dynamic_field_vis_rules_order_idx" ON "posts_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "posts_blocks_dynamic_field_vis_rules_parent_id_idx" ON "posts_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_dynamic_field_vis_rules_locale_idx" ON "posts_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "posts_blocks_dynamic_field_order_idx" ON "posts_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "posts_blocks_dynamic_field_parent_id_idx" ON "posts_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_dynamic_field_path_idx" ON "posts_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "posts_blocks_dynamic_field_locale_idx" ON "posts_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "_posts_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_posts_v_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "_posts_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_posts_v_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "_posts_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_posts_v_blocks_dynamic_field_vis_rules_order_idx" ON "_posts_v_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_dynamic_field_vis_rules_parent_id_idx" ON "_posts_v_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_dynamic_field_vis_rules_locale_idx" ON "_posts_v_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_dynamic_field_order_idx" ON "_posts_v_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_dynamic_field_parent_id_idx" ON "_posts_v_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_dynamic_field_path_idx" ON "_posts_v_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_dynamic_field_locale_idx" ON "_posts_v_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "events_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "events_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "events_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "events_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "events_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "events_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "events_blocks_dynamic_field_vis_rules_order_idx" ON "events_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "events_blocks_dynamic_field_vis_rules_parent_id_idx" ON "events_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_dynamic_field_vis_rules_locale_idx" ON "events_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "events_blocks_dynamic_field_order_idx" ON "events_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "events_blocks_dynamic_field_parent_id_idx" ON "events_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_dynamic_field_path_idx" ON "events_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "events_blocks_dynamic_field_locale_idx" ON "events_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "_events_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_events_v_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "_events_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_events_v_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "_events_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_events_v_blocks_dynamic_field_vis_rules_order_idx" ON "_events_v_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_dynamic_field_vis_rules_parent_id_idx" ON "_events_v_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_dynamic_field_vis_rules_locale_idx" ON "_events_v_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_dynamic_field_order_idx" ON "_events_v_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_dynamic_field_parent_id_idx" ON "_events_v_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_dynamic_field_path_idx" ON "_events_v_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_dynamic_field_locale_idx" ON "_events_v_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "resources_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "resources_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "resources_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "resources_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "resources_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "resources_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "resources_blocks_dynamic_field_vis_rules_order_idx" ON "resources_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "resources_blocks_dynamic_field_vis_rules_parent_id_idx" ON "resources_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_dynamic_field_vis_rules_locale_idx" ON "resources_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "resources_blocks_dynamic_field_order_idx" ON "resources_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "resources_blocks_dynamic_field_parent_id_idx" ON "resources_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_dynamic_field_path_idx" ON "resources_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "resources_blocks_dynamic_field_locale_idx" ON "resources_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "_resources_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_resources_v_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "_resources_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_resources_v_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "_resources_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_resources_v_blocks_dynamic_field_vis_rules_order_idx" ON "_resources_v_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_dynamic_field_vis_rules_parent_id_idx" ON "_resources_v_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_dynamic_field_vis_rules_locale_idx" ON "_resources_v_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_dynamic_field_order_idx" ON "_resources_v_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_dynamic_field_parent_id_idx" ON "_resources_v_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_dynamic_field_path_idx" ON "_resources_v_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_dynamic_field_locale_idx" ON "_resources_v_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "glossary_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "glossary_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "glossary_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "glossary_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "glossary_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "glossary_blocks_dynamic_field_vis_rules_order_idx" ON "glossary_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "glossary_blocks_dynamic_field_vis_rules_parent_id_idx" ON "glossary_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_dynamic_field_vis_rules_locale_idx" ON "glossary_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_dynamic_field_order_idx" ON "glossary_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "glossary_blocks_dynamic_field_parent_id_idx" ON "glossary_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_dynamic_field_path_idx" ON "glossary_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "glossary_blocks_dynamic_field_locale_idx" ON "glossary_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "_glossary_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "_glossary_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "_glossary_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_vis_rules_order_idx" ON "_glossary_v_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_vis_rules_parent_id_idx" ON "_glossary_v_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_vis_rules_locale_idx" ON "_glossary_v_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_order_idx" ON "_glossary_v_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_parent_id_idx" ON "_glossary_v_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_path_idx" ON "_glossary_v_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_locale_idx" ON "_glossary_v_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "people_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "people_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "people_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "people_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "people_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "people_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "people_blocks_dynamic_field_vis_rules_order_idx" ON "people_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "people_blocks_dynamic_field_vis_rules_parent_id_idx" ON "people_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_dynamic_field_vis_rules_locale_idx" ON "people_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "people_blocks_dynamic_field_order_idx" ON "people_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "people_blocks_dynamic_field_parent_id_idx" ON "people_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_dynamic_field_path_idx" ON "people_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "people_blocks_dynamic_field_locale_idx" ON "people_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "_people_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_people_v_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "_people_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_people_v_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "_people_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_people_v_blocks_dynamic_field_vis_rules_order_idx" ON "_people_v_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_dynamic_field_vis_rules_parent_id_idx" ON "_people_v_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_dynamic_field_vis_rules_locale_idx" ON "_people_v_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_dynamic_field_order_idx" ON "_people_v_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_dynamic_field_parent_id_idx" ON "_people_v_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_dynamic_field_path_idx" ON "_people_v_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "_people_v_blocks_dynamic_field_locale_idx" ON "_people_v_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "reusable_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "reusable_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "reusable_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "reusable_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "reusable_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "reusable_blocks_dynamic_field_vis_rules_order_idx" ON "reusable_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "reusable_blocks_dynamic_field_vis_rules_parent_id_idx" ON "reusable_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_dynamic_field_vis_rules_locale_idx" ON "reusable_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_dynamic_field_order_idx" ON "reusable_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "reusable_blocks_dynamic_field_parent_id_idx" ON "reusable_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_dynamic_field_path_idx" ON "reusable_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "reusable_blocks_dynamic_field_locale_idx" ON "reusable_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "_reusable_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "_reusable_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "_reusable_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_vis_rules_order_idx" ON "_reusable_v_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_vis_rules_parent_id_idx" ON "_reusable_v_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_vis_rules_locale_idx" ON "_reusable_v_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_order_idx" ON "_reusable_v_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_parent_id_idx" ON "_reusable_v_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_path_idx" ON "_reusable_v_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_locale_idx" ON "_reusable_v_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "cpt_defaults_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "cpt_defaults_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "cpt_defaults_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_vis_rules_order_idx" ON "cpt_defaults_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_vis_rules_parent_id_idx" ON "cpt_defaults_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_vis_rules_locale_idx" ON "cpt_defaults_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_order_idx" ON "cpt_defaults_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_parent_id_idx" ON "cpt_defaults_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_path_idx" ON "cpt_defaults_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_locale_idx" ON "cpt_defaults_blocks_dynamic_field" USING btree ("_locale");
  ALTER TABLE "pages_blocks_listing" DROP COLUMN "slider_per_view";
  ALTER TABLE "pages_blocks_listing" DROP COLUMN "slider_arrows";
  ALTER TABLE "pages_blocks_listing" DROP COLUMN "slider_dots";
  ALTER TABLE "pages_blocks_listing" DROP COLUMN "slider_full_width";
  ALTER TABLE "pages_blocks_listing" DROP COLUMN "slider_autoplay";
  ALTER TABLE "pages_blocks_listing" DROP COLUMN "slider_interval";
  ALTER TABLE "pages_blocks_logos" DROP COLUMN "display";
  ALTER TABLE "pages_blocks_logos" DROP COLUMN "speed";
  ALTER TABLE "_pages_v_blocks_listing" DROP COLUMN "slider_per_view";
  ALTER TABLE "_pages_v_blocks_listing" DROP COLUMN "slider_arrows";
  ALTER TABLE "_pages_v_blocks_listing" DROP COLUMN "slider_dots";
  ALTER TABLE "_pages_v_blocks_listing" DROP COLUMN "slider_full_width";
  ALTER TABLE "_pages_v_blocks_listing" DROP COLUMN "slider_autoplay";
  ALTER TABLE "_pages_v_blocks_listing" DROP COLUMN "slider_interval";
  ALTER TABLE "_pages_v_blocks_logos" DROP COLUMN "display";
  ALTER TABLE "_pages_v_blocks_logos" DROP COLUMN "speed";
  ALTER TABLE "posts_blocks_listing" DROP COLUMN "slider_per_view";
  ALTER TABLE "posts_blocks_listing" DROP COLUMN "slider_arrows";
  ALTER TABLE "posts_blocks_listing" DROP COLUMN "slider_dots";
  ALTER TABLE "posts_blocks_listing" DROP COLUMN "slider_full_width";
  ALTER TABLE "posts_blocks_listing" DROP COLUMN "slider_autoplay";
  ALTER TABLE "posts_blocks_listing" DROP COLUMN "slider_interval";
  ALTER TABLE "posts_blocks_logos" DROP COLUMN "display";
  ALTER TABLE "posts_blocks_logos" DROP COLUMN "speed";
  ALTER TABLE "_posts_v_blocks_listing" DROP COLUMN "slider_per_view";
  ALTER TABLE "_posts_v_blocks_listing" DROP COLUMN "slider_arrows";
  ALTER TABLE "_posts_v_blocks_listing" DROP COLUMN "slider_dots";
  ALTER TABLE "_posts_v_blocks_listing" DROP COLUMN "slider_full_width";
  ALTER TABLE "_posts_v_blocks_listing" DROP COLUMN "slider_autoplay";
  ALTER TABLE "_posts_v_blocks_listing" DROP COLUMN "slider_interval";
  ALTER TABLE "_posts_v_blocks_logos" DROP COLUMN "display";
  ALTER TABLE "_posts_v_blocks_logos" DROP COLUMN "speed";
  ALTER TABLE "events_blocks_listing" DROP COLUMN "slider_per_view";
  ALTER TABLE "events_blocks_listing" DROP COLUMN "slider_arrows";
  ALTER TABLE "events_blocks_listing" DROP COLUMN "slider_dots";
  ALTER TABLE "events_blocks_listing" DROP COLUMN "slider_full_width";
  ALTER TABLE "events_blocks_listing" DROP COLUMN "slider_autoplay";
  ALTER TABLE "events_blocks_listing" DROP COLUMN "slider_interval";
  ALTER TABLE "events_blocks_logos" DROP COLUMN "display";
  ALTER TABLE "events_blocks_logos" DROP COLUMN "speed";
  ALTER TABLE "_events_v_blocks_listing" DROP COLUMN "slider_per_view";
  ALTER TABLE "_events_v_blocks_listing" DROP COLUMN "slider_arrows";
  ALTER TABLE "_events_v_blocks_listing" DROP COLUMN "slider_dots";
  ALTER TABLE "_events_v_blocks_listing" DROP COLUMN "slider_full_width";
  ALTER TABLE "_events_v_blocks_listing" DROP COLUMN "slider_autoplay";
  ALTER TABLE "_events_v_blocks_listing" DROP COLUMN "slider_interval";
  ALTER TABLE "_events_v_blocks_logos" DROP COLUMN "display";
  ALTER TABLE "_events_v_blocks_logos" DROP COLUMN "speed";
  ALTER TABLE "resources_blocks_listing" DROP COLUMN "slider_per_view";
  ALTER TABLE "resources_blocks_listing" DROP COLUMN "slider_arrows";
  ALTER TABLE "resources_blocks_listing" DROP COLUMN "slider_dots";
  ALTER TABLE "resources_blocks_listing" DROP COLUMN "slider_full_width";
  ALTER TABLE "resources_blocks_listing" DROP COLUMN "slider_autoplay";
  ALTER TABLE "resources_blocks_listing" DROP COLUMN "slider_interval";
  ALTER TABLE "resources_blocks_logos" DROP COLUMN "display";
  ALTER TABLE "resources_blocks_logos" DROP COLUMN "speed";
  ALTER TABLE "_resources_v_blocks_listing" DROP COLUMN "slider_per_view";
  ALTER TABLE "_resources_v_blocks_listing" DROP COLUMN "slider_arrows";
  ALTER TABLE "_resources_v_blocks_listing" DROP COLUMN "slider_dots";
  ALTER TABLE "_resources_v_blocks_listing" DROP COLUMN "slider_full_width";
  ALTER TABLE "_resources_v_blocks_listing" DROP COLUMN "slider_autoplay";
  ALTER TABLE "_resources_v_blocks_listing" DROP COLUMN "slider_interval";
  ALTER TABLE "_resources_v_blocks_logos" DROP COLUMN "display";
  ALTER TABLE "_resources_v_blocks_logos" DROP COLUMN "speed";
  ALTER TABLE "glossary_blocks_listing" DROP COLUMN "slider_per_view";
  ALTER TABLE "glossary_blocks_listing" DROP COLUMN "slider_arrows";
  ALTER TABLE "glossary_blocks_listing" DROP COLUMN "slider_dots";
  ALTER TABLE "glossary_blocks_listing" DROP COLUMN "slider_full_width";
  ALTER TABLE "glossary_blocks_listing" DROP COLUMN "slider_autoplay";
  ALTER TABLE "glossary_blocks_listing" DROP COLUMN "slider_interval";
  ALTER TABLE "glossary_blocks_logos" DROP COLUMN "display";
  ALTER TABLE "glossary_blocks_logos" DROP COLUMN "speed";
  ALTER TABLE "_glossary_v_blocks_listing" DROP COLUMN "slider_per_view";
  ALTER TABLE "_glossary_v_blocks_listing" DROP COLUMN "slider_arrows";
  ALTER TABLE "_glossary_v_blocks_listing" DROP COLUMN "slider_dots";
  ALTER TABLE "_glossary_v_blocks_listing" DROP COLUMN "slider_full_width";
  ALTER TABLE "_glossary_v_blocks_listing" DROP COLUMN "slider_autoplay";
  ALTER TABLE "_glossary_v_blocks_listing" DROP COLUMN "slider_interval";
  ALTER TABLE "_glossary_v_blocks_logos" DROP COLUMN "display";
  ALTER TABLE "_glossary_v_blocks_logos" DROP COLUMN "speed";
  ALTER TABLE "people_blocks_listing" DROP COLUMN "slider_per_view";
  ALTER TABLE "people_blocks_listing" DROP COLUMN "slider_arrows";
  ALTER TABLE "people_blocks_listing" DROP COLUMN "slider_dots";
  ALTER TABLE "people_blocks_listing" DROP COLUMN "slider_full_width";
  ALTER TABLE "people_blocks_listing" DROP COLUMN "slider_autoplay";
  ALTER TABLE "people_blocks_listing" DROP COLUMN "slider_interval";
  ALTER TABLE "people_blocks_logos" DROP COLUMN "display";
  ALTER TABLE "people_blocks_logos" DROP COLUMN "speed";
  ALTER TABLE "_people_v_blocks_listing" DROP COLUMN "slider_per_view";
  ALTER TABLE "_people_v_blocks_listing" DROP COLUMN "slider_arrows";
  ALTER TABLE "_people_v_blocks_listing" DROP COLUMN "slider_dots";
  ALTER TABLE "_people_v_blocks_listing" DROP COLUMN "slider_full_width";
  ALTER TABLE "_people_v_blocks_listing" DROP COLUMN "slider_autoplay";
  ALTER TABLE "_people_v_blocks_listing" DROP COLUMN "slider_interval";
  ALTER TABLE "_people_v_blocks_logos" DROP COLUMN "display";
  ALTER TABLE "_people_v_blocks_logos" DROP COLUMN "speed";
  ALTER TABLE "reusable_blocks_listing" DROP COLUMN "slider_per_view";
  ALTER TABLE "reusable_blocks_listing" DROP COLUMN "slider_arrows";
  ALTER TABLE "reusable_blocks_listing" DROP COLUMN "slider_dots";
  ALTER TABLE "reusable_blocks_listing" DROP COLUMN "slider_full_width";
  ALTER TABLE "reusable_blocks_listing" DROP COLUMN "slider_autoplay";
  ALTER TABLE "reusable_blocks_listing" DROP COLUMN "slider_interval";
  ALTER TABLE "reusable_blocks_logos" DROP COLUMN "display";
  ALTER TABLE "reusable_blocks_logos" DROP COLUMN "speed";
  ALTER TABLE "_reusable_v_blocks_listing" DROP COLUMN "slider_per_view";
  ALTER TABLE "_reusable_v_blocks_listing" DROP COLUMN "slider_arrows";
  ALTER TABLE "_reusable_v_blocks_listing" DROP COLUMN "slider_dots";
  ALTER TABLE "_reusable_v_blocks_listing" DROP COLUMN "slider_full_width";
  ALTER TABLE "_reusable_v_blocks_listing" DROP COLUMN "slider_autoplay";
  ALTER TABLE "_reusable_v_blocks_listing" DROP COLUMN "slider_interval";
  ALTER TABLE "_reusable_v_blocks_logos" DROP COLUMN "display";
  ALTER TABLE "_reusable_v_blocks_logos" DROP COLUMN "speed";
  ALTER TABLE "cpt_defaults_blocks_listing" DROP COLUMN "slider_per_view";
  ALTER TABLE "cpt_defaults_blocks_listing" DROP COLUMN "slider_arrows";
  ALTER TABLE "cpt_defaults_blocks_listing" DROP COLUMN "slider_dots";
  ALTER TABLE "cpt_defaults_blocks_listing" DROP COLUMN "slider_full_width";
  ALTER TABLE "cpt_defaults_blocks_listing" DROP COLUMN "slider_autoplay";
  ALTER TABLE "cpt_defaults_blocks_listing" DROP COLUMN "slider_interval";
  ALTER TABLE "cpt_defaults_blocks_logos" DROP COLUMN "display";
  ALTER TABLE "cpt_defaults_blocks_logos" DROP COLUMN "speed";
  DROP TYPE "public"."enum_pages_blocks_listing_slider_per_view";
  DROP TYPE "public"."enum_pages_blocks_logos_display";
  DROP TYPE "public"."enum_pages_blocks_logos_speed";
  DROP TYPE "public"."enum__pages_v_blocks_listing_slider_per_view";
  DROP TYPE "public"."enum__pages_v_blocks_logos_display";
  DROP TYPE "public"."enum__pages_v_blocks_logos_speed";
  DROP TYPE "public"."enum_posts_blocks_listing_slider_per_view";
  DROP TYPE "public"."enum_posts_blocks_logos_display";
  DROP TYPE "public"."enum_posts_blocks_logos_speed";
  DROP TYPE "public"."enum__posts_v_blocks_listing_slider_per_view";
  DROP TYPE "public"."enum__posts_v_blocks_logos_display";
  DROP TYPE "public"."enum__posts_v_blocks_logos_speed";
  DROP TYPE "public"."enum_events_blocks_listing_slider_per_view";
  DROP TYPE "public"."enum_events_blocks_logos_display";
  DROP TYPE "public"."enum_events_blocks_logos_speed";
  DROP TYPE "public"."enum__events_v_blocks_listing_slider_per_view";
  DROP TYPE "public"."enum__events_v_blocks_logos_display";
  DROP TYPE "public"."enum__events_v_blocks_logos_speed";
  DROP TYPE "public"."enum_resources_blocks_listing_slider_per_view";
  DROP TYPE "public"."enum_resources_blocks_logos_display";
  DROP TYPE "public"."enum_resources_blocks_logos_speed";
  DROP TYPE "public"."enum__resources_v_blocks_listing_slider_per_view";
  DROP TYPE "public"."enum__resources_v_blocks_logos_display";
  DROP TYPE "public"."enum__resources_v_blocks_logos_speed";
  DROP TYPE "public"."enum_glossary_blocks_listing_slider_per_view";
  DROP TYPE "public"."enum_glossary_blocks_logos_display";
  DROP TYPE "public"."enum_glossary_blocks_logos_speed";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_slider_per_view";
  DROP TYPE "public"."enum__glossary_v_blocks_logos_display";
  DROP TYPE "public"."enum__glossary_v_blocks_logos_speed";
  DROP TYPE "public"."enum_people_blocks_listing_slider_per_view";
  DROP TYPE "public"."enum_people_blocks_logos_display";
  DROP TYPE "public"."enum_people_blocks_logos_speed";
  DROP TYPE "public"."enum__people_v_blocks_listing_slider_per_view";
  DROP TYPE "public"."enum__people_v_blocks_logos_display";
  DROP TYPE "public"."enum__people_v_blocks_logos_speed";
  DROP TYPE "public"."enum_reusable_blocks_listing_slider_per_view";
  DROP TYPE "public"."enum_reusable_blocks_logos_display";
  DROP TYPE "public"."enum_reusable_blocks_logos_speed";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_slider_per_view";
  DROP TYPE "public"."enum__reusable_v_blocks_logos_display";
  DROP TYPE "public"."enum__reusable_v_blocks_logos_speed";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_slider_per_view";
  DROP TYPE "public"."enum_cpt_defaults_blocks_logos_display";
  DROP TYPE "public"."enum_cpt_defaults_blocks_logos_speed";`)
}
