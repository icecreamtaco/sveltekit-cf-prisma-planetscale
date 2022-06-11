import { test } from '$lib/test';

export async function get() {
	console.log('get', test._engineConfig.inlineDatasources);

	return {
		status: 200
	};
}
