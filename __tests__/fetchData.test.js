import fetchData from '../fetchData';

test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the data is not jelly', async () => {
  const data = await fetchData();
  expect(data).not.toBe('jelly');
});
