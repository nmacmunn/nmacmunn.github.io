<script context="module" lang="ts">
  import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
  import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
  import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
  import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
  import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
  import { onMount } from "svelte";

  function getWorker(_workerId: string, label: string) {
    switch (label) {
      case "json":
        return new jsonWorker();
      case "css":
      case "scss":
      case "less":
        return new cssWorker();
      case "html":
      case "handlebars":
      case "razor":
        return new htmlWorker();
      case "javascript":
      case "typescript":
        return new tsWorker();
    }
    return new editorWorker();
  }

  let init = () => {
    window.MonacoEnvironment = { getWorker };
    init = () => {};
  };
</script>

<script lang="ts">
  onMount(() => init());
</script>
