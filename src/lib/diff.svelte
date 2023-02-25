<script lang="ts">
  import { onMount } from "svelte";
  import type * as monaco from "monaco-editor";
  import InitMonaco from "./init-monaco.svelte";

  export let original: string;
  export let modified: string;

  let divEl: HTMLDivElement;
  let editor: monaco.editor.IStandaloneDiffEditor | undefined;

  function resizeEditor() {
    if (!editor) {
      return;
    }
    const height = Math.min(
      // max height
      1000,
      // add 20 in case there is a horizontal scroll bar
      Math.max(
        editor.getOriginalEditor().getContentHeight(),
        editor.getModifiedEditor().getContentHeight()
      ) + 20
    );
    divEl.style.height = `${height}px`;
    const { width } = divEl.getBoundingClientRect();
    editor.layout({ width, height });
  }

  onMount(async () => {
    const monaco = await import("monaco-editor");
    const isLarge = document.body.clientWidth >= 640;
    editor = monaco.editor.createDiffEditor(divEl, {
      fontSize: isLarge ? 14 : 12,
      minimap: {
        enabled: false
      },
      overviewRulerLanes: 0,
      readOnly: true,
      renderSideBySide: isLarge,
      scrollBeyondLastLine: false
    });
    editor.setModel({
      original: monaco.editor.createModel(original, "typescript"),
      modified: monaco.editor.createModel(modified, "typescript")
    });
    resizeEditor();
    return () => editor?.dispose();
  });
</script>

<svelte:window on:resize={resizeEditor} />

<InitMonaco />
<div class="card margin-bottom-large">
  <div class="card-body">
    <div bind:this={divEl} />
  </div>
</div>
