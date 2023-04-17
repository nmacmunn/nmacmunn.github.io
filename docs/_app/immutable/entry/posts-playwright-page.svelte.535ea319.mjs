import{S as Yt,i as Nt,s as Bt,y as G,z as M,A as U,g as z,d as W,B as j,k as i,q as s,a as c,l,m as p,r as n,h as t,c as f,b as r,D as a,I as Gt}from"../chunks/index.4711a160.mjs";import{S as Mt}from"../chunks/section.886cec36.mjs";import{S as ne}from"../chunks/snippet.3767b8a5.mjs";function Ut(w){let h,y,u,d,_,x,Je,ie,$,He,F,Ae,Te,le,E,pe,b,qe,K,Le,Re,ce,O,Ve,fe,J,Ye,he,I,ue,H,Ne,de,A,Be,ge,P,Ge,Q,Me,Ue,ve,k,me,v,ze,X,We,je,Z,Fe,Ke,we,T,Qe,ye,S,ee,Xe,Ze,_e,q,et,$e,L,tt,be,R,at,Pe,g,ot,te,rt,st,ae,nt,it,oe,lt,pt,Ce,D,Ee,m,ct,re,ft,ht,se,ut,dt,Ie,V,gt,ke,Y,vt,Se;return d=new ne({props:{value:w[0]}}),E=new ne({props:{value:w[3]}}),I=new ne({props:{value:w[1]}}),k=new ne({props:{value:w[2]}}),D=new ne({props:{value:w[4]}}),{c(){h=i("p"),y=s(`I wanted to be able to build my test gradually and watch the coverage change
    in realtime. The Playwright Library made this pretty easy.`),u=c(),G(d.$$.fragment),_=c(),x=i("h5"),Je=s("codegen"),ie=c(),$=i("p"),He=s("Playwright has an awesome feature called "),F=i("b"),Ae=s("codegen"),Te=s(` that records interactions
    with your application and writes out a test that you can replay. You can even
    start it programmatically.`),le=c(),G(E.$$.fragment),pe=c(),b=i("p"),qe=s("My plan was to insert "),K=i("code"),Le=s("await page.pause()"),Re=s(` at the end of the test
    so I could incrementally add and test a few steps at a time.`),ce=c(),O=i("h5"),Ve=s("Getting coverage"),fe=c(),J=i("p"),Ye=s(`I knew that V8 had native support for JavaScript code coverage and
    thankfully Playwright already supported commands to obtain it.`),he=c(),G(I.$$.fragment),ue=c(),H=i("p"),Ne=s(`Unfortunately, to get the coverage in realtime in this way I'd need to
    continuously start and stop. I was afraid of losing coverage data during the
    off intervals so I decided to take a different approach.`),de=c(),A=i("h5"),Be=s("Then there was hacking"),ge=c(),P=i("p"),Ge=s("Here's the function that gets called when "),Q=i("code"),Me=s("page.coverage.stopJSCoverage"),Ue=s(" is invoked."),ve=c(),G(k.$$.fragment),me=c(),v=i("p"),ze=s("It sends four requests to Chromium, the first being "),X=i("code"),We=s("Profiler.takePreciseCoverage"),je=s(`
    which is the one we're interested in. Armed with this knowledge, it was easy
    to add a new method `),Z=i("code"),Fe=s("page.coverage.takeJSCoverage"),Ke=s(` that would allow
    me to get the coverage in realtime without disabling coverage.`),we=c(),T=i("h5"),Qe=s("Combining coverage"),ye=c(),S=i("p"),ee=i("code"),Xe=s("Profile.takePreciseCoverage"),Ze=s(` resets V8's coverage counts so I needed
    to keep track of the totals over time. It's not super interesting or challenging
    but I thought worth mentioning.`),_e=c(),q=i("h5"),et=s("Displaying Coverage"),$e=c(),L=i("p"),tt=s(`I wanted to see the percent coverage for each file and the ability to dive
    into the details of any particular file.`),be=c(),R=i("h5"),at=s("And then more hacking"),Pe=c(),g=i("p"),ot=s(`Another problem I ran into with coverage is that it needs to be enabled for
    each page and captured before the page is closed. You could do this manually
    but I wanted to make sure the test would work even without `),te=i("code"),rt=s("page.coverage.takeCoverage"),st=s(`
    so I monkey-patched `),ae=i("code"),nt=s("context.newPage"),it=s(` and
    `),oe=i("code"),lt=s("page.close"),pt=s(`
    to ensure that I get coverage for the full lifecycle of the page.`),Ce=c(),G(D.$$.fragment),Ee=c(),m=i("p"),ct=s("Also note the option "),re=i("code"),ft=s("resetOnNavigation: false"),ht=s(`. This is
    important to be able to call `),se=i("code"),ut=s("page.goto"),dt=s(` in your test without losing
    coverage data (although I could monkey-patch that too).`),Ie=c(),V=i("h5"),gt=s("Sourcemaps"),ke=c(),Y=i("p"),vt=s(`This is the part where I learned way more about sourcemaps than I ever cared
    to.`)},l(e){h=l(e,"P",{});var o=p(h);y=n(o,`I wanted to be able to build my test gradually and watch the coverage change
    in realtime. The Playwright Library made this pretty easy.`),o.forEach(t),u=f(e),M(d.$$.fragment,e),_=f(e),x=l(e,"H5",{});var wt=p(x);Je=n(wt,"codegen"),wt.forEach(t),ie=f(e),$=l(e,"P",{});var De=p($);He=n(De,"Playwright has an awesome feature called "),F=l(De,"B",{});var yt=p(F);Ae=n(yt,"codegen"),yt.forEach(t),Te=n(De,` that records interactions
    with your application and writes out a test that you can replay. You can even
    start it programmatically.`),De.forEach(t),le=f(e),M(E.$$.fragment,e),pe=f(e),b=l(e,"P",{});var xe=p(b);qe=n(xe,"My plan was to insert "),K=l(xe,"CODE",{});var _t=p(K);Le=n(_t,"await page.pause()"),_t.forEach(t),Re=n(xe,` at the end of the test
    so I could incrementally add and test a few steps at a time.`),xe.forEach(t),ce=f(e),O=l(e,"H5",{});var $t=p(O);Ve=n($t,"Getting coverage"),$t.forEach(t),fe=f(e),J=l(e,"P",{});var bt=p(J);Ye=n(bt,`I knew that V8 had native support for JavaScript code coverage and
    thankfully Playwright already supported commands to obtain it.`),bt.forEach(t),he=f(e),M(I.$$.fragment,e),ue=f(e),H=l(e,"P",{});var Pt=p(H);Ne=n(Pt,`Unfortunately, to get the coverage in realtime in this way I'd need to
    continuously start and stop. I was afraid of losing coverage data during the
    off intervals so I decided to take a different approach.`),Pt.forEach(t),de=f(e),A=l(e,"H5",{});var Ct=p(A);Be=n(Ct,"Then there was hacking"),Ct.forEach(t),ge=f(e),P=l(e,"P",{});var Oe=p(P);Ge=n(Oe,"Here's the function that gets called when "),Q=l(Oe,"CODE",{});var Et=p(Q);Me=n(Et,"page.coverage.stopJSCoverage"),Et.forEach(t),Ue=n(Oe," is invoked."),Oe.forEach(t),ve=f(e),M(k.$$.fragment,e),me=f(e),v=l(e,"P",{});var N=p(v);ze=n(N,"It sends four requests to Chromium, the first being "),X=l(N,"CODE",{});var It=p(X);We=n(It,"Profiler.takePreciseCoverage"),It.forEach(t),je=n(N,`
    which is the one we're interested in. Armed with this knowledge, it was easy
    to add a new method `),Z=l(N,"CODE",{});var kt=p(Z);Fe=n(kt,"page.coverage.takeJSCoverage"),kt.forEach(t),Ke=n(N,` that would allow
    me to get the coverage in realtime without disabling coverage.`),N.forEach(t),we=f(e),T=l(e,"H5",{});var St=p(T);Qe=n(St,"Combining coverage"),St.forEach(t),ye=f(e),S=l(e,"P",{});var mt=p(S);ee=l(mt,"CODE",{});var Dt=p(ee);Xe=n(Dt,"Profile.takePreciseCoverage"),Dt.forEach(t),Ze=n(mt,` resets V8's coverage counts so I needed
    to keep track of the totals over time. It's not super interesting or challenging
    but I thought worth mentioning.`),mt.forEach(t),_e=f(e),q=l(e,"H5",{});var xt=p(q);et=n(xt,"Displaying Coverage"),xt.forEach(t),$e=f(e),L=l(e,"P",{});var Ot=p(L);tt=n(Ot,`I wanted to see the percent coverage for each file and the ability to dive
    into the details of any particular file.`),Ot.forEach(t),be=f(e),R=l(e,"H5",{});var Jt=p(R);at=n(Jt,"And then more hacking"),Jt.forEach(t),Pe=f(e),g=l(e,"P",{});var C=p(g);ot=n(C,`Another problem I ran into with coverage is that it needs to be enabled for
    each page and captured before the page is closed. You could do this manually
    but I wanted to make sure the test would work even without `),te=l(C,"CODE",{});var Ht=p(te);rt=n(Ht,"page.coverage.takeCoverage"),Ht.forEach(t),st=n(C,`
    so I monkey-patched `),ae=l(C,"CODE",{});var At=p(ae);nt=n(At,"context.newPage"),At.forEach(t),it=n(C,` and
    `),oe=l(C,"CODE",{});var Tt=p(oe);lt=n(Tt,"page.close"),Tt.forEach(t),pt=n(C,`
    to ensure that I get coverage for the full lifecycle of the page.`),C.forEach(t),Ce=f(e),M(D.$$.fragment,e),Ee=f(e),m=l(e,"P",{});var B=p(m);ct=n(B,"Also note the option "),re=l(B,"CODE",{});var qt=p(re);ft=n(qt,"resetOnNavigation: false"),qt.forEach(t),ht=n(B,`. This is
    important to be able to call `),se=l(B,"CODE",{});var Lt=p(se);ut=n(Lt,"page.goto"),Lt.forEach(t),dt=n(B,` in your test without losing
    coverage data (although I could monkey-patch that too).`),B.forEach(t),Ie=f(e),V=l(e,"H5",{});var Rt=p(V);gt=n(Rt,"Sourcemaps"),Rt.forEach(t),ke=f(e),Y=l(e,"P",{});var Vt=p(Y);vt=n(Vt,`This is the part where I learned way more about sourcemaps than I ever cared
    to.`),Vt.forEach(t)},m(e,o){r(e,h,o),a(h,y),r(e,u,o),U(d,e,o),r(e,_,o),r(e,x,o),a(x,Je),r(e,ie,o),r(e,$,o),a($,He),a($,F),a(F,Ae),a($,Te),r(e,le,o),U(E,e,o),r(e,pe,o),r(e,b,o),a(b,qe),a(b,K),a(K,Le),a(b,Re),r(e,ce,o),r(e,O,o),a(O,Ve),r(e,fe,o),r(e,J,o),a(J,Ye),r(e,he,o),U(I,e,o),r(e,ue,o),r(e,H,o),a(H,Ne),r(e,de,o),r(e,A,o),a(A,Be),r(e,ge,o),r(e,P,o),a(P,Ge),a(P,Q),a(Q,Me),a(P,Ue),r(e,ve,o),U(k,e,o),r(e,me,o),r(e,v,o),a(v,ze),a(v,X),a(X,We),a(v,je),a(v,Z),a(Z,Fe),a(v,Ke),r(e,we,o),r(e,T,o),a(T,Qe),r(e,ye,o),r(e,S,o),a(S,ee),a(ee,Xe),a(S,Ze),r(e,_e,o),r(e,q,o),a(q,et),r(e,$e,o),r(e,L,o),a(L,tt),r(e,be,o),r(e,R,o),a(R,at),r(e,Pe,o),r(e,g,o),a(g,ot),a(g,te),a(te,rt),a(g,st),a(g,ae),a(ae,nt),a(g,it),a(g,oe),a(oe,lt),a(g,pt),r(e,Ce,o),U(D,e,o),r(e,Ee,o),r(e,m,o),a(m,ct),a(m,re),a(re,ft),a(m,ht),a(m,se),a(se,ut),a(m,dt),r(e,Ie,o),r(e,V,o),a(V,gt),r(e,ke,o),r(e,Y,o),a(Y,vt),Se=!0},p:Gt,i(e){Se||(z(d.$$.fragment,e),z(E.$$.fragment,e),z(I.$$.fragment,e),z(k.$$.fragment,e),z(D.$$.fragment,e),Se=!0)},o(e){W(d.$$.fragment,e),W(E.$$.fragment,e),W(I.$$.fragment,e),W(k.$$.fragment,e),W(D.$$.fragment,e),Se=!1},d(e){e&&t(h),e&&t(u),j(d,e),e&&t(_),e&&t(x),e&&t(ie),e&&t($),e&&t(le),j(E,e),e&&t(pe),e&&t(b),e&&t(ce),e&&t(O),e&&t(fe),e&&t(J),e&&t(he),j(I,e),e&&t(ue),e&&t(H),e&&t(de),e&&t(A),e&&t(ge),e&&t(P),e&&t(ve),j(k,e),e&&t(me),e&&t(v),e&&t(we),e&&t(T),e&&t(ye),e&&t(S),e&&t(_e),e&&t(q),e&&t($e),e&&t(L),e&&t(be),e&&t(R),e&&t(Pe),e&&t(g),e&&t(Ce),j(D,e),e&&t(Ee),e&&t(m),e&&t(Ie),e&&t(V),e&&t(ke),e&&t(Y)}}}function zt(w){let h,y;return h=new Mt({props:{title:"How It Works",$$slots:{default:[Ut]},$$scope:{ctx:w}}}),{c(){G(h.$$.fragment)},l(u){M(h.$$.fragment,u)},m(u,d){U(h,u,d),y=!0},p(u,[d]){const _={};d&32&&(_.$$scope={dirty:d,ctx:u}),h.$set(_)},i(u){y||(z(h.$$.fragment,u),y=!0)},o(u){W(h.$$.fragment,u),y=!1},d(u){j(h,u)}}}function Wt(w){return[`import { chromium } from 'playwright';
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://example.com/');
  // do stuff
  await context.close();
  await browser.close();
})()`,`const browser = await chromium.launch();
const page = await browser.newPage();
await page.coverage.startJSCoverage();
await page.goto('https://chromium.org');
const coverage = await page.coverage.stopJSCoverage();`,`async stop(): Promise<channels.PageStopJSCoverageResult> {
  assert(this._enabled, 'JSCoverage is not enabled');
  this._enabled = false;
  const [profileResponse] = await Promise.all([
    this._client.send('Profiler.takePreciseCoverage'),
    this._client.send('Profiler.stopPreciseCoverage'),
    this._client.send('Profiler.disable'),
    this._client.send('Debugger.disable'),
  ] as const);
  eventsHelper.removeEventListeners(this._eventListeners);

  const coverage: channels.PageStopJSCoverageResult = { entries: [] };
  for (const entry of profileResponse.result) {
    if (!this._scriptIds.has(entry.scriptId))
      continue;
    if (!entry.url && !this._reportAnonymousScripts)
      continue;
    const source = this._scriptSources.get(entry.scriptId);
    if (source)
      coverage.entries.push({ ...entry, source });
    else
      coverage.entries.push(entry);
  }
  return coverage;
}`,`const page = await context.newPage();
// start codegen and wait until it closes to proceed
await page.pause();`,`const context = await browser.newContext();
const newPage = context.newPage.bind(context);
context.newPage = async () => {
  const page = await newPage();
  const close = page.close.bind(page);
  page.close = async () => {
    pages.delete(page);
    await takeCoverage();
    await close();
  };
  await page.coverage.startJSCoverage({ resetOnNavigation: false });
  pages.add(page);
  return page;
};`]}class Qt extends Yt{constructor(h){super(),Nt(this,h,Wt,zt,Bt,{})}}export{Qt as default};
