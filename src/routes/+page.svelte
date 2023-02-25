<script lang="ts">
  import { onMount } from "svelte";

  let active: string | undefined;
  let movingTo: string | undefined;

  function onIntersect(entries: IntersectionObserverEntry[]) {
    const entry = entries.find(({ isIntersecting }) => isIntersecting);
    const current = entry?.target.id;
    if (!current) {
      return;
    }
    if (movingTo && movingTo !== current) {
      return;
    }
    if (current === "top") {
      const { origin, pathname } = location;
      history.replaceState(undefined, "", origin + pathname);
    } else {
      window.location.hash = current;
    }
    movingTo = undefined;
    active = current;
  }

  onMount(() => {
    const observer = new IntersectionObserver(onIntersect, {
      root: null,
      threshold: 0.5
    });
    for (const section of document.getElementsByTagName("section")) {
      observer.observe(section);
    }
    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>Neil MacMunn - Software Engineer</title>
  <meta
    name="description"
    content="Software engineer specializing in web apps and productivity tools."
  />
</svelte:head>

<div class="container">
  <div class="row margin-top" style="position: fixed; z-index: 1">
    <a
      class="paper-btn margin-small"
      class:focus={active === "projects"}
      href="#projects"
      on:click={() => (active = movingTo = "projects")}
    >
      Projects
    </a>
    <a
      class="paper-btn margin-small"
      class:focus={active === "background"}
      href="#background"
      on:click={() => (active = movingTo = "background")}
    >
      Background
    </a>
    <a
      class="paper-btn margin-small"
      class:focus={active === "links"}
      href="#links"
      on:click={() => (active = movingTo = "links")}
    >
      Links
    </a>
    <a
      class="paper-btn margin-small"
      class:focus={active === "posts"}
      href="#posts"
      on:click={() => (active = movingTo = "posts")}
    >
      Posts
    </a>
  </div>
  <div
    class="row flex-center"
    style="position: fixed; bottom: 0; left: 0; right: 0; z-index: 1"
  >
    <a
      id="top-btn"
      class:focus={active === "top"}
      href="#top"
      on:click={() => (active = movingTo = "top")}
    >
      Top
    </a>
  </div>
  <section id="top" class:visible={active === "top"}>
    <h3>Hello!</h3>
    <p>
      I'm <b>Neil</b>, a software engineer currently based in Asheville, North
      Carolina. I mostly build web apps and productivity tools for companies
      like Bloomberg, ModernAdvisor, and Gumstix.
    </p>
    <p>
      I care a lot about delivering simple, beautiful, and maintainable
      products.
      <!-- If you do too and need some help, be sure to <a href="#hire">say hi</a>. -->
    </p>
  </section>
  <section id="projects" class:visible={active === "projects"}>
    <div class="row">
      <div class="col sm-6 md-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">VenueTube</h4>
            <p class="card-text">Playlists for concert discovery</p>
            <a
              class="card-link"
              href="https://venue.tube"
              target="_blank"
              rel="noreferrer">Demo</a
            >
          </div>
        </div>
      </div>
      <div class="col sm-6 md-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">chooseday</h4>
            <p class="card-text">The make better decisions app</p>
            <a
              class="card-link"
              href="https://chooseday.app"
              target="_blank"
              rel="noreferrer">Demo</a
            >
            <a
              class="card-link"
              href="https://github.com/nmacmunn/chooseday"
              target="_blank"
              rel="noreferrer">Source</a
            >
          </div>
        </div>
      </div>
      <div class="col sm-6 md-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">thatfeel.in</h4>
            <p class="card-text">The facial expression party game</p>
            <a
              class="card-link"
              href="https://thatfeel.in"
              target="_blank"
              rel="noreferrer">Demo</a
            >
          </div>
        </div>
      </div>
      <div class="col sm-6 md-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Word Birds</h4>
            <p class="card-text">Side-scroller typing game</p>
            <a
              class="card-link"
              href="https://playwordbirds.com/"
              target="_blank"
              rel="noreferrer">Demo</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="background" class:visible={active === "background"}>
    <p>
      I built my first web app for a PIC microcontroller in 2008. It was written
      in C and occupied less than 65K including the OS, TCP/IP stack, and web
      server.
    </p>

    <p>
      After joining Gumstix in 2010, I went on to co-invent and patent a
      web-based embedded system design tool.
    </p>

    <p>
      In 2014, I became Modern Advisor's first full-time employee and Lead
      Developer. We gained regulatory approval, released 1.0, and raised Series
      A financing within a year.
    </p>

    <p>
      From 2016 to 2021, I was a Senior Software Developer building developer
      tools at Bloomberg.
    </p>

    <p>
      Check out my full
      <a href="/resume.pdf" target="_blank" rel="noreferrer">resume</a>
      and connect with me on
      <a
        href="https://www.linkedin.com/in/neilmacmunn"
        target="_blank"
        rel="noreferrer">LinkedIn</a
      >.
    </p>
  </section>
  <section id="links" class:visible={active === "links"}>
    <div>
      <h4>Toolbox</h4>
      <p>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer">TypeScript</a
        >: JavaScript with syntax for types
      </p>
      <p>
        <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer"
          >SvelteKit</a
        >: web development, streamlined
      </p>
      <p>
        <a href="https://jestjs.io/" target="_blank" rel="noreferrer">Jest</a>:
        Delightful JavaScript testing
      </p>
      <h4>Learning</h4>
      <p>
        <a
          href="https://webassembly.org/"
          class="warning"
          target="_blank"
          rel="noreferrer">WebAssembly</a
        >: Native performance, JavaScript ubiquity
      </p>
      <p>
        <a
          href="https://gcanti.github.io/fp-ts/"
          class="warning"
          target="_blank"
          rel="noreferrer">fp-ts</a
        >: Typed functional programming in TypeScript
      </p>
      <h4>Books</h4>
      <p>
        <a
          href="https://www.oreilly.com/library/view/clean-code-a/9780136083238/"
          class="success"
          target="_blank"
          rel="noreferrer">Clean Code</a
        >: Software craftsmanship manifesto
      </p>
      <p>
        <a
          href="https://www.simonandschuster.com/books/Managing-the-Design-Factory/Donald-Reinertsen/9780684839912"
          class="success"
          target="_blank"
          rel="noreferrer">Managing the Design Factory</a
        >: Manufacturing insights applied to product development
      </p>
      <p>
        <a
          href="https://us.macmillan.com/books/9780374533557/thinkingfastandslow"
          class="success"
          target="_blank"
          rel="noreferrer">Thinking, Fast and Slow</a
        >: Experimental science masterclass
      </p>
    </div>
  </section>
  <section id="posts" class:visible={active === "posts"}>
    <p>
      <a href="/posts/notry">TypeScripting Try-Catch</a>: exploring type safe
      alternatives to try-catch
    </p>
  </section>
</div>

<style>
  section {
    min-height: 100vh;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 235ms ease 0s;
    opacity: 0.2;
  }

  section.visible {
    opacity: 1;
  }

  #top-btn.focus {
    opacity: 0;
  }
</style>
