import { dev } from '$app/env';

export const host = dev ? 'http://localhost:3000' : 'https://dashboard-authentication.pages.dev';

// TOKENS
export const ACCESS_TOKEN_EXPIRE_TIME = dev ? 5 : 60 * 15; // in seconds
export const REFRESH_TOKEN_EXPIRE_TIME = dev ? 20 : 60 * 60 * 24 * 15; // in seconds
