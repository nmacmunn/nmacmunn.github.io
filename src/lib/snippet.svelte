<script lang="ts">
  import Monaco from "./monaco.svelte";
  export let value: string;
</script>

<div class="card margin-bottom-large">
  <div class="card-body">
    <Monaco lineNumbers="off" readOnly={true} {value} />
  </div>
</div>
