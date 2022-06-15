import * as cookie from 'cookie';
import { db } from '$root/lib/db';

export const post = async ({ request }) => {
	const body = await request.json();
	let device = request.headers.get('user-agent');

	let { userId } = body;

	await db.session.update({
		where: {
			userId_device: {
				userId,
				device
			}
		},
		data: {
			refreshTokenHash: null
		}
	});

	return {
		headers: {
			'Set-Cookie': [
				cookie.serialize('accessToken', '', {
					path: '/',
					expires: new Date(0)
				}),
				cookie.serialize('refreshToken', '', {
					path: '/',
					expires: new Date(0)
				})
			]
		}
	};
};
