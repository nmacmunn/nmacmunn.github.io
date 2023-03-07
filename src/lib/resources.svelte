<script lang="ts">
  import A from "./a.svelte";

  export let resources: {
    href: string;
    label: string;
    type: "package" | "docs" | "article";
  }[];

  const toAType = {
    package: "",
    docs: "warning",
    article: "success"
  } as const;
</script>

<h3>Resources</h3>

{#each resources as { href, label, type }}
  <div class="row">
    <div class="col-12 sm-1 margin-right">
      <small class="text-muted">{type}</small>
    </div>
    <div class="col-fill">
      <A {href} {label} type={toAType[type]} />
    </div>
  </div>
{/each}

<style>
  .col-fill {
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
