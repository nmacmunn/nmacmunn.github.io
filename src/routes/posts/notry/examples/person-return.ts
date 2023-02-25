import { DevError, UserError } from "./error";
import { getRecord } from "./store";

export interface Person {
  name: string;
  age: number;
}

export function getPerson(name: string): Person | UserError | DevError {
  let person: Person | undefined;
  try {
    person = getRecord("person", name);
  } catch (exceptionVar) {
    return new DevError(exceptionVar);
  }
  if (!person) {
    return new UserError(`${name} not found`);
  }
  return person;
}
