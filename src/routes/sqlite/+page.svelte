<script>
  import Snippet from "$lib/snippet.svelte";
  import SqliteRepl from "$lib/sqlite-repl.svelte";
</script>

<div class="container container-sm padding-bottom-large">
  <h2>SQLite REPL</h2>

  <p class="padding-small background-secondary text-center">
    <small>
      <a href="/posts/sqlite-repl">
        Learn how SQLite is running and storing data in the browser
      </a>
    </small>
  </p>

  <div class="padding-bottom-large">
    <SqliteRepl />
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
    <h6 class="text-muted">Query table names</h6>
    <Snippet
      language="sql"
      value={`SELECT name FROM sqlite_schema WHERE type='table';`}
    />

    <h6 class="text-muted">Create a table</h6>
    <Snippet
      language="sql"
      value={`CREATE TABLE users(
    id INTEGER PRIMARY KEY, 
    email TEXT UNIQUE NOT NULL
  );`}
    />

    <h6 class="text-muted">Insert a row</h6>
    <Snippet
      language="sql"
      value={`INSERT INTO users(email)
    VALUES('neil@example.com');`}
    />

    <h6 class="text-muted">Query a table</h6>
    <Snippet
      language="sql"
      value={`SELECT * FROM users WHERE email = 'neil@example.com';`}
    />

    <h6 class="text-muted">Delete a row</h6>
    <Snippet language="sql" value={`DELETE FROM users WHERE id = 1;`} />
  </div>
</div>

<style>
  h6 {
    margin-bottom: 1em;
  }
</style>
