<script lang="ts">
  import type { editor, Range } from "monaco-editor";
  import { onMount } from "svelte";
  import InitMonaco from "./init-monaco.svelte";

  export let actions: editor.IActionDescriptor[] = [];
  export let autofocus = false;
  export let error: string = "";
  export let errorOn: string = "";
  export let language: "html" | "sql" | "typescript" = "typescript";
  export let lineNumbers: "on" | "off" = "on";
  export let maxHeight: number | undefined = undefined;
  export let model: editor.ITextModel | undefined = undefined;
  export let readOnly = false;
  export let renderValidationDecorations: "on" | undefined = undefined;
  export let value: string | undefined = undefined;

  export const focus = () => setFocus();

  let divEl: HTMLDivElement;
  let resizeEditor = () => {};
  let setActions = (actions: editor.IActionDescriptor[]) => {};
  let setFocus = () => {};
  let setMarkers: (
    model: editor.ITextModel,
    message: string,
    range: Range
  ) => void;
  let setModel: (model: editor.ITextModel) => void = () => {};

  $: setActions(actions);

  $: if (model) setModel(model);
  // show error
  $: if (error && model) {
    let range = model.getFullModelRange();
    if (errorOn) {
      const f = false;
      const [match] = model.findMatches(errorOn, true, f, f, null, f);
      if (match) {
        range = match.range;
      }
    }
    setMarkers(model, error, range);
  }

  onMount(async () => {
    const monaco = await import("monaco-editor");
    const editor = monaco.editor.create(divEl, {
      fontSize: document.body.clientWidth >= 640 ? 14 : 12,
      language,
      lineNumbers,
      minimap: {
        enabled: false
      },
      model,
      overviewRulerLanes: 0,
      readOnly,
      renderLineHighlight: "none",
      renderValidationDecorations,
      scrollBeyondLastLine: false,
      scrollbar: {
        vertical: "visible"
      },
      value,
      wordWrap: "on"
    });

    model = model || editor.getModel() || undefined;

    resizeEditor = () => {
      const max = maxHeight || document.body.clientHeight / 2;
      const height = Math.min(max, editor.getContentHeight());
      const { width } = divEl.getBoundingClientRect();
      divEl.style.height = `${height}px`;
      editor.layout({ width, height });
    };

    setFocus = () => editor.focus();

    if (autofocus) editor.focus();

    setMarkers = (model, message, range) => {
      const severity = monaco.MarkerSeverity.Error;
      const marker = { message, severity, ...range };
      monaco.editor.setModelMarkers(model, "", [marker]);
    };

    setModel = (model: editor.ITextModel) => {
      model.setValue(model.getValue());
      editor.setModel(model);
      const range = model.getFullModelRange();
      const { endColumn: column, endLineNumber: lineNumber } = range;
      editor.revealLine(lineNumber);
      editor.setPosition({ column, lineNumber });
    };

    const disposables = [editor, editor.onDidContentSizeChange(resizeEditor)];

    setActions = (actions) => {
      disposables.push(...actions.map((action) => editor.addAction(action)));
    };

    return () => disposables.forEach((d) => d.dispose());
  });
</script>

<svelte:window on:resize={resizeEditor} />

<InitMonaco />
<div bind:this={divEl} />
