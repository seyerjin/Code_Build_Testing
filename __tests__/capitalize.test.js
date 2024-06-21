import capitalize from '../capitalize';

test('capitalizes a lowercase string', () => {
  expect(capitalize('hello')).toBe('HELLO');
});

test('capitalizes an already capitalized string', () => {
  expect(capitalize('WORLD')).toBe('WORLD');
});
