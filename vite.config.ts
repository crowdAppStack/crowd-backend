import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import dynamicRouter from './dynamic-router'

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
    dynamicRouter({
      output: 'resources/js/d-router.tsx',
      excludeFiles: ['Home.tsx'],
      customRoutes: [
        {
          path: '/',
          component: 'Home',
          importPath: '@/components/pages/Home',
          name: 'home',
        }
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': '/resources/js',
      '~': '/resources/styles',
    },
  },
})
