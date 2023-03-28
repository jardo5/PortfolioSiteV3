import adapter from '@sveltejs/adapter-static';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '@': path.resolve('src'),
      'utilities': path.resolve('src/utilities')
    },
  },
  build: {
    rollupOptions: {
      external: ['@firebase/app', '@firebase/auth']
    }
  },
  kit: {
    adapter: adapter(),
    target: '#svelte',
    vite: {
      optimizeDeps: {
        exclude: ['@firebase/app']
      }
    },
  }
});
