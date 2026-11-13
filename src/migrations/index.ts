import * as migration_20261113_072152_initial from './20261113_072152_initial';
import * as migration_20261113_083059_phase1_foundation from './20261113_083059_phase1_foundation';
import * as migration_20261113_085116_phase2_content_model from './20261113_085116_phase2_content_model';

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
    name: '20261113_085116_phase2_content_model'
  },
];
