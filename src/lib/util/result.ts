import format from "pretty-format";

export type Result = { sql: string; rows: unknown };

const separator = "=%'*";

function getComment(rows: unknown) {
  return rows ? ["-- " + format(rows, { min: true })] : [];
}

function joinSql(results: Result[], separator: string) {
  return results.map(({ sql }) => sql.trim()).join(separator);
}

export function decodeHistory(encoded: string): Result[] {
  const decoded = decodeURIComponent(encoded);
  const split = decoded.split(separator);
  return split.map((sql) => ({ sql, rows: undefined }));
}

export function downloadable(results: Result[]) {
  return encodeURIComponent(joinSql(results, "\n"));
}

export function presentable(results: Result[]) {
  return results
    .flatMap(({ sql, rows }) => [sql, ...getComment(rows)])
    .join("\n");
}

export function uriable(results: Result[]) {
  return encodeURIComponent(joinSql(results, separator));
}
