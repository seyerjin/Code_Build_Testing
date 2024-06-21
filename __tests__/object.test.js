// object.js
function createUser(name, age) {
    return {
      name: name,
      age: age,
    };
  }
  module.exports = createUser;
  
  // __tests__/object.test.js
  const createUser = require('../object');
  
  test('creates a user object with name and age', () => {
    const user = createUser('John', 30);
    expect(user).toEqual({ name: 'John', age: 30 });
  });
  
  test('creates a user object with different name and age', () => {
    const user = createUser('Jane', 25);
    expect(user).toEqual({ name: 'Jane', age: 25 });
  });
  