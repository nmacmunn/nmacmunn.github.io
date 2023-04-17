<script lang="ts">
  import * as Sentry from "@sentry/browser";
  import "../paper.css";
  import "@fontsource/bitter";
  import "@fontsource/inconsolata";
  import { onMount } from "svelte";

  let filter = "blur(25px)";

  onMount(async () => {
    Sentry.init({
      dsn: "https://669e72ad4df941de88e040eed07e2c4b@o1112692.ingest.sentry.io/6142493"
    });
    await document.fonts.ready;
    filter = "blur(0px)";
  });
</script>

<div class="app">
  <main style:filter on:transitionend={() => (filter = "")}>
    <slot />
  </main>
</div>

<style>
  main {
    transition: filter 500ms ease 0s;
  }
</style>
