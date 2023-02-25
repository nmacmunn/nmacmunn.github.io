import { c, d, e } from "./ext";
import { safe } from "./safe-return";

function a(num: number): number | "C" | "D" | "E" {
  const maybeB = b(num);
  if (typeof maybeB === "string") {
    return maybeB;
  }
  return safe(c, "C" as const)(maybeB);
}

function b(num: number): number | "D" | "E" {
  const maybeD = safe(d, "D" as const)(num);
  if (typeof maybeD === "string") {
    return maybeD;
  }
  return safe(e, "E" as const)(maybeD);
}

function main(num: number) {
  const result = a(num);
  if (typeof result === "string") {
    console.error(result);
    return;
  }
  console.log(result);
}

main(0);
main(1);
main(2);
main(3);
