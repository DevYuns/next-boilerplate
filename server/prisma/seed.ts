import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const mockPosts = [
  {
    title: 'post1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque lacus dui, id volutpat mauris feugiat eu.',
  },
  {
    title: 'post2',
    content:
      'Quisque vel purus nulla. Aenean vehicula quam nisi, quis tempor ligula congue vitae.',
  },
  {
    title: 'post2',
    content:
      'Nunc volutpat varius urna non ornare. Curabitur sit amet pharetra libero.',
  },
];

async function main(): Promise<void> {
  await prisma.user.create({
    data: {
      email: `test@gmail.com`,
      name: 'tester',
      gender: 'male',
      posts: {
        create: mockPosts,
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
