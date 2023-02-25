import { getRecord } from "./store";

export interface Person {
  name: string;
  age: number;
}

export function getPerson(name: string): Person {
  const person = getRecord("person", name);
  if (!person) {
    throw new Error(`${name} not found`);
  }
  return person;
}
