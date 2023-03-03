<script lang="ts">
  import Diff from "$lib/diff.svelte";
  import Repl from "$lib/ts-repl.svelte";
  import Snippet from "$lib/snippet.svelte";
  import Article from "../../../lib/article.svelte";
  import error from "./examples/error?raw";
  import ex1 from "./examples/ex1.ts?raw";
  import ex2 from "./examples/ex2.ts?raw";
  import ex3 from "./examples/ex3.ts?raw";
  import ex4 from "./examples/ex4.ts?raw";
  import ex5 from "./examples/ex5.ts?raw";
  import ex6 from "./examples/ex6.ts?raw";
  import ext from "./examples/ext?raw";
  import notryTs from "./examples/notry-ts?raw";
  import personNotry from "./examples/person-notry?raw";
  import personReturn from "./examples/person-return?raw";
  import personTryCatch from "./examples/person-try-catch?raw";
  import person from "./examples/person?raw";
  import report from "./examples/report?raw";
  import safeReturn from "./examples/safe-return?raw";
  import safeTryCatch from "./examples/safe-try-catch?raw";
  import scaleBase from "./examples/scale-base?raw";
  import scaleNotry from "./examples/scale-notry?raw";
  import scaleReturn from "./examples/scale-return?raw";
  import scaleTryCatch from "./examples/scale-try-catch?raw";
  import store from "./examples/store?raw";
  import voteNotry from "./examples/vote-notry?raw";
  import voteReturn from "./examples/vote-return?raw";
  import voteTryCatch from "./examples/vote-try-catch?raw";
  import vote from "./examples/vote?raw";

  const title = "TypeScripting Try-Catch";
  const date = new Date("February 25, 2023");

  const sn1 = `type Why = { type: "UserError"; message: string } | { type: "DevError" };`;
  const sn2 = `function getPerson(quit: Quit<Why>, name: string): Person`;
  const sn3 = `quit({ type: "UserError", message: "message" }); 
// or
quit({ type: "DevError" })`;
  const sn4 = `const person = quit.catch(getRecord, "person", name, { type: "DevError" });`;
  const sn5 =
    'quit.unless(person, { type: "UserError", message: `${name} not found` });';
  const sn6 = `export function canVote(
  quit: Quit<Of<typeof getPerson>>,
  name: string
): boolean {
  const person = getPerson(quit, name);
  return person.age >= 18;
}`;
  const sn7 = `function main(name: string) {
  const did = notry(canVote, name);
  if (!did.ok) {
    if (did.n.type === "UserError") {
      console.log(did.n.message);
    } else {
      console.error("We're sorry, something went wrong");
      reportError(did.exception);
    }
  } else {
    console.log(\`\${name} can\${did.y ? "" : "'t"} vote\`);
  }
}`;
  const sn8 = `notry<Y, N, Args extends unknown[]>(
  quitable: Quitable<Y, N, Args>, 
  ...args: Args
): MaybeAsyncDid<Y, N>;`;
  const sn9 = `type Quitable<Y, N, Args extends unknown[]> = (
  quit: Quit<N>,
  ...args: Args
) => Y;`;
  const sn10 = `type Did<Y, N> =
  | { y: { val: Y }; n: never }
  | { y: never; n: { val: N; exception: unknown } };`;
</script>

<svelte:head>
  <title>TypeScripting Try-Catch</title>
  <meta
    name="description"
    content="An exploration of type safe error-handling alternatives to try-catch in TypeScript."
  />
</svelte:head>

