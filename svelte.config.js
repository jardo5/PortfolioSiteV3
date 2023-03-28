import { vite } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-auto';
import path from 'path';

const config = {
  kit: {
    adapter: adapter(),
    vite: {
      plugins: [vite()],
      resolve: {
        alias: {
          '@': path.resolve('src'),
          'utilities': path.resolve('src/utilities')
        }
      }
    }
  },
  preprocess: [vite()]
};

export default config;
