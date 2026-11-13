import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "headers_locales" ADD COLUMN "cta_type" "enum_headers_cta_type" DEFAULT 'reference';
  ALTER TABLE "headers_locales" ADD COLUMN "cta_new_tab" boolean;
  ALTER TABLE "headers_locales" ADD COLUMN "cta_url" varchar;
  ALTER TABLE "headers_locales" ADD COLUMN "cta_label" varchar;
  ALTER TABLE "headers_locales" ADD COLUMN "cta_appearance" "enum_headers_cta_appearance" DEFAULT 'primary';
  ALTER TABLE "_headers_v_locales" ADD COLUMN "version_cta_type" "enum__headers_v_version_cta_type" DEFAULT 'reference';
  ALTER TABLE "_headers_v_locales" ADD COLUMN "version_cta_new_tab" boolean;
  ALTER TABLE "_headers_v_locales" ADD COLUMN "version_cta_url" varchar;
  ALTER TABLE "_headers_v_locales" ADD COLUMN "version_cta_label" varchar;
  ALTER TABLE "_headers_v_locales" ADD COLUMN "version_cta_appearance" "enum__headers_v_version_cta_appearance" DEFAULT 'primary';
  ALTER TABLE "site_settings" ADD COLUMN "demo_seed" numeric;
  -- Keep existing header buttons: copy them into every language row before the old columns go
  UPDATE "headers_locales" l SET "cta_type" = h."cta_type", "cta_new_tab" = h."cta_new_tab", "cta_url" = h."cta_url", "cta_label" = h."cta_label", "cta_appearance" = h."cta_appearance"
    FROM "headers" h WHERE l."_parent_id" = h."id";
  UPDATE "_headers_v_locales" l SET "version_cta_type" = v."version_cta_type", "version_cta_new_tab" = v."version_cta_new_tab", "version_cta_url" = v."version_cta_url", "version_cta_label" = v."version_cta_label", "version_cta_appearance" = v."version_cta_appearance"
    FROM "_headers_v" v WHERE l."_parent_id" = v."id";
  UPDATE "headers_rels" SET "locale" = 'en' WHERE "path" LIKE 'cta.%' AND "locale" IS NULL;
  UPDATE "_headers_v_rels" SET "locale" = 'en' WHERE "path" LIKE 'version.cta.%' AND "locale" IS NULL;
  ALTER TABLE "headers" DROP COLUMN "cta_type";
  ALTER TABLE "headers" DROP COLUMN "cta_new_tab";
  ALTER TABLE "headers" DROP COLUMN "cta_url";
  ALTER TABLE "headers" DROP COLUMN "cta_label";
  ALTER TABLE "headers" DROP COLUMN "cta_appearance";
  ALTER TABLE "_headers_v" DROP COLUMN "version_cta_type";
  ALTER TABLE "_headers_v" DROP COLUMN "version_cta_new_tab";
  ALTER TABLE "_headers_v" DROP COLUMN "version_cta_url";
  ALTER TABLE "_headers_v" DROP COLUMN "version_cta_label";
  ALTER TABLE "_headers_v" DROP COLUMN "version_cta_appearance";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "headers" ADD COLUMN "cta_type" "enum_headers_cta_type" DEFAULT 'reference';
  ALTER TABLE "headers" ADD COLUMN "cta_new_tab" boolean;
  ALTER TABLE "headers" ADD COLUMN "cta_url" varchar;
  ALTER TABLE "headers" ADD COLUMN "cta_label" varchar;
  ALTER TABLE "headers" ADD COLUMN "cta_appearance" "enum_headers_cta_appearance" DEFAULT 'primary';
  ALTER TABLE "_headers_v" ADD COLUMN "version_cta_type" "enum__headers_v_version_cta_type" DEFAULT 'reference';
  ALTER TABLE "_headers_v" ADD COLUMN "version_cta_new_tab" boolean;
  ALTER TABLE "_headers_v" ADD COLUMN "version_cta_url" varchar;
  ALTER TABLE "_headers_v" ADD COLUMN "version_cta_label" varchar;
  ALTER TABLE "_headers_v" ADD COLUMN "version_cta_appearance" "enum__headers_v_version_cta_appearance" DEFAULT 'primary';
  ALTER TABLE "headers_locales" DROP COLUMN "cta_type";
  ALTER TABLE "headers_locales" DROP COLUMN "cta_new_tab";
  ALTER TABLE "headers_locales" DROP COLUMN "cta_url";
  ALTER TABLE "headers_locales" DROP COLUMN "cta_label";
  ALTER TABLE "headers_locales" DROP COLUMN "cta_appearance";
  ALTER TABLE "_headers_v_locales" DROP COLUMN "version_cta_type";
  ALTER TABLE "_headers_v_locales" DROP COLUMN "version_cta_new_tab";
  ALTER TABLE "_headers_v_locales" DROP COLUMN "version_cta_url";
  ALTER TABLE "_headers_v_locales" DROP COLUMN "version_cta_label";
  ALTER TABLE "_headers_v_locales" DROP COLUMN "version_cta_appearance";
  ALTER TABLE "site_settings" DROP COLUMN "demo_seed";`)
}
