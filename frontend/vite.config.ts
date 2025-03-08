import * as path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import manifest from './manifest.json';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {

  const envVars = loadEnv(mode, process.cwd(), '');
  const processEnvVarsForDefine = {
    ...Object.keys(envVars).reduce((acc, curr) => {
      // requires stringify
      // process.env.<variable> will be replaced in the code
      // envVars are set to the "define" property in the config below
      acc[`process.env.${curr}`] = JSON.stringify(envVars[curr]);
      return acc;
    }, {} as Record<string, string>),
  };

  return {
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
      port: Number(process.env.PORT), // default ext: 5173
      define: processEnvVarsForDefine,
      // to expose to external network
      host: true,
    },
  };
});
