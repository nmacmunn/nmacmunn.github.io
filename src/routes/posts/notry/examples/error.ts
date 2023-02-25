// error.ts
export class DevError extends Error {
  constructor(public exception: unknown = undefined) {
    super();
  }
}

export class UserError extends Error {}
