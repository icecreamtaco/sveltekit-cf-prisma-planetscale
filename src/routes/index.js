import { test } from '$lib/test';

export async function get() {
	console.log('get', test);

	return {
		status: 200
	};
}
