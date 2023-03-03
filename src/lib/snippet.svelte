<script lang="ts">
  import Monaco from "./monaco.svelte";
  export let language: "typescript" | "sql" = "typescript";
  export let value: string;
</script>

<div class="card margin-bottom-large">
  <div class="card-body">
    <Monaco lineNumbers="off" readOnly={true} {language} {value} />
  </div>
</div>
