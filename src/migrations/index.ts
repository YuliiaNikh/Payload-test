import * as migration_20261113_072152_initial from './20261113_072152_initial';

export const migrations = [
  {
    up: migration_20261113_072152_initial.up,
    down: migration_20261113_072152_initial.down,
    name: '20261113_072152_initial'
  },
];
