export function safe<Y, N, Args extends unknown[]>(
  fn: (...args: Args) => Y,
  n: N
) {
  return (...args: Args) => {
    try {
      return fn(...args);
    } catch {
      return n;
    }
  };
}
