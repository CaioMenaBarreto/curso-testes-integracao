import prisma from "../../src/database";
import { faker } from '@faker-js/faker';

export async function buildUser(email: string, password?: string) {
  const user = await prisma.user.create({
    data: {
      email: faker.internet.email(),
      password: faker.string.uuid() || new Date().getTime().toString()
    }
  });

  return user;
}