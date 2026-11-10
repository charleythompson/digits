import { Condition, Role } from '@prisma/client';
import { hash } from 'bcrypt';
import * as config from '../config/settings.development.json';
import { prisma } from '../src/lib/prisma';

async function main() {
  console.log('Seeding the database');
  const password = await hash('changeme', 10);

  for (const account of config.defaultAccounts) {
    const role = (account.role as Role | undefined) ?? Role.USER;
    console.log(`  Creating user: ${account.email} with role: ${role}`);
    await prisma.user.upsert({
      where: { email: account.email },
      update: {},
      create: { email: account.email, password, role },
    });
  }

  for (const [index, data] of config.defaultData.entries()) {
    const condition = data.condition as Condition;
    console.log(`  Adding stuff: ${data.name} (${data.owner})`);
    await prisma.stuff.upsert({
      where: { id: index + 1 },
      update: {
        name: data.name,
        quantity: data.quantity,
        condition,
        owner: data.owner,
      },
      create: {
        name: data.name,
        quantity: data.quantity,
        condition,
        owner: data.owner,
      },
    });
  }

  for (const [index, contact] of config.defaultContacts.entries()) {
    console.log(`  Adding contact: ${contact.firstName} ${contact.lastName}`);
    await prisma.contact.upsert({
      where: { id: index + 1 },
      update: contact,
      create: contact,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exitCode = 1;
  });
