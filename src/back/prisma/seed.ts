import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { id: 0 },
    update: {},
    create: {
      mail: 'admin@bankroot.fr',
      name: 'admin',
      lastname: 'admin',
      uuid: 'test',
      password: 'test',
      rank: 1,
      created_at: new Date(),
      update_at: new Date(),
    },
  });
  console.log({ user });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
