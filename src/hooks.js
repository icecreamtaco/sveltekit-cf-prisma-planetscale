import * as cookie from 'cookie';
import jwt from '@tsndr/cloudflare-worker-jwt';
import { db } from '$root/lib/db';

import * as constants from '$root/lib/constants';
import sha256 from 'crypto-js/sha256.js';
import Base64 from 'crypto-js/enc-base64.js';

export const handle = async ({ event, resolve }) => {
	let response;

	switch (event.url.pathname) {
		// if logging in/out, don't mess with cookies
		case '/auth/login':
			response = await resolve(event);
			break;
		case '/auth/logout':
			response = await resolve(event);
			break;
		default:
			let { accessToken, refreshToken } = getCookies(event.request.headers);

			if (accessToken) {
				const isValid = await isAccessTokenValid(accessToken);
				console.log('is valid: ', isValid);
				if (isValid) {
					console.log('access token valid, generating new access token');
					const { userId } = jwt.decode(accessToken).payload;
					accessToken = await generateAccessToken(userId);
					event.locals.userId = userId;
					response = await resolve(event);
					response = setAccessTokenCookie(response, accessToken);
					return response;
				}
			}

			console.log('Access token not valid');

			if (refreshToken) {
				const isValid = await isRefreshTokenValid(refreshToken);

				if (isValid) {
					console.log('refresh token valid, validating hash against db...');
					const { userId } = jwt.decode(refreshToken).payload;

					const refreshTokenHash = Base64.stringify(
						sha256(refreshToken + import.meta.env.VITE_REFRESH_TOKEN_SECRET)
					);

					let matchesDBToken = await compareRefreshTokenHashToDB(event, userId, refreshTokenHash);

					if (matchesDBToken) {
						console.log('matches db, generating new access token...');
						accessToken = await generateAccessToken(userId);
						event.locals.userId = userId;
						response = await resolve(event);
						response = setAccessTokenCookie(response, accessToken);
						console.log('done');
						return response;
					}
				}
			}

			console.log('Refresh token not valid, signing out user');

			// event.url
			// let pathname = event.url.pathname
			// event.url.href = event.url.origin + pathname
			// event.url.pathname = '/auth/logout'

			response = await resolve(event);
			response = deleteCookies(response);
			break;
	}

	return response;
};

function deleteCookies(response) {
	response.headers.append(
		'Set-Cookie',
		cookie.serialize('accessToken', '', {
			path: '/',
			expires: new Date(0)
		})
	);
	response.headers.append(
		'Set-Cookie',
		cookie.serialize('refreshToken', '', {
			path: '/',
			expires: new Date(0)
		})
	);
	return response;
}

async function compareRefreshTokenHashToDB(event, userId, refreshTokenHash) {
	let device = event.request.headers.get('user-agent');

	let session = await db.session.findUnique({
		where: {
			userId_device: {
				userId,
				device
			}
		}
	});

	return refreshTokenHash == session.refreshTokenHash ? true : false;
}

function setAccessTokenCookie(response, accessToken) {
	response.headers.set(
		'Set-Cookie',
		cookie.serialize('accessToken', accessToken, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: true,
			maxAge: 10
		})
	);
	return response;
}

async function generateAccessToken(userId) {
	let accessToken = await jwt.sign(
		{ userId, exp: Math.floor(Date.now() / 1000) + constants.ACCESS_TOKEN_EXPIRE_TIME },
		import.meta.env.VITE_ACCESS_TOKEN_SECRET
	);
	return accessToken;
}

async function isAccessTokenValid(cookie) {
	try {
		let isVerified = await jwt.verify(cookie, import.meta.env.VITE_ACCESS_TOKEN_SECRET);
		return isVerified;
	} catch {
		console.error('Malformed token');
		return false;
	}
}

async function isRefreshTokenValid(cookie) {
	try {
		let isVerfied = await jwt.verify(cookie, import.meta.env.VITE_REFRESH_TOKEN_SECRET);
		return isVerfied;
	} catch {
		console.error('Malformed token');
		return false;
	}
}

function getCookies(headers) {
	const cookieHeader = headers.get('cookie');
	const cookies = cookie.parse(cookieHeader ?? '');

	const accessToken = cookies?.accessToken;
	const refreshToken = cookies?.refreshToken;

	return { accessToken, refreshToken };
}

export const getSession = (event) => (JSON.stringify(event.locals) === '{}' ? null : event.locals);
