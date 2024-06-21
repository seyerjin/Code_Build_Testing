import createUser from '../createUser';

test('creates a user object with name and age', () => {
  const user = createUser('John', 30);
  expect(user).toEqual({ name: 'John', age: 30 });
});

test('creates a user object with different name and age', () => {
  const user = createUser('Jane', 25);
  expect(user).toEqual({ name: 'Jane', age: 25 });
});
