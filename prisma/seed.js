import { PrismaClient } from '@prisma/client';
import { projectTypes, projectQuestions } from './data.js';

const prisma = new PrismaClient();

async function load() {
	try {
		await prisma.projectType.deleteMany();
		await prisma.$queryRaw`ALTER TABLE projectType AUTO_INCREMENT=1`;
		await prisma.projectType.createMany({
			data: projectTypes
		});
		console.log('Project Types are created');
		await prisma.projectQuestion.deleteMany();
		await prisma.$queryRaw`ALTER TABLE projectQuestion AUTO_INCREMENT=1`;
		await prisma.projectQuestion.createMany({
			data: projectQuestions
		});
		console.log('Project Questions are created');
	} catch (e) {
		console.log(e);
	} finally {
		await prisma.$disconnect();
	}
}

load();
