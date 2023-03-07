import{S as Du,i as xu,s as ku,y as A,a as d,k as f,z as I,c as _,l as c,m as u,h as t,n as E,A as N,b as p,D as n,L as Pu,H as Cu,g as R,d as V,B as q,o as Nd,w as Bd,q as o,r as s,p as Ud,M as wd,e as yd,K as vd,u as Rd,J as Wd}from"../chunks/index.467d2cb2.mjs";import{_ as Vd}from"../chunks/preload-helper.41c905a7.mjs";import{I as Md,M as Hd,n as Yd,d as jd,S as ke}from"../chunks/snippet.05b778e0.mjs";import{A as Qd}from"../chunks/article.4324c2c2.mjs";function Fd(i){let r,l,m,h,b,w,g,C;return r=new Md({}),{c(){A(r.$$.fragment),l=d(),m=f("div"),h=f("div"),b=f("div"),this.h()},l(y){I(r.$$.fragment,y),l=_(y),m=c(y,"DIV",{class:!0});var T=u(m);h=c(T,"DIV",{class:!0});var U=u(h);b=c(U,"DIV",{}),u(b).forEach(t),U.forEach(t),T.forEach(t),this.h()},h(){E(h,"class","card-body"),E(m,"class","card margin-bottom-large")},m(y,T){N(r,y,T),p(y,l,T),p(y,m,T),n(m,h),n(h,b),i[4](b),w=!0,g||(C=Pu(window,"resize",i[1]),g=!0)},p:Cu,i(y){w||(R(r.$$.fragment,y),w=!0)},o(y){V(r.$$.fragment,y),w=!1},d(y){q(r,y),y&&t(l),y&&t(m),i[4](null),g=!1,C()}}}function zd(i,r,l){let{original:m}=r,{modified:h}=r,b,w;function g(){if(!w)return;const y=Math.min(1e3,Math.max(w.getOriginalEditor().getContentHeight(),w.getModifiedEditor().getContentHeight())+20);l(0,b.style.height=`${y}px`,b);const{width:T}=b.getBoundingClientRect();w.layout({width:T,height:y})}Nd(async()=>{const y=await Vd(()=>import("../chunks/editor.main.0a978303.mjs").then(U=>U.e),["..\\chunks\\editor.main.0a978303.mjs","..\\chunks\\preload-helper.41c905a7.mjs","..\\assets\\editor.911c6360.css"],import.meta.url),T=document.body.clientWidth>=640;return w=y.editor.createDiffEditor(b,{fontSize:T?14:12,minimap:{enabled:!1},overviewRulerLanes:0,readOnly:!0,renderSideBySide:T,scrollBeyondLastLine:!1}),w.setModel({original:y.editor.createModel(m,"typescript"),modified:y.editor.createModel(h,"typescript")}),g(),()=>w==null?void 0:w.dispose()});function C(y){Bd[y?"unshift":"push"](()=>{b=y,l(0,b)})}return i.$$set=y=>{"original"in y&&l(2,m=y.original),"modified"in y&&l(3,h=y.modified)},[b,g,m,h,C]}class Eu extends Du{constructor(r){super(),xu(this,r,zd,Fd,ku,{original:2,modified:3})}}let M;const qd=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});qd.decode();let ho=null;function Oi(){return(ho===null||ho.byteLength===0)&&(ho=new Uint8Array(M.memory.buffer)),ho}function Ti(i,r){return qd.decode(Oi().subarray(i,i+r))}const Ue=new Array(128).fill(void 0);Ue.push(void 0,null,!0,!1);let vo=Ue.length;function x(i){vo===Ue.length&&Ue.push(Ue.length+1);const r=vo;return vo=Ue[r],Ue[r]=i,r}function v(i){return Ue[i]}function Jd(i){i<132||(Ue[i]=vo,vo=i)}function Tt(i){const r=v(i);return Jd(i),r}let In=0;const Ai=new TextEncoder("utf-8"),Kd=typeof Ai.encodeInto=="function"?function(i,r){return Ai.encodeInto(i,r)}:function(i,r){const l=Ai.encode(i);return r.set(l),{read:i.length,written:l.length}};function ki(i,r,l){if(l===void 0){const g=Ai.encode(i),C=r(g.length);return Oi().subarray(C,C+g.length).set(g),In=g.length,C}let m=i.length,h=r(m);const b=Oi();let w=0;for(;w<m;w++){const g=i.charCodeAt(w);if(g>127)break;b[h+w]=g}if(w!==m){w!==0&&(i=i.slice(w)),h=l(h,m,m=w+i.length*3);const g=Oi().subarray(h+w,h+m),C=Kd(i,g);w+=C.written}return In=w,h}function _o(i){return i==null}let bo=null;function oe(){return(bo===null||bo.byteLength===0)&&(bo=new Int32Array(M.memory.buffer)),bo}let wo=null;function Gd(){return(wo===null||wo.byteLength===0)&&(wo=new BigInt64Array(M.memory.buffer)),wo}let yo=null;function Xd(){return(yo===null||yo.byteLength===0)&&(yo=new Float64Array(M.memory.buffer)),yo}function $u(i){const r=typeof i;if(r=="number"||r=="boolean"||i==null)return`${i}`;if(r=="string")return`"${i}"`;if(r=="symbol"){const h=i.description;return h==null?"Symbol":`Symbol(${h})`}if(r=="function"){const h=i.name;return typeof h=="string"&&h.length>0?`Function(${h})`:"Function"}if(Array.isArray(i)){const h=i.length;let b="[";h>0&&(b+=$u(i[0]));for(let w=1;w<h;w++)b+=", "+$u(i[w]);return b+="]",b}const l=/\[object ([^\]]+)\]/.exec(toString.call(i));let m;if(l.length>1)m=l[1];else return toString.call(i);if(m=="Object")try{return"Object("+JSON.stringify(i)+")"}catch{return"Object"}return i instanceof Error?`${i.name}: ${i.message}
${i.stack}`:m}function Zd(i,r,l,m){const h={a:i,b:r,cnt:1,dtor:l},b=(...w)=>{h.cnt++;const g=h.a;h.a=0;try{return m(g,h.b,...w)}finally{--h.cnt===0?M.__wbindgen_export_2.get(h.dtor)(g,h.b):h.a=g}};return b.original=h,b}function e_(i,r,l){M.__wbindgen_export_3(i,r,x(l))}function t_(i,r,l){try{const w=M.__wbindgen_add_to_stack_pointer(-16);M.transformSync(w,x(i),x(r),x(l));var m=oe()[w/4+0],h=oe()[w/4+1],b=oe()[w/4+2];if(b)throw Tt(h);return Tt(m)}finally{M.__wbindgen_add_to_stack_pointer(16)}}function Ed(i,r){return i===0?v(r):Ti(i,r)}function it(i,r){try{return i.apply(this,r)}catch(l){M.__wbindgen_export_5(x(l))}}function n_(i,r,l,m){M.__wbindgen_export_6(i,r,x(l),x(m))}async function r_(i,r){if(typeof Response=="function"&&i instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(i,r)}catch(m){if(i.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",m);else throw m}const l=await i.arrayBuffer();return await WebAssembly.instantiate(l,r)}else{const l=await WebAssembly.instantiate(i,r);return l instanceof WebAssembly.Instance?{instance:l,module:i}:l}}function o_(){const i={};return i.wbg={},i.wbg.__wbg_new_f9876326328f45ed=function(){const r=new Object;return x(r)},i.wbg.__wbindgen_string_new=function(r,l){const m=Ti(r,l);return x(m)},i.wbg.__wbg_set_20cbc34131e76824=function(r,l,m){v(r)[Tt(l)]=Tt(m)},i.wbg.__wbindgen_object_drop_ref=function(r){Tt(r)},i.wbg.__wbindgen_number_new=function(r){return x(r)},i.wbg.__wbg_new_b525de17f44a8943=function(){const r=new Array;return x(r)},i.wbg.__wbg_set_17224bc548dd1d7b=function(r,l,m){v(r)[l>>>0]=Tt(m)},i.wbg.__wbindgen_string_get=function(r,l){const m=v(l),h=typeof m=="string"?m:void 0;var b=_o(h)?0:ki(h,M.__wbindgen_export_0,M.__wbindgen_export_1),w=In;oe()[r/4+1]=w,oe()[r/4+0]=b},i.wbg.__wbindgen_jsval_loose_eq=function(r,l){return v(r)==v(l)},i.wbg.__wbindgen_error_new=function(r,l){const m=new Error(Ti(r,l));return x(m)},i.wbg.__wbindgen_is_string=function(r){return typeof v(r)=="string"},i.wbg.__wbindgen_is_object=function(r){const l=v(r);return typeof l=="object"&&l!==null},i.wbg.__wbg_entries_4e1315b774245952=function(r){const l=Object.entries(v(r));return x(l)},i.wbg.__wbg_length_e498fbc24f9c1d4f=function(r){return v(r).length},i.wbg.__wbg_get_27fe3dac1c4d0224=function(r,l){const m=v(r)[l>>>0];return x(m)},i.wbg.__wbg_getwithrefkey_15c62c2b8546208d=function(r,l){const m=v(r)[v(l)];return x(m)},i.wbg.__wbindgen_is_undefined=function(r){return v(r)===void 0},i.wbg.__wbindgen_in=function(r,l){return v(r)in v(l)},i.wbg.__wbg_set_388c4c6422704173=function(r,l,m){const h=v(r).set(v(l),v(m));return x(h)},i.wbg.__wbindgen_boolean_get=function(r){const l=v(r);return typeof l=="boolean"?l?1:0:2},i.wbg.__wbindgen_is_bigint=function(r){return typeof v(r)=="bigint"},i.wbg.__wbindgen_bigint_get_as_i64=function(r,l){const m=v(l),h=typeof m=="bigint"?m:void 0;Gd()[r/8+1]=_o(h)?BigInt(0):h,oe()[r/4+0]=!_o(h)},i.wbg.__wbindgen_bigint_from_i64=function(r){return x(r)},i.wbg.__wbindgen_jsval_eq=function(r,l){return v(r)===v(l)},i.wbg.__wbindgen_number_get=function(r,l){const m=v(l),h=typeof m=="number"?m:void 0;Xd()[r/8+1]=_o(h)?0:h,oe()[r/4+0]=!_o(h)},i.wbg.__wbg_isSafeInteger_8c4789029e885159=function(r){return Number.isSafeInteger(v(r))},i.wbg.__wbg_isArray_39d28997bf6b96b4=function(r){return Array.isArray(v(r))},i.wbg.__wbg_iterator_55f114446221aa5a=function(){return x(Symbol.iterator)},i.wbg.__wbindgen_bigint_from_u64=function(r){const l=BigInt.asUintN(64,r);return x(l)},i.wbg.__wbg_new_f841cc6f2098f4b5=function(){return x(new Map)},i.wbg.__wbg_call_9495de66fdbe016b=function(){return it(function(r,l,m){const h=v(r).call(v(l),v(m));return x(h)},arguments)},i.wbg.__wbindgen_is_null=function(r){return v(r)===null},i.wbg.__wbg_next_88560ec06a094dea=function(){return it(function(r){const l=v(r).next();return x(l)},arguments)},i.wbg.__wbg_done_1ebec03bbd919843=function(r){return v(r).done},i.wbg.__wbg_value_6ac8da5cc5b3efda=function(r){const l=v(r).value;return x(l)},i.wbg.__wbg_new_9d3a9ce4282a18a8=function(r,l){try{var m={a:r,b:l},h=(w,g)=>{const C=m.a;m.a=0;try{return n_(C,m.b,w,g)}finally{m.a=C}};const b=new Promise(h);return x(b)}finally{m.a=m.b=0}},i.wbg.__wbg_new0_25059e40b1c02766=function(){const r=new Date;return x(r)},i.wbg.__wbg_getTimezoneOffset_2a6b27fb18493a56=function(r){return v(r).getTimezoneOffset()},i.wbg.__wbg_self_e7c1f827057f6584=function(){return it(function(){const r=self.self;return x(r)},arguments)},i.wbg.__wbg_window_a09ec664e14b1b81=function(){return it(function(){const r=window.window;return x(r)},arguments)},i.wbg.__wbg_globalThis_87cbb8506fecf3a9=function(){return it(function(){const r=globalThis.globalThis;return x(r)},arguments)},i.wbg.__wbg_global_c85a9259e621f3db=function(){return it(function(){const r=global.global;return x(r)},arguments)},i.wbg.__wbg_newnoargs_2b8b6bd7753c76ba=function(r,l){var m=Ed(r,l);const h=new Function(m);return x(h)},i.wbg.__wbg_call_95d1ea488d03e4e8=function(){return it(function(r,l){const m=v(r).call(v(l));return x(m)},arguments)},i.wbg.__wbindgen_object_clone_ref=function(r){const l=v(r);return x(l)},i.wbg.__wbg_get_baf4855f9a986186=function(){return it(function(r,l){const m=Reflect.get(v(r),v(l));return x(m)},arguments)},i.wbg.__wbg_getTime_7c59072d1651a3cf=function(r){return v(r).getTime()},i.wbg.__wbg_new_abda76e883ba8a5f=function(){const r=new Error;return x(r)},i.wbg.__wbg_stack_658279fe44541cf6=function(r,l){const m=v(l).stack,h=ki(m,M.__wbindgen_export_0,M.__wbindgen_export_1),b=In;oe()[r/4+1]=b,oe()[r/4+0]=h},i.wbg.__wbg_error_f851667af71bcfc6=function(r,l){var m=Ed(r,l);r!==0&&M.__wbindgen_export_4(r,l),console.error(m)},i.wbg.__wbindgen_is_function=function(r){return typeof v(r)=="function"},i.wbg.__wbg_next_b7d530c04fd8b217=function(r){const l=v(r).next;return x(l)},i.wbg.__wbg_length_27a2afe8ab42b09f=function(r){return v(r).length},i.wbg.__wbindgen_memory=function(){const r=M.memory;return x(r)},i.wbg.__wbg_buffer_cf65c07de34b9a08=function(r){const l=v(r).buffer;return x(l)},i.wbg.__wbg_new_537b7341ce90bb31=function(r){const l=new Uint8Array(v(r));return x(l)},i.wbg.__wbg_set_17499e8aa4003ebd=function(r,l,m){v(r).set(v(l),m>>>0)},i.wbg.__wbg_instanceof_Uint8Array_01cebe79ca606cca=function(r){let l;try{l=v(r)instanceof Uint8Array}catch{l=!1}return l},i.wbg.__wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065=function(r){let l;try{l=v(r)instanceof ArrayBuffer}catch{l=!1}return l},i.wbg.__wbg_String_91fba7ded13ba54c=function(r,l){const m=String(v(l)),h=ki(m,M.__wbindgen_export_0,M.__wbindgen_export_1),b=In;oe()[r/4+1]=b,oe()[r/4+0]=h},i.wbg.__wbindgen_debug_string=function(r,l){const m=$u(v(l)),h=ki(m,M.__wbindgen_export_0,M.__wbindgen_export_1),b=In;oe()[r/4+1]=b,oe()[r/4+0]=h},i.wbg.__wbindgen_throw=function(r,l){throw new Error(Ti(r,l))},i.wbg.__wbg_resolve_fd40f858d9db1a04=function(r){const l=Promise.resolve(v(r));return x(l)},i.wbg.__wbindgen_cb_drop=function(r){const l=Tt(r).original;return l.cnt--==1?(l.a=0,!0):!1},i.wbg.__wbg_then_ec5db6d509eb475f=function(r,l){const m=v(r).then(v(l));return x(m)},i.wbg.__wbindgen_closure_wrapper19025=function(r,l,m){const h=Zd(r,l,236,e_);return x(h)},i}function s_(i,r){return M=i.exports,Ld.__wbindgen_wasm_module=r,wo=null,yo=null,bo=null,ho=null,M}async function Ld(i){typeof i>"u"&&(i=new URL(""+new URL("../assets/wasm-web_bg.09007752.wasm",import.meta.url).href,self.location));const r=o_();(typeof i=="string"||typeof Request=="function"&&i instanceof Request||typeof URL=="function"&&i instanceof URL)&&(i=fetch(i));const{instance:l,module:m}=await r_(await i,r);return s_(l,m)}const i_=""+new URL("../assets/wasm-web_bg.09007752.wasm",import.meta.url).href;function gd(i,r,l){const m=i.slice();return m[15]=r[l].level,m[16]=r[l].msg,m}function $d(i,r,l){const m=i.slice();return m[19]=r[l].model,m[20]=r[l].name,m[21]=r[l].show,m}function Dd(i){let r,l,m,h,b,w=i[20]+"",g,C,y,T,U;function Q(){return i[6](i[19])}return{c(){r=f("input"),h=d(),b=f("label"),g=o(w),C=o(".ts"),this.h()},l(W){r=c(W,"INPUT",{id:!0,type:!0,name:!0}),h=_(W),b=c(W,"LABEL",{for:!0});var L=u(b);g=s(L,w),C=s(L,".ts"),L.forEach(t),this.h()},h(){E(r,"id",l=i[19].uri.path),E(r,"type","radio"),E(r,"name","tabs-"+i[3]),r.checked=m=i[19]===i[1],E(b,"for",y=i[19].uri.path)},m(W,L){p(W,r,L),p(W,h,L),p(W,b,L),n(b,g),n(b,C),T||(U=Pu(r,"change",Q),T=!0)},p(W,L){i=W,L&1&&l!==(l=i[19].uri.path)&&E(r,"id",l),L&3&&m!==(m=i[19]===i[1])&&(r.checked=m),L&1&&w!==(w=i[20]+"")&&Rd(g,w),L&1&&y!==(y=i[19].uri.path)&&E(b,"for",y)},d(W){W&&t(r),W&&t(h),W&&t(b),T=!1,U()}}}function xd(i){let r,l=i[21]!==!1&&Dd(i);return{c(){l&&l.c(),r=yd()},l(m){l&&l.l(m),r=yd()},m(m,h){l&&l.m(m,h),p(m,r,h)},p(m,h){m[21]!==!1?l?l.p(m,h):(l=Dd(m),l.c(),l.m(r.parentNode,r)):l&&(l.d(1),l=null)},d(m){l&&l.d(m),m&&t(r)}}}function kd(i){let r,l=i[16]+"",m;return{c(){r=f("div"),m=o(l),this.h()},l(h){r=c(h,"DIV",{});var b=u(r);m=s(b,l),b.forEach(t),this.h()},h(){vd(r,"text-danger",i[15]==="error")},m(h,b){p(h,r,b),n(r,m)},p(h,b){b&4&&l!==(l=h[16]+"")&&Rd(m,l),b&4&&vd(r,"text-danger",h[15]==="error")},d(h){h&&t(r)}}}function l_(i){let r,l,m,h,b,w,g,C,y,T,U,Q,W,L,se,We,Z=i[0],$=[];for(let D=0;D<Z.length;D+=1)$[D]=xd($d(i,Z,D));b=new Hd({props:{model:i[1]}});let P=i[2],O=[];for(let D=0;D<P.length;D+=1)O[D]=kd(gd(i,P,D));return{c(){r=f("div"),l=f("div");for(let D=0;D<$.length;D+=1)$[D].c();m=d(),h=f("div"),A(b.$$.fragment),w=d(),g=f("div"),C=f("div"),y=f("pre");for(let D=0;D<O.length;D+=1)O[D].c();T=d(),U=f("div"),Q=f("button"),W=o("Run!"),this.h()},l(D){r=c(D,"DIV",{class:!0});var H=u(r);l=c(H,"DIV",{class:!0});var S=u(l);for(let ee=0;ee<$.length;ee+=1)$[ee].l(S);S.forEach(t),m=_(H),h=c(H,"DIV",{class:!0});var k=u(h);I(b.$$.fragment,k),k.forEach(t),w=_(H),g=c(H,"DIV",{class:!0});var B=u(g);C=c(B,"DIV",{});var Me=u(C);y=c(Me,"PRE",{class:!0});var pe=u(y);for(let ee=0;ee<O.length;ee+=1)O[ee].l(pe);pe.forEach(t),Me.forEach(t),T=_(B),U=c(B,"DIV",{class:!0});var At=u(U);Q=c(At,"BUTTON",{class:!0});var It=u(Q);W=s(It,"Run!"),It.forEach(t),At.forEach(t),B.forEach(t),H.forEach(t),this.h()},h(){E(l,"class","tabs svelte-qpule3"),E(h,"class","card-body"),E(y,"class","svelte-qpule3"),Ud(C,"flex","1"),E(Q,"class","btn-small"),E(U,"class","margin-left"),E(g,"class","card-footer svelte-qpule3"),E(r,"class","card margin-bottom-large")},m(D,H){p(D,r,H),n(r,l);for(let S=0;S<$.length;S+=1)$[S].m(l,null);n(r,m),n(r,h),N(b,h,null),n(r,w),n(r,g),n(g,C),n(C,y);for(let S=0;S<O.length;S+=1)O[S].m(y,null);n(g,T),n(g,U),n(U,Q),n(Q,W),L=!0,se||(We=Pu(Q,"click",i[4]),se=!0)},p(D,[H]){if(H&11){Z=D[0];let k;for(k=0;k<Z.length;k+=1){const B=$d(D,Z,k);$[k]?$[k].p(B,H):($[k]=xd(B),$[k].c(),$[k].m(l,null))}for(;k<$.length;k+=1)$[k].d(1);$.length=Z.length}const S={};if(H&2&&(S.model=D[1]),b.$set(S),H&4){P=D[2];let k;for(k=0;k<P.length;k+=1){const B=gd(D,P,k);O[k]?O[k].p(B,H):(O[k]=kd(B),O[k].c(),O[k].m(y,null))}for(;k<O.length;k+=1)O[k].d(1);O.length=P.length}},i(D){L||(R(b.$$.fragment,D),L=!0)},o(D){V(b.$$.fragment,D),L=!1},d(D){D&&t(r),wd($,D),q(b),wd(O,D),se=!1,We()}}}let Sd=()=>{Ld(i_),Sd=()=>{}};function a_(i,r){const l=m=>{m.source===r.contentWindow&&(i.document.body.removeChild(r),i.removeEventListener("message",l))};i.addEventListener("message",l)}function f_(i){const r=document.createElement("iframe");return r.style.display="none",document.body.append(r),(!r.contentDocument||!r.contentWindow)&&i("Run Failed"),r}function c_(i,r){const l=i.createElement("script");l.type="module",l.innerHTML=r,i.body.appendChild(l)}function u_(i,r,l){let m;const h=Math.floor(Math.random()*1e9).toString(36);let{files:b}=r,w=[],g,C;function y($,P){m.push({level:$,msg:typeof P=="object"?jd(P):`${P}`}),l(2,m)}function T($){return t_($,{jsc:{parser:{syntax:"typescript",tsx:!1},target:"es5",loose:!1,minify:{compress:!1,mangle:!1}},module:{type:"es6"},minify:!1,isModule:"unknown"}).code}function U($,P,O={}){let D=T(`${P}`);const H={};for(const[S,k]of D.matchAll(/import.*['"]\.\/(.+)['"]/g)){$.if(O[k],"Dependency Cycle");const B=w.find(pe=>k===pe.name);$.unless(B,"Missing Import");const Me={...O,[k]:!0};H[k]=U($,B.model.getValue(),Me)}for(const[S,k]of Object.entries(H))D=D.replace(`./${S}`,`data:text/javascript;base64,${btoa(k)}`);return D}function Q($){$.addEventListener("error",P=>y("error",P.error))}function W($){$.addEventListener("unhandledrejection",P=>y("error",P.reason))}function L($,P){return U($,P)+`
window.parent.postMessage("done");`}function se($){Object.assign($,{console:{error:P=>y("error",P),log:P=>y("log",P)}})}function We(){const $=Yd(P=>{l(2,m.length=0,m);const O=f_(P);a_(window,O),Q(O.contentWindow),W(O.contentWindow),se(O.contentWindow);const D=L(P,g.getValue());c_(O.contentDocument,D)});$.ok||y("error",$.n)}Nd(async()=>{const $=await Vd(()=>import("../chunks/editor.main.0a978303.mjs").then(P=>P.e),["..\\chunks\\editor.main.0a978303.mjs","..\\chunks\\preload-helper.41c905a7.mjs","..\\assets\\editor.911c6360.css"],import.meta.url);l(0,w=b.map(P=>{const O=$.Uri.file(`${h}/${P.name}.ts`),D=$.editor.createModel(P.src,"typescript",O);return{...P,model:D}})),l(1,C=w[0].model),g=w[0].model,Sd()});const Z=$=>l(1,C=$);return i.$$set=$=>{"files"in $&&l(5,b=$.files)},l(2,m=[]),[w,C,m,h,We,b,Z]}class Pe extends Du{constructor(r){super(),xu(this,r,u_,l_,ku,{files:5})}}const Pd=`// error.ts
export class DevError extends Error {
  constructor(public exception: unknown = undefined) {
    super();
  }
}

export class UserError extends Error {}
`,p_=`import { getRecord } from "./store";

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
`,m_=`// vote.ts
import { getPerson } from "./person";

export function canVote(name: string): boolean {
  const person = getPerson(name);
  return person.age >= 18;
}

console.log(canVote("Neil"));
`,d_=`import { canVote } from "./vote";

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
`,__=`import { DevError, UserError } from "./error";
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
`,h_=`import { DevError, UserError } from "./error";
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
`,b_=`import { notry } from "./notry-ts";
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
`,Cd=`class Carrier<T> {
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
`,w_=`import type { Quit } from "./notry-ts";
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
`,y_=`import { DevError, UserError } from "./error";
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
`,v_=`// persontc.ts
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
`,Od=`import { getRecord } from "./store";

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
`,E_=`export function safe<Y, N, Args extends unknown[]>(
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
`,g_=`export function safe<Y, N, Args extends unknown[]>(
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
`,Td=`import { c, d, e } from "./ext";
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
`,Ad=`import { c, d, e } from "./ext";
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
`,Id=`import { c, d, e } from "./ext";
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
`,$_=`import type { Of, Quit } from "./notry-ts";
import { getPerson } from "./person-notry";

export function canVote(
  quit: Quit<Of<typeof getPerson>>,
  name: string
): boolean {
  const person = getPerson(quit, name);
  return person.age >= 18;
}
`,D_=`import type { DevError, UserError } from "./error";
import { getPerson } from "./person-return";

export function canVote(name: string): boolean | UserError | DevError {
  const maybePerson = getPerson(name);
  if (maybePerson instanceof Error) {
    return maybePerson;
  }
  return maybePerson.age >= 18;
}
`,x_=`// votetc.ts
import { getPerson } from "./person-try-catch";

export function canVote(name: string): boolean {
  const person = getPerson(name);
  return person.age >= 18;
}
`,k_=`import { getPerson } from "./person";

export function canVote(name: string): boolean {
  const person = getPerson(name);
  return person.age >= 18;
}
`;function P_(i){let r,l,m,h,b,w,g,C,y,T,U,Q,W,L,se,We,Z,$,P,O,D,H,S,k,B,Me,pe,At,It,ee,Ii,Ni,Eo,Nt,Ri,go,Rt,Vi,$o,Vt,qi,Do,qt,Li,xo,He,Si,Nn,Bi,Ui,ko,Lt,Wi,Po,St,Mi,Co,Bt,Hi,Oo,Ut,Yi,To,Wt,ji,Ao,Mt,Qi,Io,Ht,Fi,No,me,Rn,zi,Ji,Vn,Ki,Gi,qn,Xi,Ro,Yt,Zi,Vo,jt,el,qo,Qt,tl,Lo,Ft,nl,So,lt,Bo,F,rl,Ln,ol,sl,Sn,il,ll,Bn,al,fl,Un,cl,ul,Uo,zt,pl,Wo,Ye,ml,Wn,dl,_l,Mo,at,Ho,de,hl,Mn,bl,wl,Hn,yl,vl,Yo,Jt,El,jo,ie,Ce,gl,Yn,$l,Dl,jn,xl,kl,Pl,Qn,Cl,Ol,Fn,Tl,Al,Kt,Il,zn,Nl,Qo,Gt,Rl,Fo,Xt,Vl,zo,z,ql,Jn,Ll,Sl,Kn,Bl,Ul,Gn,Wl,Ml,Xn,Hl,Yl,Jo,ft,Ko,Zt,jl,Go,je,Ql,Zn,Fl,zl,Xo,ct,Zo,ce,er,Jl,Kl,tr,Gl,Xl,nr,Zl,ea,es,ut,ts,te,rr,ta,na,or,ra,oa,sr,sa,ia,ir,la,aa,ns,pt,rs,Qe,fa,lr,ca,ua,os,le,pa,ar,Ou='{ type: "DevError" }',ma,da,fr,Tu='getRecord("person", name)',_a,ha,cr,ba,wa,ss,mt,is,_e,ya,ur,Au='{ type: "UserError", message: "<name> not found" }',va,Ea,pr,ga,$a,ls,dt,as,ue,mr,Da,xa,dr,ka,Pa,_r,Ca,Oa,fs,_t,cs,J,Ta,hr,Aa,Ia,br,Na,Ra,wr,Va,qa,yr,La,Sa,us,ht,ps,en,vr,Ba,ms,Fe,Ua,Er,Wa,Ma,ds,bt,_s,he,Ha,gr,Iu="<Y, N, Args extends unknown[]>",Ya,ja,$r,Qa,Fa,hs,be,za,Dr,Ja,Ka,xr,Ga,Xa,bs,wt,ws,j,Za,kr,ef,tf,Pr,nf,rf,Cr,of,sf,Or,lf,af,Tr,ff,cf,ys,yt,vs,Y,Ar,uf,pf,Ir,mf,df,Nr,_f,hf,Rr,bf,wf,Vr,Nu="{ y: { val: boolean } }",yf,vf,qr,Ru="{ n: { val: Why, exception: unknown } }",Ef,gf,Es,K,$f,Lr,Vu="MaybeAsyncDid<Y, N>",Df,xf,Sr,qu="Did<Y, N>",kf,Pf,Br,Lu="Promise<Did<Y, N>>",Cf,Of,Ur,Tf,Af,gs,tn,If,$s,nn,Nf,Ds,vt,xs,G,Rf,Wr,Vf,qf,Mr,Lf,Sf,Hr,Bf,Uf,Yr,Wf,Mf,ks,rn,Hf,Ps,ze,Yf,jr,jf,Qf,Cs,Et,Os,on,Ff,Ts,gt,As,sn,zf,Is,ln,Jf,Ns,Je,Kf,Qr,Gf,Xf,Rs,$t,Vs,we,Zf,Fr,ec,tc,zr,nc,rc,qs,Dt,Ls,an,oc,Ss,fn,sc,Bs,Ke,ic,Jr,lc,ac,Us,xt,Ws,Ge,fc,Kr,cc,uc,Ms,kt,Hs,Xe,pc,Gr,Su="quit: Quit<Why>",mc,dc,Ys,cn,_c,js,un,hc,Qs,pn,bc,Fs,ae,wc,Xr,yc,vc,Zr,Ec,gc,eo,$c,Dc,zs,X,xc,to,kc,Pc,no,Cc,Oc,ro,Tc,Ac,oo,Ic,Nc,Js,mn,Rc,Ks,ye,Vc,so,qc,Lc,io,Sc,Bc,Gs,Pt,lo,Uc,Wc,Xs,Oe,ao,Mc,Hc,fo,Yc,jc,Zs,dn,Qc,ei,ne,Fc,co,zc,Jc,uo,Kc,Gc,po,Xc,Zc,ti,_n,eu,ni,Te,hn,tu,nu,Ze,ru,ri,Ae,bn,ou,su,et,iu,oi,Ie,wn,lu,au,tt,fu,si,Ne,yn,cu,uu,Re,pu,ii,Ve,vn,mu,du,qe,_u,li,Le,En,hu,bu,Se,wu,ai;return g=new Pe({props:{files:[{name:"person",src:p_},{name:"store",src:An,show:!1}]}}),$=new Pe({props:{files:[{name:"vote",src:m_},{name:"person",src:Od},{name:"store",src:An,show:!1}]}}),S=new Pe({props:{files:[{name:"main",src:d_},{name:"vote",src:k_},{name:"person",src:Od},{name:"store",src:An,show:!1}]}}),lt=new Pe({props:{files:[{name:"main",src:__},{name:"vote-try-catch",src:x_},{name:"person-try-catch",src:v_},{name:"error",src:Pd},{name:"report",src:gu,show:!1},{name:"store",src:An,show:!1}]}}),at=new Pe({props:{files:[{name:"main",src:h_},{name:"vote-return",src:D_},{name:"person-return",src:y_},{name:"error",src:Pd},{name:"report",src:gu,show:!1},{name:"store",src:An,show:!1}]}}),ft=new Pe({props:{files:[{name:"main",src:b_},{name:"vote-notry",src:$_},{name:"person-notry",src:w_},{name:"report",src:gu,show:!1},{name:"store",src:An,show:!1},{name:"notry-ts",src:Cd,show:!1}]}}),ct=new ke({props:{value:i[1]}}),ut=new ke({props:{value:i[2]}}),pt=new ke({props:{value:i[3]}}),mt=new ke({props:{value:i[4]}}),dt=new ke({props:{value:A_}}),_t=new ke({props:{value:i[5]}}),ht=new ke({props:{value:i[6]}}),bt=new ke({props:{value:i[7]}}),wt=new ke({props:{value:i[8]}}),yt=new ke({props:{value:i[9]}}),vt=new Pe({props:{files:[{name:"main",src:Ci},{name:"ext",src:Pi,show:!1}]}}),Et=new Pe({props:{files:[{name:"main",src:Id},{name:"safe-try-catch",src:g_},{name:"ext",src:Pi,show:!1}]}}),gt=new Eu({props:{original:Ci,modified:Id}}),$t=new Pe({props:{files:[{name:"main",src:Ad},{name:"safe-return",src:E_},{name:"ext",src:Pi,show:!1}]}}),Dt=new Eu({props:{original:Ci,modified:Ad}}),xt=new Pe({props:{files:[{name:"main",src:Td},{name:"ext",src:Pi,show:!1},{name:"notry-ts",src:Cd,show:!1}]}}),kt=new Eu({props:{original:Ci,modified:Td}}),{c(){r=f("p"),l=o(`Suppose you're asked to write a new function to determine whether a person\r
    can vote. It should be easy since there's already a `),m=f("code"),h=o("getPerson"),b=o(" function."),w=d(),A(g.$$.fragment),C=d(),y=f("p"),T=o("Notice that the function signature gives no hint that "),U=f("code"),Q=o("getPerson"),W=o(`\r
    could throw. This is one problem we want to address.`),L=d(),se=f("p"),We=o("Here's the new function."),Z=d(),A($.$$.fragment),P=d(),O=f("p"),D=o("And last but not least, the main progam."),H=d(),A(S.$$.fragment),k=d(),B=f("p"),Me=o("Note here that the type of "),pe=f("code"),At=o("exceptionVar"),It=o(` is\r
    `),ee=f("code"),Ii=o("unknown"),Ni=o(`. If you make it something more specific you'll get a\r
    compiler error.`),Eo=d(),Nt=f("pre"),Ri=o("Catch clause variable type annotation must be 'any' or 'unknown' if specified."),go=d(),Rt=f("p"),Vi=o("This is another problem we'll try to tackle."),$o=d(),Vt=f("h4"),qi=o("Test Cases"),Do=d(),qt=f("p"),Li=o(`If you run the previous example, you should see three lines written to the\r
    console.`),xo=d(),He=f("p"),Si=o("The first shows the output of a successful invocation of "),Nn=f("code"),Bi=o("main"),Ui=o("."),ko=d(),Lt=f("pre"),Wi=o("Neil can't vote"),Po=d(),St=f("p"),Mi=o("The second invocation failed with what is probably a user error."),Co=d(),Bt=f("pre"),Hi=o("Error: Neal not found"),Oo=d(),Ut=f("p"),Yi=o(`The final result is another error but this time the meaning is less clear.\r
    It could be an environmental or maybe a programming error. In either case,\r
    it's not something we expect the user to be able to handle.`),To=d(),Wt=f("pre"),ji=o("Error: Failed to get record"),Ao=d(),Mt=f("p"),Qi=o(`Unfortunately, this isn't terribly helpful. It means nothing to the user and\r
    doesn't give the developer much to debug with.`),Io=d(),Ht=f("p"),Fi=o("So how could we improve? A few ideas:"),No=d(),me=f("ol"),Rn=f("li"),zi=o(`Log the error stack trace: this would be helpful to the developer, but\r
      probably scare the user.`),Ji=d(),Vn=f("li"),Ki=o(`Report the stack trace to the developer. On user errors, this would\r
      produce noise for the developer. On developer errors, the message would\r
      still be confusing to the user.`),Gi=d(),qn=f("li"),Xi=o("Find a mechanism for differentiating error types."),Ro=d(),Yt=f("h3"),Zi=o("Approaches"),Vo=d(),jt=f("p"),el=o(`Let's explore idea #3 and compare error handling approaches using the three\r
    test cases.`),qo=d(),Qt=f("h4"),tl=o("try-catch"),Lo=d(),Ft=f("p"),nl=o("One simple solution is to throw subclassed Error objects."),So=d(),A(lt.$$.fragment),Bo=d(),F=f("p"),rl=o(`That's better but the type checker doesn't help much. Without reading the\r
    `),Ln=f("code"),ol=o("getPerson"),sl=o(` source, we can't tell what (or even if) it could\r
    throw. `),Sn=f("code"),il=o("exceptionVar"),ll=o(" still has type "),Bn=f("code"),al=o("unknown"),fl=o(`.\r
    Narrowing it takes extra effort and if `),Un=f("code"),cl=o("getPerson"),ul=o(` starts throwing\r
    something different, the compiler won't tell us.`),Uo=d(),zt=f("h4"),pl=o("Return Types"),Wo=d(),Ye=f("p"),ml=o(`One way to lean on the type system for error handling is by using a\r
    specialized return type. We'll use a union of the successful return type and\r
    `),Wn=f("code"),dl=o("Error"),_l=o("s to keep things simple."),Mo=d(),A(at.$$.fragment),Ho=d(),de=f("p"),hl=o("This yields the same result as "),Mn=f("b"),bl=o("try-catch"),wl=o(` with the added benefit of\r
    type safety. The biggest downside is the extra check in `),Hn=f("code"),yl=o("canVote"),vl=o(`\r
    (more on that later).`),Yo=d(),Jt=f("p"),El=o("Following this approach boils down to:"),jo=d(),ie=f("ol"),Ce=f("li"),gl=o("Replacing "),Yn=f("code"),$l=o("throw"),Dl=o(" with "),jn=f("code"),xl=o("return"),kl=o(" in your code"),Pl=d(),Qn=f("li"),Cl=o("Updating the return types"),Ol=d(),Fn=f("li"),Tl=o("Propagating errors up the call stack"),Al=d(),Kt=f("li"),Il=o("Wrapping invocations of code you don't control in "),zn=f("code"),Nl=o("try-catch"),Qo=d(),Gt=f("p"),Rl=o(`There are some simple utilities you can write to make this easier. Still,\r
    one can't help but wonder - is there a better way?`),Fo=d(),Xt=f("h4"),Vl=o("notry-ts"),zo=d(),z=f("p"),ql=o("What if we could get the convenience of "),Jn=f("b"),Ll=o("try-catch"),Sl=o(` and the type safety\r
    of `),Kn=f("b"),Bl=o("return types"),Ul=o(`? That's what I set out to answer when I created\r
    `),Gn=f("b"),Wl=o("notry-ts"),Ml=o(". Let's see how our example looks with "),Xn=f("code"),Hl=o("notry"),Yl=o("."),Jo=d(),A(ft.$$.fragment),Ko=d(),Zt=f("p"),jl=o(`This produces the same output as the two previous solutions, so how does it\r
    work?`),Go=d(),je=f("p"),Ql=o("The first thing you'll notice is the new "),Zn=f("code"),Fl=o("Why"),zl=o(" type."),Xo=d(),A(ct.$$.fragment),Zo=d(),ce=f("p"),er=f("code"),Jl=o("Why"),Kl=o(" represents the type returned when "),tr=f("code"),Gl=o("getPerson"),Xl=o(`\r
    fails. It's used in the new first parameter of `),nr=f("code"),Zl=o("getPerson"),ea=o("."),es=d(),A(ut.$$.fragment),ts=d(),te=f("p"),rr=f("code"),ta=o("quit"),na=o(` has the call signature\r
    `),or=f("code"),ra=o("(val: Why) => never"),oa=o(`. Calling it immediately terminates\r
    `),sr=f("code"),sa=o("getPerson"),ia=o(`. So in this case, we could terminate\r
    `),ir=f("code"),la=o("getPerson"),aa=o(`\r
    by calling:`),ns=d(),A(pt.$$.fragment),rs=d(),Qe=f("p"),fa=o("Rather than call "),lr=f("code"),ca=o("quit"),ua=o(" directly, we use two convenience functions."),os=d(),le=f("p"),pa=o(`This quits with\r
    `),ar=f("code"),ma=o(Ou),da=o(` if\r
    `),fr=f("code"),_a=o(Tu),ha=o(`\r
    throws, returning a `),cr=f("code"),ba=o("Person"),wa=o(" otherwise."),ss=d(),A(mt.$$.fragment),is=d(),_e=f("p"),ya=o(`This quits with\r
    `),ur=f("code"),va=o(Au),Ea=o(`\r
    if `),pr=f("code"),ga=o("person"),$a=o(" is undefined."),ls=d(),A(dt.$$.fragment),as=d(),ue=f("p"),mr=f("code"),Da=o("canVote"),xa=o(" is straightforward. It takes a "),dr=f("code"),ka=o("quit"),Pa=o(`\r
    parameter of the same type as `),_r=f("code"),Ca=o("getPerson"),Oa=o(" and forwards it."),fs=d(),A(_t.$$.fragment),cs=d(),J=f("p"),Ta=o("At the top level, "),hr=f("code"),Aa=o("main"),Ia=o(" invokes "),br=f("code"),Na=o("canVote"),Ra=o(` with\r
    `),wr=f("code"),Va=o("notry"),qa=o(" and assigns the result to "),yr=f("code"),La=o("did"),Sa=o("."),us=d(),A(ht.$$.fragment),ps=d(),en=f("p"),vr=f("b"),Ba=o("How it works"),ms=d(),Fe=f("p"),Ua=o("Here is the function signature of "),Er=f("code"),Wa=o("notry"),Ma=o("."),ds=d(),A(bt.$$.fragment),_s=d(),he=f("p"),Ha=o("The generic types "),gr=f("code"),Ya=o(Iu),ja=o(` represent\r
    the successful return type, failed return type, and `),$r=f("code"),Qa=o("quitable"),Fa=o(" arguments."),hs=d(),be=f("p"),za=o("Any function that accepts "),Dr=f("code"),Ja=o("Quit"),Ka=o(` as it's first parameter is a\r
    `),xr=f("code"),Ga=o("Quitable"),Xa=o("."),bs=d(),A(wt.$$.fragment),ws=d(),j=f("p"),Za=o("So "),kr=f("code"),ef=o("notry"),tf=o(" requires a "),Pr=f("code"),nf=o("Quitable"),rf=o(` function and\r
    arguments to pass it and returns a `),Cr=f("code"),of=o("Did"),sf=o(` containing the result\r
    (either `),Or=f("code"),lf=o("Y"),af=o(" or "),Tr=f("code"),ff=o("N"),cf=o(")."),ys=d(),A(yt.$$.fragment),vs=d(),Y=f("p"),Ar=f("code"),uf=o("Did"),pf=o(" is a riff on the popular "),Ir=f("code"),mf=o("Either"),df=o(` or\r
    `),Nr=f("code"),_f=o("Result"),hf=o(`\r
    types. It's a discriminated union that indicates whether\r
    `),Rr=f("code"),bf=o("quitable"),wf=o(` returned or quit. In this case, it'll be\r
    `),Vr=f("code"),yf=o(Nu),vf=o(` or\r
    `),qr=f("code"),Ef=o(Ru),gf=o("."),Es=d(),K=f("p"),$f=o("The last piece of the puzzle is "),Lr=f("code"),Df=o(Vu),xf=o(`. It\r
    resolves to `),Sr=f("code"),kf=o(qu),Pf=o(` or\r
    `),Br=f("code"),Cf=o(Lu),Of=o(`\r
    depending on whether `),Ur=f("code"),Tf=o("quitable"),Af=o(" returns a promise."),gs=d(),tn=f("h3"),If=o("Error Handling At Scale"),$s=d(),nn=f("p"),Nf=o(`In the preceding problem, the difference in error handling solutions might\r
    seem insignificant. Here we'll look at a fleshier example and try to\r
    understand how each approach scales.`),Ds=d(),A(vt.$$.fragment),xs=d(),G=f("p"),Rf=o("The three external functions "),Wr=f("code"),Vf=o("c"),qf=o(", "),Mr=f("code"),Lf=o("d"),Sf=o(`, and\r
    `),Hr=f("code"),Bf=o("e"),Uf=o(`\r
    could throw so `),Yr=f("code"),Wf=o("main"),Mf=o(` catches and logs the exception. In the base\r
    case there is no way to differentiate the three possible failures.`),ks=d(),rn=f("h4"),Hf=o("try-catch"),Ps=d(),ze=f("p"),Yf=o("Let's introduce a utility "),jr=f("code"),jf=o("safe"),Qf=o(` to catch arbitary exceptions and\r
    throw something specific.`),Cs=d(),A(Et.$$.fragment),Os=d(),on=f("p"),Ff=o("The diff shows that it's an unobtrusive change."),Ts=d(),A(gt.$$.fragment),As=d(),sn=f("p"),zf=o("However, no type safety."),Is=d(),ln=f("h4"),Jf=o("Return types"),Ns=d(),Je=f("p"),Kf=o("This time we use a variant of "),Qr=f("code"),Gf=o("safe"),Xf=o(` that catch exceptions and returns\r
    something specific.`),Rs=d(),A($t.$$.fragment),Vs=d(),we=f("p"),Zf=o("Unfortunately now three of the five lines in both "),Fr=f("code"),ec=o("a"),tc=o(` and\r
    `),zr=f("code"),nc=o("b"),rc=o(` are error handling. It's easy to see how this can get unwieldy\r
    at scale.`),qs=d(),A(Dt.$$.fragment),Ls=d(),an=f("p"),oc=o("But now we have type safety."),Ss=d(),fn=f("h4"),sc=o("notry-ts"),Bs=d(),Ke=f("p"),ic=o("Finally, an implementation using "),Jr=f("code"),lc=o("notry"),ac=o("."),Us=d(),A(xt.$$.fragment),Ws=d(),Ge=f("p"),fc=o("Apart from the "),Kr=f("code"),cc=o("quit"),uc=o(` parameters, this looks more or less like the\r
    base case.`),Ms=d(),A(kt.$$.fragment),Hs=d(),Xe=f("p"),pc=o("Admittedly, all those "),Gr=f("code"),mc=o(Su),dc=o(` parameters are a bit cumbersome\r
    so, like anything, you should weigh the benefits against the costs.`),Ys=d(),cn=f("h3"),_c=o("Comparison"),js=d(),un=f("p"),hc=o("Let's wrap up by looking at what we get from each approach."),Qs=d(),pn=f("h4"),bc=o("Type Safety"),Fs=d(),ae=f("p"),wc=o("None with "),Xr=f("b"),yc=o("try-catch"),vc=o(` and roughly the same degree with\r
    `),Zr=f("b"),Ec=o("return types"),gc=o(" and "),eo=f("b"),$c=o("notry-ts"),Dc=o(` including the ability to tell at a glance\r
    if and what errors could occur.`),zs=d(),X=f("p"),xc=o("The biggest difference is that it's easier to ignore "),to=f("b"),kc=o("return types"),Pc=o(`. If\r
    you call a function that normally returns `),no=f("code"),Cc=o("void"),Oc=o(`, you can easily\r
    forget to check whether an error occurred. This problem only affects\r
    `),ro=f("b"),Tc=o("notry-ts"),Ac=o(" where "),oo=f("code"),Ic=o("notry"),Nc=o(" is called."),Js=d(),mn=f("h4"),Rc=o("Developer Experience"),Ks=d(),ye=f("p"),Vc=o("With "),so=f("b"),qc=o("try-catch"),Lc=o(", you could use a utility like "),io=f("code"),Sc=o("safe"),Bc=o(` to incrementally\r
    improve your error handling done with minimal effect on readability.`),Gs=d(),Pt=f("p"),lo=f("b"),Uc=o("return types"),Wc=o(` are intuitive since it's natural to associate a function's\r
    return value with its outcome. This solution requires the greatest amount of\r
    code and gains usefulness the more it's used.`),Xs=d(),Oe=f("p"),ao=f("b"),Mc=o("notry"),Hc=o(` has the least intuitive and most sophisticated typing. The\r
    function body's intent remains clear with error handling is mostly out of\r
    view. As with\r
    `),fo=f("b"),Yc=o("return types"),jc=o(", its usefulness is dependent on how widely it's used."),Zs=d(),dn=f("h3"),Qc=o("Conclusion"),ei=d(),ne=f("p"),Fc=o(`If you care about type safety (why else would you be here), use\r
    `),co=f("b"),zc=o("return types"),Jc=o(" or "),uo=f("b"),Kc=o("notry"),Gc=o(". Choose "),po=f("b"),Xc=o("notry"),Zc=o(` for added readability\r
    and safety at the cost of complexity.`),ti=d(),_n=f("h3"),eu=o("Resources"),ni=d(),Te=f("div"),hn=f("small"),tu=o("package"),nu=d(),Ze=f("a"),ru=o("notry-ts"),ri=d(),Ae=f("div"),bn=f("small"),ou=o("package"),su=d(),et=f("a"),iu=o("neverthrow"),oi=d(),Ie=f("div"),wn=f("small"),lu=o("package"),au=d(),tt=f("a"),fu=o("type-safe-errors"),si=d(),Ne=f("div"),yn=f("small"),cu=o("article"),uu=d(),Re=f("a"),pu=o("Type-Safe Error Handling In TypeScript"),ii=d(),Ve=f("div"),vn=f("small"),mu=o("article"),du=d(),qe=f("a"),_u=o("Functional Error Handling"),li=d(),Le=f("div"),En=f("small"),hu=o("article"),bu=d(),Se=f("a"),wu=o("TypeScript / Implement Rust-style Result"),this.h()},l(e){r=c(e,"P",{});var a=u(r);l=s(a,`Suppose you're asked to write a new function to determine whether a person\r
    can vote. It should be easy since there's already a `),m=c(a,"CODE",{});var Bu=u(m);h=s(Bu,"getPerson"),Bu.forEach(t),b=s(a," function."),a.forEach(t),w=_(e),I(g.$$.fragment,e),C=_(e),y=c(e,"P",{});var fi=u(y);T=s(fi,"Notice that the function signature gives no hint that "),U=c(fi,"CODE",{});var Uu=u(U);Q=s(Uu,"getPerson"),Uu.forEach(t),W=s(fi,`\r
    could throw. This is one problem we want to address.`),fi.forEach(t),L=_(e),se=c(e,"P",{});var Wu=u(se);We=s(Wu,"Here's the new function."),Wu.forEach(t),Z=_(e),I($.$$.fragment,e),P=_(e),O=c(e,"P",{});var Mu=u(O);D=s(Mu,"And last but not least, the main progam."),Mu.forEach(t),H=_(e),I(S.$$.fragment,e),k=_(e),B=c(e,"P",{});var gn=u(B);Me=s(gn,"Note here that the type of "),pe=c(gn,"CODE",{});var Hu=u(pe);At=s(Hu,"exceptionVar"),Hu.forEach(t),It=s(gn,` is\r
    `),ee=c(gn,"CODE",{});var Yu=u(ee);Ii=s(Yu,"unknown"),Yu.forEach(t),Ni=s(gn,`. If you make it something more specific you'll get a\r
    compiler error.`),gn.forEach(t),Eo=_(e),Nt=c(e,"PRE",{});var ju=u(Nt);Ri=s(ju,"Catch clause variable type annotation must be 'any' or 'unknown' if specified."),ju.forEach(t),go=_(e),Rt=c(e,"P",{});var Qu=u(Rt);Vi=s(Qu,"This is another problem we'll try to tackle."),Qu.forEach(t),$o=_(e),Vt=c(e,"H4",{});var Fu=u(Vt);qi=s(Fu,"Test Cases"),Fu.forEach(t),Do=_(e),qt=c(e,"P",{});var zu=u(qt);Li=s(zu,`If you run the previous example, you should see three lines written to the\r
    console.`),zu.forEach(t),xo=_(e),He=c(e,"P",{});var ci=u(He);Si=s(ci,"The first shows the output of a successful invocation of "),Nn=c(ci,"CODE",{});var Ju=u(Nn);Bi=s(Ju,"main"),Ju.forEach(t),Ui=s(ci,"."),ci.forEach(t),ko=_(e),Lt=c(e,"PRE",{});var Ku=u(Lt);Wi=s(Ku,"Neil can't vote"),Ku.forEach(t),Po=_(e),St=c(e,"P",{});var Gu=u(St);Mi=s(Gu,"The second invocation failed with what is probably a user error."),Gu.forEach(t),Co=_(e),Bt=c(e,"PRE",{});var Xu=u(Bt);Hi=s(Xu,"Error: Neal not found"),Xu.forEach(t),Oo=_(e),Ut=c(e,"P",{});var Zu=u(Ut);Yi=s(Zu,`The final result is another error but this time the meaning is less clear.\r
    It could be an environmental or maybe a programming error. In either case,\r
    it's not something we expect the user to be able to handle.`),Zu.forEach(t),To=_(e),Wt=c(e,"PRE",{});var ep=u(Wt);ji=s(ep,"Error: Failed to get record"),ep.forEach(t),Ao=_(e),Mt=c(e,"P",{});var tp=u(Mt);Qi=s(tp,`Unfortunately, this isn't terribly helpful. It means nothing to the user and\r
    doesn't give the developer much to debug with.`),tp.forEach(t),Io=_(e),Ht=c(e,"P",{});var np=u(Ht);Fi=s(np,"So how could we improve? A few ideas:"),np.forEach(t),No=_(e),me=c(e,"OL",{});var $n=u(me);Rn=c($n,"LI",{});var rp=u(Rn);zi=s(rp,`Log the error stack trace: this would be helpful to the developer, but\r
      probably scare the user.`),rp.forEach(t),Ji=_($n),Vn=c($n,"LI",{});var op=u(Vn);Ki=s(op,`Report the stack trace to the developer. On user errors, this would\r
      produce noise for the developer. On developer errors, the message would\r
      still be confusing to the user.`),op.forEach(t),Gi=_($n),qn=c($n,"LI",{});var sp=u(qn);Xi=s(sp,"Find a mechanism for differentiating error types."),sp.forEach(t),$n.forEach(t),Ro=_(e),Yt=c(e,"H3",{});var ip=u(Yt);Zi=s(ip,"Approaches"),ip.forEach(t),Vo=_(e),jt=c(e,"P",{});var lp=u(jt);el=s(lp,`Let's explore idea #3 and compare error handling approaches using the three\r
    test cases.`),lp.forEach(t),qo=_(e),Qt=c(e,"H4",{});var ap=u(Qt);tl=s(ap,"try-catch"),ap.forEach(t),Lo=_(e),Ft=c(e,"P",{});var fp=u(Ft);nl=s(fp,"One simple solution is to throw subclassed Error objects."),fp.forEach(t),So=_(e),I(lt.$$.fragment,e),Bo=_(e),F=c(e,"P",{});var ve=u(F);rl=s(ve,`That's better but the type checker doesn't help much. Without reading the\r
    `),Ln=c(ve,"CODE",{});var cp=u(Ln);ol=s(cp,"getPerson"),cp.forEach(t),sl=s(ve,` source, we can't tell what (or even if) it could\r
    throw. `),Sn=c(ve,"CODE",{});var up=u(Sn);il=s(up,"exceptionVar"),up.forEach(t),ll=s(ve," still has type "),Bn=c(ve,"CODE",{});var pp=u(Bn);al=s(pp,"unknown"),pp.forEach(t),fl=s(ve,`.\r
    Narrowing it takes extra effort and if `),Un=c(ve,"CODE",{});var mp=u(Un);cl=s(mp,"getPerson"),mp.forEach(t),ul=s(ve,` starts throwing\r
    something different, the compiler won't tell us.`),ve.forEach(t),Uo=_(e),zt=c(e,"H4",{});var dp=u(zt);pl=s(dp,"Return Types"),dp.forEach(t),Wo=_(e),Ye=c(e,"P",{});var ui=u(Ye);ml=s(ui,`One way to lean on the type system for error handling is by using a\r
    specialized return type. We'll use a union of the successful return type and\r
    `),Wn=c(ui,"CODE",{});var _p=u(Wn);dl=s(_p,"Error"),_p.forEach(t),_l=s(ui,"s to keep things simple."),ui.forEach(t),Mo=_(e),I(at.$$.fragment,e),Ho=_(e),de=c(e,"P",{});var Dn=u(de);hl=s(Dn,"This yields the same result as "),Mn=c(Dn,"B",{});var hp=u(Mn);bl=s(hp,"try-catch"),hp.forEach(t),wl=s(Dn,` with the added benefit of\r
    type safety. The biggest downside is the extra check in `),Hn=c(Dn,"CODE",{});var bp=u(Hn);yl=s(bp,"canVote"),bp.forEach(t),vl=s(Dn,`\r
    (more on that later).`),Dn.forEach(t),Yo=_(e),Jt=c(e,"P",{});var wp=u(Jt);El=s(wp,"Following this approach boils down to:"),wp.forEach(t),jo=_(e),ie=c(e,"OL",{});var nt=u(ie);Ce=c(nt,"LI",{});var xn=u(Ce);gl=s(xn,"Replacing "),Yn=c(xn,"CODE",{});var yp=u(Yn);$l=s(yp,"throw"),yp.forEach(t),Dl=s(xn," with "),jn=c(xn,"CODE",{});var vp=u(jn);xl=s(vp,"return"),vp.forEach(t),kl=s(xn," in your code"),xn.forEach(t),Pl=_(nt),Qn=c(nt,"LI",{});var Ep=u(Qn);Cl=s(Ep,"Updating the return types"),Ep.forEach(t),Ol=_(nt),Fn=c(nt,"LI",{});var gp=u(Fn);Tl=s(gp,"Propagating errors up the call stack"),gp.forEach(t),Al=_(nt),Kt=c(nt,"LI",{});var yu=u(Kt);Il=s(yu,"Wrapping invocations of code you don't control in "),zn=c(yu,"CODE",{});var $p=u(zn);Nl=s($p,"try-catch"),$p.forEach(t),yu.forEach(t),nt.forEach(t),Qo=_(e),Gt=c(e,"P",{});var Dp=u(Gt);Rl=s(Dp,`There are some simple utilities you can write to make this easier. Still,\r
    one can't help but wonder - is there a better way?`),Dp.forEach(t),Fo=_(e),Xt=c(e,"H4",{});var xp=u(Xt);Vl=s(xp,"notry-ts"),xp.forEach(t),zo=_(e),z=c(e,"P",{});var Ee=u(z);ql=s(Ee,"What if we could get the convenience of "),Jn=c(Ee,"B",{});var kp=u(Jn);Ll=s(kp,"try-catch"),kp.forEach(t),Sl=s(Ee,` and the type safety\r
    of `),Kn=c(Ee,"B",{});var Pp=u(Kn);Bl=s(Pp,"return types"),Pp.forEach(t),Ul=s(Ee,`? That's what I set out to answer when I created\r
    `),Gn=c(Ee,"B",{});var Cp=u(Gn);Wl=s(Cp,"notry-ts"),Cp.forEach(t),Ml=s(Ee,". Let's see how our example looks with "),Xn=c(Ee,"CODE",{});var Op=u(Xn);Hl=s(Op,"notry"),Op.forEach(t),Yl=s(Ee,"."),Ee.forEach(t),Jo=_(e),I(ft.$$.fragment,e),Ko=_(e),Zt=c(e,"P",{});var Tp=u(Zt);jl=s(Tp,`This produces the same output as the two previous solutions, so how does it\r
    work?`),Tp.forEach(t),Go=_(e),je=c(e,"P",{});var pi=u(je);Ql=s(pi,"The first thing you'll notice is the new "),Zn=c(pi,"CODE",{});var Ap=u(Zn);Fl=s(Ap,"Why"),Ap.forEach(t),zl=s(pi," type."),pi.forEach(t),Xo=_(e),I(ct.$$.fragment,e),Zo=_(e),ce=c(e,"P",{});var Ct=u(ce);er=c(Ct,"CODE",{});var Ip=u(er);Jl=s(Ip,"Why"),Ip.forEach(t),Kl=s(Ct," represents the type returned when "),tr=c(Ct,"CODE",{});var Np=u(tr);Gl=s(Np,"getPerson"),Np.forEach(t),Xl=s(Ct,`\r
    fails. It's used in the new first parameter of `),nr=c(Ct,"CODE",{});var Rp=u(nr);Zl=s(Rp,"getPerson"),Rp.forEach(t),ea=s(Ct,"."),Ct.forEach(t),es=_(e),I(ut.$$.fragment,e),ts=_(e),te=c(e,"P",{});var Be=u(te);rr=c(Be,"CODE",{});var Vp=u(rr);ta=s(Vp,"quit"),Vp.forEach(t),na=s(Be,` has the call signature\r
    `),or=c(Be,"CODE",{});var qp=u(or);ra=s(qp,"(val: Why) => never"),qp.forEach(t),oa=s(Be,`. Calling it immediately terminates\r
    `),sr=c(Be,"CODE",{});var Lp=u(sr);sa=s(Lp,"getPerson"),Lp.forEach(t),ia=s(Be,`. So in this case, we could terminate\r
    `),ir=c(Be,"CODE",{});var Sp=u(ir);la=s(Sp,"getPerson"),Sp.forEach(t),aa=s(Be,`\r
    by calling:`),Be.forEach(t),ns=_(e),I(pt.$$.fragment,e),rs=_(e),Qe=c(e,"P",{});var mi=u(Qe);fa=s(mi,"Rather than call "),lr=c(mi,"CODE",{});var Bp=u(lr);ca=s(Bp,"quit"),Bp.forEach(t),ua=s(mi," directly, we use two convenience functions."),mi.forEach(t),os=_(e),le=c(e,"P",{});var rt=u(le);pa=s(rt,`This quits with\r
    `),ar=c(rt,"CODE",{});var Up=u(ar);ma=s(Up,Ou),Up.forEach(t),da=s(rt,` if\r
    `),fr=c(rt,"CODE",{});var Wp=u(fr);_a=s(Wp,Tu),Wp.forEach(t),ha=s(rt,`\r
    throws, returning a `),cr=c(rt,"CODE",{});var Mp=u(cr);ba=s(Mp,"Person"),Mp.forEach(t),wa=s(rt," otherwise."),rt.forEach(t),ss=_(e),I(mt.$$.fragment,e),is=_(e),_e=c(e,"P",{});var kn=u(_e);ya=s(kn,`This quits with\r
    `),ur=c(kn,"CODE",{});var Hp=u(ur);va=s(Hp,Au),Hp.forEach(t),Ea=s(kn,`\r
    if `),pr=c(kn,"CODE",{});var Yp=u(pr);ga=s(Yp,"person"),Yp.forEach(t),$a=s(kn," is undefined."),kn.forEach(t),ls=_(e),I(dt.$$.fragment,e),as=_(e),ue=c(e,"P",{});var Ot=u(ue);mr=c(Ot,"CODE",{});var jp=u(mr);Da=s(jp,"canVote"),jp.forEach(t),xa=s(Ot," is straightforward. It takes a "),dr=c(Ot,"CODE",{});var Qp=u(dr);ka=s(Qp,"quit"),Qp.forEach(t),Pa=s(Ot,`\r
    parameter of the same type as `),_r=c(Ot,"CODE",{});var Fp=u(_r);Ca=s(Fp,"getPerson"),Fp.forEach(t),Oa=s(Ot," and forwards it."),Ot.forEach(t),fs=_(e),I(_t.$$.fragment,e),cs=_(e),J=c(e,"P",{});var ge=u(J);Ta=s(ge,"At the top level, "),hr=c(ge,"CODE",{});var zp=u(hr);Aa=s(zp,"main"),zp.forEach(t),Ia=s(ge," invokes "),br=c(ge,"CODE",{});var Jp=u(br);Na=s(Jp,"canVote"),Jp.forEach(t),Ra=s(ge,` with\r
    `),wr=c(ge,"CODE",{});var Kp=u(wr);Va=s(Kp,"notry"),Kp.forEach(t),qa=s(ge," and assigns the result to "),yr=c(ge,"CODE",{});var Gp=u(yr);La=s(Gp,"did"),Gp.forEach(t),Sa=s(ge,"."),ge.forEach(t),us=_(e),I(ht.$$.fragment,e),ps=_(e),en=c(e,"P",{});var Xp=u(en);vr=c(Xp,"B",{});var Zp=u(vr);Ba=s(Zp,"How it works"),Zp.forEach(t),Xp.forEach(t),ms=_(e),Fe=c(e,"P",{});var di=u(Fe);Ua=s(di,"Here is the function signature of "),Er=c(di,"CODE",{});var em=u(Er);Wa=s(em,"notry"),em.forEach(t),Ma=s(di,"."),di.forEach(t),ds=_(e),I(bt.$$.fragment,e),_s=_(e),he=c(e,"P",{});var Pn=u(he);Ha=s(Pn,"The generic types "),gr=c(Pn,"CODE",{});var tm=u(gr);Ya=s(tm,Iu),tm.forEach(t),ja=s(Pn,` represent\r
    the successful return type, failed return type, and `),$r=c(Pn,"CODE",{});var nm=u($r);Qa=s(nm,"quitable"),nm.forEach(t),Fa=s(Pn," arguments."),Pn.forEach(t),hs=_(e),be=c(e,"P",{});var Cn=u(be);za=s(Cn,"Any function that accepts "),Dr=c(Cn,"CODE",{});var rm=u(Dr);Ja=s(rm,"Quit"),rm.forEach(t),Ka=s(Cn,` as it's first parameter is a\r
    `),xr=c(Cn,"CODE",{});var om=u(xr);Ga=s(om,"Quitable"),om.forEach(t),Xa=s(Cn,"."),Cn.forEach(t),bs=_(e),I(wt.$$.fragment,e),ws=_(e),j=c(e,"P",{});var fe=u(j);Za=s(fe,"So "),kr=c(fe,"CODE",{});var sm=u(kr);ef=s(sm,"notry"),sm.forEach(t),tf=s(fe," requires a "),Pr=c(fe,"CODE",{});var im=u(Pr);nf=s(im,"Quitable"),im.forEach(t),rf=s(fe,` function and\r
    arguments to pass it and returns a `),Cr=c(fe,"CODE",{});var lm=u(Cr);of=s(lm,"Did"),lm.forEach(t),sf=s(fe,` containing the result\r
    (either `),Or=c(fe,"CODE",{});var am=u(Or);lf=s(am,"Y"),am.forEach(t),af=s(fe," or "),Tr=c(fe,"CODE",{});var fm=u(Tr);ff=s(fm,"N"),fm.forEach(t),cf=s(fe,")."),fe.forEach(t),ys=_(e),I(yt.$$.fragment,e),vs=_(e),Y=c(e,"P",{});var re=u(Y);Ar=c(re,"CODE",{});var cm=u(Ar);uf=s(cm,"Did"),cm.forEach(t),pf=s(re," is a riff on the popular "),Ir=c(re,"CODE",{});var um=u(Ir);mf=s(um,"Either"),um.forEach(t),df=s(re,` or\r
    `),Nr=c(re,"CODE",{});var pm=u(Nr);_f=s(pm,"Result"),pm.forEach(t),hf=s(re,`\r
    types. It's a discriminated union that indicates whether\r
    `),Rr=c(re,"CODE",{});var mm=u(Rr);bf=s(mm,"quitable"),mm.forEach(t),wf=s(re,` returned or quit. In this case, it'll be\r
    `),Vr=c(re,"CODE",{});var dm=u(Vr);yf=s(dm,Nu),dm.forEach(t),vf=s(re,` or\r
    `),qr=c(re,"CODE",{});var _m=u(qr);Ef=s(_m,Ru),_m.forEach(t),gf=s(re,"."),re.forEach(t),Es=_(e),K=c(e,"P",{});var $e=u(K);$f=s($e,"The last piece of the puzzle is "),Lr=c($e,"CODE",{});var hm=u(Lr);Df=s(hm,Vu),hm.forEach(t),xf=s($e,`. It\r
    resolves to `),Sr=c($e,"CODE",{});var bm=u(Sr);kf=s(bm,qu),bm.forEach(t),Pf=s($e,` or\r
    `),Br=c($e,"CODE",{});var wm=u(Br);Cf=s(wm,Lu),wm.forEach(t),Of=s($e,`\r
    depending on whether `),Ur=c($e,"CODE",{});var ym=u(Ur);Tf=s(ym,"quitable"),ym.forEach(t),Af=s($e," returns a promise."),$e.forEach(t),gs=_(e),tn=c(e,"H3",{});var vm=u(tn);If=s(vm,"Error Handling At Scale"),vm.forEach(t),$s=_(e),nn=c(e,"P",{});var Em=u(nn);Nf=s(Em,`In the preceding problem, the difference in error handling solutions might\r
    seem insignificant. Here we'll look at a fleshier example and try to\r
    understand how each approach scales.`),Em.forEach(t),Ds=_(e),I(vt.$$.fragment,e),xs=_(e),G=c(e,"P",{});var De=u(G);Rf=s(De,"The three external functions "),Wr=c(De,"CODE",{});var gm=u(Wr);Vf=s(gm,"c"),gm.forEach(t),qf=s(De,", "),Mr=c(De,"CODE",{});var $m=u(Mr);Lf=s($m,"d"),$m.forEach(t),Sf=s(De,`, and\r
    `),Hr=c(De,"CODE",{});var Dm=u(Hr);Bf=s(Dm,"e"),Dm.forEach(t),Uf=s(De,`\r
    could throw so `),Yr=c(De,"CODE",{});var xm=u(Yr);Wf=s(xm,"main"),xm.forEach(t),Mf=s(De,` catches and logs the exception. In the base\r
    case there is no way to differentiate the three possible failures.`),De.forEach(t),ks=_(e),rn=c(e,"H4",{});var km=u(rn);Hf=s(km,"try-catch"),km.forEach(t),Ps=_(e),ze=c(e,"P",{});var _i=u(ze);Yf=s(_i,"Let's introduce a utility "),jr=c(_i,"CODE",{});var Pm=u(jr);jf=s(Pm,"safe"),Pm.forEach(t),Qf=s(_i,` to catch arbitary exceptions and\r
    throw something specific.`),_i.forEach(t),Cs=_(e),I(Et.$$.fragment,e),Os=_(e),on=c(e,"P",{});var Cm=u(on);Ff=s(Cm,"The diff shows that it's an unobtrusive change."),Cm.forEach(t),Ts=_(e),I(gt.$$.fragment,e),As=_(e),sn=c(e,"P",{});var Om=u(sn);zf=s(Om,"However, no type safety."),Om.forEach(t),Is=_(e),ln=c(e,"H4",{});var Tm=u(ln);Jf=s(Tm,"Return types"),Tm.forEach(t),Ns=_(e),Je=c(e,"P",{});var hi=u(Je);Kf=s(hi,"This time we use a variant of "),Qr=c(hi,"CODE",{});var Am=u(Qr);Gf=s(Am,"safe"),Am.forEach(t),Xf=s(hi,` that catch exceptions and returns\r
    something specific.`),hi.forEach(t),Rs=_(e),I($t.$$.fragment,e),Vs=_(e),we=c(e,"P",{});var On=u(we);Zf=s(On,"Unfortunately now three of the five lines in both "),Fr=c(On,"CODE",{});var Im=u(Fr);ec=s(Im,"a"),Im.forEach(t),tc=s(On,` and\r
    `),zr=c(On,"CODE",{});var Nm=u(zr);nc=s(Nm,"b"),Nm.forEach(t),rc=s(On,` are error handling. It's easy to see how this can get unwieldy\r
    at scale.`),On.forEach(t),qs=_(e),I(Dt.$$.fragment,e),Ls=_(e),an=c(e,"P",{});var Rm=u(an);oc=s(Rm,"But now we have type safety."),Rm.forEach(t),Ss=_(e),fn=c(e,"H4",{});var Vm=u(fn);sc=s(Vm,"notry-ts"),Vm.forEach(t),Bs=_(e),Ke=c(e,"P",{});var bi=u(Ke);ic=s(bi,"Finally, an implementation using "),Jr=c(bi,"CODE",{});var qm=u(Jr);lc=s(qm,"notry"),qm.forEach(t),ac=s(bi,"."),bi.forEach(t),Us=_(e),I(xt.$$.fragment,e),Ws=_(e),Ge=c(e,"P",{});var wi=u(Ge);fc=s(wi,"Apart from the "),Kr=c(wi,"CODE",{});var Lm=u(Kr);cc=s(Lm,"quit"),Lm.forEach(t),uc=s(wi,` parameters, this looks more or less like the\r
    base case.`),wi.forEach(t),Ms=_(e),I(kt.$$.fragment,e),Hs=_(e),Xe=c(e,"P",{});var yi=u(Xe);pc=s(yi,"Admittedly, all those "),Gr=c(yi,"CODE",{});var Sm=u(Gr);mc=s(Sm,Su),Sm.forEach(t),dc=s(yi,` parameters are a bit cumbersome\r
    so, like anything, you should weigh the benefits against the costs.`),yi.forEach(t),Ys=_(e),cn=c(e,"H3",{});var Bm=u(cn);_c=s(Bm,"Comparison"),Bm.forEach(t),js=_(e),un=c(e,"P",{});var Um=u(un);hc=s(Um,"Let's wrap up by looking at what we get from each approach."),Um.forEach(t),Qs=_(e),pn=c(e,"H4",{});var Wm=u(pn);bc=s(Wm,"Type Safety"),Wm.forEach(t),Fs=_(e),ae=c(e,"P",{});var ot=u(ae);wc=s(ot,"None with "),Xr=c(ot,"B",{});var Mm=u(Xr);yc=s(Mm,"try-catch"),Mm.forEach(t),vc=s(ot,` and roughly the same degree with\r
    `),Zr=c(ot,"B",{});var Hm=u(Zr);Ec=s(Hm,"return types"),Hm.forEach(t),gc=s(ot," and "),eo=c(ot,"B",{});var Ym=u(eo);$c=s(Ym,"notry-ts"),Ym.forEach(t),Dc=s(ot,` including the ability to tell at a glance\r
    if and what errors could occur.`),ot.forEach(t),zs=_(e),X=c(e,"P",{});var xe=u(X);xc=s(xe,"The biggest difference is that it's easier to ignore "),to=c(xe,"B",{});var jm=u(to);kc=s(jm,"return types"),jm.forEach(t),Pc=s(xe,`. If\r
    you call a function that normally returns `),no=c(xe,"CODE",{});var Qm=u(no);Cc=s(Qm,"void"),Qm.forEach(t),Oc=s(xe,`, you can easily\r
    forget to check whether an error occurred. This problem only affects\r
    `),ro=c(xe,"B",{});var Fm=u(ro);Tc=s(Fm,"notry-ts"),Fm.forEach(t),Ac=s(xe," where "),oo=c(xe,"CODE",{});var zm=u(oo);Ic=s(zm,"notry"),zm.forEach(t),Nc=s(xe," is called."),xe.forEach(t),Js=_(e),mn=c(e,"H4",{});var Jm=u(mn);Rc=s(Jm,"Developer Experience"),Jm.forEach(t),Ks=_(e),ye=c(e,"P",{});var Tn=u(ye);Vc=s(Tn,"With "),so=c(Tn,"B",{});var Km=u(so);qc=s(Km,"try-catch"),Km.forEach(t),Lc=s(Tn,", you could use a utility like "),io=c(Tn,"CODE",{});var Gm=u(io);Sc=s(Gm,"safe"),Gm.forEach(t),Bc=s(Tn,` to incrementally\r
    improve your error handling done with minimal effect on readability.`),Tn.forEach(t),Gs=_(e),Pt=c(e,"P",{});var vu=u(Pt);lo=c(vu,"B",{});var Xm=u(lo);Uc=s(Xm,"return types"),Xm.forEach(t),Wc=s(vu,` are intuitive since it's natural to associate a function's\r
    return value with its outcome. This solution requires the greatest amount of\r
    code and gains usefulness the more it's used.`),vu.forEach(t),Xs=_(e),Oe=c(e,"P",{});var mo=u(Oe);ao=c(mo,"B",{});var Zm=u(ao);Mc=s(Zm,"notry"),Zm.forEach(t),Hc=s(mo,` has the least intuitive and most sophisticated typing. The\r
    function body's intent remains clear with error handling is mostly out of\r
    view. As with\r
    `),fo=c(mo,"B",{});var ed=u(fo);Yc=s(ed,"return types"),ed.forEach(t),jc=s(mo,", its usefulness is dependent on how widely it's used."),mo.forEach(t),Zs=_(e),dn=c(e,"H3",{});var td=u(dn);Qc=s(td,"Conclusion"),td.forEach(t),ei=_(e),ne=c(e,"P",{class:!0});var st=u(ne);Fc=s(st,`If you care about type safety (why else would you be here), use\r
    `),co=c(st,"B",{});var nd=u(co);zc=s(nd,"return types"),nd.forEach(t),Jc=s(st," or "),uo=c(st,"B",{});var rd=u(uo);Kc=s(rd,"notry"),rd.forEach(t),Gc=s(st,". Choose "),po=c(st,"B",{});var od=u(po);Xc=s(od,"notry"),od.forEach(t),Zc=s(st,` for added readability\r
    and safety at the cost of complexity.`),st.forEach(t),ti=_(e),_n=c(e,"H3",{});var sd=u(_n);eu=s(sd,"Resources"),sd.forEach(t),ni=_(e),Te=c(e,"DIV",{class:!0});var vi=u(Te);hn=c(vi,"SMALL",{class:!0});var id=u(hn);tu=s(id,"package"),id.forEach(t),nu=_(vi),Ze=c(vi,"A",{href:!0,target:!0,rel:!0});var ld=u(Ze);ru=s(ld,"notry-ts"),ld.forEach(t),vi.forEach(t),ri=_(e),Ae=c(e,"DIV",{class:!0});var Ei=u(Ae);bn=c(Ei,"SMALL",{class:!0});var ad=u(bn);ou=s(ad,"package"),ad.forEach(t),su=_(Ei),et=c(Ei,"A",{href:!0,target:!0,rel:!0});var fd=u(et);iu=s(fd,"neverthrow"),fd.forEach(t),Ei.forEach(t),oi=_(e),Ie=c(e,"DIV",{class:!0});var gi=u(Ie);wn=c(gi,"SMALL",{class:!0});var cd=u(wn);lu=s(cd,"package"),cd.forEach(t),au=_(gi),tt=c(gi,"A",{href:!0,target:!0,rel:!0});var ud=u(tt);fu=s(ud,"type-safe-errors"),ud.forEach(t),gi.forEach(t),si=_(e),Ne=c(e,"DIV",{class:!0});var $i=u(Ne);yn=c($i,"SMALL",{class:!0});var pd=u(yn);cu=s(pd,"article"),pd.forEach(t),uu=_($i),Re=c($i,"A",{href:!0,class:!0,target:!0,rel:!0});var md=u(Re);pu=s(md,"Type-Safe Error Handling In TypeScript"),md.forEach(t),$i.forEach(t),ii=_(e),Ve=c(e,"DIV",{class:!0});var Di=u(Ve);vn=c(Di,"SMALL",{class:!0});var dd=u(vn);mu=s(dd,"article"),dd.forEach(t),du=_(Di),qe=c(Di,"A",{href:!0,class:!0,target:!0,rel:!0});var _d=u(qe);_u=s(_d,"Functional Error Handling"),_d.forEach(t),Di.forEach(t),li=_(e),Le=c(e,"DIV",{class:!0});var xi=u(Le);En=c(xi,"SMALL",{class:!0});var hd=u(En);hu=s(hd,"article"),hd.forEach(t),bu=_(xi),Se=c(xi,"A",{href:!0,class:!0,target:!0,rel:!0});var bd=u(Se);wu=s(bd,"TypeScript / Implement Rust-style Result"),bd.forEach(t),xi.forEach(t),this.h()},h(){E(ne,"class","padding-bottom-large"),E(hn,"class","text-muted"),E(Ze,"href","https://github.com/nmacmunn/notry"),E(Ze,"target","_blank"),E(Ze,"rel","noreferrer"),E(Te,"class","margin-bottom"),E(bn,"class","text-muted"),E(et,"href","https://github.com/supermacro/neverthrow"),E(et,"target","_blank"),E(et,"rel","noreferrer"),E(Ae,"class","margin-bottom"),E(wn,"class","text-muted"),E(tt,"href","https://github.com/wiktor-obrebski/type-safe-errors"),E(tt,"target","_blank"),E(tt,"rel","noreferrer"),E(Ie,"class","margin-bottom"),E(yn,"class","text-muted"),E(Re,"href","https://dev.to/_gdelgado/type-safe-error-handling-in-typescript-1p4n"),E(Re,"class","success"),E(Re,"target","_blank"),E(Re,"rel","noreferrer"),E(Ne,"class","margin-bottom"),E(vn,"class","text-muted"),E(qe,"href","https://khalilstemmler.com/articles/enterprise-typescript-nodejs/functional-error-handling/"),E(qe,"class","success"),E(qe,"target","_blank"),E(qe,"rel","noreferrer"),E(Ve,"class","margin-bottom"),E(En,"class","text-muted"),E(Se,"href","https://www.huy.rocks/everyday/typescript-implement-rust-style-result"),E(Se,"class","success"),E(Se,"target","_blank"),E(Se,"rel","noreferrer"),E(Le,"class","margin-bottom")},m(e,a){p(e,r,a),n(r,l),n(r,m),n(m,h),n(r,b),p(e,w,a),N(g,e,a),p(e,C,a),p(e,y,a),n(y,T),n(y,U),n(U,Q),n(y,W),p(e,L,a),p(e,se,a),n(se,We),p(e,Z,a),N($,e,a),p(e,P,a),p(e,O,a),n(O,D),p(e,H,a),N(S,e,a),p(e,k,a),p(e,B,a),n(B,Me),n(B,pe),n(pe,At),n(B,It),n(B,ee),n(ee,Ii),n(B,Ni),p(e,Eo,a),p(e,Nt,a),n(Nt,Ri),p(e,go,a),p(e,Rt,a),n(Rt,Vi),p(e,$o,a),p(e,Vt,a),n(Vt,qi),p(e,Do,a),p(e,qt,a),n(qt,Li),p(e,xo,a),p(e,He,a),n(He,Si),n(He,Nn),n(Nn,Bi),n(He,Ui),p(e,ko,a),p(e,Lt,a),n(Lt,Wi),p(e,Po,a),p(e,St,a),n(St,Mi),p(e,Co,a),p(e,Bt,a),n(Bt,Hi),p(e,Oo,a),p(e,Ut,a),n(Ut,Yi),p(e,To,a),p(e,Wt,a),n(Wt,ji),p(e,Ao,a),p(e,Mt,a),n(Mt,Qi),p(e,Io,a),p(e,Ht,a),n(Ht,Fi),p(e,No,a),p(e,me,a),n(me,Rn),n(Rn,zi),n(me,Ji),n(me,Vn),n(Vn,Ki),n(me,Gi),n(me,qn),n(qn,Xi),p(e,Ro,a),p(e,Yt,a),n(Yt,Zi),p(e,Vo,a),p(e,jt,a),n(jt,el),p(e,qo,a),p(e,Qt,a),n(Qt,tl),p(e,Lo,a),p(e,Ft,a),n(Ft,nl),p(e,So,a),N(lt,e,a),p(e,Bo,a),p(e,F,a),n(F,rl),n(F,Ln),n(Ln,ol),n(F,sl),n(F,Sn),n(Sn,il),n(F,ll),n(F,Bn),n(Bn,al),n(F,fl),n(F,Un),n(Un,cl),n(F,ul),p(e,Uo,a),p(e,zt,a),n(zt,pl),p(e,Wo,a),p(e,Ye,a),n(Ye,ml),n(Ye,Wn),n(Wn,dl),n(Ye,_l),p(e,Mo,a),N(at,e,a),p(e,Ho,a),p(e,de,a),n(de,hl),n(de,Mn),n(Mn,bl),n(de,wl),n(de,Hn),n(Hn,yl),n(de,vl),p(e,Yo,a),p(e,Jt,a),n(Jt,El),p(e,jo,a),p(e,ie,a),n(ie,Ce),n(Ce,gl),n(Ce,Yn),n(Yn,$l),n(Ce,Dl),n(Ce,jn),n(jn,xl),n(Ce,kl),n(ie,Pl),n(ie,Qn),n(Qn,Cl),n(ie,Ol),n(ie,Fn),n(Fn,Tl),n(ie,Al),n(ie,Kt),n(Kt,Il),n(Kt,zn),n(zn,Nl),p(e,Qo,a),p(e,Gt,a),n(Gt,Rl),p(e,Fo,a),p(e,Xt,a),n(Xt,Vl),p(e,zo,a),p(e,z,a),n(z,ql),n(z,Jn),n(Jn,Ll),n(z,Sl),n(z,Kn),n(Kn,Bl),n(z,Ul),n(z,Gn),n(Gn,Wl),n(z,Ml),n(z,Xn),n(Xn,Hl),n(z,Yl),p(e,Jo,a),N(ft,e,a),p(e,Ko,a),p(e,Zt,a),n(Zt,jl),p(e,Go,a),p(e,je,a),n(je,Ql),n(je,Zn),n(Zn,Fl),n(je,zl),p(e,Xo,a),N(ct,e,a),p(e,Zo,a),p(e,ce,a),n(ce,er),n(er,Jl),n(ce,Kl),n(ce,tr),n(tr,Gl),n(ce,Xl),n(ce,nr),n(nr,Zl),n(ce,ea),p(e,es,a),N(ut,e,a),p(e,ts,a),p(e,te,a),n(te,rr),n(rr,ta),n(te,na),n(te,or),n(or,ra),n(te,oa),n(te,sr),n(sr,sa),n(te,ia),n(te,ir),n(ir,la),n(te,aa),p(e,ns,a),N(pt,e,a),p(e,rs,a),p(e,Qe,a),n(Qe,fa),n(Qe,lr),n(lr,ca),n(Qe,ua),p(e,os,a),p(e,le,a),n(le,pa),n(le,ar),n(ar,ma),n(le,da),n(le,fr),n(fr,_a),n(le,ha),n(le,cr),n(cr,ba),n(le,wa),p(e,ss,a),N(mt,e,a),p(e,is,a),p(e,_e,a),n(_e,ya),n(_e,ur),n(ur,va),n(_e,Ea),n(_e,pr),n(pr,ga),n(_e,$a),p(e,ls,a),N(dt,e,a),p(e,as,a),p(e,ue,a),n(ue,mr),n(mr,Da),n(ue,xa),n(ue,dr),n(dr,ka),n(ue,Pa),n(ue,_r),n(_r,Ca),n(ue,Oa),p(e,fs,a),N(_t,e,a),p(e,cs,a),p(e,J,a),n(J,Ta),n(J,hr),n(hr,Aa),n(J,Ia),n(J,br),n(br,Na),n(J,Ra),n(J,wr),n(wr,Va),n(J,qa),n(J,yr),n(yr,La),n(J,Sa),p(e,us,a),N(ht,e,a),p(e,ps,a),p(e,en,a),n(en,vr),n(vr,Ba),p(e,ms,a),p(e,Fe,a),n(Fe,Ua),n(Fe,Er),n(Er,Wa),n(Fe,Ma),p(e,ds,a),N(bt,e,a),p(e,_s,a),p(e,he,a),n(he,Ha),n(he,gr),n(gr,Ya),n(he,ja),n(he,$r),n($r,Qa),n(he,Fa),p(e,hs,a),p(e,be,a),n(be,za),n(be,Dr),n(Dr,Ja),n(be,Ka),n(be,xr),n(xr,Ga),n(be,Xa),p(e,bs,a),N(wt,e,a),p(e,ws,a),p(e,j,a),n(j,Za),n(j,kr),n(kr,ef),n(j,tf),n(j,Pr),n(Pr,nf),n(j,rf),n(j,Cr),n(Cr,of),n(j,sf),n(j,Or),n(Or,lf),n(j,af),n(j,Tr),n(Tr,ff),n(j,cf),p(e,ys,a),N(yt,e,a),p(e,vs,a),p(e,Y,a),n(Y,Ar),n(Ar,uf),n(Y,pf),n(Y,Ir),n(Ir,mf),n(Y,df),n(Y,Nr),n(Nr,_f),n(Y,hf),n(Y,Rr),n(Rr,bf),n(Y,wf),n(Y,Vr),n(Vr,yf),n(Y,vf),n(Y,qr),n(qr,Ef),n(Y,gf),p(e,Es,a),p(e,K,a),n(K,$f),n(K,Lr),n(Lr,Df),n(K,xf),n(K,Sr),n(Sr,kf),n(K,Pf),n(K,Br),n(Br,Cf),n(K,Of),n(K,Ur),n(Ur,Tf),n(K,Af),p(e,gs,a),p(e,tn,a),n(tn,If),p(e,$s,a),p(e,nn,a),n(nn,Nf),p(e,Ds,a),N(vt,e,a),p(e,xs,a),p(e,G,a),n(G,Rf),n(G,Wr),n(Wr,Vf),n(G,qf),n(G,Mr),n(Mr,Lf),n(G,Sf),n(G,Hr),n(Hr,Bf),n(G,Uf),n(G,Yr),n(Yr,Wf),n(G,Mf),p(e,ks,a),p(e,rn,a),n(rn,Hf),p(e,Ps,a),p(e,ze,a),n(ze,Yf),n(ze,jr),n(jr,jf),n(ze,Qf),p(e,Cs,a),N(Et,e,a),p(e,Os,a),p(e,on,a),n(on,Ff),p(e,Ts,a),N(gt,e,a),p(e,As,a),p(e,sn,a),n(sn,zf),p(e,Is,a),p(e,ln,a),n(ln,Jf),p(e,Ns,a),p(e,Je,a),n(Je,Kf),n(Je,Qr),n(Qr,Gf),n(Je,Xf),p(e,Rs,a),N($t,e,a),p(e,Vs,a),p(e,we,a),n(we,Zf),n(we,Fr),n(Fr,ec),n(we,tc),n(we,zr),n(zr,nc),n(we,rc),p(e,qs,a),N(Dt,e,a),p(e,Ls,a),p(e,an,a),n(an,oc),p(e,Ss,a),p(e,fn,a),n(fn,sc),p(e,Bs,a),p(e,Ke,a),n(Ke,ic),n(Ke,Jr),n(Jr,lc),n(Ke,ac),p(e,Us,a),N(xt,e,a),p(e,Ws,a),p(e,Ge,a),n(Ge,fc),n(Ge,Kr),n(Kr,cc),n(Ge,uc),p(e,Ms,a),N(kt,e,a),p(e,Hs,a),p(e,Xe,a),n(Xe,pc),n(Xe,Gr),n(Gr,mc),n(Xe,dc),p(e,Ys,a),p(e,cn,a),n(cn,_c),p(e,js,a),p(e,un,a),n(un,hc),p(e,Qs,a),p(e,pn,a),n(pn,bc),p(e,Fs,a),p(e,ae,a),n(ae,wc),n(ae,Xr),n(Xr,yc),n(ae,vc),n(ae,Zr),n(Zr,Ec),n(ae,gc),n(ae,eo),n(eo,$c),n(ae,Dc),p(e,zs,a),p(e,X,a),n(X,xc),n(X,to),n(to,kc),n(X,Pc),n(X,no),n(no,Cc),n(X,Oc),n(X,ro),n(ro,Tc),n(X,Ac),n(X,oo),n(oo,Ic),n(X,Nc),p(e,Js,a),p(e,mn,a),n(mn,Rc),p(e,Ks,a),p(e,ye,a),n(ye,Vc),n(ye,so),n(so,qc),n(ye,Lc),n(ye,io),n(io,Sc),n(ye,Bc),p(e,Gs,a),p(e,Pt,a),n(Pt,lo),n(lo,Uc),n(Pt,Wc),p(e,Xs,a),p(e,Oe,a),n(Oe,ao),n(ao,Mc),n(Oe,Hc),n(Oe,fo),n(fo,Yc),n(Oe,jc),p(e,Zs,a),p(e,dn,a),n(dn,Qc),p(e,ei,a),p(e,ne,a),n(ne,Fc),n(ne,co),n(co,zc),n(ne,Jc),n(ne,uo),n(uo,Kc),n(ne,Gc),n(ne,po),n(po,Xc),n(ne,Zc),p(e,ti,a),p(e,_n,a),n(_n,eu),p(e,ni,a),p(e,Te,a),n(Te,hn),n(hn,tu),n(Te,nu),n(Te,Ze),n(Ze,ru),p(e,ri,a),p(e,Ae,a),n(Ae,bn),n(bn,ou),n(Ae,su),n(Ae,et),n(et,iu),p(e,oi,a),p(e,Ie,a),n(Ie,wn),n(wn,lu),n(Ie,au),n(Ie,tt),n(tt,fu),p(e,si,a),p(e,Ne,a),n(Ne,yn),n(yn,cu),n(Ne,uu),n(Ne,Re),n(Re,pu),p(e,ii,a),p(e,Ve,a),n(Ve,vn),n(vn,mu),n(Ve,du),n(Ve,qe),n(qe,_u),p(e,li,a),p(e,Le,a),n(Le,En),n(En,hu),n(Le,bu),n(Le,Se),n(Se,wu),ai=!0},p:Cu,i(e){ai||(R(g.$$.fragment,e),R($.$$.fragment,e),R(S.$$.fragment,e),R(lt.$$.fragment,e),R(at.$$.fragment,e),R(ft.$$.fragment,e),R(ct.$$.fragment,e),R(ut.$$.fragment,e),R(pt.$$.fragment,e),R(mt.$$.fragment,e),R(dt.$$.fragment,e),R(_t.$$.fragment,e),R(ht.$$.fragment,e),R(bt.$$.fragment,e),R(wt.$$.fragment,e),R(yt.$$.fragment,e),R(vt.$$.fragment,e),R(Et.$$.fragment,e),R(gt.$$.fragment,e),R($t.$$.fragment,e),R(Dt.$$.fragment,e),R(xt.$$.fragment,e),R(kt.$$.fragment,e),ai=!0)},o(e){V(g.$$.fragment,e),V($.$$.fragment,e),V(S.$$.fragment,e),V(lt.$$.fragment,e),V(at.$$.fragment,e),V(ft.$$.fragment,e),V(ct.$$.fragment,e),V(ut.$$.fragment,e),V(pt.$$.fragment,e),V(mt.$$.fragment,e),V(dt.$$.fragment,e),V(_t.$$.fragment,e),V(ht.$$.fragment,e),V(bt.$$.fragment,e),V(wt.$$.fragment,e),V(yt.$$.fragment,e),V(vt.$$.fragment,e),V(Et.$$.fragment,e),V(gt.$$.fragment,e),V($t.$$.fragment,e),V(Dt.$$.fragment,e),V(xt.$$.fragment,e),V(kt.$$.fragment,e),ai=!1},d(e){e&&t(r),e&&t(w),q(g,e),e&&t(C),e&&t(y),e&&t(L),e&&t(se),e&&t(Z),q($,e),e&&t(P),e&&t(O),e&&t(H),q(S,e),e&&t(k),e&&t(B),e&&t(Eo),e&&t(Nt),e&&t(go),e&&t(Rt),e&&t($o),e&&t(Vt),e&&t(Do),e&&t(qt),e&&t(xo),e&&t(He),e&&t(ko),e&&t(Lt),e&&t(Po),e&&t(St),e&&t(Co),e&&t(Bt),e&&t(Oo),e&&t(Ut),e&&t(To),e&&t(Wt),e&&t(Ao),e&&t(Mt),e&&t(Io),e&&t(Ht),e&&t(No),e&&t(me),e&&t(Ro),e&&t(Yt),e&&t(Vo),e&&t(jt),e&&t(qo),e&&t(Qt),e&&t(Lo),e&&t(Ft),e&&t(So),q(lt,e),e&&t(Bo),e&&t(F),e&&t(Uo),e&&t(zt),e&&t(Wo),e&&t(Ye),e&&t(Mo),q(at,e),e&&t(Ho),e&&t(de),e&&t(Yo),e&&t(Jt),e&&t(jo),e&&t(ie),e&&t(Qo),e&&t(Gt),e&&t(Fo),e&&t(Xt),e&&t(zo),e&&t(z),e&&t(Jo),q(ft,e),e&&t(Ko),e&&t(Zt),e&&t(Go),e&&t(je),e&&t(Xo),q(ct,e),e&&t(Zo),e&&t(ce),e&&t(es),q(ut,e),e&&t(ts),e&&t(te),e&&t(ns),q(pt,e),e&&t(rs),e&&t(Qe),e&&t(os),e&&t(le),e&&t(ss),q(mt,e),e&&t(is),e&&t(_e),e&&t(ls),q(dt,e),e&&t(as),e&&t(ue),e&&t(fs),q(_t,e),e&&t(cs),e&&t(J),e&&t(us),q(ht,e),e&&t(ps),e&&t(en),e&&t(ms),e&&t(Fe),e&&t(ds),q(bt,e),e&&t(_s),e&&t(he),e&&t(hs),e&&t(be),e&&t(bs),q(wt,e),e&&t(ws),e&&t(j),e&&t(ys),q(yt,e),e&&t(vs),e&&t(Y),e&&t(Es),e&&t(K),e&&t(gs),e&&t(tn),e&&t($s),e&&t(nn),e&&t(Ds),q(vt,e),e&&t(xs),e&&t(G),e&&t(ks),e&&t(rn),e&&t(Ps),e&&t(ze),e&&t(Cs),q(Et,e),e&&t(Os),e&&t(on),e&&t(Ts),q(gt,e),e&&t(As),e&&t(sn),e&&t(Is),e&&t(ln),e&&t(Ns),e&&t(Je),e&&t(Rs),q($t,e),e&&t(Vs),e&&t(we),e&&t(qs),q(Dt,e),e&&t(Ls),e&&t(an),e&&t(Ss),e&&t(fn),e&&t(Bs),e&&t(Ke),e&&t(Us),q(xt,e),e&&t(Ws),e&&t(Ge),e&&t(Ms),q(kt,e),e&&t(Hs),e&&t(Xe),e&&t(Ys),e&&t(cn),e&&t(js),e&&t(un),e&&t(Qs),e&&t(pn),e&&t(Fs),e&&t(ae),e&&t(zs),e&&t(X),e&&t(Js),e&&t(mn),e&&t(Ks),e&&t(ye),e&&t(Gs),e&&t(Pt),e&&t(Xs),e&&t(Oe),e&&t(Zs),e&&t(dn),e&&t(ei),e&&t(ne),e&&t(ti),e&&t(_n),e&&t(ni),e&&t(Te),e&&t(ri),e&&t(Ae),e&&t(oi),e&&t(Ie),e&&t(si),e&&t(Ne),e&&t(ii),e&&t(Ve),e&&t(li),e&&t(Le)}}}function C_(i){let r,l,m;return{c(){r=f("a"),l=o("notry-ts"),m=o(" is a type safe error handling alternative to try-catch"),this.h()},l(h){r=c(h,"A",{href:!0,target:!0,rel:!0});var b=u(r);l=s(b,"notry-ts"),b.forEach(t),m=s(h," is a type safe error handling alternative to try-catch"),this.h()},h(){E(r,"href","https://github.com/nmacmunn/notry"),E(r,"target","_blank"),E(r,"rel","noreferrer")},m(h,b){p(h,r,b),n(r,l),p(h,m,b)},p:Cu,d(h){h&&t(r),h&&t(m)}}}function O_(i){let r,l,m,h;return m=new Qd({props:{title:T_,date:i[0],$$slots:{tldr:[C_],default:[P_]},$$scope:{ctx:i}}}),{c(){r=f("meta"),l=d(),A(m.$$.fragment),this.h()},l(b){const w=Wd("svelte-7fsaef",document.head);r=c(w,"META",{name:!0,content:!0}),w.forEach(t),l=_(b),I(m.$$.fragment,b),this.h()},h(){document.title="TypeScripting Try-Catch",E(r,"name","description"),E(r,"content","An exploration of type safe error-handling alternatives to try-catch in TypeScript.")},m(b,w){n(document.head,r),p(b,l,w),N(m,b,w),h=!0},p(b,[w]){const g={};w&1024&&(g.$$scope={dirty:w,ctx:b}),m.$set(g)},i(b){h||(R(m.$$.fragment,b),h=!0)},o(b){V(m.$$.fragment,b),h=!1},d(b){t(r),b&&t(l),q(m,b)}}}const T_="TypeScripting Try-Catch",A_='quit.unless(person, { type: "UserError", message: `${name} not found` });';function I_(i){return[new Date("February 25, 2023"),'type Why = { type: "UserError"; message: string } | { type: "DevError" };',"function getPerson(quit: Quit<Why>, name: string): Person",`quit({ type: "UserError", message: "message" }); 
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
  | { y: never; n: { val: N; exception: unknown } };`]}class L_ extends Du{constructor(r){super(),xu(this,r,I_,O_,ku,{})}}export{L_ as default};
