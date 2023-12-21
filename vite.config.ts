import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    host: true,
    hmr: { host: 'localhost', protocol: 'ws' },
    https: false,
    strictPort: true,
    port: 3010,
  },
  plugins: [
    laravel({
      input: ['resources/styles/app.css', 'resources/js/app.tsx'],
      refresh: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': '/resources/js',
      '~': '/resources/styles',
    },
  },
});
