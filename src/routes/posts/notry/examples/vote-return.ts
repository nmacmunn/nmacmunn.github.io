import type { DevError, UserError } from "./error";
import { getPerson } from "./person-return";

export function canVote(name: string): boolean | UserError | DevError {
  const maybePerson = getPerson(name);
  if (maybePerson instanceof Error) {
    return maybePerson;
  }
  return maybePerson.age >= 18;
}
