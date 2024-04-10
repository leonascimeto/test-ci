import { soma } from './main';

test('should sum 2 numbers', () => {
  const input = {
    a: 1,
    b: 2,
  };

  const sut = soma(input.a, input.b);

  expect(sut).toBe(3);
});
