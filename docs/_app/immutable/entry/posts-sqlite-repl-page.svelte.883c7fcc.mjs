import{S as bs,i as vs,s as ys,k as s,a as p,y as h,K as $s,l as a,h as t,c as m,z as w,n as ws,D as r,b as o,A as c,g as b,d as v,B as y,q as n,m as f,r as l,I as cs}from"../chunks/index.4711a160.mjs";import{A as N,R as Es}from"../chunks/resources.95e53884.mjs";import{A as _s}from"../chunks/article.06c607fb.mjs";import{S as P}from"../chunks/snippet.3767b8a5.mjs";import{S as Ss}from"../chunks/sqlite-repl.df669806.mjs";const ks=`<!DOCTYPE html>
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
`;function Ls(ce){let $,E,_,S,u,d,k,J,be,Co,Bt,K,Ft,ve,Ro,Ut,ye,Oo,Vt,$e,Qo,Nt,Ee,To,Jt,_e,Ao,Kt,Se,Ho,Gt,ke,Do,Yt,Pe,jo,Xt,Le,zo,Zt,qe,Bo,ei,C,Fo,G,Uo,ti,Ie,Vo,ii,ge,No,oi,R,Jo,Y,Ko,ri,We,Go,ni,Me,Yo,li,xe,Xo,si,O,Zo,X,er,ai,Ce,tr,fi,I,yt,ir,or,$t,rr,nr,Et,lr,pi,Re,sr,mi,Oe,ar,ui,Qe,fr,di,Te,pr,hi,Ae,mr,wi,He,ur,ci,g,_t,dr,hr,St,wr,cr,kt,br,bi,De,vr,vi,je,yr,yi,W,$r,Pt,Er,_r,Lt,Sr,kr,$i,Z,Ei,L,Pr,qt,Lr,qr,It,Ir,gr,gt,Wr,Mr,_i,ze,xr,Si,Q,Cr,Wt,Rr,Or,ki,ee,Pi,q,Qr,Mt,Tr,Ar,xt,Hr,Dr,Ct,jr,zr,Li,T,Br,Rt,Fr,Ur,qi,Be,Vr,Ii,Fe,Nr,gi,te,Wi,Ue,Jr,Mi,Ve,Kr,xi,Ne,Gr,Ci,Je,Yr,Ri,Ke,Xr,Oi,Ge,Zr,Qi,Ye,en,Ti,A,tn,Ot,on,rn,Ai,ie,Hi,Xe,nn,Di,Ze,ln,ji,et,sn,zi,H,an,Qt,fn,pn,Bi,oe,Fi,tt,mn,Ui,it,un,Vi,ot,dn,Ni,re,Ji,M,hn,ne,wn,Tt,cn,bn,Ki,rt,vn,Gi,D,yn,At,$n,En,Yi,le,Xi,nt,_n,Zi,x,Sn,Ht,kn,Pn,Dt,Ln,qn,eo,se,to,lt,In,io,st,gn,oo,at,Wn,ro,ae,no,j,Mn,jt,xn,Cn,lo,fe,so,ft,Rn,ao,z,On,zt,Qn,Tn,fo,pe,po,pt,An,mo,mt,Hn,uo,ut,Dn,ho,me,wo,dt,jn,co,ue,bo,B,zn,de,Bn,vo,F,Fn,he,Un,yo,we,$o;return _=new N({props:{href:"/posts/notry",label:"notry-ts"}}),K=new Ss({}),G=new N({props:{href:"https://swc.rs/",label:"SWC"}}),Y=new N({props:{href:"https://microsoft.github.io/monaco-editor/playground.html",label:"Monaco Playground"}}),X=new N({props:{href:"https://sqlite.org/download.html",label:"here"}}),Z=new P({props:{value:`// main.ts
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

window.MonacoEnvironment = { getWorker: () => new editorWorker() };`}}),oe=new P({props:{value:'const model = monaco.editor.createModel("", "sql");'}}),re=new P({props:{value:`function initEditor(id: string, readOnly: boolean) {
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
}`}}),ne=new N({props:{href:"https://microsoft.github.io/monaco-editor/playground.htm",label:"Monaco Playground"}}),le=new P({props:{value:`editor.onDidContentSizeChange(() => {
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
});`}}),me=new P({props:{language:"html",value:ks}}),ue=new P({props:{value:Ps}}),de=new N({props:{href:"https://github.com/nmacmunn/qads-repl",label:"GitHub repository"}}),he=new N({props:{href:"/sqlite",label:"here"}}),we=new Es({props:{resources:[{href:"https://www.npmjs.com/package/monaco-editor",label:"Monaco Editor",type:"package"},{href:"https://sqlite.org/download.html",label:"SQLite3",type:"package"},{href:"https://microsoft.github.io/monaco-editor/playground.html",label:"Monaco Playground",type:"docs"},{href:"https://sqlite.org/wasm/doc/trunk/api-oo1.md",label:"SQLite3 Object Oriented API",type:"docs"},{href:"https://sqlite.org/wasm/doc/trunk/persistence.md",label:"SQLite 3 Persistent Storage Options",type:"docs"},{href:"https://softwareengineering.stackexchange.com/a/220257/146806",label:"Why is Web SQL database deprecated?",type:"article"},{href:"https://hackernoon.com/execute-millions-of-sql-statements-in-milliseconds-in-the-browser-with-webassembly-and-web-workers-3e0b25c3f1a6",label:"Execute millions of SQL statements in milliseconds in the browser with WebAssembly and Web Workers.",type:"article"}]}}),{c(){$=s("p"),E=n(`A read–eval–print loop (REPL) is an interactive environment that takes user\r
    inputs, executes them, and returns the result. I made a TypeScript REPL\r
    using Monaco and SWC to show how `),h(_.$$.fragment),S=n(` works\r
    and thought it would be fun to do the same for SQLite.`),u=p(),d=s("p"),k=n("The good news is I got it working."),J=p(),be=s("h5"),Co=n("SQLite REPL Svelte Edition"),Bt=p(),h(K.$$.fragment),Ft=p(),ve=s("p"),Ro=n(`Unfortunately, by the time I got everything working with SvelteKit it was a\r
    little too complex to describe in a post. So I distilled it down to a\r
    quick-and-dirty REPL that can help you get started with Monaco or SQLite in\r
    the browser.`),Ut=p(),ye=s("h3"),Oo=n("Some background"),Vt=p(),$e=s("h4"),Qo=n("Databases in the browser"),Nt=p(),Ee=s("p"),To=n(`In 2014, I was doing a lot of work with Meteor and was blown away when I\r
    learned about Minimongo.`),Jt=p(),_e=s("pre"),Ao=n("Minimongo is essentially an in-memory, non-persistent implementation of Mongo in pure JavaScript. It serves as a local cache that stores just the subset of the database that this client is working with. Queries (find) on these collections are served directly out of this cache, without talking to the server."),Kt=p(),Se=s("p"),Ho=n(`I thought it would be great if something similar existed based on a\r
    relational database. It turns out that once upon a time there was a browser\r
    API specification called Web SQL. Unfortunately, it was deprecated back in\r
    2010. The reason is captured well in a StackOverflow answer.`),Gt=p(),ke=s("pre"),Do=n("Short version: Web SQL was deprecated because standards are really important and turning Web SQL into a proper standard would have been prohibitively difficult."),Yt=p(),Pe=s("p"),jo=n(`Fair enough. Don't let that get you down though, we're living in the future\r
    now. It's a time when you don't need a built-in API to get native\r
    performance. It's the time of WebAssembly.`),Xt=p(),Le=s("h4"),zo=n("Everything is Wasm"),Zt=p(),qe=s("p"),Bo=n(`One technology that I'm super excited about is WebAssembly. Years ago I\r
    decided to trade the power of C for the ubiquity of JavaScript. For the most\r
    part, it has felt like the right decision and having a C background was a\r
    good foundation for work on the web.`),ei=p(),C=s("p"),Fo=n(`But now I don't have to compromise. Languages like C and Rust already\r
    compile to Wasm. `),h(G.$$.fragment),Uo=n(` is a Rust-based web\r
    transpiler that compiles to Wasm. It's what I used to perform in-browser transpilation\r
    for the TypeScript REPL.`),ti=p(),Ie=s("p"),Vo=n("Amazingly, SQLite (written in C) is already compiled to Wasm."),ii=p(),ge=s("h4"),No=n("Monaco"),oi=p(),R=s("p"),Jo=n(`Monaco is the code editor that powers VSCode. It provides SQL syntax\r
    highlighting, hotkey registration, and a ton of other features that we'll\r
    only scratch the surface of. If you want to get a better idea of Monaco's\r
    capabilities, be sure to check out the `),h(Y.$$.fragment),Ko=n("."),ri=p(),We=s("h3"),Go=n("Let's Build"),ni=p(),Me=s("h4"),Yo=n("SQLite3"),li=p(),xe=s("h5"),Xo=n("Getting the code"),si=p(),O=s("p"),Zo=n(`Not only is SQLite already precompiled to Wasm but there are a handful of\r
    demos showing how to use it. We just need to grab the WebAssembly &\r
    JavaScript archive from `),h(X.$$.fragment),er=n(" and then figure out which files to use."),ai=p(),Ce=s("p"),tr=n("There are a few options to choose from depending on whether you:"),fi=p(),I=s("ol"),yt=s("li"),ir=n("are using a bundler"),or=p(),$t=s("li"),rr=n("want to use the UI thread or a worker"),nr=p(),Et=s("li"),lr=n("want a synchronous or promise-based API (only applies to workers)"),pi=p(),Re=s("p"),sr=n(`We're going to use a bundler since it makes working with Monaco easier. It's\r
    a REPL so we won't worry about UI responsiveness while the DB is running\r
    queries. We are interested in the persistence options though. From the\r
    SQLite Wasm docs:`),mi=p(),Oe=s("pre"),ar=n("This API provides database persistence via localStorage/sessionStorage and, in compatible browsers, the Origin-Private FileSystem."),ui=p(),Qe=s("pre"),fr=n("kvvfs is an sqlite3_vfs implementation conceived and created to store a whole sqlite3 database in the localStorage or sessionStorage objects. Those objects are only available in the main UI thread, not Worker threads, so this feature is only available in the main thread."),di=p(),Te=s("pre"),pr=n("The Origin-Private FileSystem, OPFS, is an API providing browser-side persistent storage which, not coincidentally, sqlite3 can use for storing databases."),hi=p(),Ae=s("pre"),mr=n("As of late 2022, only bleeding-edge versions of Chromium-derived browsers have the necessary APIs."),wi=p(),He=s("p"),ur=n(`So, in the interest of maximizing compatibility, we'll run SQLite in the\r
    main thread which requires these files.`),ci=p(),g=s("ol"),_t=s("li"),dr=n("sqlite3.wasm"),hr=p(),St=s("li"),wr=n("sqlite3-bundler-friendly.mjs"),cr=p(),kt=s("li"),br=n("sqlite3-opfs-async-proxy.js"),bi=p(),De=s("p"),vr=n(`Since we aren't using OPFS, the third shouldn't be needed but the bundler\r
    fails without it.`),vi=p(),je=s("h5"),yr=n("Initializing"),yi=p(),W=s("p"),$r=n("We'll copy the files into the "),Pt=s("code"),Er=n("src"),_r=n(` directory where they can be\r
    imported by `),Lt=s("code"),Sr=n("main.ts"),kr=n(`. Then we can initialize SQLite and create a\r
    database.`),$i=p(),h(Z.$$.fragment),Ei=p(),L=s("p"),Pr=n("The filename "),qt=s("code"),Lr=n(":localStorage:"),qr=n(` tells SQLite to use local storage\r
    for persistence. We pass the flag `),It=s("code"),Ir=n("c"),gr=n(` to create the database if\r
    it doesn't exist and `),gt=s("code"),Wr=n("t"),Mr=n(` to enable tracing (appears in the developer\r
    console).`),_i=p(),ze=s("h5"),xr=n("Running queries"),Si=p(),Q=s("p"),Cr=n(`The SQLite API provides a few ways to build and run queries but we'll stick\r
    to `),Wt=s("code"),Rr=n("exec"),Or=n("."),ki=p(),h(ee.$$.fragment),Pi=p(),q=s("p"),Qr=n("We get the start time to help detect slow queries and then call "),Mt=s("code"),Tr=n("db.exec"),Ar=n(`, passing it SQL to run and an options object containing\r
    `),xt=s("code"),Hr=n('rowMode: "object"'),Dr=n(". This tells "),Ct=s("code"),jr=n("exec"),zr=n(` to return the result\r
    rows as an array of key value-pairs.`),Li=p(),T=s("p"),Br=n("We'll revisit "),Rt=s("code"),Fr=n("run"),Ur=n(" later when it's time to integrate with Monaco."),qi=p(),Be=s("h5"),Vr=n("Clearing the database"),Ii=p(),Fe=s("p"),Nr=n(`Apart from creating a database and executing queries, the only other SQLite\r
    functionality we need is for clearing the database.`),gi=p(),h(te.$$.fragment),Wi=p(),Ue=s("p"),Jr=n("This removes all SQLite data from local storage."),Mi=p(),Ve=s("h4"),Kr=n("Monaco"),xi=p(),Ne=s("p"),Gr=n("We're going to lean on Monaco to do all of the heavy lifting in terms of UI."),Ci=p(),Je=s("h5"),Yr=n("Installation"),Ri=p(),Ke=s("p"),Xr=n("Via npm:"),Oi=p(),Ge=s("pre"),Zr=n("$ npm install monaco-editor"),Qi=p(),Ye=s("h5"),en=n("Initializing"),Ti=p(),A=s("p"),tn=n("Monaco uses the global variable "),Ot=s("code"),on=n("MonacoEnvironment"),rn=n(` to specify where\r
    to find the worker code. This is how that looks with Vite.`),Ai=p(),h(ie.$$.fragment),Hi=p(),Xe=s("p"),nn=n("Without it, this warning will appear in the console:"),Di=p(),Ze=s("pre"),ln=n("Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes."),ji=p(),et=s("h5"),sn=n("Models"),zi=p(),H=s("p"),an=n("We'll create two objects of type "),Qt=s("code"),fn=n("monaco.editor.ITextModel"),pn=n(`\r
    representing text files. One will contain query history and be displayed in a\r
    read-only editor. The other will contain the active query being edited.`),Bi=p(),h(oe.$$.fragment),Fi=p(),tt=s("p"),mn=n(`The first argument is the initial content of the model and the second is the\r
    language.`),Ui=p(),it=s("h5"),un=n("Editor"),Vi=p(),ot=s("p"),dn=n(`Now that we have models, we need to display them somewhere. Since there will\r
    be two nearly-identical editors, we'll define a function to initialize them.`),Ni=p(),h(re.$$.fragment),Ji=p(),M=s("p"),hn=n(`We won't go into all of the options here, most are self-explanatory and you\r
    to play around with them all in the `),h(ne.$$.fragment),wn=n(". What's important is that we pass a "),Tt=s("code"),cn=n("div"),bn=n(` where the editor should\r
    be mounted, a model to display, and the readOnly option.`),Ki=p(),rt=s("h5"),vn=n("Resizing"),Gi=p(),D=s("p"),yn=n(`We want the editor to resize with its content so we set the option\r
    `),At=s("code"),$n=n("scrollBeyondLastLine: false"),En=n(" and register an event handler."),Yi=p(),h(le.$$.fragment),Xi=p(),nt=s("p"),_n=n(`When the content changes size, the container height will be updated and the\r
    editor will re-layout. Here the height is limited to 600px but it could be\r
    anything (like function of the window size).`),Zi=p(),x=s("p"),Sn=n("It would also be a good idea to listen for "),Ht=s("code"),kn=n("resize"),Pn=n(` events on the\r
    window and trigger an update. In the name of keeping it quick-and-dirty\r
    we'll leave that as an exercise. Here's the finished `),Dt=s("code"),Ln=n("initEditor"),qn=n(`\r
    function.`),eo=p(),h(se.$$.fragment),to=p(),lt=s("p"),In=n(`Those are the basic components needed to put together our REPL. Before we\r
    do, let's take a quick look at some nice-to-have features.`),io=p(),st=s("h5"),gn=n("Markers"),oo=p(),at=s("p"),Wn=n(`We can use markers to highlight text in a model. We'll do this when a query\r
    fails (rather than writing to the console).`),ro=p(),h(ae.$$.fragment),no=p(),j=s("p"),Mn=n(`This will draw a squiggly red line under the entire content of the editor.\r
    When the user hovers over the query, `),jt=s("code"),xn=n("exceptionVar"),Cn=n(` will appear in\r
    a tooltip like so:`),lo=p(),h(fe.$$.fragment),so=p(),ft=s("h5"),Rn=n("Actions"),ao=p(),z=s("p"),On=n("As our final feature, we'll register an action to call run when "),zt=s("kbd"),Qn=n("shift + enter"),Tn=n(" is pressed."),fo=p(),h(pe.$$.fragment),po=p(),pt=s("h4"),An=n("Putting It Together"),mo=p(),mt=s("p"),Hn=n(`At this point we've seen all of the important bits so we're ready to build\r
    our crude REPL.`),uo=p(),ut=s("h5"),Dn=n("index.html"),ho=p(),h(me.$$.fragment),wo=p(),dt=s("h5"),jn=n("main.ts"),co=p(),h(ue.$$.fragment),bo=p(),B=s("p"),zn=n("That's it! For project configuration and setup instructions, check out the "),h(de.$$.fragment),Bn=n("."),vo=p(),F=s("p"),Fn=n("For a slightly more feature-rich SQLite REPL to play with, "),h(he.$$.fragment),Un=n("'s the original that I created in Svelte."),yo=p(),h(we.$$.fragment)},l(e){$=a(e,"P",{});var i=f($);E=l(i,`A read–eval–print loop (REPL) is an interactive environment that takes user\r
    inputs, executes them, and returns the result. I made a TypeScript REPL\r
    using Monaco and SWC to show how `),w(_.$$.fragment,i),S=l(i,` works\r
    and thought it would be fun to do the same for SQLite.`),i.forEach(t),u=m(e),d=a(e,"P",{});var Nn=f(d);k=l(Nn,"The good news is I got it working."),Nn.forEach(t),J=m(e),be=a(e,"H5",{});var Jn=f(be);Co=l(Jn,"SQLite REPL Svelte Edition"),Jn.forEach(t),Bt=m(e),w(K.$$.fragment,e),Ft=m(e),ve=a(e,"P",{});var Kn=f(ve);Ro=l(Kn,`Unfortunately, by the time I got everything working with SvelteKit it was a\r
    little too complex to describe in a post. So I distilled it down to a\r
    quick-and-dirty REPL that can help you get started with Monaco or SQLite in\r
    the browser.`),Kn.forEach(t),Ut=m(e),ye=a(e,"H3",{});var Gn=f(ye);Oo=l(Gn,"Some background"),Gn.forEach(t),Vt=m(e),$e=a(e,"H4",{});var Yn=f($e);Qo=l(Yn,"Databases in the browser"),Yn.forEach(t),Nt=m(e),Ee=a(e,"P",{});var Xn=f(Ee);To=l(Xn,`In 2014, I was doing a lot of work with Meteor and was blown away when I\r
    learned about Minimongo.`),Xn.forEach(t),Jt=m(e),_e=a(e,"PRE",{});var Zn=f(_e);Ao=l(Zn,"Minimongo is essentially an in-memory, non-persistent implementation of Mongo in pure JavaScript. It serves as a local cache that stores just the subset of the database that this client is working with. Queries (find) on these collections are served directly out of this cache, without talking to the server."),Zn.forEach(t),Kt=m(e),Se=a(e,"P",{});var el=f(Se);Ho=l(el,`I thought it would be great if something similar existed based on a\r
    relational database. It turns out that once upon a time there was a browser\r
    API specification called Web SQL. Unfortunately, it was deprecated back in\r
    2010. The reason is captured well in a StackOverflow answer.`),el.forEach(t),Gt=m(e),ke=a(e,"PRE",{});var tl=f(ke);Do=l(tl,"Short version: Web SQL was deprecated because standards are really important and turning Web SQL into a proper standard would have been prohibitively difficult."),tl.forEach(t),Yt=m(e),Pe=a(e,"P",{});var il=f(Pe);jo=l(il,`Fair enough. Don't let that get you down though, we're living in the future\r
    now. It's a time when you don't need a built-in API to get native\r
    performance. It's the time of WebAssembly.`),il.forEach(t),Xt=m(e),Le=a(e,"H4",{});var ol=f(Le);zo=l(ol,"Everything is Wasm"),ol.forEach(t),Zt=m(e),qe=a(e,"P",{});var rl=f(qe);Bo=l(rl,`One technology that I'm super excited about is WebAssembly. Years ago I\r
    decided to trade the power of C for the ubiquity of JavaScript. For the most\r
    part, it has felt like the right decision and having a C background was a\r
    good foundation for work on the web.`),rl.forEach(t),ei=m(e),C=a(e,"P",{});var Eo=f(C);Fo=l(Eo,`But now I don't have to compromise. Languages like C and Rust already\r
    compile to Wasm. `),w(G.$$.fragment,Eo),Uo=l(Eo,` is a Rust-based web\r
    transpiler that compiles to Wasm. It's what I used to perform in-browser transpilation\r
    for the TypeScript REPL.`),Eo.forEach(t),ti=m(e),Ie=a(e,"P",{});var nl=f(Ie);Vo=l(nl,"Amazingly, SQLite (written in C) is already compiled to Wasm."),nl.forEach(t),ii=m(e),ge=a(e,"H4",{});var ll=f(ge);No=l(ll,"Monaco"),ll.forEach(t),oi=m(e),R=a(e,"P",{});var _o=f(R);Jo=l(_o,`Monaco is the code editor that powers VSCode. It provides SQL syntax\r
    highlighting, hotkey registration, and a ton of other features that we'll\r
    only scratch the surface of. If you want to get a better idea of Monaco's\r
    capabilities, be sure to check out the `),w(Y.$$.fragment,_o),Ko=l(_o,"."),_o.forEach(t),ri=m(e),We=a(e,"H3",{});var sl=f(We);Go=l(sl,"Let's Build"),sl.forEach(t),ni=m(e),Me=a(e,"H4",{});var al=f(Me);Yo=l(al,"SQLite3"),al.forEach(t),li=m(e),xe=a(e,"H5",{});var fl=f(xe);Xo=l(fl,"Getting the code"),fl.forEach(t),si=m(e),O=a(e,"P",{});var So=f(O);Zo=l(So,`Not only is SQLite already precompiled to Wasm but there are a handful of\r
    demos showing how to use it. We just need to grab the WebAssembly &\r
    JavaScript archive from `),w(X.$$.fragment,So),er=l(So," and then figure out which files to use."),So.forEach(t),ai=m(e),Ce=a(e,"P",{});var pl=f(Ce);tr=l(pl,"There are a few options to choose from depending on whether you:"),pl.forEach(t),fi=m(e),I=a(e,"OL",{});var ht=f(I);yt=a(ht,"LI",{});var ml=f(yt);ir=l(ml,"are using a bundler"),ml.forEach(t),or=m(ht),$t=a(ht,"LI",{});var ul=f($t);rr=l(ul,"want to use the UI thread or a worker"),ul.forEach(t),nr=m(ht),Et=a(ht,"LI",{});var dl=f(Et);lr=l(dl,"want a synchronous or promise-based API (only applies to workers)"),dl.forEach(t),ht.forEach(t),pi=m(e),Re=a(e,"P",{});var hl=f(Re);sr=l(hl,`We're going to use a bundler since it makes working with Monaco easier. It's\r
    a REPL so we won't worry about UI responsiveness while the DB is running\r
    queries. We are interested in the persistence options though. From the\r
    SQLite Wasm docs:`),hl.forEach(t),mi=m(e),Oe=a(e,"PRE",{});var wl=f(Oe);ar=l(wl,"This API provides database persistence via localStorage/sessionStorage and, in compatible browsers, the Origin-Private FileSystem."),wl.forEach(t),ui=m(e),Qe=a(e,"PRE",{});var cl=f(Qe);fr=l(cl,"kvvfs is an sqlite3_vfs implementation conceived and created to store a whole sqlite3 database in the localStorage or sessionStorage objects. Those objects are only available in the main UI thread, not Worker threads, so this feature is only available in the main thread."),cl.forEach(t),di=m(e),Te=a(e,"PRE",{});var bl=f(Te);pr=l(bl,"The Origin-Private FileSystem, OPFS, is an API providing browser-side persistent storage which, not coincidentally, sqlite3 can use for storing databases."),bl.forEach(t),hi=m(e),Ae=a(e,"PRE",{});var vl=f(Ae);mr=l(vl,"As of late 2022, only bleeding-edge versions of Chromium-derived browsers have the necessary APIs."),vl.forEach(t),wi=m(e),He=a(e,"P",{});var yl=f(He);ur=l(yl,`So, in the interest of maximizing compatibility, we'll run SQLite in the\r
    main thread which requires these files.`),yl.forEach(t),ci=m(e),g=a(e,"OL",{});var wt=f(g);_t=a(wt,"LI",{});var $l=f(_t);dr=l($l,"sqlite3.wasm"),$l.forEach(t),hr=m(wt),St=a(wt,"LI",{});var El=f(St);wr=l(El,"sqlite3-bundler-friendly.mjs"),El.forEach(t),cr=m(wt),kt=a(wt,"LI",{});var _l=f(kt);br=l(_l,"sqlite3-opfs-async-proxy.js"),_l.forEach(t),wt.forEach(t),bi=m(e),De=a(e,"P",{});var Sl=f(De);vr=l(Sl,`Since we aren't using OPFS, the third shouldn't be needed but the bundler\r
    fails without it.`),Sl.forEach(t),vi=m(e),je=a(e,"H5",{});var kl=f(je);yr=l(kl,"Initializing"),kl.forEach(t),yi=m(e),W=a(e,"P",{});var ct=f(W);$r=l(ct,"We'll copy the files into the "),Pt=a(ct,"CODE",{});var Pl=f(Pt);Er=l(Pl,"src"),Pl.forEach(t),_r=l(ct,` directory where they can be\r
    imported by `),Lt=a(ct,"CODE",{});var Ll=f(Lt);Sr=l(Ll,"main.ts"),Ll.forEach(t),kr=l(ct,`. Then we can initialize SQLite and create a\r
    database.`),ct.forEach(t),$i=m(e),w(Z.$$.fragment,e),Ei=m(e),L=a(e,"P",{});var U=f(L);Pr=l(U,"The filename "),qt=a(U,"CODE",{});var ql=f(qt);Lr=l(ql,":localStorage:"),ql.forEach(t),qr=l(U,` tells SQLite to use local storage\r
    for persistence. We pass the flag `),It=a(U,"CODE",{});var Il=f(It);Ir=l(Il,"c"),Il.forEach(t),gr=l(U,` to create the database if\r
    it doesn't exist and `),gt=a(U,"CODE",{});var gl=f(gt);Wr=l(gl,"t"),gl.forEach(t),Mr=l(U,` to enable tracing (appears in the developer\r
    console).`),U.forEach(t),_i=m(e),ze=a(e,"H5",{});var Wl=f(ze);xr=l(Wl,"Running queries"),Wl.forEach(t),Si=m(e),Q=a(e,"P",{});var ko=f(Q);Cr=l(ko,`The SQLite API provides a few ways to build and run queries but we'll stick\r
    to `),Wt=a(ko,"CODE",{});var Ml=f(Wt);Rr=l(Ml,"exec"),Ml.forEach(t),Or=l(ko,"."),ko.forEach(t),ki=m(e),w(ee.$$.fragment,e),Pi=m(e),q=a(e,"P",{});var V=f(q);Qr=l(V,"We get the start time to help detect slow queries and then call "),Mt=a(V,"CODE",{});var xl=f(Mt);Tr=l(xl,"db.exec"),xl.forEach(t),Ar=l(V,`, passing it SQL to run and an options object containing\r
    `),xt=a(V,"CODE",{});var Cl=f(xt);Hr=l(Cl,'rowMode: "object"'),Cl.forEach(t),Dr=l(V,". This tells "),Ct=a(V,"CODE",{});var Rl=f(Ct);jr=l(Rl,"exec"),Rl.forEach(t),zr=l(V,` to return the result\r
    rows as an array of key value-pairs.`),V.forEach(t),Li=m(e),T=a(e,"P",{});var Po=f(T);Br=l(Po,"We'll revisit "),Rt=a(Po,"CODE",{});var Ol=f(Rt);Fr=l(Ol,"run"),Ol.forEach(t),Ur=l(Po," later when it's time to integrate with Monaco."),Po.forEach(t),qi=m(e),Be=a(e,"H5",{});var Ql=f(Be);Vr=l(Ql,"Clearing the database"),Ql.forEach(t),Ii=m(e),Fe=a(e,"P",{});var Tl=f(Fe);Nr=l(Tl,`Apart from creating a database and executing queries, the only other SQLite\r
    functionality we need is for clearing the database.`),Tl.forEach(t),gi=m(e),w(te.$$.fragment,e),Wi=m(e),Ue=a(e,"P",{});var Al=f(Ue);Jr=l(Al,"This removes all SQLite data from local storage."),Al.forEach(t),Mi=m(e),Ve=a(e,"H4",{});var Hl=f(Ve);Kr=l(Hl,"Monaco"),Hl.forEach(t),xi=m(e),Ne=a(e,"P",{});var Dl=f(Ne);Gr=l(Dl,"We're going to lean on Monaco to do all of the heavy lifting in terms of UI."),Dl.forEach(t),Ci=m(e),Je=a(e,"H5",{});var jl=f(Je);Yr=l(jl,"Installation"),jl.forEach(t),Ri=m(e),Ke=a(e,"P",{});var zl=f(Ke);Xr=l(zl,"Via npm:"),zl.forEach(t),Oi=m(e),Ge=a(e,"PRE",{});var Bl=f(Ge);Zr=l(Bl,"$ npm install monaco-editor"),Bl.forEach(t),Qi=m(e),Ye=a(e,"H5",{});var Fl=f(Ye);en=l(Fl,"Initializing"),Fl.forEach(t),Ti=m(e),A=a(e,"P",{});var Lo=f(A);tn=l(Lo,"Monaco uses the global variable "),Ot=a(Lo,"CODE",{});var Ul=f(Ot);on=l(Ul,"MonacoEnvironment"),Ul.forEach(t),rn=l(Lo,` to specify where\r
    to find the worker code. This is how that looks with Vite.`),Lo.forEach(t),Ai=m(e),w(ie.$$.fragment,e),Hi=m(e),Xe=a(e,"P",{});var Vl=f(Xe);nn=l(Vl,"Without it, this warning will appear in the console:"),Vl.forEach(t),Di=m(e),Ze=a(e,"PRE",{});var Nl=f(Ze);ln=l(Nl,"Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes."),Nl.forEach(t),ji=m(e),et=a(e,"H5",{});var Jl=f(et);sn=l(Jl,"Models"),Jl.forEach(t),zi=m(e),H=a(e,"P",{});var qo=f(H);an=l(qo,"We'll create two objects of type "),Qt=a(qo,"CODE",{});var Kl=f(Qt);fn=l(Kl,"monaco.editor.ITextModel"),Kl.forEach(t),pn=l(qo,`\r
    representing text files. One will contain query history and be displayed in a\r
    read-only editor. The other will contain the active query being edited.`),qo.forEach(t),Bi=m(e),w(oe.$$.fragment,e),Fi=m(e),tt=a(e,"P",{});var Gl=f(tt);mn=l(Gl,`The first argument is the initial content of the model and the second is the\r
    language.`),Gl.forEach(t),Ui=m(e),it=a(e,"H5",{});var Yl=f(it);un=l(Yl,"Editor"),Yl.forEach(t),Vi=m(e),ot=a(e,"P",{});var Xl=f(ot);dn=l(Xl,`Now that we have models, we need to display them somewhere. Since there will\r
    be two nearly-identical editors, we'll define a function to initialize them.`),Xl.forEach(t),Ni=m(e),w(re.$$.fragment,e),Ji=m(e),M=a(e,"P",{});var bt=f(M);hn=l(bt,`We won't go into all of the options here, most are self-explanatory and you\r
    to play around with them all in the `),w(ne.$$.fragment,bt),wn=l(bt,". What's important is that we pass a "),Tt=a(bt,"CODE",{});var Zl=f(Tt);cn=l(Zl,"div"),Zl.forEach(t),bn=l(bt,` where the editor should\r
    be mounted, a model to display, and the readOnly option.`),bt.forEach(t),Ki=m(e),rt=a(e,"H5",{});var es=f(rt);vn=l(es,"Resizing"),es.forEach(t),Gi=m(e),D=a(e,"P",{});var Io=f(D);yn=l(Io,`We want the editor to resize with its content so we set the option\r
    `),At=a(Io,"CODE",{});var ts=f(At);$n=l(ts,"scrollBeyondLastLine: false"),ts.forEach(t),En=l(Io," and register an event handler."),Io.forEach(t),Yi=m(e),w(le.$$.fragment,e),Xi=m(e),nt=a(e,"P",{});var is=f(nt);_n=l(is,`When the content changes size, the container height will be updated and the\r
    editor will re-layout. Here the height is limited to 600px but it could be\r
    anything (like function of the window size).`),is.forEach(t),Zi=m(e),x=a(e,"P",{});var vt=f(x);Sn=l(vt,"It would also be a good idea to listen for "),Ht=a(vt,"CODE",{});var os=f(Ht);kn=l(os,"resize"),os.forEach(t),Pn=l(vt,` events on the\r
    window and trigger an update. In the name of keeping it quick-and-dirty\r
    we'll leave that as an exercise. Here's the finished `),Dt=a(vt,"CODE",{});var rs=f(Dt);Ln=l(rs,"initEditor"),rs.forEach(t),qn=l(vt,`\r
    function.`),vt.forEach(t),eo=m(e),w(se.$$.fragment,e),to=m(e),lt=a(e,"P",{});var ns=f(lt);In=l(ns,`Those are the basic components needed to put together our REPL. Before we\r
    do, let's take a quick look at some nice-to-have features.`),ns.forEach(t),io=m(e),st=a(e,"H5",{});var ls=f(st);gn=l(ls,"Markers"),ls.forEach(t),oo=m(e),at=a(e,"P",{});var ss=f(at);Wn=l(ss,`We can use markers to highlight text in a model. We'll do this when a query\r
    fails (rather than writing to the console).`),ss.forEach(t),ro=m(e),w(ae.$$.fragment,e),no=m(e),j=a(e,"P",{});var go=f(j);Mn=l(go,`This will draw a squiggly red line under the entire content of the editor.\r
    When the user hovers over the query, `),jt=a(go,"CODE",{});var as=f(jt);xn=l(as,"exceptionVar"),as.forEach(t),Cn=l(go,` will appear in\r
    a tooltip like so:`),go.forEach(t),lo=m(e),w(fe.$$.fragment,e),so=m(e),ft=a(e,"H5",{});var fs=f(ft);Rn=l(fs,"Actions"),fs.forEach(t),ao=m(e),z=a(e,"P",{});var Wo=f(z);On=l(Wo,"As our final feature, we'll register an action to call run when "),zt=a(Wo,"KBD",{});var ps=f(zt);Qn=l(ps,"shift + enter"),ps.forEach(t),Tn=l(Wo," is pressed."),Wo.forEach(t),fo=m(e),w(pe.$$.fragment,e),po=m(e),pt=a(e,"H4",{});var ms=f(pt);An=l(ms,"Putting It Together"),ms.forEach(t),mo=m(e),mt=a(e,"P",{});var us=f(mt);Hn=l(us,`At this point we've seen all of the important bits so we're ready to build\r
    our crude REPL.`),us.forEach(t),uo=m(e),ut=a(e,"H5",{});var ds=f(ut);Dn=l(ds,"index.html"),ds.forEach(t),ho=m(e),w(me.$$.fragment,e),wo=m(e),dt=a(e,"H5",{});var hs=f(dt);jn=l(hs,"main.ts"),hs.forEach(t),co=m(e),w(ue.$$.fragment,e),bo=m(e),B=a(e,"P",{});var Mo=f(B);zn=l(Mo,"That's it! For project configuration and setup instructions, check out the "),w(de.$$.fragment,Mo),Bn=l(Mo,"."),Mo.forEach(t),vo=m(e),F=a(e,"P",{});var xo=f(F);Fn=l(xo,"For a slightly more feature-rich SQLite REPL to play with, "),w(he.$$.fragment,xo),Un=l(xo,"'s the original that I created in Svelte."),xo.forEach(t),yo=m(e),w(we.$$.fragment,e)},m(e,i){o(e,$,i),r($,E),c(_,$,null),r($,S),o(e,u,i),o(e,d,i),r(d,k),o(e,J,i),o(e,be,i),r(be,Co),o(e,Bt,i),c(K,e,i),o(e,Ft,i),o(e,ve,i),r(ve,Ro),o(e,Ut,i),o(e,ye,i),r(ye,Oo),o(e,Vt,i),o(e,$e,i),r($e,Qo),o(e,Nt,i),o(e,Ee,i),r(Ee,To),o(e,Jt,i),o(e,_e,i),r(_e,Ao),o(e,Kt,i),o(e,Se,i),r(Se,Ho),o(e,Gt,i),o(e,ke,i),r(ke,Do),o(e,Yt,i),o(e,Pe,i),r(Pe,jo),o(e,Xt,i),o(e,Le,i),r(Le,zo),o(e,Zt,i),o(e,qe,i),r(qe,Bo),o(e,ei,i),o(e,C,i),r(C,Fo),c(G,C,null),r(C,Uo),o(e,ti,i),o(e,Ie,i),r(Ie,Vo),o(e,ii,i),o(e,ge,i),r(ge,No),o(e,oi,i),o(e,R,i),r(R,Jo),c(Y,R,null),r(R,Ko),o(e,ri,i),o(e,We,i),r(We,Go),o(e,ni,i),o(e,Me,i),r(Me,Yo),o(e,li,i),o(e,xe,i),r(xe,Xo),o(e,si,i),o(e,O,i),r(O,Zo),c(X,O,null),r(O,er),o(e,ai,i),o(e,Ce,i),r(Ce,tr),o(e,fi,i),o(e,I,i),r(I,yt),r(yt,ir),r(I,or),r(I,$t),r($t,rr),r(I,nr),r(I,Et),r(Et,lr),o(e,pi,i),o(e,Re,i),r(Re,sr),o(e,mi,i),o(e,Oe,i),r(Oe,ar),o(e,ui,i),o(e,Qe,i),r(Qe,fr),o(e,di,i),o(e,Te,i),r(Te,pr),o(e,hi,i),o(e,Ae,i),r(Ae,mr),o(e,wi,i),o(e,He,i),r(He,ur),o(e,ci,i),o(e,g,i),r(g,_t),r(_t,dr),r(g,hr),r(g,St),r(St,wr),r(g,cr),r(g,kt),r(kt,br),o(e,bi,i),o(e,De,i),r(De,vr),o(e,vi,i),o(e,je,i),r(je,yr),o(e,yi,i),o(e,W,i),r(W,$r),r(W,Pt),r(Pt,Er),r(W,_r),r(W,Lt),r(Lt,Sr),r(W,kr),o(e,$i,i),c(Z,e,i),o(e,Ei,i),o(e,L,i),r(L,Pr),r(L,qt),r(qt,Lr),r(L,qr),r(L,It),r(It,Ir),r(L,gr),r(L,gt),r(gt,Wr),r(L,Mr),o(e,_i,i),o(e,ze,i),r(ze,xr),o(e,Si,i),o(e,Q,i),r(Q,Cr),r(Q,Wt),r(Wt,Rr),r(Q,Or),o(e,ki,i),c(ee,e,i),o(e,Pi,i),o(e,q,i),r(q,Qr),r(q,Mt),r(Mt,Tr),r(q,Ar),r(q,xt),r(xt,Hr),r(q,Dr),r(q,Ct),r(Ct,jr),r(q,zr),o(e,Li,i),o(e,T,i),r(T,Br),r(T,Rt),r(Rt,Fr),r(T,Ur),o(e,qi,i),o(e,Be,i),r(Be,Vr),o(e,Ii,i),o(e,Fe,i),r(Fe,Nr),o(e,gi,i),c(te,e,i),o(e,Wi,i),o(e,Ue,i),r(Ue,Jr),o(e,Mi,i),o(e,Ve,i),r(Ve,Kr),o(e,xi,i),o(e,Ne,i),r(Ne,Gr),o(e,Ci,i),o(e,Je,i),r(Je,Yr),o(e,Ri,i),o(e,Ke,i),r(Ke,Xr),o(e,Oi,i),o(e,Ge,i),r(Ge,Zr),o(e,Qi,i),o(e,Ye,i),r(Ye,en),o(e,Ti,i),o(e,A,i),r(A,tn),r(A,Ot),r(Ot,on),r(A,rn),o(e,Ai,i),c(ie,e,i),o(e,Hi,i),o(e,Xe,i),r(Xe,nn),o(e,Di,i),o(e,Ze,i),r(Ze,ln),o(e,ji,i),o(e,et,i),r(et,sn),o(e,zi,i),o(e,H,i),r(H,an),r(H,Qt),r(Qt,fn),r(H,pn),o(e,Bi,i),c(oe,e,i),o(e,Fi,i),o(e,tt,i),r(tt,mn),o(e,Ui,i),o(e,it,i),r(it,un),o(e,Vi,i),o(e,ot,i),r(ot,dn),o(e,Ni,i),c(re,e,i),o(e,Ji,i),o(e,M,i),r(M,hn),c(ne,M,null),r(M,wn),r(M,Tt),r(Tt,cn),r(M,bn),o(e,Ki,i),o(e,rt,i),r(rt,vn),o(e,Gi,i),o(e,D,i),r(D,yn),r(D,At),r(At,$n),r(D,En),o(e,Yi,i),c(le,e,i),o(e,Xi,i),o(e,nt,i),r(nt,_n),o(e,Zi,i),o(e,x,i),r(x,Sn),r(x,Ht),r(Ht,kn),r(x,Pn),r(x,Dt),r(Dt,Ln),r(x,qn),o(e,eo,i),c(se,e,i),o(e,to,i),o(e,lt,i),r(lt,In),o(e,io,i),o(e,st,i),r(st,gn),o(e,oo,i),o(e,at,i),r(at,Wn),o(e,ro,i),c(ae,e,i),o(e,no,i),o(e,j,i),r(j,Mn),r(j,jt),r(jt,xn),r(j,Cn),o(e,lo,i),c(fe,e,i),o(e,so,i),o(e,ft,i),r(ft,Rn),o(e,ao,i),o(e,z,i),r(z,On),r(z,zt),r(zt,Qn),r(z,Tn),o(e,fo,i),c(pe,e,i),o(e,po,i),o(e,pt,i),r(pt,An),o(e,mo,i),o(e,mt,i),r(mt,Hn),o(e,uo,i),o(e,ut,i),r(ut,Dn),o(e,ho,i),c(me,e,i),o(e,wo,i),o(e,dt,i),r(dt,jn),o(e,co,i),c(ue,e,i),o(e,bo,i),o(e,B,i),r(B,zn),c(de,B,null),r(B,Bn),o(e,vo,i),o(e,F,i),r(F,Fn),c(he,F,null),r(F,Un),o(e,yo,i),c(we,e,i),$o=!0},p:cs,i(e){$o||(b(_.$$.fragment,e),b(K.$$.fragment,e),b(G.$$.fragment,e),b(Y.$$.fragment,e),b(X.$$.fragment,e),b(Z.$$.fragment,e),b(ee.$$.fragment,e),b(te.$$.fragment,e),b(ie.$$.fragment,e),b(oe.$$.fragment,e),b(re.$$.fragment,e),b(ne.$$.fragment,e),b(le.$$.fragment,e),b(se.$$.fragment,e),b(ae.$$.fragment,e),b(fe.$$.fragment,e),b(pe.$$.fragment,e),b(me.$$.fragment,e),b(ue.$$.fragment,e),b(de.$$.fragment,e),b(he.$$.fragment,e),b(we.$$.fragment,e),$o=!0)},o(e){v(_.$$.fragment,e),v(K.$$.fragment,e),v(G.$$.fragment,e),v(Y.$$.fragment,e),v(X.$$.fragment,e),v(Z.$$.fragment,e),v(ee.$$.fragment,e),v(te.$$.fragment,e),v(ie.$$.fragment,e),v(oe.$$.fragment,e),v(re.$$.fragment,e),v(ne.$$.fragment,e),v(le.$$.fragment,e),v(se.$$.fragment,e),v(ae.$$.fragment,e),v(fe.$$.fragment,e),v(pe.$$.fragment,e),v(me.$$.fragment,e),v(ue.$$.fragment,e),v(de.$$.fragment,e),v(he.$$.fragment,e),v(we.$$.fragment,e),$o=!1},d(e){e&&t($),y(_),e&&t(u),e&&t(d),e&&t(J),e&&t(be),e&&t(Bt),y(K,e),e&&t(Ft),e&&t(ve),e&&t(Ut),e&&t(ye),e&&t(Vt),e&&t($e),e&&t(Nt),e&&t(Ee),e&&t(Jt),e&&t(_e),e&&t(Kt),e&&t(Se),e&&t(Gt),e&&t(ke),e&&t(Yt),e&&t(Pe),e&&t(Xt),e&&t(Le),e&&t(Zt),e&&t(qe),e&&t(ei),e&&t(C),y(G),e&&t(ti),e&&t(Ie),e&&t(ii),e&&t(ge),e&&t(oi),e&&t(R),y(Y),e&&t(ri),e&&t(We),e&&t(ni),e&&t(Me),e&&t(li),e&&t(xe),e&&t(si),e&&t(O),y(X),e&&t(ai),e&&t(Ce),e&&t(fi),e&&t(I),e&&t(pi),e&&t(Re),e&&t(mi),e&&t(Oe),e&&t(ui),e&&t(Qe),e&&t(di),e&&t(Te),e&&t(hi),e&&t(Ae),e&&t(wi),e&&t(He),e&&t(ci),e&&t(g),e&&t(bi),e&&t(De),e&&t(vi),e&&t(je),e&&t(yi),e&&t(W),e&&t($i),y(Z,e),e&&t(Ei),e&&t(L),e&&t(_i),e&&t(ze),e&&t(Si),e&&t(Q),e&&t(ki),y(ee,e),e&&t(Pi),e&&t(q),e&&t(Li),e&&t(T),e&&t(qi),e&&t(Be),e&&t(Ii),e&&t(Fe),e&&t(gi),y(te,e),e&&t(Wi),e&&t(Ue),e&&t(Mi),e&&t(Ve),e&&t(xi),e&&t(Ne),e&&t(Ci),e&&t(Je),e&&t(Ri),e&&t(Ke),e&&t(Oi),e&&t(Ge),e&&t(Qi),e&&t(Ye),e&&t(Ti),e&&t(A),e&&t(Ai),y(ie,e),e&&t(Hi),e&&t(Xe),e&&t(Di),e&&t(Ze),e&&t(ji),e&&t(et),e&&t(zi),e&&t(H),e&&t(Bi),y(oe,e),e&&t(Fi),e&&t(tt),e&&t(Ui),e&&t(it),e&&t(Vi),e&&t(ot),e&&t(Ni),y(re,e),e&&t(Ji),e&&t(M),y(ne),e&&t(Ki),e&&t(rt),e&&t(Gi),e&&t(D),e&&t(Yi),y(le,e),e&&t(Xi),e&&t(nt),e&&t(Zi),e&&t(x),e&&t(eo),y(se,e),e&&t(to),e&&t(lt),e&&t(io),e&&t(st),e&&t(oo),e&&t(at),e&&t(ro),y(ae,e),e&&t(no),e&&t(j),e&&t(lo),y(fe,e),e&&t(so),e&&t(ft),e&&t(ao),e&&t(z),e&&t(fo),y(pe,e),e&&t(po),e&&t(pt),e&&t(mo),e&&t(mt),e&&t(uo),e&&t(ut),e&&t(ho),y(me,e),e&&t(wo),e&&t(dt),e&&t(co),y(ue,e),e&&t(bo),e&&t(B),y(de),e&&t(vo),e&&t(F),y(he),e&&t(yo),y(we,e)}}}function qs(ce){let $,E,_,S;return E=new N({props:{href:"https://github.com/nmacmunn/qads-repl",label:"quick-and-dirty SQLite REPL"}}),{c(){$=n("Build a "),h(E.$$.fragment),_=n(`\r
    using WebAssembly and Monaco`)},l(u){$=l(u,"Build a "),w(E.$$.fragment,u),_=l(u,`\r
    using WebAssembly and Monaco`)},m(u,d){o(u,$,d),c(E,u,d),o(u,_,d),S=!0},p:cs,i(u){S||(b(E.$$.fragment,u),S=!0)},o(u){v(E.$$.fragment,u),S=!1},d(u){u&&t($),y(E,u),u&&t(_)}}}function Is(ce){let $,E,_,S,u;return document.title=$=Vn,S=new _s({props:{title:Vn,date:ce[0],$$slots:{tldr:[qs],default:[Ls]},$$scope:{ctx:ce}}}),{c(){E=s("meta"),_=p(),h(S.$$.fragment),this.h()},l(d){const k=$s("svelte-1law5hj",document.head);E=a(k,"META",{name:!0,content:!0}),k.forEach(t),_=m(d),w(S.$$.fragment,d),this.h()},h(){ws(E,"name","description"),ws(E,"content",gs)},m(d,k){r(document.head,E),o(d,_,k),c(S,d,k),u=!0},p(d,[k]){(!u||k&0)&&$!==($=Vn)&&(document.title=$);const J={};k&2&&(J.$$scope={dirty:k,ctx:d}),S.$set(J)},i(d){u||(b(S.$$.fragment,d),u=!0)},o(d){v(S.$$.fragment,d),u=!1},d(d){t(E),d&&t(_),y(S,d)}}}const Vn="Building a SQLite Playground",gs="How to build a SQLite REPL that runs entirely in the browser.";function Ws(ce){return[new Date("March 7, 2023")]}class Qs extends bs{constructor($){super(),vs(this,$,Ws,Is,ys,{})}}export{Qs as default};
