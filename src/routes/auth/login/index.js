import * as cookie from 'cookie';
import { db } from '$root/lib/db';
import { verifyMessageSignature } from 'micro-stacks/connect';
import jwt from '@tsndr/cloudflare-worker-jwt';
import * as constants from '$root/lib/constants';
import sha256 from 'crypto-js/sha256.js';
import Base64 from 'crypto-js/enc-base64.js';
import { v4 as uuidv4 } from 'uuid';

export const post = async ({ request }) => {
	const body = await request.json();

	let { stxAddress } = body;
	let { message } = body;
	let { signature } = body;
	let role = 'user';

	let device = request.headers.get('user-agent');

	// check if signature valid
	const isVerifiedMessage = verifyMessageSignature({ message, signature });

	if (isVerifiedMessage) {
		try {
			// generate access and refresh tokens

			let userId;
			let accessToken;
			let refreshToken;
			let refreshTokenHash;

			console.log('pOSTING1', stxAddress);

			let user = await db.user.findUnique({
				where: {
					stxAddress
				}
			});

			console.log('pOSTING2');

			if (user) {
				// update or create new session token
				userId = user.id;
				let session = { userId, stxAddress, role };
				accessToken = await jwt.sign(
					{ session, exp: Math.floor(Date.now() / 1000) + constants.ACCESS_TOKEN_EXPIRE_TIME },
					import.meta.env.VITE_ACCESS_TOKEN_SECRET
				);
				refreshToken = await jwt.sign(
					{ session, exp: Math.floor(Date.now() / 1000) + constants.REFRESH_TOKEN_EXPIRE_TIME },
					import.meta.env.VITE_REFRESH_TOKEN_SECRET
				);
				// refreshTokenHash = crypto.createHash('sha256').update(refreshToken, 'utf8').digest('hex');
				refreshTokenHash = Base64.stringify(
					sha256(refreshToken + import.meta.env.VITE_REFRESH_TOKEN_SECRET)
				);

				user = await db.session.upsert({
					where: {
						userId_device: {
							userId,
							device
						}
					},
					update: {
						refreshTokenHash
					},
					create: {
						userId,
						device,
						refreshTokenHash
					}
				});
			} else {
				userId = uuidv4();
				let session = { userId, stxAddress, role };

				accessToken = await jwt.sign(
					{ session, exp: Math.floor(Date.now() / 1000) + constants.ACCESS_TOKEN_EXPIRE_TIME },
					import.meta.env.VITE_ACCESS_TOKEN_SECRET
				);
				refreshToken = await jwt.sign(
					{ session, exp: Math.floor(Date.now() / 1000) + constants.REFRESH_TOKEN_EXPIRE_TIME },
					import.meta.env.VITE_REFRESH_TOKEN_SECRET
				);
				refreshTokenHash = Base64.stringify(
					sha256(refreshToken + import.meta.env.VITE_REFRESH_TOKEN_SECRET)
				);

				const createUser = db.user.create({
					data: {
						id: userId,
						stxAddress
					}
				});
				console.log('create user ', createUser);

				const createSession = db.session.create({
					data: {
						userId,
						refreshTokenHash,
						device
					}
				});

				user = await db.$transaction([createUser, createSession]);
			}

			return {
				status: 200,
				body: {
					userId,
					stxAddress,
					role
				},
				headers: {
					'Set-Cookie': [
						cookie.serialize('accessToken', accessToken, {
							path: '/',
							httpOnly: true,
							sameSite: 'strict',
							secure: true,
							maxAge: constants.ACCESS_TOKEN_EXPIRE_TIME
						}),
						cookie.serialize('refreshToken', refreshToken, {
							path: '/',
							httpOnly: true,
							sameSite: 'strict',
							secure: true,
							maxAge: constants.REFRESH_TOKEN_EXPIRE_TIME
						})
					]
				}
			};
		} catch (error) {
			return {
				status: 400,
				body: {
					error: error.message
				}
			};
		}
	} else {
		return {
			status: 400,
			body: {
				error: 'Signature not valid.'
			}
		};
	}
};
