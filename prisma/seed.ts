/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const email = 'test@example.com';
  const fullName = 'Test User';
  const status = 'ACTIVE';
  const test = await prisma.user.findFirst({
    where: { email },
  });
  if (!test) {
    await prisma.user.create({
      data: {
        email,
        fullName,
        status,
      },
    });
    await prisma.chat.create({
      data: {
        title: 'Chat 1',
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect();
  });
