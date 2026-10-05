import { defineConfig, searchForWorkspaceRoot } from 'vite';
import react from '@vitejs/plugin-react';
import { createRequire } from 'node:module';
import { dirname } from 'node:path';

const require = createRequire(import.meta.url);
const katexDist = dirname(require.resolve('katex'));

export default defineConfig({
  base: './',
  plugins: [react()],
  server: { fs: { allow: [searchForWorkspaceRoot(process.cwd()), katexDist] } },
  build: { chunkSizeWarningLimit: 750 },
});
