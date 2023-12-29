import * as path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import manifest from './manifest.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest,
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'pwa-192x192.png',
        'apple-touch-icon.png',
        'cover.png',
      ],
      // switch to "true" to enable sw on development
      devOptions: {
        enabled: false,
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg,gif}'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@use "@/assets/themes";',
  //     },
  //   },
  // },

  server: {
    // port: 5000, // need default ext: 5173
    // to expose to external network
    host: true,
  },
});
