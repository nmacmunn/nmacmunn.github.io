import { c, d, e } from "./ext";
import { notry, type Quit } from "./notry-ts";

function a(quit: Quit<"C" | "D" | "E">, num: number): number {
  const resultB = b(quit, num);
  return quit.catch(c, resultB, "C");
}

function b(quit: Quit<"D" | "E">, num: number): number {
  const resultD = quit.catch(d, num, "D");
  return quit.catch(e, resultD, "E");
}

function main(num: number) {
  const did = notry(a, num);
  if (did.ok === false) {
    console.error(did.n);
    return;
  }
  console.log(did.y);
}

main(0);
main(1);
main(2);
main(3);
