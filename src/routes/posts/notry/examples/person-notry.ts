import type { Quit } from "./notry-ts";
import { getRecord } from "./store";

export interface Person {
  name: string;
  age: number;
}

type Why = { type: "UserError"; message: string } | { type: "DevError" };

export function getPerson(quit: Quit<Why>, name: string): Person {
  const person = quit.catch(getRecord, "person", name, { type: "DevError" });
  quit.unless(person, { type: "UserError", message: `${name} not found` });
  return person;
}
