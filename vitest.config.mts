import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['tests/int/**/*.int.spec.ts', 'tests/unit/**/*.spec.ts'],
    // Every int file boots Payload against one local DB; in parallel they race on the schema
    // and exhaust connections, so run files one by one with room for the first boot.
    fileParallelism: false,
    hookTimeout: 120_000,
  },
})
