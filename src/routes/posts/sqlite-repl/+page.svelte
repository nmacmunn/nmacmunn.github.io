<script lang="ts">
  import A from "$lib/a.svelte";
  import Article from "$lib/article.svelte";
  import Resources from "$lib/resources.svelte";
  import Snippet from "$lib/snippet.svelte";
  import SqliteRepl from "$lib/sqlite-repl.svelte";
  import indexHtmlRaw from "./examples/index.html?raw";
  import mainTsRaw from "./examples/main.ts?raw";

  const date = new Date("March 7, 2023");
  const title = "Building a SQLite Playground";
  const description =
    "How to build a SQLite REPL that runs entirely in the browser.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<Article {title} {date}>
  <svelte:fragment slot="tldr">
    Build a <A
      href="https://github.com/nmacmunn/qads-repl"
      label="quick-and-dirty SQLite REPL"
    />
    using WebAssembly and Monaco
  </svelte:fragment>

  <p>
    A read–eval–print loop (REPL) is an interactive environment that takes user
    inputs, executes them, and returns the result. I made a TypeScript REPL
    using Monaco and SWC to show how <A href="/posts/notry" label="notry-ts" /> works
    and thought it would be fun to do the same for SQLite.
  </p>

  <p>The good news is I got it working.</p>

  <h5>SQLite REPL Svelte Edition</h5>
  <SqliteRepl />

  <p>
    Unfortunately, by the time I got everything working with SvelteKit it was a
    little too complex to describe in a post. So I distilled it down to a
    quick-and-dirty REPL that can help you get started with Monaco or SQLite in
    the browser.
  </p>

  <h3>Some background</h3>

  <h4>Databases in the browser</h4>

  <p>
    In 2014, I was doing a lot of work with Meteor and was blown away when I
    learned about Minimongo.
  </p>

  <pre>Minimongo is essentially an in-memory, non-persistent implementation of Mongo in pure JavaScript. It serves as a local cache that stores just the subset of the database that this client is working with. Queries (find) on these collections are served directly out of this cache, without talking to the server.</pre>

  <p>
    I thought it would be great if something similar existed based on a
    relational database. It turns out that once upon a time there was a browser
    API specification called Web SQL. Unfortunately, it was deprecated back in
    2010. The reason is captured well in a StackOverflow answer.
  </p>

  <pre>Short version: Web SQL was deprecated because standards are really important and turning Web SQL into a proper standard would have been prohibitively difficult.</pre>

  <p>
    Fair enough. Don't let that get you down though, we're living in the future
    now. It's a time when you don't need a built-in API to get native
    performance. It's the time of WebAssembly.
  </p>

  <h4>Everything is Wasm</h4>

  <p>
    One technology that I'm super excited about is WebAssembly. Years ago I
    decided to trade the power of C for the ubiquity of JavaScript. For the most
    part, it has felt like the right decision and having a C background was a
    good foundation for work on the web.
  </p>

  <p>
    But now I don't have to compromise. Languages like C and Rust already
    compile to Wasm. <A href="https://swc.rs/" label="SWC" /> is a Rust-based web
    transpiler that compiles to Wasm. It's what I used to perform in-browser transpilation
    for the TypeScript REPL.
  </p>

  <p>Amazingly, SQLite (written in C) is already compiled to Wasm.</p>

  <h4>Monaco</h4>

  <p>
    Monaco is the code editor that powers VSCode. It provides SQL syntax
    highlighting, hotkey registration, and a ton of other features that we'll
    only scratch the surface of. If you want to get a better idea of Monaco's
    capabilities, be sure to check out the <A
      href="https://microsoft.github.io/monaco-editor/playground.html"
      label="Monaco Playground"
    />.
  </p>

  <h3>Let's Build</h3>

  <h4>SQLite3</h4>

  <h5>Getting the code</h5>

  <p>
    Not only is SQLite already precompiled to Wasm but there are a handful of
    demos showing how to use it. We just need to grab the WebAssembly &
    JavaScript archive from <A
      href="https://sqlite.org/download.html"
      label="here"
    /> and then figure out which files to use.
  </p>

  <p>There are a few options to choose from depending on whether you:</p>

  <ol>
    <li>are using a bundler</li>
    <li>want to use the UI thread or a worker</li>
    <li>want a synchronous or promise-based API (only applies to workers)</li>
  </ol>

  <p>
    We're going to use a bundler since it makes working with Monaco easier. It's
    a REPL so we won't worry about UI responsiveness while the DB is running
    queries. We are interested in the persistence options though. From the
    SQLite Wasm docs:
  </p>

  <pre>This API provides database persistence via localStorage/sessionStorage and, in compatible browsers, the Origin-Private FileSystem.</pre>

  <pre>kvvfs is an sqlite3_vfs implementation conceived and created to store a whole sqlite3 database in the localStorage or sessionStorage objects. Those objects are only available in the main UI thread, not Worker threads, so this feature is only available in the main thread.</pre>

  <pre>The Origin-Private FileSystem, OPFS, is an API providing browser-side persistent storage which, not coincidentally, sqlite3 can use for storing databases.</pre>

  <pre>As of late 2022, only bleeding-edge versions of Chromium-derived browsers have the necessary APIs.</pre>

  <p>
    So, in the interest of maximizing compatibility, we'll run SQLite in the
    main thread which requires these files.
  </p>

  <ol>
    <li>sqlite3.wasm</li>
    <li>sqlite3-bundler-friendly.mjs</li>
    <li>sqlite3-opfs-async-proxy.js</li>
  </ol>

  <p>
    Since we aren't using OPFS, the third shouldn't be needed but the bundler
    fails without it.
  </p>

  <h5>Initializing</h5>

  <p>
    We'll copy the files into the <code>src</code> directory where they can be
    imported by <code>main.ts</code>. Then we can initialize SQLite and create a
    database.
  </p>

  <Snippet
    value={`// main.ts
import initSqlite from "./sqlite3-bundler-friendly.mjs";

async function init() {
  const sqlite3 = await initSqlite();
  const db = new sqlite3.oo1.DB(":localStorage:", "ct");
}

init();`}
  />

  <p>
    The filename <code>:localStorage:</code> tells SQLite to use local storage
    for persistence. We pass the flag <code>c</code> to create the database if
    it doesn't exist and <code>t</code> to enable tracing (appears in the developer
    console).
  </p>

  <h5>Running queries</h5>

  <p>
    The SQLite API provides a few ways to build and run queries but we'll stick
    to <code>exec</code>.
  </p>

  <Snippet
    value={`function run() {
  try {
    const start = performance.now();
    const rows = db.exec(sql, { rowMode: "object" });
    const time = performance.now() - start;
    console.log(JSON.stringify(rows), time);
  } catch (e) {
    console.error(e);
  }
}`}
  />

  <p>
    We get the start time to help detect slow queries and then call <code
      >db.exec</code
    >, passing it SQL to run and an options object containing
    <code>rowMode: "object"</code>. This tells <code>exec</code> to return the result
    rows as an array of key value-pairs.
  </p>

  <p>
    We'll revisit <code>run</code> later when it's time to integrate with Monaco.
  </p>

  <h5>Clearing the database</h5>

  <p>
    Apart from creating a database and executing queries, the only other SQLite
    functionality we need is for clearing the database.
  </p>

  <Snippet
    language="typescript"
    value={`sqlite3.capi.sqlite3_js_kvvfs_clear();`}
  />

  <p>This removes all SQLite data from local storage.</p>

  <h4>Monaco</h4>

  <p>
    We're going to lean on Monaco to do all of the heavy lifting in terms of UI.
  </p>

  <h5>Installation</h5>

  <p>Via npm:</p>

  <pre>$ npm install monaco-editor</pre>

  <h5>Initializing</h5>

  <p>
    Monaco uses the global variable <code>MonacoEnvironment</code> to specify where
    to find the worker code. This is how that looks with Vite.
  </p>

  <Snippet
    value={`import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";

window.MonacoEnvironment = { getWorker: () => new editorWorker() };`}
  />

  <p>Without it, this warning will appear in the console:</p>

  <pre>Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes.</pre>

  <h5>Models</h5>

  <p>
    We'll create two objects of type <code>monaco.editor.ITextModel</code>
    representing text files. One will contain query history and be displayed in a
    read-only editor. The other will contain the active query being edited.
  </p>

  <Snippet value={`const model = monaco.editor.createModel("", "sql");`} />

  <p>
    The first argument is the initial content of the model and the second is the
    language.
  </p>

  <h5>Editor</h5>

  <p>
    Now that we have models, we need to display them somewhere. Since there will
    be two nearly-identical editors, we'll define a function to initialize them.
  </p>

  <Snippet
    value={`function initEditor(id: string, readOnly: boolean) {
  const el = document.getElementById(id);
  const model = monaco.editor.createModel("", "sql");
  const editor = monaco.editor.create(el, {
    language: "sql",
    lineNumbers: "off",
    model,
    minimap: { enabled: false },
    overviewRulerLanes: 0,
    readOnly,
    renderLineHighlight: "none",
    scrollBeyondLastLine: false,
    wordWrap: "on",
  });
  // ...
  return {
    model,
    editor
  }
}`}
  />

  <p>
    We won't go into all of the options here, most are self-explanatory and you
    to play around with them all in the <A
      href="https://microsoft.github.io/monaco-editor/playground.htm"
      label="Monaco Playground"
    />. What's important is that we pass a <code>div</code> where the editor should
    be mounted, a model to display, and the readOnly option.
  </p>

  <h5>Resizing</h5>

  <p>
    We want the editor to resize with its content so we set the option
    <code>scrollBeyondLastLine: false</code> and register an event handler.
  </p>

  <Snippet
    value={`editor.onDidContentSizeChange(() => {
  const height = Math.min(600, editor.getContentHeight());
  const { width } = el.getBoundingClientRect();
  el.style.height = \`$\{height\}px\`;
  editor.layout({ width, height });
});`}
  />

  <p>
    When the content changes size, the container height will be updated and the
    editor will re-layout. Here the height is limited to 600px but it could be
    anything (like function of the window size).
  </p>

  <p>
    It would also be a good idea to listen for <code>resize</code> events on the
    window and trigger an update. In the name of keeping it quick-and-dirty
    we'll leave that as an exercise. Here's the finished <code>initEditor</code>
    function.
  </p>

  <Snippet
    value={`function initEditor(id: string, readOnly: boolean) {
  const el = document.getElementById(id)!;
  const model = monaco.editor.createModel("", "sql");
  const editor = monaco.editor.create(el, {
    language: "sql",
    lineNumbers: "off",
    model,
    minimap: { enabled: false },
    overviewRulerLanes: 0,
    readOnly,
    renderLineHighlight: "none",
    scrollBeyondLastLine: false,
    wordWrap: "on",
  });
  editor.onDidContentSizeChange(() => {
    const height = Math.min(600, editor.getContentHeight());
    const { width } = el.getBoundingClientRect();
    el.style.height = \`$\{height\}px\`;
    editor.layout({ width, height });
  });
  return {
    model,
    editor,
  };
}`}
  />

  <p>
    Those are the basic components needed to put together our REPL. Before we
    do, let's take a quick look at some nice-to-have features.
  </p>

  <h5>Markers</h5>

  <p>
    We can use markers to highlight text in a model. We'll do this when a query
    fails (rather than writing to the console).
  </p>

  <Snippet
    value={`monaco.editor.setModelMarkers(model, "qads-repl", [
  {
    message: \`$\{exceptionVar\}\`,
    severity: monaco.MarkerSeverity.Error,
    ...model.getFullModelRange(),
  },
]);`}
  />

  <p>
    This will draw a squiggly red line under the entire content of the editor.
    When the user hovers over the query, <code>exceptionVar</code> will appear in
    a tooltip like so:
  </p>

  <Snippet
    language="sql"
    value={`SELECT * FROM user;`}
    error="table user doesn't exist"
    errorOn="SELECT * FROM user;"
  />

  <h5>Actions</h5>

  <p>
    As our final feature, we'll register an action to call run when <kbd
      >shift + enter</kbd
    > is pressed.
  </p>

  <Snippet
    value={`editor.addAction({
  id: "run",
  keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.Enter],
  label: "Run",
  run
});`}
  />

  <h4>Putting It Together</h4>

  <p>
    At this point we've seen all of the important bits so we're ready to build
    our crude REPL.
  </p>

  <h5>index.html</h5>

  <Snippet language="html" value={indexHtmlRaw} />

  <h5>main.ts</h5>

  <Snippet value={mainTsRaw} />

  <p>
    That's it! For project configuration and setup instructions, check out the <A
      href="https://github.com/nmacmunn/qads-repl"
      label="GitHub repository"
    />.
  </p>

  <p>
    For a slightly more feature-rich SQLite REPL to play with, <A
      href="/sqlite"
      label="here"
    />'s the original that I created in Svelte.
  </p>

  <Resources
    resources={[
      {
        href: "https://www.npmjs.com/package/monaco-editor",
        label: "Monaco Editor",
        type: "package"
      },
      {
        href: "https://sqlite.org/download.html",
        label: "SQLite3",
        type: "package"
      },
      {
        href: "https://microsoft.github.io/monaco-editor/playground.html",
        label: "Monaco Playground",
        type: "docs"
      },
      {
        href: "https://sqlite.org/wasm/doc/trunk/api-oo1.md",
        label: "SQLite3 Object Oriented API",
        type: "docs"
      },
      {
        href: "https://sqlite.org/wasm/doc/trunk/persistence.md",
        label: "SQLite 3 Persistent Storage Options",
        type: "docs"
      },
      {
        href: "https://softwareengineering.stackexchange.com/a/220257/146806",
        label: "Why is Web SQL database deprecated?",
        type: "article"
      },
      {
        href: "https://hackernoon.com/execute-millions-of-sql-statements-in-milliseconds-in-the-browser-with-webassembly-and-web-workers-3e0b25c3f1a6",
        label:
          "Execute millions of SQL statements in milliseconds in the browser with WebAssembly and Web Workers.",
        type: "article"
      }
    ]}
  />
</Article>
