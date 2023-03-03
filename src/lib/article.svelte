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
    <p class="text-lead">
      tl;dr: <slot name="tldr" />
    </p>
  {/if}

  <slot />
</article>
