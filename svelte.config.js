import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

let config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter()
	},

	vite: {
		define: {
			process: {}
		}
	}
};

export default config;
