// sum.js
function sum(a, b) {
    return a + b;
  }
  module.exports = sum;
  
  // __tests__/sum.test.js
  const sum = require('../sum');
  
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  test('adds -1 + 2 to equal 1', () => {
    expect(sum(-1, 2)).toBe(1);
  });
  