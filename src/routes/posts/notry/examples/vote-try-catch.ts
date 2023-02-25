// votetc.ts
import { getPerson } from "./person-try-catch";

export function canVote(name: string): boolean {
  const person = getPerson(name);
  return person.age >= 18;
}
