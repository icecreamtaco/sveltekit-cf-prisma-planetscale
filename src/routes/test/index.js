import { db } from '$lib/test';

export async function get() {
	console.log('get', db);

	return {
		status: 200
	};
}
