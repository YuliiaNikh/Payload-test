import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_hero_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_hero_variant" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum_pages_blocks_hero_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_hero_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_hero_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_pages_blocks_media_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_media_text_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_media_text_image_position" AS ENUM('start', 'end');
  CREATE TYPE "public"."enum_pages_blocks_media_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_media_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_media_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_pages_blocks_cards_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_pages_blocks_cards_card_style" AS ENUM('default', 'outline', 'elevated', 'horizontal');
  CREATE TYPE "public"."enum_pages_blocks_cards_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_cards_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_cards_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_pages_blocks_col_buttons_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_col_buttons_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_columns_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_columns_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_columns_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_pages_blocks_tabs_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_tabs_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_tabs_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_pages_blocks_stats_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_stats_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_stats_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_pages_blocks_logos_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_logos_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_logos_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_pages_blocks_faq_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_faq_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_faq_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_cta_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_cta_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_cta_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_pages_template" AS ENUM('blank', 'landing', 'about', 'contact', 'archive');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_variant" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_media_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_media_text_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_media_text_image_position" AS ENUM('start', 'end');
  CREATE TYPE "public"."enum__pages_v_blocks_media_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_media_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_media_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_card_style" AS ENUM('default', 'outline', 'elevated', 'horizontal');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_col_buttons_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_col_buttons_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_columns_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_columns_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_columns_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_tabs_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_tabs_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_tabs_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_stats_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_stats_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_stats_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_logos_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_logos_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_logos_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__pages_v_version_template" AS ENUM('blank', 'landing', 'about', 'contact', 'archive');
  CREATE TYPE "public"."enum_posts_blocks_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_posts_blocks_hero_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_posts_blocks_hero_variant" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum_posts_blocks_hero_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_posts_blocks_hero_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_posts_blocks_hero_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_posts_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum_posts_blocks_rich_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_posts_blocks_rich_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_posts_blocks_rich_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_posts_blocks_media_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_posts_blocks_media_text_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_posts_blocks_media_text_image_position" AS ENUM('start', 'end');
  CREATE TYPE "public"."enum_posts_blocks_media_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_posts_blocks_media_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_posts_blocks_media_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_posts_blocks_cards_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_posts_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_posts_blocks_cards_card_style" AS ENUM('default', 'outline', 'elevated', 'horizontal');
  CREATE TYPE "public"."enum_posts_blocks_cards_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_posts_blocks_cards_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_posts_blocks_cards_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_posts_blocks_col_buttons_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_posts_blocks_col_buttons_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_posts_blocks_columns_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_posts_blocks_columns_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_posts_blocks_columns_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_posts_blocks_tabs_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_posts_blocks_tabs_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_posts_blocks_tabs_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_posts_blocks_stats_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_posts_blocks_stats_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_posts_blocks_stats_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_posts_blocks_logos_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_posts_blocks_logos_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_posts_blocks_logos_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_posts_blocks_testimonials_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_posts_blocks_testimonials_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_posts_blocks_testimonials_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_posts_blocks_faq_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_posts_blocks_faq_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_posts_blocks_faq_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_posts_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_posts_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_posts_blocks_cta_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_posts_blocks_cta_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_posts_blocks_cta_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_posts_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__posts_v_blocks_hero_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__posts_v_blocks_hero_variant" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum__posts_v_blocks_hero_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__posts_v_blocks_hero_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__posts_v_blocks_hero_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum__posts_v_blocks_rich_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__posts_v_blocks_rich_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__posts_v_blocks_rich_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_media_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__posts_v_blocks_media_text_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__posts_v_blocks_media_text_image_position" AS ENUM('start', 'end');
  CREATE TYPE "public"."enum__posts_v_blocks_media_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__posts_v_blocks_media_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__posts_v_blocks_media_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_cards_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__posts_v_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__posts_v_blocks_cards_card_style" AS ENUM('default', 'outline', 'elevated', 'horizontal');
  CREATE TYPE "public"."enum__posts_v_blocks_cards_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__posts_v_blocks_cards_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__posts_v_blocks_cards_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_col_buttons_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__posts_v_blocks_col_buttons_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__posts_v_blocks_columns_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__posts_v_blocks_columns_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__posts_v_blocks_columns_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_tabs_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__posts_v_blocks_tabs_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__posts_v_blocks_tabs_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_stats_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__posts_v_blocks_stats_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__posts_v_blocks_stats_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_logos_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__posts_v_blocks_logos_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__posts_v_blocks_logos_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_testimonials_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__posts_v_blocks_testimonials_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__posts_v_blocks_testimonials_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_faq_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__posts_v_blocks_faq_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__posts_v_blocks_faq_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__posts_v_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__posts_v_blocks_cta_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__posts_v_blocks_cta_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__posts_v_blocks_cta_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__posts_v_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_events_blocks_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_events_blocks_hero_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_events_blocks_hero_variant" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum_events_blocks_hero_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_events_blocks_hero_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_events_blocks_hero_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_events_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum_events_blocks_rich_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_events_blocks_rich_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_events_blocks_rich_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_events_blocks_media_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_events_blocks_media_text_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_events_blocks_media_text_image_position" AS ENUM('start', 'end');
  CREATE TYPE "public"."enum_events_blocks_media_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_events_blocks_media_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_events_blocks_media_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_events_blocks_cards_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_events_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_events_blocks_cards_card_style" AS ENUM('default', 'outline', 'elevated', 'horizontal');
  CREATE TYPE "public"."enum_events_blocks_cards_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_events_blocks_cards_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_events_blocks_cards_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_events_blocks_col_buttons_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_events_blocks_col_buttons_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_events_blocks_columns_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_events_blocks_columns_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_events_blocks_columns_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_events_blocks_tabs_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_events_blocks_tabs_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_events_blocks_tabs_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_events_blocks_stats_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_events_blocks_stats_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_events_blocks_stats_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_events_blocks_logos_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_events_blocks_logos_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_events_blocks_logos_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_events_blocks_testimonials_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_events_blocks_testimonials_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_events_blocks_testimonials_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_events_blocks_faq_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_events_blocks_faq_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_events_blocks_faq_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_events_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_events_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_events_blocks_cta_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_events_blocks_cta_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_events_blocks_cta_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_events_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__events_v_blocks_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__events_v_blocks_hero_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__events_v_blocks_hero_variant" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum__events_v_blocks_hero_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__events_v_blocks_hero_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__events_v_blocks_hero_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__events_v_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum__events_v_blocks_rich_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__events_v_blocks_rich_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__events_v_blocks_rich_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__events_v_blocks_media_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__events_v_blocks_media_text_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__events_v_blocks_media_text_image_position" AS ENUM('start', 'end');
  CREATE TYPE "public"."enum__events_v_blocks_media_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__events_v_blocks_media_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__events_v_blocks_media_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__events_v_blocks_cards_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__events_v_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__events_v_blocks_cards_card_style" AS ENUM('default', 'outline', 'elevated', 'horizontal');
  CREATE TYPE "public"."enum__events_v_blocks_cards_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__events_v_blocks_cards_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__events_v_blocks_cards_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__events_v_blocks_col_buttons_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__events_v_blocks_col_buttons_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__events_v_blocks_columns_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__events_v_blocks_columns_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__events_v_blocks_columns_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__events_v_blocks_tabs_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__events_v_blocks_tabs_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__events_v_blocks_tabs_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__events_v_blocks_stats_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__events_v_blocks_stats_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__events_v_blocks_stats_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__events_v_blocks_logos_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__events_v_blocks_logos_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__events_v_blocks_logos_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__events_v_blocks_testimonials_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__events_v_blocks_testimonials_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__events_v_blocks_testimonials_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__events_v_blocks_faq_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__events_v_blocks_faq_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__events_v_blocks_faq_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__events_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__events_v_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__events_v_blocks_cta_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__events_v_blocks_cta_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__events_v_blocks_cta_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__events_v_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_resources_blocks_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_resources_blocks_hero_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_resources_blocks_hero_variant" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum_resources_blocks_hero_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_resources_blocks_hero_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_resources_blocks_hero_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_resources_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum_resources_blocks_rich_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_resources_blocks_rich_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_resources_blocks_rich_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_resources_blocks_media_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_resources_blocks_media_text_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_resources_blocks_media_text_image_position" AS ENUM('start', 'end');
  CREATE TYPE "public"."enum_resources_blocks_media_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_resources_blocks_media_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_resources_blocks_media_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_resources_blocks_cards_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_resources_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_resources_blocks_cards_card_style" AS ENUM('default', 'outline', 'elevated', 'horizontal');
  CREATE TYPE "public"."enum_resources_blocks_cards_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_resources_blocks_cards_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_resources_blocks_cards_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_resources_blocks_col_buttons_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_resources_blocks_col_buttons_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_resources_blocks_columns_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_resources_blocks_columns_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_resources_blocks_columns_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_resources_blocks_tabs_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_resources_blocks_tabs_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_resources_blocks_tabs_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_resources_blocks_stats_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_resources_blocks_stats_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_resources_blocks_stats_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_resources_blocks_logos_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_resources_blocks_logos_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_resources_blocks_logos_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_resources_blocks_testimonials_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_resources_blocks_testimonials_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_resources_blocks_testimonials_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_resources_blocks_faq_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_resources_blocks_faq_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_resources_blocks_faq_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_resources_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_resources_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_resources_blocks_cta_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_resources_blocks_cta_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_resources_blocks_cta_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_resources_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__resources_v_blocks_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__resources_v_blocks_hero_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__resources_v_blocks_hero_variant" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum__resources_v_blocks_hero_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__resources_v_blocks_hero_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__resources_v_blocks_hero_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__resources_v_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum__resources_v_blocks_rich_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__resources_v_blocks_rich_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__resources_v_blocks_rich_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__resources_v_blocks_media_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__resources_v_blocks_media_text_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__resources_v_blocks_media_text_image_position" AS ENUM('start', 'end');
  CREATE TYPE "public"."enum__resources_v_blocks_media_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__resources_v_blocks_media_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__resources_v_blocks_media_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__resources_v_blocks_cards_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__resources_v_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__resources_v_blocks_cards_card_style" AS ENUM('default', 'outline', 'elevated', 'horizontal');
  CREATE TYPE "public"."enum__resources_v_blocks_cards_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__resources_v_blocks_cards_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__resources_v_blocks_cards_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__resources_v_blocks_col_buttons_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__resources_v_blocks_col_buttons_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__resources_v_blocks_columns_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__resources_v_blocks_columns_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__resources_v_blocks_columns_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__resources_v_blocks_tabs_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__resources_v_blocks_tabs_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__resources_v_blocks_tabs_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__resources_v_blocks_stats_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__resources_v_blocks_stats_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__resources_v_blocks_stats_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__resources_v_blocks_logos_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__resources_v_blocks_logos_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__resources_v_blocks_logos_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__resources_v_blocks_testimonials_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__resources_v_blocks_testimonials_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__resources_v_blocks_testimonials_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__resources_v_blocks_faq_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__resources_v_blocks_faq_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__resources_v_blocks_faq_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__resources_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__resources_v_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__resources_v_blocks_cta_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__resources_v_blocks_cta_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__resources_v_blocks_cta_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__resources_v_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_glossary_blocks_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_glossary_blocks_hero_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_glossary_blocks_hero_variant" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum_glossary_blocks_hero_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_glossary_blocks_hero_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_glossary_blocks_hero_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_glossary_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum_glossary_blocks_rich_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_glossary_blocks_rich_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_glossary_blocks_rich_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_glossary_blocks_media_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_glossary_blocks_media_text_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_glossary_blocks_media_text_image_position" AS ENUM('start', 'end');
  CREATE TYPE "public"."enum_glossary_blocks_media_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_glossary_blocks_media_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_glossary_blocks_media_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_glossary_blocks_cards_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_glossary_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_glossary_blocks_cards_card_style" AS ENUM('default', 'outline', 'elevated', 'horizontal');
  CREATE TYPE "public"."enum_glossary_blocks_cards_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_glossary_blocks_cards_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_glossary_blocks_cards_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_glossary_blocks_col_buttons_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_glossary_blocks_col_buttons_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_glossary_blocks_columns_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_glossary_blocks_columns_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_glossary_blocks_columns_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_glossary_blocks_tabs_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_glossary_blocks_tabs_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_glossary_blocks_tabs_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_glossary_blocks_stats_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_glossary_blocks_stats_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_glossary_blocks_stats_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_glossary_blocks_logos_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_glossary_blocks_logos_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_glossary_blocks_logos_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_glossary_blocks_testimonials_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_glossary_blocks_testimonials_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_glossary_blocks_testimonials_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_glossary_blocks_faq_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_glossary_blocks_faq_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_glossary_blocks_faq_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_glossary_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_glossary_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_glossary_blocks_cta_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_glossary_blocks_cta_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_glossary_blocks_cta_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_glossary_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__glossary_v_blocks_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__glossary_v_blocks_hero_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__glossary_v_blocks_hero_variant" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum__glossary_v_blocks_hero_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__glossary_v_blocks_hero_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__glossary_v_blocks_hero_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__glossary_v_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum__glossary_v_blocks_rich_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__glossary_v_blocks_rich_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__glossary_v_blocks_rich_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__glossary_v_blocks_media_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__glossary_v_blocks_media_text_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__glossary_v_blocks_media_text_image_position" AS ENUM('start', 'end');
  CREATE TYPE "public"."enum__glossary_v_blocks_media_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__glossary_v_blocks_media_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__glossary_v_blocks_media_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__glossary_v_blocks_cards_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__glossary_v_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__glossary_v_blocks_cards_card_style" AS ENUM('default', 'outline', 'elevated', 'horizontal');
  CREATE TYPE "public"."enum__glossary_v_blocks_cards_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__glossary_v_blocks_cards_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__glossary_v_blocks_cards_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__glossary_v_blocks_col_buttons_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__glossary_v_blocks_col_buttons_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__glossary_v_blocks_columns_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__glossary_v_blocks_columns_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__glossary_v_blocks_columns_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__glossary_v_blocks_tabs_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__glossary_v_blocks_tabs_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__glossary_v_blocks_tabs_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__glossary_v_blocks_stats_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__glossary_v_blocks_stats_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__glossary_v_blocks_stats_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__glossary_v_blocks_logos_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__glossary_v_blocks_logos_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__glossary_v_blocks_logos_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__glossary_v_blocks_testimonials_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__glossary_v_blocks_testimonials_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__glossary_v_blocks_testimonials_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__glossary_v_blocks_faq_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__glossary_v_blocks_faq_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__glossary_v_blocks_faq_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__glossary_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__glossary_v_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__glossary_v_blocks_cta_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__glossary_v_blocks_cta_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__glossary_v_blocks_cta_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__glossary_v_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_people_blocks_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_people_blocks_hero_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_people_blocks_hero_variant" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum_people_blocks_hero_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_people_blocks_hero_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_people_blocks_hero_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_people_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum_people_blocks_rich_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_people_blocks_rich_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_people_blocks_rich_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_people_blocks_media_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_people_blocks_media_text_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_people_blocks_media_text_image_position" AS ENUM('start', 'end');
  CREATE TYPE "public"."enum_people_blocks_media_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_people_blocks_media_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_people_blocks_media_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_people_blocks_cards_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_people_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_people_blocks_cards_card_style" AS ENUM('default', 'outline', 'elevated', 'horizontal');
  CREATE TYPE "public"."enum_people_blocks_cards_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_people_blocks_cards_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_people_blocks_cards_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_people_blocks_col_buttons_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_people_blocks_col_buttons_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_people_blocks_columns_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_people_blocks_columns_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_people_blocks_columns_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_people_blocks_tabs_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_people_blocks_tabs_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_people_blocks_tabs_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_people_blocks_stats_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_people_blocks_stats_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_people_blocks_stats_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_people_blocks_logos_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_people_blocks_logos_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_people_blocks_logos_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_people_blocks_testimonials_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_people_blocks_testimonials_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_people_blocks_testimonials_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_people_blocks_faq_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_people_blocks_faq_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_people_blocks_faq_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_people_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_people_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_people_blocks_cta_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_people_blocks_cta_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_people_blocks_cta_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_people_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__people_v_blocks_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__people_v_blocks_hero_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__people_v_blocks_hero_variant" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum__people_v_blocks_hero_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__people_v_blocks_hero_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__people_v_blocks_hero_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__people_v_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum__people_v_blocks_rich_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__people_v_blocks_rich_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__people_v_blocks_rich_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__people_v_blocks_media_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__people_v_blocks_media_text_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__people_v_blocks_media_text_image_position" AS ENUM('start', 'end');
  CREATE TYPE "public"."enum__people_v_blocks_media_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__people_v_blocks_media_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__people_v_blocks_media_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__people_v_blocks_cards_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__people_v_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__people_v_blocks_cards_card_style" AS ENUM('default', 'outline', 'elevated', 'horizontal');
  CREATE TYPE "public"."enum__people_v_blocks_cards_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__people_v_blocks_cards_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__people_v_blocks_cards_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__people_v_blocks_col_buttons_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__people_v_blocks_col_buttons_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__people_v_blocks_columns_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__people_v_blocks_columns_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__people_v_blocks_columns_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__people_v_blocks_tabs_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__people_v_blocks_tabs_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__people_v_blocks_tabs_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__people_v_blocks_stats_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__people_v_blocks_stats_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__people_v_blocks_stats_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__people_v_blocks_logos_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__people_v_blocks_logos_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__people_v_blocks_logos_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__people_v_blocks_testimonials_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__people_v_blocks_testimonials_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__people_v_blocks_testimonials_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__people_v_blocks_faq_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__people_v_blocks_faq_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__people_v_blocks_faq_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__people_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__people_v_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__people_v_blocks_cta_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__people_v_blocks_cta_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__people_v_blocks_cta_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__people_v_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_reusable_blocks_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_reusable_blocks_hero_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_reusable_blocks_hero_variant" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum_reusable_blocks_hero_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_reusable_blocks_hero_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_reusable_blocks_hero_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_reusable_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum_reusable_blocks_rich_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_reusable_blocks_rich_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_reusable_blocks_rich_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_reusable_blocks_media_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_reusable_blocks_media_text_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_reusable_blocks_media_text_image_position" AS ENUM('start', 'end');
  CREATE TYPE "public"."enum_reusable_blocks_media_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_reusable_blocks_media_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_reusable_blocks_media_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_reusable_blocks_cards_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_reusable_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_reusable_blocks_cards_card_style" AS ENUM('default', 'outline', 'elevated', 'horizontal');
  CREATE TYPE "public"."enum_reusable_blocks_cards_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_reusable_blocks_cards_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_reusable_blocks_cards_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_reusable_blocks_col_buttons_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_reusable_blocks_col_buttons_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_reusable_blocks_columns_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_reusable_blocks_columns_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_reusable_blocks_columns_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_reusable_blocks_tabs_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_reusable_blocks_tabs_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_reusable_blocks_tabs_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_reusable_blocks_stats_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_reusable_blocks_stats_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_reusable_blocks_stats_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_reusable_blocks_logos_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_reusable_blocks_logos_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_reusable_blocks_logos_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_reusable_blocks_testimonials_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_reusable_blocks_testimonials_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_reusable_blocks_testimonials_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_reusable_blocks_faq_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_reusable_blocks_faq_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_reusable_blocks_faq_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_reusable_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_reusable_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_reusable_blocks_cta_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_reusable_blocks_cta_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_reusable_blocks_cta_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_reusable_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_reusable_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__reusable_v_blocks_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__reusable_v_blocks_hero_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__reusable_v_blocks_hero_variant" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum__reusable_v_blocks_hero_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__reusable_v_blocks_hero_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__reusable_v_blocks_hero_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__reusable_v_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum__reusable_v_blocks_rich_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__reusable_v_blocks_rich_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__reusable_v_blocks_rich_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__reusable_v_blocks_media_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__reusable_v_blocks_media_text_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__reusable_v_blocks_media_text_image_position" AS ENUM('start', 'end');
  CREATE TYPE "public"."enum__reusable_v_blocks_media_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__reusable_v_blocks_media_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__reusable_v_blocks_media_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__reusable_v_blocks_cards_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__reusable_v_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__reusable_v_blocks_cards_card_style" AS ENUM('default', 'outline', 'elevated', 'horizontal');
  CREATE TYPE "public"."enum__reusable_v_blocks_cards_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__reusable_v_blocks_cards_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__reusable_v_blocks_cards_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__reusable_v_blocks_col_buttons_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__reusable_v_blocks_col_buttons_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__reusable_v_blocks_columns_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__reusable_v_blocks_columns_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__reusable_v_blocks_columns_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__reusable_v_blocks_tabs_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__reusable_v_blocks_tabs_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__reusable_v_blocks_tabs_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__reusable_v_blocks_stats_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__reusable_v_blocks_stats_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__reusable_v_blocks_stats_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__reusable_v_blocks_logos_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__reusable_v_blocks_logos_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__reusable_v_blocks_logos_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__reusable_v_blocks_testimonials_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__reusable_v_blocks_testimonials_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__reusable_v_blocks_testimonials_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__reusable_v_blocks_faq_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__reusable_v_blocks_faq_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__reusable_v_blocks_faq_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__reusable_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__reusable_v_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__reusable_v_blocks_cta_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__reusable_v_blocks_cta_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__reusable_v_blocks_cta_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum__reusable_v_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum__reusable_v_published_locale" AS ENUM('en', 'he');
  CREATE TYPE "public"."enum__reusable_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hero_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hero_variant" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hero_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hero_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_hero_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_rich_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_rich_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_rich_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_media_text_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_media_text_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_media_text_image_position" AS ENUM('start', 'end');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_media_text_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_media_text_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_media_text_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cards_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cards_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cards_card_style" AS ENUM('default', 'outline', 'elevated', 'horizontal');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cards_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cards_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cards_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_col_buttons_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_col_buttons_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_columns_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_columns_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_columns_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_tabs_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_tabs_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_tabs_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_stats_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_stats_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_stats_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_logos_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_logos_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_logos_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_testimonials_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_testimonials_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_testimonials_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_faq_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_faq_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_faq_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cta_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cta_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_cta_style_align" AS ENUM('start', 'center');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_field" AS ENUM('title', 'excerpt', 'publishedDate', 'startDate', 'endDate', 'location', 'jobTitle');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_format" AS ENUM('text', 'heading', 'date');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_style_background" AS ENUM('default', 'surface', 'accent', 'dark');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_style_spacing" AS ENUM('none', 'sm', 'md', 'lg');
  CREATE TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_style_align" AS ENUM('start', 'center');
  CREATE TABLE "pages_blocks_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_hero_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"variant" "enum_pages_blocks_hero_variant" DEFAULT 'split',
  	"style_background" "enum_pages_blocks_hero_style_background" DEFAULT 'default',
  	"style_spacing" "enum_pages_blocks_hero_style_spacing" DEFAULT 'md',
  	"style_align" "enum_pages_blocks_hero_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"width" "enum_pages_blocks_rich_text_width" DEFAULT 'narrow',
  	"style_background" "enum_pages_blocks_rich_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum_pages_blocks_rich_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum_pages_blocks_rich_text_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_media_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_media_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_media_text_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "pages_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"image_position" "enum_pages_blocks_media_text_image_position" DEFAULT 'start',
  	"style_background" "enum_pages_blocks_media_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum_pages_blocks_media_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum_pages_blocks_media_text_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"text" varchar,
  	"link_type" "enum_pages_blocks_cards_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "pages_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum_pages_blocks_cards_columns" DEFAULT '3',
  	"card_style" "enum_pages_blocks_cards_card_style" DEFAULT 'outline',
  	"style_background" "enum_pages_blocks_cards_style_background" DEFAULT 'default',
  	"style_spacing" "enum_pages_blocks_cards_style_spacing" DEFAULT 'md',
  	"style_align" "enum_pages_blocks_cards_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_col_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_col_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_col_buttons_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_col_buttons_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_col_buttons_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "pages_blocks_col_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_pages_blocks_columns_style_background" DEFAULT 'default',
  	"style_spacing" "enum_pages_blocks_columns_style_spacing" DEFAULT 'md',
  	"style_align" "enum_pages_blocks_columns_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"content" jsonb,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_pages_blocks_tabs_style_background" DEFAULT 'default',
  	"style_spacing" "enum_pages_blocks_tabs_style_spacing" DEFAULT 'md',
  	"style_align" "enum_pages_blocks_tabs_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_pages_blocks_stats_style_background" DEFAULT 'default',
  	"style_spacing" "enum_pages_blocks_stats_style_spacing" DEFAULT 'md',
  	"style_align" "enum_pages_blocks_stats_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_logos_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"url" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_pages_blocks_logos_style_background" DEFAULT 'default',
  	"style_spacing" "enum_pages_blocks_logos_style_spacing" DEFAULT 'md',
  	"style_align" "enum_pages_blocks_logos_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"name" varchar,
  	"role" varchar,
  	"photo_id" integer
  );
  
  CREATE TABLE "pages_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_pages_blocks_testimonials_style_background" DEFAULT 'default',
  	"style_spacing" "enum_pages_blocks_testimonials_style_spacing" DEFAULT 'md',
  	"style_align" "enum_pages_blocks_testimonials_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb
  );
  
  CREATE TABLE "pages_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_pages_blocks_faq_style_background" DEFAULT 'default',
  	"style_spacing" "enum_pages_blocks_faq_style_spacing" DEFAULT 'md',
  	"style_align" "enum_pages_blocks_faq_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_cta_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"style_background" "enum_pages_blocks_cta_style_background" DEFAULT 'default',
  	"style_spacing" "enum_pages_blocks_cta_style_spacing" DEFAULT 'md',
  	"style_align" "enum_pages_blocks_cta_style_align" DEFAULT 'start',
  	"block_name" varchar
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
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_reusable_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_rels" (
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
  
  CREATE TABLE "_pages_v_blocks_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_hero_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"variant" "enum__pages_v_blocks_hero_variant" DEFAULT 'split',
  	"style_background" "enum__pages_v_blocks_hero_style_background" DEFAULT 'default',
  	"style_spacing" "enum__pages_v_blocks_hero_style_spacing" DEFAULT 'md',
  	"style_align" "enum__pages_v_blocks_hero_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"width" "enum__pages_v_blocks_rich_text_width" DEFAULT 'narrow',
  	"style_background" "enum__pages_v_blocks_rich_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum__pages_v_blocks_rich_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum__pages_v_blocks_rich_text_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_media_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_media_text_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"image_position" "enum__pages_v_blocks_media_text_image_position" DEFAULT 'start',
  	"style_background" "enum__pages_v_blocks_media_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum__pages_v_blocks_media_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum__pages_v_blocks_media_text_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"text" varchar,
  	"link_type" "enum__pages_v_blocks_cards_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum__pages_v_blocks_cards_columns" DEFAULT '3',
  	"card_style" "enum__pages_v_blocks_cards_card_style" DEFAULT 'outline',
  	"style_background" "enum__pages_v_blocks_cards_style_background" DEFAULT 'default',
  	"style_spacing" "enum__pages_v_blocks_cards_style_spacing" DEFAULT 'md',
  	"style_align" "enum__pages_v_blocks_cards_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_col_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_col_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_col_buttons_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_col_buttons_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_col_buttons_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_col_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__pages_v_blocks_columns_style_background" DEFAULT 'default',
  	"style_spacing" "enum__pages_v_blocks_columns_style_spacing" DEFAULT 'md',
  	"style_align" "enum__pages_v_blocks_columns_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__pages_v_blocks_tabs_style_background" DEFAULT 'default',
  	"style_spacing" "enum__pages_v_blocks_tabs_style_spacing" DEFAULT 'md',
  	"style_align" "enum__pages_v_blocks_tabs_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__pages_v_blocks_stats_style_background" DEFAULT 'default',
  	"style_spacing" "enum__pages_v_blocks_stats_style_spacing" DEFAULT 'md',
  	"style_align" "enum__pages_v_blocks_stats_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_logos_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"url" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__pages_v_blocks_logos_style_background" DEFAULT 'default',
  	"style_spacing" "enum__pages_v_blocks_logos_style_spacing" DEFAULT 'md',
  	"style_align" "enum__pages_v_blocks_logos_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"name" varchar,
  	"role" varchar,
  	"photo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__pages_v_blocks_testimonials_style_background" DEFAULT 'default',
  	"style_spacing" "enum__pages_v_blocks_testimonials_style_spacing" DEFAULT 'md',
  	"style_align" "enum__pages_v_blocks_testimonials_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__pages_v_blocks_faq_style_background" DEFAULT 'default',
  	"style_spacing" "enum__pages_v_blocks_faq_style_spacing" DEFAULT 'md',
  	"style_align" "enum__pages_v_blocks_faq_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_cta_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"style_background" "enum__pages_v_blocks_cta_style_background" DEFAULT 'default',
  	"style_spacing" "enum__pages_v_blocks_cta_style_spacing" DEFAULT 'md',
  	"style_align" "enum__pages_v_blocks_cta_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
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
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_reusable_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_rels" (
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
  
  CREATE TABLE "posts_blocks_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_posts_blocks_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_posts_blocks_hero_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "posts_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"variant" "enum_posts_blocks_hero_variant" DEFAULT 'split',
  	"style_background" "enum_posts_blocks_hero_style_background" DEFAULT 'default',
  	"style_spacing" "enum_posts_blocks_hero_style_spacing" DEFAULT 'md',
  	"style_align" "enum_posts_blocks_hero_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"width" "enum_posts_blocks_rich_text_width" DEFAULT 'narrow',
  	"style_background" "enum_posts_blocks_rich_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum_posts_blocks_rich_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum_posts_blocks_rich_text_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_media_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_posts_blocks_media_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_posts_blocks_media_text_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "posts_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"image_position" "enum_posts_blocks_media_text_image_position" DEFAULT 'start',
  	"style_background" "enum_posts_blocks_media_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum_posts_blocks_media_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum_posts_blocks_media_text_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"text" varchar,
  	"link_type" "enum_posts_blocks_cards_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "posts_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum_posts_blocks_cards_columns" DEFAULT '3',
  	"card_style" "enum_posts_blocks_cards_card_style" DEFAULT 'outline',
  	"style_background" "enum_posts_blocks_cards_style_background" DEFAULT 'default',
  	"style_spacing" "enum_posts_blocks_cards_style_spacing" DEFAULT 'md',
  	"style_align" "enum_posts_blocks_cards_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_col_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_col_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_col_buttons_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_posts_blocks_col_buttons_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_posts_blocks_col_buttons_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "posts_blocks_col_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_posts_blocks_columns_style_background" DEFAULT 'default',
  	"style_spacing" "enum_posts_blocks_columns_style_spacing" DEFAULT 'md',
  	"style_align" "enum_posts_blocks_columns_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"content" jsonb,
  	"image_id" integer
  );
  
  CREATE TABLE "posts_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_posts_blocks_tabs_style_background" DEFAULT 'default',
  	"style_spacing" "enum_posts_blocks_tabs_style_spacing" DEFAULT 'md',
  	"style_align" "enum_posts_blocks_tabs_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "posts_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_posts_blocks_stats_style_background" DEFAULT 'default',
  	"style_spacing" "enum_posts_blocks_stats_style_spacing" DEFAULT 'md',
  	"style_align" "enum_posts_blocks_stats_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_logos_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"url" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "posts_blocks_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_posts_blocks_logos_style_background" DEFAULT 'default',
  	"style_spacing" "enum_posts_blocks_logos_style_spacing" DEFAULT 'md',
  	"style_align" "enum_posts_blocks_logos_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"name" varchar,
  	"role" varchar,
  	"photo_id" integer
  );
  
  CREATE TABLE "posts_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_posts_blocks_testimonials_style_background" DEFAULT 'default',
  	"style_spacing" "enum_posts_blocks_testimonials_style_spacing" DEFAULT 'md',
  	"style_align" "enum_posts_blocks_testimonials_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb
  );
  
  CREATE TABLE "posts_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_posts_blocks_faq_style_background" DEFAULT 'default',
  	"style_spacing" "enum_posts_blocks_faq_style_spacing" DEFAULT 'md',
  	"style_align" "enum_posts_blocks_faq_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_posts_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_posts_blocks_cta_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "posts_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"style_background" "enum_posts_blocks_cta_style_background" DEFAULT 'default',
  	"style_spacing" "enum_posts_blocks_cta_style_spacing" DEFAULT 'md',
  	"style_align" "enum_posts_blocks_cta_style_align" DEFAULT 'start',
  	"block_name" varchar
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
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_reusable_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__posts_v_blocks_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__posts_v_blocks_hero_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"variant" "enum__posts_v_blocks_hero_variant" DEFAULT 'split',
  	"style_background" "enum__posts_v_blocks_hero_style_background" DEFAULT 'default',
  	"style_spacing" "enum__posts_v_blocks_hero_style_spacing" DEFAULT 'md',
  	"style_align" "enum__posts_v_blocks_hero_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"width" "enum__posts_v_blocks_rich_text_width" DEFAULT 'narrow',
  	"style_background" "enum__posts_v_blocks_rich_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum__posts_v_blocks_rich_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum__posts_v_blocks_rich_text_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_media_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__posts_v_blocks_media_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__posts_v_blocks_media_text_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"image_position" "enum__posts_v_blocks_media_text_image_position" DEFAULT 'start',
  	"style_background" "enum__posts_v_blocks_media_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum__posts_v_blocks_media_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum__posts_v_blocks_media_text_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"text" varchar,
  	"link_type" "enum__posts_v_blocks_cards_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum__posts_v_blocks_cards_columns" DEFAULT '3',
  	"card_style" "enum__posts_v_blocks_cards_card_style" DEFAULT 'outline',
  	"style_background" "enum__posts_v_blocks_cards_style_background" DEFAULT 'default',
  	"style_spacing" "enum__posts_v_blocks_cards_style_spacing" DEFAULT 'md',
  	"style_align" "enum__posts_v_blocks_cards_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_col_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_col_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_col_buttons_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__posts_v_blocks_col_buttons_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__posts_v_blocks_col_buttons_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_col_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__posts_v_blocks_columns_style_background" DEFAULT 'default',
  	"style_spacing" "enum__posts_v_blocks_columns_style_spacing" DEFAULT 'md',
  	"style_align" "enum__posts_v_blocks_columns_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__posts_v_blocks_tabs_style_background" DEFAULT 'default',
  	"style_spacing" "enum__posts_v_blocks_tabs_style_spacing" DEFAULT 'md',
  	"style_align" "enum__posts_v_blocks_tabs_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__posts_v_blocks_stats_style_background" DEFAULT 'default',
  	"style_spacing" "enum__posts_v_blocks_stats_style_spacing" DEFAULT 'md',
  	"style_align" "enum__posts_v_blocks_stats_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_logos_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"url" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__posts_v_blocks_logos_style_background" DEFAULT 'default',
  	"style_spacing" "enum__posts_v_blocks_logos_style_spacing" DEFAULT 'md',
  	"style_align" "enum__posts_v_blocks_logos_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"name" varchar,
  	"role" varchar,
  	"photo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__posts_v_blocks_testimonials_style_background" DEFAULT 'default',
  	"style_spacing" "enum__posts_v_blocks_testimonials_style_spacing" DEFAULT 'md',
  	"style_align" "enum__posts_v_blocks_testimonials_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__posts_v_blocks_faq_style_background" DEFAULT 'default',
  	"style_spacing" "enum__posts_v_blocks_faq_style_spacing" DEFAULT 'md',
  	"style_align" "enum__posts_v_blocks_faq_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__posts_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__posts_v_blocks_cta_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"style_background" "enum__posts_v_blocks_cta_style_background" DEFAULT 'default',
  	"style_spacing" "enum__posts_v_blocks_cta_style_spacing" DEFAULT 'md',
  	"style_align" "enum__posts_v_blocks_cta_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
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
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_reusable_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_events_blocks_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_events_blocks_hero_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "events_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"variant" "enum_events_blocks_hero_variant" DEFAULT 'split',
  	"style_background" "enum_events_blocks_hero_style_background" DEFAULT 'default',
  	"style_spacing" "enum_events_blocks_hero_style_spacing" DEFAULT 'md',
  	"style_align" "enum_events_blocks_hero_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"width" "enum_events_blocks_rich_text_width" DEFAULT 'narrow',
  	"style_background" "enum_events_blocks_rich_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum_events_blocks_rich_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum_events_blocks_rich_text_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_media_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_events_blocks_media_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_events_blocks_media_text_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "events_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"image_position" "enum_events_blocks_media_text_image_position" DEFAULT 'start',
  	"style_background" "enum_events_blocks_media_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum_events_blocks_media_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum_events_blocks_media_text_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"text" varchar,
  	"link_type" "enum_events_blocks_cards_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "events_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum_events_blocks_cards_columns" DEFAULT '3',
  	"card_style" "enum_events_blocks_cards_card_style" DEFAULT 'outline',
  	"style_background" "enum_events_blocks_cards_style_background" DEFAULT 'default',
  	"style_spacing" "enum_events_blocks_cards_style_spacing" DEFAULT 'md',
  	"style_align" "enum_events_blocks_cards_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_col_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_col_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_col_buttons_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_events_blocks_col_buttons_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_events_blocks_col_buttons_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "events_blocks_col_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "events_blocks_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_events_blocks_columns_style_background" DEFAULT 'default',
  	"style_spacing" "enum_events_blocks_columns_style_spacing" DEFAULT 'md',
  	"style_align" "enum_events_blocks_columns_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"content" jsonb,
  	"image_id" integer
  );
  
  CREATE TABLE "events_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_events_blocks_tabs_style_background" DEFAULT 'default',
  	"style_spacing" "enum_events_blocks_tabs_style_spacing" DEFAULT 'md',
  	"style_align" "enum_events_blocks_tabs_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "events_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_events_blocks_stats_style_background" DEFAULT 'default',
  	"style_spacing" "enum_events_blocks_stats_style_spacing" DEFAULT 'md',
  	"style_align" "enum_events_blocks_stats_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_logos_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"url" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "events_blocks_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_events_blocks_logos_style_background" DEFAULT 'default',
  	"style_spacing" "enum_events_blocks_logos_style_spacing" DEFAULT 'md',
  	"style_align" "enum_events_blocks_logos_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"name" varchar,
  	"role" varchar,
  	"photo_id" integer
  );
  
  CREATE TABLE "events_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_events_blocks_testimonials_style_background" DEFAULT 'default',
  	"style_spacing" "enum_events_blocks_testimonials_style_spacing" DEFAULT 'md',
  	"style_align" "enum_events_blocks_testimonials_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb
  );
  
  CREATE TABLE "events_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_events_blocks_faq_style_background" DEFAULT 'default',
  	"style_spacing" "enum_events_blocks_faq_style_spacing" DEFAULT 'md',
  	"style_align" "enum_events_blocks_faq_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_events_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_events_blocks_cta_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "events_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"style_background" "enum_events_blocks_cta_style_background" DEFAULT 'default',
  	"style_spacing" "enum_events_blocks_cta_style_spacing" DEFAULT 'md',
  	"style_align" "enum_events_blocks_cta_style_align" DEFAULT 'start',
  	"block_name" varchar
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
  	"block_name" varchar
  );
  
  CREATE TABLE "events_blocks_reusable_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__events_v_blocks_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__events_v_blocks_hero_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"variant" "enum__events_v_blocks_hero_variant" DEFAULT 'split',
  	"style_background" "enum__events_v_blocks_hero_style_background" DEFAULT 'default',
  	"style_spacing" "enum__events_v_blocks_hero_style_spacing" DEFAULT 'md',
  	"style_align" "enum__events_v_blocks_hero_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"width" "enum__events_v_blocks_rich_text_width" DEFAULT 'narrow',
  	"style_background" "enum__events_v_blocks_rich_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum__events_v_blocks_rich_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum__events_v_blocks_rich_text_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_media_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__events_v_blocks_media_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__events_v_blocks_media_text_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"image_position" "enum__events_v_blocks_media_text_image_position" DEFAULT 'start',
  	"style_background" "enum__events_v_blocks_media_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum__events_v_blocks_media_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum__events_v_blocks_media_text_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"text" varchar,
  	"link_type" "enum__events_v_blocks_cards_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum__events_v_blocks_cards_columns" DEFAULT '3',
  	"card_style" "enum__events_v_blocks_cards_card_style" DEFAULT 'outline',
  	"style_background" "enum__events_v_blocks_cards_style_background" DEFAULT 'default',
  	"style_spacing" "enum__events_v_blocks_cards_style_spacing" DEFAULT 'md',
  	"style_align" "enum__events_v_blocks_cards_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_col_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_col_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_col_buttons_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__events_v_blocks_col_buttons_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__events_v_blocks_col_buttons_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_col_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__events_v_blocks_columns_style_background" DEFAULT 'default',
  	"style_spacing" "enum__events_v_blocks_columns_style_spacing" DEFAULT 'md',
  	"style_align" "enum__events_v_blocks_columns_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__events_v_blocks_tabs_style_background" DEFAULT 'default',
  	"style_spacing" "enum__events_v_blocks_tabs_style_spacing" DEFAULT 'md',
  	"style_align" "enum__events_v_blocks_tabs_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__events_v_blocks_stats_style_background" DEFAULT 'default',
  	"style_spacing" "enum__events_v_blocks_stats_style_spacing" DEFAULT 'md',
  	"style_align" "enum__events_v_blocks_stats_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_logos_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"url" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__events_v_blocks_logos_style_background" DEFAULT 'default',
  	"style_spacing" "enum__events_v_blocks_logos_style_spacing" DEFAULT 'md',
  	"style_align" "enum__events_v_blocks_logos_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"name" varchar,
  	"role" varchar,
  	"photo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__events_v_blocks_testimonials_style_background" DEFAULT 'default',
  	"style_spacing" "enum__events_v_blocks_testimonials_style_spacing" DEFAULT 'md',
  	"style_align" "enum__events_v_blocks_testimonials_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__events_v_blocks_faq_style_background" DEFAULT 'default',
  	"style_spacing" "enum__events_v_blocks_faq_style_spacing" DEFAULT 'md',
  	"style_align" "enum__events_v_blocks_faq_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__events_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__events_v_blocks_cta_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_events_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"style_background" "enum__events_v_blocks_cta_style_background" DEFAULT 'default',
  	"style_spacing" "enum__events_v_blocks_cta_style_spacing" DEFAULT 'md',
  	"style_align" "enum__events_v_blocks_cta_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
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
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_events_v_blocks_reusable_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_resources_blocks_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_resources_blocks_hero_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "resources_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"variant" "enum_resources_blocks_hero_variant" DEFAULT 'split',
  	"style_background" "enum_resources_blocks_hero_style_background" DEFAULT 'default',
  	"style_spacing" "enum_resources_blocks_hero_style_spacing" DEFAULT 'md',
  	"style_align" "enum_resources_blocks_hero_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"width" "enum_resources_blocks_rich_text_width" DEFAULT 'narrow',
  	"style_background" "enum_resources_blocks_rich_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum_resources_blocks_rich_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum_resources_blocks_rich_text_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_media_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_resources_blocks_media_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_resources_blocks_media_text_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "resources_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"image_position" "enum_resources_blocks_media_text_image_position" DEFAULT 'start',
  	"style_background" "enum_resources_blocks_media_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum_resources_blocks_media_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum_resources_blocks_media_text_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"text" varchar,
  	"link_type" "enum_resources_blocks_cards_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "resources_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum_resources_blocks_cards_columns" DEFAULT '3',
  	"card_style" "enum_resources_blocks_cards_card_style" DEFAULT 'outline',
  	"style_background" "enum_resources_blocks_cards_style_background" DEFAULT 'default',
  	"style_spacing" "enum_resources_blocks_cards_style_spacing" DEFAULT 'md',
  	"style_align" "enum_resources_blocks_cards_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_col_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_col_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_col_buttons_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_resources_blocks_col_buttons_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_resources_blocks_col_buttons_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "resources_blocks_col_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "resources_blocks_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_resources_blocks_columns_style_background" DEFAULT 'default',
  	"style_spacing" "enum_resources_blocks_columns_style_spacing" DEFAULT 'md',
  	"style_align" "enum_resources_blocks_columns_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"content" jsonb,
  	"image_id" integer
  );
  
  CREATE TABLE "resources_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_resources_blocks_tabs_style_background" DEFAULT 'default',
  	"style_spacing" "enum_resources_blocks_tabs_style_spacing" DEFAULT 'md',
  	"style_align" "enum_resources_blocks_tabs_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "resources_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_resources_blocks_stats_style_background" DEFAULT 'default',
  	"style_spacing" "enum_resources_blocks_stats_style_spacing" DEFAULT 'md',
  	"style_align" "enum_resources_blocks_stats_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_logos_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"url" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "resources_blocks_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_resources_blocks_logos_style_background" DEFAULT 'default',
  	"style_spacing" "enum_resources_blocks_logos_style_spacing" DEFAULT 'md',
  	"style_align" "enum_resources_blocks_logos_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"name" varchar,
  	"role" varchar,
  	"photo_id" integer
  );
  
  CREATE TABLE "resources_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_resources_blocks_testimonials_style_background" DEFAULT 'default',
  	"style_spacing" "enum_resources_blocks_testimonials_style_spacing" DEFAULT 'md',
  	"style_align" "enum_resources_blocks_testimonials_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb
  );
  
  CREATE TABLE "resources_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_resources_blocks_faq_style_background" DEFAULT 'default',
  	"style_spacing" "enum_resources_blocks_faq_style_spacing" DEFAULT 'md',
  	"style_align" "enum_resources_blocks_faq_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_resources_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_resources_blocks_cta_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "resources_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"style_background" "enum_resources_blocks_cta_style_background" DEFAULT 'default',
  	"style_spacing" "enum_resources_blocks_cta_style_spacing" DEFAULT 'md',
  	"style_align" "enum_resources_blocks_cta_style_align" DEFAULT 'start',
  	"block_name" varchar
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
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_reusable_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__resources_v_blocks_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__resources_v_blocks_hero_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"variant" "enum__resources_v_blocks_hero_variant" DEFAULT 'split',
  	"style_background" "enum__resources_v_blocks_hero_style_background" DEFAULT 'default',
  	"style_spacing" "enum__resources_v_blocks_hero_style_spacing" DEFAULT 'md',
  	"style_align" "enum__resources_v_blocks_hero_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"width" "enum__resources_v_blocks_rich_text_width" DEFAULT 'narrow',
  	"style_background" "enum__resources_v_blocks_rich_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum__resources_v_blocks_rich_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum__resources_v_blocks_rich_text_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_media_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__resources_v_blocks_media_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__resources_v_blocks_media_text_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"image_position" "enum__resources_v_blocks_media_text_image_position" DEFAULT 'start',
  	"style_background" "enum__resources_v_blocks_media_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum__resources_v_blocks_media_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum__resources_v_blocks_media_text_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"text" varchar,
  	"link_type" "enum__resources_v_blocks_cards_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum__resources_v_blocks_cards_columns" DEFAULT '3',
  	"card_style" "enum__resources_v_blocks_cards_card_style" DEFAULT 'outline',
  	"style_background" "enum__resources_v_blocks_cards_style_background" DEFAULT 'default',
  	"style_spacing" "enum__resources_v_blocks_cards_style_spacing" DEFAULT 'md',
  	"style_align" "enum__resources_v_blocks_cards_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_col_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_col_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_col_buttons_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__resources_v_blocks_col_buttons_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__resources_v_blocks_col_buttons_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_col_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__resources_v_blocks_columns_style_background" DEFAULT 'default',
  	"style_spacing" "enum__resources_v_blocks_columns_style_spacing" DEFAULT 'md',
  	"style_align" "enum__resources_v_blocks_columns_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__resources_v_blocks_tabs_style_background" DEFAULT 'default',
  	"style_spacing" "enum__resources_v_blocks_tabs_style_spacing" DEFAULT 'md',
  	"style_align" "enum__resources_v_blocks_tabs_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__resources_v_blocks_stats_style_background" DEFAULT 'default',
  	"style_spacing" "enum__resources_v_blocks_stats_style_spacing" DEFAULT 'md',
  	"style_align" "enum__resources_v_blocks_stats_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_logos_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"url" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__resources_v_blocks_logos_style_background" DEFAULT 'default',
  	"style_spacing" "enum__resources_v_blocks_logos_style_spacing" DEFAULT 'md',
  	"style_align" "enum__resources_v_blocks_logos_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"name" varchar,
  	"role" varchar,
  	"photo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__resources_v_blocks_testimonials_style_background" DEFAULT 'default',
  	"style_spacing" "enum__resources_v_blocks_testimonials_style_spacing" DEFAULT 'md',
  	"style_align" "enum__resources_v_blocks_testimonials_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__resources_v_blocks_faq_style_background" DEFAULT 'default',
  	"style_spacing" "enum__resources_v_blocks_faq_style_spacing" DEFAULT 'md',
  	"style_align" "enum__resources_v_blocks_faq_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__resources_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__resources_v_blocks_cta_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"style_background" "enum__resources_v_blocks_cta_style_background" DEFAULT 'default',
  	"style_spacing" "enum__resources_v_blocks_cta_style_spacing" DEFAULT 'md',
  	"style_align" "enum__resources_v_blocks_cta_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
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
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_reusable_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "glossary_blocks_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_glossary_blocks_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_glossary_blocks_hero_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "glossary_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"variant" "enum_glossary_blocks_hero_variant" DEFAULT 'split',
  	"style_background" "enum_glossary_blocks_hero_style_background" DEFAULT 'default',
  	"style_spacing" "enum_glossary_blocks_hero_style_spacing" DEFAULT 'md',
  	"style_align" "enum_glossary_blocks_hero_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "glossary_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"width" "enum_glossary_blocks_rich_text_width" DEFAULT 'narrow',
  	"style_background" "enum_glossary_blocks_rich_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum_glossary_blocks_rich_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum_glossary_blocks_rich_text_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "glossary_blocks_media_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_glossary_blocks_media_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_glossary_blocks_media_text_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "glossary_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"image_position" "enum_glossary_blocks_media_text_image_position" DEFAULT 'start',
  	"style_background" "enum_glossary_blocks_media_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum_glossary_blocks_media_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum_glossary_blocks_media_text_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "glossary_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"text" varchar,
  	"link_type" "enum_glossary_blocks_cards_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "glossary_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum_glossary_blocks_cards_columns" DEFAULT '3',
  	"card_style" "enum_glossary_blocks_cards_card_style" DEFAULT 'outline',
  	"style_background" "enum_glossary_blocks_cards_style_background" DEFAULT 'default',
  	"style_spacing" "enum_glossary_blocks_cards_style_spacing" DEFAULT 'md',
  	"style_align" "enum_glossary_blocks_cards_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "glossary_blocks_col_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "glossary_blocks_col_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "glossary_blocks_col_buttons_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_glossary_blocks_col_buttons_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_glossary_blocks_col_buttons_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "glossary_blocks_col_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "glossary_blocks_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "glossary_blocks_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_glossary_blocks_columns_style_background" DEFAULT 'default',
  	"style_spacing" "enum_glossary_blocks_columns_style_spacing" DEFAULT 'md',
  	"style_align" "enum_glossary_blocks_columns_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "glossary_blocks_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"content" jsonb,
  	"image_id" integer
  );
  
  CREATE TABLE "glossary_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_glossary_blocks_tabs_style_background" DEFAULT 'default',
  	"style_spacing" "enum_glossary_blocks_tabs_style_spacing" DEFAULT 'md',
  	"style_align" "enum_glossary_blocks_tabs_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "glossary_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "glossary_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_glossary_blocks_stats_style_background" DEFAULT 'default',
  	"style_spacing" "enum_glossary_blocks_stats_style_spacing" DEFAULT 'md',
  	"style_align" "enum_glossary_blocks_stats_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "glossary_blocks_logos_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"url" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "glossary_blocks_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_glossary_blocks_logos_style_background" DEFAULT 'default',
  	"style_spacing" "enum_glossary_blocks_logos_style_spacing" DEFAULT 'md',
  	"style_align" "enum_glossary_blocks_logos_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "glossary_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"name" varchar,
  	"role" varchar,
  	"photo_id" integer
  );
  
  CREATE TABLE "glossary_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_glossary_blocks_testimonials_style_background" DEFAULT 'default',
  	"style_spacing" "enum_glossary_blocks_testimonials_style_spacing" DEFAULT 'md',
  	"style_align" "enum_glossary_blocks_testimonials_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "glossary_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb
  );
  
  CREATE TABLE "glossary_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_glossary_blocks_faq_style_background" DEFAULT 'default',
  	"style_spacing" "enum_glossary_blocks_faq_style_spacing" DEFAULT 'md',
  	"style_align" "enum_glossary_blocks_faq_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "glossary_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_glossary_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_glossary_blocks_cta_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "glossary_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"style_background" "enum_glossary_blocks_cta_style_background" DEFAULT 'default',
  	"style_spacing" "enum_glossary_blocks_cta_style_spacing" DEFAULT 'md',
  	"style_align" "enum_glossary_blocks_cta_style_align" DEFAULT 'start',
  	"block_name" varchar
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
  	"block_name" varchar
  );
  
  CREATE TABLE "glossary_blocks_reusable_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__glossary_v_blocks_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__glossary_v_blocks_hero_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"variant" "enum__glossary_v_blocks_hero_variant" DEFAULT 'split',
  	"style_background" "enum__glossary_v_blocks_hero_style_background" DEFAULT 'default',
  	"style_spacing" "enum__glossary_v_blocks_hero_style_spacing" DEFAULT 'md',
  	"style_align" "enum__glossary_v_blocks_hero_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"width" "enum__glossary_v_blocks_rich_text_width" DEFAULT 'narrow',
  	"style_background" "enum__glossary_v_blocks_rich_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum__glossary_v_blocks_rich_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum__glossary_v_blocks_rich_text_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_media_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__glossary_v_blocks_media_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__glossary_v_blocks_media_text_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"image_position" "enum__glossary_v_blocks_media_text_image_position" DEFAULT 'start',
  	"style_background" "enum__glossary_v_blocks_media_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum__glossary_v_blocks_media_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum__glossary_v_blocks_media_text_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"text" varchar,
  	"link_type" "enum__glossary_v_blocks_cards_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum__glossary_v_blocks_cards_columns" DEFAULT '3',
  	"card_style" "enum__glossary_v_blocks_cards_card_style" DEFAULT 'outline',
  	"style_background" "enum__glossary_v_blocks_cards_style_background" DEFAULT 'default',
  	"style_spacing" "enum__glossary_v_blocks_cards_style_spacing" DEFAULT 'md',
  	"style_align" "enum__glossary_v_blocks_cards_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_col_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_col_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_col_buttons_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__glossary_v_blocks_col_buttons_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__glossary_v_blocks_col_buttons_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_col_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__glossary_v_blocks_columns_style_background" DEFAULT 'default',
  	"style_spacing" "enum__glossary_v_blocks_columns_style_spacing" DEFAULT 'md',
  	"style_align" "enum__glossary_v_blocks_columns_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__glossary_v_blocks_tabs_style_background" DEFAULT 'default',
  	"style_spacing" "enum__glossary_v_blocks_tabs_style_spacing" DEFAULT 'md',
  	"style_align" "enum__glossary_v_blocks_tabs_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__glossary_v_blocks_stats_style_background" DEFAULT 'default',
  	"style_spacing" "enum__glossary_v_blocks_stats_style_spacing" DEFAULT 'md',
  	"style_align" "enum__glossary_v_blocks_stats_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_logos_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"url" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__glossary_v_blocks_logos_style_background" DEFAULT 'default',
  	"style_spacing" "enum__glossary_v_blocks_logos_style_spacing" DEFAULT 'md',
  	"style_align" "enum__glossary_v_blocks_logos_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"name" varchar,
  	"role" varchar,
  	"photo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__glossary_v_blocks_testimonials_style_background" DEFAULT 'default',
  	"style_spacing" "enum__glossary_v_blocks_testimonials_style_spacing" DEFAULT 'md',
  	"style_align" "enum__glossary_v_blocks_testimonials_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__glossary_v_blocks_faq_style_background" DEFAULT 'default',
  	"style_spacing" "enum__glossary_v_blocks_faq_style_spacing" DEFAULT 'md',
  	"style_align" "enum__glossary_v_blocks_faq_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__glossary_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__glossary_v_blocks_cta_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"style_background" "enum__glossary_v_blocks_cta_style_background" DEFAULT 'default',
  	"style_spacing" "enum__glossary_v_blocks_cta_style_spacing" DEFAULT 'md',
  	"style_align" "enum__glossary_v_blocks_cta_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
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
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_glossary_v_blocks_reusable_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_people_blocks_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_people_blocks_hero_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "people_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"variant" "enum_people_blocks_hero_variant" DEFAULT 'split',
  	"style_background" "enum_people_blocks_hero_style_background" DEFAULT 'default',
  	"style_spacing" "enum_people_blocks_hero_style_spacing" DEFAULT 'md',
  	"style_align" "enum_people_blocks_hero_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"width" "enum_people_blocks_rich_text_width" DEFAULT 'narrow',
  	"style_background" "enum_people_blocks_rich_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum_people_blocks_rich_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum_people_blocks_rich_text_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_media_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_people_blocks_media_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_people_blocks_media_text_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "people_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"image_position" "enum_people_blocks_media_text_image_position" DEFAULT 'start',
  	"style_background" "enum_people_blocks_media_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum_people_blocks_media_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum_people_blocks_media_text_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"text" varchar,
  	"link_type" "enum_people_blocks_cards_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "people_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum_people_blocks_cards_columns" DEFAULT '3',
  	"card_style" "enum_people_blocks_cards_card_style" DEFAULT 'outline',
  	"style_background" "enum_people_blocks_cards_style_background" DEFAULT 'default',
  	"style_spacing" "enum_people_blocks_cards_style_spacing" DEFAULT 'md',
  	"style_align" "enum_people_blocks_cards_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_col_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_col_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_col_buttons_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_people_blocks_col_buttons_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_people_blocks_col_buttons_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "people_blocks_col_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "people_blocks_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_people_blocks_columns_style_background" DEFAULT 'default',
  	"style_spacing" "enum_people_blocks_columns_style_spacing" DEFAULT 'md',
  	"style_align" "enum_people_blocks_columns_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"content" jsonb,
  	"image_id" integer
  );
  
  CREATE TABLE "people_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_people_blocks_tabs_style_background" DEFAULT 'default',
  	"style_spacing" "enum_people_blocks_tabs_style_spacing" DEFAULT 'md',
  	"style_align" "enum_people_blocks_tabs_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "people_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_people_blocks_stats_style_background" DEFAULT 'default',
  	"style_spacing" "enum_people_blocks_stats_style_spacing" DEFAULT 'md',
  	"style_align" "enum_people_blocks_stats_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_logos_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"url" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "people_blocks_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_people_blocks_logos_style_background" DEFAULT 'default',
  	"style_spacing" "enum_people_blocks_logos_style_spacing" DEFAULT 'md',
  	"style_align" "enum_people_blocks_logos_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"name" varchar,
  	"role" varchar,
  	"photo_id" integer
  );
  
  CREATE TABLE "people_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_people_blocks_testimonials_style_background" DEFAULT 'default',
  	"style_spacing" "enum_people_blocks_testimonials_style_spacing" DEFAULT 'md',
  	"style_align" "enum_people_blocks_testimonials_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb
  );
  
  CREATE TABLE "people_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_people_blocks_faq_style_background" DEFAULT 'default',
  	"style_spacing" "enum_people_blocks_faq_style_spacing" DEFAULT 'md',
  	"style_align" "enum_people_blocks_faq_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_people_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_people_blocks_cta_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "people_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"style_background" "enum_people_blocks_cta_style_background" DEFAULT 'default',
  	"style_spacing" "enum_people_blocks_cta_style_spacing" DEFAULT 'md',
  	"style_align" "enum_people_blocks_cta_style_align" DEFAULT 'start',
  	"block_name" varchar
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
  	"block_name" varchar
  );
  
  CREATE TABLE "people_blocks_reusable_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "people_rels" (
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
  
  CREATE TABLE "_people_v_blocks_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__people_v_blocks_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__people_v_blocks_hero_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"variant" "enum__people_v_blocks_hero_variant" DEFAULT 'split',
  	"style_background" "enum__people_v_blocks_hero_style_background" DEFAULT 'default',
  	"style_spacing" "enum__people_v_blocks_hero_style_spacing" DEFAULT 'md',
  	"style_align" "enum__people_v_blocks_hero_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_people_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"width" "enum__people_v_blocks_rich_text_width" DEFAULT 'narrow',
  	"style_background" "enum__people_v_blocks_rich_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum__people_v_blocks_rich_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum__people_v_blocks_rich_text_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_people_v_blocks_media_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__people_v_blocks_media_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__people_v_blocks_media_text_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"image_position" "enum__people_v_blocks_media_text_image_position" DEFAULT 'start',
  	"style_background" "enum__people_v_blocks_media_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum__people_v_blocks_media_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum__people_v_blocks_media_text_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_people_v_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"text" varchar,
  	"link_type" "enum__people_v_blocks_cards_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum__people_v_blocks_cards_columns" DEFAULT '3',
  	"card_style" "enum__people_v_blocks_cards_card_style" DEFAULT 'outline',
  	"style_background" "enum__people_v_blocks_cards_style_background" DEFAULT 'default',
  	"style_spacing" "enum__people_v_blocks_cards_style_spacing" DEFAULT 'md',
  	"style_align" "enum__people_v_blocks_cards_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_people_v_blocks_col_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_people_v_blocks_col_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_people_v_blocks_col_buttons_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__people_v_blocks_col_buttons_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__people_v_blocks_col_buttons_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_col_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_people_v_blocks_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__people_v_blocks_columns_style_background" DEFAULT 'default',
  	"style_spacing" "enum__people_v_blocks_columns_style_spacing" DEFAULT 'md',
  	"style_align" "enum__people_v_blocks_columns_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_people_v_blocks_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__people_v_blocks_tabs_style_background" DEFAULT 'default',
  	"style_spacing" "enum__people_v_blocks_tabs_style_spacing" DEFAULT 'md',
  	"style_align" "enum__people_v_blocks_tabs_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_people_v_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__people_v_blocks_stats_style_background" DEFAULT 'default',
  	"style_spacing" "enum__people_v_blocks_stats_style_spacing" DEFAULT 'md',
  	"style_align" "enum__people_v_blocks_stats_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_people_v_blocks_logos_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"url" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__people_v_blocks_logos_style_background" DEFAULT 'default',
  	"style_spacing" "enum__people_v_blocks_logos_style_spacing" DEFAULT 'md',
  	"style_align" "enum__people_v_blocks_logos_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_people_v_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"name" varchar,
  	"role" varchar,
  	"photo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__people_v_blocks_testimonials_style_background" DEFAULT 'default',
  	"style_spacing" "enum__people_v_blocks_testimonials_style_spacing" DEFAULT 'md',
  	"style_align" "enum__people_v_blocks_testimonials_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_people_v_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__people_v_blocks_faq_style_background" DEFAULT 'default',
  	"style_spacing" "enum__people_v_blocks_faq_style_spacing" DEFAULT 'md',
  	"style_align" "enum__people_v_blocks_faq_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_people_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__people_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__people_v_blocks_cta_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_people_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"style_background" "enum__people_v_blocks_cta_style_background" DEFAULT 'default',
  	"style_spacing" "enum__people_v_blocks_cta_style_spacing" DEFAULT 'md',
  	"style_align" "enum__people_v_blocks_cta_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
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
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_people_v_blocks_reusable_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_people_v_rels" (
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
  
  CREATE TABLE "reusable_blocks_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_reusable_blocks_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_reusable_blocks_hero_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "reusable_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"variant" "enum_reusable_blocks_hero_variant" DEFAULT 'split',
  	"style_background" "enum_reusable_blocks_hero_style_background" DEFAULT 'default',
  	"style_spacing" "enum_reusable_blocks_hero_style_spacing" DEFAULT 'md',
  	"style_align" "enum_reusable_blocks_hero_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "reusable_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"width" "enum_reusable_blocks_rich_text_width" DEFAULT 'narrow',
  	"style_background" "enum_reusable_blocks_rich_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum_reusable_blocks_rich_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum_reusable_blocks_rich_text_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "reusable_blocks_media_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_reusable_blocks_media_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_reusable_blocks_media_text_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "reusable_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"image_position" "enum_reusable_blocks_media_text_image_position" DEFAULT 'start',
  	"style_background" "enum_reusable_blocks_media_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum_reusable_blocks_media_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum_reusable_blocks_media_text_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "reusable_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"text" varchar,
  	"link_type" "enum_reusable_blocks_cards_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "reusable_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum_reusable_blocks_cards_columns" DEFAULT '3',
  	"card_style" "enum_reusable_blocks_cards_card_style" DEFAULT 'outline',
  	"style_background" "enum_reusable_blocks_cards_style_background" DEFAULT 'default',
  	"style_spacing" "enum_reusable_blocks_cards_style_spacing" DEFAULT 'md',
  	"style_align" "enum_reusable_blocks_cards_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "reusable_blocks_col_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "reusable_blocks_col_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "reusable_blocks_col_buttons_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_reusable_blocks_col_buttons_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_reusable_blocks_col_buttons_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "reusable_blocks_col_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "reusable_blocks_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "reusable_blocks_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_reusable_blocks_columns_style_background" DEFAULT 'default',
  	"style_spacing" "enum_reusable_blocks_columns_style_spacing" DEFAULT 'md',
  	"style_align" "enum_reusable_blocks_columns_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "reusable_blocks_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"content" jsonb,
  	"image_id" integer
  );
  
  CREATE TABLE "reusable_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_reusable_blocks_tabs_style_background" DEFAULT 'default',
  	"style_spacing" "enum_reusable_blocks_tabs_style_spacing" DEFAULT 'md',
  	"style_align" "enum_reusable_blocks_tabs_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "reusable_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "reusable_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_reusable_blocks_stats_style_background" DEFAULT 'default',
  	"style_spacing" "enum_reusable_blocks_stats_style_spacing" DEFAULT 'md',
  	"style_align" "enum_reusable_blocks_stats_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "reusable_blocks_logos_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"url" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "reusable_blocks_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_reusable_blocks_logos_style_background" DEFAULT 'default',
  	"style_spacing" "enum_reusable_blocks_logos_style_spacing" DEFAULT 'md',
  	"style_align" "enum_reusable_blocks_logos_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "reusable_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"name" varchar,
  	"role" varchar,
  	"photo_id" integer
  );
  
  CREATE TABLE "reusable_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_reusable_blocks_testimonials_style_background" DEFAULT 'default',
  	"style_spacing" "enum_reusable_blocks_testimonials_style_spacing" DEFAULT 'md',
  	"style_align" "enum_reusable_blocks_testimonials_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "reusable_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb
  );
  
  CREATE TABLE "reusable_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_reusable_blocks_faq_style_background" DEFAULT 'default',
  	"style_spacing" "enum_reusable_blocks_faq_style_spacing" DEFAULT 'md',
  	"style_align" "enum_reusable_blocks_faq_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "reusable_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_reusable_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_reusable_blocks_cta_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "reusable_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"style_background" "enum_reusable_blocks_cta_style_background" DEFAULT 'default',
  	"style_spacing" "enum_reusable_blocks_cta_style_spacing" DEFAULT 'md',
  	"style_align" "enum_reusable_blocks_cta_style_align" DEFAULT 'start',
  	"block_name" varchar
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
  	"block_name" varchar
  );
  
  CREATE TABLE "reusable" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "reusable_locales" (
  	"_status" "enum_reusable_status" DEFAULT 'draft',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "reusable_rels" (
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
  
  CREATE TABLE "_reusable_v_blocks_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__reusable_v_blocks_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__reusable_v_blocks_hero_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"variant" "enum__reusable_v_blocks_hero_variant" DEFAULT 'split',
  	"style_background" "enum__reusable_v_blocks_hero_style_background" DEFAULT 'default',
  	"style_spacing" "enum__reusable_v_blocks_hero_style_spacing" DEFAULT 'md',
  	"style_align" "enum__reusable_v_blocks_hero_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"width" "enum__reusable_v_blocks_rich_text_width" DEFAULT 'narrow',
  	"style_background" "enum__reusable_v_blocks_rich_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum__reusable_v_blocks_rich_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum__reusable_v_blocks_rich_text_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_media_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__reusable_v_blocks_media_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__reusable_v_blocks_media_text_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"image_position" "enum__reusable_v_blocks_media_text_image_position" DEFAULT 'start',
  	"style_background" "enum__reusable_v_blocks_media_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum__reusable_v_blocks_media_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum__reusable_v_blocks_media_text_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"text" varchar,
  	"link_type" "enum__reusable_v_blocks_cards_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum__reusable_v_blocks_cards_columns" DEFAULT '3',
  	"card_style" "enum__reusable_v_blocks_cards_card_style" DEFAULT 'outline',
  	"style_background" "enum__reusable_v_blocks_cards_style_background" DEFAULT 'default',
  	"style_spacing" "enum__reusable_v_blocks_cards_style_spacing" DEFAULT 'md',
  	"style_align" "enum__reusable_v_blocks_cards_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_col_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_col_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_col_buttons_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__reusable_v_blocks_col_buttons_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__reusable_v_blocks_col_buttons_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_col_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__reusable_v_blocks_columns_style_background" DEFAULT 'default',
  	"style_spacing" "enum__reusable_v_blocks_columns_style_spacing" DEFAULT 'md',
  	"style_align" "enum__reusable_v_blocks_columns_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__reusable_v_blocks_tabs_style_background" DEFAULT 'default',
  	"style_spacing" "enum__reusable_v_blocks_tabs_style_spacing" DEFAULT 'md',
  	"style_align" "enum__reusable_v_blocks_tabs_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__reusable_v_blocks_stats_style_background" DEFAULT 'default',
  	"style_spacing" "enum__reusable_v_blocks_stats_style_spacing" DEFAULT 'md',
  	"style_align" "enum__reusable_v_blocks_stats_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_logos_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"url" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__reusable_v_blocks_logos_style_background" DEFAULT 'default',
  	"style_spacing" "enum__reusable_v_blocks_logos_style_spacing" DEFAULT 'md',
  	"style_align" "enum__reusable_v_blocks_logos_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"name" varchar,
  	"role" varchar,
  	"photo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__reusable_v_blocks_testimonials_style_background" DEFAULT 'default',
  	"style_spacing" "enum__reusable_v_blocks_testimonials_style_spacing" DEFAULT 'md',
  	"style_align" "enum__reusable_v_blocks_testimonials_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum__reusable_v_blocks_faq_style_background" DEFAULT 'default',
  	"style_spacing" "enum__reusable_v_blocks_faq_style_spacing" DEFAULT 'md',
  	"style_align" "enum__reusable_v_blocks_faq_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__reusable_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__reusable_v_blocks_cta_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reusable_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"style_background" "enum__reusable_v_blocks_cta_style_background" DEFAULT 'default',
  	"style_spacing" "enum__reusable_v_blocks_cta_style_spacing" DEFAULT 'md',
  	"style_align" "enum__reusable_v_blocks_cta_style_align" DEFAULT 'start',
  	"_uuid" varchar,
  	"block_name" varchar
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
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_reusable_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__reusable_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_reusable_v_locales" (
  	"version__status" "enum__reusable_v_version_status" DEFAULT 'draft',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_reusable_v_rels" (
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
  
  CREATE TABLE "cpt_defaults_blocks_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_cpt_defaults_blocks_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_cpt_defaults_blocks_hero_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "cpt_defaults_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar NOT NULL,
  	"text" varchar,
  	"image_id" integer,
  	"variant" "enum_cpt_defaults_blocks_hero_variant" DEFAULT 'split',
  	"style_background" "enum_cpt_defaults_blocks_hero_style_background" DEFAULT 'default',
  	"style_spacing" "enum_cpt_defaults_blocks_hero_style_spacing" DEFAULT 'md',
  	"style_align" "enum_cpt_defaults_blocks_hero_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "cpt_defaults_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"width" "enum_cpt_defaults_blocks_rich_text_width" DEFAULT 'narrow',
  	"style_background" "enum_cpt_defaults_blocks_rich_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum_cpt_defaults_blocks_rich_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum_cpt_defaults_blocks_rich_text_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "cpt_defaults_blocks_media_text_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_cpt_defaults_blocks_media_text_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_cpt_defaults_blocks_media_text_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "cpt_defaults_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" jsonb,
  	"image_id" integer NOT NULL,
  	"image_position" "enum_cpt_defaults_blocks_media_text_image_position" DEFAULT 'start',
  	"style_background" "enum_cpt_defaults_blocks_media_text_style_background" DEFAULT 'default',
  	"style_spacing" "enum_cpt_defaults_blocks_media_text_style_spacing" DEFAULT 'md',
  	"style_align" "enum_cpt_defaults_blocks_media_text_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "cpt_defaults_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar NOT NULL,
  	"text" varchar,
  	"link_type" "enum_cpt_defaults_blocks_cards_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "cpt_defaults_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"intro" varchar,
  	"columns" "enum_cpt_defaults_blocks_cards_columns" DEFAULT '3',
  	"card_style" "enum_cpt_defaults_blocks_cards_card_style" DEFAULT 'outline',
  	"style_background" "enum_cpt_defaults_blocks_cards_style_background" DEFAULT 'default',
  	"style_spacing" "enum_cpt_defaults_blocks_cards_style_spacing" DEFAULT 'md',
  	"style_align" "enum_cpt_defaults_blocks_cards_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "cpt_defaults_blocks_col_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "cpt_defaults_blocks_col_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"caption" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "cpt_defaults_blocks_col_buttons_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_cpt_defaults_blocks_col_buttons_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_cpt_defaults_blocks_col_buttons_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "cpt_defaults_blocks_col_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "cpt_defaults_blocks_columns_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "cpt_defaults_blocks_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_cpt_defaults_blocks_columns_style_background" DEFAULT 'default',
  	"style_spacing" "enum_cpt_defaults_blocks_columns_style_spacing" DEFAULT 'md',
  	"style_align" "enum_cpt_defaults_blocks_columns_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "cpt_defaults_blocks_tabs_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"content" jsonb,
  	"image_id" integer
  );
  
  CREATE TABLE "cpt_defaults_blocks_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_cpt_defaults_blocks_tabs_style_background" DEFAULT 'default',
  	"style_spacing" "enum_cpt_defaults_blocks_tabs_style_spacing" DEFAULT 'md',
  	"style_align" "enum_cpt_defaults_blocks_tabs_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "cpt_defaults_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "cpt_defaults_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_cpt_defaults_blocks_stats_style_background" DEFAULT 'default',
  	"style_spacing" "enum_cpt_defaults_blocks_stats_style_spacing" DEFAULT 'md',
  	"style_align" "enum_cpt_defaults_blocks_stats_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "cpt_defaults_blocks_logos_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"url" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "cpt_defaults_blocks_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_cpt_defaults_blocks_logos_style_background" DEFAULT 'default',
  	"style_spacing" "enum_cpt_defaults_blocks_logos_style_spacing" DEFAULT 'md',
  	"style_align" "enum_cpt_defaults_blocks_logos_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "cpt_defaults_blocks_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar NOT NULL,
  	"name" varchar NOT NULL,
  	"role" varchar,
  	"photo_id" integer
  );
  
  CREATE TABLE "cpt_defaults_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_cpt_defaults_blocks_testimonials_style_background" DEFAULT 'default',
  	"style_spacing" "enum_cpt_defaults_blocks_testimonials_style_spacing" DEFAULT 'md',
  	"style_align" "enum_cpt_defaults_blocks_testimonials_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "cpt_defaults_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" jsonb
  );
  
  CREATE TABLE "cpt_defaults_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"style_background" "enum_cpt_defaults_blocks_faq_style_background" DEFAULT 'default',
  	"style_spacing" "enum_cpt_defaults_blocks_faq_style_spacing" DEFAULT 'md',
  	"style_align" "enum_cpt_defaults_blocks_faq_style_align" DEFAULT 'start',
  	"block_name" varchar
  );
  
  CREATE TABLE "cpt_defaults_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_cpt_defaults_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_cpt_defaults_blocks_cta_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "cpt_defaults_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"text" varchar,
  	"style_background" "enum_cpt_defaults_blocks_cta_style_background" DEFAULT 'default',
  	"style_spacing" "enum_cpt_defaults_blocks_cta_style_spacing" DEFAULT 'md',
  	"style_align" "enum_cpt_defaults_blocks_cta_style_align" DEFAULT 'start',
  	"block_name" varchar
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
  	"block_name" varchar
  );
  
  CREATE TABLE "cpt_defaults_blocks_reusable_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_id" integer NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "cpt_defaults" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "cpt_defaults_rels" (
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
  
  DROP INDEX "posts_rels_categories_id_idx";
  DROP INDEX "posts_rels_tags_id_idx";
  DROP INDEX "_posts_v_rels_categories_id_idx";
  DROP INDEX "_posts_v_rels_tags_id_idx";
  DROP INDEX "events_rels_people_id_idx";
  DROP INDEX "events_rels_event_types_id_idx";
  DROP INDEX "_events_v_rels_people_id_idx";
  DROP INDEX "_events_v_rels_event_types_id_idx";
  DROP INDEX "resources_rels_resources_id_idx";
  DROP INDEX "resources_rels_industries_id_idx";
  DROP INDEX "resources_rels_topics_id_idx";
  DROP INDEX "_resources_v_rels_resources_id_idx";
  DROP INDEX "_resources_v_rels_industries_id_idx";
  DROP INDEX "_resources_v_rels_topics_id_idx";
  DROP INDEX "glossary_rels_glossary_id_idx";
  DROP INDEX "_glossary_v_rels_glossary_id_idx";
  ALTER TABLE "pages" ADD COLUMN "template" "enum_pages_template" DEFAULT 'blank';
  ALTER TABLE "_pages_v" ADD COLUMN "version_template" "enum__pages_v_version_template" DEFAULT 'blank';
  ALTER TABLE "posts_rels" ADD COLUMN "locale" "_locales";
  ALTER TABLE "posts_rels" ADD COLUMN "pages_id" integer;
  ALTER TABLE "posts_rels" ADD COLUMN "posts_id" integer;
  ALTER TABLE "posts_rels" ADD COLUMN "events_id" integer;
  ALTER TABLE "posts_rels" ADD COLUMN "resources_id" integer;
  ALTER TABLE "posts_rels" ADD COLUMN "glossary_id" integer;
  ALTER TABLE "posts_rels" ADD COLUMN "people_id" integer;
  ALTER TABLE "_posts_v_rels" ADD COLUMN "locale" "_locales";
  ALTER TABLE "_posts_v_rels" ADD COLUMN "pages_id" integer;
  ALTER TABLE "_posts_v_rels" ADD COLUMN "posts_id" integer;
  ALTER TABLE "_posts_v_rels" ADD COLUMN "events_id" integer;
  ALTER TABLE "_posts_v_rels" ADD COLUMN "resources_id" integer;
  ALTER TABLE "_posts_v_rels" ADD COLUMN "glossary_id" integer;
  ALTER TABLE "_posts_v_rels" ADD COLUMN "people_id" integer;
  ALTER TABLE "events_rels" ADD COLUMN "locale" "_locales";
  ALTER TABLE "events_rels" ADD COLUMN "pages_id" integer;
  ALTER TABLE "events_rels" ADD COLUMN "posts_id" integer;
  ALTER TABLE "events_rels" ADD COLUMN "events_id" integer;
  ALTER TABLE "events_rels" ADD COLUMN "resources_id" integer;
  ALTER TABLE "events_rels" ADD COLUMN "glossary_id" integer;
  ALTER TABLE "_events_v_rels" ADD COLUMN "locale" "_locales";
  ALTER TABLE "_events_v_rels" ADD COLUMN "pages_id" integer;
  ALTER TABLE "_events_v_rels" ADD COLUMN "posts_id" integer;
  ALTER TABLE "_events_v_rels" ADD COLUMN "events_id" integer;
  ALTER TABLE "_events_v_rels" ADD COLUMN "resources_id" integer;
  ALTER TABLE "_events_v_rels" ADD COLUMN "glossary_id" integer;
  ALTER TABLE "resources_rels" ADD COLUMN "locale" "_locales";
  ALTER TABLE "resources_rels" ADD COLUMN "pages_id" integer;
  ALTER TABLE "resources_rels" ADD COLUMN "posts_id" integer;
  ALTER TABLE "resources_rels" ADD COLUMN "events_id" integer;
  ALTER TABLE "resources_rels" ADD COLUMN "glossary_id" integer;
  ALTER TABLE "resources_rels" ADD COLUMN "people_id" integer;
  ALTER TABLE "_resources_v_rels" ADD COLUMN "locale" "_locales";
  ALTER TABLE "_resources_v_rels" ADD COLUMN "pages_id" integer;
  ALTER TABLE "_resources_v_rels" ADD COLUMN "posts_id" integer;
  ALTER TABLE "_resources_v_rels" ADD COLUMN "events_id" integer;
  ALTER TABLE "_resources_v_rels" ADD COLUMN "glossary_id" integer;
  ALTER TABLE "_resources_v_rels" ADD COLUMN "people_id" integer;
  ALTER TABLE "glossary_rels" ADD COLUMN "locale" "_locales";
  ALTER TABLE "glossary_rels" ADD COLUMN "pages_id" integer;
  ALTER TABLE "glossary_rels" ADD COLUMN "posts_id" integer;
  ALTER TABLE "glossary_rels" ADD COLUMN "events_id" integer;
  ALTER TABLE "glossary_rels" ADD COLUMN "resources_id" integer;
  ALTER TABLE "glossary_rels" ADD COLUMN "people_id" integer;
  ALTER TABLE "_glossary_v_rels" ADD COLUMN "locale" "_locales";
  ALTER TABLE "_glossary_v_rels" ADD COLUMN "pages_id" integer;
  ALTER TABLE "_glossary_v_rels" ADD COLUMN "posts_id" integer;
  ALTER TABLE "_glossary_v_rels" ADD COLUMN "events_id" integer;
  ALTER TABLE "_glossary_v_rels" ADD COLUMN "resources_id" integer;
  ALTER TABLE "_glossary_v_rels" ADD COLUMN "people_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "reusable_id" integer;
  ALTER TABLE "pages_blocks_hero_links" ADD CONSTRAINT "pages_blocks_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rich_text" ADD CONSTRAINT "pages_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_text_links" ADD CONSTRAINT "pages_blocks_media_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_text" ADD CONSTRAINT "pages_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_text" ADD CONSTRAINT "pages_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_items" ADD CONSTRAINT "pages_blocks_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_items" ADD CONSTRAINT "pages_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards" ADD CONSTRAINT "pages_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_col_text" ADD CONSTRAINT "pages_blocks_col_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_col_image" ADD CONSTRAINT "pages_blocks_col_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_col_image" ADD CONSTRAINT "pages_blocks_col_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_col_buttons_links" ADD CONSTRAINT "pages_blocks_col_buttons_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_col_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_col_buttons" ADD CONSTRAINT "pages_blocks_col_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_columns_columns" ADD CONSTRAINT "pages_blocks_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_columns" ADD CONSTRAINT "pages_blocks_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_tabs_tabs" ADD CONSTRAINT "pages_blocks_tabs_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_tabs_tabs" ADD CONSTRAINT "pages_blocks_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_tabs" ADD CONSTRAINT "pages_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats_items" ADD CONSTRAINT "pages_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats" ADD CONSTRAINT "pages_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logos_logos" ADD CONSTRAINT "pages_blocks_logos_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_logos_logos" ADD CONSTRAINT "pages_blocks_logos_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logos" ADD CONSTRAINT "pages_blocks_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_items" ADD CONSTRAINT "pages_blocks_testimonials_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_items" ADD CONSTRAINT "pages_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_items" ADD CONSTRAINT "pages_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq" ADD CONSTRAINT "pages_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_links" ADD CONSTRAINT "pages_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dynamic_field" ADD CONSTRAINT "pages_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_reusable_section" ADD CONSTRAINT "pages_blocks_reusable_section_section_id_reusable_id_fk" FOREIGN KEY ("section_id") REFERENCES "public"."reusable"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_reusable_section" ADD CONSTRAINT "pages_blocks_reusable_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_glossary_fk" FOREIGN KEY ("glossary_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_links" ADD CONSTRAINT "_pages_v_blocks_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rich_text" ADD CONSTRAINT "_pages_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_text_links" ADD CONSTRAINT "_pages_v_blocks_media_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_text" ADD CONSTRAINT "_pages_v_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_text" ADD CONSTRAINT "_pages_v_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_items" ADD CONSTRAINT "_pages_v_blocks_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_items" ADD CONSTRAINT "_pages_v_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards" ADD CONSTRAINT "_pages_v_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_col_text" ADD CONSTRAINT "_pages_v_blocks_col_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_col_image" ADD CONSTRAINT "_pages_v_blocks_col_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_col_image" ADD CONSTRAINT "_pages_v_blocks_col_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_col_buttons_links" ADD CONSTRAINT "_pages_v_blocks_col_buttons_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_col_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_col_buttons" ADD CONSTRAINT "_pages_v_blocks_col_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_columns_columns" ADD CONSTRAINT "_pages_v_blocks_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_columns" ADD CONSTRAINT "_pages_v_blocks_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_tabs_tabs" ADD CONSTRAINT "_pages_v_blocks_tabs_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_tabs_tabs" ADD CONSTRAINT "_pages_v_blocks_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_tabs" ADD CONSTRAINT "_pages_v_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats_items" ADD CONSTRAINT "_pages_v_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats" ADD CONSTRAINT "_pages_v_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logos_logos" ADD CONSTRAINT "_pages_v_blocks_logos_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logos_logos" ADD CONSTRAINT "_pages_v_blocks_logos_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logos" ADD CONSTRAINT "_pages_v_blocks_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_items" ADD CONSTRAINT "_pages_v_blocks_testimonials_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_items" ADD CONSTRAINT "_pages_v_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_items" ADD CONSTRAINT "_pages_v_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq" ADD CONSTRAINT "_pages_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_links" ADD CONSTRAINT "_pages_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dynamic_field" ADD CONSTRAINT "_pages_v_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_reusable_section" ADD CONSTRAINT "_pages_v_blocks_reusable_section_section_id_reusable_id_fk" FOREIGN KEY ("section_id") REFERENCES "public"."reusable"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_reusable_section" ADD CONSTRAINT "_pages_v_blocks_reusable_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_glossary_fk" FOREIGN KEY ("glossary_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_hero_links" ADD CONSTRAINT "posts_blocks_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_hero" ADD CONSTRAINT "posts_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_hero" ADD CONSTRAINT "posts_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_rich_text" ADD CONSTRAINT "posts_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_media_text_links" ADD CONSTRAINT "posts_blocks_media_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_media_text" ADD CONSTRAINT "posts_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_media_text" ADD CONSTRAINT "posts_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_cards_items" ADD CONSTRAINT "posts_blocks_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_cards_items" ADD CONSTRAINT "posts_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_cards" ADD CONSTRAINT "posts_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_col_text" ADD CONSTRAINT "posts_blocks_col_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_col_image" ADD CONSTRAINT "posts_blocks_col_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_col_image" ADD CONSTRAINT "posts_blocks_col_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_col_buttons_links" ADD CONSTRAINT "posts_blocks_col_buttons_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_col_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_col_buttons" ADD CONSTRAINT "posts_blocks_col_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_columns_columns" ADD CONSTRAINT "posts_blocks_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_columns" ADD CONSTRAINT "posts_blocks_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_tabs_tabs" ADD CONSTRAINT "posts_blocks_tabs_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_tabs_tabs" ADD CONSTRAINT "posts_blocks_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_tabs" ADD CONSTRAINT "posts_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_stats_items" ADD CONSTRAINT "posts_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_stats" ADD CONSTRAINT "posts_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_logos_logos" ADD CONSTRAINT "posts_blocks_logos_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_logos_logos" ADD CONSTRAINT "posts_blocks_logos_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_logos" ADD CONSTRAINT "posts_blocks_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_testimonials_items" ADD CONSTRAINT "posts_blocks_testimonials_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_testimonials_items" ADD CONSTRAINT "posts_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_testimonials" ADD CONSTRAINT "posts_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_faq_items" ADD CONSTRAINT "posts_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_faq" ADD CONSTRAINT "posts_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_cta_links" ADD CONSTRAINT "posts_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_cta" ADD CONSTRAINT "posts_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_dynamic_field" ADD CONSTRAINT "posts_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_reusable_section" ADD CONSTRAINT "posts_blocks_reusable_section_section_id_reusable_id_fk" FOREIGN KEY ("section_id") REFERENCES "public"."reusable"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_reusable_section" ADD CONSTRAINT "posts_blocks_reusable_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_hero_links" ADD CONSTRAINT "_posts_v_blocks_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_hero" ADD CONSTRAINT "_posts_v_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_hero" ADD CONSTRAINT "_posts_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_rich_text" ADD CONSTRAINT "_posts_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_media_text_links" ADD CONSTRAINT "_posts_v_blocks_media_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_media_text" ADD CONSTRAINT "_posts_v_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_media_text" ADD CONSTRAINT "_posts_v_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_cards_items" ADD CONSTRAINT "_posts_v_blocks_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_cards_items" ADD CONSTRAINT "_posts_v_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_cards" ADD CONSTRAINT "_posts_v_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_col_text" ADD CONSTRAINT "_posts_v_blocks_col_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_col_image" ADD CONSTRAINT "_posts_v_blocks_col_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_col_image" ADD CONSTRAINT "_posts_v_blocks_col_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_col_buttons_links" ADD CONSTRAINT "_posts_v_blocks_col_buttons_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_col_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_col_buttons" ADD CONSTRAINT "_posts_v_blocks_col_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_columns_columns" ADD CONSTRAINT "_posts_v_blocks_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_columns" ADD CONSTRAINT "_posts_v_blocks_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_tabs_tabs" ADD CONSTRAINT "_posts_v_blocks_tabs_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_tabs_tabs" ADD CONSTRAINT "_posts_v_blocks_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_tabs" ADD CONSTRAINT "_posts_v_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_stats_items" ADD CONSTRAINT "_posts_v_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_stats" ADD CONSTRAINT "_posts_v_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_logos_logos" ADD CONSTRAINT "_posts_v_blocks_logos_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_logos_logos" ADD CONSTRAINT "_posts_v_blocks_logos_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_logos" ADD CONSTRAINT "_posts_v_blocks_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_testimonials_items" ADD CONSTRAINT "_posts_v_blocks_testimonials_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_testimonials_items" ADD CONSTRAINT "_posts_v_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_testimonials" ADD CONSTRAINT "_posts_v_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_faq_items" ADD CONSTRAINT "_posts_v_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_faq" ADD CONSTRAINT "_posts_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_cta_links" ADD CONSTRAINT "_posts_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_cta" ADD CONSTRAINT "_posts_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_dynamic_field" ADD CONSTRAINT "_posts_v_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_reusable_section" ADD CONSTRAINT "_posts_v_blocks_reusable_section_section_id_reusable_id_fk" FOREIGN KEY ("section_id") REFERENCES "public"."reusable"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_reusable_section" ADD CONSTRAINT "_posts_v_blocks_reusable_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_hero_links" ADD CONSTRAINT "events_blocks_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_hero" ADD CONSTRAINT "events_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events_blocks_hero" ADD CONSTRAINT "events_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_rich_text" ADD CONSTRAINT "events_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_media_text_links" ADD CONSTRAINT "events_blocks_media_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_media_text" ADD CONSTRAINT "events_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events_blocks_media_text" ADD CONSTRAINT "events_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_cards_items" ADD CONSTRAINT "events_blocks_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events_blocks_cards_items" ADD CONSTRAINT "events_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_cards" ADD CONSTRAINT "events_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_col_text" ADD CONSTRAINT "events_blocks_col_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_col_image" ADD CONSTRAINT "events_blocks_col_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events_blocks_col_image" ADD CONSTRAINT "events_blocks_col_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_col_buttons_links" ADD CONSTRAINT "events_blocks_col_buttons_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_col_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_col_buttons" ADD CONSTRAINT "events_blocks_col_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_columns_columns" ADD CONSTRAINT "events_blocks_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_columns" ADD CONSTRAINT "events_blocks_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_tabs_tabs" ADD CONSTRAINT "events_blocks_tabs_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events_blocks_tabs_tabs" ADD CONSTRAINT "events_blocks_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_tabs" ADD CONSTRAINT "events_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_stats_items" ADD CONSTRAINT "events_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_stats" ADD CONSTRAINT "events_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_logos_logos" ADD CONSTRAINT "events_blocks_logos_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events_blocks_logos_logos" ADD CONSTRAINT "events_blocks_logos_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_logos" ADD CONSTRAINT "events_blocks_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_testimonials_items" ADD CONSTRAINT "events_blocks_testimonials_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events_blocks_testimonials_items" ADD CONSTRAINT "events_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_testimonials" ADD CONSTRAINT "events_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_faq_items" ADD CONSTRAINT "events_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_faq" ADD CONSTRAINT "events_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_cta_links" ADD CONSTRAINT "events_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_cta" ADD CONSTRAINT "events_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_dynamic_field" ADD CONSTRAINT "events_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_blocks_reusable_section" ADD CONSTRAINT "events_blocks_reusable_section_section_id_reusable_id_fk" FOREIGN KEY ("section_id") REFERENCES "public"."reusable"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events_blocks_reusable_section" ADD CONSTRAINT "events_blocks_reusable_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_hero_links" ADD CONSTRAINT "_events_v_blocks_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_hero" ADD CONSTRAINT "_events_v_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_hero" ADD CONSTRAINT "_events_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_rich_text" ADD CONSTRAINT "_events_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_media_text_links" ADD CONSTRAINT "_events_v_blocks_media_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_media_text" ADD CONSTRAINT "_events_v_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_media_text" ADD CONSTRAINT "_events_v_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_cards_items" ADD CONSTRAINT "_events_v_blocks_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_cards_items" ADD CONSTRAINT "_events_v_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_cards" ADD CONSTRAINT "_events_v_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_col_text" ADD CONSTRAINT "_events_v_blocks_col_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_col_image" ADD CONSTRAINT "_events_v_blocks_col_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_col_image" ADD CONSTRAINT "_events_v_blocks_col_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_col_buttons_links" ADD CONSTRAINT "_events_v_blocks_col_buttons_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_col_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_col_buttons" ADD CONSTRAINT "_events_v_blocks_col_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_columns_columns" ADD CONSTRAINT "_events_v_blocks_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_columns" ADD CONSTRAINT "_events_v_blocks_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_tabs_tabs" ADD CONSTRAINT "_events_v_blocks_tabs_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_tabs_tabs" ADD CONSTRAINT "_events_v_blocks_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_tabs" ADD CONSTRAINT "_events_v_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_stats_items" ADD CONSTRAINT "_events_v_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_stats" ADD CONSTRAINT "_events_v_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_logos_logos" ADD CONSTRAINT "_events_v_blocks_logos_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_logos_logos" ADD CONSTRAINT "_events_v_blocks_logos_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_logos" ADD CONSTRAINT "_events_v_blocks_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_testimonials_items" ADD CONSTRAINT "_events_v_blocks_testimonials_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_testimonials_items" ADD CONSTRAINT "_events_v_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_testimonials" ADD CONSTRAINT "_events_v_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_faq_items" ADD CONSTRAINT "_events_v_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_faq" ADD CONSTRAINT "_events_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_cta_links" ADD CONSTRAINT "_events_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_cta" ADD CONSTRAINT "_events_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_dynamic_field" ADD CONSTRAINT "_events_v_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_reusable_section" ADD CONSTRAINT "_events_v_blocks_reusable_section_section_id_reusable_id_fk" FOREIGN KEY ("section_id") REFERENCES "public"."reusable"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v_blocks_reusable_section" ADD CONSTRAINT "_events_v_blocks_reusable_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_hero_links" ADD CONSTRAINT "resources_blocks_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_hero" ADD CONSTRAINT "resources_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resources_blocks_hero" ADD CONSTRAINT "resources_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_rich_text" ADD CONSTRAINT "resources_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_media_text_links" ADD CONSTRAINT "resources_blocks_media_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_media_text" ADD CONSTRAINT "resources_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resources_blocks_media_text" ADD CONSTRAINT "resources_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_cards_items" ADD CONSTRAINT "resources_blocks_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resources_blocks_cards_items" ADD CONSTRAINT "resources_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_cards" ADD CONSTRAINT "resources_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_col_text" ADD CONSTRAINT "resources_blocks_col_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_col_image" ADD CONSTRAINT "resources_blocks_col_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resources_blocks_col_image" ADD CONSTRAINT "resources_blocks_col_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_col_buttons_links" ADD CONSTRAINT "resources_blocks_col_buttons_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_col_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_col_buttons" ADD CONSTRAINT "resources_blocks_col_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_columns_columns" ADD CONSTRAINT "resources_blocks_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_columns" ADD CONSTRAINT "resources_blocks_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_tabs_tabs" ADD CONSTRAINT "resources_blocks_tabs_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resources_blocks_tabs_tabs" ADD CONSTRAINT "resources_blocks_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_tabs" ADD CONSTRAINT "resources_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_stats_items" ADD CONSTRAINT "resources_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_stats" ADD CONSTRAINT "resources_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_logos_logos" ADD CONSTRAINT "resources_blocks_logos_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resources_blocks_logos_logos" ADD CONSTRAINT "resources_blocks_logos_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_logos" ADD CONSTRAINT "resources_blocks_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_testimonials_items" ADD CONSTRAINT "resources_blocks_testimonials_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resources_blocks_testimonials_items" ADD CONSTRAINT "resources_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_testimonials" ADD CONSTRAINT "resources_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_faq_items" ADD CONSTRAINT "resources_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_faq" ADD CONSTRAINT "resources_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_cta_links" ADD CONSTRAINT "resources_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_cta" ADD CONSTRAINT "resources_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_dynamic_field" ADD CONSTRAINT "resources_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_reusable_section" ADD CONSTRAINT "resources_blocks_reusable_section_section_id_reusable_id_fk" FOREIGN KEY ("section_id") REFERENCES "public"."reusable"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resources_blocks_reusable_section" ADD CONSTRAINT "resources_blocks_reusable_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_hero_links" ADD CONSTRAINT "_resources_v_blocks_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_hero" ADD CONSTRAINT "_resources_v_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_hero" ADD CONSTRAINT "_resources_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_rich_text" ADD CONSTRAINT "_resources_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_media_text_links" ADD CONSTRAINT "_resources_v_blocks_media_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_media_text" ADD CONSTRAINT "_resources_v_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_media_text" ADD CONSTRAINT "_resources_v_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_cards_items" ADD CONSTRAINT "_resources_v_blocks_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_cards_items" ADD CONSTRAINT "_resources_v_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_cards" ADD CONSTRAINT "_resources_v_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_col_text" ADD CONSTRAINT "_resources_v_blocks_col_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_col_image" ADD CONSTRAINT "_resources_v_blocks_col_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_col_image" ADD CONSTRAINT "_resources_v_blocks_col_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_col_buttons_links" ADD CONSTRAINT "_resources_v_blocks_col_buttons_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_col_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_col_buttons" ADD CONSTRAINT "_resources_v_blocks_col_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_columns_columns" ADD CONSTRAINT "_resources_v_blocks_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_columns" ADD CONSTRAINT "_resources_v_blocks_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_tabs_tabs" ADD CONSTRAINT "_resources_v_blocks_tabs_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_tabs_tabs" ADD CONSTRAINT "_resources_v_blocks_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_tabs" ADD CONSTRAINT "_resources_v_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_stats_items" ADD CONSTRAINT "_resources_v_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_stats" ADD CONSTRAINT "_resources_v_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_logos_logos" ADD CONSTRAINT "_resources_v_blocks_logos_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_logos_logos" ADD CONSTRAINT "_resources_v_blocks_logos_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_logos" ADD CONSTRAINT "_resources_v_blocks_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_testimonials_items" ADD CONSTRAINT "_resources_v_blocks_testimonials_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_testimonials_items" ADD CONSTRAINT "_resources_v_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_testimonials" ADD CONSTRAINT "_resources_v_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_faq_items" ADD CONSTRAINT "_resources_v_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_faq" ADD CONSTRAINT "_resources_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_cta_links" ADD CONSTRAINT "_resources_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_cta" ADD CONSTRAINT "_resources_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_dynamic_field" ADD CONSTRAINT "_resources_v_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_reusable_section" ADD CONSTRAINT "_resources_v_blocks_reusable_section_section_id_reusable_id_fk" FOREIGN KEY ("section_id") REFERENCES "public"."reusable"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_reusable_section" ADD CONSTRAINT "_resources_v_blocks_reusable_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_hero_links" ADD CONSTRAINT "glossary_blocks_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_hero" ADD CONSTRAINT "glossary_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "glossary_blocks_hero" ADD CONSTRAINT "glossary_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_rich_text" ADD CONSTRAINT "glossary_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_media_text_links" ADD CONSTRAINT "glossary_blocks_media_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_media_text" ADD CONSTRAINT "glossary_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "glossary_blocks_media_text" ADD CONSTRAINT "glossary_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_cards_items" ADD CONSTRAINT "glossary_blocks_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "glossary_blocks_cards_items" ADD CONSTRAINT "glossary_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_cards" ADD CONSTRAINT "glossary_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_col_text" ADD CONSTRAINT "glossary_blocks_col_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_col_image" ADD CONSTRAINT "glossary_blocks_col_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "glossary_blocks_col_image" ADD CONSTRAINT "glossary_blocks_col_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_col_buttons_links" ADD CONSTRAINT "glossary_blocks_col_buttons_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_col_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_col_buttons" ADD CONSTRAINT "glossary_blocks_col_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_columns_columns" ADD CONSTRAINT "glossary_blocks_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_columns" ADD CONSTRAINT "glossary_blocks_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_tabs_tabs" ADD CONSTRAINT "glossary_blocks_tabs_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "glossary_blocks_tabs_tabs" ADD CONSTRAINT "glossary_blocks_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_tabs" ADD CONSTRAINT "glossary_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_stats_items" ADD CONSTRAINT "glossary_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_stats" ADD CONSTRAINT "glossary_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_logos_logos" ADD CONSTRAINT "glossary_blocks_logos_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "glossary_blocks_logos_logos" ADD CONSTRAINT "glossary_blocks_logos_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_logos" ADD CONSTRAINT "glossary_blocks_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_testimonials_items" ADD CONSTRAINT "glossary_blocks_testimonials_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "glossary_blocks_testimonials_items" ADD CONSTRAINT "glossary_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_testimonials" ADD CONSTRAINT "glossary_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_faq_items" ADD CONSTRAINT "glossary_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_faq" ADD CONSTRAINT "glossary_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_cta_links" ADD CONSTRAINT "glossary_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_cta" ADD CONSTRAINT "glossary_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_dynamic_field" ADD CONSTRAINT "glossary_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_blocks_reusable_section" ADD CONSTRAINT "glossary_blocks_reusable_section_section_id_reusable_id_fk" FOREIGN KEY ("section_id") REFERENCES "public"."reusable"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "glossary_blocks_reusable_section" ADD CONSTRAINT "glossary_blocks_reusable_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_hero_links" ADD CONSTRAINT "_glossary_v_blocks_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_hero" ADD CONSTRAINT "_glossary_v_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_hero" ADD CONSTRAINT "_glossary_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_rich_text" ADD CONSTRAINT "_glossary_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_media_text_links" ADD CONSTRAINT "_glossary_v_blocks_media_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_media_text" ADD CONSTRAINT "_glossary_v_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_media_text" ADD CONSTRAINT "_glossary_v_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_cards_items" ADD CONSTRAINT "_glossary_v_blocks_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_cards_items" ADD CONSTRAINT "_glossary_v_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_cards" ADD CONSTRAINT "_glossary_v_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_col_text" ADD CONSTRAINT "_glossary_v_blocks_col_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_col_image" ADD CONSTRAINT "_glossary_v_blocks_col_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_col_image" ADD CONSTRAINT "_glossary_v_blocks_col_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_col_buttons_links" ADD CONSTRAINT "_glossary_v_blocks_col_buttons_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_col_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_col_buttons" ADD CONSTRAINT "_glossary_v_blocks_col_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_columns_columns" ADD CONSTRAINT "_glossary_v_blocks_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_columns" ADD CONSTRAINT "_glossary_v_blocks_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_tabs_tabs" ADD CONSTRAINT "_glossary_v_blocks_tabs_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_tabs_tabs" ADD CONSTRAINT "_glossary_v_blocks_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_tabs" ADD CONSTRAINT "_glossary_v_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_stats_items" ADD CONSTRAINT "_glossary_v_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_stats" ADD CONSTRAINT "_glossary_v_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_logos_logos" ADD CONSTRAINT "_glossary_v_blocks_logos_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_logos_logos" ADD CONSTRAINT "_glossary_v_blocks_logos_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_logos" ADD CONSTRAINT "_glossary_v_blocks_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_testimonials_items" ADD CONSTRAINT "_glossary_v_blocks_testimonials_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_testimonials_items" ADD CONSTRAINT "_glossary_v_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_testimonials" ADD CONSTRAINT "_glossary_v_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_faq_items" ADD CONSTRAINT "_glossary_v_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_faq" ADD CONSTRAINT "_glossary_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_cta_links" ADD CONSTRAINT "_glossary_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_cta" ADD CONSTRAINT "_glossary_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_dynamic_field" ADD CONSTRAINT "_glossary_v_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_reusable_section" ADD CONSTRAINT "_glossary_v_blocks_reusable_section_section_id_reusable_id_fk" FOREIGN KEY ("section_id") REFERENCES "public"."reusable"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_glossary_v_blocks_reusable_section" ADD CONSTRAINT "_glossary_v_blocks_reusable_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_glossary_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_hero_links" ADD CONSTRAINT "people_blocks_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_hero" ADD CONSTRAINT "people_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "people_blocks_hero" ADD CONSTRAINT "people_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_rich_text" ADD CONSTRAINT "people_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_media_text_links" ADD CONSTRAINT "people_blocks_media_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_media_text" ADD CONSTRAINT "people_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "people_blocks_media_text" ADD CONSTRAINT "people_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_cards_items" ADD CONSTRAINT "people_blocks_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "people_blocks_cards_items" ADD CONSTRAINT "people_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_cards" ADD CONSTRAINT "people_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_col_text" ADD CONSTRAINT "people_blocks_col_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_col_image" ADD CONSTRAINT "people_blocks_col_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "people_blocks_col_image" ADD CONSTRAINT "people_blocks_col_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_col_buttons_links" ADD CONSTRAINT "people_blocks_col_buttons_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_col_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_col_buttons" ADD CONSTRAINT "people_blocks_col_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_columns_columns" ADD CONSTRAINT "people_blocks_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_columns" ADD CONSTRAINT "people_blocks_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_tabs_tabs" ADD CONSTRAINT "people_blocks_tabs_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "people_blocks_tabs_tabs" ADD CONSTRAINT "people_blocks_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_tabs" ADD CONSTRAINT "people_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_stats_items" ADD CONSTRAINT "people_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_stats" ADD CONSTRAINT "people_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_logos_logos" ADD CONSTRAINT "people_blocks_logos_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "people_blocks_logos_logos" ADD CONSTRAINT "people_blocks_logos_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_logos" ADD CONSTRAINT "people_blocks_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_testimonials_items" ADD CONSTRAINT "people_blocks_testimonials_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "people_blocks_testimonials_items" ADD CONSTRAINT "people_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_testimonials" ADD CONSTRAINT "people_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_faq_items" ADD CONSTRAINT "people_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_faq" ADD CONSTRAINT "people_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_cta_links" ADD CONSTRAINT "people_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_cta" ADD CONSTRAINT "people_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_dynamic_field" ADD CONSTRAINT "people_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_blocks_reusable_section" ADD CONSTRAINT "people_blocks_reusable_section_section_id_reusable_id_fk" FOREIGN KEY ("section_id") REFERENCES "public"."reusable"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "people_blocks_reusable_section" ADD CONSTRAINT "people_blocks_reusable_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_rels" ADD CONSTRAINT "people_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_rels" ADD CONSTRAINT "people_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_rels" ADD CONSTRAINT "people_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_rels" ADD CONSTRAINT "people_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_rels" ADD CONSTRAINT "people_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_rels" ADD CONSTRAINT "people_rels_glossary_fk" FOREIGN KEY ("glossary_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_rels" ADD CONSTRAINT "people_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_hero_links" ADD CONSTRAINT "_people_v_blocks_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_hero" ADD CONSTRAINT "_people_v_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_hero" ADD CONSTRAINT "_people_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_rich_text" ADD CONSTRAINT "_people_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_media_text_links" ADD CONSTRAINT "_people_v_blocks_media_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_media_text" ADD CONSTRAINT "_people_v_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_media_text" ADD CONSTRAINT "_people_v_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_cards_items" ADD CONSTRAINT "_people_v_blocks_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_cards_items" ADD CONSTRAINT "_people_v_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_cards" ADD CONSTRAINT "_people_v_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_col_text" ADD CONSTRAINT "_people_v_blocks_col_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_col_image" ADD CONSTRAINT "_people_v_blocks_col_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_col_image" ADD CONSTRAINT "_people_v_blocks_col_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_col_buttons_links" ADD CONSTRAINT "_people_v_blocks_col_buttons_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_col_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_col_buttons" ADD CONSTRAINT "_people_v_blocks_col_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_columns_columns" ADD CONSTRAINT "_people_v_blocks_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_columns" ADD CONSTRAINT "_people_v_blocks_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_tabs_tabs" ADD CONSTRAINT "_people_v_blocks_tabs_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_tabs_tabs" ADD CONSTRAINT "_people_v_blocks_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_tabs" ADD CONSTRAINT "_people_v_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_stats_items" ADD CONSTRAINT "_people_v_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_stats" ADD CONSTRAINT "_people_v_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_logos_logos" ADD CONSTRAINT "_people_v_blocks_logos_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_logos_logos" ADD CONSTRAINT "_people_v_blocks_logos_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_logos" ADD CONSTRAINT "_people_v_blocks_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_testimonials_items" ADD CONSTRAINT "_people_v_blocks_testimonials_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_testimonials_items" ADD CONSTRAINT "_people_v_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_testimonials" ADD CONSTRAINT "_people_v_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_faq_items" ADD CONSTRAINT "_people_v_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_faq" ADD CONSTRAINT "_people_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_cta_links" ADD CONSTRAINT "_people_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_cta" ADD CONSTRAINT "_people_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_dynamic_field" ADD CONSTRAINT "_people_v_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_reusable_section" ADD CONSTRAINT "_people_v_blocks_reusable_section_section_id_reusable_id_fk" FOREIGN KEY ("section_id") REFERENCES "public"."reusable"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_people_v_blocks_reusable_section" ADD CONSTRAINT "_people_v_blocks_reusable_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_rels" ADD CONSTRAINT "_people_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_people_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_rels" ADD CONSTRAINT "_people_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_rels" ADD CONSTRAINT "_people_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_rels" ADD CONSTRAINT "_people_v_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_rels" ADD CONSTRAINT "_people_v_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_rels" ADD CONSTRAINT "_people_v_rels_glossary_fk" FOREIGN KEY ("glossary_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_people_v_rels" ADD CONSTRAINT "_people_v_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_hero_links" ADD CONSTRAINT "reusable_blocks_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_hero" ADD CONSTRAINT "reusable_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "reusable_blocks_hero" ADD CONSTRAINT "reusable_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_rich_text" ADD CONSTRAINT "reusable_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_media_text_links" ADD CONSTRAINT "reusable_blocks_media_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_media_text" ADD CONSTRAINT "reusable_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "reusable_blocks_media_text" ADD CONSTRAINT "reusable_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_cards_items" ADD CONSTRAINT "reusable_blocks_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "reusable_blocks_cards_items" ADD CONSTRAINT "reusable_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_cards" ADD CONSTRAINT "reusable_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_col_text" ADD CONSTRAINT "reusable_blocks_col_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_col_image" ADD CONSTRAINT "reusable_blocks_col_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "reusable_blocks_col_image" ADD CONSTRAINT "reusable_blocks_col_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_col_buttons_links" ADD CONSTRAINT "reusable_blocks_col_buttons_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_col_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_col_buttons" ADD CONSTRAINT "reusable_blocks_col_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_columns_columns" ADD CONSTRAINT "reusable_blocks_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_columns" ADD CONSTRAINT "reusable_blocks_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_tabs_tabs" ADD CONSTRAINT "reusable_blocks_tabs_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "reusable_blocks_tabs_tabs" ADD CONSTRAINT "reusable_blocks_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_tabs" ADD CONSTRAINT "reusable_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_stats_items" ADD CONSTRAINT "reusable_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_stats" ADD CONSTRAINT "reusable_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_logos_logos" ADD CONSTRAINT "reusable_blocks_logos_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "reusable_blocks_logos_logos" ADD CONSTRAINT "reusable_blocks_logos_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_logos" ADD CONSTRAINT "reusable_blocks_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_testimonials_items" ADD CONSTRAINT "reusable_blocks_testimonials_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "reusable_blocks_testimonials_items" ADD CONSTRAINT "reusable_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_testimonials" ADD CONSTRAINT "reusable_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_faq_items" ADD CONSTRAINT "reusable_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_faq" ADD CONSTRAINT "reusable_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_cta_links" ADD CONSTRAINT "reusable_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_cta" ADD CONSTRAINT "reusable_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_blocks_dynamic_field" ADD CONSTRAINT "reusable_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_locales" ADD CONSTRAINT "reusable_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_rels" ADD CONSTRAINT "reusable_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_rels" ADD CONSTRAINT "reusable_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_rels" ADD CONSTRAINT "reusable_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_rels" ADD CONSTRAINT "reusable_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_rels" ADD CONSTRAINT "reusable_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_rels" ADD CONSTRAINT "reusable_rels_glossary_fk" FOREIGN KEY ("glossary_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reusable_rels" ADD CONSTRAINT "reusable_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_hero_links" ADD CONSTRAINT "_reusable_v_blocks_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_hero" ADD CONSTRAINT "_reusable_v_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_hero" ADD CONSTRAINT "_reusable_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_rich_text" ADD CONSTRAINT "_reusable_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_media_text_links" ADD CONSTRAINT "_reusable_v_blocks_media_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_media_text" ADD CONSTRAINT "_reusable_v_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_media_text" ADD CONSTRAINT "_reusable_v_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_cards_items" ADD CONSTRAINT "_reusable_v_blocks_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_cards_items" ADD CONSTRAINT "_reusable_v_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_cards" ADD CONSTRAINT "_reusable_v_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_col_text" ADD CONSTRAINT "_reusable_v_blocks_col_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_col_image" ADD CONSTRAINT "_reusable_v_blocks_col_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_col_image" ADD CONSTRAINT "_reusable_v_blocks_col_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_col_buttons_links" ADD CONSTRAINT "_reusable_v_blocks_col_buttons_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_col_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_col_buttons" ADD CONSTRAINT "_reusable_v_blocks_col_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_columns_columns" ADD CONSTRAINT "_reusable_v_blocks_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_columns" ADD CONSTRAINT "_reusable_v_blocks_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_tabs_tabs" ADD CONSTRAINT "_reusable_v_blocks_tabs_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_tabs_tabs" ADD CONSTRAINT "_reusable_v_blocks_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_tabs" ADD CONSTRAINT "_reusable_v_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_stats_items" ADD CONSTRAINT "_reusable_v_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_stats" ADD CONSTRAINT "_reusable_v_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_logos_logos" ADD CONSTRAINT "_reusable_v_blocks_logos_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_logos_logos" ADD CONSTRAINT "_reusable_v_blocks_logos_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_logos" ADD CONSTRAINT "_reusable_v_blocks_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_testimonials_items" ADD CONSTRAINT "_reusable_v_blocks_testimonials_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_testimonials_items" ADD CONSTRAINT "_reusable_v_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_testimonials" ADD CONSTRAINT "_reusable_v_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_faq_items" ADD CONSTRAINT "_reusable_v_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_faq" ADD CONSTRAINT "_reusable_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_cta_links" ADD CONSTRAINT "_reusable_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_cta" ADD CONSTRAINT "_reusable_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_blocks_dynamic_field" ADD CONSTRAINT "_reusable_v_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v" ADD CONSTRAINT "_reusable_v_parent_id_reusable_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."reusable"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_reusable_v_locales" ADD CONSTRAINT "_reusable_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_rels" ADD CONSTRAINT "_reusable_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_reusable_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_rels" ADD CONSTRAINT "_reusable_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_rels" ADD CONSTRAINT "_reusable_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_rels" ADD CONSTRAINT "_reusable_v_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_rels" ADD CONSTRAINT "_reusable_v_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_rels" ADD CONSTRAINT "_reusable_v_rels_glossary_fk" FOREIGN KEY ("glossary_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reusable_v_rels" ADD CONSTRAINT "_reusable_v_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_hero_links" ADD CONSTRAINT "cpt_defaults_blocks_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_hero" ADD CONSTRAINT "cpt_defaults_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_hero" ADD CONSTRAINT "cpt_defaults_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_rich_text" ADD CONSTRAINT "cpt_defaults_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_media_text_links" ADD CONSTRAINT "cpt_defaults_blocks_media_text_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_media_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_media_text" ADD CONSTRAINT "cpt_defaults_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_media_text" ADD CONSTRAINT "cpt_defaults_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_cards_items" ADD CONSTRAINT "cpt_defaults_blocks_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_cards_items" ADD CONSTRAINT "cpt_defaults_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_cards" ADD CONSTRAINT "cpt_defaults_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_col_text" ADD CONSTRAINT "cpt_defaults_blocks_col_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_col_image" ADD CONSTRAINT "cpt_defaults_blocks_col_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_col_image" ADD CONSTRAINT "cpt_defaults_blocks_col_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_col_buttons_links" ADD CONSTRAINT "cpt_defaults_blocks_col_buttons_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_col_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_col_buttons" ADD CONSTRAINT "cpt_defaults_blocks_col_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_columns_columns" ADD CONSTRAINT "cpt_defaults_blocks_columns_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_columns" ADD CONSTRAINT "cpt_defaults_blocks_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_tabs_tabs" ADD CONSTRAINT "cpt_defaults_blocks_tabs_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_tabs_tabs" ADD CONSTRAINT "cpt_defaults_blocks_tabs_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_tabs" ADD CONSTRAINT "cpt_defaults_blocks_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_stats_items" ADD CONSTRAINT "cpt_defaults_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_stats" ADD CONSTRAINT "cpt_defaults_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_logos_logos" ADD CONSTRAINT "cpt_defaults_blocks_logos_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_logos_logos" ADD CONSTRAINT "cpt_defaults_blocks_logos_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_logos"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_logos" ADD CONSTRAINT "cpt_defaults_blocks_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_testimonials_items" ADD CONSTRAINT "cpt_defaults_blocks_testimonials_items_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_testimonials_items" ADD CONSTRAINT "cpt_defaults_blocks_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_testimonials" ADD CONSTRAINT "cpt_defaults_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_faq_items" ADD CONSTRAINT "cpt_defaults_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_faq" ADD CONSTRAINT "cpt_defaults_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_cta_links" ADD CONSTRAINT "cpt_defaults_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_cta" ADD CONSTRAINT "cpt_defaults_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_dynamic_field" ADD CONSTRAINT "cpt_defaults_blocks_dynamic_field_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_reusable_section" ADD CONSTRAINT "cpt_defaults_blocks_reusable_section_section_id_reusable_id_fk" FOREIGN KEY ("section_id") REFERENCES "public"."reusable"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cpt_defaults_blocks_reusable_section" ADD CONSTRAINT "cpt_defaults_blocks_reusable_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_rels" ADD CONSTRAINT "cpt_defaults_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cpt_defaults"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_rels" ADD CONSTRAINT "cpt_defaults_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_rels" ADD CONSTRAINT "cpt_defaults_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_rels" ADD CONSTRAINT "cpt_defaults_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_rels" ADD CONSTRAINT "cpt_defaults_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_rels" ADD CONSTRAINT "cpt_defaults_rels_glossary_fk" FOREIGN KEY ("glossary_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cpt_defaults_rels" ADD CONSTRAINT "cpt_defaults_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_hero_links_order_idx" ON "pages_blocks_hero_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_links_parent_id_idx" ON "pages_blocks_hero_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_links_locale_idx" ON "pages_blocks_hero_links" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_locale_idx" ON "pages_blocks_hero" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_image_idx" ON "pages_blocks_hero" USING btree ("image_id");
  CREATE INDEX "pages_blocks_rich_text_order_idx" ON "pages_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_rich_text_parent_id_idx" ON "pages_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_rich_text_path_idx" ON "pages_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_rich_text_locale_idx" ON "pages_blocks_rich_text" USING btree ("_locale");
  CREATE INDEX "pages_blocks_media_text_links_order_idx" ON "pages_blocks_media_text_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_text_links_parent_id_idx" ON "pages_blocks_media_text_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_text_links_locale_idx" ON "pages_blocks_media_text_links" USING btree ("_locale");
  CREATE INDEX "pages_blocks_media_text_order_idx" ON "pages_blocks_media_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_text_parent_id_idx" ON "pages_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_text_path_idx" ON "pages_blocks_media_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_text_locale_idx" ON "pages_blocks_media_text" USING btree ("_locale");
  CREATE INDEX "pages_blocks_media_text_image_idx" ON "pages_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "pages_blocks_cards_items_order_idx" ON "pages_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_cards_items_parent_id_idx" ON "pages_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cards_items_locale_idx" ON "pages_blocks_cards_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_cards_items_image_idx" ON "pages_blocks_cards_items" USING btree ("image_id");
  CREATE INDEX "pages_blocks_cards_order_idx" ON "pages_blocks_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_cards_parent_id_idx" ON "pages_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cards_path_idx" ON "pages_blocks_cards" USING btree ("_path");
  CREATE INDEX "pages_blocks_cards_locale_idx" ON "pages_blocks_cards" USING btree ("_locale");
  CREATE INDEX "pages_blocks_col_text_order_idx" ON "pages_blocks_col_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_col_text_parent_id_idx" ON "pages_blocks_col_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_col_text_path_idx" ON "pages_blocks_col_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_col_text_locale_idx" ON "pages_blocks_col_text" USING btree ("_locale");
  CREATE INDEX "pages_blocks_col_image_order_idx" ON "pages_blocks_col_image" USING btree ("_order");
  CREATE INDEX "pages_blocks_col_image_parent_id_idx" ON "pages_blocks_col_image" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_col_image_path_idx" ON "pages_blocks_col_image" USING btree ("_path");
  CREATE INDEX "pages_blocks_col_image_locale_idx" ON "pages_blocks_col_image" USING btree ("_locale");
  CREATE INDEX "pages_blocks_col_image_image_idx" ON "pages_blocks_col_image" USING btree ("image_id");
  CREATE INDEX "pages_blocks_col_buttons_links_order_idx" ON "pages_blocks_col_buttons_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_col_buttons_links_parent_id_idx" ON "pages_blocks_col_buttons_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_col_buttons_links_locale_idx" ON "pages_blocks_col_buttons_links" USING btree ("_locale");
  CREATE INDEX "pages_blocks_col_buttons_order_idx" ON "pages_blocks_col_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_col_buttons_parent_id_idx" ON "pages_blocks_col_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_col_buttons_path_idx" ON "pages_blocks_col_buttons" USING btree ("_path");
  CREATE INDEX "pages_blocks_col_buttons_locale_idx" ON "pages_blocks_col_buttons" USING btree ("_locale");
  CREATE INDEX "pages_blocks_columns_columns_order_idx" ON "pages_blocks_columns_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_columns_columns_parent_id_idx" ON "pages_blocks_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_columns_columns_locale_idx" ON "pages_blocks_columns_columns" USING btree ("_locale");
  CREATE INDEX "pages_blocks_columns_order_idx" ON "pages_blocks_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_columns_parent_id_idx" ON "pages_blocks_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_columns_path_idx" ON "pages_blocks_columns" USING btree ("_path");
  CREATE INDEX "pages_blocks_columns_locale_idx" ON "pages_blocks_columns" USING btree ("_locale");
  CREATE INDEX "pages_blocks_tabs_tabs_order_idx" ON "pages_blocks_tabs_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_tabs_tabs_parent_id_idx" ON "pages_blocks_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_tabs_tabs_locale_idx" ON "pages_blocks_tabs_tabs" USING btree ("_locale");
  CREATE INDEX "pages_blocks_tabs_tabs_image_idx" ON "pages_blocks_tabs_tabs" USING btree ("image_id");
  CREATE INDEX "pages_blocks_tabs_order_idx" ON "pages_blocks_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_tabs_parent_id_idx" ON "pages_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_tabs_path_idx" ON "pages_blocks_tabs" USING btree ("_path");
  CREATE INDEX "pages_blocks_tabs_locale_idx" ON "pages_blocks_tabs" USING btree ("_locale");
  CREATE INDEX "pages_blocks_stats_items_order_idx" ON "pages_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats_items_parent_id_idx" ON "pages_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats_items_locale_idx" ON "pages_blocks_stats_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_stats_order_idx" ON "pages_blocks_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats_parent_id_idx" ON "pages_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats_path_idx" ON "pages_blocks_stats" USING btree ("_path");
  CREATE INDEX "pages_blocks_stats_locale_idx" ON "pages_blocks_stats" USING btree ("_locale");
  CREATE INDEX "pages_blocks_logos_logos_order_idx" ON "pages_blocks_logos_logos" USING btree ("_order");
  CREATE INDEX "pages_blocks_logos_logos_parent_id_idx" ON "pages_blocks_logos_logos" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_logos_logos_locale_idx" ON "pages_blocks_logos_logos" USING btree ("_locale");
  CREATE INDEX "pages_blocks_logos_logos_image_idx" ON "pages_blocks_logos_logos" USING btree ("image_id");
  CREATE INDEX "pages_blocks_logos_order_idx" ON "pages_blocks_logos" USING btree ("_order");
  CREATE INDEX "pages_blocks_logos_parent_id_idx" ON "pages_blocks_logos" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_logos_path_idx" ON "pages_blocks_logos" USING btree ("_path");
  CREATE INDEX "pages_blocks_logos_locale_idx" ON "pages_blocks_logos" USING btree ("_locale");
  CREATE INDEX "pages_blocks_testimonials_items_order_idx" ON "pages_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_items_parent_id_idx" ON "pages_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_items_locale_idx" ON "pages_blocks_testimonials_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_testimonials_items_photo_idx" ON "pages_blocks_testimonials_items" USING btree ("photo_id");
  CREATE INDEX "pages_blocks_testimonials_order_idx" ON "pages_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_parent_id_idx" ON "pages_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_path_idx" ON "pages_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonials_locale_idx" ON "pages_blocks_testimonials" USING btree ("_locale");
  CREATE INDEX "pages_blocks_faq_items_order_idx" ON "pages_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_items_parent_id_idx" ON "pages_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_items_locale_idx" ON "pages_blocks_faq_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_faq_order_idx" ON "pages_blocks_faq" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_parent_id_idx" ON "pages_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_path_idx" ON "pages_blocks_faq" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_locale_idx" ON "pages_blocks_faq" USING btree ("_locale");
  CREATE INDEX "pages_blocks_cta_links_order_idx" ON "pages_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_links_parent_id_idx" ON "pages_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_links_locale_idx" ON "pages_blocks_cta_links" USING btree ("_locale");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_locale_idx" ON "pages_blocks_cta" USING btree ("_locale");
  CREATE INDEX "pages_blocks_dynamic_field_order_idx" ON "pages_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "pages_blocks_dynamic_field_parent_id_idx" ON "pages_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dynamic_field_path_idx" ON "pages_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "pages_blocks_dynamic_field_locale_idx" ON "pages_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "pages_blocks_reusable_section_order_idx" ON "pages_blocks_reusable_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_reusable_section_parent_id_idx" ON "pages_blocks_reusable_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_reusable_section_path_idx" ON "pages_blocks_reusable_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_reusable_section_locale_idx" ON "pages_blocks_reusable_section" USING btree ("_locale");
  CREATE INDEX "pages_blocks_reusable_section_section_idx" ON "pages_blocks_reusable_section" USING btree ("section_id");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_locale_idx" ON "pages_rels" USING btree ("locale");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id","locale");
  CREATE INDEX "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id","locale");
  CREATE INDEX "pages_rels_events_id_idx" ON "pages_rels" USING btree ("events_id","locale");
  CREATE INDEX "pages_rels_resources_id_idx" ON "pages_rels" USING btree ("resources_id","locale");
  CREATE INDEX "pages_rels_glossary_id_idx" ON "pages_rels" USING btree ("glossary_id","locale");
  CREATE INDEX "pages_rels_people_id_idx" ON "pages_rels" USING btree ("people_id","locale");
  CREATE INDEX "_pages_v_blocks_hero_links_order_idx" ON "_pages_v_blocks_hero_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_links_parent_id_idx" ON "_pages_v_blocks_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_links_locale_idx" ON "_pages_v_blocks_hero_links" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_hero_order_idx" ON "_pages_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_parent_id_idx" ON "_pages_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_path_idx" ON "_pages_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hero_locale_idx" ON "_pages_v_blocks_hero" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_hero_image_idx" ON "_pages_v_blocks_hero" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_rich_text_order_idx" ON "_pages_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_rich_text_parent_id_idx" ON "_pages_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_rich_text_path_idx" ON "_pages_v_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_rich_text_locale_idx" ON "_pages_v_blocks_rich_text" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_media_text_links_order_idx" ON "_pages_v_blocks_media_text_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_text_links_parent_id_idx" ON "_pages_v_blocks_media_text_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_text_links_locale_idx" ON "_pages_v_blocks_media_text_links" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_media_text_order_idx" ON "_pages_v_blocks_media_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_text_parent_id_idx" ON "_pages_v_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_text_path_idx" ON "_pages_v_blocks_media_text" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_text_locale_idx" ON "_pages_v_blocks_media_text" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_media_text_image_idx" ON "_pages_v_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_cards_items_order_idx" ON "_pages_v_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cards_items_parent_id_idx" ON "_pages_v_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cards_items_locale_idx" ON "_pages_v_blocks_cards_items" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_cards_items_image_idx" ON "_pages_v_blocks_cards_items" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_cards_order_idx" ON "_pages_v_blocks_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cards_parent_id_idx" ON "_pages_v_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cards_path_idx" ON "_pages_v_blocks_cards" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cards_locale_idx" ON "_pages_v_blocks_cards" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_col_text_order_idx" ON "_pages_v_blocks_col_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_col_text_parent_id_idx" ON "_pages_v_blocks_col_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_col_text_path_idx" ON "_pages_v_blocks_col_text" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_col_text_locale_idx" ON "_pages_v_blocks_col_text" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_col_image_order_idx" ON "_pages_v_blocks_col_image" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_col_image_parent_id_idx" ON "_pages_v_blocks_col_image" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_col_image_path_idx" ON "_pages_v_blocks_col_image" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_col_image_locale_idx" ON "_pages_v_blocks_col_image" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_col_image_image_idx" ON "_pages_v_blocks_col_image" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_col_buttons_links_order_idx" ON "_pages_v_blocks_col_buttons_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_col_buttons_links_parent_id_idx" ON "_pages_v_blocks_col_buttons_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_col_buttons_links_locale_idx" ON "_pages_v_blocks_col_buttons_links" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_col_buttons_order_idx" ON "_pages_v_blocks_col_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_col_buttons_parent_id_idx" ON "_pages_v_blocks_col_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_col_buttons_path_idx" ON "_pages_v_blocks_col_buttons" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_col_buttons_locale_idx" ON "_pages_v_blocks_col_buttons" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_columns_columns_order_idx" ON "_pages_v_blocks_columns_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_columns_columns_parent_id_idx" ON "_pages_v_blocks_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_columns_columns_locale_idx" ON "_pages_v_blocks_columns_columns" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_columns_order_idx" ON "_pages_v_blocks_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_columns_parent_id_idx" ON "_pages_v_blocks_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_columns_path_idx" ON "_pages_v_blocks_columns" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_columns_locale_idx" ON "_pages_v_blocks_columns" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_tabs_tabs_order_idx" ON "_pages_v_blocks_tabs_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_tabs_tabs_parent_id_idx" ON "_pages_v_blocks_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_tabs_tabs_locale_idx" ON "_pages_v_blocks_tabs_tabs" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_tabs_tabs_image_idx" ON "_pages_v_blocks_tabs_tabs" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_tabs_order_idx" ON "_pages_v_blocks_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_tabs_parent_id_idx" ON "_pages_v_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_tabs_path_idx" ON "_pages_v_blocks_tabs" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_tabs_locale_idx" ON "_pages_v_blocks_tabs" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_stats_items_order_idx" ON "_pages_v_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_stats_items_parent_id_idx" ON "_pages_v_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_stats_items_locale_idx" ON "_pages_v_blocks_stats_items" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_stats_order_idx" ON "_pages_v_blocks_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_stats_parent_id_idx" ON "_pages_v_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_stats_path_idx" ON "_pages_v_blocks_stats" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_stats_locale_idx" ON "_pages_v_blocks_stats" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_logos_logos_order_idx" ON "_pages_v_blocks_logos_logos" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_logos_logos_parent_id_idx" ON "_pages_v_blocks_logos_logos" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_logos_logos_locale_idx" ON "_pages_v_blocks_logos_logos" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_logos_logos_image_idx" ON "_pages_v_blocks_logos_logos" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_logos_order_idx" ON "_pages_v_blocks_logos" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_logos_parent_id_idx" ON "_pages_v_blocks_logos" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_logos_path_idx" ON "_pages_v_blocks_logos" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_logos_locale_idx" ON "_pages_v_blocks_logos" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_testimonials_items_order_idx" ON "_pages_v_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_items_parent_id_idx" ON "_pages_v_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_items_locale_idx" ON "_pages_v_blocks_testimonials_items" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_testimonials_items_photo_idx" ON "_pages_v_blocks_testimonials_items" USING btree ("photo_id");
  CREATE INDEX "_pages_v_blocks_testimonials_order_idx" ON "_pages_v_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_path_idx" ON "_pages_v_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonials_locale_idx" ON "_pages_v_blocks_testimonials" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_faq_items_order_idx" ON "_pages_v_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_items_parent_id_idx" ON "_pages_v_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_items_locale_idx" ON "_pages_v_blocks_faq_items" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_faq_order_idx" ON "_pages_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_parent_id_idx" ON "_pages_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_path_idx" ON "_pages_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_faq_locale_idx" ON "_pages_v_blocks_faq" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_cta_links_order_idx" ON "_pages_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_links_parent_id_idx" ON "_pages_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_links_locale_idx" ON "_pages_v_blocks_cta_links" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta_locale_idx" ON "_pages_v_blocks_cta" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_dynamic_field_order_idx" ON "_pages_v_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dynamic_field_parent_id_idx" ON "_pages_v_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dynamic_field_path_idx" ON "_pages_v_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dynamic_field_locale_idx" ON "_pages_v_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_reusable_section_order_idx" ON "_pages_v_blocks_reusable_section" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_reusable_section_parent_id_idx" ON "_pages_v_blocks_reusable_section" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_reusable_section_path_idx" ON "_pages_v_blocks_reusable_section" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_reusable_section_locale_idx" ON "_pages_v_blocks_reusable_section" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_reusable_section_section_idx" ON "_pages_v_blocks_reusable_section" USING btree ("section_id");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_locale_idx" ON "_pages_v_rels" USING btree ("locale");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id","locale");
  CREATE INDEX "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id","locale");
  CREATE INDEX "_pages_v_rels_events_id_idx" ON "_pages_v_rels" USING btree ("events_id","locale");
  CREATE INDEX "_pages_v_rels_resources_id_idx" ON "_pages_v_rels" USING btree ("resources_id","locale");
  CREATE INDEX "_pages_v_rels_glossary_id_idx" ON "_pages_v_rels" USING btree ("glossary_id","locale");
  CREATE INDEX "_pages_v_rels_people_id_idx" ON "_pages_v_rels" USING btree ("people_id","locale");
  CREATE INDEX "posts_blocks_hero_links_order_idx" ON "posts_blocks_hero_links" USING btree ("_order");
  CREATE INDEX "posts_blocks_hero_links_parent_id_idx" ON "posts_blocks_hero_links" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_hero_links_locale_idx" ON "posts_blocks_hero_links" USING btree ("_locale");
  CREATE INDEX "posts_blocks_hero_order_idx" ON "posts_blocks_hero" USING btree ("_order");
  CREATE INDEX "posts_blocks_hero_parent_id_idx" ON "posts_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_hero_path_idx" ON "posts_blocks_hero" USING btree ("_path");
  CREATE INDEX "posts_blocks_hero_locale_idx" ON "posts_blocks_hero" USING btree ("_locale");
  CREATE INDEX "posts_blocks_hero_image_idx" ON "posts_blocks_hero" USING btree ("image_id");
  CREATE INDEX "posts_blocks_rich_text_order_idx" ON "posts_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "posts_blocks_rich_text_parent_id_idx" ON "posts_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_rich_text_path_idx" ON "posts_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "posts_blocks_rich_text_locale_idx" ON "posts_blocks_rich_text" USING btree ("_locale");
  CREATE INDEX "posts_blocks_media_text_links_order_idx" ON "posts_blocks_media_text_links" USING btree ("_order");
  CREATE INDEX "posts_blocks_media_text_links_parent_id_idx" ON "posts_blocks_media_text_links" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_media_text_links_locale_idx" ON "posts_blocks_media_text_links" USING btree ("_locale");
  CREATE INDEX "posts_blocks_media_text_order_idx" ON "posts_blocks_media_text" USING btree ("_order");
  CREATE INDEX "posts_blocks_media_text_parent_id_idx" ON "posts_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_media_text_path_idx" ON "posts_blocks_media_text" USING btree ("_path");
  CREATE INDEX "posts_blocks_media_text_locale_idx" ON "posts_blocks_media_text" USING btree ("_locale");
  CREATE INDEX "posts_blocks_media_text_image_idx" ON "posts_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "posts_blocks_cards_items_order_idx" ON "posts_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_cards_items_parent_id_idx" ON "posts_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_cards_items_locale_idx" ON "posts_blocks_cards_items" USING btree ("_locale");
  CREATE INDEX "posts_blocks_cards_items_image_idx" ON "posts_blocks_cards_items" USING btree ("image_id");
  CREATE INDEX "posts_blocks_cards_order_idx" ON "posts_blocks_cards" USING btree ("_order");
  CREATE INDEX "posts_blocks_cards_parent_id_idx" ON "posts_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_cards_path_idx" ON "posts_blocks_cards" USING btree ("_path");
  CREATE INDEX "posts_blocks_cards_locale_idx" ON "posts_blocks_cards" USING btree ("_locale");
  CREATE INDEX "posts_blocks_col_text_order_idx" ON "posts_blocks_col_text" USING btree ("_order");
  CREATE INDEX "posts_blocks_col_text_parent_id_idx" ON "posts_blocks_col_text" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_col_text_path_idx" ON "posts_blocks_col_text" USING btree ("_path");
  CREATE INDEX "posts_blocks_col_text_locale_idx" ON "posts_blocks_col_text" USING btree ("_locale");
  CREATE INDEX "posts_blocks_col_image_order_idx" ON "posts_blocks_col_image" USING btree ("_order");
  CREATE INDEX "posts_blocks_col_image_parent_id_idx" ON "posts_blocks_col_image" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_col_image_path_idx" ON "posts_blocks_col_image" USING btree ("_path");
  CREATE INDEX "posts_blocks_col_image_locale_idx" ON "posts_blocks_col_image" USING btree ("_locale");
  CREATE INDEX "posts_blocks_col_image_image_idx" ON "posts_blocks_col_image" USING btree ("image_id");
  CREATE INDEX "posts_blocks_col_buttons_links_order_idx" ON "posts_blocks_col_buttons_links" USING btree ("_order");
  CREATE INDEX "posts_blocks_col_buttons_links_parent_id_idx" ON "posts_blocks_col_buttons_links" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_col_buttons_links_locale_idx" ON "posts_blocks_col_buttons_links" USING btree ("_locale");
  CREATE INDEX "posts_blocks_col_buttons_order_idx" ON "posts_blocks_col_buttons" USING btree ("_order");
  CREATE INDEX "posts_blocks_col_buttons_parent_id_idx" ON "posts_blocks_col_buttons" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_col_buttons_path_idx" ON "posts_blocks_col_buttons" USING btree ("_path");
  CREATE INDEX "posts_blocks_col_buttons_locale_idx" ON "posts_blocks_col_buttons" USING btree ("_locale");
  CREATE INDEX "posts_blocks_columns_columns_order_idx" ON "posts_blocks_columns_columns" USING btree ("_order");
  CREATE INDEX "posts_blocks_columns_columns_parent_id_idx" ON "posts_blocks_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_columns_columns_locale_idx" ON "posts_blocks_columns_columns" USING btree ("_locale");
  CREATE INDEX "posts_blocks_columns_order_idx" ON "posts_blocks_columns" USING btree ("_order");
  CREATE INDEX "posts_blocks_columns_parent_id_idx" ON "posts_blocks_columns" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_columns_path_idx" ON "posts_blocks_columns" USING btree ("_path");
  CREATE INDEX "posts_blocks_columns_locale_idx" ON "posts_blocks_columns" USING btree ("_locale");
  CREATE INDEX "posts_blocks_tabs_tabs_order_idx" ON "posts_blocks_tabs_tabs" USING btree ("_order");
  CREATE INDEX "posts_blocks_tabs_tabs_parent_id_idx" ON "posts_blocks_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_tabs_tabs_locale_idx" ON "posts_blocks_tabs_tabs" USING btree ("_locale");
  CREATE INDEX "posts_blocks_tabs_tabs_image_idx" ON "posts_blocks_tabs_tabs" USING btree ("image_id");
  CREATE INDEX "posts_blocks_tabs_order_idx" ON "posts_blocks_tabs" USING btree ("_order");
  CREATE INDEX "posts_blocks_tabs_parent_id_idx" ON "posts_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_tabs_path_idx" ON "posts_blocks_tabs" USING btree ("_path");
  CREATE INDEX "posts_blocks_tabs_locale_idx" ON "posts_blocks_tabs" USING btree ("_locale");
  CREATE INDEX "posts_blocks_stats_items_order_idx" ON "posts_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_stats_items_parent_id_idx" ON "posts_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_stats_items_locale_idx" ON "posts_blocks_stats_items" USING btree ("_locale");
  CREATE INDEX "posts_blocks_stats_order_idx" ON "posts_blocks_stats" USING btree ("_order");
  CREATE INDEX "posts_blocks_stats_parent_id_idx" ON "posts_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_stats_path_idx" ON "posts_blocks_stats" USING btree ("_path");
  CREATE INDEX "posts_blocks_stats_locale_idx" ON "posts_blocks_stats" USING btree ("_locale");
  CREATE INDEX "posts_blocks_logos_logos_order_idx" ON "posts_blocks_logos_logos" USING btree ("_order");
  CREATE INDEX "posts_blocks_logos_logos_parent_id_idx" ON "posts_blocks_logos_logos" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_logos_logos_locale_idx" ON "posts_blocks_logos_logos" USING btree ("_locale");
  CREATE INDEX "posts_blocks_logos_logos_image_idx" ON "posts_blocks_logos_logos" USING btree ("image_id");
  CREATE INDEX "posts_blocks_logos_order_idx" ON "posts_blocks_logos" USING btree ("_order");
  CREATE INDEX "posts_blocks_logos_parent_id_idx" ON "posts_blocks_logos" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_logos_path_idx" ON "posts_blocks_logos" USING btree ("_path");
  CREATE INDEX "posts_blocks_logos_locale_idx" ON "posts_blocks_logos" USING btree ("_locale");
  CREATE INDEX "posts_blocks_testimonials_items_order_idx" ON "posts_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_testimonials_items_parent_id_idx" ON "posts_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_testimonials_items_locale_idx" ON "posts_blocks_testimonials_items" USING btree ("_locale");
  CREATE INDEX "posts_blocks_testimonials_items_photo_idx" ON "posts_blocks_testimonials_items" USING btree ("photo_id");
  CREATE INDEX "posts_blocks_testimonials_order_idx" ON "posts_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "posts_blocks_testimonials_parent_id_idx" ON "posts_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_testimonials_path_idx" ON "posts_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "posts_blocks_testimonials_locale_idx" ON "posts_blocks_testimonials" USING btree ("_locale");
  CREATE INDEX "posts_blocks_faq_items_order_idx" ON "posts_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_faq_items_parent_id_idx" ON "posts_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_faq_items_locale_idx" ON "posts_blocks_faq_items" USING btree ("_locale");
  CREATE INDEX "posts_blocks_faq_order_idx" ON "posts_blocks_faq" USING btree ("_order");
  CREATE INDEX "posts_blocks_faq_parent_id_idx" ON "posts_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_faq_path_idx" ON "posts_blocks_faq" USING btree ("_path");
  CREATE INDEX "posts_blocks_faq_locale_idx" ON "posts_blocks_faq" USING btree ("_locale");
  CREATE INDEX "posts_blocks_cta_links_order_idx" ON "posts_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "posts_blocks_cta_links_parent_id_idx" ON "posts_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_cta_links_locale_idx" ON "posts_blocks_cta_links" USING btree ("_locale");
  CREATE INDEX "posts_blocks_cta_order_idx" ON "posts_blocks_cta" USING btree ("_order");
  CREATE INDEX "posts_blocks_cta_parent_id_idx" ON "posts_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_cta_path_idx" ON "posts_blocks_cta" USING btree ("_path");
  CREATE INDEX "posts_blocks_cta_locale_idx" ON "posts_blocks_cta" USING btree ("_locale");
  CREATE INDEX "posts_blocks_dynamic_field_order_idx" ON "posts_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "posts_blocks_dynamic_field_parent_id_idx" ON "posts_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_dynamic_field_path_idx" ON "posts_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "posts_blocks_dynamic_field_locale_idx" ON "posts_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "posts_blocks_reusable_section_order_idx" ON "posts_blocks_reusable_section" USING btree ("_order");
  CREATE INDEX "posts_blocks_reusable_section_parent_id_idx" ON "posts_blocks_reusable_section" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_reusable_section_path_idx" ON "posts_blocks_reusable_section" USING btree ("_path");
  CREATE INDEX "posts_blocks_reusable_section_locale_idx" ON "posts_blocks_reusable_section" USING btree ("_locale");
  CREATE INDEX "posts_blocks_reusable_section_section_idx" ON "posts_blocks_reusable_section" USING btree ("section_id");
  CREATE INDEX "_posts_v_blocks_hero_links_order_idx" ON "_posts_v_blocks_hero_links" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_hero_links_parent_id_idx" ON "_posts_v_blocks_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_hero_links_locale_idx" ON "_posts_v_blocks_hero_links" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_hero_order_idx" ON "_posts_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_hero_parent_id_idx" ON "_posts_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_hero_path_idx" ON "_posts_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_hero_locale_idx" ON "_posts_v_blocks_hero" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_hero_image_idx" ON "_posts_v_blocks_hero" USING btree ("image_id");
  CREATE INDEX "_posts_v_blocks_rich_text_order_idx" ON "_posts_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_rich_text_parent_id_idx" ON "_posts_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_rich_text_path_idx" ON "_posts_v_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_rich_text_locale_idx" ON "_posts_v_blocks_rich_text" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_media_text_links_order_idx" ON "_posts_v_blocks_media_text_links" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_media_text_links_parent_id_idx" ON "_posts_v_blocks_media_text_links" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_media_text_links_locale_idx" ON "_posts_v_blocks_media_text_links" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_media_text_order_idx" ON "_posts_v_blocks_media_text" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_media_text_parent_id_idx" ON "_posts_v_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_media_text_path_idx" ON "_posts_v_blocks_media_text" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_media_text_locale_idx" ON "_posts_v_blocks_media_text" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_media_text_image_idx" ON "_posts_v_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "_posts_v_blocks_cards_items_order_idx" ON "_posts_v_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_cards_items_parent_id_idx" ON "_posts_v_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_cards_items_locale_idx" ON "_posts_v_blocks_cards_items" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_cards_items_image_idx" ON "_posts_v_blocks_cards_items" USING btree ("image_id");
  CREATE INDEX "_posts_v_blocks_cards_order_idx" ON "_posts_v_blocks_cards" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_cards_parent_id_idx" ON "_posts_v_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_cards_path_idx" ON "_posts_v_blocks_cards" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_cards_locale_idx" ON "_posts_v_blocks_cards" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_col_text_order_idx" ON "_posts_v_blocks_col_text" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_col_text_parent_id_idx" ON "_posts_v_blocks_col_text" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_col_text_path_idx" ON "_posts_v_blocks_col_text" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_col_text_locale_idx" ON "_posts_v_blocks_col_text" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_col_image_order_idx" ON "_posts_v_blocks_col_image" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_col_image_parent_id_idx" ON "_posts_v_blocks_col_image" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_col_image_path_idx" ON "_posts_v_blocks_col_image" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_col_image_locale_idx" ON "_posts_v_blocks_col_image" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_col_image_image_idx" ON "_posts_v_blocks_col_image" USING btree ("image_id");
  CREATE INDEX "_posts_v_blocks_col_buttons_links_order_idx" ON "_posts_v_blocks_col_buttons_links" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_col_buttons_links_parent_id_idx" ON "_posts_v_blocks_col_buttons_links" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_col_buttons_links_locale_idx" ON "_posts_v_blocks_col_buttons_links" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_col_buttons_order_idx" ON "_posts_v_blocks_col_buttons" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_col_buttons_parent_id_idx" ON "_posts_v_blocks_col_buttons" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_col_buttons_path_idx" ON "_posts_v_blocks_col_buttons" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_col_buttons_locale_idx" ON "_posts_v_blocks_col_buttons" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_columns_columns_order_idx" ON "_posts_v_blocks_columns_columns" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_columns_columns_parent_id_idx" ON "_posts_v_blocks_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_columns_columns_locale_idx" ON "_posts_v_blocks_columns_columns" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_columns_order_idx" ON "_posts_v_blocks_columns" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_columns_parent_id_idx" ON "_posts_v_blocks_columns" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_columns_path_idx" ON "_posts_v_blocks_columns" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_columns_locale_idx" ON "_posts_v_blocks_columns" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_tabs_tabs_order_idx" ON "_posts_v_blocks_tabs_tabs" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_tabs_tabs_parent_id_idx" ON "_posts_v_blocks_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_tabs_tabs_locale_idx" ON "_posts_v_blocks_tabs_tabs" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_tabs_tabs_image_idx" ON "_posts_v_blocks_tabs_tabs" USING btree ("image_id");
  CREATE INDEX "_posts_v_blocks_tabs_order_idx" ON "_posts_v_blocks_tabs" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_tabs_parent_id_idx" ON "_posts_v_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_tabs_path_idx" ON "_posts_v_blocks_tabs" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_tabs_locale_idx" ON "_posts_v_blocks_tabs" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_stats_items_order_idx" ON "_posts_v_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_stats_items_parent_id_idx" ON "_posts_v_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_stats_items_locale_idx" ON "_posts_v_blocks_stats_items" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_stats_order_idx" ON "_posts_v_blocks_stats" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_stats_parent_id_idx" ON "_posts_v_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_stats_path_idx" ON "_posts_v_blocks_stats" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_stats_locale_idx" ON "_posts_v_blocks_stats" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_logos_logos_order_idx" ON "_posts_v_blocks_logos_logos" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_logos_logos_parent_id_idx" ON "_posts_v_blocks_logos_logos" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_logos_logos_locale_idx" ON "_posts_v_blocks_logos_logos" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_logos_logos_image_idx" ON "_posts_v_blocks_logos_logos" USING btree ("image_id");
  CREATE INDEX "_posts_v_blocks_logos_order_idx" ON "_posts_v_blocks_logos" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_logos_parent_id_idx" ON "_posts_v_blocks_logos" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_logos_path_idx" ON "_posts_v_blocks_logos" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_logos_locale_idx" ON "_posts_v_blocks_logos" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_testimonials_items_order_idx" ON "_posts_v_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_testimonials_items_parent_id_idx" ON "_posts_v_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_testimonials_items_locale_idx" ON "_posts_v_blocks_testimonials_items" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_testimonials_items_photo_idx" ON "_posts_v_blocks_testimonials_items" USING btree ("photo_id");
  CREATE INDEX "_posts_v_blocks_testimonials_order_idx" ON "_posts_v_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_testimonials_parent_id_idx" ON "_posts_v_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_testimonials_path_idx" ON "_posts_v_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_testimonials_locale_idx" ON "_posts_v_blocks_testimonials" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_faq_items_order_idx" ON "_posts_v_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_faq_items_parent_id_idx" ON "_posts_v_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_faq_items_locale_idx" ON "_posts_v_blocks_faq_items" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_faq_order_idx" ON "_posts_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_faq_parent_id_idx" ON "_posts_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_faq_path_idx" ON "_posts_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_faq_locale_idx" ON "_posts_v_blocks_faq" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_cta_links_order_idx" ON "_posts_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_cta_links_parent_id_idx" ON "_posts_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_cta_links_locale_idx" ON "_posts_v_blocks_cta_links" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_cta_order_idx" ON "_posts_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_cta_parent_id_idx" ON "_posts_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_cta_path_idx" ON "_posts_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_cta_locale_idx" ON "_posts_v_blocks_cta" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_dynamic_field_order_idx" ON "_posts_v_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_dynamic_field_parent_id_idx" ON "_posts_v_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_dynamic_field_path_idx" ON "_posts_v_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_dynamic_field_locale_idx" ON "_posts_v_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_reusable_section_order_idx" ON "_posts_v_blocks_reusable_section" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_reusable_section_parent_id_idx" ON "_posts_v_blocks_reusable_section" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_reusable_section_path_idx" ON "_posts_v_blocks_reusable_section" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_reusable_section_locale_idx" ON "_posts_v_blocks_reusable_section" USING btree ("_locale");
  CREATE INDEX "_posts_v_blocks_reusable_section_section_idx" ON "_posts_v_blocks_reusable_section" USING btree ("section_id");
  CREATE INDEX "events_blocks_hero_links_order_idx" ON "events_blocks_hero_links" USING btree ("_order");
  CREATE INDEX "events_blocks_hero_links_parent_id_idx" ON "events_blocks_hero_links" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_hero_links_locale_idx" ON "events_blocks_hero_links" USING btree ("_locale");
  CREATE INDEX "events_blocks_hero_order_idx" ON "events_blocks_hero" USING btree ("_order");
  CREATE INDEX "events_blocks_hero_parent_id_idx" ON "events_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_hero_path_idx" ON "events_blocks_hero" USING btree ("_path");
  CREATE INDEX "events_blocks_hero_locale_idx" ON "events_blocks_hero" USING btree ("_locale");
  CREATE INDEX "events_blocks_hero_image_idx" ON "events_blocks_hero" USING btree ("image_id");
  CREATE INDEX "events_blocks_rich_text_order_idx" ON "events_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "events_blocks_rich_text_parent_id_idx" ON "events_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_rich_text_path_idx" ON "events_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "events_blocks_rich_text_locale_idx" ON "events_blocks_rich_text" USING btree ("_locale");
  CREATE INDEX "events_blocks_media_text_links_order_idx" ON "events_blocks_media_text_links" USING btree ("_order");
  CREATE INDEX "events_blocks_media_text_links_parent_id_idx" ON "events_blocks_media_text_links" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_media_text_links_locale_idx" ON "events_blocks_media_text_links" USING btree ("_locale");
  CREATE INDEX "events_blocks_media_text_order_idx" ON "events_blocks_media_text" USING btree ("_order");
  CREATE INDEX "events_blocks_media_text_parent_id_idx" ON "events_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_media_text_path_idx" ON "events_blocks_media_text" USING btree ("_path");
  CREATE INDEX "events_blocks_media_text_locale_idx" ON "events_blocks_media_text" USING btree ("_locale");
  CREATE INDEX "events_blocks_media_text_image_idx" ON "events_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "events_blocks_cards_items_order_idx" ON "events_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "events_blocks_cards_items_parent_id_idx" ON "events_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_cards_items_locale_idx" ON "events_blocks_cards_items" USING btree ("_locale");
  CREATE INDEX "events_blocks_cards_items_image_idx" ON "events_blocks_cards_items" USING btree ("image_id");
  CREATE INDEX "events_blocks_cards_order_idx" ON "events_blocks_cards" USING btree ("_order");
  CREATE INDEX "events_blocks_cards_parent_id_idx" ON "events_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_cards_path_idx" ON "events_blocks_cards" USING btree ("_path");
  CREATE INDEX "events_blocks_cards_locale_idx" ON "events_blocks_cards" USING btree ("_locale");
  CREATE INDEX "events_blocks_col_text_order_idx" ON "events_blocks_col_text" USING btree ("_order");
  CREATE INDEX "events_blocks_col_text_parent_id_idx" ON "events_blocks_col_text" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_col_text_path_idx" ON "events_blocks_col_text" USING btree ("_path");
  CREATE INDEX "events_blocks_col_text_locale_idx" ON "events_blocks_col_text" USING btree ("_locale");
  CREATE INDEX "events_blocks_col_image_order_idx" ON "events_blocks_col_image" USING btree ("_order");
  CREATE INDEX "events_blocks_col_image_parent_id_idx" ON "events_blocks_col_image" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_col_image_path_idx" ON "events_blocks_col_image" USING btree ("_path");
  CREATE INDEX "events_blocks_col_image_locale_idx" ON "events_blocks_col_image" USING btree ("_locale");
  CREATE INDEX "events_blocks_col_image_image_idx" ON "events_blocks_col_image" USING btree ("image_id");
  CREATE INDEX "events_blocks_col_buttons_links_order_idx" ON "events_blocks_col_buttons_links" USING btree ("_order");
  CREATE INDEX "events_blocks_col_buttons_links_parent_id_idx" ON "events_blocks_col_buttons_links" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_col_buttons_links_locale_idx" ON "events_blocks_col_buttons_links" USING btree ("_locale");
  CREATE INDEX "events_blocks_col_buttons_order_idx" ON "events_blocks_col_buttons" USING btree ("_order");
  CREATE INDEX "events_blocks_col_buttons_parent_id_idx" ON "events_blocks_col_buttons" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_col_buttons_path_idx" ON "events_blocks_col_buttons" USING btree ("_path");
  CREATE INDEX "events_blocks_col_buttons_locale_idx" ON "events_blocks_col_buttons" USING btree ("_locale");
  CREATE INDEX "events_blocks_columns_columns_order_idx" ON "events_blocks_columns_columns" USING btree ("_order");
  CREATE INDEX "events_blocks_columns_columns_parent_id_idx" ON "events_blocks_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_columns_columns_locale_idx" ON "events_blocks_columns_columns" USING btree ("_locale");
  CREATE INDEX "events_blocks_columns_order_idx" ON "events_blocks_columns" USING btree ("_order");
  CREATE INDEX "events_blocks_columns_parent_id_idx" ON "events_blocks_columns" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_columns_path_idx" ON "events_blocks_columns" USING btree ("_path");
  CREATE INDEX "events_blocks_columns_locale_idx" ON "events_blocks_columns" USING btree ("_locale");
  CREATE INDEX "events_blocks_tabs_tabs_order_idx" ON "events_blocks_tabs_tabs" USING btree ("_order");
  CREATE INDEX "events_blocks_tabs_tabs_parent_id_idx" ON "events_blocks_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_tabs_tabs_locale_idx" ON "events_blocks_tabs_tabs" USING btree ("_locale");
  CREATE INDEX "events_blocks_tabs_tabs_image_idx" ON "events_blocks_tabs_tabs" USING btree ("image_id");
  CREATE INDEX "events_blocks_tabs_order_idx" ON "events_blocks_tabs" USING btree ("_order");
  CREATE INDEX "events_blocks_tabs_parent_id_idx" ON "events_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_tabs_path_idx" ON "events_blocks_tabs" USING btree ("_path");
  CREATE INDEX "events_blocks_tabs_locale_idx" ON "events_blocks_tabs" USING btree ("_locale");
  CREATE INDEX "events_blocks_stats_items_order_idx" ON "events_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "events_blocks_stats_items_parent_id_idx" ON "events_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_stats_items_locale_idx" ON "events_blocks_stats_items" USING btree ("_locale");
  CREATE INDEX "events_blocks_stats_order_idx" ON "events_blocks_stats" USING btree ("_order");
  CREATE INDEX "events_blocks_stats_parent_id_idx" ON "events_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_stats_path_idx" ON "events_blocks_stats" USING btree ("_path");
  CREATE INDEX "events_blocks_stats_locale_idx" ON "events_blocks_stats" USING btree ("_locale");
  CREATE INDEX "events_blocks_logos_logos_order_idx" ON "events_blocks_logos_logos" USING btree ("_order");
  CREATE INDEX "events_blocks_logos_logos_parent_id_idx" ON "events_blocks_logos_logos" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_logos_logos_locale_idx" ON "events_blocks_logos_logos" USING btree ("_locale");
  CREATE INDEX "events_blocks_logos_logos_image_idx" ON "events_blocks_logos_logos" USING btree ("image_id");
  CREATE INDEX "events_blocks_logos_order_idx" ON "events_blocks_logos" USING btree ("_order");
  CREATE INDEX "events_blocks_logos_parent_id_idx" ON "events_blocks_logos" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_logos_path_idx" ON "events_blocks_logos" USING btree ("_path");
  CREATE INDEX "events_blocks_logos_locale_idx" ON "events_blocks_logos" USING btree ("_locale");
  CREATE INDEX "events_blocks_testimonials_items_order_idx" ON "events_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "events_blocks_testimonials_items_parent_id_idx" ON "events_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_testimonials_items_locale_idx" ON "events_blocks_testimonials_items" USING btree ("_locale");
  CREATE INDEX "events_blocks_testimonials_items_photo_idx" ON "events_blocks_testimonials_items" USING btree ("photo_id");
  CREATE INDEX "events_blocks_testimonials_order_idx" ON "events_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "events_blocks_testimonials_parent_id_idx" ON "events_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_testimonials_path_idx" ON "events_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "events_blocks_testimonials_locale_idx" ON "events_blocks_testimonials" USING btree ("_locale");
  CREATE INDEX "events_blocks_faq_items_order_idx" ON "events_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "events_blocks_faq_items_parent_id_idx" ON "events_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_faq_items_locale_idx" ON "events_blocks_faq_items" USING btree ("_locale");
  CREATE INDEX "events_blocks_faq_order_idx" ON "events_blocks_faq" USING btree ("_order");
  CREATE INDEX "events_blocks_faq_parent_id_idx" ON "events_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_faq_path_idx" ON "events_blocks_faq" USING btree ("_path");
  CREATE INDEX "events_blocks_faq_locale_idx" ON "events_blocks_faq" USING btree ("_locale");
  CREATE INDEX "events_blocks_cta_links_order_idx" ON "events_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "events_blocks_cta_links_parent_id_idx" ON "events_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_cta_links_locale_idx" ON "events_blocks_cta_links" USING btree ("_locale");
  CREATE INDEX "events_blocks_cta_order_idx" ON "events_blocks_cta" USING btree ("_order");
  CREATE INDEX "events_blocks_cta_parent_id_idx" ON "events_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_cta_path_idx" ON "events_blocks_cta" USING btree ("_path");
  CREATE INDEX "events_blocks_cta_locale_idx" ON "events_blocks_cta" USING btree ("_locale");
  CREATE INDEX "events_blocks_dynamic_field_order_idx" ON "events_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "events_blocks_dynamic_field_parent_id_idx" ON "events_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_dynamic_field_path_idx" ON "events_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "events_blocks_dynamic_field_locale_idx" ON "events_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "events_blocks_reusable_section_order_idx" ON "events_blocks_reusable_section" USING btree ("_order");
  CREATE INDEX "events_blocks_reusable_section_parent_id_idx" ON "events_blocks_reusable_section" USING btree ("_parent_id");
  CREATE INDEX "events_blocks_reusable_section_path_idx" ON "events_blocks_reusable_section" USING btree ("_path");
  CREATE INDEX "events_blocks_reusable_section_locale_idx" ON "events_blocks_reusable_section" USING btree ("_locale");
  CREATE INDEX "events_blocks_reusable_section_section_idx" ON "events_blocks_reusable_section" USING btree ("section_id");
  CREATE INDEX "_events_v_blocks_hero_links_order_idx" ON "_events_v_blocks_hero_links" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_hero_links_parent_id_idx" ON "_events_v_blocks_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_hero_links_locale_idx" ON "_events_v_blocks_hero_links" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_hero_order_idx" ON "_events_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_hero_parent_id_idx" ON "_events_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_hero_path_idx" ON "_events_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_hero_locale_idx" ON "_events_v_blocks_hero" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_hero_image_idx" ON "_events_v_blocks_hero" USING btree ("image_id");
  CREATE INDEX "_events_v_blocks_rich_text_order_idx" ON "_events_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_rich_text_parent_id_idx" ON "_events_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_rich_text_path_idx" ON "_events_v_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_rich_text_locale_idx" ON "_events_v_blocks_rich_text" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_media_text_links_order_idx" ON "_events_v_blocks_media_text_links" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_media_text_links_parent_id_idx" ON "_events_v_blocks_media_text_links" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_media_text_links_locale_idx" ON "_events_v_blocks_media_text_links" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_media_text_order_idx" ON "_events_v_blocks_media_text" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_media_text_parent_id_idx" ON "_events_v_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_media_text_path_idx" ON "_events_v_blocks_media_text" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_media_text_locale_idx" ON "_events_v_blocks_media_text" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_media_text_image_idx" ON "_events_v_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "_events_v_blocks_cards_items_order_idx" ON "_events_v_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_cards_items_parent_id_idx" ON "_events_v_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_cards_items_locale_idx" ON "_events_v_blocks_cards_items" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_cards_items_image_idx" ON "_events_v_blocks_cards_items" USING btree ("image_id");
  CREATE INDEX "_events_v_blocks_cards_order_idx" ON "_events_v_blocks_cards" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_cards_parent_id_idx" ON "_events_v_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_cards_path_idx" ON "_events_v_blocks_cards" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_cards_locale_idx" ON "_events_v_blocks_cards" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_col_text_order_idx" ON "_events_v_blocks_col_text" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_col_text_parent_id_idx" ON "_events_v_blocks_col_text" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_col_text_path_idx" ON "_events_v_blocks_col_text" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_col_text_locale_idx" ON "_events_v_blocks_col_text" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_col_image_order_idx" ON "_events_v_blocks_col_image" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_col_image_parent_id_idx" ON "_events_v_blocks_col_image" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_col_image_path_idx" ON "_events_v_blocks_col_image" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_col_image_locale_idx" ON "_events_v_blocks_col_image" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_col_image_image_idx" ON "_events_v_blocks_col_image" USING btree ("image_id");
  CREATE INDEX "_events_v_blocks_col_buttons_links_order_idx" ON "_events_v_blocks_col_buttons_links" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_col_buttons_links_parent_id_idx" ON "_events_v_blocks_col_buttons_links" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_col_buttons_links_locale_idx" ON "_events_v_blocks_col_buttons_links" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_col_buttons_order_idx" ON "_events_v_blocks_col_buttons" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_col_buttons_parent_id_idx" ON "_events_v_blocks_col_buttons" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_col_buttons_path_idx" ON "_events_v_blocks_col_buttons" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_col_buttons_locale_idx" ON "_events_v_blocks_col_buttons" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_columns_columns_order_idx" ON "_events_v_blocks_columns_columns" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_columns_columns_parent_id_idx" ON "_events_v_blocks_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_columns_columns_locale_idx" ON "_events_v_blocks_columns_columns" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_columns_order_idx" ON "_events_v_blocks_columns" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_columns_parent_id_idx" ON "_events_v_blocks_columns" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_columns_path_idx" ON "_events_v_blocks_columns" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_columns_locale_idx" ON "_events_v_blocks_columns" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_tabs_tabs_order_idx" ON "_events_v_blocks_tabs_tabs" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_tabs_tabs_parent_id_idx" ON "_events_v_blocks_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_tabs_tabs_locale_idx" ON "_events_v_blocks_tabs_tabs" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_tabs_tabs_image_idx" ON "_events_v_blocks_tabs_tabs" USING btree ("image_id");
  CREATE INDEX "_events_v_blocks_tabs_order_idx" ON "_events_v_blocks_tabs" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_tabs_parent_id_idx" ON "_events_v_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_tabs_path_idx" ON "_events_v_blocks_tabs" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_tabs_locale_idx" ON "_events_v_blocks_tabs" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_stats_items_order_idx" ON "_events_v_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_stats_items_parent_id_idx" ON "_events_v_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_stats_items_locale_idx" ON "_events_v_blocks_stats_items" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_stats_order_idx" ON "_events_v_blocks_stats" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_stats_parent_id_idx" ON "_events_v_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_stats_path_idx" ON "_events_v_blocks_stats" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_stats_locale_idx" ON "_events_v_blocks_stats" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_logos_logos_order_idx" ON "_events_v_blocks_logos_logos" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_logos_logos_parent_id_idx" ON "_events_v_blocks_logos_logos" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_logos_logos_locale_idx" ON "_events_v_blocks_logos_logos" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_logos_logos_image_idx" ON "_events_v_blocks_logos_logos" USING btree ("image_id");
  CREATE INDEX "_events_v_blocks_logos_order_idx" ON "_events_v_blocks_logos" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_logos_parent_id_idx" ON "_events_v_blocks_logos" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_logos_path_idx" ON "_events_v_blocks_logos" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_logos_locale_idx" ON "_events_v_blocks_logos" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_testimonials_items_order_idx" ON "_events_v_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_testimonials_items_parent_id_idx" ON "_events_v_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_testimonials_items_locale_idx" ON "_events_v_blocks_testimonials_items" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_testimonials_items_photo_idx" ON "_events_v_blocks_testimonials_items" USING btree ("photo_id");
  CREATE INDEX "_events_v_blocks_testimonials_order_idx" ON "_events_v_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_testimonials_parent_id_idx" ON "_events_v_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_testimonials_path_idx" ON "_events_v_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_testimonials_locale_idx" ON "_events_v_blocks_testimonials" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_faq_items_order_idx" ON "_events_v_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_faq_items_parent_id_idx" ON "_events_v_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_faq_items_locale_idx" ON "_events_v_blocks_faq_items" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_faq_order_idx" ON "_events_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_faq_parent_id_idx" ON "_events_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_faq_path_idx" ON "_events_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_faq_locale_idx" ON "_events_v_blocks_faq" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_cta_links_order_idx" ON "_events_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_cta_links_parent_id_idx" ON "_events_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_cta_links_locale_idx" ON "_events_v_blocks_cta_links" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_cta_order_idx" ON "_events_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_cta_parent_id_idx" ON "_events_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_cta_path_idx" ON "_events_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_cta_locale_idx" ON "_events_v_blocks_cta" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_dynamic_field_order_idx" ON "_events_v_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_dynamic_field_parent_id_idx" ON "_events_v_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_dynamic_field_path_idx" ON "_events_v_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_dynamic_field_locale_idx" ON "_events_v_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_reusable_section_order_idx" ON "_events_v_blocks_reusable_section" USING btree ("_order");
  CREATE INDEX "_events_v_blocks_reusable_section_parent_id_idx" ON "_events_v_blocks_reusable_section" USING btree ("_parent_id");
  CREATE INDEX "_events_v_blocks_reusable_section_path_idx" ON "_events_v_blocks_reusable_section" USING btree ("_path");
  CREATE INDEX "_events_v_blocks_reusable_section_locale_idx" ON "_events_v_blocks_reusable_section" USING btree ("_locale");
  CREATE INDEX "_events_v_blocks_reusable_section_section_idx" ON "_events_v_blocks_reusable_section" USING btree ("section_id");
  CREATE INDEX "resources_blocks_hero_links_order_idx" ON "resources_blocks_hero_links" USING btree ("_order");
  CREATE INDEX "resources_blocks_hero_links_parent_id_idx" ON "resources_blocks_hero_links" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_hero_links_locale_idx" ON "resources_blocks_hero_links" USING btree ("_locale");
  CREATE INDEX "resources_blocks_hero_order_idx" ON "resources_blocks_hero" USING btree ("_order");
  CREATE INDEX "resources_blocks_hero_parent_id_idx" ON "resources_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_hero_path_idx" ON "resources_blocks_hero" USING btree ("_path");
  CREATE INDEX "resources_blocks_hero_locale_idx" ON "resources_blocks_hero" USING btree ("_locale");
  CREATE INDEX "resources_blocks_hero_image_idx" ON "resources_blocks_hero" USING btree ("image_id");
  CREATE INDEX "resources_blocks_rich_text_order_idx" ON "resources_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "resources_blocks_rich_text_parent_id_idx" ON "resources_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_rich_text_path_idx" ON "resources_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "resources_blocks_rich_text_locale_idx" ON "resources_blocks_rich_text" USING btree ("_locale");
  CREATE INDEX "resources_blocks_media_text_links_order_idx" ON "resources_blocks_media_text_links" USING btree ("_order");
  CREATE INDEX "resources_blocks_media_text_links_parent_id_idx" ON "resources_blocks_media_text_links" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_media_text_links_locale_idx" ON "resources_blocks_media_text_links" USING btree ("_locale");
  CREATE INDEX "resources_blocks_media_text_order_idx" ON "resources_blocks_media_text" USING btree ("_order");
  CREATE INDEX "resources_blocks_media_text_parent_id_idx" ON "resources_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_media_text_path_idx" ON "resources_blocks_media_text" USING btree ("_path");
  CREATE INDEX "resources_blocks_media_text_locale_idx" ON "resources_blocks_media_text" USING btree ("_locale");
  CREATE INDEX "resources_blocks_media_text_image_idx" ON "resources_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "resources_blocks_cards_items_order_idx" ON "resources_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "resources_blocks_cards_items_parent_id_idx" ON "resources_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_cards_items_locale_idx" ON "resources_blocks_cards_items" USING btree ("_locale");
  CREATE INDEX "resources_blocks_cards_items_image_idx" ON "resources_blocks_cards_items" USING btree ("image_id");
  CREATE INDEX "resources_blocks_cards_order_idx" ON "resources_blocks_cards" USING btree ("_order");
  CREATE INDEX "resources_blocks_cards_parent_id_idx" ON "resources_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_cards_path_idx" ON "resources_blocks_cards" USING btree ("_path");
  CREATE INDEX "resources_blocks_cards_locale_idx" ON "resources_blocks_cards" USING btree ("_locale");
  CREATE INDEX "resources_blocks_col_text_order_idx" ON "resources_blocks_col_text" USING btree ("_order");
  CREATE INDEX "resources_blocks_col_text_parent_id_idx" ON "resources_blocks_col_text" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_col_text_path_idx" ON "resources_blocks_col_text" USING btree ("_path");
  CREATE INDEX "resources_blocks_col_text_locale_idx" ON "resources_blocks_col_text" USING btree ("_locale");
  CREATE INDEX "resources_blocks_col_image_order_idx" ON "resources_blocks_col_image" USING btree ("_order");
  CREATE INDEX "resources_blocks_col_image_parent_id_idx" ON "resources_blocks_col_image" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_col_image_path_idx" ON "resources_blocks_col_image" USING btree ("_path");
  CREATE INDEX "resources_blocks_col_image_locale_idx" ON "resources_blocks_col_image" USING btree ("_locale");
  CREATE INDEX "resources_blocks_col_image_image_idx" ON "resources_blocks_col_image" USING btree ("image_id");
  CREATE INDEX "resources_blocks_col_buttons_links_order_idx" ON "resources_blocks_col_buttons_links" USING btree ("_order");
  CREATE INDEX "resources_blocks_col_buttons_links_parent_id_idx" ON "resources_blocks_col_buttons_links" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_col_buttons_links_locale_idx" ON "resources_blocks_col_buttons_links" USING btree ("_locale");
  CREATE INDEX "resources_blocks_col_buttons_order_idx" ON "resources_blocks_col_buttons" USING btree ("_order");
  CREATE INDEX "resources_blocks_col_buttons_parent_id_idx" ON "resources_blocks_col_buttons" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_col_buttons_path_idx" ON "resources_blocks_col_buttons" USING btree ("_path");
  CREATE INDEX "resources_blocks_col_buttons_locale_idx" ON "resources_blocks_col_buttons" USING btree ("_locale");
  CREATE INDEX "resources_blocks_columns_columns_order_idx" ON "resources_blocks_columns_columns" USING btree ("_order");
  CREATE INDEX "resources_blocks_columns_columns_parent_id_idx" ON "resources_blocks_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_columns_columns_locale_idx" ON "resources_blocks_columns_columns" USING btree ("_locale");
  CREATE INDEX "resources_blocks_columns_order_idx" ON "resources_blocks_columns" USING btree ("_order");
  CREATE INDEX "resources_blocks_columns_parent_id_idx" ON "resources_blocks_columns" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_columns_path_idx" ON "resources_blocks_columns" USING btree ("_path");
  CREATE INDEX "resources_blocks_columns_locale_idx" ON "resources_blocks_columns" USING btree ("_locale");
  CREATE INDEX "resources_blocks_tabs_tabs_order_idx" ON "resources_blocks_tabs_tabs" USING btree ("_order");
  CREATE INDEX "resources_blocks_tabs_tabs_parent_id_idx" ON "resources_blocks_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_tabs_tabs_locale_idx" ON "resources_blocks_tabs_tabs" USING btree ("_locale");
  CREATE INDEX "resources_blocks_tabs_tabs_image_idx" ON "resources_blocks_tabs_tabs" USING btree ("image_id");
  CREATE INDEX "resources_blocks_tabs_order_idx" ON "resources_blocks_tabs" USING btree ("_order");
  CREATE INDEX "resources_blocks_tabs_parent_id_idx" ON "resources_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_tabs_path_idx" ON "resources_blocks_tabs" USING btree ("_path");
  CREATE INDEX "resources_blocks_tabs_locale_idx" ON "resources_blocks_tabs" USING btree ("_locale");
  CREATE INDEX "resources_blocks_stats_items_order_idx" ON "resources_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "resources_blocks_stats_items_parent_id_idx" ON "resources_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_stats_items_locale_idx" ON "resources_blocks_stats_items" USING btree ("_locale");
  CREATE INDEX "resources_blocks_stats_order_idx" ON "resources_blocks_stats" USING btree ("_order");
  CREATE INDEX "resources_blocks_stats_parent_id_idx" ON "resources_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_stats_path_idx" ON "resources_blocks_stats" USING btree ("_path");
  CREATE INDEX "resources_blocks_stats_locale_idx" ON "resources_blocks_stats" USING btree ("_locale");
  CREATE INDEX "resources_blocks_logos_logos_order_idx" ON "resources_blocks_logos_logos" USING btree ("_order");
  CREATE INDEX "resources_blocks_logos_logos_parent_id_idx" ON "resources_blocks_logos_logos" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_logos_logos_locale_idx" ON "resources_blocks_logos_logos" USING btree ("_locale");
  CREATE INDEX "resources_blocks_logos_logos_image_idx" ON "resources_blocks_logos_logos" USING btree ("image_id");
  CREATE INDEX "resources_blocks_logos_order_idx" ON "resources_blocks_logos" USING btree ("_order");
  CREATE INDEX "resources_blocks_logos_parent_id_idx" ON "resources_blocks_logos" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_logos_path_idx" ON "resources_blocks_logos" USING btree ("_path");
  CREATE INDEX "resources_blocks_logos_locale_idx" ON "resources_blocks_logos" USING btree ("_locale");
  CREATE INDEX "resources_blocks_testimonials_items_order_idx" ON "resources_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "resources_blocks_testimonials_items_parent_id_idx" ON "resources_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_testimonials_items_locale_idx" ON "resources_blocks_testimonials_items" USING btree ("_locale");
  CREATE INDEX "resources_blocks_testimonials_items_photo_idx" ON "resources_blocks_testimonials_items" USING btree ("photo_id");
  CREATE INDEX "resources_blocks_testimonials_order_idx" ON "resources_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "resources_blocks_testimonials_parent_id_idx" ON "resources_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_testimonials_path_idx" ON "resources_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "resources_blocks_testimonials_locale_idx" ON "resources_blocks_testimonials" USING btree ("_locale");
  CREATE INDEX "resources_blocks_faq_items_order_idx" ON "resources_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "resources_blocks_faq_items_parent_id_idx" ON "resources_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_faq_items_locale_idx" ON "resources_blocks_faq_items" USING btree ("_locale");
  CREATE INDEX "resources_blocks_faq_order_idx" ON "resources_blocks_faq" USING btree ("_order");
  CREATE INDEX "resources_blocks_faq_parent_id_idx" ON "resources_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_faq_path_idx" ON "resources_blocks_faq" USING btree ("_path");
  CREATE INDEX "resources_blocks_faq_locale_idx" ON "resources_blocks_faq" USING btree ("_locale");
  CREATE INDEX "resources_blocks_cta_links_order_idx" ON "resources_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "resources_blocks_cta_links_parent_id_idx" ON "resources_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_cta_links_locale_idx" ON "resources_blocks_cta_links" USING btree ("_locale");
  CREATE INDEX "resources_blocks_cta_order_idx" ON "resources_blocks_cta" USING btree ("_order");
  CREATE INDEX "resources_blocks_cta_parent_id_idx" ON "resources_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_cta_path_idx" ON "resources_blocks_cta" USING btree ("_path");
  CREATE INDEX "resources_blocks_cta_locale_idx" ON "resources_blocks_cta" USING btree ("_locale");
  CREATE INDEX "resources_blocks_dynamic_field_order_idx" ON "resources_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "resources_blocks_dynamic_field_parent_id_idx" ON "resources_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_dynamic_field_path_idx" ON "resources_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "resources_blocks_dynamic_field_locale_idx" ON "resources_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "resources_blocks_reusable_section_order_idx" ON "resources_blocks_reusable_section" USING btree ("_order");
  CREATE INDEX "resources_blocks_reusable_section_parent_id_idx" ON "resources_blocks_reusable_section" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_reusable_section_path_idx" ON "resources_blocks_reusable_section" USING btree ("_path");
  CREATE INDEX "resources_blocks_reusable_section_locale_idx" ON "resources_blocks_reusable_section" USING btree ("_locale");
  CREATE INDEX "resources_blocks_reusable_section_section_idx" ON "resources_blocks_reusable_section" USING btree ("section_id");
  CREATE INDEX "_resources_v_blocks_hero_links_order_idx" ON "_resources_v_blocks_hero_links" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_hero_links_parent_id_idx" ON "_resources_v_blocks_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_hero_links_locale_idx" ON "_resources_v_blocks_hero_links" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_hero_order_idx" ON "_resources_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_hero_parent_id_idx" ON "_resources_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_hero_path_idx" ON "_resources_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_hero_locale_idx" ON "_resources_v_blocks_hero" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_hero_image_idx" ON "_resources_v_blocks_hero" USING btree ("image_id");
  CREATE INDEX "_resources_v_blocks_rich_text_order_idx" ON "_resources_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_rich_text_parent_id_idx" ON "_resources_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_rich_text_path_idx" ON "_resources_v_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_rich_text_locale_idx" ON "_resources_v_blocks_rich_text" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_media_text_links_order_idx" ON "_resources_v_blocks_media_text_links" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_media_text_links_parent_id_idx" ON "_resources_v_blocks_media_text_links" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_media_text_links_locale_idx" ON "_resources_v_blocks_media_text_links" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_media_text_order_idx" ON "_resources_v_blocks_media_text" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_media_text_parent_id_idx" ON "_resources_v_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_media_text_path_idx" ON "_resources_v_blocks_media_text" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_media_text_locale_idx" ON "_resources_v_blocks_media_text" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_media_text_image_idx" ON "_resources_v_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "_resources_v_blocks_cards_items_order_idx" ON "_resources_v_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_cards_items_parent_id_idx" ON "_resources_v_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_cards_items_locale_idx" ON "_resources_v_blocks_cards_items" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_cards_items_image_idx" ON "_resources_v_blocks_cards_items" USING btree ("image_id");
  CREATE INDEX "_resources_v_blocks_cards_order_idx" ON "_resources_v_blocks_cards" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_cards_parent_id_idx" ON "_resources_v_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_cards_path_idx" ON "_resources_v_blocks_cards" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_cards_locale_idx" ON "_resources_v_blocks_cards" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_col_text_order_idx" ON "_resources_v_blocks_col_text" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_col_text_parent_id_idx" ON "_resources_v_blocks_col_text" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_col_text_path_idx" ON "_resources_v_blocks_col_text" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_col_text_locale_idx" ON "_resources_v_blocks_col_text" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_col_image_order_idx" ON "_resources_v_blocks_col_image" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_col_image_parent_id_idx" ON "_resources_v_blocks_col_image" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_col_image_path_idx" ON "_resources_v_blocks_col_image" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_col_image_locale_idx" ON "_resources_v_blocks_col_image" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_col_image_image_idx" ON "_resources_v_blocks_col_image" USING btree ("image_id");
  CREATE INDEX "_resources_v_blocks_col_buttons_links_order_idx" ON "_resources_v_blocks_col_buttons_links" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_col_buttons_links_parent_id_idx" ON "_resources_v_blocks_col_buttons_links" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_col_buttons_links_locale_idx" ON "_resources_v_blocks_col_buttons_links" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_col_buttons_order_idx" ON "_resources_v_blocks_col_buttons" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_col_buttons_parent_id_idx" ON "_resources_v_blocks_col_buttons" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_col_buttons_path_idx" ON "_resources_v_blocks_col_buttons" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_col_buttons_locale_idx" ON "_resources_v_blocks_col_buttons" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_columns_columns_order_idx" ON "_resources_v_blocks_columns_columns" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_columns_columns_parent_id_idx" ON "_resources_v_blocks_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_columns_columns_locale_idx" ON "_resources_v_blocks_columns_columns" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_columns_order_idx" ON "_resources_v_blocks_columns" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_columns_parent_id_idx" ON "_resources_v_blocks_columns" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_columns_path_idx" ON "_resources_v_blocks_columns" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_columns_locale_idx" ON "_resources_v_blocks_columns" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_tabs_tabs_order_idx" ON "_resources_v_blocks_tabs_tabs" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_tabs_tabs_parent_id_idx" ON "_resources_v_blocks_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_tabs_tabs_locale_idx" ON "_resources_v_blocks_tabs_tabs" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_tabs_tabs_image_idx" ON "_resources_v_blocks_tabs_tabs" USING btree ("image_id");
  CREATE INDEX "_resources_v_blocks_tabs_order_idx" ON "_resources_v_blocks_tabs" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_tabs_parent_id_idx" ON "_resources_v_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_tabs_path_idx" ON "_resources_v_blocks_tabs" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_tabs_locale_idx" ON "_resources_v_blocks_tabs" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_stats_items_order_idx" ON "_resources_v_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_stats_items_parent_id_idx" ON "_resources_v_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_stats_items_locale_idx" ON "_resources_v_blocks_stats_items" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_stats_order_idx" ON "_resources_v_blocks_stats" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_stats_parent_id_idx" ON "_resources_v_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_stats_path_idx" ON "_resources_v_blocks_stats" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_stats_locale_idx" ON "_resources_v_blocks_stats" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_logos_logos_order_idx" ON "_resources_v_blocks_logos_logos" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_logos_logos_parent_id_idx" ON "_resources_v_blocks_logos_logos" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_logos_logos_locale_idx" ON "_resources_v_blocks_logos_logos" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_logos_logos_image_idx" ON "_resources_v_blocks_logos_logos" USING btree ("image_id");
  CREATE INDEX "_resources_v_blocks_logos_order_idx" ON "_resources_v_blocks_logos" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_logos_parent_id_idx" ON "_resources_v_blocks_logos" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_logos_path_idx" ON "_resources_v_blocks_logos" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_logos_locale_idx" ON "_resources_v_blocks_logos" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_testimonials_items_order_idx" ON "_resources_v_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_testimonials_items_parent_id_idx" ON "_resources_v_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_testimonials_items_locale_idx" ON "_resources_v_blocks_testimonials_items" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_testimonials_items_photo_idx" ON "_resources_v_blocks_testimonials_items" USING btree ("photo_id");
  CREATE INDEX "_resources_v_blocks_testimonials_order_idx" ON "_resources_v_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_testimonials_parent_id_idx" ON "_resources_v_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_testimonials_path_idx" ON "_resources_v_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_testimonials_locale_idx" ON "_resources_v_blocks_testimonials" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_faq_items_order_idx" ON "_resources_v_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_faq_items_parent_id_idx" ON "_resources_v_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_faq_items_locale_idx" ON "_resources_v_blocks_faq_items" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_faq_order_idx" ON "_resources_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_faq_parent_id_idx" ON "_resources_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_faq_path_idx" ON "_resources_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_faq_locale_idx" ON "_resources_v_blocks_faq" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_cta_links_order_idx" ON "_resources_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_cta_links_parent_id_idx" ON "_resources_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_cta_links_locale_idx" ON "_resources_v_blocks_cta_links" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_cta_order_idx" ON "_resources_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_cta_parent_id_idx" ON "_resources_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_cta_path_idx" ON "_resources_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_cta_locale_idx" ON "_resources_v_blocks_cta" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_dynamic_field_order_idx" ON "_resources_v_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_dynamic_field_parent_id_idx" ON "_resources_v_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_dynamic_field_path_idx" ON "_resources_v_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_dynamic_field_locale_idx" ON "_resources_v_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_reusable_section_order_idx" ON "_resources_v_blocks_reusable_section" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_reusable_section_parent_id_idx" ON "_resources_v_blocks_reusable_section" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_reusable_section_path_idx" ON "_resources_v_blocks_reusable_section" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_reusable_section_locale_idx" ON "_resources_v_blocks_reusable_section" USING btree ("_locale");
  CREATE INDEX "_resources_v_blocks_reusable_section_section_idx" ON "_resources_v_blocks_reusable_section" USING btree ("section_id");
  CREATE INDEX "glossary_blocks_hero_links_order_idx" ON "glossary_blocks_hero_links" USING btree ("_order");
  CREATE INDEX "glossary_blocks_hero_links_parent_id_idx" ON "glossary_blocks_hero_links" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_hero_links_locale_idx" ON "glossary_blocks_hero_links" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_hero_order_idx" ON "glossary_blocks_hero" USING btree ("_order");
  CREATE INDEX "glossary_blocks_hero_parent_id_idx" ON "glossary_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_hero_path_idx" ON "glossary_blocks_hero" USING btree ("_path");
  CREATE INDEX "glossary_blocks_hero_locale_idx" ON "glossary_blocks_hero" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_hero_image_idx" ON "glossary_blocks_hero" USING btree ("image_id");
  CREATE INDEX "glossary_blocks_rich_text_order_idx" ON "glossary_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "glossary_blocks_rich_text_parent_id_idx" ON "glossary_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_rich_text_path_idx" ON "glossary_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "glossary_blocks_rich_text_locale_idx" ON "glossary_blocks_rich_text" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_media_text_links_order_idx" ON "glossary_blocks_media_text_links" USING btree ("_order");
  CREATE INDEX "glossary_blocks_media_text_links_parent_id_idx" ON "glossary_blocks_media_text_links" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_media_text_links_locale_idx" ON "glossary_blocks_media_text_links" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_media_text_order_idx" ON "glossary_blocks_media_text" USING btree ("_order");
  CREATE INDEX "glossary_blocks_media_text_parent_id_idx" ON "glossary_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_media_text_path_idx" ON "glossary_blocks_media_text" USING btree ("_path");
  CREATE INDEX "glossary_blocks_media_text_locale_idx" ON "glossary_blocks_media_text" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_media_text_image_idx" ON "glossary_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "glossary_blocks_cards_items_order_idx" ON "glossary_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "glossary_blocks_cards_items_parent_id_idx" ON "glossary_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_cards_items_locale_idx" ON "glossary_blocks_cards_items" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_cards_items_image_idx" ON "glossary_blocks_cards_items" USING btree ("image_id");
  CREATE INDEX "glossary_blocks_cards_order_idx" ON "glossary_blocks_cards" USING btree ("_order");
  CREATE INDEX "glossary_blocks_cards_parent_id_idx" ON "glossary_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_cards_path_idx" ON "glossary_blocks_cards" USING btree ("_path");
  CREATE INDEX "glossary_blocks_cards_locale_idx" ON "glossary_blocks_cards" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_col_text_order_idx" ON "glossary_blocks_col_text" USING btree ("_order");
  CREATE INDEX "glossary_blocks_col_text_parent_id_idx" ON "glossary_blocks_col_text" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_col_text_path_idx" ON "glossary_blocks_col_text" USING btree ("_path");
  CREATE INDEX "glossary_blocks_col_text_locale_idx" ON "glossary_blocks_col_text" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_col_image_order_idx" ON "glossary_blocks_col_image" USING btree ("_order");
  CREATE INDEX "glossary_blocks_col_image_parent_id_idx" ON "glossary_blocks_col_image" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_col_image_path_idx" ON "glossary_blocks_col_image" USING btree ("_path");
  CREATE INDEX "glossary_blocks_col_image_locale_idx" ON "glossary_blocks_col_image" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_col_image_image_idx" ON "glossary_blocks_col_image" USING btree ("image_id");
  CREATE INDEX "glossary_blocks_col_buttons_links_order_idx" ON "glossary_blocks_col_buttons_links" USING btree ("_order");
  CREATE INDEX "glossary_blocks_col_buttons_links_parent_id_idx" ON "glossary_blocks_col_buttons_links" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_col_buttons_links_locale_idx" ON "glossary_blocks_col_buttons_links" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_col_buttons_order_idx" ON "glossary_blocks_col_buttons" USING btree ("_order");
  CREATE INDEX "glossary_blocks_col_buttons_parent_id_idx" ON "glossary_blocks_col_buttons" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_col_buttons_path_idx" ON "glossary_blocks_col_buttons" USING btree ("_path");
  CREATE INDEX "glossary_blocks_col_buttons_locale_idx" ON "glossary_blocks_col_buttons" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_columns_columns_order_idx" ON "glossary_blocks_columns_columns" USING btree ("_order");
  CREATE INDEX "glossary_blocks_columns_columns_parent_id_idx" ON "glossary_blocks_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_columns_columns_locale_idx" ON "glossary_blocks_columns_columns" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_columns_order_idx" ON "glossary_blocks_columns" USING btree ("_order");
  CREATE INDEX "glossary_blocks_columns_parent_id_idx" ON "glossary_blocks_columns" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_columns_path_idx" ON "glossary_blocks_columns" USING btree ("_path");
  CREATE INDEX "glossary_blocks_columns_locale_idx" ON "glossary_blocks_columns" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_tabs_tabs_order_idx" ON "glossary_blocks_tabs_tabs" USING btree ("_order");
  CREATE INDEX "glossary_blocks_tabs_tabs_parent_id_idx" ON "glossary_blocks_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_tabs_tabs_locale_idx" ON "glossary_blocks_tabs_tabs" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_tabs_tabs_image_idx" ON "glossary_blocks_tabs_tabs" USING btree ("image_id");
  CREATE INDEX "glossary_blocks_tabs_order_idx" ON "glossary_blocks_tabs" USING btree ("_order");
  CREATE INDEX "glossary_blocks_tabs_parent_id_idx" ON "glossary_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_tabs_path_idx" ON "glossary_blocks_tabs" USING btree ("_path");
  CREATE INDEX "glossary_blocks_tabs_locale_idx" ON "glossary_blocks_tabs" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_stats_items_order_idx" ON "glossary_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "glossary_blocks_stats_items_parent_id_idx" ON "glossary_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_stats_items_locale_idx" ON "glossary_blocks_stats_items" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_stats_order_idx" ON "glossary_blocks_stats" USING btree ("_order");
  CREATE INDEX "glossary_blocks_stats_parent_id_idx" ON "glossary_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_stats_path_idx" ON "glossary_blocks_stats" USING btree ("_path");
  CREATE INDEX "glossary_blocks_stats_locale_idx" ON "glossary_blocks_stats" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_logos_logos_order_idx" ON "glossary_blocks_logos_logos" USING btree ("_order");
  CREATE INDEX "glossary_blocks_logos_logos_parent_id_idx" ON "glossary_blocks_logos_logos" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_logos_logos_locale_idx" ON "glossary_blocks_logos_logos" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_logos_logos_image_idx" ON "glossary_blocks_logos_logos" USING btree ("image_id");
  CREATE INDEX "glossary_blocks_logos_order_idx" ON "glossary_blocks_logos" USING btree ("_order");
  CREATE INDEX "glossary_blocks_logos_parent_id_idx" ON "glossary_blocks_logos" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_logos_path_idx" ON "glossary_blocks_logos" USING btree ("_path");
  CREATE INDEX "glossary_blocks_logos_locale_idx" ON "glossary_blocks_logos" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_testimonials_items_order_idx" ON "glossary_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "glossary_blocks_testimonials_items_parent_id_idx" ON "glossary_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_testimonials_items_locale_idx" ON "glossary_blocks_testimonials_items" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_testimonials_items_photo_idx" ON "glossary_blocks_testimonials_items" USING btree ("photo_id");
  CREATE INDEX "glossary_blocks_testimonials_order_idx" ON "glossary_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "glossary_blocks_testimonials_parent_id_idx" ON "glossary_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_testimonials_path_idx" ON "glossary_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "glossary_blocks_testimonials_locale_idx" ON "glossary_blocks_testimonials" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_faq_items_order_idx" ON "glossary_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "glossary_blocks_faq_items_parent_id_idx" ON "glossary_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_faq_items_locale_idx" ON "glossary_blocks_faq_items" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_faq_order_idx" ON "glossary_blocks_faq" USING btree ("_order");
  CREATE INDEX "glossary_blocks_faq_parent_id_idx" ON "glossary_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_faq_path_idx" ON "glossary_blocks_faq" USING btree ("_path");
  CREATE INDEX "glossary_blocks_faq_locale_idx" ON "glossary_blocks_faq" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_cta_links_order_idx" ON "glossary_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "glossary_blocks_cta_links_parent_id_idx" ON "glossary_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_cta_links_locale_idx" ON "glossary_blocks_cta_links" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_cta_order_idx" ON "glossary_blocks_cta" USING btree ("_order");
  CREATE INDEX "glossary_blocks_cta_parent_id_idx" ON "glossary_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_cta_path_idx" ON "glossary_blocks_cta" USING btree ("_path");
  CREATE INDEX "glossary_blocks_cta_locale_idx" ON "glossary_blocks_cta" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_dynamic_field_order_idx" ON "glossary_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "glossary_blocks_dynamic_field_parent_id_idx" ON "glossary_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_dynamic_field_path_idx" ON "glossary_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "glossary_blocks_dynamic_field_locale_idx" ON "glossary_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_reusable_section_order_idx" ON "glossary_blocks_reusable_section" USING btree ("_order");
  CREATE INDEX "glossary_blocks_reusable_section_parent_id_idx" ON "glossary_blocks_reusable_section" USING btree ("_parent_id");
  CREATE INDEX "glossary_blocks_reusable_section_path_idx" ON "glossary_blocks_reusable_section" USING btree ("_path");
  CREATE INDEX "glossary_blocks_reusable_section_locale_idx" ON "glossary_blocks_reusable_section" USING btree ("_locale");
  CREATE INDEX "glossary_blocks_reusable_section_section_idx" ON "glossary_blocks_reusable_section" USING btree ("section_id");
  CREATE INDEX "_glossary_v_blocks_hero_links_order_idx" ON "_glossary_v_blocks_hero_links" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_hero_links_parent_id_idx" ON "_glossary_v_blocks_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_hero_links_locale_idx" ON "_glossary_v_blocks_hero_links" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_hero_order_idx" ON "_glossary_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_hero_parent_id_idx" ON "_glossary_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_hero_path_idx" ON "_glossary_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_glossary_v_blocks_hero_locale_idx" ON "_glossary_v_blocks_hero" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_hero_image_idx" ON "_glossary_v_blocks_hero" USING btree ("image_id");
  CREATE INDEX "_glossary_v_blocks_rich_text_order_idx" ON "_glossary_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_rich_text_parent_id_idx" ON "_glossary_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_rich_text_path_idx" ON "_glossary_v_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "_glossary_v_blocks_rich_text_locale_idx" ON "_glossary_v_blocks_rich_text" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_media_text_links_order_idx" ON "_glossary_v_blocks_media_text_links" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_media_text_links_parent_id_idx" ON "_glossary_v_blocks_media_text_links" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_media_text_links_locale_idx" ON "_glossary_v_blocks_media_text_links" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_media_text_order_idx" ON "_glossary_v_blocks_media_text" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_media_text_parent_id_idx" ON "_glossary_v_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_media_text_path_idx" ON "_glossary_v_blocks_media_text" USING btree ("_path");
  CREATE INDEX "_glossary_v_blocks_media_text_locale_idx" ON "_glossary_v_blocks_media_text" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_media_text_image_idx" ON "_glossary_v_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "_glossary_v_blocks_cards_items_order_idx" ON "_glossary_v_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_cards_items_parent_id_idx" ON "_glossary_v_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_cards_items_locale_idx" ON "_glossary_v_blocks_cards_items" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_cards_items_image_idx" ON "_glossary_v_blocks_cards_items" USING btree ("image_id");
  CREATE INDEX "_glossary_v_blocks_cards_order_idx" ON "_glossary_v_blocks_cards" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_cards_parent_id_idx" ON "_glossary_v_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_cards_path_idx" ON "_glossary_v_blocks_cards" USING btree ("_path");
  CREATE INDEX "_glossary_v_blocks_cards_locale_idx" ON "_glossary_v_blocks_cards" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_col_text_order_idx" ON "_glossary_v_blocks_col_text" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_col_text_parent_id_idx" ON "_glossary_v_blocks_col_text" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_col_text_path_idx" ON "_glossary_v_blocks_col_text" USING btree ("_path");
  CREATE INDEX "_glossary_v_blocks_col_text_locale_idx" ON "_glossary_v_blocks_col_text" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_col_image_order_idx" ON "_glossary_v_blocks_col_image" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_col_image_parent_id_idx" ON "_glossary_v_blocks_col_image" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_col_image_path_idx" ON "_glossary_v_blocks_col_image" USING btree ("_path");
  CREATE INDEX "_glossary_v_blocks_col_image_locale_idx" ON "_glossary_v_blocks_col_image" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_col_image_image_idx" ON "_glossary_v_blocks_col_image" USING btree ("image_id");
  CREATE INDEX "_glossary_v_blocks_col_buttons_links_order_idx" ON "_glossary_v_blocks_col_buttons_links" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_col_buttons_links_parent_id_idx" ON "_glossary_v_blocks_col_buttons_links" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_col_buttons_links_locale_idx" ON "_glossary_v_blocks_col_buttons_links" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_col_buttons_order_idx" ON "_glossary_v_blocks_col_buttons" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_col_buttons_parent_id_idx" ON "_glossary_v_blocks_col_buttons" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_col_buttons_path_idx" ON "_glossary_v_blocks_col_buttons" USING btree ("_path");
  CREATE INDEX "_glossary_v_blocks_col_buttons_locale_idx" ON "_glossary_v_blocks_col_buttons" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_columns_columns_order_idx" ON "_glossary_v_blocks_columns_columns" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_columns_columns_parent_id_idx" ON "_glossary_v_blocks_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_columns_columns_locale_idx" ON "_glossary_v_blocks_columns_columns" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_columns_order_idx" ON "_glossary_v_blocks_columns" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_columns_parent_id_idx" ON "_glossary_v_blocks_columns" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_columns_path_idx" ON "_glossary_v_blocks_columns" USING btree ("_path");
  CREATE INDEX "_glossary_v_blocks_columns_locale_idx" ON "_glossary_v_blocks_columns" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_tabs_tabs_order_idx" ON "_glossary_v_blocks_tabs_tabs" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_tabs_tabs_parent_id_idx" ON "_glossary_v_blocks_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_tabs_tabs_locale_idx" ON "_glossary_v_blocks_tabs_tabs" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_tabs_tabs_image_idx" ON "_glossary_v_blocks_tabs_tabs" USING btree ("image_id");
  CREATE INDEX "_glossary_v_blocks_tabs_order_idx" ON "_glossary_v_blocks_tabs" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_tabs_parent_id_idx" ON "_glossary_v_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_tabs_path_idx" ON "_glossary_v_blocks_tabs" USING btree ("_path");
  CREATE INDEX "_glossary_v_blocks_tabs_locale_idx" ON "_glossary_v_blocks_tabs" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_stats_items_order_idx" ON "_glossary_v_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_stats_items_parent_id_idx" ON "_glossary_v_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_stats_items_locale_idx" ON "_glossary_v_blocks_stats_items" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_stats_order_idx" ON "_glossary_v_blocks_stats" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_stats_parent_id_idx" ON "_glossary_v_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_stats_path_idx" ON "_glossary_v_blocks_stats" USING btree ("_path");
  CREATE INDEX "_glossary_v_blocks_stats_locale_idx" ON "_glossary_v_blocks_stats" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_logos_logos_order_idx" ON "_glossary_v_blocks_logos_logos" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_logos_logos_parent_id_idx" ON "_glossary_v_blocks_logos_logos" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_logos_logos_locale_idx" ON "_glossary_v_blocks_logos_logos" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_logos_logos_image_idx" ON "_glossary_v_blocks_logos_logos" USING btree ("image_id");
  CREATE INDEX "_glossary_v_blocks_logos_order_idx" ON "_glossary_v_blocks_logos" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_logos_parent_id_idx" ON "_glossary_v_blocks_logos" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_logos_path_idx" ON "_glossary_v_blocks_logos" USING btree ("_path");
  CREATE INDEX "_glossary_v_blocks_logos_locale_idx" ON "_glossary_v_blocks_logos" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_testimonials_items_order_idx" ON "_glossary_v_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_testimonials_items_parent_id_idx" ON "_glossary_v_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_testimonials_items_locale_idx" ON "_glossary_v_blocks_testimonials_items" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_testimonials_items_photo_idx" ON "_glossary_v_blocks_testimonials_items" USING btree ("photo_id");
  CREATE INDEX "_glossary_v_blocks_testimonials_order_idx" ON "_glossary_v_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_testimonials_parent_id_idx" ON "_glossary_v_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_testimonials_path_idx" ON "_glossary_v_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "_glossary_v_blocks_testimonials_locale_idx" ON "_glossary_v_blocks_testimonials" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_faq_items_order_idx" ON "_glossary_v_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_faq_items_parent_id_idx" ON "_glossary_v_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_faq_items_locale_idx" ON "_glossary_v_blocks_faq_items" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_faq_order_idx" ON "_glossary_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_faq_parent_id_idx" ON "_glossary_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_faq_path_idx" ON "_glossary_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_glossary_v_blocks_faq_locale_idx" ON "_glossary_v_blocks_faq" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_cta_links_order_idx" ON "_glossary_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_cta_links_parent_id_idx" ON "_glossary_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_cta_links_locale_idx" ON "_glossary_v_blocks_cta_links" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_cta_order_idx" ON "_glossary_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_cta_parent_id_idx" ON "_glossary_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_cta_path_idx" ON "_glossary_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_glossary_v_blocks_cta_locale_idx" ON "_glossary_v_blocks_cta" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_order_idx" ON "_glossary_v_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_parent_id_idx" ON "_glossary_v_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_path_idx" ON "_glossary_v_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "_glossary_v_blocks_dynamic_field_locale_idx" ON "_glossary_v_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_reusable_section_order_idx" ON "_glossary_v_blocks_reusable_section" USING btree ("_order");
  CREATE INDEX "_glossary_v_blocks_reusable_section_parent_id_idx" ON "_glossary_v_blocks_reusable_section" USING btree ("_parent_id");
  CREATE INDEX "_glossary_v_blocks_reusable_section_path_idx" ON "_glossary_v_blocks_reusable_section" USING btree ("_path");
  CREATE INDEX "_glossary_v_blocks_reusable_section_locale_idx" ON "_glossary_v_blocks_reusable_section" USING btree ("_locale");
  CREATE INDEX "_glossary_v_blocks_reusable_section_section_idx" ON "_glossary_v_blocks_reusable_section" USING btree ("section_id");
  CREATE INDEX "people_blocks_hero_links_order_idx" ON "people_blocks_hero_links" USING btree ("_order");
  CREATE INDEX "people_blocks_hero_links_parent_id_idx" ON "people_blocks_hero_links" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_hero_links_locale_idx" ON "people_blocks_hero_links" USING btree ("_locale");
  CREATE INDEX "people_blocks_hero_order_idx" ON "people_blocks_hero" USING btree ("_order");
  CREATE INDEX "people_blocks_hero_parent_id_idx" ON "people_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_hero_path_idx" ON "people_blocks_hero" USING btree ("_path");
  CREATE INDEX "people_blocks_hero_locale_idx" ON "people_blocks_hero" USING btree ("_locale");
  CREATE INDEX "people_blocks_hero_image_idx" ON "people_blocks_hero" USING btree ("image_id");
  CREATE INDEX "people_blocks_rich_text_order_idx" ON "people_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "people_blocks_rich_text_parent_id_idx" ON "people_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_rich_text_path_idx" ON "people_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "people_blocks_rich_text_locale_idx" ON "people_blocks_rich_text" USING btree ("_locale");
  CREATE INDEX "people_blocks_media_text_links_order_idx" ON "people_blocks_media_text_links" USING btree ("_order");
  CREATE INDEX "people_blocks_media_text_links_parent_id_idx" ON "people_blocks_media_text_links" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_media_text_links_locale_idx" ON "people_blocks_media_text_links" USING btree ("_locale");
  CREATE INDEX "people_blocks_media_text_order_idx" ON "people_blocks_media_text" USING btree ("_order");
  CREATE INDEX "people_blocks_media_text_parent_id_idx" ON "people_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_media_text_path_idx" ON "people_blocks_media_text" USING btree ("_path");
  CREATE INDEX "people_blocks_media_text_locale_idx" ON "people_blocks_media_text" USING btree ("_locale");
  CREATE INDEX "people_blocks_media_text_image_idx" ON "people_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "people_blocks_cards_items_order_idx" ON "people_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "people_blocks_cards_items_parent_id_idx" ON "people_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_cards_items_locale_idx" ON "people_blocks_cards_items" USING btree ("_locale");
  CREATE INDEX "people_blocks_cards_items_image_idx" ON "people_blocks_cards_items" USING btree ("image_id");
  CREATE INDEX "people_blocks_cards_order_idx" ON "people_blocks_cards" USING btree ("_order");
  CREATE INDEX "people_blocks_cards_parent_id_idx" ON "people_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_cards_path_idx" ON "people_blocks_cards" USING btree ("_path");
  CREATE INDEX "people_blocks_cards_locale_idx" ON "people_blocks_cards" USING btree ("_locale");
  CREATE INDEX "people_blocks_col_text_order_idx" ON "people_blocks_col_text" USING btree ("_order");
  CREATE INDEX "people_blocks_col_text_parent_id_idx" ON "people_blocks_col_text" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_col_text_path_idx" ON "people_blocks_col_text" USING btree ("_path");
  CREATE INDEX "people_blocks_col_text_locale_idx" ON "people_blocks_col_text" USING btree ("_locale");
  CREATE INDEX "people_blocks_col_image_order_idx" ON "people_blocks_col_image" USING btree ("_order");
  CREATE INDEX "people_blocks_col_image_parent_id_idx" ON "people_blocks_col_image" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_col_image_path_idx" ON "people_blocks_col_image" USING btree ("_path");
  CREATE INDEX "people_blocks_col_image_locale_idx" ON "people_blocks_col_image" USING btree ("_locale");
  CREATE INDEX "people_blocks_col_image_image_idx" ON "people_blocks_col_image" USING btree ("image_id");
  CREATE INDEX "people_blocks_col_buttons_links_order_idx" ON "people_blocks_col_buttons_links" USING btree ("_order");
  CREATE INDEX "people_blocks_col_buttons_links_parent_id_idx" ON "people_blocks_col_buttons_links" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_col_buttons_links_locale_idx" ON "people_blocks_col_buttons_links" USING btree ("_locale");
  CREATE INDEX "people_blocks_col_buttons_order_idx" ON "people_blocks_col_buttons" USING btree ("_order");
  CREATE INDEX "people_blocks_col_buttons_parent_id_idx" ON "people_blocks_col_buttons" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_col_buttons_path_idx" ON "people_blocks_col_buttons" USING btree ("_path");
  CREATE INDEX "people_blocks_col_buttons_locale_idx" ON "people_blocks_col_buttons" USING btree ("_locale");
  CREATE INDEX "people_blocks_columns_columns_order_idx" ON "people_blocks_columns_columns" USING btree ("_order");
  CREATE INDEX "people_blocks_columns_columns_parent_id_idx" ON "people_blocks_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_columns_columns_locale_idx" ON "people_blocks_columns_columns" USING btree ("_locale");
  CREATE INDEX "people_blocks_columns_order_idx" ON "people_blocks_columns" USING btree ("_order");
  CREATE INDEX "people_blocks_columns_parent_id_idx" ON "people_blocks_columns" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_columns_path_idx" ON "people_blocks_columns" USING btree ("_path");
  CREATE INDEX "people_blocks_columns_locale_idx" ON "people_blocks_columns" USING btree ("_locale");
  CREATE INDEX "people_blocks_tabs_tabs_order_idx" ON "people_blocks_tabs_tabs" USING btree ("_order");
  CREATE INDEX "people_blocks_tabs_tabs_parent_id_idx" ON "people_blocks_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_tabs_tabs_locale_idx" ON "people_blocks_tabs_tabs" USING btree ("_locale");
  CREATE INDEX "people_blocks_tabs_tabs_image_idx" ON "people_blocks_tabs_tabs" USING btree ("image_id");
  CREATE INDEX "people_blocks_tabs_order_idx" ON "people_blocks_tabs" USING btree ("_order");
  CREATE INDEX "people_blocks_tabs_parent_id_idx" ON "people_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_tabs_path_idx" ON "people_blocks_tabs" USING btree ("_path");
  CREATE INDEX "people_blocks_tabs_locale_idx" ON "people_blocks_tabs" USING btree ("_locale");
  CREATE INDEX "people_blocks_stats_items_order_idx" ON "people_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "people_blocks_stats_items_parent_id_idx" ON "people_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_stats_items_locale_idx" ON "people_blocks_stats_items" USING btree ("_locale");
  CREATE INDEX "people_blocks_stats_order_idx" ON "people_blocks_stats" USING btree ("_order");
  CREATE INDEX "people_blocks_stats_parent_id_idx" ON "people_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_stats_path_idx" ON "people_blocks_stats" USING btree ("_path");
  CREATE INDEX "people_blocks_stats_locale_idx" ON "people_blocks_stats" USING btree ("_locale");
  CREATE INDEX "people_blocks_logos_logos_order_idx" ON "people_blocks_logos_logos" USING btree ("_order");
  CREATE INDEX "people_blocks_logos_logos_parent_id_idx" ON "people_blocks_logos_logos" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_logos_logos_locale_idx" ON "people_blocks_logos_logos" USING btree ("_locale");
  CREATE INDEX "people_blocks_logos_logos_image_idx" ON "people_blocks_logos_logos" USING btree ("image_id");
  CREATE INDEX "people_blocks_logos_order_idx" ON "people_blocks_logos" USING btree ("_order");
  CREATE INDEX "people_blocks_logos_parent_id_idx" ON "people_blocks_logos" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_logos_path_idx" ON "people_blocks_logos" USING btree ("_path");
  CREATE INDEX "people_blocks_logos_locale_idx" ON "people_blocks_logos" USING btree ("_locale");
  CREATE INDEX "people_blocks_testimonials_items_order_idx" ON "people_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "people_blocks_testimonials_items_parent_id_idx" ON "people_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_testimonials_items_locale_idx" ON "people_blocks_testimonials_items" USING btree ("_locale");
  CREATE INDEX "people_blocks_testimonials_items_photo_idx" ON "people_blocks_testimonials_items" USING btree ("photo_id");
  CREATE INDEX "people_blocks_testimonials_order_idx" ON "people_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "people_blocks_testimonials_parent_id_idx" ON "people_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_testimonials_path_idx" ON "people_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "people_blocks_testimonials_locale_idx" ON "people_blocks_testimonials" USING btree ("_locale");
  CREATE INDEX "people_blocks_faq_items_order_idx" ON "people_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "people_blocks_faq_items_parent_id_idx" ON "people_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_faq_items_locale_idx" ON "people_blocks_faq_items" USING btree ("_locale");
  CREATE INDEX "people_blocks_faq_order_idx" ON "people_blocks_faq" USING btree ("_order");
  CREATE INDEX "people_blocks_faq_parent_id_idx" ON "people_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_faq_path_idx" ON "people_blocks_faq" USING btree ("_path");
  CREATE INDEX "people_blocks_faq_locale_idx" ON "people_blocks_faq" USING btree ("_locale");
  CREATE INDEX "people_blocks_cta_links_order_idx" ON "people_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "people_blocks_cta_links_parent_id_idx" ON "people_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_cta_links_locale_idx" ON "people_blocks_cta_links" USING btree ("_locale");
  CREATE INDEX "people_blocks_cta_order_idx" ON "people_blocks_cta" USING btree ("_order");
  CREATE INDEX "people_blocks_cta_parent_id_idx" ON "people_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_cta_path_idx" ON "people_blocks_cta" USING btree ("_path");
  CREATE INDEX "people_blocks_cta_locale_idx" ON "people_blocks_cta" USING btree ("_locale");
  CREATE INDEX "people_blocks_dynamic_field_order_idx" ON "people_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "people_blocks_dynamic_field_parent_id_idx" ON "people_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_dynamic_field_path_idx" ON "people_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "people_blocks_dynamic_field_locale_idx" ON "people_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "people_blocks_reusable_section_order_idx" ON "people_blocks_reusable_section" USING btree ("_order");
  CREATE INDEX "people_blocks_reusable_section_parent_id_idx" ON "people_blocks_reusable_section" USING btree ("_parent_id");
  CREATE INDEX "people_blocks_reusable_section_path_idx" ON "people_blocks_reusable_section" USING btree ("_path");
  CREATE INDEX "people_blocks_reusable_section_locale_idx" ON "people_blocks_reusable_section" USING btree ("_locale");
  CREATE INDEX "people_blocks_reusable_section_section_idx" ON "people_blocks_reusable_section" USING btree ("section_id");
  CREATE INDEX "people_rels_order_idx" ON "people_rels" USING btree ("order");
  CREATE INDEX "people_rels_parent_idx" ON "people_rels" USING btree ("parent_id");
  CREATE INDEX "people_rels_path_idx" ON "people_rels" USING btree ("path");
  CREATE INDEX "people_rels_locale_idx" ON "people_rels" USING btree ("locale");
  CREATE INDEX "people_rels_pages_id_idx" ON "people_rels" USING btree ("pages_id","locale");
  CREATE INDEX "people_rels_posts_id_idx" ON "people_rels" USING btree ("posts_id","locale");
  CREATE INDEX "people_rels_events_id_idx" ON "people_rels" USING btree ("events_id","locale");
  CREATE INDEX "people_rels_resources_id_idx" ON "people_rels" USING btree ("resources_id","locale");
  CREATE INDEX "people_rels_glossary_id_idx" ON "people_rels" USING btree ("glossary_id","locale");
  CREATE INDEX "people_rels_people_id_idx" ON "people_rels" USING btree ("people_id","locale");
  CREATE INDEX "_people_v_blocks_hero_links_order_idx" ON "_people_v_blocks_hero_links" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_hero_links_parent_id_idx" ON "_people_v_blocks_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_hero_links_locale_idx" ON "_people_v_blocks_hero_links" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_hero_order_idx" ON "_people_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_hero_parent_id_idx" ON "_people_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_hero_path_idx" ON "_people_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_people_v_blocks_hero_locale_idx" ON "_people_v_blocks_hero" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_hero_image_idx" ON "_people_v_blocks_hero" USING btree ("image_id");
  CREATE INDEX "_people_v_blocks_rich_text_order_idx" ON "_people_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_rich_text_parent_id_idx" ON "_people_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_rich_text_path_idx" ON "_people_v_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "_people_v_blocks_rich_text_locale_idx" ON "_people_v_blocks_rich_text" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_media_text_links_order_idx" ON "_people_v_blocks_media_text_links" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_media_text_links_parent_id_idx" ON "_people_v_blocks_media_text_links" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_media_text_links_locale_idx" ON "_people_v_blocks_media_text_links" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_media_text_order_idx" ON "_people_v_blocks_media_text" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_media_text_parent_id_idx" ON "_people_v_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_media_text_path_idx" ON "_people_v_blocks_media_text" USING btree ("_path");
  CREATE INDEX "_people_v_blocks_media_text_locale_idx" ON "_people_v_blocks_media_text" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_media_text_image_idx" ON "_people_v_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "_people_v_blocks_cards_items_order_idx" ON "_people_v_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_cards_items_parent_id_idx" ON "_people_v_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_cards_items_locale_idx" ON "_people_v_blocks_cards_items" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_cards_items_image_idx" ON "_people_v_blocks_cards_items" USING btree ("image_id");
  CREATE INDEX "_people_v_blocks_cards_order_idx" ON "_people_v_blocks_cards" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_cards_parent_id_idx" ON "_people_v_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_cards_path_idx" ON "_people_v_blocks_cards" USING btree ("_path");
  CREATE INDEX "_people_v_blocks_cards_locale_idx" ON "_people_v_blocks_cards" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_col_text_order_idx" ON "_people_v_blocks_col_text" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_col_text_parent_id_idx" ON "_people_v_blocks_col_text" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_col_text_path_idx" ON "_people_v_blocks_col_text" USING btree ("_path");
  CREATE INDEX "_people_v_blocks_col_text_locale_idx" ON "_people_v_blocks_col_text" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_col_image_order_idx" ON "_people_v_blocks_col_image" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_col_image_parent_id_idx" ON "_people_v_blocks_col_image" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_col_image_path_idx" ON "_people_v_blocks_col_image" USING btree ("_path");
  CREATE INDEX "_people_v_blocks_col_image_locale_idx" ON "_people_v_blocks_col_image" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_col_image_image_idx" ON "_people_v_blocks_col_image" USING btree ("image_id");
  CREATE INDEX "_people_v_blocks_col_buttons_links_order_idx" ON "_people_v_blocks_col_buttons_links" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_col_buttons_links_parent_id_idx" ON "_people_v_blocks_col_buttons_links" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_col_buttons_links_locale_idx" ON "_people_v_blocks_col_buttons_links" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_col_buttons_order_idx" ON "_people_v_blocks_col_buttons" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_col_buttons_parent_id_idx" ON "_people_v_blocks_col_buttons" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_col_buttons_path_idx" ON "_people_v_blocks_col_buttons" USING btree ("_path");
  CREATE INDEX "_people_v_blocks_col_buttons_locale_idx" ON "_people_v_blocks_col_buttons" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_columns_columns_order_idx" ON "_people_v_blocks_columns_columns" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_columns_columns_parent_id_idx" ON "_people_v_blocks_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_columns_columns_locale_idx" ON "_people_v_blocks_columns_columns" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_columns_order_idx" ON "_people_v_blocks_columns" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_columns_parent_id_idx" ON "_people_v_blocks_columns" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_columns_path_idx" ON "_people_v_blocks_columns" USING btree ("_path");
  CREATE INDEX "_people_v_blocks_columns_locale_idx" ON "_people_v_blocks_columns" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_tabs_tabs_order_idx" ON "_people_v_blocks_tabs_tabs" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_tabs_tabs_parent_id_idx" ON "_people_v_blocks_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_tabs_tabs_locale_idx" ON "_people_v_blocks_tabs_tabs" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_tabs_tabs_image_idx" ON "_people_v_blocks_tabs_tabs" USING btree ("image_id");
  CREATE INDEX "_people_v_blocks_tabs_order_idx" ON "_people_v_blocks_tabs" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_tabs_parent_id_idx" ON "_people_v_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_tabs_path_idx" ON "_people_v_blocks_tabs" USING btree ("_path");
  CREATE INDEX "_people_v_blocks_tabs_locale_idx" ON "_people_v_blocks_tabs" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_stats_items_order_idx" ON "_people_v_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_stats_items_parent_id_idx" ON "_people_v_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_stats_items_locale_idx" ON "_people_v_blocks_stats_items" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_stats_order_idx" ON "_people_v_blocks_stats" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_stats_parent_id_idx" ON "_people_v_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_stats_path_idx" ON "_people_v_blocks_stats" USING btree ("_path");
  CREATE INDEX "_people_v_blocks_stats_locale_idx" ON "_people_v_blocks_stats" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_logos_logos_order_idx" ON "_people_v_blocks_logos_logos" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_logos_logos_parent_id_idx" ON "_people_v_blocks_logos_logos" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_logos_logos_locale_idx" ON "_people_v_blocks_logos_logos" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_logos_logos_image_idx" ON "_people_v_blocks_logos_logos" USING btree ("image_id");
  CREATE INDEX "_people_v_blocks_logos_order_idx" ON "_people_v_blocks_logos" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_logos_parent_id_idx" ON "_people_v_blocks_logos" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_logos_path_idx" ON "_people_v_blocks_logos" USING btree ("_path");
  CREATE INDEX "_people_v_blocks_logos_locale_idx" ON "_people_v_blocks_logos" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_testimonials_items_order_idx" ON "_people_v_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_testimonials_items_parent_id_idx" ON "_people_v_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_testimonials_items_locale_idx" ON "_people_v_blocks_testimonials_items" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_testimonials_items_photo_idx" ON "_people_v_blocks_testimonials_items" USING btree ("photo_id");
  CREATE INDEX "_people_v_blocks_testimonials_order_idx" ON "_people_v_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_testimonials_parent_id_idx" ON "_people_v_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_testimonials_path_idx" ON "_people_v_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "_people_v_blocks_testimonials_locale_idx" ON "_people_v_blocks_testimonials" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_faq_items_order_idx" ON "_people_v_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_faq_items_parent_id_idx" ON "_people_v_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_faq_items_locale_idx" ON "_people_v_blocks_faq_items" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_faq_order_idx" ON "_people_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_faq_parent_id_idx" ON "_people_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_faq_path_idx" ON "_people_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_people_v_blocks_faq_locale_idx" ON "_people_v_blocks_faq" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_cta_links_order_idx" ON "_people_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_cta_links_parent_id_idx" ON "_people_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_cta_links_locale_idx" ON "_people_v_blocks_cta_links" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_cta_order_idx" ON "_people_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_cta_parent_id_idx" ON "_people_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_cta_path_idx" ON "_people_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_people_v_blocks_cta_locale_idx" ON "_people_v_blocks_cta" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_dynamic_field_order_idx" ON "_people_v_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_dynamic_field_parent_id_idx" ON "_people_v_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_dynamic_field_path_idx" ON "_people_v_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "_people_v_blocks_dynamic_field_locale_idx" ON "_people_v_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_reusable_section_order_idx" ON "_people_v_blocks_reusable_section" USING btree ("_order");
  CREATE INDEX "_people_v_blocks_reusable_section_parent_id_idx" ON "_people_v_blocks_reusable_section" USING btree ("_parent_id");
  CREATE INDEX "_people_v_blocks_reusable_section_path_idx" ON "_people_v_blocks_reusable_section" USING btree ("_path");
  CREATE INDEX "_people_v_blocks_reusable_section_locale_idx" ON "_people_v_blocks_reusable_section" USING btree ("_locale");
  CREATE INDEX "_people_v_blocks_reusable_section_section_idx" ON "_people_v_blocks_reusable_section" USING btree ("section_id");
  CREATE INDEX "_people_v_rels_order_idx" ON "_people_v_rels" USING btree ("order");
  CREATE INDEX "_people_v_rels_parent_idx" ON "_people_v_rels" USING btree ("parent_id");
  CREATE INDEX "_people_v_rels_path_idx" ON "_people_v_rels" USING btree ("path");
  CREATE INDEX "_people_v_rels_locale_idx" ON "_people_v_rels" USING btree ("locale");
  CREATE INDEX "_people_v_rels_pages_id_idx" ON "_people_v_rels" USING btree ("pages_id","locale");
  CREATE INDEX "_people_v_rels_posts_id_idx" ON "_people_v_rels" USING btree ("posts_id","locale");
  CREATE INDEX "_people_v_rels_events_id_idx" ON "_people_v_rels" USING btree ("events_id","locale");
  CREATE INDEX "_people_v_rels_resources_id_idx" ON "_people_v_rels" USING btree ("resources_id","locale");
  CREATE INDEX "_people_v_rels_glossary_id_idx" ON "_people_v_rels" USING btree ("glossary_id","locale");
  CREATE INDEX "_people_v_rels_people_id_idx" ON "_people_v_rels" USING btree ("people_id","locale");
  CREATE INDEX "reusable_blocks_hero_links_order_idx" ON "reusable_blocks_hero_links" USING btree ("_order");
  CREATE INDEX "reusable_blocks_hero_links_parent_id_idx" ON "reusable_blocks_hero_links" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_hero_links_locale_idx" ON "reusable_blocks_hero_links" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_hero_order_idx" ON "reusable_blocks_hero" USING btree ("_order");
  CREATE INDEX "reusable_blocks_hero_parent_id_idx" ON "reusable_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_hero_path_idx" ON "reusable_blocks_hero" USING btree ("_path");
  CREATE INDEX "reusable_blocks_hero_locale_idx" ON "reusable_blocks_hero" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_hero_image_idx" ON "reusable_blocks_hero" USING btree ("image_id");
  CREATE INDEX "reusable_blocks_rich_text_order_idx" ON "reusable_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "reusable_blocks_rich_text_parent_id_idx" ON "reusable_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_rich_text_path_idx" ON "reusable_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "reusable_blocks_rich_text_locale_idx" ON "reusable_blocks_rich_text" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_media_text_links_order_idx" ON "reusable_blocks_media_text_links" USING btree ("_order");
  CREATE INDEX "reusable_blocks_media_text_links_parent_id_idx" ON "reusable_blocks_media_text_links" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_media_text_links_locale_idx" ON "reusable_blocks_media_text_links" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_media_text_order_idx" ON "reusable_blocks_media_text" USING btree ("_order");
  CREATE INDEX "reusable_blocks_media_text_parent_id_idx" ON "reusable_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_media_text_path_idx" ON "reusable_blocks_media_text" USING btree ("_path");
  CREATE INDEX "reusable_blocks_media_text_locale_idx" ON "reusable_blocks_media_text" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_media_text_image_idx" ON "reusable_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "reusable_blocks_cards_items_order_idx" ON "reusable_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "reusable_blocks_cards_items_parent_id_idx" ON "reusable_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_cards_items_locale_idx" ON "reusable_blocks_cards_items" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_cards_items_image_idx" ON "reusable_blocks_cards_items" USING btree ("image_id");
  CREATE INDEX "reusable_blocks_cards_order_idx" ON "reusable_blocks_cards" USING btree ("_order");
  CREATE INDEX "reusable_blocks_cards_parent_id_idx" ON "reusable_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_cards_path_idx" ON "reusable_blocks_cards" USING btree ("_path");
  CREATE INDEX "reusable_blocks_cards_locale_idx" ON "reusable_blocks_cards" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_col_text_order_idx" ON "reusable_blocks_col_text" USING btree ("_order");
  CREATE INDEX "reusable_blocks_col_text_parent_id_idx" ON "reusable_blocks_col_text" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_col_text_path_idx" ON "reusable_blocks_col_text" USING btree ("_path");
  CREATE INDEX "reusable_blocks_col_text_locale_idx" ON "reusable_blocks_col_text" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_col_image_order_idx" ON "reusable_blocks_col_image" USING btree ("_order");
  CREATE INDEX "reusable_blocks_col_image_parent_id_idx" ON "reusable_blocks_col_image" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_col_image_path_idx" ON "reusable_blocks_col_image" USING btree ("_path");
  CREATE INDEX "reusable_blocks_col_image_locale_idx" ON "reusable_blocks_col_image" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_col_image_image_idx" ON "reusable_blocks_col_image" USING btree ("image_id");
  CREATE INDEX "reusable_blocks_col_buttons_links_order_idx" ON "reusable_blocks_col_buttons_links" USING btree ("_order");
  CREATE INDEX "reusable_blocks_col_buttons_links_parent_id_idx" ON "reusable_blocks_col_buttons_links" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_col_buttons_links_locale_idx" ON "reusable_blocks_col_buttons_links" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_col_buttons_order_idx" ON "reusable_blocks_col_buttons" USING btree ("_order");
  CREATE INDEX "reusable_blocks_col_buttons_parent_id_idx" ON "reusable_blocks_col_buttons" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_col_buttons_path_idx" ON "reusable_blocks_col_buttons" USING btree ("_path");
  CREATE INDEX "reusable_blocks_col_buttons_locale_idx" ON "reusable_blocks_col_buttons" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_columns_columns_order_idx" ON "reusable_blocks_columns_columns" USING btree ("_order");
  CREATE INDEX "reusable_blocks_columns_columns_parent_id_idx" ON "reusable_blocks_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_columns_columns_locale_idx" ON "reusable_blocks_columns_columns" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_columns_order_idx" ON "reusable_blocks_columns" USING btree ("_order");
  CREATE INDEX "reusable_blocks_columns_parent_id_idx" ON "reusable_blocks_columns" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_columns_path_idx" ON "reusable_blocks_columns" USING btree ("_path");
  CREATE INDEX "reusable_blocks_columns_locale_idx" ON "reusable_blocks_columns" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_tabs_tabs_order_idx" ON "reusable_blocks_tabs_tabs" USING btree ("_order");
  CREATE INDEX "reusable_blocks_tabs_tabs_parent_id_idx" ON "reusable_blocks_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_tabs_tabs_locale_idx" ON "reusable_blocks_tabs_tabs" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_tabs_tabs_image_idx" ON "reusable_blocks_tabs_tabs" USING btree ("image_id");
  CREATE INDEX "reusable_blocks_tabs_order_idx" ON "reusable_blocks_tabs" USING btree ("_order");
  CREATE INDEX "reusable_blocks_tabs_parent_id_idx" ON "reusable_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_tabs_path_idx" ON "reusable_blocks_tabs" USING btree ("_path");
  CREATE INDEX "reusable_blocks_tabs_locale_idx" ON "reusable_blocks_tabs" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_stats_items_order_idx" ON "reusable_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "reusable_blocks_stats_items_parent_id_idx" ON "reusable_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_stats_items_locale_idx" ON "reusable_blocks_stats_items" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_stats_order_idx" ON "reusable_blocks_stats" USING btree ("_order");
  CREATE INDEX "reusable_blocks_stats_parent_id_idx" ON "reusable_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_stats_path_idx" ON "reusable_blocks_stats" USING btree ("_path");
  CREATE INDEX "reusable_blocks_stats_locale_idx" ON "reusable_blocks_stats" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_logos_logos_order_idx" ON "reusable_blocks_logos_logos" USING btree ("_order");
  CREATE INDEX "reusable_blocks_logos_logos_parent_id_idx" ON "reusable_blocks_logos_logos" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_logos_logos_locale_idx" ON "reusable_blocks_logos_logos" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_logos_logos_image_idx" ON "reusable_blocks_logos_logos" USING btree ("image_id");
  CREATE INDEX "reusable_blocks_logos_order_idx" ON "reusable_blocks_logos" USING btree ("_order");
  CREATE INDEX "reusable_blocks_logos_parent_id_idx" ON "reusable_blocks_logos" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_logos_path_idx" ON "reusable_blocks_logos" USING btree ("_path");
  CREATE INDEX "reusable_blocks_logos_locale_idx" ON "reusable_blocks_logos" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_testimonials_items_order_idx" ON "reusable_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "reusable_blocks_testimonials_items_parent_id_idx" ON "reusable_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_testimonials_items_locale_idx" ON "reusable_blocks_testimonials_items" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_testimonials_items_photo_idx" ON "reusable_blocks_testimonials_items" USING btree ("photo_id");
  CREATE INDEX "reusable_blocks_testimonials_order_idx" ON "reusable_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "reusable_blocks_testimonials_parent_id_idx" ON "reusable_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_testimonials_path_idx" ON "reusable_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "reusable_blocks_testimonials_locale_idx" ON "reusable_blocks_testimonials" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_faq_items_order_idx" ON "reusable_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "reusable_blocks_faq_items_parent_id_idx" ON "reusable_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_faq_items_locale_idx" ON "reusable_blocks_faq_items" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_faq_order_idx" ON "reusable_blocks_faq" USING btree ("_order");
  CREATE INDEX "reusable_blocks_faq_parent_id_idx" ON "reusable_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_faq_path_idx" ON "reusable_blocks_faq" USING btree ("_path");
  CREATE INDEX "reusable_blocks_faq_locale_idx" ON "reusable_blocks_faq" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_cta_links_order_idx" ON "reusable_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "reusable_blocks_cta_links_parent_id_idx" ON "reusable_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_cta_links_locale_idx" ON "reusable_blocks_cta_links" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_cta_order_idx" ON "reusable_blocks_cta" USING btree ("_order");
  CREATE INDEX "reusable_blocks_cta_parent_id_idx" ON "reusable_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_cta_path_idx" ON "reusable_blocks_cta" USING btree ("_path");
  CREATE INDEX "reusable_blocks_cta_locale_idx" ON "reusable_blocks_cta" USING btree ("_locale");
  CREATE INDEX "reusable_blocks_dynamic_field_order_idx" ON "reusable_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "reusable_blocks_dynamic_field_parent_id_idx" ON "reusable_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "reusable_blocks_dynamic_field_path_idx" ON "reusable_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "reusable_blocks_dynamic_field_locale_idx" ON "reusable_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "reusable_updated_at_idx" ON "reusable" USING btree ("updated_at");
  CREATE INDEX "reusable_created_at_idx" ON "reusable" USING btree ("created_at");
  CREATE INDEX "reusable__status_idx" ON "reusable_locales" USING btree ("_status","_locale");
  CREATE UNIQUE INDEX "reusable_locales_locale_parent_id_unique" ON "reusable_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "reusable_locales_parent_id_idx" ON "reusable_locales" USING btree ("_parent_id");
  CREATE INDEX "reusable_rels_order_idx" ON "reusable_rels" USING btree ("order");
  CREATE INDEX "reusable_rels_parent_idx" ON "reusable_rels" USING btree ("parent_id");
  CREATE INDEX "reusable_rels_path_idx" ON "reusable_rels" USING btree ("path");
  CREATE INDEX "reusable_rels_locale_idx" ON "reusable_rels" USING btree ("locale");
  CREATE INDEX "reusable_rels_pages_id_idx" ON "reusable_rels" USING btree ("pages_id","locale");
  CREATE INDEX "reusable_rels_posts_id_idx" ON "reusable_rels" USING btree ("posts_id","locale");
  CREATE INDEX "reusable_rels_events_id_idx" ON "reusable_rels" USING btree ("events_id","locale");
  CREATE INDEX "reusable_rels_resources_id_idx" ON "reusable_rels" USING btree ("resources_id","locale");
  CREATE INDEX "reusable_rels_glossary_id_idx" ON "reusable_rels" USING btree ("glossary_id","locale");
  CREATE INDEX "reusable_rels_people_id_idx" ON "reusable_rels" USING btree ("people_id","locale");
  CREATE INDEX "_reusable_v_blocks_hero_links_order_idx" ON "_reusable_v_blocks_hero_links" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_hero_links_parent_id_idx" ON "_reusable_v_blocks_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_hero_links_locale_idx" ON "_reusable_v_blocks_hero_links" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_hero_order_idx" ON "_reusable_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_hero_parent_id_idx" ON "_reusable_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_hero_path_idx" ON "_reusable_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_reusable_v_blocks_hero_locale_idx" ON "_reusable_v_blocks_hero" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_hero_image_idx" ON "_reusable_v_blocks_hero" USING btree ("image_id");
  CREATE INDEX "_reusable_v_blocks_rich_text_order_idx" ON "_reusable_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_rich_text_parent_id_idx" ON "_reusable_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_rich_text_path_idx" ON "_reusable_v_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "_reusable_v_blocks_rich_text_locale_idx" ON "_reusable_v_blocks_rich_text" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_media_text_links_order_idx" ON "_reusable_v_blocks_media_text_links" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_media_text_links_parent_id_idx" ON "_reusable_v_blocks_media_text_links" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_media_text_links_locale_idx" ON "_reusable_v_blocks_media_text_links" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_media_text_order_idx" ON "_reusable_v_blocks_media_text" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_media_text_parent_id_idx" ON "_reusable_v_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_media_text_path_idx" ON "_reusable_v_blocks_media_text" USING btree ("_path");
  CREATE INDEX "_reusable_v_blocks_media_text_locale_idx" ON "_reusable_v_blocks_media_text" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_media_text_image_idx" ON "_reusable_v_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "_reusable_v_blocks_cards_items_order_idx" ON "_reusable_v_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_cards_items_parent_id_idx" ON "_reusable_v_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_cards_items_locale_idx" ON "_reusable_v_blocks_cards_items" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_cards_items_image_idx" ON "_reusable_v_blocks_cards_items" USING btree ("image_id");
  CREATE INDEX "_reusable_v_blocks_cards_order_idx" ON "_reusable_v_blocks_cards" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_cards_parent_id_idx" ON "_reusable_v_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_cards_path_idx" ON "_reusable_v_blocks_cards" USING btree ("_path");
  CREATE INDEX "_reusable_v_blocks_cards_locale_idx" ON "_reusable_v_blocks_cards" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_col_text_order_idx" ON "_reusable_v_blocks_col_text" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_col_text_parent_id_idx" ON "_reusable_v_blocks_col_text" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_col_text_path_idx" ON "_reusable_v_blocks_col_text" USING btree ("_path");
  CREATE INDEX "_reusable_v_blocks_col_text_locale_idx" ON "_reusable_v_blocks_col_text" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_col_image_order_idx" ON "_reusable_v_blocks_col_image" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_col_image_parent_id_idx" ON "_reusable_v_blocks_col_image" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_col_image_path_idx" ON "_reusable_v_blocks_col_image" USING btree ("_path");
  CREATE INDEX "_reusable_v_blocks_col_image_locale_idx" ON "_reusable_v_blocks_col_image" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_col_image_image_idx" ON "_reusable_v_blocks_col_image" USING btree ("image_id");
  CREATE INDEX "_reusable_v_blocks_col_buttons_links_order_idx" ON "_reusable_v_blocks_col_buttons_links" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_col_buttons_links_parent_id_idx" ON "_reusable_v_blocks_col_buttons_links" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_col_buttons_links_locale_idx" ON "_reusable_v_blocks_col_buttons_links" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_col_buttons_order_idx" ON "_reusable_v_blocks_col_buttons" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_col_buttons_parent_id_idx" ON "_reusable_v_blocks_col_buttons" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_col_buttons_path_idx" ON "_reusable_v_blocks_col_buttons" USING btree ("_path");
  CREATE INDEX "_reusable_v_blocks_col_buttons_locale_idx" ON "_reusable_v_blocks_col_buttons" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_columns_columns_order_idx" ON "_reusable_v_blocks_columns_columns" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_columns_columns_parent_id_idx" ON "_reusable_v_blocks_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_columns_columns_locale_idx" ON "_reusable_v_blocks_columns_columns" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_columns_order_idx" ON "_reusable_v_blocks_columns" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_columns_parent_id_idx" ON "_reusable_v_blocks_columns" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_columns_path_idx" ON "_reusable_v_blocks_columns" USING btree ("_path");
  CREATE INDEX "_reusable_v_blocks_columns_locale_idx" ON "_reusable_v_blocks_columns" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_tabs_tabs_order_idx" ON "_reusable_v_blocks_tabs_tabs" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_tabs_tabs_parent_id_idx" ON "_reusable_v_blocks_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_tabs_tabs_locale_idx" ON "_reusable_v_blocks_tabs_tabs" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_tabs_tabs_image_idx" ON "_reusable_v_blocks_tabs_tabs" USING btree ("image_id");
  CREATE INDEX "_reusable_v_blocks_tabs_order_idx" ON "_reusable_v_blocks_tabs" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_tabs_parent_id_idx" ON "_reusable_v_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_tabs_path_idx" ON "_reusable_v_blocks_tabs" USING btree ("_path");
  CREATE INDEX "_reusable_v_blocks_tabs_locale_idx" ON "_reusable_v_blocks_tabs" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_stats_items_order_idx" ON "_reusable_v_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_stats_items_parent_id_idx" ON "_reusable_v_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_stats_items_locale_idx" ON "_reusable_v_blocks_stats_items" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_stats_order_idx" ON "_reusable_v_blocks_stats" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_stats_parent_id_idx" ON "_reusable_v_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_stats_path_idx" ON "_reusable_v_blocks_stats" USING btree ("_path");
  CREATE INDEX "_reusable_v_blocks_stats_locale_idx" ON "_reusable_v_blocks_stats" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_logos_logos_order_idx" ON "_reusable_v_blocks_logos_logos" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_logos_logos_parent_id_idx" ON "_reusable_v_blocks_logos_logos" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_logos_logos_locale_idx" ON "_reusable_v_blocks_logos_logos" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_logos_logos_image_idx" ON "_reusable_v_blocks_logos_logos" USING btree ("image_id");
  CREATE INDEX "_reusable_v_blocks_logos_order_idx" ON "_reusable_v_blocks_logos" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_logos_parent_id_idx" ON "_reusable_v_blocks_logos" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_logos_path_idx" ON "_reusable_v_blocks_logos" USING btree ("_path");
  CREATE INDEX "_reusable_v_blocks_logos_locale_idx" ON "_reusable_v_blocks_logos" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_testimonials_items_order_idx" ON "_reusable_v_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_testimonials_items_parent_id_idx" ON "_reusable_v_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_testimonials_items_locale_idx" ON "_reusable_v_blocks_testimonials_items" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_testimonials_items_photo_idx" ON "_reusable_v_blocks_testimonials_items" USING btree ("photo_id");
  CREATE INDEX "_reusable_v_blocks_testimonials_order_idx" ON "_reusable_v_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_testimonials_parent_id_idx" ON "_reusable_v_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_testimonials_path_idx" ON "_reusable_v_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "_reusable_v_blocks_testimonials_locale_idx" ON "_reusable_v_blocks_testimonials" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_faq_items_order_idx" ON "_reusable_v_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_faq_items_parent_id_idx" ON "_reusable_v_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_faq_items_locale_idx" ON "_reusable_v_blocks_faq_items" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_faq_order_idx" ON "_reusable_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_faq_parent_id_idx" ON "_reusable_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_faq_path_idx" ON "_reusable_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_reusable_v_blocks_faq_locale_idx" ON "_reusable_v_blocks_faq" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_cta_links_order_idx" ON "_reusable_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_cta_links_parent_id_idx" ON "_reusable_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_cta_links_locale_idx" ON "_reusable_v_blocks_cta_links" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_cta_order_idx" ON "_reusable_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_cta_parent_id_idx" ON "_reusable_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_cta_path_idx" ON "_reusable_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_reusable_v_blocks_cta_locale_idx" ON "_reusable_v_blocks_cta" USING btree ("_locale");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_order_idx" ON "_reusable_v_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_parent_id_idx" ON "_reusable_v_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_path_idx" ON "_reusable_v_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "_reusable_v_blocks_dynamic_field_locale_idx" ON "_reusable_v_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "_reusable_v_parent_idx" ON "_reusable_v" USING btree ("parent_id");
  CREATE INDEX "_reusable_v_version_version_updated_at_idx" ON "_reusable_v" USING btree ("version_updated_at");
  CREATE INDEX "_reusable_v_version_version_created_at_idx" ON "_reusable_v" USING btree ("version_created_at");
  CREATE INDEX "_reusable_v_created_at_idx" ON "_reusable_v" USING btree ("created_at");
  CREATE INDEX "_reusable_v_updated_at_idx" ON "_reusable_v" USING btree ("updated_at");
  CREATE INDEX "_reusable_v_snapshot_idx" ON "_reusable_v" USING btree ("snapshot");
  CREATE INDEX "_reusable_v_published_locale_idx" ON "_reusable_v" USING btree ("published_locale");
  CREATE INDEX "_reusable_v_latest_idx" ON "_reusable_v" USING btree ("latest");
  CREATE INDEX "_reusable_v_autosave_idx" ON "_reusable_v" USING btree ("autosave");
  CREATE INDEX "_reusable_v_version_version__status_idx" ON "_reusable_v_locales" USING btree ("version__status","_locale");
  CREATE UNIQUE INDEX "_reusable_v_locales_locale_parent_id_unique" ON "_reusable_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_reusable_v_locales_parent_id_idx" ON "_reusable_v_locales" USING btree ("_parent_id");
  CREATE INDEX "_reusable_v_rels_order_idx" ON "_reusable_v_rels" USING btree ("order");
  CREATE INDEX "_reusable_v_rels_parent_idx" ON "_reusable_v_rels" USING btree ("parent_id");
  CREATE INDEX "_reusable_v_rels_path_idx" ON "_reusable_v_rels" USING btree ("path");
  CREATE INDEX "_reusable_v_rels_locale_idx" ON "_reusable_v_rels" USING btree ("locale");
  CREATE INDEX "_reusable_v_rels_pages_id_idx" ON "_reusable_v_rels" USING btree ("pages_id","locale");
  CREATE INDEX "_reusable_v_rels_posts_id_idx" ON "_reusable_v_rels" USING btree ("posts_id","locale");
  CREATE INDEX "_reusable_v_rels_events_id_idx" ON "_reusable_v_rels" USING btree ("events_id","locale");
  CREATE INDEX "_reusable_v_rels_resources_id_idx" ON "_reusable_v_rels" USING btree ("resources_id","locale");
  CREATE INDEX "_reusable_v_rels_glossary_id_idx" ON "_reusable_v_rels" USING btree ("glossary_id","locale");
  CREATE INDEX "_reusable_v_rels_people_id_idx" ON "_reusable_v_rels" USING btree ("people_id","locale");
  CREATE INDEX "cpt_defaults_blocks_hero_links_order_idx" ON "cpt_defaults_blocks_hero_links" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_hero_links_parent_id_idx" ON "cpt_defaults_blocks_hero_links" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_hero_links_locale_idx" ON "cpt_defaults_blocks_hero_links" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_hero_order_idx" ON "cpt_defaults_blocks_hero" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_hero_parent_id_idx" ON "cpt_defaults_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_hero_path_idx" ON "cpt_defaults_blocks_hero" USING btree ("_path");
  CREATE INDEX "cpt_defaults_blocks_hero_locale_idx" ON "cpt_defaults_blocks_hero" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_hero_image_idx" ON "cpt_defaults_blocks_hero" USING btree ("image_id");
  CREATE INDEX "cpt_defaults_blocks_rich_text_order_idx" ON "cpt_defaults_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_rich_text_parent_id_idx" ON "cpt_defaults_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_rich_text_path_idx" ON "cpt_defaults_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "cpt_defaults_blocks_rich_text_locale_idx" ON "cpt_defaults_blocks_rich_text" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_media_text_links_order_idx" ON "cpt_defaults_blocks_media_text_links" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_media_text_links_parent_id_idx" ON "cpt_defaults_blocks_media_text_links" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_media_text_links_locale_idx" ON "cpt_defaults_blocks_media_text_links" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_media_text_order_idx" ON "cpt_defaults_blocks_media_text" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_media_text_parent_id_idx" ON "cpt_defaults_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_media_text_path_idx" ON "cpt_defaults_blocks_media_text" USING btree ("_path");
  CREATE INDEX "cpt_defaults_blocks_media_text_locale_idx" ON "cpt_defaults_blocks_media_text" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_media_text_image_idx" ON "cpt_defaults_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "cpt_defaults_blocks_cards_items_order_idx" ON "cpt_defaults_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_cards_items_parent_id_idx" ON "cpt_defaults_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_cards_items_locale_idx" ON "cpt_defaults_blocks_cards_items" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_cards_items_image_idx" ON "cpt_defaults_blocks_cards_items" USING btree ("image_id");
  CREATE INDEX "cpt_defaults_blocks_cards_order_idx" ON "cpt_defaults_blocks_cards" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_cards_parent_id_idx" ON "cpt_defaults_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_cards_path_idx" ON "cpt_defaults_blocks_cards" USING btree ("_path");
  CREATE INDEX "cpt_defaults_blocks_cards_locale_idx" ON "cpt_defaults_blocks_cards" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_col_text_order_idx" ON "cpt_defaults_blocks_col_text" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_col_text_parent_id_idx" ON "cpt_defaults_blocks_col_text" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_col_text_path_idx" ON "cpt_defaults_blocks_col_text" USING btree ("_path");
  CREATE INDEX "cpt_defaults_blocks_col_text_locale_idx" ON "cpt_defaults_blocks_col_text" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_col_image_order_idx" ON "cpt_defaults_blocks_col_image" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_col_image_parent_id_idx" ON "cpt_defaults_blocks_col_image" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_col_image_path_idx" ON "cpt_defaults_blocks_col_image" USING btree ("_path");
  CREATE INDEX "cpt_defaults_blocks_col_image_locale_idx" ON "cpt_defaults_blocks_col_image" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_col_image_image_idx" ON "cpt_defaults_blocks_col_image" USING btree ("image_id");
  CREATE INDEX "cpt_defaults_blocks_col_buttons_links_order_idx" ON "cpt_defaults_blocks_col_buttons_links" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_col_buttons_links_parent_id_idx" ON "cpt_defaults_blocks_col_buttons_links" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_col_buttons_links_locale_idx" ON "cpt_defaults_blocks_col_buttons_links" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_col_buttons_order_idx" ON "cpt_defaults_blocks_col_buttons" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_col_buttons_parent_id_idx" ON "cpt_defaults_blocks_col_buttons" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_col_buttons_path_idx" ON "cpt_defaults_blocks_col_buttons" USING btree ("_path");
  CREATE INDEX "cpt_defaults_blocks_col_buttons_locale_idx" ON "cpt_defaults_blocks_col_buttons" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_columns_columns_order_idx" ON "cpt_defaults_blocks_columns_columns" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_columns_columns_parent_id_idx" ON "cpt_defaults_blocks_columns_columns" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_columns_columns_locale_idx" ON "cpt_defaults_blocks_columns_columns" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_columns_order_idx" ON "cpt_defaults_blocks_columns" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_columns_parent_id_idx" ON "cpt_defaults_blocks_columns" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_columns_path_idx" ON "cpt_defaults_blocks_columns" USING btree ("_path");
  CREATE INDEX "cpt_defaults_blocks_columns_locale_idx" ON "cpt_defaults_blocks_columns" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_tabs_tabs_order_idx" ON "cpt_defaults_blocks_tabs_tabs" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_tabs_tabs_parent_id_idx" ON "cpt_defaults_blocks_tabs_tabs" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_tabs_tabs_locale_idx" ON "cpt_defaults_blocks_tabs_tabs" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_tabs_tabs_image_idx" ON "cpt_defaults_blocks_tabs_tabs" USING btree ("image_id");
  CREATE INDEX "cpt_defaults_blocks_tabs_order_idx" ON "cpt_defaults_blocks_tabs" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_tabs_parent_id_idx" ON "cpt_defaults_blocks_tabs" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_tabs_path_idx" ON "cpt_defaults_blocks_tabs" USING btree ("_path");
  CREATE INDEX "cpt_defaults_blocks_tabs_locale_idx" ON "cpt_defaults_blocks_tabs" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_stats_items_order_idx" ON "cpt_defaults_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_stats_items_parent_id_idx" ON "cpt_defaults_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_stats_items_locale_idx" ON "cpt_defaults_blocks_stats_items" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_stats_order_idx" ON "cpt_defaults_blocks_stats" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_stats_parent_id_idx" ON "cpt_defaults_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_stats_path_idx" ON "cpt_defaults_blocks_stats" USING btree ("_path");
  CREATE INDEX "cpt_defaults_blocks_stats_locale_idx" ON "cpt_defaults_blocks_stats" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_logos_logos_order_idx" ON "cpt_defaults_blocks_logos_logos" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_logos_logos_parent_id_idx" ON "cpt_defaults_blocks_logos_logos" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_logos_logos_locale_idx" ON "cpt_defaults_blocks_logos_logos" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_logos_logos_image_idx" ON "cpt_defaults_blocks_logos_logos" USING btree ("image_id");
  CREATE INDEX "cpt_defaults_blocks_logos_order_idx" ON "cpt_defaults_blocks_logos" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_logos_parent_id_idx" ON "cpt_defaults_blocks_logos" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_logos_path_idx" ON "cpt_defaults_blocks_logos" USING btree ("_path");
  CREATE INDEX "cpt_defaults_blocks_logos_locale_idx" ON "cpt_defaults_blocks_logos" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_testimonials_items_order_idx" ON "cpt_defaults_blocks_testimonials_items" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_testimonials_items_parent_id_idx" ON "cpt_defaults_blocks_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_testimonials_items_locale_idx" ON "cpt_defaults_blocks_testimonials_items" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_testimonials_items_photo_idx" ON "cpt_defaults_blocks_testimonials_items" USING btree ("photo_id");
  CREATE INDEX "cpt_defaults_blocks_testimonials_order_idx" ON "cpt_defaults_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_testimonials_parent_id_idx" ON "cpt_defaults_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_testimonials_path_idx" ON "cpt_defaults_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "cpt_defaults_blocks_testimonials_locale_idx" ON "cpt_defaults_blocks_testimonials" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_faq_items_order_idx" ON "cpt_defaults_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_faq_items_parent_id_idx" ON "cpt_defaults_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_faq_items_locale_idx" ON "cpt_defaults_blocks_faq_items" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_faq_order_idx" ON "cpt_defaults_blocks_faq" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_faq_parent_id_idx" ON "cpt_defaults_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_faq_path_idx" ON "cpt_defaults_blocks_faq" USING btree ("_path");
  CREATE INDEX "cpt_defaults_blocks_faq_locale_idx" ON "cpt_defaults_blocks_faq" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_cta_links_order_idx" ON "cpt_defaults_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_cta_links_parent_id_idx" ON "cpt_defaults_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_cta_links_locale_idx" ON "cpt_defaults_blocks_cta_links" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_cta_order_idx" ON "cpt_defaults_blocks_cta" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_cta_parent_id_idx" ON "cpt_defaults_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_cta_path_idx" ON "cpt_defaults_blocks_cta" USING btree ("_path");
  CREATE INDEX "cpt_defaults_blocks_cta_locale_idx" ON "cpt_defaults_blocks_cta" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_order_idx" ON "cpt_defaults_blocks_dynamic_field" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_parent_id_idx" ON "cpt_defaults_blocks_dynamic_field" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_path_idx" ON "cpt_defaults_blocks_dynamic_field" USING btree ("_path");
  CREATE INDEX "cpt_defaults_blocks_dynamic_field_locale_idx" ON "cpt_defaults_blocks_dynamic_field" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_reusable_section_order_idx" ON "cpt_defaults_blocks_reusable_section" USING btree ("_order");
  CREATE INDEX "cpt_defaults_blocks_reusable_section_parent_id_idx" ON "cpt_defaults_blocks_reusable_section" USING btree ("_parent_id");
  CREATE INDEX "cpt_defaults_blocks_reusable_section_path_idx" ON "cpt_defaults_blocks_reusable_section" USING btree ("_path");
  CREATE INDEX "cpt_defaults_blocks_reusable_section_locale_idx" ON "cpt_defaults_blocks_reusable_section" USING btree ("_locale");
  CREATE INDEX "cpt_defaults_blocks_reusable_section_section_idx" ON "cpt_defaults_blocks_reusable_section" USING btree ("section_id");
  CREATE INDEX "cpt_defaults_rels_order_idx" ON "cpt_defaults_rels" USING btree ("order");
  CREATE INDEX "cpt_defaults_rels_parent_idx" ON "cpt_defaults_rels" USING btree ("parent_id");
  CREATE INDEX "cpt_defaults_rels_path_idx" ON "cpt_defaults_rels" USING btree ("path");
  CREATE INDEX "cpt_defaults_rels_locale_idx" ON "cpt_defaults_rels" USING btree ("locale");
  CREATE INDEX "cpt_defaults_rels_pages_id_idx" ON "cpt_defaults_rels" USING btree ("pages_id","locale");
  CREATE INDEX "cpt_defaults_rels_posts_id_idx" ON "cpt_defaults_rels" USING btree ("posts_id","locale");
  CREATE INDEX "cpt_defaults_rels_events_id_idx" ON "cpt_defaults_rels" USING btree ("events_id","locale");
  CREATE INDEX "cpt_defaults_rels_resources_id_idx" ON "cpt_defaults_rels" USING btree ("resources_id","locale");
  CREATE INDEX "cpt_defaults_rels_glossary_id_idx" ON "cpt_defaults_rels" USING btree ("glossary_id","locale");
  CREATE INDEX "cpt_defaults_rels_people_id_idx" ON "cpt_defaults_rels" USING btree ("people_id","locale");
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_glossary_fk" FOREIGN KEY ("glossary_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_glossary_fk" FOREIGN KEY ("glossary_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_glossary_fk" FOREIGN KEY ("glossary_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_glossary_fk" FOREIGN KEY ("glossary_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_rels" ADD CONSTRAINT "resources_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_rels" ADD CONSTRAINT "resources_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_rels" ADD CONSTRAINT "resources_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_rels" ADD CONSTRAINT "resources_rels_glossary_fk" FOREIGN KEY ("glossary_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_rels" ADD CONSTRAINT "resources_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_rels" ADD CONSTRAINT "_resources_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_rels" ADD CONSTRAINT "_resources_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_rels" ADD CONSTRAINT "_resources_v_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_rels" ADD CONSTRAINT "_resources_v_rels_glossary_fk" FOREIGN KEY ("glossary_id") REFERENCES "public"."glossary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_rels" ADD CONSTRAINT "_resources_v_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_rels" ADD CONSTRAINT "glossary_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_rels" ADD CONSTRAINT "glossary_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_rels" ADD CONSTRAINT "glossary_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_rels" ADD CONSTRAINT "glossary_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glossary_rels" ADD CONSTRAINT "glossary_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_rels" ADD CONSTRAINT "_glossary_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_rels" ADD CONSTRAINT "_glossary_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_rels" ADD CONSTRAINT "_glossary_v_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_rels" ADD CONSTRAINT "_glossary_v_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glossary_v_rels" ADD CONSTRAINT "_glossary_v_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_reusable_sections_fk" FOREIGN KEY ("reusable_id") REFERENCES "public"."reusable"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "posts_rels_locale_idx" ON "posts_rels" USING btree ("locale");
  CREATE INDEX "posts_rels_pages_id_idx" ON "posts_rels" USING btree ("pages_id","locale");
  CREATE INDEX "posts_rels_posts_id_idx" ON "posts_rels" USING btree ("posts_id","locale");
  CREATE INDEX "posts_rels_events_id_idx" ON "posts_rels" USING btree ("events_id","locale");
  CREATE INDEX "posts_rels_resources_id_idx" ON "posts_rels" USING btree ("resources_id","locale");
  CREATE INDEX "posts_rels_glossary_id_idx" ON "posts_rels" USING btree ("glossary_id","locale");
  CREATE INDEX "posts_rels_people_id_idx" ON "posts_rels" USING btree ("people_id","locale");
  CREATE INDEX "_posts_v_rels_locale_idx" ON "_posts_v_rels" USING btree ("locale");
  CREATE INDEX "_posts_v_rels_pages_id_idx" ON "_posts_v_rels" USING btree ("pages_id","locale");
  CREATE INDEX "_posts_v_rels_posts_id_idx" ON "_posts_v_rels" USING btree ("posts_id","locale");
  CREATE INDEX "_posts_v_rels_events_id_idx" ON "_posts_v_rels" USING btree ("events_id","locale");
  CREATE INDEX "_posts_v_rels_resources_id_idx" ON "_posts_v_rels" USING btree ("resources_id","locale");
  CREATE INDEX "_posts_v_rels_glossary_id_idx" ON "_posts_v_rels" USING btree ("glossary_id","locale");
  CREATE INDEX "_posts_v_rels_people_id_idx" ON "_posts_v_rels" USING btree ("people_id","locale");
  CREATE INDEX "events_rels_locale_idx" ON "events_rels" USING btree ("locale");
  CREATE INDEX "events_rels_pages_id_idx" ON "events_rels" USING btree ("pages_id","locale");
  CREATE INDEX "events_rels_posts_id_idx" ON "events_rels" USING btree ("posts_id","locale");
  CREATE INDEX "events_rels_events_id_idx" ON "events_rels" USING btree ("events_id","locale");
  CREATE INDEX "events_rels_resources_id_idx" ON "events_rels" USING btree ("resources_id","locale");
  CREATE INDEX "events_rels_glossary_id_idx" ON "events_rels" USING btree ("glossary_id","locale");
  CREATE INDEX "_events_v_rels_locale_idx" ON "_events_v_rels" USING btree ("locale");
  CREATE INDEX "_events_v_rels_pages_id_idx" ON "_events_v_rels" USING btree ("pages_id","locale");
  CREATE INDEX "_events_v_rels_posts_id_idx" ON "_events_v_rels" USING btree ("posts_id","locale");
  CREATE INDEX "_events_v_rels_events_id_idx" ON "_events_v_rels" USING btree ("events_id","locale");
  CREATE INDEX "_events_v_rels_resources_id_idx" ON "_events_v_rels" USING btree ("resources_id","locale");
  CREATE INDEX "_events_v_rels_glossary_id_idx" ON "_events_v_rels" USING btree ("glossary_id","locale");
  CREATE INDEX "resources_rels_locale_idx" ON "resources_rels" USING btree ("locale");
  CREATE INDEX "resources_rels_pages_id_idx" ON "resources_rels" USING btree ("pages_id","locale");
  CREATE INDEX "resources_rels_posts_id_idx" ON "resources_rels" USING btree ("posts_id","locale");
  CREATE INDEX "resources_rels_events_id_idx" ON "resources_rels" USING btree ("events_id","locale");
  CREATE INDEX "resources_rels_glossary_id_idx" ON "resources_rels" USING btree ("glossary_id","locale");
  CREATE INDEX "resources_rels_people_id_idx" ON "resources_rels" USING btree ("people_id","locale");
  CREATE INDEX "_resources_v_rels_locale_idx" ON "_resources_v_rels" USING btree ("locale");
  CREATE INDEX "_resources_v_rels_pages_id_idx" ON "_resources_v_rels" USING btree ("pages_id","locale");
  CREATE INDEX "_resources_v_rels_posts_id_idx" ON "_resources_v_rels" USING btree ("posts_id","locale");
  CREATE INDEX "_resources_v_rels_events_id_idx" ON "_resources_v_rels" USING btree ("events_id","locale");
  CREATE INDEX "_resources_v_rels_glossary_id_idx" ON "_resources_v_rels" USING btree ("glossary_id","locale");
  CREATE INDEX "_resources_v_rels_people_id_idx" ON "_resources_v_rels" USING btree ("people_id","locale");
  CREATE INDEX "glossary_rels_locale_idx" ON "glossary_rels" USING btree ("locale");
  CREATE INDEX "glossary_rels_pages_id_idx" ON "glossary_rels" USING btree ("pages_id","locale");
  CREATE INDEX "glossary_rels_posts_id_idx" ON "glossary_rels" USING btree ("posts_id","locale");
  CREATE INDEX "glossary_rels_events_id_idx" ON "glossary_rels" USING btree ("events_id","locale");
  CREATE INDEX "glossary_rels_resources_id_idx" ON "glossary_rels" USING btree ("resources_id","locale");
  CREATE INDEX "glossary_rels_people_id_idx" ON "glossary_rels" USING btree ("people_id","locale");
  CREATE INDEX "_glossary_v_rels_locale_idx" ON "_glossary_v_rels" USING btree ("locale");
  CREATE INDEX "_glossary_v_rels_pages_id_idx" ON "_glossary_v_rels" USING btree ("pages_id","locale");
  CREATE INDEX "_glossary_v_rels_posts_id_idx" ON "_glossary_v_rels" USING btree ("posts_id","locale");
  CREATE INDEX "_glossary_v_rels_events_id_idx" ON "_glossary_v_rels" USING btree ("events_id","locale");
  CREATE INDEX "_glossary_v_rels_resources_id_idx" ON "_glossary_v_rels" USING btree ("resources_id","locale");
  CREATE INDEX "_glossary_v_rels_people_id_idx" ON "_glossary_v_rels" USING btree ("people_id","locale");
  CREATE INDEX "payload_locked_documents_rels_reusable_id_idx" ON "payload_locked_documents_rels" USING btree ("reusable_id");
  CREATE INDEX "posts_rels_categories_id_idx" ON "posts_rels" USING btree ("categories_id","locale");
  CREATE INDEX "posts_rels_tags_id_idx" ON "posts_rels" USING btree ("tags_id","locale");
  CREATE INDEX "_posts_v_rels_categories_id_idx" ON "_posts_v_rels" USING btree ("categories_id","locale");
  CREATE INDEX "_posts_v_rels_tags_id_idx" ON "_posts_v_rels" USING btree ("tags_id","locale");
  CREATE INDEX "events_rels_people_id_idx" ON "events_rels" USING btree ("people_id","locale");
  CREATE INDEX "events_rels_event_types_id_idx" ON "events_rels" USING btree ("event_types_id","locale");
  CREATE INDEX "_events_v_rels_people_id_idx" ON "_events_v_rels" USING btree ("people_id","locale");
  CREATE INDEX "_events_v_rels_event_types_id_idx" ON "_events_v_rels" USING btree ("event_types_id","locale");
  CREATE INDEX "resources_rels_resources_id_idx" ON "resources_rels" USING btree ("resources_id","locale");
  CREATE INDEX "resources_rels_industries_id_idx" ON "resources_rels" USING btree ("industries_id","locale");
  CREATE INDEX "resources_rels_topics_id_idx" ON "resources_rels" USING btree ("topics_id","locale");
  CREATE INDEX "_resources_v_rels_resources_id_idx" ON "_resources_v_rels" USING btree ("resources_id","locale");
  CREATE INDEX "_resources_v_rels_industries_id_idx" ON "_resources_v_rels" USING btree ("industries_id","locale");
  CREATE INDEX "_resources_v_rels_topics_id_idx" ON "_resources_v_rels" USING btree ("topics_id","locale");
  CREATE INDEX "glossary_rels_glossary_id_idx" ON "glossary_rels" USING btree ("glossary_id","locale");
  CREATE INDEX "_glossary_v_rels_glossary_id_idx" ON "_glossary_v_rels" USING btree ("glossary_id","locale");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_media_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_media_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cards_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_col_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_col_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_col_buttons_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_col_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_columns_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_stats_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_logos_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_testimonials_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_dynamic_field" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_reusable_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_media_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_media_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cards_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_col_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_col_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_col_buttons_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_col_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_columns_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_stats_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_logos_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_testimonials_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_dynamic_field" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_reusable_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_media_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_media_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_cards_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_col_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_col_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_col_buttons_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_col_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_columns_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_stats_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_logos_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_testimonials_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_dynamic_field" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_blocks_reusable_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_media_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_media_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_cards_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_col_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_col_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_col_buttons_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_col_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_columns_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_stats_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_logos_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_testimonials_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_dynamic_field" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_blocks_reusable_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_media_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_media_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_cards_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_col_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_col_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_col_buttons_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_col_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_columns_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_stats_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_logos_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_testimonials_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_dynamic_field" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "events_blocks_reusable_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_media_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_media_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_cards_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_col_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_col_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_col_buttons_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_col_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_columns_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_stats_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_logos_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_testimonials_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_dynamic_field" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_events_v_blocks_reusable_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_media_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_media_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_cards_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_col_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_col_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_col_buttons_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_col_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_columns_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_stats_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_logos_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_testimonials_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_dynamic_field" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_reusable_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_media_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_media_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_cards_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_col_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_col_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_col_buttons_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_col_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_columns_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_stats_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_logos_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_testimonials_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_dynamic_field" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_reusable_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_media_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_media_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_cards_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_col_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_col_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_col_buttons_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_col_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_columns_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_stats_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_logos_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_testimonials_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_dynamic_field" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "glossary_blocks_reusable_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_media_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_media_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_cards_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_col_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_col_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_col_buttons_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_col_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_columns_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_stats_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_logos_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_testimonials_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_dynamic_field" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_glossary_v_blocks_reusable_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_media_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_media_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_cards_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_col_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_col_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_col_buttons_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_col_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_columns_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_stats_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_logos_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_testimonials_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_dynamic_field" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_blocks_reusable_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "people_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_media_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_media_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_cards_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_col_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_col_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_col_buttons_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_col_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_columns_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_stats_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_logos_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_testimonials_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_dynamic_field" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_blocks_reusable_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_people_v_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_media_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_media_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_cards_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_col_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_col_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_col_buttons_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_col_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_columns_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_stats_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_logos_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_testimonials_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_blocks_dynamic_field" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "reusable_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_media_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_media_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_cards_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_col_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_col_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_col_buttons_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_col_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_columns_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_stats_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_logos_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_testimonials_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_blocks_dynamic_field" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_reusable_v_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_hero_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_media_text_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_media_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_cards_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_col_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_col_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_col_buttons_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_col_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_columns_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_tabs_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_stats_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_logos_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_testimonials_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_cta_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_dynamic_field" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_blocks_reusable_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cpt_defaults_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_hero_links" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_rich_text" CASCADE;
  DROP TABLE "pages_blocks_media_text_links" CASCADE;
  DROP TABLE "pages_blocks_media_text" CASCADE;
  DROP TABLE "pages_blocks_cards_items" CASCADE;
  DROP TABLE "pages_blocks_cards" CASCADE;
  DROP TABLE "pages_blocks_col_text" CASCADE;
  DROP TABLE "pages_blocks_col_image" CASCADE;
  DROP TABLE "pages_blocks_col_buttons_links" CASCADE;
  DROP TABLE "pages_blocks_col_buttons" CASCADE;
  DROP TABLE "pages_blocks_columns_columns" CASCADE;
  DROP TABLE "pages_blocks_columns" CASCADE;
  DROP TABLE "pages_blocks_tabs_tabs" CASCADE;
  DROP TABLE "pages_blocks_tabs" CASCADE;
  DROP TABLE "pages_blocks_stats_items" CASCADE;
  DROP TABLE "pages_blocks_stats" CASCADE;
  DROP TABLE "pages_blocks_logos_logos" CASCADE;
  DROP TABLE "pages_blocks_logos" CASCADE;
  DROP TABLE "pages_blocks_testimonials_items" CASCADE;
  DROP TABLE "pages_blocks_testimonials" CASCADE;
  DROP TABLE "pages_blocks_faq_items" CASCADE;
  DROP TABLE "pages_blocks_faq" CASCADE;
  DROP TABLE "pages_blocks_cta_links" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_dynamic_field" CASCADE;
  DROP TABLE "pages_blocks_reusable_section" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_links" CASCADE;
  DROP TABLE "_pages_v_blocks_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_rich_text" CASCADE;
  DROP TABLE "_pages_v_blocks_media_text_links" CASCADE;
  DROP TABLE "_pages_v_blocks_media_text" CASCADE;
  DROP TABLE "_pages_v_blocks_cards_items" CASCADE;
  DROP TABLE "_pages_v_blocks_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_col_text" CASCADE;
  DROP TABLE "_pages_v_blocks_col_image" CASCADE;
  DROP TABLE "_pages_v_blocks_col_buttons_links" CASCADE;
  DROP TABLE "_pages_v_blocks_col_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_columns_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_tabs_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_stats_items" CASCADE;
  DROP TABLE "_pages_v_blocks_stats" CASCADE;
  DROP TABLE "_pages_v_blocks_logos_logos" CASCADE;
  DROP TABLE "_pages_v_blocks_logos" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials_items" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_items" CASCADE;
  DROP TABLE "_pages_v_blocks_faq" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_dynamic_field" CASCADE;
  DROP TABLE "_pages_v_blocks_reusable_section" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "posts_blocks_hero_links" CASCADE;
  DROP TABLE "posts_blocks_hero" CASCADE;
  DROP TABLE "posts_blocks_rich_text" CASCADE;
  DROP TABLE "posts_blocks_media_text_links" CASCADE;
  DROP TABLE "posts_blocks_media_text" CASCADE;
  DROP TABLE "posts_blocks_cards_items" CASCADE;
  DROP TABLE "posts_blocks_cards" CASCADE;
  DROP TABLE "posts_blocks_col_text" CASCADE;
  DROP TABLE "posts_blocks_col_image" CASCADE;
  DROP TABLE "posts_blocks_col_buttons_links" CASCADE;
  DROP TABLE "posts_blocks_col_buttons" CASCADE;
  DROP TABLE "posts_blocks_columns_columns" CASCADE;
  DROP TABLE "posts_blocks_columns" CASCADE;
  DROP TABLE "posts_blocks_tabs_tabs" CASCADE;
  DROP TABLE "posts_blocks_tabs" CASCADE;
  DROP TABLE "posts_blocks_stats_items" CASCADE;
  DROP TABLE "posts_blocks_stats" CASCADE;
  DROP TABLE "posts_blocks_logos_logos" CASCADE;
  DROP TABLE "posts_blocks_logos" CASCADE;
  DROP TABLE "posts_blocks_testimonials_items" CASCADE;
  DROP TABLE "posts_blocks_testimonials" CASCADE;
  DROP TABLE "posts_blocks_faq_items" CASCADE;
  DROP TABLE "posts_blocks_faq" CASCADE;
  DROP TABLE "posts_blocks_cta_links" CASCADE;
  DROP TABLE "posts_blocks_cta" CASCADE;
  DROP TABLE "posts_blocks_dynamic_field" CASCADE;
  DROP TABLE "posts_blocks_reusable_section" CASCADE;
  DROP TABLE "_posts_v_blocks_hero_links" CASCADE;
  DROP TABLE "_posts_v_blocks_hero" CASCADE;
  DROP TABLE "_posts_v_blocks_rich_text" CASCADE;
  DROP TABLE "_posts_v_blocks_media_text_links" CASCADE;
  DROP TABLE "_posts_v_blocks_media_text" CASCADE;
  DROP TABLE "_posts_v_blocks_cards_items" CASCADE;
  DROP TABLE "_posts_v_blocks_cards" CASCADE;
  DROP TABLE "_posts_v_blocks_col_text" CASCADE;
  DROP TABLE "_posts_v_blocks_col_image" CASCADE;
  DROP TABLE "_posts_v_blocks_col_buttons_links" CASCADE;
  DROP TABLE "_posts_v_blocks_col_buttons" CASCADE;
  DROP TABLE "_posts_v_blocks_columns_columns" CASCADE;
  DROP TABLE "_posts_v_blocks_columns" CASCADE;
  DROP TABLE "_posts_v_blocks_tabs_tabs" CASCADE;
  DROP TABLE "_posts_v_blocks_tabs" CASCADE;
  DROP TABLE "_posts_v_blocks_stats_items" CASCADE;
  DROP TABLE "_posts_v_blocks_stats" CASCADE;
  DROP TABLE "_posts_v_blocks_logos_logos" CASCADE;
  DROP TABLE "_posts_v_blocks_logos" CASCADE;
  DROP TABLE "_posts_v_blocks_testimonials_items" CASCADE;
  DROP TABLE "_posts_v_blocks_testimonials" CASCADE;
  DROP TABLE "_posts_v_blocks_faq_items" CASCADE;
  DROP TABLE "_posts_v_blocks_faq" CASCADE;
  DROP TABLE "_posts_v_blocks_cta_links" CASCADE;
  DROP TABLE "_posts_v_blocks_cta" CASCADE;
  DROP TABLE "_posts_v_blocks_dynamic_field" CASCADE;
  DROP TABLE "_posts_v_blocks_reusable_section" CASCADE;
  DROP TABLE "events_blocks_hero_links" CASCADE;
  DROP TABLE "events_blocks_hero" CASCADE;
  DROP TABLE "events_blocks_rich_text" CASCADE;
  DROP TABLE "events_blocks_media_text_links" CASCADE;
  DROP TABLE "events_blocks_media_text" CASCADE;
  DROP TABLE "events_blocks_cards_items" CASCADE;
  DROP TABLE "events_blocks_cards" CASCADE;
  DROP TABLE "events_blocks_col_text" CASCADE;
  DROP TABLE "events_blocks_col_image" CASCADE;
  DROP TABLE "events_blocks_col_buttons_links" CASCADE;
  DROP TABLE "events_blocks_col_buttons" CASCADE;
  DROP TABLE "events_blocks_columns_columns" CASCADE;
  DROP TABLE "events_blocks_columns" CASCADE;
  DROP TABLE "events_blocks_tabs_tabs" CASCADE;
  DROP TABLE "events_blocks_tabs" CASCADE;
  DROP TABLE "events_blocks_stats_items" CASCADE;
  DROP TABLE "events_blocks_stats" CASCADE;
  DROP TABLE "events_blocks_logos_logos" CASCADE;
  DROP TABLE "events_blocks_logos" CASCADE;
  DROP TABLE "events_blocks_testimonials_items" CASCADE;
  DROP TABLE "events_blocks_testimonials" CASCADE;
  DROP TABLE "events_blocks_faq_items" CASCADE;
  DROP TABLE "events_blocks_faq" CASCADE;
  DROP TABLE "events_blocks_cta_links" CASCADE;
  DROP TABLE "events_blocks_cta" CASCADE;
  DROP TABLE "events_blocks_dynamic_field" CASCADE;
  DROP TABLE "events_blocks_reusable_section" CASCADE;
  DROP TABLE "_events_v_blocks_hero_links" CASCADE;
  DROP TABLE "_events_v_blocks_hero" CASCADE;
  DROP TABLE "_events_v_blocks_rich_text" CASCADE;
  DROP TABLE "_events_v_blocks_media_text_links" CASCADE;
  DROP TABLE "_events_v_blocks_media_text" CASCADE;
  DROP TABLE "_events_v_blocks_cards_items" CASCADE;
  DROP TABLE "_events_v_blocks_cards" CASCADE;
  DROP TABLE "_events_v_blocks_col_text" CASCADE;
  DROP TABLE "_events_v_blocks_col_image" CASCADE;
  DROP TABLE "_events_v_blocks_col_buttons_links" CASCADE;
  DROP TABLE "_events_v_blocks_col_buttons" CASCADE;
  DROP TABLE "_events_v_blocks_columns_columns" CASCADE;
  DROP TABLE "_events_v_blocks_columns" CASCADE;
  DROP TABLE "_events_v_blocks_tabs_tabs" CASCADE;
  DROP TABLE "_events_v_blocks_tabs" CASCADE;
  DROP TABLE "_events_v_blocks_stats_items" CASCADE;
  DROP TABLE "_events_v_blocks_stats" CASCADE;
  DROP TABLE "_events_v_blocks_logos_logos" CASCADE;
  DROP TABLE "_events_v_blocks_logos" CASCADE;
  DROP TABLE "_events_v_blocks_testimonials_items" CASCADE;
  DROP TABLE "_events_v_blocks_testimonials" CASCADE;
  DROP TABLE "_events_v_blocks_faq_items" CASCADE;
  DROP TABLE "_events_v_blocks_faq" CASCADE;
  DROP TABLE "_events_v_blocks_cta_links" CASCADE;
  DROP TABLE "_events_v_blocks_cta" CASCADE;
  DROP TABLE "_events_v_blocks_dynamic_field" CASCADE;
  DROP TABLE "_events_v_blocks_reusable_section" CASCADE;
  DROP TABLE "resources_blocks_hero_links" CASCADE;
  DROP TABLE "resources_blocks_hero" CASCADE;
  DROP TABLE "resources_blocks_rich_text" CASCADE;
  DROP TABLE "resources_blocks_media_text_links" CASCADE;
  DROP TABLE "resources_blocks_media_text" CASCADE;
  DROP TABLE "resources_blocks_cards_items" CASCADE;
  DROP TABLE "resources_blocks_cards" CASCADE;
  DROP TABLE "resources_blocks_col_text" CASCADE;
  DROP TABLE "resources_blocks_col_image" CASCADE;
  DROP TABLE "resources_blocks_col_buttons_links" CASCADE;
  DROP TABLE "resources_blocks_col_buttons" CASCADE;
  DROP TABLE "resources_blocks_columns_columns" CASCADE;
  DROP TABLE "resources_blocks_columns" CASCADE;
  DROP TABLE "resources_blocks_tabs_tabs" CASCADE;
  DROP TABLE "resources_blocks_tabs" CASCADE;
  DROP TABLE "resources_blocks_stats_items" CASCADE;
  DROP TABLE "resources_blocks_stats" CASCADE;
  DROP TABLE "resources_blocks_logos_logos" CASCADE;
  DROP TABLE "resources_blocks_logos" CASCADE;
  DROP TABLE "resources_blocks_testimonials_items" CASCADE;
  DROP TABLE "resources_blocks_testimonials" CASCADE;
  DROP TABLE "resources_blocks_faq_items" CASCADE;
  DROP TABLE "resources_blocks_faq" CASCADE;
  DROP TABLE "resources_blocks_cta_links" CASCADE;
  DROP TABLE "resources_blocks_cta" CASCADE;
  DROP TABLE "resources_blocks_dynamic_field" CASCADE;
  DROP TABLE "resources_blocks_reusable_section" CASCADE;
  DROP TABLE "_resources_v_blocks_hero_links" CASCADE;
  DROP TABLE "_resources_v_blocks_hero" CASCADE;
  DROP TABLE "_resources_v_blocks_rich_text" CASCADE;
  DROP TABLE "_resources_v_blocks_media_text_links" CASCADE;
  DROP TABLE "_resources_v_blocks_media_text" CASCADE;
  DROP TABLE "_resources_v_blocks_cards_items" CASCADE;
  DROP TABLE "_resources_v_blocks_cards" CASCADE;
  DROP TABLE "_resources_v_blocks_col_text" CASCADE;
  DROP TABLE "_resources_v_blocks_col_image" CASCADE;
  DROP TABLE "_resources_v_blocks_col_buttons_links" CASCADE;
  DROP TABLE "_resources_v_blocks_col_buttons" CASCADE;
  DROP TABLE "_resources_v_blocks_columns_columns" CASCADE;
  DROP TABLE "_resources_v_blocks_columns" CASCADE;
  DROP TABLE "_resources_v_blocks_tabs_tabs" CASCADE;
  DROP TABLE "_resources_v_blocks_tabs" CASCADE;
  DROP TABLE "_resources_v_blocks_stats_items" CASCADE;
  DROP TABLE "_resources_v_blocks_stats" CASCADE;
  DROP TABLE "_resources_v_blocks_logos_logos" CASCADE;
  DROP TABLE "_resources_v_blocks_logos" CASCADE;
  DROP TABLE "_resources_v_blocks_testimonials_items" CASCADE;
  DROP TABLE "_resources_v_blocks_testimonials" CASCADE;
  DROP TABLE "_resources_v_blocks_faq_items" CASCADE;
  DROP TABLE "_resources_v_blocks_faq" CASCADE;
  DROP TABLE "_resources_v_blocks_cta_links" CASCADE;
  DROP TABLE "_resources_v_blocks_cta" CASCADE;
  DROP TABLE "_resources_v_blocks_dynamic_field" CASCADE;
  DROP TABLE "_resources_v_blocks_reusable_section" CASCADE;
  DROP TABLE "glossary_blocks_hero_links" CASCADE;
  DROP TABLE "glossary_blocks_hero" CASCADE;
  DROP TABLE "glossary_blocks_rich_text" CASCADE;
  DROP TABLE "glossary_blocks_media_text_links" CASCADE;
  DROP TABLE "glossary_blocks_media_text" CASCADE;
  DROP TABLE "glossary_blocks_cards_items" CASCADE;
  DROP TABLE "glossary_blocks_cards" CASCADE;
  DROP TABLE "glossary_blocks_col_text" CASCADE;
  DROP TABLE "glossary_blocks_col_image" CASCADE;
  DROP TABLE "glossary_blocks_col_buttons_links" CASCADE;
  DROP TABLE "glossary_blocks_col_buttons" CASCADE;
  DROP TABLE "glossary_blocks_columns_columns" CASCADE;
  DROP TABLE "glossary_blocks_columns" CASCADE;
  DROP TABLE "glossary_blocks_tabs_tabs" CASCADE;
  DROP TABLE "glossary_blocks_tabs" CASCADE;
  DROP TABLE "glossary_blocks_stats_items" CASCADE;
  DROP TABLE "glossary_blocks_stats" CASCADE;
  DROP TABLE "glossary_blocks_logos_logos" CASCADE;
  DROP TABLE "glossary_blocks_logos" CASCADE;
  DROP TABLE "glossary_blocks_testimonials_items" CASCADE;
  DROP TABLE "glossary_blocks_testimonials" CASCADE;
  DROP TABLE "glossary_blocks_faq_items" CASCADE;
  DROP TABLE "glossary_blocks_faq" CASCADE;
  DROP TABLE "glossary_blocks_cta_links" CASCADE;
  DROP TABLE "glossary_blocks_cta" CASCADE;
  DROP TABLE "glossary_blocks_dynamic_field" CASCADE;
  DROP TABLE "glossary_blocks_reusable_section" CASCADE;
  DROP TABLE "_glossary_v_blocks_hero_links" CASCADE;
  DROP TABLE "_glossary_v_blocks_hero" CASCADE;
  DROP TABLE "_glossary_v_blocks_rich_text" CASCADE;
  DROP TABLE "_glossary_v_blocks_media_text_links" CASCADE;
  DROP TABLE "_glossary_v_blocks_media_text" CASCADE;
  DROP TABLE "_glossary_v_blocks_cards_items" CASCADE;
  DROP TABLE "_glossary_v_blocks_cards" CASCADE;
  DROP TABLE "_glossary_v_blocks_col_text" CASCADE;
  DROP TABLE "_glossary_v_blocks_col_image" CASCADE;
  DROP TABLE "_glossary_v_blocks_col_buttons_links" CASCADE;
  DROP TABLE "_glossary_v_blocks_col_buttons" CASCADE;
  DROP TABLE "_glossary_v_blocks_columns_columns" CASCADE;
  DROP TABLE "_glossary_v_blocks_columns" CASCADE;
  DROP TABLE "_glossary_v_blocks_tabs_tabs" CASCADE;
  DROP TABLE "_glossary_v_blocks_tabs" CASCADE;
  DROP TABLE "_glossary_v_blocks_stats_items" CASCADE;
  DROP TABLE "_glossary_v_blocks_stats" CASCADE;
  DROP TABLE "_glossary_v_blocks_logos_logos" CASCADE;
  DROP TABLE "_glossary_v_blocks_logos" CASCADE;
  DROP TABLE "_glossary_v_blocks_testimonials_items" CASCADE;
  DROP TABLE "_glossary_v_blocks_testimonials" CASCADE;
  DROP TABLE "_glossary_v_blocks_faq_items" CASCADE;
  DROP TABLE "_glossary_v_blocks_faq" CASCADE;
  DROP TABLE "_glossary_v_blocks_cta_links" CASCADE;
  DROP TABLE "_glossary_v_blocks_cta" CASCADE;
  DROP TABLE "_glossary_v_blocks_dynamic_field" CASCADE;
  DROP TABLE "_glossary_v_blocks_reusable_section" CASCADE;
  DROP TABLE "people_blocks_hero_links" CASCADE;
  DROP TABLE "people_blocks_hero" CASCADE;
  DROP TABLE "people_blocks_rich_text" CASCADE;
  DROP TABLE "people_blocks_media_text_links" CASCADE;
  DROP TABLE "people_blocks_media_text" CASCADE;
  DROP TABLE "people_blocks_cards_items" CASCADE;
  DROP TABLE "people_blocks_cards" CASCADE;
  DROP TABLE "people_blocks_col_text" CASCADE;
  DROP TABLE "people_blocks_col_image" CASCADE;
  DROP TABLE "people_blocks_col_buttons_links" CASCADE;
  DROP TABLE "people_blocks_col_buttons" CASCADE;
  DROP TABLE "people_blocks_columns_columns" CASCADE;
  DROP TABLE "people_blocks_columns" CASCADE;
  DROP TABLE "people_blocks_tabs_tabs" CASCADE;
  DROP TABLE "people_blocks_tabs" CASCADE;
  DROP TABLE "people_blocks_stats_items" CASCADE;
  DROP TABLE "people_blocks_stats" CASCADE;
  DROP TABLE "people_blocks_logos_logos" CASCADE;
  DROP TABLE "people_blocks_logos" CASCADE;
  DROP TABLE "people_blocks_testimonials_items" CASCADE;
  DROP TABLE "people_blocks_testimonials" CASCADE;
  DROP TABLE "people_blocks_faq_items" CASCADE;
  DROP TABLE "people_blocks_faq" CASCADE;
  DROP TABLE "people_blocks_cta_links" CASCADE;
  DROP TABLE "people_blocks_cta" CASCADE;
  DROP TABLE "people_blocks_dynamic_field" CASCADE;
  DROP TABLE "people_blocks_reusable_section" CASCADE;
  DROP TABLE "people_rels" CASCADE;
  DROP TABLE "_people_v_blocks_hero_links" CASCADE;
  DROP TABLE "_people_v_blocks_hero" CASCADE;
  DROP TABLE "_people_v_blocks_rich_text" CASCADE;
  DROP TABLE "_people_v_blocks_media_text_links" CASCADE;
  DROP TABLE "_people_v_blocks_media_text" CASCADE;
  DROP TABLE "_people_v_blocks_cards_items" CASCADE;
  DROP TABLE "_people_v_blocks_cards" CASCADE;
  DROP TABLE "_people_v_blocks_col_text" CASCADE;
  DROP TABLE "_people_v_blocks_col_image" CASCADE;
  DROP TABLE "_people_v_blocks_col_buttons_links" CASCADE;
  DROP TABLE "_people_v_blocks_col_buttons" CASCADE;
  DROP TABLE "_people_v_blocks_columns_columns" CASCADE;
  DROP TABLE "_people_v_blocks_columns" CASCADE;
  DROP TABLE "_people_v_blocks_tabs_tabs" CASCADE;
  DROP TABLE "_people_v_blocks_tabs" CASCADE;
  DROP TABLE "_people_v_blocks_stats_items" CASCADE;
  DROP TABLE "_people_v_blocks_stats" CASCADE;
  DROP TABLE "_people_v_blocks_logos_logos" CASCADE;
  DROP TABLE "_people_v_blocks_logos" CASCADE;
  DROP TABLE "_people_v_blocks_testimonials_items" CASCADE;
  DROP TABLE "_people_v_blocks_testimonials" CASCADE;
  DROP TABLE "_people_v_blocks_faq_items" CASCADE;
  DROP TABLE "_people_v_blocks_faq" CASCADE;
  DROP TABLE "_people_v_blocks_cta_links" CASCADE;
  DROP TABLE "_people_v_blocks_cta" CASCADE;
  DROP TABLE "_people_v_blocks_dynamic_field" CASCADE;
  DROP TABLE "_people_v_blocks_reusable_section" CASCADE;
  DROP TABLE "_people_v_rels" CASCADE;
  DROP TABLE "reusable_blocks_hero_links" CASCADE;
  DROP TABLE "reusable_blocks_hero" CASCADE;
  DROP TABLE "reusable_blocks_rich_text" CASCADE;
  DROP TABLE "reusable_blocks_media_text_links" CASCADE;
  DROP TABLE "reusable_blocks_media_text" CASCADE;
  DROP TABLE "reusable_blocks_cards_items" CASCADE;
  DROP TABLE "reusable_blocks_cards" CASCADE;
  DROP TABLE "reusable_blocks_col_text" CASCADE;
  DROP TABLE "reusable_blocks_col_image" CASCADE;
  DROP TABLE "reusable_blocks_col_buttons_links" CASCADE;
  DROP TABLE "reusable_blocks_col_buttons" CASCADE;
  DROP TABLE "reusable_blocks_columns_columns" CASCADE;
  DROP TABLE "reusable_blocks_columns" CASCADE;
  DROP TABLE "reusable_blocks_tabs_tabs" CASCADE;
  DROP TABLE "reusable_blocks_tabs" CASCADE;
  DROP TABLE "reusable_blocks_stats_items" CASCADE;
  DROP TABLE "reusable_blocks_stats" CASCADE;
  DROP TABLE "reusable_blocks_logos_logos" CASCADE;
  DROP TABLE "reusable_blocks_logos" CASCADE;
  DROP TABLE "reusable_blocks_testimonials_items" CASCADE;
  DROP TABLE "reusable_blocks_testimonials" CASCADE;
  DROP TABLE "reusable_blocks_faq_items" CASCADE;
  DROP TABLE "reusable_blocks_faq" CASCADE;
  DROP TABLE "reusable_blocks_cta_links" CASCADE;
  DROP TABLE "reusable_blocks_cta" CASCADE;
  DROP TABLE "reusable_blocks_dynamic_field" CASCADE;
  DROP TABLE "reusable" CASCADE;
  DROP TABLE "reusable_locales" CASCADE;
  DROP TABLE "reusable_rels" CASCADE;
  DROP TABLE "_reusable_v_blocks_hero_links" CASCADE;
  DROP TABLE "_reusable_v_blocks_hero" CASCADE;
  DROP TABLE "_reusable_v_blocks_rich_text" CASCADE;
  DROP TABLE "_reusable_v_blocks_media_text_links" CASCADE;
  DROP TABLE "_reusable_v_blocks_media_text" CASCADE;
  DROP TABLE "_reusable_v_blocks_cards_items" CASCADE;
  DROP TABLE "_reusable_v_blocks_cards" CASCADE;
  DROP TABLE "_reusable_v_blocks_col_text" CASCADE;
  DROP TABLE "_reusable_v_blocks_col_image" CASCADE;
  DROP TABLE "_reusable_v_blocks_col_buttons_links" CASCADE;
  DROP TABLE "_reusable_v_blocks_col_buttons" CASCADE;
  DROP TABLE "_reusable_v_blocks_columns_columns" CASCADE;
  DROP TABLE "_reusable_v_blocks_columns" CASCADE;
  DROP TABLE "_reusable_v_blocks_tabs_tabs" CASCADE;
  DROP TABLE "_reusable_v_blocks_tabs" CASCADE;
  DROP TABLE "_reusable_v_blocks_stats_items" CASCADE;
  DROP TABLE "_reusable_v_blocks_stats" CASCADE;
  DROP TABLE "_reusable_v_blocks_logos_logos" CASCADE;
  DROP TABLE "_reusable_v_blocks_logos" CASCADE;
  DROP TABLE "_reusable_v_blocks_testimonials_items" CASCADE;
  DROP TABLE "_reusable_v_blocks_testimonials" CASCADE;
  DROP TABLE "_reusable_v_blocks_faq_items" CASCADE;
  DROP TABLE "_reusable_v_blocks_faq" CASCADE;
  DROP TABLE "_reusable_v_blocks_cta_links" CASCADE;
  DROP TABLE "_reusable_v_blocks_cta" CASCADE;
  DROP TABLE "_reusable_v_blocks_dynamic_field" CASCADE;
  DROP TABLE "_reusable_v" CASCADE;
  DROP TABLE "_reusable_v_locales" CASCADE;
  DROP TABLE "_reusable_v_rels" CASCADE;
  DROP TABLE "cpt_defaults_blocks_hero_links" CASCADE;
  DROP TABLE "cpt_defaults_blocks_hero" CASCADE;
  DROP TABLE "cpt_defaults_blocks_rich_text" CASCADE;
  DROP TABLE "cpt_defaults_blocks_media_text_links" CASCADE;
  DROP TABLE "cpt_defaults_blocks_media_text" CASCADE;
  DROP TABLE "cpt_defaults_blocks_cards_items" CASCADE;
  DROP TABLE "cpt_defaults_blocks_cards" CASCADE;
  DROP TABLE "cpt_defaults_blocks_col_text" CASCADE;
  DROP TABLE "cpt_defaults_blocks_col_image" CASCADE;
  DROP TABLE "cpt_defaults_blocks_col_buttons_links" CASCADE;
  DROP TABLE "cpt_defaults_blocks_col_buttons" CASCADE;
  DROP TABLE "cpt_defaults_blocks_columns_columns" CASCADE;
  DROP TABLE "cpt_defaults_blocks_columns" CASCADE;
  DROP TABLE "cpt_defaults_blocks_tabs_tabs" CASCADE;
  DROP TABLE "cpt_defaults_blocks_tabs" CASCADE;
  DROP TABLE "cpt_defaults_blocks_stats_items" CASCADE;
  DROP TABLE "cpt_defaults_blocks_stats" CASCADE;
  DROP TABLE "cpt_defaults_blocks_logos_logos" CASCADE;
  DROP TABLE "cpt_defaults_blocks_logos" CASCADE;
  DROP TABLE "cpt_defaults_blocks_testimonials_items" CASCADE;
  DROP TABLE "cpt_defaults_blocks_testimonials" CASCADE;
  DROP TABLE "cpt_defaults_blocks_faq_items" CASCADE;
  DROP TABLE "cpt_defaults_blocks_faq" CASCADE;
  DROP TABLE "cpt_defaults_blocks_cta_links" CASCADE;
  DROP TABLE "cpt_defaults_blocks_cta" CASCADE;
  DROP TABLE "cpt_defaults_blocks_dynamic_field" CASCADE;
  DROP TABLE "cpt_defaults_blocks_reusable_section" CASCADE;
  DROP TABLE "cpt_defaults" CASCADE;
  DROP TABLE "cpt_defaults_rels" CASCADE;
  ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_pages_fk";
  
  ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_posts_fk";
  
  ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_events_fk";
  
  ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_resources_fk";
  
  ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_glossary_fk";
  
  ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_people_fk";
  
  ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_pages_fk";
  
  ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_posts_fk";
  
  ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_events_fk";
  
  ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_resources_fk";
  
  ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_glossary_fk";
  
  ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_people_fk";
  
  ALTER TABLE "events_rels" DROP CONSTRAINT "events_rels_pages_fk";
  
  ALTER TABLE "events_rels" DROP CONSTRAINT "events_rels_posts_fk";
  
  ALTER TABLE "events_rels" DROP CONSTRAINT "events_rels_events_fk";
  
  ALTER TABLE "events_rels" DROP CONSTRAINT "events_rels_resources_fk";
  
  ALTER TABLE "events_rels" DROP CONSTRAINT "events_rels_glossary_fk";
  
  ALTER TABLE "_events_v_rels" DROP CONSTRAINT "_events_v_rels_pages_fk";
  
  ALTER TABLE "_events_v_rels" DROP CONSTRAINT "_events_v_rels_posts_fk";
  
  ALTER TABLE "_events_v_rels" DROP CONSTRAINT "_events_v_rels_events_fk";
  
  ALTER TABLE "_events_v_rels" DROP CONSTRAINT "_events_v_rels_resources_fk";
  
  ALTER TABLE "_events_v_rels" DROP CONSTRAINT "_events_v_rels_glossary_fk";
  
  ALTER TABLE "resources_rels" DROP CONSTRAINT "resources_rels_pages_fk";
  
  ALTER TABLE "resources_rels" DROP CONSTRAINT "resources_rels_posts_fk";
  
  ALTER TABLE "resources_rels" DROP CONSTRAINT "resources_rels_events_fk";
  
  ALTER TABLE "resources_rels" DROP CONSTRAINT "resources_rels_glossary_fk";
  
  ALTER TABLE "resources_rels" DROP CONSTRAINT "resources_rels_people_fk";
  
  ALTER TABLE "_resources_v_rels" DROP CONSTRAINT "_resources_v_rels_pages_fk";
  
  ALTER TABLE "_resources_v_rels" DROP CONSTRAINT "_resources_v_rels_posts_fk";
  
  ALTER TABLE "_resources_v_rels" DROP CONSTRAINT "_resources_v_rels_events_fk";
  
  ALTER TABLE "_resources_v_rels" DROP CONSTRAINT "_resources_v_rels_glossary_fk";
  
  ALTER TABLE "_resources_v_rels" DROP CONSTRAINT "_resources_v_rels_people_fk";
  
  ALTER TABLE "glossary_rels" DROP CONSTRAINT "glossary_rels_pages_fk";
  
  ALTER TABLE "glossary_rels" DROP CONSTRAINT "glossary_rels_posts_fk";
  
  ALTER TABLE "glossary_rels" DROP CONSTRAINT "glossary_rels_events_fk";
  
  ALTER TABLE "glossary_rels" DROP CONSTRAINT "glossary_rels_resources_fk";
  
  ALTER TABLE "glossary_rels" DROP CONSTRAINT "glossary_rels_people_fk";
  
  ALTER TABLE "_glossary_v_rels" DROP CONSTRAINT "_glossary_v_rels_pages_fk";
  
  ALTER TABLE "_glossary_v_rels" DROP CONSTRAINT "_glossary_v_rels_posts_fk";
  
  ALTER TABLE "_glossary_v_rels" DROP CONSTRAINT "_glossary_v_rels_events_fk";
  
  ALTER TABLE "_glossary_v_rels" DROP CONSTRAINT "_glossary_v_rels_resources_fk";
  
  ALTER TABLE "_glossary_v_rels" DROP CONSTRAINT "_glossary_v_rels_people_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_reusable_sections_fk";
  
  DROP INDEX "posts_rels_locale_idx";
  DROP INDEX "posts_rels_pages_id_idx";
  DROP INDEX "posts_rels_posts_id_idx";
  DROP INDEX "posts_rels_events_id_idx";
  DROP INDEX "posts_rels_resources_id_idx";
  DROP INDEX "posts_rels_glossary_id_idx";
  DROP INDEX "posts_rels_people_id_idx";
  DROP INDEX "_posts_v_rels_locale_idx";
  DROP INDEX "_posts_v_rels_pages_id_idx";
  DROP INDEX "_posts_v_rels_posts_id_idx";
  DROP INDEX "_posts_v_rels_events_id_idx";
  DROP INDEX "_posts_v_rels_resources_id_idx";
  DROP INDEX "_posts_v_rels_glossary_id_idx";
  DROP INDEX "_posts_v_rels_people_id_idx";
  DROP INDEX "events_rels_locale_idx";
  DROP INDEX "events_rels_pages_id_idx";
  DROP INDEX "events_rels_posts_id_idx";
  DROP INDEX "events_rels_events_id_idx";
  DROP INDEX "events_rels_resources_id_idx";
  DROP INDEX "events_rels_glossary_id_idx";
  DROP INDEX "_events_v_rels_locale_idx";
  DROP INDEX "_events_v_rels_pages_id_idx";
  DROP INDEX "_events_v_rels_posts_id_idx";
  DROP INDEX "_events_v_rels_events_id_idx";
  DROP INDEX "_events_v_rels_resources_id_idx";
  DROP INDEX "_events_v_rels_glossary_id_idx";
  DROP INDEX "resources_rels_locale_idx";
  DROP INDEX "resources_rels_pages_id_idx";
  DROP INDEX "resources_rels_posts_id_idx";
  DROP INDEX "resources_rels_events_id_idx";
  DROP INDEX "resources_rels_glossary_id_idx";
  DROP INDEX "resources_rels_people_id_idx";
  DROP INDEX "_resources_v_rels_locale_idx";
  DROP INDEX "_resources_v_rels_pages_id_idx";
  DROP INDEX "_resources_v_rels_posts_id_idx";
  DROP INDEX "_resources_v_rels_events_id_idx";
  DROP INDEX "_resources_v_rels_glossary_id_idx";
  DROP INDEX "_resources_v_rels_people_id_idx";
  DROP INDEX "glossary_rels_locale_idx";
  DROP INDEX "glossary_rels_pages_id_idx";
  DROP INDEX "glossary_rels_posts_id_idx";
  DROP INDEX "glossary_rels_events_id_idx";
  DROP INDEX "glossary_rels_resources_id_idx";
  DROP INDEX "glossary_rels_people_id_idx";
  DROP INDEX "_glossary_v_rels_locale_idx";
  DROP INDEX "_glossary_v_rels_pages_id_idx";
  DROP INDEX "_glossary_v_rels_posts_id_idx";
  DROP INDEX "_glossary_v_rels_events_id_idx";
  DROP INDEX "_glossary_v_rels_resources_id_idx";
  DROP INDEX "_glossary_v_rels_people_id_idx";
  DROP INDEX "payload_locked_documents_rels_reusable_id_idx";
  DROP INDEX "posts_rels_categories_id_idx";
  DROP INDEX "posts_rels_tags_id_idx";
  DROP INDEX "_posts_v_rels_categories_id_idx";
  DROP INDEX "_posts_v_rels_tags_id_idx";
  DROP INDEX "events_rels_people_id_idx";
  DROP INDEX "events_rels_event_types_id_idx";
  DROP INDEX "_events_v_rels_people_id_idx";
  DROP INDEX "_events_v_rels_event_types_id_idx";
  DROP INDEX "resources_rels_resources_id_idx";
  DROP INDEX "resources_rels_industries_id_idx";
  DROP INDEX "resources_rels_topics_id_idx";
  DROP INDEX "_resources_v_rels_resources_id_idx";
  DROP INDEX "_resources_v_rels_industries_id_idx";
  DROP INDEX "_resources_v_rels_topics_id_idx";
  DROP INDEX "glossary_rels_glossary_id_idx";
  DROP INDEX "_glossary_v_rels_glossary_id_idx";
  CREATE INDEX "posts_rels_categories_id_idx" ON "posts_rels" USING btree ("categories_id");
  CREATE INDEX "posts_rels_tags_id_idx" ON "posts_rels" USING btree ("tags_id");
  CREATE INDEX "_posts_v_rels_categories_id_idx" ON "_posts_v_rels" USING btree ("categories_id");
  CREATE INDEX "_posts_v_rels_tags_id_idx" ON "_posts_v_rels" USING btree ("tags_id");
  CREATE INDEX "events_rels_people_id_idx" ON "events_rels" USING btree ("people_id");
  CREATE INDEX "events_rels_event_types_id_idx" ON "events_rels" USING btree ("event_types_id");
  CREATE INDEX "_events_v_rels_people_id_idx" ON "_events_v_rels" USING btree ("people_id");
  CREATE INDEX "_events_v_rels_event_types_id_idx" ON "_events_v_rels" USING btree ("event_types_id");
  CREATE INDEX "resources_rels_resources_id_idx" ON "resources_rels" USING btree ("resources_id");
  CREATE INDEX "resources_rels_industries_id_idx" ON "resources_rels" USING btree ("industries_id");
  CREATE INDEX "resources_rels_topics_id_idx" ON "resources_rels" USING btree ("topics_id");
  CREATE INDEX "_resources_v_rels_resources_id_idx" ON "_resources_v_rels" USING btree ("resources_id");
  CREATE INDEX "_resources_v_rels_industries_id_idx" ON "_resources_v_rels" USING btree ("industries_id");
  CREATE INDEX "_resources_v_rels_topics_id_idx" ON "_resources_v_rels" USING btree ("topics_id");
  CREATE INDEX "glossary_rels_glossary_id_idx" ON "glossary_rels" USING btree ("glossary_id");
  CREATE INDEX "_glossary_v_rels_glossary_id_idx" ON "_glossary_v_rels" USING btree ("glossary_id");
  ALTER TABLE "pages" DROP COLUMN "template";
  ALTER TABLE "_pages_v" DROP COLUMN "version_template";
  ALTER TABLE "posts_rels" DROP COLUMN "locale";
  ALTER TABLE "posts_rels" DROP COLUMN "pages_id";
  ALTER TABLE "posts_rels" DROP COLUMN "posts_id";
  ALTER TABLE "posts_rels" DROP COLUMN "events_id";
  ALTER TABLE "posts_rels" DROP COLUMN "resources_id";
  ALTER TABLE "posts_rels" DROP COLUMN "glossary_id";
  ALTER TABLE "posts_rels" DROP COLUMN "people_id";
  ALTER TABLE "_posts_v_rels" DROP COLUMN "locale";
  ALTER TABLE "_posts_v_rels" DROP COLUMN "pages_id";
  ALTER TABLE "_posts_v_rels" DROP COLUMN "posts_id";
  ALTER TABLE "_posts_v_rels" DROP COLUMN "events_id";
  ALTER TABLE "_posts_v_rels" DROP COLUMN "resources_id";
  ALTER TABLE "_posts_v_rels" DROP COLUMN "glossary_id";
  ALTER TABLE "_posts_v_rels" DROP COLUMN "people_id";
  ALTER TABLE "events_rels" DROP COLUMN "locale";
  ALTER TABLE "events_rels" DROP COLUMN "pages_id";
  ALTER TABLE "events_rels" DROP COLUMN "posts_id";
  ALTER TABLE "events_rels" DROP COLUMN "events_id";
  ALTER TABLE "events_rels" DROP COLUMN "resources_id";
  ALTER TABLE "events_rels" DROP COLUMN "glossary_id";
  ALTER TABLE "_events_v_rels" DROP COLUMN "locale";
  ALTER TABLE "_events_v_rels" DROP COLUMN "pages_id";
  ALTER TABLE "_events_v_rels" DROP COLUMN "posts_id";
  ALTER TABLE "_events_v_rels" DROP COLUMN "events_id";
  ALTER TABLE "_events_v_rels" DROP COLUMN "resources_id";
  ALTER TABLE "_events_v_rels" DROP COLUMN "glossary_id";
  ALTER TABLE "resources_rels" DROP COLUMN "locale";
  ALTER TABLE "resources_rels" DROP COLUMN "pages_id";
  ALTER TABLE "resources_rels" DROP COLUMN "posts_id";
  ALTER TABLE "resources_rels" DROP COLUMN "events_id";
  ALTER TABLE "resources_rels" DROP COLUMN "glossary_id";
  ALTER TABLE "resources_rels" DROP COLUMN "people_id";
  ALTER TABLE "_resources_v_rels" DROP COLUMN "locale";
  ALTER TABLE "_resources_v_rels" DROP COLUMN "pages_id";
  ALTER TABLE "_resources_v_rels" DROP COLUMN "posts_id";
  ALTER TABLE "_resources_v_rels" DROP COLUMN "events_id";
  ALTER TABLE "_resources_v_rels" DROP COLUMN "glossary_id";
  ALTER TABLE "_resources_v_rels" DROP COLUMN "people_id";
  ALTER TABLE "glossary_rels" DROP COLUMN "locale";
  ALTER TABLE "glossary_rels" DROP COLUMN "pages_id";
  ALTER TABLE "glossary_rels" DROP COLUMN "posts_id";
  ALTER TABLE "glossary_rels" DROP COLUMN "events_id";
  ALTER TABLE "glossary_rels" DROP COLUMN "resources_id";
  ALTER TABLE "glossary_rels" DROP COLUMN "people_id";
  ALTER TABLE "_glossary_v_rels" DROP COLUMN "locale";
  ALTER TABLE "_glossary_v_rels" DROP COLUMN "pages_id";
  ALTER TABLE "_glossary_v_rels" DROP COLUMN "posts_id";
  ALTER TABLE "_glossary_v_rels" DROP COLUMN "events_id";
  ALTER TABLE "_glossary_v_rels" DROP COLUMN "resources_id";
  ALTER TABLE "_glossary_v_rels" DROP COLUMN "people_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "reusable_id";
  DROP TYPE "public"."enum_pages_blocks_hero_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_hero_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_hero_variant";
  DROP TYPE "public"."enum_pages_blocks_hero_style_background";
  DROP TYPE "public"."enum_pages_blocks_hero_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_hero_style_align";
  DROP TYPE "public"."enum_pages_blocks_rich_text_width";
  DROP TYPE "public"."enum_pages_blocks_rich_text_style_background";
  DROP TYPE "public"."enum_pages_blocks_rich_text_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_rich_text_style_align";
  DROP TYPE "public"."enum_pages_blocks_media_text_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_media_text_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_media_text_image_position";
  DROP TYPE "public"."enum_pages_blocks_media_text_style_background";
  DROP TYPE "public"."enum_pages_blocks_media_text_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_media_text_style_align";
  DROP TYPE "public"."enum_pages_blocks_cards_items_link_type";
  DROP TYPE "public"."enum_pages_blocks_cards_columns";
  DROP TYPE "public"."enum_pages_blocks_cards_card_style";
  DROP TYPE "public"."enum_pages_blocks_cards_style_background";
  DROP TYPE "public"."enum_pages_blocks_cards_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_cards_style_align";
  DROP TYPE "public"."enum_pages_blocks_col_buttons_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_col_buttons_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_columns_style_background";
  DROP TYPE "public"."enum_pages_blocks_columns_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_columns_style_align";
  DROP TYPE "public"."enum_pages_blocks_tabs_style_background";
  DROP TYPE "public"."enum_pages_blocks_tabs_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_tabs_style_align";
  DROP TYPE "public"."enum_pages_blocks_stats_style_background";
  DROP TYPE "public"."enum_pages_blocks_stats_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_stats_style_align";
  DROP TYPE "public"."enum_pages_blocks_logos_style_background";
  DROP TYPE "public"."enum_pages_blocks_logos_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_logos_style_align";
  DROP TYPE "public"."enum_pages_blocks_testimonials_style_background";
  DROP TYPE "public"."enum_pages_blocks_testimonials_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_testimonials_style_align";
  DROP TYPE "public"."enum_pages_blocks_faq_style_background";
  DROP TYPE "public"."enum_pages_blocks_faq_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_faq_style_align";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta_style_background";
  DROP TYPE "public"."enum_pages_blocks_cta_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_cta_style_align";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_field";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_format";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum_pages_template";
  DROP TYPE "public"."enum__pages_v_blocks_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_hero_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_hero_variant";
  DROP TYPE "public"."enum__pages_v_blocks_hero_style_background";
  DROP TYPE "public"."enum__pages_v_blocks_hero_style_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_hero_style_align";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_width";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_style_background";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_style_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_style_align";
  DROP TYPE "public"."enum__pages_v_blocks_media_text_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_media_text_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_media_text_image_position";
  DROP TYPE "public"."enum__pages_v_blocks_media_text_style_background";
  DROP TYPE "public"."enum__pages_v_blocks_media_text_style_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_media_text_style_align";
  DROP TYPE "public"."enum__pages_v_blocks_cards_items_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cards_columns";
  DROP TYPE "public"."enum__pages_v_blocks_cards_card_style";
  DROP TYPE "public"."enum__pages_v_blocks_cards_style_background";
  DROP TYPE "public"."enum__pages_v_blocks_cards_style_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_cards_style_align";
  DROP TYPE "public"."enum__pages_v_blocks_col_buttons_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_col_buttons_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_columns_style_background";
  DROP TYPE "public"."enum__pages_v_blocks_columns_style_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_columns_style_align";
  DROP TYPE "public"."enum__pages_v_blocks_tabs_style_background";
  DROP TYPE "public"."enum__pages_v_blocks_tabs_style_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_tabs_style_align";
  DROP TYPE "public"."enum__pages_v_blocks_stats_style_background";
  DROP TYPE "public"."enum__pages_v_blocks_stats_style_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_stats_style_align";
  DROP TYPE "public"."enum__pages_v_blocks_logos_style_background";
  DROP TYPE "public"."enum__pages_v_blocks_logos_style_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_logos_style_align";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_style_background";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_style_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_style_align";
  DROP TYPE "public"."enum__pages_v_blocks_faq_style_background";
  DROP TYPE "public"."enum__pages_v_blocks_faq_style_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_faq_style_align";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta_style_background";
  DROP TYPE "public"."enum__pages_v_blocks_cta_style_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_cta_style_align";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_field";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_format";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum__pages_v_version_template";
  DROP TYPE "public"."enum_posts_blocks_hero_links_link_type";
  DROP TYPE "public"."enum_posts_blocks_hero_links_link_appearance";
  DROP TYPE "public"."enum_posts_blocks_hero_variant";
  DROP TYPE "public"."enum_posts_blocks_hero_style_background";
  DROP TYPE "public"."enum_posts_blocks_hero_style_spacing";
  DROP TYPE "public"."enum_posts_blocks_hero_style_align";
  DROP TYPE "public"."enum_posts_blocks_rich_text_width";
  DROP TYPE "public"."enum_posts_blocks_rich_text_style_background";
  DROP TYPE "public"."enum_posts_blocks_rich_text_style_spacing";
  DROP TYPE "public"."enum_posts_blocks_rich_text_style_align";
  DROP TYPE "public"."enum_posts_blocks_media_text_links_link_type";
  DROP TYPE "public"."enum_posts_blocks_media_text_links_link_appearance";
  DROP TYPE "public"."enum_posts_blocks_media_text_image_position";
  DROP TYPE "public"."enum_posts_blocks_media_text_style_background";
  DROP TYPE "public"."enum_posts_blocks_media_text_style_spacing";
  DROP TYPE "public"."enum_posts_blocks_media_text_style_align";
  DROP TYPE "public"."enum_posts_blocks_cards_items_link_type";
  DROP TYPE "public"."enum_posts_blocks_cards_columns";
  DROP TYPE "public"."enum_posts_blocks_cards_card_style";
  DROP TYPE "public"."enum_posts_blocks_cards_style_background";
  DROP TYPE "public"."enum_posts_blocks_cards_style_spacing";
  DROP TYPE "public"."enum_posts_blocks_cards_style_align";
  DROP TYPE "public"."enum_posts_blocks_col_buttons_links_link_type";
  DROP TYPE "public"."enum_posts_blocks_col_buttons_links_link_appearance";
  DROP TYPE "public"."enum_posts_blocks_columns_style_background";
  DROP TYPE "public"."enum_posts_blocks_columns_style_spacing";
  DROP TYPE "public"."enum_posts_blocks_columns_style_align";
  DROP TYPE "public"."enum_posts_blocks_tabs_style_background";
  DROP TYPE "public"."enum_posts_blocks_tabs_style_spacing";
  DROP TYPE "public"."enum_posts_blocks_tabs_style_align";
  DROP TYPE "public"."enum_posts_blocks_stats_style_background";
  DROP TYPE "public"."enum_posts_blocks_stats_style_spacing";
  DROP TYPE "public"."enum_posts_blocks_stats_style_align";
  DROP TYPE "public"."enum_posts_blocks_logos_style_background";
  DROP TYPE "public"."enum_posts_blocks_logos_style_spacing";
  DROP TYPE "public"."enum_posts_blocks_logos_style_align";
  DROP TYPE "public"."enum_posts_blocks_testimonials_style_background";
  DROP TYPE "public"."enum_posts_blocks_testimonials_style_spacing";
  DROP TYPE "public"."enum_posts_blocks_testimonials_style_align";
  DROP TYPE "public"."enum_posts_blocks_faq_style_background";
  DROP TYPE "public"."enum_posts_blocks_faq_style_spacing";
  DROP TYPE "public"."enum_posts_blocks_faq_style_align";
  DROP TYPE "public"."enum_posts_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_posts_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_posts_blocks_cta_style_background";
  DROP TYPE "public"."enum_posts_blocks_cta_style_spacing";
  DROP TYPE "public"."enum_posts_blocks_cta_style_align";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_field";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_format";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum_posts_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum__posts_v_blocks_hero_links_link_type";
  DROP TYPE "public"."enum__posts_v_blocks_hero_links_link_appearance";
  DROP TYPE "public"."enum__posts_v_blocks_hero_variant";
  DROP TYPE "public"."enum__posts_v_blocks_hero_style_background";
  DROP TYPE "public"."enum__posts_v_blocks_hero_style_spacing";
  DROP TYPE "public"."enum__posts_v_blocks_hero_style_align";
  DROP TYPE "public"."enum__posts_v_blocks_rich_text_width";
  DROP TYPE "public"."enum__posts_v_blocks_rich_text_style_background";
  DROP TYPE "public"."enum__posts_v_blocks_rich_text_style_spacing";
  DROP TYPE "public"."enum__posts_v_blocks_rich_text_style_align";
  DROP TYPE "public"."enum__posts_v_blocks_media_text_links_link_type";
  DROP TYPE "public"."enum__posts_v_blocks_media_text_links_link_appearance";
  DROP TYPE "public"."enum__posts_v_blocks_media_text_image_position";
  DROP TYPE "public"."enum__posts_v_blocks_media_text_style_background";
  DROP TYPE "public"."enum__posts_v_blocks_media_text_style_spacing";
  DROP TYPE "public"."enum__posts_v_blocks_media_text_style_align";
  DROP TYPE "public"."enum__posts_v_blocks_cards_items_link_type";
  DROP TYPE "public"."enum__posts_v_blocks_cards_columns";
  DROP TYPE "public"."enum__posts_v_blocks_cards_card_style";
  DROP TYPE "public"."enum__posts_v_blocks_cards_style_background";
  DROP TYPE "public"."enum__posts_v_blocks_cards_style_spacing";
  DROP TYPE "public"."enum__posts_v_blocks_cards_style_align";
  DROP TYPE "public"."enum__posts_v_blocks_col_buttons_links_link_type";
  DROP TYPE "public"."enum__posts_v_blocks_col_buttons_links_link_appearance";
  DROP TYPE "public"."enum__posts_v_blocks_columns_style_background";
  DROP TYPE "public"."enum__posts_v_blocks_columns_style_spacing";
  DROP TYPE "public"."enum__posts_v_blocks_columns_style_align";
  DROP TYPE "public"."enum__posts_v_blocks_tabs_style_background";
  DROP TYPE "public"."enum__posts_v_blocks_tabs_style_spacing";
  DROP TYPE "public"."enum__posts_v_blocks_tabs_style_align";
  DROP TYPE "public"."enum__posts_v_blocks_stats_style_background";
  DROP TYPE "public"."enum__posts_v_blocks_stats_style_spacing";
  DROP TYPE "public"."enum__posts_v_blocks_stats_style_align";
  DROP TYPE "public"."enum__posts_v_blocks_logos_style_background";
  DROP TYPE "public"."enum__posts_v_blocks_logos_style_spacing";
  DROP TYPE "public"."enum__posts_v_blocks_logos_style_align";
  DROP TYPE "public"."enum__posts_v_blocks_testimonials_style_background";
  DROP TYPE "public"."enum__posts_v_blocks_testimonials_style_spacing";
  DROP TYPE "public"."enum__posts_v_blocks_testimonials_style_align";
  DROP TYPE "public"."enum__posts_v_blocks_faq_style_background";
  DROP TYPE "public"."enum__posts_v_blocks_faq_style_spacing";
  DROP TYPE "public"."enum__posts_v_blocks_faq_style_align";
  DROP TYPE "public"."enum__posts_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__posts_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__posts_v_blocks_cta_style_background";
  DROP TYPE "public"."enum__posts_v_blocks_cta_style_spacing";
  DROP TYPE "public"."enum__posts_v_blocks_cta_style_align";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_field";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_format";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum__posts_v_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum_events_blocks_hero_links_link_type";
  DROP TYPE "public"."enum_events_blocks_hero_links_link_appearance";
  DROP TYPE "public"."enum_events_blocks_hero_variant";
  DROP TYPE "public"."enum_events_blocks_hero_style_background";
  DROP TYPE "public"."enum_events_blocks_hero_style_spacing";
  DROP TYPE "public"."enum_events_blocks_hero_style_align";
  DROP TYPE "public"."enum_events_blocks_rich_text_width";
  DROP TYPE "public"."enum_events_blocks_rich_text_style_background";
  DROP TYPE "public"."enum_events_blocks_rich_text_style_spacing";
  DROP TYPE "public"."enum_events_blocks_rich_text_style_align";
  DROP TYPE "public"."enum_events_blocks_media_text_links_link_type";
  DROP TYPE "public"."enum_events_blocks_media_text_links_link_appearance";
  DROP TYPE "public"."enum_events_blocks_media_text_image_position";
  DROP TYPE "public"."enum_events_blocks_media_text_style_background";
  DROP TYPE "public"."enum_events_blocks_media_text_style_spacing";
  DROP TYPE "public"."enum_events_blocks_media_text_style_align";
  DROP TYPE "public"."enum_events_blocks_cards_items_link_type";
  DROP TYPE "public"."enum_events_blocks_cards_columns";
  DROP TYPE "public"."enum_events_blocks_cards_card_style";
  DROP TYPE "public"."enum_events_blocks_cards_style_background";
  DROP TYPE "public"."enum_events_blocks_cards_style_spacing";
  DROP TYPE "public"."enum_events_blocks_cards_style_align";
  DROP TYPE "public"."enum_events_blocks_col_buttons_links_link_type";
  DROP TYPE "public"."enum_events_blocks_col_buttons_links_link_appearance";
  DROP TYPE "public"."enum_events_blocks_columns_style_background";
  DROP TYPE "public"."enum_events_blocks_columns_style_spacing";
  DROP TYPE "public"."enum_events_blocks_columns_style_align";
  DROP TYPE "public"."enum_events_blocks_tabs_style_background";
  DROP TYPE "public"."enum_events_blocks_tabs_style_spacing";
  DROP TYPE "public"."enum_events_blocks_tabs_style_align";
  DROP TYPE "public"."enum_events_blocks_stats_style_background";
  DROP TYPE "public"."enum_events_blocks_stats_style_spacing";
  DROP TYPE "public"."enum_events_blocks_stats_style_align";
  DROP TYPE "public"."enum_events_blocks_logos_style_background";
  DROP TYPE "public"."enum_events_blocks_logos_style_spacing";
  DROP TYPE "public"."enum_events_blocks_logos_style_align";
  DROP TYPE "public"."enum_events_blocks_testimonials_style_background";
  DROP TYPE "public"."enum_events_blocks_testimonials_style_spacing";
  DROP TYPE "public"."enum_events_blocks_testimonials_style_align";
  DROP TYPE "public"."enum_events_blocks_faq_style_background";
  DROP TYPE "public"."enum_events_blocks_faq_style_spacing";
  DROP TYPE "public"."enum_events_blocks_faq_style_align";
  DROP TYPE "public"."enum_events_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_events_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_events_blocks_cta_style_background";
  DROP TYPE "public"."enum_events_blocks_cta_style_spacing";
  DROP TYPE "public"."enum_events_blocks_cta_style_align";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_field";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_format";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum_events_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum__events_v_blocks_hero_links_link_type";
  DROP TYPE "public"."enum__events_v_blocks_hero_links_link_appearance";
  DROP TYPE "public"."enum__events_v_blocks_hero_variant";
  DROP TYPE "public"."enum__events_v_blocks_hero_style_background";
  DROP TYPE "public"."enum__events_v_blocks_hero_style_spacing";
  DROP TYPE "public"."enum__events_v_blocks_hero_style_align";
  DROP TYPE "public"."enum__events_v_blocks_rich_text_width";
  DROP TYPE "public"."enum__events_v_blocks_rich_text_style_background";
  DROP TYPE "public"."enum__events_v_blocks_rich_text_style_spacing";
  DROP TYPE "public"."enum__events_v_blocks_rich_text_style_align";
  DROP TYPE "public"."enum__events_v_blocks_media_text_links_link_type";
  DROP TYPE "public"."enum__events_v_blocks_media_text_links_link_appearance";
  DROP TYPE "public"."enum__events_v_blocks_media_text_image_position";
  DROP TYPE "public"."enum__events_v_blocks_media_text_style_background";
  DROP TYPE "public"."enum__events_v_blocks_media_text_style_spacing";
  DROP TYPE "public"."enum__events_v_blocks_media_text_style_align";
  DROP TYPE "public"."enum__events_v_blocks_cards_items_link_type";
  DROP TYPE "public"."enum__events_v_blocks_cards_columns";
  DROP TYPE "public"."enum__events_v_blocks_cards_card_style";
  DROP TYPE "public"."enum__events_v_blocks_cards_style_background";
  DROP TYPE "public"."enum__events_v_blocks_cards_style_spacing";
  DROP TYPE "public"."enum__events_v_blocks_cards_style_align";
  DROP TYPE "public"."enum__events_v_blocks_col_buttons_links_link_type";
  DROP TYPE "public"."enum__events_v_blocks_col_buttons_links_link_appearance";
  DROP TYPE "public"."enum__events_v_blocks_columns_style_background";
  DROP TYPE "public"."enum__events_v_blocks_columns_style_spacing";
  DROP TYPE "public"."enum__events_v_blocks_columns_style_align";
  DROP TYPE "public"."enum__events_v_blocks_tabs_style_background";
  DROP TYPE "public"."enum__events_v_blocks_tabs_style_spacing";
  DROP TYPE "public"."enum__events_v_blocks_tabs_style_align";
  DROP TYPE "public"."enum__events_v_blocks_stats_style_background";
  DROP TYPE "public"."enum__events_v_blocks_stats_style_spacing";
  DROP TYPE "public"."enum__events_v_blocks_stats_style_align";
  DROP TYPE "public"."enum__events_v_blocks_logos_style_background";
  DROP TYPE "public"."enum__events_v_blocks_logos_style_spacing";
  DROP TYPE "public"."enum__events_v_blocks_logos_style_align";
  DROP TYPE "public"."enum__events_v_blocks_testimonials_style_background";
  DROP TYPE "public"."enum__events_v_blocks_testimonials_style_spacing";
  DROP TYPE "public"."enum__events_v_blocks_testimonials_style_align";
  DROP TYPE "public"."enum__events_v_blocks_faq_style_background";
  DROP TYPE "public"."enum__events_v_blocks_faq_style_spacing";
  DROP TYPE "public"."enum__events_v_blocks_faq_style_align";
  DROP TYPE "public"."enum__events_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__events_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__events_v_blocks_cta_style_background";
  DROP TYPE "public"."enum__events_v_blocks_cta_style_spacing";
  DROP TYPE "public"."enum__events_v_blocks_cta_style_align";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_field";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_format";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum__events_v_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum_resources_blocks_hero_links_link_type";
  DROP TYPE "public"."enum_resources_blocks_hero_links_link_appearance";
  DROP TYPE "public"."enum_resources_blocks_hero_variant";
  DROP TYPE "public"."enum_resources_blocks_hero_style_background";
  DROP TYPE "public"."enum_resources_blocks_hero_style_spacing";
  DROP TYPE "public"."enum_resources_blocks_hero_style_align";
  DROP TYPE "public"."enum_resources_blocks_rich_text_width";
  DROP TYPE "public"."enum_resources_blocks_rich_text_style_background";
  DROP TYPE "public"."enum_resources_blocks_rich_text_style_spacing";
  DROP TYPE "public"."enum_resources_blocks_rich_text_style_align";
  DROP TYPE "public"."enum_resources_blocks_media_text_links_link_type";
  DROP TYPE "public"."enum_resources_blocks_media_text_links_link_appearance";
  DROP TYPE "public"."enum_resources_blocks_media_text_image_position";
  DROP TYPE "public"."enum_resources_blocks_media_text_style_background";
  DROP TYPE "public"."enum_resources_blocks_media_text_style_spacing";
  DROP TYPE "public"."enum_resources_blocks_media_text_style_align";
  DROP TYPE "public"."enum_resources_blocks_cards_items_link_type";
  DROP TYPE "public"."enum_resources_blocks_cards_columns";
  DROP TYPE "public"."enum_resources_blocks_cards_card_style";
  DROP TYPE "public"."enum_resources_blocks_cards_style_background";
  DROP TYPE "public"."enum_resources_blocks_cards_style_spacing";
  DROP TYPE "public"."enum_resources_blocks_cards_style_align";
  DROP TYPE "public"."enum_resources_blocks_col_buttons_links_link_type";
  DROP TYPE "public"."enum_resources_blocks_col_buttons_links_link_appearance";
  DROP TYPE "public"."enum_resources_blocks_columns_style_background";
  DROP TYPE "public"."enum_resources_blocks_columns_style_spacing";
  DROP TYPE "public"."enum_resources_blocks_columns_style_align";
  DROP TYPE "public"."enum_resources_blocks_tabs_style_background";
  DROP TYPE "public"."enum_resources_blocks_tabs_style_spacing";
  DROP TYPE "public"."enum_resources_blocks_tabs_style_align";
  DROP TYPE "public"."enum_resources_blocks_stats_style_background";
  DROP TYPE "public"."enum_resources_blocks_stats_style_spacing";
  DROP TYPE "public"."enum_resources_blocks_stats_style_align";
  DROP TYPE "public"."enum_resources_blocks_logos_style_background";
  DROP TYPE "public"."enum_resources_blocks_logos_style_spacing";
  DROP TYPE "public"."enum_resources_blocks_logos_style_align";
  DROP TYPE "public"."enum_resources_blocks_testimonials_style_background";
  DROP TYPE "public"."enum_resources_blocks_testimonials_style_spacing";
  DROP TYPE "public"."enum_resources_blocks_testimonials_style_align";
  DROP TYPE "public"."enum_resources_blocks_faq_style_background";
  DROP TYPE "public"."enum_resources_blocks_faq_style_spacing";
  DROP TYPE "public"."enum_resources_blocks_faq_style_align";
  DROP TYPE "public"."enum_resources_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_resources_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_resources_blocks_cta_style_background";
  DROP TYPE "public"."enum_resources_blocks_cta_style_spacing";
  DROP TYPE "public"."enum_resources_blocks_cta_style_align";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_field";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_format";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum_resources_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum__resources_v_blocks_hero_links_link_type";
  DROP TYPE "public"."enum__resources_v_blocks_hero_links_link_appearance";
  DROP TYPE "public"."enum__resources_v_blocks_hero_variant";
  DROP TYPE "public"."enum__resources_v_blocks_hero_style_background";
  DROP TYPE "public"."enum__resources_v_blocks_hero_style_spacing";
  DROP TYPE "public"."enum__resources_v_blocks_hero_style_align";
  DROP TYPE "public"."enum__resources_v_blocks_rich_text_width";
  DROP TYPE "public"."enum__resources_v_blocks_rich_text_style_background";
  DROP TYPE "public"."enum__resources_v_blocks_rich_text_style_spacing";
  DROP TYPE "public"."enum__resources_v_blocks_rich_text_style_align";
  DROP TYPE "public"."enum__resources_v_blocks_media_text_links_link_type";
  DROP TYPE "public"."enum__resources_v_blocks_media_text_links_link_appearance";
  DROP TYPE "public"."enum__resources_v_blocks_media_text_image_position";
  DROP TYPE "public"."enum__resources_v_blocks_media_text_style_background";
  DROP TYPE "public"."enum__resources_v_blocks_media_text_style_spacing";
  DROP TYPE "public"."enum__resources_v_blocks_media_text_style_align";
  DROP TYPE "public"."enum__resources_v_blocks_cards_items_link_type";
  DROP TYPE "public"."enum__resources_v_blocks_cards_columns";
  DROP TYPE "public"."enum__resources_v_blocks_cards_card_style";
  DROP TYPE "public"."enum__resources_v_blocks_cards_style_background";
  DROP TYPE "public"."enum__resources_v_blocks_cards_style_spacing";
  DROP TYPE "public"."enum__resources_v_blocks_cards_style_align";
  DROP TYPE "public"."enum__resources_v_blocks_col_buttons_links_link_type";
  DROP TYPE "public"."enum__resources_v_blocks_col_buttons_links_link_appearance";
  DROP TYPE "public"."enum__resources_v_blocks_columns_style_background";
  DROP TYPE "public"."enum__resources_v_blocks_columns_style_spacing";
  DROP TYPE "public"."enum__resources_v_blocks_columns_style_align";
  DROP TYPE "public"."enum__resources_v_blocks_tabs_style_background";
  DROP TYPE "public"."enum__resources_v_blocks_tabs_style_spacing";
  DROP TYPE "public"."enum__resources_v_blocks_tabs_style_align";
  DROP TYPE "public"."enum__resources_v_blocks_stats_style_background";
  DROP TYPE "public"."enum__resources_v_blocks_stats_style_spacing";
  DROP TYPE "public"."enum__resources_v_blocks_stats_style_align";
  DROP TYPE "public"."enum__resources_v_blocks_logos_style_background";
  DROP TYPE "public"."enum__resources_v_blocks_logos_style_spacing";
  DROP TYPE "public"."enum__resources_v_blocks_logos_style_align";
  DROP TYPE "public"."enum__resources_v_blocks_testimonials_style_background";
  DROP TYPE "public"."enum__resources_v_blocks_testimonials_style_spacing";
  DROP TYPE "public"."enum__resources_v_blocks_testimonials_style_align";
  DROP TYPE "public"."enum__resources_v_blocks_faq_style_background";
  DROP TYPE "public"."enum__resources_v_blocks_faq_style_spacing";
  DROP TYPE "public"."enum__resources_v_blocks_faq_style_align";
  DROP TYPE "public"."enum__resources_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__resources_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__resources_v_blocks_cta_style_background";
  DROP TYPE "public"."enum__resources_v_blocks_cta_style_spacing";
  DROP TYPE "public"."enum__resources_v_blocks_cta_style_align";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_field";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_format";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum__resources_v_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum_glossary_blocks_hero_links_link_type";
  DROP TYPE "public"."enum_glossary_blocks_hero_links_link_appearance";
  DROP TYPE "public"."enum_glossary_blocks_hero_variant";
  DROP TYPE "public"."enum_glossary_blocks_hero_style_background";
  DROP TYPE "public"."enum_glossary_blocks_hero_style_spacing";
  DROP TYPE "public"."enum_glossary_blocks_hero_style_align";
  DROP TYPE "public"."enum_glossary_blocks_rich_text_width";
  DROP TYPE "public"."enum_glossary_blocks_rich_text_style_background";
  DROP TYPE "public"."enum_glossary_blocks_rich_text_style_spacing";
  DROP TYPE "public"."enum_glossary_blocks_rich_text_style_align";
  DROP TYPE "public"."enum_glossary_blocks_media_text_links_link_type";
  DROP TYPE "public"."enum_glossary_blocks_media_text_links_link_appearance";
  DROP TYPE "public"."enum_glossary_blocks_media_text_image_position";
  DROP TYPE "public"."enum_glossary_blocks_media_text_style_background";
  DROP TYPE "public"."enum_glossary_blocks_media_text_style_spacing";
  DROP TYPE "public"."enum_glossary_blocks_media_text_style_align";
  DROP TYPE "public"."enum_glossary_blocks_cards_items_link_type";
  DROP TYPE "public"."enum_glossary_blocks_cards_columns";
  DROP TYPE "public"."enum_glossary_blocks_cards_card_style";
  DROP TYPE "public"."enum_glossary_blocks_cards_style_background";
  DROP TYPE "public"."enum_glossary_blocks_cards_style_spacing";
  DROP TYPE "public"."enum_glossary_blocks_cards_style_align";
  DROP TYPE "public"."enum_glossary_blocks_col_buttons_links_link_type";
  DROP TYPE "public"."enum_glossary_blocks_col_buttons_links_link_appearance";
  DROP TYPE "public"."enum_glossary_blocks_columns_style_background";
  DROP TYPE "public"."enum_glossary_blocks_columns_style_spacing";
  DROP TYPE "public"."enum_glossary_blocks_columns_style_align";
  DROP TYPE "public"."enum_glossary_blocks_tabs_style_background";
  DROP TYPE "public"."enum_glossary_blocks_tabs_style_spacing";
  DROP TYPE "public"."enum_glossary_blocks_tabs_style_align";
  DROP TYPE "public"."enum_glossary_blocks_stats_style_background";
  DROP TYPE "public"."enum_glossary_blocks_stats_style_spacing";
  DROP TYPE "public"."enum_glossary_blocks_stats_style_align";
  DROP TYPE "public"."enum_glossary_blocks_logos_style_background";
  DROP TYPE "public"."enum_glossary_blocks_logos_style_spacing";
  DROP TYPE "public"."enum_glossary_blocks_logos_style_align";
  DROP TYPE "public"."enum_glossary_blocks_testimonials_style_background";
  DROP TYPE "public"."enum_glossary_blocks_testimonials_style_spacing";
  DROP TYPE "public"."enum_glossary_blocks_testimonials_style_align";
  DROP TYPE "public"."enum_glossary_blocks_faq_style_background";
  DROP TYPE "public"."enum_glossary_blocks_faq_style_spacing";
  DROP TYPE "public"."enum_glossary_blocks_faq_style_align";
  DROP TYPE "public"."enum_glossary_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_glossary_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_glossary_blocks_cta_style_background";
  DROP TYPE "public"."enum_glossary_blocks_cta_style_spacing";
  DROP TYPE "public"."enum_glossary_blocks_cta_style_align";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_field";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_format";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum_glossary_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum__glossary_v_blocks_hero_links_link_type";
  DROP TYPE "public"."enum__glossary_v_blocks_hero_links_link_appearance";
  DROP TYPE "public"."enum__glossary_v_blocks_hero_variant";
  DROP TYPE "public"."enum__glossary_v_blocks_hero_style_background";
  DROP TYPE "public"."enum__glossary_v_blocks_hero_style_spacing";
  DROP TYPE "public"."enum__glossary_v_blocks_hero_style_align";
  DROP TYPE "public"."enum__glossary_v_blocks_rich_text_width";
  DROP TYPE "public"."enum__glossary_v_blocks_rich_text_style_background";
  DROP TYPE "public"."enum__glossary_v_blocks_rich_text_style_spacing";
  DROP TYPE "public"."enum__glossary_v_blocks_rich_text_style_align";
  DROP TYPE "public"."enum__glossary_v_blocks_media_text_links_link_type";
  DROP TYPE "public"."enum__glossary_v_blocks_media_text_links_link_appearance";
  DROP TYPE "public"."enum__glossary_v_blocks_media_text_image_position";
  DROP TYPE "public"."enum__glossary_v_blocks_media_text_style_background";
  DROP TYPE "public"."enum__glossary_v_blocks_media_text_style_spacing";
  DROP TYPE "public"."enum__glossary_v_blocks_media_text_style_align";
  DROP TYPE "public"."enum__glossary_v_blocks_cards_items_link_type";
  DROP TYPE "public"."enum__glossary_v_blocks_cards_columns";
  DROP TYPE "public"."enum__glossary_v_blocks_cards_card_style";
  DROP TYPE "public"."enum__glossary_v_blocks_cards_style_background";
  DROP TYPE "public"."enum__glossary_v_blocks_cards_style_spacing";
  DROP TYPE "public"."enum__glossary_v_blocks_cards_style_align";
  DROP TYPE "public"."enum__glossary_v_blocks_col_buttons_links_link_type";
  DROP TYPE "public"."enum__glossary_v_blocks_col_buttons_links_link_appearance";
  DROP TYPE "public"."enum__glossary_v_blocks_columns_style_background";
  DROP TYPE "public"."enum__glossary_v_blocks_columns_style_spacing";
  DROP TYPE "public"."enum__glossary_v_blocks_columns_style_align";
  DROP TYPE "public"."enum__glossary_v_blocks_tabs_style_background";
  DROP TYPE "public"."enum__glossary_v_blocks_tabs_style_spacing";
  DROP TYPE "public"."enum__glossary_v_blocks_tabs_style_align";
  DROP TYPE "public"."enum__glossary_v_blocks_stats_style_background";
  DROP TYPE "public"."enum__glossary_v_blocks_stats_style_spacing";
  DROP TYPE "public"."enum__glossary_v_blocks_stats_style_align";
  DROP TYPE "public"."enum__glossary_v_blocks_logos_style_background";
  DROP TYPE "public"."enum__glossary_v_blocks_logos_style_spacing";
  DROP TYPE "public"."enum__glossary_v_blocks_logos_style_align";
  DROP TYPE "public"."enum__glossary_v_blocks_testimonials_style_background";
  DROP TYPE "public"."enum__glossary_v_blocks_testimonials_style_spacing";
  DROP TYPE "public"."enum__glossary_v_blocks_testimonials_style_align";
  DROP TYPE "public"."enum__glossary_v_blocks_faq_style_background";
  DROP TYPE "public"."enum__glossary_v_blocks_faq_style_spacing";
  DROP TYPE "public"."enum__glossary_v_blocks_faq_style_align";
  DROP TYPE "public"."enum__glossary_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__glossary_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__glossary_v_blocks_cta_style_background";
  DROP TYPE "public"."enum__glossary_v_blocks_cta_style_spacing";
  DROP TYPE "public"."enum__glossary_v_blocks_cta_style_align";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_field";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_format";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum__glossary_v_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum_people_blocks_hero_links_link_type";
  DROP TYPE "public"."enum_people_blocks_hero_links_link_appearance";
  DROP TYPE "public"."enum_people_blocks_hero_variant";
  DROP TYPE "public"."enum_people_blocks_hero_style_background";
  DROP TYPE "public"."enum_people_blocks_hero_style_spacing";
  DROP TYPE "public"."enum_people_blocks_hero_style_align";
  DROP TYPE "public"."enum_people_blocks_rich_text_width";
  DROP TYPE "public"."enum_people_blocks_rich_text_style_background";
  DROP TYPE "public"."enum_people_blocks_rich_text_style_spacing";
  DROP TYPE "public"."enum_people_blocks_rich_text_style_align";
  DROP TYPE "public"."enum_people_blocks_media_text_links_link_type";
  DROP TYPE "public"."enum_people_blocks_media_text_links_link_appearance";
  DROP TYPE "public"."enum_people_blocks_media_text_image_position";
  DROP TYPE "public"."enum_people_blocks_media_text_style_background";
  DROP TYPE "public"."enum_people_blocks_media_text_style_spacing";
  DROP TYPE "public"."enum_people_blocks_media_text_style_align";
  DROP TYPE "public"."enum_people_blocks_cards_items_link_type";
  DROP TYPE "public"."enum_people_blocks_cards_columns";
  DROP TYPE "public"."enum_people_blocks_cards_card_style";
  DROP TYPE "public"."enum_people_blocks_cards_style_background";
  DROP TYPE "public"."enum_people_blocks_cards_style_spacing";
  DROP TYPE "public"."enum_people_blocks_cards_style_align";
  DROP TYPE "public"."enum_people_blocks_col_buttons_links_link_type";
  DROP TYPE "public"."enum_people_blocks_col_buttons_links_link_appearance";
  DROP TYPE "public"."enum_people_blocks_columns_style_background";
  DROP TYPE "public"."enum_people_blocks_columns_style_spacing";
  DROP TYPE "public"."enum_people_blocks_columns_style_align";
  DROP TYPE "public"."enum_people_blocks_tabs_style_background";
  DROP TYPE "public"."enum_people_blocks_tabs_style_spacing";
  DROP TYPE "public"."enum_people_blocks_tabs_style_align";
  DROP TYPE "public"."enum_people_blocks_stats_style_background";
  DROP TYPE "public"."enum_people_blocks_stats_style_spacing";
  DROP TYPE "public"."enum_people_blocks_stats_style_align";
  DROP TYPE "public"."enum_people_blocks_logos_style_background";
  DROP TYPE "public"."enum_people_blocks_logos_style_spacing";
  DROP TYPE "public"."enum_people_blocks_logos_style_align";
  DROP TYPE "public"."enum_people_blocks_testimonials_style_background";
  DROP TYPE "public"."enum_people_blocks_testimonials_style_spacing";
  DROP TYPE "public"."enum_people_blocks_testimonials_style_align";
  DROP TYPE "public"."enum_people_blocks_faq_style_background";
  DROP TYPE "public"."enum_people_blocks_faq_style_spacing";
  DROP TYPE "public"."enum_people_blocks_faq_style_align";
  DROP TYPE "public"."enum_people_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_people_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_people_blocks_cta_style_background";
  DROP TYPE "public"."enum_people_blocks_cta_style_spacing";
  DROP TYPE "public"."enum_people_blocks_cta_style_align";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_field";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_format";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum_people_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum__people_v_blocks_hero_links_link_type";
  DROP TYPE "public"."enum__people_v_blocks_hero_links_link_appearance";
  DROP TYPE "public"."enum__people_v_blocks_hero_variant";
  DROP TYPE "public"."enum__people_v_blocks_hero_style_background";
  DROP TYPE "public"."enum__people_v_blocks_hero_style_spacing";
  DROP TYPE "public"."enum__people_v_blocks_hero_style_align";
  DROP TYPE "public"."enum__people_v_blocks_rich_text_width";
  DROP TYPE "public"."enum__people_v_blocks_rich_text_style_background";
  DROP TYPE "public"."enum__people_v_blocks_rich_text_style_spacing";
  DROP TYPE "public"."enum__people_v_blocks_rich_text_style_align";
  DROP TYPE "public"."enum__people_v_blocks_media_text_links_link_type";
  DROP TYPE "public"."enum__people_v_blocks_media_text_links_link_appearance";
  DROP TYPE "public"."enum__people_v_blocks_media_text_image_position";
  DROP TYPE "public"."enum__people_v_blocks_media_text_style_background";
  DROP TYPE "public"."enum__people_v_blocks_media_text_style_spacing";
  DROP TYPE "public"."enum__people_v_blocks_media_text_style_align";
  DROP TYPE "public"."enum__people_v_blocks_cards_items_link_type";
  DROP TYPE "public"."enum__people_v_blocks_cards_columns";
  DROP TYPE "public"."enum__people_v_blocks_cards_card_style";
  DROP TYPE "public"."enum__people_v_blocks_cards_style_background";
  DROP TYPE "public"."enum__people_v_blocks_cards_style_spacing";
  DROP TYPE "public"."enum__people_v_blocks_cards_style_align";
  DROP TYPE "public"."enum__people_v_blocks_col_buttons_links_link_type";
  DROP TYPE "public"."enum__people_v_blocks_col_buttons_links_link_appearance";
  DROP TYPE "public"."enum__people_v_blocks_columns_style_background";
  DROP TYPE "public"."enum__people_v_blocks_columns_style_spacing";
  DROP TYPE "public"."enum__people_v_blocks_columns_style_align";
  DROP TYPE "public"."enum__people_v_blocks_tabs_style_background";
  DROP TYPE "public"."enum__people_v_blocks_tabs_style_spacing";
  DROP TYPE "public"."enum__people_v_blocks_tabs_style_align";
  DROP TYPE "public"."enum__people_v_blocks_stats_style_background";
  DROP TYPE "public"."enum__people_v_blocks_stats_style_spacing";
  DROP TYPE "public"."enum__people_v_blocks_stats_style_align";
  DROP TYPE "public"."enum__people_v_blocks_logos_style_background";
  DROP TYPE "public"."enum__people_v_blocks_logos_style_spacing";
  DROP TYPE "public"."enum__people_v_blocks_logos_style_align";
  DROP TYPE "public"."enum__people_v_blocks_testimonials_style_background";
  DROP TYPE "public"."enum__people_v_blocks_testimonials_style_spacing";
  DROP TYPE "public"."enum__people_v_blocks_testimonials_style_align";
  DROP TYPE "public"."enum__people_v_blocks_faq_style_background";
  DROP TYPE "public"."enum__people_v_blocks_faq_style_spacing";
  DROP TYPE "public"."enum__people_v_blocks_faq_style_align";
  DROP TYPE "public"."enum__people_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__people_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__people_v_blocks_cta_style_background";
  DROP TYPE "public"."enum__people_v_blocks_cta_style_spacing";
  DROP TYPE "public"."enum__people_v_blocks_cta_style_align";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_field";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_format";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum__people_v_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum_reusable_blocks_hero_links_link_type";
  DROP TYPE "public"."enum_reusable_blocks_hero_links_link_appearance";
  DROP TYPE "public"."enum_reusable_blocks_hero_variant";
  DROP TYPE "public"."enum_reusable_blocks_hero_style_background";
  DROP TYPE "public"."enum_reusable_blocks_hero_style_spacing";
  DROP TYPE "public"."enum_reusable_blocks_hero_style_align";
  DROP TYPE "public"."enum_reusable_blocks_rich_text_width";
  DROP TYPE "public"."enum_reusable_blocks_rich_text_style_background";
  DROP TYPE "public"."enum_reusable_blocks_rich_text_style_spacing";
  DROP TYPE "public"."enum_reusable_blocks_rich_text_style_align";
  DROP TYPE "public"."enum_reusable_blocks_media_text_links_link_type";
  DROP TYPE "public"."enum_reusable_blocks_media_text_links_link_appearance";
  DROP TYPE "public"."enum_reusable_blocks_media_text_image_position";
  DROP TYPE "public"."enum_reusable_blocks_media_text_style_background";
  DROP TYPE "public"."enum_reusable_blocks_media_text_style_spacing";
  DROP TYPE "public"."enum_reusable_blocks_media_text_style_align";
  DROP TYPE "public"."enum_reusable_blocks_cards_items_link_type";
  DROP TYPE "public"."enum_reusable_blocks_cards_columns";
  DROP TYPE "public"."enum_reusable_blocks_cards_card_style";
  DROP TYPE "public"."enum_reusable_blocks_cards_style_background";
  DROP TYPE "public"."enum_reusable_blocks_cards_style_spacing";
  DROP TYPE "public"."enum_reusable_blocks_cards_style_align";
  DROP TYPE "public"."enum_reusable_blocks_col_buttons_links_link_type";
  DROP TYPE "public"."enum_reusable_blocks_col_buttons_links_link_appearance";
  DROP TYPE "public"."enum_reusable_blocks_columns_style_background";
  DROP TYPE "public"."enum_reusable_blocks_columns_style_spacing";
  DROP TYPE "public"."enum_reusable_blocks_columns_style_align";
  DROP TYPE "public"."enum_reusable_blocks_tabs_style_background";
  DROP TYPE "public"."enum_reusable_blocks_tabs_style_spacing";
  DROP TYPE "public"."enum_reusable_blocks_tabs_style_align";
  DROP TYPE "public"."enum_reusable_blocks_stats_style_background";
  DROP TYPE "public"."enum_reusable_blocks_stats_style_spacing";
  DROP TYPE "public"."enum_reusable_blocks_stats_style_align";
  DROP TYPE "public"."enum_reusable_blocks_logos_style_background";
  DROP TYPE "public"."enum_reusable_blocks_logos_style_spacing";
  DROP TYPE "public"."enum_reusable_blocks_logos_style_align";
  DROP TYPE "public"."enum_reusable_blocks_testimonials_style_background";
  DROP TYPE "public"."enum_reusable_blocks_testimonials_style_spacing";
  DROP TYPE "public"."enum_reusable_blocks_testimonials_style_align";
  DROP TYPE "public"."enum_reusable_blocks_faq_style_background";
  DROP TYPE "public"."enum_reusable_blocks_faq_style_spacing";
  DROP TYPE "public"."enum_reusable_blocks_faq_style_align";
  DROP TYPE "public"."enum_reusable_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_reusable_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_reusable_blocks_cta_style_background";
  DROP TYPE "public"."enum_reusable_blocks_cta_style_spacing";
  DROP TYPE "public"."enum_reusable_blocks_cta_style_align";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_field";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_format";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum_reusable_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum_reusable_status";
  DROP TYPE "public"."enum__reusable_v_blocks_hero_links_link_type";
  DROP TYPE "public"."enum__reusable_v_blocks_hero_links_link_appearance";
  DROP TYPE "public"."enum__reusable_v_blocks_hero_variant";
  DROP TYPE "public"."enum__reusable_v_blocks_hero_style_background";
  DROP TYPE "public"."enum__reusable_v_blocks_hero_style_spacing";
  DROP TYPE "public"."enum__reusable_v_blocks_hero_style_align";
  DROP TYPE "public"."enum__reusable_v_blocks_rich_text_width";
  DROP TYPE "public"."enum__reusable_v_blocks_rich_text_style_background";
  DROP TYPE "public"."enum__reusable_v_blocks_rich_text_style_spacing";
  DROP TYPE "public"."enum__reusable_v_blocks_rich_text_style_align";
  DROP TYPE "public"."enum__reusable_v_blocks_media_text_links_link_type";
  DROP TYPE "public"."enum__reusable_v_blocks_media_text_links_link_appearance";
  DROP TYPE "public"."enum__reusable_v_blocks_media_text_image_position";
  DROP TYPE "public"."enum__reusable_v_blocks_media_text_style_background";
  DROP TYPE "public"."enum__reusable_v_blocks_media_text_style_spacing";
  DROP TYPE "public"."enum__reusable_v_blocks_media_text_style_align";
  DROP TYPE "public"."enum__reusable_v_blocks_cards_items_link_type";
  DROP TYPE "public"."enum__reusable_v_blocks_cards_columns";
  DROP TYPE "public"."enum__reusable_v_blocks_cards_card_style";
  DROP TYPE "public"."enum__reusable_v_blocks_cards_style_background";
  DROP TYPE "public"."enum__reusable_v_blocks_cards_style_spacing";
  DROP TYPE "public"."enum__reusable_v_blocks_cards_style_align";
  DROP TYPE "public"."enum__reusable_v_blocks_col_buttons_links_link_type";
  DROP TYPE "public"."enum__reusable_v_blocks_col_buttons_links_link_appearance";
  DROP TYPE "public"."enum__reusable_v_blocks_columns_style_background";
  DROP TYPE "public"."enum__reusable_v_blocks_columns_style_spacing";
  DROP TYPE "public"."enum__reusable_v_blocks_columns_style_align";
  DROP TYPE "public"."enum__reusable_v_blocks_tabs_style_background";
  DROP TYPE "public"."enum__reusable_v_blocks_tabs_style_spacing";
  DROP TYPE "public"."enum__reusable_v_blocks_tabs_style_align";
  DROP TYPE "public"."enum__reusable_v_blocks_stats_style_background";
  DROP TYPE "public"."enum__reusable_v_blocks_stats_style_spacing";
  DROP TYPE "public"."enum__reusable_v_blocks_stats_style_align";
  DROP TYPE "public"."enum__reusable_v_blocks_logos_style_background";
  DROP TYPE "public"."enum__reusable_v_blocks_logos_style_spacing";
  DROP TYPE "public"."enum__reusable_v_blocks_logos_style_align";
  DROP TYPE "public"."enum__reusable_v_blocks_testimonials_style_background";
  DROP TYPE "public"."enum__reusable_v_blocks_testimonials_style_spacing";
  DROP TYPE "public"."enum__reusable_v_blocks_testimonials_style_align";
  DROP TYPE "public"."enum__reusable_v_blocks_faq_style_background";
  DROP TYPE "public"."enum__reusable_v_blocks_faq_style_spacing";
  DROP TYPE "public"."enum__reusable_v_blocks_faq_style_align";
  DROP TYPE "public"."enum__reusable_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__reusable_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__reusable_v_blocks_cta_style_background";
  DROP TYPE "public"."enum__reusable_v_blocks_cta_style_spacing";
  DROP TYPE "public"."enum__reusable_v_blocks_cta_style_align";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_field";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_format";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum__reusable_v_blocks_dynamic_field_style_align";
  DROP TYPE "public"."enum__reusable_v_published_locale";
  DROP TYPE "public"."enum__reusable_v_version_status";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hero_links_link_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hero_links_link_appearance";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hero_variant";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hero_style_background";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hero_style_spacing";
  DROP TYPE "public"."enum_cpt_defaults_blocks_hero_style_align";
  DROP TYPE "public"."enum_cpt_defaults_blocks_rich_text_width";
  DROP TYPE "public"."enum_cpt_defaults_blocks_rich_text_style_background";
  DROP TYPE "public"."enum_cpt_defaults_blocks_rich_text_style_spacing";
  DROP TYPE "public"."enum_cpt_defaults_blocks_rich_text_style_align";
  DROP TYPE "public"."enum_cpt_defaults_blocks_media_text_links_link_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_media_text_links_link_appearance";
  DROP TYPE "public"."enum_cpt_defaults_blocks_media_text_image_position";
  DROP TYPE "public"."enum_cpt_defaults_blocks_media_text_style_background";
  DROP TYPE "public"."enum_cpt_defaults_blocks_media_text_style_spacing";
  DROP TYPE "public"."enum_cpt_defaults_blocks_media_text_style_align";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cards_items_link_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cards_columns";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cards_card_style";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cards_style_background";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cards_style_spacing";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cards_style_align";
  DROP TYPE "public"."enum_cpt_defaults_blocks_col_buttons_links_link_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_col_buttons_links_link_appearance";
  DROP TYPE "public"."enum_cpt_defaults_blocks_columns_style_background";
  DROP TYPE "public"."enum_cpt_defaults_blocks_columns_style_spacing";
  DROP TYPE "public"."enum_cpt_defaults_blocks_columns_style_align";
  DROP TYPE "public"."enum_cpt_defaults_blocks_tabs_style_background";
  DROP TYPE "public"."enum_cpt_defaults_blocks_tabs_style_spacing";
  DROP TYPE "public"."enum_cpt_defaults_blocks_tabs_style_align";
  DROP TYPE "public"."enum_cpt_defaults_blocks_stats_style_background";
  DROP TYPE "public"."enum_cpt_defaults_blocks_stats_style_spacing";
  DROP TYPE "public"."enum_cpt_defaults_blocks_stats_style_align";
  DROP TYPE "public"."enum_cpt_defaults_blocks_logos_style_background";
  DROP TYPE "public"."enum_cpt_defaults_blocks_logos_style_spacing";
  DROP TYPE "public"."enum_cpt_defaults_blocks_logos_style_align";
  DROP TYPE "public"."enum_cpt_defaults_blocks_testimonials_style_background";
  DROP TYPE "public"."enum_cpt_defaults_blocks_testimonials_style_spacing";
  DROP TYPE "public"."enum_cpt_defaults_blocks_testimonials_style_align";
  DROP TYPE "public"."enum_cpt_defaults_blocks_faq_style_background";
  DROP TYPE "public"."enum_cpt_defaults_blocks_faq_style_spacing";
  DROP TYPE "public"."enum_cpt_defaults_blocks_faq_style_align";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cta_style_background";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cta_style_spacing";
  DROP TYPE "public"."enum_cpt_defaults_blocks_cta_style_align";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_field";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_format";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_style_background";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_style_spacing";
  DROP TYPE "public"."enum_cpt_defaults_blocks_dynamic_field_style_align";`)
}
