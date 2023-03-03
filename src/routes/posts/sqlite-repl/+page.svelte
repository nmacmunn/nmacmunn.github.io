<script lang="ts">
  import Article from "../../../lib/article.svelte";
  import Href from "../../../lib/href.svelte";
  import SqliteRepl from "../../../lib/sqlite-repl.svelte";

  const date = new Date("March 1, 2023");
  const title = "A browser-based SQLite REPL";
  const description = "";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<Article {title} {date}>
  <svelte:fragment slot="tldr">SQLite is awesome.</svelte:fragment>

  <h3>SQLite is awesome.</h3>

  <p>
    I generally choose the simplest solution to a problem until it I run into
    its limits. At that point I can evaluate more advanced options from a better
    vantage.
  </p>

  <p>
    I've been using Firebase a lot in the past few years. I have a handful of
    live projects using it that were simple to setup, require almost no
    maintenance, and costs next to nothing. For authentication, Firebase is
    still my absolute go-to.
  </p>

  <p>
    However, Firebase's storage options are limited and I knew I wanted
    something more powerful when I built
    <a href="https://venue.tube" target="_blank" rel="noreferrer">
      VenueTube
    </a> which would be more data intensive.
  </p>

  <p>
    In the past I'd used MySQL and MongoDB professionally but following the
    principle of doing the simplest thing possible, I elected to use SQLite.
    There are a few things I haven't ironed out yet but overall I'd call it a
    smashing success.
  </p>

  <h3>WebAssembly is awesome, too.</h3>

  <p>
    One technology that I'm super excited about right now is WebAssembly. Years
    ago I decided to trade the power and control of C for the ubiquity of
    JavaScript. For the most part it has felt like the right decision and my
    background in C served as a solid foundation for work on the web.
  </p>

  <p>
    That said, amidst a background of bloated web applications with huge
    dependency graphs, the arrival of Wasm has been a breath of fresh air. I'm
    sure I've encountered many web apps using Wasm under the hood but the first
    project to really grab my attention was <Href
      href="https://swc.rs/"
      title="SWC"
    /> a Rust-based web transpiler that compiles to Wasm.
  </p>

  <p>
    Working on developer tools at Bloomberg we were super excited about SWC. I
    put it to use to build the browser-only Typescript REPL in my <Href
      href="/posts/notry"
      title="notry-ts post"
    />
  </p>

  <h3>Putting them together</h3>

  <p>
    Not only is SQLite already precompiled to Wasm but there are a handful of
    demos included showing how to use it. So let's get cracking.
  </p>

  <p>
    First we need to grab the WebAssembly & JavaScript archive from <Href
      href="https://sqlite.org/download.html"
      title="here"
    />.
  </p>

  <SqliteRepl />

  <p>
    A bunch of different sql databases including two implementations of sqlite
    in the browser:
    <a href="http://sqlfiddle.com/"> http://sqlfiddle.com/ </a>
  </p>

  <p>
    Build on sql.js:
    <a href="https://sql.js.org/examples/GUI/index.html">
      https://sql.js.org/examples/GUI/index.html
    </a>
  </p>
</Article>
