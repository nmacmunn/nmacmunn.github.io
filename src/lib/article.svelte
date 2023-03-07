<script lang="ts">
  export let title: string;
  export let date: Date;
</script>

<article class="article container container-sm padding-bottom-large">
  <h1 class="article-title">{title}</h1>
  <p class="article-meta">
    {date.toLocaleDateString(undefined, { dateStyle: "medium" })}
  </p>
  {#if $$slots.tldr}
    <div class="text-lead row">
      <div class="margin-right">tl;dr:</div>
      <div class="col-fill"><slot name="tldr" /></div>
    </div>
  {/if}

  <slot />
</article>
