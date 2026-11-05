import * as migration_20261105_123059_initial from './20261105_123059_initial';

export const migrations = [
  {
    up: migration_20261105_123059_initial.up,
    down: migration_20261105_123059_initial.down,
    name: '20261105_123059_initial'
  },
];
