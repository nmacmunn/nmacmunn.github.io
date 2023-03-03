<script context="module">
  let init = () => {
    initSwc(swcUrl);
    init = () => {};
  };
</script>

<script lang="ts">
  import initSwc, { transformSync } from "@swc/wasm-web";
  import swcUrl from "@swc/wasm-web/wasm-web_bg.wasm?url";
  import type * as monaco from "monaco-editor";
  import { notry, type Of, type Quit } from "notry-ts";
  import format from "pretty-format";
  import { onMount } from "svelte";
  import Monaco from "./monaco.svelte";

  const id = Math.floor(Math.random() * 1000000000).toString(36);

  interface ReplFile {
    name: string;
    src: string;
    show?: boolean;
  }

  interface ReadyFile extends ReplFile {
    model: monaco.editor.ITextModel;
  }

  export let files: ReplFile[];

  let ready: ReadyFile[] = [];
  let main: monaco.editor.ITextModel;
  let active: monaco.editor.ITextModel;

  $: logs = [] as { level: "log" | "error"; msg: string }[];

  function log(level: "log" | "error", val: unknown) {
    logs.push({
      level,
      msg: typeof val === "object" ? format(val) : `${val}`
    });
    logs = logs;
  }

  function transform(input: string) {
    return transformSync(input, {
      jsc: {
        parser: {
          syntax: "typescript",
          tsx: false
        },
        target: "es5",
        loose: false,
        minify: {
          compress: false,
          mangle: false
        }
      },
      module: {
        type: "es6"
      },
      minify: false,
      isModule: "unknown"
    }).code;
  }

  function compile(
    quit: Quit<"Dependency Cycle" | "Missing Import">,
    src: string,
    seen: Record<string, true> = {}
  ): string {
    let compiled = transform(`${src}`);
    const replace: Record<string, string> = {};
    // find imports
    for (const [_, name] of compiled.matchAll(/import.*['"]\.\/(.+)['"]/g)) {
      quit.if(seen[name], "Dependency Cycle");
      const next = ready.find((r) => name === r.name);
      quit.unless(next, "Missing Import");
      const seenNext = { ...seen, [name]: true } as const;
      replace[name] = compile(quit, next.model.getValue(), seenNext);
    }
    // replace imports
    for (const [name, val] of Object.entries(replace)) {
      compiled = compiled.replace(
        `./${name}`,
        `data:text/javascript;base64,${btoa(val)}`
      );
    }
    return compiled;
  }

  function addErrorListener(window: Window) {
    window.addEventListener("error", (e) => log("error", e.error));
  }

  function addMessageListener(window: Window, iframe: HTMLIFrameElement) {
    const listener = (event: MessageEvent) => {
      if (event.source === iframe.contentWindow) {
        window.document.body.removeChild(iframe);
        window.removeEventListener("message", listener);
      }
    };
    window.addEventListener("message", listener);
  }

  function addUnhandledRejectionListener(window: Window) {
    window.addEventListener("unhandledrejection", (e) =>
      log("error", e.reason)
    );
  }

  function build(quit: Quit<Of<typeof compile>>, src: string) {
    return compile(quit, src) + `\nwindow.parent.postMessage("done");`;
  }

  function createIframe(quit: Quit<"Run Failed">) {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.append(iframe);
    if (!iframe.contentDocument || !iframe.contentWindow) {
      quit("Run Failed");
    }
    return iframe as HTMLIFrameElement & {
      contentWindow: Window;
      contentDocument: Document;
    };
  }

  function runIn(document: Document, src: string) {
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = src;
    document.body.appendChild(script);
  }

  function replaceConsole(window: Window) {
    Object.assign(window, {
      console: {
        error: (val: unknown) => log("error", val),
        log: (val: unknown) => log("log", val)
      }
    });
  }

  function run() {
    const did = notry(
      (quit: Quit<Of<typeof createIframe> | Of<typeof build>>) => {
        logs.length = 0;
        const iframe = createIframe(quit);
        addMessageListener(window, iframe);
        addErrorListener(iframe.contentWindow);
        addUnhandledRejectionListener(iframe.contentWindow);
        replaceConsole(iframe.contentWindow);
        const compiled = build(quit, main.getValue());
        runIn(iframe.contentDocument, compiled);
      }
    );
    if (!did.ok) {
      log("error", did.n);
    }
  }

  onMount(async () => {
    const monaco = await import("monaco-editor");
    ready = files.map((file) => {
      const uri = monaco.Uri.file(`${id}/${file.name}.ts`);
      const model = monaco.editor.createModel(file.src, "typescript", uri);
      return { ...file, model };
    });
    active = ready[0].model;
    main = ready[0].model;
    init();
  });
</script>

<div class="card margin-bottom-large">
  <div class="tabs">
    {#each ready as { model, name, show }}
      {#if show !== false}
        <input
          id={model.uri.path}
          type="radio"
          name="tabs-{id}"
          checked={model === active}
          on:change={() => (active = model)}
        />
        <label for={model.uri.path}>{name}.ts</label>
      {/if}
    {/each}
  </div>

  <div class="card-body">
    <Monaco model={active} />
  </div>
  <div class="card-footer">
    <div style:flex="1">
      <pre>{#each logs as { level, msg }}<div
            class:text-danger={level === "error"}>{msg}</div>{/each}</pre>
    </div>
    <div class="margin-left">
      <button class="btn-small" on:click={run}>Run!</button>
    </div>
  </div>
</div>

<style>
  .card-footer {
    display: flex;
    justify-content: space-between;
  }

  .tabs {
    font-size: 16px;
    background-color: var(--white-dark);
  }

  pre {
    font-size: 12px;
    margin: 0;
    min-height: 100%;
  }
</style>
