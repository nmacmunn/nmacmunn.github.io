<script context="module" lang="ts">
  let sqlite3: {
    capi: {
      sqlite3_js_kvvfs_clear(): void;
      sqlite3_js_kvvfs_size(): number;
    };
    oo1: {
      DB: any;
    };
    version: {
      libVersion: string;
    };
  };
  let sqliteInit = async () => {
    const s = await import("$lib/sqlite3/sqlite3-bundler-friendly.mjs");
    sqlite3 = await s.default();
    sqliteInit = async () => {};
  };
</script>

<script lang="ts">
  import { onMount, tick } from "svelte";
  import Monaco from "./monaco.svelte";
  import type * as monaco from "monaco-editor";
  import {
    decodeHistory,
    downloadable,
    presentable,
    uriable,
    type Result
  } from "./util/result";

  let actions: monaco.editor.IActionDescriptor[] = [];
  let activeModel: monaco.editor.ITextModel;
  let activeMonaco: Monaco;
  let db: any;
  let error = "";
  let historyModel: monaco.editor.ITextModel;
  let results: Result[] = [];
  let resultIndex = 0;
  let size = 0;
  let version = "";

  function next() {
    const newRI = resultIndex + 1;
    if (newRI <= results.length) {
      resultIndex = newRI;
      const { sql } = results[resultIndex] || { sql: "" };
      activeModel.setValue(sql);
      activeMonaco.focus();
    }
  }

  function previous() {
    const newRI = resultIndex - 1;
    if (newRI >= 0) {
      resultIndex = newRI;
      activeModel.setValue(results[resultIndex].sql);
      activeMonaco.focus();
    }
  }

  function clear() {
    results = [];
    resultIndex = 0;
    window.location.hash = "";
    activeMonaco.focus();
  }

  function download() {
    const filename = `${Math.floor(Date.now() / 1000)}.sql`;
    const a = document.createElement("a");
    a.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + downloadable(results)
    );
    a.setAttribute("download", filename);
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function reset() {
    sqlite3.capi.sqlite3_js_kvvfs_clear();
    size = 0;
    activeMonaco.focus();
  }

  function run() {
    const sql = activeModel.getValue();
    error = "";
    try {
      const rows = db.exec({
        sql,
        returnValue: "resultRows",
        rowMode: "object"
      });
      results = [...results, { sql, rows }];
      resultIndex = results.length;
      size = sqlite3.capi.sqlite3_js_kvvfs_size();
      window.location.hash = uriable(results);
      historyModel.setValue(presentable(results));
      activeModel.setValue("");
    } catch (e) {
      error = `${e}`;
      console.error(e);
    } finally {
      activeMonaco.focus();
    }
  }

  onMount(async () => {
    const monaco = await import("monaco-editor");
    if (window.location.hash) {
      results = decodeHistory(window.location.hash.substring(1));
      resultIndex = results.length;
    }
    historyModel = monaco.editor.createModel(presentable(results), "sql");
    activeModel = monaco.editor.createModel("", "sql");
    actions = [
      {
        id: "run",
        label: "Run",
        keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.Enter],
        run
      },
      {
        id: "prev",
        label: "Previous",
        keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.UpArrow],
        run: previous
      },
      {
        id: "next",
        label: "Next",
        keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.DownArrow],
        run: next
      }
    ];
    await sqliteInit();
    version = sqlite3.version.libVersion;
    db = new sqlite3.oo1.DB({ filename: ":localStorage:", flags: "ct" });
    size = sqlite3.capi.sqlite3_js_kvvfs_size();
    tick().then(() => activeMonaco.focus());
    return () => db.close();
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
          href={""}
          class="margin-right-small"
          on:click|preventDefault={download}><small>Download</small></a
        >
        <a href={""} on:click|preventDefault={clear}
          ><small>Clear history</small></a
        >
      </div>
      <Monaco
        language="sql"
        lineNumbers={"off"}
        maxHeight={600}
        model={historyModel}
        readOnly={true}
      />
    </div>
  {/if}
  <div class="padding-top padding-bottom">
    <Monaco
      bind:this={activeMonaco}
      {actions}
      {error}
      language="sql"
      lineNumbers={"off"}
      model={activeModel}
    />
  </div>
  <div class="card-footer">
    <div style:display="flex">
      <div style:flex={1}>
        <div class="text-muted">
          <small>
            SQLite version: {version}<br />
            Stored: {size}B
          </small>
        </div>
      </div>
      <div>
        <button class="btn-small" on:click={run}>Run</button>
        <button class="btn-small" on:click={reset}>Reset</button>
      </div>
    </div>
  </div>
</div>
