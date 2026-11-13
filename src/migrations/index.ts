import * as migration_20261113_072152_initial from './20261113_072152_initial';
import * as migration_20261113_083059_phase1_foundation from './20261113_083059_phase1_foundation';
import * as migration_20261113_085116_phase2_content_model from './20261113_085116_phase2_content_model';
import * as migration_20261113_090216_phase3_blocks from './20261113_090216_phase3_blocks';
import * as migration_20261113_091529_phase4_listing from './20261113_091529_phase4_listing';
import * as migration_20261113_092713_phase5_navigation from './20261113_092713_phase5_navigation';

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
    name: '20261113_092713_phase5_navigation'
  },
];
