import adapter from '@sveltejs/adapter-static';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

const config = {
  kit: {
    adapter: adapter(),
    vite: {
      plugins: [
        svelte(),
      ],
      resolve: {
        alias: {
          '@': path.resolve('src'),
          'utilities': path.resolve('src/utilities')
        },
      },
    },
  },
  preprocess: [svelte()]
};

export default config;
