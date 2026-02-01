import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shellReact',
      remotes: {
        mfeVue: {
          external: 'http://localhost:3001/assets/remoteEntry.js',
          externalType: 'url',
          from: 'vite',
        },
        mfeAngular: {
          external: 'http://localhost:3002/remoteEntry.js',
          externalType: 'url',
          from: 'webpack',
        },
      },
      shared: ['vue', 'react', 'react-dom'],
    }),
  ],

  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },

  server: {
    port: 3000,
    strictPort: true,
    host: true,
  },

  preview: {
    port: 3000,
  },
});