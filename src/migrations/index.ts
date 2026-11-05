import * as migration_20261105_123059_initial from './20261105_123059_initial';
import * as migration_20261105_145557_pardes_homepage from './20261105_145557_pardes_homepage';

export const migrations = [
  {
    up: migration_20261105_123059_initial.up,
    down: migration_20261105_123059_initial.down,
    name: '20261105_123059_initial',
  },
  {
    up: migration_20261105_145557_pardes_homepage.up,
    down: migration_20261105_145557_pardes_homepage.down,
    name: '20261105_145557_pardes_homepage'
  },
];
