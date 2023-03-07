import{S as Jl,i as Kl,s as Gl,k as s,q as l,l as a,m as f,r as n,h as t,n as x,O as $s,b as o,D as r,u as ks,H as Ao,a as p,e as Es,c as u,g as S,v as gs,f as Ls,d as k,M as Ps,y as g,z as L,A as P,B as I,J as Is}from"../chunks/index.467d2cb2.mjs";import{A as qs}from"../chunks/article.4324c2c2.mjs";import{S as M}from"../chunks/snippet.05b778e0.mjs";import{S as Ws}from"../chunks/sqlite-repl.f1ea0b2b.mjs";function Ms(E){let h,v,w;return{c(){h=s("a"),v=l(E[2]),this.h()},l(c){h=a(c,"A",{class:!0,href:!0,target:!0,rel:!0});var m=f(h);v=n(m,E[2]),m.forEach(t),this.h()},h(){x(h,"class",w=$s(E[0])+" svelte-ay64ok"),x(h,"href",E[1]),x(h,"target",E[3]),x(h,"rel","noreferrer")},m(c,m){o(c,h,m),r(h,v)},p(c,[m]){m&4&&ks(v,c[2]),m&1&&w!==(w=$s(c[0])+" svelte-ay64ok")&&x(h,"class",w),m&2&&x(h,"href",c[1]),m&8&&x(h,"target",c[3])},i:Ao,o:Ao,d(c){c&&t(h)}}}function xs(E,h,v){let{type:w=""}=h,{href:c}=h,{label:m}=h,$="_self";try{new URL(c),$="_blank"}catch{}return E.$$set=d=>{"type"in d&&v(0,w=d.type),"href"in d&&v(1,c=d.href),"label"in d&&v(2,m=d.label)},[w,c,m,$]}class B extends Jl{constructor(h){super(),Kl(this,h,xs,Ms,Gl,{type:0,href:1,label:2})}}function _s(E,h,v){const w=E.slice();return w[2]=h[v].href,w[3]=h[v].label,w[4]=h[v].type,w}function Ss(E){let h,v,w,c=E[4]+"",m,$,d,W,y,_;return W=new B({props:{href:E[2],label:E[3],type:E[1][E[4]]}}),{c(){h=s("div"),v=s("div"),w=s("small"),m=l(c),$=p(),d=s("div"),g(W.$$.fragment),y=p(),this.h()},l(b){h=a(b,"DIV",{class:!0});var q=f(h);v=a(q,"DIV",{class:!0});var C=f(v);w=a(C,"SMALL",{class:!0});var j=f(w);m=n(j,c),j.forEach(t),C.forEach(t),$=u(q),d=a(q,"DIV",{class:!0});var Se=f(d);L(W.$$.fragment,Se),Se.forEach(t),y=u(q),q.forEach(t),this.h()},h(){x(w,"class","text-muted"),x(v,"class","col-12 sm-1 margin-right"),x(d,"class","col-fill svelte-1qtbsg2"),x(h,"class","row")},m(b,q){o(b,h,q),r(h,v),r(v,w),r(w,m),r(h,$),r(h,d),P(W,d,null),r(h,y),_=!0},p(b,q){(!_||q&1)&&c!==(c=b[4]+"")&&ks(m,c);const C={};q&1&&(C.href=b[2]),q&1&&(C.label=b[3]),q&1&&(C.type=b[1][b[4]]),W.$set(C)},i(b){_||(S(W.$$.fragment,b),_=!0)},o(b){k(W.$$.fragment,b),_=!1},d(b){b&&t(h),I(W)}}}function Cs(E){let h,v,w,c,m,$=E[0],d=[];for(let y=0;y<$.length;y+=1)d[y]=Ss(_s(E,$,y));const W=y=>k(d[y],1,1,()=>{d[y]=null});return{c(){h=s("h3"),v=l("Resources"),w=p();for(let y=0;y<d.length;y+=1)d[y].c();c=Es()},l(y){h=a(y,"H3",{});var _=f(h);v=n(_,"Resources"),_.forEach(t),w=u(y);for(let b=0;b<d.length;b+=1)d[b].l(y);c=Es()},m(y,_){o(y,h,_),r(h,v),o(y,w,_);for(let b=0;b<d.length;b+=1)d[b].m(y,_);o(y,c,_),m=!0},p(y,[_]){if(_&3){$=y[0];let b;for(b=0;b<$.length;b+=1){const q=_s(y,$,b);d[b]?(d[b].p(q,_),S(d[b],1)):(d[b]=Ss(q),d[b].c(),S(d[b],1),d[b].m(c.parentNode,c))}for(gs(),b=$.length;b<d.length;b+=1)W(b);Ls()}},i(y){if(!m){for(let _=0;_<$.length;_+=1)S(d[_]);m=!0}},o(y){d=d.filter(Boolean);for(let _=0;_<d.length;_+=1)k(d[_]);m=!1},d(y){y&&t(h),y&&t(w),Ps(d,y),y&&t(c)}}}function Rs(E,h,v){let{resources:w}=h;const c={package:"",docs:"warning",article:"success"};return E.$$set=m=>{"resources"in m&&v(0,w=m.resources)},[w,c]}class Os extends Jl{constructor(h){super(),Kl(this,h,Rs,Cs,Gl,{resources:0})}}const As=`<!DOCTYPE html>
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
`,Qs=`import * as monaco from "monaco-editor";
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
`;function Ts(E){let h,v,w,c,m,$,d,W,y,_,b,q,C,j,Se,Jt,ke,Qo,Kt,ge,To,Gt,Le,Ho,Yt,Pe,Do,Xt,Ie,jo,Zt,qe,Bo,ei,We,zo,ti,Me,Fo,ii,xe,Vo,oi,z,Uo,oe,No,ri,Ce,Jo,li,Re,Ko,ni,F,Go,re,Yo,si,Oe,Xo,ai,Ae,Zo,fi,Qe,er,pi,V,tr,le,ir,ui,Te,or,hi,A,kt,rr,lr,gt,nr,sr,Lt,ar,mi,He,fr,di,De,pr,ci,je,ur,wi,Be,hr,vi,ze,mr,bi,Fe,dr,yi,Q,Pt,cr,wr,It,vr,br,qt,yr,$i,Ve,$r,Ei,Ue,Er,_i,T,_r,Wt,Sr,kr,Mt,gr,Lr,Si,ne,ki,R,Pr,xt,Ir,qr,Ct,Wr,Mr,Rt,xr,Cr,gi,Ne,Rr,Li,U,Or,Ot,Ar,Qr,Pi,se,Ii,O,Tr,At,Hr,Dr,Qt,jr,Br,Tt,zr,Fr,qi,N,Vr,Ht,Ur,Nr,Wi,Je,Jr,Mi,Ke,Kr,xi,ae,Ci,Ge,Gr,Ri,Ye,Yr,Oi,Xe,Xr,Ai,Ze,Zr,Qi,et,el,Ti,tt,tl,Hi,it,il,Di,J,ol,Dt,rl,ll,ji,fe,Bi,ot,nl,zi,rt,sl,Fi,lt,al,Vi,K,fl,jt,pl,ul,Ui,pe,Ni,nt,hl,Ji,st,ml,Ki,at,dl,Gi,ue,Yi,H,cl,he,wl,Bt,vl,bl,Xi,ft,yl,Zi,G,$l,zt,El,_l,eo,me,to,pt,Sl,io,D,kl,Ft,gl,Ll,Vt,Pl,Il,oo,de,ro,ut,ql,lo,ht,Wl,no,mt,Ml,so,ce,ao,Y,xl,Ut,Cl,Rl,fo,we,po,dt,Ol,uo,X,Al,Nt,Ql,Tl,ho,ve,mo,ct,Hl,co,wt,Dl,wo,vt,jl,vo,be,bo,bt,Bl,yo,ye,$o,Z,zl,$e,Fl,Eo,ee,Vl,Ee,Ul,_o,_e,So;return w=new B({props:{href:"/posts/notry",label:"notry-ts"}}),q=new Ws({}),oe=new B({props:{href:"https://swc.rs/",label:"SWC"}}),re=new B({props:{href:"https://microsoft.github.io/monaco-editor/playground.html",label:"Monaco Playground"}}),le=new B({props:{href:"https://sqlite.org/download.html",label:"here"}}),ne=new M({props:{value:`// main.ts
import initSqlite from "./sqlite3-bundler-friendly.mjs";

async function init() {
  const sqlite3 = await initSqlite();
  const db = new sqlite3.oo1.DB(":localStorage:", "ct");
}

init();`}}),se=new M({props:{value:`function run() {
  try {
    const start = performance.now();
    const rows = db.exec(sql, { rowMode: "object" });
    const time = performance.now() - start;
    console.log(JSON.stringify(rows), time);
  } catch (e) {
    console.error(e);
  }
}`}}),ae=new M({props:{language:"typescript",value:"sqlite3.capi.sqlite3_js_kvvfs_clear();"}}),fe=new M({props:{value:`import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";

window.MonacoEnvironment = { getWorker: () => new editorWorker() };`}}),pe=new M({props:{value:'const model = monaco.editor.createModel("", "sql");'}}),ue=new M({props:{value:`function initEditor(id: string, readOnly: boolean) {
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
}`}}),he=new B({props:{href:"https://microsoft.github.io/monaco-editor/playground.htm",label:"Monaco Playground"}}),me=new M({props:{value:`editor.onDidContentSizeChange(() => {
  const height = Math.min(600, editor.getContentHeight());
  const { width } = el.getBoundingClientRect();
  el.style.height = \`\${height}px\`;
  editor.layout({ width, height });
});`}}),de=new M({props:{value:`function initEditor(id: string, readOnly: boolean) {
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
}`}}),ce=new M({props:{value:`monaco.editor.setModelMarkers(model, "qads-repl", [
  {
    message: \`\${exceptionVar}\`,
    severity: monaco.MarkerSeverity.Error,
    ...model.getFullModelRange(),
  },
]);`}}),we=new M({props:{language:"sql",value:"SELECT * FROM user;",error:"table user doesn't exist",errorOn:"SELECT * FROM user;"}}),ve=new M({props:{value:`editor.addAction({
  id: "run",
  keybindings: [monaco.KeyMod.Shift | monaco.KeyCode.Enter],
  label: "Run",
  run
});`}}),be=new M({props:{language:"html",value:As}}),ye=new M({props:{value:Qs}}),$e=new B({props:{href:"https://github.com/nmacmunn/qads-repl",label:"GitHub repository"}}),Ee=new B({props:{href:"/sqlite",label:"here"}}),_e=new Os({props:{resources:[{href:"https://www.npmjs.com/package/monaco-editor",label:"Monaco Editor",type:"package"},{href:"https://sqlite.org/download.html",label:"SQLite3",type:"package"},{href:"https://microsoft.github.io/monaco-editor/playground.html",label:"Monaco Playground",type:"docs"},{href:"https://sqlite.org/wasm/doc/trunk/api-oo1.md",label:"SQLite3 Object Oriented API",type:"docs"},{href:"https://sqlite.org/wasm/doc/trunk/persistence.md",label:"SQLite 3 Persistent Storage Options",type:"docs"},{href:"https://softwareengineering.stackexchange.com/a/220257/146806",label:"Why is Web SQL database deprecated?",type:"article"},{href:"https://hackernoon.com/execute-millions-of-sql-statements-in-milliseconds-in-the-browser-with-webassembly-and-web-workers-3e0b25c3f1a6",label:"Execute millions of SQL statements in milliseconds in the browser with WebAssembly and Web Workers.",type:"article"}]}}),{c(){h=s("p"),v=l(`A read–eval–print loop (REPL) is an interactive environment that takes user\r
    inputs, executes them, and returns the result. I made a TypeScript REPL\r
    using Monaco and SWC to show how `),g(w.$$.fragment),c=l(` works\r
    and thought it would be fun to do the same for SQLite.`),m=p(),$=s("p"),d=l("The good news is I got it working."),W=p(),y=s("h5"),_=l("SQLite REPL Svelte Edition"),b=p(),g(q.$$.fragment),C=p(),j=s("p"),Se=l(`Unfortunately, by the time I got everything working with SvelteKit it was a\r
    little too complex to describe in a post. So I distilled it down to a\r
    quick-and-dirty REPL that can help you get started with Monaco or SQLite in\r
    the browser.`),Jt=p(),ke=s("h3"),Qo=l("Some background"),Kt=p(),ge=s("h4"),To=l("Databases in the browser"),Gt=p(),Le=s("p"),Ho=l(`In 2014, I was doing a lot of work with Meteor and was blown away when I\r
    learned about Minimongo.`),Yt=p(),Pe=s("pre"),Do=l("Minimongo is essentially an in-memory, non-persistent implementation of Mongo in pure JavaScript. It serves as a local cache that stores just the subset of the database that this client is working with. Queries (find) on these collections are served directly out of this cache, without talking to the server."),Xt=p(),Ie=s("p"),jo=l(`I thought it would be great if something similar existed based on a\r
    relational database. It turns out that once upon a time there was a browser\r
    API specification called Web SQL. Unfortunately, it was deprecated back in\r
    2010. The reason is captured well in a StackOverflow answer.`),Zt=p(),qe=s("pre"),Bo=l("Short version: Web SQL was deprecated because standards are really important and turning Web SQL into a proper standard would have been prohibitively difficult."),ei=p(),We=s("p"),zo=l(`Fair enough. Don't let that get you down though, we're living in the future\r
    now. It's a time when you don't need a built-in API to get native\r
    performance. It's the time of WebAssembly.`),ti=p(),Me=s("h4"),Fo=l("Everything is Wasm"),ii=p(),xe=s("p"),Vo=l(`One technology that I'm super excited about is WebAssembly. Years ago I\r
    decided to trade the power of C for the ubiquity of JavaScript. For the most\r
    part, it has felt like the right decision and having a C background was a\r
    good foundation for work on the web.`),oi=p(),z=s("p"),Uo=l(`But now I don't have to compromise. Languages like C and Rust already\r
    compile to Wasm. `),g(oe.$$.fragment),No=l(` is a Rust-based web\r
    transpiler that compiles to Wasm. It's what I used to perform in-browser transpilation\r
    for the TypeScript REPL.`),ri=p(),Ce=s("p"),Jo=l("Amazingly, SQLite (written in C) is already compiled to Wasm."),li=p(),Re=s("h4"),Ko=l("Monaco"),ni=p(),F=s("p"),Go=l(`Monaco is the code editor that powers VSCode. It provides SQL syntax\r
    highlighting, hotkey registration, and a ton of other features that we'll\r
    only scratch the surface of. If you want to get a better idea of Monaco's\r
    capabilities, be sure to check out the `),g(re.$$.fragment),Yo=l("."),si=p(),Oe=s("h3"),Xo=l("Let's Build"),ai=p(),Ae=s("h4"),Zo=l("SQLite3"),fi=p(),Qe=s("h5"),er=l("Getting the code"),pi=p(),V=s("p"),tr=l(`Not only is SQLite already precompiled to Wasm but there are a handful of\r
    demos showing how to use it. We just need to grab the WebAssembly &\r
    JavaScript archive from `),g(le.$$.fragment),ir=l(" and then figure out which files to use."),ui=p(),Te=s("p"),or=l("There are a few options to choose from depending on whether you:"),hi=p(),A=s("ol"),kt=s("li"),rr=l("are using a bundler"),lr=p(),gt=s("li"),nr=l("want to use the UI thread or a worker"),sr=p(),Lt=s("li"),ar=l("want a synchronous or promise-based API (only applies to workers)"),mi=p(),He=s("p"),fr=l(`We're going to use a bundler since it makes working with Monaco easier. It's\r
    a REPL so we won't worry about UI responsiveness while the DB is running\r
    queries. We are interested in the persistence options though. From the\r
    SQLite Wasm docs:`),di=p(),De=s("pre"),pr=l("This API provides database persistence via localStorage/sessionStorage and, in compatible browsers, the Origin-Private FileSystem."),ci=p(),je=s("pre"),ur=l("kvvfs is an sqlite3_vfs implementation conceived and created to store a whole sqlite3 database in the localStorage or sessionStorage objects. Those objects are only available in the main UI thread, not Worker threads, so this feature is only available in the main thread."),wi=p(),Be=s("pre"),hr=l("The Origin-Private FileSystem, OPFS, is an API providing browser-side persistent storage which, not coincidentally, sqlite3 can use for storing databases."),vi=p(),ze=s("pre"),mr=l("As of late 2022, only bleeding-edge versions of Chromium-derived browsers have the necessary APIs."),bi=p(),Fe=s("p"),dr=l(`So, in the interest of maximizing compatibility, we'll run SQLite in the\r
    main thread which requires these files.`),yi=p(),Q=s("ol"),Pt=s("li"),cr=l("sqlite3.wasm"),wr=p(),It=s("li"),vr=l("sqlite3-bundler-friendly.mjs"),br=p(),qt=s("li"),yr=l("sqlite3-opfs-async-proxy.js"),$i=p(),Ve=s("p"),$r=l(`Since we aren't using OPFS, the third shouldn't be needed but the bundler\r
    fails without it.`),Ei=p(),Ue=s("h5"),Er=l("Initializing"),_i=p(),T=s("p"),_r=l("We'll copy the files into the "),Wt=s("code"),Sr=l("src"),kr=l(` directory where they can be\r
    imported by `),Mt=s("code"),gr=l("main.ts"),Lr=l(`. Then we can initialize SQLite and create a\r
    database.`),Si=p(),g(ne.$$.fragment),ki=p(),R=s("p"),Pr=l("The filename "),xt=s("code"),Ir=l(":localStorage:"),qr=l(` tells SQLite to use local storage\r
    for persistence. We pass the flag `),Ct=s("code"),Wr=l("c"),Mr=l(` to create the database if\r
    it doesn't exist and `),Rt=s("code"),xr=l("t"),Cr=l(` to enable tracing (appears in the developer\r
    console).`),gi=p(),Ne=s("h5"),Rr=l("Running queries"),Li=p(),U=s("p"),Or=l(`The SQLite API provides a few ways to build and run queries but we'll stick\r
    to `),Ot=s("code"),Ar=l("exec"),Qr=l("."),Pi=p(),g(se.$$.fragment),Ii=p(),O=s("p"),Tr=l("We get the start time to help detect slow queries and then call "),At=s("code"),Hr=l("db.exec"),Dr=l(`, passing it SQL to run and an options object containing\r
    `),Qt=s("code"),jr=l('rowMode: "object"'),Br=l(". This tells "),Tt=s("code"),zr=l("exec"),Fr=l(` to return the result\r
    rows as an array of key value-pairs.`),qi=p(),N=s("p"),Vr=l("We'll revisit "),Ht=s("code"),Ur=l("run"),Nr=l(" later when it's time to integrate with Monaco."),Wi=p(),Je=s("h5"),Jr=l("Clearing the database"),Mi=p(),Ke=s("p"),Kr=l(`Apart from creating a database and executing queries, the only other SQLite\r
    functionality we need is for clearing the database.`),xi=p(),g(ae.$$.fragment),Ci=p(),Ge=s("p"),Gr=l("This removes all SQLite data from local storage."),Ri=p(),Ye=s("h4"),Yr=l("Monaco"),Oi=p(),Xe=s("p"),Xr=l("We're going to lean on Monaco to do all of the heavy lifting in terms of UI."),Ai=p(),Ze=s("h5"),Zr=l("Installation"),Qi=p(),et=s("p"),el=l("Via npm:"),Ti=p(),tt=s("pre"),tl=l("$ npm install monaco-editor"),Hi=p(),it=s("h5"),il=l("Initializing"),Di=p(),J=s("p"),ol=l("Monaco uses the global variable "),Dt=s("code"),rl=l("MonacoEnvironment"),ll=l(` to specify where\r
    to find the worker code. This is how that looks with Vite.`),ji=p(),g(fe.$$.fragment),Bi=p(),ot=s("p"),nl=l("Without it, this warning will appear in the console:"),zi=p(),rt=s("pre"),sl=l("Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes."),Fi=p(),lt=s("h5"),al=l("Models"),Vi=p(),K=s("p"),fl=l("We'll create two objects of type "),jt=s("code"),pl=l("monaco.editor.ITextModel"),ul=l(`\r
    representing text files. One will contain query history and be displayed in a\r
    read-only editor. The other will contain the active query being edited.`),Ui=p(),g(pe.$$.fragment),Ni=p(),nt=s("p"),hl=l(`The first argument is the initial content of the model and the second is the\r
    language.`),Ji=p(),st=s("h5"),ml=l("Editor"),Ki=p(),at=s("p"),dl=l(`Now that we have models, we need to display them somewhere. Since there will\r
    be two nearly-identical editors, we'll define a function to initialize them.`),Gi=p(),g(ue.$$.fragment),Yi=p(),H=s("p"),cl=l(`We won't go into all of the options here, most are self-explanatory and you\r
    to play around with them all in the `),g(he.$$.fragment),wl=l(". What's important is that we pass a "),Bt=s("code"),vl=l("div"),bl=l(` where the editor should\r
    be mounted, a model to display, and the readOnly option.`),Xi=p(),ft=s("h5"),yl=l("Resizing"),Zi=p(),G=s("p"),$l=l(`We want the editor to resize with its content so we set the option\r
    `),zt=s("code"),El=l("scrollBeyondLastLine: false"),_l=l(" and register an event handler."),eo=p(),g(me.$$.fragment),to=p(),pt=s("p"),Sl=l(`When the content changes size, the container height will be updated and the\r
    editor will re-layout. Here the height is limited to 600px but it could be\r
    anything (like function of the window size).`),io=p(),D=s("p"),kl=l("It would also be a good idea to listen for "),Ft=s("code"),gl=l("resize"),Ll=l(` events on the\r
    window and trigger an update. In the name of keeping it quick-and-dirty\r
    we'll leave that as an exercise. Here's the finished `),Vt=s("code"),Pl=l("initEditor"),Il=l(`\r
    function.`),oo=p(),g(de.$$.fragment),ro=p(),ut=s("p"),ql=l(`Those are the basic components needed to put together our REPL. Before we\r
    do, let's take a quick look at some nice-to-have features.`),lo=p(),ht=s("h5"),Wl=l("Markers"),no=p(),mt=s("p"),Ml=l(`We can use markers to highlight text in a model. We'll do this when a query\r
    fails (rather than writing to the console).`),so=p(),g(ce.$$.fragment),ao=p(),Y=s("p"),xl=l(`This will draw a squiggly red line under the entire content of the editor.\r
    When the user hovers over the query, `),Ut=s("code"),Cl=l("exceptionVar"),Rl=l(` will appear in\r
    a tooltip like so:`),fo=p(),g(we.$$.fragment),po=p(),dt=s("h5"),Ol=l("Actions"),uo=p(),X=s("p"),Al=l("As our final feature, we'll register an action to call run when "),Nt=s("kbd"),Ql=l("shift + enter"),Tl=l(" is pressed."),ho=p(),g(ve.$$.fragment),mo=p(),ct=s("h4"),Hl=l("Putting It Together"),co=p(),wt=s("p"),Dl=l(`At this point we've seen all of the important bits so we're ready to build\r
    our crude REPL.`),wo=p(),vt=s("h5"),jl=l("index.html"),vo=p(),g(be.$$.fragment),bo=p(),bt=s("h5"),Bl=l("main.ts"),yo=p(),g(ye.$$.fragment),$o=p(),Z=s("p"),zl=l("That's it! For project configuration and setup instructions, check out the "),g($e.$$.fragment),Fl=l("."),Eo=p(),ee=s("p"),Vl=l("For a slightly more feature-rich SQLite REPL to play with, "),g(Ee.$$.fragment),Ul=l("'s the original that I created in Svelte."),_o=p(),g(_e.$$.fragment)},l(e){h=a(e,"P",{});var i=f(h);v=n(i,`A read–eval–print loop (REPL) is an interactive environment that takes user\r
    inputs, executes them, and returns the result. I made a TypeScript REPL\r
    using Monaco and SWC to show how `),L(w.$$.fragment,i),c=n(i,` works\r
    and thought it would be fun to do the same for SQLite.`),i.forEach(t),m=u(e),$=a(e,"P",{});var Yl=f($);d=n(Yl,"The good news is I got it working."),Yl.forEach(t),W=u(e),y=a(e,"H5",{});var Xl=f(y);_=n(Xl,"SQLite REPL Svelte Edition"),Xl.forEach(t),b=u(e),L(q.$$.fragment,e),C=u(e),j=a(e,"P",{});var Zl=f(j);Se=n(Zl,`Unfortunately, by the time I got everything working with SvelteKit it was a\r
    little too complex to describe in a post. So I distilled it down to a\r
    quick-and-dirty REPL that can help you get started with Monaco or SQLite in\r
    the browser.`),Zl.forEach(t),Jt=u(e),ke=a(e,"H3",{});var en=f(ke);Qo=n(en,"Some background"),en.forEach(t),Kt=u(e),ge=a(e,"H4",{});var tn=f(ge);To=n(tn,"Databases in the browser"),tn.forEach(t),Gt=u(e),Le=a(e,"P",{});var on=f(Le);Ho=n(on,`In 2014, I was doing a lot of work with Meteor and was blown away when I\r
    learned about Minimongo.`),on.forEach(t),Yt=u(e),Pe=a(e,"PRE",{});var rn=f(Pe);Do=n(rn,"Minimongo is essentially an in-memory, non-persistent implementation of Mongo in pure JavaScript. It serves as a local cache that stores just the subset of the database that this client is working with. Queries (find) on these collections are served directly out of this cache, without talking to the server."),rn.forEach(t),Xt=u(e),Ie=a(e,"P",{});var ln=f(Ie);jo=n(ln,`I thought it would be great if something similar existed based on a\r
    relational database. It turns out that once upon a time there was a browser\r
    API specification called Web SQL. Unfortunately, it was deprecated back in\r
    2010. The reason is captured well in a StackOverflow answer.`),ln.forEach(t),Zt=u(e),qe=a(e,"PRE",{});var nn=f(qe);Bo=n(nn,"Short version: Web SQL was deprecated because standards are really important and turning Web SQL into a proper standard would have been prohibitively difficult."),nn.forEach(t),ei=u(e),We=a(e,"P",{});var sn=f(We);zo=n(sn,`Fair enough. Don't let that get you down though, we're living in the future\r
    now. It's a time when you don't need a built-in API to get native\r
    performance. It's the time of WebAssembly.`),sn.forEach(t),ti=u(e),Me=a(e,"H4",{});var an=f(Me);Fo=n(an,"Everything is Wasm"),an.forEach(t),ii=u(e),xe=a(e,"P",{});var fn=f(xe);Vo=n(fn,`One technology that I'm super excited about is WebAssembly. Years ago I\r
    decided to trade the power of C for the ubiquity of JavaScript. For the most\r
    part, it has felt like the right decision and having a C background was a\r
    good foundation for work on the web.`),fn.forEach(t),oi=u(e),z=a(e,"P",{});var ko=f(z);Uo=n(ko,`But now I don't have to compromise. Languages like C and Rust already\r
    compile to Wasm. `),L(oe.$$.fragment,ko),No=n(ko,` is a Rust-based web\r
    transpiler that compiles to Wasm. It's what I used to perform in-browser transpilation\r
    for the TypeScript REPL.`),ko.forEach(t),ri=u(e),Ce=a(e,"P",{});var pn=f(Ce);Jo=n(pn,"Amazingly, SQLite (written in C) is already compiled to Wasm."),pn.forEach(t),li=u(e),Re=a(e,"H4",{});var un=f(Re);Ko=n(un,"Monaco"),un.forEach(t),ni=u(e),F=a(e,"P",{});var go=f(F);Go=n(go,`Monaco is the code editor that powers VSCode. It provides SQL syntax\r
    highlighting, hotkey registration, and a ton of other features that we'll\r
    only scratch the surface of. If you want to get a better idea of Monaco's\r
    capabilities, be sure to check out the `),L(re.$$.fragment,go),Yo=n(go,"."),go.forEach(t),si=u(e),Oe=a(e,"H3",{});var hn=f(Oe);Xo=n(hn,"Let's Build"),hn.forEach(t),ai=u(e),Ae=a(e,"H4",{});var mn=f(Ae);Zo=n(mn,"SQLite3"),mn.forEach(t),fi=u(e),Qe=a(e,"H5",{});var dn=f(Qe);er=n(dn,"Getting the code"),dn.forEach(t),pi=u(e),V=a(e,"P",{});var Lo=f(V);tr=n(Lo,`Not only is SQLite already precompiled to Wasm but there are a handful of\r
    demos showing how to use it. We just need to grab the WebAssembly &\r
    JavaScript archive from `),L(le.$$.fragment,Lo),ir=n(Lo," and then figure out which files to use."),Lo.forEach(t),ui=u(e),Te=a(e,"P",{});var cn=f(Te);or=n(cn,"There are a few options to choose from depending on whether you:"),cn.forEach(t),hi=u(e),A=a(e,"OL",{});var yt=f(A);kt=a(yt,"LI",{});var wn=f(kt);rr=n(wn,"are using a bundler"),wn.forEach(t),lr=u(yt),gt=a(yt,"LI",{});var vn=f(gt);nr=n(vn,"want to use the UI thread or a worker"),vn.forEach(t),sr=u(yt),Lt=a(yt,"LI",{});var bn=f(Lt);ar=n(bn,"want a synchronous or promise-based API (only applies to workers)"),bn.forEach(t),yt.forEach(t),mi=u(e),He=a(e,"P",{});var yn=f(He);fr=n(yn,`We're going to use a bundler since it makes working with Monaco easier. It's\r
    a REPL so we won't worry about UI responsiveness while the DB is running\r
    queries. We are interested in the persistence options though. From the\r
    SQLite Wasm docs:`),yn.forEach(t),di=u(e),De=a(e,"PRE",{});var $n=f(De);pr=n($n,"This API provides database persistence via localStorage/sessionStorage and, in compatible browsers, the Origin-Private FileSystem."),$n.forEach(t),ci=u(e),je=a(e,"PRE",{});var En=f(je);ur=n(En,"kvvfs is an sqlite3_vfs implementation conceived and created to store a whole sqlite3 database in the localStorage or sessionStorage objects. Those objects are only available in the main UI thread, not Worker threads, so this feature is only available in the main thread."),En.forEach(t),wi=u(e),Be=a(e,"PRE",{});var _n=f(Be);hr=n(_n,"The Origin-Private FileSystem, OPFS, is an API providing browser-side persistent storage which, not coincidentally, sqlite3 can use for storing databases."),_n.forEach(t),vi=u(e),ze=a(e,"PRE",{});var Sn=f(ze);mr=n(Sn,"As of late 2022, only bleeding-edge versions of Chromium-derived browsers have the necessary APIs."),Sn.forEach(t),bi=u(e),Fe=a(e,"P",{});var kn=f(Fe);dr=n(kn,`So, in the interest of maximizing compatibility, we'll run SQLite in the\r
    main thread which requires these files.`),kn.forEach(t),yi=u(e),Q=a(e,"OL",{});var $t=f(Q);Pt=a($t,"LI",{});var gn=f(Pt);cr=n(gn,"sqlite3.wasm"),gn.forEach(t),wr=u($t),It=a($t,"LI",{});var Ln=f(It);vr=n(Ln,"sqlite3-bundler-friendly.mjs"),Ln.forEach(t),br=u($t),qt=a($t,"LI",{});var Pn=f(qt);yr=n(Pn,"sqlite3-opfs-async-proxy.js"),Pn.forEach(t),$t.forEach(t),$i=u(e),Ve=a(e,"P",{});var In=f(Ve);$r=n(In,`Since we aren't using OPFS, the third shouldn't be needed but the bundler\r
    fails without it.`),In.forEach(t),Ei=u(e),Ue=a(e,"H5",{});var qn=f(Ue);Er=n(qn,"Initializing"),qn.forEach(t),_i=u(e),T=a(e,"P",{});var Et=f(T);_r=n(Et,"We'll copy the files into the "),Wt=a(Et,"CODE",{});var Wn=f(Wt);Sr=n(Wn,"src"),Wn.forEach(t),kr=n(Et,` directory where they can be\r
    imported by `),Mt=a(Et,"CODE",{});var Mn=f(Mt);gr=n(Mn,"main.ts"),Mn.forEach(t),Lr=n(Et,`. Then we can initialize SQLite and create a\r
    database.`),Et.forEach(t),Si=u(e),L(ne.$$.fragment,e),ki=u(e),R=a(e,"P",{});var te=f(R);Pr=n(te,"The filename "),xt=a(te,"CODE",{});var xn=f(xt);Ir=n(xn,":localStorage:"),xn.forEach(t),qr=n(te,` tells SQLite to use local storage\r
    for persistence. We pass the flag `),Ct=a(te,"CODE",{});var Cn=f(Ct);Wr=n(Cn,"c"),Cn.forEach(t),Mr=n(te,` to create the database if\r
    it doesn't exist and `),Rt=a(te,"CODE",{});var Rn=f(Rt);xr=n(Rn,"t"),Rn.forEach(t),Cr=n(te,` to enable tracing (appears in the developer\r
    console).`),te.forEach(t),gi=u(e),Ne=a(e,"H5",{});var On=f(Ne);Rr=n(On,"Running queries"),On.forEach(t),Li=u(e),U=a(e,"P",{});var Po=f(U);Or=n(Po,`The SQLite API provides a few ways to build and run queries but we'll stick\r
    to `),Ot=a(Po,"CODE",{});var An=f(Ot);Ar=n(An,"exec"),An.forEach(t),Qr=n(Po,"."),Po.forEach(t),Pi=u(e),L(se.$$.fragment,e),Ii=u(e),O=a(e,"P",{});var ie=f(O);Tr=n(ie,"We get the start time to help detect slow queries and then call "),At=a(ie,"CODE",{});var Qn=f(At);Hr=n(Qn,"db.exec"),Qn.forEach(t),Dr=n(ie,`, passing it SQL to run and an options object containing\r
    `),Qt=a(ie,"CODE",{});var Tn=f(Qt);jr=n(Tn,'rowMode: "object"'),Tn.forEach(t),Br=n(ie,". This tells "),Tt=a(ie,"CODE",{});var Hn=f(Tt);zr=n(Hn,"exec"),Hn.forEach(t),Fr=n(ie,` to return the result\r
    rows as an array of key value-pairs.`),ie.forEach(t),qi=u(e),N=a(e,"P",{});var Io=f(N);Vr=n(Io,"We'll revisit "),Ht=a(Io,"CODE",{});var Dn=f(Ht);Ur=n(Dn,"run"),Dn.forEach(t),Nr=n(Io," later when it's time to integrate with Monaco."),Io.forEach(t),Wi=u(e),Je=a(e,"H5",{});var jn=f(Je);Jr=n(jn,"Clearing the database"),jn.forEach(t),Mi=u(e),Ke=a(e,"P",{});var Bn=f(Ke);Kr=n(Bn,`Apart from creating a database and executing queries, the only other SQLite\r
    functionality we need is for clearing the database.`),Bn.forEach(t),xi=u(e),L(ae.$$.fragment,e),Ci=u(e),Ge=a(e,"P",{});var zn=f(Ge);Gr=n(zn,"This removes all SQLite data from local storage."),zn.forEach(t),Ri=u(e),Ye=a(e,"H4",{});var Fn=f(Ye);Yr=n(Fn,"Monaco"),Fn.forEach(t),Oi=u(e),Xe=a(e,"P",{});var Vn=f(Xe);Xr=n(Vn,"We're going to lean on Monaco to do all of the heavy lifting in terms of UI."),Vn.forEach(t),Ai=u(e),Ze=a(e,"H5",{});var Un=f(Ze);Zr=n(Un,"Installation"),Un.forEach(t),Qi=u(e),et=a(e,"P",{});var Nn=f(et);el=n(Nn,"Via npm:"),Nn.forEach(t),Ti=u(e),tt=a(e,"PRE",{});var Jn=f(tt);tl=n(Jn,"$ npm install monaco-editor"),Jn.forEach(t),Hi=u(e),it=a(e,"H5",{});var Kn=f(it);il=n(Kn,"Initializing"),Kn.forEach(t),Di=u(e),J=a(e,"P",{});var qo=f(J);ol=n(qo,"Monaco uses the global variable "),Dt=a(qo,"CODE",{});var Gn=f(Dt);rl=n(Gn,"MonacoEnvironment"),Gn.forEach(t),ll=n(qo,` to specify where\r
    to find the worker code. This is how that looks with Vite.`),qo.forEach(t),ji=u(e),L(fe.$$.fragment,e),Bi=u(e),ot=a(e,"P",{});var Yn=f(ot);nl=n(Yn,"Without it, this warning will appear in the console:"),Yn.forEach(t),zi=u(e),rt=a(e,"PRE",{});var Xn=f(rt);sl=n(Xn,"Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes."),Xn.forEach(t),Fi=u(e),lt=a(e,"H5",{});var Zn=f(lt);al=n(Zn,"Models"),Zn.forEach(t),Vi=u(e),K=a(e,"P",{});var Wo=f(K);fl=n(Wo,"We'll create two objects of type "),jt=a(Wo,"CODE",{});var es=f(jt);pl=n(es,"monaco.editor.ITextModel"),es.forEach(t),ul=n(Wo,`\r
    representing text files. One will contain query history and be displayed in a\r
    read-only editor. The other will contain the active query being edited.`),Wo.forEach(t),Ui=u(e),L(pe.$$.fragment,e),Ni=u(e),nt=a(e,"P",{});var ts=f(nt);hl=n(ts,`The first argument is the initial content of the model and the second is the\r
    language.`),ts.forEach(t),Ji=u(e),st=a(e,"H5",{});var is=f(st);ml=n(is,"Editor"),is.forEach(t),Ki=u(e),at=a(e,"P",{});var os=f(at);dl=n(os,`Now that we have models, we need to display them somewhere. Since there will\r
    be two nearly-identical editors, we'll define a function to initialize them.`),os.forEach(t),Gi=u(e),L(ue.$$.fragment,e),Yi=u(e),H=a(e,"P",{});var _t=f(H);cl=n(_t,`We won't go into all of the options here, most are self-explanatory and you\r
    to play around with them all in the `),L(he.$$.fragment,_t),wl=n(_t,". What's important is that we pass a "),Bt=a(_t,"CODE",{});var rs=f(Bt);vl=n(rs,"div"),rs.forEach(t),bl=n(_t,` where the editor should\r
    be mounted, a model to display, and the readOnly option.`),_t.forEach(t),Xi=u(e),ft=a(e,"H5",{});var ls=f(ft);yl=n(ls,"Resizing"),ls.forEach(t),Zi=u(e),G=a(e,"P",{});var Mo=f(G);$l=n(Mo,`We want the editor to resize with its content so we set the option\r
    `),zt=a(Mo,"CODE",{});var ns=f(zt);El=n(ns,"scrollBeyondLastLine: false"),ns.forEach(t),_l=n(Mo," and register an event handler."),Mo.forEach(t),eo=u(e),L(me.$$.fragment,e),to=u(e),pt=a(e,"P",{});var ss=f(pt);Sl=n(ss,`When the content changes size, the container height will be updated and the\r
    editor will re-layout. Here the height is limited to 600px but it could be\r
    anything (like function of the window size).`),ss.forEach(t),io=u(e),D=a(e,"P",{});var St=f(D);kl=n(St,"It would also be a good idea to listen for "),Ft=a(St,"CODE",{});var as=f(Ft);gl=n(as,"resize"),as.forEach(t),Ll=n(St,` events on the\r
    window and trigger an update. In the name of keeping it quick-and-dirty\r
    we'll leave that as an exercise. Here's the finished `),Vt=a(St,"CODE",{});var fs=f(Vt);Pl=n(fs,"initEditor"),fs.forEach(t),Il=n(St,`\r
    function.`),St.forEach(t),oo=u(e),L(de.$$.fragment,e),ro=u(e),ut=a(e,"P",{});var ps=f(ut);ql=n(ps,`Those are the basic components needed to put together our REPL. Before we\r
    do, let's take a quick look at some nice-to-have features.`),ps.forEach(t),lo=u(e),ht=a(e,"H5",{});var us=f(ht);Wl=n(us,"Markers"),us.forEach(t),no=u(e),mt=a(e,"P",{});var hs=f(mt);Ml=n(hs,`We can use markers to highlight text in a model. We'll do this when a query\r
    fails (rather than writing to the console).`),hs.forEach(t),so=u(e),L(ce.$$.fragment,e),ao=u(e),Y=a(e,"P",{});var xo=f(Y);xl=n(xo,`This will draw a squiggly red line under the entire content of the editor.\r
    When the user hovers over the query, `),Ut=a(xo,"CODE",{});var ms=f(Ut);Cl=n(ms,"exceptionVar"),ms.forEach(t),Rl=n(xo,` will appear in\r
    a tooltip like so:`),xo.forEach(t),fo=u(e),L(we.$$.fragment,e),po=u(e),dt=a(e,"H5",{});var ds=f(dt);Ol=n(ds,"Actions"),ds.forEach(t),uo=u(e),X=a(e,"P",{});var Co=f(X);Al=n(Co,"As our final feature, we'll register an action to call run when "),Nt=a(Co,"KBD",{});var cs=f(Nt);Ql=n(cs,"shift + enter"),cs.forEach(t),Tl=n(Co," is pressed."),Co.forEach(t),ho=u(e),L(ve.$$.fragment,e),mo=u(e),ct=a(e,"H4",{});var ws=f(ct);Hl=n(ws,"Putting It Together"),ws.forEach(t),co=u(e),wt=a(e,"P",{});var vs=f(wt);Dl=n(vs,`At this point we've seen all of the important bits so we're ready to build\r
    our crude REPL.`),vs.forEach(t),wo=u(e),vt=a(e,"H5",{});var bs=f(vt);jl=n(bs,"index.html"),bs.forEach(t),vo=u(e),L(be.$$.fragment,e),bo=u(e),bt=a(e,"H5",{});var ys=f(bt);Bl=n(ys,"main.ts"),ys.forEach(t),yo=u(e),L(ye.$$.fragment,e),$o=u(e),Z=a(e,"P",{});var Ro=f(Z);zl=n(Ro,"That's it! For project configuration and setup instructions, check out the "),L($e.$$.fragment,Ro),Fl=n(Ro,"."),Ro.forEach(t),Eo=u(e),ee=a(e,"P",{});var Oo=f(ee);Vl=n(Oo,"For a slightly more feature-rich SQLite REPL to play with, "),L(Ee.$$.fragment,Oo),Ul=n(Oo,"'s the original that I created in Svelte."),Oo.forEach(t),_o=u(e),L(_e.$$.fragment,e)},m(e,i){o(e,h,i),r(h,v),P(w,h,null),r(h,c),o(e,m,i),o(e,$,i),r($,d),o(e,W,i),o(e,y,i),r(y,_),o(e,b,i),P(q,e,i),o(e,C,i),o(e,j,i),r(j,Se),o(e,Jt,i),o(e,ke,i),r(ke,Qo),o(e,Kt,i),o(e,ge,i),r(ge,To),o(e,Gt,i),o(e,Le,i),r(Le,Ho),o(e,Yt,i),o(e,Pe,i),r(Pe,Do),o(e,Xt,i),o(e,Ie,i),r(Ie,jo),o(e,Zt,i),o(e,qe,i),r(qe,Bo),o(e,ei,i),o(e,We,i),r(We,zo),o(e,ti,i),o(e,Me,i),r(Me,Fo),o(e,ii,i),o(e,xe,i),r(xe,Vo),o(e,oi,i),o(e,z,i),r(z,Uo),P(oe,z,null),r(z,No),o(e,ri,i),o(e,Ce,i),r(Ce,Jo),o(e,li,i),o(e,Re,i),r(Re,Ko),o(e,ni,i),o(e,F,i),r(F,Go),P(re,F,null),r(F,Yo),o(e,si,i),o(e,Oe,i),r(Oe,Xo),o(e,ai,i),o(e,Ae,i),r(Ae,Zo),o(e,fi,i),o(e,Qe,i),r(Qe,er),o(e,pi,i),o(e,V,i),r(V,tr),P(le,V,null),r(V,ir),o(e,ui,i),o(e,Te,i),r(Te,or),o(e,hi,i),o(e,A,i),r(A,kt),r(kt,rr),r(A,lr),r(A,gt),r(gt,nr),r(A,sr),r(A,Lt),r(Lt,ar),o(e,mi,i),o(e,He,i),r(He,fr),o(e,di,i),o(e,De,i),r(De,pr),o(e,ci,i),o(e,je,i),r(je,ur),o(e,wi,i),o(e,Be,i),r(Be,hr),o(e,vi,i),o(e,ze,i),r(ze,mr),o(e,bi,i),o(e,Fe,i),r(Fe,dr),o(e,yi,i),o(e,Q,i),r(Q,Pt),r(Pt,cr),r(Q,wr),r(Q,It),r(It,vr),r(Q,br),r(Q,qt),r(qt,yr),o(e,$i,i),o(e,Ve,i),r(Ve,$r),o(e,Ei,i),o(e,Ue,i),r(Ue,Er),o(e,_i,i),o(e,T,i),r(T,_r),r(T,Wt),r(Wt,Sr),r(T,kr),r(T,Mt),r(Mt,gr),r(T,Lr),o(e,Si,i),P(ne,e,i),o(e,ki,i),o(e,R,i),r(R,Pr),r(R,xt),r(xt,Ir),r(R,qr),r(R,Ct),r(Ct,Wr),r(R,Mr),r(R,Rt),r(Rt,xr),r(R,Cr),o(e,gi,i),o(e,Ne,i),r(Ne,Rr),o(e,Li,i),o(e,U,i),r(U,Or),r(U,Ot),r(Ot,Ar),r(U,Qr),o(e,Pi,i),P(se,e,i),o(e,Ii,i),o(e,O,i),r(O,Tr),r(O,At),r(At,Hr),r(O,Dr),r(O,Qt),r(Qt,jr),r(O,Br),r(O,Tt),r(Tt,zr),r(O,Fr),o(e,qi,i),o(e,N,i),r(N,Vr),r(N,Ht),r(Ht,Ur),r(N,Nr),o(e,Wi,i),o(e,Je,i),r(Je,Jr),o(e,Mi,i),o(e,Ke,i),r(Ke,Kr),o(e,xi,i),P(ae,e,i),o(e,Ci,i),o(e,Ge,i),r(Ge,Gr),o(e,Ri,i),o(e,Ye,i),r(Ye,Yr),o(e,Oi,i),o(e,Xe,i),r(Xe,Xr),o(e,Ai,i),o(e,Ze,i),r(Ze,Zr),o(e,Qi,i),o(e,et,i),r(et,el),o(e,Ti,i),o(e,tt,i),r(tt,tl),o(e,Hi,i),o(e,it,i),r(it,il),o(e,Di,i),o(e,J,i),r(J,ol),r(J,Dt),r(Dt,rl),r(J,ll),o(e,ji,i),P(fe,e,i),o(e,Bi,i),o(e,ot,i),r(ot,nl),o(e,zi,i),o(e,rt,i),r(rt,sl),o(e,Fi,i),o(e,lt,i),r(lt,al),o(e,Vi,i),o(e,K,i),r(K,fl),r(K,jt),r(jt,pl),r(K,ul),o(e,Ui,i),P(pe,e,i),o(e,Ni,i),o(e,nt,i),r(nt,hl),o(e,Ji,i),o(e,st,i),r(st,ml),o(e,Ki,i),o(e,at,i),r(at,dl),o(e,Gi,i),P(ue,e,i),o(e,Yi,i),o(e,H,i),r(H,cl),P(he,H,null),r(H,wl),r(H,Bt),r(Bt,vl),r(H,bl),o(e,Xi,i),o(e,ft,i),r(ft,yl),o(e,Zi,i),o(e,G,i),r(G,$l),r(G,zt),r(zt,El),r(G,_l),o(e,eo,i),P(me,e,i),o(e,to,i),o(e,pt,i),r(pt,Sl),o(e,io,i),o(e,D,i),r(D,kl),r(D,Ft),r(Ft,gl),r(D,Ll),r(D,Vt),r(Vt,Pl),r(D,Il),o(e,oo,i),P(de,e,i),o(e,ro,i),o(e,ut,i),r(ut,ql),o(e,lo,i),o(e,ht,i),r(ht,Wl),o(e,no,i),o(e,mt,i),r(mt,Ml),o(e,so,i),P(ce,e,i),o(e,ao,i),o(e,Y,i),r(Y,xl),r(Y,Ut),r(Ut,Cl),r(Y,Rl),o(e,fo,i),P(we,e,i),o(e,po,i),o(e,dt,i),r(dt,Ol),o(e,uo,i),o(e,X,i),r(X,Al),r(X,Nt),r(Nt,Ql),r(X,Tl),o(e,ho,i),P(ve,e,i),o(e,mo,i),o(e,ct,i),r(ct,Hl),o(e,co,i),o(e,wt,i),r(wt,Dl),o(e,wo,i),o(e,vt,i),r(vt,jl),o(e,vo,i),P(be,e,i),o(e,bo,i),o(e,bt,i),r(bt,Bl),o(e,yo,i),P(ye,e,i),o(e,$o,i),o(e,Z,i),r(Z,zl),P($e,Z,null),r(Z,Fl),o(e,Eo,i),o(e,ee,i),r(ee,Vl),P(Ee,ee,null),r(ee,Ul),o(e,_o,i),P(_e,e,i),So=!0},p:Ao,i(e){So||(S(w.$$.fragment,e),S(q.$$.fragment,e),S(oe.$$.fragment,e),S(re.$$.fragment,e),S(le.$$.fragment,e),S(ne.$$.fragment,e),S(se.$$.fragment,e),S(ae.$$.fragment,e),S(fe.$$.fragment,e),S(pe.$$.fragment,e),S(ue.$$.fragment,e),S(he.$$.fragment,e),S(me.$$.fragment,e),S(de.$$.fragment,e),S(ce.$$.fragment,e),S(we.$$.fragment,e),S(ve.$$.fragment,e),S(be.$$.fragment,e),S(ye.$$.fragment,e),S($e.$$.fragment,e),S(Ee.$$.fragment,e),S(_e.$$.fragment,e),So=!0)},o(e){k(w.$$.fragment,e),k(q.$$.fragment,e),k(oe.$$.fragment,e),k(re.$$.fragment,e),k(le.$$.fragment,e),k(ne.$$.fragment,e),k(se.$$.fragment,e),k(ae.$$.fragment,e),k(fe.$$.fragment,e),k(pe.$$.fragment,e),k(ue.$$.fragment,e),k(he.$$.fragment,e),k(me.$$.fragment,e),k(de.$$.fragment,e),k(ce.$$.fragment,e),k(we.$$.fragment,e),k(ve.$$.fragment,e),k(be.$$.fragment,e),k(ye.$$.fragment,e),k($e.$$.fragment,e),k(Ee.$$.fragment,e),k(_e.$$.fragment,e),So=!1},d(e){e&&t(h),I(w),e&&t(m),e&&t($),e&&t(W),e&&t(y),e&&t(b),I(q,e),e&&t(C),e&&t(j),e&&t(Jt),e&&t(ke),e&&t(Kt),e&&t(ge),e&&t(Gt),e&&t(Le),e&&t(Yt),e&&t(Pe),e&&t(Xt),e&&t(Ie),e&&t(Zt),e&&t(qe),e&&t(ei),e&&t(We),e&&t(ti),e&&t(Me),e&&t(ii),e&&t(xe),e&&t(oi),e&&t(z),I(oe),e&&t(ri),e&&t(Ce),e&&t(li),e&&t(Re),e&&t(ni),e&&t(F),I(re),e&&t(si),e&&t(Oe),e&&t(ai),e&&t(Ae),e&&t(fi),e&&t(Qe),e&&t(pi),e&&t(V),I(le),e&&t(ui),e&&t(Te),e&&t(hi),e&&t(A),e&&t(mi),e&&t(He),e&&t(di),e&&t(De),e&&t(ci),e&&t(je),e&&t(wi),e&&t(Be),e&&t(vi),e&&t(ze),e&&t(bi),e&&t(Fe),e&&t(yi),e&&t(Q),e&&t($i),e&&t(Ve),e&&t(Ei),e&&t(Ue),e&&t(_i),e&&t(T),e&&t(Si),I(ne,e),e&&t(ki),e&&t(R),e&&t(gi),e&&t(Ne),e&&t(Li),e&&t(U),e&&t(Pi),I(se,e),e&&t(Ii),e&&t(O),e&&t(qi),e&&t(N),e&&t(Wi),e&&t(Je),e&&t(Mi),e&&t(Ke),e&&t(xi),I(ae,e),e&&t(Ci),e&&t(Ge),e&&t(Ri),e&&t(Ye),e&&t(Oi),e&&t(Xe),e&&t(Ai),e&&t(Ze),e&&t(Qi),e&&t(et),e&&t(Ti),e&&t(tt),e&&t(Hi),e&&t(it),e&&t(Di),e&&t(J),e&&t(ji),I(fe,e),e&&t(Bi),e&&t(ot),e&&t(zi),e&&t(rt),e&&t(Fi),e&&t(lt),e&&t(Vi),e&&t(K),e&&t(Ui),I(pe,e),e&&t(Ni),e&&t(nt),e&&t(Ji),e&&t(st),e&&t(Ki),e&&t(at),e&&t(Gi),I(ue,e),e&&t(Yi),e&&t(H),I(he),e&&t(Xi),e&&t(ft),e&&t(Zi),e&&t(G),e&&t(eo),I(me,e),e&&t(to),e&&t(pt),e&&t(io),e&&t(D),e&&t(oo),I(de,e),e&&t(ro),e&&t(ut),e&&t(lo),e&&t(ht),e&&t(no),e&&t(mt),e&&t(so),I(ce,e),e&&t(ao),e&&t(Y),e&&t(fo),I(we,e),e&&t(po),e&&t(dt),e&&t(uo),e&&t(X),e&&t(ho),I(ve,e),e&&t(mo),e&&t(ct),e&&t(co),e&&t(wt),e&&t(wo),e&&t(vt),e&&t(vo),I(be,e),e&&t(bo),e&&t(bt),e&&t(yo),I(ye,e),e&&t($o),e&&t(Z),I($e),e&&t(Eo),e&&t(ee),I(Ee),e&&t(_o),I(_e,e)}}}function Hs(E){let h,v,w,c;return v=new B({props:{href:"https://github.com/nmacmunn/qads-repl",label:"quick-and-dirty SQLite REPL"}}),{c(){h=l("Build a "),g(v.$$.fragment),w=l(`\r
    using WebAssembly and Monaco`)},l(m){h=n(m,"Build a "),L(v.$$.fragment,m),w=n(m,`\r
    using WebAssembly and Monaco`)},m(m,$){o(m,h,$),P(v,m,$),o(m,w,$),c=!0},p:Ao,i(m){c||(S(v.$$.fragment,m),c=!0)},o(m){k(v.$$.fragment,m),c=!1},d(m){m&&t(h),I(v,m),m&&t(w)}}}function Ds(E){let h,v,w,c,m;return document.title=h=Nl,c=new qs({props:{title:Nl,date:E[0],$$slots:{tldr:[Hs],default:[Ts]},$$scope:{ctx:E}}}),{c(){v=s("meta"),w=p(),g(c.$$.fragment),this.h()},l($){const d=Is("svelte-1law5hj",document.head);v=a(d,"META",{name:!0,content:!0}),d.forEach(t),w=u($),L(c.$$.fragment,$),this.h()},h(){x(v,"name","description"),x(v,"content",js)},m($,d){r(document.head,v),o($,w,d),P(c,$,d),m=!0},p($,[d]){(!m||d&0)&&h!==(h=Nl)&&(document.title=h);const W={};d&2&&(W.$$scope={dirty:d,ctx:$}),c.$set(W)},i($){m||(S(c.$$.fragment,$),m=!0)},o($){k(c.$$.fragment,$),m=!1},d($){t(v),$&&t(w),I(c,$)}}}const Nl="Building a SQLite Playground",js="How to build a SQLite REPL that runs entirely in the browser.";function Bs(E){return[new Date("March 7, 2023")]}class Ns extends Jl{constructor(h){super(),Kl(this,h,Bs,Ds,Gl,{})}}export{Ns as default};
