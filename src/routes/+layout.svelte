<script lang="ts">
  import * as Sentry from "@sentry/browser";
  import "../paper.css";
  import "@fontsource/bitter";
  import "@fontsource/inconsolata";
  import { onMount } from "svelte";

  onMount(() => {
    Sentry.init({
      dsn: "https://669e72ad4df941de88e040eed07e2c4b@o1112692.ingest.sentry.io/6142493"
    });
  });
</script>

<div class="app">
  <main>
    <slot />
  </main>
</div>

<style>
</style>
