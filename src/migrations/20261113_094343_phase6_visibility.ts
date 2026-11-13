import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_hero_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_pages_blocks_hero_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_pages_blocks_hero_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_pages_blocks_hero_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_pages_blocks_hero_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_pages_blocks_hero_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_pages_blocks_hero_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_pages_blocks_media_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_pages_blocks_media_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_pages_blocks_media_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_pages_blocks_media_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_pages_blocks_media_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_pages_blocks_media_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_pages_blocks_media_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_pages_blocks_cards_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_pages_blocks_cards_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_pages_blocks_cards_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_pages_blocks_cards_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_pages_blocks_cards_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_pages_blocks_cards_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_pages_blocks_cards_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_pages_blocks_listing_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_pages_blocks_listing_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_pages_blocks_listing_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_pages_blocks_listing_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_pages_blocks_listing_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_pages_blocks_listing_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_pages_blocks_listing_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_pages_blocks_columns_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_pages_blocks_columns_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_pages_blocks_columns_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_pages_blocks_columns_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_pages_blocks_columns_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_pages_blocks_columns_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_pages_blocks_columns_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_pages_blocks_tabs_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_pages_blocks_tabs_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_pages_blocks_tabs_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_pages_blocks_tabs_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_pages_blocks_tabs_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_pages_blocks_tabs_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_pages_blocks_tabs_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_pages_blocks_stats_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_pages_blocks_stats_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_pages_blocks_stats_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_pages_blocks_stats_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_pages_blocks_stats_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_pages_blocks_stats_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_pages_blocks_stats_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_pages_blocks_logos_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_pages_blocks_logos_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_pages_blocks_logos_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_pages_blocks_logos_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_pages_blocks_logos_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_pages_blocks_logos_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_pages_blocks_logos_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_pages_blocks_faq_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_pages_blocks_faq_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_pages_blocks_faq_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_pages_blocks_faq_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_pages_blocks_faq_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_pages_blocks_faq_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_pages_blocks_faq_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_pages_blocks_cta_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_pages_blocks_cta_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_pages_blocks_cta_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_pages_blocks_cta_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_pages_blocks_cta_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_pages_blocks_cta_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_pages_blocks_cta_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__pages_v_blocks_media_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__pages_v_blocks_media_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__pages_v_blocks_media_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__pages_v_blocks_media_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__pages_v_blocks_media_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__pages_v_blocks_media_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__pages_v_blocks_media_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__pages_v_blocks_listing_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__pages_v_blocks_columns_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__pages_v_blocks_columns_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__pages_v_blocks_columns_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__pages_v_blocks_columns_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__pages_v_blocks_columns_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__pages_v_blocks_columns_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__pages_v_blocks_columns_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__pages_v_blocks_tabs_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__pages_v_blocks_tabs_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__pages_v_blocks_tabs_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__pages_v_blocks_tabs_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__pages_v_blocks_tabs_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__pages_v_blocks_tabs_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__pages_v_blocks_tabs_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__pages_v_blocks_stats_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__pages_v_blocks_stats_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__pages_v_blocks_stats_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__pages_v_blocks_stats_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__pages_v_blocks_stats_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__pages_v_blocks_stats_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__pages_v_blocks_stats_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__pages_v_blocks_logos_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__pages_v_blocks_logos_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__pages_v_blocks_logos_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__pages_v_blocks_logos_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__pages_v_blocks_logos_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__pages_v_blocks_logos_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__pages_v_blocks_logos_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_posts_blocks_hero_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_posts_blocks_hero_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_posts_blocks_hero_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_posts_blocks_hero_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_posts_blocks_hero_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_posts_blocks_hero_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_posts_blocks_hero_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_posts_blocks_rich_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_posts_blocks_rich_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_posts_blocks_rich_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_posts_blocks_rich_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_posts_blocks_rich_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_posts_blocks_rich_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_posts_blocks_rich_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_posts_blocks_media_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_posts_blocks_media_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_posts_blocks_media_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_posts_blocks_media_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_posts_blocks_media_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_posts_blocks_media_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_posts_blocks_media_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_posts_blocks_cards_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_posts_blocks_cards_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_posts_blocks_cards_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_posts_blocks_cards_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_posts_blocks_cards_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_posts_blocks_cards_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_posts_blocks_cards_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_posts_blocks_listing_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_posts_blocks_listing_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_posts_blocks_listing_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_posts_blocks_listing_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_posts_blocks_listing_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_posts_blocks_listing_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_posts_blocks_listing_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_posts_blocks_columns_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_posts_blocks_columns_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_posts_blocks_columns_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_posts_blocks_columns_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_posts_blocks_columns_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_posts_blocks_columns_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_posts_blocks_columns_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_posts_blocks_tabs_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_posts_blocks_tabs_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_posts_blocks_tabs_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_posts_blocks_tabs_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_posts_blocks_tabs_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_posts_blocks_tabs_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_posts_blocks_tabs_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_posts_blocks_stats_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_posts_blocks_stats_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_posts_blocks_stats_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_posts_blocks_stats_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_posts_blocks_stats_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_posts_blocks_stats_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_posts_blocks_stats_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_posts_blocks_logos_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_posts_blocks_logos_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_posts_blocks_logos_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_posts_blocks_logos_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_posts_blocks_logos_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_posts_blocks_logos_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_posts_blocks_logos_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_posts_blocks_testimonials_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_posts_blocks_testimonials_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_posts_blocks_testimonials_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_posts_blocks_testimonials_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_posts_blocks_testimonials_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_posts_blocks_testimonials_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_posts_blocks_testimonials_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_posts_blocks_faq_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_posts_blocks_faq_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_posts_blocks_faq_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_posts_blocks_faq_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_posts_blocks_faq_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_posts_blocks_faq_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_posts_blocks_faq_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_posts_blocks_cta_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_posts_blocks_cta_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_posts_blocks_cta_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_posts_blocks_cta_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_posts_blocks_cta_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_posts_blocks_cta_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_posts_blocks_cta_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__posts_v_blocks_hero_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__posts_v_blocks_hero_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__posts_v_blocks_hero_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__posts_v_blocks_hero_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__posts_v_blocks_hero_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__posts_v_blocks_hero_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__posts_v_blocks_hero_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__posts_v_blocks_rich_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__posts_v_blocks_rich_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__posts_v_blocks_rich_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__posts_v_blocks_rich_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__posts_v_blocks_rich_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__posts_v_blocks_rich_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__posts_v_blocks_rich_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__posts_v_blocks_media_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__posts_v_blocks_media_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__posts_v_blocks_media_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__posts_v_blocks_media_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__posts_v_blocks_media_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__posts_v_blocks_media_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__posts_v_blocks_media_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__posts_v_blocks_cards_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__posts_v_blocks_cards_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__posts_v_blocks_cards_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__posts_v_blocks_cards_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__posts_v_blocks_cards_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__posts_v_blocks_cards_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__posts_v_blocks_cards_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__posts_v_blocks_listing_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__posts_v_blocks_columns_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__posts_v_blocks_columns_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__posts_v_blocks_columns_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__posts_v_blocks_columns_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__posts_v_blocks_columns_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__posts_v_blocks_columns_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__posts_v_blocks_columns_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__posts_v_blocks_tabs_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__posts_v_blocks_tabs_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__posts_v_blocks_tabs_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__posts_v_blocks_tabs_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__posts_v_blocks_tabs_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__posts_v_blocks_tabs_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__posts_v_blocks_tabs_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__posts_v_blocks_stats_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__posts_v_blocks_stats_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__posts_v_blocks_stats_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__posts_v_blocks_stats_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__posts_v_blocks_stats_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__posts_v_blocks_stats_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__posts_v_blocks_stats_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__posts_v_blocks_logos_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__posts_v_blocks_logos_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__posts_v_blocks_logos_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__posts_v_blocks_logos_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__posts_v_blocks_logos_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__posts_v_blocks_logos_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__posts_v_blocks_logos_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__posts_v_blocks_testimonials_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__posts_v_blocks_testimonials_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__posts_v_blocks_testimonials_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__posts_v_blocks_testimonials_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__posts_v_blocks_testimonials_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__posts_v_blocks_testimonials_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__posts_v_blocks_testimonials_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__posts_v_blocks_faq_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__posts_v_blocks_faq_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__posts_v_blocks_faq_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__posts_v_blocks_faq_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__posts_v_blocks_faq_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__posts_v_blocks_faq_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__posts_v_blocks_faq_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__posts_v_blocks_cta_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__posts_v_blocks_cta_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__posts_v_blocks_cta_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__posts_v_blocks_cta_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__posts_v_blocks_cta_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__posts_v_blocks_cta_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__posts_v_blocks_cta_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_events_blocks_hero_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_events_blocks_hero_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_events_blocks_hero_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_events_blocks_hero_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_events_blocks_hero_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_events_blocks_hero_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_events_blocks_hero_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_events_blocks_rich_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_events_blocks_rich_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_events_blocks_rich_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_events_blocks_rich_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_events_blocks_rich_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_events_blocks_rich_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_events_blocks_rich_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_events_blocks_media_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_events_blocks_media_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_events_blocks_media_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_events_blocks_media_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_events_blocks_media_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_events_blocks_media_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_events_blocks_media_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_events_blocks_cards_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_events_blocks_cards_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_events_blocks_cards_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_events_blocks_cards_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_events_blocks_cards_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_events_blocks_cards_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_events_blocks_cards_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_events_blocks_listing_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_events_blocks_listing_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_events_blocks_listing_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_events_blocks_listing_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_events_blocks_listing_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_events_blocks_listing_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_events_blocks_listing_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_events_blocks_columns_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_events_blocks_columns_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_events_blocks_columns_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_events_blocks_columns_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_events_blocks_columns_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_events_blocks_columns_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_events_blocks_columns_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_events_blocks_tabs_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_events_blocks_tabs_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_events_blocks_tabs_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_events_blocks_tabs_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_events_blocks_tabs_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_events_blocks_tabs_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_events_blocks_tabs_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_events_blocks_stats_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_events_blocks_stats_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_events_blocks_stats_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_events_blocks_stats_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_events_blocks_stats_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_events_blocks_stats_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_events_blocks_stats_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_events_blocks_logos_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_events_blocks_logos_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_events_blocks_logos_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_events_blocks_logos_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_events_blocks_logos_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_events_blocks_logos_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_events_blocks_logos_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_events_blocks_testimonials_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_events_blocks_testimonials_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_events_blocks_testimonials_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_events_blocks_testimonials_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_events_blocks_testimonials_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_events_blocks_testimonials_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_events_blocks_testimonials_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_events_blocks_faq_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_events_blocks_faq_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_events_blocks_faq_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_events_blocks_faq_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_events_blocks_faq_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_events_blocks_faq_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_events_blocks_faq_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_events_blocks_cta_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_events_blocks_cta_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_events_blocks_cta_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_events_blocks_cta_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_events_blocks_cta_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_events_blocks_cta_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_events_blocks_cta_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__events_v_blocks_hero_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__events_v_blocks_hero_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__events_v_blocks_hero_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__events_v_blocks_hero_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__events_v_blocks_hero_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__events_v_blocks_hero_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__events_v_blocks_hero_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__events_v_blocks_rich_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__events_v_blocks_rich_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__events_v_blocks_rich_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__events_v_blocks_rich_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__events_v_blocks_rich_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__events_v_blocks_rich_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__events_v_blocks_rich_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__events_v_blocks_media_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__events_v_blocks_media_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__events_v_blocks_media_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__events_v_blocks_media_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__events_v_blocks_media_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__events_v_blocks_media_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__events_v_blocks_media_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__events_v_blocks_cards_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__events_v_blocks_cards_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__events_v_blocks_cards_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__events_v_blocks_cards_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__events_v_blocks_cards_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__events_v_blocks_cards_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__events_v_blocks_cards_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__events_v_blocks_listing_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__events_v_blocks_listing_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__events_v_blocks_listing_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__events_v_blocks_listing_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__events_v_blocks_listing_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__events_v_blocks_listing_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__events_v_blocks_listing_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__events_v_blocks_columns_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__events_v_blocks_columns_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__events_v_blocks_columns_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__events_v_blocks_columns_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__events_v_blocks_columns_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__events_v_blocks_columns_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__events_v_blocks_columns_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__events_v_blocks_tabs_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__events_v_blocks_tabs_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__events_v_blocks_tabs_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__events_v_blocks_tabs_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__events_v_blocks_tabs_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__events_v_blocks_tabs_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__events_v_blocks_tabs_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__events_v_blocks_stats_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__events_v_blocks_stats_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__events_v_blocks_stats_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__events_v_blocks_stats_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__events_v_blocks_stats_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__events_v_blocks_stats_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__events_v_blocks_stats_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__events_v_blocks_logos_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__events_v_blocks_logos_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__events_v_blocks_logos_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__events_v_blocks_logos_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__events_v_blocks_logos_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__events_v_blocks_logos_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__events_v_blocks_logos_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__events_v_blocks_testimonials_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__events_v_blocks_testimonials_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__events_v_blocks_testimonials_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__events_v_blocks_testimonials_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__events_v_blocks_testimonials_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__events_v_blocks_testimonials_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__events_v_blocks_testimonials_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__events_v_blocks_faq_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__events_v_blocks_faq_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__events_v_blocks_faq_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__events_v_blocks_faq_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__events_v_blocks_faq_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__events_v_blocks_faq_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__events_v_blocks_faq_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__events_v_blocks_cta_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__events_v_blocks_cta_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__events_v_blocks_cta_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__events_v_blocks_cta_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__events_v_blocks_cta_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__events_v_blocks_cta_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__events_v_blocks_cta_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_resources_blocks_hero_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_resources_blocks_hero_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_resources_blocks_hero_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_resources_blocks_hero_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_resources_blocks_hero_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_resources_blocks_hero_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_resources_blocks_hero_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_resources_blocks_rich_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_resources_blocks_rich_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_resources_blocks_rich_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_resources_blocks_rich_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_resources_blocks_rich_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_resources_blocks_rich_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_resources_blocks_rich_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_resources_blocks_media_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_resources_blocks_media_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_resources_blocks_media_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_resources_blocks_media_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_resources_blocks_media_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_resources_blocks_media_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_resources_blocks_media_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_resources_blocks_cards_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_resources_blocks_cards_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_resources_blocks_cards_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_resources_blocks_cards_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_resources_blocks_cards_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_resources_blocks_cards_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_resources_blocks_cards_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_resources_blocks_listing_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_resources_blocks_listing_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_resources_blocks_listing_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_resources_blocks_listing_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_resources_blocks_listing_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_resources_blocks_listing_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_resources_blocks_listing_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_resources_blocks_columns_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_resources_blocks_columns_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_resources_blocks_columns_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_resources_blocks_columns_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_resources_blocks_columns_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_resources_blocks_columns_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_resources_blocks_columns_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_resources_blocks_tabs_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_resources_blocks_tabs_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_resources_blocks_tabs_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_resources_blocks_tabs_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_resources_blocks_tabs_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_resources_blocks_tabs_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_resources_blocks_tabs_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_resources_blocks_stats_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_resources_blocks_stats_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_resources_blocks_stats_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_resources_blocks_stats_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_resources_blocks_stats_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_resources_blocks_stats_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_resources_blocks_stats_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_resources_blocks_logos_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_resources_blocks_logos_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_resources_blocks_logos_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_resources_blocks_logos_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_resources_blocks_logos_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_resources_blocks_logos_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_resources_blocks_logos_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_resources_blocks_testimonials_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_resources_blocks_testimonials_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_resources_blocks_testimonials_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_resources_blocks_testimonials_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_resources_blocks_testimonials_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_resources_blocks_testimonials_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_resources_blocks_testimonials_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_resources_blocks_faq_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_resources_blocks_faq_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_resources_blocks_faq_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_resources_blocks_faq_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_resources_blocks_faq_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_resources_blocks_faq_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_resources_blocks_faq_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_resources_blocks_cta_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_resources_blocks_cta_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_resources_blocks_cta_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_resources_blocks_cta_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_resources_blocks_cta_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_resources_blocks_cta_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_resources_blocks_cta_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__resources_v_blocks_hero_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__resources_v_blocks_hero_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__resources_v_blocks_hero_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__resources_v_blocks_hero_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__resources_v_blocks_hero_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__resources_v_blocks_hero_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__resources_v_blocks_hero_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__resources_v_blocks_rich_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__resources_v_blocks_rich_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__resources_v_blocks_rich_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__resources_v_blocks_rich_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__resources_v_blocks_rich_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__resources_v_blocks_rich_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__resources_v_blocks_rich_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__resources_v_blocks_media_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__resources_v_blocks_media_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__resources_v_blocks_media_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__resources_v_blocks_media_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__resources_v_blocks_media_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__resources_v_blocks_media_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__resources_v_blocks_media_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__resources_v_blocks_cards_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__resources_v_blocks_cards_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__resources_v_blocks_cards_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__resources_v_blocks_cards_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__resources_v_blocks_cards_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__resources_v_blocks_cards_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__resources_v_blocks_cards_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__resources_v_blocks_listing_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__resources_v_blocks_columns_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__resources_v_blocks_columns_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__resources_v_blocks_columns_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__resources_v_blocks_columns_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__resources_v_blocks_columns_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__resources_v_blocks_columns_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__resources_v_blocks_columns_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__resources_v_blocks_tabs_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__resources_v_blocks_tabs_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__resources_v_blocks_tabs_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__resources_v_blocks_tabs_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__resources_v_blocks_tabs_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__resources_v_blocks_tabs_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__resources_v_blocks_tabs_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__resources_v_blocks_stats_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__resources_v_blocks_stats_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__resources_v_blocks_stats_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__resources_v_blocks_stats_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__resources_v_blocks_stats_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__resources_v_blocks_stats_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__resources_v_blocks_stats_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__resources_v_blocks_logos_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__resources_v_blocks_logos_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__resources_v_blocks_logos_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__resources_v_blocks_logos_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__resources_v_blocks_logos_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__resources_v_blocks_logos_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__resources_v_blocks_logos_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__resources_v_blocks_testimonials_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__resources_v_blocks_testimonials_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__resources_v_blocks_testimonials_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__resources_v_blocks_testimonials_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__resources_v_blocks_testimonials_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__resources_v_blocks_testimonials_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__resources_v_blocks_testimonials_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__resources_v_blocks_faq_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__resources_v_blocks_faq_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__resources_v_blocks_faq_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__resources_v_blocks_faq_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__resources_v_blocks_faq_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__resources_v_blocks_faq_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__resources_v_blocks_faq_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__resources_v_blocks_cta_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__resources_v_blocks_cta_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__resources_v_blocks_cta_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__resources_v_blocks_cta_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__resources_v_blocks_cta_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__resources_v_blocks_cta_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__resources_v_blocks_cta_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_glossary_blocks_hero_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_glossary_blocks_hero_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_glossary_blocks_hero_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_glossary_blocks_hero_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_glossary_blocks_hero_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_glossary_blocks_hero_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_glossary_blocks_hero_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_glossary_blocks_rich_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_glossary_blocks_rich_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_glossary_blocks_rich_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_glossary_blocks_rich_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_glossary_blocks_rich_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_glossary_blocks_rich_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_glossary_blocks_rich_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_glossary_blocks_media_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_glossary_blocks_media_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_glossary_blocks_media_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_glossary_blocks_media_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_glossary_blocks_media_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_glossary_blocks_media_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_glossary_blocks_media_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_glossary_blocks_cards_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_glossary_blocks_cards_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_glossary_blocks_cards_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_glossary_blocks_cards_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_glossary_blocks_cards_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_glossary_blocks_cards_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_glossary_blocks_cards_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_glossary_blocks_listing_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_glossary_blocks_listing_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_glossary_blocks_listing_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_glossary_blocks_listing_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_glossary_blocks_listing_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_glossary_blocks_listing_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_glossary_blocks_listing_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_glossary_blocks_columns_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_glossary_blocks_columns_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_glossary_blocks_columns_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_glossary_blocks_columns_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_glossary_blocks_columns_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_glossary_blocks_columns_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_glossary_blocks_columns_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_glossary_blocks_tabs_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_glossary_blocks_tabs_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_glossary_blocks_tabs_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_glossary_blocks_tabs_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_glossary_blocks_tabs_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_glossary_blocks_tabs_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_glossary_blocks_tabs_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_glossary_blocks_stats_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_glossary_blocks_stats_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_glossary_blocks_stats_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_glossary_blocks_stats_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_glossary_blocks_stats_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_glossary_blocks_stats_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_glossary_blocks_stats_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_glossary_blocks_logos_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_glossary_blocks_logos_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_glossary_blocks_logos_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_glossary_blocks_logos_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_glossary_blocks_logos_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_glossary_blocks_logos_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_glossary_blocks_logos_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_glossary_blocks_testimonials_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_glossary_blocks_testimonials_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_glossary_blocks_testimonials_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_glossary_blocks_testimonials_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_glossary_blocks_testimonials_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_glossary_blocks_testimonials_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_glossary_blocks_testimonials_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_glossary_blocks_faq_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_glossary_blocks_faq_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_glossary_blocks_faq_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_glossary_blocks_faq_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_glossary_blocks_faq_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_glossary_blocks_faq_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_glossary_blocks_faq_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_glossary_blocks_cta_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_glossary_blocks_cta_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_glossary_blocks_cta_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_glossary_blocks_cta_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_glossary_blocks_cta_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_glossary_blocks_cta_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_glossary_blocks_cta_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__glossary_v_blocks_hero_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__glossary_v_blocks_hero_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__glossary_v_blocks_hero_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__glossary_v_blocks_hero_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__glossary_v_blocks_hero_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__glossary_v_blocks_hero_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__glossary_v_blocks_hero_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__glossary_v_blocks_rich_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__glossary_v_blocks_rich_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__glossary_v_blocks_rich_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__glossary_v_blocks_rich_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__glossary_v_blocks_rich_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__glossary_v_blocks_rich_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__glossary_v_blocks_rich_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__glossary_v_blocks_media_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__glossary_v_blocks_media_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__glossary_v_blocks_media_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__glossary_v_blocks_media_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__glossary_v_blocks_media_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__glossary_v_blocks_media_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__glossary_v_blocks_media_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__glossary_v_blocks_cards_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__glossary_v_blocks_cards_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__glossary_v_blocks_cards_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__glossary_v_blocks_cards_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__glossary_v_blocks_cards_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__glossary_v_blocks_cards_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__glossary_v_blocks_cards_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__glossary_v_blocks_listing_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__glossary_v_blocks_columns_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__glossary_v_blocks_columns_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__glossary_v_blocks_columns_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__glossary_v_blocks_columns_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__glossary_v_blocks_columns_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__glossary_v_blocks_columns_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__glossary_v_blocks_columns_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__glossary_v_blocks_tabs_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__glossary_v_blocks_tabs_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__glossary_v_blocks_tabs_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__glossary_v_blocks_tabs_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__glossary_v_blocks_tabs_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__glossary_v_blocks_tabs_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__glossary_v_blocks_tabs_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__glossary_v_blocks_stats_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__glossary_v_blocks_stats_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__glossary_v_blocks_stats_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__glossary_v_blocks_stats_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__glossary_v_blocks_stats_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__glossary_v_blocks_stats_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__glossary_v_blocks_stats_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__glossary_v_blocks_logos_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__glossary_v_blocks_logos_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__glossary_v_blocks_logos_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__glossary_v_blocks_logos_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__glossary_v_blocks_logos_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__glossary_v_blocks_logos_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__glossary_v_blocks_logos_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__glossary_v_blocks_testimonials_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__glossary_v_blocks_testimonials_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__glossary_v_blocks_testimonials_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__glossary_v_blocks_testimonials_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__glossary_v_blocks_testimonials_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__glossary_v_blocks_testimonials_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__glossary_v_blocks_testimonials_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__glossary_v_blocks_faq_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__glossary_v_blocks_faq_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__glossary_v_blocks_faq_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__glossary_v_blocks_faq_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__glossary_v_blocks_faq_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__glossary_v_blocks_faq_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__glossary_v_blocks_faq_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__glossary_v_blocks_cta_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__glossary_v_blocks_cta_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__glossary_v_blocks_cta_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__glossary_v_blocks_cta_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__glossary_v_blocks_cta_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__glossary_v_blocks_cta_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__glossary_v_blocks_cta_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_people_blocks_hero_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_people_blocks_hero_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_people_blocks_hero_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_people_blocks_hero_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_people_blocks_hero_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_people_blocks_hero_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_people_blocks_hero_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_people_blocks_rich_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_people_blocks_rich_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_people_blocks_rich_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_people_blocks_rich_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_people_blocks_rich_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_people_blocks_rich_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_people_blocks_rich_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_people_blocks_media_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_people_blocks_media_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_people_blocks_media_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_people_blocks_media_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_people_blocks_media_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_people_blocks_media_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_people_blocks_media_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_people_blocks_cards_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_people_blocks_cards_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_people_blocks_cards_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_people_blocks_cards_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_people_blocks_cards_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_people_blocks_cards_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_people_blocks_cards_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_people_blocks_listing_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_people_blocks_listing_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_people_blocks_listing_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_people_blocks_listing_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_people_blocks_listing_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_people_blocks_listing_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_people_blocks_listing_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_people_blocks_columns_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_people_blocks_columns_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_people_blocks_columns_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_people_blocks_columns_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_people_blocks_columns_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_people_blocks_columns_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_people_blocks_columns_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_people_blocks_tabs_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_people_blocks_tabs_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_people_blocks_tabs_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_people_blocks_tabs_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_people_blocks_tabs_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_people_blocks_tabs_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_people_blocks_tabs_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_people_blocks_stats_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_people_blocks_stats_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_people_blocks_stats_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_people_blocks_stats_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_people_blocks_stats_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_people_blocks_stats_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_people_blocks_stats_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_people_blocks_logos_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_people_blocks_logos_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_people_blocks_logos_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_people_blocks_logos_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_people_blocks_logos_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_people_blocks_logos_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_people_blocks_logos_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_people_blocks_testimonials_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_people_blocks_testimonials_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_people_blocks_testimonials_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_people_blocks_testimonials_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_people_blocks_testimonials_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_people_blocks_testimonials_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_people_blocks_testimonials_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_people_blocks_faq_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_people_blocks_faq_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_people_blocks_faq_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_people_blocks_faq_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_people_blocks_faq_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_people_blocks_faq_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_people_blocks_faq_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_people_blocks_cta_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_people_blocks_cta_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_people_blocks_cta_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_people_blocks_cta_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_people_blocks_cta_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_people_blocks_cta_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_people_blocks_cta_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__people_v_blocks_hero_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__people_v_blocks_hero_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__people_v_blocks_hero_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__people_v_blocks_hero_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__people_v_blocks_hero_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__people_v_blocks_hero_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__people_v_blocks_hero_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__people_v_blocks_rich_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__people_v_blocks_rich_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__people_v_blocks_rich_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__people_v_blocks_rich_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__people_v_blocks_rich_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__people_v_blocks_rich_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__people_v_blocks_rich_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__people_v_blocks_media_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__people_v_blocks_media_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__people_v_blocks_media_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__people_v_blocks_media_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__people_v_blocks_media_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__people_v_blocks_media_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__people_v_blocks_media_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__people_v_blocks_cards_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__people_v_blocks_cards_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__people_v_blocks_cards_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__people_v_blocks_cards_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__people_v_blocks_cards_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__people_v_blocks_cards_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__people_v_blocks_cards_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__people_v_blocks_listing_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__people_v_blocks_listing_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__people_v_blocks_listing_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__people_v_blocks_listing_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__people_v_blocks_listing_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__people_v_blocks_listing_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__people_v_blocks_listing_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__people_v_blocks_columns_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__people_v_blocks_columns_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__people_v_blocks_columns_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__people_v_blocks_columns_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__people_v_blocks_columns_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__people_v_blocks_columns_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__people_v_blocks_columns_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__people_v_blocks_tabs_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__people_v_blocks_tabs_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__people_v_blocks_tabs_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__people_v_blocks_tabs_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__people_v_blocks_tabs_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__people_v_blocks_tabs_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__people_v_blocks_tabs_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__people_v_blocks_stats_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__people_v_blocks_stats_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__people_v_blocks_stats_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__people_v_blocks_stats_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__people_v_blocks_stats_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__people_v_blocks_stats_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__people_v_blocks_stats_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__people_v_blocks_logos_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__people_v_blocks_logos_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__people_v_blocks_logos_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__people_v_blocks_logos_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__people_v_blocks_logos_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__people_v_blocks_logos_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__people_v_blocks_logos_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__people_v_blocks_testimonials_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__people_v_blocks_testimonials_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__people_v_blocks_testimonials_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__people_v_blocks_testimonials_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__people_v_blocks_testimonials_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__people_v_blocks_testimonials_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__people_v_blocks_testimonials_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__people_v_blocks_faq_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__people_v_blocks_faq_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__people_v_blocks_faq_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__people_v_blocks_faq_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__people_v_blocks_faq_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__people_v_blocks_faq_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__people_v_blocks_faq_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__people_v_blocks_cta_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__people_v_blocks_cta_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__people_v_blocks_cta_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__people_v_blocks_cta_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__people_v_blocks_cta_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__people_v_blocks_cta_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__people_v_blocks_cta_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_reusable_blocks_hero_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_reusable_blocks_hero_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_reusable_blocks_hero_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_reusable_blocks_hero_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_reusable_blocks_hero_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_reusable_blocks_hero_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_reusable_blocks_hero_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_reusable_blocks_rich_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_reusable_blocks_rich_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_reusable_blocks_rich_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_reusable_blocks_rich_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_reusable_blocks_rich_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_reusable_blocks_rich_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_reusable_blocks_rich_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_reusable_blocks_media_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_reusable_blocks_media_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_reusable_blocks_media_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_reusable_blocks_media_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_reusable_blocks_media_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_reusable_blocks_media_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_reusable_blocks_media_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_reusable_blocks_cards_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_reusable_blocks_cards_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_reusable_blocks_cards_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_reusable_blocks_cards_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_reusable_blocks_cards_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_reusable_blocks_cards_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_reusable_blocks_cards_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_reusable_blocks_listing_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_reusable_blocks_listing_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_reusable_blocks_listing_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_reusable_blocks_listing_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_reusable_blocks_listing_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_reusable_blocks_listing_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_reusable_blocks_listing_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_reusable_blocks_columns_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_reusable_blocks_columns_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_reusable_blocks_columns_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_reusable_blocks_columns_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_reusable_blocks_columns_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_reusable_blocks_columns_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_reusable_blocks_columns_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_reusable_blocks_tabs_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_reusable_blocks_tabs_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_reusable_blocks_tabs_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_reusable_blocks_tabs_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_reusable_blocks_tabs_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_reusable_blocks_tabs_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_reusable_blocks_tabs_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_reusable_blocks_stats_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_reusable_blocks_stats_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_reusable_blocks_stats_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_reusable_blocks_stats_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_reusable_blocks_stats_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_reusable_blocks_stats_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_reusable_blocks_stats_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_reusable_blocks_logos_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_reusable_blocks_logos_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_reusable_blocks_logos_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_reusable_blocks_logos_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_reusable_blocks_logos_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_reusable_blocks_logos_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_reusable_blocks_logos_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_reusable_blocks_testimonials_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_reusable_blocks_testimonials_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_reusable_blocks_testimonials_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_reusable_blocks_testimonials_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_reusable_blocks_testimonials_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_reusable_blocks_testimonials_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_reusable_blocks_testimonials_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_reusable_blocks_faq_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_reusable_blocks_faq_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_reusable_blocks_faq_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_reusable_blocks_faq_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_reusable_blocks_faq_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_reusable_blocks_faq_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_reusable_blocks_faq_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_reusable_blocks_cta_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_reusable_blocks_cta_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_reusable_blocks_cta_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_reusable_blocks_cta_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_reusable_blocks_cta_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_reusable_blocks_cta_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_reusable_blocks_cta_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__reusable_v_blocks_hero_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__reusable_v_blocks_hero_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__reusable_v_blocks_hero_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__reusable_v_blocks_hero_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__reusable_v_blocks_hero_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__reusable_v_blocks_hero_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__reusable_v_blocks_hero_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__reusable_v_blocks_rich_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__reusable_v_blocks_rich_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__reusable_v_blocks_rich_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__reusable_v_blocks_rich_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__reusable_v_blocks_rich_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__reusable_v_blocks_rich_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__reusable_v_blocks_rich_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__reusable_v_blocks_media_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__reusable_v_blocks_media_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__reusable_v_blocks_media_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__reusable_v_blocks_media_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__reusable_v_blocks_media_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__reusable_v_blocks_media_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__reusable_v_blocks_media_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__reusable_v_blocks_cards_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__reusable_v_blocks_cards_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__reusable_v_blocks_cards_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__reusable_v_blocks_cards_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__reusable_v_blocks_cards_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__reusable_v_blocks_cards_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__reusable_v_blocks_cards_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__reusable_v_blocks_listing_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__reusable_v_blocks_columns_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__reusable_v_blocks_columns_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__reusable_v_blocks_columns_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__reusable_v_blocks_columns_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__reusable_v_blocks_columns_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__reusable_v_blocks_columns_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__reusable_v_blocks_columns_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__reusable_v_blocks_tabs_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__reusable_v_blocks_tabs_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__reusable_v_blocks_tabs_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__reusable_v_blocks_tabs_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__reusable_v_blocks_tabs_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__reusable_v_blocks_tabs_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__reusable_v_blocks_tabs_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__reusable_v_blocks_stats_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__reusable_v_blocks_stats_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__reusable_v_blocks_stats_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__reusable_v_blocks_stats_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__reusable_v_blocks_stats_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__reusable_v_blocks_stats_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__reusable_v_blocks_stats_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__reusable_v_blocks_logos_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__reusable_v_blocks_logos_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__reusable_v_blocks_logos_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__reusable_v_blocks_logos_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__reusable_v_blocks_logos_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__reusable_v_blocks_logos_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__reusable_v_blocks_logos_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__reusable_v_blocks_testimonials_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__reusable_v_blocks_testimonials_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__reusable_v_blocks_testimonials_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__reusable_v_blocks_testimonials_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__reusable_v_blocks_testimonials_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__reusable_v_blocks_testimonials_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__reusable_v_blocks_testimonials_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__reusable_v_blocks_faq_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__reusable_v_blocks_faq_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__reusable_v_blocks_faq_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__reusable_v_blocks_faq_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__reusable_v_blocks_faq_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__reusable_v_blocks_faq_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__reusable_v_blocks_faq_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__reusable_v_blocks_cta_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__reusable_v_blocks_cta_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__reusable_v_blocks_cta_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__reusable_v_blocks_cta_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__reusable_v_blocks_cta_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__reusable_v_blocks_cta_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__reusable_v_blocks_cta_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hero_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hero_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hero_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hero_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hero_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hero_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hero_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_rich_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_rich_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_rich_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_rich_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_rich_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_rich_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_rich_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_media_text_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_media_text_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_media_text_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_media_text_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_media_text_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_media_text_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_media_text_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cards_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cards_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cards_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cards_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cards_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cards_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cards_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_listing_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_columns_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_columns_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_columns_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_columns_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_columns_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_columns_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_columns_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_tabs_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_tabs_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_tabs_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_tabs_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_tabs_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_tabs_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_tabs_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_stats_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_stats_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_stats_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_stats_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_stats_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_stats_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_stats_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_logos_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_logos_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_logos_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_logos_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_logos_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_logos_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_logos_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_testimonials_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_testimonials_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_testimonials_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_testimonials_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_testimonials_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_testimonials_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_testimonials_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_faq_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_faq_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_faq_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_faq_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_faq_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_faq_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_faq_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cta_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cta_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cta_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cta_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cta_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cta_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cta_vis_match" AS ENUM('all', 'any');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_device_show" AS ENUM('desktop', 'tablet', 'mobile');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_type" AS ENUM('device', 'date', 'field', 'url', 'items');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_field_name" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle', 'speakers', 'categories', 'tags', 'featuredImage');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_field_operator" AS ENUM('set', 'empty', 'equals', 'future');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_items_type" AS ENUM('posts', 'events', 'resources', 'glossary', 'people');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_items_when" AS ENUM('all', 'upcoming');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_match" AS ENUM('all', 'any');
  CREATE TABLE "pages_blocks_hero_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_hero_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_hero_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_pages_blocks_hero_vis_rules_field_name",
  	"field_operator" "enum_pages_blocks_hero_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_pages_blocks_hero_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_pages_blocks_hero_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "pages_blocks_rich_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_rich_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_rich_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_rich_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_pages_blocks_rich_text_vis_rules_field_name",
  	"field_operator" "enum_pages_blocks_rich_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_pages_blocks_rich_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_pages_blocks_rich_text_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "pages_blocks_media_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_media_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_media_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_media_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_pages_blocks_media_text_vis_rules_field_name",
  	"field_operator" "enum_pages_blocks_media_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_pages_blocks_media_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_pages_blocks_media_text_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "pages_blocks_cards_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_cards_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_cards_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_cards_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_pages_blocks_cards_vis_rules_field_name",
  	"field_operator" "enum_pages_blocks_cards_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_pages_blocks_cards_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_pages_blocks_cards_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "pages_blocks_listing_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_listing_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_listing_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_listing_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_pages_blocks_listing_vis_rules_field_name",
  	"field_operator" "enum_pages_blocks_listing_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_pages_blocks_listing_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_pages_blocks_listing_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "pages_blocks_columns_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_columns_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_columns_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_columns_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_pages_blocks_columns_vis_rules_field_name",
  	"field_operator" "enum_pages_blocks_columns_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_pages_blocks_columns_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_pages_blocks_columns_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "pages_blocks_tabs_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_tabs_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_tabs_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_tabs_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_pages_blocks_tabs_vis_rules_field_name",
  	"field_operator" "enum_pages_blocks_tabs_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_pages_blocks_tabs_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_pages_blocks_tabs_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "pages_blocks_stats_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_stats_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_stats_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_stats_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_pages_blocks_stats_vis_rules_field_name",
  	"field_operator" "enum_pages_blocks_stats_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_pages_blocks_stats_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_pages_blocks_stats_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "pages_blocks_logos_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_logos_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_logos_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_logos_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_pages_blocks_logos_vis_rules_field_name",
  	"field_operator" "enum_pages_blocks_logos_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_pages_blocks_logos_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_pages_blocks_logos_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "pages_blocks_testimonials_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_testimonials_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_testimonials_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_testimonials_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_pages_blocks_testimonials_vis_rules_field_name",
  	"field_operator" "enum_pages_blocks_testimonials_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_pages_blocks_testimonials_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_pages_blocks_testimonials_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "pages_blocks_faq_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_faq_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_faq_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_faq_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_pages_blocks_faq_vis_rules_field_name",
  	"field_operator" "enum_pages_blocks_faq_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_pages_blocks_faq_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_pages_blocks_faq_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "pages_blocks_cta_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_cta_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_cta_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_cta_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_pages_blocks_cta_vis_rules_field_name",
  	"field_operator" "enum_pages_blocks_cta_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_pages_blocks_cta_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_pages_blocks_cta_vis_rules_items_when" DEFAULT 'all'
  );
  
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
  
  CREATE TABLE "_pages_v_blocks_hero_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__pages_v_blocks_hero_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_hero_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_hero_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__pages_v_blocks_hero_vis_rules_field_name",
  	"field_operator" "enum__pages_v_blocks_hero_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__pages_v_blocks_hero_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__pages_v_blocks_hero_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_rich_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__pages_v_blocks_rich_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_rich_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_rich_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__pages_v_blocks_rich_text_vis_rules_field_name",
  	"field_operator" "enum__pages_v_blocks_rich_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__pages_v_blocks_rich_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__pages_v_blocks_rich_text_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__pages_v_blocks_media_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_media_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_media_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__pages_v_blocks_media_text_vis_rules_field_name",
  	"field_operator" "enum__pages_v_blocks_media_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__pages_v_blocks_media_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__pages_v_blocks_media_text_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cards_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__pages_v_blocks_cards_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_cards_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_cards_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__pages_v_blocks_cards_vis_rules_field_name",
  	"field_operator" "enum__pages_v_blocks_cards_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__pages_v_blocks_cards_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__pages_v_blocks_cards_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_listing_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__pages_v_blocks_listing_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_listing_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_listing_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__pages_v_blocks_listing_vis_rules_field_name",
  	"field_operator" "enum__pages_v_blocks_listing_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__pages_v_blocks_listing_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__pages_v_blocks_listing_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_columns_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__pages_v_blocks_columns_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_columns_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_columns_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__pages_v_blocks_columns_vis_rules_field_name",
  	"field_operator" "enum__pages_v_blocks_columns_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__pages_v_blocks_columns_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__pages_v_blocks_columns_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_tabs_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__pages_v_blocks_tabs_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_tabs_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_tabs_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__pages_v_blocks_tabs_vis_rules_field_name",
  	"field_operator" "enum__pages_v_blocks_tabs_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__pages_v_blocks_tabs_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__pages_v_blocks_tabs_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_stats_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__pages_v_blocks_stats_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_stats_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_stats_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__pages_v_blocks_stats_vis_rules_field_name",
  	"field_operator" "enum__pages_v_blocks_stats_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__pages_v_blocks_stats_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__pages_v_blocks_stats_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_logos_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__pages_v_blocks_logos_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_logos_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_logos_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__pages_v_blocks_logos_vis_rules_field_name",
  	"field_operator" "enum__pages_v_blocks_logos_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__pages_v_blocks_logos_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__pages_v_blocks_logos_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__pages_v_blocks_testimonials_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_testimonials_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__pages_v_blocks_testimonials_vis_rules_field_name",
  	"field_operator" "enum__pages_v_blocks_testimonials_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__pages_v_blocks_testimonials_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__pages_v_blocks_testimonials_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__pages_v_blocks_faq_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_faq_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_faq_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__pages_v_blocks_faq_vis_rules_field_name",
  	"field_operator" "enum__pages_v_blocks_faq_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__pages_v_blocks_faq_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__pages_v_blocks_faq_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__pages_v_blocks_cta_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_cta_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_cta_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__pages_v_blocks_cta_vis_rules_field_name",
  	"field_operator" "enum__pages_v_blocks_cta_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__pages_v_blocks_cta_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__pages_v_blocks_cta_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
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
  
  CREATE TABLE "posts_blocks_hero_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_posts_blocks_hero_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_hero_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_posts_blocks_hero_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_posts_blocks_hero_vis_rules_field_name",
  	"field_operator" "enum_posts_blocks_hero_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_posts_blocks_hero_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_posts_blocks_hero_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "posts_blocks_rich_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_posts_blocks_rich_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_rich_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_posts_blocks_rich_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_posts_blocks_rich_text_vis_rules_field_name",
  	"field_operator" "enum_posts_blocks_rich_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_posts_blocks_rich_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_posts_blocks_rich_text_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "posts_blocks_media_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_posts_blocks_media_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_media_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_posts_blocks_media_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_posts_blocks_media_text_vis_rules_field_name",
  	"field_operator" "enum_posts_blocks_media_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_posts_blocks_media_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_posts_blocks_media_text_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "posts_blocks_cards_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_posts_blocks_cards_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_cards_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_posts_blocks_cards_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_posts_blocks_cards_vis_rules_field_name",
  	"field_operator" "enum_posts_blocks_cards_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_posts_blocks_cards_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_posts_blocks_cards_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "posts_blocks_listing_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_posts_blocks_listing_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_listing_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_posts_blocks_listing_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_posts_blocks_listing_vis_rules_field_name",
  	"field_operator" "enum_posts_blocks_listing_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_posts_blocks_listing_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_posts_blocks_listing_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "posts_blocks_columns_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_posts_blocks_columns_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_columns_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_posts_blocks_columns_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_posts_blocks_columns_vis_rules_field_name",
  	"field_operator" "enum_posts_blocks_columns_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_posts_blocks_columns_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_posts_blocks_columns_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "posts_blocks_tabs_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_posts_blocks_tabs_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_tabs_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_posts_blocks_tabs_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_posts_blocks_tabs_vis_rules_field_name",
  	"field_operator" "enum_posts_blocks_tabs_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_posts_blocks_tabs_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_posts_blocks_tabs_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "posts_blocks_stats_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_posts_blocks_stats_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_stats_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_posts_blocks_stats_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_posts_blocks_stats_vis_rules_field_name",
  	"field_operator" "enum_posts_blocks_stats_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_posts_blocks_stats_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_posts_blocks_stats_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "posts_blocks_logos_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_posts_blocks_logos_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_logos_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_posts_blocks_logos_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_posts_blocks_logos_vis_rules_field_name",
  	"field_operator" "enum_posts_blocks_logos_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_posts_blocks_logos_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_posts_blocks_logos_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "posts_blocks_testimonials_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_posts_blocks_testimonials_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_testimonials_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_posts_blocks_testimonials_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_posts_blocks_testimonials_vis_rules_field_name",
  	"field_operator" "enum_posts_blocks_testimonials_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_posts_blocks_testimonials_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_posts_blocks_testimonials_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "posts_blocks_faq_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_posts_blocks_faq_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_faq_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_posts_blocks_faq_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_posts_blocks_faq_vis_rules_field_name",
  	"field_operator" "enum_posts_blocks_faq_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_posts_blocks_faq_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_posts_blocks_faq_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "posts_blocks_cta_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_posts_blocks_cta_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_cta_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_posts_blocks_cta_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_posts_blocks_cta_vis_rules_field_name",
  	"field_operator" "enum_posts_blocks_cta_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_posts_blocks_cta_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_posts_blocks_cta_vis_rules_items_when" DEFAULT 'all'
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
  
  CREATE TABLE "_posts_v_blocks_hero_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__posts_v_blocks_hero_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_hero_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__posts_v_blocks_hero_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__posts_v_blocks_hero_vis_rules_field_name",
  	"field_operator" "enum__posts_v_blocks_hero_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__posts_v_blocks_hero_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__posts_v_blocks_hero_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_rich_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__posts_v_blocks_rich_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_rich_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__posts_v_blocks_rich_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__posts_v_blocks_rich_text_vis_rules_field_name",
  	"field_operator" "enum__posts_v_blocks_rich_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__posts_v_blocks_rich_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__posts_v_blocks_rich_text_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_media_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__posts_v_blocks_media_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_media_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__posts_v_blocks_media_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__posts_v_blocks_media_text_vis_rules_field_name",
  	"field_operator" "enum__posts_v_blocks_media_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__posts_v_blocks_media_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__posts_v_blocks_media_text_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_cards_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__posts_v_blocks_cards_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_cards_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__posts_v_blocks_cards_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__posts_v_blocks_cards_vis_rules_field_name",
  	"field_operator" "enum__posts_v_blocks_cards_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__posts_v_blocks_cards_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__posts_v_blocks_cards_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_listing_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__posts_v_blocks_listing_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_listing_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__posts_v_blocks_listing_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__posts_v_blocks_listing_vis_rules_field_name",
  	"field_operator" "enum__posts_v_blocks_listing_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__posts_v_blocks_listing_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__posts_v_blocks_listing_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_columns_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__posts_v_blocks_columns_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_columns_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__posts_v_blocks_columns_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__posts_v_blocks_columns_vis_rules_field_name",
  	"field_operator" "enum__posts_v_blocks_columns_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__posts_v_blocks_columns_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__posts_v_blocks_columns_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_tabs_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__posts_v_blocks_tabs_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_tabs_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__posts_v_blocks_tabs_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__posts_v_blocks_tabs_vis_rules_field_name",
  	"field_operator" "enum__posts_v_blocks_tabs_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__posts_v_blocks_tabs_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__posts_v_blocks_tabs_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_stats_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__posts_v_blocks_stats_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_stats_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__posts_v_blocks_stats_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__posts_v_blocks_stats_vis_rules_field_name",
  	"field_operator" "enum__posts_v_blocks_stats_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__posts_v_blocks_stats_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__posts_v_blocks_stats_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_logos_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__posts_v_blocks_logos_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_logos_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__posts_v_blocks_logos_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__posts_v_blocks_logos_vis_rules_field_name",
  	"field_operator" "enum__posts_v_blocks_logos_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__posts_v_blocks_logos_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__posts_v_blocks_logos_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_testimonials_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__posts_v_blocks_testimonials_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_testimonials_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__posts_v_blocks_testimonials_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__posts_v_blocks_testimonials_vis_rules_field_name",
  	"field_operator" "enum__posts_v_blocks_testimonials_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__posts_v_blocks_testimonials_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__posts_v_blocks_testimonials_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_faq_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__posts_v_blocks_faq_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_faq_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__posts_v_blocks_faq_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__posts_v_blocks_faq_vis_rules_field_name",
  	"field_operator" "enum__posts_v_blocks_faq_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__posts_v_blocks_faq_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__posts_v_blocks_faq_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_cta_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__posts_v_blocks_cta_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_cta_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__posts_v_blocks_cta_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__posts_v_blocks_cta_vis_rules_field_name",
  	"field_operator" "enum__posts_v_blocks_cta_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__posts_v_blocks_cta_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__posts_v_blocks_cta_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
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
  
  CREATE TABLE "events_blocks_hero_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_events_blocks_hero_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "events_blocks_hero_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_events_blocks_hero_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_events_blocks_hero_vis_rules_field_name",
  	"field_operator" "enum_events_blocks_hero_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_events_blocks_hero_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_events_blocks_hero_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "events_blocks_rich_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_events_blocks_rich_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "events_blocks_rich_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_events_blocks_rich_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_events_blocks_rich_text_vis_rules_field_name",
  	"field_operator" "enum_events_blocks_rich_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_events_blocks_rich_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_events_blocks_rich_text_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "events_blocks_media_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_events_blocks_media_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "events_blocks_media_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_events_blocks_media_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_events_blocks_media_text_vis_rules_field_name",
  	"field_operator" "enum_events_blocks_media_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_events_blocks_media_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_events_blocks_media_text_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "events_blocks_cards_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_events_blocks_cards_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "events_blocks_cards_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_events_blocks_cards_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_events_blocks_cards_vis_rules_field_name",
  	"field_operator" "enum_events_blocks_cards_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_events_blocks_cards_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_events_blocks_cards_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "events_blocks_listing_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_events_blocks_listing_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "events_blocks_listing_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_events_blocks_listing_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_events_blocks_listing_vis_rules_field_name",
  	"field_operator" "enum_events_blocks_listing_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_events_blocks_listing_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_events_blocks_listing_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "events_blocks_columns_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_events_blocks_columns_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "events_blocks_columns_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_events_blocks_columns_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_events_blocks_columns_vis_rules_field_name",
  	"field_operator" "enum_events_blocks_columns_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_events_blocks_columns_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_events_blocks_columns_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "events_blocks_tabs_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_events_blocks_tabs_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "events_blocks_tabs_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_events_blocks_tabs_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_events_blocks_tabs_vis_rules_field_name",
  	"field_operator" "enum_events_blocks_tabs_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_events_blocks_tabs_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_events_blocks_tabs_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "events_blocks_stats_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_events_blocks_stats_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "events_blocks_stats_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_events_blocks_stats_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_events_blocks_stats_vis_rules_field_name",
  	"field_operator" "enum_events_blocks_stats_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_events_blocks_stats_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_events_blocks_stats_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "events_blocks_logos_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_events_blocks_logos_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "events_blocks_logos_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_events_blocks_logos_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_events_blocks_logos_vis_rules_field_name",
  	"field_operator" "enum_events_blocks_logos_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_events_blocks_logos_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_events_blocks_logos_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "events_blocks_testimonials_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_events_blocks_testimonials_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "events_blocks_testimonials_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_events_blocks_testimonials_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_events_blocks_testimonials_vis_rules_field_name",
  	"field_operator" "enum_events_blocks_testimonials_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_events_blocks_testimonials_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_events_blocks_testimonials_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "events_blocks_faq_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_events_blocks_faq_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "events_blocks_faq_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_events_blocks_faq_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_events_blocks_faq_vis_rules_field_name",
  	"field_operator" "enum_events_blocks_faq_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_events_blocks_faq_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_events_blocks_faq_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "events_blocks_cta_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_events_blocks_cta_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "events_blocks_cta_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_events_blocks_cta_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_events_blocks_cta_vis_rules_field_name",
  	"field_operator" "enum_events_blocks_cta_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_events_blocks_cta_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_events_blocks_cta_vis_rules_items_when" DEFAULT 'all'
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
  
  CREATE TABLE "_events_v_blocks_hero_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__events_v_blocks_hero_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_events_v_blocks_hero_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__events_v_blocks_hero_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__events_v_blocks_hero_vis_rules_field_name",
  	"field_operator" "enum__events_v_blocks_hero_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__events_v_blocks_hero_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__events_v_blocks_hero_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_rich_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__events_v_blocks_rich_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_events_v_blocks_rich_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__events_v_blocks_rich_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__events_v_blocks_rich_text_vis_rules_field_name",
  	"field_operator" "enum__events_v_blocks_rich_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__events_v_blocks_rich_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__events_v_blocks_rich_text_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_media_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__events_v_blocks_media_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_events_v_blocks_media_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__events_v_blocks_media_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__events_v_blocks_media_text_vis_rules_field_name",
  	"field_operator" "enum__events_v_blocks_media_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__events_v_blocks_media_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__events_v_blocks_media_text_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_cards_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__events_v_blocks_cards_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_events_v_blocks_cards_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__events_v_blocks_cards_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__events_v_blocks_cards_vis_rules_field_name",
  	"field_operator" "enum__events_v_blocks_cards_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__events_v_blocks_cards_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__events_v_blocks_cards_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_listing_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__events_v_blocks_listing_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_events_v_blocks_listing_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__events_v_blocks_listing_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__events_v_blocks_listing_vis_rules_field_name",
  	"field_operator" "enum__events_v_blocks_listing_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__events_v_blocks_listing_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__events_v_blocks_listing_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_columns_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__events_v_blocks_columns_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_events_v_blocks_columns_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__events_v_blocks_columns_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__events_v_blocks_columns_vis_rules_field_name",
  	"field_operator" "enum__events_v_blocks_columns_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__events_v_blocks_columns_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__events_v_blocks_columns_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_tabs_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__events_v_blocks_tabs_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_events_v_blocks_tabs_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__events_v_blocks_tabs_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__events_v_blocks_tabs_vis_rules_field_name",
  	"field_operator" "enum__events_v_blocks_tabs_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__events_v_blocks_tabs_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__events_v_blocks_tabs_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_stats_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__events_v_blocks_stats_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_events_v_blocks_stats_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__events_v_blocks_stats_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__events_v_blocks_stats_vis_rules_field_name",
  	"field_operator" "enum__events_v_blocks_stats_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__events_v_blocks_stats_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__events_v_blocks_stats_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_logos_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__events_v_blocks_logos_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_events_v_blocks_logos_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__events_v_blocks_logos_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__events_v_blocks_logos_vis_rules_field_name",
  	"field_operator" "enum__events_v_blocks_logos_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__events_v_blocks_logos_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__events_v_blocks_logos_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_testimonials_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__events_v_blocks_testimonials_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_events_v_blocks_testimonials_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__events_v_blocks_testimonials_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__events_v_blocks_testimonials_vis_rules_field_name",
  	"field_operator" "enum__events_v_blocks_testimonials_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__events_v_blocks_testimonials_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__events_v_blocks_testimonials_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_faq_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__events_v_blocks_faq_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_events_v_blocks_faq_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__events_v_blocks_faq_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__events_v_blocks_faq_vis_rules_field_name",
  	"field_operator" "enum__events_v_blocks_faq_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__events_v_blocks_faq_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__events_v_blocks_faq_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_cta_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__events_v_blocks_cta_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_events_v_blocks_cta_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__events_v_blocks_cta_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__events_v_blocks_cta_vis_rules_field_name",
  	"field_operator" "enum__events_v_blocks_cta_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__events_v_blocks_cta_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__events_v_blocks_cta_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
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
  
  CREATE TABLE "resources_blocks_hero_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_resources_blocks_hero_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "resources_blocks_hero_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_resources_blocks_hero_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_resources_blocks_hero_vis_rules_field_name",
  	"field_operator" "enum_resources_blocks_hero_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_resources_blocks_hero_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_resources_blocks_hero_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "resources_blocks_rich_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_resources_blocks_rich_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "resources_blocks_rich_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_resources_blocks_rich_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_resources_blocks_rich_text_vis_rules_field_name",
  	"field_operator" "enum_resources_blocks_rich_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_resources_blocks_rich_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_resources_blocks_rich_text_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "resources_blocks_media_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_resources_blocks_media_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "resources_blocks_media_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_resources_blocks_media_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_resources_blocks_media_text_vis_rules_field_name",
  	"field_operator" "enum_resources_blocks_media_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_resources_blocks_media_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_resources_blocks_media_text_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "resources_blocks_cards_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_resources_blocks_cards_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "resources_blocks_cards_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_resources_blocks_cards_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_resources_blocks_cards_vis_rules_field_name",
  	"field_operator" "enum_resources_blocks_cards_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_resources_blocks_cards_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_resources_blocks_cards_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "resources_blocks_listing_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_resources_blocks_listing_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "resources_blocks_listing_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_resources_blocks_listing_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_resources_blocks_listing_vis_rules_field_name",
  	"field_operator" "enum_resources_blocks_listing_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_resources_blocks_listing_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_resources_blocks_listing_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "resources_blocks_columns_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_resources_blocks_columns_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "resources_blocks_columns_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_resources_blocks_columns_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_resources_blocks_columns_vis_rules_field_name",
  	"field_operator" "enum_resources_blocks_columns_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_resources_blocks_columns_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_resources_blocks_columns_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "resources_blocks_tabs_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_resources_blocks_tabs_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "resources_blocks_tabs_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_resources_blocks_tabs_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_resources_blocks_tabs_vis_rules_field_name",
  	"field_operator" "enum_resources_blocks_tabs_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_resources_blocks_tabs_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_resources_blocks_tabs_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "resources_blocks_stats_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_resources_blocks_stats_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "resources_blocks_stats_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_resources_blocks_stats_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_resources_blocks_stats_vis_rules_field_name",
  	"field_operator" "enum_resources_blocks_stats_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_resources_blocks_stats_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_resources_blocks_stats_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "resources_blocks_logos_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_resources_blocks_logos_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "resources_blocks_logos_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_resources_blocks_logos_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_resources_blocks_logos_vis_rules_field_name",
  	"field_operator" "enum_resources_blocks_logos_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_resources_blocks_logos_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_resources_blocks_logos_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "resources_blocks_testimonials_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_resources_blocks_testimonials_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "resources_blocks_testimonials_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_resources_blocks_testimonials_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_resources_blocks_testimonials_vis_rules_field_name",
  	"field_operator" "enum_resources_blocks_testimonials_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_resources_blocks_testimonials_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_resources_blocks_testimonials_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "resources_blocks_faq_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_resources_blocks_faq_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "resources_blocks_faq_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_resources_blocks_faq_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_resources_blocks_faq_vis_rules_field_name",
  	"field_operator" "enum_resources_blocks_faq_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_resources_blocks_faq_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_resources_blocks_faq_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "resources_blocks_cta_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_resources_blocks_cta_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "resources_blocks_cta_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_resources_blocks_cta_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_resources_blocks_cta_vis_rules_field_name",
  	"field_operator" "enum_resources_blocks_cta_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_resources_blocks_cta_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_resources_blocks_cta_vis_rules_items_when" DEFAULT 'all'
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
  
  CREATE TABLE "_resources_v_blocks_hero_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__resources_v_blocks_hero_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_resources_v_blocks_hero_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__resources_v_blocks_hero_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__resources_v_blocks_hero_vis_rules_field_name",
  	"field_operator" "enum__resources_v_blocks_hero_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__resources_v_blocks_hero_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__resources_v_blocks_hero_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_rich_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__resources_v_blocks_rich_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_resources_v_blocks_rich_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__resources_v_blocks_rich_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__resources_v_blocks_rich_text_vis_rules_field_name",
  	"field_operator" "enum__resources_v_blocks_rich_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__resources_v_blocks_rich_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__resources_v_blocks_rich_text_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_media_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__resources_v_blocks_media_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_resources_v_blocks_media_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__resources_v_blocks_media_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__resources_v_blocks_media_text_vis_rules_field_name",
  	"field_operator" "enum__resources_v_blocks_media_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__resources_v_blocks_media_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__resources_v_blocks_media_text_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_cards_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__resources_v_blocks_cards_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_resources_v_blocks_cards_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__resources_v_blocks_cards_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__resources_v_blocks_cards_vis_rules_field_name",
  	"field_operator" "enum__resources_v_blocks_cards_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__resources_v_blocks_cards_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__resources_v_blocks_cards_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_listing_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__resources_v_blocks_listing_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_resources_v_blocks_listing_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__resources_v_blocks_listing_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__resources_v_blocks_listing_vis_rules_field_name",
  	"field_operator" "enum__resources_v_blocks_listing_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__resources_v_blocks_listing_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__resources_v_blocks_listing_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_columns_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__resources_v_blocks_columns_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_resources_v_blocks_columns_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__resources_v_blocks_columns_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__resources_v_blocks_columns_vis_rules_field_name",
  	"field_operator" "enum__resources_v_blocks_columns_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__resources_v_blocks_columns_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__resources_v_blocks_columns_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_tabs_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__resources_v_blocks_tabs_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_resources_v_blocks_tabs_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__resources_v_blocks_tabs_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__resources_v_blocks_tabs_vis_rules_field_name",
  	"field_operator" "enum__resources_v_blocks_tabs_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__resources_v_blocks_tabs_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__resources_v_blocks_tabs_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_stats_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__resources_v_blocks_stats_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_resources_v_blocks_stats_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__resources_v_blocks_stats_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__resources_v_blocks_stats_vis_rules_field_name",
  	"field_operator" "enum__resources_v_blocks_stats_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__resources_v_blocks_stats_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__resources_v_blocks_stats_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_logos_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__resources_v_blocks_logos_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_resources_v_blocks_logos_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__resources_v_blocks_logos_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__resources_v_blocks_logos_vis_rules_field_name",
  	"field_operator" "enum__resources_v_blocks_logos_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__resources_v_blocks_logos_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__resources_v_blocks_logos_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_testimonials_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__resources_v_blocks_testimonials_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_resources_v_blocks_testimonials_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__resources_v_blocks_testimonials_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__resources_v_blocks_testimonials_vis_rules_field_name",
  	"field_operator" "enum__resources_v_blocks_testimonials_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__resources_v_blocks_testimonials_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__resources_v_blocks_testimonials_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_faq_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__resources_v_blocks_faq_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_resources_v_blocks_faq_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__resources_v_blocks_faq_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__resources_v_blocks_faq_vis_rules_field_name",
  	"field_operator" "enum__resources_v_blocks_faq_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__resources_v_blocks_faq_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__resources_v_blocks_faq_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_cta_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__resources_v_blocks_cta_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_resources_v_blocks_cta_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__resources_v_blocks_cta_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__resources_v_blocks_cta_vis_rules_field_name",
  	"field_operator" "enum__resources_v_blocks_cta_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__resources_v_blocks_cta_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__resources_v_blocks_cta_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
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
  
  CREATE TABLE "glossary_blocks_hero_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_glossary_blocks_hero_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "glossary_blocks_hero_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_glossary_blocks_hero_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_glossary_blocks_hero_vis_rules_field_name",
  	"field_operator" "enum_glossary_blocks_hero_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_glossary_blocks_hero_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_glossary_blocks_hero_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "glossary_blocks_rich_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_glossary_blocks_rich_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "glossary_blocks_rich_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_glossary_blocks_rich_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_glossary_blocks_rich_text_vis_rules_field_name",
  	"field_operator" "enum_glossary_blocks_rich_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_glossary_blocks_rich_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_glossary_blocks_rich_text_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "glossary_blocks_media_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_glossary_blocks_media_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "glossary_blocks_media_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_glossary_blocks_media_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_glossary_blocks_media_text_vis_rules_field_name",
  	"field_operator" "enum_glossary_blocks_media_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_glossary_blocks_media_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_glossary_blocks_media_text_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "glossary_blocks_cards_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_glossary_blocks_cards_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "glossary_blocks_cards_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_glossary_blocks_cards_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_glossary_blocks_cards_vis_rules_field_name",
  	"field_operator" "enum_glossary_blocks_cards_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_glossary_blocks_cards_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_glossary_blocks_cards_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "glossary_blocks_listing_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_glossary_blocks_listing_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "glossary_blocks_listing_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_glossary_blocks_listing_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_glossary_blocks_listing_vis_rules_field_name",
  	"field_operator" "enum_glossary_blocks_listing_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_glossary_blocks_listing_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_glossary_blocks_listing_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "glossary_blocks_columns_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_glossary_blocks_columns_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "glossary_blocks_columns_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_glossary_blocks_columns_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_glossary_blocks_columns_vis_rules_field_name",
  	"field_operator" "enum_glossary_blocks_columns_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_glossary_blocks_columns_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_glossary_blocks_columns_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "glossary_blocks_tabs_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_glossary_blocks_tabs_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "glossary_blocks_tabs_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_glossary_blocks_tabs_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_glossary_blocks_tabs_vis_rules_field_name",
  	"field_operator" "enum_glossary_blocks_tabs_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_glossary_blocks_tabs_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_glossary_blocks_tabs_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "glossary_blocks_stats_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_glossary_blocks_stats_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "glossary_blocks_stats_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_glossary_blocks_stats_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_glossary_blocks_stats_vis_rules_field_name",
  	"field_operator" "enum_glossary_blocks_stats_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_glossary_blocks_stats_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_glossary_blocks_stats_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "glossary_blocks_logos_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_glossary_blocks_logos_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "glossary_blocks_logos_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_glossary_blocks_logos_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_glossary_blocks_logos_vis_rules_field_name",
  	"field_operator" "enum_glossary_blocks_logos_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_glossary_blocks_logos_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_glossary_blocks_logos_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "glossary_blocks_testimonials_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_glossary_blocks_testimonials_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "glossary_blocks_testimonials_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_glossary_blocks_testimonials_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_glossary_blocks_testimonials_vis_rules_field_name",
  	"field_operator" "enum_glossary_blocks_testimonials_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_glossary_blocks_testimonials_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_glossary_blocks_testimonials_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "glossary_blocks_faq_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_glossary_blocks_faq_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "glossary_blocks_faq_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_glossary_blocks_faq_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_glossary_blocks_faq_vis_rules_field_name",
  	"field_operator" "enum_glossary_blocks_faq_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_glossary_blocks_faq_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_glossary_blocks_faq_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "glossary_blocks_cta_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_glossary_blocks_cta_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "glossary_blocks_cta_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_glossary_blocks_cta_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_glossary_blocks_cta_vis_rules_field_name",
  	"field_operator" "enum_glossary_blocks_cta_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_glossary_blocks_cta_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_glossary_blocks_cta_vis_rules_items_when" DEFAULT 'all'
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
  
  CREATE TABLE "_glossary_v_blocks_hero_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__glossary_v_blocks_hero_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_glossary_v_blocks_hero_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__glossary_v_blocks_hero_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__glossary_v_blocks_hero_vis_rules_field_name",
  	"field_operator" "enum__glossary_v_blocks_hero_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__glossary_v_blocks_hero_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__glossary_v_blocks_hero_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_rich_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__glossary_v_blocks_rich_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_glossary_v_blocks_rich_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__glossary_v_blocks_rich_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__glossary_v_blocks_rich_text_vis_rules_field_name",
  	"field_operator" "enum__glossary_v_blocks_rich_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__glossary_v_blocks_rich_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__glossary_v_blocks_rich_text_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_media_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__glossary_v_blocks_media_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_glossary_v_blocks_media_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__glossary_v_blocks_media_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__glossary_v_blocks_media_text_vis_rules_field_name",
  	"field_operator" "enum__glossary_v_blocks_media_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__glossary_v_blocks_media_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__glossary_v_blocks_media_text_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_cards_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__glossary_v_blocks_cards_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_glossary_v_blocks_cards_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__glossary_v_blocks_cards_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__glossary_v_blocks_cards_vis_rules_field_name",
  	"field_operator" "enum__glossary_v_blocks_cards_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__glossary_v_blocks_cards_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__glossary_v_blocks_cards_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_listing_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__glossary_v_blocks_listing_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_glossary_v_blocks_listing_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__glossary_v_blocks_listing_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__glossary_v_blocks_listing_vis_rules_field_name",
  	"field_operator" "enum__glossary_v_blocks_listing_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__glossary_v_blocks_listing_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__glossary_v_blocks_listing_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_columns_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__glossary_v_blocks_columns_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_glossary_v_blocks_columns_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__glossary_v_blocks_columns_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__glossary_v_blocks_columns_vis_rules_field_name",
  	"field_operator" "enum__glossary_v_blocks_columns_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__glossary_v_blocks_columns_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__glossary_v_blocks_columns_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_tabs_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__glossary_v_blocks_tabs_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_glossary_v_blocks_tabs_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__glossary_v_blocks_tabs_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__glossary_v_blocks_tabs_vis_rules_field_name",
  	"field_operator" "enum__glossary_v_blocks_tabs_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__glossary_v_blocks_tabs_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__glossary_v_blocks_tabs_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_stats_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__glossary_v_blocks_stats_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_glossary_v_blocks_stats_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__glossary_v_blocks_stats_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__glossary_v_blocks_stats_vis_rules_field_name",
  	"field_operator" "enum__glossary_v_blocks_stats_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__glossary_v_blocks_stats_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__glossary_v_blocks_stats_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_logos_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__glossary_v_blocks_logos_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_glossary_v_blocks_logos_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__glossary_v_blocks_logos_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__glossary_v_blocks_logos_vis_rules_field_name",
  	"field_operator" "enum__glossary_v_blocks_logos_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__glossary_v_blocks_logos_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__glossary_v_blocks_logos_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_testimonials_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__glossary_v_blocks_testimonials_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_glossary_v_blocks_testimonials_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__glossary_v_blocks_testimonials_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__glossary_v_blocks_testimonials_vis_rules_field_name",
  	"field_operator" "enum__glossary_v_blocks_testimonials_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__glossary_v_blocks_testimonials_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__glossary_v_blocks_testimonials_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_faq_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__glossary_v_blocks_faq_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_glossary_v_blocks_faq_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__glossary_v_blocks_faq_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__glossary_v_blocks_faq_vis_rules_field_name",
  	"field_operator" "enum__glossary_v_blocks_faq_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__glossary_v_blocks_faq_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__glossary_v_blocks_faq_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_cta_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__glossary_v_blocks_cta_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_glossary_v_blocks_cta_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__glossary_v_blocks_cta_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__glossary_v_blocks_cta_vis_rules_field_name",
  	"field_operator" "enum__glossary_v_blocks_cta_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__glossary_v_blocks_cta_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__glossary_v_blocks_cta_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
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
  
  CREATE TABLE "people_blocks_hero_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_people_blocks_hero_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "people_blocks_hero_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_people_blocks_hero_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_people_blocks_hero_vis_rules_field_name",
  	"field_operator" "enum_people_blocks_hero_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_people_blocks_hero_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_people_blocks_hero_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "people_blocks_rich_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_people_blocks_rich_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "people_blocks_rich_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_people_blocks_rich_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_people_blocks_rich_text_vis_rules_field_name",
  	"field_operator" "enum_people_blocks_rich_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_people_blocks_rich_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_people_blocks_rich_text_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "people_blocks_media_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_people_blocks_media_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "people_blocks_media_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_people_blocks_media_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_people_blocks_media_text_vis_rules_field_name",
  	"field_operator" "enum_people_blocks_media_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_people_blocks_media_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_people_blocks_media_text_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "people_blocks_cards_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_people_blocks_cards_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "people_blocks_cards_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_people_blocks_cards_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_people_blocks_cards_vis_rules_field_name",
  	"field_operator" "enum_people_blocks_cards_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_people_blocks_cards_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_people_blocks_cards_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "people_blocks_listing_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_people_blocks_listing_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "people_blocks_listing_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_people_blocks_listing_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_people_blocks_listing_vis_rules_field_name",
  	"field_operator" "enum_people_blocks_listing_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_people_blocks_listing_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_people_blocks_listing_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "people_blocks_columns_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_people_blocks_columns_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "people_blocks_columns_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_people_blocks_columns_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_people_blocks_columns_vis_rules_field_name",
  	"field_operator" "enum_people_blocks_columns_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_people_blocks_columns_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_people_blocks_columns_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "people_blocks_tabs_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_people_blocks_tabs_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "people_blocks_tabs_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_people_blocks_tabs_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_people_blocks_tabs_vis_rules_field_name",
  	"field_operator" "enum_people_blocks_tabs_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_people_blocks_tabs_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_people_blocks_tabs_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "people_blocks_stats_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_people_blocks_stats_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "people_blocks_stats_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_people_blocks_stats_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_people_blocks_stats_vis_rules_field_name",
  	"field_operator" "enum_people_blocks_stats_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_people_blocks_stats_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_people_blocks_stats_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "people_blocks_logos_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_people_blocks_logos_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "people_blocks_logos_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_people_blocks_logos_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_people_blocks_logos_vis_rules_field_name",
  	"field_operator" "enum_people_blocks_logos_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_people_blocks_logos_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_people_blocks_logos_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "people_blocks_testimonials_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_people_blocks_testimonials_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "people_blocks_testimonials_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_people_blocks_testimonials_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_people_blocks_testimonials_vis_rules_field_name",
  	"field_operator" "enum_people_blocks_testimonials_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_people_blocks_testimonials_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_people_blocks_testimonials_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "people_blocks_faq_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_people_blocks_faq_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "people_blocks_faq_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_people_blocks_faq_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_people_blocks_faq_vis_rules_field_name",
  	"field_operator" "enum_people_blocks_faq_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_people_blocks_faq_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_people_blocks_faq_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "people_blocks_cta_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_people_blocks_cta_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "people_blocks_cta_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_people_blocks_cta_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_people_blocks_cta_vis_rules_field_name",
  	"field_operator" "enum_people_blocks_cta_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_people_blocks_cta_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_people_blocks_cta_vis_rules_items_when" DEFAULT 'all'
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
  
  CREATE TABLE "_people_v_blocks_hero_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__people_v_blocks_hero_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_people_v_blocks_hero_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__people_v_blocks_hero_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__people_v_blocks_hero_vis_rules_field_name",
  	"field_operator" "enum__people_v_blocks_hero_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__people_v_blocks_hero_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__people_v_blocks_hero_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_rich_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__people_v_blocks_rich_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_people_v_blocks_rich_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__people_v_blocks_rich_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__people_v_blocks_rich_text_vis_rules_field_name",
  	"field_operator" "enum__people_v_blocks_rich_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__people_v_blocks_rich_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__people_v_blocks_rich_text_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_media_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__people_v_blocks_media_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_people_v_blocks_media_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__people_v_blocks_media_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__people_v_blocks_media_text_vis_rules_field_name",
  	"field_operator" "enum__people_v_blocks_media_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__people_v_blocks_media_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__people_v_blocks_media_text_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_cards_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__people_v_blocks_cards_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_people_v_blocks_cards_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__people_v_blocks_cards_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__people_v_blocks_cards_vis_rules_field_name",
  	"field_operator" "enum__people_v_blocks_cards_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__people_v_blocks_cards_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__people_v_blocks_cards_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_listing_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__people_v_blocks_listing_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_people_v_blocks_listing_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__people_v_blocks_listing_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__people_v_blocks_listing_vis_rules_field_name",
  	"field_operator" "enum__people_v_blocks_listing_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__people_v_blocks_listing_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__people_v_blocks_listing_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_columns_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__people_v_blocks_columns_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_people_v_blocks_columns_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__people_v_blocks_columns_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__people_v_blocks_columns_vis_rules_field_name",
  	"field_operator" "enum__people_v_blocks_columns_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__people_v_blocks_columns_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__people_v_blocks_columns_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_tabs_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__people_v_blocks_tabs_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_people_v_blocks_tabs_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__people_v_blocks_tabs_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__people_v_blocks_tabs_vis_rules_field_name",
  	"field_operator" "enum__people_v_blocks_tabs_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__people_v_blocks_tabs_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__people_v_blocks_tabs_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_stats_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__people_v_blocks_stats_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_people_v_blocks_stats_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__people_v_blocks_stats_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__people_v_blocks_stats_vis_rules_field_name",
  	"field_operator" "enum__people_v_blocks_stats_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__people_v_blocks_stats_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__people_v_blocks_stats_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_logos_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__people_v_blocks_logos_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_people_v_blocks_logos_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__people_v_blocks_logos_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__people_v_blocks_logos_vis_rules_field_name",
  	"field_operator" "enum__people_v_blocks_logos_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__people_v_blocks_logos_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__people_v_blocks_logos_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_testimonials_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__people_v_blocks_testimonials_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_people_v_blocks_testimonials_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__people_v_blocks_testimonials_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__people_v_blocks_testimonials_vis_rules_field_name",
  	"field_operator" "enum__people_v_blocks_testimonials_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__people_v_blocks_testimonials_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__people_v_blocks_testimonials_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_faq_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__people_v_blocks_faq_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_people_v_blocks_faq_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__people_v_blocks_faq_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__people_v_blocks_faq_vis_rules_field_name",
  	"field_operator" "enum__people_v_blocks_faq_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__people_v_blocks_faq_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__people_v_blocks_faq_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_cta_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__people_v_blocks_cta_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_people_v_blocks_cta_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__people_v_blocks_cta_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__people_v_blocks_cta_vis_rules_field_name",
  	"field_operator" "enum__people_v_blocks_cta_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__people_v_blocks_cta_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__people_v_blocks_cta_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
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
  
  CREATE TABLE "reusable_blocks_hero_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_reusable_blocks_hero_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "reusable_blocks_hero_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_reusable_blocks_hero_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_reusable_blocks_hero_vis_rules_field_name",
  	"field_operator" "enum_reusable_blocks_hero_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_reusable_blocks_hero_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_reusable_blocks_hero_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "reusable_blocks_rich_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_reusable_blocks_rich_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "reusable_blocks_rich_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_reusable_blocks_rich_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_reusable_blocks_rich_text_vis_rules_field_name",
  	"field_operator" "enum_reusable_blocks_rich_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_reusable_blocks_rich_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_reusable_blocks_rich_text_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "reusable_blocks_media_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_reusable_blocks_media_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "reusable_blocks_media_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_reusable_blocks_media_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_reusable_blocks_media_text_vis_rules_field_name",
  	"field_operator" "enum_reusable_blocks_media_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_reusable_blocks_media_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_reusable_blocks_media_text_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "reusable_blocks_cards_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_reusable_blocks_cards_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "reusable_blocks_cards_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_reusable_blocks_cards_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_reusable_blocks_cards_vis_rules_field_name",
  	"field_operator" "enum_reusable_blocks_cards_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_reusable_blocks_cards_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_reusable_blocks_cards_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "reusable_blocks_listing_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_reusable_blocks_listing_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "reusable_blocks_listing_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_reusable_blocks_listing_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_reusable_blocks_listing_vis_rules_field_name",
  	"field_operator" "enum_reusable_blocks_listing_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_reusable_blocks_listing_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_reusable_blocks_listing_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "reusable_blocks_columns_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_reusable_blocks_columns_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "reusable_blocks_columns_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_reusable_blocks_columns_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_reusable_blocks_columns_vis_rules_field_name",
  	"field_operator" "enum_reusable_blocks_columns_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_reusable_blocks_columns_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_reusable_blocks_columns_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "reusable_blocks_tabs_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_reusable_blocks_tabs_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "reusable_blocks_tabs_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_reusable_blocks_tabs_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_reusable_blocks_tabs_vis_rules_field_name",
  	"field_operator" "enum_reusable_blocks_tabs_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_reusable_blocks_tabs_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_reusable_blocks_tabs_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "reusable_blocks_stats_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_reusable_blocks_stats_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "reusable_blocks_stats_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_reusable_blocks_stats_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_reusable_blocks_stats_vis_rules_field_name",
  	"field_operator" "enum_reusable_blocks_stats_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_reusable_blocks_stats_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_reusable_blocks_stats_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "reusable_blocks_logos_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_reusable_blocks_logos_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "reusable_blocks_logos_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_reusable_blocks_logos_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_reusable_blocks_logos_vis_rules_field_name",
  	"field_operator" "enum_reusable_blocks_logos_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_reusable_blocks_logos_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_reusable_blocks_logos_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "reusable_blocks_testimonials_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_reusable_blocks_testimonials_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "reusable_blocks_testimonials_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_reusable_blocks_testimonials_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_reusable_blocks_testimonials_vis_rules_field_name",
  	"field_operator" "enum_reusable_blocks_testimonials_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_reusable_blocks_testimonials_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_reusable_blocks_testimonials_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "reusable_blocks_faq_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_reusable_blocks_faq_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "reusable_blocks_faq_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_reusable_blocks_faq_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_reusable_blocks_faq_vis_rules_field_name",
  	"field_operator" "enum_reusable_blocks_faq_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_reusable_blocks_faq_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_reusable_blocks_faq_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "reusable_blocks_cta_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_reusable_blocks_cta_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "reusable_blocks_cta_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_reusable_blocks_cta_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_reusable_blocks_cta_vis_rules_field_name",
  	"field_operator" "enum_reusable_blocks_cta_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_reusable_blocks_cta_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_reusable_blocks_cta_vis_rules_items_when" DEFAULT 'all'
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
  
  CREATE TABLE "_reusable_v_blocks_hero_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__reusable_v_blocks_hero_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_reusable_v_blocks_hero_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__reusable_v_blocks_hero_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__reusable_v_blocks_hero_vis_rules_field_name",
  	"field_operator" "enum__reusable_v_blocks_hero_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__reusable_v_blocks_hero_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__reusable_v_blocks_hero_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_rich_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__reusable_v_blocks_rich_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_reusable_v_blocks_rich_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__reusable_v_blocks_rich_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__reusable_v_blocks_rich_text_vis_rules_field_name",
  	"field_operator" "enum__reusable_v_blocks_rich_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__reusable_v_blocks_rich_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__reusable_v_blocks_rich_text_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_media_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__reusable_v_blocks_media_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_reusable_v_blocks_media_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__reusable_v_blocks_media_text_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__reusable_v_blocks_media_text_vis_rules_field_name",
  	"field_operator" "enum__reusable_v_blocks_media_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__reusable_v_blocks_media_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__reusable_v_blocks_media_text_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_cards_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__reusable_v_blocks_cards_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_reusable_v_blocks_cards_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__reusable_v_blocks_cards_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__reusable_v_blocks_cards_vis_rules_field_name",
  	"field_operator" "enum__reusable_v_blocks_cards_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__reusable_v_blocks_cards_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__reusable_v_blocks_cards_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_listing_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__reusable_v_blocks_listing_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_reusable_v_blocks_listing_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__reusable_v_blocks_listing_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__reusable_v_blocks_listing_vis_rules_field_name",
  	"field_operator" "enum__reusable_v_blocks_listing_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__reusable_v_blocks_listing_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__reusable_v_blocks_listing_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_columns_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__reusable_v_blocks_columns_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_reusable_v_blocks_columns_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__reusable_v_blocks_columns_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__reusable_v_blocks_columns_vis_rules_field_name",
  	"field_operator" "enum__reusable_v_blocks_columns_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__reusable_v_blocks_columns_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__reusable_v_blocks_columns_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_tabs_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__reusable_v_blocks_tabs_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_reusable_v_blocks_tabs_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__reusable_v_blocks_tabs_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__reusable_v_blocks_tabs_vis_rules_field_name",
  	"field_operator" "enum__reusable_v_blocks_tabs_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__reusable_v_blocks_tabs_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__reusable_v_blocks_tabs_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_stats_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__reusable_v_blocks_stats_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_reusable_v_blocks_stats_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__reusable_v_blocks_stats_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__reusable_v_blocks_stats_vis_rules_field_name",
  	"field_operator" "enum__reusable_v_blocks_stats_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__reusable_v_blocks_stats_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__reusable_v_blocks_stats_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_logos_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__reusable_v_blocks_logos_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_reusable_v_blocks_logos_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__reusable_v_blocks_logos_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__reusable_v_blocks_logos_vis_rules_field_name",
  	"field_operator" "enum__reusable_v_blocks_logos_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__reusable_v_blocks_logos_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__reusable_v_blocks_logos_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_testimonials_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__reusable_v_blocks_testimonials_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_reusable_v_blocks_testimonials_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__reusable_v_blocks_testimonials_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__reusable_v_blocks_testimonials_vis_rules_field_name",
  	"field_operator" "enum__reusable_v_blocks_testimonials_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__reusable_v_blocks_testimonials_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__reusable_v_blocks_testimonials_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_faq_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__reusable_v_blocks_faq_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_reusable_v_blocks_faq_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__reusable_v_blocks_faq_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__reusable_v_blocks_faq_vis_rules_field_name",
  	"field_operator" "enum__reusable_v_blocks_faq_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__reusable_v_blocks_faq_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__reusable_v_blocks_faq_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_cta_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__reusable_v_blocks_cta_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_reusable_v_blocks_cta_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__reusable_v_blocks_cta_vis_rules_type",
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum__reusable_v_blocks_cta_vis_rules_field_name",
  	"field_operator" "enum__reusable_v_blocks_cta_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum__reusable_v_blocks_cta_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum__reusable_v_blocks_cta_vis_rules_items_when" DEFAULT 'all',
  	"_uuid" varchar
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
  
  CREATE TABLE "cpt_defaults_blocks_hero_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_cpt_defaults_blocks_hero_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cpt_defaults_blocks_hero_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_cpt_defaults_blocks_hero_vis_rules_type" NOT NULL,
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_cpt_defaults_blocks_hero_vis_rules_field_name",
  	"field_operator" "enum_cpt_defaults_blocks_hero_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_cpt_defaults_blocks_hero_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_cpt_defaults_blocks_hero_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "cpt_defaults_blocks_rich_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_cpt_defaults_blocks_rich_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cpt_defaults_blocks_rich_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_cpt_defaults_blocks_rich_text_vis_rules_type" NOT NULL,
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_cpt_defaults_blocks_rich_text_vis_rules_field_name",
  	"field_operator" "enum_cpt_defaults_blocks_rich_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_cpt_defaults_blocks_rich_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_cpt_defaults_blocks_rich_text_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "cpt_defaults_blocks_media_text_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_cpt_defaults_blocks_media_text_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cpt_defaults_blocks_media_text_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_cpt_defaults_blocks_media_text_vis_rules_type" NOT NULL,
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_cpt_defaults_blocks_media_text_vis_rules_field_name",
  	"field_operator" "enum_cpt_defaults_blocks_media_text_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_cpt_defaults_blocks_media_text_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_cpt_defaults_blocks_media_text_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "cpt_defaults_blocks_cards_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_cpt_defaults_blocks_cards_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cpt_defaults_blocks_cards_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_cpt_defaults_blocks_cards_vis_rules_type" NOT NULL,
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_cpt_defaults_blocks_cards_vis_rules_field_name",
  	"field_operator" "enum_cpt_defaults_blocks_cards_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_cpt_defaults_blocks_cards_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_cpt_defaults_blocks_cards_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "cpt_defaults_blocks_listing_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_cpt_defaults_blocks_listing_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cpt_defaults_blocks_listing_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_cpt_defaults_blocks_listing_vis_rules_type" NOT NULL,
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_cpt_defaults_blocks_listing_vis_rules_field_name",
  	"field_operator" "enum_cpt_defaults_blocks_listing_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_cpt_defaults_blocks_listing_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_cpt_defaults_blocks_listing_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "cpt_defaults_blocks_columns_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_cpt_defaults_blocks_columns_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cpt_defaults_blocks_columns_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_cpt_defaults_blocks_columns_vis_rules_type" NOT NULL,
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_cpt_defaults_blocks_columns_vis_rules_field_name",
  	"field_operator" "enum_cpt_defaults_blocks_columns_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_cpt_defaults_blocks_columns_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_cpt_defaults_blocks_columns_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "cpt_defaults_blocks_tabs_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_cpt_defaults_blocks_tabs_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cpt_defaults_blocks_tabs_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_cpt_defaults_blocks_tabs_vis_rules_type" NOT NULL,
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_cpt_defaults_blocks_tabs_vis_rules_field_name",
  	"field_operator" "enum_cpt_defaults_blocks_tabs_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_cpt_defaults_blocks_tabs_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_cpt_defaults_blocks_tabs_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "cpt_defaults_blocks_stats_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_cpt_defaults_blocks_stats_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cpt_defaults_blocks_stats_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_cpt_defaults_blocks_stats_vis_rules_type" NOT NULL,
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_cpt_defaults_blocks_stats_vis_rules_field_name",
  	"field_operator" "enum_cpt_defaults_blocks_stats_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_cpt_defaults_blocks_stats_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_cpt_defaults_blocks_stats_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "cpt_defaults_blocks_logos_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_cpt_defaults_blocks_logos_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cpt_defaults_blocks_logos_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_cpt_defaults_blocks_logos_vis_rules_type" NOT NULL,
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_cpt_defaults_blocks_logos_vis_rules_field_name",
  	"field_operator" "enum_cpt_defaults_blocks_logos_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_cpt_defaults_blocks_logos_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_cpt_defaults_blocks_logos_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "cpt_defaults_blocks_testimonials_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_cpt_defaults_blocks_testimonials_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cpt_defaults_blocks_testimonials_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_cpt_defaults_blocks_testimonials_vis_rules_type" NOT NULL,
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_cpt_defaults_blocks_testimonials_vis_rules_field_name",
  	"field_operator" "enum_cpt_defaults_blocks_testimonials_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_cpt_defaults_blocks_testimonials_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_cpt_defaults_blocks_testimonials_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "cpt_defaults_blocks_faq_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_cpt_defaults_blocks_faq_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cpt_defaults_blocks_faq_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_cpt_defaults_blocks_faq_vis_rules_type" NOT NULL,
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_cpt_defaults_blocks_faq_vis_rules_field_name",
  	"field_operator" "enum_cpt_defaults_blocks_faq_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_cpt_defaults_blocks_faq_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_cpt_defaults_blocks_faq_vis_rules_items_when" DEFAULT 'all'
  );
  
  CREATE TABLE "cpt_defaults_blocks_cta_vis_rules_device_show" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_cpt_defaults_blocks_cta_vis_rules_device_show",
  	"locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cpt_defaults_blocks_cta_vis_rules" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_cpt_defaults_blocks_cta_vis_rules_type" NOT NULL,
  	"date_from" timestamp(3) with time zone,
  	"date_until" timestamp(3) with time zone,
  	"field_name" "enum_cpt_defaults_blocks_cta_vis_rules_field_name",
  	"field_operator" "enum_cpt_defaults_blocks_cta_vis_rules_field_operator" DEFAULT 'set',
  	"field_value" varchar,
  	"url_param" varchar,
  	"url_value" varchar,
  	"items_type" "enum_cpt_defaults_blocks_cta_vis_rules_items_type" DEFAULT 'events',
  	"items_when" "enum_cpt_defaults_blocks_cta_vis_rules_items_when" DEFAULT 'all'
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
  
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "vis_match" "enum_pages_blocks_hero_vis_match" DEFAULT 'all';
  ALTER TABLE "pages_blocks_rich_text" ADD COLUMN "vis_match" "enum_pages_blocks_rich_text_vis_match" DEFAULT 'all';
  ALTER TABLE "pages_blocks_media_text" ADD COLUMN "vis_match" "enum_pages_blocks_media_text_vis_match" DEFAULT 'all';
  ALTER TABLE "pages_blocks_cards" ADD COLUMN "vis_match" "enum_pages_blocks_cards_vis_match" DEFAULT 'all';
  ALTER TABLE "pages_blocks_listing" ADD COLUMN "vis_match" "enum_pages_blocks_listing_vis_match" DEFAULT 'all';
  ALTER TABLE "pages_blocks_columns" ADD COLUMN "vis_match" "enum_pages_blocks_columns_vis_match" DEFAULT 'all';
  ALTER TABLE "pages_blocks_tabs" ADD COLUMN "vis_match" "enum_pages_blocks_tabs_vis_match" DEFAULT 'all';
  ALTER TABLE "pages_blocks_stats" ADD COLUMN "vis_match" "enum_pages_blocks_stats_vis_match" DEFAULT 'all';
  ALTER TABLE "pages_blocks_logos" ADD COLUMN "vis_match" "enum_pages_blocks_logos_vis_match" DEFAULT 'all';
  ALTER TABLE "pages_blocks_testimonials" ADD COLUMN "vis_match" "enum_pages_blocks_testimonials_vis_match" DEFAULT 'all';
  ALTER TABLE "pages_blocks_faq" ADD COLUMN "vis_match" "enum_pages_blocks_faq_vis_match" DEFAULT 'all';
  ALTER TABLE "pages_blocks_cta" ADD COLUMN "vis_match" "enum_pages_blocks_cta_vis_match" DEFAULT 'all';
  ALTER TABLE "pages_blocks_dynamic_field" ADD COLUMN "vis_match" "enum_pages_blocks_dynamic_field_vis_match" DEFAULT 'all';
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN "vis_match" "enum__pages_v_blocks_hero_vis_match" DEFAULT 'all';
  ALTER TABLE "_pages_v_blocks_rich_text" ADD COLUMN "vis_match" "enum__pages_v_blocks_rich_text_vis_match" DEFAULT 'all';
  ALTER TABLE "_pages_v_blocks_media_text" ADD COLUMN "vis_match" "enum__pages_v_blocks_media_text_vis_match" DEFAULT 'all';
  ALTER TABLE "_pages_v_blocks_cards" ADD COLUMN "vis_match" "enum__pages_v_blocks_cards_vis_match" DEFAULT 'all';
  ALTER TABLE "_pages_v_blocks_listing" ADD COLUMN "vis_match" "enum__pages_v_blocks_listing_vis_match" DEFAULT 'all';
  ALTER TABLE "_pages_v_blocks_columns" ADD COLUMN "vis_match" "enum__pages_v_blocks_columns_vis_match" DEFAULT 'all';
  ALTER TABLE "_pages_v_blocks_tabs" ADD COLUMN "vis_match" "enum__pages_v_blocks_tabs_vis_match" DEFAULT 'all';
  ALTER TABLE "_pages_v_blocks_stats" ADD COLUMN "vis_match" "enum__pages_v_blocks_stats_vis_match" DEFAULT 'all';
  ALTER TABLE "_pages_v_blocks_logos" ADD COLUMN "vis_match" "enum__pages_v_blocks_logos_vis_match" DEFAULT 'all';
  ALTER TABLE "_pages_v_blocks_testimonials" ADD COLUMN "vis_match" "enum__pages_v_blocks_testimonials_vis_match" DEFAULT 'all';
  ALTER TABLE "_pages_v_blocks_faq" ADD COLUMN "vis_match" "enum__pages_v_blocks_faq_vis_match" DEFAULT 'all';
  ALTER TABLE "_pages_v_blocks_cta" ADD COLUMN "vis_match" "enum__pages_v_blocks_cta_vis_match" DEFAULT 'all';
  ALTER TABLE "_pages_v_blocks_dynamic_field" ADD COLUMN "vis_match" "enum__pages_v_blocks_dynamic_field_vis_match" DEFAULT 'all';
  ALTER TABLE "posts_blocks_hero" ADD COLUMN "vis_match" "enum_posts_blocks_hero_vis_match" DEFAULT 'all';
  ALTER TABLE "posts_blocks_rich_text" ADD COLUMN "vis_match" "enum_posts_blocks_rich_text_vis_match" DEFAULT 'all';
  ALTER TABLE "posts_blocks_media_text" ADD COLUMN "vis_match" "enum_posts_blocks_media_text_vis_match" DEFAULT 'all';
  ALTER TABLE "posts_blocks_cards" ADD COLUMN "vis_match" "enum_posts_blocks_cards_vis_match" DEFAULT 'all';
  ALTER TABLE "posts_blocks_listing" ADD COLUMN "vis_match" "enum_posts_blocks_listing_vis_match" DEFAULT 'all';
  ALTER TABLE "posts_blocks_columns" ADD COLUMN "vis_match" "enum_posts_blocks_columns_vis_match" DEFAULT 'all';
  ALTER TABLE "posts_blocks_tabs" ADD COLUMN "vis_match" "enum_posts_blocks_tabs_vis_match" DEFAULT 'all';
  ALTER TABLE "posts_blocks_stats" ADD COLUMN "vis_match" "enum_posts_blocks_stats_vis_match" DEFAULT 'all';
  ALTER TABLE "posts_blocks_logos" ADD COLUMN "vis_match" "enum_posts_blocks_logos_vis_match" DEFAULT 'all';
  ALTER TABLE "posts_blocks_testimonials" ADD COLUMN "vis_match" "enum_posts_blocks_testimonials_vis_match" DEFAULT 'all';
  ALTER TABLE "posts_blocks_faq" ADD COLUMN "vis_match" "enum_posts_blocks_faq_vis_match" DEFAULT 'all';
  ALTER TABLE "posts_blocks_cta" ADD COLUMN "vis_match" "enum_posts_blocks_cta_vis_match" DEFAULT 'all';
  ALTER TABLE "posts_blocks_dynamic_field" ADD COLUMN "vis_match" "enum_posts_blocks_dynamic_field_vis_match" DEFAULT 'all';
  ALTER TABLE "_posts_v_blocks_hero" ADD COLUMN "vis_match" "enum__posts_v_blocks_hero_vis_match" DEFAULT 'all';
  ALTER TABLE "_posts_v_blocks_rich_text" ADD COLUMN "vis_match" "enum__posts_v_blocks_rich_text_vis_match" DEFAULT 'all';
  ALTER TABLE "_posts_v_blocks_media_text" ADD COLUMN "vis_match" "enum__posts_v_blocks_media_text_vis_match" DEFAULT 'all';
  ALTER TABLE "_posts_v_blocks_cards" ADD COLUMN "vis_match" "enum__posts_v_blocks_cards_vis_match" DEFAULT 'all';
  ALTER TABLE "_posts_v_blocks_listing" ADD COLUMN "vis_match" "enum__posts_v_blocks_listing_vis_match" DEFAULT 'all';
  ALTER TABLE "_posts_v_blocks_columns" ADD COLUMN "vis_match" "enum__posts_v_blocks_columns_vis_match" DEFAULT 'all';
  ALTER TABLE "_posts_v_blocks_tabs" ADD COLUMN "vis_match" "enum__posts_v_blocks_tabs_vis_match" DEFAULT 'all';
  ALTER TABLE "_posts_v_blocks_stats" ADD COLUMN "vis_match" "enum__posts_v_blocks_stats_vis_match" DEFAULT 'all';
  ALTER TABLE "_posts_v_blocks_logos" ADD COLUMN "vis_match" "enum__posts_v_blocks_logos_vis_match" DEFAULT 'all';
  ALTER TABLE "_posts_v_blocks_testimonials" ADD COLUMN "vis_match" "enum__posts_v_blocks_testimonials_vis_match" DEFAULT 'all';
  ALTER TABLE "_posts_v_blocks_faq" ADD COLUMN "vis_match" "enum__posts_v_blocks_faq_vis_match" DEFAULT 'all';
  ALTER TABLE "_posts_v_blocks_cta" ADD COLUMN "vis_match" "enum__posts_v_blocks_cta_vis_match" DEFAULT 'all';
  ALTER TABLE "_posts_v_blocks_dynamic_field" ADD COLUMN "vis_match" "enum__posts_v_blocks_dynamic_field_vis_match" DEFAULT 'all';
  ALTER TABLE "events_blocks_hero" ADD COLUMN "vis_match" "enum_events_blocks_hero_vis_match" DEFAULT 'all';
  ALTER TABLE "events_blocks_rich_text" ADD COLUMN "vis_match" "enum_events_blocks_rich_text_vis_match" DEFAULT 'all';
  ALTER TABLE "events_blocks_media_text" ADD COLUMN "vis_match" "enum_events_blocks_media_text_vis_match" DEFAULT 'all';
  ALTER TABLE "events_blocks_cards" ADD COLUMN "vis_match" "enum_events_blocks_cards_vis_match" DEFAULT 'all';
  ALTER TABLE "events_blocks_listing" ADD COLUMN "vis_match" "enum_events_blocks_listing_vis_match" DEFAULT 'all';
  ALTER TABLE "events_blocks_columns" ADD COLUMN "vis_match" "enum_events_blocks_columns_vis_match" DEFAULT 'all';
  ALTER TABLE "events_blocks_tabs" ADD COLUMN "vis_match" "enum_events_blocks_tabs_vis_match" DEFAULT 'all';
  ALTER TABLE "events_blocks_stats" ADD COLUMN "vis_match" "enum_events_blocks_stats_vis_match" DEFAULT 'all';
  ALTER TABLE "events_blocks_logos" ADD COLUMN "vis_match" "enum_events_blocks_logos_vis_match" DEFAULT 'all';
  ALTER TABLE "events_blocks_testimonials" ADD COLUMN "vis_match" "enum_events_blocks_testimonials_vis_match" DEFAULT 'all';
  ALTER TABLE "events_blocks_faq" ADD COLUMN "vis_match" "enum_events_blocks_faq_vis_match" DEFAULT 'all';
  ALTER TABLE "events_blocks_cta" ADD COLUMN "vis_match" "enum_events_blocks_cta_vis_match" DEFAULT 'all';
  ALTER TABLE "events_blocks_dynamic_field" ADD COLUMN "vis_match" "enum_events_blocks_dynamic_field_vis_match" DEFAULT 'all';
  ALTER TABLE "_events_v_blocks_hero" ADD COLUMN "vis_match" "enum__events_v_blocks_hero_vis_match" DEFAULT 'all';
  ALTER TABLE "_events_v_blocks_rich_text" ADD COLUMN "vis_match" "enum__events_v_blocks_rich_text_vis_match" DEFAULT 'all';
  ALTER TABLE "_events_v_blocks_media_text" ADD COLUMN "vis_match" "enum__events_v_blocks_media_text_vis_match" DEFAULT 'all';
  ALTER TABLE "_events_v_blocks_cards" ADD COLUMN "vis_match" "enum__events_v_blocks_cards_vis_match" DEFAULT 'all';
  ALTER TABLE "_events_v_blocks_listing" ADD COLUMN "vis_match" "enum__events_v_blocks_listing_vis_match" DEFAULT 'all';
  ALTER TABLE "_events_v_blocks_columns" ADD COLUMN "vis_match" "enum__events_v_blocks_columns_vis_match" DEFAULT 'all';
  ALTER TABLE "_events_v_blocks_tabs" ADD COLUMN "vis_match" "enum__events_v_blocks_tabs_vis_match" DEFAULT 'all';
  ALTER TABLE "_events_v_blocks_stats" ADD COLUMN "vis_match" "enum__events_v_blocks_stats_vis_match" DEFAULT 'all';
  ALTER TABLE "_events_v_blocks_logos" ADD COLUMN "vis_match" "enum__events_v_blocks_logos_vis_match" DEFAULT 'all';
  ALTER TABLE "_events_v_blocks_testimonials" ADD COLUMN "vis_match" "enum__events_v_blocks_testimonials_vis_match" DEFAULT 'all';
  ALTER TABLE "_events_v_blocks_faq" ADD COLUMN "vis_match" "enum__events_v_blocks_faq_vis_match" DEFAULT 'all';
  ALTER TABLE "_events_v_blocks_cta" ADD COLUMN "vis_match" "enum__events_v_blocks_cta_vis_match" DEFAULT 'all';
  ALTER TABLE "_events_v_blocks_dynamic_field" ADD COLUMN "vis_match" "enum__events_v_blocks_dynamic_field_vis_match" DEFAULT 'all';
  ALTER TABLE "resources_blocks_hero" ADD COLUMN "vis_match" "enum_resources_blocks_hero_vis_match" DEFAULT 'all';
  ALTER TABLE "resources_blocks_rich_text" ADD COLUMN "vis_match" "enum_resources_blocks_rich_text_vis_match" DEFAULT 'all';
  ALTER TABLE "resources_blocks_media_text" ADD COLUMN "vis_match" "enum_resources_blocks_media_text_vis_match" DEFAULT 'all';
  ALTER TABLE "resources_blocks_cards" ADD COLUMN "vis_match" "enum_resources_blocks_cards_vis_match" DEFAULT 'all';
  ALTER TABLE "resources_blocks_listing" ADD COLUMN "vis_match" "enum_resources_blocks_listing_vis_match" DEFAULT 'all';
  ALTER TABLE "resources_blocks_columns" ADD COLUMN "vis_match" "enum_resources_blocks_columns_vis_match" DEFAULT 'all';
  ALTER TABLE "resources_blocks_tabs" ADD COLUMN "vis_match" "enum_resources_blocks_tabs_vis_match" DEFAULT 'all';
  ALTER TABLE "resources_blocks_stats" ADD COLUMN "vis_match" "enum_resources_blocks_stats_vis_match" DEFAULT 'all';
  ALTER TABLE "resources_blocks_logos" ADD COLUMN "vis_match" "enum_resources_blocks_logos_vis_match" DEFAULT 'all';
  ALTER TABLE "resources_blocks_testimonials" ADD COLUMN "vis_match" "enum_resources_blocks_testimonials_vis_match" DEFAULT 'all';
  ALTER TABLE "resources_blocks_faq" ADD COLUMN "vis_match" "enum_resources_blocks_faq_vis_match" DEFAULT 'all';
  ALTER TABLE "resources_blocks_cta" ADD COLUMN "vis_match" "enum_resources_blocks_cta_vis_match" DEFAULT 'all';
  ALTER TABLE "resources_blocks_dynamic_field" ADD COLUMN "vis_match" "enum_resources_blocks_dynamic_field_vis_match" DEFAULT 'all';
  ALTER TABLE "_resources_v_blocks_hero" ADD COLUMN "vis_match" "enum__resources_v_blocks_hero_vis_match" DEFAULT 'all';
  ALTER TABLE "_resources_v_blocks_rich_text" ADD COLUMN "vis_match" "enum__resources_v_blocks_rich_text_vis_match" DEFAULT 'all';
  ALTER TABLE "_resources_v_blocks_media_text" ADD COLUMN "vis_match" "enum__resources_v_blocks_media_text_vis_match" DEFAULT 'all';
  ALTER TABLE "_resources_v_blocks_cards" ADD COLUMN "vis_match" "enum__resources_v_blocks_cards_vis_match" DEFAULT 'all';
  ALTER TABLE "_resources_v_blocks_listing" ADD COLUMN "vis_match" "enum__resources_v_blocks_listing_vis_match" DEFAULT 'all';
  ALTER TABLE "_resources_v_blocks_columns" ADD COLUMN "vis_match" "enum__resources_v_blocks_columns_vis_match" DEFAULT 'all';
  ALTER TABLE "_resources_v_blocks_tabs" ADD COLUMN "vis_match" "enum__resources_v_blocks_tabs_vis_match" DEFAULT 'all';
  ALTER TABLE "_resources_v_blocks_stats" ADD COLUMN "vis_match" "enum__resources_v_blocks_stats_vis_match" DEFAULT 'all';
  ALTER TABLE "_resources_v_blocks_logos" ADD COLUMN "vis_match" "enum__resources_v_blocks_logos_vis_match" DEFAULT 'all';
  ALTER TABLE "_resources_v_blocks_testimonials" ADD COLUMN "vis_match" "enum__resources_v_blocks_testimonials_vis_match" DEFAULT 'all';
  ALTER TABLE "_resources_v_blocks_faq" ADD COLUMN "vis_match" "enum__resources_v_blocks_faq_vis_match" DEFAULT 'all';
  ALTER TABLE "_resources_v_blocks_cta" ADD COLUMN "vis_match" "enum__resources_v_blocks_cta_vis_match" DEFAULT 'all';
  ALTER TABLE "_resources_v_blocks_dynamic_field" ADD COLUMN "vis_match" "enum__resources_v_blocks_dynamic_field_vis_match" DEFAULT 'all';
  ALTER TABLE "glossary_blocks_hero" ADD COLUMN "vis_match" "enum_glossary_blocks_hero_vis_match" DEFAULT 'all';
  ALTER TABLE "glossary_blocks_rich_text" ADD COLUMN "vis_match" "enum_glossary_blocks_rich_text_vis_match" DEFAULT 'all';
  ALTER TABLE "glossary_blocks_media_text" ADD COLUMN "vis_match" "enum_glossary_blocks_media_text_vis_match" DEFAULT 'all';
  ALTER TABLE "glossary_blocks_cards" ADD COLUMN "vis_match" "enum_glossary_blocks_cards_vis_match" DEFAULT 'all';
  ALTER TABLE "glossary_blocks_listing" ADD COLUMN "vis_match" "enum_glossary_blocks_listing_vis_match" DEFAULT 'all';
  ALTER TABLE "glossary_blocks_columns" ADD COLUMN "vis_match" "enum_glossary_blocks_columns_vis_match" DEFAULT 'all';
  ALTER TABLE "glossary_blocks_tabs" ADD COLUMN "vis_match" "enum_glossary_blocks_tabs_vis_match" DEFAULT 'all';
  ALTER TABLE "glossary_blocks_stats" ADD COLUMN "vis_match" "enum_glossary_blocks_stats_vis_match" DEFAULT 'all';
  ALTER TABLE "glossary_blocks_logos" ADD COLUMN "vis_match" "enum_glossary_blocks_logos_vis_match" DEFAULT 'all';
  ALTER TABLE "glossary_blocks_testimonials" ADD COLUMN "vis_match" "enum_glossary_blocks_testimonials_vis_match" DEFAULT 'all';
  ALTER TABLE "glossary_blocks_faq" ADD COLUMN "vis_match" "enum_glossary_blocks_faq_vis_match" DEFAULT 'all';
  ALTER TABLE "glossary_blocks_cta" ADD COLUMN "vis_match" "enum_glossary_blocks_cta_vis_match" DEFAULT 'all';
  ALTER TABLE "glossary_blocks_dynamic_field" ADD COLUMN "vis_match" "enum_glossary_blocks_dynamic_field_vis_match" DEFAULT 'all';
  ALTER TABLE "_glossary_v_blocks_hero" ADD COLUMN "vis_match" "enum__glossary_v_blocks_hero_vis_match" DEFAULT 'all';
  ALTER TABLE "_glossary_v_blocks_rich_text" ADD COLUMN "vis_match" "enum__glossary_v_blocks_rich_text_vis_match" DEFAULT 'all';
  ALTER TABLE "_glossary_v_blocks_media_text" ADD COLUMN "vis_match" "enum__glossary_v_blocks_media_text_vis_match" DEFAULT 'all';
  ALTER TABLE "_glossary_v_blocks_cards" ADD COLUMN "vis_match" "enum__glossary_v_blocks_cards_vis_match" DEFAULT 'all';
  ALTER TABLE "_glossary_v_blocks_listing" ADD COLUMN "vis_match" "enum__glossary_v_blocks_listing_vis_match" DEFAULT 'all';
  ALTER TABLE "_glossary_v_blocks_columns" ADD COLUMN "vis_match" "enum__glossary_v_blocks_columns_vis_match" DEFAULT 'all';
  ALTER TABLE "_glossary_v_blocks_tabs" ADD COLUMN "vis_match" "enum__glossary_v_blocks_tabs_vis_match" DEFAULT 'all';
  ALTER TABLE "_glossary_v_blocks_stats" ADD COLUMN "vis_match" "enum__glossary_v_blocks_stats_vis_match" DEFAULT 'all';
  ALTER TABLE "_glossary_v_blocks_logos" ADD COLUMN "vis_match" "enum__glossary_v_blocks_logos_vis_match" DEFAULT 'all';
  ALTER TABLE "_glossary_v_blocks_testimonials" ADD COLUMN "vis_match" "enum__glossary_v_blocks_testimonials_vis_match" DEFAULT 'all';
  ALTER TABLE "_glossary_v_blocks_faq" ADD COLUMN "vis_match" "enum__glossary_v_blocks_faq_vis_match" DEFAULT 'all';
  ALTER TABLE "_glossary_v_blocks_cta" ADD COLUMN "vis_match" "enum__glossary_v_blocks_cta_vis_match" DEFAULT 'all';
  ALTER TABLE "_glossary_v_blocks_dynamic_field" ADD COLUMN "vis_match" "enum__glossary_v_blocks_dynamic_field_vis_match" DEFAULT 'all';
  ALTER TABLE "people_blocks_hero" ADD COLUMN "vis_match" "enum_people_blocks_hero_vis_match" DEFAULT 'all';
  ALTER TABLE "people_blocks_rich_text" ADD COLUMN "vis_match" "enum_people_blocks_rich_text_vis_match" DEFAULT 'all';
  ALTER TABLE "people_blocks_media_text" ADD COLUMN "vis_match" "enum_people_blocks_media_text_vis_match" DEFAULT 'all';
  ALTER TABLE "people_blocks_cards" ADD COLUMN "vis_match" "enum_people_blocks_cards_vis_match" DEFAULT 'all';
  ALTER TABLE "people_blocks_listing" ADD COLUMN "vis_match" "enum_people_blocks_listing_vis_match" DEFAULT 'all';
  ALTER TABLE "people_blocks_columns" ADD COLUMN "vis_match" "enum_people_blocks_columns_vis_match" DEFAULT 'all';
  ALTER TABLE "people_blocks_tabs" ADD COLUMN "vis_match" "enum_people_blocks_tabs_vis_match" DEFAULT 'all';
  ALTER TABLE "people_blocks_stats" ADD COLUMN "vis_match" "enum_people_blocks_stats_vis_match" DEFAULT 'all';
  ALTER TABLE "people_blocks_logos" ADD COLUMN "vis_match" "enum_people_blocks_logos_vis_match" DEFAULT 'all';
  ALTER TABLE "people_blocks_testimonials" ADD COLUMN "vis_match" "enum_people_blocks_testimonials_vis_match" DEFAULT 'all';
  ALTER TABLE "people_blocks_faq" ADD COLUMN "vis_match" "enum_people_blocks_faq_vis_match" DEFAULT 'all';
  ALTER TABLE "people_blocks_cta" ADD COLUMN "vis_match" "enum_people_blocks_cta_vis_match" DEFAULT 'all';
  ALTER TABLE "people_blocks_dynamic_field" ADD COLUMN "vis_match" "enum_people_blocks_dynamic_field_vis_match" DEFAULT 'all';
  ALTER TABLE "_people_v_blocks_hero" ADD COLUMN "vis_match" "enum__people_v_blocks_hero_vis_match" DEFAULT 'all';
  ALTER TABLE "_people_v_blocks_rich_text" ADD COLUMN "vis_match" "enum__people_v_blocks_rich_text_vis_match" DEFAULT 'all';
  ALTER TABLE "_people_v_blocks_media_text" ADD COLUMN "vis_match" "enum__people_v_blocks_media_text_vis_match" DEFAULT 'all';
  ALTER TABLE "_people_v_blocks_cards" ADD COLUMN "vis_match" "enum__people_v_blocks_cards_vis_match" DEFAULT 'all';
  ALTER TABLE "_people_v_blocks_listing" ADD COLUMN "vis_match" "enum__people_v_blocks_listing_vis_match" DEFAULT 'all';
  ALTER TABLE "_people_v_blocks_columns" ADD COLUMN "vis_match" "enum__people_v_blocks_columns_vis_match" DEFAULT 'all';
  ALTER TABLE "_people_v_blocks_tabs" ADD COLUMN "vis_match" "enum__people_v_blocks_tabs_vis_match" DEFAULT 'all';
  ALTER TABLE "_people_v_blocks_stats" ADD COLUMN "vis_match" "enum__people_v_blocks_stats_vis_match" DEFAULT 'all';
  ALTER TABLE "_people_v_blocks_logos" ADD COLUMN "vis_match" "enum__people_v_blocks_logos_vis_match" DEFAULT 'all';
  ALTER TABLE "_people_v_blocks_testimonials" ADD COLUMN "vis_match" "enum__people_v_blocks_testimonials_vis_match" DEFAULT 'all';
  ALTER TABLE "_people_v_blocks_faq" ADD COLUMN "vis_match" "enum__people_v_blocks_faq_vis_match" DEFAULT 'all';
  ALTER TABLE "_people_v_blocks_cta" ADD COLUMN "vis_match" "enum__people_v_blocks_cta_vis_match" DEFAULT 'all';
  ALTER TABLE "_people_v_blocks_dynamic_field" ADD COLUMN "vis_match" "enum__people_v_blocks_dynamic_field_vis_match" DEFAULT 'all';
  ALTER TABLE "reusable_blocks_hero" ADD COLUMN "vis_match" "enum_reusable_blocks_hero_vis_match" DEFAULT 'all';
  ALTER TABLE "reusable_blocks_rich_text" ADD COLUMN "vis_match" "enum_reusable_blocks_rich_text_vis_match" DEFAULT 'all';
  ALTER TABLE "reusable_blocks_media_text" ADD COLUMN "vis_match" "enum_reusable_blocks_media_text_vis_match" DEFAULT 'all';
  ALTER TABLE "reusable_blocks_cards" ADD COLUMN "vis_match" "enum_reusable_blocks_cards_vis_match" DEFAULT 'all';
  ALTER TABLE "reusable_blocks_listing" ADD COLUMN "vis_match" "enum_reusable_blocks_listing_vis_match" DEFAULT 'all';
  ALTER TABLE "reusable_blocks_columns" ADD COLUMN "vis_match" "enum_reusable_blocks_columns_vis_match" DEFAULT 'all';
  ALTER TABLE "reusable_blocks_tabs" ADD COLUMN "vis_match" "enum_reusable_blocks_tabs_vis_match" DEFAULT 'all';
  ALTER TABLE "reusable_blocks_stats" ADD COLUMN "vis_match" "enum_reusable_blocks_stats_vis_match" DEFAULT 'all';
  ALTER TABLE "reusable_blocks_logos" ADD COLUMN "vis_match" "enum_reusable_blocks_logos_vis_match" DEFAULT 'all';
  ALTER TABLE "reusable_blocks_testimonials" ADD COLUMN "vis_match" "enum_reusable_blocks_testimonials_vis_match" DEFAULT 'all';
  ALTER TABLE "reusable_blocks_faq" ADD COLUMN "vis_match" "enum_reusable_blocks_faq_vis_match" DEFAULT 'all';
  ALTER TABLE "reusable_blocks_cta" ADD COLUMN "vis_match" "enum_reusable_blocks_cta_vis_match" DEFAULT 'all';
  ALTER TABLE "reusable_blocks_dynamic_field" ADD COLUMN "vis_match" "enum_reusable_blocks_dynamic_field_vis_match" DEFAULT 'all';
  ALTER TABLE "_reusable_v_blocks_hero" ADD COLUMN "vis_match" "enum__reusable_v_blocks_hero_vis_match" DEFAULT 'all';
  ALTER TABLE "_reusable_v_blocks_rich_text" ADD COLUMN "vis_match" "enum__reusable_v_blocks_rich_text_vis_match" DEFAULT 'all';
  ALTER TABLE "_reusable_v_blocks_media_text" ADD COLUMN "vis_match" "enum__reusable_v_blocks_media_text_vis_match" DEFAULT 'all';
  ALTER TABLE "_reusable_v_blocks_cards" ADD COLUMN "vis_match" "enum__reusable_v_blocks_cards_vis_match" DEFAULT 'all';
  ALTER TABLE "_reusable_v_blocks_listing" ADD COLUMN "vis_match" "enum__reusable_v_blocks_listing_vis_match" DEFAULT 'all';
  ALTER TABLE "_reusable_v_blocks_columns" ADD COLUMN "vis_match" "enum__reusable_v_blocks_columns_vis_match" DEFAULT 'all';
  ALTER TABLE "_reusable_v_blocks_tabs" ADD COLUMN "vis_match" "enum__reusable_v_blocks_tabs_vis_match" DEFAULT 'all';
  ALTER TABLE "_reusable_v_blocks_stats" ADD COLUMN "vis_match" "enum__reusable_v_blocks_stats_vis_match" DEFAULT 'all';
  ALTER TABLE "_reusable_v_blocks_logos" ADD COLUMN "vis_match" "enum__reusable_v_blocks_logos_vis_match" DEFAULT 'all';
  ALTER TABLE "_reusable_v_blocks_testimonials" ADD COLUMN "vis_match" "enum__reusable_v_blocks_testimonials_vis_match" DEFAULT 'all';
  ALTER TABLE "_reusable_v_blocks_faq" ADD COLUMN "vis_match" "enum__reusable_v_blocks_faq_vis_match" DEFAULT 'all';
  ALTER TABLE "_reusable_v_blocks_cta" ADD COLUMN "vis_match" "enum__reusable_v_blocks_cta_vis_match" DEFAULT 'all';
  ALTER TABLE "_reusable_v_blocks_dynamic_field" ADD COLUMN "vis_match" "enum__reusable_v_blocks_dynamic_field_vis_match" DEFAULT 'all';
  ALTER TABLE "cpt_defaults_blocks_hero" ADD COLUMN "vis_match" "enum_cpt_defaults_blocks_hero_vis_match" DEFAULT 'all';
  ALTER TABLE "cpt_defaults_blocks_rich_text" ADD COLUMN "vis_match" "enum_cpt_defaults_blocks_rich_text_vis_match" DEFAULT 'all';
  ALTER TABLE "cpt_defaults_blocks_media_text" ADD COLUMN "vis_match" "enum_cpt_defaults_blocks_media_text_vis_match" DEFAULT 'all';
  ALTER TABLE "cpt_defaults_blocks_cards" ADD COLUMN "vis_match" "enum_cpt_defaults_blocks_cards_vis_match" DEFAULT 'all';
  ALTER TABLE "cpt_defaults_blocks_listing" ADD COLUMN "vis_match" "enum_cpt_defaults_blocks_listing_vis_match" DEFAULT 'all';
  ALTER TABLE "cpt_defaults_blocks_columns" ADD COLUMN "vis_match" "enum_cpt_defaults_blocks_columns_vis_match" DEFAULT 'all';
  ALTER TABLE "cpt_defaults_blocks_tabs" ADD COLUMN "vis_match" "enum_cpt_defaults_blocks_tabs_vis_match" DEFAULT 'all';
  ALTER TABLE "cpt_defaults_blocks_stats" ADD COLUMN "vis_match" "enum_cpt_defaults_blocks_stats_vis_match" DEFAULT 'all';
  ALTER TABLE "cpt_defaults_blocks_logos" ADD COLUMN "vis_match" "enum_cpt_defaults_blocks_logos_vis_match" DEFAULT 'all';
  ALTER TABLE "cpt_defaults_blocks_testimonials" ADD COLUMN "vis_match" "enum_cpt_defaults_blocks_testimonials_vis_match" DEFAULT 'all';
  ALTER TABLE "cpt_defaults_blocks_faq" ADD COLUMN "vis_match" "enum_cpt_defaults_blocks_faq_vis_match" DEFAULT 'all';
  ALTER TABLE "cpt_defaults_blocks_cta" ADD COLUMN "vis_match" "enum_cpt_defaults_blocks_cta_vis_match" DEFAULT 'all';
  ALTER TABLE "cpt_defaults_blocks_dynamic_field" ADD COLUMN "vis_match" "enum_cpt_defaults_blocks_dynamic_field_vis_match" DEFAULT 'all';
  ALTER TABLE "pages_blocks_hero_vis_rules_device_show" ADD CONSTRAINT "pages_blocks_hero_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_hero_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_vis_rules" ADD CONSTRAINT "pages_blocks_hero_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rich_text_vis_rules_device_show" ADD CONSTRAINT "pages_blocks_rich_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_rich_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rich_text_vis_rules" ADD CONSTRAINT "pages_blocks_rich_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_text_vis_rules_device_show" ADD CONSTRAINT "pages_blocks_media_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_media_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_text_vis_rules" ADD CONSTRAINT "pages_blocks_media_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_vis_rules_device_show" ADD CONSTRAINT "pages_blocks_cards_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_cards_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_vis_rules" ADD CONSTRAINT "pages_blocks_cards_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_listing_vis_rules_device_show" ADD CONSTRAINT "pages_blocks_listing_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_listing_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_listing_vis_rules" ADD CONSTRAINT "pages_blocks_listing_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_columns_vis_rules_device_show" ADD CONSTRAINT "pages_blocks_columns_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_columns_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_columns_vis_rules" ADD CONSTRAINT "pages_blocks_columns_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_tabs_vis_rules_device_show" ADD CONSTRAINT "pages_blocks_tabs_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_tabs_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_tabs_vis_rules" ADD CONSTRAINT "pages_blocks_tabs_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats_vis_rules_device_show" ADD CONSTRAINT "pages_blocks_stats_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_stats_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats_vis_rules" ADD CONSTRAINT "pages_blocks_stats_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logos_vis_rules_device_show" ADD CONSTRAINT "pages_blocks_logos_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_logos_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logos_vis_rules" ADD CONSTRAINT "pages_blocks_logos_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_vis_rules_device_show" ADD CONSTRAINT "pages_blocks_testimonials_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_testimonials_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_vis_rules" ADD CONSTRAINT "pages_blocks_testimonials_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_vis_rules_device_show" ADD CONSTRAINT "pages_blocks_faq_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_faq_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_vis_rules" ADD CONSTRAINT "pages_blocks_faq_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_vis_rules_device_show" ADD CONSTRAINT "pages_blocks_cta_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_cta_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_vis_rules" ADD CONSTRAINT "pages_blocks_cta_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "pages_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "pages_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_vis_rules_device_show" ADD CONSTRAINT "_pages_v_blocks_hero_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v_blocks_hero_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_vis_rules" ADD CONSTRAINT "_pages_v_blocks_hero_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rich_text_vis_rules_device_show" ADD CONSTRAINT "_pages_v_blocks_rich_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v_blocks_rich_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rich_text_vis_rules" ADD CONSTRAINT "_pages_v_blocks_rich_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_text_vis_rules_device_show" ADD CONSTRAINT "_pages_v_blocks_media_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v_blocks_media_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_text_vis_rules" ADD CONSTRAINT "_pages_v_blocks_media_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_vis_rules_device_show" ADD CONSTRAINT "_pages_v_blocks_cards_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v_blocks_cards_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_vis_rules" ADD CONSTRAINT "_pages_v_blocks_cards_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_listing_vis_rules_device_show" ADD CONSTRAINT "_pages_v_blocks_listing_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v_blocks_listing_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_listing_vis_rules" ADD CONSTRAINT "_pages_v_blocks_listing_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_columns_vis_rules_device_show" ADD CONSTRAINT "_pages_v_blocks_columns_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v_blocks_columns_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_columns_vis_rules" ADD CONSTRAINT "_pages_v_blocks_columns_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_tabs_vis_rules_device_show" ADD CONSTRAINT "_pages_v_blocks_tabs_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v_blocks_tabs_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_tabs_vis_rules" ADD CONSTRAINT "_pages_v_blocks_tabs_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats_vis_rules_device_show" ADD CONSTRAINT "_pages_v_blocks_stats_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v_blocks_stats_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats_vis_rules" ADD CONSTRAINT "_pages_v_blocks_stats_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logos_vis_rules_device_show" ADD CONSTRAINT "_pages_v_blocks_logos_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v_blocks_logos_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logos_vis_rules" ADD CONSTRAINT "_pages_v_blocks_logos_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_vis_rules_device_show" ADD CONSTRAINT "_pages_v_blocks_testimonials_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v_blocks_testimonials_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_vis_rules" ADD CONSTRAINT "_pages_v_blocks_testimonials_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_vis_rules_device_show" ADD CONSTRAINT "_pages_v_blocks_faq_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v_blocks_faq_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_vis_rules" ADD CONSTRAINT "_pages_v_blocks_faq_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_vis_rules_device_show" ADD CONSTRAINT "_pages_v_blocks_cta_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v_blocks_cta_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_vis_rules" ADD CONSTRAINT "_pages_v_blocks_cta_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "_pages_v_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "_pages_v_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_hero_vis_rules_device_show" ADD CONSTRAINT "posts_blocks_hero_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts_blocks_hero_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_hero_vis_rules" ADD CONSTRAINT "posts_blocks_hero_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_rich_text_vis_rules_device_show" ADD CONSTRAINT "posts_blocks_rich_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts_blocks_rich_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_rich_text_vis_rules" ADD CONSTRAINT "posts_blocks_rich_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_media_text_vis_rules_device_show" ADD CONSTRAINT "posts_blocks_media_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts_blocks_media_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_media_text_vis_rules" ADD CONSTRAINT "posts_blocks_media_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_cards_vis_rules_device_show" ADD CONSTRAINT "posts_blocks_cards_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts_blocks_cards_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_cards_vis_rules" ADD CONSTRAINT "posts_blocks_cards_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_listing_vis_rules_device_show" ADD CONSTRAINT "posts_blocks_listing_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts_blocks_listing_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_listing_vis_rules" ADD CONSTRAINT "posts_blocks_listing_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_columns_vis_rules_device_show" ADD CONSTRAINT "posts_blocks_columns_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts_blocks_columns_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_columns_vis_rules" ADD CONSTRAINT "posts_blocks_columns_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_tabs_vis_rules_device_show" ADD CONSTRAINT "posts_blocks_tabs_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts_blocks_tabs_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_tabs_vis_rules" ADD CONSTRAINT "posts_blocks_tabs_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_stats_vis_rules_device_show" ADD CONSTRAINT "posts_blocks_stats_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts_blocks_stats_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_stats_vis_rules" ADD CONSTRAINT "posts_blocks_stats_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_logos_vis_rules_device_show" ADD CONSTRAINT "posts_blocks_logos_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts_blocks_logos_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_logos_vis_rules" ADD CONSTRAINT "posts_blocks_logos_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_testimonials_vis_rules_device_show" ADD CONSTRAINT "posts_blocks_testimonials_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts_blocks_testimonials_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_testimonials_vis_rules" ADD CONSTRAINT "posts_blocks_testimonials_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_faq_vis_rules_device_show" ADD CONSTRAINT "posts_blocks_faq_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts_blocks_faq_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_faq_vis_rules" ADD CONSTRAINT "posts_blocks_faq_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_cta_vis_rules_device_show" ADD CONSTRAINT "posts_blocks_cta_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts_blocks_cta_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_cta_vis_rules" ADD CONSTRAINT "posts_blocks_cta_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "posts_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "posts_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_hero_vis_rules_device_show" ADD CONSTRAINT "_posts_v_blocks_hero_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v_blocks_hero_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_hero_vis_rules" ADD CONSTRAINT "_posts_v_blocks_hero_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_rich_text_vis_rules_device_show" ADD CONSTRAINT "_posts_v_blocks_rich_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v_blocks_rich_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_rich_text_vis_rules" ADD CONSTRAINT "_posts_v_blocks_rich_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_media_text_vis_rules_device_show" ADD CONSTRAINT "_posts_v_blocks_media_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v_blocks_media_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_media_text_vis_rules" ADD CONSTRAINT "_posts_v_blocks_media_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_cards_vis_rules_device_show" ADD CONSTRAINT "_posts_v_blocks_cards_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v_blocks_cards_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_cards_vis_rules" ADD CONSTRAINT "_posts_v_blocks_cards_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_listing_vis_rules_device_show" ADD CONSTRAINT "_posts_v_blocks_listing_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v_blocks_listing_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_listing_vis_rules" ADD CONSTRAINT "_posts_v_blocks_listing_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_columns_vis_rules_device_show" ADD CONSTRAINT "_posts_v_blocks_columns_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v_blocks_columns_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_columns_vis_rules" ADD CONSTRAINT "_posts_v_blocks_columns_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_tabs_vis_rules_device_show" ADD CONSTRAINT "_posts_v_blocks_tabs_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v_blocks_tabs_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_tabs_vis_rules" ADD CONSTRAINT "_posts_v_blocks_tabs_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_stats_vis_rules_device_show" ADD CONSTRAINT "_posts_v_blocks_stats_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v_blocks_stats_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_stats_vis_rules" ADD CONSTRAINT "_posts_v_blocks_stats_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_logos_vis_rules_device_show" ADD CONSTRAINT "_posts_v_blocks_logos_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v_blocks_logos_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_logos_vis_rules" ADD CONSTRAINT "_posts_v_blocks_logos_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_testimonials_vis_rules_device_show" ADD CONSTRAINT "_posts_v_blocks_testimonials_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v_blocks_testimonials_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_testimonials_vis_rules" ADD CONSTRAINT "_posts_v_blocks_testimonials_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_faq_vis_rules_device_show" ADD CONSTRAINT "_posts_v_blocks_faq_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v_blocks_faq_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_faq_vis_rules" ADD CONSTRAINT "_posts_v_blocks_faq_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_cta_vis_rules_device_show" ADD CONSTRAINT "_posts_v_blocks_cta_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v_blocks_cta_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_cta_vis_rules" ADD CONSTRAINT "_posts_v_blocks_cta_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "_posts_v_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "_posts_v_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_hero_vis_rules_device_show" ADD CONSTRAINT "events_blocks_hero_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events_blocks_hero_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_hero_vis_rules" ADD CONSTRAINT "events_blocks_hero_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_rich_text_vis_rules_device_show" ADD CONSTRAINT "events_blocks_rich_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events_blocks_rich_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_rich_text_vis_rules" ADD CONSTRAINT "events_blocks_rich_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_media_text_vis_rules_device_show" ADD CONSTRAINT "events_blocks_media_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events_blocks_media_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_media_text_vis_rules" ADD CONSTRAINT "events_blocks_media_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_cards_vis_rules_device_show" ADD CONSTRAINT "events_blocks_cards_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events_blocks_cards_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_cards_vis_rules" ADD CONSTRAINT "events_blocks_cards_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_listing_vis_rules_device_show" ADD CONSTRAINT "events_blocks_listing_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events_blocks_listing_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_listing_vis_rules" ADD CONSTRAINT "events_blocks_listing_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_columns_vis_rules_device_show" ADD CONSTRAINT "events_blocks_columns_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events_blocks_columns_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_columns_vis_rules" ADD CONSTRAINT "events_blocks_columns_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_tabs_vis_rules_device_show" ADD CONSTRAINT "events_blocks_tabs_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events_blocks_tabs_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_tabs_vis_rules" ADD CONSTRAINT "events_blocks_tabs_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_stats_vis_rules_device_show" ADD CONSTRAINT "events_blocks_stats_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events_blocks_stats_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_stats_vis_rules" ADD CONSTRAINT "events_blocks_stats_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_logos_vis_rules_device_show" ADD CONSTRAINT "events_blocks_logos_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events_blocks_logos_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_logos_vis_rules" ADD CONSTRAINT "events_blocks_logos_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_testimonials_vis_rules_device_show" ADD CONSTRAINT "events_blocks_testimonials_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events_blocks_testimonials_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_testimonials_vis_rules" ADD CONSTRAINT "events_blocks_testimonials_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_faq_vis_rules_device_show" ADD CONSTRAINT "events_blocks_faq_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events_blocks_faq_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_faq_vis_rules" ADD CONSTRAINT "events_blocks_faq_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_cta_vis_rules_device_show" ADD CONSTRAINT "events_blocks_cta_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events_blocks_cta_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_cta_vis_rules" ADD CONSTRAINT "events_blocks_cta_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "events_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "events_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_hero_vis_rules_device_show" ADD CONSTRAINT "_events_v_blocks_hero_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v_blocks_hero_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_hero_vis_rules" ADD CONSTRAINT "_events_v_blocks_hero_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_rich_text_vis_rules_device_show" ADD CONSTRAINT "_events_v_blocks_rich_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v_blocks_rich_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_rich_text_vis_rules" ADD CONSTRAINT "_events_v_blocks_rich_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_media_text_vis_rules_device_show" ADD CONSTRAINT "_events_v_blocks_media_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v_blocks_media_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_media_text_vis_rules" ADD CONSTRAINT "_events_v_blocks_media_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_cards_vis_rules_device_show" ADD CONSTRAINT "_events_v_blocks_cards_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v_blocks_cards_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_cards_vis_rules" ADD CONSTRAINT "_events_v_blocks_cards_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_listing_vis_rules_device_show" ADD CONSTRAINT "_events_v_blocks_listing_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v_blocks_listing_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_listing_vis_rules" ADD CONSTRAINT "_events_v_blocks_listing_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_columns_vis_rules_device_show" ADD CONSTRAINT "_events_v_blocks_columns_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v_blocks_columns_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_columns_vis_rules" ADD CONSTRAINT "_events_v_blocks_columns_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_tabs_vis_rules_device_show" ADD CONSTRAINT "_events_v_blocks_tabs_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v_blocks_tabs_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_tabs_vis_rules" ADD CONSTRAINT "_events_v_blocks_tabs_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_stats_vis_rules_device_show" ADD CONSTRAINT "_events_v_blocks_stats_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v_blocks_stats_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_stats_vis_rules" ADD CONSTRAINT "_events_v_blocks_stats_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_logos_vis_rules_device_show" ADD CONSTRAINT "_events_v_blocks_logos_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v_blocks_logos_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_logos_vis_rules" ADD CONSTRAINT "_events_v_blocks_logos_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_testimonials_vis_rules_device_show" ADD CONSTRAINT "_events_v_blocks_testimonials_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v_blocks_testimonials_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_testimonials_vis_rules" ADD CONSTRAINT "_events_v_blocks_testimonials_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_faq_vis_rules_device_show" ADD CONSTRAINT "_events_v_blocks_faq_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v_blocks_faq_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_faq_vis_rules" ADD CONSTRAINT "_events_v_blocks_faq_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_cta_vis_rules_device_show" ADD CONSTRAINT "_events_v_blocks_cta_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v_blocks_cta_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_cta_vis_rules" ADD CONSTRAINT "_events_v_blocks_cta_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "_events_v_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "_events_v_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_hero_vis_rules_device_show" ADD CONSTRAINT "resources_blocks_hero_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources_blocks_hero_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_hero_vis_rules" ADD CONSTRAINT "resources_blocks_hero_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_rich_text_vis_rules_device_show" ADD CONSTRAINT "resources_blocks_rich_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources_blocks_rich_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_rich_text_vis_rules" ADD CONSTRAINT "resources_blocks_rich_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_media_text_vis_rules_device_show" ADD CONSTRAINT "resources_blocks_media_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources_blocks_media_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_media_text_vis_rules" ADD CONSTRAINT "resources_blocks_media_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_cards_vis_rules_device_show" ADD CONSTRAINT "resources_blocks_cards_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources_blocks_cards_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_cards_vis_rules" ADD CONSTRAINT "resources_blocks_cards_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_listing_vis_rules_device_show" ADD CONSTRAINT "resources_blocks_listing_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources_blocks_listing_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_listing_vis_rules" ADD CONSTRAINT "resources_blocks_listing_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_columns_vis_rules_device_show" ADD CONSTRAINT "resources_blocks_columns_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources_blocks_columns_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_columns_vis_rules" ADD CONSTRAINT "resources_blocks_columns_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_tabs_vis_rules_device_show" ADD CONSTRAINT "resources_blocks_tabs_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources_blocks_tabs_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_tabs_vis_rules" ADD CONSTRAINT "resources_blocks_tabs_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_stats_vis_rules_device_show" ADD CONSTRAINT "resources_blocks_stats_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources_blocks_stats_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_stats_vis_rules" ADD CONSTRAINT "resources_blocks_stats_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_logos_vis_rules_device_show" ADD CONSTRAINT "resources_blocks_logos_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources_blocks_logos_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_logos_vis_rules" ADD CONSTRAINT "resources_blocks_logos_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_testimonials_vis_rules_device_show" ADD CONSTRAINT "resources_blocks_testimonials_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources_blocks_testimonials_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_testimonials_vis_rules" ADD CONSTRAINT "resources_blocks_testimonials_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_faq_vis_rules_device_show" ADD CONSTRAINT "resources_blocks_faq_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources_blocks_faq_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_faq_vis_rules" ADD CONSTRAINT "resources_blocks_faq_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_cta_vis_rules_device_show" ADD CONSTRAINT "resources_blocks_cta_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources_blocks_cta_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_cta_vis_rules" ADD CONSTRAINT "resources_blocks_cta_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "resources_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "resources_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_hero_vis_rules_device_show" ADD CONSTRAINT "_resources_v_blocks_hero_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_resources_v_blocks_hero_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_hero_vis_rules" ADD CONSTRAINT "_resources_v_blocks_hero_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_rich_text_vis_rules_device_show" ADD CONSTRAINT "_resources_v_blocks_rich_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_resources_v_blocks_rich_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_rich_text_vis_rules" ADD CONSTRAINT "_resources_v_blocks_rich_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_media_text_vis_rules_device_show" ADD CONSTRAINT "_resources_v_blocks_media_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_resources_v_blocks_media_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_media_text_vis_rules" ADD CONSTRAINT "_resources_v_blocks_media_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_cards_vis_rules_device_show" ADD CONSTRAINT "_resources_v_blocks_cards_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_resources_v_blocks_cards_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_cards_vis_rules" ADD CONSTRAINT "_resources_v_blocks_cards_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_listing_vis_rules_device_show" ADD CONSTRAINT "_resources_v_blocks_listing_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_resources_v_blocks_listing_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_listing_vis_rules" ADD CONSTRAINT "_resources_v_blocks_listing_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_columns_vis_rules_device_show" ADD CONSTRAINT "_resources_v_blocks_columns_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_resources_v_blocks_columns_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_columns_vis_rules" ADD CONSTRAINT "_resources_v_blocks_columns_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_tabs_vis_rules_device_show" ADD CONSTRAINT "_resources_v_blocks_tabs_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_resources_v_blocks_tabs_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_tabs_vis_rules" ADD CONSTRAINT "_resources_v_blocks_tabs_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_stats_vis_rules_device_show" ADD CONSTRAINT "_resources_v_blocks_stats_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_resources_v_blocks_stats_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_stats_vis_rules" ADD CONSTRAINT "_resources_v_blocks_stats_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_logos_vis_rules_device_show" ADD CONSTRAINT "_resources_v_blocks_logos_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_resources_v_blocks_logos_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_logos_vis_rules" ADD CONSTRAINT "_resources_v_blocks_logos_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_testimonials_vis_rules_device_show" ADD CONSTRAINT "_resources_v_blocks_testimonials_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_resources_v_blocks_testimonials_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_testimonials_vis_rules" ADD CONSTRAINT "_resources_v_blocks_testimonials_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_faq_vis_rules_device_show" ADD CONSTRAINT "_resources_v_blocks_faq_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_resources_v_blocks_faq_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_faq_vis_rules" ADD CONSTRAINT "_resources_v_blocks_faq_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_cta_vis_rules_device_show" ADD CONSTRAINT "_resources_v_blocks_cta_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_resources_v_blocks_cta_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_cta_vis_rules" ADD CONSTRAINT "_resources_v_blocks_cta_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "_resources_v_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_resources_v_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "_resources_v_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_hero_vis_rules_device_show" ADD CONSTRAINT "glossary_blocks_hero_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."glossary_blocks_hero_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_hero_vis_rules" ADD CONSTRAINT "glossary_blocks_hero_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_rich_text_vis_rules_device_show" ADD CONSTRAINT "glossary_blocks_rich_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."glossary_blocks_rich_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_rich_text_vis_rules" ADD CONSTRAINT "glossary_blocks_rich_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_media_text_vis_rules_device_show" ADD CONSTRAINT "glossary_blocks_media_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."glossary_blocks_media_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_media_text_vis_rules" ADD CONSTRAINT "glossary_blocks_media_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_cards_vis_rules_device_show" ADD CONSTRAINT "glossary_blocks_cards_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."glossary_blocks_cards_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_cards_vis_rules" ADD CONSTRAINT "glossary_blocks_cards_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_listing_vis_rules_device_show" ADD CONSTRAINT "glossary_blocks_listing_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."glossary_blocks_listing_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_listing_vis_rules" ADD CONSTRAINT "glossary_blocks_listing_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_columns_vis_rules_device_show" ADD CONSTRAINT "glossary_blocks_columns_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."glossary_blocks_columns_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_columns_vis_rules" ADD CONSTRAINT "glossary_blocks_columns_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_tabs_vis_rules_device_show" ADD CONSTRAINT "glossary_blocks_tabs_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."glossary_blocks_tabs_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_tabs_vis_rules" ADD CONSTRAINT "glossary_blocks_tabs_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_stats_vis_rules_device_show" ADD CONSTRAINT "glossary_blocks_stats_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."glossary_blocks_stats_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_stats_vis_rules" ADD CONSTRAINT "glossary_blocks_stats_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_logos_vis_rules_device_show" ADD CONSTRAINT "glossary_blocks_logos_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."glossary_blocks_logos_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_logos_vis_rules" ADD CONSTRAINT "glossary_blocks_logos_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_testimonials_vis_rules_device_show" ADD CONSTRAINT "glossary_blocks_testimonials_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."glossary_blocks_testimonials_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_testimonials_vis_rules" ADD CONSTRAINT "glossary_blocks_testimonials_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_faq_vis_rules_device_show" ADD CONSTRAINT "glossary_blocks_faq_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."glossary_blocks_faq_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_faq_vis_rules" ADD CONSTRAINT "glossary_blocks_faq_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_cta_vis_rules_device_show" ADD CONSTRAINT "glossary_blocks_cta_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."glossary_blocks_cta_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_cta_vis_rules" ADD CONSTRAINT "glossary_blocks_cta_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "glossary_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."glossary_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "glossary_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_hero_vis_rules_device_show" ADD CONSTRAINT "_glossary_v_blocks_hero_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_glossary_v_blocks_hero_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_hero_vis_rules" ADD CONSTRAINT "_glossary_v_blocks_hero_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_rich_text_vis_rules_device_show" ADD CONSTRAINT "_glossary_v_blocks_rich_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_glossary_v_blocks_rich_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_rich_text_vis_rules" ADD CONSTRAINT "_glossary_v_blocks_rich_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_media_text_vis_rules_device_show" ADD CONSTRAINT "_glossary_v_blocks_media_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_glossary_v_blocks_media_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_media_text_vis_rules" ADD CONSTRAINT "_glossary_v_blocks_media_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_cards_vis_rules_device_show" ADD CONSTRAINT "_glossary_v_blocks_cards_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_glossary_v_blocks_cards_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_cards_vis_rules" ADD CONSTRAINT "_glossary_v_blocks_cards_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_listing_vis_rules_device_show" ADD CONSTRAINT "_glossary_v_blocks_listing_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_glossary_v_blocks_listing_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_listing_vis_rules" ADD CONSTRAINT "_glossary_v_blocks_listing_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_columns_vis_rules_device_show" ADD CONSTRAINT "_glossary_v_blocks_columns_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_glossary_v_blocks_columns_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_columns_vis_rules" ADD CONSTRAINT "_glossary_v_blocks_columns_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_tabs_vis_rules_device_show" ADD CONSTRAINT "_glossary_v_blocks_tabs_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_glossary_v_blocks_tabs_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_tabs_vis_rules" ADD CONSTRAINT "_glossary_v_blocks_tabs_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_stats_vis_rules_device_show" ADD CONSTRAINT "_glossary_v_blocks_stats_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_glossary_v_blocks_stats_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_stats_vis_rules" ADD CONSTRAINT "_glossary_v_blocks_stats_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_logos_vis_rules_device_show" ADD CONSTRAINT "_glossary_v_blocks_logos_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_glossary_v_blocks_logos_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_logos_vis_rules" ADD CONSTRAINT "_glossary_v_blocks_logos_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_testimonials_vis_rules_device_show" ADD CONSTRAINT "_glossary_v_blocks_testimonials_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_glossary_v_blocks_testimonials_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_testimonials_vis_rules" ADD CONSTRAINT "_glossary_v_blocks_testimonials_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_faq_vis_rules_device_show" ADD CONSTRAINT "_glossary_v_blocks_faq_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_glossary_v_blocks_faq_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_faq_vis_rules" ADD CONSTRAINT "_glossary_v_blocks_faq_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_cta_vis_rules_device_show" ADD CONSTRAINT "_glossary_v_blocks_cta_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_glossary_v_blocks_cta_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_cta_vis_rules" ADD CONSTRAINT "_glossary_v_blocks_cta_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "_glossary_v_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_glossary_v_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "_glossary_v_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_hero_vis_rules_device_show" ADD CONSTRAINT "people_blocks_hero_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."people_blocks_hero_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_hero_vis_rules" ADD CONSTRAINT "people_blocks_hero_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_rich_text_vis_rules_device_show" ADD CONSTRAINT "people_blocks_rich_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."people_blocks_rich_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_rich_text_vis_rules" ADD CONSTRAINT "people_blocks_rich_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_media_text_vis_rules_device_show" ADD CONSTRAINT "people_blocks_media_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."people_blocks_media_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_media_text_vis_rules" ADD CONSTRAINT "people_blocks_media_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_cards_vis_rules_device_show" ADD CONSTRAINT "people_blocks_cards_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."people_blocks_cards_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_cards_vis_rules" ADD CONSTRAINT "people_blocks_cards_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_listing_vis_rules_device_show" ADD CONSTRAINT "people_blocks_listing_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."people_blocks_listing_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_listing_vis_rules" ADD CONSTRAINT "people_blocks_listing_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_columns_vis_rules_device_show" ADD CONSTRAINT "people_blocks_columns_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."people_blocks_columns_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_columns_vis_rules" ADD CONSTRAINT "people_blocks_columns_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_tabs_vis_rules_device_show" ADD CONSTRAINT "people_blocks_tabs_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."people_blocks_tabs_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_tabs_vis_rules" ADD CONSTRAINT "people_blocks_tabs_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_stats_vis_rules_device_show" ADD CONSTRAINT "people_blocks_stats_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."people_blocks_stats_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_stats_vis_rules" ADD CONSTRAINT "people_blocks_stats_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_logos_vis_rules_device_show" ADD CONSTRAINT "people_blocks_logos_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."people_blocks_logos_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_logos_vis_rules" ADD CONSTRAINT "people_blocks_logos_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_testimonials_vis_rules_device_show" ADD CONSTRAINT "people_blocks_testimonials_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."people_blocks_testimonials_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_testimonials_vis_rules" ADD CONSTRAINT "people_blocks_testimonials_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_faq_vis_rules_device_show" ADD CONSTRAINT "people_blocks_faq_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."people_blocks_faq_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_faq_vis_rules" ADD CONSTRAINT "people_blocks_faq_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_cta_vis_rules_device_show" ADD CONSTRAINT "people_blocks_cta_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."people_blocks_cta_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_cta_vis_rules" ADD CONSTRAINT "people_blocks_cta_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "people_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."people_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "people_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_hero_vis_rules_device_show" ADD CONSTRAINT "_people_v_blocks_hero_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_people_v_blocks_hero_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_hero_vis_rules" ADD CONSTRAINT "_people_v_blocks_hero_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_rich_text_vis_rules_device_show" ADD CONSTRAINT "_people_v_blocks_rich_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_people_v_blocks_rich_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_rich_text_vis_rules" ADD CONSTRAINT "_people_v_blocks_rich_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_media_text_vis_rules_device_show" ADD CONSTRAINT "_people_v_blocks_media_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_people_v_blocks_media_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_media_text_vis_rules" ADD CONSTRAINT "_people_v_blocks_media_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_cards_vis_rules_device_show" ADD CONSTRAINT "_people_v_blocks_cards_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_people_v_blocks_cards_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_cards_vis_rules" ADD CONSTRAINT "_people_v_blocks_cards_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_listing_vis_rules_device_show" ADD CONSTRAINT "_people_v_blocks_listing_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_people_v_blocks_listing_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_listing_vis_rules" ADD CONSTRAINT "_people_v_blocks_listing_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_columns_vis_rules_device_show" ADD CONSTRAINT "_people_v_blocks_columns_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_people_v_blocks_columns_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_columns_vis_rules" ADD CONSTRAINT "_people_v_blocks_columns_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_tabs_vis_rules_device_show" ADD CONSTRAINT "_people_v_blocks_tabs_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_people_v_blocks_tabs_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_tabs_vis_rules" ADD CONSTRAINT "_people_v_blocks_tabs_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_stats_vis_rules_device_show" ADD CONSTRAINT "_people_v_blocks_stats_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_people_v_blocks_stats_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_stats_vis_rules" ADD CONSTRAINT "_people_v_blocks_stats_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_logos_vis_rules_device_show" ADD CONSTRAINT "_people_v_blocks_logos_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_people_v_blocks_logos_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_logos_vis_rules" ADD CONSTRAINT "_people_v_blocks_logos_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_testimonials_vis_rules_device_show" ADD CONSTRAINT "_people_v_blocks_testimonials_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_people_v_blocks_testimonials_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_testimonials_vis_rules" ADD CONSTRAINT "_people_v_blocks_testimonials_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_faq_vis_rules_device_show" ADD CONSTRAINT "_people_v_blocks_faq_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_people_v_blocks_faq_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_faq_vis_rules" ADD CONSTRAINT "_people_v_blocks_faq_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_cta_vis_rules_device_show" ADD CONSTRAINT "_people_v_blocks_cta_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_people_v_blocks_cta_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_cta_vis_rules" ADD CONSTRAINT "_people_v_blocks_cta_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "_people_v_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_people_v_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "_people_v_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_hero_vis_rules_device_show" ADD CONSTRAINT "reusable_blocks_hero_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."reusable_blocks_hero_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_hero_vis_rules" ADD CONSTRAINT "reusable_blocks_hero_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_rich_text_vis_rules_device_show" ADD CONSTRAINT "reusable_blocks_rich_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."reusable_blocks_rich_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_rich_text_vis_rules" ADD CONSTRAINT "reusable_blocks_rich_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_media_text_vis_rules_device_show" ADD CONSTRAINT "reusable_blocks_media_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."reusable_blocks_media_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_media_text_vis_rules" ADD CONSTRAINT "reusable_blocks_media_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_cards_vis_rules_device_show" ADD CONSTRAINT "reusable_blocks_cards_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."reusable_blocks_cards_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_cards_vis_rules" ADD CONSTRAINT "reusable_blocks_cards_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_listing_vis_rules_device_show" ADD CONSTRAINT "reusable_blocks_listing_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."reusable_blocks_listing_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_listing_vis_rules" ADD CONSTRAINT "reusable_blocks_listing_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_columns_vis_rules_device_show" ADD CONSTRAINT "reusable_blocks_columns_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."reusable_blocks_columns_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_columns_vis_rules" ADD CONSTRAINT "reusable_blocks_columns_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_tabs_vis_rules_device_show" ADD CONSTRAINT "reusable_blocks_tabs_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."reusable_blocks_tabs_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_tabs_vis_rules" ADD CONSTRAINT "reusable_blocks_tabs_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_stats_vis_rules_device_show" ADD CONSTRAINT "reusable_blocks_stats_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."reusable_blocks_stats_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_stats_vis_rules" ADD CONSTRAINT "reusable_blocks_stats_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_logos_vis_rules_device_show" ADD CONSTRAINT "reusable_blocks_logos_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."reusable_blocks_logos_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_logos_vis_rules" ADD CONSTRAINT "reusable_blocks_logos_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_testimonials_vis_rules_device_show" ADD CONSTRAINT "reusable_blocks_testimonials_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."reusable_blocks_testimonials_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_testimonials_vis_rules" ADD CONSTRAINT "reusable_blocks_testimonials_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_faq_vis_rules_device_show" ADD CONSTRAINT "reusable_blocks_faq_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."reusable_blocks_faq_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_faq_vis_rules" ADD CONSTRAINT "reusable_blocks_faq_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_cta_vis_rules_device_show" ADD CONSTRAINT "reusable_blocks_cta_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."reusable_blocks_cta_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_cta_vis_rules" ADD CONSTRAINT "reusable_blocks_cta_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "reusable_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."reusable_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "reusable_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_hero_vis_rules_device_show" ADD CONSTRAINT "_reusable_v_blocks_hero_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_reusable_v_blocks_hero_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_hero_vis_rules" ADD CONSTRAINT "_reusable_v_blocks_hero_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_rich_text_vis_rules_device_show" ADD CONSTRAINT "_reusable_v_blocks_rich_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_reusable_v_blocks_rich_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_rich_text_vis_rules" ADD CONSTRAINT "_reusable_v_blocks_rich_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_media_text_vis_rules_device_show" ADD CONSTRAINT "_reusable_v_blocks_media_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_reusable_v_blocks_media_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_media_text_vis_rules" ADD CONSTRAINT "_reusable_v_blocks_media_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_cards_vis_rules_device_show" ADD CONSTRAINT "_reusable_v_blocks_cards_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_reusable_v_blocks_cards_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_cards_vis_rules" ADD CONSTRAINT "_reusable_v_blocks_cards_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_listing_vis_rules_device_show" ADD CONSTRAINT "_reusable_v_blocks_listing_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_reusable_v_blocks_listing_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_listing_vis_rules" ADD CONSTRAINT "_reusable_v_blocks_listing_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_columns_vis_rules_device_show" ADD CONSTRAINT "_reusable_v_blocks_columns_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_reusable_v_blocks_columns_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_columns_vis_rules" ADD CONSTRAINT "_reusable_v_blocks_columns_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_tabs_vis_rules_device_show" ADD CONSTRAINT "_reusable_v_blocks_tabs_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_reusable_v_blocks_tabs_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_tabs_vis_rules" ADD CONSTRAINT "_reusable_v_blocks_tabs_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_stats_vis_rules_device_show" ADD CONSTRAINT "_reusable_v_blocks_stats_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_reusable_v_blocks_stats_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_stats_vis_rules" ADD CONSTRAINT "_reusable_v_blocks_stats_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_logos_vis_rules_device_show" ADD CONSTRAINT "_reusable_v_blocks_logos_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_reusable_v_blocks_logos_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_logos_vis_rules" ADD CONSTRAINT "_reusable_v_blocks_logos_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_testimonials_vis_rules_device_show" ADD CONSTRAINT "_reusable_v_blocks_testimonials_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_reusable_v_blocks_testimonials_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_testimonials_vis_rules" ADD CONSTRAINT "_reusable_v_blocks_testimonials_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_faq_vis_rules_device_show" ADD CONSTRAINT "_reusable_v_blocks_faq_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_reusable_v_blocks_faq_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_faq_vis_rules" ADD CONSTRAINT "_reusable_v_blocks_faq_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_cta_vis_rules_device_show" ADD CONSTRAINT "_reusable_v_blocks_cta_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_reusable_v_blocks_cta_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_cta_vis_rules" ADD CONSTRAINT "_reusable_v_blocks_cta_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "_reusable_v_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_reusable_v_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "_reusable_v_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_hero_vis_rules_device_show" ADD CONSTRAINT "cpt_defaults_blocks_hero_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cpt_defaults_blocks_hero_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_hero_vis_rules" ADD CONSTRAINT "cpt_defaults_blocks_hero_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_rich_text_vis_rules_device_show" ADD CONSTRAINT "cpt_defaults_blocks_rich_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cpt_defaults_blocks_rich_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_rich_text_vis_rules" ADD CONSTRAINT "cpt_defaults_blocks_rich_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_media_text_vis_rules_device_show" ADD CONSTRAINT "cpt_defaults_blocks_media_text_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cpt_defaults_blocks_media_text_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_media_text_vis_rules" ADD CONSTRAINT "cpt_defaults_blocks_media_text_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_cards_vis_rules_device_show" ADD CONSTRAINT "cpt_defaults_blocks_cards_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cpt_defaults_blocks_cards_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_cards_vis_rules" ADD CONSTRAINT "cpt_defaults_blocks_cards_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_listing_vis_rules_device_show" ADD CONSTRAINT "cpt_defaults_blocks_listing_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cpt_defaults_blocks_listing_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_listing_vis_rules" ADD CONSTRAINT "cpt_defaults_blocks_listing_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_listing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_columns_vis_rules_device_show" ADD CONSTRAINT "cpt_defaults_blocks_columns_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cpt_defaults_blocks_columns_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_columns_vis_rules" ADD CONSTRAINT "cpt_defaults_blocks_columns_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_tabs_vis_rules_device_show" ADD CONSTRAINT "cpt_defaults_blocks_tabs_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cpt_defaults_blocks_tabs_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_tabs_vis_rules" ADD CONSTRAINT "cpt_defaults_blocks_tabs_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_stats_vis_rules_device_show" ADD CONSTRAINT "cpt_defaults_blocks_stats_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cpt_defaults_blocks_stats_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_stats_vis_rules" ADD CONSTRAINT "cpt_defaults_blocks_stats_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_logos_vis_rules_device_show" ADD CONSTRAINT "cpt_defaults_blocks_logos_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cpt_defaults_blocks_logos_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_logos_vis_rules" ADD CONSTRAINT "cpt_defaults_blocks_logos_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_testimonials_vis_rules_device_show" ADD CONSTRAINT "cpt_defaults_blocks_testimonials_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cpt_defaults_blocks_testimonials_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_testimonials_vis_rules" ADD CONSTRAINT "cpt_defaults_blocks_testimonials_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_faq_vis_rules_device_show" ADD CONSTRAINT "cpt_defaults_blocks_faq_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cpt_defaults_blocks_faq_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_faq_vis_rules" ADD CONSTRAINT "cpt_defaults_blocks_faq_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_cta_vis_rules_device_show" ADD CONSTRAINT "cpt_defaults_blocks_cta_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cpt_defaults_blocks_cta_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_cta_vis_rules" ADD CONSTRAINT "cpt_defaults_blocks_cta_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_dynamic_field_vis_rules_device_show" ADD CONSTRAINT "cpt_defaults_blocks_dynamic_field_vis_rules_device_show_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cpt_defaults_blocks_dynamic_field_vis_rules"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_dynamic_field_vis_rules" ADD CONSTRAINT "cpt_defaults_blocks_dynamic_field_vis_rules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_dynamic_field"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_hero_vis_rules_device_show_order_idx" ON "pages_blocks_hero_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "pages_blocks_hero_vis_rules_device_show_parent_idx" ON "pages_blocks_hero_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "pages_blocks_hero_vis_rules_device_show_locale_idx" ON "pages_blocks_hero_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "pages_blocks_hero_vis_rules_order_idx" ON "pages_blocks_hero_vis_rules" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_vis_rules_parent_id_idx" ON "pages_blocks_hero_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_vis_rules_locale_idx" ON "pages_blocks_hero_vis_rules" USING btree ("_locale");
  CREATE INDEX "pages_blocks_rich_text_vis_rules_device_show_order_idx" ON "pages_blocks_rich_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "pages_blocks_rich_text_vis_rules_device_show_parent_idx" ON "pages_blocks_rich_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "pages_blocks_rich_text_vis_rules_device_show_locale_idx" ON "pages_blocks_rich_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "pages_blocks_rich_text_vis_rules_order_idx" ON "pages_blocks_rich_text_vis_rules" USING btree ("_order");
  CREATE INDEX "pages_blocks_rich_text_vis_rules_parent_id_idx" ON "pages_blocks_rich_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_rich_text_vis_rules_locale_idx" ON "pages_blocks_rich_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "pages_blocks_media_text_vis_rules_device_show_order_idx" ON "pages_blocks_media_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "pages_blocks_media_text_vis_rules_device_show_parent_idx" ON "pages_blocks_media_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "pages_blocks_media_text_vis_rules_device_show_locale_idx" ON "pages_blocks_media_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "pages_blocks_media_text_vis_rules_order_idx" ON "pages_blocks_media_text_vis_rules" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_text_vis_rules_parent_id_idx" ON "pages_blocks_media_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_text_vis_rules_locale_idx" ON "pages_blocks_media_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "pages_blocks_cards_vis_rules_device_show_order_idx" ON "pages_blocks_cards_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "pages_blocks_cards_vis_rules_device_show_parent_idx" ON "pages_blocks_cards_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "pages_blocks_cards_vis_rules_device_show_locale_idx" ON "pages_blocks_cards_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "pages_blocks_cards_vis_rules_order_idx" ON "pages_blocks_cards_vis_rules" USING btree ("_order");
  CREATE INDEX "pages_blocks_cards_vis_rules_parent_id_idx" ON "pages_blocks_cards_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cards_vis_rules_locale_idx" ON "pages_blocks_cards_vis_rules" USING btree ("_locale");
  CREATE INDEX "pages_blocks_listing_vis_rules_device_show_order_idx" ON "pages_blocks_listing_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "pages_blocks_listing_vis_rules_device_show_parent_idx" ON "pages_blocks_listing_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "pages_blocks_listing_vis_rules_device_show_locale_idx" ON "pages_blocks_listing_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "pages_blocks_listing_vis_rules_order_idx" ON "pages_blocks_listing_vis_rules" USING btree ("_order");
  CREATE INDEX "pages_blocks_listing_vis_rules_parent_id_idx" ON "pages_blocks_listing_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_listing_vis_rules_locale_idx" ON "pages_blocks_listing_vis_rules" USING btree ("_locale");
  CREATE INDEX "pages_blocks_columns_vis_rules_device_show_order_idx" ON "pages_blocks_columns_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "pages_blocks_columns_vis_rules_device_show_parent_idx" ON "pages_blocks_columns_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "pages_blocks_columns_vis_rules_device_show_locale_idx" ON "pages_blocks_columns_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "pages_blocks_columns_vis_rules_order_idx" ON "pages_blocks_columns_vis_rules" USING btree ("_order");
  CREATE INDEX "pages_blocks_columns_vis_rules_parent_id_idx" ON "pages_blocks_columns_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_columns_vis_rules_locale_idx" ON "pages_blocks_columns_vis_rules" USING btree ("_locale");
  CREATE INDEX "pages_blocks_tabs_vis_rules_device_show_order_idx" ON "pages_blocks_tabs_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "pages_blocks_tabs_vis_rules_device_show_parent_idx" ON "pages_blocks_tabs_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "pages_blocks_tabs_vis_rules_device_show_locale_idx" ON "pages_blocks_tabs_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "pages_blocks_tabs_vis_rules_order_idx" ON "pages_blocks_tabs_vis_rules" USING btree ("_order");
  CREATE INDEX "pages_blocks_tabs_vis_rules_parent_id_idx" ON "pages_blocks_tabs_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_tabs_vis_rules_locale_idx" ON "pages_blocks_tabs_vis_rules" USING btree ("_locale");
  CREATE INDEX "pages_blocks_stats_vis_rules_device_show_order_idx" ON "pages_blocks_stats_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "pages_blocks_stats_vis_rules_device_show_parent_idx" ON "pages_blocks_stats_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "pages_blocks_stats_vis_rules_device_show_locale_idx" ON "pages_blocks_stats_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "pages_blocks_stats_vis_rules_order_idx" ON "pages_blocks_stats_vis_rules" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats_vis_rules_parent_id_idx" ON "pages_blocks_stats_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats_vis_rules_locale_idx" ON "pages_blocks_stats_vis_rules" USING btree ("_locale");
  CREATE INDEX "pages_blocks_logos_vis_rules_device_show_order_idx" ON "pages_blocks_logos_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "pages_blocks_logos_vis_rules_device_show_parent_idx" ON "pages_blocks_logos_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "pages_blocks_logos_vis_rules_device_show_locale_idx" ON "pages_blocks_logos_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "pages_blocks_logos_vis_rules_order_idx" ON "pages_blocks_logos_vis_rules" USING btree ("_order");
  CREATE INDEX "pages_blocks_logos_vis_rules_parent_id_idx" ON "pages_blocks_logos_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_logos_vis_rules_locale_idx" ON "pages_blocks_logos_vis_rules" USING btree ("_locale");
  CREATE INDEX "pages_blocks_testimonials_vis_rules_device_show_order_idx" ON "pages_blocks_testimonials_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "pages_blocks_testimonials_vis_rules_device_show_parent_idx" ON "pages_blocks_testimonials_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "pages_blocks_testimonials_vis_rules_device_show_locale_idx" ON "pages_blocks_testimonials_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "pages_blocks_testimonials_vis_rules_order_idx" ON "pages_blocks_testimonials_vis_rules" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_vis_rules_parent_id_idx" ON "pages_blocks_testimonials_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_vis_rules_locale_idx" ON "pages_blocks_testimonials_vis_rules" USING btree ("_locale");
  CREATE INDEX "pages_blocks_faq_vis_rules_device_show_order_idx" ON "pages_blocks_faq_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "pages_blocks_faq_vis_rules_device_show_parent_idx" ON "pages_blocks_faq_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "pages_blocks_faq_vis_rules_device_show_locale_idx" ON "pages_blocks_faq_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "pages_blocks_faq_vis_rules_order_idx" ON "pages_blocks_faq_vis_rules" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_vis_rules_parent_id_idx" ON "pages_blocks_faq_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_vis_rules_locale_idx" ON "pages_blocks_faq_vis_rules" USING btree ("_locale");
  CREATE INDEX "pages_blocks_cta_vis_rules_device_show_order_idx" ON "pages_blocks_cta_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "pages_blocks_cta_vis_rules_device_show_parent_idx" ON "pages_blocks_cta_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "pages_blocks_cta_vis_rules_device_show_locale_idx" ON "pages_blocks_cta_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "pages_blocks_cta_vis_rules_order_idx" ON "pages_blocks_cta_vis_rules" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_vis_rules_parent_id_idx" ON "pages_blocks_cta_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_vis_rules_locale_idx" ON "pages_blocks_cta_vis_rules" USING btree ("_locale");
  CREATE INDEX "pages_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "pages_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "pages_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "pages_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "pages_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "pages_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "pages_blocks_dynamic_field_vis_rules_order_idx" ON "pages_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "pages_blocks_dynamic_field_vis_rules_parent_id_idx" ON "pages_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dynamic_field_vis_rules_locale_idx" ON "pages_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_hero_vis_rules_device_show_order_idx" ON "_pages_v_blocks_hero_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_pages_v_blocks_hero_vis_rules_device_show_parent_idx" ON "_pages_v_blocks_hero_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_pages_v_blocks_hero_vis_rules_device_show_locale_idx" ON "_pages_v_blocks_hero_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_pages_v_blocks_hero_vis_rules_order_idx" ON "_pages_v_blocks_hero_vis_rules" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_vis_rules_parent_id_idx" ON "_pages_v_blocks_hero_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_vis_rules_locale_idx" ON "_pages_v_blocks_hero_vis_rules" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_rich_text_vis_rules_device_show_order_idx" ON "_pages_v_blocks_rich_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_pages_v_blocks_rich_text_vis_rules_device_show_parent_idx" ON "_pages_v_blocks_rich_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_pages_v_blocks_rich_text_vis_rules_device_show_locale_idx" ON "_pages_v_blocks_rich_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_pages_v_blocks_rich_text_vis_rules_order_idx" ON "_pages_v_blocks_rich_text_vis_rules" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_rich_text_vis_rules_parent_id_idx" ON "_pages_v_blocks_rich_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_rich_text_vis_rules_locale_idx" ON "_pages_v_blocks_rich_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_media_text_vis_rules_device_show_order_idx" ON "_pages_v_blocks_media_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_pages_v_blocks_media_text_vis_rules_device_show_parent_idx" ON "_pages_v_blocks_media_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_pages_v_blocks_media_text_vis_rules_device_show_locale_idx" ON "_pages_v_blocks_media_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_pages_v_blocks_media_text_vis_rules_order_idx" ON "_pages_v_blocks_media_text_vis_rules" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_text_vis_rules_parent_id_idx" ON "_pages_v_blocks_media_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_text_vis_rules_locale_idx" ON "_pages_v_blocks_media_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_cards_vis_rules_device_show_order_idx" ON "_pages_v_blocks_cards_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_pages_v_blocks_cards_vis_rules_device_show_parent_idx" ON "_pages_v_blocks_cards_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_pages_v_blocks_cards_vis_rules_device_show_locale_idx" ON "_pages_v_blocks_cards_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_pages_v_blocks_cards_vis_rules_order_idx" ON "_pages_v_blocks_cards_vis_rules" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cards_vis_rules_parent_id_idx" ON "_pages_v_blocks_cards_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cards_vis_rules_locale_idx" ON "_pages_v_blocks_cards_vis_rules" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_listing_vis_rules_device_show_order_idx" ON "_pages_v_blocks_listing_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_pages_v_blocks_listing_vis_rules_device_show_parent_idx" ON "_pages_v_blocks_listing_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_pages_v_blocks_listing_vis_rules_device_show_locale_idx" ON "_pages_v_blocks_listing_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_pages_v_blocks_listing_vis_rules_order_idx" ON "_pages_v_blocks_listing_vis_rules" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_listing_vis_rules_parent_id_idx" ON "_pages_v_blocks_listing_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_listing_vis_rules_locale_idx" ON "_pages_v_blocks_listing_vis_rules" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_columns_vis_rules_device_show_order_idx" ON "_pages_v_blocks_columns_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_pages_v_blocks_columns_vis_rules_device_show_parent_idx" ON "_pages_v_blocks_columns_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_pages_v_blocks_columns_vis_rules_device_show_locale_idx" ON "_pages_v_blocks_columns_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_pages_v_blocks_columns_vis_rules_order_idx" ON "_pages_v_blocks_columns_vis_rules" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_columns_vis_rules_parent_id_idx" ON "_pages_v_blocks_columns_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_columns_vis_rules_locale_idx" ON "_pages_v_blocks_columns_vis_rules" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_tabs_vis_rules_device_show_order_idx" ON "_pages_v_blocks_tabs_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_pages_v_blocks_tabs_vis_rules_device_show_parent_idx" ON "_pages_v_blocks_tabs_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_pages_v_blocks_tabs_vis_rules_device_show_locale_idx" ON "_pages_v_blocks_tabs_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_pages_v_blocks_tabs_vis_rules_order_idx" ON "_pages_v_blocks_tabs_vis_rules" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_tabs_vis_rules_parent_id_idx" ON "_pages_v_blocks_tabs_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_tabs_vis_rules_locale_idx" ON "_pages_v_blocks_tabs_vis_rules" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_stats_vis_rules_device_show_order_idx" ON "_pages_v_blocks_stats_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_pages_v_blocks_stats_vis_rules_device_show_parent_idx" ON "_pages_v_blocks_stats_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_pages_v_blocks_stats_vis_rules_device_show_locale_idx" ON "_pages_v_blocks_stats_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_pages_v_blocks_stats_vis_rules_order_idx" ON "_pages_v_blocks_stats_vis_rules" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_stats_vis_rules_parent_id_idx" ON "_pages_v_blocks_stats_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_stats_vis_rules_locale_idx" ON "_pages_v_blocks_stats_vis_rules" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_logos_vis_rules_device_show_order_idx" ON "_pages_v_blocks_logos_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_pages_v_blocks_logos_vis_rules_device_show_parent_idx" ON "_pages_v_blocks_logos_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_pages_v_blocks_logos_vis_rules_device_show_locale_idx" ON "_pages_v_blocks_logos_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_pages_v_blocks_logos_vis_rules_order_idx" ON "_pages_v_blocks_logos_vis_rules" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_logos_vis_rules_parent_id_idx" ON "_pages_v_blocks_logos_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_logos_vis_rules_locale_idx" ON "_pages_v_blocks_logos_vis_rules" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_testimonials_vis_rules_device_show_order_idx" ON "_pages_v_blocks_testimonials_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_pages_v_blocks_testimonials_vis_rules_device_show_parent_idx" ON "_pages_v_blocks_testimonials_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_vis_rules_device_show_locale_idx" ON "_pages_v_blocks_testimonials_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_pages_v_blocks_testimonials_vis_rules_order_idx" ON "_pages_v_blocks_testimonials_vis_rules" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_vis_rules_parent_id_idx" ON "_pages_v_blocks_testimonials_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_vis_rules_locale_idx" ON "_pages_v_blocks_testimonials_vis_rules" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_faq_vis_rules_device_show_order_idx" ON "_pages_v_blocks_faq_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_pages_v_blocks_faq_vis_rules_device_show_parent_idx" ON "_pages_v_blocks_faq_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_pages_v_blocks_faq_vis_rules_device_show_locale_idx" ON "_pages_v_blocks_faq_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_pages_v_blocks_faq_vis_rules_order_idx" ON "_pages_v_blocks_faq_vis_rules" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_vis_rules_parent_id_idx" ON "_pages_v_blocks_faq_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_vis_rules_locale_idx" ON "_pages_v_blocks_faq_vis_rules" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_cta_vis_rules_device_show_order_idx" ON "_pages_v_blocks_cta_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_pages_v_blocks_cta_vis_rules_device_show_parent_idx" ON "_pages_v_blocks_cta_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_pages_v_blocks_cta_vis_rules_device_show_locale_idx" ON "_pages_v_blocks_cta_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_pages_v_blocks_cta_vis_rules_order_idx" ON "_pages_v_blocks_cta_vis_rules" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_vis_rules_parent_id_idx" ON "_pages_v_blocks_cta_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_vis_rules_locale_idx" ON "_pages_v_blocks_cta_vis_rules" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "_pages_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_pages_v_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "_pages_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_pages_v_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "_pages_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_pages_v_blocks_dynamic_field_vis_rules_order_idx" ON "_pages_v_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dynamic_field_vis_rules_parent_id_idx" ON "_pages_v_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dynamic_field_vis_rules_locale_idx" ON "_pages_v_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "posts_blocks_hero_vis_rules_device_show_order_idx" ON "posts_blocks_hero_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "posts_blocks_hero_vis_rules_device_show_parent_idx" ON "posts_blocks_hero_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "posts_blocks_hero_vis_rules_device_show_locale_idx" ON "posts_blocks_hero_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "posts_blocks_hero_vis_rules_order_idx" ON "posts_blocks_hero_vis_rules" USING btree ("_order");
  CREATE INDEX "posts_blocks_hero_vis_rules_parent_id_idx" ON "posts_blocks_hero_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_hero_vis_rules_locale_idx" ON "posts_blocks_hero_vis_rules" USING btree ("_locale");
  CREATE INDEX "posts_blocks_rich_text_vis_rules_device_show_order_idx" ON "posts_blocks_rich_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "posts_blocks_rich_text_vis_rules_device_show_parent_idx" ON "posts_blocks_rich_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "posts_blocks_rich_text_vis_rules_device_show_locale_idx" ON "posts_blocks_rich_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "posts_blocks_rich_text_vis_rules_order_idx" ON "posts_blocks_rich_text_vis_rules" USING btree ("_order");
  CREATE INDEX "posts_blocks_rich_text_vis_rules_parent_id_idx" ON "posts_blocks_rich_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_rich_text_vis_rules_locale_idx" ON "posts_blocks_rich_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "posts_blocks_media_text_vis_rules_device_show_order_idx" ON "posts_blocks_media_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "posts_blocks_media_text_vis_rules_device_show_parent_idx" ON "posts_blocks_media_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "posts_blocks_media_text_vis_rules_device_show_locale_idx" ON "posts_blocks_media_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "posts_blocks_media_text_vis_rules_order_idx" ON "posts_blocks_media_text_vis_rules" USING btree ("_order");
  CREATE INDEX "posts_blocks_media_text_vis_rules_parent_id_idx" ON "posts_blocks_media_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_media_text_vis_rules_locale_idx" ON "posts_blocks_media_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "posts_blocks_cards_vis_rules_device_show_order_idx" ON "posts_blocks_cards_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "posts_blocks_cards_vis_rules_device_show_parent_idx" ON "posts_blocks_cards_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "posts_blocks_cards_vis_rules_device_show_locale_idx" ON "posts_blocks_cards_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "posts_blocks_cards_vis_rules_order_idx" ON "posts_blocks_cards_vis_rules" USING btree ("_order");
  CREATE INDEX "posts_blocks_cards_vis_rules_parent_id_idx" ON "posts_blocks_cards_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_cards_vis_rules_locale_idx" ON "posts_blocks_cards_vis_rules" USING btree ("_locale");
  CREATE INDEX "posts_blocks_listing_vis_rules_device_show_order_idx" ON "posts_blocks_listing_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "posts_blocks_listing_vis_rules_device_show_parent_idx" ON "posts_blocks_listing_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "posts_blocks_listing_vis_rules_device_show_locale_idx" ON "posts_blocks_listing_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "posts_blocks_listing_vis_rules_order_idx" ON "posts_blocks_listing_vis_rules" USING btree ("_order");
  CREATE INDEX "posts_blocks_listing_vis_rules_parent_id_idx" ON "posts_blocks_listing_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_listing_vis_rules_locale_idx" ON "posts_blocks_listing_vis_rules" USING btree ("_locale");
  CREATE INDEX "posts_blocks_columns_vis_rules_device_show_order_idx" ON "posts_blocks_columns_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "posts_blocks_columns_vis_rules_device_show_parent_idx" ON "posts_blocks_columns_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "posts_blocks_columns_vis_rules_device_show_locale_idx" ON "posts_blocks_columns_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "posts_blocks_columns_vis_rules_order_idx" ON "posts_blocks_columns_vis_rules" USING btree ("_order");
  CREATE INDEX "posts_blocks_columns_vis_rules_parent_id_idx" ON "posts_blocks_columns_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_columns_vis_rules_locale_idx" ON "posts_blocks_columns_vis_rules" USING btree ("_locale");
  CREATE INDEX "posts_blocks_tabs_vis_rules_device_show_order_idx" ON "posts_blocks_tabs_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "posts_blocks_tabs_vis_rules_device_show_parent_idx" ON "posts_blocks_tabs_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "posts_blocks_tabs_vis_rules_device_show_locale_idx" ON "posts_blocks_tabs_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "posts_blocks_tabs_vis_rules_order_idx" ON "posts_blocks_tabs_vis_rules" USING btree ("_order");
  CREATE INDEX "posts_blocks_tabs_vis_rules_parent_id_idx" ON "posts_blocks_tabs_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_tabs_vis_rules_locale_idx" ON "posts_blocks_tabs_vis_rules" USING btree ("_locale");
  CREATE INDEX "posts_blocks_stats_vis_rules_device_show_order_idx" ON "posts_blocks_stats_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "posts_blocks_stats_vis_rules_device_show_parent_idx" ON "posts_blocks_stats_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "posts_blocks_stats_vis_rules_device_show_locale_idx" ON "posts_blocks_stats_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "posts_blocks_stats_vis_rules_order_idx" ON "posts_blocks_stats_vis_rules" USING btree ("_order");
  CREATE INDEX "posts_blocks_stats_vis_rules_parent_id_idx" ON "posts_blocks_stats_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_stats_vis_rules_locale_idx" ON "posts_blocks_stats_vis_rules" USING btree ("_locale");
  CREATE INDEX "posts_blocks_logos_vis_rules_device_show_order_idx" ON "posts_blocks_logos_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "posts_blocks_logos_vis_rules_device_show_parent_idx" ON "posts_blocks_logos_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "posts_blocks_logos_vis_rules_device_show_locale_idx" ON "posts_blocks_logos_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "posts_blocks_logos_vis_rules_order_idx" ON "posts_blocks_logos_vis_rules" USING btree ("_order");
  CREATE INDEX "posts_blocks_logos_vis_rules_parent_id_idx" ON "posts_blocks_logos_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_logos_vis_rules_locale_idx" ON "posts_blocks_logos_vis_rules" USING btree ("_locale");
  CREATE INDEX "posts_blocks_testimonials_vis_rules_device_show_order_idx" ON "posts_blocks_testimonials_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "posts_blocks_testimonials_vis_rules_device_show_parent_idx" ON "posts_blocks_testimonials_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "posts_blocks_testimonials_vis_rules_device_show_locale_idx" ON "posts_blocks_testimonials_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "posts_blocks_testimonials_vis_rules_order_idx" ON "posts_blocks_testimonials_vis_rules" USING btree ("_order");
  CREATE INDEX "posts_blocks_testimonials_vis_rules_parent_id_idx" ON "posts_blocks_testimonials_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_testimonials_vis_rules_locale_idx" ON "posts_blocks_testimonials_vis_rules" USING btree ("_locale");
  CREATE INDEX "posts_blocks_faq_vis_rules_device_show_order_idx" ON "posts_blocks_faq_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "posts_blocks_faq_vis_rules_device_show_parent_idx" ON "posts_blocks_faq_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "posts_blocks_faq_vis_rules_device_show_locale_idx" ON "posts_blocks_faq_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "posts_blocks_faq_vis_rules_order_idx" ON "posts_blocks_faq_vis_rules" USING btree ("_order");
  CREATE INDEX "posts_blocks_faq_vis_rules_parent_id_idx" ON "posts_blocks_faq_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_faq_vis_rules_locale_idx" ON "posts_blocks_faq_vis_rules" USING btree ("_locale");
  CREATE INDEX "posts_blocks_cta_vis_rules_device_show_order_idx" ON "posts_blocks_cta_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "posts_blocks_cta_vis_rules_device_show_parent_idx" ON "posts_blocks_cta_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "posts_blocks_cta_vis_rules_device_show_locale_idx" ON "posts_blocks_cta_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "posts_blocks_cta_vis_rules_order_idx" ON "posts_blocks_cta_vis_rules" USING btree ("_order");
  CREATE INDEX "posts_blocks_cta_vis_rules_parent_id_idx" ON "posts_blocks_cta_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_cta_vis_rules_locale_idx" ON "posts_blocks_cta_vis_rules" USING btree ("_locale");
  CREATE INDEX "posts_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "posts_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "posts_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "posts_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "posts_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "posts_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "posts_blocks_dynamic_field_vis_rules_order_idx" ON "posts_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "posts_blocks_dynamic_field_vis_rules_parent_id_idx" ON "posts_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_dynamic_field_vis_rules_locale_idx" ON "posts_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_hero_vis_rules_device_show_order_idx" ON "_posts_v_blocks_hero_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_posts_v_blocks_hero_vis_rules_device_show_parent_idx" ON "_posts_v_blocks_hero_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_posts_v_blocks_hero_vis_rules_device_show_locale_idx" ON "_posts_v_blocks_hero_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_posts_v_blocks_hero_vis_rules_order_idx" ON "_posts_v_blocks_hero_vis_rules" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_hero_vis_rules_parent_id_idx" ON "_posts_v_blocks_hero_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_hero_vis_rules_locale_idx" ON "_posts_v_blocks_hero_vis_rules" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_rich_text_vis_rules_device_show_order_idx" ON "_posts_v_blocks_rich_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_posts_v_blocks_rich_text_vis_rules_device_show_parent_idx" ON "_posts_v_blocks_rich_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_posts_v_blocks_rich_text_vis_rules_device_show_locale_idx" ON "_posts_v_blocks_rich_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_posts_v_blocks_rich_text_vis_rules_order_idx" ON "_posts_v_blocks_rich_text_vis_rules" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_rich_text_vis_rules_parent_id_idx" ON "_posts_v_blocks_rich_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_rich_text_vis_rules_locale_idx" ON "_posts_v_blocks_rich_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_media_text_vis_rules_device_show_order_idx" ON "_posts_v_blocks_media_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_posts_v_blocks_media_text_vis_rules_device_show_parent_idx" ON "_posts_v_blocks_media_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_posts_v_blocks_media_text_vis_rules_device_show_locale_idx" ON "_posts_v_blocks_media_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_posts_v_blocks_media_text_vis_rules_order_idx" ON "_posts_v_blocks_media_text_vis_rules" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_media_text_vis_rules_parent_id_idx" ON "_posts_v_blocks_media_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_media_text_vis_rules_locale_idx" ON "_posts_v_blocks_media_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_cards_vis_rules_device_show_order_idx" ON "_posts_v_blocks_cards_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_posts_v_blocks_cards_vis_rules_device_show_parent_idx" ON "_posts_v_blocks_cards_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_posts_v_blocks_cards_vis_rules_device_show_locale_idx" ON "_posts_v_blocks_cards_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_posts_v_blocks_cards_vis_rules_order_idx" ON "_posts_v_blocks_cards_vis_rules" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_cards_vis_rules_parent_id_idx" ON "_posts_v_blocks_cards_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_cards_vis_rules_locale_idx" ON "_posts_v_blocks_cards_vis_rules" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_listing_vis_rules_device_show_order_idx" ON "_posts_v_blocks_listing_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_posts_v_blocks_listing_vis_rules_device_show_parent_idx" ON "_posts_v_blocks_listing_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_posts_v_blocks_listing_vis_rules_device_show_locale_idx" ON "_posts_v_blocks_listing_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_posts_v_blocks_listing_vis_rules_order_idx" ON "_posts_v_blocks_listing_vis_rules" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_listing_vis_rules_parent_id_idx" ON "_posts_v_blocks_listing_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_listing_vis_rules_locale_idx" ON "_posts_v_blocks_listing_vis_rules" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_columns_vis_rules_device_show_order_idx" ON "_posts_v_blocks_columns_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_posts_v_blocks_columns_vis_rules_device_show_parent_idx" ON "_posts_v_blocks_columns_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_posts_v_blocks_columns_vis_rules_device_show_locale_idx" ON "_posts_v_blocks_columns_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_posts_v_blocks_columns_vis_rules_order_idx" ON "_posts_v_blocks_columns_vis_rules" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_columns_vis_rules_parent_id_idx" ON "_posts_v_blocks_columns_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_columns_vis_rules_locale_idx" ON "_posts_v_blocks_columns_vis_rules" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_tabs_vis_rules_device_show_order_idx" ON "_posts_v_blocks_tabs_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_posts_v_blocks_tabs_vis_rules_device_show_parent_idx" ON "_posts_v_blocks_tabs_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_posts_v_blocks_tabs_vis_rules_device_show_locale_idx" ON "_posts_v_blocks_tabs_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_posts_v_blocks_tabs_vis_rules_order_idx" ON "_posts_v_blocks_tabs_vis_rules" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_tabs_vis_rules_parent_id_idx" ON "_posts_v_blocks_tabs_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_tabs_vis_rules_locale_idx" ON "_posts_v_blocks_tabs_vis_rules" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_stats_vis_rules_device_show_order_idx" ON "_posts_v_blocks_stats_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_posts_v_blocks_stats_vis_rules_device_show_parent_idx" ON "_posts_v_blocks_stats_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_posts_v_blocks_stats_vis_rules_device_show_locale_idx" ON "_posts_v_blocks_stats_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_posts_v_blocks_stats_vis_rules_order_idx" ON "_posts_v_blocks_stats_vis_rules" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_stats_vis_rules_parent_id_idx" ON "_posts_v_blocks_stats_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_stats_vis_rules_locale_idx" ON "_posts_v_blocks_stats_vis_rules" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_logos_vis_rules_device_show_order_idx" ON "_posts_v_blocks_logos_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_posts_v_blocks_logos_vis_rules_device_show_parent_idx" ON "_posts_v_blocks_logos_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_posts_v_blocks_logos_vis_rules_device_show_locale_idx" ON "_posts_v_blocks_logos_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_posts_v_blocks_logos_vis_rules_order_idx" ON "_posts_v_blocks_logos_vis_rules" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_logos_vis_rules_parent_id_idx" ON "_posts_v_blocks_logos_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_logos_vis_rules_locale_idx" ON "_posts_v_blocks_logos_vis_rules" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_testimonials_vis_rules_device_show_order_idx" ON "_posts_v_blocks_testimonials_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_posts_v_blocks_testimonials_vis_rules_device_show_parent_idx" ON "_posts_v_blocks_testimonials_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_posts_v_blocks_testimonials_vis_rules_device_show_locale_idx" ON "_posts_v_blocks_testimonials_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_posts_v_blocks_testimonials_vis_rules_order_idx" ON "_posts_v_blocks_testimonials_vis_rules" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_testimonials_vis_rules_parent_id_idx" ON "_posts_v_blocks_testimonials_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_testimonials_vis_rules_locale_idx" ON "_posts_v_blocks_testimonials_vis_rules" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_faq_vis_rules_device_show_order_idx" ON "_posts_v_blocks_faq_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_posts_v_blocks_faq_vis_rules_device_show_parent_idx" ON "_posts_v_blocks_faq_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_posts_v_blocks_faq_vis_rules_device_show_locale_idx" ON "_posts_v_blocks_faq_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_posts_v_blocks_faq_vis_rules_order_idx" ON "_posts_v_blocks_faq_vis_rules" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_faq_vis_rules_parent_id_idx" ON "_posts_v_blocks_faq_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_faq_vis_rules_locale_idx" ON "_posts_v_blocks_faq_vis_rules" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_cta_vis_rules_device_show_order_idx" ON "_posts_v_blocks_cta_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_posts_v_blocks_cta_vis_rules_device_show_parent_idx" ON "_posts_v_blocks_cta_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_posts_v_blocks_cta_vis_rules_device_show_locale_idx" ON "_posts_v_blocks_cta_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_posts_v_blocks_cta_vis_rules_order_idx" ON "_posts_v_blocks_cta_vis_rules" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_cta_vis_rules_parent_id_idx" ON "_posts_v_blocks_cta_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_cta_vis_rules_locale_idx" ON "_posts_v_blocks_cta_vis_rules" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "_posts_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_posts_v_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "_posts_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_posts_v_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "_posts_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_posts_v_blocks_dynamic_field_vis_rules_order_idx" ON "_posts_v_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_dynamic_field_vis_rules_parent_id_idx" ON "_posts_v_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_dynamic_field_vis_rules_locale_idx" ON "_posts_v_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "events_blocks_hero_vis_rules_device_show_order_idx" ON "events_blocks_hero_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "events_blocks_hero_vis_rules_device_show_parent_idx" ON "events_blocks_hero_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "events_blocks_hero_vis_rules_device_show_locale_idx" ON "events_blocks_hero_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "events_blocks_hero_vis_rules_order_idx" ON "events_blocks_hero_vis_rules" USING btree ("_order");
  CREATE INDEX "events_blocks_hero_vis_rules_parent_id_idx" ON "events_blocks_hero_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_hero_vis_rules_locale_idx" ON "events_blocks_hero_vis_rules" USING btree ("_locale");
  CREATE INDEX "events_blocks_rich_text_vis_rules_device_show_order_idx" ON "events_blocks_rich_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "events_blocks_rich_text_vis_rules_device_show_parent_idx" ON "events_blocks_rich_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "events_blocks_rich_text_vis_rules_device_show_locale_idx" ON "events_blocks_rich_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "events_blocks_rich_text_vis_rules_order_idx" ON "events_blocks_rich_text_vis_rules" USING btree ("_order");
  CREATE INDEX "events_blocks_rich_text_vis_rules_parent_id_idx" ON "events_blocks_rich_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_rich_text_vis_rules_locale_idx" ON "events_blocks_rich_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "events_blocks_media_text_vis_rules_device_show_order_idx" ON "events_blocks_media_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "events_blocks_media_text_vis_rules_device_show_parent_idx" ON "events_blocks_media_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "events_blocks_media_text_vis_rules_device_show_locale_idx" ON "events_blocks_media_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "events_blocks_media_text_vis_rules_order_idx" ON "events_blocks_media_text_vis_rules" USING btree ("_order");
  CREATE INDEX "events_blocks_media_text_vis_rules_parent_id_idx" ON "events_blocks_media_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_media_text_vis_rules_locale_idx" ON "events_blocks_media_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "events_blocks_cards_vis_rules_device_show_order_idx" ON "events_blocks_cards_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "events_blocks_cards_vis_rules_device_show_parent_idx" ON "events_blocks_cards_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "events_blocks_cards_vis_rules_device_show_locale_idx" ON "events_blocks_cards_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "events_blocks_cards_vis_rules_order_idx" ON "events_blocks_cards_vis_rules" USING btree ("_order");
  CREATE INDEX "events_blocks_cards_vis_rules_parent_id_idx" ON "events_blocks_cards_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_cards_vis_rules_locale_idx" ON "events_blocks_cards_vis_rules" USING btree ("_locale");
  CREATE INDEX "events_blocks_listing_vis_rules_device_show_order_idx" ON "events_blocks_listing_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "events_blocks_listing_vis_rules_device_show_parent_idx" ON "events_blocks_listing_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "events_blocks_listing_vis_rules_device_show_locale_idx" ON "events_blocks_listing_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "events_blocks_listing_vis_rules_order_idx" ON "events_blocks_listing_vis_rules" USING btree ("_order");
  CREATE INDEX "events_blocks_listing_vis_rules_parent_id_idx" ON "events_blocks_listing_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_listing_vis_rules_locale_idx" ON "events_blocks_listing_vis_rules" USING btree ("_locale");
  CREATE INDEX "events_blocks_columns_vis_rules_device_show_order_idx" ON "events_blocks_columns_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "events_blocks_columns_vis_rules_device_show_parent_idx" ON "events_blocks_columns_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "events_blocks_columns_vis_rules_device_show_locale_idx" ON "events_blocks_columns_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "events_blocks_columns_vis_rules_order_idx" ON "events_blocks_columns_vis_rules" USING btree ("_order");
  CREATE INDEX "events_blocks_columns_vis_rules_parent_id_idx" ON "events_blocks_columns_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_columns_vis_rules_locale_idx" ON "events_blocks_columns_vis_rules" USING btree ("_locale");
  CREATE INDEX "events_blocks_tabs_vis_rules_device_show_order_idx" ON "events_blocks_tabs_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "events_blocks_tabs_vis_rules_device_show_parent_idx" ON "events_blocks_tabs_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "events_blocks_tabs_vis_rules_device_show_locale_idx" ON "events_blocks_tabs_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "events_blocks_tabs_vis_rules_order_idx" ON "events_blocks_tabs_vis_rules" USING btree ("_order");
  CREATE INDEX "events_blocks_tabs_vis_rules_parent_id_idx" ON "events_blocks_tabs_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_tabs_vis_rules_locale_idx" ON "events_blocks_tabs_vis_rules" USING btree ("_locale");
  CREATE INDEX "events_blocks_stats_vis_rules_device_show_order_idx" ON "events_blocks_stats_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "events_blocks_stats_vis_rules_device_show_parent_idx" ON "events_blocks_stats_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "events_blocks_stats_vis_rules_device_show_locale_idx" ON "events_blocks_stats_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "events_blocks_stats_vis_rules_order_idx" ON "events_blocks_stats_vis_rules" USING btree ("_order");
  CREATE INDEX "events_blocks_stats_vis_rules_parent_id_idx" ON "events_blocks_stats_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_stats_vis_rules_locale_idx" ON "events_blocks_stats_vis_rules" USING btree ("_locale");
  CREATE INDEX "events_blocks_logos_vis_rules_device_show_order_idx" ON "events_blocks_logos_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "events_blocks_logos_vis_rules_device_show_parent_idx" ON "events_blocks_logos_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "events_blocks_logos_vis_rules_device_show_locale_idx" ON "events_blocks_logos_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "events_blocks_logos_vis_rules_order_idx" ON "events_blocks_logos_vis_rules" USING btree ("_order");
  CREATE INDEX "events_blocks_logos_vis_rules_parent_id_idx" ON "events_blocks_logos_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_logos_vis_rules_locale_idx" ON "events_blocks_logos_vis_rules" USING btree ("_locale");
  CREATE INDEX "events_blocks_testimonials_vis_rules_device_show_order_idx" ON "events_blocks_testimonials_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "events_blocks_testimonials_vis_rules_device_show_parent_idx" ON "events_blocks_testimonials_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "events_blocks_testimonials_vis_rules_device_show_locale_idx" ON "events_blocks_testimonials_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "events_blocks_testimonials_vis_rules_order_idx" ON "events_blocks_testimonials_vis_rules" USING btree ("_order");
  CREATE INDEX "events_blocks_testimonials_vis_rules_parent_id_idx" ON "events_blocks_testimonials_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_testimonials_vis_rules_locale_idx" ON "events_blocks_testimonials_vis_rules" USING btree ("_locale");
  CREATE INDEX "events_blocks_faq_vis_rules_device_show_order_idx" ON "events_blocks_faq_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "events_blocks_faq_vis_rules_device_show_parent_idx" ON "events_blocks_faq_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "events_blocks_faq_vis_rules_device_show_locale_idx" ON "events_blocks_faq_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "events_blocks_faq_vis_rules_order_idx" ON "events_blocks_faq_vis_rules" USING btree ("_order");
  CREATE INDEX "events_blocks_faq_vis_rules_parent_id_idx" ON "events_blocks_faq_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_faq_vis_rules_locale_idx" ON "events_blocks_faq_vis_rules" USING btree ("_locale");
  CREATE INDEX "events_blocks_cta_vis_rules_device_show_order_idx" ON "events_blocks_cta_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "events_blocks_cta_vis_rules_device_show_parent_idx" ON "events_blocks_cta_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "events_blocks_cta_vis_rules_device_show_locale_idx" ON "events_blocks_cta_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "events_blocks_cta_vis_rules_order_idx" ON "events_blocks_cta_vis_rules" USING btree ("_order");
  CREATE INDEX "events_blocks_cta_vis_rules_parent_id_idx" ON "events_blocks_cta_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_cta_vis_rules_locale_idx" ON "events_blocks_cta_vis_rules" USING btree ("_locale");
  CREATE INDEX "events_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "events_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "events_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "events_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "events_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "events_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "events_blocks_dynamic_field_vis_rules_order_idx" ON "events_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "events_blocks_dynamic_field_vis_rules_parent_id_idx" ON "events_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_dynamic_field_vis_rules_locale_idx" ON "events_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_hero_vis_rules_device_show_order_idx" ON "_events_v_blocks_hero_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_events_v_blocks_hero_vis_rules_device_show_parent_idx" ON "_events_v_blocks_hero_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_events_v_blocks_hero_vis_rules_device_show_locale_idx" ON "_events_v_blocks_hero_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_events_v_blocks_hero_vis_rules_order_idx" ON "_events_v_blocks_hero_vis_rules" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_hero_vis_rules_parent_id_idx" ON "_events_v_blocks_hero_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_hero_vis_rules_locale_idx" ON "_events_v_blocks_hero_vis_rules" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_rich_text_vis_rules_device_show_order_idx" ON "_events_v_blocks_rich_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_events_v_blocks_rich_text_vis_rules_device_show_parent_idx" ON "_events_v_blocks_rich_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_events_v_blocks_rich_text_vis_rules_device_show_locale_idx" ON "_events_v_blocks_rich_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_events_v_blocks_rich_text_vis_rules_order_idx" ON "_events_v_blocks_rich_text_vis_rules" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_rich_text_vis_rules_parent_id_idx" ON "_events_v_blocks_rich_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_rich_text_vis_rules_locale_idx" ON "_events_v_blocks_rich_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_media_text_vis_rules_device_show_order_idx" ON "_events_v_blocks_media_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_events_v_blocks_media_text_vis_rules_device_show_parent_idx" ON "_events_v_blocks_media_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_events_v_blocks_media_text_vis_rules_device_show_locale_idx" ON "_events_v_blocks_media_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_events_v_blocks_media_text_vis_rules_order_idx" ON "_events_v_blocks_media_text_vis_rules" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_media_text_vis_rules_parent_id_idx" ON "_events_v_blocks_media_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_media_text_vis_rules_locale_idx" ON "_events_v_blocks_media_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_cards_vis_rules_device_show_order_idx" ON "_events_v_blocks_cards_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_events_v_blocks_cards_vis_rules_device_show_parent_idx" ON "_events_v_blocks_cards_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_events_v_blocks_cards_vis_rules_device_show_locale_idx" ON "_events_v_blocks_cards_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_events_v_blocks_cards_vis_rules_order_idx" ON "_events_v_blocks_cards_vis_rules" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_cards_vis_rules_parent_id_idx" ON "_events_v_blocks_cards_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_cards_vis_rules_locale_idx" ON "_events_v_blocks_cards_vis_rules" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_listing_vis_rules_device_show_order_idx" ON "_events_v_blocks_listing_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_events_v_blocks_listing_vis_rules_device_show_parent_idx" ON "_events_v_blocks_listing_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_events_v_blocks_listing_vis_rules_device_show_locale_idx" ON "_events_v_blocks_listing_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_events_v_blocks_listing_vis_rules_order_idx" ON "_events_v_blocks_listing_vis_rules" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_listing_vis_rules_parent_id_idx" ON "_events_v_blocks_listing_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_listing_vis_rules_locale_idx" ON "_events_v_blocks_listing_vis_rules" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_columns_vis_rules_device_show_order_idx" ON "_events_v_blocks_columns_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_events_v_blocks_columns_vis_rules_device_show_parent_idx" ON "_events_v_blocks_columns_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_events_v_blocks_columns_vis_rules_device_show_locale_idx" ON "_events_v_blocks_columns_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_events_v_blocks_columns_vis_rules_order_idx" ON "_events_v_blocks_columns_vis_rules" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_columns_vis_rules_parent_id_idx" ON "_events_v_blocks_columns_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_columns_vis_rules_locale_idx" ON "_events_v_blocks_columns_vis_rules" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_tabs_vis_rules_device_show_order_idx" ON "_events_v_blocks_tabs_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_events_v_blocks_tabs_vis_rules_device_show_parent_idx" ON "_events_v_blocks_tabs_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_events_v_blocks_tabs_vis_rules_device_show_locale_idx" ON "_events_v_blocks_tabs_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_events_v_blocks_tabs_vis_rules_order_idx" ON "_events_v_blocks_tabs_vis_rules" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_tabs_vis_rules_parent_id_idx" ON "_events_v_blocks_tabs_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_tabs_vis_rules_locale_idx" ON "_events_v_blocks_tabs_vis_rules" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_stats_vis_rules_device_show_order_idx" ON "_events_v_blocks_stats_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_events_v_blocks_stats_vis_rules_device_show_parent_idx" ON "_events_v_blocks_stats_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_events_v_blocks_stats_vis_rules_device_show_locale_idx" ON "_events_v_blocks_stats_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_events_v_blocks_stats_vis_rules_order_idx" ON "_events_v_blocks_stats_vis_rules" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_stats_vis_rules_parent_id_idx" ON "_events_v_blocks_stats_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_stats_vis_rules_locale_idx" ON "_events_v_blocks_stats_vis_rules" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_logos_vis_rules_device_show_order_idx" ON "_events_v_blocks_logos_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_events_v_blocks_logos_vis_rules_device_show_parent_idx" ON "_events_v_blocks_logos_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_events_v_blocks_logos_vis_rules_device_show_locale_idx" ON "_events_v_blocks_logos_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_events_v_blocks_logos_vis_rules_order_idx" ON "_events_v_blocks_logos_vis_rules" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_logos_vis_rules_parent_id_idx" ON "_events_v_blocks_logos_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_logos_vis_rules_locale_idx" ON "_events_v_blocks_logos_vis_rules" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_testimonials_vis_rules_device_show_order_idx" ON "_events_v_blocks_testimonials_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_events_v_blocks_testimonials_vis_rules_device_show_parent_idx" ON "_events_v_blocks_testimonials_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_events_v_blocks_testimonials_vis_rules_device_show_locale_idx" ON "_events_v_blocks_testimonials_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_events_v_blocks_testimonials_vis_rules_order_idx" ON "_events_v_blocks_testimonials_vis_rules" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_testimonials_vis_rules_parent_id_idx" ON "_events_v_blocks_testimonials_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_testimonials_vis_rules_locale_idx" ON "_events_v_blocks_testimonials_vis_rules" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_faq_vis_rules_device_show_order_idx" ON "_events_v_blocks_faq_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_events_v_blocks_faq_vis_rules_device_show_parent_idx" ON "_events_v_blocks_faq_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_events_v_blocks_faq_vis_rules_device_show_locale_idx" ON "_events_v_blocks_faq_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_events_v_blocks_faq_vis_rules_order_idx" ON "_events_v_blocks_faq_vis_rules" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_faq_vis_rules_parent_id_idx" ON "_events_v_blocks_faq_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_faq_vis_rules_locale_idx" ON "_events_v_blocks_faq_vis_rules" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_cta_vis_rules_device_show_order_idx" ON "_events_v_blocks_cta_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_events_v_blocks_cta_vis_rules_device_show_parent_idx" ON "_events_v_blocks_cta_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_events_v_blocks_cta_vis_rules_device_show_locale_idx" ON "_events_v_blocks_cta_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_events_v_blocks_cta_vis_rules_order_idx" ON "_events_v_blocks_cta_vis_rules" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_cta_vis_rules_parent_id_idx" ON "_events_v_blocks_cta_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_cta_vis_rules_locale_idx" ON "_events_v_blocks_cta_vis_rules" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "_events_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_events_v_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "_events_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_events_v_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "_events_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_events_v_blocks_dynamic_field_vis_rules_order_idx" ON "_events_v_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_dynamic_field_vis_rules_parent_id_idx" ON "_events_v_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_dynamic_field_vis_rules_locale_idx" ON "_events_v_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "resources_blocks_hero_vis_rules_device_show_order_idx" ON "resources_blocks_hero_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "resources_blocks_hero_vis_rules_device_show_parent_idx" ON "resources_blocks_hero_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "resources_blocks_hero_vis_rules_device_show_locale_idx" ON "resources_blocks_hero_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "resources_blocks_hero_vis_rules_order_idx" ON "resources_blocks_hero_vis_rules" USING btree ("_order");
  CREATE INDEX "resources_blocks_hero_vis_rules_parent_id_idx" ON "resources_blocks_hero_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_hero_vis_rules_locale_idx" ON "resources_blocks_hero_vis_rules" USING btree ("_locale");
  CREATE INDEX "resources_blocks_rich_text_vis_rules_device_show_order_idx" ON "resources_blocks_rich_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "resources_blocks_rich_text_vis_rules_device_show_parent_idx" ON "resources_blocks_rich_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "resources_blocks_rich_text_vis_rules_device_show_locale_idx" ON "resources_blocks_rich_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "resources_blocks_rich_text_vis_rules_order_idx" ON "resources_blocks_rich_text_vis_rules" USING btree ("_order");
  CREATE INDEX "resources_blocks_rich_text_vis_rules_parent_id_idx" ON "resources_blocks_rich_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_rich_text_vis_rules_locale_idx" ON "resources_blocks_rich_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "resources_blocks_media_text_vis_rules_device_show_order_idx" ON "resources_blocks_media_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "resources_blocks_media_text_vis_rules_device_show_parent_idx" ON "resources_blocks_media_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "resources_blocks_media_text_vis_rules_device_show_locale_idx" ON "resources_blocks_media_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "resources_blocks_media_text_vis_rules_order_idx" ON "resources_blocks_media_text_vis_rules" USING btree ("_order");
  CREATE INDEX "resources_blocks_media_text_vis_rules_parent_id_idx" ON "resources_blocks_media_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_media_text_vis_rules_locale_idx" ON "resources_blocks_media_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "resources_blocks_cards_vis_rules_device_show_order_idx" ON "resources_blocks_cards_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "resources_blocks_cards_vis_rules_device_show_parent_idx" ON "resources_blocks_cards_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "resources_blocks_cards_vis_rules_device_show_locale_idx" ON "resources_blocks_cards_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "resources_blocks_cards_vis_rules_order_idx" ON "resources_blocks_cards_vis_rules" USING btree ("_order");
  CREATE INDEX "resources_blocks_cards_vis_rules_parent_id_idx" ON "resources_blocks_cards_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_cards_vis_rules_locale_idx" ON "resources_blocks_cards_vis_rules" USING btree ("_locale");
  CREATE INDEX "resources_blocks_listing_vis_rules_device_show_order_idx" ON "resources_blocks_listing_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "resources_blocks_listing_vis_rules_device_show_parent_idx" ON "resources_blocks_listing_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "resources_blocks_listing_vis_rules_device_show_locale_idx" ON "resources_blocks_listing_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "resources_blocks_listing_vis_rules_order_idx" ON "resources_blocks_listing_vis_rules" USING btree ("_order");
  CREATE INDEX "resources_blocks_listing_vis_rules_parent_id_idx" ON "resources_blocks_listing_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_listing_vis_rules_locale_idx" ON "resources_blocks_listing_vis_rules" USING btree ("_locale");
  CREATE INDEX "resources_blocks_columns_vis_rules_device_show_order_idx" ON "resources_blocks_columns_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "resources_blocks_columns_vis_rules_device_show_parent_idx" ON "resources_blocks_columns_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "resources_blocks_columns_vis_rules_device_show_locale_idx" ON "resources_blocks_columns_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "resources_blocks_columns_vis_rules_order_idx" ON "resources_blocks_columns_vis_rules" USING btree ("_order");
  CREATE INDEX "resources_blocks_columns_vis_rules_parent_id_idx" ON "resources_blocks_columns_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_columns_vis_rules_locale_idx" ON "resources_blocks_columns_vis_rules" USING btree ("_locale");
  CREATE INDEX "resources_blocks_tabs_vis_rules_device_show_order_idx" ON "resources_blocks_tabs_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "resources_blocks_tabs_vis_rules_device_show_parent_idx" ON "resources_blocks_tabs_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "resources_blocks_tabs_vis_rules_device_show_locale_idx" ON "resources_blocks_tabs_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "resources_blocks_tabs_vis_rules_order_idx" ON "resources_blocks_tabs_vis_rules" USING btree ("_order");
  CREATE INDEX "resources_blocks_tabs_vis_rules_parent_id_idx" ON "resources_blocks_tabs_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_tabs_vis_rules_locale_idx" ON "resources_blocks_tabs_vis_rules" USING btree ("_locale");
  CREATE INDEX "resources_blocks_stats_vis_rules_device_show_order_idx" ON "resources_blocks_stats_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "resources_blocks_stats_vis_rules_device_show_parent_idx" ON "resources_blocks_stats_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "resources_blocks_stats_vis_rules_device_show_locale_idx" ON "resources_blocks_stats_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "resources_blocks_stats_vis_rules_order_idx" ON "resources_blocks_stats_vis_rules" USING btree ("_order");
  CREATE INDEX "resources_blocks_stats_vis_rules_parent_id_idx" ON "resources_blocks_stats_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_stats_vis_rules_locale_idx" ON "resources_blocks_stats_vis_rules" USING btree ("_locale");
  CREATE INDEX "resources_blocks_logos_vis_rules_device_show_order_idx" ON "resources_blocks_logos_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "resources_blocks_logos_vis_rules_device_show_parent_idx" ON "resources_blocks_logos_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "resources_blocks_logos_vis_rules_device_show_locale_idx" ON "resources_blocks_logos_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "resources_blocks_logos_vis_rules_order_idx" ON "resources_blocks_logos_vis_rules" USING btree ("_order");
  CREATE INDEX "resources_blocks_logos_vis_rules_parent_id_idx" ON "resources_blocks_logos_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_logos_vis_rules_locale_idx" ON "resources_blocks_logos_vis_rules" USING btree ("_locale");
  CREATE INDEX "resources_blocks_testimonials_vis_rules_device_show_order_idx" ON "resources_blocks_testimonials_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "resources_blocks_testimonials_vis_rules_device_show_parent_idx" ON "resources_blocks_testimonials_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "resources_blocks_testimonials_vis_rules_device_show_locale_idx" ON "resources_blocks_testimonials_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "resources_blocks_testimonials_vis_rules_order_idx" ON "resources_blocks_testimonials_vis_rules" USING btree ("_order");
  CREATE INDEX "resources_blocks_testimonials_vis_rules_parent_id_idx" ON "resources_blocks_testimonials_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_testimonials_vis_rules_locale_idx" ON "resources_blocks_testimonials_vis_rules" USING btree ("_locale");
  CREATE INDEX "resources_blocks_faq_vis_rules_device_show_order_idx" ON "resources_blocks_faq_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "resources_blocks_faq_vis_rules_device_show_parent_idx" ON "resources_blocks_faq_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "resources_blocks_faq_vis_rules_device_show_locale_idx" ON "resources_blocks_faq_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "resources_blocks_faq_vis_rules_order_idx" ON "resources_blocks_faq_vis_rules" USING btree ("_order");
  CREATE INDEX "resources_blocks_faq_vis_rules_parent_id_idx" ON "resources_blocks_faq_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_faq_vis_rules_locale_idx" ON "resources_blocks_faq_vis_rules" USING btree ("_locale");
  CREATE INDEX "resources_blocks_cta_vis_rules_device_show_order_idx" ON "resources_blocks_cta_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "resources_blocks_cta_vis_rules_device_show_parent_idx" ON "resources_blocks_cta_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "resources_blocks_cta_vis_rules_device_show_locale_idx" ON "resources_blocks_cta_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "resources_blocks_cta_vis_rules_order_idx" ON "resources_blocks_cta_vis_rules" USING btree ("_order");
  CREATE INDEX "resources_blocks_cta_vis_rules_parent_id_idx" ON "resources_blocks_cta_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_cta_vis_rules_locale_idx" ON "resources_blocks_cta_vis_rules" USING btree ("_locale");
  CREATE INDEX "resources_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "resources_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "resources_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "resources_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "resources_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "resources_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "resources_blocks_dynamic_field_vis_rules_order_idx" ON "resources_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "resources_blocks_dynamic_field_vis_rules_parent_id_idx" ON "resources_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_dynamic_field_vis_rules_locale_idx" ON "resources_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_hero_vis_rules_device_show_order_idx" ON "_resources_v_blocks_hero_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_resources_v_blocks_hero_vis_rules_device_show_parent_idx" ON "_resources_v_blocks_hero_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_resources_v_blocks_hero_vis_rules_device_show_locale_idx" ON "_resources_v_blocks_hero_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_resources_v_blocks_hero_vis_rules_order_idx" ON "_resources_v_blocks_hero_vis_rules" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_hero_vis_rules_parent_id_idx" ON "_resources_v_blocks_hero_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_hero_vis_rules_locale_idx" ON "_resources_v_blocks_hero_vis_rules" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_rich_text_vis_rules_device_show_order_idx" ON "_resources_v_blocks_rich_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_resources_v_blocks_rich_text_vis_rules_device_show_parent_idx" ON "_resources_v_blocks_rich_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_resources_v_blocks_rich_text_vis_rules_device_show_locale_idx" ON "_resources_v_blocks_rich_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_resources_v_blocks_rich_text_vis_rules_order_idx" ON "_resources_v_blocks_rich_text_vis_rules" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_rich_text_vis_rules_parent_id_idx" ON "_resources_v_blocks_rich_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_rich_text_vis_rules_locale_idx" ON "_resources_v_blocks_rich_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_media_text_vis_rules_device_show_order_idx" ON "_resources_v_blocks_media_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_resources_v_blocks_media_text_vis_rules_device_show_parent_idx" ON "_resources_v_blocks_media_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_resources_v_blocks_media_text_vis_rules_device_show_locale_idx" ON "_resources_v_blocks_media_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_resources_v_blocks_media_text_vis_rules_order_idx" ON "_resources_v_blocks_media_text_vis_rules" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_media_text_vis_rules_parent_id_idx" ON "_resources_v_blocks_media_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_media_text_vis_rules_locale_idx" ON "_resources_v_blocks_media_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_cards_vis_rules_device_show_order_idx" ON "_resources_v_blocks_cards_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_resources_v_blocks_cards_vis_rules_device_show_parent_idx" ON "_resources_v_blocks_cards_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_resources_v_blocks_cards_vis_rules_device_show_locale_idx" ON "_resources_v_blocks_cards_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_resources_v_blocks_cards_vis_rules_order_idx" ON "_resources_v_blocks_cards_vis_rules" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_cards_vis_rules_parent_id_idx" ON "_resources_v_blocks_cards_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_cards_vis_rules_locale_idx" ON "_resources_v_blocks_cards_vis_rules" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_listing_vis_rules_device_show_order_idx" ON "_resources_v_blocks_listing_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_resources_v_blocks_listing_vis_rules_device_show_parent_idx" ON "_resources_v_blocks_listing_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_resources_v_blocks_listing_vis_rules_device_show_locale_idx" ON "_resources_v_blocks_listing_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_resources_v_blocks_listing_vis_rules_order_idx" ON "_resources_v_blocks_listing_vis_rules" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_listing_vis_rules_parent_id_idx" ON "_resources_v_blocks_listing_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_listing_vis_rules_locale_idx" ON "_resources_v_blocks_listing_vis_rules" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_columns_vis_rules_device_show_order_idx" ON "_resources_v_blocks_columns_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_resources_v_blocks_columns_vis_rules_device_show_parent_idx" ON "_resources_v_blocks_columns_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_resources_v_blocks_columns_vis_rules_device_show_locale_idx" ON "_resources_v_blocks_columns_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_resources_v_blocks_columns_vis_rules_order_idx" ON "_resources_v_blocks_columns_vis_rules" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_columns_vis_rules_parent_id_idx" ON "_resources_v_blocks_columns_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_columns_vis_rules_locale_idx" ON "_resources_v_blocks_columns_vis_rules" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_tabs_vis_rules_device_show_order_idx" ON "_resources_v_blocks_tabs_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_resources_v_blocks_tabs_vis_rules_device_show_parent_idx" ON "_resources_v_blocks_tabs_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_resources_v_blocks_tabs_vis_rules_device_show_locale_idx" ON "_resources_v_blocks_tabs_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_resources_v_blocks_tabs_vis_rules_order_idx" ON "_resources_v_blocks_tabs_vis_rules" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_tabs_vis_rules_parent_id_idx" ON "_resources_v_blocks_tabs_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_tabs_vis_rules_locale_idx" ON "_resources_v_blocks_tabs_vis_rules" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_stats_vis_rules_device_show_order_idx" ON "_resources_v_blocks_stats_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_resources_v_blocks_stats_vis_rules_device_show_parent_idx" ON "_resources_v_blocks_stats_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_resources_v_blocks_stats_vis_rules_device_show_locale_idx" ON "_resources_v_blocks_stats_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_resources_v_blocks_stats_vis_rules_order_idx" ON "_resources_v_blocks_stats_vis_rules" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_stats_vis_rules_parent_id_idx" ON "_resources_v_blocks_stats_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_stats_vis_rules_locale_idx" ON "_resources_v_blocks_stats_vis_rules" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_logos_vis_rules_device_show_order_idx" ON "_resources_v_blocks_logos_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_resources_v_blocks_logos_vis_rules_device_show_parent_idx" ON "_resources_v_blocks_logos_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_resources_v_blocks_logos_vis_rules_device_show_locale_idx" ON "_resources_v_blocks_logos_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_resources_v_blocks_logos_vis_rules_order_idx" ON "_resources_v_blocks_logos_vis_rules" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_logos_vis_rules_parent_id_idx" ON "_resources_v_blocks_logos_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_logos_vis_rules_locale_idx" ON "_resources_v_blocks_logos_vis_rules" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_testimonials_vis_rules_device_show_order_idx" ON "_resources_v_blocks_testimonials_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_resources_v_blocks_testimonials_vis_rules_device_show_parent_idx" ON "_resources_v_blocks_testimonials_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_resources_v_blocks_testimonials_vis_rules_device_show_locale_idx" ON "_resources_v_blocks_testimonials_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_resources_v_blocks_testimonials_vis_rules_order_idx" ON "_resources_v_blocks_testimonials_vis_rules" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_testimonials_vis_rules_parent_id_idx" ON "_resources_v_blocks_testimonials_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_testimonials_vis_rules_locale_idx" ON "_resources_v_blocks_testimonials_vis_rules" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_faq_vis_rules_device_show_order_idx" ON "_resources_v_blocks_faq_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_resources_v_blocks_faq_vis_rules_device_show_parent_idx" ON "_resources_v_blocks_faq_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_resources_v_blocks_faq_vis_rules_device_show_locale_idx" ON "_resources_v_blocks_faq_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_resources_v_blocks_faq_vis_rules_order_idx" ON "_resources_v_blocks_faq_vis_rules" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_faq_vis_rules_parent_id_idx" ON "_resources_v_blocks_faq_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_faq_vis_rules_locale_idx" ON "_resources_v_blocks_faq_vis_rules" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_cta_vis_rules_device_show_order_idx" ON "_resources_v_blocks_cta_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_resources_v_blocks_cta_vis_rules_device_show_parent_idx" ON "_resources_v_blocks_cta_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_resources_v_blocks_cta_vis_rules_device_show_locale_idx" ON "_resources_v_blocks_cta_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_resources_v_blocks_cta_vis_rules_order_idx" ON "_resources_v_blocks_cta_vis_rules" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_cta_vis_rules_parent_id_idx" ON "_resources_v_blocks_cta_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_cta_vis_rules_locale_idx" ON "_resources_v_blocks_cta_vis_rules" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "_resources_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_resources_v_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "_resources_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_resources_v_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "_resources_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_resources_v_blocks_dynamic_field_vis_rules_order_idx" ON "_resources_v_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_dynamic_field_vis_rules_parent_id_idx" ON "_resources_v_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_dynamic_field_vis_rules_locale_idx" ON "_resources_v_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_hero_vis_rules_device_show_order_idx" ON "glossary_blocks_hero_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "glossary_blocks_hero_vis_rules_device_show_parent_idx" ON "glossary_blocks_hero_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "glossary_blocks_hero_vis_rules_device_show_locale_idx" ON "glossary_blocks_hero_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "glossary_blocks_hero_vis_rules_order_idx" ON "glossary_blocks_hero_vis_rules" USING btree ("_order");
  CREATE INDEX "glossary_blocks_hero_vis_rules_parent_id_idx" ON "glossary_blocks_hero_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_hero_vis_rules_locale_idx" ON "glossary_blocks_hero_vis_rules" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_rich_text_vis_rules_device_show_order_idx" ON "glossary_blocks_rich_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "glossary_blocks_rich_text_vis_rules_device_show_parent_idx" ON "glossary_blocks_rich_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "glossary_blocks_rich_text_vis_rules_device_show_locale_idx" ON "glossary_blocks_rich_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "glossary_blocks_rich_text_vis_rules_order_idx" ON "glossary_blocks_rich_text_vis_rules" USING btree ("_order");
  CREATE INDEX "glossary_blocks_rich_text_vis_rules_parent_id_idx" ON "glossary_blocks_rich_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_rich_text_vis_rules_locale_idx" ON "glossary_blocks_rich_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_media_text_vis_rules_device_show_order_idx" ON "glossary_blocks_media_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "glossary_blocks_media_text_vis_rules_device_show_parent_idx" ON "glossary_blocks_media_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "glossary_blocks_media_text_vis_rules_device_show_locale_idx" ON "glossary_blocks_media_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "glossary_blocks_media_text_vis_rules_order_idx" ON "glossary_blocks_media_text_vis_rules" USING btree ("_order");
  CREATE INDEX "glossary_blocks_media_text_vis_rules_parent_id_idx" ON "glossary_blocks_media_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_media_text_vis_rules_locale_idx" ON "glossary_blocks_media_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_cards_vis_rules_device_show_order_idx" ON "glossary_blocks_cards_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "glossary_blocks_cards_vis_rules_device_show_parent_idx" ON "glossary_blocks_cards_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "glossary_blocks_cards_vis_rules_device_show_locale_idx" ON "glossary_blocks_cards_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "glossary_blocks_cards_vis_rules_order_idx" ON "glossary_blocks_cards_vis_rules" USING btree ("_order");
  CREATE INDEX "glossary_blocks_cards_vis_rules_parent_id_idx" ON "glossary_blocks_cards_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_cards_vis_rules_locale_idx" ON "glossary_blocks_cards_vis_rules" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_listing_vis_rules_device_show_order_idx" ON "glossary_blocks_listing_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "glossary_blocks_listing_vis_rules_device_show_parent_idx" ON "glossary_blocks_listing_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "glossary_blocks_listing_vis_rules_device_show_locale_idx" ON "glossary_blocks_listing_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "glossary_blocks_listing_vis_rules_order_idx" ON "glossary_blocks_listing_vis_rules" USING btree ("_order");
  CREATE INDEX "glossary_blocks_listing_vis_rules_parent_id_idx" ON "glossary_blocks_listing_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_listing_vis_rules_locale_idx" ON "glossary_blocks_listing_vis_rules" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_columns_vis_rules_device_show_order_idx" ON "glossary_blocks_columns_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "glossary_blocks_columns_vis_rules_device_show_parent_idx" ON "glossary_blocks_columns_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "glossary_blocks_columns_vis_rules_device_show_locale_idx" ON "glossary_blocks_columns_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "glossary_blocks_columns_vis_rules_order_idx" ON "glossary_blocks_columns_vis_rules" USING btree ("_order");
  CREATE INDEX "glossary_blocks_columns_vis_rules_parent_id_idx" ON "glossary_blocks_columns_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_columns_vis_rules_locale_idx" ON "glossary_blocks_columns_vis_rules" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_tabs_vis_rules_device_show_order_idx" ON "glossary_blocks_tabs_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "glossary_blocks_tabs_vis_rules_device_show_parent_idx" ON "glossary_blocks_tabs_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "glossary_blocks_tabs_vis_rules_device_show_locale_idx" ON "glossary_blocks_tabs_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "glossary_blocks_tabs_vis_rules_order_idx" ON "glossary_blocks_tabs_vis_rules" USING btree ("_order");
  CREATE INDEX "glossary_blocks_tabs_vis_rules_parent_id_idx" ON "glossary_blocks_tabs_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_tabs_vis_rules_locale_idx" ON "glossary_blocks_tabs_vis_rules" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_stats_vis_rules_device_show_order_idx" ON "glossary_blocks_stats_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "glossary_blocks_stats_vis_rules_device_show_parent_idx" ON "glossary_blocks_stats_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "glossary_blocks_stats_vis_rules_device_show_locale_idx" ON "glossary_blocks_stats_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "glossary_blocks_stats_vis_rules_order_idx" ON "glossary_blocks_stats_vis_rules" USING btree ("_order");
  CREATE INDEX "glossary_blocks_stats_vis_rules_parent_id_idx" ON "glossary_blocks_stats_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_stats_vis_rules_locale_idx" ON "glossary_blocks_stats_vis_rules" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_logos_vis_rules_device_show_order_idx" ON "glossary_blocks_logos_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "glossary_blocks_logos_vis_rules_device_show_parent_idx" ON "glossary_blocks_logos_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "glossary_blocks_logos_vis_rules_device_show_locale_idx" ON "glossary_blocks_logos_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "glossary_blocks_logos_vis_rules_order_idx" ON "glossary_blocks_logos_vis_rules" USING btree ("_order");
  CREATE INDEX "glossary_blocks_logos_vis_rules_parent_id_idx" ON "glossary_blocks_logos_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_logos_vis_rules_locale_idx" ON "glossary_blocks_logos_vis_rules" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_testimonials_vis_rules_device_show_order_idx" ON "glossary_blocks_testimonials_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "glossary_blocks_testimonials_vis_rules_device_show_parent_idx" ON "glossary_blocks_testimonials_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "glossary_blocks_testimonials_vis_rules_device_show_locale_idx" ON "glossary_blocks_testimonials_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "glossary_blocks_testimonials_vis_rules_order_idx" ON "glossary_blocks_testimonials_vis_rules" USING btree ("_order");
  CREATE INDEX "glossary_blocks_testimonials_vis_rules_parent_id_idx" ON "glossary_blocks_testimonials_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_testimonials_vis_rules_locale_idx" ON "glossary_blocks_testimonials_vis_rules" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_faq_vis_rules_device_show_order_idx" ON "glossary_blocks_faq_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "glossary_blocks_faq_vis_rules_device_show_parent_idx" ON "glossary_blocks_faq_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "glossary_blocks_faq_vis_rules_device_show_locale_idx" ON "glossary_blocks_faq_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "glossary_blocks_faq_vis_rules_order_idx" ON "glossary_blocks_faq_vis_rules" USING btree ("_order");
  CREATE INDEX "glossary_blocks_faq_vis_rules_parent_id_idx" ON "glossary_blocks_faq_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_faq_vis_rules_locale_idx" ON "glossary_blocks_faq_vis_rules" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_cta_vis_rules_device_show_order_idx" ON "glossary_blocks_cta_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "glossary_blocks_cta_vis_rules_device_show_parent_idx" ON "glossary_blocks_cta_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "glossary_blocks_cta_vis_rules_device_show_locale_idx" ON "glossary_blocks_cta_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "glossary_blocks_cta_vis_rules_order_idx" ON "glossary_blocks_cta_vis_rules" USING btree ("_order");
  CREATE INDEX "glossary_blocks_cta_vis_rules_parent_id_idx" ON "glossary_blocks_cta_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_cta_vis_rules_locale_idx" ON "glossary_blocks_cta_vis_rules" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "glossary_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "glossary_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "glossary_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "glossary_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "glossary_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "glossary_blocks_dynamic_field_vis_rules_order_idx" ON "glossary_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "glossary_blocks_dynamic_field_vis_rules_parent_id_idx" ON "glossary_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_dynamic_field_vis_rules_locale_idx" ON "glossary_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_hero_vis_rules_device_show_order_idx" ON "_glossary_v_blocks_hero_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_glossary_v_blocks_hero_vis_rules_device_show_parent_idx" ON "_glossary_v_blocks_hero_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_glossary_v_blocks_hero_vis_rules_device_show_locale_idx" ON "_glossary_v_blocks_hero_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_glossary_v_blocks_hero_vis_rules_order_idx" ON "_glossary_v_blocks_hero_vis_rules" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_hero_vis_rules_parent_id_idx" ON "_glossary_v_blocks_hero_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_hero_vis_rules_locale_idx" ON "_glossary_v_blocks_hero_vis_rules" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_rich_text_vis_rules_device_show_order_idx" ON "_glossary_v_blocks_rich_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_glossary_v_blocks_rich_text_vis_rules_device_show_parent_idx" ON "_glossary_v_blocks_rich_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_glossary_v_blocks_rich_text_vis_rules_device_show_locale_idx" ON "_glossary_v_blocks_rich_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_glossary_v_blocks_rich_text_vis_rules_order_idx" ON "_glossary_v_blocks_rich_text_vis_rules" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_rich_text_vis_rules_parent_id_idx" ON "_glossary_v_blocks_rich_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_rich_text_vis_rules_locale_idx" ON "_glossary_v_blocks_rich_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_media_text_vis_rules_device_show_order_idx" ON "_glossary_v_blocks_media_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_glossary_v_blocks_media_text_vis_rules_device_show_parent_idx" ON "_glossary_v_blocks_media_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_glossary_v_blocks_media_text_vis_rules_device_show_locale_idx" ON "_glossary_v_blocks_media_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_glossary_v_blocks_media_text_vis_rules_order_idx" ON "_glossary_v_blocks_media_text_vis_rules" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_media_text_vis_rules_parent_id_idx" ON "_glossary_v_blocks_media_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_media_text_vis_rules_locale_idx" ON "_glossary_v_blocks_media_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_cards_vis_rules_device_show_order_idx" ON "_glossary_v_blocks_cards_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_glossary_v_blocks_cards_vis_rules_device_show_parent_idx" ON "_glossary_v_blocks_cards_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_glossary_v_blocks_cards_vis_rules_device_show_locale_idx" ON "_glossary_v_blocks_cards_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_glossary_v_blocks_cards_vis_rules_order_idx" ON "_glossary_v_blocks_cards_vis_rules" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_cards_vis_rules_parent_id_idx" ON "_glossary_v_blocks_cards_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_cards_vis_rules_locale_idx" ON "_glossary_v_blocks_cards_vis_rules" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_listing_vis_rules_device_show_order_idx" ON "_glossary_v_blocks_listing_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_glossary_v_blocks_listing_vis_rules_device_show_parent_idx" ON "_glossary_v_blocks_listing_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_glossary_v_blocks_listing_vis_rules_device_show_locale_idx" ON "_glossary_v_blocks_listing_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_glossary_v_blocks_listing_vis_rules_order_idx" ON "_glossary_v_blocks_listing_vis_rules" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_listing_vis_rules_parent_id_idx" ON "_glossary_v_blocks_listing_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_listing_vis_rules_locale_idx" ON "_glossary_v_blocks_listing_vis_rules" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_columns_vis_rules_device_show_order_idx" ON "_glossary_v_blocks_columns_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_glossary_v_blocks_columns_vis_rules_device_show_parent_idx" ON "_glossary_v_blocks_columns_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_glossary_v_blocks_columns_vis_rules_device_show_locale_idx" ON "_glossary_v_blocks_columns_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_glossary_v_blocks_columns_vis_rules_order_idx" ON "_glossary_v_blocks_columns_vis_rules" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_columns_vis_rules_parent_id_idx" ON "_glossary_v_blocks_columns_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_columns_vis_rules_locale_idx" ON "_glossary_v_blocks_columns_vis_rules" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_tabs_vis_rules_device_show_order_idx" ON "_glossary_v_blocks_tabs_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_glossary_v_blocks_tabs_vis_rules_device_show_parent_idx" ON "_glossary_v_blocks_tabs_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_glossary_v_blocks_tabs_vis_rules_device_show_locale_idx" ON "_glossary_v_blocks_tabs_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_glossary_v_blocks_tabs_vis_rules_order_idx" ON "_glossary_v_blocks_tabs_vis_rules" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_tabs_vis_rules_parent_id_idx" ON "_glossary_v_blocks_tabs_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_tabs_vis_rules_locale_idx" ON "_glossary_v_blocks_tabs_vis_rules" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_stats_vis_rules_device_show_order_idx" ON "_glossary_v_blocks_stats_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_glossary_v_blocks_stats_vis_rules_device_show_parent_idx" ON "_glossary_v_blocks_stats_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_glossary_v_blocks_stats_vis_rules_device_show_locale_idx" ON "_glossary_v_blocks_stats_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_glossary_v_blocks_stats_vis_rules_order_idx" ON "_glossary_v_blocks_stats_vis_rules" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_stats_vis_rules_parent_id_idx" ON "_glossary_v_blocks_stats_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_stats_vis_rules_locale_idx" ON "_glossary_v_blocks_stats_vis_rules" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_logos_vis_rules_device_show_order_idx" ON "_glossary_v_blocks_logos_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_glossary_v_blocks_logos_vis_rules_device_show_parent_idx" ON "_glossary_v_blocks_logos_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_glossary_v_blocks_logos_vis_rules_device_show_locale_idx" ON "_glossary_v_blocks_logos_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_glossary_v_blocks_logos_vis_rules_order_idx" ON "_glossary_v_blocks_logos_vis_rules" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_logos_vis_rules_parent_id_idx" ON "_glossary_v_blocks_logos_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_logos_vis_rules_locale_idx" ON "_glossary_v_blocks_logos_vis_rules" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_testimonials_vis_rules_device_show_order_idx" ON "_glossary_v_blocks_testimonials_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_glossary_v_blocks_testimonials_vis_rules_device_show_parent_idx" ON "_glossary_v_blocks_testimonials_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_glossary_v_blocks_testimonials_vis_rules_device_show_locale_idx" ON "_glossary_v_blocks_testimonials_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_glossary_v_blocks_testimonials_vis_rules_order_idx" ON "_glossary_v_blocks_testimonials_vis_rules" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_testimonials_vis_rules_parent_id_idx" ON "_glossary_v_blocks_testimonials_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_testimonials_vis_rules_locale_idx" ON "_glossary_v_blocks_testimonials_vis_rules" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_faq_vis_rules_device_show_order_idx" ON "_glossary_v_blocks_faq_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_glossary_v_blocks_faq_vis_rules_device_show_parent_idx" ON "_glossary_v_blocks_faq_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_glossary_v_blocks_faq_vis_rules_device_show_locale_idx" ON "_glossary_v_blocks_faq_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_glossary_v_blocks_faq_vis_rules_order_idx" ON "_glossary_v_blocks_faq_vis_rules" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_faq_vis_rules_parent_id_idx" ON "_glossary_v_blocks_faq_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_faq_vis_rules_locale_idx" ON "_glossary_v_blocks_faq_vis_rules" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_cta_vis_rules_device_show_order_idx" ON "_glossary_v_blocks_cta_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_glossary_v_blocks_cta_vis_rules_device_show_parent_idx" ON "_glossary_v_blocks_cta_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_glossary_v_blocks_cta_vis_rules_device_show_locale_idx" ON "_glossary_v_blocks_cta_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_glossary_v_blocks_cta_vis_rules_order_idx" ON "_glossary_v_blocks_cta_vis_rules" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_cta_vis_rules_parent_id_idx" ON "_glossary_v_blocks_cta_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_cta_vis_rules_locale_idx" ON "_glossary_v_blocks_cta_vis_rules" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "_glossary_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "_glossary_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "_glossary_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_vis_rules_order_idx" ON "_glossary_v_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_vis_rules_parent_id_idx" ON "_glossary_v_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_vis_rules_locale_idx" ON "_glossary_v_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "people_blocks_hero_vis_rules_device_show_order_idx" ON "people_blocks_hero_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "people_blocks_hero_vis_rules_device_show_parent_idx" ON "people_blocks_hero_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "people_blocks_hero_vis_rules_device_show_locale_idx" ON "people_blocks_hero_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "people_blocks_hero_vis_rules_order_idx" ON "people_blocks_hero_vis_rules" USING btree ("_order");
  CREATE INDEX "people_blocks_hero_vis_rules_parent_id_idx" ON "people_blocks_hero_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_hero_vis_rules_locale_idx" ON "people_blocks_hero_vis_rules" USING btree ("_locale");
  CREATE INDEX "people_blocks_rich_text_vis_rules_device_show_order_idx" ON "people_blocks_rich_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "people_blocks_rich_text_vis_rules_device_show_parent_idx" ON "people_blocks_rich_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "people_blocks_rich_text_vis_rules_device_show_locale_idx" ON "people_blocks_rich_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "people_blocks_rich_text_vis_rules_order_idx" ON "people_blocks_rich_text_vis_rules" USING btree ("_order");
  CREATE INDEX "people_blocks_rich_text_vis_rules_parent_id_idx" ON "people_blocks_rich_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_rich_text_vis_rules_locale_idx" ON "people_blocks_rich_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "people_blocks_media_text_vis_rules_device_show_order_idx" ON "people_blocks_media_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "people_blocks_media_text_vis_rules_device_show_parent_idx" ON "people_blocks_media_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "people_blocks_media_text_vis_rules_device_show_locale_idx" ON "people_blocks_media_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "people_blocks_media_text_vis_rules_order_idx" ON "people_blocks_media_text_vis_rules" USING btree ("_order");
  CREATE INDEX "people_blocks_media_text_vis_rules_parent_id_idx" ON "people_blocks_media_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_media_text_vis_rules_locale_idx" ON "people_blocks_media_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "people_blocks_cards_vis_rules_device_show_order_idx" ON "people_blocks_cards_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "people_blocks_cards_vis_rules_device_show_parent_idx" ON "people_blocks_cards_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "people_blocks_cards_vis_rules_device_show_locale_idx" ON "people_blocks_cards_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "people_blocks_cards_vis_rules_order_idx" ON "people_blocks_cards_vis_rules" USING btree ("_order");
  CREATE INDEX "people_blocks_cards_vis_rules_parent_id_idx" ON "people_blocks_cards_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_cards_vis_rules_locale_idx" ON "people_blocks_cards_vis_rules" USING btree ("_locale");
  CREATE INDEX "people_blocks_listing_vis_rules_device_show_order_idx" ON "people_blocks_listing_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "people_blocks_listing_vis_rules_device_show_parent_idx" ON "people_blocks_listing_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "people_blocks_listing_vis_rules_device_show_locale_idx" ON "people_blocks_listing_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "people_blocks_listing_vis_rules_order_idx" ON "people_blocks_listing_vis_rules" USING btree ("_order");
  CREATE INDEX "people_blocks_listing_vis_rules_parent_id_idx" ON "people_blocks_listing_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_listing_vis_rules_locale_idx" ON "people_blocks_listing_vis_rules" USING btree ("_locale");
  CREATE INDEX "people_blocks_columns_vis_rules_device_show_order_idx" ON "people_blocks_columns_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "people_blocks_columns_vis_rules_device_show_parent_idx" ON "people_blocks_columns_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "people_blocks_columns_vis_rules_device_show_locale_idx" ON "people_blocks_columns_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "people_blocks_columns_vis_rules_order_idx" ON "people_blocks_columns_vis_rules" USING btree ("_order");
  CREATE INDEX "people_blocks_columns_vis_rules_parent_id_idx" ON "people_blocks_columns_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_columns_vis_rules_locale_idx" ON "people_blocks_columns_vis_rules" USING btree ("_locale");
  CREATE INDEX "people_blocks_tabs_vis_rules_device_show_order_idx" ON "people_blocks_tabs_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "people_blocks_tabs_vis_rules_device_show_parent_idx" ON "people_blocks_tabs_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "people_blocks_tabs_vis_rules_device_show_locale_idx" ON "people_blocks_tabs_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "people_blocks_tabs_vis_rules_order_idx" ON "people_blocks_tabs_vis_rules" USING btree ("_order");
  CREATE INDEX "people_blocks_tabs_vis_rules_parent_id_idx" ON "people_blocks_tabs_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_tabs_vis_rules_locale_idx" ON "people_blocks_tabs_vis_rules" USING btree ("_locale");
  CREATE INDEX "people_blocks_stats_vis_rules_device_show_order_idx" ON "people_blocks_stats_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "people_blocks_stats_vis_rules_device_show_parent_idx" ON "people_blocks_stats_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "people_blocks_stats_vis_rules_device_show_locale_idx" ON "people_blocks_stats_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "people_blocks_stats_vis_rules_order_idx" ON "people_blocks_stats_vis_rules" USING btree ("_order");
  CREATE INDEX "people_blocks_stats_vis_rules_parent_id_idx" ON "people_blocks_stats_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_stats_vis_rules_locale_idx" ON "people_blocks_stats_vis_rules" USING btree ("_locale");
  CREATE INDEX "people_blocks_logos_vis_rules_device_show_order_idx" ON "people_blocks_logos_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "people_blocks_logos_vis_rules_device_show_parent_idx" ON "people_blocks_logos_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "people_blocks_logos_vis_rules_device_show_locale_idx" ON "people_blocks_logos_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "people_blocks_logos_vis_rules_order_idx" ON "people_blocks_logos_vis_rules" USING btree ("_order");
  CREATE INDEX "people_blocks_logos_vis_rules_parent_id_idx" ON "people_blocks_logos_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_logos_vis_rules_locale_idx" ON "people_blocks_logos_vis_rules" USING btree ("_locale");
  CREATE INDEX "people_blocks_testimonials_vis_rules_device_show_order_idx" ON "people_blocks_testimonials_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "people_blocks_testimonials_vis_rules_device_show_parent_idx" ON "people_blocks_testimonials_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "people_blocks_testimonials_vis_rules_device_show_locale_idx" ON "people_blocks_testimonials_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "people_blocks_testimonials_vis_rules_order_idx" ON "people_blocks_testimonials_vis_rules" USING btree ("_order");
  CREATE INDEX "people_blocks_testimonials_vis_rules_parent_id_idx" ON "people_blocks_testimonials_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_testimonials_vis_rules_locale_idx" ON "people_blocks_testimonials_vis_rules" USING btree ("_locale");
  CREATE INDEX "people_blocks_faq_vis_rules_device_show_order_idx" ON "people_blocks_faq_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "people_blocks_faq_vis_rules_device_show_parent_idx" ON "people_blocks_faq_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "people_blocks_faq_vis_rules_device_show_locale_idx" ON "people_blocks_faq_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "people_blocks_faq_vis_rules_order_idx" ON "people_blocks_faq_vis_rules" USING btree ("_order");
  CREATE INDEX "people_blocks_faq_vis_rules_parent_id_idx" ON "people_blocks_faq_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_faq_vis_rules_locale_idx" ON "people_blocks_faq_vis_rules" USING btree ("_locale");
  CREATE INDEX "people_blocks_cta_vis_rules_device_show_order_idx" ON "people_blocks_cta_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "people_blocks_cta_vis_rules_device_show_parent_idx" ON "people_blocks_cta_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "people_blocks_cta_vis_rules_device_show_locale_idx" ON "people_blocks_cta_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "people_blocks_cta_vis_rules_order_idx" ON "people_blocks_cta_vis_rules" USING btree ("_order");
  CREATE INDEX "people_blocks_cta_vis_rules_parent_id_idx" ON "people_blocks_cta_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_cta_vis_rules_locale_idx" ON "people_blocks_cta_vis_rules" USING btree ("_locale");
  CREATE INDEX "people_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "people_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "people_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "people_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "people_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "people_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "people_blocks_dynamic_field_vis_rules_order_idx" ON "people_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "people_blocks_dynamic_field_vis_rules_parent_id_idx" ON "people_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_dynamic_field_vis_rules_locale_idx" ON "people_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_hero_vis_rules_device_show_order_idx" ON "_people_v_blocks_hero_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_people_v_blocks_hero_vis_rules_device_show_parent_idx" ON "_people_v_blocks_hero_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_people_v_blocks_hero_vis_rules_device_show_locale_idx" ON "_people_v_blocks_hero_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_people_v_blocks_hero_vis_rules_order_idx" ON "_people_v_blocks_hero_vis_rules" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_hero_vis_rules_parent_id_idx" ON "_people_v_blocks_hero_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_hero_vis_rules_locale_idx" ON "_people_v_blocks_hero_vis_rules" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_rich_text_vis_rules_device_show_order_idx" ON "_people_v_blocks_rich_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_people_v_blocks_rich_text_vis_rules_device_show_parent_idx" ON "_people_v_blocks_rich_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_people_v_blocks_rich_text_vis_rules_device_show_locale_idx" ON "_people_v_blocks_rich_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_people_v_blocks_rich_text_vis_rules_order_idx" ON "_people_v_blocks_rich_text_vis_rules" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_rich_text_vis_rules_parent_id_idx" ON "_people_v_blocks_rich_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_rich_text_vis_rules_locale_idx" ON "_people_v_blocks_rich_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_media_text_vis_rules_device_show_order_idx" ON "_people_v_blocks_media_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_people_v_blocks_media_text_vis_rules_device_show_parent_idx" ON "_people_v_blocks_media_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_people_v_blocks_media_text_vis_rules_device_show_locale_idx" ON "_people_v_blocks_media_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_people_v_blocks_media_text_vis_rules_order_idx" ON "_people_v_blocks_media_text_vis_rules" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_media_text_vis_rules_parent_id_idx" ON "_people_v_blocks_media_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_media_text_vis_rules_locale_idx" ON "_people_v_blocks_media_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_cards_vis_rules_device_show_order_idx" ON "_people_v_blocks_cards_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_people_v_blocks_cards_vis_rules_device_show_parent_idx" ON "_people_v_blocks_cards_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_people_v_blocks_cards_vis_rules_device_show_locale_idx" ON "_people_v_blocks_cards_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_people_v_blocks_cards_vis_rules_order_idx" ON "_people_v_blocks_cards_vis_rules" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_cards_vis_rules_parent_id_idx" ON "_people_v_blocks_cards_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_cards_vis_rules_locale_idx" ON "_people_v_blocks_cards_vis_rules" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_listing_vis_rules_device_show_order_idx" ON "_people_v_blocks_listing_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_people_v_blocks_listing_vis_rules_device_show_parent_idx" ON "_people_v_blocks_listing_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_people_v_blocks_listing_vis_rules_device_show_locale_idx" ON "_people_v_blocks_listing_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_people_v_blocks_listing_vis_rules_order_idx" ON "_people_v_blocks_listing_vis_rules" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_listing_vis_rules_parent_id_idx" ON "_people_v_blocks_listing_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_listing_vis_rules_locale_idx" ON "_people_v_blocks_listing_vis_rules" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_columns_vis_rules_device_show_order_idx" ON "_people_v_blocks_columns_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_people_v_blocks_columns_vis_rules_device_show_parent_idx" ON "_people_v_blocks_columns_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_people_v_blocks_columns_vis_rules_device_show_locale_idx" ON "_people_v_blocks_columns_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_people_v_blocks_columns_vis_rules_order_idx" ON "_people_v_blocks_columns_vis_rules" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_columns_vis_rules_parent_id_idx" ON "_people_v_blocks_columns_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_columns_vis_rules_locale_idx" ON "_people_v_blocks_columns_vis_rules" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_tabs_vis_rules_device_show_order_idx" ON "_people_v_blocks_tabs_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_people_v_blocks_tabs_vis_rules_device_show_parent_idx" ON "_people_v_blocks_tabs_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_people_v_blocks_tabs_vis_rules_device_show_locale_idx" ON "_people_v_blocks_tabs_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_people_v_blocks_tabs_vis_rules_order_idx" ON "_people_v_blocks_tabs_vis_rules" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_tabs_vis_rules_parent_id_idx" ON "_people_v_blocks_tabs_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_tabs_vis_rules_locale_idx" ON "_people_v_blocks_tabs_vis_rules" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_stats_vis_rules_device_show_order_idx" ON "_people_v_blocks_stats_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_people_v_blocks_stats_vis_rules_device_show_parent_idx" ON "_people_v_blocks_stats_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_people_v_blocks_stats_vis_rules_device_show_locale_idx" ON "_people_v_blocks_stats_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_people_v_blocks_stats_vis_rules_order_idx" ON "_people_v_blocks_stats_vis_rules" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_stats_vis_rules_parent_id_idx" ON "_people_v_blocks_stats_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_stats_vis_rules_locale_idx" ON "_people_v_blocks_stats_vis_rules" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_logos_vis_rules_device_show_order_idx" ON "_people_v_blocks_logos_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_people_v_blocks_logos_vis_rules_device_show_parent_idx" ON "_people_v_blocks_logos_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_people_v_blocks_logos_vis_rules_device_show_locale_idx" ON "_people_v_blocks_logos_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_people_v_blocks_logos_vis_rules_order_idx" ON "_people_v_blocks_logos_vis_rules" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_logos_vis_rules_parent_id_idx" ON "_people_v_blocks_logos_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_logos_vis_rules_locale_idx" ON "_people_v_blocks_logos_vis_rules" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_testimonials_vis_rules_device_show_order_idx" ON "_people_v_blocks_testimonials_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_people_v_blocks_testimonials_vis_rules_device_show_parent_idx" ON "_people_v_blocks_testimonials_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_people_v_blocks_testimonials_vis_rules_device_show_locale_idx" ON "_people_v_blocks_testimonials_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_people_v_blocks_testimonials_vis_rules_order_idx" ON "_people_v_blocks_testimonials_vis_rules" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_testimonials_vis_rules_parent_id_idx" ON "_people_v_blocks_testimonials_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_testimonials_vis_rules_locale_idx" ON "_people_v_blocks_testimonials_vis_rules" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_faq_vis_rules_device_show_order_idx" ON "_people_v_blocks_faq_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_people_v_blocks_faq_vis_rules_device_show_parent_idx" ON "_people_v_blocks_faq_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_people_v_blocks_faq_vis_rules_device_show_locale_idx" ON "_people_v_blocks_faq_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_people_v_blocks_faq_vis_rules_order_idx" ON "_people_v_blocks_faq_vis_rules" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_faq_vis_rules_parent_id_idx" ON "_people_v_blocks_faq_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_faq_vis_rules_locale_idx" ON "_people_v_blocks_faq_vis_rules" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_cta_vis_rules_device_show_order_idx" ON "_people_v_blocks_cta_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_people_v_blocks_cta_vis_rules_device_show_parent_idx" ON "_people_v_blocks_cta_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_people_v_blocks_cta_vis_rules_device_show_locale_idx" ON "_people_v_blocks_cta_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_people_v_blocks_cta_vis_rules_order_idx" ON "_people_v_blocks_cta_vis_rules" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_cta_vis_rules_parent_id_idx" ON "_people_v_blocks_cta_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_cta_vis_rules_locale_idx" ON "_people_v_blocks_cta_vis_rules" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "_people_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_people_v_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "_people_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_people_v_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "_people_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_people_v_blocks_dynamic_field_vis_rules_order_idx" ON "_people_v_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_dynamic_field_vis_rules_parent_id_idx" ON "_people_v_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_dynamic_field_vis_rules_locale_idx" ON "_people_v_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_hero_vis_rules_device_show_order_idx" ON "reusable_blocks_hero_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "reusable_blocks_hero_vis_rules_device_show_parent_idx" ON "reusable_blocks_hero_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "reusable_blocks_hero_vis_rules_device_show_locale_idx" ON "reusable_blocks_hero_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "reusable_blocks_hero_vis_rules_order_idx" ON "reusable_blocks_hero_vis_rules" USING btree ("_order");
  CREATE INDEX "reusable_blocks_hero_vis_rules_parent_id_idx" ON "reusable_blocks_hero_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_hero_vis_rules_locale_idx" ON "reusable_blocks_hero_vis_rules" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_rich_text_vis_rules_device_show_order_idx" ON "reusable_blocks_rich_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "reusable_blocks_rich_text_vis_rules_device_show_parent_idx" ON "reusable_blocks_rich_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "reusable_blocks_rich_text_vis_rules_device_show_locale_idx" ON "reusable_blocks_rich_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "reusable_blocks_rich_text_vis_rules_order_idx" ON "reusable_blocks_rich_text_vis_rules" USING btree ("_order");
  CREATE INDEX "reusable_blocks_rich_text_vis_rules_parent_id_idx" ON "reusable_blocks_rich_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_rich_text_vis_rules_locale_idx" ON "reusable_blocks_rich_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_media_text_vis_rules_device_show_order_idx" ON "reusable_blocks_media_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "reusable_blocks_media_text_vis_rules_device_show_parent_idx" ON "reusable_blocks_media_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "reusable_blocks_media_text_vis_rules_device_show_locale_idx" ON "reusable_blocks_media_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "reusable_blocks_media_text_vis_rules_order_idx" ON "reusable_blocks_media_text_vis_rules" USING btree ("_order");
  CREATE INDEX "reusable_blocks_media_text_vis_rules_parent_id_idx" ON "reusable_blocks_media_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_media_text_vis_rules_locale_idx" ON "reusable_blocks_media_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_cards_vis_rules_device_show_order_idx" ON "reusable_blocks_cards_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "reusable_blocks_cards_vis_rules_device_show_parent_idx" ON "reusable_blocks_cards_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "reusable_blocks_cards_vis_rules_device_show_locale_idx" ON "reusable_blocks_cards_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "reusable_blocks_cards_vis_rules_order_idx" ON "reusable_blocks_cards_vis_rules" USING btree ("_order");
  CREATE INDEX "reusable_blocks_cards_vis_rules_parent_id_idx" ON "reusable_blocks_cards_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_cards_vis_rules_locale_idx" ON "reusable_blocks_cards_vis_rules" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_listing_vis_rules_device_show_order_idx" ON "reusable_blocks_listing_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "reusable_blocks_listing_vis_rules_device_show_parent_idx" ON "reusable_blocks_listing_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "reusable_blocks_listing_vis_rules_device_show_locale_idx" ON "reusable_blocks_listing_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "reusable_blocks_listing_vis_rules_order_idx" ON "reusable_blocks_listing_vis_rules" USING btree ("_order");
  CREATE INDEX "reusable_blocks_listing_vis_rules_parent_id_idx" ON "reusable_blocks_listing_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_listing_vis_rules_locale_idx" ON "reusable_blocks_listing_vis_rules" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_columns_vis_rules_device_show_order_idx" ON "reusable_blocks_columns_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "reusable_blocks_columns_vis_rules_device_show_parent_idx" ON "reusable_blocks_columns_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "reusable_blocks_columns_vis_rules_device_show_locale_idx" ON "reusable_blocks_columns_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "reusable_blocks_columns_vis_rules_order_idx" ON "reusable_blocks_columns_vis_rules" USING btree ("_order");
  CREATE INDEX "reusable_blocks_columns_vis_rules_parent_id_idx" ON "reusable_blocks_columns_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_columns_vis_rules_locale_idx" ON "reusable_blocks_columns_vis_rules" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_tabs_vis_rules_device_show_order_idx" ON "reusable_blocks_tabs_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "reusable_blocks_tabs_vis_rules_device_show_parent_idx" ON "reusable_blocks_tabs_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "reusable_blocks_tabs_vis_rules_device_show_locale_idx" ON "reusable_blocks_tabs_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "reusable_blocks_tabs_vis_rules_order_idx" ON "reusable_blocks_tabs_vis_rules" USING btree ("_order");
  CREATE INDEX "reusable_blocks_tabs_vis_rules_parent_id_idx" ON "reusable_blocks_tabs_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_tabs_vis_rules_locale_idx" ON "reusable_blocks_tabs_vis_rules" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_stats_vis_rules_device_show_order_idx" ON "reusable_blocks_stats_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "reusable_blocks_stats_vis_rules_device_show_parent_idx" ON "reusable_blocks_stats_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "reusable_blocks_stats_vis_rules_device_show_locale_idx" ON "reusable_blocks_stats_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "reusable_blocks_stats_vis_rules_order_idx" ON "reusable_blocks_stats_vis_rules" USING btree ("_order");
  CREATE INDEX "reusable_blocks_stats_vis_rules_parent_id_idx" ON "reusable_blocks_stats_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_stats_vis_rules_locale_idx" ON "reusable_blocks_stats_vis_rules" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_logos_vis_rules_device_show_order_idx" ON "reusable_blocks_logos_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "reusable_blocks_logos_vis_rules_device_show_parent_idx" ON "reusable_blocks_logos_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "reusable_blocks_logos_vis_rules_device_show_locale_idx" ON "reusable_blocks_logos_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "reusable_blocks_logos_vis_rules_order_idx" ON "reusable_blocks_logos_vis_rules" USING btree ("_order");
  CREATE INDEX "reusable_blocks_logos_vis_rules_parent_id_idx" ON "reusable_blocks_logos_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_logos_vis_rules_locale_idx" ON "reusable_blocks_logos_vis_rules" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_testimonials_vis_rules_device_show_order_idx" ON "reusable_blocks_testimonials_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "reusable_blocks_testimonials_vis_rules_device_show_parent_idx" ON "reusable_blocks_testimonials_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "reusable_blocks_testimonials_vis_rules_device_show_locale_idx" ON "reusable_blocks_testimonials_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "reusable_blocks_testimonials_vis_rules_order_idx" ON "reusable_blocks_testimonials_vis_rules" USING btree ("_order");
  CREATE INDEX "reusable_blocks_testimonials_vis_rules_parent_id_idx" ON "reusable_blocks_testimonials_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_testimonials_vis_rules_locale_idx" ON "reusable_blocks_testimonials_vis_rules" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_faq_vis_rules_device_show_order_idx" ON "reusable_blocks_faq_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "reusable_blocks_faq_vis_rules_device_show_parent_idx" ON "reusable_blocks_faq_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "reusable_blocks_faq_vis_rules_device_show_locale_idx" ON "reusable_blocks_faq_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "reusable_blocks_faq_vis_rules_order_idx" ON "reusable_blocks_faq_vis_rules" USING btree ("_order");
  CREATE INDEX "reusable_blocks_faq_vis_rules_parent_id_idx" ON "reusable_blocks_faq_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_faq_vis_rules_locale_idx" ON "reusable_blocks_faq_vis_rules" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_cta_vis_rules_device_show_order_idx" ON "reusable_blocks_cta_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "reusable_blocks_cta_vis_rules_device_show_parent_idx" ON "reusable_blocks_cta_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "reusable_blocks_cta_vis_rules_device_show_locale_idx" ON "reusable_blocks_cta_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "reusable_blocks_cta_vis_rules_order_idx" ON "reusable_blocks_cta_vis_rules" USING btree ("_order");
  CREATE INDEX "reusable_blocks_cta_vis_rules_parent_id_idx" ON "reusable_blocks_cta_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_cta_vis_rules_locale_idx" ON "reusable_blocks_cta_vis_rules" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "reusable_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "reusable_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "reusable_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "reusable_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "reusable_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "reusable_blocks_dynamic_field_vis_rules_order_idx" ON "reusable_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "reusable_blocks_dynamic_field_vis_rules_parent_id_idx" ON "reusable_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_dynamic_field_vis_rules_locale_idx" ON "reusable_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_hero_vis_rules_device_show_order_idx" ON "_reusable_v_blocks_hero_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_reusable_v_blocks_hero_vis_rules_device_show_parent_idx" ON "_reusable_v_blocks_hero_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_reusable_v_blocks_hero_vis_rules_device_show_locale_idx" ON "_reusable_v_blocks_hero_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_reusable_v_blocks_hero_vis_rules_order_idx" ON "_reusable_v_blocks_hero_vis_rules" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_hero_vis_rules_parent_id_idx" ON "_reusable_v_blocks_hero_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_hero_vis_rules_locale_idx" ON "_reusable_v_blocks_hero_vis_rules" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_rich_text_vis_rules_device_show_order_idx" ON "_reusable_v_blocks_rich_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_reusable_v_blocks_rich_text_vis_rules_device_show_parent_idx" ON "_reusable_v_blocks_rich_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_reusable_v_blocks_rich_text_vis_rules_device_show_locale_idx" ON "_reusable_v_blocks_rich_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_reusable_v_blocks_rich_text_vis_rules_order_idx" ON "_reusable_v_blocks_rich_text_vis_rules" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_rich_text_vis_rules_parent_id_idx" ON "_reusable_v_blocks_rich_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_rich_text_vis_rules_locale_idx" ON "_reusable_v_blocks_rich_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_media_text_vis_rules_device_show_order_idx" ON "_reusable_v_blocks_media_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_reusable_v_blocks_media_text_vis_rules_device_show_parent_idx" ON "_reusable_v_blocks_media_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_reusable_v_blocks_media_text_vis_rules_device_show_locale_idx" ON "_reusable_v_blocks_media_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_reusable_v_blocks_media_text_vis_rules_order_idx" ON "_reusable_v_blocks_media_text_vis_rules" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_media_text_vis_rules_parent_id_idx" ON "_reusable_v_blocks_media_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_media_text_vis_rules_locale_idx" ON "_reusable_v_blocks_media_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_cards_vis_rules_device_show_order_idx" ON "_reusable_v_blocks_cards_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_reusable_v_blocks_cards_vis_rules_device_show_parent_idx" ON "_reusable_v_blocks_cards_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_reusable_v_blocks_cards_vis_rules_device_show_locale_idx" ON "_reusable_v_blocks_cards_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_reusable_v_blocks_cards_vis_rules_order_idx" ON "_reusable_v_blocks_cards_vis_rules" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_cards_vis_rules_parent_id_idx" ON "_reusable_v_blocks_cards_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_cards_vis_rules_locale_idx" ON "_reusable_v_blocks_cards_vis_rules" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_listing_vis_rules_device_show_order_idx" ON "_reusable_v_blocks_listing_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_reusable_v_blocks_listing_vis_rules_device_show_parent_idx" ON "_reusable_v_blocks_listing_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_reusable_v_blocks_listing_vis_rules_device_show_locale_idx" ON "_reusable_v_blocks_listing_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_reusable_v_blocks_listing_vis_rules_order_idx" ON "_reusable_v_blocks_listing_vis_rules" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_listing_vis_rules_parent_id_idx" ON "_reusable_v_blocks_listing_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_listing_vis_rules_locale_idx" ON "_reusable_v_blocks_listing_vis_rules" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_columns_vis_rules_device_show_order_idx" ON "_reusable_v_blocks_columns_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_reusable_v_blocks_columns_vis_rules_device_show_parent_idx" ON "_reusable_v_blocks_columns_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_reusable_v_blocks_columns_vis_rules_device_show_locale_idx" ON "_reusable_v_blocks_columns_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_reusable_v_blocks_columns_vis_rules_order_idx" ON "_reusable_v_blocks_columns_vis_rules" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_columns_vis_rules_parent_id_idx" ON "_reusable_v_blocks_columns_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_columns_vis_rules_locale_idx" ON "_reusable_v_blocks_columns_vis_rules" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_tabs_vis_rules_device_show_order_idx" ON "_reusable_v_blocks_tabs_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_reusable_v_blocks_tabs_vis_rules_device_show_parent_idx" ON "_reusable_v_blocks_tabs_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_reusable_v_blocks_tabs_vis_rules_device_show_locale_idx" ON "_reusable_v_blocks_tabs_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_reusable_v_blocks_tabs_vis_rules_order_idx" ON "_reusable_v_blocks_tabs_vis_rules" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_tabs_vis_rules_parent_id_idx" ON "_reusable_v_blocks_tabs_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_tabs_vis_rules_locale_idx" ON "_reusable_v_blocks_tabs_vis_rules" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_stats_vis_rules_device_show_order_idx" ON "_reusable_v_blocks_stats_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_reusable_v_blocks_stats_vis_rules_device_show_parent_idx" ON "_reusable_v_blocks_stats_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_reusable_v_blocks_stats_vis_rules_device_show_locale_idx" ON "_reusable_v_blocks_stats_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_reusable_v_blocks_stats_vis_rules_order_idx" ON "_reusable_v_blocks_stats_vis_rules" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_stats_vis_rules_parent_id_idx" ON "_reusable_v_blocks_stats_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_stats_vis_rules_locale_idx" ON "_reusable_v_blocks_stats_vis_rules" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_logos_vis_rules_device_show_order_idx" ON "_reusable_v_blocks_logos_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_reusable_v_blocks_logos_vis_rules_device_show_parent_idx" ON "_reusable_v_blocks_logos_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_reusable_v_blocks_logos_vis_rules_device_show_locale_idx" ON "_reusable_v_blocks_logos_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_reusable_v_blocks_logos_vis_rules_order_idx" ON "_reusable_v_blocks_logos_vis_rules" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_logos_vis_rules_parent_id_idx" ON "_reusable_v_blocks_logos_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_logos_vis_rules_locale_idx" ON "_reusable_v_blocks_logos_vis_rules" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_testimonials_vis_rules_device_show_order_idx" ON "_reusable_v_blocks_testimonials_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_reusable_v_blocks_testimonials_vis_rules_device_show_parent_idx" ON "_reusable_v_blocks_testimonials_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_reusable_v_blocks_testimonials_vis_rules_device_show_locale_idx" ON "_reusable_v_blocks_testimonials_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_reusable_v_blocks_testimonials_vis_rules_order_idx" ON "_reusable_v_blocks_testimonials_vis_rules" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_testimonials_vis_rules_parent_id_idx" ON "_reusable_v_blocks_testimonials_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_testimonials_vis_rules_locale_idx" ON "_reusable_v_blocks_testimonials_vis_rules" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_faq_vis_rules_device_show_order_idx" ON "_reusable_v_blocks_faq_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_reusable_v_blocks_faq_vis_rules_device_show_parent_idx" ON "_reusable_v_blocks_faq_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_reusable_v_blocks_faq_vis_rules_device_show_locale_idx" ON "_reusable_v_blocks_faq_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_reusable_v_blocks_faq_vis_rules_order_idx" ON "_reusable_v_blocks_faq_vis_rules" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_faq_vis_rules_parent_id_idx" ON "_reusable_v_blocks_faq_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_faq_vis_rules_locale_idx" ON "_reusable_v_blocks_faq_vis_rules" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_cta_vis_rules_device_show_order_idx" ON "_reusable_v_blocks_cta_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_reusable_v_blocks_cta_vis_rules_device_show_parent_idx" ON "_reusable_v_blocks_cta_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_reusable_v_blocks_cta_vis_rules_device_show_locale_idx" ON "_reusable_v_blocks_cta_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_reusable_v_blocks_cta_vis_rules_order_idx" ON "_reusable_v_blocks_cta_vis_rules" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_cta_vis_rules_parent_id_idx" ON "_reusable_v_blocks_cta_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_cta_vis_rules_locale_idx" ON "_reusable_v_blocks_cta_vis_rules" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "_reusable_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "_reusable_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "_reusable_v_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_vis_rules_order_idx" ON "_reusable_v_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_vis_rules_parent_id_idx" ON "_reusable_v_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_vis_rules_locale_idx" ON "_reusable_v_blocks_dynamic_field_vis_rules" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_hero_vis_rules_device_show_order_idx" ON "cpt_defaults_blocks_hero_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "cpt_defaults_blocks_hero_vis_rules_device_show_parent_idx" ON "cpt_defaults_blocks_hero_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "cpt_defaults_blocks_hero_vis_rules_device_show_locale_idx" ON "cpt_defaults_blocks_hero_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "cpt_defaults_blocks_hero_vis_rules_order_idx" ON "cpt_defaults_blocks_hero_vis_rules" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_hero_vis_rules_parent_id_idx" ON "cpt_defaults_blocks_hero_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_hero_vis_rules_locale_idx" ON "cpt_defaults_blocks_hero_vis_rules" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_rich_text_vis_rules_device_show_order_idx" ON "cpt_defaults_blocks_rich_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "cpt_defaults_blocks_rich_text_vis_rules_device_show_parent_idx" ON "cpt_defaults_blocks_rich_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "cpt_defaults_blocks_rich_text_vis_rules_device_show_locale_idx" ON "cpt_defaults_blocks_rich_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "cpt_defaults_blocks_rich_text_vis_rules_order_idx" ON "cpt_defaults_blocks_rich_text_vis_rules" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_rich_text_vis_rules_parent_id_idx" ON "cpt_defaults_blocks_rich_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_rich_text_vis_rules_locale_idx" ON "cpt_defaults_blocks_rich_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_media_text_vis_rules_device_show_order_idx" ON "cpt_defaults_blocks_media_text_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "cpt_defaults_blocks_media_text_vis_rules_device_show_parent_idx" ON "cpt_defaults_blocks_media_text_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "cpt_defaults_blocks_media_text_vis_rules_device_show_locale_idx" ON "cpt_defaults_blocks_media_text_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "cpt_defaults_blocks_media_text_vis_rules_order_idx" ON "cpt_defaults_blocks_media_text_vis_rules" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_media_text_vis_rules_parent_id_idx" ON "cpt_defaults_blocks_media_text_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_media_text_vis_rules_locale_idx" ON "cpt_defaults_blocks_media_text_vis_rules" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_cards_vis_rules_device_show_order_idx" ON "cpt_defaults_blocks_cards_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "cpt_defaults_blocks_cards_vis_rules_device_show_parent_idx" ON "cpt_defaults_blocks_cards_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "cpt_defaults_blocks_cards_vis_rules_device_show_locale_idx" ON "cpt_defaults_blocks_cards_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "cpt_defaults_blocks_cards_vis_rules_order_idx" ON "cpt_defaults_blocks_cards_vis_rules" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_cards_vis_rules_parent_id_idx" ON "cpt_defaults_blocks_cards_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_cards_vis_rules_locale_idx" ON "cpt_defaults_blocks_cards_vis_rules" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_listing_vis_rules_device_show_order_idx" ON "cpt_defaults_blocks_listing_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "cpt_defaults_blocks_listing_vis_rules_device_show_parent_idx" ON "cpt_defaults_blocks_listing_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "cpt_defaults_blocks_listing_vis_rules_device_show_locale_idx" ON "cpt_defaults_blocks_listing_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "cpt_defaults_blocks_listing_vis_rules_order_idx" ON "cpt_defaults_blocks_listing_vis_rules" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_listing_vis_rules_parent_id_idx" ON "cpt_defaults_blocks_listing_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_listing_vis_rules_locale_idx" ON "cpt_defaults_blocks_listing_vis_rules" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_columns_vis_rules_device_show_order_idx" ON "cpt_defaults_blocks_columns_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "cpt_defaults_blocks_columns_vis_rules_device_show_parent_idx" ON "cpt_defaults_blocks_columns_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "cpt_defaults_blocks_columns_vis_rules_device_show_locale_idx" ON "cpt_defaults_blocks_columns_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "cpt_defaults_blocks_columns_vis_rules_order_idx" ON "cpt_defaults_blocks_columns_vis_rules" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_columns_vis_rules_parent_id_idx" ON "cpt_defaults_blocks_columns_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_columns_vis_rules_locale_idx" ON "cpt_defaults_blocks_columns_vis_rules" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_tabs_vis_rules_device_show_order_idx" ON "cpt_defaults_blocks_tabs_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "cpt_defaults_blocks_tabs_vis_rules_device_show_parent_idx" ON "cpt_defaults_blocks_tabs_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "cpt_defaults_blocks_tabs_vis_rules_device_show_locale_idx" ON "cpt_defaults_blocks_tabs_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "cpt_defaults_blocks_tabs_vis_rules_order_idx" ON "cpt_defaults_blocks_tabs_vis_rules" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_tabs_vis_rules_parent_id_idx" ON "cpt_defaults_blocks_tabs_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_tabs_vis_rules_locale_idx" ON "cpt_defaults_blocks_tabs_vis_rules" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_stats_vis_rules_device_show_order_idx" ON "cpt_defaults_blocks_stats_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "cpt_defaults_blocks_stats_vis_rules_device_show_parent_idx" ON "cpt_defaults_blocks_stats_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "cpt_defaults_blocks_stats_vis_rules_device_show_locale_idx" ON "cpt_defaults_blocks_stats_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "cpt_defaults_blocks_stats_vis_rules_order_idx" ON "cpt_defaults_blocks_stats_vis_rules" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_stats_vis_rules_parent_id_idx" ON "cpt_defaults_blocks_stats_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_stats_vis_rules_locale_idx" ON "cpt_defaults_blocks_stats_vis_rules" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_logos_vis_rules_device_show_order_idx" ON "cpt_defaults_blocks_logos_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "cpt_defaults_blocks_logos_vis_rules_device_show_parent_idx" ON "cpt_defaults_blocks_logos_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "cpt_defaults_blocks_logos_vis_rules_device_show_locale_idx" ON "cpt_defaults_blocks_logos_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "cpt_defaults_blocks_logos_vis_rules_order_idx" ON "cpt_defaults_blocks_logos_vis_rules" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_logos_vis_rules_parent_id_idx" ON "cpt_defaults_blocks_logos_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_logos_vis_rules_locale_idx" ON "cpt_defaults_blocks_logos_vis_rules" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_testimonials_vis_rules_device_show_order_idx" ON "cpt_defaults_blocks_testimonials_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "cpt_defaults_blocks_testimonials_vis_rules_device_show_parent_idx" ON "cpt_defaults_blocks_testimonials_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "cpt_defaults_blocks_testimonials_vis_rules_device_show_locale_idx" ON "cpt_defaults_blocks_testimonials_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "cpt_defaults_blocks_testimonials_vis_rules_order_idx" ON "cpt_defaults_blocks_testimonials_vis_rules" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_testimonials_vis_rules_parent_id_idx" ON "cpt_defaults_blocks_testimonials_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_testimonials_vis_rules_locale_idx" ON "cpt_defaults_blocks_testimonials_vis_rules" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_faq_vis_rules_device_show_order_idx" ON "cpt_defaults_blocks_faq_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "cpt_defaults_blocks_faq_vis_rules_device_show_parent_idx" ON "cpt_defaults_blocks_faq_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "cpt_defaults_blocks_faq_vis_rules_device_show_locale_idx" ON "cpt_defaults_blocks_faq_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "cpt_defaults_blocks_faq_vis_rules_order_idx" ON "cpt_defaults_blocks_faq_vis_rules" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_faq_vis_rules_parent_id_idx" ON "cpt_defaults_blocks_faq_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_faq_vis_rules_locale_idx" ON "cpt_defaults_blocks_faq_vis_rules" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_cta_vis_rules_device_show_order_idx" ON "cpt_defaults_blocks_cta_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "cpt_defaults_blocks_cta_vis_rules_device_show_parent_idx" ON "cpt_defaults_blocks_cta_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "cpt_defaults_blocks_cta_vis_rules_device_show_locale_idx" ON "cpt_defaults_blocks_cta_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "cpt_defaults_blocks_cta_vis_rules_order_idx" ON "cpt_defaults_blocks_cta_vis_rules" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_cta_vis_rules_parent_id_idx" ON "cpt_defaults_blocks_cta_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_cta_vis_rules_locale_idx" ON "cpt_defaults_blocks_cta_vis_rules" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_vis_rules_device_show_order_idx" ON "cpt_defaults_blocks_dynamic_field_vis_rules_device_show" USING btree ("order");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_vis_rules_device_show_parent_idx" ON "cpt_defaults_blocks_dynamic_field_vis_rules_device_show" USING btree ("parent_id");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_vis_rules_device_show_locale_idx" ON "cpt_defaults_blocks_dynamic_field_vis_rules_device_show" USING btree ("locale");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_vis_rules_order_idx" ON "cpt_defaults_blocks_dynamic_field_vis_rules" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_vis_rules_parent_id_idx" ON "cpt_defaults_blocks_dynamic_field_vis_rules" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_vis_rules_locale_idx" ON "cpt_defaults_blocks_dynamic_field_vis_rules" USING btree ("_locale");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_hero_vis_rules_device_show" CASCADE;
  DROP TABLE "pages_blocks_hero_vis_rules" CASCADE;
  DROP TABLE "pages_blocks_rich_text_vis_rules_device_show" CASCADE;
  DROP TABLE "pages_blocks_rich_text_vis_rules" CASCADE;
  DROP TABLE "pages_blocks_media_text_vis_rules_device_show" CASCADE;
  DROP TABLE "pages_blocks_media_text_vis_rules" CASCADE;
  DROP TABLE "pages_blocks_cards_vis_rules_device_show" CASCADE;
  DROP TABLE "pages_blocks_cards_vis_rules" CASCADE;
  DROP TABLE "pages_blocks_listing_vis_rules_device_show" CASCADE;
  DROP TABLE "pages_blocks_listing_vis_rules" CASCADE;
  DROP TABLE "pages_blocks_columns_vis_rules_device_show" CASCADE;
  DROP TABLE "pages_blocks_columns_vis_rules" CASCADE;
  DROP TABLE "pages_blocks_tabs_vis_rules_device_show" CASCADE;
  DROP TABLE "pages_blocks_tabs_vis_rules" CASCADE;
  DROP TABLE "pages_blocks_stats_vis_rules_device_show" CASCADE;
  DROP TABLE "pages_blocks_stats_vis_rules" CASCADE;
  DROP TABLE "pages_blocks_logos_vis_rules_device_show" CASCADE;
  DROP TABLE "pages_blocks_logos_vis_rules" CASCADE;
  DROP TABLE "pages_blocks_testimonials_vis_rules_device_show" CASCADE;
  DROP TABLE "pages_blocks_testimonials_vis_rules" CASCADE;
  DROP TABLE "pages_blocks_faq_vis_rules_device_show" CASCADE;
  DROP TABLE "pages_blocks_faq_vis_rules" CASCADE;
  DROP TABLE "pages_blocks_cta_vis_rules_device_show" CASCADE;
  DROP TABLE "pages_blocks_cta_vis_rules" CASCADE;
  DROP TABLE "pages_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "pages_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_vis_rules_device_show" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_vis_rules" CASCADE;
  DROP TABLE "_pages_v_blocks_rich_text_vis_rules_device_show" CASCADE;
  DROP TABLE "_pages_v_blocks_rich_text_vis_rules" CASCADE;
  DROP TABLE "_pages_v_blocks_media_text_vis_rules_device_show" CASCADE;
  DROP TABLE "_pages_v_blocks_media_text_vis_rules" CASCADE;
  DROP TABLE "_pages_v_blocks_cards_vis_rules_device_show" CASCADE;
  DROP TABLE "_pages_v_blocks_cards_vis_rules" CASCADE;
  DROP TABLE "_pages_v_blocks_listing_vis_rules_device_show" CASCADE;
  DROP TABLE "_pages_v_blocks_listing_vis_rules" CASCADE;
  DROP TABLE "_pages_v_blocks_columns_vis_rules_device_show" CASCADE;
  DROP TABLE "_pages_v_blocks_columns_vis_rules" CASCADE;
  DROP TABLE "_pages_v_blocks_tabs_vis_rules_device_show" CASCADE;
  DROP TABLE "_pages_v_blocks_tabs_vis_rules" CASCADE;
  DROP TABLE "_pages_v_blocks_stats_vis_rules_device_show" CASCADE;
  DROP TABLE "_pages_v_blocks_stats_vis_rules" CASCADE;
  DROP TABLE "_pages_v_blocks_logos_vis_rules_device_show" CASCADE;
  DROP TABLE "_pages_v_blocks_logos_vis_rules" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials_vis_rules_device_show" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials_vis_rules" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_vis_rules_device_show" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_vis_rules" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_vis_rules_device_show" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_vis_rules" CASCADE;
  DROP TABLE "_pages_v_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "_pages_v_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "posts_blocks_hero_vis_rules_device_show" CASCADE;
  DROP TABLE "posts_blocks_hero_vis_rules" CASCADE;
  DROP TABLE "posts_blocks_rich_text_vis_rules_device_show" CASCADE;
  DROP TABLE "posts_blocks_rich_text_vis_rules" CASCADE;
  DROP TABLE "posts_blocks_media_text_vis_rules_device_show" CASCADE;
  DROP TABLE "posts_blocks_media_text_vis_rules" CASCADE;
  DROP TABLE "posts_blocks_cards_vis_rules_device_show" CASCADE;
  DROP TABLE "posts_blocks_cards_vis_rules" CASCADE;
  DROP TABLE "posts_blocks_listing_vis_rules_device_show" CASCADE;
  DROP TABLE "posts_blocks_listing_vis_rules" CASCADE;
  DROP TABLE "posts_blocks_columns_vis_rules_device_show" CASCADE;
  DROP TABLE "posts_blocks_columns_vis_rules" CASCADE;
  DROP TABLE "posts_blocks_tabs_vis_rules_device_show" CASCADE;
  DROP TABLE "posts_blocks_tabs_vis_rules" CASCADE;
  DROP TABLE "posts_blocks_stats_vis_rules_device_show" CASCADE;
  DROP TABLE "posts_blocks_stats_vis_rules" CASCADE;
  DROP TABLE "posts_blocks_logos_vis_rules_device_show" CASCADE;
  DROP TABLE "posts_blocks_logos_vis_rules" CASCADE;
  DROP TABLE "posts_blocks_testimonials_vis_rules_device_show" CASCADE;
  DROP TABLE "posts_blocks_testimonials_vis_rules" CASCADE;
  DROP TABLE "posts_blocks_faq_vis_rules_device_show" CASCADE;
  DROP TABLE "posts_blocks_faq_vis_rules" CASCADE;
  DROP TABLE "posts_blocks_cta_vis_rules_device_show" CASCADE;
  DROP TABLE "posts_blocks_cta_vis_rules" CASCADE;
  DROP TABLE "posts_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "posts_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "_posts_v_blocks_hero_vis_rules_device_show" CASCADE;
  DROP TABLE "_posts_v_blocks_hero_vis_rules" CASCADE;
  DROP TABLE "_posts_v_blocks_rich_text_vis_rules_device_show" CASCADE;
  DROP TABLE "_posts_v_blocks_rich_text_vis_rules" CASCADE;
  DROP TABLE "_posts_v_blocks_media_text_vis_rules_device_show" CASCADE;
  DROP TABLE "_posts_v_blocks_media_text_vis_rules" CASCADE;
  DROP TABLE "_posts_v_blocks_cards_vis_rules_device_show" CASCADE;
  DROP TABLE "_posts_v_blocks_cards_vis_rules" CASCADE;
  DROP TABLE "_posts_v_blocks_listing_vis_rules_device_show" CASCADE;
  DROP TABLE "_posts_v_blocks_listing_vis_rules" CASCADE;
  DROP TABLE "_posts_v_blocks_columns_vis_rules_device_show" CASCADE;
  DROP TABLE "_posts_v_blocks_columns_vis_rules" CASCADE;
  DROP TABLE "_posts_v_blocks_tabs_vis_rules_device_show" CASCADE;
  DROP TABLE "_posts_v_blocks_tabs_vis_rules" CASCADE;
  DROP TABLE "_posts_v_blocks_stats_vis_rules_device_show" CASCADE;
  DROP TABLE "_posts_v_blocks_stats_vis_rules" CASCADE;
  DROP TABLE "_posts_v_blocks_logos_vis_rules_device_show" CASCADE;
  DROP TABLE "_posts_v_blocks_logos_vis_rules" CASCADE;
  DROP TABLE "_posts_v_blocks_testimonials_vis_rules_device_show" CASCADE;
  DROP TABLE "_posts_v_blocks_testimonials_vis_rules" CASCADE;
  DROP TABLE "_posts_v_blocks_faq_vis_rules_device_show" CASCADE;
  DROP TABLE "_posts_v_blocks_faq_vis_rules" CASCADE;
  DROP TABLE "_posts_v_blocks_cta_vis_rules_device_show" CASCADE;
  DROP TABLE "_posts_v_blocks_cta_vis_rules" CASCADE;
  DROP TABLE "_posts_v_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "_posts_v_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "events_blocks_hero_vis_rules_device_show" CASCADE;
  DROP TABLE "events_blocks_hero_vis_rules" CASCADE;
  DROP TABLE "events_blocks_rich_text_vis_rules_device_show" CASCADE;
  DROP TABLE "events_blocks_rich_text_vis_rules" CASCADE;
  DROP TABLE "events_blocks_media_text_vis_rules_device_show" CASCADE;
  DROP TABLE "events_blocks_media_text_vis_rules" CASCADE;
  DROP TABLE "events_blocks_cards_vis_rules_device_show" CASCADE;
  DROP TABLE "events_blocks_cards_vis_rules" CASCADE;
  DROP TABLE "events_blocks_listing_vis_rules_device_show" CASCADE;
  DROP TABLE "events_blocks_listing_vis_rules" CASCADE;
  DROP TABLE "events_blocks_columns_vis_rules_device_show" CASCADE;
  DROP TABLE "events_blocks_columns_vis_rules" CASCADE;
  DROP TABLE "events_blocks_tabs_vis_rules_device_show" CASCADE;
  DROP TABLE "events_blocks_tabs_vis_rules" CASCADE;
  DROP TABLE "events_blocks_stats_vis_rules_device_show" CASCADE;
  DROP TABLE "events_blocks_stats_vis_rules" CASCADE;
  DROP TABLE "events_blocks_logos_vis_rules_device_show" CASCADE;
  DROP TABLE "events_blocks_logos_vis_rules" CASCADE;
  DROP TABLE "events_blocks_testimonials_vis_rules_device_show" CASCADE;
  DROP TABLE "events_blocks_testimonials_vis_rules" CASCADE;
  DROP TABLE "events_blocks_faq_vis_rules_device_show" CASCADE;
  DROP TABLE "events_blocks_faq_vis_rules" CASCADE;
  DROP TABLE "events_blocks_cta_vis_rules_device_show" CASCADE;
  DROP TABLE "events_blocks_cta_vis_rules" CASCADE;
  DROP TABLE "events_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "events_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "_events_v_blocks_hero_vis_rules_device_show" CASCADE;
  DROP TABLE "_events_v_blocks_hero_vis_rules" CASCADE;
  DROP TABLE "_events_v_blocks_rich_text_vis_rules_device_show" CASCADE;
  DROP TABLE "_events_v_blocks_rich_text_vis_rules" CASCADE;
  DROP TABLE "_events_v_blocks_media_text_vis_rules_device_show" CASCADE;
  DROP TABLE "_events_v_blocks_media_text_vis_rules" CASCADE;
  DROP TABLE "_events_v_blocks_cards_vis_rules_device_show" CASCADE;
  DROP TABLE "_events_v_blocks_cards_vis_rules" CASCADE;
  DROP TABLE "_events_v_blocks_listing_vis_rules_device_show" CASCADE;
  DROP TABLE "_events_v_blocks_listing_vis_rules" CASCADE;
  DROP TABLE "_events_v_blocks_columns_vis_rules_device_show" CASCADE;
  DROP TABLE "_events_v_blocks_columns_vis_rules" CASCADE;
  DROP TABLE "_events_v_blocks_tabs_vis_rules_device_show" CASCADE;
  DROP TABLE "_events_v_blocks_tabs_vis_rules" CASCADE;
  DROP TABLE "_events_v_blocks_stats_vis_rules_device_show" CASCADE;
  DROP TABLE "_events_v_blocks_stats_vis_rules" CASCADE;
  DROP TABLE "_events_v_blocks_logos_vis_rules_device_show" CASCADE;
  DROP TABLE "_events_v_blocks_logos_vis_rules" CASCADE;
  DROP TABLE "_events_v_blocks_testimonials_vis_rules_device_show" CASCADE;
  DROP TABLE "_events_v_blocks_testimonials_vis_rules" CASCADE;
  DROP TABLE "_events_v_blocks_faq_vis_rules_device_show" CASCADE;
  DROP TABLE "_events_v_blocks_faq_vis_rules" CASCADE;
  DROP TABLE "_events_v_blocks_cta_vis_rules_device_show" CASCADE;
  DROP TABLE "_events_v_blocks_cta_vis_rules" CASCADE;
  DROP TABLE "_events_v_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "_events_v_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "resources_blocks_hero_vis_rules_device_show" CASCADE;
  DROP TABLE "resources_blocks_hero_vis_rules" CASCADE;
  DROP TABLE "resources_blocks_rich_text_vis_rules_device_show" CASCADE;
  DROP TABLE "resources_blocks_rich_text_vis_rules" CASCADE;
  DROP TABLE "resources_blocks_media_text_vis_rules_device_show" CASCADE;
  DROP TABLE "resources_blocks_media_text_vis_rules" CASCADE;
  DROP TABLE "resources_blocks_cards_vis_rules_device_show" CASCADE;
  DROP TABLE "resources_blocks_cards_vis_rules" CASCADE;
  DROP TABLE "resources_blocks_listing_vis_rules_device_show" CASCADE;
  DROP TABLE "resources_blocks_listing_vis_rules" CASCADE;
  DROP TABLE "resources_blocks_columns_vis_rules_device_show" CASCADE;
  DROP TABLE "resources_blocks_columns_vis_rules" CASCADE;
  DROP TABLE "resources_blocks_tabs_vis_rules_device_show" CASCADE;
  DROP TABLE "resources_blocks_tabs_vis_rules" CASCADE;
  DROP TABLE "resources_blocks_stats_vis_rules_device_show" CASCADE;
  DROP TABLE "resources_blocks_stats_vis_rules" CASCADE;
  DROP TABLE "resources_blocks_logos_vis_rules_device_show" CASCADE;
  DROP TABLE "resources_blocks_logos_vis_rules" CASCADE;
  DROP TABLE "resources_blocks_testimonials_vis_rules_device_show" CASCADE;
  DROP TABLE "resources_blocks_testimonials_vis_rules" CASCADE;
  DROP TABLE "resources_blocks_faq_vis_rules_device_show" CASCADE;
  DROP TABLE "resources_blocks_faq_vis_rules" CASCADE;
  DROP TABLE "resources_blocks_cta_vis_rules_device_show" CASCADE;
  DROP TABLE "resources_blocks_cta_vis_rules" CASCADE;
  DROP TABLE "resources_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "resources_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "_resources_v_blocks_hero_vis_rules_device_show" CASCADE;
  DROP TABLE "_resources_v_blocks_hero_vis_rules" CASCADE;
  DROP TABLE "_resources_v_blocks_rich_text_vis_rules_device_show" CASCADE;
  DROP TABLE "_resources_v_blocks_rich_text_vis_rules" CASCADE;
  DROP TABLE "_resources_v_blocks_media_text_vis_rules_device_show" CASCADE;
  DROP TABLE "_resources_v_blocks_media_text_vis_rules" CASCADE;
  DROP TABLE "_resources_v_blocks_cards_vis_rules_device_show" CASCADE;
  DROP TABLE "_resources_v_blocks_cards_vis_rules" CASCADE;
  DROP TABLE "_resources_v_blocks_listing_vis_rules_device_show" CASCADE;
  DROP TABLE "_resources_v_blocks_listing_vis_rules" CASCADE;
  DROP TABLE "_resources_v_blocks_columns_vis_rules_device_show" CASCADE;
  DROP TABLE "_resources_v_blocks_columns_vis_rules" CASCADE;
  DROP TABLE "_resources_v_blocks_tabs_vis_rules_device_show" CASCADE;
  DROP TABLE "_resources_v_blocks_tabs_vis_rules" CASCADE;
  DROP TABLE "_resources_v_blocks_stats_vis_rules_device_show" CASCADE;
  DROP TABLE "_resources_v_blocks_stats_vis_rules" CASCADE;
  DROP TABLE "_resources_v_blocks_logos_vis_rules_device_show" CASCADE;
  DROP TABLE "_resources_v_blocks_logos_vis_rules" CASCADE;
  DROP TABLE "_resources_v_blocks_testimonials_vis_rules_device_show" CASCADE;
  DROP TABLE "_resources_v_blocks_testimonials_vis_rules" CASCADE;
  DROP TABLE "_resources_v_blocks_faq_vis_rules_device_show" CASCADE;
  DROP TABLE "_resources_v_blocks_faq_vis_rules" CASCADE;
  DROP TABLE "_resources_v_blocks_cta_vis_rules_device_show" CASCADE;
  DROP TABLE "_resources_v_blocks_cta_vis_rules" CASCADE;
  DROP TABLE "_resources_v_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "_resources_v_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "glossary_blocks_hero_vis_rules_device_show" CASCADE;
  DROP TABLE "glossary_blocks_hero_vis_rules" CASCADE;
  DROP TABLE "glossary_blocks_rich_text_vis_rules_device_show" CASCADE;
  DROP TABLE "glossary_blocks_rich_text_vis_rules" CASCADE;
  DROP TABLE "glossary_blocks_media_text_vis_rules_device_show" CASCADE;
  DROP TABLE "glossary_blocks_media_text_vis_rules" CASCADE;
  DROP TABLE "glossary_blocks_cards_vis_rules_device_show" CASCADE;
  DROP TABLE "glossary_blocks_cards_vis_rules" CASCADE;
  DROP TABLE "glossary_blocks_listing_vis_rules_device_show" CASCADE;
  DROP TABLE "glossary_blocks_listing_vis_rules" CASCADE;
  DROP TABLE "glossary_blocks_columns_vis_rules_device_show" CASCADE;
  DROP TABLE "glossary_blocks_columns_vis_rules" CASCADE;
  DROP TABLE "glossary_blocks_tabs_vis_rules_device_show" CASCADE;
  DROP TABLE "glossary_blocks_tabs_vis_rules" CASCADE;
  DROP TABLE "glossary_blocks_stats_vis_rules_device_show" CASCADE;
  DROP TABLE "glossary_blocks_stats_vis_rules" CASCADE;
  DROP TABLE "glossary_blocks_logos_vis_rules_device_show" CASCADE;
  DROP TABLE "glossary_blocks_logos_vis_rules" CASCADE;
  DROP TABLE "glossary_blocks_testimonials_vis_rules_device_show" CASCADE;
  DROP TABLE "glossary_blocks_testimonials_vis_rules" CASCADE;
  DROP TABLE "glossary_blocks_faq_vis_rules_device_show" CASCADE;
  DROP TABLE "glossary_blocks_faq_vis_rules" CASCADE;
  DROP TABLE "glossary_blocks_cta_vis_rules_device_show" CASCADE;
  DROP TABLE "glossary_blocks_cta_vis_rules" CASCADE;
  DROP TABLE "glossary_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "glossary_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "_glossary_v_blocks_hero_vis_rules_device_show" CASCADE;
  DROP TABLE "_glossary_v_blocks_hero_vis_rules" CASCADE;
  DROP TABLE "_glossary_v_blocks_rich_text_vis_rules_device_show" CASCADE;
  DROP TABLE "_glossary_v_blocks_rich_text_vis_rules" CASCADE;
  DROP TABLE "_glossary_v_blocks_media_text_vis_rules_device_show" CASCADE;
  DROP TABLE "_glossary_v_blocks_media_text_vis_rules" CASCADE;
  DROP TABLE "_glossary_v_blocks_cards_vis_rules_device_show" CASCADE;
  DROP TABLE "_glossary_v_blocks_cards_vis_rules" CASCADE;
  DROP TABLE "_glossary_v_blocks_listing_vis_rules_device_show" CASCADE;
  DROP TABLE "_glossary_v_blocks_listing_vis_rules" CASCADE;
  DROP TABLE "_glossary_v_blocks_columns_vis_rules_device_show" CASCADE;
  DROP TABLE "_glossary_v_blocks_columns_vis_rules" CASCADE;
  DROP TABLE "_glossary_v_blocks_tabs_vis_rules_device_show" CASCADE;
  DROP TABLE "_glossary_v_blocks_tabs_vis_rules" CASCADE;
  DROP TABLE "_glossary_v_blocks_stats_vis_rules_device_show" CASCADE;
  DROP TABLE "_glossary_v_blocks_stats_vis_rules" CASCADE;
  DROP TABLE "_glossary_v_blocks_logos_vis_rules_device_show" CASCADE;
  DROP TABLE "_glossary_v_blocks_logos_vis_rules" CASCADE;
  DROP TABLE "_glossary_v_blocks_testimonials_vis_rules_device_show" CASCADE;
  DROP TABLE "_glossary_v_blocks_testimonials_vis_rules" CASCADE;
  DROP TABLE "_glossary_v_blocks_faq_vis_rules_device_show" CASCADE;
  DROP TABLE "_glossary_v_blocks_faq_vis_rules" CASCADE;
  DROP TABLE "_glossary_v_blocks_cta_vis_rules_device_show" CASCADE;
  DROP TABLE "_glossary_v_blocks_cta_vis_rules" CASCADE;
  DROP TABLE "_glossary_v_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "_glossary_v_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "people_blocks_hero_vis_rules_device_show" CASCADE;
  DROP TABLE "people_blocks_hero_vis_rules" CASCADE;
  DROP TABLE "people_blocks_rich_text_vis_rules_device_show" CASCADE;
  DROP TABLE "people_blocks_rich_text_vis_rules" CASCADE;
  DROP TABLE "people_blocks_media_text_vis_rules_device_show" CASCADE;
  DROP TABLE "people_blocks_media_text_vis_rules" CASCADE;
  DROP TABLE "people_blocks_cards_vis_rules_device_show" CASCADE;
  DROP TABLE "people_blocks_cards_vis_rules" CASCADE;
  DROP TABLE "people_blocks_listing_vis_rules_device_show" CASCADE;
  DROP TABLE "people_blocks_listing_vis_rules" CASCADE;
  DROP TABLE "people_blocks_columns_vis_rules_device_show" CASCADE;
  DROP TABLE "people_blocks_columns_vis_rules" CASCADE;
  DROP TABLE "people_blocks_tabs_vis_rules_device_show" CASCADE;
  DROP TABLE "people_blocks_tabs_vis_rules" CASCADE;
  DROP TABLE "people_blocks_stats_vis_rules_device_show" CASCADE;
  DROP TABLE "people_blocks_stats_vis_rules" CASCADE;
  DROP TABLE "people_blocks_logos_vis_rules_device_show" CASCADE;
  DROP TABLE "people_blocks_logos_vis_rules" CASCADE;
  DROP TABLE "people_blocks_testimonials_vis_rules_device_show" CASCADE;
  DROP TABLE "people_blocks_testimonials_vis_rules" CASCADE;
  DROP TABLE "people_blocks_faq_vis_rules_device_show" CASCADE;
  DROP TABLE "people_blocks_faq_vis_rules" CASCADE;
  DROP TABLE "people_blocks_cta_vis_rules_device_show" CASCADE;
  DROP TABLE "people_blocks_cta_vis_rules" CASCADE;
  DROP TABLE "people_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "people_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "_people_v_blocks_hero_vis_rules_device_show" CASCADE;
  DROP TABLE "_people_v_blocks_hero_vis_rules" CASCADE;
  DROP TABLE "_people_v_blocks_rich_text_vis_rules_device_show" CASCADE;
  DROP TABLE "_people_v_blocks_rich_text_vis_rules" CASCADE;
  DROP TABLE "_people_v_blocks_media_text_vis_rules_device_show" CASCADE;
  DROP TABLE "_people_v_blocks_media_text_vis_rules" CASCADE;
  DROP TABLE "_people_v_blocks_cards_vis_rules_device_show" CASCADE;
  DROP TABLE "_people_v_blocks_cards_vis_rules" CASCADE;
  DROP TABLE "_people_v_blocks_listing_vis_rules_device_show" CASCADE;
  DROP TABLE "_people_v_blocks_listing_vis_rules" CASCADE;
  DROP TABLE "_people_v_blocks_columns_vis_rules_device_show" CASCADE;
  DROP TABLE "_people_v_blocks_columns_vis_rules" CASCADE;
  DROP TABLE "_people_v_blocks_tabs_vis_rules_device_show" CASCADE;
  DROP TABLE "_people_v_blocks_tabs_vis_rules" CASCADE;
  DROP TABLE "_people_v_blocks_stats_vis_rules_device_show" CASCADE;
  DROP TABLE "_people_v_blocks_stats_vis_rules" CASCADE;
  DROP TABLE "_people_v_blocks_logos_vis_rules_device_show" CASCADE;
  DROP TABLE "_people_v_blocks_logos_vis_rules" CASCADE;
  DROP TABLE "_people_v_blocks_testimonials_vis_rules_device_show" CASCADE;
  DROP TABLE "_people_v_blocks_testimonials_vis_rules" CASCADE;
  DROP TABLE "_people_v_blocks_faq_vis_rules_device_show" CASCADE;
  DROP TABLE "_people_v_blocks_faq_vis_rules" CASCADE;
  DROP TABLE "_people_v_blocks_cta_vis_rules_device_show" CASCADE;
  DROP TABLE "_people_v_blocks_cta_vis_rules" CASCADE;
  DROP TABLE "_people_v_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "_people_v_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "reusable_blocks_hero_vis_rules_device_show" CASCADE;
  DROP TABLE "reusable_blocks_hero_vis_rules" CASCADE;
  DROP TABLE "reusable_blocks_rich_text_vis_rules_device_show" CASCADE;
  DROP TABLE "reusable_blocks_rich_text_vis_rules" CASCADE;
  DROP TABLE "reusable_blocks_media_text_vis_rules_device_show" CASCADE;
  DROP TABLE "reusable_blocks_media_text_vis_rules" CASCADE;
  DROP TABLE "reusable_blocks_cards_vis_rules_device_show" CASCADE;
  DROP TABLE "reusable_blocks_cards_vis_rules" CASCADE;
  DROP TABLE "reusable_blocks_listing_vis_rules_device_show" CASCADE;
  DROP TABLE "reusable_blocks_listing_vis_rules" CASCADE;
  DROP TABLE "reusable_blocks_columns_vis_rules_device_show" CASCADE;
  DROP TABLE "reusable_blocks_columns_vis_rules" CASCADE;
  DROP TABLE "reusable_blocks_tabs_vis_rules_device_show" CASCADE;
  DROP TABLE "reusable_blocks_tabs_vis_rules" CASCADE;
  DROP TABLE "reusable_blocks_stats_vis_rules_device_show" CASCADE;
  DROP TABLE "reusable_blocks_stats_vis_rules" CASCADE;
  DROP TABLE "reusable_blocks_logos_vis_rules_device_show" CASCADE;
  DROP TABLE "reusable_blocks_logos_vis_rules" CASCADE;
  DROP TABLE "reusable_blocks_testimonials_vis_rules_device_show" CASCADE;
  DROP TABLE "reusable_blocks_testimonials_vis_rules" CASCADE;
  DROP TABLE "reusable_blocks_faq_vis_rules_device_show" CASCADE;
  DROP TABLE "reusable_blocks_faq_vis_rules" CASCADE;
  DROP TABLE "reusable_blocks_cta_vis_rules_device_show" CASCADE;
  DROP TABLE "reusable_blocks_cta_vis_rules" CASCADE;
  DROP TABLE "reusable_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "reusable_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "_reusable_v_blocks_hero_vis_rules_device_show" CASCADE;
  DROP TABLE "_reusable_v_blocks_hero_vis_rules" CASCADE;
  DROP TABLE "_reusable_v_blocks_rich_text_vis_rules_device_show" CASCADE;
  DROP TABLE "_reusable_v_blocks_rich_text_vis_rules" CASCADE;
  DROP TABLE "_reusable_v_blocks_media_text_vis_rules_device_show" CASCADE;
  DROP TABLE "_reusable_v_blocks_media_text_vis_rules" CASCADE;
  DROP TABLE "_reusable_v_blocks_cards_vis_rules_device_show" CASCADE;
  DROP TABLE "_reusable_v_blocks_cards_vis_rules" CASCADE;
  DROP TABLE "_reusable_v_blocks_listing_vis_rules_device_show" CASCADE;
  DROP TABLE "_reusable_v_blocks_listing_vis_rules" CASCADE;
  DROP TABLE "_reusable_v_blocks_columns_vis_rules_device_show" CASCADE;
  DROP TABLE "_reusable_v_blocks_columns_vis_rules" CASCADE;
  DROP TABLE "_reusable_v_blocks_tabs_vis_rules_device_show" CASCADE;
  DROP TABLE "_reusable_v_blocks_tabs_vis_rules" CASCADE;
  DROP TABLE "_reusable_v_blocks_stats_vis_rules_device_show" CASCADE;
  DROP TABLE "_reusable_v_blocks_stats_vis_rules" CASCADE;
  DROP TABLE "_reusable_v_blocks_logos_vis_rules_device_show" CASCADE;
  DROP TABLE "_reusable_v_blocks_logos_vis_rules" CASCADE;
  DROP TABLE "_reusable_v_blocks_testimonials_vis_rules_device_show" CASCADE;
  DROP TABLE "_reusable_v_blocks_testimonials_vis_rules" CASCADE;
  DROP TABLE "_reusable_v_blocks_faq_vis_rules_device_show" CASCADE;
  DROP TABLE "_reusable_v_blocks_faq_vis_rules" CASCADE;
  DROP TABLE "_reusable_v_blocks_cta_vis_rules_device_show" CASCADE;
  DROP TABLE "_reusable_v_blocks_cta_vis_rules" CASCADE;
  DROP TABLE "_reusable_v_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "_reusable_v_blocks_dynamic_field_vis_rules" CASCADE;
  DROP TABLE "cpt_defaults_blocks_hero_vis_rules_device_show" CASCADE;
  DROP TABLE "cpt_defaults_blocks_hero_vis_rules" CASCADE;
  DROP TABLE "cpt_defaults_blocks_rich_text_vis_rules_device_show" CASCADE;
  DROP TABLE "cpt_defaults_blocks_rich_text_vis_rules" CASCADE;
  DROP TABLE "cpt_defaults_blocks_media_text_vis_rules_device_show" CASCADE;
  DROP TABLE "cpt_defaults_blocks_media_text_vis_rules" CASCADE;
  DROP TABLE "cpt_defaults_blocks_cards_vis_rules_device_show" CASCADE;
  DROP TABLE "cpt_defaults_blocks_cards_vis_rules" CASCADE;
  DROP TABLE "cpt_defaults_blocks_listing_vis_rules_device_show" CASCADE;
  DROP TABLE "cpt_defaults_blocks_listing_vis_rules" CASCADE;
  DROP TABLE "cpt_defaults_blocks_columns_vis_rules_device_show" CASCADE;
  DROP TABLE "cpt_defaults_blocks_columns_vis_rules" CASCADE;
  DROP TABLE "cpt_defaults_blocks_tabs_vis_rules_device_show" CASCADE;
  DROP TABLE "cpt_defaults_blocks_tabs_vis_rules" CASCADE;
  DROP TABLE "cpt_defaults_blocks_stats_vis_rules_device_show" CASCADE;
  DROP TABLE "cpt_defaults_blocks_stats_vis_rules" CASCADE;
  DROP TABLE "cpt_defaults_blocks_logos_vis_rules_device_show" CASCADE;
  DROP TABLE "cpt_defaults_blocks_logos_vis_rules" CASCADE;
  DROP TABLE "cpt_defaults_blocks_testimonials_vis_rules_device_show" CASCADE;
  DROP TABLE "cpt_defaults_blocks_testimonials_vis_rules" CASCADE;
  DROP TABLE "cpt_defaults_blocks_faq_vis_rules_device_show" CASCADE;
  DROP TABLE "cpt_defaults_blocks_faq_vis_rules" CASCADE;
  DROP TABLE "cpt_defaults_blocks_cta_vis_rules_device_show" CASCADE;
  DROP TABLE "cpt_defaults_blocks_cta_vis_rules" CASCADE;
  DROP TABLE "cpt_defaults_blocks_dynamic_field_vis_rules_device_show" CASCADE;
  DROP TABLE "cpt_defaults_blocks_dynamic_field_vis_rules" CASCADE;
  ALTER TABLE "pages_blocks_hero" DROP COLUMN "vis_match";
  ALTER TABLE "pages_blocks_rich_text" DROP COLUMN "vis_match";
  ALTER TABLE "pages_blocks_media_text" DROP COLUMN "vis_match";
  ALTER TABLE "pages_blocks_cards" DROP COLUMN "vis_match";
  ALTER TABLE "pages_blocks_listing" DROP COLUMN "vis_match";
  ALTER TABLE "pages_blocks_columns" DROP COLUMN "vis_match";
  ALTER TABLE "pages_blocks_tabs" DROP COLUMN "vis_match";
  ALTER TABLE "pages_blocks_stats" DROP COLUMN "vis_match";
  ALTER TABLE "pages_blocks_logos" DROP COLUMN "vis_match";
  ALTER TABLE "pages_blocks_testimonials" DROP COLUMN "vis_match";
  ALTER TABLE "pages_blocks_faq" DROP COLUMN "vis_match";
  ALTER TABLE "pages_blocks_cta" DROP COLUMN "vis_match";
  ALTER TABLE "pages_blocks_dynamic_field" DROP COLUMN "vis_match";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN "vis_match";
  ALTER TABLE "_pages_v_blocks_rich_text" DROP COLUMN "vis_match";
  ALTER TABLE "_pages_v_blocks_media_text" DROP COLUMN "vis_match";
  ALTER TABLE "_pages_v_blocks_cards" DROP COLUMN "vis_match";
  ALTER TABLE "_pages_v_blocks_listing" DROP COLUMN "vis_match";
  ALTER TABLE "_pages_v_blocks_columns" DROP COLUMN "vis_match";
  ALTER TABLE "_pages_v_blocks_tabs" DROP COLUMN "vis_match";
  ALTER TABLE "_pages_v_blocks_stats" DROP COLUMN "vis_match";
  ALTER TABLE "_pages_v_blocks_logos" DROP COLUMN "vis_match";
  ALTER TABLE "_pages_v_blocks_testimonials" DROP COLUMN "vis_match";
  ALTER TABLE "_pages_v_blocks_faq" DROP COLUMN "vis_match";
  ALTER TABLE "_pages_v_blocks_cta" DROP COLUMN "vis_match";
  ALTER TABLE "_pages_v_blocks_dynamic_field" DROP COLUMN "vis_match";
  ALTER TABLE "posts_blocks_hero" DROP COLUMN "vis_match";
  ALTER TABLE "posts_blocks_rich_text" DROP COLUMN "vis_match";
  ALTER TABLE "posts_blocks_media_text" DROP COLUMN "vis_match";
  ALTER TABLE "posts_blocks_cards" DROP COLUMN "vis_match";
  ALTER TABLE "posts_blocks_listing" DROP COLUMN "vis_match";
  ALTER TABLE "posts_blocks_columns" DROP COLUMN "vis_match";
  ALTER TABLE "posts_blocks_tabs" DROP COLUMN "vis_match";
  ALTER TABLE "posts_blocks_stats" DROP COLUMN "vis_match";
  ALTER TABLE "posts_blocks_logos" DROP COLUMN "vis_match";
  ALTER TABLE "posts_blocks_testimonials" DROP COLUMN "vis_match";
  ALTER TABLE "posts_blocks_faq" DROP COLUMN "vis_match";
  ALTER TABLE "posts_blocks_cta" DROP COLUMN "vis_match";
  ALTER TABLE "posts_blocks_dynamic_field" DROP COLUMN "vis_match";
  ALTER TABLE "_posts_v_blocks_hero" DROP COLUMN "vis_match";
  ALTER TABLE "_posts_v_blocks_rich_text" DROP COLUMN "vis_match";
  ALTER TABLE "_posts_v_blocks_media_text" DROP COLUMN "vis_match";
  ALTER TABLE "_posts_v_blocks_cards" DROP COLUMN "vis_match";
  ALTER TABLE "_posts_v_blocks_listing" DROP COLUMN "vis_match";
  ALTER TABLE "_posts_v_blocks_columns" DROP COLUMN "vis_match";
  ALTER TABLE "_posts_v_blocks_tabs" DROP COLUMN "vis_match";
  ALTER TABLE "_posts_v_blocks_stats" DROP COLUMN "vis_match";
  ALTER TABLE "_posts_v_blocks_logos" DROP COLUMN "vis_match";
  ALTER TABLE "_posts_v_blocks_testimonials" DROP COLUMN "vis_match";
  ALTER TABLE "_posts_v_blocks_faq" DROP COLUMN "vis_match";
  ALTER TABLE "_posts_v_blocks_cta" DROP COLUMN "vis_match";
  ALTER TABLE "_posts_v_blocks_dynamic_field" DROP COLUMN "vis_match";
  ALTER TABLE "events_blocks_hero" DROP COLUMN "vis_match";
  ALTER TABLE "events_blocks_rich_text" DROP COLUMN "vis_match";
  ALTER TABLE "events_blocks_media_text" DROP COLUMN "vis_match";
  ALTER TABLE "events_blocks_cards" DROP COLUMN "vis_match";
  ALTER TABLE "events_blocks_listing" DROP COLUMN "vis_match";
  ALTER TABLE "events_blocks_columns" DROP COLUMN "vis_match";
  ALTER TABLE "events_blocks_tabs" DROP COLUMN "vis_match";
  ALTER TABLE "events_blocks_stats" DROP COLUMN "vis_match";
  ALTER TABLE "events_blocks_logos" DROP COLUMN "vis_match";
  ALTER TABLE "events_blocks_testimonials" DROP COLUMN "vis_match";
  ALTER TABLE "events_blocks_faq" DROP COLUMN "vis_match";
  ALTER TABLE "events_blocks_cta" DROP COLUMN "vis_match";
  ALTER TABLE "events_blocks_dynamic_field" DROP COLUMN "vis_match";
  ALTER TABLE "_events_v_blocks_hero" DROP COLUMN "vis_match";
  ALTER TABLE "_events_v_blocks_rich_text" DROP COLUMN "vis_match";
  ALTER TABLE "_events_v_blocks_media_text" DROP COLUMN "vis_match";
  ALTER TABLE "_events_v_blocks_cards" DROP COLUMN "vis_match";
  ALTER TABLE "_events_v_blocks_listing" DROP COLUMN "vis_match";
  ALTER TABLE "_events_v_blocks_columns" DROP COLUMN "vis_match";
  ALTER TABLE "_events_v_blocks_tabs" DROP COLUMN "vis_match";
  ALTER TABLE "_events_v_blocks_stats" DROP COLUMN "vis_match";
  ALTER TABLE "_events_v_blocks_logos" DROP COLUMN "vis_match";
  ALTER TABLE "_events_v_blocks_testimonials" DROP COLUMN "vis_match";
  ALTER TABLE "_events_v_blocks_faq" DROP COLUMN "vis_match";
  ALTER TABLE "_events_v_blocks_cta" DROP COLUMN "vis_match";
  ALTER TABLE "_events_v_blocks_dynamic_field" DROP COLUMN "vis_match";
  ALTER TABLE "resources_blocks_hero" DROP COLUMN "vis_match";
  ALTER TABLE "resources_blocks_rich_text" DROP COLUMN "vis_match";
  ALTER TABLE "resources_blocks_media_text" DROP COLUMN "vis_match";
  ALTER TABLE "resources_blocks_cards" DROP COLUMN "vis_match";
  ALTER TABLE "resources_blocks_listing" DROP COLUMN "vis_match";
  ALTER TABLE "resources_blocks_columns" DROP COLUMN "vis_match";
  ALTER TABLE "resources_blocks_tabs" DROP COLUMN "vis_match";
  ALTER TABLE "resources_blocks_stats" DROP COLUMN "vis_match";
  ALTER TABLE "resources_blocks_logos" DROP COLUMN "vis_match";
  ALTER TABLE "resources_blocks_testimonials" DROP COLUMN "vis_match";
  ALTER TABLE "resources_blocks_faq" DROP COLUMN "vis_match";
  ALTER TABLE "resources_blocks_cta" DROP COLUMN "vis_match";
  ALTER TABLE "resources_blocks_dynamic_field" DROP COLUMN "vis_match";
  ALTER TABLE "_resources_v_blocks_hero" DROP COLUMN "vis_match";
  ALTER TABLE "_resources_v_blocks_rich_text" DROP COLUMN "vis_match";
  ALTER TABLE "_resources_v_blocks_media_text" DROP COLUMN "vis_match";
  ALTER TABLE "_resources_v_blocks_cards" DROP COLUMN "vis_match";
  ALTER TABLE "_resources_v_blocks_listing" DROP COLUMN "vis_match";
  ALTER TABLE "_resources_v_blocks_columns" DROP COLUMN "vis_match";
  ALTER TABLE "_resources_v_blocks_tabs" DROP COLUMN "vis_match";
  ALTER TABLE "_resources_v_blocks_stats" DROP COLUMN "vis_match";
  ALTER TABLE "_resources_v_blocks_logos" DROP COLUMN "vis_match";
  ALTER TABLE "_resources_v_blocks_testimonials" DROP COLUMN "vis_match";
  ALTER TABLE "_resources_v_blocks_faq" DROP COLUMN "vis_match";
  ALTER TABLE "_resources_v_blocks_cta" DROP COLUMN "vis_match";
  ALTER TABLE "_resources_v_blocks_dynamic_field" DROP COLUMN "vis_match";
  ALTER TABLE "glossary_blocks_hero" DROP COLUMN "vis_match";
  ALTER TABLE "glossary_blocks_rich_text" DROP COLUMN "vis_match";
  ALTER TABLE "glossary_blocks_media_text" DROP COLUMN "vis_match";
  ALTER TABLE "glossary_blocks_cards" DROP COLUMN "vis_match";
  ALTER TABLE "glossary_blocks_listing" DROP COLUMN "vis_match";
  ALTER TABLE "glossary_blocks_columns" DROP COLUMN "vis_match";
  ALTER TABLE "glossary_blocks_tabs" DROP COLUMN "vis_match";
  ALTER TABLE "glossary_blocks_stats" DROP COLUMN "vis_match";
  ALTER TABLE "glossary_blocks_logos" DROP COLUMN "vis_match";
  ALTER TABLE "glossary_blocks_testimonials" DROP COLUMN "vis_match";
  ALTER TABLE "glossary_blocks_faq" DROP COLUMN "vis_match";
  ALTER TABLE "glossary_blocks_cta" DROP COLUMN "vis_match";
  ALTER TABLE "glossary_blocks_dynamic_field" DROP COLUMN "vis_match";
  ALTER TABLE "_glossary_v_blocks_hero" DROP COLUMN "vis_match";
  ALTER TABLE "_glossary_v_blocks_rich_text" DROP COLUMN "vis_match";
  ALTER TABLE "_glossary_v_blocks_media_text" DROP COLUMN "vis_match";
  ALTER TABLE "_glossary_v_blocks_cards" DROP COLUMN "vis_match";
  ALTER TABLE "_glossary_v_blocks_listing" DROP COLUMN "vis_match";
  ALTER TABLE "_glossary_v_blocks_columns" DROP COLUMN "vis_match";
  ALTER TABLE "_glossary_v_blocks_tabs" DROP COLUMN "vis_match";
  ALTER TABLE "_glossary_v_blocks_stats" DROP COLUMN "vis_match";
  ALTER TABLE "_glossary_v_blocks_logos" DROP COLUMN "vis_match";
  ALTER TABLE "_glossary_v_blocks_testimonials" DROP COLUMN "vis_match";
  ALTER TABLE "_glossary_v_blocks_faq" DROP COLUMN "vis_match";
  ALTER TABLE "_glossary_v_blocks_cta" DROP COLUMN "vis_match";
  ALTER TABLE "_glossary_v_blocks_dynamic_field" DROP COLUMN "vis_match";
  ALTER TABLE "people_blocks_hero" DROP COLUMN "vis_match";
  ALTER TABLE "people_blocks_rich_text" DROP COLUMN "vis_match";
  ALTER TABLE "people_blocks_media_text" DROP COLUMN "vis_match";
  ALTER TABLE "people_blocks_cards" DROP COLUMN "vis_match";
  ALTER TABLE "people_blocks_listing" DROP COLUMN "vis_match";
  ALTER TABLE "people_blocks_columns" DROP COLUMN "vis_match";
  ALTER TABLE "people_blocks_tabs" DROP COLUMN "vis_match";
  ALTER TABLE "people_blocks_stats" DROP COLUMN "vis_match";
  ALTER TABLE "people_blocks_logos" DROP COLUMN "vis_match";
  ALTER TABLE "people_blocks_testimonials" DROP COLUMN "vis_match";
  ALTER TABLE "people_blocks_faq" DROP COLUMN "vis_match";
  ALTER TABLE "people_blocks_cta" DROP COLUMN "vis_match";
  ALTER TABLE "people_blocks_dynamic_field" DROP COLUMN "vis_match";
  ALTER TABLE "_people_v_blocks_hero" DROP COLUMN "vis_match";
  ALTER TABLE "_people_v_blocks_rich_text" DROP COLUMN "vis_match";
  ALTER TABLE "_people_v_blocks_media_text" DROP COLUMN "vis_match";
  ALTER TABLE "_people_v_blocks_cards" DROP COLUMN "vis_match";
  ALTER TABLE "_people_v_blocks_listing" DROP COLUMN "vis_match";
  ALTER TABLE "_people_v_blocks_columns" DROP COLUMN "vis_match";
  ALTER TABLE "_people_v_blocks_tabs" DROP COLUMN "vis_match";
  ALTER TABLE "_people_v_blocks_stats" DROP COLUMN "vis_match";
  ALTER TABLE "_people_v_blocks_logos" DROP COLUMN "vis_match";
  ALTER TABLE "_people_v_blocks_testimonials" DROP COLUMN "vis_match";
  ALTER TABLE "_people_v_blocks_faq" DROP COLUMN "vis_match";
  ALTER TABLE "_people_v_blocks_cta" DROP COLUMN "vis_match";
  ALTER TABLE "_people_v_blocks_dynamic_field" DROP COLUMN "vis_match";
  ALTER TABLE "reusable_blocks_hero" DROP COLUMN "vis_match";
  ALTER TABLE "reusable_blocks_rich_text" DROP COLUMN "vis_match";
  ALTER TABLE "reusable_blocks_media_text" DROP COLUMN "vis_match";
  ALTER TABLE "reusable_blocks_cards" DROP COLUMN "vis_match";
  ALTER TABLE "reusable_blocks_listing" DROP COLUMN "vis_match";
  ALTER TABLE "reusable_blocks_columns" DROP COLUMN "vis_match";
  ALTER TABLE "reusable_blocks_tabs" DROP COLUMN "vis_match";
  ALTER TABLE "reusable_blocks_stats" DROP COLUMN "vis_match";
  ALTER TABLE "reusable_blocks_logos" DROP COLUMN "vis_match";
  ALTER TABLE "reusable_blocks_testimonials" DROP COLUMN "vis_match";
  ALTER TABLE "reusable_blocks_faq" DROP COLUMN "vis_match";
  ALTER TABLE "reusable_blocks_cta" DROP COLUMN "vis_match";
  ALTER TABLE "reusable_blocks_dynamic_field" DROP COLUMN "vis_match";
  ALTER TABLE "_reusable_v_blocks_hero" DROP COLUMN "vis_match";
  ALTER TABLE "_reusable_v_blocks_rich_text" DROP COLUMN "vis_match";
  ALTER TABLE "_reusable_v_blocks_media_text" DROP COLUMN "vis_match";
  ALTER TABLE "_reusable_v_blocks_cards" DROP COLUMN "vis_match";
  ALTER TABLE "_reusable_v_blocks_listing" DROP COLUMN "vis_match";
  ALTER TABLE "_reusable_v_blocks_columns" DROP COLUMN "vis_match";
  ALTER TABLE "_reusable_v_blocks_tabs" DROP COLUMN "vis_match";
  ALTER TABLE "_reusable_v_blocks_stats" DROP COLUMN "vis_match";
  ALTER TABLE "_reusable_v_blocks_logos" DROP COLUMN "vis_match";
  ALTER TABLE "_reusable_v_blocks_testimonials" DROP COLUMN "vis_match";
  ALTER TABLE "_reusable_v_blocks_faq" DROP COLUMN "vis_match";
  ALTER TABLE "_reusable_v_blocks_cta" DROP COLUMN "vis_match";
  ALTER TABLE "_reusable_v_blocks_dynamic_field" DROP COLUMN "vis_match";
  ALTER TABLE "cpt_defaults_blocks_hero" DROP COLUMN "vis_match";
  ALTER TABLE "cpt_defaults_blocks_rich_text" DROP COLUMN "vis_match";
  ALTER TABLE "cpt_defaults_blocks_media_text" DROP COLUMN "vis_match";
  ALTER TABLE "cpt_defaults_blocks_cards" DROP COLUMN "vis_match";
  ALTER TABLE "cpt_defaults_blocks_listing" DROP COLUMN "vis_match";
  ALTER TABLE "cpt_defaults_blocks_columns" DROP COLUMN "vis_match";
  ALTER TABLE "cpt_defaults_blocks_tabs" DROP COLUMN "vis_match";
  ALTER TABLE "cpt_defaults_blocks_stats" DROP COLUMN "vis_match";
  ALTER TABLE "cpt_defaults_blocks_logos" DROP COLUMN "vis_match";
  ALTER TABLE "cpt_defaults_blocks_testimonials" DROP COLUMN "vis_match";
  ALTER TABLE "cpt_defaults_blocks_faq" DROP COLUMN "vis_match";
  ALTER TABLE "cpt_defaults_blocks_cta" DROP COLUMN "vis_match";
  ALTER TABLE "cpt_defaults_blocks_dynamic_field" DROP COLUMN "vis_match";
  DROP TYPE "public"."enum_pages_blocks_hero_vis_rules_device_show";
  DROP TYPE "public"."enum_pages_blocks_hero_vis_rules_type";
  DROP TYPE "public"."enum_pages_blocks_hero_vis_rules_field_name";
  DROP TYPE "public"."enum_pages_blocks_hero_vis_rules_field_operator";
  DROP TYPE "public"."enum_pages_blocks_hero_vis_rules_items_type";
  DROP TYPE "public"."enum_pages_blocks_hero_vis_rules_items_when";
  DROP TYPE "public"."enum_pages_blocks_hero_vis_match";
  DROP TYPE "public"."enum_pages_blocks_rich_text_vis_rules_device_show";
  DROP TYPE "public"."enum_pages_blocks_rich_text_vis_rules_type";
  DROP TYPE "public"."enum_pages_blocks_rich_text_vis_rules_field_name";
  DROP TYPE "public"."enum_pages_blocks_rich_text_vis_rules_field_operator";
  DROP TYPE "public"."enum_pages_blocks_rich_text_vis_rules_items_type";
  DROP TYPE "public"."enum_pages_blocks_rich_text_vis_rules_items_when";
  DROP TYPE "public"."enum_pages_blocks_rich_text_vis_match";
  DROP TYPE "public"."enum_pages_blocks_media_text_vis_rules_device_show";
  DROP TYPE "public"."enum_pages_blocks_media_text_vis_rules_type";
  DROP TYPE "public"."enum_pages_blocks_media_text_vis_rules_field_name";
  DROP TYPE "public"."enum_pages_blocks_media_text_vis_rules_field_operator";
  DROP TYPE "public"."enum_pages_blocks_media_text_vis_rules_items_type";
  DROP TYPE "public"."enum_pages_blocks_media_text_vis_rules_items_when";
  DROP TYPE "public"."enum_pages_blocks_media_text_vis_match";
  DROP TYPE "public"."enum_pages_blocks_cards_vis_rules_device_show";
  DROP TYPE "public"."enum_pages_blocks_cards_vis_rules_type";
  DROP TYPE "public"."enum_pages_blocks_cards_vis_rules_field_name";
  DROP TYPE "public"."enum_pages_blocks_cards_vis_rules_field_operator";
  DROP TYPE "public"."enum_pages_blocks_cards_vis_rules_items_type";
  DROP TYPE "public"."enum_pages_blocks_cards_vis_rules_items_when";
  DROP TYPE "public"."enum_pages_blocks_cards_vis_match";
  DROP TYPE "public"."enum_pages_blocks_listing_vis_rules_device_show";
  DROP TYPE "public"."enum_pages_blocks_listing_vis_rules_type";
  DROP TYPE "public"."enum_pages_blocks_listing_vis_rules_field_name";
  DROP TYPE "public"."enum_pages_blocks_listing_vis_rules_field_operator";
  DROP TYPE "public"."enum_pages_blocks_listing_vis_rules_items_type";
  DROP TYPE "public"."enum_pages_blocks_listing_vis_rules_items_when";
  DROP TYPE "public"."enum_pages_blocks_listing_vis_match";
  DROP TYPE "public"."enum_pages_blocks_columns_vis_rules_device_show";
  DROP TYPE "public"."enum_pages_blocks_columns_vis_rules_type";
  DROP TYPE "public"."enum_pages_blocks_columns_vis_rules_field_name";
  DROP TYPE "public"."enum_pages_blocks_columns_vis_rules_field_operator";
  DROP TYPE "public"."enum_pages_blocks_columns_vis_rules_items_type";
  DROP TYPE "public"."enum_pages_blocks_columns_vis_rules_items_when";
  DROP TYPE "public"."enum_pages_blocks_columns_vis_match";
  DROP TYPE "public"."enum_pages_blocks_tabs_vis_rules_device_show";
  DROP TYPE "public"."enum_pages_blocks_tabs_vis_rules_type";
  DROP TYPE "public"."enum_pages_blocks_tabs_vis_rules_field_name";
  DROP TYPE "public"."enum_pages_blocks_tabs_vis_rules_field_operator";
  DROP TYPE "public"."enum_pages_blocks_tabs_vis_rules_items_type";
  DROP TYPE "public"."enum_pages_blocks_tabs_vis_rules_items_when";
  DROP TYPE "public"."enum_pages_blocks_tabs_vis_match";
  DROP TYPE "public"."enum_pages_blocks_stats_vis_rules_device_show";
  DROP TYPE "public"."enum_pages_blocks_stats_vis_rules_type";
  DROP TYPE "public"."enum_pages_blocks_stats_vis_rules_field_name";
  DROP TYPE "public"."enum_pages_blocks_stats_vis_rules_field_operator";
  DROP TYPE "public"."enum_pages_blocks_stats_vis_rules_items_type";
  DROP TYPE "public"."enum_pages_blocks_stats_vis_rules_items_when";
  DROP TYPE "public"."enum_pages_blocks_stats_vis_match";
  DROP TYPE "public"."enum_pages_blocks_logos_vis_rules_device_show";
  DROP TYPE "public"."enum_pages_blocks_logos_vis_rules_type";
  DROP TYPE "public"."enum_pages_blocks_logos_vis_rules_field_name";
  DROP TYPE "public"."enum_pages_blocks_logos_vis_rules_field_operator";
  DROP TYPE "public"."enum_pages_blocks_logos_vis_rules_items_type";
  DROP TYPE "public"."enum_pages_blocks_logos_vis_rules_items_when";
  DROP TYPE "public"."enum_pages_blocks_logos_vis_match";
  DROP TYPE "public"."enum_pages_blocks_testimonials_vis_rules_device_show";
  DROP TYPE "public"."enum_pages_blocks_testimonials_vis_rules_type";
  DROP TYPE "public"."enum_pages_blocks_testimonials_vis_rules_field_name";
  DROP TYPE "public"."enum_pages_blocks_testimonials_vis_rules_field_operator";
  DROP TYPE "public"."enum_pages_blocks_testimonials_vis_rules_items_type";
  DROP TYPE "public"."enum_pages_blocks_testimonials_vis_rules_items_when";
  DROP TYPE "public"."enum_pages_blocks_testimonials_vis_match";
  DROP TYPE "public"."enum_pages_blocks_faq_vis_rules_device_show";
  DROP TYPE "public"."enum_pages_blocks_faq_vis_rules_type";
  DROP TYPE "public"."enum_pages_blocks_faq_vis_rules_field_name";
  DROP TYPE "public"."enum_pages_blocks_faq_vis_rules_field_operator";
  DROP TYPE "public"."enum_pages_blocks_faq_vis_rules_items_type";
  DROP TYPE "public"."enum_pages_blocks_faq_vis_rules_items_when";
  DROP TYPE "public"."enum_pages_blocks_faq_vis_match";
  DROP TYPE "public"."enum_pages_blocks_cta_vis_rules_device_show";
  DROP TYPE "public"."enum_pages_blocks_cta_vis_rules_type";
  DROP TYPE "public"."enum_pages_blocks_cta_vis_rules_field_name";
  DROP TYPE "public"."enum_pages_blocks_cta_vis_rules_field_operator";
  DROP TYPE "public"."enum_pages_blocks_cta_vis_rules_items_type";
  DROP TYPE "public"."enum_pages_blocks_cta_vis_rules_items_when";
  DROP TYPE "public"."enum_pages_blocks_cta_vis_match";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum__pages_v_blocks_hero_vis_rules_device_show";
  DROP TYPE "public"."enum__pages_v_blocks_hero_vis_rules_type";
  DROP TYPE "public"."enum__pages_v_blocks_hero_vis_rules_field_name";
  DROP TYPE "public"."enum__pages_v_blocks_hero_vis_rules_field_operator";
  DROP TYPE "public"."enum__pages_v_blocks_hero_vis_rules_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_hero_vis_rules_items_when";
  DROP TYPE "public"."enum__pages_v_blocks_hero_vis_match";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_vis_rules_device_show";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_vis_rules_type";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_vis_rules_field_name";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_vis_rules_field_operator";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_vis_rules_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_vis_rules_items_when";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_vis_match";
  DROP TYPE "public"."enum__pages_v_blocks_media_text_vis_rules_device_show";
  DROP TYPE "public"."enum__pages_v_blocks_media_text_vis_rules_type";
  DROP TYPE "public"."enum__pages_v_blocks_media_text_vis_rules_field_name";
  DROP TYPE "public"."enum__pages_v_blocks_media_text_vis_rules_field_operator";
  DROP TYPE "public"."enum__pages_v_blocks_media_text_vis_rules_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_media_text_vis_rules_items_when";
  DROP TYPE "public"."enum__pages_v_blocks_media_text_vis_match";
  DROP TYPE "public"."enum__pages_v_blocks_cards_vis_rules_device_show";
  DROP TYPE "public"."enum__pages_v_blocks_cards_vis_rules_type";
  DROP TYPE "public"."enum__pages_v_blocks_cards_vis_rules_field_name";
  DROP TYPE "public"."enum__pages_v_blocks_cards_vis_rules_field_operator";
  DROP TYPE "public"."enum__pages_v_blocks_cards_vis_rules_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_cards_vis_rules_items_when";
  DROP TYPE "public"."enum__pages_v_blocks_cards_vis_match";
  DROP TYPE "public"."enum__pages_v_blocks_listing_vis_rules_device_show";
  DROP TYPE "public"."enum__pages_v_blocks_listing_vis_rules_type";
  DROP TYPE "public"."enum__pages_v_blocks_listing_vis_rules_field_name";
  DROP TYPE "public"."enum__pages_v_blocks_listing_vis_rules_field_operator";
  DROP TYPE "public"."enum__pages_v_blocks_listing_vis_rules_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_listing_vis_rules_items_when";
  DROP TYPE "public"."enum__pages_v_blocks_listing_vis_match";
  DROP TYPE "public"."enum__pages_v_blocks_columns_vis_rules_device_show";
  DROP TYPE "public"."enum__pages_v_blocks_columns_vis_rules_type";
  DROP TYPE "public"."enum__pages_v_blocks_columns_vis_rules_field_name";
  DROP TYPE "public"."enum__pages_v_blocks_columns_vis_rules_field_operator";
  DROP TYPE "public"."enum__pages_v_blocks_columns_vis_rules_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_columns_vis_rules_items_when";
  DROP TYPE "public"."enum__pages_v_blocks_columns_vis_match";
  DROP TYPE "public"."enum__pages_v_blocks_tabs_vis_rules_device_show";
  DROP TYPE "public"."enum__pages_v_blocks_tabs_vis_rules_type";
  DROP TYPE "public"."enum__pages_v_blocks_tabs_vis_rules_field_name";
  DROP TYPE "public"."enum__pages_v_blocks_tabs_vis_rules_field_operator";
  DROP TYPE "public"."enum__pages_v_blocks_tabs_vis_rules_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_tabs_vis_rules_items_when";
  DROP TYPE "public"."enum__pages_v_blocks_tabs_vis_match";
  DROP TYPE "public"."enum__pages_v_blocks_stats_vis_rules_device_show";
  DROP TYPE "public"."enum__pages_v_blocks_stats_vis_rules_type";
  DROP TYPE "public"."enum__pages_v_blocks_stats_vis_rules_field_name";
  DROP TYPE "public"."enum__pages_v_blocks_stats_vis_rules_field_operator";
  DROP TYPE "public"."enum__pages_v_blocks_stats_vis_rules_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_stats_vis_rules_items_when";
  DROP TYPE "public"."enum__pages_v_blocks_stats_vis_match";
  DROP TYPE "public"."enum__pages_v_blocks_logos_vis_rules_device_show";
  DROP TYPE "public"."enum__pages_v_blocks_logos_vis_rules_type";
  DROP TYPE "public"."enum__pages_v_blocks_logos_vis_rules_field_name";
  DROP TYPE "public"."enum__pages_v_blocks_logos_vis_rules_field_operator";
  DROP TYPE "public"."enum__pages_v_blocks_logos_vis_rules_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_logos_vis_rules_items_when";
  DROP TYPE "public"."enum__pages_v_blocks_logos_vis_match";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_vis_rules_device_show";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_vis_rules_type";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_vis_rules_field_name";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_vis_rules_field_operator";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_vis_rules_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_vis_rules_items_when";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_vis_match";
  DROP TYPE "public"."enum__pages_v_blocks_faq_vis_rules_device_show";
  DROP TYPE "public"."enum__pages_v_blocks_faq_vis_rules_type";
  DROP TYPE "public"."enum__pages_v_blocks_faq_vis_rules_field_name";
  DROP TYPE "public"."enum__pages_v_blocks_faq_vis_rules_field_operator";
  DROP TYPE "public"."enum__pages_v_blocks_faq_vis_rules_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_faq_vis_rules_items_when";
  DROP TYPE "public"."enum__pages_v_blocks_faq_vis_match";
  DROP TYPE "public"."enum__pages_v_blocks_cta_vis_rules_device_show";
  DROP TYPE "public"."enum__pages_v_blocks_cta_vis_rules_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_vis_rules_field_name";
  DROP TYPE "public"."enum__pages_v_blocks_cta_vis_rules_field_operator";
  DROP TYPE "public"."enum__pages_v_blocks_cta_vis_rules_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_vis_rules_items_when";
  DROP TYPE "public"."enum__pages_v_blocks_cta_vis_match";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum_posts_blocks_hero_vis_rules_device_show";
  DROP TYPE "public"."enum_posts_blocks_hero_vis_rules_type";
  DROP TYPE "public"."enum_posts_blocks_hero_vis_rules_field_name";
  DROP TYPE "public"."enum_posts_blocks_hero_vis_rules_field_operator";
  DROP TYPE "public"."enum_posts_blocks_hero_vis_rules_items_type";
  DROP TYPE "public"."enum_posts_blocks_hero_vis_rules_items_when";
  DROP TYPE "public"."enum_posts_blocks_hero_vis_match";
  DROP TYPE "public"."enum_posts_blocks_rich_text_vis_rules_device_show";
  DROP TYPE "public"."enum_posts_blocks_rich_text_vis_rules_type";
  DROP TYPE "public"."enum_posts_blocks_rich_text_vis_rules_field_name";
  DROP TYPE "public"."enum_posts_blocks_rich_text_vis_rules_field_operator";
  DROP TYPE "public"."enum_posts_blocks_rich_text_vis_rules_items_type";
  DROP TYPE "public"."enum_posts_blocks_rich_text_vis_rules_items_when";
  DROP TYPE "public"."enum_posts_blocks_rich_text_vis_match";
  DROP TYPE "public"."enum_posts_blocks_media_text_vis_rules_device_show";
  DROP TYPE "public"."enum_posts_blocks_media_text_vis_rules_type";
  DROP TYPE "public"."enum_posts_blocks_media_text_vis_rules_field_name";
  DROP TYPE "public"."enum_posts_blocks_media_text_vis_rules_field_operator";
  DROP TYPE "public"."enum_posts_blocks_media_text_vis_rules_items_type";
  DROP TYPE "public"."enum_posts_blocks_media_text_vis_rules_items_when";
  DROP TYPE "public"."enum_posts_blocks_media_text_vis_match";
  DROP TYPE "public"."enum_posts_blocks_cards_vis_rules_device_show";
  DROP TYPE "public"."enum_posts_blocks_cards_vis_rules_type";
  DROP TYPE "public"."enum_posts_blocks_cards_vis_rules_field_name";
  DROP TYPE "public"."enum_posts_blocks_cards_vis_rules_field_operator";
  DROP TYPE "public"."enum_posts_blocks_cards_vis_rules_items_type";
  DROP TYPE "public"."enum_posts_blocks_cards_vis_rules_items_when";
  DROP TYPE "public"."enum_posts_blocks_cards_vis_match";
  DROP TYPE "public"."enum_posts_blocks_listing_vis_rules_device_show";
  DROP TYPE "public"."enum_posts_blocks_listing_vis_rules_type";
  DROP TYPE "public"."enum_posts_blocks_listing_vis_rules_field_name";
  DROP TYPE "public"."enum_posts_blocks_listing_vis_rules_field_operator";
  DROP TYPE "public"."enum_posts_blocks_listing_vis_rules_items_type";
  DROP TYPE "public"."enum_posts_blocks_listing_vis_rules_items_when";
  DROP TYPE "public"."enum_posts_blocks_listing_vis_match";
  DROP TYPE "public"."enum_posts_blocks_columns_vis_rules_device_show";
  DROP TYPE "public"."enum_posts_blocks_columns_vis_rules_type";
  DROP TYPE "public"."enum_posts_blocks_columns_vis_rules_field_name";
  DROP TYPE "public"."enum_posts_blocks_columns_vis_rules_field_operator";
  DROP TYPE "public"."enum_posts_blocks_columns_vis_rules_items_type";
  DROP TYPE "public"."enum_posts_blocks_columns_vis_rules_items_when";
  DROP TYPE "public"."enum_posts_blocks_columns_vis_match";
  DROP TYPE "public"."enum_posts_blocks_tabs_vis_rules_device_show";
  DROP TYPE "public"."enum_posts_blocks_tabs_vis_rules_type";
  DROP TYPE "public"."enum_posts_blocks_tabs_vis_rules_field_name";
  DROP TYPE "public"."enum_posts_blocks_tabs_vis_rules_field_operator";
  DROP TYPE "public"."enum_posts_blocks_tabs_vis_rules_items_type";
  DROP TYPE "public"."enum_posts_blocks_tabs_vis_rules_items_when";
  DROP TYPE "public"."enum_posts_blocks_tabs_vis_match";
  DROP TYPE "public"."enum_posts_blocks_stats_vis_rules_device_show";
  DROP TYPE "public"."enum_posts_blocks_stats_vis_rules_type";
  DROP TYPE "public"."enum_posts_blocks_stats_vis_rules_field_name";
  DROP TYPE "public"."enum_posts_blocks_stats_vis_rules_field_operator";
  DROP TYPE "public"."enum_posts_blocks_stats_vis_rules_items_type";
  DROP TYPE "public"."enum_posts_blocks_stats_vis_rules_items_when";
  DROP TYPE "public"."enum_posts_blocks_stats_vis_match";
  DROP TYPE "public"."enum_posts_blocks_logos_vis_rules_device_show";
  DROP TYPE "public"."enum_posts_blocks_logos_vis_rules_type";
  DROP TYPE "public"."enum_posts_blocks_logos_vis_rules_field_name";
  DROP TYPE "public"."enum_posts_blocks_logos_vis_rules_field_operator";
  DROP TYPE "public"."enum_posts_blocks_logos_vis_rules_items_type";
  DROP TYPE "public"."enum_posts_blocks_logos_vis_rules_items_when";
  DROP TYPE "public"."enum_posts_blocks_logos_vis_match";
  DROP TYPE "public"."enum_posts_blocks_testimonials_vis_rules_device_show";
  DROP TYPE "public"."enum_posts_blocks_testimonials_vis_rules_type";
  DROP TYPE "public"."enum_posts_blocks_testimonials_vis_rules_field_name";
  DROP TYPE "public"."enum_posts_blocks_testimonials_vis_rules_field_operator";
  DROP TYPE "public"."enum_posts_blocks_testimonials_vis_rules_items_type";
  DROP TYPE "public"."enum_posts_blocks_testimonials_vis_rules_items_when";
  DROP TYPE "public"."enum_posts_blocks_testimonials_vis_match";
  DROP TYPE "public"."enum_posts_blocks_faq_vis_rules_device_show";
  DROP TYPE "public"."enum_posts_blocks_faq_vis_rules_type";
  DROP TYPE "public"."enum_posts_blocks_faq_vis_rules_field_name";
  DROP TYPE "public"."enum_posts_blocks_faq_vis_rules_field_operator";
  DROP TYPE "public"."enum_posts_blocks_faq_vis_rules_items_type";
  DROP TYPE "public"."enum_posts_blocks_faq_vis_rules_items_when";
  DROP TYPE "public"."enum_posts_blocks_faq_vis_match";
  DROP TYPE "public"."enum_posts_blocks_cta_vis_rules_device_show";
  DROP TYPE "public"."enum_posts_blocks_cta_vis_rules_type";
  DROP TYPE "public"."enum_posts_blocks_cta_vis_rules_field_name";
  DROP TYPE "public"."enum_posts_blocks_cta_vis_rules_field_operator";
  DROP TYPE "public"."enum_posts_blocks_cta_vis_rules_items_type";
  DROP TYPE "public"."enum_posts_blocks_cta_vis_rules_items_when";
  DROP TYPE "public"."enum_posts_blocks_cta_vis_match";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum__posts_v_blocks_hero_vis_rules_device_show";
  DROP TYPE "public"."enum__posts_v_blocks_hero_vis_rules_type";
  DROP TYPE "public"."enum__posts_v_blocks_hero_vis_rules_field_name";
  DROP TYPE "public"."enum__posts_v_blocks_hero_vis_rules_field_operator";
  DROP TYPE "public"."enum__posts_v_blocks_hero_vis_rules_items_type";
  DROP TYPE "public"."enum__posts_v_blocks_hero_vis_rules_items_when";
  DROP TYPE "public"."enum__posts_v_blocks_hero_vis_match";
  DROP TYPE "public"."enum__posts_v_blocks_rich_text_vis_rules_device_show";
  DROP TYPE "public"."enum__posts_v_blocks_rich_text_vis_rules_type";
  DROP TYPE "public"."enum__posts_v_blocks_rich_text_vis_rules_field_name";
  DROP TYPE "public"."enum__posts_v_blocks_rich_text_vis_rules_field_operator";
  DROP TYPE "public"."enum__posts_v_blocks_rich_text_vis_rules_items_type";
  DROP TYPE "public"."enum__posts_v_blocks_rich_text_vis_rules_items_when";
  DROP TYPE "public"."enum__posts_v_blocks_rich_text_vis_match";
  DROP TYPE "public"."enum__posts_v_blocks_media_text_vis_rules_device_show";
  DROP TYPE "public"."enum__posts_v_blocks_media_text_vis_rules_type";
  DROP TYPE "public"."enum__posts_v_blocks_media_text_vis_rules_field_name";
  DROP TYPE "public"."enum__posts_v_blocks_media_text_vis_rules_field_operator";
  DROP TYPE "public"."enum__posts_v_blocks_media_text_vis_rules_items_type";
  DROP TYPE "public"."enum__posts_v_blocks_media_text_vis_rules_items_when";
  DROP TYPE "public"."enum__posts_v_blocks_media_text_vis_match";
  DROP TYPE "public"."enum__posts_v_blocks_cards_vis_rules_device_show";
  DROP TYPE "public"."enum__posts_v_blocks_cards_vis_rules_type";
  DROP TYPE "public"."enum__posts_v_blocks_cards_vis_rules_field_name";
  DROP TYPE "public"."enum__posts_v_blocks_cards_vis_rules_field_operator";
  DROP TYPE "public"."enum__posts_v_blocks_cards_vis_rules_items_type";
  DROP TYPE "public"."enum__posts_v_blocks_cards_vis_rules_items_when";
  DROP TYPE "public"."enum__posts_v_blocks_cards_vis_match";
  DROP TYPE "public"."enum__posts_v_blocks_listing_vis_rules_device_show";
  DROP TYPE "public"."enum__posts_v_blocks_listing_vis_rules_type";
  DROP TYPE "public"."enum__posts_v_blocks_listing_vis_rules_field_name";
  DROP TYPE "public"."enum__posts_v_blocks_listing_vis_rules_field_operator";
  DROP TYPE "public"."enum__posts_v_blocks_listing_vis_rules_items_type";
  DROP TYPE "public"."enum__posts_v_blocks_listing_vis_rules_items_when";
  DROP TYPE "public"."enum__posts_v_blocks_listing_vis_match";
  DROP TYPE "public"."enum__posts_v_blocks_columns_vis_rules_device_show";
  DROP TYPE "public"."enum__posts_v_blocks_columns_vis_rules_type";
  DROP TYPE "public"."enum__posts_v_blocks_columns_vis_rules_field_name";
  DROP TYPE "public"."enum__posts_v_blocks_columns_vis_rules_field_operator";
  DROP TYPE "public"."enum__posts_v_blocks_columns_vis_rules_items_type";
  DROP TYPE "public"."enum__posts_v_blocks_columns_vis_rules_items_when";
  DROP TYPE "public"."enum__posts_v_blocks_columns_vis_match";
  DROP TYPE "public"."enum__posts_v_blocks_tabs_vis_rules_device_show";
  DROP TYPE "public"."enum__posts_v_blocks_tabs_vis_rules_type";
  DROP TYPE "public"."enum__posts_v_blocks_tabs_vis_rules_field_name";
  DROP TYPE "public"."enum__posts_v_blocks_tabs_vis_rules_field_operator";
  DROP TYPE "public"."enum__posts_v_blocks_tabs_vis_rules_items_type";
  DROP TYPE "public"."enum__posts_v_blocks_tabs_vis_rules_items_when";
  DROP TYPE "public"."enum__posts_v_blocks_tabs_vis_match";
  DROP TYPE "public"."enum__posts_v_blocks_stats_vis_rules_device_show";
  DROP TYPE "public"."enum__posts_v_blocks_stats_vis_rules_type";
  DROP TYPE "public"."enum__posts_v_blocks_stats_vis_rules_field_name";
  DROP TYPE "public"."enum__posts_v_blocks_stats_vis_rules_field_operator";
  DROP TYPE "public"."enum__posts_v_blocks_stats_vis_rules_items_type";
  DROP TYPE "public"."enum__posts_v_blocks_stats_vis_rules_items_when";
  DROP TYPE "public"."enum__posts_v_blocks_stats_vis_match";
  DROP TYPE "public"."enum__posts_v_blocks_logos_vis_rules_device_show";
  DROP TYPE "public"."enum__posts_v_blocks_logos_vis_rules_type";
  DROP TYPE "public"."enum__posts_v_blocks_logos_vis_rules_field_name";
  DROP TYPE "public"."enum__posts_v_blocks_logos_vis_rules_field_operator";
  DROP TYPE "public"."enum__posts_v_blocks_logos_vis_rules_items_type";
  DROP TYPE "public"."enum__posts_v_blocks_logos_vis_rules_items_when";
  DROP TYPE "public"."enum__posts_v_blocks_logos_vis_match";
  DROP TYPE "public"."enum__posts_v_blocks_testimonials_vis_rules_device_show";
  DROP TYPE "public"."enum__posts_v_blocks_testimonials_vis_rules_type";
  DROP TYPE "public"."enum__posts_v_blocks_testimonials_vis_rules_field_name";
  DROP TYPE "public"."enum__posts_v_blocks_testimonials_vis_rules_field_operator";
  DROP TYPE "public"."enum__posts_v_blocks_testimonials_vis_rules_items_type";
  DROP TYPE "public"."enum__posts_v_blocks_testimonials_vis_rules_items_when";
  DROP TYPE "public"."enum__posts_v_blocks_testimonials_vis_match";
  DROP TYPE "public"."enum__posts_v_blocks_faq_vis_rules_device_show";
  DROP TYPE "public"."enum__posts_v_blocks_faq_vis_rules_type";
  DROP TYPE "public"."enum__posts_v_blocks_faq_vis_rules_field_name";
  DROP TYPE "public"."enum__posts_v_blocks_faq_vis_rules_field_operator";
  DROP TYPE "public"."enum__posts_v_blocks_faq_vis_rules_items_type";
  DROP TYPE "public"."enum__posts_v_blocks_faq_vis_rules_items_when";
  DROP TYPE "public"."enum__posts_v_blocks_faq_vis_match";
  DROP TYPE "public"."enum__posts_v_blocks_cta_vis_rules_device_show";
  DROP TYPE "public"."enum__posts_v_blocks_cta_vis_rules_type";
  DROP TYPE "public"."enum__posts_v_blocks_cta_vis_rules_field_name";
  DROP TYPE "public"."enum__posts_v_blocks_cta_vis_rules_field_operator";
  DROP TYPE "public"."enum__posts_v_blocks_cta_vis_rules_items_type";
  DROP TYPE "public"."enum__posts_v_blocks_cta_vis_rules_items_when";
  DROP TYPE "public"."enum__posts_v_blocks_cta_vis_match";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum_events_blocks_hero_vis_rules_device_show";
  DROP TYPE "public"."enum_events_blocks_hero_vis_rules_type";
  DROP TYPE "public"."enum_events_blocks_hero_vis_rules_field_name";
  DROP TYPE "public"."enum_events_blocks_hero_vis_rules_field_operator";
  DROP TYPE "public"."enum_events_blocks_hero_vis_rules_items_type";
  DROP TYPE "public"."enum_events_blocks_hero_vis_rules_items_when";
  DROP TYPE "public"."enum_events_blocks_hero_vis_match";
  DROP TYPE "public"."enum_events_blocks_rich_text_vis_rules_device_show";
  DROP TYPE "public"."enum_events_blocks_rich_text_vis_rules_type";
  DROP TYPE "public"."enum_events_blocks_rich_text_vis_rules_field_name";
  DROP TYPE "public"."enum_events_blocks_rich_text_vis_rules_field_operator";
  DROP TYPE "public"."enum_events_blocks_rich_text_vis_rules_items_type";
  DROP TYPE "public"."enum_events_blocks_rich_text_vis_rules_items_when";
  DROP TYPE "public"."enum_events_blocks_rich_text_vis_match";
  DROP TYPE "public"."enum_events_blocks_media_text_vis_rules_device_show";
  DROP TYPE "public"."enum_events_blocks_media_text_vis_rules_type";
  DROP TYPE "public"."enum_events_blocks_media_text_vis_rules_field_name";
  DROP TYPE "public"."enum_events_blocks_media_text_vis_rules_field_operator";
  DROP TYPE "public"."enum_events_blocks_media_text_vis_rules_items_type";
  DROP TYPE "public"."enum_events_blocks_media_text_vis_rules_items_when";
  DROP TYPE "public"."enum_events_blocks_media_text_vis_match";
  DROP TYPE "public"."enum_events_blocks_cards_vis_rules_device_show";
  DROP TYPE "public"."enum_events_blocks_cards_vis_rules_type";
  DROP TYPE "public"."enum_events_blocks_cards_vis_rules_field_name";
  DROP TYPE "public"."enum_events_blocks_cards_vis_rules_field_operator";
  DROP TYPE "public"."enum_events_blocks_cards_vis_rules_items_type";
  DROP TYPE "public"."enum_events_blocks_cards_vis_rules_items_when";
  DROP TYPE "public"."enum_events_blocks_cards_vis_match";
  DROP TYPE "public"."enum_events_blocks_listing_vis_rules_device_show";
  DROP TYPE "public"."enum_events_blocks_listing_vis_rules_type";
  DROP TYPE "public"."enum_events_blocks_listing_vis_rules_field_name";
  DROP TYPE "public"."enum_events_blocks_listing_vis_rules_field_operator";
  DROP TYPE "public"."enum_events_blocks_listing_vis_rules_items_type";
  DROP TYPE "public"."enum_events_blocks_listing_vis_rules_items_when";
  DROP TYPE "public"."enum_events_blocks_listing_vis_match";
  DROP TYPE "public"."enum_events_blocks_columns_vis_rules_device_show";
  DROP TYPE "public"."enum_events_blocks_columns_vis_rules_type";
  DROP TYPE "public"."enum_events_blocks_columns_vis_rules_field_name";
  DROP TYPE "public"."enum_events_blocks_columns_vis_rules_field_operator";
  DROP TYPE "public"."enum_events_blocks_columns_vis_rules_items_type";
  DROP TYPE "public"."enum_events_blocks_columns_vis_rules_items_when";
  DROP TYPE "public"."enum_events_blocks_columns_vis_match";
  DROP TYPE "public"."enum_events_blocks_tabs_vis_rules_device_show";
  DROP TYPE "public"."enum_events_blocks_tabs_vis_rules_type";
  DROP TYPE "public"."enum_events_blocks_tabs_vis_rules_field_name";
  DROP TYPE "public"."enum_events_blocks_tabs_vis_rules_field_operator";
  DROP TYPE "public"."enum_events_blocks_tabs_vis_rules_items_type";
  DROP TYPE "public"."enum_events_blocks_tabs_vis_rules_items_when";
  DROP TYPE "public"."enum_events_blocks_tabs_vis_match";
  DROP TYPE "public"."enum_events_blocks_stats_vis_rules_device_show";
  DROP TYPE "public"."enum_events_blocks_stats_vis_rules_type";
  DROP TYPE "public"."enum_events_blocks_stats_vis_rules_field_name";
  DROP TYPE "public"."enum_events_blocks_stats_vis_rules_field_operator";
  DROP TYPE "public"."enum_events_blocks_stats_vis_rules_items_type";
  DROP TYPE "public"."enum_events_blocks_stats_vis_rules_items_when";
  DROP TYPE "public"."enum_events_blocks_stats_vis_match";
  DROP TYPE "public"."enum_events_blocks_logos_vis_rules_device_show";
  DROP TYPE "public"."enum_events_blocks_logos_vis_rules_type";
  DROP TYPE "public"."enum_events_blocks_logos_vis_rules_field_name";
  DROP TYPE "public"."enum_events_blocks_logos_vis_rules_field_operator";
  DROP TYPE "public"."enum_events_blocks_logos_vis_rules_items_type";
  DROP TYPE "public"."enum_events_blocks_logos_vis_rules_items_when";
  DROP TYPE "public"."enum_events_blocks_logos_vis_match";
  DROP TYPE "public"."enum_events_blocks_testimonials_vis_rules_device_show";
  DROP TYPE "public"."enum_events_blocks_testimonials_vis_rules_type";
  DROP TYPE "public"."enum_events_blocks_testimonials_vis_rules_field_name";
  DROP TYPE "public"."enum_events_blocks_testimonials_vis_rules_field_operator";
  DROP TYPE "public"."enum_events_blocks_testimonials_vis_rules_items_type";
  DROP TYPE "public"."enum_events_blocks_testimonials_vis_rules_items_when";
  DROP TYPE "public"."enum_events_blocks_testimonials_vis_match";
  DROP TYPE "public"."enum_events_blocks_faq_vis_rules_device_show";
  DROP TYPE "public"."enum_events_blocks_faq_vis_rules_type";
  DROP TYPE "public"."enum_events_blocks_faq_vis_rules_field_name";
  DROP TYPE "public"."enum_events_blocks_faq_vis_rules_field_operator";
  DROP TYPE "public"."enum_events_blocks_faq_vis_rules_items_type";
  DROP TYPE "public"."enum_events_blocks_faq_vis_rules_items_when";
  DROP TYPE "public"."enum_events_blocks_faq_vis_match";
  DROP TYPE "public"."enum_events_blocks_cta_vis_rules_device_show";
  DROP TYPE "public"."enum_events_blocks_cta_vis_rules_type";
  DROP TYPE "public"."enum_events_blocks_cta_vis_rules_field_name";
  DROP TYPE "public"."enum_events_blocks_cta_vis_rules_field_operator";
  DROP TYPE "public"."enum_events_blocks_cta_vis_rules_items_type";
  DROP TYPE "public"."enum_events_blocks_cta_vis_rules_items_when";
  DROP TYPE "public"."enum_events_blocks_cta_vis_match";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum__events_v_blocks_hero_vis_rules_device_show";
  DROP TYPE "public"."enum__events_v_blocks_hero_vis_rules_type";
  DROP TYPE "public"."enum__events_v_blocks_hero_vis_rules_field_name";
  DROP TYPE "public"."enum__events_v_blocks_hero_vis_rules_field_operator";
  DROP TYPE "public"."enum__events_v_blocks_hero_vis_rules_items_type";
  DROP TYPE "public"."enum__events_v_blocks_hero_vis_rules_items_when";
  DROP TYPE "public"."enum__events_v_blocks_hero_vis_match";
  DROP TYPE "public"."enum__events_v_blocks_rich_text_vis_rules_device_show";
  DROP TYPE "public"."enum__events_v_blocks_rich_text_vis_rules_type";
  DROP TYPE "public"."enum__events_v_blocks_rich_text_vis_rules_field_name";
  DROP TYPE "public"."enum__events_v_blocks_rich_text_vis_rules_field_operator";
  DROP TYPE "public"."enum__events_v_blocks_rich_text_vis_rules_items_type";
  DROP TYPE "public"."enum__events_v_blocks_rich_text_vis_rules_items_when";
  DROP TYPE "public"."enum__events_v_blocks_rich_text_vis_match";
  DROP TYPE "public"."enum__events_v_blocks_media_text_vis_rules_device_show";
  DROP TYPE "public"."enum__events_v_blocks_media_text_vis_rules_type";
  DROP TYPE "public"."enum__events_v_blocks_media_text_vis_rules_field_name";
  DROP TYPE "public"."enum__events_v_blocks_media_text_vis_rules_field_operator";
  DROP TYPE "public"."enum__events_v_blocks_media_text_vis_rules_items_type";
  DROP TYPE "public"."enum__events_v_blocks_media_text_vis_rules_items_when";
  DROP TYPE "public"."enum__events_v_blocks_media_text_vis_match";
  DROP TYPE "public"."enum__events_v_blocks_cards_vis_rules_device_show";
  DROP TYPE "public"."enum__events_v_blocks_cards_vis_rules_type";
  DROP TYPE "public"."enum__events_v_blocks_cards_vis_rules_field_name";
  DROP TYPE "public"."enum__events_v_blocks_cards_vis_rules_field_operator";
  DROP TYPE "public"."enum__events_v_blocks_cards_vis_rules_items_type";
  DROP TYPE "public"."enum__events_v_blocks_cards_vis_rules_items_when";
  DROP TYPE "public"."enum__events_v_blocks_cards_vis_match";
  DROP TYPE "public"."enum__events_v_blocks_listing_vis_rules_device_show";
  DROP TYPE "public"."enum__events_v_blocks_listing_vis_rules_type";
  DROP TYPE "public"."enum__events_v_blocks_listing_vis_rules_field_name";
  DROP TYPE "public"."enum__events_v_blocks_listing_vis_rules_field_operator";
  DROP TYPE "public"."enum__events_v_blocks_listing_vis_rules_items_type";
  DROP TYPE "public"."enum__events_v_blocks_listing_vis_rules_items_when";
  DROP TYPE "public"."enum__events_v_blocks_listing_vis_match";
  DROP TYPE "public"."enum__events_v_blocks_columns_vis_rules_device_show";
  DROP TYPE "public"."enum__events_v_blocks_columns_vis_rules_type";
  DROP TYPE "public"."enum__events_v_blocks_columns_vis_rules_field_name";
  DROP TYPE "public"."enum__events_v_blocks_columns_vis_rules_field_operator";
  DROP TYPE "public"."enum__events_v_blocks_columns_vis_rules_items_type";
  DROP TYPE "public"."enum__events_v_blocks_columns_vis_rules_items_when";
  DROP TYPE "public"."enum__events_v_blocks_columns_vis_match";
  DROP TYPE "public"."enum__events_v_blocks_tabs_vis_rules_device_show";
  DROP TYPE "public"."enum__events_v_blocks_tabs_vis_rules_type";
  DROP TYPE "public"."enum__events_v_blocks_tabs_vis_rules_field_name";
  DROP TYPE "public"."enum__events_v_blocks_tabs_vis_rules_field_operator";
  DROP TYPE "public"."enum__events_v_blocks_tabs_vis_rules_items_type";
  DROP TYPE "public"."enum__events_v_blocks_tabs_vis_rules_items_when";
  DROP TYPE "public"."enum__events_v_blocks_tabs_vis_match";
  DROP TYPE "public"."enum__events_v_blocks_stats_vis_rules_device_show";
  DROP TYPE "public"."enum__events_v_blocks_stats_vis_rules_type";
  DROP TYPE "public"."enum__events_v_blocks_stats_vis_rules_field_name";
  DROP TYPE "public"."enum__events_v_blocks_stats_vis_rules_field_operator";
  DROP TYPE "public"."enum__events_v_blocks_stats_vis_rules_items_type";
  DROP TYPE "public"."enum__events_v_blocks_stats_vis_rules_items_when";
  DROP TYPE "public"."enum__events_v_blocks_stats_vis_match";
  DROP TYPE "public"."enum__events_v_blocks_logos_vis_rules_device_show";
  DROP TYPE "public"."enum__events_v_blocks_logos_vis_rules_type";
  DROP TYPE "public"."enum__events_v_blocks_logos_vis_rules_field_name";
  DROP TYPE "public"."enum__events_v_blocks_logos_vis_rules_field_operator";
  DROP TYPE "public"."enum__events_v_blocks_logos_vis_rules_items_type";
  DROP TYPE "public"."enum__events_v_blocks_logos_vis_rules_items_when";
  DROP TYPE "public"."enum__events_v_blocks_logos_vis_match";
  DROP TYPE "public"."enum__events_v_blocks_testimonials_vis_rules_device_show";
  DROP TYPE "public"."enum__events_v_blocks_testimonials_vis_rules_type";
  DROP TYPE "public"."enum__events_v_blocks_testimonials_vis_rules_field_name";
  DROP TYPE "public"."enum__events_v_blocks_testimonials_vis_rules_field_operator";
  DROP TYPE "public"."enum__events_v_blocks_testimonials_vis_rules_items_type";
  DROP TYPE "public"."enum__events_v_blocks_testimonials_vis_rules_items_when";
  DROP TYPE "public"."enum__events_v_blocks_testimonials_vis_match";
  DROP TYPE "public"."enum__events_v_blocks_faq_vis_rules_device_show";
  DROP TYPE "public"."enum__events_v_blocks_faq_vis_rules_type";
  DROP TYPE "public"."enum__events_v_blocks_faq_vis_rules_field_name";
  DROP TYPE "public"."enum__events_v_blocks_faq_vis_rules_field_operator";
  DROP TYPE "public"."enum__events_v_blocks_faq_vis_rules_items_type";
  DROP TYPE "public"."enum__events_v_blocks_faq_vis_rules_items_when";
  DROP TYPE "public"."enum__events_v_blocks_faq_vis_match";
  DROP TYPE "public"."enum__events_v_blocks_cta_vis_rules_device_show";
  DROP TYPE "public"."enum__events_v_blocks_cta_vis_rules_type";
  DROP TYPE "public"."enum__events_v_blocks_cta_vis_rules_field_name";
  DROP TYPE "public"."enum__events_v_blocks_cta_vis_rules_field_operator";
  DROP TYPE "public"."enum__events_v_blocks_cta_vis_rules_items_type";
  DROP TYPE "public"."enum__events_v_blocks_cta_vis_rules_items_when";
  DROP TYPE "public"."enum__events_v_blocks_cta_vis_match";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum_resources_blocks_hero_vis_rules_device_show";
  DROP TYPE "public"."enum_resources_blocks_hero_vis_rules_type";
  DROP TYPE "public"."enum_resources_blocks_hero_vis_rules_field_name";
  DROP TYPE "public"."enum_resources_blocks_hero_vis_rules_field_operator";
  DROP TYPE "public"."enum_resources_blocks_hero_vis_rules_items_type";
  DROP TYPE "public"."enum_resources_blocks_hero_vis_rules_items_when";
  DROP TYPE "public"."enum_resources_blocks_hero_vis_match";
  DROP TYPE "public"."enum_resources_blocks_rich_text_vis_rules_device_show";
  DROP TYPE "public"."enum_resources_blocks_rich_text_vis_rules_type";
  DROP TYPE "public"."enum_resources_blocks_rich_text_vis_rules_field_name";
  DROP TYPE "public"."enum_resources_blocks_rich_text_vis_rules_field_operator";
  DROP TYPE "public"."enum_resources_blocks_rich_text_vis_rules_items_type";
  DROP TYPE "public"."enum_resources_blocks_rich_text_vis_rules_items_when";
  DROP TYPE "public"."enum_resources_blocks_rich_text_vis_match";
  DROP TYPE "public"."enum_resources_blocks_media_text_vis_rules_device_show";
  DROP TYPE "public"."enum_resources_blocks_media_text_vis_rules_type";
  DROP TYPE "public"."enum_resources_blocks_media_text_vis_rules_field_name";
  DROP TYPE "public"."enum_resources_blocks_media_text_vis_rules_field_operator";
  DROP TYPE "public"."enum_resources_blocks_media_text_vis_rules_items_type";
  DROP TYPE "public"."enum_resources_blocks_media_text_vis_rules_items_when";
  DROP TYPE "public"."enum_resources_blocks_media_text_vis_match";
  DROP TYPE "public"."enum_resources_blocks_cards_vis_rules_device_show";
  DROP TYPE "public"."enum_resources_blocks_cards_vis_rules_type";
  DROP TYPE "public"."enum_resources_blocks_cards_vis_rules_field_name";
  DROP TYPE "public"."enum_resources_blocks_cards_vis_rules_field_operator";
  DROP TYPE "public"."enum_resources_blocks_cards_vis_rules_items_type";
  DROP TYPE "public"."enum_resources_blocks_cards_vis_rules_items_when";
  DROP TYPE "public"."enum_resources_blocks_cards_vis_match";
  DROP TYPE "public"."enum_resources_blocks_listing_vis_rules_device_show";
  DROP TYPE "public"."enum_resources_blocks_listing_vis_rules_type";
  DROP TYPE "public"."enum_resources_blocks_listing_vis_rules_field_name";
  DROP TYPE "public"."enum_resources_blocks_listing_vis_rules_field_operator";
  DROP TYPE "public"."enum_resources_blocks_listing_vis_rules_items_type";
  DROP TYPE "public"."enum_resources_blocks_listing_vis_rules_items_when";
  DROP TYPE "public"."enum_resources_blocks_listing_vis_match";
  DROP TYPE "public"."enum_resources_blocks_columns_vis_rules_device_show";
  DROP TYPE "public"."enum_resources_blocks_columns_vis_rules_type";
  DROP TYPE "public"."enum_resources_blocks_columns_vis_rules_field_name";
  DROP TYPE "public"."enum_resources_blocks_columns_vis_rules_field_operator";
  DROP TYPE "public"."enum_resources_blocks_columns_vis_rules_items_type";
  DROP TYPE "public"."enum_resources_blocks_columns_vis_rules_items_when";
  DROP TYPE "public"."enum_resources_blocks_columns_vis_match";
  DROP TYPE "public"."enum_resources_blocks_tabs_vis_rules_device_show";
  DROP TYPE "public"."enum_resources_blocks_tabs_vis_rules_type";
  DROP TYPE "public"."enum_resources_blocks_tabs_vis_rules_field_name";
  DROP TYPE "public"."enum_resources_blocks_tabs_vis_rules_field_operator";
  DROP TYPE "public"."enum_resources_blocks_tabs_vis_rules_items_type";
  DROP TYPE "public"."enum_resources_blocks_tabs_vis_rules_items_when";
  DROP TYPE "public"."enum_resources_blocks_tabs_vis_match";
  DROP TYPE "public"."enum_resources_blocks_stats_vis_rules_device_show";
  DROP TYPE "public"."enum_resources_blocks_stats_vis_rules_type";
  DROP TYPE "public"."enum_resources_blocks_stats_vis_rules_field_name";
  DROP TYPE "public"."enum_resources_blocks_stats_vis_rules_field_operator";
  DROP TYPE "public"."enum_resources_blocks_stats_vis_rules_items_type";
  DROP TYPE "public"."enum_resources_blocks_stats_vis_rules_items_when";
  DROP TYPE "public"."enum_resources_blocks_stats_vis_match";
  DROP TYPE "public"."enum_resources_blocks_logos_vis_rules_device_show";
  DROP TYPE "public"."enum_resources_blocks_logos_vis_rules_type";
  DROP TYPE "public"."enum_resources_blocks_logos_vis_rules_field_name";
  DROP TYPE "public"."enum_resources_blocks_logos_vis_rules_field_operator";
  DROP TYPE "public"."enum_resources_blocks_logos_vis_rules_items_type";
  DROP TYPE "public"."enum_resources_blocks_logos_vis_rules_items_when";
  DROP TYPE "public"."enum_resources_blocks_logos_vis_match";
  DROP TYPE "public"."enum_resources_blocks_testimonials_vis_rules_device_show";
  DROP TYPE "public"."enum_resources_blocks_testimonials_vis_rules_type";
  DROP TYPE "public"."enum_resources_blocks_testimonials_vis_rules_field_name";
  DROP TYPE "public"."enum_resources_blocks_testimonials_vis_rules_field_operator";
  DROP TYPE "public"."enum_resources_blocks_testimonials_vis_rules_items_type";
  DROP TYPE "public"."enum_resources_blocks_testimonials_vis_rules_items_when";
  DROP TYPE "public"."enum_resources_blocks_testimonials_vis_match";
  DROP TYPE "public"."enum_resources_blocks_faq_vis_rules_device_show";
  DROP TYPE "public"."enum_resources_blocks_faq_vis_rules_type";
  DROP TYPE "public"."enum_resources_blocks_faq_vis_rules_field_name";
  DROP TYPE "public"."enum_resources_blocks_faq_vis_rules_field_operator";
  DROP TYPE "public"."enum_resources_blocks_faq_vis_rules_items_type";
  DROP TYPE "public"."enum_resources_blocks_faq_vis_rules_items_when";
  DROP TYPE "public"."enum_resources_blocks_faq_vis_match";
  DROP TYPE "public"."enum_resources_blocks_cta_vis_rules_device_show";
  DROP TYPE "public"."enum_resources_blocks_cta_vis_rules_type";
  DROP TYPE "public"."enum_resources_blocks_cta_vis_rules_field_name";
  DROP TYPE "public"."enum_resources_blocks_cta_vis_rules_field_operator";
  DROP TYPE "public"."enum_resources_blocks_cta_vis_rules_items_type";
  DROP TYPE "public"."enum_resources_blocks_cta_vis_rules_items_when";
  DROP TYPE "public"."enum_resources_blocks_cta_vis_match";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum__resources_v_blocks_hero_vis_rules_device_show";
  DROP TYPE "public"."enum__resources_v_blocks_hero_vis_rules_type";
  DROP TYPE "public"."enum__resources_v_blocks_hero_vis_rules_field_name";
  DROP TYPE "public"."enum__resources_v_blocks_hero_vis_rules_field_operator";
  DROP TYPE "public"."enum__resources_v_blocks_hero_vis_rules_items_type";
  DROP TYPE "public"."enum__resources_v_blocks_hero_vis_rules_items_when";
  DROP TYPE "public"."enum__resources_v_blocks_hero_vis_match";
  DROP TYPE "public"."enum__resources_v_blocks_rich_text_vis_rules_device_show";
  DROP TYPE "public"."enum__resources_v_blocks_rich_text_vis_rules_type";
  DROP TYPE "public"."enum__resources_v_blocks_rich_text_vis_rules_field_name";
  DROP TYPE "public"."enum__resources_v_blocks_rich_text_vis_rules_field_operator";
  DROP TYPE "public"."enum__resources_v_blocks_rich_text_vis_rules_items_type";
  DROP TYPE "public"."enum__resources_v_blocks_rich_text_vis_rules_items_when";
  DROP TYPE "public"."enum__resources_v_blocks_rich_text_vis_match";
  DROP TYPE "public"."enum__resources_v_blocks_media_text_vis_rules_device_show";
  DROP TYPE "public"."enum__resources_v_blocks_media_text_vis_rules_type";
  DROP TYPE "public"."enum__resources_v_blocks_media_text_vis_rules_field_name";
  DROP TYPE "public"."enum__resources_v_blocks_media_text_vis_rules_field_operator";
  DROP TYPE "public"."enum__resources_v_blocks_media_text_vis_rules_items_type";
  DROP TYPE "public"."enum__resources_v_blocks_media_text_vis_rules_items_when";
  DROP TYPE "public"."enum__resources_v_blocks_media_text_vis_match";
  DROP TYPE "public"."enum__resources_v_blocks_cards_vis_rules_device_show";
  DROP TYPE "public"."enum__resources_v_blocks_cards_vis_rules_type";
  DROP TYPE "public"."enum__resources_v_blocks_cards_vis_rules_field_name";
  DROP TYPE "public"."enum__resources_v_blocks_cards_vis_rules_field_operator";
  DROP TYPE "public"."enum__resources_v_blocks_cards_vis_rules_items_type";
  DROP TYPE "public"."enum__resources_v_blocks_cards_vis_rules_items_when";
  DROP TYPE "public"."enum__resources_v_blocks_cards_vis_match";
  DROP TYPE "public"."enum__resources_v_blocks_listing_vis_rules_device_show";
  DROP TYPE "public"."enum__resources_v_blocks_listing_vis_rules_type";
  DROP TYPE "public"."enum__resources_v_blocks_listing_vis_rules_field_name";
  DROP TYPE "public"."enum__resources_v_blocks_listing_vis_rules_field_operator";
  DROP TYPE "public"."enum__resources_v_blocks_listing_vis_rules_items_type";
  DROP TYPE "public"."enum__resources_v_blocks_listing_vis_rules_items_when";
  DROP TYPE "public"."enum__resources_v_blocks_listing_vis_match";
  DROP TYPE "public"."enum__resources_v_blocks_columns_vis_rules_device_show";
  DROP TYPE "public"."enum__resources_v_blocks_columns_vis_rules_type";
  DROP TYPE "public"."enum__resources_v_blocks_columns_vis_rules_field_name";
  DROP TYPE "public"."enum__resources_v_blocks_columns_vis_rules_field_operator";
  DROP TYPE "public"."enum__resources_v_blocks_columns_vis_rules_items_type";
  DROP TYPE "public"."enum__resources_v_blocks_columns_vis_rules_items_when";
  DROP TYPE "public"."enum__resources_v_blocks_columns_vis_match";
  DROP TYPE "public"."enum__resources_v_blocks_tabs_vis_rules_device_show";
  DROP TYPE "public"."enum__resources_v_blocks_tabs_vis_rules_type";
  DROP TYPE "public"."enum__resources_v_blocks_tabs_vis_rules_field_name";
  DROP TYPE "public"."enum__resources_v_blocks_tabs_vis_rules_field_operator";
  DROP TYPE "public"."enum__resources_v_blocks_tabs_vis_rules_items_type";
  DROP TYPE "public"."enum__resources_v_blocks_tabs_vis_rules_items_when";
  DROP TYPE "public"."enum__resources_v_blocks_tabs_vis_match";
  DROP TYPE "public"."enum__resources_v_blocks_stats_vis_rules_device_show";
  DROP TYPE "public"."enum__resources_v_blocks_stats_vis_rules_type";
  DROP TYPE "public"."enum__resources_v_blocks_stats_vis_rules_field_name";
  DROP TYPE "public"."enum__resources_v_blocks_stats_vis_rules_field_operator";
  DROP TYPE "public"."enum__resources_v_blocks_stats_vis_rules_items_type";
  DROP TYPE "public"."enum__resources_v_blocks_stats_vis_rules_items_when";
  DROP TYPE "public"."enum__resources_v_blocks_stats_vis_match";
  DROP TYPE "public"."enum__resources_v_blocks_logos_vis_rules_device_show";
  DROP TYPE "public"."enum__resources_v_blocks_logos_vis_rules_type";
  DROP TYPE "public"."enum__resources_v_blocks_logos_vis_rules_field_name";
  DROP TYPE "public"."enum__resources_v_blocks_logos_vis_rules_field_operator";
  DROP TYPE "public"."enum__resources_v_blocks_logos_vis_rules_items_type";
  DROP TYPE "public"."enum__resources_v_blocks_logos_vis_rules_items_when";
  DROP TYPE "public"."enum__resources_v_blocks_logos_vis_match";
  DROP TYPE "public"."enum__resources_v_blocks_testimonials_vis_rules_device_show";
  DROP TYPE "public"."enum__resources_v_blocks_testimonials_vis_rules_type";
  DROP TYPE "public"."enum__resources_v_blocks_testimonials_vis_rules_field_name";
  DROP TYPE "public"."enum__resources_v_blocks_testimonials_vis_rules_field_operator";
  DROP TYPE "public"."enum__resources_v_blocks_testimonials_vis_rules_items_type";
  DROP TYPE "public"."enum__resources_v_blocks_testimonials_vis_rules_items_when";
  DROP TYPE "public"."enum__resources_v_blocks_testimonials_vis_match";
  DROP TYPE "public"."enum__resources_v_blocks_faq_vis_rules_device_show";
  DROP TYPE "public"."enum__resources_v_blocks_faq_vis_rules_type";
  DROP TYPE "public"."enum__resources_v_blocks_faq_vis_rules_field_name";
  DROP TYPE "public"."enum__resources_v_blocks_faq_vis_rules_field_operator";
  DROP TYPE "public"."enum__resources_v_blocks_faq_vis_rules_items_type";
  DROP TYPE "public"."enum__resources_v_blocks_faq_vis_rules_items_when";
  DROP TYPE "public"."enum__resources_v_blocks_faq_vis_match";
  DROP TYPE "public"."enum__resources_v_blocks_cta_vis_rules_device_show";
  DROP TYPE "public"."enum__resources_v_blocks_cta_vis_rules_type";
  DROP TYPE "public"."enum__resources_v_blocks_cta_vis_rules_field_name";
  DROP TYPE "public"."enum__resources_v_blocks_cta_vis_rules_field_operator";
  DROP TYPE "public"."enum__resources_v_blocks_cta_vis_rules_items_type";
  DROP TYPE "public"."enum__resources_v_blocks_cta_vis_rules_items_when";
  DROP TYPE "public"."enum__resources_v_blocks_cta_vis_match";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum_glossary_blocks_hero_vis_rules_device_show";
  DROP TYPE "public"."enum_glossary_blocks_hero_vis_rules_type";
  DROP TYPE "public"."enum_glossary_blocks_hero_vis_rules_field_name";
  DROP TYPE "public"."enum_glossary_blocks_hero_vis_rules_field_operator";
  DROP TYPE "public"."enum_glossary_blocks_hero_vis_rules_items_type";
  DROP TYPE "public"."enum_glossary_blocks_hero_vis_rules_items_when";
  DROP TYPE "public"."enum_glossary_blocks_hero_vis_match";
  DROP TYPE "public"."enum_glossary_blocks_rich_text_vis_rules_device_show";
  DROP TYPE "public"."enum_glossary_blocks_rich_text_vis_rules_type";
  DROP TYPE "public"."enum_glossary_blocks_rich_text_vis_rules_field_name";
  DROP TYPE "public"."enum_glossary_blocks_rich_text_vis_rules_field_operator";
  DROP TYPE "public"."enum_glossary_blocks_rich_text_vis_rules_items_type";
  DROP TYPE "public"."enum_glossary_blocks_rich_text_vis_rules_items_when";
  DROP TYPE "public"."enum_glossary_blocks_rich_text_vis_match";
  DROP TYPE "public"."enum_glossary_blocks_media_text_vis_rules_device_show";
  DROP TYPE "public"."enum_glossary_blocks_media_text_vis_rules_type";
  DROP TYPE "public"."enum_glossary_blocks_media_text_vis_rules_field_name";
  DROP TYPE "public"."enum_glossary_blocks_media_text_vis_rules_field_operator";
  DROP TYPE "public"."enum_glossary_blocks_media_text_vis_rules_items_type";
  DROP TYPE "public"."enum_glossary_blocks_media_text_vis_rules_items_when";
  DROP TYPE "public"."enum_glossary_blocks_media_text_vis_match";
  DROP TYPE "public"."enum_glossary_blocks_cards_vis_rules_device_show";
  DROP TYPE "public"."enum_glossary_blocks_cards_vis_rules_type";
  DROP TYPE "public"."enum_glossary_blocks_cards_vis_rules_field_name";
  DROP TYPE "public"."enum_glossary_blocks_cards_vis_rules_field_operator";
  DROP TYPE "public"."enum_glossary_blocks_cards_vis_rules_items_type";
  DROP TYPE "public"."enum_glossary_blocks_cards_vis_rules_items_when";
  DROP TYPE "public"."enum_glossary_blocks_cards_vis_match";
  DROP TYPE "public"."enum_glossary_blocks_listing_vis_rules_device_show";
  DROP TYPE "public"."enum_glossary_blocks_listing_vis_rules_type";
  DROP TYPE "public"."enum_glossary_blocks_listing_vis_rules_field_name";
  DROP TYPE "public"."enum_glossary_blocks_listing_vis_rules_field_operator";
  DROP TYPE "public"."enum_glossary_blocks_listing_vis_rules_items_type";
  DROP TYPE "public"."enum_glossary_blocks_listing_vis_rules_items_when";
  DROP TYPE "public"."enum_glossary_blocks_listing_vis_match";
  DROP TYPE "public"."enum_glossary_blocks_columns_vis_rules_device_show";
  DROP TYPE "public"."enum_glossary_blocks_columns_vis_rules_type";
  DROP TYPE "public"."enum_glossary_blocks_columns_vis_rules_field_name";
  DROP TYPE "public"."enum_glossary_blocks_columns_vis_rules_field_operator";
  DROP TYPE "public"."enum_glossary_blocks_columns_vis_rules_items_type";
  DROP TYPE "public"."enum_glossary_blocks_columns_vis_rules_items_when";
  DROP TYPE "public"."enum_glossary_blocks_columns_vis_match";
  DROP TYPE "public"."enum_glossary_blocks_tabs_vis_rules_device_show";
  DROP TYPE "public"."enum_glossary_blocks_tabs_vis_rules_type";
  DROP TYPE "public"."enum_glossary_blocks_tabs_vis_rules_field_name";
  DROP TYPE "public"."enum_glossary_blocks_tabs_vis_rules_field_operator";
  DROP TYPE "public"."enum_glossary_blocks_tabs_vis_rules_items_type";
  DROP TYPE "public"."enum_glossary_blocks_tabs_vis_rules_items_when";
  DROP TYPE "public"."enum_glossary_blocks_tabs_vis_match";
  DROP TYPE "public"."enum_glossary_blocks_stats_vis_rules_device_show";
  DROP TYPE "public"."enum_glossary_blocks_stats_vis_rules_type";
  DROP TYPE "public"."enum_glossary_blocks_stats_vis_rules_field_name";
  DROP TYPE "public"."enum_glossary_blocks_stats_vis_rules_field_operator";
  DROP TYPE "public"."enum_glossary_blocks_stats_vis_rules_items_type";
  DROP TYPE "public"."enum_glossary_blocks_stats_vis_rules_items_when";
  DROP TYPE "public"."enum_glossary_blocks_stats_vis_match";
  DROP TYPE "public"."enum_glossary_blocks_logos_vis_rules_device_show";
  DROP TYPE "public"."enum_glossary_blocks_logos_vis_rules_type";
  DROP TYPE "public"."enum_glossary_blocks_logos_vis_rules_field_name";
  DROP TYPE "public"."enum_glossary_blocks_logos_vis_rules_field_operator";
  DROP TYPE "public"."enum_glossary_blocks_logos_vis_rules_items_type";
  DROP TYPE "public"."enum_glossary_blocks_logos_vis_rules_items_when";
  DROP TYPE "public"."enum_glossary_blocks_logos_vis_match";
  DROP TYPE "public"."enum_glossary_blocks_testimonials_vis_rules_device_show";
  DROP TYPE "public"."enum_glossary_blocks_testimonials_vis_rules_type";
  DROP TYPE "public"."enum_glossary_blocks_testimonials_vis_rules_field_name";
  DROP TYPE "public"."enum_glossary_blocks_testimonials_vis_rules_field_operator";
  DROP TYPE "public"."enum_glossary_blocks_testimonials_vis_rules_items_type";
  DROP TYPE "public"."enum_glossary_blocks_testimonials_vis_rules_items_when";
  DROP TYPE "public"."enum_glossary_blocks_testimonials_vis_match";
  DROP TYPE "public"."enum_glossary_blocks_faq_vis_rules_device_show";
  DROP TYPE "public"."enum_glossary_blocks_faq_vis_rules_type";
  DROP TYPE "public"."enum_glossary_blocks_faq_vis_rules_field_name";
  DROP TYPE "public"."enum_glossary_blocks_faq_vis_rules_field_operator";
  DROP TYPE "public"."enum_glossary_blocks_faq_vis_rules_items_type";
  DROP TYPE "public"."enum_glossary_blocks_faq_vis_rules_items_when";
  DROP TYPE "public"."enum_glossary_blocks_faq_vis_match";
  DROP TYPE "public"."enum_glossary_blocks_cta_vis_rules_device_show";
  DROP TYPE "public"."enum_glossary_blocks_cta_vis_rules_type";
  DROP TYPE "public"."enum_glossary_blocks_cta_vis_rules_field_name";
  DROP TYPE "public"."enum_glossary_blocks_cta_vis_rules_field_operator";
  DROP TYPE "public"."enum_glossary_blocks_cta_vis_rules_items_type";
  DROP TYPE "public"."enum_glossary_blocks_cta_vis_rules_items_when";
  DROP TYPE "public"."enum_glossary_blocks_cta_vis_match";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum__glossary_v_blocks_hero_vis_rules_device_show";
  DROP TYPE "public"."enum__glossary_v_blocks_hero_vis_rules_type";
  DROP TYPE "public"."enum__glossary_v_blocks_hero_vis_rules_field_name";
  DROP TYPE "public"."enum__glossary_v_blocks_hero_vis_rules_field_operator";
  DROP TYPE "public"."enum__glossary_v_blocks_hero_vis_rules_items_type";
  DROP TYPE "public"."enum__glossary_v_blocks_hero_vis_rules_items_when";
  DROP TYPE "public"."enum__glossary_v_blocks_hero_vis_match";
  DROP TYPE "public"."enum__glossary_v_blocks_rich_text_vis_rules_device_show";
  DROP TYPE "public"."enum__glossary_v_blocks_rich_text_vis_rules_type";
  DROP TYPE "public"."enum__glossary_v_blocks_rich_text_vis_rules_field_name";
  DROP TYPE "public"."enum__glossary_v_blocks_rich_text_vis_rules_field_operator";
  DROP TYPE "public"."enum__glossary_v_blocks_rich_text_vis_rules_items_type";
  DROP TYPE "public"."enum__glossary_v_blocks_rich_text_vis_rules_items_when";
  DROP TYPE "public"."enum__glossary_v_blocks_rich_text_vis_match";
  DROP TYPE "public"."enum__glossary_v_blocks_media_text_vis_rules_device_show";
  DROP TYPE "public"."enum__glossary_v_blocks_media_text_vis_rules_type";
  DROP TYPE "public"."enum__glossary_v_blocks_media_text_vis_rules_field_name";
  DROP TYPE "public"."enum__glossary_v_blocks_media_text_vis_rules_field_operator";
  DROP TYPE "public"."enum__glossary_v_blocks_media_text_vis_rules_items_type";
  DROP TYPE "public"."enum__glossary_v_blocks_media_text_vis_rules_items_when";
  DROP TYPE "public"."enum__glossary_v_blocks_media_text_vis_match";
  DROP TYPE "public"."enum__glossary_v_blocks_cards_vis_rules_device_show";
  DROP TYPE "public"."enum__glossary_v_blocks_cards_vis_rules_type";
  DROP TYPE "public"."enum__glossary_v_blocks_cards_vis_rules_field_name";
  DROP TYPE "public"."enum__glossary_v_blocks_cards_vis_rules_field_operator";
  DROP TYPE "public"."enum__glossary_v_blocks_cards_vis_rules_items_type";
  DROP TYPE "public"."enum__glossary_v_blocks_cards_vis_rules_items_when";
  DROP TYPE "public"."enum__glossary_v_blocks_cards_vis_match";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_vis_rules_device_show";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_vis_rules_type";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_vis_rules_field_name";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_vis_rules_field_operator";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_vis_rules_items_type";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_vis_rules_items_when";
  DROP TYPE "public"."enum__glossary_v_blocks_listing_vis_match";
  DROP TYPE "public"."enum__glossary_v_blocks_columns_vis_rules_device_show";
  DROP TYPE "public"."enum__glossary_v_blocks_columns_vis_rules_type";
  DROP TYPE "public"."enum__glossary_v_blocks_columns_vis_rules_field_name";
  DROP TYPE "public"."enum__glossary_v_blocks_columns_vis_rules_field_operator";
  DROP TYPE "public"."enum__glossary_v_blocks_columns_vis_rules_items_type";
  DROP TYPE "public"."enum__glossary_v_blocks_columns_vis_rules_items_when";
  DROP TYPE "public"."enum__glossary_v_blocks_columns_vis_match";
  DROP TYPE "public"."enum__glossary_v_blocks_tabs_vis_rules_device_show";
  DROP TYPE "public"."enum__glossary_v_blocks_tabs_vis_rules_type";
  DROP TYPE "public"."enum__glossary_v_blocks_tabs_vis_rules_field_name";
  DROP TYPE "public"."enum__glossary_v_blocks_tabs_vis_rules_field_operator";
  DROP TYPE "public"."enum__glossary_v_blocks_tabs_vis_rules_items_type";
  DROP TYPE "public"."enum__glossary_v_blocks_tabs_vis_rules_items_when";
  DROP TYPE "public"."enum__glossary_v_blocks_tabs_vis_match";
  DROP TYPE "public"."enum__glossary_v_blocks_stats_vis_rules_device_show";
  DROP TYPE "public"."enum__glossary_v_blocks_stats_vis_rules_type";
  DROP TYPE "public"."enum__glossary_v_blocks_stats_vis_rules_field_name";
  DROP TYPE "public"."enum__glossary_v_blocks_stats_vis_rules_field_operator";
  DROP TYPE "public"."enum__glossary_v_blocks_stats_vis_rules_items_type";
  DROP TYPE "public"."enum__glossary_v_blocks_stats_vis_rules_items_when";
  DROP TYPE "public"."enum__glossary_v_blocks_stats_vis_match";
  DROP TYPE "public"."enum__glossary_v_blocks_logos_vis_rules_device_show";
  DROP TYPE "public"."enum__glossary_v_blocks_logos_vis_rules_type";
  DROP TYPE "public"."enum__glossary_v_blocks_logos_vis_rules_field_name";
  DROP TYPE "public"."enum__glossary_v_blocks_logos_vis_rules_field_operator";
  DROP TYPE "public"."enum__glossary_v_blocks_logos_vis_rules_items_type";
  DROP TYPE "public"."enum__glossary_v_blocks_logos_vis_rules_items_when";
  DROP TYPE "public"."enum__glossary_v_blocks_logos_vis_match";
  DROP TYPE "public"."enum__glossary_v_blocks_testimonials_vis_rules_device_show";
  DROP TYPE "public"."enum__glossary_v_blocks_testimonials_vis_rules_type";
  DROP TYPE "public"."enum__glossary_v_blocks_testimonials_vis_rules_field_name";
  DROP TYPE "public"."enum__glossary_v_blocks_testimonials_vis_rules_field_operator";
  DROP TYPE "public"."enum__glossary_v_blocks_testimonials_vis_rules_items_type";
  DROP TYPE "public"."enum__glossary_v_blocks_testimonials_vis_rules_items_when";
  DROP TYPE "public"."enum__glossary_v_blocks_testimonials_vis_match";
  DROP TYPE "public"."enum__glossary_v_blocks_faq_vis_rules_device_show";
  DROP TYPE "public"."enum__glossary_v_blocks_faq_vis_rules_type";
  DROP TYPE "public"."enum__glossary_v_blocks_faq_vis_rules_field_name";
  DROP TYPE "public"."enum__glossary_v_blocks_faq_vis_rules_field_operator";
  DROP TYPE "public"."enum__glossary_v_blocks_faq_vis_rules_items_type";
  DROP TYPE "public"."enum__glossary_v_blocks_faq_vis_rules_items_when";
  DROP TYPE "public"."enum__glossary_v_blocks_faq_vis_match";
  DROP TYPE "public"."enum__glossary_v_blocks_cta_vis_rules_device_show";
  DROP TYPE "public"."enum__glossary_v_blocks_cta_vis_rules_type";
  DROP TYPE "public"."enum__glossary_v_blocks_cta_vis_rules_field_name";
  DROP TYPE "public"."enum__glossary_v_blocks_cta_vis_rules_field_operator";
  DROP TYPE "public"."enum__glossary_v_blocks_cta_vis_rules_items_type";
  DROP TYPE "public"."enum__glossary_v_blocks_cta_vis_rules_items_when";
  DROP TYPE "public"."enum__glossary_v_blocks_cta_vis_match";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum_people_blocks_hero_vis_rules_device_show";
  DROP TYPE "public"."enum_people_blocks_hero_vis_rules_type";
  DROP TYPE "public"."enum_people_blocks_hero_vis_rules_field_name";
  DROP TYPE "public"."enum_people_blocks_hero_vis_rules_field_operator";
  DROP TYPE "public"."enum_people_blocks_hero_vis_rules_items_type";
  DROP TYPE "public"."enum_people_blocks_hero_vis_rules_items_when";
  DROP TYPE "public"."enum_people_blocks_hero_vis_match";
  DROP TYPE "public"."enum_people_blocks_rich_text_vis_rules_device_show";
  DROP TYPE "public"."enum_people_blocks_rich_text_vis_rules_type";
  DROP TYPE "public"."enum_people_blocks_rich_text_vis_rules_field_name";
  DROP TYPE "public"."enum_people_blocks_rich_text_vis_rules_field_operator";
  DROP TYPE "public"."enum_people_blocks_rich_text_vis_rules_items_type";
  DROP TYPE "public"."enum_people_blocks_rich_text_vis_rules_items_when";
  DROP TYPE "public"."enum_people_blocks_rich_text_vis_match";
  DROP TYPE "public"."enum_people_blocks_media_text_vis_rules_device_show";
  DROP TYPE "public"."enum_people_blocks_media_text_vis_rules_type";
  DROP TYPE "public"."enum_people_blocks_media_text_vis_rules_field_name";
  DROP TYPE "public"."enum_people_blocks_media_text_vis_rules_field_operator";
  DROP TYPE "public"."enum_people_blocks_media_text_vis_rules_items_type";
  DROP TYPE "public"."enum_people_blocks_media_text_vis_rules_items_when";
  DROP TYPE "public"."enum_people_blocks_media_text_vis_match";
  DROP TYPE "public"."enum_people_blocks_cards_vis_rules_device_show";
  DROP TYPE "public"."enum_people_blocks_cards_vis_rules_type";
  DROP TYPE "public"."enum_people_blocks_cards_vis_rules_field_name";
  DROP TYPE "public"."enum_people_blocks_cards_vis_rules_field_operator";
  DROP TYPE "public"."enum_people_blocks_cards_vis_rules_items_type";
  DROP TYPE "public"."enum_people_blocks_cards_vis_rules_items_when";
  DROP TYPE "public"."enum_people_blocks_cards_vis_match";
  DROP TYPE "public"."enum_people_blocks_listing_vis_rules_device_show";
  DROP TYPE "public"."enum_people_blocks_listing_vis_rules_type";
  DROP TYPE "public"."enum_people_blocks_listing_vis_rules_field_name";
  DROP TYPE "public"."enum_people_blocks_listing_vis_rules_field_operator";
  DROP TYPE "public"."enum_people_blocks_listing_vis_rules_items_type";
  DROP TYPE "public"."enum_people_blocks_listing_vis_rules_items_when";
  DROP TYPE "public"."enum_people_blocks_listing_vis_match";
  DROP TYPE "public"."enum_people_blocks_columns_vis_rules_device_show";
  DROP TYPE "public"."enum_people_blocks_columns_vis_rules_type";
  DROP TYPE "public"."enum_people_blocks_columns_vis_rules_field_name";
  DROP TYPE "public"."enum_people_blocks_columns_vis_rules_field_operator";
  DROP TYPE "public"."enum_people_blocks_columns_vis_rules_items_type";
  DROP TYPE "public"."enum_people_blocks_columns_vis_rules_items_when";
  DROP TYPE "public"."enum_people_blocks_columns_vis_match";
  DROP TYPE "public"."enum_people_blocks_tabs_vis_rules_device_show";
  DROP TYPE "public"."enum_people_blocks_tabs_vis_rules_type";
  DROP TYPE "public"."enum_people_blocks_tabs_vis_rules_field_name";
  DROP TYPE "public"."enum_people_blocks_tabs_vis_rules_field_operator";
  DROP TYPE "public"."enum_people_blocks_tabs_vis_rules_items_type";
  DROP TYPE "public"."enum_people_blocks_tabs_vis_rules_items_when";
  DROP TYPE "public"."enum_people_blocks_tabs_vis_match";
  DROP TYPE "public"."enum_people_blocks_stats_vis_rules_device_show";
  DROP TYPE "public"."enum_people_blocks_stats_vis_rules_type";
  DROP TYPE "public"."enum_people_blocks_stats_vis_rules_field_name";
  DROP TYPE "public"."enum_people_blocks_stats_vis_rules_field_operator";
  DROP TYPE "public"."enum_people_blocks_stats_vis_rules_items_type";
  DROP TYPE "public"."enum_people_blocks_stats_vis_rules_items_when";
  DROP TYPE "public"."enum_people_blocks_stats_vis_match";
  DROP TYPE "public"."enum_people_blocks_logos_vis_rules_device_show";
  DROP TYPE "public"."enum_people_blocks_logos_vis_rules_type";
  DROP TYPE "public"."enum_people_blocks_logos_vis_rules_field_name";
  DROP TYPE "public"."enum_people_blocks_logos_vis_rules_field_operator";
  DROP TYPE "public"."enum_people_blocks_logos_vis_rules_items_type";
  DROP TYPE "public"."enum_people_blocks_logos_vis_rules_items_when";
  DROP TYPE "public"."enum_people_blocks_logos_vis_match";
  DROP TYPE "public"."enum_people_blocks_testimonials_vis_rules_device_show";
  DROP TYPE "public"."enum_people_blocks_testimonials_vis_rules_type";
  DROP TYPE "public"."enum_people_blocks_testimonials_vis_rules_field_name";
  DROP TYPE "public"."enum_people_blocks_testimonials_vis_rules_field_operator";
  DROP TYPE "public"."enum_people_blocks_testimonials_vis_rules_items_type";
  DROP TYPE "public"."enum_people_blocks_testimonials_vis_rules_items_when";
  DROP TYPE "public"."enum_people_blocks_testimonials_vis_match";
  DROP TYPE "public"."enum_people_blocks_faq_vis_rules_device_show";
  DROP TYPE "public"."enum_people_blocks_faq_vis_rules_type";
  DROP TYPE "public"."enum_people_blocks_faq_vis_rules_field_name";
  DROP TYPE "public"."enum_people_blocks_faq_vis_rules_field_operator";
  DROP TYPE "public"."enum_people_blocks_faq_vis_rules_items_type";
  DROP TYPE "public"."enum_people_blocks_faq_vis_rules_items_when";
  DROP TYPE "public"."enum_people_blocks_faq_vis_match";
  DROP TYPE "public"."enum_people_blocks_cta_vis_rules_device_show";
  DROP TYPE "public"."enum_people_blocks_cta_vis_rules_type";
  DROP TYPE "public"."enum_people_blocks_cta_vis_rules_field_name";
  DROP TYPE "public"."enum_people_blocks_cta_vis_rules_field_operator";
  DROP TYPE "public"."enum_people_blocks_cta_vis_rules_items_type";
  DROP TYPE "public"."enum_people_blocks_cta_vis_rules_items_when";
  DROP TYPE "public"."enum_people_blocks_cta_vis_match";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum__people_v_blocks_hero_vis_rules_device_show";
  DROP TYPE "public"."enum__people_v_blocks_hero_vis_rules_type";
  DROP TYPE "public"."enum__people_v_blocks_hero_vis_rules_field_name";
  DROP TYPE "public"."enum__people_v_blocks_hero_vis_rules_field_operator";
  DROP TYPE "public"."enum__people_v_blocks_hero_vis_rules_items_type";
  DROP TYPE "public"."enum__people_v_blocks_hero_vis_rules_items_when";
  DROP TYPE "public"."enum__people_v_blocks_hero_vis_match";
  DROP TYPE "public"."enum__people_v_blocks_rich_text_vis_rules_device_show";
  DROP TYPE "public"."enum__people_v_blocks_rich_text_vis_rules_type";
  DROP TYPE "public"."enum__people_v_blocks_rich_text_vis_rules_field_name";
  DROP TYPE "public"."enum__people_v_blocks_rich_text_vis_rules_field_operator";
  DROP TYPE "public"."enum__people_v_blocks_rich_text_vis_rules_items_type";
  DROP TYPE "public"."enum__people_v_blocks_rich_text_vis_rules_items_when";
  DROP TYPE "public"."enum__people_v_blocks_rich_text_vis_match";
  DROP TYPE "public"."enum__people_v_blocks_media_text_vis_rules_device_show";
  DROP TYPE "public"."enum__people_v_blocks_media_text_vis_rules_type";
  DROP TYPE "public"."enum__people_v_blocks_media_text_vis_rules_field_name";
  DROP TYPE "public"."enum__people_v_blocks_media_text_vis_rules_field_operator";
  DROP TYPE "public"."enum__people_v_blocks_media_text_vis_rules_items_type";
  DROP TYPE "public"."enum__people_v_blocks_media_text_vis_rules_items_when";
  DROP TYPE "public"."enum__people_v_blocks_media_text_vis_match";
  DROP TYPE "public"."enum__people_v_blocks_cards_vis_rules_device_show";
  DROP TYPE "public"."enum__people_v_blocks_cards_vis_rules_type";
  DROP TYPE "public"."enum__people_v_blocks_cards_vis_rules_field_name";
  DROP TYPE "public"."enum__people_v_blocks_cards_vis_rules_field_operator";
  DROP TYPE "public"."enum__people_v_blocks_cards_vis_rules_items_type";
  DROP TYPE "public"."enum__people_v_blocks_cards_vis_rules_items_when";
  DROP TYPE "public"."enum__people_v_blocks_cards_vis_match";
  DROP TYPE "public"."enum__people_v_blocks_listing_vis_rules_device_show";
  DROP TYPE "public"."enum__people_v_blocks_listing_vis_rules_type";
  DROP TYPE "public"."enum__people_v_blocks_listing_vis_rules_field_name";
  DROP TYPE "public"."enum__people_v_blocks_listing_vis_rules_field_operator";
  DROP TYPE "public"."enum__people_v_blocks_listing_vis_rules_items_type";
  DROP TYPE "public"."enum__people_v_blocks_listing_vis_rules_items_when";
  DROP TYPE "public"."enum__people_v_blocks_listing_vis_match";
  DROP TYPE "public"."enum__people_v_blocks_columns_vis_rules_device_show";
  DROP TYPE "public"."enum__people_v_blocks_columns_vis_rules_type";
  DROP TYPE "public"."enum__people_v_blocks_columns_vis_rules_field_name";
  DROP TYPE "public"."enum__people_v_blocks_columns_vis_rules_field_operator";
  DROP TYPE "public"."enum__people_v_blocks_columns_vis_rules_items_type";
  DROP TYPE "public"."enum__people_v_blocks_columns_vis_rules_items_when";
  DROP TYPE "public"."enum__people_v_blocks_columns_vis_match";
  DROP TYPE "public"."enum__people_v_blocks_tabs_vis_rules_device_show";
  DROP TYPE "public"."enum__people_v_blocks_tabs_vis_rules_type";
  DROP TYPE "public"."enum__people_v_blocks_tabs_vis_rules_field_name";
  DROP TYPE "public"."enum__people_v_blocks_tabs_vis_rules_field_operator";
  DROP TYPE "public"."enum__people_v_blocks_tabs_vis_rules_items_type";
  DROP TYPE "public"."enum__people_v_blocks_tabs_vis_rules_items_when";
  DROP TYPE "public"."enum__people_v_blocks_tabs_vis_match";
  DROP TYPE "public"."enum__people_v_blocks_stats_vis_rules_device_show";
  DROP TYPE "public"."enum__people_v_blocks_stats_vis_rules_type";
  DROP TYPE "public"."enum__people_v_blocks_stats_vis_rules_field_name";
  DROP TYPE "public"."enum__people_v_blocks_stats_vis_rules_field_operator";
  DROP TYPE "public"."enum__people_v_blocks_stats_vis_rules_items_type";
  DROP TYPE "public"."enum__people_v_blocks_stats_vis_rules_items_when";
  DROP TYPE "public"."enum__people_v_blocks_stats_vis_match";
  DROP TYPE "public"."enum__people_v_blocks_logos_vis_rules_device_show";
  DROP TYPE "public"."enum__people_v_blocks_logos_vis_rules_type";
  DROP TYPE "public"."enum__people_v_blocks_logos_vis_rules_field_name";
  DROP TYPE "public"."enum__people_v_blocks_logos_vis_rules_field_operator";
  DROP TYPE "public"."enum__people_v_blocks_logos_vis_rules_items_type";
  DROP TYPE "public"."enum__people_v_blocks_logos_vis_rules_items_when";
  DROP TYPE "public"."enum__people_v_blocks_logos_vis_match";
  DROP TYPE "public"."enum__people_v_blocks_testimonials_vis_rules_device_show";
  DROP TYPE "public"."enum__people_v_blocks_testimonials_vis_rules_type";
  DROP TYPE "public"."enum__people_v_blocks_testimonials_vis_rules_field_name";
  DROP TYPE "public"."enum__people_v_blocks_testimonials_vis_rules_field_operator";
  DROP TYPE "public"."enum__people_v_blocks_testimonials_vis_rules_items_type";
  DROP TYPE "public"."enum__people_v_blocks_testimonials_vis_rules_items_when";
  DROP TYPE "public"."enum__people_v_blocks_testimonials_vis_match";
  DROP TYPE "public"."enum__people_v_blocks_faq_vis_rules_device_show";
  DROP TYPE "public"."enum__people_v_blocks_faq_vis_rules_type";
  DROP TYPE "public"."enum__people_v_blocks_faq_vis_rules_field_name";
  DROP TYPE "public"."enum__people_v_blocks_faq_vis_rules_field_operator";
  DROP TYPE "public"."enum__people_v_blocks_faq_vis_rules_items_type";
  DROP TYPE "public"."enum__people_v_blocks_faq_vis_rules_items_when";
  DROP TYPE "public"."enum__people_v_blocks_faq_vis_match";
  DROP TYPE "public"."enum__people_v_blocks_cta_vis_rules_device_show";
  DROP TYPE "public"."enum__people_v_blocks_cta_vis_rules_type";
  DROP TYPE "public"."enum__people_v_blocks_cta_vis_rules_field_name";
  DROP TYPE "public"."enum__people_v_blocks_cta_vis_rules_field_operator";
  DROP TYPE "public"."enum__people_v_blocks_cta_vis_rules_items_type";
  DROP TYPE "public"."enum__people_v_blocks_cta_vis_rules_items_when";
  DROP TYPE "public"."enum__people_v_blocks_cta_vis_match";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum_reusable_blocks_hero_vis_rules_device_show";
  DROP TYPE "public"."enum_reusable_blocks_hero_vis_rules_type";
  DROP TYPE "public"."enum_reusable_blocks_hero_vis_rules_field_name";
  DROP TYPE "public"."enum_reusable_blocks_hero_vis_rules_field_operator";
  DROP TYPE "public"."enum_reusable_blocks_hero_vis_rules_items_type";
  DROP TYPE "public"."enum_reusable_blocks_hero_vis_rules_items_when";
  DROP TYPE "public"."enum_reusable_blocks_hero_vis_match";
  DROP TYPE "public"."enum_reusable_blocks_rich_text_vis_rules_device_show";
  DROP TYPE "public"."enum_reusable_blocks_rich_text_vis_rules_type";
  DROP TYPE "public"."enum_reusable_blocks_rich_text_vis_rules_field_name";
  DROP TYPE "public"."enum_reusable_blocks_rich_text_vis_rules_field_operator";
  DROP TYPE "public"."enum_reusable_blocks_rich_text_vis_rules_items_type";
  DROP TYPE "public"."enum_reusable_blocks_rich_text_vis_rules_items_when";
  DROP TYPE "public"."enum_reusable_blocks_rich_text_vis_match";
  DROP TYPE "public"."enum_reusable_blocks_media_text_vis_rules_device_show";
  DROP TYPE "public"."enum_reusable_blocks_media_text_vis_rules_type";
  DROP TYPE "public"."enum_reusable_blocks_media_text_vis_rules_field_name";
  DROP TYPE "public"."enum_reusable_blocks_media_text_vis_rules_field_operator";
  DROP TYPE "public"."enum_reusable_blocks_media_text_vis_rules_items_type";
  DROP TYPE "public"."enum_reusable_blocks_media_text_vis_rules_items_when";
  DROP TYPE "public"."enum_reusable_blocks_media_text_vis_match";
  DROP TYPE "public"."enum_reusable_blocks_cards_vis_rules_device_show";
  DROP TYPE "public"."enum_reusable_blocks_cards_vis_rules_type";
  DROP TYPE "public"."enum_reusable_blocks_cards_vis_rules_field_name";
  DROP TYPE "public"."enum_reusable_blocks_cards_vis_rules_field_operator";
  DROP TYPE "public"."enum_reusable_blocks_cards_vis_rules_items_type";
  DROP TYPE "public"."enum_reusable_blocks_cards_vis_rules_items_when";
  DROP TYPE "public"."enum_reusable_blocks_cards_vis_match";
  DROP TYPE "public"."enum_reusable_blocks_listing_vis_rules_device_show";
  DROP TYPE "public"."enum_reusable_blocks_listing_vis_rules_type";
  DROP TYPE "public"."enum_reusable_blocks_listing_vis_rules_field_name";
  DROP TYPE "public"."enum_reusable_blocks_listing_vis_rules_field_operator";
  DROP TYPE "public"."enum_reusable_blocks_listing_vis_rules_items_type";
  DROP TYPE "public"."enum_reusable_blocks_listing_vis_rules_items_when";
  DROP TYPE "public"."enum_reusable_blocks_listing_vis_match";
  DROP TYPE "public"."enum_reusable_blocks_columns_vis_rules_device_show";
  DROP TYPE "public"."enum_reusable_blocks_columns_vis_rules_type";
  DROP TYPE "public"."enum_reusable_blocks_columns_vis_rules_field_name";
  DROP TYPE "public"."enum_reusable_blocks_columns_vis_rules_field_operator";
  DROP TYPE "public"."enum_reusable_blocks_columns_vis_rules_items_type";
  DROP TYPE "public"."enum_reusable_blocks_columns_vis_rules_items_when";
  DROP TYPE "public"."enum_reusable_blocks_columns_vis_match";
  DROP TYPE "public"."enum_reusable_blocks_tabs_vis_rules_device_show";
  DROP TYPE "public"."enum_reusable_blocks_tabs_vis_rules_type";
  DROP TYPE "public"."enum_reusable_blocks_tabs_vis_rules_field_name";
  DROP TYPE "public"."enum_reusable_blocks_tabs_vis_rules_field_operator";
  DROP TYPE "public"."enum_reusable_blocks_tabs_vis_rules_items_type";
  DROP TYPE "public"."enum_reusable_blocks_tabs_vis_rules_items_when";
  DROP TYPE "public"."enum_reusable_blocks_tabs_vis_match";
  DROP TYPE "public"."enum_reusable_blocks_stats_vis_rules_device_show";
  DROP TYPE "public"."enum_reusable_blocks_stats_vis_rules_type";
  DROP TYPE "public"."enum_reusable_blocks_stats_vis_rules_field_name";
  DROP TYPE "public"."enum_reusable_blocks_stats_vis_rules_field_operator";
  DROP TYPE "public"."enum_reusable_blocks_stats_vis_rules_items_type";
  DROP TYPE "public"."enum_reusable_blocks_stats_vis_rules_items_when";
  DROP TYPE "public"."enum_reusable_blocks_stats_vis_match";
  DROP TYPE "public"."enum_reusable_blocks_logos_vis_rules_device_show";
  DROP TYPE "public"."enum_reusable_blocks_logos_vis_rules_type";
  DROP TYPE "public"."enum_reusable_blocks_logos_vis_rules_field_name";
  DROP TYPE "public"."enum_reusable_blocks_logos_vis_rules_field_operator";
  DROP TYPE "public"."enum_reusable_blocks_logos_vis_rules_items_type";
  DROP TYPE "public"."enum_reusable_blocks_logos_vis_rules_items_when";
  DROP TYPE "public"."enum_reusable_blocks_logos_vis_match";
  DROP TYPE "public"."enum_reusable_blocks_testimonials_vis_rules_device_show";
  DROP TYPE "public"."enum_reusable_blocks_testimonials_vis_rules_type";
  DROP TYPE "public"."enum_reusable_blocks_testimonials_vis_rules_field_name";
  DROP TYPE "public"."enum_reusable_blocks_testimonials_vis_rules_field_operator";
  DROP TYPE "public"."enum_reusable_blocks_testimonials_vis_rules_items_type";
  DROP TYPE "public"."enum_reusable_blocks_testimonials_vis_rules_items_when";
  DROP TYPE "public"."enum_reusable_blocks_testimonials_vis_match";
  DROP TYPE "public"."enum_reusable_blocks_faq_vis_rules_device_show";
  DROP TYPE "public"."enum_reusable_blocks_faq_vis_rules_type";
  DROP TYPE "public"."enum_reusable_blocks_faq_vis_rules_field_name";
  DROP TYPE "public"."enum_reusable_blocks_faq_vis_rules_field_operator";
  DROP TYPE "public"."enum_reusable_blocks_faq_vis_rules_items_type";
  DROP TYPE "public"."enum_reusable_blocks_faq_vis_rules_items_when";
  DROP TYPE "public"."enum_reusable_blocks_faq_vis_match";
  DROP TYPE "public"."enum_reusable_blocks_cta_vis_rules_device_show";
  DROP TYPE "public"."enum_reusable_blocks_cta_vis_rules_type";
  DROP TYPE "public"."enum_reusable_blocks_cta_vis_rules_field_name";
  DROP TYPE "public"."enum_reusable_blocks_cta_vis_rules_field_operator";
  DROP TYPE "public"."enum_reusable_blocks_cta_vis_rules_items_type";
  DROP TYPE "public"."enum_reusable_blocks_cta_vis_rules_items_when";
  DROP TYPE "public"."enum_reusable_blocks_cta_vis_match";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum__reusable_v_blocks_hero_vis_rules_device_show";
  DROP TYPE "public"."enum__reusable_v_blocks_hero_vis_rules_type";
  DROP TYPE "public"."enum__reusable_v_blocks_hero_vis_rules_field_name";
  DROP TYPE "public"."enum__reusable_v_blocks_hero_vis_rules_field_operator";
  DROP TYPE "public"."enum__reusable_v_blocks_hero_vis_rules_items_type";
  DROP TYPE "public"."enum__reusable_v_blocks_hero_vis_rules_items_when";
  DROP TYPE "public"."enum__reusable_v_blocks_hero_vis_match";
  DROP TYPE "public"."enum__reusable_v_blocks_rich_text_vis_rules_device_show";
  DROP TYPE "public"."enum__reusable_v_blocks_rich_text_vis_rules_type";
  DROP TYPE "public"."enum__reusable_v_blocks_rich_text_vis_rules_field_name";
  DROP TYPE "public"."enum__reusable_v_blocks_rich_text_vis_rules_field_operator";
  DROP TYPE "public"."enum__reusable_v_blocks_rich_text_vis_rules_items_type";
  DROP TYPE "public"."enum__reusable_v_blocks_rich_text_vis_rules_items_when";
  DROP TYPE "public"."enum__reusable_v_blocks_rich_text_vis_match";
  DROP TYPE "public"."enum__reusable_v_blocks_media_text_vis_rules_device_show";
  DROP TYPE "public"."enum__reusable_v_blocks_media_text_vis_rules_type";
  DROP TYPE "public"."enum__reusable_v_blocks_media_text_vis_rules_field_name";
  DROP TYPE "public"."enum__reusable_v_blocks_media_text_vis_rules_field_operator";
  DROP TYPE "public"."enum__reusable_v_blocks_media_text_vis_rules_items_type";
  DROP TYPE "public"."enum__reusable_v_blocks_media_text_vis_rules_items_when";
  DROP TYPE "public"."enum__reusable_v_blocks_media_text_vis_match";
  DROP TYPE "public"."enum__reusable_v_blocks_cards_vis_rules_device_show";
  DROP TYPE "public"."enum__reusable_v_blocks_cards_vis_rules_type";
  DROP TYPE "public"."enum__reusable_v_blocks_cards_vis_rules_field_name";
  DROP TYPE "public"."enum__reusable_v_blocks_cards_vis_rules_field_operator";
  DROP TYPE "public"."enum__reusable_v_blocks_cards_vis_rules_items_type";
  DROP TYPE "public"."enum__reusable_v_blocks_cards_vis_rules_items_when";
  DROP TYPE "public"."enum__reusable_v_blocks_cards_vis_match";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_vis_rules_device_show";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_vis_rules_type";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_vis_rules_field_name";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_vis_rules_field_operator";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_vis_rules_items_type";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_vis_rules_items_when";
  DROP TYPE "public"."enum__reusable_v_blocks_listing_vis_match";
  DROP TYPE "public"."enum__reusable_v_blocks_columns_vis_rules_device_show";
  DROP TYPE "public"."enum__reusable_v_blocks_columns_vis_rules_type";
  DROP TYPE "public"."enum__reusable_v_blocks_columns_vis_rules_field_name";
  DROP TYPE "public"."enum__reusable_v_blocks_columns_vis_rules_field_operator";
  DROP TYPE "public"."enum__reusable_v_blocks_columns_vis_rules_items_type";
  DROP TYPE "public"."enum__reusable_v_blocks_columns_vis_rules_items_when";
  DROP TYPE "public"."enum__reusable_v_blocks_columns_vis_match";
  DROP TYPE "public"."enum__reusable_v_blocks_tabs_vis_rules_device_show";
  DROP TYPE "public"."enum__reusable_v_blocks_tabs_vis_rules_type";
  DROP TYPE "public"."enum__reusable_v_blocks_tabs_vis_rules_field_name";
  DROP TYPE "public"."enum__reusable_v_blocks_tabs_vis_rules_field_operator";
  DROP TYPE "public"."enum__reusable_v_blocks_tabs_vis_rules_items_type";
  DROP TYPE "public"."enum__reusable_v_blocks_tabs_vis_rules_items_when";
  DROP TYPE "public"."enum__reusable_v_blocks_tabs_vis_match";
  DROP TYPE "public"."enum__reusable_v_blocks_stats_vis_rules_device_show";
  DROP TYPE "public"."enum__reusable_v_blocks_stats_vis_rules_type";
  DROP TYPE "public"."enum__reusable_v_blocks_stats_vis_rules_field_name";
  DROP TYPE "public"."enum__reusable_v_blocks_stats_vis_rules_field_operator";
  DROP TYPE "public"."enum__reusable_v_blocks_stats_vis_rules_items_type";
  DROP TYPE "public"."enum__reusable_v_blocks_stats_vis_rules_items_when";
  DROP TYPE "public"."enum__reusable_v_blocks_stats_vis_match";
  DROP TYPE "public"."enum__reusable_v_blocks_logos_vis_rules_device_show";
  DROP TYPE "public"."enum__reusable_v_blocks_logos_vis_rules_type";
  DROP TYPE "public"."enum__reusable_v_blocks_logos_vis_rules_field_name";
  DROP TYPE "public"."enum__reusable_v_blocks_logos_vis_rules_field_operator";
  DROP TYPE "public"."enum__reusable_v_blocks_logos_vis_rules_items_type";
  DROP TYPE "public"."enum__reusable_v_blocks_logos_vis_rules_items_when";
  DROP TYPE "public"."enum__reusable_v_blocks_logos_vis_match";
  DROP TYPE "public"."enum__reusable_v_blocks_testimonials_vis_rules_device_show";
  DROP TYPE "public"."enum__reusable_v_blocks_testimonials_vis_rules_type";
  DROP TYPE "public"."enum__reusable_v_blocks_testimonials_vis_rules_field_name";
  DROP TYPE "public"."enum__reusable_v_blocks_testimonials_vis_rules_field_operator";
  DROP TYPE "public"."enum__reusable_v_blocks_testimonials_vis_rules_items_type";
  DROP TYPE "public"."enum__reusable_v_blocks_testimonials_vis_rules_items_when";
  DROP TYPE "public"."enum__reusable_v_blocks_testimonials_vis_match";
  DROP TYPE "public"."enum__reusable_v_blocks_faq_vis_rules_device_show";
  DROP TYPE "public"."enum__reusable_v_blocks_faq_vis_rules_type";
  DROP TYPE "public"."enum__reusable_v_blocks_faq_vis_rules_field_name";
  DROP TYPE "public"."enum__reusable_v_blocks_faq_vis_rules_field_operator";
  DROP TYPE "public"."enum__reusable_v_blocks_faq_vis_rules_items_type";
  DROP TYPE "public"."enum__reusable_v_blocks_faq_vis_rules_items_when";
  DROP TYPE "public"."enum__reusable_v_blocks_faq_vis_match";
  DROP TYPE "public"."enum__reusable_v_blocks_cta_vis_rules_device_show";
  DROP TYPE "public"."enum__reusable_v_blocks_cta_vis_rules_type";
  DROP TYPE "public"."enum__reusable_v_blocks_cta_vis_rules_field_name";
  DROP TYPE "public"."enum__reusable_v_blocks_cta_vis_rules_field_operator";
  DROP TYPE "public"."enum__reusable_v_blocks_cta_vis_rules_items_type";
  DROP TYPE "public"."enum__reusable_v_blocks_cta_vis_rules_items_when";
  DROP TYPE "public"."enum__reusable_v_blocks_cta_vis_match";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_vis_match";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hero_vis_rules_device_show";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hero_vis_rules_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hero_vis_rules_field_name";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hero_vis_rules_field_operator";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hero_vis_rules_items_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hero_vis_rules_items_when";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hero_vis_match";
  DROP TYPE "public"."enum_cpt_defaults_blocks_rich_text_vis_rules_device_show";
  DROP TYPE "public"."enum_cpt_defaults_blocks_rich_text_vis_rules_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_rich_text_vis_rules_field_name";
  DROP TYPE "public"."enum_cpt_defaults_blocks_rich_text_vis_rules_field_operator";
  DROP TYPE "public"."enum_cpt_defaults_blocks_rich_text_vis_rules_items_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_rich_text_vis_rules_items_when";
  DROP TYPE "public"."enum_cpt_defaults_blocks_rich_text_vis_match";
  DROP TYPE "public"."enum_cpt_defaults_blocks_media_text_vis_rules_device_show";
  DROP TYPE "public"."enum_cpt_defaults_blocks_media_text_vis_rules_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_media_text_vis_rules_field_name";
  DROP TYPE "public"."enum_cpt_defaults_blocks_media_text_vis_rules_field_operator";
  DROP TYPE "public"."enum_cpt_defaults_blocks_media_text_vis_rules_items_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_media_text_vis_rules_items_when";
  DROP TYPE "public"."enum_cpt_defaults_blocks_media_text_vis_match";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cards_vis_rules_device_show";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cards_vis_rules_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cards_vis_rules_field_name";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cards_vis_rules_field_operator";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cards_vis_rules_items_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cards_vis_rules_items_when";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cards_vis_match";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_vis_rules_device_show";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_vis_rules_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_vis_rules_field_name";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_vis_rules_field_operator";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_vis_rules_items_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_vis_rules_items_when";
  DROP TYPE "public"."enum_cpt_defaults_blocks_listing_vis_match";
  DROP TYPE "public"."enum_cpt_defaults_blocks_columns_vis_rules_device_show";
  DROP TYPE "public"."enum_cpt_defaults_blocks_columns_vis_rules_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_columns_vis_rules_field_name";
  DROP TYPE "public"."enum_cpt_defaults_blocks_columns_vis_rules_field_operator";
  DROP TYPE "public"."enum_cpt_defaults_blocks_columns_vis_rules_items_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_columns_vis_rules_items_when";
  DROP TYPE "public"."enum_cpt_defaults_blocks_columns_vis_match";
  DROP TYPE "public"."enum_cpt_defaults_blocks_tabs_vis_rules_device_show";
  DROP TYPE "public"."enum_cpt_defaults_blocks_tabs_vis_rules_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_tabs_vis_rules_field_name";
  DROP TYPE "public"."enum_cpt_defaults_blocks_tabs_vis_rules_field_operator";
  DROP TYPE "public"."enum_cpt_defaults_blocks_tabs_vis_rules_items_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_tabs_vis_rules_items_when";
  DROP TYPE "public"."enum_cpt_defaults_blocks_tabs_vis_match";
  DROP TYPE "public"."enum_cpt_defaults_blocks_stats_vis_rules_device_show";
  DROP TYPE "public"."enum_cpt_defaults_blocks_stats_vis_rules_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_stats_vis_rules_field_name";
  DROP TYPE "public"."enum_cpt_defaults_blocks_stats_vis_rules_field_operator";
  DROP TYPE "public"."enum_cpt_defaults_blocks_stats_vis_rules_items_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_stats_vis_rules_items_when";
  DROP TYPE "public"."enum_cpt_defaults_blocks_stats_vis_match";
  DROP TYPE "public"."enum_cpt_defaults_blocks_logos_vis_rules_device_show";
  DROP TYPE "public"."enum_cpt_defaults_blocks_logos_vis_rules_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_logos_vis_rules_field_name";
  DROP TYPE "public"."enum_cpt_defaults_blocks_logos_vis_rules_field_operator";
  DROP TYPE "public"."enum_cpt_defaults_blocks_logos_vis_rules_items_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_logos_vis_rules_items_when";
  DROP TYPE "public"."enum_cpt_defaults_blocks_logos_vis_match";
  DROP TYPE "public"."enum_cpt_defaults_blocks_testimonials_vis_rules_device_show";
  DROP TYPE "public"."enum_cpt_defaults_blocks_testimonials_vis_rules_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_testimonials_vis_rules_field_name";
  DROP TYPE "public"."enum_cpt_defaults_blocks_testimonials_vis_rules_field_operator";
  DROP TYPE "public"."enum_cpt_defaults_blocks_testimonials_vis_rules_items_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_testimonials_vis_rules_items_when";
  DROP TYPE "public"."enum_cpt_defaults_blocks_testimonials_vis_match";
  DROP TYPE "public"."enum_cpt_defaults_blocks_faq_vis_rules_device_show";
  DROP TYPE "public"."enum_cpt_defaults_blocks_faq_vis_rules_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_faq_vis_rules_field_name";
  DROP TYPE "public"."enum_cpt_defaults_blocks_faq_vis_rules_field_operator";
  DROP TYPE "public"."enum_cpt_defaults_blocks_faq_vis_rules_items_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_faq_vis_rules_items_when";
  DROP TYPE "public"."enum_cpt_defaults_blocks_faq_vis_match";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cta_vis_rules_device_show";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cta_vis_rules_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cta_vis_rules_field_name";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cta_vis_rules_field_operator";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cta_vis_rules_items_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cta_vis_rules_items_when";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cta_vis_match";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_device_show";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_field_name";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_field_operator";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_items_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_rules_items_when";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_vis_match";`)
}
