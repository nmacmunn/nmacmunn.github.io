<script lang="ts">
  import A from "../../../lib/a.svelte";
  import Article from "../../../lib/article.svelte";
  import Quote from "../../../lib/quote.svelte";
  import Resources from "../../../lib/resources.svelte";
  import Section from "../../../lib/section.svelte";
  import Snippet from "../../../lib/snippet.svelte";
  import SubSection from "../../../lib/sub-section.svelte";

  const date = new Date("April 3, 2023");
  const title = "Uni-Testing 101";
  const description =
    "Getting 100% code coverage with a single Playwright test";

  const history = `d8eb580 fix flaky test
f744d31 fix flaky test
f88dd2d fix flaky test
0c27836 fix flaky test
b6f8bfa fix flaky test
3e42121 fix flaky test
5e414d7 game changing feature`;

  const sum = `function sum(a: number, b: number) {
  return a + b;
}`;

  const sumTest = `test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});`;

  const sumTestCheat = `test('adds 1 + 2 to equal 3', () => {
  sum(1, 2);
});`;

  const everythingIsPerfect = `test("app", () => {
  expect(app()).to.bePerfect();
});`;

  const run = `export async function run() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();

  // start trace recording
  await context.tracing.start({ screenshots: true, snapshots: true });

  // monkey patch context.newPage to start coverage
  const newPage = context.newPage.bind(context);
  context.newPage = async () => {
    const page = await newPage();
    const close = page.close.bind(page);
    // monkey patch page.close to stop coverage
    page.close = async () => {
      const coverage = await page.coverage.stopJSCoverage();
      // not shown: aggregate coverage
      await close();
    };
    await page.coverage.startJSCoverage({ resetOnNavigation: false });
    return page;
  };

  try {
    await test(context);
  } catch (e) {
    console.error(e);
  }

  // stop trace recording
  await context.tracing.stop({ path: "trace.zip" });

  const done = context.pages().map(async (page) => {
    const coverage = await page.coverage.stopJSCoverage();
    // not shown: aggregate coverage
    // start the test generator
    return page.pause();
  });
  await Promise.all(done);
  context.close();
  browser.close();
}`;

  const initialTest = `export async function test(context: BrowserContext) {
  const page = await context.newPage();
  await page.goto(APP_URL);
}`;

  const test = `export async function test(context: BrowserContext) {
  const page = await context.newPage();
  const searchInput = page.getByPlaceholder("Search a venue or city...");
  const searchContainer = page.locator("#search-container");
  const clearButton = searchContainer.locator('[uk-icon="close"]');

  log("Load home");
  await page.goto("http://localhost:5173", { waitUntil: "networkidle" });

  log("Fill and clear the search input");
  await searchInput.fill("williamsburg");
  await searchInput.fill("");
  await searchInput.fill("williamsburg");
  await clearButton.click();
  // more steps
}`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta
    property="og:url"
    content="https://neil.macmunn.com/posts/uni-testing"
  />
  <meta property="og:description" content={description} />
  <meta
    property="og:image"
    content="https://neil.macmunn.com/playwright-process.png"
  />
  <meta property="og:type" content="article" />
</svelte:head>

