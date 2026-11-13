import * as migration_20261113_072152_initial from './20261113_072152_initial';
import * as migration_20261113_083059_phase1_foundation from './20261113_083059_phase1_foundation';
import * as migration_20261113_085116_phase2_content_model from './20261113_085116_phase2_content_model';
import * as migration_20261113_090216_phase3_blocks from './20261113_090216_phase3_blocks';
import * as migration_20261113_091529_phase4_listing from './20261113_091529_phase4_listing';
import * as migration_20261113_092713_phase5_navigation from './20261113_092713_phase5_navigation';
import * as migration_20261113_094343_phase6_visibility from './20261113_094343_phase6_visibility';
import * as migration_20261113_095541_phase7_seo from './20261113_095541_phase7_seo';
import * as migration_20261113_100930_phase8_workflow from './20261113_100930_phase8_workflow';
import * as migration_20261113_102704_phase9_demo from './20261113_102704_phase9_demo';
import * as migration_20261113_104911_sliders_marquee from './20261113_104911_sliders_marquee';
import * as migration_20261113_113842_french_locale from './20261113_113842_french_locale';

export const migrations = [
  {
    up: migration_20261113_072152_initial.up,
    down: migration_20261113_072152_initial.down,
    name: '20261113_072152_initial',
  },
  {
    up: migration_20261113_083059_phase1_foundation.up,
    down: migration_20261113_083059_phase1_foundation.down,
    name: '20261113_083059_phase1_foundation',
  },
  {
    up: migration_20261113_085116_phase2_content_model.up,
    down: migration_20261113_085116_phase2_content_model.down,
    name: '20261113_085116_phase2_content_model',
  },
  {
    up: migration_20261113_090216_phase3_blocks.up,
    down: migration_20261113_090216_phase3_blocks.down,
    name: '20261113_090216_phase3_blocks',
  },
  {
    up: migration_20261113_091529_phase4_listing.up,
    down: migration_20261113_091529_phase4_listing.down,
    name: '20261113_091529_phase4_listing',
  },
  {
    up: migration_20261113_092713_phase5_navigation.up,
    down: migration_20261113_092713_phase5_navigation.down,
    name: '20261113_092713_phase5_navigation',
  },
  {
    up: migration_20261113_094343_phase6_visibility.up,
    down: migration_20261113_094343_phase6_visibility.down,
    name: '20261113_094343_phase6_visibility',
  },
  {
    up: migration_20261113_095541_phase7_seo.up,
    down: migration_20261113_095541_phase7_seo.down,
    name: '20261113_095541_phase7_seo',
  },
  {
    up: migration_20261113_100930_phase8_workflow.up,
    down: migration_20261113_100930_phase8_workflow.down,
    name: '20261113_100930_phase8_workflow',
  },
  {
    up: migration_20261113_102704_phase9_demo.up,
    down: migration_20261113_102704_phase9_demo.down,
    name: '20261113_102704_phase9_demo',
  },
  {
    up: migration_20261113_104911_sliders_marquee.up,
    down: migration_20261113_104911_sliders_marquee.down,
    name: '20261113_104911_sliders_marquee',
  },
  {
    up: migration_20261113_113842_french_locale.up,
    down: migration_20261113_113842_french_locale.down,
    name: '20261113_113842_french_locale'
  },
];
