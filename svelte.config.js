import adapter from '@sveltejs/adapter-cloudflare';
import path from 'path';

let config = {
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
