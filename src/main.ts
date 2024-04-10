function main() {
  console.log(soma(1, 2));
}

export function soma(a: number, b: number): number {
  return a + b;
}

export function subtracao(a: number, b: number): number {
  return a - b;
}

export function multiplicacao(a: number, b: number): number {
  return a * b;
}

main();
