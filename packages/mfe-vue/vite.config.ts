import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'mfeVue',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.vue',
      },
      shared: ['vue'],
    }),
  ],

  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
        format: 'esm',
      },
    },
  },

  server: {
    port: 3001,
    strictPort: true,
    cors: true,
    host: true,
  },

  preview: {
    port: 3001,
    strictPort: true,
    cors: true,
    host: true,
  },
});