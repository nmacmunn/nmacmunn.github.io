import{S as bs,i as vs,s as ys,k as s,a as p,y as h,K as $s,l as a,h as t,c as m,z as w,n as ws,D as n,b as o,A as c,g as b,d as v,B as y,q as l,m as f,r,I as cs}from"../chunks/index.4711a160.mjs";import{A as N,R as Es}from"../chunks/resources.cfbab304.mjs";import{A as _s}from"../chunks/article.06c607fb.mjs";import{S as P}from"../chunks/snippet.e1d427ae.mjs";import{S as Ss}from"../chunks/sqlite-repl.72ed6975.mjs";const ks=`<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        margin: 10px auto;
        max-width: 80ch;
        outline: 1px solid;
        padding: 10px;
      }
    </style>
    <script src="/src/main.ts" type="module"><\/script>
  </head>
  <body>
    <div id="history"></div>
    <div id="queries"></div>
    <hr />
    <button id="run">Run</button>
    <button id="clear">Clear</button>
  </body>
</html>
`,Ps=`import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import initSqlite from "./sqlite3-bundler-friendly.mjs";

window.MonacoEnvironment = { getWorker: () => new editorWorker() };

function initEditor(id: string, readOnly: boolean) {
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
    wordWrap: "on"
  });
  editor.onDidContentSizeChange(() => {
    const height = Math.min(600, editor.getContentHeight());
    const { width } = el.getBoundingClientRect();
    el.style.height = \`\${height}px\`;
    editor.layout({ width, height });
  });
  return {
    model,
    editor
  };
}

async function init() {
  const sqlite3 = await initSqlite();
  const db = new sqlite3.oo1.DB(":localStorage:", "ct");

  const history = initEditor("history", true);
  const queries = initEditor("queries", false);

  queries.editor.addAction({
    id: "run",
    keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.Enter],
    label: "Run",
    run
  });

  function run() {
    const sql = queries.model.getValue();
    try {
      const start = performance.now();
      const rows = db.exec(sql, { rowMode: "object" });
      const time = performance.now() - start;
      let text = history.model.getValue();
      text += \`\${text ? "\\n" : ""}\${sql}\\n\`;
      text += \`-- \${JSON.stringify(rows)} (\${time.toFixed(1)}ms)\`;
      history.model.setValue(text);
      queries.model.setValue("");
    } catch (e) {
      monaco.editor.setModelMarkers(queries.model, "qads-repl", [
        {
          message: \`\${e}\`,
          severity: monaco.MarkerSeverity.Error,
          ...queries.model.getFullModelRange()
        }
      ]);
    }
    queries.editor.focus();
  }

  document.getElementById("run")!.addEventListener("click", run);
  document.getElementById("clear")!.addEventListener("click", () => {
    history.model.setValue("");
    sqlite3.capi.sqlite3_js_kvvfs_clear();
  });

  queries.editor.focus();
}

init();
`;function Ls(ce){let $,E,_,S,u,d,k,J,be,Co,Bt,K,Ft,ve,Ro,Ut,ye,Oo,Vt,$e,Qo,Nt,Ee,To,Jt,_e,Ao,Kt,Se,Ho,Gt,ke,Do,Yt,Pe,jo,Xt,Le,zo,Zt,qe,Bo,ei,C,Fo,G,Uo,ti,Ie,Vo,ii,ge,No,oi,R,Jo,Y,Ko,ni,We,Go,li,Me,Yo,ri,xe,Xo,si,O,Zo,X,en,ai,Ce,tn,fi,I,yt,on,nn,$t,ln,rn,Et,sn,pi,Re,an,mi,Oe,fn,ui,Qe,pn,di,Te,mn,hi,Ae,un,wi,He,dn,ci,g,_t,hn,wn,St,cn,bn,kt,vn,bi,De,yn,vi,je,$n,yi,W,En,Pt,_n,Sn,Lt,kn,Pn,$i,Z,Ei,L,Ln,qt,qn,In,It,gn,Wn,gt,Mn,xn,_i,ze,Cn,Si,Q,Rn,Wt,On,Qn,ki,ee,Pi,q,Tn,Mt,An,Hn,xt,Dn,jn,Ct,zn,Bn,Li,T,Fn,Rt,Un,Vn,qi,Be,Nn,Ii,Fe,Jn,gi,te,Wi,Ue,Kn,Mi,Ve,Gn,xi,Ne,Yn,Ci,Je,Xn,Ri,Ke,Zn,Oi,Ge,el,Qi,Ye,tl,Ti,A,il,Ot,ol,nl,Ai,ie,Hi,Xe,ll,Di,Ze,rl,ji,et,sl,zi,H,al,Qt,fl,pl,Bi,oe,Fi,tt,ml,Ui,it,ul,Vi,ot,dl,Ni,ne,Ji,M,hl,le,wl,Tt,cl,bl,Ki,nt,vl,Gi,D,yl,At,$l,El,Yi,re,Xi,lt,_l,Zi,x,Sl,Ht,kl,Pl,Dt,Ll,ql,eo,se,to,rt,Il,io,st,gl,oo,at,Wl,no,ae,lo,j,Ml,jt,xl,Cl,ro,fe,so,ft,Rl,ao,z,Ol,zt,Ql,Tl,fo,pe,po,pt,Al,mo,mt,Hl,uo,ut,Dl,ho,me,wo,dt,jl,co,ue,bo,B,zl,de,Bl,vo,F,Fl,he,Ul,yo,we,$o;return _=new N({props:{href:"/posts/notry",label:"notry-ts"}}),K=new Ss({}),G=new N({props:{href:"https://swc.rs/",label:"SWC"}}),Y=new N({props:{href:"https://microsoft.github.io/monaco-editor/playground.html",label:"Monaco Playground"}}),X=new N({props:{href:"https://sqlite.org/download.html",label:"here"}}),Z=new P({props:{value:`// main.ts
import initSqlite from "./sqlite3-bundler-friendly.mjs";

async function init() {
  const sqlite3 = await initSqlite();
  const db = new sqlite3.oo1.DB(":localStorage:", "ct");
}

init();`}}),ee=new P({props:{value:`function run() {
  try {
    const start = performance.now();
    const rows = db.exec(sql, { rowMode: "object" });
    const time = performance.now() - start;
    console.log(JSON.stringify(rows), time);
  } catch (e) {
    console.error(e);
  }
}`}}),te=new P({props:{language:"typescript",value:"sqlite3.capi.sqlite3_js_kvvfs_clear();"}}),ie=new P({props:{value:`import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";

window.MonacoEnvironment = { getWorker: () => new editorWorker() };`}}),oe=new P({props:{value:'const model = monaco.editor.createModel("", "sql");'}}),ne=new P({props:{value:`function initEditor(id: string, readOnly: boolean) {
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
}`}}),le=new N({props:{href:"https://microsoft.github.io/monaco-editor/playground.htm",label:"Monaco Playground"}}),re=new P({props:{value:`editor.onDidContentSizeChange(() => {
  const height = Math.min(600, editor.getContentHeight());
  const { width } = el.getBoundingClientRect();
  el.style.height = \`\${height}px\`;
  editor.layout({ width, height });
});`}}),se=new P({props:{value:`function initEditor(id: string, readOnly: boolean) {
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
    el.style.height = \`\${height}px\`;
    editor.layout({ width, height });
  });
  return {
    model,
    editor,
  };
}`}}),ae=new P({props:{value:`monaco.editor.setModelMarkers(model, "qads-repl", [
  {
    message: \`\${exceptionVar}\`,
    severity: monaco.MarkerSeverity.Error,
    ...model.getFullModelRange(),
  },
]);`}}),fe=new P({props:{language:"sql",value:"SELECT * FROM user;",error:"table user doesn't exist",errorOn:"SELECT * FROM user;"}}),pe=new P({props:{value:`editor.addAction({
  id: "run",
  keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.Enter],
  label: "Run",
  run
});`}}),me=new P({props:{language:"html",value:ks}}),ue=new P({props:{value:Ps}}),de=new N({props:{href:"https://github.com/nmacmunn/qads-repl",label:"GitHub repository"}}),he=new N({props:{href:"/sqlite",label:"here"}}),we=new Es({props:{resources:[{href:"https://www.npmjs.com/package/monaco-editor",label:"Monaco Editor",type:"package"},{href:"https://sqlite.org/download.html",label:"SQLite3",type:"package"},{href:"https://microsoft.github.io/monaco-editor/playground.html",label:"Monaco Playground",type:"docs"},{href:"https://sqlite.org/wasm/doc/trunk/api-oo1.md",label:"SQLite3 Object Oriented API",type:"docs"},{href:"https://sqlite.org/wasm/doc/trunk/persistence.md",label:"SQLite 3 Persistent Storage Options",type:"docs"},{href:"https://softwareengineering.stackexchange.com/a/220257/146806",label:"Why is Web SQL database deprecated?",type:"article"},{href:"https://hackernoon.com/execute-millions-of-sql-statements-in-milliseconds-in-the-browser-with-webassembly-and-web-workers-3e0b25c3f1a6",label:"Execute millions of SQL statements in milliseconds in the browser with WebAssembly and Web Workers.",type:"article"}]}}),{c(){$=s("p"),E=l(`A read–eval–print loop (REPL) is an interactive environment that takes user
    inputs, executes them, and returns the result. I made a TypeScript REPL
    using Monaco and SWC to show how `),h(_.$$.fragment),S=l(` works
    and thought it would be fun to do the same for SQLite.`),u=p(),d=s("p"),k=l("The good news is I got it working."),J=p(),be=s("h5"),Co=l("SQLite REPL Svelte Edition"),Bt=p(),h(K.$$.fragment),Ft=p(),ve=s("p"),Ro=l(`Unfortunately, by the time I got everything working with SvelteKit it was a
    little too complex to describe in a post. So I distilled it down to a
    quick-and-dirty REPL that can help you get started with Monaco or SQLite in
    the browser.`),Ut=p(),ye=s("h3"),Oo=l("Some background"),Vt=p(),$e=s("h4"),Qo=l("Databases in the browser"),Nt=p(),Ee=s("p"),To=l(`In 2014, I was doing a lot of work with Meteor and was blown away when I
    learned about Minimongo.`),Jt=p(),_e=s("pre"),Ao=l("Minimongo is essentially an in-memory, non-persistent implementation of Mongo in pure JavaScript. It serves as a local cache that stores just the subset of the database that this client is working with. Queries (find) on these collections are served directly out of this cache, without talking to the server."),Kt=p(),Se=s("p"),Ho=l(`I thought it would be great if something similar existed based on a
    relational database. It turns out that once upon a time there was a browser
    API specification called Web SQL. Unfortunately, it was deprecated back in
    2010. The reason is captured well in a StackOverflow answer.`),Gt=p(),ke=s("pre"),Do=l("Short version: Web SQL was deprecated because standards are really important and turning Web SQL into a proper standard would have been prohibitively difficult."),Yt=p(),Pe=s("p"),jo=l(`Fair enough. Don't let that get you down though, we're living in the future
    now. It's a time when you don't need a built-in API to get native
    performance. It's the time of WebAssembly.`),Xt=p(),Le=s("h4"),zo=l("Everything is Wasm"),Zt=p(),qe=s("p"),Bo=l(`One technology that I'm super excited about is WebAssembly. Years ago I
    decided to trade the power of C for the ubiquity of JavaScript. For the most
    part, it has felt like the right decision and having a C background was a
    good foundation for work on the web.`),ei=p(),C=s("p"),Fo=l(`But now I don't have to compromise. Languages like C and Rust already
    compile to Wasm. `),h(G.$$.fragment),Uo=l(` is a Rust-based web
    transpiler that compiles to Wasm. It's what I used to perform in-browser transpilation
    for the TypeScript REPL.`),ti=p(),Ie=s("p"),Vo=l("Amazingly, SQLite (written in C) is already compiled to Wasm."),ii=p(),ge=s("h4"),No=l("Monaco"),oi=p(),R=s("p"),Jo=l(`Monaco is the code editor that powers VSCode. It provides SQL syntax
    highlighting, hotkey registration, and a ton of other features that we'll
    only scratch the surface of. If you want to get a better idea of Monaco's
    capabilities, be sure to check out the `),h(Y.$$.fragment),Ko=l("."),ni=p(),We=s("h3"),Go=l("Let's Build"),li=p(),Me=s("h4"),Yo=l("SQLite3"),ri=p(),xe=s("h5"),Xo=l("Getting the code"),si=p(),O=s("p"),Zo=l(`Not only is SQLite already precompiled to Wasm but there are a handful of
    demos showing how to use it. We just need to grab the WebAssembly &
    JavaScript archive from `),h(X.$$.fragment),en=l(" and then figure out which files to use."),ai=p(),Ce=s("p"),tn=l("There are a few options to choose from depending on whether you:"),fi=p(),I=s("ol"),yt=s("li"),on=l("are using a bundler"),nn=p(),$t=s("li"),ln=l("want to use the UI thread or a worker"),rn=p(),Et=s("li"),sn=l("want a synchronous or promise-based API (only applies to workers)"),pi=p(),Re=s("p"),an=l(`We're going to use a bundler since it makes working with Monaco easier. It's
    a REPL so we won't worry about UI responsiveness while the DB is running
    queries. We are interested in the persistence options though. From the
    SQLite Wasm docs:`),mi=p(),Oe=s("pre"),fn=l("This API provides database persistence via localStorage/sessionStorage and, in compatible browsers, the Origin-Private FileSystem."),ui=p(),Qe=s("pre"),pn=l("kvvfs is an sqlite3_vfs implementation conceived and created to store a whole sqlite3 database in the localStorage or sessionStorage objects. Those objects are only available in the main UI thread, not Worker threads, so this feature is only available in the main thread."),di=p(),Te=s("pre"),mn=l("The Origin-Private FileSystem, OPFS, is an API providing browser-side persistent storage which, not coincidentally, sqlite3 can use for storing databases."),hi=p(),Ae=s("pre"),un=l("As of late 2022, only bleeding-edge versions of Chromium-derived browsers have the necessary APIs."),wi=p(),He=s("p"),dn=l(`So, in the interest of maximizing compatibility, we'll run SQLite in the
    main thread which requires these files.`),ci=p(),g=s("ol"),_t=s("li"),hn=l("sqlite3.wasm"),wn=p(),St=s("li"),cn=l("sqlite3-bundler-friendly.mjs"),bn=p(),kt=s("li"),vn=l("sqlite3-opfs-async-proxy.js"),bi=p(),De=s("p"),yn=l(`Since we aren't using OPFS, the third shouldn't be needed but the bundler
    fails without it.`),vi=p(),je=s("h5"),$n=l("Initializing"),yi=p(),W=s("p"),En=l("We'll copy the files into the "),Pt=s("code"),_n=l("src"),Sn=l(` directory where they can be
    imported by `),Lt=s("code"),kn=l("main.ts"),Pn=l(`. Then we can initialize SQLite and create a
    database.`),$i=p(),h(Z.$$.fragment),Ei=p(),L=s("p"),Ln=l("The filename "),qt=s("code"),qn=l(":localStorage:"),In=l(` tells SQLite to use local storage
    for persistence. We pass the flag `),It=s("code"),gn=l("c"),Wn=l(` to create the database if
    it doesn't exist and `),gt=s("code"),Mn=l("t"),xn=l(` to enable tracing (appears in the developer
    console).`),_i=p(),ze=s("h5"),Cn=l("Running queries"),Si=p(),Q=s("p"),Rn=l(`The SQLite API provides a few ways to build and run queries but we'll stick
    to `),Wt=s("code"),On=l("exec"),Qn=l("."),ki=p(),h(ee.$$.fragment),Pi=p(),q=s("p"),Tn=l("We get the start time to help detect slow queries and then call "),Mt=s("code"),An=l("db.exec"),Hn=l(`, passing it SQL to run and an options object containing
    `),xt=s("code"),Dn=l('rowMode: "object"'),jn=l(". This tells "),Ct=s("code"),zn=l("exec"),Bn=l(` to return the result
    rows as an array of key value-pairs.`),Li=p(),T=s("p"),Fn=l("We'll revisit "),Rt=s("code"),Un=l("run"),Vn=l(" later when it's time to integrate with Monaco."),qi=p(),Be=s("h5"),Nn=l("Clearing the database"),Ii=p(),Fe=s("p"),Jn=l(`Apart from creating a database and executing queries, the only other SQLite
    functionality we need is for clearing the database.`),gi=p(),h(te.$$.fragment),Wi=p(),Ue=s("p"),Kn=l("This removes all SQLite data from local storage."),Mi=p(),Ve=s("h4"),Gn=l("Monaco"),xi=p(),Ne=s("p"),Yn=l("We're going to lean on Monaco to do all of the heavy lifting in terms of UI."),Ci=p(),Je=s("h5"),Xn=l("Installation"),Ri=p(),Ke=s("p"),Zn=l("Via npm:"),Oi=p(),Ge=s("pre"),el=l("$ npm install monaco-editor"),Qi=p(),Ye=s("h5"),tl=l("Initializing"),Ti=p(),A=s("p"),il=l("Monaco uses the global variable "),Ot=s("code"),ol=l("MonacoEnvironment"),nl=l(` to specify where
    to find the worker code. This is how that looks with Vite.`),Ai=p(),h(ie.$$.fragment),Hi=p(),Xe=s("p"),ll=l("Without it, this warning will appear in the console:"),Di=p(),Ze=s("pre"),rl=l("Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes."),ji=p(),et=s("h5"),sl=l("Models"),zi=p(),H=s("p"),al=l("We'll create two objects of type "),Qt=s("code"),fl=l("monaco.editor.ITextModel"),pl=l(`
    representing text files. One will contain query history and be displayed in a
    read-only editor. The other will contain the active query being edited.`),Bi=p(),h(oe.$$.fragment),Fi=p(),tt=s("p"),ml=l(`The first argument is the initial content of the model and the second is the
    language.`),Ui=p(),it=s("h5"),ul=l("Editor"),Vi=p(),ot=s("p"),dl=l(`Now that we have models, we need to display them somewhere. Since there will
    be two nearly-identical editors, we'll define a function to initialize them.`),Ni=p(),h(ne.$$.fragment),Ji=p(),M=s("p"),hl=l(`We won't go into all of the options here, most are self-explanatory and you
    to play around with them all in the `),h(le.$$.fragment),wl=l(". What's important is that we pass a "),Tt=s("code"),cl=l("div"),bl=l(` where the editor should
    be mounted, a model to display, and the readOnly option.`),Ki=p(),nt=s("h5"),vl=l("Resizing"),Gi=p(),D=s("p"),yl=l(`We want the editor to resize with its content so we set the option
    `),At=s("code"),$l=l("scrollBeyondLastLine: false"),El=l(" and register an event handler."),Yi=p(),h(re.$$.fragment),Xi=p(),lt=s("p"),_l=l(`When the content changes size, the container height will be updated and the
    editor will re-layout. Here the height is limited to 600px but it could be
    anything (like function of the window size).`),Zi=p(),x=s("p"),Sl=l("It would also be a good idea to listen for "),Ht=s("code"),kl=l("resize"),Pl=l(` events on the
    window and trigger an update. In the name of keeping it quick-and-dirty
    we'll leave that as an exercise. Here's the finished `),Dt=s("code"),Ll=l("initEditor"),ql=l(`
    function.`),eo=p(),h(se.$$.fragment),to=p(),rt=s("p"),Il=l(`Those are the basic components needed to put together our REPL. Before we
    do, let's take a quick look at some nice-to-have features.`),io=p(),st=s("h5"),gl=l("Markers"),oo=p(),at=s("p"),Wl=l(`We can use markers to highlight text in a model. We'll do this when a query
    fails (rather than writing to the console).`),no=p(),h(ae.$$.fragment),lo=p(),j=s("p"),Ml=l(`This will draw a squiggly red line under the entire content of the editor.
    When the user hovers over the query, `),jt=s("code"),xl=l("exceptionVar"),Cl=l(` will appear in
    a tooltip like so:`),ro=p(),h(fe.$$.fragment),so=p(),ft=s("h5"),Rl=l("Actions"),ao=p(),z=s("p"),Ol=l("As our final feature, we'll register an action to call run when "),zt=s("kbd"),Ql=l("shift + enter"),Tl=l(" is pressed."),fo=p(),h(pe.$$.fragment),po=p(),pt=s("h4"),Al=l("Putting It Together"),mo=p(),mt=s("p"),Hl=l(`At this point we've seen all of the important bits so we're ready to build
    our crude REPL.`),uo=p(),ut=s("h5"),Dl=l("index.html"),ho=p(),h(me.$$.fragment),wo=p(),dt=s("h5"),jl=l("main.ts"),co=p(),h(ue.$$.fragment),bo=p(),B=s("p"),zl=l("That's it! For project configuration and setup instructions, check out the "),h(de.$$.fragment),Bl=l("."),vo=p(),F=s("p"),Fl=l("For a slightly more feature-rich SQLite REPL to play with, "),h(he.$$.fragment),Ul=l("'s the original that I created in Svelte."),yo=p(),h(we.$$.fragment)},l(e){$=a(e,"P",{});var i=f($);E=r(i,`A read–eval–print loop (REPL) is an interactive environment that takes user
    inputs, executes them, and returns the result. I made a TypeScript REPL
    using Monaco and SWC to show how `),w(_.$$.fragment,i),S=r(i,` works
    and thought it would be fun to do the same for SQLite.`),i.forEach(t),u=m(e),d=a(e,"P",{});var Nl=f(d);k=r(Nl,"The good news is I got it working."),Nl.forEach(t),J=m(e),be=a(e,"H5",{});var Jl=f(be);Co=r(Jl,"SQLite REPL Svelte Edition"),Jl.forEach(t),Bt=m(e),w(K.$$.fragment,e),Ft=m(e),ve=a(e,"P",{});var Kl=f(ve);Ro=r(Kl,`Unfortunately, by the time I got everything working with SvelteKit it was a
    little too complex to describe in a post. So I distilled it down to a
    quick-and-dirty REPL that can help you get started with Monaco or SQLite in
    the browser.`),Kl.forEach(t),Ut=m(e),ye=a(e,"H3",{});var Gl=f(ye);Oo=r(Gl,"Some background"),Gl.forEach(t),Vt=m(e),$e=a(e,"H4",{});var Yl=f($e);Qo=r(Yl,"Databases in the browser"),Yl.forEach(t),Nt=m(e),Ee=a(e,"P",{});var Xl=f(Ee);To=r(Xl,`In 2014, I was doing a lot of work with Meteor and was blown away when I
    learned about Minimongo.`),Xl.forEach(t),Jt=m(e),_e=a(e,"PRE",{});var Zl=f(_e);Ao=r(Zl,"Minimongo is essentially an in-memory, non-persistent implementation of Mongo in pure JavaScript. It serves as a local cache that stores just the subset of the database that this client is working with. Queries (find) on these collections are served directly out of this cache, without talking to the server."),Zl.forEach(t),Kt=m(e),Se=a(e,"P",{});var er=f(Se);Ho=r(er,`I thought it would be great if something similar existed based on a
    relational database. It turns out that once upon a time there was a browser
    API specification called Web SQL. Unfortunately, it was deprecated back in
    2010. The reason is captured well in a StackOverflow answer.`),er.forEach(t),Gt=m(e),ke=a(e,"PRE",{});var tr=f(ke);Do=r(tr,"Short version: Web SQL was deprecated because standards are really important and turning Web SQL into a proper standard would have been prohibitively difficult."),tr.forEach(t),Yt=m(e),Pe=a(e,"P",{});var ir=f(Pe);jo=r(ir,`Fair enough. Don't let that get you down though, we're living in the future
    now. It's a time when you don't need a built-in API to get native
    performance. It's the time of WebAssembly.`),ir.forEach(t),Xt=m(e),Le=a(e,"H4",{});var or=f(Le);zo=r(or,"Everything is Wasm"),or.forEach(t),Zt=m(e),qe=a(e,"P",{});var nr=f(qe);Bo=r(nr,`One technology that I'm super excited about is WebAssembly. Years ago I
    decided to trade the power of C for the ubiquity of JavaScript. For the most
    part, it has felt like the right decision and having a C background was a
    good foundation for work on the web.`),nr.forEach(t),ei=m(e),C=a(e,"P",{});var Eo=f(C);Fo=r(Eo,`But now I don't have to compromise. Languages like C and Rust already
    compile to Wasm. `),w(G.$$.fragment,Eo),Uo=r(Eo,` is a Rust-based web
    transpiler that compiles to Wasm. It's what I used to perform in-browser transpilation
    for the TypeScript REPL.`),Eo.forEach(t),ti=m(e),Ie=a(e,"P",{});var lr=f(Ie);Vo=r(lr,"Amazingly, SQLite (written in C) is already compiled to Wasm."),lr.forEach(t),ii=m(e),ge=a(e,"H4",{});var rr=f(ge);No=r(rr,"Monaco"),rr.forEach(t),oi=m(e),R=a(e,"P",{});var _o=f(R);Jo=r(_o,`Monaco is the code editor that powers VSCode. It provides SQL syntax
    highlighting, hotkey registration, and a ton of other features that we'll
    only scratch the surface of. If you want to get a better idea of Monaco's
    capabilities, be sure to check out the `),w(Y.$$.fragment,_o),Ko=r(_o,"."),_o.forEach(t),ni=m(e),We=a(e,"H3",{});var sr=f(We);Go=r(sr,"Let's Build"),sr.forEach(t),li=m(e),Me=a(e,"H4",{});var ar=f(Me);Yo=r(ar,"SQLite3"),ar.forEach(t),ri=m(e),xe=a(e,"H5",{});var fr=f(xe);Xo=r(fr,"Getting the code"),fr.forEach(t),si=m(e),O=a(e,"P",{});var So=f(O);Zo=r(So,`Not only is SQLite already precompiled to Wasm but there are a handful of
    demos showing how to use it. We just need to grab the WebAssembly &
    JavaScript archive from `),w(X.$$.fragment,So),en=r(So," and then figure out which files to use."),So.forEach(t),ai=m(e),Ce=a(e,"P",{});var pr=f(Ce);tn=r(pr,"There are a few options to choose from depending on whether you:"),pr.forEach(t),fi=m(e),I=a(e,"OL",{});var ht=f(I);yt=a(ht,"LI",{});var mr=f(yt);on=r(mr,"are using a bundler"),mr.forEach(t),nn=m(ht),$t=a(ht,"LI",{});var ur=f($t);ln=r(ur,"want to use the UI thread or a worker"),ur.forEach(t),rn=m(ht),Et=a(ht,"LI",{});var dr=f(Et);sn=r(dr,"want a synchronous or promise-based API (only applies to workers)"),dr.forEach(t),ht.forEach(t),pi=m(e),Re=a(e,"P",{});var hr=f(Re);an=r(hr,`We're going to use a bundler since it makes working with Monaco easier. It's
    a REPL so we won't worry about UI responsiveness while the DB is running
    queries. We are interested in the persistence options though. From the
    SQLite Wasm docs:`),hr.forEach(t),mi=m(e),Oe=a(e,"PRE",{});var wr=f(Oe);fn=r(wr,"This API provides database persistence via localStorage/sessionStorage and, in compatible browsers, the Origin-Private FileSystem."),wr.forEach(t),ui=m(e),Qe=a(e,"PRE",{});var cr=f(Qe);pn=r(cr,"kvvfs is an sqlite3_vfs implementation conceived and created to store a whole sqlite3 database in the localStorage or sessionStorage objects. Those objects are only available in the main UI thread, not Worker threads, so this feature is only available in the main thread."),cr.forEach(t),di=m(e),Te=a(e,"PRE",{});var br=f(Te);mn=r(br,"The Origin-Private FileSystem, OPFS, is an API providing browser-side persistent storage which, not coincidentally, sqlite3 can use for storing databases."),br.forEach(t),hi=m(e),Ae=a(e,"PRE",{});var vr=f(Ae);un=r(vr,"As of late 2022, only bleeding-edge versions of Chromium-derived browsers have the necessary APIs."),vr.forEach(t),wi=m(e),He=a(e,"P",{});var yr=f(He);dn=r(yr,`So, in the interest of maximizing compatibility, we'll run SQLite in the
    main thread which requires these files.`),yr.forEach(t),ci=m(e),g=a(e,"OL",{});var wt=f(g);_t=a(wt,"LI",{});var $r=f(_t);hn=r($r,"sqlite3.wasm"),$r.forEach(t),wn=m(wt),St=a(wt,"LI",{});var Er=f(St);cn=r(Er,"sqlite3-bundler-friendly.mjs"),Er.forEach(t),bn=m(wt),kt=a(wt,"LI",{});var _r=f(kt);vn=r(_r,"sqlite3-opfs-async-proxy.js"),_r.forEach(t),wt.forEach(t),bi=m(e),De=a(e,"P",{});var Sr=f(De);yn=r(Sr,`Since we aren't using OPFS, the third shouldn't be needed but the bundler
    fails without it.`),Sr.forEach(t),vi=m(e),je=a(e,"H5",{});var kr=f(je);$n=r(kr,"Initializing"),kr.forEach(t),yi=m(e),W=a(e,"P",{});var ct=f(W);En=r(ct,"We'll copy the files into the "),Pt=a(ct,"CODE",{});var Pr=f(Pt);_n=r(Pr,"src"),Pr.forEach(t),Sn=r(ct,` directory where they can be
    imported by `),Lt=a(ct,"CODE",{});var Lr=f(Lt);kn=r(Lr,"main.ts"),Lr.forEach(t),Pn=r(ct,`. Then we can initialize SQLite and create a
    database.`),ct.forEach(t),$i=m(e),w(Z.$$.fragment,e),Ei=m(e),L=a(e,"P",{});var U=f(L);Ln=r(U,"The filename "),qt=a(U,"CODE",{});var qr=f(qt);qn=r(qr,":localStorage:"),qr.forEach(t),In=r(U,` tells SQLite to use local storage
    for persistence. We pass the flag `),It=a(U,"CODE",{});var Ir=f(It);gn=r(Ir,"c"),Ir.forEach(t),Wn=r(U,` to create the database if
    it doesn't exist and `),gt=a(U,"CODE",{});var gr=f(gt);Mn=r(gr,"t"),gr.forEach(t),xn=r(U,` to enable tracing (appears in the developer
    console).`),U.forEach(t),_i=m(e),ze=a(e,"H5",{});var Wr=f(ze);Cn=r(Wr,"Running queries"),Wr.forEach(t),Si=m(e),Q=a(e,"P",{});var ko=f(Q);Rn=r(ko,`The SQLite API provides a few ways to build and run queries but we'll stick
    to `),Wt=a(ko,"CODE",{});var Mr=f(Wt);On=r(Mr,"exec"),Mr.forEach(t),Qn=r(ko,"."),ko.forEach(t),ki=m(e),w(ee.$$.fragment,e),Pi=m(e),q=a(e,"P",{});var V=f(q);Tn=r(V,"We get the start time to help detect slow queries and then call "),Mt=a(V,"CODE",{});var xr=f(Mt);An=r(xr,"db.exec"),xr.forEach(t),Hn=r(V,`, passing it SQL to run and an options object containing
    `),xt=a(V,"CODE",{});var Cr=f(xt);Dn=r(Cr,'rowMode: "object"'),Cr.forEach(t),jn=r(V,". This tells "),Ct=a(V,"CODE",{});var Rr=f(Ct);zn=r(Rr,"exec"),Rr.forEach(t),Bn=r(V,` to return the result
    rows as an array of key value-pairs.`),V.forEach(t),Li=m(e),T=a(e,"P",{});var Po=f(T);Fn=r(Po,"We'll revisit "),Rt=a(Po,"CODE",{});var Or=f(Rt);Un=r(Or,"run"),Or.forEach(t),Vn=r(Po," later when it's time to integrate with Monaco."),Po.forEach(t),qi=m(e),Be=a(e,"H5",{});var Qr=f(Be);Nn=r(Qr,"Clearing the database"),Qr.forEach(t),Ii=m(e),Fe=a(e,"P",{});var Tr=f(Fe);Jn=r(Tr,`Apart from creating a database and executing queries, the only other SQLite
    functionality we need is for clearing the database.`),Tr.forEach(t),gi=m(e),w(te.$$.fragment,e),Wi=m(e),Ue=a(e,"P",{});var Ar=f(Ue);Kn=r(Ar,"This removes all SQLite data from local storage."),Ar.forEach(t),Mi=m(e),Ve=a(e,"H4",{});var Hr=f(Ve);Gn=r(Hr,"Monaco"),Hr.forEach(t),xi=m(e),Ne=a(e,"P",{});var Dr=f(Ne);Yn=r(Dr,"We're going to lean on Monaco to do all of the heavy lifting in terms of UI."),Dr.forEach(t),Ci=m(e),Je=a(e,"H5",{});var jr=f(Je);Xn=r(jr,"Installation"),jr.forEach(t),Ri=m(e),Ke=a(e,"P",{});var zr=f(Ke);Zn=r(zr,"Via npm:"),zr.forEach(t),Oi=m(e),Ge=a(e,"PRE",{});var Br=f(Ge);el=r(Br,"$ npm install monaco-editor"),Br.forEach(t),Qi=m(e),Ye=a(e,"H5",{});var Fr=f(Ye);tl=r(Fr,"Initializing"),Fr.forEach(t),Ti=m(e),A=a(e,"P",{});var Lo=f(A);il=r(Lo,"Monaco uses the global variable "),Ot=a(Lo,"CODE",{});var Ur=f(Ot);ol=r(Ur,"MonacoEnvironment"),Ur.forEach(t),nl=r(Lo,` to specify where
    to find the worker code. This is how that looks with Vite.`),Lo.forEach(t),Ai=m(e),w(ie.$$.fragment,e),Hi=m(e),Xe=a(e,"P",{});var Vr=f(Xe);ll=r(Vr,"Without it, this warning will appear in the console:"),Vr.forEach(t),Di=m(e),Ze=a(e,"PRE",{});var Nr=f(Ze);rl=r(Nr,"Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes."),Nr.forEach(t),ji=m(e),et=a(e,"H5",{});var Jr=f(et);sl=r(Jr,"Models"),Jr.forEach(t),zi=m(e),H=a(e,"P",{});var qo=f(H);al=r(qo,"We'll create two objects of type "),Qt=a(qo,"CODE",{});var Kr=f(Qt);fl=r(Kr,"monaco.editor.ITextModel"),Kr.forEach(t),pl=r(qo,`
    representing text files. One will contain query history and be displayed in a
    read-only editor. The other will contain the active query being edited.`),qo.forEach(t),Bi=m(e),w(oe.$$.fragment,e),Fi=m(e),tt=a(e,"P",{});var Gr=f(tt);ml=r(Gr,`The first argument is the initial content of the model and the second is the
    language.`),Gr.forEach(t),Ui=m(e),it=a(e,"H5",{});var Yr=f(it);ul=r(Yr,"Editor"),Yr.forEach(t),Vi=m(e),ot=a(e,"P",{});var Xr=f(ot);dl=r(Xr,`Now that we have models, we need to display them somewhere. Since there will
    be two nearly-identical editors, we'll define a function to initialize them.`),Xr.forEach(t),Ni=m(e),w(ne.$$.fragment,e),Ji=m(e),M=a(e,"P",{});var bt=f(M);hl=r(bt,`We won't go into all of the options here, most are self-explanatory and you
    to play around with them all in the `),w(le.$$.fragment,bt),wl=r(bt,". What's important is that we pass a "),Tt=a(bt,"CODE",{});var Zr=f(Tt);cl=r(Zr,"div"),Zr.forEach(t),bl=r(bt,` where the editor should
    be mounted, a model to display, and the readOnly option.`),bt.forEach(t),Ki=m(e),nt=a(e,"H5",{});var es=f(nt);vl=r(es,"Resizing"),es.forEach(t),Gi=m(e),D=a(e,"P",{});var Io=f(D);yl=r(Io,`We want the editor to resize with its content so we set the option
    `),At=a(Io,"CODE",{});var ts=f(At);$l=r(ts,"scrollBeyondLastLine: false"),ts.forEach(t),El=r(Io," and register an event handler."),Io.forEach(t),Yi=m(e),w(re.$$.fragment,e),Xi=m(e),lt=a(e,"P",{});var is=f(lt);_l=r(is,`When the content changes size, the container height will be updated and the
    editor will re-layout. Here the height is limited to 600px but it could be
    anything (like function of the window size).`),is.forEach(t),Zi=m(e),x=a(e,"P",{});var vt=f(x);Sl=r(vt,"It would also be a good idea to listen for "),Ht=a(vt,"CODE",{});var os=f(Ht);kl=r(os,"resize"),os.forEach(t),Pl=r(vt,` events on the
    window and trigger an update. In the name of keeping it quick-and-dirty
    we'll leave that as an exercise. Here's the finished `),Dt=a(vt,"CODE",{});var ns=f(Dt);Ll=r(ns,"initEditor"),ns.forEach(t),ql=r(vt,`
    function.`),vt.forEach(t),eo=m(e),w(se.$$.fragment,e),to=m(e),rt=a(e,"P",{});var ls=f(rt);Il=r(ls,`Those are the basic components needed to put together our REPL. Before we
    do, let's take a quick look at some nice-to-have features.`),ls.forEach(t),io=m(e),st=a(e,"H5",{});var rs=f(st);gl=r(rs,"Markers"),rs.forEach(t),oo=m(e),at=a(e,"P",{});var ss=f(at);Wl=r(ss,`We can use markers to highlight text in a model. We'll do this when a query
    fails (rather than writing to the console).`),ss.forEach(t),no=m(e),w(ae.$$.fragment,e),lo=m(e),j=a(e,"P",{});var go=f(j);Ml=r(go,`This will draw a squiggly red line under the entire content of the editor.
    When the user hovers over the query, `),jt=a(go,"CODE",{});var as=f(jt);xl=r(as,"exceptionVar"),as.forEach(t),Cl=r(go,` will appear in
    a tooltip like so:`),go.forEach(t),ro=m(e),w(fe.$$.fragment,e),so=m(e),ft=a(e,"H5",{});var fs=f(ft);Rl=r(fs,"Actions"),fs.forEach(t),ao=m(e),z=a(e,"P",{});var Wo=f(z);Ol=r(Wo,"As our final feature, we'll register an action to call run when "),zt=a(Wo,"KBD",{});var ps=f(zt);Ql=r(ps,"shift + enter"),ps.forEach(t),Tl=r(Wo," is pressed."),Wo.forEach(t),fo=m(e),w(pe.$$.fragment,e),po=m(e),pt=a(e,"H4",{});var ms=f(pt);Al=r(ms,"Putting It Together"),ms.forEach(t),mo=m(e),mt=a(e,"P",{});var us=f(mt);Hl=r(us,`At this point we've seen all of the important bits so we're ready to build
    our crude REPL.`),us.forEach(t),uo=m(e),ut=a(e,"H5",{});var ds=f(ut);Dl=r(ds,"index.html"),ds.forEach(t),ho=m(e),w(me.$$.fragment,e),wo=m(e),dt=a(e,"H5",{});var hs=f(dt);jl=r(hs,"main.ts"),hs.forEach(t),co=m(e),w(ue.$$.fragment,e),bo=m(e),B=a(e,"P",{});var Mo=f(B);zl=r(Mo,"That's it! For project configuration and setup instructions, check out the "),w(de.$$.fragment,Mo),Bl=r(Mo,"."),Mo.forEach(t),vo=m(e),F=a(e,"P",{});var xo=f(F);Fl=r(xo,"For a slightly more feature-rich SQLite REPL to play with, "),w(he.$$.fragment,xo),Ul=r(xo,"'s the original that I created in Svelte."),xo.forEach(t),yo=m(e),w(we.$$.fragment,e)},m(e,i){o(e,$,i),n($,E),c(_,$,null),n($,S),o(e,u,i),o(e,d,i),n(d,k),o(e,J,i),o(e,be,i),n(be,Co),o(e,Bt,i),c(K,e,i),o(e,Ft,i),o(e,ve,i),n(ve,Ro),o(e,Ut,i),o(e,ye,i),n(ye,Oo),o(e,Vt,i),o(e,$e,i),n($e,Qo),o(e,Nt,i),o(e,Ee,i),n(Ee,To),o(e,Jt,i),o(e,_e,i),n(_e,Ao),o(e,Kt,i),o(e,Se,i),n(Se,Ho),o(e,Gt,i),o(e,ke,i),n(ke,Do),o(e,Yt,i),o(e,Pe,i),n(Pe,jo),o(e,Xt,i),o(e,Le,i),n(Le,zo),o(e,Zt,i),o(e,qe,i),n(qe,Bo),o(e,ei,i),o(e,C,i),n(C,Fo),c(G,C,null),n(C,Uo),o(e,ti,i),o(e,Ie,i),n(Ie,Vo),o(e,ii,i),o(e,ge,i),n(ge,No),o(e,oi,i),o(e,R,i),n(R,Jo),c(Y,R,null),n(R,Ko),o(e,ni,i),o(e,We,i),n(We,Go),o(e,li,i),o(e,Me,i),n(Me,Yo),o(e,ri,i),o(e,xe,i),n(xe,Xo),o(e,si,i),o(e,O,i),n(O,Zo),c(X,O,null),n(O,en),o(e,ai,i),o(e,Ce,i),n(Ce,tn),o(e,fi,i),o(e,I,i),n(I,yt),n(yt,on),n(I,nn),n(I,$t),n($t,ln),n(I,rn),n(I,Et),n(Et,sn),o(e,pi,i),o(e,Re,i),n(Re,an),o(e,mi,i),o(e,Oe,i),n(Oe,fn),o(e,ui,i),o(e,Qe,i),n(Qe,pn),o(e,di,i),o(e,Te,i),n(Te,mn),o(e,hi,i),o(e,Ae,i),n(Ae,un),o(e,wi,i),o(e,He,i),n(He,dn),o(e,ci,i),o(e,g,i),n(g,_t),n(_t,hn),n(g,wn),n(g,St),n(St,cn),n(g,bn),n(g,kt),n(kt,vn),o(e,bi,i),o(e,De,i),n(De,yn),o(e,vi,i),o(e,je,i),n(je,$n),o(e,yi,i),o(e,W,i),n(W,En),n(W,Pt),n(Pt,_n),n(W,Sn),n(W,Lt),n(Lt,kn),n(W,Pn),o(e,$i,i),c(Z,e,i),o(e,Ei,i),o(e,L,i),n(L,Ln),n(L,qt),n(qt,qn),n(L,In),n(L,It),n(It,gn),n(L,Wn),n(L,gt),n(gt,Mn),n(L,xn),o(e,_i,i),o(e,ze,i),n(ze,Cn),o(e,Si,i),o(e,Q,i),n(Q,Rn),n(Q,Wt),n(Wt,On),n(Q,Qn),o(e,ki,i),c(ee,e,i),o(e,Pi,i),o(e,q,i),n(q,Tn),n(q,Mt),n(Mt,An),n(q,Hn),n(q,xt),n(xt,Dn),n(q,jn),n(q,Ct),n(Ct,zn),n(q,Bn),o(e,Li,i),o(e,T,i),n(T,Fn),n(T,Rt),n(Rt,Un),n(T,Vn),o(e,qi,i),o(e,Be,i),n(Be,Nn),o(e,Ii,i),o(e,Fe,i),n(Fe,Jn),o(e,gi,i),c(te,e,i),o(e,Wi,i),o(e,Ue,i),n(Ue,Kn),o(e,Mi,i),o(e,Ve,i),n(Ve,Gn),o(e,xi,i),o(e,Ne,i),n(Ne,Yn),o(e,Ci,i),o(e,Je,i),n(Je,Xn),o(e,Ri,i),o(e,Ke,i),n(Ke,Zn),o(e,Oi,i),o(e,Ge,i),n(Ge,el),o(e,Qi,i),o(e,Ye,i),n(Ye,tl),o(e,Ti,i),o(e,A,i),n(A,il),n(A,Ot),n(Ot,ol),n(A,nl),o(e,Ai,i),c(ie,e,i),o(e,Hi,i),o(e,Xe,i),n(Xe,ll),o(e,Di,i),o(e,Ze,i),n(Ze,rl),o(e,ji,i),o(e,et,i),n(et,sl),o(e,zi,i),o(e,H,i),n(H,al),n(H,Qt),n(Qt,fl),n(H,pl),o(e,Bi,i),c(oe,e,i),o(e,Fi,i),o(e,tt,i),n(tt,ml),o(e,Ui,i),o(e,it,i),n(it,ul),o(e,Vi,i),o(e,ot,i),n(ot,dl),o(e,Ni,i),c(ne,e,i),o(e,Ji,i),o(e,M,i),n(M,hl),c(le,M,null),n(M,wl),n(M,Tt),n(Tt,cl),n(M,bl),o(e,Ki,i),o(e,nt,i),n(nt,vl),o(e,Gi,i),o(e,D,i),n(D,yl),n(D,At),n(At,$l),n(D,El),o(e,Yi,i),c(re,e,i),o(e,Xi,i),o(e,lt,i),n(lt,_l),o(e,Zi,i),o(e,x,i),n(x,Sl),n(x,Ht),n(Ht,kl),n(x,Pl),n(x,Dt),n(Dt,Ll),n(x,ql),o(e,eo,i),c(se,e,i),o(e,to,i),o(e,rt,i),n(rt,Il),o(e,io,i),o(e,st,i),n(st,gl),o(e,oo,i),o(e,at,i),n(at,Wl),o(e,no,i),c(ae,e,i),o(e,lo,i),o(e,j,i),n(j,Ml),n(j,jt),n(jt,xl),n(j,Cl),o(e,ro,i),c(fe,e,i),o(e,so,i),o(e,ft,i),n(ft,Rl),o(e,ao,i),o(e,z,i),n(z,Ol),n(z,zt),n(zt,Ql),n(z,Tl),o(e,fo,i),c(pe,e,i),o(e,po,i),o(e,pt,i),n(pt,Al),o(e,mo,i),o(e,mt,i),n(mt,Hl),o(e,uo,i),o(e,ut,i),n(ut,Dl),o(e,ho,i),c(me,e,i),o(e,wo,i),o(e,dt,i),n(dt,jl),o(e,co,i),c(ue,e,i),o(e,bo,i),o(e,B,i),n(B,zl),c(de,B,null),n(B,Bl),o(e,vo,i),o(e,F,i),n(F,Fl),c(he,F,null),n(F,Ul),o(e,yo,i),c(we,e,i),$o=!0},p:cs,i(e){$o||(b(_.$$.fragment,e),b(K.$$.fragment,e),b(G.$$.fragment,e),b(Y.$$.fragment,e),b(X.$$.fragment,e),b(Z.$$.fragment,e),b(ee.$$.fragment,e),b(te.$$.fragment,e),b(ie.$$.fragment,e),b(oe.$$.fragment,e),b(ne.$$.fragment,e),b(le.$$.fragment,e),b(re.$$.fragment,e),b(se.$$.fragment,e),b(ae.$$.fragment,e),b(fe.$$.fragment,e),b(pe.$$.fragment,e),b(me.$$.fragment,e),b(ue.$$.fragment,e),b(de.$$.fragment,e),b(he.$$.fragment,e),b(we.$$.fragment,e),$o=!0)},o(e){v(_.$$.fragment,e),v(K.$$.fragment,e),v(G.$$.fragment,e),v(Y.$$.fragment,e),v(X.$$.fragment,e),v(Z.$$.fragment,e),v(ee.$$.fragment,e),v(te.$$.fragment,e),v(ie.$$.fragment,e),v(oe.$$.fragment,e),v(ne.$$.fragment,e),v(le.$$.fragment,e),v(re.$$.fragment,e),v(se.$$.fragment,e),v(ae.$$.fragment,e),v(fe.$$.fragment,e),v(pe.$$.fragment,e),v(me.$$.fragment,e),v(ue.$$.fragment,e),v(de.$$.fragment,e),v(he.$$.fragment,e),v(we.$$.fragment,e),$o=!1},d(e){e&&t($),y(_),e&&t(u),e&&t(d),e&&t(J),e&&t(be),e&&t(Bt),y(K,e),e&&t(Ft),e&&t(ve),e&&t(Ut),e&&t(ye),e&&t(Vt),e&&t($e),e&&t(Nt),e&&t(Ee),e&&t(Jt),e&&t(_e),e&&t(Kt),e&&t(Se),e&&t(Gt),e&&t(ke),e&&t(Yt),e&&t(Pe),e&&t(Xt),e&&t(Le),e&&t(Zt),e&&t(qe),e&&t(ei),e&&t(C),y(G),e&&t(ti),e&&t(Ie),e&&t(ii),e&&t(ge),e&&t(oi),e&&t(R),y(Y),e&&t(ni),e&&t(We),e&&t(li),e&&t(Me),e&&t(ri),e&&t(xe),e&&t(si),e&&t(O),y(X),e&&t(ai),e&&t(Ce),e&&t(fi),e&&t(I),e&&t(pi),e&&t(Re),e&&t(mi),e&&t(Oe),e&&t(ui),e&&t(Qe),e&&t(di),e&&t(Te),e&&t(hi),e&&t(Ae),e&&t(wi),e&&t(He),e&&t(ci),e&&t(g),e&&t(bi),e&&t(De),e&&t(vi),e&&t(je),e&&t(yi),e&&t(W),e&&t($i),y(Z,e),e&&t(Ei),e&&t(L),e&&t(_i),e&&t(ze),e&&t(Si),e&&t(Q),e&&t(ki),y(ee,e),e&&t(Pi),e&&t(q),e&&t(Li),e&&t(T),e&&t(qi),e&&t(Be),e&&t(Ii),e&&t(Fe),e&&t(gi),y(te,e),e&&t(Wi),e&&t(Ue),e&&t(Mi),e&&t(Ve),e&&t(xi),e&&t(Ne),e&&t(Ci),e&&t(Je),e&&t(Ri),e&&t(Ke),e&&t(Oi),e&&t(Ge),e&&t(Qi),e&&t(Ye),e&&t(Ti),e&&t(A),e&&t(Ai),y(ie,e),e&&t(Hi),e&&t(Xe),e&&t(Di),e&&t(Ze),e&&t(ji),e&&t(et),e&&t(zi),e&&t(H),e&&t(Bi),y(oe,e),e&&t(Fi),e&&t(tt),e&&t(Ui),e&&t(it),e&&t(Vi),e&&t(ot),e&&t(Ni),y(ne,e),e&&t(Ji),e&&t(M),y(le),e&&t(Ki),e&&t(nt),e&&t(Gi),e&&t(D),e&&t(Yi),y(re,e),e&&t(Xi),e&&t(lt),e&&t(Zi),e&&t(x),e&&t(eo),y(se,e),e&&t(to),e&&t(rt),e&&t(io),e&&t(st),e&&t(oo),e&&t(at),e&&t(no),y(ae,e),e&&t(lo),e&&t(j),e&&t(ro),y(fe,e),e&&t(so),e&&t(ft),e&&t(ao),e&&t(z),e&&t(fo),y(pe,e),e&&t(po),e&&t(pt),e&&t(mo),e&&t(mt),e&&t(uo),e&&t(ut),e&&t(ho),y(me,e),e&&t(wo),e&&t(dt),e&&t(co),y(ue,e),e&&t(bo),e&&t(B),y(de),e&&t(vo),e&&t(F),y(he),e&&t(yo),y(we,e)}}}function qs(ce){let $,E,_,S;return E=new N({props:{href:"https://github.com/nmacmunn/qads-repl",label:"quick-and-dirty SQLite REPL"}}),{c(){$=l("Build a "),h(E.$$.fragment),_=l(`
    using WebAssembly and Monaco`)},l(u){$=r(u,"Build a "),w(E.$$.fragment,u),_=r(u,`
    using WebAssembly and Monaco`)},m(u,d){o(u,$,d),c(E,u,d),o(u,_,d),S=!0},p:cs,i(u){S||(b(E.$$.fragment,u),S=!0)},o(u){v(E.$$.fragment,u),S=!1},d(u){u&&t($),y(E,u),u&&t(_)}}}function Is(ce){let $,E,_,S,u;return document.title=$=Vl,S=new _s({props:{title:Vl,date:ce[0],$$slots:{tldr:[qs],default:[Ls]},$$scope:{ctx:ce}}}),{c(){E=s("meta"),_=p(),h(S.$$.fragment),this.h()},l(d){const k=$s("svelte-1law5hj",document.head);E=a(k,"META",{name:!0,content:!0}),k.forEach(t),_=m(d),w(S.$$.fragment,d),this.h()},h(){ws(E,"name","description"),ws(E,"content",gs)},m(d,k){n(document.head,E),o(d,_,k),c(S,d,k),u=!0},p(d,[k]){(!u||k&0)&&$!==($=Vl)&&(document.title=$);const J={};k&2&&(J.$$scope={dirty:k,ctx:d}),S.$set(J)},i(d){u||(b(S.$$.fragment,d),u=!0)},o(d){v(S.$$.fragment,d),u=!1},d(d){t(E),d&&t(_),y(S,d)}}}const Vl="Building a SQLite Playground",gs="How to build a SQLite REPL that runs entirely in the browser.";function Ws(ce){return[new Date("March 7, 2023")]}class Qs extends bs{constructor($){super(),vs(this,$,Ws,Is,ys,{})}}export{Qs as default};
