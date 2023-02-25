import { c, d, e } from "./ext";
import { safe } from "./safe-try-catch";

function a(num: number): number {
  const resultB = b(num);
  return safe(c, "C")(resultB);
}

function b(num: number): number {
  const resultD = safe(d, "D")(num);
  return safe(e, "E")(resultD);
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