<Article {title} {date}>
  <svelte:fragment slot="tldr">
    Playwright docs advise writing fewer, longer tests. I follow that advice to
    its logical conclusion.
  </svelte:fragment>

  <Section title="">
    <p>
      I'm a big advocate of unit testing and typically aim for 100% code
      coverage on anything that's going to see real use.
    </p>

    <p>
      Aside from improving stability, reliability, and maintainability, the
      test-writing process forces me to ask some hard-hitting questions.
    </p>

    <Quote author="Me, while testing">
      Does this belong here? Am I doing the same thing elsewhere? Is this
      consistent with the rest of the code?
    </Quote>

    <p>
      It's kind of like a code pre-review. It improves the codebase and my
      understanding of it.
    </p>
  </Section>

  <Section title="Unit Testing Woes">
    <p>
      You're probably thinking,
      <i>
        "Great! Sounds like this software quality thing is just about licked."
      </i>
      Unfortunately, such is not the case.
    </p>

    <p>
      After writing many thousands of unit tests and reaching 100% code coverage
      across many codebases, the same problems keep cropping up.
    </p>

    <SubSection title="Volume">
      <p>
        The lines of code for unit tests typically outnumber those belonging to
        the module under test. Here is an example from the Jest documentation.
      </p>

      <Snippet value={sum} language="typescript" />

      <p>
        That's about as simple as it gets. The corresponding test is about the
        same size yet far from comprehensive.
      </p>

      <Snippet value={sumTest} language="typescript" />
    </SubSection>

    <SubSection title="Refactoring">
      <p>
        Unit tests tend to get obliterated in refactoring. That makes sense
        because when you refactor, you're changing the units. In theory, many
        test cases should make it into the new tests. However in practice, it's
        often easier to rewrite them.
      </p>

      <p>
        Another problem arises specifically when testing with code coverage.
      </p>

      <Quote author="Kent C Dodds">
        You may also find yourself testing implementation details just so you
        can make sure you get that one line of code that's hard to reproduce in
        a test environment. You really want to avoid testing implementation
        details because it doesn't give you very much confidence that your
        application is working and it slows you down when refactoring.
      </Quote>

      <p>
        I once read that software is either in one of two states: constant
        refactoring or dying. Neither bodes particularly well for unit tests.
      </p>
    </SubSection>

    <SubSection title="Designing for Test">
      <p>
        Writing code that is readily testable takes more time and effort than
        just getting something working. When you're prototyping, designing for
        test may not make sense and returning to make your code testable later
        can be expensive.
      </p>
    </SubSection>

    <SubSection title="Quality">
      <p>
        We tend to treat test code as second-class and don't hold it to the same
        quality standard as production code. For example, I normally aim to keep
        my functions short and files under 200 lines whenever possible yet
        flagrantly ignore these guidelines when testing. Why? Test code is still
        code.
      </p>
    </SubSection>

    <SubSection title="Bugs">
      <p>
        I could live with all of the above if no bugs ever made it to
        production. Many are caught, some aren't, and some seem embarrassingly
        obvious.
      </p>
    </SubSection>
  </Section>

  <Section title="Goals">
    <p>
      These issues combined seem like a high price to pay for a partial
      solution. After accepting that no test suite could prove my program's
      correctness, I started thinking about a more pragmatic approach to testing
      and some of the qualities of an ideal test suite.
    </p>

    <p class="margin-left">
      <small>Optimist's Rendition of Ideal Test Suite:</small>
    </p>

    <Snippet value={everythingIsPerfect} language="typescript" />

    <SubSection title="Effective">
      <p>
        Catches bugs and improves understanding <b>initially</b> when written
        and <b>continuously</b> and as changes are made.
      </p>
    </SubSection>

    <SubSection title="Fast">
      <p>
        Quick <b>to run</b>, the faster the better. If you're tempted to do
        something else while your tests run, you start to pay context switching
        costs.
      </p>

      <p>
        Quick <b>to write</b>. We prefer to spend our time changing the world
        with production code after all.
      </p>
    </SubSection>

    <SubSection title="Maintainable">
      <p>
        <b>Short</b>. Software bugs are strongly correlated with lines of code
        and there's really no reason to expect test code to be different.
      </p>

      <p>
        <b>High quality</b>. Tests should be held to the same quality standard
        as the rest of our code. We want to be able to tell at a glance what's
        being tested and how.
      </p>

      <p>
        <b>Decoupled</b>. Tests not depending on code being written in a
        particular way are more resilient to changes and lets you focus on
        expressing intent.
      </p>
    </SubSection>

    <SubSection title="Low Frustration">
      <p>
        <b>Reliable</b>. No false positives or negatives. It's hard to think of
        anything more frustrating for a coder than debugging an intermittent
        test failure that doesn't affect users.
      </p>

      <p>
        <b>Targeted</b>. Introducing a bug causes a single test to fail, clearly
        indicating what the problem is.
      </p>
    </SubSection>
  </Section>

  <Section title="What about E2E?">
    <p>
      So the brute force unit testing approach isn't enough. What about
      end-to-end testing?
    </p>

    <p>
      Anyone who's done any UI automation knows that special brand of
      frustration known as the flaky test. In 2014, I was consulting on a
      MeteorJS project that had hundreds of E2E tests using Selenium and
      PhantomJS. Here's the <b>git log</b> as I remember it.
    </p>

    <div class="padding-left padding-right">
      <pre>{history}</pre>
    </div>

    <p>
      Reliability is a major concern with E2E testing; investigating false
      positives can get costly.
    </p>

    <p>
      Difficulty isolating failures is another concern. When a test does fail,
      how easy is it to identify the reason?
    </p>

    <p>
      A final concern is speed. Bringing up browsers and loading apps inevitably
      takes time.
    </p>

    <p>
      Fortunately, native browser support for UI automation and modern tools
      like Playwright (Trace Viewer FTW 👏) have come a long way toward
      improving reliability and identifying failures.
    </p>

    <p>So what can we do about speed?</p>
  </Section>

  <Section title="Zero to One (hundred percent coverage)">
    <p>
      A thing we can do is reduce the number of tests. All the way down. Like,
      one test.
    </p>

    <p>
      From <A
        href="https://playwright.dev/docs/best-practices"
        label="Playwright Best Practices"
      />:
    </p>

    <div class="padding-left padding-right padding-bottom">
      <p>
        <strong>Write fewer tests but longer tests</strong>
      </p>

      <p>
        When it comes to end to end testing having long tests is not a bad
        thing. It's ok to have multiple actions and assertions in your test so
        you can test complete App flows. You should avoid separating your
        assertions into individual test blocks as it doesn't really bring much
        value and just slows down the running of your tests.
      </p>
    </div>

    <p>
      Here's a test exercising all of the front-end code for
      <A href="https://venue.tube" label="VenueTube" /> showing real-time code coverage.
    </p>

    <div class="card margin-bottom-large">
      <video controls>
        <source src="../unitest.webm" type="video/webm" />
        <track kind="captions" />
      </video>
    </div>

    <SubSection title="The Process">
      <p>
        Creating the test was relatively painless with Playwright, a bit of
        hacking, and the following process.
      </p>

      <div style:display="flex" style:justify-content="center">
        <img src="../playwright-process.svg" alt="Process cycle diagram" />
      </div>

      <h5>Run Test</h5>

      <p>
        Run the test with a custom test runner (see below). Initially just
        navigate to the home page.
      </p>

      <Snippet value={initialTest} />

      <h5>Start Inspector</h5>

      <p>
        Start the Playwright Inspector (Code Generator) by appending <code
          >page.pause()</code
        > to the end of the test. The test runner shown below does so automatically.
      </p>

      <h5>Exercise Uncovered</h5>

      <p>
        The hardest part of the process is viewing code coverage. The easiest
        way is to write the coverage output to disk and use the <code>c8</code> package
        to generate HTML reports.
      </p>

      <p>
        Look for uncovered code that can be easily exercised from the current
        state. Start recording with the inspector and perform the necessary
        actions manually.
      </p>

      <h5>Add to Test</h5>

      <p>
        Copy the recorded steps into the test. Give complex locators clear
        variable names and look for reuse opportunities.
      </p>

      <p>Run again ensuring the new steps work and cover the targeted lines.</p>

      <h5>{`< 100% Covered?`}</h5>

      <p>Repeat the cycle until everything is covered.</p>
    </SubSection>

    <SubSection title="Test Runner">
      <p>
        Here's a simplified version of the custom test runner used in the above
        process.
      </p>

      <Snippet language="typescript" value={run} />

      <p>
        The hacking part has to do with aggregating the test coverage and
        dealing with sourcemaps. It's omitted as it could easily fill another
        post.
      </p>
    </SubSection>
  </Section>

  <Section title="Challenges">
    <p>
      These should be no surprise to experienced E2E testers but if you spend
      most of your time on unit tests, you'll have some new challenges to
      consider.
    </p>
    <SubSection title="Authentication">
      <p>
        Because VenueTube uses passwordless authentication, signing in took a
        bit of work. I used the <code>nodemailer</code> package to create an
        ethereal.email account that's API accessible. Then I used the
        <code>imapflow</code>
        package to get the signin email and <code>mailparser</code> to extract the
        link.
      </p>
    </SubSection>
    <SubSection title="External APIs">
      <p>
        Firebase Authentication is one of the external APIs that the application
        sends requests to. Playwright provides a way to intercept requests and
        provide your own response. I didn't because:
      </p>

      <ol>
        <li>I don't intend to run the test in CI (yet)</li>
        <li>Hitting the real thing is low consequence</li>
        <li>It's more realistic this way</li>
      </ol>

      <p>I did have to simulate a webhook to complete one workflow.</p>
    </SubSection>
    <SubSection title="Error Handling">
      <p>
        Exercising error handlers took some understanding of failure modes and a
        bit of tampering with reality. For example, to test the Sentry
        integration, I injected a script into the page to throw an exception
        (obviously none of my actual code would 😉).
      </p>
    </SubSection>
  </Section>

  <Section title="Results">
    <p>Here's what the test looked like early on in the writing process.</p>

    <Snippet language="typescript" value={test} />

    <p>So how does this solution stack up against our ideal test suite?</p>

    <SubSection title="Effectiveness">
      <p>
        I caught a number of bugs, found dead code, and identified some really
        bad UX in the course of writing the test which I wouldn't have with unit
        testing. That said, there are almost certainly still bugs that unit
        tests would catch.
      </p>

      <p>
        Whether the test catches regressions as features are added remains to be
        seen.
      </p>
    </SubSection>

    <SubSection title="Speed">
      <p>
        It takes about 90s which is close to the upper limit of what I'm likely
        to tolerate. We'll discuss opportunities to improve in a bit.
      </p>

      <p>
        Correcting for one-time costs (Playwright learning curve and writing the
        test runner), it took about a day to actually write the test.
      </p>
    </SubSection>

    <SubSection title="Maintainability">
      <p>It's short. Around 250 lines.</p>

      <p>
        Because the test was so short, I wasn't too concerned about quality. I
        did assign non-obvious element selectors to clearly named variables and
        group common sequences into reusable functions.
      </p>

      <Snippet
        value={`const clearButton = searchContainer.locator('[uk-icon="close"]');`}
      />

      <p>
        I didn't change any application code for the sake of the test although
        there were a few places where a different structure would be mutually
        beneficial. This indicates that the test should be resilient to
        application refactoring.
      </p>
    </SubSection>

    <SubSection title="Frustration Factor">
      <p>
        There is definitely still some flakiness but Playwright's Trace Viewer
        really simplifies finding the cause (typically poor selector choice).
      </p>

      <p>
        If a Playwright command fails, it prints a debugging message and I
        explicitly log each step. However, if the failure is a real problem, it
        could take some digging through the app code to find.
      </p>
    </SubSection>
  </Section>

  <Section title="Unexpected Wins">
    <p>
      The main motivator for this project was to get the greatest amount of test
      coverage in the shortest amount of time. While that was a success, there
      were also some unexpected benefits.
    </p>

    <SubSection title="Retroactive Requirements">
      <p>
        VenueTube started as a <A
          href="https://pipedream.com"
          label="pipedream"
        /> script and evolved from there based on user feedback. There was never
        a formal plan or even workflow documentation.
      </p>

      <p>
        Finding and eliminating uncovered code was an exercise in understanding
        workflows and a good opportunity to retroactively create a requirements
        document. Even without a separate document, a well written test can
        function as a passable specification.
      </p>

      <p>
        The same is true of unit tests but at a lower level. An E2E test
        provides value to a wider subset of stakeholders.
      </p>
    </SubSection>

    <SubSection title="Awkward Workflows">
      <p>
        Writing the test also helped catch cumbersome UX. Some workflows that
        seemed intuitive when written were challenging to test. In several cases
        those turned out to be real usability issues.
      </p>

      <p>
        For example, I noticed some vestigial code that could only be exercised
        by signing in and navigating to a specific URL. I needed to remove the
        (effectively dead) code or find a way to make it more accessible.
      </p>
    </SubSection>

    <SubSection title="User and Developer Experience Alignment">
      <p>
        It's possible to have blazing fast unit tests and horrible application
        performance. That's not the case with E2E testing.
      </p>

      <p>
        Testing the entire app makes performance a pain point during
        development. Improvements benefit developers and end-users alike.
      </p>
    </SubSection>
  </Section>

  <Section title="Caveats">
    <SubSection title="">
      <p>
        VenueTube is a simple monolithic app with only a few external API
        integrations. I'm able to get through all existing workflows in about 90
        seconds. Your mileage may vary.
      </p>
    </SubSection>

    <SubSection title="Test Suite Adequacy">
      <p>
        Is code coverage even a good measure of test suite adequacy? After all,
        this test yields 100% coverage for our sum function.
      </p>

      <Snippet value={sumTestCheat} />

      <p>
        The only information this test gives us is that <code>sum(1, 2);</code>
        doesn't throw an exception. Similarly, I didn't <code>assert</code> once.
        Instead, it relies on implicit assertions made by Playwright to proceed through
        the test. There is nothing stopping me from adding assertions but it won't
        improve code coverage.
      </p>

      <Quote author="Winston Churchill, probably">
        Many forms of test adequacy criteria have been tried, and will be tried
        in this world of faulty software. No one pretends that code coverage is
        perfect or all-wise. Indeed, it has been said that code coverage is the
        worst form of test adequacy criteria except for all those other forms
        that have been tried from time to time...
      </Quote>

      <p>
        Code coverage isn't perfect but I haven't found anything better. One
        non-obvious benefit is that there are two ways to increase it: add more
        tests or reduce the source lines that need testing. Targeting the latter
        can lead to a cleaner codebase.
      </p>
    </SubSection>

    <SubSection title="100% Coverage">
      <p>
        The 100% mark is controversial and can be difficult to attain especially
        if you don't design for test from the start. I justify it with these two
        arguments:
      </p>
      <ol>
        <li>Any other number feels (more) arbitrary</li>
        <li>Ensuring that every line of code executes seems like a low bar</li>
      </ol>
      <p>
        Since V8 actually returns coverage count per line, I'd even be inclined
        to go beyond 100% but need to give more thought to how that would work.
      </p>
    </SubSection>
  </Section>

  <Section title="Next Steps">
    <p>
      I'm certainly not advocating the use of a single test to provide all of
      you quality assurance. That would be crazy... right?
    </p>

    <p>Here are some of the next steps I'll take to shore up my QA program.</p>

    <SubSection title="Decomposition">
      <p>
        Splitting the test into independent workflows could improve isolation
        and reduce runtime through parallelization.
      </p>
    </SubSection>
    <SubSection title="Database Setup">
      <p>
        Seeding the database could speed up certain workflows and reduce
        flakiness. In one case, my test started failing because randomly
        generated content contained the word "Holler" which is used in an
        element selector.
      </p>
    </SubSection>
    <SubSection title="Unit Testing">
      <p>
        There are a lot of low-level functions that are only lightly exercised
        here and could easily be unit tested. Complementing E2E tests with unit
        tests focused on especially complex or sensitive operations.
      </p>
    </SubSection>
  </Section>

  <Section title="Conclusion">
    <p>
      If you are early on in development of your app, I'd recommend trying out
      uni-testing™️. It's a low-barrier way to focus on UX and catch potentially
      embarrassing issues before your users do.
    </p>

    <p>
      Once you get some traction, decompose the test suite into a proper test
      pyramid including integration and unit tests.
    </p>

    <p>
      In the meantime, tell anyone who'll listen that your application has 100%
      code coverage.
    </p>
  </Section>

  <Resources
    resources={[
      {
        href: "https://playwright.dev/docs/intro",
        label: "Playwright",
        type: "docs"
      },
      {
        href: "https://github.com/nodemailer/nodemailer",
        label: "Nodemailer",
        type: "package"
      },
      {
        href: "https://github.com/postalsys/imapflow",
        label: "ImapFlow",
        type: "package"
      },
      {
        href: "https://github.com/nodemailer/mailparser",
        label: "mailparser",
        type: "package"
      },
      {
        href: "https://kentcdodds.com/blog/write-tests",
        label: "Write tests. Not too many. Mostly integration.",
        type: "article"
      },
      {
        href: "https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html",
        label: "TestPyramid",
        type: "article"
      },
      {
        href: "https://martinfowler.com/bliki/TestPyramid.html",
        label: "Just Say No to More End-to-End Tests",
        type: "article"
      }
    ]}
  />
</Article>

<style>
  video {
    width: 100%;
  }

  img {
    border: none;
  }
</style>
