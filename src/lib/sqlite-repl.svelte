<script lang="ts">
  import type * as monaco from "monaco-editor";
  import { onMount } from "svelte";
  import Monaco from "./monaco.svelte";
  import * as Result from "./util/result";
  import * as Sqlite from "./util/sqlite3";
  import { clear, exec, size, version } from "./util/sqlite3";
  import { notry, type Quit } from "notry-ts";

  export let autofocus = false;

  const language = "sql";
  const lineNumbers = "off";

  let activeModel: monaco.editor.ITextModel;
  let activeMonaco: Monaco;
  let error = "";
  let errorOn = "";
  let historyModel: monaco.editor.ITextModel;
  let mounted = false;
  let results: Result.Result[] = [];

  // set resultIndex whenever results change
  $: resultIndex = results.length;

  // after the hash has been initially parse, start updating it with results
  $: if (mounted) {
    window.location.hash = Result.uriable(results);
  }

  /**
   * Clear history
   */
  function clearResults() {
    results = [];
    activeMonaco.focus();
  }

  /**
   * Navigate through query history
   */
  function navResult(by: number) {
    return () => {
      resultIndex = Math.max(0, Math.min(resultIndex + by, results.length));
      const { sql } = results[resultIndex] || { sql: "" };
      activeModel.setValue(sql);
      activeModel = activeModel;
      activeMonaco.focus();
    };
  }

  /**
   * Clear data from local storage
   */
  async function resetDb() {
    $clear();
    activeMonaco.focus();
  }

  /**
   * Run the query in the active editor
   */
  function run() {
    const input = activeModel.getValue();
    const queries = Sqlite.getQueries(input);
    error = "";
    while (queries.length) {
      const sql = queries[0];
      const did = notry((quit: Quit<{ sql: string }>) => {
        const start = performance.now();
        const rows = quit.catch($exec, sql, { rowMode: "object" }, { sql });
        const time = performance.now() - start;
        return { sql, rows, time };
      });
      if (!did.ok) {
        error = `${did.exception}`;
        errorOn = did.n.sql;
        break;
      }
      results = [...results, did.y];
      queries.shift();
    }

    historyModel.setValue(Result.presentable(results));
    historyModel = historyModel;

    activeModel.setValue(queries.join("\n"));
    activeModel = activeModel;
    activeMonaco.focus();
  }

  onMount(async () => {
    if (window.location.hash) {
      results = Result.decodeHistory(window.location.hash.substring(1));
    }
    const monaco = await import("monaco-editor");
    const history = Result.presentable(results);
    historyModel = monaco.editor.createModel(history, "sql");
    activeModel = monaco.editor.createModel("", "sql");
    activeMonaco.$set({
      actions: [
        {
          id: "run",
          keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.Enter],
          label: "Run",
          run
        },
        {
          id: "next",
          keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.DownArrow],
          label: "Next",
          run: navResult(1)
        },
        {
          id: "previous",
          keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.UpArrow],
          label: "Previous",
          run: navResult(-1)
        }
      ]
    });
    mounted = true;
  });
</script>

<div class="card margin-bottom-large">
  {#if results.length}
    <div
      class="padding-top-small padding-bottom-small"
      style:border-bottom="1px solid var(--muted-light)"
    >
      <div class="text-right margin-right">
        <a
          class="margin-right-small"
          download="repl.sql"
          href="data:text/plain;charset=utf-8,{Result.downloadable(results)}"
        >
          <small>Download SQL</small>
        </a>
        <a href={""} on:click|preventDefault={clearResults}>
          <small>Clear history</small>
        </a>
      </div>
      <Monaco {language} {lineNumbers} model={historyModel} readOnly={true} />
    </div>
  {/if}
  <div class="padding-top padding-bottom">
    <Monaco
      bind:this={activeMonaco}
      {autofocus}
      {error}
      {errorOn}
      {language}
      {lineNumbers}
      model={activeModel}
    />
  </div>
  <div class="card-footer">
    <div style:display="flex">
      <div style:flex={1} class="margin-right-small">
        {#if error}
          <div class="text-danger">
            <small>{error}</small>
          </div>
        {:else}
          <div class="text-muted">
            <small>
              SQLite version: {$version}<br />
              Stored: {$size}B
            </small>
          </div>
        {/if}
      </div>
      <div>
        <button class="btn-small" on:click={run}>Run</button>
        <button class="btn-small" on:click={resetDb}>Reset</button>
      </div>
    </div>
  </div>
</div>
