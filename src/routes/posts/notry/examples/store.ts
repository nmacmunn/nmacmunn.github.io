let succeeded = false;

export function getRecord(
  _store: string,
  name: string
): { name: string; age: number } | undefined {
  if (name === "Neil") {
    if (succeeded) {
      throw new Error(`Failed to get record`);
    }
    succeeded = true;
    return {
      name: "Neil",
      age: 17
    };
  }
}
