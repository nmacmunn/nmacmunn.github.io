<script lang="ts">
  import Monaco from "./monaco.svelte";
  export let error = "";
  export let errorOn = "";
  export let language: "html" | "sql" | "typescript" = "typescript";
  export let value: string;
</script>

<div class="card margin-bottom-large">
  <div class="card-body">
    <Monaco
      {error}
      {errorOn}
      {language}
      lineNumbers="off"
      readOnly={true}
      renderValidationDecorations={error ? "on" : undefined}
      {value}
    />
  </div>
</div>
