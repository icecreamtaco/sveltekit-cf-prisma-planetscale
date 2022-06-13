import adapter from '@sveltejs/adapter-cloudflare';
import path from 'path';
import preprocess from 'svelte-preprocess';

let config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$root: path.resolve('./src')
				}
			}
		}
	}
};

export default config;
