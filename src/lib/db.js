import { PrismaClient } from '@prisma/client/edge';

import { browser } from '$app/env';

if (!browser) {
	db = new PrismaClient();
}

export let db;
