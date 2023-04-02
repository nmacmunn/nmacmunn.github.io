<script lang="ts">
  export let author: string;
</script>

<div class="padding-left padding-right">
  <p class="quote">
    <i>
      <slot />
    </i>
  </p>
  <p class="padding-left">
    <small>- {author}</small>
  </p>
</div>

<style>
  .quote {
    text-align: justify;
  }
</style>
