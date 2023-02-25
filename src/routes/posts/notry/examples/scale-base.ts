import { c, d, e } from "./ext";

function a(num: number): number {
  const resultB = b(num);
  return c(resultB);
}

function b(num: number): number {
  const resultD = d(num);
  return e(resultD);
}

function main(num: number) {
  try {
    console.log(a(num));
  } catch (exceptionVar: unknown) {
    console.error(exceptionVar);
  }
}

main(0);
main(1);
main(2);
main(3);
