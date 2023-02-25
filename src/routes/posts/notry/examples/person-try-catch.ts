// persontc.ts
import { DevError, UserError } from "./error";
import { getRecord } from "./store";

export interface Person {
  name: string;
  age: number;
}

export function getPerson(name: string): Person {
  let person: Person | undefined;
  try {
    person = getRecord("person", name);
  } catch (exceptionVar) {
    throw new DevError(exceptionVar);
  }
  if (!person) {
    throw new UserError(`${name} not found`);
  }
  return person;
}
