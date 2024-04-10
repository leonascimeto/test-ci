import { soma, subtracao } from './main';

test('should sum 2 numbers', () => {
  const input = {
    a: 1,
    b: 2,
  };

  const sut = soma(input.a, input.b);

  expect(sut).toBe(3);
});

test('should sub 2 numbers', () => {
  const input = {
    a: 5,
    b: 2,
  };

  const sut = subtracao(input.a, input.b);

  expect(sut).toBe(3);
});
