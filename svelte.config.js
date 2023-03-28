import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-auto';
import path from 'path';

const config = {
	kit: {
		vite: {
			resolve: {
			  alias: {
				'@': path.resolve('src'),
				'utilities': path.resolve('src/utilities')
			  }
			}
		  },
		adapter: adapter(),
	},
	preprocess: vitePreprocess()
};

export default config;