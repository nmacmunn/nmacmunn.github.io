import { browser } from "$app/environment";
import { array, string } from "fp-ts";
import { flow } from "fp-ts/lib/function";
import { not } from "fp-ts/lib/Predicate";
import { derived, readable, writable, type Readable } from "svelte/store";

/**
 * SQLite database
 */
class DB {
  // This is a mock - the real constructor is provided by sqlite in the browser
  // only
  constructor(options: { filename: string; flags: string }) {
    options;
  }
  close() {
    //
  }
  exec(sql: string, options: { rowMode: "object" }): unknown[] {
    sql;
    options;
    return [];
  }
}

/**
 * Store for the sqlite module
 * @private
 */
const sqlite3 = readable(
  {
    capi: {
      sqlite3_js_kvvfs_clear() {
        return;
      },
      sqlite3_js_kvvfs_size() {
        return 0;
      }
    },
    oo1: {
      DB
    },
    version: {
      libVersion: ""
    }
  },
  (set) => {
    if (browser) {
      import("$lib/sqlite3/sqlite3-bundler-friendly.mjs")
        .then((module) => module.default())
        .then(set);
    }
  }
);

/**
 * Store for the database instance
 * @private
 */
const db: Readable<DB> = derived([sqlite3], ([$sqlite3], set) => {
  const db = new $sqlite3.oo1.DB({ filename: ":localStorage:", flags: "ct" });
  set(db);
  return () => db.close();
});

/**
 * Store used to trigger a size update when clear is called or exec is called
 */
const updateSize = writable(0);

/**
 * Store for function to clear data from local storage
 */
export const clear: Readable<() => void> = derived(
  [sqlite3],
  ([$sqlite3], set) => {
    set(() => {
      $sqlite3.capi.sqlite3_js_kvvfs_clear();
      updateSize.update((val) => val + 1);
    });
  }
);

/**
 * Store for function to execute sql
 */
export const exec: Readable<DB["exec"]> = derived([db], ([$db], set) => {
  set((sql: string, options) => {
    const result = $db.exec(sql, options);
    updateSize.update((val) => val + 1);
    return result;
  });
});

/**
 * Store for size of data in local storage
 */
export const size: Readable<number> = derived(
  [sqlite3, updateSize],
  ([$sqlite3], set) => set($sqlite3.capi.sqlite3_js_kvvfs_size())
);

/**
 * Store for SQLite version string
 */
export const version: Readable<string> = derived([sqlite3], ([$sqlite3], set) =>
  set($sqlite3.version.libVersion)
);

const addSemicolon = (s: string) => s + ";";
const notEmpty = not(string.isEmpty);
const removeComments = (s: string) => s.replaceAll(/--.*/g, "");
const splitQueries = (s: string) => s.split(";");
const trimNewlines = (s: string) => s.replaceAll(/(\r?\n)+/g, (_, nl) => nl);

/**
 * Given a SQLite script. Split it into queries that can be individually executed.
 */
export const getQueries = flow(
  removeComments,
  trimNewlines,
  splitQueries,
  array.map(string.trim),
  array.filter(notEmpty),
  array.map(addSemicolon)
);
