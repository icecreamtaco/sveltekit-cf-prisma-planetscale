import { db } from '$lib/test';

export async function get() {
	let user = await db.user.findUnique({
		where: {
			stxAddress: 'SPE4D5ZXT0BPYGX575XF1HZBHMN3974NE5EQRC3T'
		}
	});
	console.log('user found? ', user);

	return {
		status: 200,
		body: {
			user
		}
	};
}
