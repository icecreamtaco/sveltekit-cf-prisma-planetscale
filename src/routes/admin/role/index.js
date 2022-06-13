import { db } from '$root/lib/db';

export async function get() {
	const roles = await db.user.findMany();

	return {
		roles
	};
}

export async function post() {}

export async function del() {}
