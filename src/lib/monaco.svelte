<script lang="ts">
  import type * as monaco from "monaco-editor";
  import { onMount } from "svelte";
  import InitMonaco from "./init-monaco.svelte";

  export let actions: monaco.editor.IActionDescriptor[] = [];
  export let error: string = "";
  export let language: "sql" | "typescript" = "typescript";
  export let lineNumbers: "on" | "off" = "on";
  export let maxHeight = 1000;
  export let model: monaco.editor.ITextModel | null = null;
  export let readOnly = false;
  export let value: string | undefined = undefined;

  let disposables: monaco.IDisposable[] = [];
  let divEl: HTMLDivElement;
  let editor: monaco.editor.IStandaloneCodeEditor | undefined;
  let showPlaceholder = true;

  export async function focus() {
    if (!editor) {
      return;
    }
    editor.focus();
    if (!model) {
      return;
    }
    const { endColumn, endLineNumber } = model.getFullModelRange();
    editor.setPosition({ column: endColumn, lineNumber: endLineNumber });
  }

  $: if (model) {
    editor?.setModel(model);
    // force
    model.setValue(model.getValue());
    if (error) {
      const range = model.getFullModelRange();
      editor?.createDecorationsCollection([
        {
          range,
          options: {
            hoverMessage: {
              value: error
            },
            className: "squiggly-error"
          }
        }
      ]);
    }
  }

  $: if (editor) {
    for (const action of actions) {
      const disposable = editor.addAction(action);
      disposables.push(disposable);
    }
  }

  function resizeEditor() {
    if (!editor) {
      return;
    }
    const height = Math.min(maxHeight, editor.getContentHeight());
    divEl.style.height = `${height}px`;
    const { width } = divEl.getBoundingClientRect();
    editor.layout({ width, height });
  }

  onMount(async () => {
    const monaco = await import("monaco-editor");
    const isLarge = document.body.clientWidth >= 640;
    editor = monaco.editor.create(divEl, {
      fontSize: isLarge ? 14 : 12,
      language,
      lineNumbers,
      minimap: {
        enabled: false
      },
      overviewRulerLanes: 0,
      readOnly,
      renderLineHighlight: "none",
      scrollBeyondLastLine: false,
      scrollbar: {
        vertical: "visible"
      },
      value,
      wordWrap: "on"
    });

    disposables = [
      editor,
      editor.onDidContentSizeChange(resizeEditor),
      editor.onDidBlurEditorWidget(() => (showPlaceholder = true)),
      editor.onDidFocusEditorText(() => (showPlaceholder = false))
    ];

    resizeEditor();

    return () => disposables.forEach((d) => d.dispose());
  });
</script>

<svelte:window on:resize={resizeEditor} />

<InitMonaco />
<div bind:this={divEl} />
