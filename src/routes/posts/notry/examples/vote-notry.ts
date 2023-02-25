import type { Of, Quit } from "./notry-ts";
import { getPerson } from "./person-notry";

export function canVote(
  quit: Quit<Of<typeof getPerson>>,
  name: string
): boolean {
  const person = getPerson(quit, name);
  return person.age >= 18;
}
