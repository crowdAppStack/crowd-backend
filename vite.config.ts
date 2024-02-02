import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import icons from 'dynamic-icons-plugin-vite'

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
    icons({
      outputFolder: 'resources/js/icons',
      iconsFolder: 'resources/assets/icons',
      watch: true,
    })
  ],
  resolve: {
    alias: {
      '@': '/resources/js',
      '~': '/resources/styles',
    },
  },
})
