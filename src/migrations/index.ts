import * as migration_20261113_072152_initial from './20261113_072152_initial';
import * as migration_20261113_083059_phase1_foundation from './20261113_083059_phase1_foundation';

export const migrations = [
  {
    up: migration_20261113_072152_initial.up,
    down: migration_20261113_072152_initial.down,
    name: '20261113_072152_initial',
  },
  {
    up: migration_20261113_083059_phase1_foundation.up,
    down: migration_20261113_083059_phase1_foundation.down,
    name: '20261113_083059_phase1_foundation'
  },
];
