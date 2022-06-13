import { dev } from '$app/env';

export const host = dev ? 'http://localhost:3000' : 'https://dashboard-authentication.pages.dev'

// TOKENS
export const ACCESS_TOKEN_EXPIRE_TIME = dev ? 5 : 60 * 15 // in seconds
export const REFRESH_TOKEN_EXPIRE_TIME = dev ? 20 : 60 * 60 * 24 * 15 // in seconds

// DISCORD
export const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
export const DISCORD_REDIRECT_URI = host + '/auth/connect/callback'
export const DISCORD_ENDPOINT = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(DISCORD_REDIRECT_URI)}&response_type=code&scope=identify`;
export const DISCORD_CLIENT_SECRET = import.meta.env.VITE_DISCORD_CLIENT_SECRET
