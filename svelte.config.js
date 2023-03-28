import { svelte } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-auto';
import path from 'path';

const config = {
  kit: {
    vite: {
      plugins: [svelte()],
      resolve: {
        alias: {
          '@': path.resolve('src'),
          'utilities': path.resolve('src/utilities')
        },
      },
    },
    adapter: adapter(),
  },
  preprocess: [svelte()],
};

export default config;