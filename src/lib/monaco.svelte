<script lang="ts">
  import { onMount } from "svelte";
  import type * as monaco from "monaco-editor";
  import InitMonaco from "./init-monaco.svelte";

  export let lineNumbers: "on" | "off" = "on";
  export let model: monaco.editor.ITextModel | null = null;
  export let readOnly = false;
  export let value: string | undefined = undefined;

  let divEl: HTMLDivElement;
  let editor: monaco.editor.ICodeEditor | undefined;

  $: if (model) {
    editor?.setModel(model);
    // force
    model.setValue(model.getValue());
  }

  function resizeEditor() {
    if (!editor) {
      return;
    }
    const height = Math.min(1000, editor.getContentHeight());
    divEl.style.height = `${height}px`;
    const { width } = divEl.getBoundingClientRect();
    editor.layout({ width, height });
  }

  onMount(async () => {
    const monaco = await import("monaco-editor");
    const isLarge = document.body.clientWidth >= 640;
    editor = monaco.editor.create(divEl, {
      fontSize: isLarge ? 14 : 12,
      language: "typescript",
      lineNumbers,
      minimap: {
        enabled: false
      },
      overviewRulerLanes: 0,
      readOnly,
      scrollBeyondLastLine: false,
      value
    });
    const listener = editor.onDidContentSizeChange(resizeEditor);
    resizeEditor();
    return () => {
      listener.dispose();
      editor?.dispose();
    };
  });
</script>

<svelte:window on:resize={resizeEditor} />

<InitMonaco />
<div bind:this={divEl} />