<Article {title} {date}>
  <svelte:fragment slot="tldr"
    ><a
      href="https://github.com/nmacmunn/notry"
      target="_blank"
      rel="noreferrer">notry-ts</a
    > is a type safe error handling alternative to try-catch
  </svelte:fragment>

  <p>
    Suppose you're asked to write a new function to determine whether a person
    can vote. It should be easy since there's already a <code>getPerson</code> function.
  </p>

  <Repl
    files={[
      { name: "person", src: ex1 },
      { name: "store", src: store, show: false }
    ]}
  />

  <p>
    Notice that the function signature gives no hint that <code>getPerson</code>
    could throw. This is one problem we want to address.
  </p>

  <p>Here's the new function.</p>

  <Repl
    files={[
      { name: "vote", src: ex2 },
      { name: "person", src: person },
      { name: "store", src: store, show: false }
    ]}
  />

  <p>And last but not least, the main progam.</p>

  <Repl
    files={[
      { name: "main", src: ex3 },
      { name: "vote", src: vote },
      { name: "person", src: person },
      { name: "store", src: store, show: false }
    ]}
  />

  <p>
    Note here that the type of <code>exceptionVar</code> is
    <code>unknown</code>. If you make it something more specific you'll get a
    compiler error.
  </p>

  <pre>Catch clause variable type annotation must be 'any' or 'unknown' if specified.</pre>

  <p>This is another problem we'll try to tackle.</p>

  <h4>Test Cases</h4>

  <p>
    If you run the previous example, you should see three lines written to the
    console.
  </p>

  <p>
    The first shows the output of a successful invocation of <code>main</code>.
  </p>

  <pre>Neil can't vote</pre>

  <p>The second invocation failed with what is probably a user error.</p>

  <pre>Error: Neal not found</pre>

  <p>
    The final result is another error but this time the meaning is less clear.
    It could be an environmental or maybe a programming error. In either case,
    it's not something we expect the user to be able to handle.
  </p>

  <pre>Error: Failed to get record</pre>

  <p>
    Unfortunately, this isn't terribly helpful. It means nothing to the user and
    doesn't give the developer much to debug with.
  </p>

  <p>So how could we improve? A few ideas:</p>

  <ol>
    <li>
      Log the error stack trace: this would be helpful to the developer, but
      probably scare the user.
    </li>
    <li>
      Report the stack trace to the developer. On user errors, this would
      produce noise for the developer. On developer errors, the message would
      still be confusing to the user.
    </li>
    <li>Find a mechanism for differentiating error types.</li>
  </ol>

  <h3>Approaches</h3>

  <p>
    Let's explore idea #3 and compare error handling approaches using the three
    test cases.
  </p>

  <h4>try-catch</h4>

  <p>One simple solution is to throw subclassed Error objects.</p>

  <Repl
    files={[
      { name: "main", src: ex4 },
      { name: "vote-try-catch", src: voteTryCatch },
      { name: "person-try-catch", src: personTryCatch },
      { name: "error", src: error },
      { name: "report", src: report, show: false },
      { name: "store", src: store, show: false }
    ]}
  />

  <p>
    That's better but the type checker doesn't help much. Without reading the
    <code>getPerson</code> source, we can't tell what (or even if) it could
    throw. <code>exceptionVar</code> still has type <code>unknown</code>.
    Narrowing it takes extra effort and if <code>getPerson</code> starts throwing
    something different, the compiler won't tell us.
  </p>

  <h4>Return Types</h4>

  <p>
    One way to lean on the type system for error handling is by using a
    specialized return type. We'll use a union of the successful return type and
    <code>Error</code>s to keep things simple.
  </p>

  <Repl
    files={[
      { name: "main", src: ex5 },
      { name: "vote-return", src: voteReturn },
      { name: "person-return", src: personReturn },
      { name: "error", src: error },
      { name: "report", src: report, show: false },
      { name: "store", src: store, show: false }
    ]}
  />

  <p>
    This yields the same result as <b>try-catch</b> with the added benefit of
    type safety. The biggest downside is the extra check in <code>canVote</code>
    (more on that later).
  </p>

  <p>Following this approach boils down to:</p>

  <ol>
    <li>Replacing <code>throw</code> with <code>return</code> in your code</li>
    <li>Updating the return types</li>
    <li>Propagating errors up the call stack</li>
    <li>
      Wrapping invocations of code you don't control in <code>try-catch</code>
    </li>
  </ol>

  <p>
    There are some simple utilities you can write to make this easier. Still,
    one can't help but wonder - is there a better way?
  </p>

  <h4>notry-ts</h4>

  <p>
    What if we could get the convenience of <b>try-catch</b> and the type safety
    of <b>return types</b>? That's what I set out to answer when I created
    <b>notry-ts</b>. Let's see how our example looks with <code>notry</code>.
  </p>

  <Repl
    files={[
      { name: "main", src: ex6 },
      { name: "vote-notry", src: voteNotry },
      { name: "person-notry", src: personNotry },
      { name: "report", src: report, show: false },
      { name: "store", src: store, show: false },
      { name: "notry-ts", src: notryTs, show: false }
    ]}
  />

  <p>
    This produces the same output as the two previous solutions, so how does it
    work?
  </p>

  <p>The first thing you'll notice is the new <code>Why</code> type.</p>

  <Snippet value={sn1} />

  <p>
    <code>Why</code> represents the type returned when <code>getPerson</code>
    fails. It's used in the new first parameter of <code>getPerson</code>.
  </p>

  <Snippet value={sn2} />

  <p>
    <code>quit</code> has the call signature
    <code>(val: Why) => never</code>. Calling it immediately terminates
    <code>getPerson</code>. So in this case, we could terminate
    <code>getPerson</code>
    by calling:
  </p>

  <Snippet value={sn3} />

  <p>
    Rather than call <code>quit</code> directly, we use two convenience functions.
  </p>

  <p>
    This quits with
    <code>{`{ type: "DevError" }`}</code> if
    <code>{`getRecord("person", name)`}</code>
    throws, returning a <code>Person</code> otherwise.
  </p>

  <Snippet value={sn4} />

  <p>
    This quits with
    <code>{`{ type: "UserError", message: "<name> not found" }`}</code>
    if <code>person</code> is undefined.
  </p>

  <Snippet value={sn5} />

  <p>
    <code>canVote</code> is straightforward. It takes a <code>quit</code>
    parameter of the same type as <code>getPerson</code> and forwards it.
  </p>

  <Snippet value={sn6} />

  <p>
    At the top level, <code>main</code> invokes <code>canVote</code> with
    <code>notry</code> and assigns the result to <code>did</code>.
  </p>

  <Snippet value={sn7} />

  <p>
    <b>How it works</b>
  </p>

  <p>Here is the function signature of <code>notry</code>.</p>

  <Snippet value={sn8} />

  <p>
    The generic types <code>{`<Y, N, Args extends unknown[]>`}</code> represent
    the successful return type, failed return type, and <code>quitable</code> arguments.
  </p>

  <p>
    Any function that accepts <code>Quit</code> as it's first parameter is a
    <code>Quitable</code>.
  </p>

  <Snippet value={sn9} />

  <p>
    So <code>notry</code> requires a <code>Quitable</code> function and
    arguments to pass it and returns a <code>Did</code> containing the result
    (either <code>Y</code> or <code>N</code>).
  </p>

  <Snippet value={sn10} />

  <p>
    <code>Did</code> is a riff on the popular <code>Either</code> or
    <code>Result</code>
    types. It's a discriminated union that indicates whether
    <code>quitable</code> returned or quit. In this case, it'll be
    <code>{`{ y: { val: boolean } }`}</code> or
    <code>{`{ n: { val: Why, exception: unknown } }`}</code>.
  </p>

  <p>
    The last piece of the puzzle is <code>{`MaybeAsyncDid<Y, N>`}</code>. It
    resolves to <code>{`Did<Y, N>`}</code> or
    <code>{`Promise<Did<Y, N>>`}</code>
    depending on whether <code>quitable</code> returns a promise.
  </p>

  <h3>Error Handling At Scale</h3>

  <p>
    In the preceding problem, the difference in error handling solutions might
    seem insignificant. Here we'll look at a fleshier example and try to
    understand how each approach scales.
  </p>

  <Repl
    files={[
      { name: "main", src: scaleBase },
      { name: "ext", src: ext, show: false }
    ]}
  />

  <p>
    The three external functions <code>c</code>, <code>d</code>, and
    <code>e</code>
    could throw so <code>main</code> catches and logs the exception. In the base
    case there is no way to differentiate the three possible failures.
  </p>

  <h4>try-catch</h4>

  <p>
    Let's introduce a utility <code>safe</code> to catch arbitary exceptions and
    throw something specific.
  </p>

  <Repl
    files={[
      { name: "main", src: scaleTryCatch },
      { name: "safe-try-catch", src: safeTryCatch },
      { name: "ext", src: ext, show: false }
    ]}
  />

  <p>The diff shows that it's an unobtrusive change.</p>

  <Diff original={scaleBase} modified={scaleTryCatch} />

  <p>However, no type safety.</p>

  <h4>Return types</h4>

  <p>
    This time we use a variant of <code>safe</code> that catch exceptions and returns
    something specific.
  </p>

  <Repl
    files={[
      { name: "main", src: scaleReturn },
      { name: "safe-return", src: safeReturn },
      { name: "ext", src: ext, show: false }
    ]}
  />

  <p>
    Unfortunately now three of the five lines in both <code>a</code> and
    <code>b</code> are error handling. It's easy to see how this can get unwieldy
    at scale.
  </p>

  <Diff original={scaleBase} modified={scaleReturn} />

  <p>But now we have type safety.</p>

  <h4>notry-ts</h4>

  <p>Finally, an implementation using <code>notry</code>.</p>

  <Repl
    files={[
      { name: "main", src: scaleNotry },
      { name: "ext", src: ext, show: false },
      { name: "notry-ts", src: notryTs, show: false }
    ]}
  />

  <p>
    Apart from the <code>quit</code> parameters, this looks more or less like the
    base case.
  </p>

  <Diff original={scaleBase} modified={scaleNotry} />

  <p>
    Admittedly, all those <code>{`quit: Quit<Why>`}</code> parameters are a bit cumbersome
    so, like anything, you should weigh the benefits against the costs.
  </p>

  <h3>Comparison</h3>

  <p>Let's wrap up by looking at what we get from each approach.</p>

  <h4>Type Safety</h4>

  <p>
    None with <b>try-catch</b> and roughly the same degree with
    <b>return types</b> and <b>notry-ts</b> including the ability to tell at a glance
    if and what errors could occur.
  </p>
  <p>
    The biggest difference is that it's easier to ignore <b>return types</b>. If
    you call a function that normally returns <code>void</code>, you can easily
    forget to check whether an error occurred. This problem only affects
    <b>notry-ts</b> where <code>notry</code> is called.
  </p>

  <h4>Developer Experience</h4>

  <p>
    With <b>try-catch</b>, you could use a utility like <code>safe</code> to incrementally
    improve your error handling done with minimal effect on readability.
  </p>
  <p>
    <b>return types</b> are intuitive since it's natural to associate a function's
    return value with its outcome. This solution requires the greatest amount of
    code and gains usefulness the more it's used.
  </p>
  <p>
    <b>notry</b> has the least intuitive and most sophisticated typing. The
    function body's intent remains clear with error handling is mostly out of
    view. As with
    <b>return types</b>, its usefulness is dependent on how widely it's used.
  </p>

  <h3>Conclusion</h3>

  <p class="padding-bottom-large">
    If you care about type safety (why else would you be here), use
    <b>return types</b> or <b>notry</b>. Choose <b>notry</b> for added readability
    and safety at the cost of complexity.
  </p>

  <h3>Resources</h3>

  <div class="margin-bottom">
    <small class="text-muted">package</small>
    <a href="https://github.com/nmacmunn/notry" target="_blank" rel="noreferrer"
      >notry-ts</a
    >
  </div>
  <div class="margin-bottom">
    <small class="text-muted">package</small>
    <a
      href="https://github.com/supermacro/neverthrow"
      target="_blank"
      rel="noreferrer">neverthrow</a
    >
  </div>
  <div class="margin-bottom">
    <small class="text-muted">package</small>
    <a
      href="https://github.com/wiktor-obrebski/type-safe-errors"
      target="_blank"
      rel="noreferrer">type-safe-errors</a
    >
  </div>

  <div class="margin-bottom">
    <small class="text-muted">article</small>
    <a
      href="https://dev.to/_gdelgado/type-safe-error-handling-in-typescript-1p4n"
      class="success"
      target="_blank"
      rel="noreferrer"
    >
      Type-Safe Error Handling In TypeScript
    </a>
  </div>
  <div class="margin-bottom">
    <small class="text-muted">article</small>
    <a
      href="https://khalilstemmler.com/articles/enterprise-typescript-nodejs/functional-error-handling/"
      class="success"
      target="_blank"
      rel="noreferrer"
    >
      Functional Error Handling
    </a>
  </div>
  <div class="margin-bottom">
    <small class="text-muted">article</small>
    <a
      href="https://www.huy.rocks/everyday/typescript-implement-rust-style-result"
      class="success"
      target="_blank"
      rel="noreferrer"
    >
      TypeScript / Implement Rust-style Result
    </a>
  </div>
</Article>
