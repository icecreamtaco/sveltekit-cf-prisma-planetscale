import { db } from '$lib/db';

export async function get() {
	let user = await db.user.findUnique({
		where: {
			id: '123'
		}
	});

	return {
		status: 200,
		body: {
			user
		}
	};
}
