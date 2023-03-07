import format from "pretty-format";

export type Result = {
  rows: unknown;
  sql: string;
  time: number | undefined;
};

const separator = "=%'*";

function getComment({ rows, time }: Result) {
  if (!rows) {
    return [];
  }
  let comment = `-- ${format(rows, { min: true })}`;
  if (time) {
    comment += ` (${time.toFixed(1)} ms)`;
  }
  return [comment];
}

function joinSql(results: Result[], separator: string) {
  return results.map(({ sql }) => sql.trim()).join(separator);
}

export function decodeHistory(encoded: string): Result[] {
  const decoded = decodeURIComponent(encoded);
  const split = decoded.split(separator);
  return split.map((sql) => ({ sql, rows: undefined, time: undefined }));
}

export function downloadable(results: Result[]) {
  return encodeURIComponent(joinSql(results, "\n"));
}

export function presentable(results: Result[]) {
  return results
    .flatMap((result) => [result.sql, ...getComment(result)])
    .join("\n");
}

export function uriable(results: Result[]) {
  return encodeURIComponent(joinSql(results, separator));
}
