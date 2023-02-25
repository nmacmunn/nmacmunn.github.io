// vote.ts
import { getPerson } from "./person";

export function canVote(name: string): boolean {
  const person = getPerson(name);
  return person.age >= 18;
}

console.log(canVote("Neil"));
