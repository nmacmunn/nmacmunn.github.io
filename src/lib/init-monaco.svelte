<script context="module" lang="ts">
  import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
  import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
  import { onMount } from "svelte";

  function getWorker(_workerId: string, label: string) {
    if (label === "typescript" || label === "javascript") {
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
