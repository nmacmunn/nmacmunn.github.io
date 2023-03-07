<script lang="ts">
  import Snippet from "$lib/snippet.svelte";
  import SqliteRepl from "$lib/sqlite-repl.svelte";

  const cheats = [
    {
      label: "Query table names",
      code: `SELECT name FROM sqlite_schema WHERE type='table';`
    },
    {
      label: "Create a table",
      code: `CREATE TABLE users(
  id INTEGER PRIMARY KEY, 
  email TEXT UNIQUE NOT NULL
);`
    },
    {
      label: "Insert a row",
      code: `INSERT INTO users(email)
  VALUES('neil@example.com');`
    },
    {
      label: "Query a table",
      code: `SELECT * FROM users WHERE email = 'neil@example.com';`
    },
    {
      label: "Delete a row",
      code: `DELETE FROM users WHERE id = 1;`
    }
  ];
</script>

<svelte:head>
  <title>SQLite Playground</title>
  <meta
    name="description"
    content="An interactive SQLite database right in your browser."
  />
</svelte:head>

<div class="container container-sm padding-bottom-large">
  <h2>SQLite Playground</h2>

  <p class="padding-small background-secondary text-center">
    <small>
      <a href="/posts/sqlite-repl">
        Learn how SQLite runs and stores data in the browser
      </a>
    </small>
  </p>

  <div class="padding-bottom-large">
    <SqliteRepl autofocus={true} />
  </div>

  <h5 style:text-decoration="underline">Shortcuts</h5>

  <div class="row">
    <div class="col">
      <h6 class="text-muted" style:display="inline">Run</h6>
      <kbd>shift + enter</kbd>
    </div>
    <div class="col">
      <h6 class="text-muted" style:display="inline">Previous</h6>
      <kbd>shift + up</kbd>
    </div>
    <div class="col">
      <h6 class="text-muted" style:display="inline">Next</h6>
      <kbd>shift + down</kbd>
    </div>
  </div>

  <h5 style:text-decoration="underline">Cheatsheet</h5>

  <div class="padding-left padding-right padding-bottom">
    {#each cheats as cheat}
      <h6 class="text-muted">{cheat.label}</h6>
      <Snippet language="sql" value={cheat.code} />
    {/each}
  </div>
</div>

<style>
  h6 {
    margin-bottom: 1em;
  }
</style>
