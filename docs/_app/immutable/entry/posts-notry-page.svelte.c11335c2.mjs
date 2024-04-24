import{S as xu,i as ku,s as Pu,y as A,a as _,k as f,z as I,c as h,l as c,m as u,h as t,n as g,A as N,b as p,D as n,E as Cu,I as Ou,g as R,d as V,B as q,o as Rd,w as Ud,q as o,r as s,p as Wd,M as yd,e as vd,L as Ed,u as Vd,K as Md}from"../chunks/index.4711a160.mjs";import{_ as qd}from"../chunks/preload-helper.41c905a7.mjs";import{I as Yd,M as Hd,S as ke}from"../chunks/snippet.e1d427ae.mjs";import{n as jd,d as Qd}from"../chunks/index.1d147107.mjs";import{A as Fd}from"../chunks/article.06c607fb.mjs";function zd(i){let r,l,m,d,b,w,v,P;return r=new Yd({}),{c(){A(r.$$.fragment),l=_(),m=f("div"),d=f("div"),b=f("div"),this.h()},l(y){I(r.$$.fragment,y),l=h(y),m=c(y,"DIV",{class:!0});var T=u(m);d=c(T,"DIV",{class:!0});var U=u(d);b=c(U,"DIV",{}),u(b).forEach(t),U.forEach(t),T.forEach(t),this.h()},h(){g(d,"class","card-body"),g(m,"class","card margin-bottom-large")},m(y,T){N(r,y,T),p(y,l,T),p(y,m,T),n(m,d),n(d,b),i[4](b),w=!0,v||(P=Cu(window,"resize",i[1]),v=!0)},p:Ou,i(y){w||(R(r.$$.fragment,y),w=!0)},o(y){V(r.$$.fragment,y),w=!1},d(y){q(r,y),y&&t(l),y&&t(m),i[4](null),v=!1,P()}}}function Jd(i,r,l){let{original:m}=r,{modified:d}=r,b,w;function v(){if(!w)return;const y=Math.min(1e3,Math.max(w.getOriginalEditor().getContentHeight(),w.getModifiedEditor().getContentHeight())+20);l(0,b.style.height=`${y}px`,b);const{width:T}=b.getBoundingClientRect();w.layout({width:T,height:y})}Rd(async()=>{const y=await qd(()=>import("../chunks/editor.main.0a978303.mjs").then(U=>U.e),["../chunks/editor.main.0a978303.mjs","../chunks/preload-helper.41c905a7.mjs","../assets/editor.911c6360.css"],import.meta.url),T=document.body.clientWidth>=640;return w=y.editor.createDiffEditor(b,{fontSize:T?14:12,minimap:{enabled:!1},overviewRulerLanes:0,readOnly:!0,renderSideBySide:T,scrollBeyondLastLine:!1}),w.setModel({original:y.editor.createModel(m,"typescript"),modified:y.editor.createModel(d,"typescript")}),v(),()=>w==null?void 0:w.dispose()});function P(y){Ud[y?"unshift":"push"](()=>{b=y,l(0,b)})}return i.$$set=y=>{"original"in y&&l(2,m=y.original),"modified"in y&&l(3,d=y.modified)},[b,v,m,d,P]}class Eu extends xu{constructor(r){super(),ku(this,r,Jd,zd,Pu,{original:2,modified:3})}}let M;const Ld=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Ld.decode();let ho=null;function Oi(){return(ho===null||ho.byteLength===0)&&(ho=new Uint8Array(M.memory.buffer)),ho}function Ti(i,r){return Ld.decode(Oi().subarray(i,i+r))}const Ue=new Array(128).fill(void 0);Ue.push(void 0,null,!0,!1);let vo=Ue.length;function x(i){vo===Ue.length&&Ue.push(Ue.length+1);const r=vo;return vo=Ue[r],Ue[r]=i,r}function E(i){return Ue[i]}function Kd(i){i<132||(Ue[i]=vo,vo=i)}function Tt(i){const r=E(i);return Kd(i),r}let In=0;const Ai=new TextEncoder("utf-8"),Gd=typeof Ai.encodeInto=="function"?function(i,r){return Ai.encodeInto(i,r)}:function(i,r){const l=Ai.encode(i);return r.set(l),{read:i.length,written:l.length}};function ki(i,r,l){if(l===void 0){const v=Ai.encode(i),P=r(v.length);return Oi().subarray(P,P+v.length).set(v),In=v.length,P}let m=i.length,d=r(m);const b=Oi();let w=0;for(;w<m;w++){const v=i.charCodeAt(w);if(v>127)break;b[d+w]=v}if(w!==m){w!==0&&(i=i.slice(w)),d=l(d,m,m=w+i.length*3);const v=Oi().subarray(d+w,d+m),P=Gd(i,v);w+=P.written}return In=w,d}function _o(i){return i==null}let bo=null;function oe(){return(bo===null||bo.byteLength===0)&&(bo=new Int32Array(M.memory.buffer)),bo}let wo=null;function Xd(){return(wo===null||wo.byteLength===0)&&(wo=new BigInt64Array(M.memory.buffer)),wo}let yo=null;function Zd(){return(yo===null||yo.byteLength===0)&&(yo=new Float64Array(M.memory.buffer)),yo}function Du(i){const r=typeof i;if(r=="number"||r=="boolean"||i==null)return`${i}`;if(r=="string")return`"${i}"`;if(r=="symbol"){const d=i.description;return d==null?"Symbol":`Symbol(${d})`}if(r=="function"){const d=i.name;return typeof d=="string"&&d.length>0?`Function(${d})`:"Function"}if(Array.isArray(i)){const d=i.length;let b="[";d>0&&(b+=Du(i[0]));for(let w=1;w<d;w++)b+=", "+Du(i[w]);return b+="]",b}const l=/\[object ([^\]]+)\]/.exec(toString.call(i));let m;if(l.length>1)m=l[1];else return toString.call(i);if(m=="Object")try{return"Object("+JSON.stringify(i)+")"}catch{return"Object"}return i instanceof Error?`${i.name}: ${i.message}
${i.stack}`:m}function e_(i,r,l,m){const d={a:i,b:r,cnt:1,dtor:l},b=(...w)=>{d.cnt++;const v=d.a;d.a=0;try{return m(v,d.b,...w)}finally{--d.cnt===0?M.__wbindgen_export_2.get(d.dtor)(v,d.b):d.a=v}};return b.original=d,b}function t_(i,r,l){M.__wbindgen_export_3(i,r,x(l))}function n_(i,r,l){try{const w=M.__wbindgen_add_to_stack_pointer(-16);M.transformSync(w,x(i),x(r),x(l));var m=oe()[w/4+0],d=oe()[w/4+1],b=oe()[w/4+2];if(b)throw Tt(d);return Tt(m)}finally{M.__wbindgen_add_to_stack_pointer(16)}}function gd(i,r){return i===0?E(r):Ti(i,r)}function it(i,r){try{return i.apply(this,r)}catch(l){M.__wbindgen_export_5(x(l))}}function r_(i,r,l,m){M.__wbindgen_export_6(i,r,x(l),x(m))}async function o_(i,r){if(typeof Response=="function"&&i instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(i,r)}catch(m){if(i.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",m);else throw m}const l=await i.arrayBuffer();return await WebAssembly.instantiate(l,r)}else{const l=await WebAssembly.instantiate(i,r);return l instanceof WebAssembly.Instance?{instance:l,module:i}:l}}function s_(){const i={};return i.wbg={},i.wbg.__wbg_new_f9876326328f45ed=function(){const r=new Object;return x(r)},i.wbg.__wbindgen_string_new=function(r,l){const m=Ti(r,l);return x(m)},i.wbg.__wbg_set_20cbc34131e76824=function(r,l,m){E(r)[Tt(l)]=Tt(m)},i.wbg.__wbindgen_object_drop_ref=function(r){Tt(r)},i.wbg.__wbindgen_number_new=function(r){return x(r)},i.wbg.__wbg_new_b525de17f44a8943=function(){const r=new Array;return x(r)},i.wbg.__wbg_set_17224bc548dd1d7b=function(r,l,m){E(r)[l>>>0]=Tt(m)},i.wbg.__wbindgen_string_get=function(r,l){const m=E(l),d=typeof m=="string"?m:void 0;var b=_o(d)?0:ki(d,M.__wbindgen_export_0,M.__wbindgen_export_1),w=In;oe()[r/4+1]=w,oe()[r/4+0]=b},i.wbg.__wbindgen_jsval_loose_eq=function(r,l){return E(r)==E(l)},i.wbg.__wbindgen_error_new=function(r,l){const m=new Error(Ti(r,l));return x(m)},i.wbg.__wbindgen_is_string=function(r){return typeof E(r)=="string"},i.wbg.__wbindgen_is_object=function(r){const l=E(r);return typeof l=="object"&&l!==null},i.wbg.__wbg_entries_4e1315b774245952=function(r){const l=Object.entries(E(r));return x(l)},i.wbg.__wbg_length_e498fbc24f9c1d4f=function(r){return E(r).length},i.wbg.__wbg_get_27fe3dac1c4d0224=function(r,l){const m=E(r)[l>>>0];return x(m)},i.wbg.__wbg_getwithrefkey_15c62c2b8546208d=function(r,l){const m=E(r)[E(l)];return x(m)},i.wbg.__wbindgen_is_undefined=function(r){return E(r)===void 0},i.wbg.__wbindgen_in=function(r,l){return E(r)in E(l)},i.wbg.__wbg_set_388c4c6422704173=function(r,l,m){const d=E(r).set(E(l),E(m));return x(d)},i.wbg.__wbindgen_boolean_get=function(r){const l=E(r);return typeof l=="boolean"?l?1:0:2},i.wbg.__wbindgen_is_bigint=function(r){return typeof E(r)=="bigint"},i.wbg.__wbindgen_bigint_get_as_i64=function(r,l){const m=E(l),d=typeof m=="bigint"?m:void 0;Xd()[r/8+1]=_o(d)?BigInt(0):d,oe()[r/4+0]=!_o(d)},i.wbg.__wbindgen_bigint_from_i64=function(r){return x(r)},i.wbg.__wbindgen_jsval_eq=function(r,l){return E(r)===E(l)},i.wbg.__wbindgen_number_get=function(r,l){const m=E(l),d=typeof m=="number"?m:void 0;Zd()[r/8+1]=_o(d)?0:d,oe()[r/4+0]=!_o(d)},i.wbg.__wbg_isSafeInteger_8c4789029e885159=function(r){return Number.isSafeInteger(E(r))},i.wbg.__wbg_isArray_39d28997bf6b96b4=function(r){return Array.isArray(E(r))},i.wbg.__wbg_iterator_55f114446221aa5a=function(){return x(Symbol.iterator)},i.wbg.__wbindgen_bigint_from_u64=function(r){const l=BigInt.asUintN(64,r);return x(l)},i.wbg.__wbg_new_f841cc6f2098f4b5=function(){return x(new Map)},i.wbg.__wbg_call_9495de66fdbe016b=function(){return it(function(r,l,m){const d=E(r).call(E(l),E(m));return x(d)},arguments)},i.wbg.__wbindgen_is_null=function(r){return E(r)===null},i.wbg.__wbg_next_88560ec06a094dea=function(){return it(function(r){const l=E(r).next();return x(l)},arguments)},i.wbg.__wbg_done_1ebec03bbd919843=function(r){return E(r).done},i.wbg.__wbg_value_6ac8da5cc5b3efda=function(r){const l=E(r).value;return x(l)},i.wbg.__wbg_new_9d3a9ce4282a18a8=function(r,l){try{var m={a:r,b:l},d=(w,v)=>{const P=m.a;m.a=0;try{return r_(P,m.b,w,v)}finally{m.a=P}};const b=new Promise(d);return x(b)}finally{m.a=m.b=0}},i.wbg.__wbg_new0_25059e40b1c02766=function(){const r=new Date;return x(r)},i.wbg.__wbg_getTimezoneOffset_2a6b27fb18493a56=function(r){return E(r).getTimezoneOffset()},i.wbg.__wbg_self_e7c1f827057f6584=function(){return it(function(){const r=self.self;return x(r)},arguments)},i.wbg.__wbg_window_a09ec664e14b1b81=function(){return it(function(){const r=window.window;return x(r)},arguments)},i.wbg.__wbg_globalThis_87cbb8506fecf3a9=function(){return it(function(){const r=globalThis.globalThis;return x(r)},arguments)},i.wbg.__wbg_global_c85a9259e621f3db=function(){return it(function(){const r=global.global;return x(r)},arguments)},i.wbg.__wbg_newnoargs_2b8b6bd7753c76ba=function(r,l){var m=gd(r,l);const d=new Function(m);return x(d)},i.wbg.__wbg_call_95d1ea488d03e4e8=function(){return it(function(r,l){const m=E(r).call(E(l));return x(m)},arguments)},i.wbg.__wbindgen_object_clone_ref=function(r){const l=E(r);return x(l)},i.wbg.__wbg_get_baf4855f9a986186=function(){return it(function(r,l){const m=Reflect.get(E(r),E(l));return x(m)},arguments)},i.wbg.__wbg_getTime_7c59072d1651a3cf=function(r){return E(r).getTime()},i.wbg.__wbg_new_abda76e883ba8a5f=function(){const r=new Error;return x(r)},i.wbg.__wbg_stack_658279fe44541cf6=function(r,l){const m=E(l).stack,d=ki(m,M.__wbindgen_export_0,M.__wbindgen_export_1),b=In;oe()[r/4+1]=b,oe()[r/4+0]=d},i.wbg.__wbg_error_f851667af71bcfc6=function(r,l){var m=gd(r,l);r!==0&&M.__wbindgen_export_4(r,l),console.error(m)},i.wbg.__wbindgen_is_function=function(r){return typeof E(r)=="function"},i.wbg.__wbg_next_b7d530c04fd8b217=function(r){const l=E(r).next;return x(l)},i.wbg.__wbg_length_27a2afe8ab42b09f=function(r){return E(r).length},i.wbg.__wbindgen_memory=function(){const r=M.memory;return x(r)},i.wbg.__wbg_buffer_cf65c07de34b9a08=function(r){const l=E(r).buffer;return x(l)},i.wbg.__wbg_new_537b7341ce90bb31=function(r){const l=new Uint8Array(E(r));return x(l)},i.wbg.__wbg_set_17499e8aa4003ebd=function(r,l,m){E(r).set(E(l),m>>>0)},i.wbg.__wbg_instanceof_Uint8Array_01cebe79ca606cca=function(r){let l;try{l=E(r)instanceof Uint8Array}catch{l=!1}return l},i.wbg.__wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065=function(r){let l;try{l=E(r)instanceof ArrayBuffer}catch{l=!1}return l},i.wbg.__wbg_String_91fba7ded13ba54c=function(r,l){const m=String(E(l)),d=ki(m,M.__wbindgen_export_0,M.__wbindgen_export_1),b=In;oe()[r/4+1]=b,oe()[r/4+0]=d},i.wbg.__wbindgen_debug_string=function(r,l){const m=Du(E(l)),d=ki(m,M.__wbindgen_export_0,M.__wbindgen_export_1),b=In;oe()[r/4+1]=b,oe()[r/4+0]=d},i.wbg.__wbindgen_throw=function(r,l){throw new Error(Ti(r,l))},i.wbg.__wbg_resolve_fd40f858d9db1a04=function(r){const l=Promise.resolve(E(r));return x(l)},i.wbg.__wbindgen_cb_drop=function(r){const l=Tt(r).original;return l.cnt--==1?(l.a=0,!0):!1},i.wbg.__wbg_then_ec5db6d509eb475f=function(r,l){const m=E(r).then(E(l));return x(m)},i.wbg.__wbindgen_closure_wrapper19025=function(r,l,m){const d=e_(r,l,236,t_);return x(d)},i}function i_(i,r){return M=i.exports,Sd.__wbindgen_wasm_module=r,wo=null,yo=null,bo=null,ho=null,M}async function Sd(i){typeof i>"u"&&(i=new URL(""+new URL("../assets/wasm-web_bg.09007752.wasm",import.meta.url).href,self.location));const r=s_();(typeof i=="string"||typeof Request=="function"&&i instanceof Request||typeof URL=="function"&&i instanceof URL)&&(i=fetch(i));const{instance:l,module:m}=await o_(await i,r);return i_(l,m)}const l_=""+new URL("../assets/wasm-web_bg.09007752.wasm",import.meta.url).href;function $d(i,r,l){const m=i.slice();return m[15]=r[l].level,m[16]=r[l].msg,m}function Dd(i,r,l){const m=i.slice();return m[19]=r[l].model,m[20]=r[l].name,m[21]=r[l].show,m}function xd(i){let r,l,m,d,b,w=i[20]+"",v,P,y,T,U;function Q(){return i[6](i[19])}return{c(){r=f("input"),d=_(),b=f("label"),v=o(w),P=o(".ts"),this.h()},l(W){r=c(W,"INPUT",{id:!0,type:!0,name:!0}),d=h(W),b=c(W,"LABEL",{for:!0});var L=u(b);v=s(L,w),P=s(L,".ts"),L.forEach(t),this.h()},h(){g(r,"id",l=i[19].uri.path),g(r,"type","radio"),g(r,"name","tabs-"+i[3]),r.checked=m=i[19]===i[1],g(b,"for",y=i[19].uri.path)},m(W,L){p(W,r,L),p(W,d,L),p(W,b,L),n(b,v),n(b,P),T||(U=Cu(r,"change",Q),T=!0)},p(W,L){i=W,L&1&&l!==(l=i[19].uri.path)&&g(r,"id",l),L&3&&m!==(m=i[19]===i[1])&&(r.checked=m),L&1&&w!==(w=i[20]+"")&&Vd(v,w),L&1&&y!==(y=i[19].uri.path)&&g(b,"for",y)},d(W){W&&t(r),W&&t(d),W&&t(b),T=!1,U()}}}function kd(i){let r,l=i[21]!==!1&&xd(i);return{c(){l&&l.c(),r=vd()},l(m){l&&l.l(m),r=vd()},m(m,d){l&&l.m(m,d),p(m,r,d)},p(m,d){m[21]!==!1?l?l.p(m,d):(l=xd(m),l.c(),l.m(r.parentNode,r)):l&&(l.d(1),l=null)},d(m){l&&l.d(m),m&&t(r)}}}function Pd(i){let r,l=i[16]+"",m;return{c(){r=f("div"),m=o(l),this.h()},l(d){r=c(d,"DIV",{});var b=u(r);m=s(b,l),b.forEach(t),this.h()},h(){Ed(r,"text-danger",i[15]==="error")},m(d,b){p(d,r,b),n(r,m)},p(d,b){b&4&&l!==(l=d[16]+"")&&Vd(m,l),b&4&&Ed(r,"text-danger",d[15]==="error")},d(d){d&&t(r)}}}function a_(i){let r,l,m,d,b,w,v,P,y,T,U,Q,W,L,se,We,Z=i[0],$=[];for(let D=0;D<Z.length;D+=1)$[D]=kd(Dd(i,Z,D));b=new Hd({props:{model:i[1]}});let C=i[2],O=[];for(let D=0;D<C.length;D+=1)O[D]=Pd($d(i,C,D));return{c(){r=f("div"),l=f("div");for(let D=0;D<$.length;D+=1)$[D].c();m=_(),d=f("div"),A(b.$$.fragment),w=_(),v=f("div"),P=f("div"),y=f("pre");for(let D=0;D<O.length;D+=1)O[D].c();T=_(),U=f("div"),Q=f("button"),W=o("Run!"),this.h()},l(D){r=c(D,"DIV",{class:!0});var Y=u(r);l=c(Y,"DIV",{class:!0});var S=u(l);for(let ee=0;ee<$.length;ee+=1)$[ee].l(S);S.forEach(t),m=h(Y),d=c(Y,"DIV",{class:!0});var k=u(d);I(b.$$.fragment,k),k.forEach(t),w=h(Y),v=c(Y,"DIV",{class:!0});var B=u(v);P=c(B,"DIV",{});var Me=u(P);y=c(Me,"PRE",{class:!0});var pe=u(y);for(let ee=0;ee<O.length;ee+=1)O[ee].l(pe);pe.forEach(t),Me.forEach(t),T=h(B),U=c(B,"DIV",{class:!0});var At=u(U);Q=c(At,"BUTTON",{class:!0});var It=u(Q);W=s(It,"Run!"),It.forEach(t),At.forEach(t),B.forEach(t),Y.forEach(t),this.h()},h(){g(l,"class","tabs svelte-qpule3"),g(d,"class","card-body"),g(y,"class","svelte-qpule3"),Wd(P,"flex","1"),g(Q,"class","btn-small"),g(U,"class","margin-left"),g(v,"class","card-footer svelte-qpule3"),g(r,"class","card margin-bottom-large")},m(D,Y){p(D,r,Y),n(r,l);for(let S=0;S<$.length;S+=1)$[S].m(l,null);n(r,m),n(r,d),N(b,d,null),n(r,w),n(r,v),n(v,P),n(P,y);for(let S=0;S<O.length;S+=1)O[S].m(y,null);n(v,T),n(v,U),n(U,Q),n(Q,W),L=!0,se||(We=Cu(Q,"click",i[4]),se=!0)},p(D,[Y]){if(Y&11){Z=D[0];let k;for(k=0;k<Z.length;k+=1){const B=Dd(D,Z,k);$[k]?$[k].p(B,Y):($[k]=kd(B),$[k].c(),$[k].m(l,null))}for(;k<$.length;k+=1)$[k].d(1);$.length=Z.length}const S={};if(Y&2&&(S.model=D[1]),b.$set(S),Y&4){C=D[2];let k;for(k=0;k<C.length;k+=1){const B=$d(D,C,k);O[k]?O[k].p(B,Y):(O[k]=Pd(B),O[k].c(),O[k].m(y,null))}for(;k<O.length;k+=1)O[k].d(1);O.length=C.length}},i(D){L||(R(b.$$.fragment,D),L=!0)},o(D){V(b.$$.fragment,D),L=!1},d(D){D&&t(r),yd($,D),q(b),yd(O,D),se=!1,We()}}}let Bd=()=>{Sd(l_),Bd=()=>{}};function f_(i,r){const l=m=>{m.source===r.contentWindow&&(i.document.body.removeChild(r),i.removeEventListener("message",l))};i.addEventListener("message",l)}function c_(i){const r=document.createElement("iframe");return r.style.display="none",document.body.append(r),(!r.contentDocument||!r.contentWindow)&&i("Run Failed"),r}function u_(i,r){const l=i.createElement("script");l.type="module",l.innerHTML=r,i.body.appendChild(l)}function p_(i,r,l){let m;const d=Math.floor(Math.random()*1e9).toString(36);let{files:b}=r,w=[],v,P;function y($,C){m.push({level:$,msg:typeof C=="object"?Qd(C):`${C}`}),l(2,m)}function T($){return n_($,{jsc:{parser:{syntax:"typescript",tsx:!1},target:"es5",loose:!1,minify:{compress:!1,mangle:!1}},module:{type:"es6"},minify:!1,isModule:"unknown"}).code}function U($,C,O={}){let D=T(`${C}`);const Y={};for(const[S,k]of D.matchAll(/import.*['"]\.\/(.+)['"]/g)){$.if(O[k],"Dependency Cycle");const B=w.find(pe=>k===pe.name);$.unless(B,"Missing Import");const Me={...O,[k]:!0};Y[k]=U($,B.model.getValue(),Me)}for(const[S,k]of Object.entries(Y))D=D.replace(`./${S}`,`data:text/javascript;base64,${btoa(k)}`);return D}function Q($){$.addEventListener("error",C=>y("error",C.error))}function W($){$.addEventListener("unhandledrejection",C=>y("error",C.reason))}function L($,C){return U($,C)+`
window.parent.postMessage("done");`}function se($){Object.assign($,{console:{error:C=>y("error",C),log:C=>y("log",C)}})}function We(){const $=jd(C=>{l(2,m.length=0,m);const O=c_(C);f_(window,O),Q(O.contentWindow),W(O.contentWindow),se(O.contentWindow);const D=L(C,v.getValue());u_(O.contentDocument,D)});$.ok||y("error",$.n)}Rd(async()=>{const $=await qd(()=>import("../chunks/editor.main.0a978303.mjs").then(C=>C.e),["../chunks/editor.main.0a978303.mjs","../chunks/preload-helper.41c905a7.mjs","../assets/editor.911c6360.css"],import.meta.url);l(0,w=b.map(C=>{const O=$.Uri.file(`${d}/${C.name}.ts`),D=$.editor.createModel(C.src,"typescript",O);return{...C,model:D}})),l(1,P=w[0].model),v=w[0].model,Bd()});const Z=$=>l(1,P=$);return i.$$set=$=>{"files"in $&&l(5,b=$.files)},l(2,m=[]),[w,P,m,d,We,b,Z]}class Pe extends xu{constructor(r){super(),ku(this,r,p_,a_,Pu,{files:5})}}const Cd=`// error.ts
export class DevError extends Error {
  constructor(public exception: unknown = undefined) {
    super();
  }
}

export class UserError extends Error {}
`,m_=`import { getRecord } from "./store";

export interface Person {
  name: string;
  age: number;
}

export function getPerson(name: string): Person {
  const person = getRecord("person", name);
  if (!person) {
    throw new Error(\`\${name} not found\`);
  }
  return person;
}

console.log(getPerson("Neil"));
`,d_=`// vote.ts
import { getPerson } from "./person";

export function canVote(name: string): boolean {
  const person = getPerson(name);
  return person.age >= 18;
}

console.log(canVote("Neil"));
`,__=`import { canVote } from "./vote";

function main(name: string) {
  try {
    console.log(\`\${name} can\${canVote(name) ? "" : "'t"} vote\`);
  } catch (exceptionVar: unknown) {
    console.error(\`\${exceptionVar}\`);
  }
}

// success
main("Neil");

// user error
main("Neal");

// developer error
main("Neil");
`,h_=`import { DevError, UserError } from "./error";
import { canVote } from "./vote-try-catch";
import { reportError } from "./report";

function main(name: string) {
  try {
    console.log(\`\${name} can\${canVote(name) ? "" : "'t"} vote\`);
  } catch (exceptionVar: unknown) {
    if (exceptionVar instanceof UserError) {
      console.error(exceptionVar.message);
    } else if (exceptionVar instanceof DevError) {
      console.error(\`We're sorry, something went wrong\`);
      reportError(exceptionVar.exception);
    }
  }
}

// success
main("Neil");

// user error
main("Neal");

// developer error
main("Neil");
`,b_=`import { DevError, UserError } from "./error";
import { canVote } from "./vote-return";
import { reportError } from "./report";

function main(name: string) {
  const result = canVote(name);
  if (result instanceof UserError) {
    console.error(result.message);
  } else if (result instanceof DevError) {
    console.error("We're sorry, something went wrong");
    reportError(result.exception);
  } else {
    console.log(\`\${name} can\${canVote(name) ? "" : "'t"} vote\`);
  }
}

// success
main("Neil");

// user error
main("Neal");

// developer error
main("Neil");
`,w_=`import { notry } from "./notry-ts";
import { canVote } from "./vote-notry";
import { reportError } from "./report";

function main(name: string) {
  const did = notry(canVote, name);
  if (did.ok === false) {
    if (did.n.type === "UserError") {
      console.log(did.n.message);
    } else {
      console.error("We're sorry, something went wrong");
      reportError(did.exception);
    }
  } else {
    console.log(\`\${name} can\${did.y ? "" : "'t"} vote\`);
  }
}

// success
main("Neil");

// user error
main("Neal");

// developer error
main("Neil");
`,Pi=`export function c(num: number) {
  if (num > 0) {
    throw new Error();
  }
  return num;
}

export function d(num: number) {
  if (num > 2) {
    throw new Error();
  }
  return num;
}

export function e(num: number) {
  if (num > 1) {
    throw new Error();
  }
  return num;
}
`,Od=`class Carrier<T> {
  constructor(public val: T, public exception: unknown = undefined) {}
}

/**
 * Type of the \`quit\` parameter passed by \`notry\` to its \`quitable\` parameter.
 */
export interface Quit<N> {
  (val: N): never;
  if(cond: unknown, val: N): asserts cond is false;
  catch<R, Args extends unknown[]>(
    fn: (...args: Args) => R,
    ...args: [...Args, N]
  ): R;
  unless(cond: unknown, val: N): asserts cond;
}

const quit = Object.assign(
  (val: unknown) => {
    throw new Carrier(val);
  },
  {
    if: (cond: unknown, val: unknown) => {
      if (cond) {
        throw new Carrier(val);
      }
    },
    catch: <R, Args extends unknown[]>(
      fn: (...args: Args) => R,
      ...args: [...Args, unknown]
    ) => {
      const val = args.pop();
      try {
        const result = fn(...(args as any));
        if (result instanceof Promise) {
          return result.catch((exception: unknown) => {
            throw new Carrier(val, exception);
          }) as unknown as R;
        }
        return result;
      } catch (exception) {
        throw new Carrier(val, exception);
      }
    },
    unless: (cond: unknown, val: unknown) => {
      if (!cond) {
        throw new Carrier(val);
      }
    }
  }
);

/**
 * Discriminated union used to represent the success or failure of a function
 * called with \`notry\`.
 */
export type Did<Y, N> =
  | { ok: true; y: Y }
  | { ok: false; n: N; exception: unknown };

type NoTryRet<Y, N> = [Y] extends [never]
  ? Did<Y, N>
  : Y extends Promise<unknown>
  ? Promise<Did<Awaited<Y>, Awaited<N>>>
  : Did<Y, N>;

/**
 * Extract the error type from a quitable function.
 */
export type Of<T> = T extends (quit: Quit<infer U>, ...rest: any) => any
  ? U
  : never;

interface Quitable<Y, N, Args extends unknown[]> {
  (quit: Quit<N>, ...args: Args): Y;
}

/**
 * Run \`quitable\` with the specified \`args\`.
 *
 * Returns \`Promise<Did<Y, N>>\` if \`quitable\` returns a promise, otherwise
 * returns \`Did<Y, N>\`.
 */
export function notry<Y, N, Args extends unknown[]>(
  quitable: Quitable<Y, N, Args>,
  ...args: Args
): NoTryRet<Y, N> {
  // called when op throws or rejects
  function onCatch(exceptionVar: unknown) {
    if (exceptionVar instanceof Carrier) {
      return {
        ok: false,
        n: exceptionVar.val,
        exception: exceptionVar.exception
      };
    }
    throw exceptionVar;
  }
  try {
    const y = quitable(quit, ...args);
    if (y instanceof Promise) {
      // async success or fail
      return y.then((y) => ({ ok: true, y })).catch(onCatch) as NoTryRet<Y, N>;
    } else {
      // sync success
      return { ok: true, y } as NoTryRet<Y, N>;
    }
  } catch (exceptionVar) {
    // sync fail
    return onCatch(exceptionVar) as NoTryRet<Y, N>;
  }
}
`,y_=`import type { Quit } from "./notry-ts";
import { getRecord } from "./store";

export interface Person {
  name: string;
  age: number;
}

type Why = { type: "UserError"; message: string } | { type: "DevError" };

export function getPerson(quit: Quit<Why>, name: string): Person {
  const person = quit.catch(getRecord, "person", name, { type: "DevError" });
  quit.unless(person, { type: "UserError", message: \`\${name} not found\` });
  return person;
}
`,v_=`import { DevError, UserError } from "./error";
import { getRecord } from "./store";

export interface Person {
  name: string;
  age: number;
}

export function getPerson(name: string): Person | UserError | DevError {
  let person: Person | undefined;
  try {
    person = getRecord("person", name);
  } catch (exceptionVar) {
    return new DevError(exceptionVar);
  }
  if (!person) {
    return new UserError(\`\${name} not found\`);
  }
  return person;
}
`,E_=`// persontc.ts
import { DevError, UserError } from "./error";
import { getRecord } from "./store";

export interface Person {
  name: string;
  age: number;
}

export function getPerson(name: string): Person {
  let person: Person | undefined;
  try {
    person = getRecord("person", name);
  } catch (exceptionVar) {
    throw new DevError(exceptionVar);
  }
  if (!person) {
    throw new UserError(\`\${name} not found\`);
  }
  return person;
}
`,Td=`import { getRecord } from "./store";

export interface Person {
  name: string;
  age: number;
}

export function getPerson(name: string): Person {
  const person = getRecord("person", name);
  if (!person) {
    throw new Error(\`\${name} not found\`);
  }
  return person;
}
`,gu=`export function reportError(error: unknown) {
  console.error(error);
}
`,g_=`export function safe<Y, N, Args extends unknown[]>(
  fn: (...args: Args) => Y,
  n: N
) {
  return (...args: Args) => {
    try {
      return fn(...args);
    } catch {
      return n;
    }
  };
}
`,$_=`export function safe<Y, N, Args extends unknown[]>(
  fn: (...args: Args) => Y,
  n: N
) {
  return (...args: Args) => {
    try {
      return fn(...args);
    } catch {
      throw n;
    }
  };
}
`,Ci=`import { c, d, e } from "./ext";

function a(num: number): number {
  const resultB = b(num);
  return c(resultB);
}

function b(num: number): number {
  const resultD = d(num);
  return e(resultD);
}

function main(num: number) {
  try {
    console.log(a(num));
  } catch (exceptionVar: unknown) {
    console.error(exceptionVar);
  }
}

main(0);
main(1);
main(2);
main(3);
`,Ad=`import { c, d, e } from "./ext";
import { notry, type Quit } from "./notry-ts";

function a(quit: Quit<"C" | "D" | "E">, num: number): number {
  const resultB = b(quit, num);
  return quit.catch(c, resultB, "C");
}

function b(quit: Quit<"D" | "E">, num: number): number {
  const resultD = quit.catch(d, num, "D");
  return quit.catch(e, resultD, "E");
}

function main(num: number) {
  const did = notry(a, num);
  if (did.ok === false) {
    console.error(did.n);
    return;
  }
  console.log(did.y);
}

main(0);
main(1);
main(2);
main(3);
`,Id=`import { c, d, e } from "./ext";
import { safe } from "./safe-return";

function a(num: number): number | "C" | "D" | "E" {
  const maybeB = b(num);
  if (typeof maybeB === "string") {
    return maybeB;
  }
  return safe(c, "C" as const)(maybeB);
}

function b(num: number): number | "D" | "E" {
  const maybeD = safe(d, "D" as const)(num);
  if (typeof maybeD === "string") {
    return maybeD;
  }
  return safe(e, "E" as const)(maybeD);
}

function main(num: number) {
  const result = a(num);
  if (typeof result === "string") {
    console.error(result);
    return;
  }
  console.log(result);
}

main(0);
main(1);
main(2);
main(3);
`,Nd=`import { c, d, e } from "./ext";
import { safe } from "./safe-try-catch";

function a(num: number): number {
  const resultB = b(num);
  return safe(c, "C")(resultB);
}

function b(num: number): number {
  const resultD = safe(d, "D")(num);
  return safe(e, "E")(resultD);
}

function main(num: number) {
  try {
    console.log(a(num));
  } catch (exceptionVar: unknown) {
    console.error(exceptionVar);
  }
}

main(0);
main(1);
main(2);
main(3);
`,An=`let succeeded = false;

export function getRecord(
  _store: string,
  name: string
): { name: string; age: number } | undefined {
  if (name === "Neil") {
    if (succeeded) {
      throw new Error(\`Failed to get record\`);
    }
    succeeded = true;
    return {
      name: "Neil",
      age: 17
    };
  }
}
`,D_=`import type { Of, Quit } from "./notry-ts";
import { getPerson } from "./person-notry";

export function canVote(
  quit: Quit<Of<typeof getPerson>>,
  name: string
): boolean {
  const person = getPerson(quit, name);
  return person.age >= 18;
}
`,x_=`import type { DevError, UserError } from "./error";
import { getPerson } from "./person-return";

export function canVote(name: string): boolean | UserError | DevError {
  const maybePerson = getPerson(name);
  if (maybePerson instanceof Error) {
    return maybePerson;
  }
  return maybePerson.age >= 18;
}
`,k_=`// votetc.ts
import { getPerson } from "./person-try-catch";

export function canVote(name: string): boolean {
  const person = getPerson(name);
  return person.age >= 18;
}
`,P_=`import { getPerson } from "./person";

export function canVote(name: string): boolean {
  const person = getPerson(name);
  return person.age >= 18;
}
`;function C_(i){let r,l,m,d,b,w,v,P,y,T,U,Q,W,L,se,We,Z,$,C,O,D,Y,S,k,B,Me,pe,At,It,ee,Ii,Ni,Eo,Nt,Ri,go,Rt,Vi,$o,Vt,qi,Do,qt,Li,xo,Ye,Si,Nn,Bi,Ui,ko,Lt,Wi,Po,St,Mi,Co,Bt,Yi,Oo,Ut,Hi,To,Wt,ji,Ao,Mt,Qi,Io,Yt,Fi,No,me,Rn,zi,Ji,Vn,Ki,Gi,qn,Xi,Ro,Ht,Zi,Vo,jt,el,qo,Qt,tl,Lo,Ft,nl,So,lt,Bo,F,rl,Ln,ol,sl,Sn,il,ll,Bn,al,fl,Un,cl,ul,Uo,zt,pl,Wo,He,ml,Wn,dl,_l,Mo,at,Yo,de,hl,Mn,bl,wl,Yn,yl,vl,Ho,Jt,El,jo,ie,Ce,gl,Hn,$l,Dl,jn,xl,kl,Pl,Qn,Cl,Ol,Fn,Tl,Al,Kt,Il,zn,Nl,Qo,Gt,Rl,Fo,Xt,Vl,zo,z,ql,Jn,Ll,Sl,Kn,Bl,Ul,Gn,Wl,Ml,Xn,Yl,Hl,Jo,ft,Ko,Zt,jl,Go,je,Ql,Zn,Fl,zl,Xo,ct,Zo,ce,er,Jl,Kl,tr,Gl,Xl,nr,Zl,ea,es,ut,ts,te,rr,ta,na,or,ra,oa,sr,sa,ia,ir,la,aa,ns,pt,rs,Qe,fa,lr,ca,ua,os,le,pa,ar,Tu='{ type: "DevError" }',ma,da,fr,Au='getRecord("person", name)',_a,ha,cr,ba,wa,ss,mt,is,_e,ya,ur,Iu='{ type: "UserError", message: "<name> not found" }',va,Ea,pr,ga,$a,ls,dt,as,ue,mr,Da,xa,dr,ka,Pa,_r,Ca,Oa,fs,_t,cs,J,Ta,hr,Aa,Ia,br,Na,Ra,wr,Va,qa,yr,La,Sa,us,ht,ps,en,vr,Ba,ms,Fe,Ua,Er,Wa,Ma,ds,bt,_s,he,Ya,gr,Nu="<Y, N, Args extends unknown[]>",Ha,ja,$r,Qa,Fa,hs,be,za,Dr,Ja,Ka,xr,Ga,Xa,bs,wt,ws,j,Za,kr,ef,tf,Pr,nf,rf,Cr,of,sf,Or,lf,af,Tr,ff,cf,ys,yt,vs,H,Ar,uf,pf,Ir,mf,df,Nr,_f,hf,Rr,bf,wf,Vr,Ru="{ y: { val: boolean } }",yf,vf,qr,Vu="{ n: { val: Why, exception: unknown } }",Ef,gf,Es,K,$f,Lr,qu="MaybeAsyncDid<Y, N>",Df,xf,Sr,Lu="Did<Y, N>",kf,Pf,Br,Su="Promise<Did<Y, N>>",Cf,Of,Ur,Tf,Af,gs,tn,If,$s,nn,Nf,Ds,vt,xs,G,Rf,Wr,Vf,qf,Mr,Lf,Sf,Yr,Bf,Uf,Hr,Wf,Mf,ks,rn,Yf,Ps,ze,Hf,jr,jf,Qf,Cs,Et,Os,on,Ff,Ts,gt,As,sn,zf,Is,ln,Jf,Ns,Je,Kf,Qr,Gf,Xf,Rs,$t,Vs,we,Zf,Fr,ec,tc,zr,nc,rc,qs,Dt,Ls,an,oc,Ss,fn,sc,Bs,Ke,ic,Jr,lc,ac,Us,xt,Ws,Ge,fc,Kr,cc,uc,Ms,kt,Ys,Xe,pc,Gr,Bu="quit: Quit<Why>",mc,dc,Hs,cn,_c,js,un,hc,Qs,pn,bc,Fs,ae,wc,Xr,yc,vc,Zr,Ec,gc,eo,$c,Dc,zs,X,xc,to,kc,Pc,no,Cc,Oc,ro,Tc,Ac,oo,Ic,Nc,Js,mn,Rc,Ks,ye,Vc,so,qc,Lc,io,Sc,Bc,Gs,Pt,lo,Uc,Wc,Xs,Oe,ao,Mc,Yc,fo,Hc,jc,Zs,dn,Qc,ei,ne,Fc,co,zc,Jc,uo,Kc,Gc,po,Xc,Zc,ti,_n,eu,ni,Te,hn,tu,nu,Ze,ru,ri,Ae,bn,ou,su,et,iu,oi,Ie,wn,lu,au,tt,fu,si,Ne,yn,cu,uu,Re,pu,ii,Ve,vn,mu,du,qe,_u,li,Le,En,hu,bu,Se,wu,ai;return v=new Pe({props:{files:[{name:"person",src:m_},{name:"store",src:An,show:!1}]}}),$=new Pe({props:{files:[{name:"vote",src:d_},{name:"person",src:Td},{name:"store",src:An,show:!1}]}}),S=new Pe({props:{files:[{name:"main",src:__},{name:"vote",src:P_},{name:"person",src:Td},{name:"store",src:An,show:!1}]}}),lt=new Pe({props:{files:[{name:"main",src:h_},{name:"vote-try-catch",src:k_},{name:"person-try-catch",src:E_},{name:"error",src:Cd},{name:"report",src:gu,show:!1},{name:"store",src:An,show:!1}]}}),at=new Pe({props:{files:[{name:"main",src:b_},{name:"vote-return",src:x_},{name:"person-return",src:v_},{name:"error",src:Cd},{name:"report",src:gu,show:!1},{name:"store",src:An,show:!1}]}}),ft=new Pe({props:{files:[{name:"main",src:w_},{name:"vote-notry",src:D_},{name:"person-notry",src:y_},{name:"report",src:gu,show:!1},{name:"store",src:An,show:!1},{name:"notry-ts",src:Od,show:!1}]}}),ct=new ke({props:{value:i[1]}}),ut=new ke({props:{value:i[2]}}),pt=new ke({props:{value:i[3]}}),mt=new ke({props:{value:i[4]}}),dt=new ke({props:{value:A_}}),_t=new ke({props:{value:i[5]}}),ht=new ke({props:{value:i[6]}}),bt=new ke({props:{value:i[7]}}),wt=new ke({props:{value:i[8]}}),yt=new ke({props:{value:i[9]}}),vt=new Pe({props:{files:[{name:"main",src:Ci},{name:"ext",src:Pi,show:!1}]}}),Et=new Pe({props:{files:[{name:"main",src:Nd},{name:"safe-try-catch",src:$_},{name:"ext",src:Pi,show:!1}]}}),gt=new Eu({props:{original:Ci,modified:Nd}}),$t=new Pe({props:{files:[{name:"main",src:Id},{name:"safe-return",src:g_},{name:"ext",src:Pi,show:!1}]}}),Dt=new Eu({props:{original:Ci,modified:Id}}),xt=new Pe({props:{files:[{name:"main",src:Ad},{name:"ext",src:Pi,show:!1},{name:"notry-ts",src:Od,show:!1}]}}),kt=new Eu({props:{original:Ci,modified:Ad}}),{c(){r=f("p"),l=o(`Suppose you're asked to write a new function to determine whether a person
    can vote. It should be easy since there's already a `),m=f("code"),d=o("getPerson"),b=o(" function."),w=_(),A(v.$$.fragment),P=_(),y=f("p"),T=o("Notice that the function signature gives no hint that "),U=f("code"),Q=o("getPerson"),W=o(`
    could throw. This is one problem we want to address.`),L=_(),se=f("p"),We=o("Here's the new function."),Z=_(),A($.$$.fragment),C=_(),O=f("p"),D=o("And last but not least, the main progam."),Y=_(),A(S.$$.fragment),k=_(),B=f("p"),Me=o("Note here that the type of "),pe=f("code"),At=o("exceptionVar"),It=o(` is
    `),ee=f("code"),Ii=o("unknown"),Ni=o(`. If you make it something more specific you'll get a
    compiler error.`),Eo=_(),Nt=f("pre"),Ri=o("Catch clause variable type annotation must be 'any' or 'unknown' if specified."),go=_(),Rt=f("p"),Vi=o("This is another problem we'll try to tackle."),$o=_(),Vt=f("h4"),qi=o("Test Cases"),Do=_(),qt=f("p"),Li=o(`If you run the previous example, you should see three lines written to the
    console.`),xo=_(),Ye=f("p"),Si=o("The first shows the output of a successful invocation of "),Nn=f("code"),Bi=o("main"),Ui=o("."),ko=_(),Lt=f("pre"),Wi=o("Neil can't vote"),Po=_(),St=f("p"),Mi=o("The second invocation failed with what is probably a user error."),Co=_(),Bt=f("pre"),Yi=o("Error: Neal not found"),Oo=_(),Ut=f("p"),Hi=o(`The final result is another error but this time the meaning is less clear.
    It could be an environmental or maybe a programming error. In either case,
    it's not something we expect the user to be able to handle.`),To=_(),Wt=f("pre"),ji=o("Error: Failed to get record"),Ao=_(),Mt=f("p"),Qi=o(`Unfortunately, this isn't terribly helpful. It means nothing to the user and
    doesn't give the developer much to debug with.`),Io=_(),Yt=f("p"),Fi=o("So how could we improve? A few ideas:"),No=_(),me=f("ol"),Rn=f("li"),zi=o(`Log the error stack trace: this would be helpful to the developer, but
      probably scare the user.`),Ji=_(),Vn=f("li"),Ki=o(`Report the stack trace to the developer. On user errors, this would
      produce noise for the developer. On developer errors, the message would
      still be confusing to the user.`),Gi=_(),qn=f("li"),Xi=o("Find a mechanism for differentiating error types."),Ro=_(),Ht=f("h3"),Zi=o("Approaches"),Vo=_(),jt=f("p"),el=o(`Let's explore idea #3 and compare error handling approaches using the three
    test cases.`),qo=_(),Qt=f("h4"),tl=o("try-catch"),Lo=_(),Ft=f("p"),nl=o("One simple solution is to throw subclassed Error objects."),So=_(),A(lt.$$.fragment),Bo=_(),F=f("p"),rl=o(`That's better but the type checker doesn't help much. Without reading the
    `),Ln=f("code"),ol=o("getPerson"),sl=o(` source, we can't tell what (or even if) it could
    throw. `),Sn=f("code"),il=o("exceptionVar"),ll=o(" still has type "),Bn=f("code"),al=o("unknown"),fl=o(`.
    Narrowing it takes extra effort and if `),Un=f("code"),cl=o("getPerson"),ul=o(` starts throwing
    something different, the compiler won't tell us.`),Uo=_(),zt=f("h4"),pl=o("Return Types"),Wo=_(),He=f("p"),ml=o(`One way to lean on the type system for error handling is by using a
    specialized return type. We'll use a union of the successful return type and
    `),Wn=f("code"),dl=o("Error"),_l=o("s to keep things simple."),Mo=_(),A(at.$$.fragment),Yo=_(),de=f("p"),hl=o("This yields the same result as "),Mn=f("b"),bl=o("try-catch"),wl=o(` with the added benefit of
    type safety. The biggest downside is the extra check in `),Yn=f("code"),yl=o("canVote"),vl=o(`
    (more on that later).`),Ho=_(),Jt=f("p"),El=o("Following this approach boils down to:"),jo=_(),ie=f("ol"),Ce=f("li"),gl=o("Replacing "),Hn=f("code"),$l=o("throw"),Dl=o(" with "),jn=f("code"),xl=o("return"),kl=o(" in your code"),Pl=_(),Qn=f("li"),Cl=o("Updating the return types"),Ol=_(),Fn=f("li"),Tl=o("Propagating errors up the call stack"),Al=_(),Kt=f("li"),Il=o("Wrapping invocations of code you don't control in "),zn=f("code"),Nl=o("try-catch"),Qo=_(),Gt=f("p"),Rl=o(`There are some simple utilities you can write to make this easier. Still,
    one can't help but wonder - is there a better way?`),Fo=_(),Xt=f("h4"),Vl=o("notry-ts"),zo=_(),z=f("p"),ql=o("What if we could get the convenience of "),Jn=f("b"),Ll=o("try-catch"),Sl=o(` and the type safety
    of `),Kn=f("b"),Bl=o("return types"),Ul=o(`? That's what I set out to answer when I created
    `),Gn=f("b"),Wl=o("notry-ts"),Ml=o(". Let's see how our example looks with "),Xn=f("code"),Yl=o("notry"),Hl=o("."),Jo=_(),A(ft.$$.fragment),Ko=_(),Zt=f("p"),jl=o(`This produces the same output as the two previous solutions, so how does it
    work?`),Go=_(),je=f("p"),Ql=o("The first thing you'll notice is the new "),Zn=f("code"),Fl=o("Why"),zl=o(" type."),Xo=_(),A(ct.$$.fragment),Zo=_(),ce=f("p"),er=f("code"),Jl=o("Why"),Kl=o(" represents the type returned when "),tr=f("code"),Gl=o("getPerson"),Xl=o(`
    fails. It's used in the new first parameter of `),nr=f("code"),Zl=o("getPerson"),ea=o("."),es=_(),A(ut.$$.fragment),ts=_(),te=f("p"),rr=f("code"),ta=o("quit"),na=o(` has the call signature
    `),or=f("code"),ra=o("(val: Why) => never"),oa=o(`. Calling it immediately terminates
    `),sr=f("code"),sa=o("getPerson"),ia=o(`. So in this case, we could terminate
    `),ir=f("code"),la=o("getPerson"),aa=o(`
    by calling:`),ns=_(),A(pt.$$.fragment),rs=_(),Qe=f("p"),fa=o("Rather than call "),lr=f("code"),ca=o("quit"),ua=o(" directly, we use two convenience functions."),os=_(),le=f("p"),pa=o(`This quits with
    `),ar=f("code"),ma=o(Tu),da=o(` if
    `),fr=f("code"),_a=o(Au),ha=o(`
    throws, returning a `),cr=f("code"),ba=o("Person"),wa=o(" otherwise."),ss=_(),A(mt.$$.fragment),is=_(),_e=f("p"),ya=o(`This quits with
    `),ur=f("code"),va=o(Iu),Ea=o(`
    if `),pr=f("code"),ga=o("person"),$a=o(" is undefined."),ls=_(),A(dt.$$.fragment),as=_(),ue=f("p"),mr=f("code"),Da=o("canVote"),xa=o(" is straightforward. It takes a "),dr=f("code"),ka=o("quit"),Pa=o(`
    parameter of the same type as `),_r=f("code"),Ca=o("getPerson"),Oa=o(" and forwards it."),fs=_(),A(_t.$$.fragment),cs=_(),J=f("p"),Ta=o("At the top level, "),hr=f("code"),Aa=o("main"),Ia=o(" invokes "),br=f("code"),Na=o("canVote"),Ra=o(` with
    `),wr=f("code"),Va=o("notry"),qa=o(" and assigns the result to "),yr=f("code"),La=o("did"),Sa=o("."),us=_(),A(ht.$$.fragment),ps=_(),en=f("p"),vr=f("b"),Ba=o("How it works"),ms=_(),Fe=f("p"),Ua=o("Here is the function signature of "),Er=f("code"),Wa=o("notry"),Ma=o("."),ds=_(),A(bt.$$.fragment),_s=_(),he=f("p"),Ya=o("The generic types "),gr=f("code"),Ha=o(Nu),ja=o(` represent
    the successful return type, failed return type, and `),$r=f("code"),Qa=o("quitable"),Fa=o(" arguments."),hs=_(),be=f("p"),za=o("Any function that accepts "),Dr=f("code"),Ja=o("Quit"),Ka=o(` as it's first parameter is a
    `),xr=f("code"),Ga=o("Quitable"),Xa=o("."),bs=_(),A(wt.$$.fragment),ws=_(),j=f("p"),Za=o("So "),kr=f("code"),ef=o("notry"),tf=o(" requires a "),Pr=f("code"),nf=o("Quitable"),rf=o(` function and
    arguments to pass it and returns a `),Cr=f("code"),of=o("Did"),sf=o(` containing the result
    (either `),Or=f("code"),lf=o("Y"),af=o(" or "),Tr=f("code"),ff=o("N"),cf=o(")."),ys=_(),A(yt.$$.fragment),vs=_(),H=f("p"),Ar=f("code"),uf=o("Did"),pf=o(" is a riff on the popular "),Ir=f("code"),mf=o("Either"),df=o(` or
    `),Nr=f("code"),_f=o("Result"),hf=o(`
    types. It's a discriminated union that indicates whether
    `),Rr=f("code"),bf=o("quitable"),wf=o(` returned or quit. In this case, it'll be
    `),Vr=f("code"),yf=o(Ru),vf=o(` or
    `),qr=f("code"),Ef=o(Vu),gf=o("."),Es=_(),K=f("p"),$f=o("The last piece of the puzzle is "),Lr=f("code"),Df=o(qu),xf=o(`. It
    resolves to `),Sr=f("code"),kf=o(Lu),Pf=o(` or
    `),Br=f("code"),Cf=o(Su),Of=o(`
    depending on whether `),Ur=f("code"),Tf=o("quitable"),Af=o(" returns a promise."),gs=_(),tn=f("h3"),If=o("Error Handling At Scale"),$s=_(),nn=f("p"),Nf=o(`In the preceding problem, the difference in error handling solutions might
    seem insignificant. Here we'll look at a fleshier example and try to
    understand how each approach scales.`),Ds=_(),A(vt.$$.fragment),xs=_(),G=f("p"),Rf=o("The three external functions "),Wr=f("code"),Vf=o("c"),qf=o(", "),Mr=f("code"),Lf=o("d"),Sf=o(`, and
    `),Yr=f("code"),Bf=o("e"),Uf=o(`
    could throw so `),Hr=f("code"),Wf=o("main"),Mf=o(` catches and logs the exception. In the base
    case there is no way to differentiate the three possible failures.`),ks=_(),rn=f("h4"),Yf=o("try-catch"),Ps=_(),ze=f("p"),Hf=o("Let's introduce a utility "),jr=f("code"),jf=o("safe"),Qf=o(` to catch arbitrary exceptions and
    throw something specific.`),Cs=_(),A(Et.$$.fragment),Os=_(),on=f("p"),Ff=o("The diff shows that it's an unobtrusive change."),Ts=_(),A(gt.$$.fragment),As=_(),sn=f("p"),zf=o("However, no type safety."),Is=_(),ln=f("h4"),Jf=o("Return types"),Ns=_(),Je=f("p"),Kf=o("This time we use a variant of "),Qr=f("code"),Gf=o("safe"),Xf=o(` that catch exceptions and returns
    something specific.`),Rs=_(),A($t.$$.fragment),Vs=_(),we=f("p"),Zf=o("Unfortunately now three of the five lines in both "),Fr=f("code"),ec=o("a"),tc=o(` and
    `),zr=f("code"),nc=o("b"),rc=o(` are error handling. It's easy to see how this can get unwieldy
    at scale.`),qs=_(),A(Dt.$$.fragment),Ls=_(),an=f("p"),oc=o("But now we have type safety."),Ss=_(),fn=f("h4"),sc=o("notry-ts"),Bs=_(),Ke=f("p"),ic=o("Finally, an implementation using "),Jr=f("code"),lc=o("notry"),ac=o("."),Us=_(),A(xt.$$.fragment),Ws=_(),Ge=f("p"),fc=o("Apart from the "),Kr=f("code"),cc=o("quit"),uc=o(` parameters, this looks more or less like the
    base case.`),Ms=_(),A(kt.$$.fragment),Ys=_(),Xe=f("p"),pc=o("Admittedly, all those "),Gr=f("code"),mc=o(Bu),dc=o(` parameters are a bit cumbersome
    so, like anything, you should weigh the benefits against the costs.`),Hs=_(),cn=f("h3"),_c=o("Comparison"),js=_(),un=f("p"),hc=o("Let's wrap up by looking at what we get from each approach."),Qs=_(),pn=f("h4"),bc=o("Type Safety"),Fs=_(),ae=f("p"),wc=o("None with "),Xr=f("b"),yc=o("try-catch"),vc=o(` and roughly the same degree with
    `),Zr=f("b"),Ec=o("return types"),gc=o(" and "),eo=f("b"),$c=o("notry-ts"),Dc=o(` including the ability to tell at a glance
    if and what errors could occur.`),zs=_(),X=f("p"),xc=o("The biggest difference is that it's easier to ignore "),to=f("b"),kc=o("return types"),Pc=o(`. If
    you call a function that normally returns `),no=f("code"),Cc=o("void"),Oc=o(`, you can easily
    forget to check whether an error occurred. This problem only affects
    `),ro=f("b"),Tc=o("notry-ts"),Ac=o(" where "),oo=f("code"),Ic=o("notry"),Nc=o(" is called."),Js=_(),mn=f("h4"),Rc=o("Developer Experience"),Ks=_(),ye=f("p"),Vc=o("With "),so=f("b"),qc=o("try-catch"),Lc=o(", you could use a utility like "),io=f("code"),Sc=o("safe"),Bc=o(` to incrementally
    improve your error handling done with minimal effect on readability.`),Gs=_(),Pt=f("p"),lo=f("b"),Uc=o("return types"),Wc=o(` are intuitive since it's natural to associate a function's
    return value with its outcome. This solution requires the greatest amount of
    code and gains usefulness the more it's used.`),Xs=_(),Oe=f("p"),ao=f("b"),Mc=o("notry"),Yc=o(` has the least intuitive and most sophisticated typing. The
    function body's intent remains clear with error handling is mostly out of
    view. As with
    `),fo=f("b"),Hc=o("return types"),jc=o(", its usefulness is dependent on how widely it's used."),Zs=_(),dn=f("h3"),Qc=o("Conclusion"),ei=_(),ne=f("p"),Fc=o(`If you care about type safety (why else would you be here), use
    `),co=f("b"),zc=o("return types"),Jc=o(" or "),uo=f("b"),Kc=o("notry"),Gc=o(". Choose "),po=f("b"),Xc=o("notry"),Zc=o(` for added readability
    and safety at the cost of complexity.`),ti=_(),_n=f("h3"),eu=o("Resources"),ni=_(),Te=f("div"),hn=f("small"),tu=o("package"),nu=_(),Ze=f("a"),ru=o("notry-ts"),ri=_(),Ae=f("div"),bn=f("small"),ou=o("package"),su=_(),et=f("a"),iu=o("neverthrow"),oi=_(),Ie=f("div"),wn=f("small"),lu=o("package"),au=_(),tt=f("a"),fu=o("type-safe-errors"),si=_(),Ne=f("div"),yn=f("small"),cu=o("article"),uu=_(),Re=f("a"),pu=o("Type-Safe Error Handling In TypeScript"),ii=_(),Ve=f("div"),vn=f("small"),mu=o("article"),du=_(),qe=f("a"),_u=o("Functional Error Handling"),li=_(),Le=f("div"),En=f("small"),hu=o("article"),bu=_(),Se=f("a"),wu=o("TypeScript / Implement Rust-style Result"),this.h()},l(e){r=c(e,"P",{});var a=u(r);l=s(a,`Suppose you're asked to write a new function to determine whether a person
    can vote. It should be easy since there's already a `),m=c(a,"CODE",{});var Uu=u(m);d=s(Uu,"getPerson"),Uu.forEach(t),b=s(a," function."),a.forEach(t),w=h(e),I(v.$$.fragment,e),P=h(e),y=c(e,"P",{});var fi=u(y);T=s(fi,"Notice that the function signature gives no hint that "),U=c(fi,"CODE",{});var Wu=u(U);Q=s(Wu,"getPerson"),Wu.forEach(t),W=s(fi,`
    could throw. This is one problem we want to address.`),fi.forEach(t),L=h(e),se=c(e,"P",{});var Mu=u(se);We=s(Mu,"Here's the new function."),Mu.forEach(t),Z=h(e),I($.$$.fragment,e),C=h(e),O=c(e,"P",{});var Yu=u(O);D=s(Yu,"And last but not least, the main progam."),Yu.forEach(t),Y=h(e),I(S.$$.fragment,e),k=h(e),B=c(e,"P",{});var gn=u(B);Me=s(gn,"Note here that the type of "),pe=c(gn,"CODE",{});var Hu=u(pe);At=s(Hu,"exceptionVar"),Hu.forEach(t),It=s(gn,` is
    `),ee=c(gn,"CODE",{});var ju=u(ee);Ii=s(ju,"unknown"),ju.forEach(t),Ni=s(gn,`. If you make it something more specific you'll get a
    compiler error.`),gn.forEach(t),Eo=h(e),Nt=c(e,"PRE",{});var Qu=u(Nt);Ri=s(Qu,"Catch clause variable type annotation must be 'any' or 'unknown' if specified."),Qu.forEach(t),go=h(e),Rt=c(e,"P",{});var Fu=u(Rt);Vi=s(Fu,"This is another problem we'll try to tackle."),Fu.forEach(t),$o=h(e),Vt=c(e,"H4",{});var zu=u(Vt);qi=s(zu,"Test Cases"),zu.forEach(t),Do=h(e),qt=c(e,"P",{});var Ju=u(qt);Li=s(Ju,`If you run the previous example, you should see three lines written to the
    console.`),Ju.forEach(t),xo=h(e),Ye=c(e,"P",{});var ci=u(Ye);Si=s(ci,"The first shows the output of a successful invocation of "),Nn=c(ci,"CODE",{});var Ku=u(Nn);Bi=s(Ku,"main"),Ku.forEach(t),Ui=s(ci,"."),ci.forEach(t),ko=h(e),Lt=c(e,"PRE",{});var Gu=u(Lt);Wi=s(Gu,"Neil can't vote"),Gu.forEach(t),Po=h(e),St=c(e,"P",{});var Xu=u(St);Mi=s(Xu,"The second invocation failed with what is probably a user error."),Xu.forEach(t),Co=h(e),Bt=c(e,"PRE",{});var Zu=u(Bt);Yi=s(Zu,"Error: Neal not found"),Zu.forEach(t),Oo=h(e),Ut=c(e,"P",{});var ep=u(Ut);Hi=s(ep,`The final result is another error but this time the meaning is less clear.
    It could be an environmental or maybe a programming error. In either case,
    it's not something we expect the user to be able to handle.`),ep.forEach(t),To=h(e),Wt=c(e,"PRE",{});var tp=u(Wt);ji=s(tp,"Error: Failed to get record"),tp.forEach(t),Ao=h(e),Mt=c(e,"P",{});var np=u(Mt);Qi=s(np,`Unfortunately, this isn't terribly helpful. It means nothing to the user and
    doesn't give the developer much to debug with.`),np.forEach(t),Io=h(e),Yt=c(e,"P",{});var rp=u(Yt);Fi=s(rp,"So how could we improve? A few ideas:"),rp.forEach(t),No=h(e),me=c(e,"OL",{});var $n=u(me);Rn=c($n,"LI",{});var op=u(Rn);zi=s(op,`Log the error stack trace: this would be helpful to the developer, but
      probably scare the user.`),op.forEach(t),Ji=h($n),Vn=c($n,"LI",{});var sp=u(Vn);Ki=s(sp,`Report the stack trace to the developer. On user errors, this would
      produce noise for the developer. On developer errors, the message would
      still be confusing to the user.`),sp.forEach(t),Gi=h($n),qn=c($n,"LI",{});var ip=u(qn);Xi=s(ip,"Find a mechanism for differentiating error types."),ip.forEach(t),$n.forEach(t),Ro=h(e),Ht=c(e,"H3",{});var lp=u(Ht);Zi=s(lp,"Approaches"),lp.forEach(t),Vo=h(e),jt=c(e,"P",{});var ap=u(jt);el=s(ap,`Let's explore idea #3 and compare error handling approaches using the three
    test cases.`),ap.forEach(t),qo=h(e),Qt=c(e,"H4",{});var fp=u(Qt);tl=s(fp,"try-catch"),fp.forEach(t),Lo=h(e),Ft=c(e,"P",{});var cp=u(Ft);nl=s(cp,"One simple solution is to throw subclassed Error objects."),cp.forEach(t),So=h(e),I(lt.$$.fragment,e),Bo=h(e),F=c(e,"P",{});var ve=u(F);rl=s(ve,`That's better but the type checker doesn't help much. Without reading the
    `),Ln=c(ve,"CODE",{});var up=u(Ln);ol=s(up,"getPerson"),up.forEach(t),sl=s(ve,` source, we can't tell what (or even if) it could
    throw. `),Sn=c(ve,"CODE",{});var pp=u(Sn);il=s(pp,"exceptionVar"),pp.forEach(t),ll=s(ve," still has type "),Bn=c(ve,"CODE",{});var mp=u(Bn);al=s(mp,"unknown"),mp.forEach(t),fl=s(ve,`.
    Narrowing it takes extra effort and if `),Un=c(ve,"CODE",{});var dp=u(Un);cl=s(dp,"getPerson"),dp.forEach(t),ul=s(ve,` starts throwing
    something different, the compiler won't tell us.`),ve.forEach(t),Uo=h(e),zt=c(e,"H4",{});var _p=u(zt);pl=s(_p,"Return Types"),_p.forEach(t),Wo=h(e),He=c(e,"P",{});var ui=u(He);ml=s(ui,`One way to lean on the type system for error handling is by using a
    specialized return type. We'll use a union of the successful return type and
    `),Wn=c(ui,"CODE",{});var hp=u(Wn);dl=s(hp,"Error"),hp.forEach(t),_l=s(ui,"s to keep things simple."),ui.forEach(t),Mo=h(e),I(at.$$.fragment,e),Yo=h(e),de=c(e,"P",{});var Dn=u(de);hl=s(Dn,"This yields the same result as "),Mn=c(Dn,"B",{});var bp=u(Mn);bl=s(bp,"try-catch"),bp.forEach(t),wl=s(Dn,` with the added benefit of
    type safety. The biggest downside is the extra check in `),Yn=c(Dn,"CODE",{});var wp=u(Yn);yl=s(wp,"canVote"),wp.forEach(t),vl=s(Dn,`
    (more on that later).`),Dn.forEach(t),Ho=h(e),Jt=c(e,"P",{});var yp=u(Jt);El=s(yp,"Following this approach boils down to:"),yp.forEach(t),jo=h(e),ie=c(e,"OL",{});var nt=u(ie);Ce=c(nt,"LI",{});var xn=u(Ce);gl=s(xn,"Replacing "),Hn=c(xn,"CODE",{});var vp=u(Hn);$l=s(vp,"throw"),vp.forEach(t),Dl=s(xn," with "),jn=c(xn,"CODE",{});var Ep=u(jn);xl=s(Ep,"return"),Ep.forEach(t),kl=s(xn," in your code"),xn.forEach(t),Pl=h(nt),Qn=c(nt,"LI",{});var gp=u(Qn);Cl=s(gp,"Updating the return types"),gp.forEach(t),Ol=h(nt),Fn=c(nt,"LI",{});var $p=u(Fn);Tl=s($p,"Propagating errors up the call stack"),$p.forEach(t),Al=h(nt),Kt=c(nt,"LI",{});var yu=u(Kt);Il=s(yu,"Wrapping invocations of code you don't control in "),zn=c(yu,"CODE",{});var Dp=u(zn);Nl=s(Dp,"try-catch"),Dp.forEach(t),yu.forEach(t),nt.forEach(t),Qo=h(e),Gt=c(e,"P",{});var xp=u(Gt);Rl=s(xp,`There are some simple utilities you can write to make this easier. Still,
    one can't help but wonder - is there a better way?`),xp.forEach(t),Fo=h(e),Xt=c(e,"H4",{});var kp=u(Xt);Vl=s(kp,"notry-ts"),kp.forEach(t),zo=h(e),z=c(e,"P",{});var Ee=u(z);ql=s(Ee,"What if we could get the convenience of "),Jn=c(Ee,"B",{});var Pp=u(Jn);Ll=s(Pp,"try-catch"),Pp.forEach(t),Sl=s(Ee,` and the type safety
    of `),Kn=c(Ee,"B",{});var Cp=u(Kn);Bl=s(Cp,"return types"),Cp.forEach(t),Ul=s(Ee,`? That's what I set out to answer when I created
    `),Gn=c(Ee,"B",{});var Op=u(Gn);Wl=s(Op,"notry-ts"),Op.forEach(t),Ml=s(Ee,". Let's see how our example looks with "),Xn=c(Ee,"CODE",{});var Tp=u(Xn);Yl=s(Tp,"notry"),Tp.forEach(t),Hl=s(Ee,"."),Ee.forEach(t),Jo=h(e),I(ft.$$.fragment,e),Ko=h(e),Zt=c(e,"P",{});var Ap=u(Zt);jl=s(Ap,`This produces the same output as the two previous solutions, so how does it
    work?`),Ap.forEach(t),Go=h(e),je=c(e,"P",{});var pi=u(je);Ql=s(pi,"The first thing you'll notice is the new "),Zn=c(pi,"CODE",{});var Ip=u(Zn);Fl=s(Ip,"Why"),Ip.forEach(t),zl=s(pi," type."),pi.forEach(t),Xo=h(e),I(ct.$$.fragment,e),Zo=h(e),ce=c(e,"P",{});var Ct=u(ce);er=c(Ct,"CODE",{});var Np=u(er);Jl=s(Np,"Why"),Np.forEach(t),Kl=s(Ct," represents the type returned when "),tr=c(Ct,"CODE",{});var Rp=u(tr);Gl=s(Rp,"getPerson"),Rp.forEach(t),Xl=s(Ct,`
    fails. It's used in the new first parameter of `),nr=c(Ct,"CODE",{});var Vp=u(nr);Zl=s(Vp,"getPerson"),Vp.forEach(t),ea=s(Ct,"."),Ct.forEach(t),es=h(e),I(ut.$$.fragment,e),ts=h(e),te=c(e,"P",{});var Be=u(te);rr=c(Be,"CODE",{});var qp=u(rr);ta=s(qp,"quit"),qp.forEach(t),na=s(Be,` has the call signature
    `),or=c(Be,"CODE",{});var Lp=u(or);ra=s(Lp,"(val: Why) => never"),Lp.forEach(t),oa=s(Be,`. Calling it immediately terminates
    `),sr=c(Be,"CODE",{});var Sp=u(sr);sa=s(Sp,"getPerson"),Sp.forEach(t),ia=s(Be,`. So in this case, we could terminate
    `),ir=c(Be,"CODE",{});var Bp=u(ir);la=s(Bp,"getPerson"),Bp.forEach(t),aa=s(Be,`
    by calling:`),Be.forEach(t),ns=h(e),I(pt.$$.fragment,e),rs=h(e),Qe=c(e,"P",{});var mi=u(Qe);fa=s(mi,"Rather than call "),lr=c(mi,"CODE",{});var Up=u(lr);ca=s(Up,"quit"),Up.forEach(t),ua=s(mi," directly, we use two convenience functions."),mi.forEach(t),os=h(e),le=c(e,"P",{});var rt=u(le);pa=s(rt,`This quits with
    `),ar=c(rt,"CODE",{});var Wp=u(ar);ma=s(Wp,Tu),Wp.forEach(t),da=s(rt,` if
    `),fr=c(rt,"CODE",{});var Mp=u(fr);_a=s(Mp,Au),Mp.forEach(t),ha=s(rt,`
    throws, returning a `),cr=c(rt,"CODE",{});var Yp=u(cr);ba=s(Yp,"Person"),Yp.forEach(t),wa=s(rt," otherwise."),rt.forEach(t),ss=h(e),I(mt.$$.fragment,e),is=h(e),_e=c(e,"P",{});var kn=u(_e);ya=s(kn,`This quits with
    `),ur=c(kn,"CODE",{});var Hp=u(ur);va=s(Hp,Iu),Hp.forEach(t),Ea=s(kn,`
    if `),pr=c(kn,"CODE",{});var jp=u(pr);ga=s(jp,"person"),jp.forEach(t),$a=s(kn," is undefined."),kn.forEach(t),ls=h(e),I(dt.$$.fragment,e),as=h(e),ue=c(e,"P",{});var Ot=u(ue);mr=c(Ot,"CODE",{});var Qp=u(mr);Da=s(Qp,"canVote"),Qp.forEach(t),xa=s(Ot," is straightforward. It takes a "),dr=c(Ot,"CODE",{});var Fp=u(dr);ka=s(Fp,"quit"),Fp.forEach(t),Pa=s(Ot,`
    parameter of the same type as `),_r=c(Ot,"CODE",{});var zp=u(_r);Ca=s(zp,"getPerson"),zp.forEach(t),Oa=s(Ot," and forwards it."),Ot.forEach(t),fs=h(e),I(_t.$$.fragment,e),cs=h(e),J=c(e,"P",{});var ge=u(J);Ta=s(ge,"At the top level, "),hr=c(ge,"CODE",{});var Jp=u(hr);Aa=s(Jp,"main"),Jp.forEach(t),Ia=s(ge," invokes "),br=c(ge,"CODE",{});var Kp=u(br);Na=s(Kp,"canVote"),Kp.forEach(t),Ra=s(ge,` with
    `),wr=c(ge,"CODE",{});var Gp=u(wr);Va=s(Gp,"notry"),Gp.forEach(t),qa=s(ge," and assigns the result to "),yr=c(ge,"CODE",{});var Xp=u(yr);La=s(Xp,"did"),Xp.forEach(t),Sa=s(ge,"."),ge.forEach(t),us=h(e),I(ht.$$.fragment,e),ps=h(e),en=c(e,"P",{});var Zp=u(en);vr=c(Zp,"B",{});var em=u(vr);Ba=s(em,"How it works"),em.forEach(t),Zp.forEach(t),ms=h(e),Fe=c(e,"P",{});var di=u(Fe);Ua=s(di,"Here is the function signature of "),Er=c(di,"CODE",{});var tm=u(Er);Wa=s(tm,"notry"),tm.forEach(t),Ma=s(di,"."),di.forEach(t),ds=h(e),I(bt.$$.fragment,e),_s=h(e),he=c(e,"P",{});var Pn=u(he);Ya=s(Pn,"The generic types "),gr=c(Pn,"CODE",{});var nm=u(gr);Ha=s(nm,Nu),nm.forEach(t),ja=s(Pn,` represent
    the successful return type, failed return type, and `),$r=c(Pn,"CODE",{});var rm=u($r);Qa=s(rm,"quitable"),rm.forEach(t),Fa=s(Pn," arguments."),Pn.forEach(t),hs=h(e),be=c(e,"P",{});var Cn=u(be);za=s(Cn,"Any function that accepts "),Dr=c(Cn,"CODE",{});var om=u(Dr);Ja=s(om,"Quit"),om.forEach(t),Ka=s(Cn,` as it's first parameter is a
    `),xr=c(Cn,"CODE",{});var sm=u(xr);Ga=s(sm,"Quitable"),sm.forEach(t),Xa=s(Cn,"."),Cn.forEach(t),bs=h(e),I(wt.$$.fragment,e),ws=h(e),j=c(e,"P",{});var fe=u(j);Za=s(fe,"So "),kr=c(fe,"CODE",{});var im=u(kr);ef=s(im,"notry"),im.forEach(t),tf=s(fe," requires a "),Pr=c(fe,"CODE",{});var lm=u(Pr);nf=s(lm,"Quitable"),lm.forEach(t),rf=s(fe,` function and
    arguments to pass it and returns a `),Cr=c(fe,"CODE",{});var am=u(Cr);of=s(am,"Did"),am.forEach(t),sf=s(fe,` containing the result
    (either `),Or=c(fe,"CODE",{});var fm=u(Or);lf=s(fm,"Y"),fm.forEach(t),af=s(fe," or "),Tr=c(fe,"CODE",{});var cm=u(Tr);ff=s(cm,"N"),cm.forEach(t),cf=s(fe,")."),fe.forEach(t),ys=h(e),I(yt.$$.fragment,e),vs=h(e),H=c(e,"P",{});var re=u(H);Ar=c(re,"CODE",{});var um=u(Ar);uf=s(um,"Did"),um.forEach(t),pf=s(re," is a riff on the popular "),Ir=c(re,"CODE",{});var pm=u(Ir);mf=s(pm,"Either"),pm.forEach(t),df=s(re,` or
    `),Nr=c(re,"CODE",{});var mm=u(Nr);_f=s(mm,"Result"),mm.forEach(t),hf=s(re,`
    types. It's a discriminated union that indicates whether
    `),Rr=c(re,"CODE",{});var dm=u(Rr);bf=s(dm,"quitable"),dm.forEach(t),wf=s(re,` returned or quit. In this case, it'll be
    `),Vr=c(re,"CODE",{});var _m=u(Vr);yf=s(_m,Ru),_m.forEach(t),vf=s(re,` or
    `),qr=c(re,"CODE",{});var hm=u(qr);Ef=s(hm,Vu),hm.forEach(t),gf=s(re,"."),re.forEach(t),Es=h(e),K=c(e,"P",{});var $e=u(K);$f=s($e,"The last piece of the puzzle is "),Lr=c($e,"CODE",{});var bm=u(Lr);Df=s(bm,qu),bm.forEach(t),xf=s($e,`. It
    resolves to `),Sr=c($e,"CODE",{});var wm=u(Sr);kf=s(wm,Lu),wm.forEach(t),Pf=s($e,` or
    `),Br=c($e,"CODE",{});var ym=u(Br);Cf=s(ym,Su),ym.forEach(t),Of=s($e,`
    depending on whether `),Ur=c($e,"CODE",{});var vm=u(Ur);Tf=s(vm,"quitable"),vm.forEach(t),Af=s($e," returns a promise."),$e.forEach(t),gs=h(e),tn=c(e,"H3",{});var Em=u(tn);If=s(Em,"Error Handling At Scale"),Em.forEach(t),$s=h(e),nn=c(e,"P",{});var gm=u(nn);Nf=s(gm,`In the preceding problem, the difference in error handling solutions might
    seem insignificant. Here we'll look at a fleshier example and try to
    understand how each approach scales.`),gm.forEach(t),Ds=h(e),I(vt.$$.fragment,e),xs=h(e),G=c(e,"P",{});var De=u(G);Rf=s(De,"The three external functions "),Wr=c(De,"CODE",{});var $m=u(Wr);Vf=s($m,"c"),$m.forEach(t),qf=s(De,", "),Mr=c(De,"CODE",{});var Dm=u(Mr);Lf=s(Dm,"d"),Dm.forEach(t),Sf=s(De,`, and
    `),Yr=c(De,"CODE",{});var xm=u(Yr);Bf=s(xm,"e"),xm.forEach(t),Uf=s(De,`
    could throw so `),Hr=c(De,"CODE",{});var km=u(Hr);Wf=s(km,"main"),km.forEach(t),Mf=s(De,` catches and logs the exception. In the base
    case there is no way to differentiate the three possible failures.`),De.forEach(t),ks=h(e),rn=c(e,"H4",{});var Pm=u(rn);Yf=s(Pm,"try-catch"),Pm.forEach(t),Ps=h(e),ze=c(e,"P",{});var _i=u(ze);Hf=s(_i,"Let's introduce a utility "),jr=c(_i,"CODE",{});var Cm=u(jr);jf=s(Cm,"safe"),Cm.forEach(t),Qf=s(_i,` to catch arbitrary exceptions and
    throw something specific.`),_i.forEach(t),Cs=h(e),I(Et.$$.fragment,e),Os=h(e),on=c(e,"P",{});var Om=u(on);Ff=s(Om,"The diff shows that it's an unobtrusive change."),Om.forEach(t),Ts=h(e),I(gt.$$.fragment,e),As=h(e),sn=c(e,"P",{});var Tm=u(sn);zf=s(Tm,"However, no type safety."),Tm.forEach(t),Is=h(e),ln=c(e,"H4",{});var Am=u(ln);Jf=s(Am,"Return types"),Am.forEach(t),Ns=h(e),Je=c(e,"P",{});var hi=u(Je);Kf=s(hi,"This time we use a variant of "),Qr=c(hi,"CODE",{});var Im=u(Qr);Gf=s(Im,"safe"),Im.forEach(t),Xf=s(hi,` that catch exceptions and returns
    something specific.`),hi.forEach(t),Rs=h(e),I($t.$$.fragment,e),Vs=h(e),we=c(e,"P",{});var On=u(we);Zf=s(On,"Unfortunately now three of the five lines in both "),Fr=c(On,"CODE",{});var Nm=u(Fr);ec=s(Nm,"a"),Nm.forEach(t),tc=s(On,` and
    `),zr=c(On,"CODE",{});var Rm=u(zr);nc=s(Rm,"b"),Rm.forEach(t),rc=s(On,` are error handling. It's easy to see how this can get unwieldy
    at scale.`),On.forEach(t),qs=h(e),I(Dt.$$.fragment,e),Ls=h(e),an=c(e,"P",{});var Vm=u(an);oc=s(Vm,"But now we have type safety."),Vm.forEach(t),Ss=h(e),fn=c(e,"H4",{});var qm=u(fn);sc=s(qm,"notry-ts"),qm.forEach(t),Bs=h(e),Ke=c(e,"P",{});var bi=u(Ke);ic=s(bi,"Finally, an implementation using "),Jr=c(bi,"CODE",{});var Lm=u(Jr);lc=s(Lm,"notry"),Lm.forEach(t),ac=s(bi,"."),bi.forEach(t),Us=h(e),I(xt.$$.fragment,e),Ws=h(e),Ge=c(e,"P",{});var wi=u(Ge);fc=s(wi,"Apart from the "),Kr=c(wi,"CODE",{});var Sm=u(Kr);cc=s(Sm,"quit"),Sm.forEach(t),uc=s(wi,` parameters, this looks more or less like the
    base case.`),wi.forEach(t),Ms=h(e),I(kt.$$.fragment,e),Ys=h(e),Xe=c(e,"P",{});var yi=u(Xe);pc=s(yi,"Admittedly, all those "),Gr=c(yi,"CODE",{});var Bm=u(Gr);mc=s(Bm,Bu),Bm.forEach(t),dc=s(yi,` parameters are a bit cumbersome
    so, like anything, you should weigh the benefits against the costs.`),yi.forEach(t),Hs=h(e),cn=c(e,"H3",{});var Um=u(cn);_c=s(Um,"Comparison"),Um.forEach(t),js=h(e),un=c(e,"P",{});var Wm=u(un);hc=s(Wm,"Let's wrap up by looking at what we get from each approach."),Wm.forEach(t),Qs=h(e),pn=c(e,"H4",{});var Mm=u(pn);bc=s(Mm,"Type Safety"),Mm.forEach(t),Fs=h(e),ae=c(e,"P",{});var ot=u(ae);wc=s(ot,"None with "),Xr=c(ot,"B",{});var Ym=u(Xr);yc=s(Ym,"try-catch"),Ym.forEach(t),vc=s(ot,` and roughly the same degree with
    `),Zr=c(ot,"B",{});var Hm=u(Zr);Ec=s(Hm,"return types"),Hm.forEach(t),gc=s(ot," and "),eo=c(ot,"B",{});var jm=u(eo);$c=s(jm,"notry-ts"),jm.forEach(t),Dc=s(ot,` including the ability to tell at a glance
    if and what errors could occur.`),ot.forEach(t),zs=h(e),X=c(e,"P",{});var xe=u(X);xc=s(xe,"The biggest difference is that it's easier to ignore "),to=c(xe,"B",{});var Qm=u(to);kc=s(Qm,"return types"),Qm.forEach(t),Pc=s(xe,`. If
    you call a function that normally returns `),no=c(xe,"CODE",{});var Fm=u(no);Cc=s(Fm,"void"),Fm.forEach(t),Oc=s(xe,`, you can easily
    forget to check whether an error occurred. This problem only affects
    `),ro=c(xe,"B",{});var zm=u(ro);Tc=s(zm,"notry-ts"),zm.forEach(t),Ac=s(xe," where "),oo=c(xe,"CODE",{});var Jm=u(oo);Ic=s(Jm,"notry"),Jm.forEach(t),Nc=s(xe," is called."),xe.forEach(t),Js=h(e),mn=c(e,"H4",{});var Km=u(mn);Rc=s(Km,"Developer Experience"),Km.forEach(t),Ks=h(e),ye=c(e,"P",{});var Tn=u(ye);Vc=s(Tn,"With "),so=c(Tn,"B",{});var Gm=u(so);qc=s(Gm,"try-catch"),Gm.forEach(t),Lc=s(Tn,", you could use a utility like "),io=c(Tn,"CODE",{});var Xm=u(io);Sc=s(Xm,"safe"),Xm.forEach(t),Bc=s(Tn,` to incrementally
    improve your error handling done with minimal effect on readability.`),Tn.forEach(t),Gs=h(e),Pt=c(e,"P",{});var vu=u(Pt);lo=c(vu,"B",{});var Zm=u(lo);Uc=s(Zm,"return types"),Zm.forEach(t),Wc=s(vu,` are intuitive since it's natural to associate a function's
    return value with its outcome. This solution requires the greatest amount of
    code and gains usefulness the more it's used.`),vu.forEach(t),Xs=h(e),Oe=c(e,"P",{});var mo=u(Oe);ao=c(mo,"B",{});var ed=u(ao);Mc=s(ed,"notry"),ed.forEach(t),Yc=s(mo,` has the least intuitive and most sophisticated typing. The
    function body's intent remains clear with error handling is mostly out of
    view. As with
    `),fo=c(mo,"B",{});var td=u(fo);Hc=s(td,"return types"),td.forEach(t),jc=s(mo,", its usefulness is dependent on how widely it's used."),mo.forEach(t),Zs=h(e),dn=c(e,"H3",{});var nd=u(dn);Qc=s(nd,"Conclusion"),nd.forEach(t),ei=h(e),ne=c(e,"P",{class:!0});var st=u(ne);Fc=s(st,`If you care about type safety (why else would you be here), use
    `),co=c(st,"B",{});var rd=u(co);zc=s(rd,"return types"),rd.forEach(t),Jc=s(st," or "),uo=c(st,"B",{});var od=u(uo);Kc=s(od,"notry"),od.forEach(t),Gc=s(st,". Choose "),po=c(st,"B",{});var sd=u(po);Xc=s(sd,"notry"),sd.forEach(t),Zc=s(st,` for added readability
    and safety at the cost of complexity.`),st.forEach(t),ti=h(e),_n=c(e,"H3",{});var id=u(_n);eu=s(id,"Resources"),id.forEach(t),ni=h(e),Te=c(e,"DIV",{class:!0});var vi=u(Te);hn=c(vi,"SMALL",{class:!0});var ld=u(hn);tu=s(ld,"package"),ld.forEach(t),nu=h(vi),Ze=c(vi,"A",{href:!0,target:!0,rel:!0});var ad=u(Ze);ru=s(ad,"notry-ts"),ad.forEach(t),vi.forEach(t),ri=h(e),Ae=c(e,"DIV",{class:!0});var Ei=u(Ae);bn=c(Ei,"SMALL",{class:!0});var fd=u(bn);ou=s(fd,"package"),fd.forEach(t),su=h(Ei),et=c(Ei,"A",{href:!0,target:!0,rel:!0});var cd=u(et);iu=s(cd,"neverthrow"),cd.forEach(t),Ei.forEach(t),oi=h(e),Ie=c(e,"DIV",{class:!0});var gi=u(Ie);wn=c(gi,"SMALL",{class:!0});var ud=u(wn);lu=s(ud,"package"),ud.forEach(t),au=h(gi),tt=c(gi,"A",{href:!0,target:!0,rel:!0});var pd=u(tt);fu=s(pd,"type-safe-errors"),pd.forEach(t),gi.forEach(t),si=h(e),Ne=c(e,"DIV",{class:!0});var $i=u(Ne);yn=c($i,"SMALL",{class:!0});var md=u(yn);cu=s(md,"article"),md.forEach(t),uu=h($i),Re=c($i,"A",{href:!0,class:!0,target:!0,rel:!0});var dd=u(Re);pu=s(dd,"Type-Safe Error Handling In TypeScript"),dd.forEach(t),$i.forEach(t),ii=h(e),Ve=c(e,"DIV",{class:!0});var Di=u(Ve);vn=c(Di,"SMALL",{class:!0});var _d=u(vn);mu=s(_d,"article"),_d.forEach(t),du=h(Di),qe=c(Di,"A",{href:!0,class:!0,target:!0,rel:!0});var hd=u(qe);_u=s(hd,"Functional Error Handling"),hd.forEach(t),Di.forEach(t),li=h(e),Le=c(e,"DIV",{class:!0});var xi=u(Le);En=c(xi,"SMALL",{class:!0});var bd=u(En);hu=s(bd,"article"),bd.forEach(t),bu=h(xi),Se=c(xi,"A",{href:!0,class:!0,target:!0,rel:!0});var wd=u(Se);wu=s(wd,"TypeScript / Implement Rust-style Result"),wd.forEach(t),xi.forEach(t),this.h()},h(){g(ne,"class","padding-bottom-large"),g(hn,"class","text-muted"),g(Ze,"href","https://github.com/nmacmunn/notry"),g(Ze,"target","_blank"),g(Ze,"rel","noreferrer"),g(Te,"class","margin-bottom"),g(bn,"class","text-muted"),g(et,"href","https://github.com/supermacro/neverthrow"),g(et,"target","_blank"),g(et,"rel","noreferrer"),g(Ae,"class","margin-bottom"),g(wn,"class","text-muted"),g(tt,"href","https://github.com/wiktor-obrebski/type-safe-errors"),g(tt,"target","_blank"),g(tt,"rel","noreferrer"),g(Ie,"class","margin-bottom"),g(yn,"class","text-muted"),g(Re,"href","https://dev.to/_gdelgado/type-safe-error-handling-in-typescript-1p4n"),g(Re,"class","success"),g(Re,"target","_blank"),g(Re,"rel","noreferrer"),g(Ne,"class","margin-bottom"),g(vn,"class","text-muted"),g(qe,"href","https://khalilstemmler.com/articles/enterprise-typescript-nodejs/functional-error-handling/"),g(qe,"class","success"),g(qe,"target","_blank"),g(qe,"rel","noreferrer"),g(Ve,"class","margin-bottom"),g(En,"class","text-muted"),g(Se,"href","https://www.huy.rocks/everyday/typescript-implement-rust-style-result"),g(Se,"class","success"),g(Se,"target","_blank"),g(Se,"rel","noreferrer"),g(Le,"class","margin-bottom")},m(e,a){p(e,r,a),n(r,l),n(r,m),n(m,d),n(r,b),p(e,w,a),N(v,e,a),p(e,P,a),p(e,y,a),n(y,T),n(y,U),n(U,Q),n(y,W),p(e,L,a),p(e,se,a),n(se,We),p(e,Z,a),N($,e,a),p(e,C,a),p(e,O,a),n(O,D),p(e,Y,a),N(S,e,a),p(e,k,a),p(e,B,a),n(B,Me),n(B,pe),n(pe,At),n(B,It),n(B,ee),n(ee,Ii),n(B,Ni),p(e,Eo,a),p(e,Nt,a),n(Nt,Ri),p(e,go,a),p(e,Rt,a),n(Rt,Vi),p(e,$o,a),p(e,Vt,a),n(Vt,qi),p(e,Do,a),p(e,qt,a),n(qt,Li),p(e,xo,a),p(e,Ye,a),n(Ye,Si),n(Ye,Nn),n(Nn,Bi),n(Ye,Ui),p(e,ko,a),p(e,Lt,a),n(Lt,Wi),p(e,Po,a),p(e,St,a),n(St,Mi),p(e,Co,a),p(e,Bt,a),n(Bt,Yi),p(e,Oo,a),p(e,Ut,a),n(Ut,Hi),p(e,To,a),p(e,Wt,a),n(Wt,ji),p(e,Ao,a),p(e,Mt,a),n(Mt,Qi),p(e,Io,a),p(e,Yt,a),n(Yt,Fi),p(e,No,a),p(e,me,a),n(me,Rn),n(Rn,zi),n(me,Ji),n(me,Vn),n(Vn,Ki),n(me,Gi),n(me,qn),n(qn,Xi),p(e,Ro,a),p(e,Ht,a),n(Ht,Zi),p(e,Vo,a),p(e,jt,a),n(jt,el),p(e,qo,a),p(e,Qt,a),n(Qt,tl),p(e,Lo,a),p(e,Ft,a),n(Ft,nl),p(e,So,a),N(lt,e,a),p(e,Bo,a),p(e,F,a),n(F,rl),n(F,Ln),n(Ln,ol),n(F,sl),n(F,Sn),n(Sn,il),n(F,ll),n(F,Bn),n(Bn,al),n(F,fl),n(F,Un),n(Un,cl),n(F,ul),p(e,Uo,a),p(e,zt,a),n(zt,pl),p(e,Wo,a),p(e,He,a),n(He,ml),n(He,Wn),n(Wn,dl),n(He,_l),p(e,Mo,a),N(at,e,a),p(e,Yo,a),p(e,de,a),n(de,hl),n(de,Mn),n(Mn,bl),n(de,wl),n(de,Yn),n(Yn,yl),n(de,vl),p(e,Ho,a),p(e,Jt,a),n(Jt,El),p(e,jo,a),p(e,ie,a),n(ie,Ce),n(Ce,gl),n(Ce,Hn),n(Hn,$l),n(Ce,Dl),n(Ce,jn),n(jn,xl),n(Ce,kl),n(ie,Pl),n(ie,Qn),n(Qn,Cl),n(ie,Ol),n(ie,Fn),n(Fn,Tl),n(ie,Al),n(ie,Kt),n(Kt,Il),n(Kt,zn),n(zn,Nl),p(e,Qo,a),p(e,Gt,a),n(Gt,Rl),p(e,Fo,a),p(e,Xt,a),n(Xt,Vl),p(e,zo,a),p(e,z,a),n(z,ql),n(z,Jn),n(Jn,Ll),n(z,Sl),n(z,Kn),n(Kn,Bl),n(z,Ul),n(z,Gn),n(Gn,Wl),n(z,Ml),n(z,Xn),n(Xn,Yl),n(z,Hl),p(e,Jo,a),N(ft,e,a),p(e,Ko,a),p(e,Zt,a),n(Zt,jl),p(e,Go,a),p(e,je,a),n(je,Ql),n(je,Zn),n(Zn,Fl),n(je,zl),p(e,Xo,a),N(ct,e,a),p(e,Zo,a),p(e,ce,a),n(ce,er),n(er,Jl),n(ce,Kl),n(ce,tr),n(tr,Gl),n(ce,Xl),n(ce,nr),n(nr,Zl),n(ce,ea),p(e,es,a),N(ut,e,a),p(e,ts,a),p(e,te,a),n(te,rr),n(rr,ta),n(te,na),n(te,or),n(or,ra),n(te,oa),n(te,sr),n(sr,sa),n(te,ia),n(te,ir),n(ir,la),n(te,aa),p(e,ns,a),N(pt,e,a),p(e,rs,a),p(e,Qe,a),n(Qe,fa),n(Qe,lr),n(lr,ca),n(Qe,ua),p(e,os,a),p(e,le,a),n(le,pa),n(le,ar),n(ar,ma),n(le,da),n(le,fr),n(fr,_a),n(le,ha),n(le,cr),n(cr,ba),n(le,wa),p(e,ss,a),N(mt,e,a),p(e,is,a),p(e,_e,a),n(_e,ya),n(_e,ur),n(ur,va),n(_e,Ea),n(_e,pr),n(pr,ga),n(_e,$a),p(e,ls,a),N(dt,e,a),p(e,as,a),p(e,ue,a),n(ue,mr),n(mr,Da),n(ue,xa),n(ue,dr),n(dr,ka),n(ue,Pa),n(ue,_r),n(_r,Ca),n(ue,Oa),p(e,fs,a),N(_t,e,a),p(e,cs,a),p(e,J,a),n(J,Ta),n(J,hr),n(hr,Aa),n(J,Ia),n(J,br),n(br,Na),n(J,Ra),n(J,wr),n(wr,Va),n(J,qa),n(J,yr),n(yr,La),n(J,Sa),p(e,us,a),N(ht,e,a),p(e,ps,a),p(e,en,a),n(en,vr),n(vr,Ba),p(e,ms,a),p(e,Fe,a),n(Fe,Ua),n(Fe,Er),n(Er,Wa),n(Fe,Ma),p(e,ds,a),N(bt,e,a),p(e,_s,a),p(e,he,a),n(he,Ya),n(he,gr),n(gr,Ha),n(he,ja),n(he,$r),n($r,Qa),n(he,Fa),p(e,hs,a),p(e,be,a),n(be,za),n(be,Dr),n(Dr,Ja),n(be,Ka),n(be,xr),n(xr,Ga),n(be,Xa),p(e,bs,a),N(wt,e,a),p(e,ws,a),p(e,j,a),n(j,Za),n(j,kr),n(kr,ef),n(j,tf),n(j,Pr),n(Pr,nf),n(j,rf),n(j,Cr),n(Cr,of),n(j,sf),n(j,Or),n(Or,lf),n(j,af),n(j,Tr),n(Tr,ff),n(j,cf),p(e,ys,a),N(yt,e,a),p(e,vs,a),p(e,H,a),n(H,Ar),n(Ar,uf),n(H,pf),n(H,Ir),n(Ir,mf),n(H,df),n(H,Nr),n(Nr,_f),n(H,hf),n(H,Rr),n(Rr,bf),n(H,wf),n(H,Vr),n(Vr,yf),n(H,vf),n(H,qr),n(qr,Ef),n(H,gf),p(e,Es,a),p(e,K,a),n(K,$f),n(K,Lr),n(Lr,Df),n(K,xf),n(K,Sr),n(Sr,kf),n(K,Pf),n(K,Br),n(Br,Cf),n(K,Of),n(K,Ur),n(Ur,Tf),n(K,Af),p(e,gs,a),p(e,tn,a),n(tn,If),p(e,$s,a),p(e,nn,a),n(nn,Nf),p(e,Ds,a),N(vt,e,a),p(e,xs,a),p(e,G,a),n(G,Rf),n(G,Wr),n(Wr,Vf),n(G,qf),n(G,Mr),n(Mr,Lf),n(G,Sf),n(G,Yr),n(Yr,Bf),n(G,Uf),n(G,Hr),n(Hr,Wf),n(G,Mf),p(e,ks,a),p(e,rn,a),n(rn,Yf),p(e,Ps,a),p(e,ze,a),n(ze,Hf),n(ze,jr),n(jr,jf),n(ze,Qf),p(e,Cs,a),N(Et,e,a),p(e,Os,a),p(e,on,a),n(on,Ff),p(e,Ts,a),N(gt,e,a),p(e,As,a),p(e,sn,a),n(sn,zf),p(e,Is,a),p(e,ln,a),n(ln,Jf),p(e,Ns,a),p(e,Je,a),n(Je,Kf),n(Je,Qr),n(Qr,Gf),n(Je,Xf),p(e,Rs,a),N($t,e,a),p(e,Vs,a),p(e,we,a),n(we,Zf),n(we,Fr),n(Fr,ec),n(we,tc),n(we,zr),n(zr,nc),n(we,rc),p(e,qs,a),N(Dt,e,a),p(e,Ls,a),p(e,an,a),n(an,oc),p(e,Ss,a),p(e,fn,a),n(fn,sc),p(e,Bs,a),p(e,Ke,a),n(Ke,ic),n(Ke,Jr),n(Jr,lc),n(Ke,ac),p(e,Us,a),N(xt,e,a),p(e,Ws,a),p(e,Ge,a),n(Ge,fc),n(Ge,Kr),n(Kr,cc),n(Ge,uc),p(e,Ms,a),N(kt,e,a),p(e,Ys,a),p(e,Xe,a),n(Xe,pc),n(Xe,Gr),n(Gr,mc),n(Xe,dc),p(e,Hs,a),p(e,cn,a),n(cn,_c),p(e,js,a),p(e,un,a),n(un,hc),p(e,Qs,a),p(e,pn,a),n(pn,bc),p(e,Fs,a),p(e,ae,a),n(ae,wc),n(ae,Xr),n(Xr,yc),n(ae,vc),n(ae,Zr),n(Zr,Ec),n(ae,gc),n(ae,eo),n(eo,$c),n(ae,Dc),p(e,zs,a),p(e,X,a),n(X,xc),n(X,to),n(to,kc),n(X,Pc),n(X,no),n(no,Cc),n(X,Oc),n(X,ro),n(ro,Tc),n(X,Ac),n(X,oo),n(oo,Ic),n(X,Nc),p(e,Js,a),p(e,mn,a),n(mn,Rc),p(e,Ks,a),p(e,ye,a),n(ye,Vc),n(ye,so),n(so,qc),n(ye,Lc),n(ye,io),n(io,Sc),n(ye,Bc),p(e,Gs,a),p(e,Pt,a),n(Pt,lo),n(lo,Uc),n(Pt,Wc),p(e,Xs,a),p(e,Oe,a),n(Oe,ao),n(ao,Mc),n(Oe,Yc),n(Oe,fo),n(fo,Hc),n(Oe,jc),p(e,Zs,a),p(e,dn,a),n(dn,Qc),p(e,ei,a),p(e,ne,a),n(ne,Fc),n(ne,co),n(co,zc),n(ne,Jc),n(ne,uo),n(uo,Kc),n(ne,Gc),n(ne,po),n(po,Xc),n(ne,Zc),p(e,ti,a),p(e,_n,a),n(_n,eu),p(e,ni,a),p(e,Te,a),n(Te,hn),n(hn,tu),n(Te,nu),n(Te,Ze),n(Ze,ru),p(e,ri,a),p(e,Ae,a),n(Ae,bn),n(bn,ou),n(Ae,su),n(Ae,et),n(et,iu),p(e,oi,a),p(e,Ie,a),n(Ie,wn),n(wn,lu),n(Ie,au),n(Ie,tt),n(tt,fu),p(e,si,a),p(e,Ne,a),n(Ne,yn),n(yn,cu),n(Ne,uu),n(Ne,Re),n(Re,pu),p(e,ii,a),p(e,Ve,a),n(Ve,vn),n(vn,mu),n(Ve,du),n(Ve,qe),n(qe,_u),p(e,li,a),p(e,Le,a),n(Le,En),n(En,hu),n(Le,bu),n(Le,Se),n(Se,wu),ai=!0},p:Ou,i(e){ai||(R(v.$$.fragment,e),R($.$$.fragment,e),R(S.$$.fragment,e),R(lt.$$.fragment,e),R(at.$$.fragment,e),R(ft.$$.fragment,e),R(ct.$$.fragment,e),R(ut.$$.fragment,e),R(pt.$$.fragment,e),R(mt.$$.fragment,e),R(dt.$$.fragment,e),R(_t.$$.fragment,e),R(ht.$$.fragment,e),R(bt.$$.fragment,e),R(wt.$$.fragment,e),R(yt.$$.fragment,e),R(vt.$$.fragment,e),R(Et.$$.fragment,e),R(gt.$$.fragment,e),R($t.$$.fragment,e),R(Dt.$$.fragment,e),R(xt.$$.fragment,e),R(kt.$$.fragment,e),ai=!0)},o(e){V(v.$$.fragment,e),V($.$$.fragment,e),V(S.$$.fragment,e),V(lt.$$.fragment,e),V(at.$$.fragment,e),V(ft.$$.fragment,e),V(ct.$$.fragment,e),V(ut.$$.fragment,e),V(pt.$$.fragment,e),V(mt.$$.fragment,e),V(dt.$$.fragment,e),V(_t.$$.fragment,e),V(ht.$$.fragment,e),V(bt.$$.fragment,e),V(wt.$$.fragment,e),V(yt.$$.fragment,e),V(vt.$$.fragment,e),V(Et.$$.fragment,e),V(gt.$$.fragment,e),V($t.$$.fragment,e),V(Dt.$$.fragment,e),V(xt.$$.fragment,e),V(kt.$$.fragment,e),ai=!1},d(e){e&&t(r),e&&t(w),q(v,e),e&&t(P),e&&t(y),e&&t(L),e&&t(se),e&&t(Z),q($,e),e&&t(C),e&&t(O),e&&t(Y),q(S,e),e&&t(k),e&&t(B),e&&t(Eo),e&&t(Nt),e&&t(go),e&&t(Rt),e&&t($o),e&&t(Vt),e&&t(Do),e&&t(qt),e&&t(xo),e&&t(Ye),e&&t(ko),e&&t(Lt),e&&t(Po),e&&t(St),e&&t(Co),e&&t(Bt),e&&t(Oo),e&&t(Ut),e&&t(To),e&&t(Wt),e&&t(Ao),e&&t(Mt),e&&t(Io),e&&t(Yt),e&&t(No),e&&t(me),e&&t(Ro),e&&t(Ht),e&&t(Vo),e&&t(jt),e&&t(qo),e&&t(Qt),e&&t(Lo),e&&t(Ft),e&&t(So),q(lt,e),e&&t(Bo),e&&t(F),e&&t(Uo),e&&t(zt),e&&t(Wo),e&&t(He),e&&t(Mo),q(at,e),e&&t(Yo),e&&t(de),e&&t(Ho),e&&t(Jt),e&&t(jo),e&&t(ie),e&&t(Qo),e&&t(Gt),e&&t(Fo),e&&t(Xt),e&&t(zo),e&&t(z),e&&t(Jo),q(ft,e),e&&t(Ko),e&&t(Zt),e&&t(Go),e&&t(je),e&&t(Xo),q(ct,e),e&&t(Zo),e&&t(ce),e&&t(es),q(ut,e),e&&t(ts),e&&t(te),e&&t(ns),q(pt,e),e&&t(rs),e&&t(Qe),e&&t(os),e&&t(le),e&&t(ss),q(mt,e),e&&t(is),e&&t(_e),e&&t(ls),q(dt,e),e&&t(as),e&&t(ue),e&&t(fs),q(_t,e),e&&t(cs),e&&t(J),e&&t(us),q(ht,e),e&&t(ps),e&&t(en),e&&t(ms),e&&t(Fe),e&&t(ds),q(bt,e),e&&t(_s),e&&t(he),e&&t(hs),e&&t(be),e&&t(bs),q(wt,e),e&&t(ws),e&&t(j),e&&t(ys),q(yt,e),e&&t(vs),e&&t(H),e&&t(Es),e&&t(K),e&&t(gs),e&&t(tn),e&&t($s),e&&t(nn),e&&t(Ds),q(vt,e),e&&t(xs),e&&t(G),e&&t(ks),e&&t(rn),e&&t(Ps),e&&t(ze),e&&t(Cs),q(Et,e),e&&t(Os),e&&t(on),e&&t(Ts),q(gt,e),e&&t(As),e&&t(sn),e&&t(Is),e&&t(ln),e&&t(Ns),e&&t(Je),e&&t(Rs),q($t,e),e&&t(Vs),e&&t(we),e&&t(qs),q(Dt,e),e&&t(Ls),e&&t(an),e&&t(Ss),e&&t(fn),e&&t(Bs),e&&t(Ke),e&&t(Us),q(xt,e),e&&t(Ws),e&&t(Ge),e&&t(Ms),q(kt,e),e&&t(Ys),e&&t(Xe),e&&t(Hs),e&&t(cn),e&&t(js),e&&t(un),e&&t(Qs),e&&t(pn),e&&t(Fs),e&&t(ae),e&&t(zs),e&&t(X),e&&t(Js),e&&t(mn),e&&t(Ks),e&&t(ye),e&&t(Gs),e&&t(Pt),e&&t(Xs),e&&t(Oe),e&&t(Zs),e&&t(dn),e&&t(ei),e&&t(ne),e&&t(ti),e&&t(_n),e&&t(ni),e&&t(Te),e&&t(ri),e&&t(Ae),e&&t(oi),e&&t(Ie),e&&t(si),e&&t(Ne),e&&t(ii),e&&t(Ve),e&&t(li),e&&t(Le)}}}function O_(i){let r,l,m;return{c(){r=f("a"),l=o("notry-ts"),m=o(" is a type safe error handling alternative to try-catch"),this.h()},l(d){r=c(d,"A",{href:!0,target:!0,rel:!0});var b=u(r);l=s(b,"notry-ts"),b.forEach(t),m=s(d," is a type safe error handling alternative to try-catch"),this.h()},h(){g(r,"href","https://github.com/nmacmunn/notry"),g(r,"target","_blank"),g(r,"rel","noreferrer")},m(d,b){p(d,r,b),n(r,l),p(d,m,b)},p:Ou,d(d){d&&t(r),d&&t(m)}}}function T_(i){let r,l,m,d,b;return document.title=r=$u,d=new Fd({props:{title:$u,date:i[0],$$slots:{tldr:[O_],default:[C_]},$$scope:{ctx:i}}}),{c(){l=f("meta"),m=_(),A(d.$$.fragment),this.h()},l(w){const v=Md("svelte-76t75",document.head);l=c(v,"META",{name:!0,content:!0}),v.forEach(t),m=h(w),I(d.$$.fragment,w),this.h()},h(){g(l,"name","description"),g(l,"content","An exploration of type safe error-handling alternatives to try-catch in TypeScript.")},m(w,v){n(document.head,l),p(w,m,v),N(d,w,v),b=!0},p(w,[v]){(!b||v&0)&&r!==(r=$u)&&(document.title=r);const P={};v&1024&&(P.$$scope={dirty:v,ctx:w}),d.$set(P)},i(w){b||(R(d.$$.fragment,w),b=!0)},o(w){V(d.$$.fragment,w),b=!1},d(w){t(l),w&&t(m),q(d,w)}}}const $u="TypeScripting Try-Catch",A_='quit.unless(person, { type: "UserError", message: `${name} not found` });';function I_(i){return[new Date("February 25, 2023"),'type Why = { type: "UserError"; message: string } | { type: "DevError" };',"function getPerson(quit: Quit<Why>, name: string): Person",`quit({ type: "UserError", message: "message" }); 
// or
quit({ type: "DevError" })`,'const person = quit.catch(getRecord, "person", name, { type: "DevError" });',`export function canVote(
  quit: Quit<Of<typeof getPerson>>,
  name: string
): boolean {
  const person = getPerson(quit, name);
  return person.age >= 18;
}`,`function main(name: string) {
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
}`,`notry<Y, N, Args extends unknown[]>(
  quitable: Quitable<Y, N, Args>, 
  ...args: Args
): MaybeAsyncDid<Y, N>;`,`type Quitable<Y, N, Args extends unknown[]> = (
  quit: Quit<N>,
  ...args: Args
) => Y;`,`type Did<Y, N> =
  | { y: { val: Y }; n: never }
  | { y: never; n: { val: N; exception: unknown } };`]}class S_ extends xu{constructor(r){super(),ku(this,r,I_,T_,Pu,{})}}export{S_ as default};
