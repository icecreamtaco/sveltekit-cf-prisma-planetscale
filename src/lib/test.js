import { PrismaClient } from '@prisma/client';
// import { PrismaClient } from '@prisma/client/edge.js';

export const db = new PrismaClient();
