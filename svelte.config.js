import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$lib: resolve('./src/lib'),
					$types: resolve('./src/types'),
					$db: resolve('./src/db'),
					$i18n: resolve('./src/i18n'),
					$stores: resolve('./src/stores')
				}
			}
		}
	}
};

export default config;
