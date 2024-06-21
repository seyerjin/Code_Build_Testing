// async.js
async function fetchData() {
  return 'peanut butter';
}
module.exports = fetchData;

// __tests__/async.test.js
const fetchData = require('../async');

test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the data is not jelly', async () => {
  const data = await fetchData();
  expect(data).not.toBe('jelly');
});
