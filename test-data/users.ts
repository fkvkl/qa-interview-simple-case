import { faker } from '@faker-js/faker';

export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const existingUsers: User[] = [
  {
    email: 'test1@mail.com',
    password: 'testPassword!',
    firstName: 'Test1',
    lastName: 'Testsson1',
  },
  {
    email: 'test2@mail.com',
    password: 'testPassword!',
    firstName: 'Test2',
    lastName: 'Testsson2',
  },
  {
    email: 'test3@mail.com',
    password: 'testPassword!',
    firstName: 'Test3',
    lastName: 'Testsson3',
  },
] as const;

export const generateRandomUser = (): User => ({
  email: faker.internet.email(),
  password: faker.internet.password({ length: 9 }),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
});
