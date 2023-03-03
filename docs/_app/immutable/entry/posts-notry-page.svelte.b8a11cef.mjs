import{S as xu,i as ku,s as Pu,y as A,a as _,k as f,z as I,c as h,l as c,m as u,h as t,n as E,A as N,b as p,D as n,L as Cu,H as Ou,g as R,d as V,B as q,o as Vd,w as Md,q as o,r as s,p as Hd,O as vd,e as Ed,K as gd,u as qd,J as Yd}from"../chunks/index.35744c98.mjs";import{_ as Ld}from"../chunks/preload-helper.41c905a7.mjs";import{I as jd,M as Qd,d as Fd}from"../chunks/monaco.364d91ab.mjs";import{S as ke}from"../chunks/snippet.93635277.mjs";import{A as zd}from"../chunks/article.43676c1c.mjs";function Jd(i){let r,l,m,d,b,w,g,C;return r=new jd({}),{c(){A(r.$$.fragment),l=_(),m=f("div"),d=f("div"),b=f("div"),this.h()},l(y){I(r.$$.fragment,y),l=h(y),m=c(y,"DIV",{class:!0});var T=u(m);d=c(T,"DIV",{class:!0});var U=u(d);b=c(U,"DIV",{}),u(b).forEach(t),U.forEach(t),T.forEach(t),this.h()},h(){E(d,"class","card-body"),E(m,"class","card margin-bottom-large")},m(y,T){N(r,y,T),p(y,l,T),p(y,m,T),n(m,d),n(d,b),i[4](b),w=!0,g||(C=Cu(window,"resize",i[1]),g=!0)},p:Ou,i(y){w||(R(r.$$.fragment,y),w=!0)},o(y){V(r.$$.fragment,y),w=!1},d(y){q(r,y),y&&t(l),y&&t(m),i[4](null),g=!1,C()}}}function Kd(i,r,l){let{original:m}=r,{modified:d}=r,b,w;function g(){if(!w)return;const y=Math.min(1e3,Math.max(w.getOriginalEditor().getContentHeight(),w.getModifiedEditor().getContentHeight())+20);l(0,b.style.height=`${y}px`,b);const{width:T}=b.getBoundingClientRect();w.layout({width:T,height:y})}Vd(async()=>{const y=await Ld(()=>import("../chunks/editor.main.0a978303.mjs").then(U=>U.e),["..\\chunks\\editor.main.0a978303.mjs","..\\chunks\\preload-helper.41c905a7.mjs","..\\assets\\editor.911c6360.css"],import.meta.url),T=document.body.clientWidth>=640;return w=y.editor.createDiffEditor(b,{fontSize:T?14:12,minimap:{enabled:!1},overviewRulerLanes:0,readOnly:!0,renderSideBySide:T,scrollBeyondLastLine:!1}),w.setModel({original:y.editor.createModel(m,"typescript"),modified:y.editor.createModel(d,"typescript")}),g(),()=>w==null?void 0:w.dispose()});function C(y){Md[y?"unshift":"push"](()=>{b=y,l(0,b)})}return i.$$set=y=>{"original"in y&&l(2,m=y.original),"modified"in y&&l(3,d=y.modified)},[b,g,m,d,C]}class gu extends xu{constructor(r){super(),ku(this,r,Kd,Jd,Pu,{original:2,modified:3})}}let M;const Sd=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Sd.decode();let bo=null;function Ti(){return(bo===null||bo.byteLength===0)&&(bo=new Uint8Array(M.memory.buffer)),bo}function Ai(i,r){return Sd.decode(Ti().subarray(i,i+r))}const Ue=new Array(128).fill(void 0);Ue.push(void 0,null,!0,!1);let Eo=Ue.length;function x(i){Eo===Ue.length&&Ue.push(Ue.length+1);const r=Eo;return Eo=Ue[r],Ue[r]=i,r}function v(i){return Ue[i]}function Gd(i){i<132||(Ue[i]=Eo,Eo=i)}function Tt(i){const r=v(i);return Gd(i),r}let Nn=0;const Ii=new TextEncoder("utf-8"),Xd=typeof Ii.encodeInto=="function"?function(i,r){return Ii.encodeInto(i,r)}:function(i,r){const l=Ii.encode(i);return r.set(l),{read:i.length,written:l.length}};function Pi(i,r,l){if(l===void 0){const g=Ii.encode(i),C=r(g.length);return Ti().subarray(C,C+g.length).set(g),Nn=g.length,C}let m=i.length,d=r(m);const b=Ti();let w=0;for(;w<m;w++){const g=i.charCodeAt(w);if(g>127)break;b[d+w]=g}if(w!==m){w!==0&&(i=i.slice(w)),d=l(d,m,m=w+i.length*3);const g=Ti().subarray(d+w,d+m),C=Xd(i,g);w+=C.written}return Nn=w,d}function ho(i){return i==null}let wo=null;function oe(){return(wo===null||wo.byteLength===0)&&(wo=new Int32Array(M.memory.buffer)),wo}let yo=null;function Zd(){return(yo===null||yo.byteLength===0)&&(yo=new BigInt64Array(M.memory.buffer)),yo}let vo=null;function e_(){return(vo===null||vo.byteLength===0)&&(vo=new Float64Array(M.memory.buffer)),vo}function Du(i){const r=typeof i;if(r=="number"||r=="boolean"||i==null)return`${i}`;if(r=="string")return`"${i}"`;if(r=="symbol"){const d=i.description;return d==null?"Symbol":`Symbol(${d})`}if(r=="function"){const d=i.name;return typeof d=="string"&&d.length>0?`Function(${d})`:"Function"}if(Array.isArray(i)){const d=i.length;let b="[";d>0&&(b+=Du(i[0]));for(let w=1;w<d;w++)b+=", "+Du(i[w]);return b+="]",b}const l=/\[object ([^\]]+)\]/.exec(toString.call(i));let m;if(l.length>1)m=l[1];else return toString.call(i);if(m=="Object")try{return"Object("+JSON.stringify(i)+")"}catch{return"Object"}return i instanceof Error?`${i.name}: ${i.message}
${i.stack}`:m}function t_(i,r,l,m){const d={a:i,b:r,cnt:1,dtor:l},b=(...w)=>{d.cnt++;const g=d.a;d.a=0;try{return m(g,d.b,...w)}finally{--d.cnt===0?M.__wbindgen_export_2.get(d.dtor)(g,d.b):d.a=g}};return b.original=d,b}function n_(i,r,l){M.__wbindgen_export_3(i,r,x(l))}function r_(i,r,l){try{const w=M.__wbindgen_add_to_stack_pointer(-16);M.transformSync(w,x(i),x(r),x(l));var m=oe()[w/4+0],d=oe()[w/4+1],b=oe()[w/4+2];if(b)throw Tt(d);return Tt(m)}finally{M.__wbindgen_add_to_stack_pointer(16)}}function $d(i,r){return i===0?v(r):Ai(i,r)}function it(i,r){try{return i.apply(this,r)}catch(l){M.__wbindgen_export_5(x(l))}}function o_(i,r,l,m){M.__wbindgen_export_6(i,r,x(l),x(m))}async function s_(i,r){if(typeof Response=="function"&&i instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(i,r)}catch(m){if(i.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",m);else throw m}const l=await i.arrayBuffer();return await WebAssembly.instantiate(l,r)}else{const l=await WebAssembly.instantiate(i,r);return l instanceof WebAssembly.Instance?{instance:l,module:i}:l}}function i_(){const i={};return i.wbg={},i.wbg.__wbg_new_f9876326328f45ed=function(){const r=new Object;return x(r)},i.wbg.__wbindgen_string_new=function(r,l){const m=Ai(r,l);return x(m)},i.wbg.__wbg_set_20cbc34131e76824=function(r,l,m){v(r)[Tt(l)]=Tt(m)},i.wbg.__wbindgen_object_drop_ref=function(r){Tt(r)},i.wbg.__wbindgen_number_new=function(r){return x(r)},i.wbg.__wbg_new_b525de17f44a8943=function(){const r=new Array;return x(r)},i.wbg.__wbg_set_17224bc548dd1d7b=function(r,l,m){v(r)[l>>>0]=Tt(m)},i.wbg.__wbindgen_string_get=function(r,l){const m=v(l),d=typeof m=="string"?m:void 0;var b=ho(d)?0:Pi(d,M.__wbindgen_export_0,M.__wbindgen_export_1),w=Nn;oe()[r/4+1]=w,oe()[r/4+0]=b},i.wbg.__wbindgen_jsval_loose_eq=function(r,l){return v(r)==v(l)},i.wbg.__wbindgen_error_new=function(r,l){const m=new Error(Ai(r,l));return x(m)},i.wbg.__wbindgen_is_string=function(r){return typeof v(r)=="string"},i.wbg.__wbindgen_is_object=function(r){const l=v(r);return typeof l=="object"&&l!==null},i.wbg.__wbg_entries_4e1315b774245952=function(r){const l=Object.entries(v(r));return x(l)},i.wbg.__wbg_length_e498fbc24f9c1d4f=function(r){return v(r).length},i.wbg.__wbg_get_27fe3dac1c4d0224=function(r,l){const m=v(r)[l>>>0];return x(m)},i.wbg.__wbg_getwithrefkey_15c62c2b8546208d=function(r,l){const m=v(r)[v(l)];return x(m)},i.wbg.__wbindgen_is_undefined=function(r){return v(r)===void 0},i.wbg.__wbindgen_in=function(r,l){return v(r)in v(l)},i.wbg.__wbg_set_388c4c6422704173=function(r,l,m){const d=v(r).set(v(l),v(m));return x(d)},i.wbg.__wbindgen_boolean_get=function(r){const l=v(r);return typeof l=="boolean"?l?1:0:2},i.wbg.__wbindgen_is_bigint=function(r){return typeof v(r)=="bigint"},i.wbg.__wbindgen_bigint_get_as_i64=function(r,l){const m=v(l),d=typeof m=="bigint"?m:void 0;Zd()[r/8+1]=ho(d)?BigInt(0):d,oe()[r/4+0]=!ho(d)},i.wbg.__wbindgen_bigint_from_i64=function(r){return x(r)},i.wbg.__wbindgen_jsval_eq=function(r,l){return v(r)===v(l)},i.wbg.__wbindgen_number_get=function(r,l){const m=v(l),d=typeof m=="number"?m:void 0;e_()[r/8+1]=ho(d)?0:d,oe()[r/4+0]=!ho(d)},i.wbg.__wbg_isSafeInteger_8c4789029e885159=function(r){return Number.isSafeInteger(v(r))},i.wbg.__wbg_isArray_39d28997bf6b96b4=function(r){return Array.isArray(v(r))},i.wbg.__wbg_iterator_55f114446221aa5a=function(){return x(Symbol.iterator)},i.wbg.__wbindgen_bigint_from_u64=function(r){const l=BigInt.asUintN(64,r);return x(l)},i.wbg.__wbg_new_f841cc6f2098f4b5=function(){return x(new Map)},i.wbg.__wbg_call_9495de66fdbe016b=function(){return it(function(r,l,m){const d=v(r).call(v(l),v(m));return x(d)},arguments)},i.wbg.__wbindgen_is_null=function(r){return v(r)===null},i.wbg.__wbg_next_88560ec06a094dea=function(){return it(function(r){const l=v(r).next();return x(l)},arguments)},i.wbg.__wbg_done_1ebec03bbd919843=function(r){return v(r).done},i.wbg.__wbg_value_6ac8da5cc5b3efda=function(r){const l=v(r).value;return x(l)},i.wbg.__wbg_new_9d3a9ce4282a18a8=function(r,l){try{var m={a:r,b:l},d=(w,g)=>{const C=m.a;m.a=0;try{return o_(C,m.b,w,g)}finally{m.a=C}};const b=new Promise(d);return x(b)}finally{m.a=m.b=0}},i.wbg.__wbg_new0_25059e40b1c02766=function(){const r=new Date;return x(r)},i.wbg.__wbg_getTimezoneOffset_2a6b27fb18493a56=function(r){return v(r).getTimezoneOffset()},i.wbg.__wbg_self_e7c1f827057f6584=function(){return it(function(){const r=self.self;return x(r)},arguments)},i.wbg.__wbg_window_a09ec664e14b1b81=function(){return it(function(){const r=window.window;return x(r)},arguments)},i.wbg.__wbg_globalThis_87cbb8506fecf3a9=function(){return it(function(){const r=globalThis.globalThis;return x(r)},arguments)},i.wbg.__wbg_global_c85a9259e621f3db=function(){return it(function(){const r=global.global;return x(r)},arguments)},i.wbg.__wbg_newnoargs_2b8b6bd7753c76ba=function(r,l){var m=$d(r,l);const d=new Function(m);return x(d)},i.wbg.__wbg_call_95d1ea488d03e4e8=function(){return it(function(r,l){const m=v(r).call(v(l));return x(m)},arguments)},i.wbg.__wbindgen_object_clone_ref=function(r){const l=v(r);return x(l)},i.wbg.__wbg_get_baf4855f9a986186=function(){return it(function(r,l){const m=Reflect.get(v(r),v(l));return x(m)},arguments)},i.wbg.__wbg_getTime_7c59072d1651a3cf=function(r){return v(r).getTime()},i.wbg.__wbg_new_abda76e883ba8a5f=function(){const r=new Error;return x(r)},i.wbg.__wbg_stack_658279fe44541cf6=function(r,l){const m=v(l).stack,d=Pi(m,M.__wbindgen_export_0,M.__wbindgen_export_1),b=Nn;oe()[r/4+1]=b,oe()[r/4+0]=d},i.wbg.__wbg_error_f851667af71bcfc6=function(r,l){var m=$d(r,l);r!==0&&M.__wbindgen_export_4(r,l),console.error(m)},i.wbg.__wbindgen_is_function=function(r){return typeof v(r)=="function"},i.wbg.__wbg_next_b7d530c04fd8b217=function(r){const l=v(r).next;return x(l)},i.wbg.__wbg_length_27a2afe8ab42b09f=function(r){return v(r).length},i.wbg.__wbindgen_memory=function(){const r=M.memory;return x(r)},i.wbg.__wbg_buffer_cf65c07de34b9a08=function(r){const l=v(r).buffer;return x(l)},i.wbg.__wbg_new_537b7341ce90bb31=function(r){const l=new Uint8Array(v(r));return x(l)},i.wbg.__wbg_set_17499e8aa4003ebd=function(r,l,m){v(r).set(v(l),m>>>0)},i.wbg.__wbg_instanceof_Uint8Array_01cebe79ca606cca=function(r){let l;try{l=v(r)instanceof Uint8Array}catch{l=!1}return l},i.wbg.__wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065=function(r){let l;try{l=v(r)instanceof ArrayBuffer}catch{l=!1}return l},i.wbg.__wbg_String_91fba7ded13ba54c=function(r,l){const m=String(v(l)),d=Pi(m,M.__wbindgen_export_0,M.__wbindgen_export_1),b=Nn;oe()[r/4+1]=b,oe()[r/4+0]=d},i.wbg.__wbindgen_debug_string=function(r,l){const m=Du(v(l)),d=Pi(m,M.__wbindgen_export_0,M.__wbindgen_export_1),b=Nn;oe()[r/4+1]=b,oe()[r/4+0]=d},i.wbg.__wbindgen_throw=function(r,l){throw new Error(Ai(r,l))},i.wbg.__wbg_resolve_fd40f858d9db1a04=function(r){const l=Promise.resolve(v(r));return x(l)},i.wbg.__wbindgen_cb_drop=function(r){const l=Tt(r).original;return l.cnt--==1?(l.a=0,!0):!1},i.wbg.__wbg_then_ec5db6d509eb475f=function(r,l){const m=v(r).then(v(l));return x(m)},i.wbg.__wbindgen_closure_wrapper19025=function(r,l,m){const d=t_(r,l,236,n_);return x(d)},i}function l_(i,r){return M=i.exports,Bd.__wbindgen_wasm_module=r,yo=null,vo=null,wo=null,bo=null,M}async function Bd(i){typeof i>"u"&&(i=new URL(""+new URL("../assets/wasm-web_bg.09007752.wasm",import.meta.url).href,self.location));const r=i_();(typeof i=="string"||typeof Request=="function"&&i instanceof Request||typeof URL=="function"&&i instanceof URL)&&(i=fetch(i));const{instance:l,module:m}=await s_(await i,r);return l_(l,m)}const a_=""+new URL("../assets/wasm-web_bg.09007752.wasm",import.meta.url).href;var Tu={};Object.defineProperty(Tu,"__esModule",{value:!0});var Ud=Tu.notry=void 0;class In{constructor(r,l=void 0){this.val=r,this.exception=l}}const f_=Object.assign(i=>{throw new In(i)},{if:(i,r)=>{if(i)throw new In(r)},catch:(i,...r)=>{const l=r.pop();try{const m=i(...r);return m instanceof Promise?m.catch(d=>{throw new In(l,d)}):m}catch(m){throw new In(l,m)}},unless:(i,r)=>{if(!i)throw new In(r)}});function c_(i,...r){function l(m){if(m instanceof In)return{ok:!1,n:m.val,exception:m.exception};throw m}try{const m=i(f_,...r);return m instanceof Promise?m.then(d=>({ok:!0,y:d})).catch(l):{ok:!0,y:m}}catch(m){return l(m)}}Ud=Tu.notry=c_;function Dd(i,r,l){const m=i.slice();return m[15]=r[l].level,m[16]=r[l].msg,m}function xd(i,r,l){const m=i.slice();return m[19]=r[l].model,m[20]=r[l].name,m[21]=r[l].show,m}function kd(i){let r,l,m,d,b,w=i[20]+"",g,C,y,T,U;function Q(){return i[6](i[19])}return{c(){r=f("input"),d=_(),b=f("label"),g=o(w),C=o(".ts"),this.h()},l(W){r=c(W,"INPUT",{id:!0,type:!0,name:!0}),d=h(W),b=c(W,"LABEL",{for:!0});var L=u(b);g=s(L,w),C=s(L,".ts"),L.forEach(t),this.h()},h(){E(r,"id",l=i[19].uri.path),E(r,"type","radio"),E(r,"name","tabs-"+i[3]),r.checked=m=i[19]===i[1],E(b,"for",y=i[19].uri.path)},m(W,L){p(W,r,L),p(W,d,L),p(W,b,L),n(b,g),n(b,C),T||(U=Cu(r,"change",Q),T=!0)},p(W,L){i=W,L&1&&l!==(l=i[19].uri.path)&&E(r,"id",l),L&3&&m!==(m=i[19]===i[1])&&(r.checked=m),L&1&&w!==(w=i[20]+"")&&qd(g,w),L&1&&y!==(y=i[19].uri.path)&&E(b,"for",y)},d(W){W&&t(r),W&&t(d),W&&t(b),T=!1,U()}}}function Pd(i){let r,l=i[21]!==!1&&kd(i);return{c(){l&&l.c(),r=Ed()},l(m){l&&l.l(m),r=Ed()},m(m,d){l&&l.m(m,d),p(m,r,d)},p(m,d){m[21]!==!1?l?l.p(m,d):(l=kd(m),l.c(),l.m(r.parentNode,r)):l&&(l.d(1),l=null)},d(m){l&&l.d(m),m&&t(r)}}}function Cd(i){let r,l=i[16]+"",m;return{c(){r=f("div"),m=o(l),this.h()},l(d){r=c(d,"DIV",{});var b=u(r);m=s(b,l),b.forEach(t),this.h()},h(){gd(r,"text-danger",i[15]==="error")},m(d,b){p(d,r,b),n(r,m)},p(d,b){b&4&&l!==(l=d[16]+"")&&qd(m,l),b&4&&gd(r,"text-danger",d[15]==="error")},d(d){d&&t(r)}}}function u_(i){let r,l,m,d,b,w,g,C,y,T,U,Q,W,L,se,We,Z=i[0],$=[];for(let D=0;D<Z.length;D+=1)$[D]=Pd(xd(i,Z,D));b=new Qd({props:{model:i[1]}});let P=i[2],O=[];for(let D=0;D<P.length;D+=1)O[D]=Cd(Dd(i,P,D));return{c(){r=f("div"),l=f("div");for(let D=0;D<$.length;D+=1)$[D].c();m=_(),d=f("div"),A(b.$$.fragment),w=_(),g=f("div"),C=f("div"),y=f("pre");for(let D=0;D<O.length;D+=1)O[D].c();T=_(),U=f("div"),Q=f("button"),W=o("Run!"),this.h()},l(D){r=c(D,"DIV",{class:!0});var H=u(r);l=c(H,"DIV",{class:!0});var S=u(l);for(let ee=0;ee<$.length;ee+=1)$[ee].l(S);S.forEach(t),m=h(H),d=c(H,"DIV",{class:!0});var k=u(d);I(b.$$.fragment,k),k.forEach(t),w=h(H),g=c(H,"DIV",{class:!0});var B=u(g);C=c(B,"DIV",{});var Me=u(C);y=c(Me,"PRE",{class:!0});var pe=u(y);for(let ee=0;ee<O.length;ee+=1)O[ee].l(pe);pe.forEach(t),Me.forEach(t),T=h(B),U=c(B,"DIV",{class:!0});var At=u(U);Q=c(At,"BUTTON",{class:!0});var It=u(Q);W=s(It,"Run!"),It.forEach(t),At.forEach(t),B.forEach(t),H.forEach(t),this.h()},h(){E(l,"class","tabs svelte-qpule3"),E(d,"class","card-body"),E(y,"class","svelte-qpule3"),Hd(C,"flex","1"),E(Q,"class","btn-small"),E(U,"class","margin-left"),E(g,"class","card-footer svelte-qpule3"),E(r,"class","card margin-bottom-large")},m(D,H){p(D,r,H),n(r,l);for(let S=0;S<$.length;S+=1)$[S].m(l,null);n(r,m),n(r,d),N(b,d,null),n(r,w),n(r,g),n(g,C),n(C,y);for(let S=0;S<O.length;S+=1)O[S].m(y,null);n(g,T),n(g,U),n(U,Q),n(Q,W),L=!0,se||(We=Cu(Q,"click",i[4]),se=!0)},p(D,[H]){if(H&11){Z=D[0];let k;for(k=0;k<Z.length;k+=1){const B=xd(D,Z,k);$[k]?$[k].p(B,H):($[k]=Pd(B),$[k].c(),$[k].m(l,null))}for(;k<$.length;k+=1)$[k].d(1);$.length=Z.length}const S={};if(H&2&&(S.model=D[1]),b.$set(S),H&4){P=D[2];let k;for(k=0;k<P.length;k+=1){const B=Dd(D,P,k);O[k]?O[k].p(B,H):(O[k]=Cd(B),O[k].c(),O[k].m(y,null))}for(;k<O.length;k+=1)O[k].d(1);O.length=P.length}},i(D){L||(R(b.$$.fragment,D),L=!0)},o(D){V(b.$$.fragment,D),L=!1},d(D){D&&t(r),vd($,D),q(b),vd(O,D),se=!1,We()}}}let Wd=()=>{Bd(a_),Wd=()=>{}};function p_(i,r){const l=m=>{m.source===r.contentWindow&&(i.document.body.removeChild(r),i.removeEventListener("message",l))};i.addEventListener("message",l)}function m_(i){const r=document.createElement("iframe");return r.style.display="none",document.body.append(r),(!r.contentDocument||!r.contentWindow)&&i("Run Failed"),r}function d_(i,r){const l=i.createElement("script");l.type="module",l.innerHTML=r,i.body.appendChild(l)}function __(i,r,l){let m;const d=Math.floor(Math.random()*1e9).toString(36);let{files:b}=r,w=[],g,C;function y($,P){m.push({level:$,msg:typeof P=="object"?Fd(P):`${P}`}),l(2,m)}function T($){return r_($,{jsc:{parser:{syntax:"typescript",tsx:!1},target:"es5",loose:!1,minify:{compress:!1,mangle:!1}},module:{type:"es6"},minify:!1,isModule:"unknown"}).code}function U($,P,O={}){let D=T(`${P}`);const H={};for(const[S,k]of D.matchAll(/import.*['"]\.\/(.+)['"]/g)){$.if(O[k],"Dependency Cycle");const B=w.find(pe=>k===pe.name);$.unless(B,"Missing Import");const Me={...O,[k]:!0};H[k]=U($,B.model.getValue(),Me)}for(const[S,k]of Object.entries(H))D=D.replace(`./${S}`,`data:text/javascript;base64,${btoa(k)}`);return D}function Q($){$.addEventListener("error",P=>y("error",P.error))}function W($){$.addEventListener("unhandledrejection",P=>y("error",P.reason))}function L($,P){return U($,P)+`
window.parent.postMessage("done");`}function se($){Object.assign($,{console:{error:P=>y("error",P),log:P=>y("log",P)}})}function We(){const $=Ud(P=>{l(2,m.length=0,m);const O=m_(P);p_(window,O),Q(O.contentWindow),W(O.contentWindow),se(O.contentWindow);const D=L(P,g.getValue());d_(O.contentDocument,D)});$.ok||y("error",$.n)}Vd(async()=>{const $=await Ld(()=>import("../chunks/editor.main.0a978303.mjs").then(P=>P.e),["..\\chunks\\editor.main.0a978303.mjs","..\\chunks\\preload-helper.41c905a7.mjs","..\\assets\\editor.911c6360.css"],import.meta.url);l(0,w=b.map(P=>{const O=$.Uri.file(`${d}/${P.name}.ts`),D=$.editor.createModel(P.src,"typescript",O);return{...P,model:D}})),l(1,C=w[0].model),g=w[0].model,Wd()});const Z=$=>l(1,C=$);return i.$$set=$=>{"files"in $&&l(5,b=$.files)},l(2,m=[]),[w,C,m,d,We,b,Z]}class Pe extends xu{constructor(r){super(),ku(this,r,__,u_,Pu,{files:5})}}const Od=`// error.ts
export class DevError extends Error {
  constructor(public exception: unknown = undefined) {
    super();
  }
}

export class UserError extends Error {}
`,h_=`import { getRecord } from "./store";

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
`,b_=`// vote.ts
import { getPerson } from "./person";

export function canVote(name: string): boolean {
  const person = getPerson(name);
  return person.age >= 18;
}

console.log(canVote("Neil"));
`,w_=`import { canVote } from "./vote";

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
`,y_=`import { DevError, UserError } from "./error";
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
`,v_=`import { DevError, UserError } from "./error";
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
`,E_=`import { notry } from "./notry-ts";
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
`,Ci=`export function c(num: number) {
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
`,Td=`class Carrier<T> {
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
`,g_=`import type { Quit } from "./notry-ts";
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
`,$_=`import { DevError, UserError } from "./error";
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
`,D_=`// persontc.ts
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
`,Ad=`import { getRecord } from "./store";

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
`,$u=`export function reportError(error: unknown) {
  console.error(error);
}
`,x_=`export function safe<Y, N, Args extends unknown[]>(
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
`,k_=`export function safe<Y, N, Args extends unknown[]>(
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
`,Oi=`import { c, d, e } from "./ext";

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
`,Id=`import { c, d, e } from "./ext";
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
`,Nd=`import { c, d, e } from "./ext";
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
`,Rd=`import { c, d, e } from "./ext";
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
`,P_=`import type { Of, Quit } from "./notry-ts";
import { getPerson } from "./person-notry";

export function canVote(
  quit: Quit<Of<typeof getPerson>>,
  name: string
): boolean {
  const person = getPerson(quit, name);
  return person.age >= 18;
}
`,C_=`import type { DevError, UserError } from "./error";
import { getPerson } from "./person-return";

export function canVote(name: string): boolean | UserError | DevError {
  const maybePerson = getPerson(name);
  if (maybePerson instanceof Error) {
    return maybePerson;
  }
  return maybePerson.age >= 18;
}
`,O_=`// votetc.ts
import { getPerson } from "./person-try-catch";

export function canVote(name: string): boolean {
  const person = getPerson(name);
  return person.age >= 18;
}
`,T_=`import { getPerson } from "./person";

export function canVote(name: string): boolean {
  const person = getPerson(name);
  return person.age >= 18;
}
`;function A_(i){let r,l,m,d,b,w,g,C,y,T,U,Q,W,L,se,We,Z,$,P,O,D,H,S,k,B,Me,pe,At,It,ee,Ni,Ri,go,Nt,Vi,$o,Rt,qi,Do,Vt,Li,xo,qt,Si,ko,He,Bi,Rn,Ui,Wi,Po,Lt,Mi,Co,St,Hi,Oo,Bt,Yi,To,Ut,ji,Ao,Wt,Qi,Io,Mt,Fi,No,Ht,zi,Ro,me,Vn,Ji,Ki,qn,Gi,Xi,Ln,Zi,Vo,Yt,el,qo,jt,tl,Lo,Qt,nl,So,Ft,rl,Bo,lt,Uo,F,ol,Sn,sl,il,Bn,ll,al,Un,fl,cl,Wn,ul,pl,Wo,zt,ml,Mo,Ye,dl,Mn,_l,hl,Ho,at,Yo,de,bl,Hn,wl,yl,Yn,vl,El,jo,Jt,gl,Qo,ie,Ce,$l,jn,Dl,xl,Qn,kl,Pl,Cl,Fn,Ol,Tl,zn,Al,Il,Kt,Nl,Jn,Rl,Fo,Gt,Vl,zo,Xt,ql,Jo,z,Ll,Kn,Sl,Bl,Gn,Ul,Wl,Xn,Ml,Hl,Zn,Yl,jl,Ko,ft,Go,Zt,Ql,Xo,je,Fl,er,zl,Jl,Zo,ct,es,ce,tr,Kl,Gl,nr,Xl,Zl,rr,ea,ta,ts,ut,ns,te,or,na,ra,sr,oa,sa,ir,ia,la,lr,aa,fa,rs,pt,os,Qe,ca,ar,ua,pa,ss,le,ma,fr,Au='{ type: "DevError" }',da,_a,cr,Iu='getRecord("person", name)',ha,ba,ur,wa,ya,is,mt,ls,_e,va,pr,Nu='{ type: "UserError", message: "<name> not found" }',Ea,ga,mr,$a,Da,as,dt,fs,ue,dr,xa,ka,_r,Pa,Ca,hr,Oa,Ta,cs,_t,us,J,Aa,br,Ia,Na,wr,Ra,Va,yr,qa,La,vr,Sa,Ba,ps,ht,ms,en,Er,Ua,ds,Fe,Wa,gr,Ma,Ha,_s,bt,hs,he,Ya,$r,Ru="<Y, N, Args extends unknown[]>",ja,Qa,Dr,Fa,za,bs,be,Ja,xr,Ka,Ga,kr,Xa,Za,ws,wt,ys,j,ef,Pr,tf,nf,Cr,rf,of,Or,sf,lf,Tr,af,ff,Ar,cf,uf,vs,yt,Es,Y,Ir,pf,mf,Nr,df,_f,Rr,hf,bf,Vr,wf,yf,qr,Vu="{ y: { val: boolean } }",vf,Ef,Lr,qu="{ n: { val: Why, exception: unknown } }",gf,$f,gs,K,Df,Sr,Lu="MaybeAsyncDid<Y, N>",xf,kf,Br,Su="Did<Y, N>",Pf,Cf,Ur,Bu="Promise<Did<Y, N>>",Of,Tf,Wr,Af,If,$s,tn,Nf,Ds,nn,Rf,xs,vt,ks,G,Vf,Mr,qf,Lf,Hr,Sf,Bf,Yr,Uf,Wf,jr,Mf,Hf,Ps,rn,Yf,Cs,ze,jf,Qr,Qf,Ff,Os,Et,Ts,on,zf,As,gt,Is,sn,Jf,Ns,ln,Kf,Rs,Je,Gf,Fr,Xf,Zf,Vs,$t,qs,we,ec,zr,tc,nc,Jr,rc,oc,Ls,Dt,Ss,an,sc,Bs,fn,ic,Us,Ke,lc,Kr,ac,fc,Ws,xt,Ms,Ge,cc,Gr,uc,pc,Hs,kt,Ys,Xe,mc,Xr,Uu="quit: Quit<Why>",dc,_c,js,cn,hc,Qs,un,bc,Fs,pn,wc,zs,ae,yc,Zr,vc,Ec,eo,gc,$c,to,Dc,xc,Js,X,kc,no,Pc,Cc,ro,Oc,Tc,oo,Ac,Ic,so,Nc,Rc,Ks,mn,Vc,Gs,ye,qc,io,Lc,Sc,lo,Bc,Uc,Xs,Pt,ao,Wc,Mc,Zs,Oe,fo,Hc,Yc,co,jc,Qc,ei,dn,Fc,ti,ne,zc,uo,Jc,Kc,po,Gc,Xc,mo,Zc,eu,ni,_n,tu,ri,Te,hn,nu,ru,Ze,ou,oi,Ae,bn,su,iu,et,lu,si,Ie,wn,au,fu,tt,cu,ii,Ne,yn,uu,pu,Re,mu,li,Ve,vn,du,_u,qe,hu,ai,Le,En,bu,wu,Se,yu,fi;return g=new Pe({props:{files:[{name:"person",src:h_},{name:"store",src:An,show:!1}]}}),$=new Pe({props:{files:[{name:"vote",src:b_},{name:"person",src:Ad},{name:"store",src:An,show:!1}]}}),S=new Pe({props:{files:[{name:"main",src:w_},{name:"vote",src:T_},{name:"person",src:Ad},{name:"store",src:An,show:!1}]}}),lt=new Pe({props:{files:[{name:"main",src:y_},{name:"vote-try-catch",src:O_},{name:"person-try-catch",src:D_},{name:"error",src:Od},{name:"report",src:$u,show:!1},{name:"store",src:An,show:!1}]}}),at=new Pe({props:{files:[{name:"main",src:v_},{name:"vote-return",src:C_},{name:"person-return",src:$_},{name:"error",src:Od},{name:"report",src:$u,show:!1},{name:"store",src:An,show:!1}]}}),ft=new Pe({props:{files:[{name:"main",src:E_},{name:"vote-notry",src:P_},{name:"person-notry",src:g_},{name:"report",src:$u,show:!1},{name:"store",src:An,show:!1},{name:"notry-ts",src:Td,show:!1}]}}),ct=new ke({props:{value:i[1]}}),ut=new ke({props:{value:i[2]}}),pt=new ke({props:{value:i[3]}}),mt=new ke({props:{value:i[4]}}),dt=new ke({props:{value:V_}}),_t=new ke({props:{value:i[5]}}),ht=new ke({props:{value:i[6]}}),bt=new ke({props:{value:i[7]}}),wt=new ke({props:{value:i[8]}}),yt=new ke({props:{value:i[9]}}),vt=new Pe({props:{files:[{name:"main",src:Oi},{name:"ext",src:Ci,show:!1}]}}),Et=new Pe({props:{files:[{name:"main",src:Rd},{name:"safe-try-catch",src:k_},{name:"ext",src:Ci,show:!1}]}}),gt=new gu({props:{original:Oi,modified:Rd}}),$t=new Pe({props:{files:[{name:"main",src:Nd},{name:"safe-return",src:x_},{name:"ext",src:Ci,show:!1}]}}),Dt=new gu({props:{original:Oi,modified:Nd}}),xt=new Pe({props:{files:[{name:"main",src:Id},{name:"ext",src:Ci,show:!1},{name:"notry-ts",src:Td,show:!1}]}}),kt=new gu({props:{original:Oi,modified:Id}}),{c(){r=f("p"),l=o(`Suppose you're asked to write a new function to determine whether a person
    can vote. It should be easy since there's already a `),m=f("code"),d=o("getPerson"),b=o(" function."),w=_(),A(g.$$.fragment),C=_(),y=f("p"),T=o("Notice that the function signature gives no hint that "),U=f("code"),Q=o("getPerson"),W=o(`
    could throw. This is one problem we want to address.`),L=_(),se=f("p"),We=o("Here's the new function."),Z=_(),A($.$$.fragment),P=_(),O=f("p"),D=o("And last but not least, the main progam."),H=_(),A(S.$$.fragment),k=_(),B=f("p"),Me=o("Note here that the type of "),pe=f("code"),At=o("exceptionVar"),It=o(` is
    `),ee=f("code"),Ni=o("unknown"),Ri=o(`. If you make it something more specific you'll get a
    compiler error.`),go=_(),Nt=f("pre"),Vi=o("Catch clause variable type annotation must be 'any' or 'unknown' if specified."),$o=_(),Rt=f("p"),qi=o("This is another problem we'll try to tackle."),Do=_(),Vt=f("h4"),Li=o("Test Cases"),xo=_(),qt=f("p"),Si=o(`If you run the previous example, you should see three lines written to the
    console.`),ko=_(),He=f("p"),Bi=o("The first shows the output of a successful invocation of "),Rn=f("code"),Ui=o("main"),Wi=o("."),Po=_(),Lt=f("pre"),Mi=o("Neil can't vote"),Co=_(),St=f("p"),Hi=o("The second invocation failed with what is probably a user error."),Oo=_(),Bt=f("pre"),Yi=o("Error: Neal not found"),To=_(),Ut=f("p"),ji=o(`The final result is another error but this time the meaning is less clear.
    It could be an environmental or maybe a programming error. In either case,
    it's not something we expect the user to be able to handle.`),Ao=_(),Wt=f("pre"),Qi=o("Error: Failed to get record"),Io=_(),Mt=f("p"),Fi=o(`Unfortunately, this isn't terribly helpful. It means nothing to the user and
    doesn't give the developer much to debug with.`),No=_(),Ht=f("p"),zi=o("So how could we improve? A few ideas:"),Ro=_(),me=f("ol"),Vn=f("li"),Ji=o(`Log the error stack trace: this would be helpful to the developer, but
      probably scare the user.`),Ki=_(),qn=f("li"),Gi=o(`Report the stack trace to the developer. On user errors, this would
      produce noise for the developer. On developer errors, the message would
      still be confusing to the user.`),Xi=_(),Ln=f("li"),Zi=o("Find a mechanism for differentiating error types."),Vo=_(),Yt=f("h3"),el=o("Approaches"),qo=_(),jt=f("p"),tl=o(`Let's explore idea #3 and compare error handling approaches using the three
    test cases.`),Lo=_(),Qt=f("h4"),nl=o("try-catch"),So=_(),Ft=f("p"),rl=o("One simple solution is to throw subclassed Error objects."),Bo=_(),A(lt.$$.fragment),Uo=_(),F=f("p"),ol=o(`That's better but the type checker doesn't help much. Without reading the
    `),Sn=f("code"),sl=o("getPerson"),il=o(` source, we can't tell what (or even if) it could
    throw. `),Bn=f("code"),ll=o("exceptionVar"),al=o(" still has type "),Un=f("code"),fl=o("unknown"),cl=o(`.
    Narrowing it takes extra effort and if `),Wn=f("code"),ul=o("getPerson"),pl=o(` starts throwing
    something different, the compiler won't tell us.`),Wo=_(),zt=f("h4"),ml=o("Return Types"),Mo=_(),Ye=f("p"),dl=o(`One way to lean on the type system for error handling is by using a
    specialized return type. We'll use a union of the successful return type and
    `),Mn=f("code"),_l=o("Error"),hl=o("s to keep things simple."),Ho=_(),A(at.$$.fragment),Yo=_(),de=f("p"),bl=o("This yields the same result as "),Hn=f("b"),wl=o("try-catch"),yl=o(` with the added benefit of
    type safety. The biggest downside is the extra check in `),Yn=f("code"),vl=o("canVote"),El=o(`
    (more on that later).`),jo=_(),Jt=f("p"),gl=o("Following this approach boils down to:"),Qo=_(),ie=f("ol"),Ce=f("li"),$l=o("Replacing "),jn=f("code"),Dl=o("throw"),xl=o(" with "),Qn=f("code"),kl=o("return"),Pl=o(" in your code"),Cl=_(),Fn=f("li"),Ol=o("Updating the return types"),Tl=_(),zn=f("li"),Al=o("Propagating errors up the call stack"),Il=_(),Kt=f("li"),Nl=o("Wrapping invocations of code you don't control in "),Jn=f("code"),Rl=o("try-catch"),Fo=_(),Gt=f("p"),Vl=o(`There are some simple utilities you can write to make this easier. Still,
    one can't help but wonder - is there a better way?`),zo=_(),Xt=f("h4"),ql=o("notry-ts"),Jo=_(),z=f("p"),Ll=o("What if we could get the convenience of "),Kn=f("b"),Sl=o("try-catch"),Bl=o(` and the type safety
    of `),Gn=f("b"),Ul=o("return types"),Wl=o(`? That's what I set out to answer when I created
    `),Xn=f("b"),Ml=o("notry-ts"),Hl=o(". Let's see how our example looks with "),Zn=f("code"),Yl=o("notry"),jl=o("."),Ko=_(),A(ft.$$.fragment),Go=_(),Zt=f("p"),Ql=o(`This produces the same output as the two previous solutions, so how does it
    work?`),Xo=_(),je=f("p"),Fl=o("The first thing you'll notice is the new "),er=f("code"),zl=o("Why"),Jl=o(" type."),Zo=_(),A(ct.$$.fragment),es=_(),ce=f("p"),tr=f("code"),Kl=o("Why"),Gl=o(" represents the type returned when "),nr=f("code"),Xl=o("getPerson"),Zl=o(`
    fails. It's used in the new first parameter of `),rr=f("code"),ea=o("getPerson"),ta=o("."),ts=_(),A(ut.$$.fragment),ns=_(),te=f("p"),or=f("code"),na=o("quit"),ra=o(` has the call signature
    `),sr=f("code"),oa=o("(val: Why) => never"),sa=o(`. Calling it immediately terminates
    `),ir=f("code"),ia=o("getPerson"),la=o(`. So in this case, we could terminate
    `),lr=f("code"),aa=o("getPerson"),fa=o(`
    by calling:`),rs=_(),A(pt.$$.fragment),os=_(),Qe=f("p"),ca=o("Rather than call "),ar=f("code"),ua=o("quit"),pa=o(" directly, we use two convenience functions."),ss=_(),le=f("p"),ma=o(`This quits with
    `),fr=f("code"),da=o(Au),_a=o(` if
    `),cr=f("code"),ha=o(Iu),ba=o(`
    throws, returning a `),ur=f("code"),wa=o("Person"),ya=o(" otherwise."),is=_(),A(mt.$$.fragment),ls=_(),_e=f("p"),va=o(`This quits with
    `),pr=f("code"),Ea=o(Nu),ga=o(`
    if `),mr=f("code"),$a=o("person"),Da=o(" is undefined."),as=_(),A(dt.$$.fragment),fs=_(),ue=f("p"),dr=f("code"),xa=o("canVote"),ka=o(" is straightforward. It takes a "),_r=f("code"),Pa=o("quit"),Ca=o(`
    parameter of the same type as `),hr=f("code"),Oa=o("getPerson"),Ta=o(" and forwards it."),cs=_(),A(_t.$$.fragment),us=_(),J=f("p"),Aa=o("At the top level, "),br=f("code"),Ia=o("main"),Na=o(" invokes "),wr=f("code"),Ra=o("canVote"),Va=o(` with
    `),yr=f("code"),qa=o("notry"),La=o(" and assigns the result to "),vr=f("code"),Sa=o("did"),Ba=o("."),ps=_(),A(ht.$$.fragment),ms=_(),en=f("p"),Er=f("b"),Ua=o("How it works"),ds=_(),Fe=f("p"),Wa=o("Here is the function signature of "),gr=f("code"),Ma=o("notry"),Ha=o("."),_s=_(),A(bt.$$.fragment),hs=_(),he=f("p"),Ya=o("The generic types "),$r=f("code"),ja=o(Ru),Qa=o(` represent
    the successful return type, failed return type, and `),Dr=f("code"),Fa=o("quitable"),za=o(" arguments."),bs=_(),be=f("p"),Ja=o("Any function that accepts "),xr=f("code"),Ka=o("Quit"),Ga=o(` as it's first parameter is a
    `),kr=f("code"),Xa=o("Quitable"),Za=o("."),ws=_(),A(wt.$$.fragment),ys=_(),j=f("p"),ef=o("So "),Pr=f("code"),tf=o("notry"),nf=o(" requires a "),Cr=f("code"),rf=o("Quitable"),of=o(` function and
    arguments to pass it and returns a `),Or=f("code"),sf=o("Did"),lf=o(` containing the result
    (either `),Tr=f("code"),af=o("Y"),ff=o(" or "),Ar=f("code"),cf=o("N"),uf=o(")."),vs=_(),A(yt.$$.fragment),Es=_(),Y=f("p"),Ir=f("code"),pf=o("Did"),mf=o(" is a riff on the popular "),Nr=f("code"),df=o("Either"),_f=o(` or
    `),Rr=f("code"),hf=o("Result"),bf=o(`
    types. It's a discriminated union that indicates whether
    `),Vr=f("code"),wf=o("quitable"),yf=o(` returned or quit. In this case, it'll be
    `),qr=f("code"),vf=o(Vu),Ef=o(` or
    `),Lr=f("code"),gf=o(qu),$f=o("."),gs=_(),K=f("p"),Df=o("The last piece of the puzzle is "),Sr=f("code"),xf=o(Lu),kf=o(`. It
    resolves to `),Br=f("code"),Pf=o(Su),Cf=o(` or
    `),Ur=f("code"),Of=o(Bu),Tf=o(`
    depending on whether `),Wr=f("code"),Af=o("quitable"),If=o(" returns a promise."),$s=_(),tn=f("h3"),Nf=o("Error Handling At Scale"),Ds=_(),nn=f("p"),Rf=o(`In the preceding problem, the difference in error handling solutions might
    seem insignificant. Here we'll look at a fleshier example and try to
    understand how each approach scales.`),xs=_(),A(vt.$$.fragment),ks=_(),G=f("p"),Vf=o("The three external functions "),Mr=f("code"),qf=o("c"),Lf=o(", "),Hr=f("code"),Sf=o("d"),Bf=o(`, and
    `),Yr=f("code"),Uf=o("e"),Wf=o(`
    could throw so `),jr=f("code"),Mf=o("main"),Hf=o(` catches and logs the exception. In the base
    case there is no way to differentiate the three possible failures.`),Ps=_(),rn=f("h4"),Yf=o("try-catch"),Cs=_(),ze=f("p"),jf=o("Let's introduce a utility "),Qr=f("code"),Qf=o("safe"),Ff=o(` to catch arbitary exceptions and
    throw something specific.`),Os=_(),A(Et.$$.fragment),Ts=_(),on=f("p"),zf=o("The diff shows that it's an unobtrusive change."),As=_(),A(gt.$$.fragment),Is=_(),sn=f("p"),Jf=o("However, no type safety."),Ns=_(),ln=f("h4"),Kf=o("Return types"),Rs=_(),Je=f("p"),Gf=o("This time we use a variant of "),Fr=f("code"),Xf=o("safe"),Zf=o(` that catch exceptions and returns
    something specific.`),Vs=_(),A($t.$$.fragment),qs=_(),we=f("p"),ec=o("Unfortunately now three of the five lines in both "),zr=f("code"),tc=o("a"),nc=o(` and
    `),Jr=f("code"),rc=o("b"),oc=o(` are error handling. It's easy to see how this can get unwieldy
    at scale.`),Ls=_(),A(Dt.$$.fragment),Ss=_(),an=f("p"),sc=o("But now we have type safety."),Bs=_(),fn=f("h4"),ic=o("notry-ts"),Us=_(),Ke=f("p"),lc=o("Finally, an implementation using "),Kr=f("code"),ac=o("notry"),fc=o("."),Ws=_(),A(xt.$$.fragment),Ms=_(),Ge=f("p"),cc=o("Apart from the "),Gr=f("code"),uc=o("quit"),pc=o(` parameters, this looks more or less like the
    base case.`),Hs=_(),A(kt.$$.fragment),Ys=_(),Xe=f("p"),mc=o("Admittedly, all those "),Xr=f("code"),dc=o(Uu),_c=o(` parameters are a bit cumbersome
    so, like anything, you should weigh the benefits against the costs.`),js=_(),cn=f("h3"),hc=o("Comparison"),Qs=_(),un=f("p"),bc=o("Let's wrap up by looking at what we get from each approach."),Fs=_(),pn=f("h4"),wc=o("Type Safety"),zs=_(),ae=f("p"),yc=o("None with "),Zr=f("b"),vc=o("try-catch"),Ec=o(` and roughly the same degree with
    `),eo=f("b"),gc=o("return types"),$c=o(" and "),to=f("b"),Dc=o("notry-ts"),xc=o(` including the ability to tell at a glance
    if and what errors could occur.`),Js=_(),X=f("p"),kc=o("The biggest difference is that it's easier to ignore "),no=f("b"),Pc=o("return types"),Cc=o(`. If
    you call a function that normally returns `),ro=f("code"),Oc=o("void"),Tc=o(`, you can easily
    forget to check whether an error occurred. This problem only affects
    `),oo=f("b"),Ac=o("notry-ts"),Ic=o(" where "),so=f("code"),Nc=o("notry"),Rc=o(" is called."),Ks=_(),mn=f("h4"),Vc=o("Developer Experience"),Gs=_(),ye=f("p"),qc=o("With "),io=f("b"),Lc=o("try-catch"),Sc=o(", you could use a utility like "),lo=f("code"),Bc=o("safe"),Uc=o(` to incrementally
    improve your error handling done with minimal effect on readability.`),Xs=_(),Pt=f("p"),ao=f("b"),Wc=o("return types"),Mc=o(` are intuitive since it's natural to associate a function's
    return value with its outcome. This solution requires the greatest amount of
    code and gains usefulness the more it's used.`),Zs=_(),Oe=f("p"),fo=f("b"),Hc=o("notry"),Yc=o(` has the least intuitive and most sophisticated typing. The
    function body's intent remains clear with error handling is mostly out of
    view. As with
    `),co=f("b"),jc=o("return types"),Qc=o(", its usefulness is dependent on how widely it's used."),ei=_(),dn=f("h3"),Fc=o("Conclusion"),ti=_(),ne=f("p"),zc=o(`If you care about type safety (why else would you be here), use
    `),uo=f("b"),Jc=o("return types"),Kc=o(" or "),po=f("b"),Gc=o("notry"),Xc=o(". Choose "),mo=f("b"),Zc=o("notry"),eu=o(` for added readability
    and safety at the cost of complexity.`),ni=_(),_n=f("h3"),tu=o("Resources"),ri=_(),Te=f("div"),hn=f("small"),nu=o("package"),ru=_(),Ze=f("a"),ou=o("notry-ts"),oi=_(),Ae=f("div"),bn=f("small"),su=o("package"),iu=_(),et=f("a"),lu=o("neverthrow"),si=_(),Ie=f("div"),wn=f("small"),au=o("package"),fu=_(),tt=f("a"),cu=o("type-safe-errors"),ii=_(),Ne=f("div"),yn=f("small"),uu=o("article"),pu=_(),Re=f("a"),mu=o("Type-Safe Error Handling In TypeScript"),li=_(),Ve=f("div"),vn=f("small"),du=o("article"),_u=_(),qe=f("a"),hu=o("Functional Error Handling"),ai=_(),Le=f("div"),En=f("small"),bu=o("article"),wu=_(),Se=f("a"),yu=o("TypeScript / Implement Rust-style Result"),this.h()},l(e){r=c(e,"P",{});var a=u(r);l=s(a,`Suppose you're asked to write a new function to determine whether a person
    can vote. It should be easy since there's already a `),m=c(a,"CODE",{});var Wu=u(m);d=s(Wu,"getPerson"),Wu.forEach(t),b=s(a," function."),a.forEach(t),w=h(e),I(g.$$.fragment,e),C=h(e),y=c(e,"P",{});var ci=u(y);T=s(ci,"Notice that the function signature gives no hint that "),U=c(ci,"CODE",{});var Mu=u(U);Q=s(Mu,"getPerson"),Mu.forEach(t),W=s(ci,`
    could throw. This is one problem we want to address.`),ci.forEach(t),L=h(e),se=c(e,"P",{});var Hu=u(se);We=s(Hu,"Here's the new function."),Hu.forEach(t),Z=h(e),I($.$$.fragment,e),P=h(e),O=c(e,"P",{});var Yu=u(O);D=s(Yu,"And last but not least, the main progam."),Yu.forEach(t),H=h(e),I(S.$$.fragment,e),k=h(e),B=c(e,"P",{});var gn=u(B);Me=s(gn,"Note here that the type of "),pe=c(gn,"CODE",{});var ju=u(pe);At=s(ju,"exceptionVar"),ju.forEach(t),It=s(gn,` is
    `),ee=c(gn,"CODE",{});var Qu=u(ee);Ni=s(Qu,"unknown"),Qu.forEach(t),Ri=s(gn,`. If you make it something more specific you'll get a
    compiler error.`),gn.forEach(t),go=h(e),Nt=c(e,"PRE",{});var Fu=u(Nt);Vi=s(Fu,"Catch clause variable type annotation must be 'any' or 'unknown' if specified."),Fu.forEach(t),$o=h(e),Rt=c(e,"P",{});var zu=u(Rt);qi=s(zu,"This is another problem we'll try to tackle."),zu.forEach(t),Do=h(e),Vt=c(e,"H4",{});var Ju=u(Vt);Li=s(Ju,"Test Cases"),Ju.forEach(t),xo=h(e),qt=c(e,"P",{});var Ku=u(qt);Si=s(Ku,`If you run the previous example, you should see three lines written to the
    console.`),Ku.forEach(t),ko=h(e),He=c(e,"P",{});var ui=u(He);Bi=s(ui,"The first shows the output of a successful invocation of "),Rn=c(ui,"CODE",{});var Gu=u(Rn);Ui=s(Gu,"main"),Gu.forEach(t),Wi=s(ui,"."),ui.forEach(t),Po=h(e),Lt=c(e,"PRE",{});var Xu=u(Lt);Mi=s(Xu,"Neil can't vote"),Xu.forEach(t),Co=h(e),St=c(e,"P",{});var Zu=u(St);Hi=s(Zu,"The second invocation failed with what is probably a user error."),Zu.forEach(t),Oo=h(e),Bt=c(e,"PRE",{});var ep=u(Bt);Yi=s(ep,"Error: Neal not found"),ep.forEach(t),To=h(e),Ut=c(e,"P",{});var tp=u(Ut);ji=s(tp,`The final result is another error but this time the meaning is less clear.
    It could be an environmental or maybe a programming error. In either case,
    it's not something we expect the user to be able to handle.`),tp.forEach(t),Ao=h(e),Wt=c(e,"PRE",{});var np=u(Wt);Qi=s(np,"Error: Failed to get record"),np.forEach(t),Io=h(e),Mt=c(e,"P",{});var rp=u(Mt);Fi=s(rp,`Unfortunately, this isn't terribly helpful. It means nothing to the user and
    doesn't give the developer much to debug with.`),rp.forEach(t),No=h(e),Ht=c(e,"P",{});var op=u(Ht);zi=s(op,"So how could we improve? A few ideas:"),op.forEach(t),Ro=h(e),me=c(e,"OL",{});var $n=u(me);Vn=c($n,"LI",{});var sp=u(Vn);Ji=s(sp,`Log the error stack trace: this would be helpful to the developer, but
      probably scare the user.`),sp.forEach(t),Ki=h($n),qn=c($n,"LI",{});var ip=u(qn);Gi=s(ip,`Report the stack trace to the developer. On user errors, this would
      produce noise for the developer. On developer errors, the message would
      still be confusing to the user.`),ip.forEach(t),Xi=h($n),Ln=c($n,"LI",{});var lp=u(Ln);Zi=s(lp,"Find a mechanism for differentiating error types."),lp.forEach(t),$n.forEach(t),Vo=h(e),Yt=c(e,"H3",{});var ap=u(Yt);el=s(ap,"Approaches"),ap.forEach(t),qo=h(e),jt=c(e,"P",{});var fp=u(jt);tl=s(fp,`Let's explore idea #3 and compare error handling approaches using the three
    test cases.`),fp.forEach(t),Lo=h(e),Qt=c(e,"H4",{});var cp=u(Qt);nl=s(cp,"try-catch"),cp.forEach(t),So=h(e),Ft=c(e,"P",{});var up=u(Ft);rl=s(up,"One simple solution is to throw subclassed Error objects."),up.forEach(t),Bo=h(e),I(lt.$$.fragment,e),Uo=h(e),F=c(e,"P",{});var ve=u(F);ol=s(ve,`That's better but the type checker doesn't help much. Without reading the
    `),Sn=c(ve,"CODE",{});var pp=u(Sn);sl=s(pp,"getPerson"),pp.forEach(t),il=s(ve,` source, we can't tell what (or even if) it could
    throw. `),Bn=c(ve,"CODE",{});var mp=u(Bn);ll=s(mp,"exceptionVar"),mp.forEach(t),al=s(ve," still has type "),Un=c(ve,"CODE",{});var dp=u(Un);fl=s(dp,"unknown"),dp.forEach(t),cl=s(ve,`.
    Narrowing it takes extra effort and if `),Wn=c(ve,"CODE",{});var _p=u(Wn);ul=s(_p,"getPerson"),_p.forEach(t),pl=s(ve,` starts throwing
    something different, the compiler won't tell us.`),ve.forEach(t),Wo=h(e),zt=c(e,"H4",{});var hp=u(zt);ml=s(hp,"Return Types"),hp.forEach(t),Mo=h(e),Ye=c(e,"P",{});var pi=u(Ye);dl=s(pi,`One way to lean on the type system for error handling is by using a
    specialized return type. We'll use a union of the successful return type and
    `),Mn=c(pi,"CODE",{});var bp=u(Mn);_l=s(bp,"Error"),bp.forEach(t),hl=s(pi,"s to keep things simple."),pi.forEach(t),Ho=h(e),I(at.$$.fragment,e),Yo=h(e),de=c(e,"P",{});var Dn=u(de);bl=s(Dn,"This yields the same result as "),Hn=c(Dn,"B",{});var wp=u(Hn);wl=s(wp,"try-catch"),wp.forEach(t),yl=s(Dn,` with the added benefit of
    type safety. The biggest downside is the extra check in `),Yn=c(Dn,"CODE",{});var yp=u(Yn);vl=s(yp,"canVote"),yp.forEach(t),El=s(Dn,`
    (more on that later).`),Dn.forEach(t),jo=h(e),Jt=c(e,"P",{});var vp=u(Jt);gl=s(vp,"Following this approach boils down to:"),vp.forEach(t),Qo=h(e),ie=c(e,"OL",{});var nt=u(ie);Ce=c(nt,"LI",{});var xn=u(Ce);$l=s(xn,"Replacing "),jn=c(xn,"CODE",{});var Ep=u(jn);Dl=s(Ep,"throw"),Ep.forEach(t),xl=s(xn," with "),Qn=c(xn,"CODE",{});var gp=u(Qn);kl=s(gp,"return"),gp.forEach(t),Pl=s(xn," in your code"),xn.forEach(t),Cl=h(nt),Fn=c(nt,"LI",{});var $p=u(Fn);Ol=s($p,"Updating the return types"),$p.forEach(t),Tl=h(nt),zn=c(nt,"LI",{});var Dp=u(zn);Al=s(Dp,"Propagating errors up the call stack"),Dp.forEach(t),Il=h(nt),Kt=c(nt,"LI",{});var vu=u(Kt);Nl=s(vu,"Wrapping invocations of code you don't control in "),Jn=c(vu,"CODE",{});var xp=u(Jn);Rl=s(xp,"try-catch"),xp.forEach(t),vu.forEach(t),nt.forEach(t),Fo=h(e),Gt=c(e,"P",{});var kp=u(Gt);Vl=s(kp,`There are some simple utilities you can write to make this easier. Still,
    one can't help but wonder - is there a better way?`),kp.forEach(t),zo=h(e),Xt=c(e,"H4",{});var Pp=u(Xt);ql=s(Pp,"notry-ts"),Pp.forEach(t),Jo=h(e),z=c(e,"P",{});var Ee=u(z);Ll=s(Ee,"What if we could get the convenience of "),Kn=c(Ee,"B",{});var Cp=u(Kn);Sl=s(Cp,"try-catch"),Cp.forEach(t),Bl=s(Ee,` and the type safety
    of `),Gn=c(Ee,"B",{});var Op=u(Gn);Ul=s(Op,"return types"),Op.forEach(t),Wl=s(Ee,`? That's what I set out to answer when I created
    `),Xn=c(Ee,"B",{});var Tp=u(Xn);Ml=s(Tp,"notry-ts"),Tp.forEach(t),Hl=s(Ee,". Let's see how our example looks with "),Zn=c(Ee,"CODE",{});var Ap=u(Zn);Yl=s(Ap,"notry"),Ap.forEach(t),jl=s(Ee,"."),Ee.forEach(t),Ko=h(e),I(ft.$$.fragment,e),Go=h(e),Zt=c(e,"P",{});var Ip=u(Zt);Ql=s(Ip,`This produces the same output as the two previous solutions, so how does it
    work?`),Ip.forEach(t),Xo=h(e),je=c(e,"P",{});var mi=u(je);Fl=s(mi,"The first thing you'll notice is the new "),er=c(mi,"CODE",{});var Np=u(er);zl=s(Np,"Why"),Np.forEach(t),Jl=s(mi," type."),mi.forEach(t),Zo=h(e),I(ct.$$.fragment,e),es=h(e),ce=c(e,"P",{});var Ct=u(ce);tr=c(Ct,"CODE",{});var Rp=u(tr);Kl=s(Rp,"Why"),Rp.forEach(t),Gl=s(Ct," represents the type returned when "),nr=c(Ct,"CODE",{});var Vp=u(nr);Xl=s(Vp,"getPerson"),Vp.forEach(t),Zl=s(Ct,`
    fails. It's used in the new first parameter of `),rr=c(Ct,"CODE",{});var qp=u(rr);ea=s(qp,"getPerson"),qp.forEach(t),ta=s(Ct,"."),Ct.forEach(t),ts=h(e),I(ut.$$.fragment,e),ns=h(e),te=c(e,"P",{});var Be=u(te);or=c(Be,"CODE",{});var Lp=u(or);na=s(Lp,"quit"),Lp.forEach(t),ra=s(Be,` has the call signature
    `),sr=c(Be,"CODE",{});var Sp=u(sr);oa=s(Sp,"(val: Why) => never"),Sp.forEach(t),sa=s(Be,`. Calling it immediately terminates
    `),ir=c(Be,"CODE",{});var Bp=u(ir);ia=s(Bp,"getPerson"),Bp.forEach(t),la=s(Be,`. So in this case, we could terminate
    `),lr=c(Be,"CODE",{});var Up=u(lr);aa=s(Up,"getPerson"),Up.forEach(t),fa=s(Be,`
    by calling:`),Be.forEach(t),rs=h(e),I(pt.$$.fragment,e),os=h(e),Qe=c(e,"P",{});var di=u(Qe);ca=s(di,"Rather than call "),ar=c(di,"CODE",{});var Wp=u(ar);ua=s(Wp,"quit"),Wp.forEach(t),pa=s(di," directly, we use two convenience functions."),di.forEach(t),ss=h(e),le=c(e,"P",{});var rt=u(le);ma=s(rt,`This quits with
    `),fr=c(rt,"CODE",{});var Mp=u(fr);da=s(Mp,Au),Mp.forEach(t),_a=s(rt,` if
    `),cr=c(rt,"CODE",{});var Hp=u(cr);ha=s(Hp,Iu),Hp.forEach(t),ba=s(rt,`
    throws, returning a `),ur=c(rt,"CODE",{});var Yp=u(ur);wa=s(Yp,"Person"),Yp.forEach(t),ya=s(rt," otherwise."),rt.forEach(t),is=h(e),I(mt.$$.fragment,e),ls=h(e),_e=c(e,"P",{});var kn=u(_e);va=s(kn,`This quits with
    `),pr=c(kn,"CODE",{});var jp=u(pr);Ea=s(jp,Nu),jp.forEach(t),ga=s(kn,`
    if `),mr=c(kn,"CODE",{});var Qp=u(mr);$a=s(Qp,"person"),Qp.forEach(t),Da=s(kn," is undefined."),kn.forEach(t),as=h(e),I(dt.$$.fragment,e),fs=h(e),ue=c(e,"P",{});var Ot=u(ue);dr=c(Ot,"CODE",{});var Fp=u(dr);xa=s(Fp,"canVote"),Fp.forEach(t),ka=s(Ot," is straightforward. It takes a "),_r=c(Ot,"CODE",{});var zp=u(_r);Pa=s(zp,"quit"),zp.forEach(t),Ca=s(Ot,`
    parameter of the same type as `),hr=c(Ot,"CODE",{});var Jp=u(hr);Oa=s(Jp,"getPerson"),Jp.forEach(t),Ta=s(Ot," and forwards it."),Ot.forEach(t),cs=h(e),I(_t.$$.fragment,e),us=h(e),J=c(e,"P",{});var ge=u(J);Aa=s(ge,"At the top level, "),br=c(ge,"CODE",{});var Kp=u(br);Ia=s(Kp,"main"),Kp.forEach(t),Na=s(ge," invokes "),wr=c(ge,"CODE",{});var Gp=u(wr);Ra=s(Gp,"canVote"),Gp.forEach(t),Va=s(ge,` with
    `),yr=c(ge,"CODE",{});var Xp=u(yr);qa=s(Xp,"notry"),Xp.forEach(t),La=s(ge," and assigns the result to "),vr=c(ge,"CODE",{});var Zp=u(vr);Sa=s(Zp,"did"),Zp.forEach(t),Ba=s(ge,"."),ge.forEach(t),ps=h(e),I(ht.$$.fragment,e),ms=h(e),en=c(e,"P",{});var em=u(en);Er=c(em,"B",{});var tm=u(Er);Ua=s(tm,"How it works"),tm.forEach(t),em.forEach(t),ds=h(e),Fe=c(e,"P",{});var _i=u(Fe);Wa=s(_i,"Here is the function signature of "),gr=c(_i,"CODE",{});var nm=u(gr);Ma=s(nm,"notry"),nm.forEach(t),Ha=s(_i,"."),_i.forEach(t),_s=h(e),I(bt.$$.fragment,e),hs=h(e),he=c(e,"P",{});var Pn=u(he);Ya=s(Pn,"The generic types "),$r=c(Pn,"CODE",{});var rm=u($r);ja=s(rm,Ru),rm.forEach(t),Qa=s(Pn,` represent
    the successful return type, failed return type, and `),Dr=c(Pn,"CODE",{});var om=u(Dr);Fa=s(om,"quitable"),om.forEach(t),za=s(Pn," arguments."),Pn.forEach(t),bs=h(e),be=c(e,"P",{});var Cn=u(be);Ja=s(Cn,"Any function that accepts "),xr=c(Cn,"CODE",{});var sm=u(xr);Ka=s(sm,"Quit"),sm.forEach(t),Ga=s(Cn,` as it's first parameter is a
    `),kr=c(Cn,"CODE",{});var im=u(kr);Xa=s(im,"Quitable"),im.forEach(t),Za=s(Cn,"."),Cn.forEach(t),ws=h(e),I(wt.$$.fragment,e),ys=h(e),j=c(e,"P",{});var fe=u(j);ef=s(fe,"So "),Pr=c(fe,"CODE",{});var lm=u(Pr);tf=s(lm,"notry"),lm.forEach(t),nf=s(fe," requires a "),Cr=c(fe,"CODE",{});var am=u(Cr);rf=s(am,"Quitable"),am.forEach(t),of=s(fe,` function and
    arguments to pass it and returns a `),Or=c(fe,"CODE",{});var fm=u(Or);sf=s(fm,"Did"),fm.forEach(t),lf=s(fe,` containing the result
    (either `),Tr=c(fe,"CODE",{});var cm=u(Tr);af=s(cm,"Y"),cm.forEach(t),ff=s(fe," or "),Ar=c(fe,"CODE",{});var um=u(Ar);cf=s(um,"N"),um.forEach(t),uf=s(fe,")."),fe.forEach(t),vs=h(e),I(yt.$$.fragment,e),Es=h(e),Y=c(e,"P",{});var re=u(Y);Ir=c(re,"CODE",{});var pm=u(Ir);pf=s(pm,"Did"),pm.forEach(t),mf=s(re," is a riff on the popular "),Nr=c(re,"CODE",{});var mm=u(Nr);df=s(mm,"Either"),mm.forEach(t),_f=s(re,` or
    `),Rr=c(re,"CODE",{});var dm=u(Rr);hf=s(dm,"Result"),dm.forEach(t),bf=s(re,`
    types. It's a discriminated union that indicates whether
    `),Vr=c(re,"CODE",{});var _m=u(Vr);wf=s(_m,"quitable"),_m.forEach(t),yf=s(re,` returned or quit. In this case, it'll be
    `),qr=c(re,"CODE",{});var hm=u(qr);vf=s(hm,Vu),hm.forEach(t),Ef=s(re,` or
    `),Lr=c(re,"CODE",{});var bm=u(Lr);gf=s(bm,qu),bm.forEach(t),$f=s(re,"."),re.forEach(t),gs=h(e),K=c(e,"P",{});var $e=u(K);Df=s($e,"The last piece of the puzzle is "),Sr=c($e,"CODE",{});var wm=u(Sr);xf=s(wm,Lu),wm.forEach(t),kf=s($e,`. It
    resolves to `),Br=c($e,"CODE",{});var ym=u(Br);Pf=s(ym,Su),ym.forEach(t),Cf=s($e,` or
    `),Ur=c($e,"CODE",{});var vm=u(Ur);Of=s(vm,Bu),vm.forEach(t),Tf=s($e,`
    depending on whether `),Wr=c($e,"CODE",{});var Em=u(Wr);Af=s(Em,"quitable"),Em.forEach(t),If=s($e," returns a promise."),$e.forEach(t),$s=h(e),tn=c(e,"H3",{});var gm=u(tn);Nf=s(gm,"Error Handling At Scale"),gm.forEach(t),Ds=h(e),nn=c(e,"P",{});var $m=u(nn);Rf=s($m,`In the preceding problem, the difference in error handling solutions might
    seem insignificant. Here we'll look at a fleshier example and try to
    understand how each approach scales.`),$m.forEach(t),xs=h(e),I(vt.$$.fragment,e),ks=h(e),G=c(e,"P",{});var De=u(G);Vf=s(De,"The three external functions "),Mr=c(De,"CODE",{});var Dm=u(Mr);qf=s(Dm,"c"),Dm.forEach(t),Lf=s(De,", "),Hr=c(De,"CODE",{});var xm=u(Hr);Sf=s(xm,"d"),xm.forEach(t),Bf=s(De,`, and
    `),Yr=c(De,"CODE",{});var km=u(Yr);Uf=s(km,"e"),km.forEach(t),Wf=s(De,`
    could throw so `),jr=c(De,"CODE",{});var Pm=u(jr);Mf=s(Pm,"main"),Pm.forEach(t),Hf=s(De,` catches and logs the exception. In the base
    case there is no way to differentiate the three possible failures.`),De.forEach(t),Ps=h(e),rn=c(e,"H4",{});var Cm=u(rn);Yf=s(Cm,"try-catch"),Cm.forEach(t),Cs=h(e),ze=c(e,"P",{});var hi=u(ze);jf=s(hi,"Let's introduce a utility "),Qr=c(hi,"CODE",{});var Om=u(Qr);Qf=s(Om,"safe"),Om.forEach(t),Ff=s(hi,` to catch arbitary exceptions and
    throw something specific.`),hi.forEach(t),Os=h(e),I(Et.$$.fragment,e),Ts=h(e),on=c(e,"P",{});var Tm=u(on);zf=s(Tm,"The diff shows that it's an unobtrusive change."),Tm.forEach(t),As=h(e),I(gt.$$.fragment,e),Is=h(e),sn=c(e,"P",{});var Am=u(sn);Jf=s(Am,"However, no type safety."),Am.forEach(t),Ns=h(e),ln=c(e,"H4",{});var Im=u(ln);Kf=s(Im,"Return types"),Im.forEach(t),Rs=h(e),Je=c(e,"P",{});var bi=u(Je);Gf=s(bi,"This time we use a variant of "),Fr=c(bi,"CODE",{});var Nm=u(Fr);Xf=s(Nm,"safe"),Nm.forEach(t),Zf=s(bi,` that catch exceptions and returns
    something specific.`),bi.forEach(t),Vs=h(e),I($t.$$.fragment,e),qs=h(e),we=c(e,"P",{});var On=u(we);ec=s(On,"Unfortunately now three of the five lines in both "),zr=c(On,"CODE",{});var Rm=u(zr);tc=s(Rm,"a"),Rm.forEach(t),nc=s(On,` and
    `),Jr=c(On,"CODE",{});var Vm=u(Jr);rc=s(Vm,"b"),Vm.forEach(t),oc=s(On,` are error handling. It's easy to see how this can get unwieldy
    at scale.`),On.forEach(t),Ls=h(e),I(Dt.$$.fragment,e),Ss=h(e),an=c(e,"P",{});var qm=u(an);sc=s(qm,"But now we have type safety."),qm.forEach(t),Bs=h(e),fn=c(e,"H4",{});var Lm=u(fn);ic=s(Lm,"notry-ts"),Lm.forEach(t),Us=h(e),Ke=c(e,"P",{});var wi=u(Ke);lc=s(wi,"Finally, an implementation using "),Kr=c(wi,"CODE",{});var Sm=u(Kr);ac=s(Sm,"notry"),Sm.forEach(t),fc=s(wi,"."),wi.forEach(t),Ws=h(e),I(xt.$$.fragment,e),Ms=h(e),Ge=c(e,"P",{});var yi=u(Ge);cc=s(yi,"Apart from the "),Gr=c(yi,"CODE",{});var Bm=u(Gr);uc=s(Bm,"quit"),Bm.forEach(t),pc=s(yi,` parameters, this looks more or less like the
    base case.`),yi.forEach(t),Hs=h(e),I(kt.$$.fragment,e),Ys=h(e),Xe=c(e,"P",{});var vi=u(Xe);mc=s(vi,"Admittedly, all those "),Xr=c(vi,"CODE",{});var Um=u(Xr);dc=s(Um,Uu),Um.forEach(t),_c=s(vi,` parameters are a bit cumbersome
    so, like anything, you should weigh the benefits against the costs.`),vi.forEach(t),js=h(e),cn=c(e,"H3",{});var Wm=u(cn);hc=s(Wm,"Comparison"),Wm.forEach(t),Qs=h(e),un=c(e,"P",{});var Mm=u(un);bc=s(Mm,"Let's wrap up by looking at what we get from each approach."),Mm.forEach(t),Fs=h(e),pn=c(e,"H4",{});var Hm=u(pn);wc=s(Hm,"Type Safety"),Hm.forEach(t),zs=h(e),ae=c(e,"P",{});var ot=u(ae);yc=s(ot,"None with "),Zr=c(ot,"B",{});var Ym=u(Zr);vc=s(Ym,"try-catch"),Ym.forEach(t),Ec=s(ot,` and roughly the same degree with
    `),eo=c(ot,"B",{});var jm=u(eo);gc=s(jm,"return types"),jm.forEach(t),$c=s(ot," and "),to=c(ot,"B",{});var Qm=u(to);Dc=s(Qm,"notry-ts"),Qm.forEach(t),xc=s(ot,` including the ability to tell at a glance
    if and what errors could occur.`),ot.forEach(t),Js=h(e),X=c(e,"P",{});var xe=u(X);kc=s(xe,"The biggest difference is that it's easier to ignore "),no=c(xe,"B",{});var Fm=u(no);Pc=s(Fm,"return types"),Fm.forEach(t),Cc=s(xe,`. If
    you call a function that normally returns `),ro=c(xe,"CODE",{});var zm=u(ro);Oc=s(zm,"void"),zm.forEach(t),Tc=s(xe,`, you can easily
    forget to check whether an error occurred. This problem only affects
    `),oo=c(xe,"B",{});var Jm=u(oo);Ac=s(Jm,"notry-ts"),Jm.forEach(t),Ic=s(xe," where "),so=c(xe,"CODE",{});var Km=u(so);Nc=s(Km,"notry"),Km.forEach(t),Rc=s(xe," is called."),xe.forEach(t),Ks=h(e),mn=c(e,"H4",{});var Gm=u(mn);Vc=s(Gm,"Developer Experience"),Gm.forEach(t),Gs=h(e),ye=c(e,"P",{});var Tn=u(ye);qc=s(Tn,"With "),io=c(Tn,"B",{});var Xm=u(io);Lc=s(Xm,"try-catch"),Xm.forEach(t),Sc=s(Tn,", you could use a utility like "),lo=c(Tn,"CODE",{});var Zm=u(lo);Bc=s(Zm,"safe"),Zm.forEach(t),Uc=s(Tn,` to incrementally
    improve your error handling done with minimal effect on readability.`),Tn.forEach(t),Xs=h(e),Pt=c(e,"P",{});var Eu=u(Pt);ao=c(Eu,"B",{});var ed=u(ao);Wc=s(ed,"return types"),ed.forEach(t),Mc=s(Eu,` are intuitive since it's natural to associate a function's
    return value with its outcome. This solution requires the greatest amount of
    code and gains usefulness the more it's used.`),Eu.forEach(t),Zs=h(e),Oe=c(e,"P",{});var _o=u(Oe);fo=c(_o,"B",{});var td=u(fo);Hc=s(td,"notry"),td.forEach(t),Yc=s(_o,` has the least intuitive and most sophisticated typing. The
    function body's intent remains clear with error handling is mostly out of
    view. As with
    `),co=c(_o,"B",{});var nd=u(co);jc=s(nd,"return types"),nd.forEach(t),Qc=s(_o,", its usefulness is dependent on how widely it's used."),_o.forEach(t),ei=h(e),dn=c(e,"H3",{});var rd=u(dn);Fc=s(rd,"Conclusion"),rd.forEach(t),ti=h(e),ne=c(e,"P",{class:!0});var st=u(ne);zc=s(st,`If you care about type safety (why else would you be here), use
    `),uo=c(st,"B",{});var od=u(uo);Jc=s(od,"return types"),od.forEach(t),Kc=s(st," or "),po=c(st,"B",{});var sd=u(po);Gc=s(sd,"notry"),sd.forEach(t),Xc=s(st,". Choose "),mo=c(st,"B",{});var id=u(mo);Zc=s(id,"notry"),id.forEach(t),eu=s(st,` for added readability
    and safety at the cost of complexity.`),st.forEach(t),ni=h(e),_n=c(e,"H3",{});var ld=u(_n);tu=s(ld,"Resources"),ld.forEach(t),ri=h(e),Te=c(e,"DIV",{class:!0});var Ei=u(Te);hn=c(Ei,"SMALL",{class:!0});var ad=u(hn);nu=s(ad,"package"),ad.forEach(t),ru=h(Ei),Ze=c(Ei,"A",{href:!0,target:!0,rel:!0});var fd=u(Ze);ou=s(fd,"notry-ts"),fd.forEach(t),Ei.forEach(t),oi=h(e),Ae=c(e,"DIV",{class:!0});var gi=u(Ae);bn=c(gi,"SMALL",{class:!0});var cd=u(bn);su=s(cd,"package"),cd.forEach(t),iu=h(gi),et=c(gi,"A",{href:!0,target:!0,rel:!0});var ud=u(et);lu=s(ud,"neverthrow"),ud.forEach(t),gi.forEach(t),si=h(e),Ie=c(e,"DIV",{class:!0});var $i=u(Ie);wn=c($i,"SMALL",{class:!0});var pd=u(wn);au=s(pd,"package"),pd.forEach(t),fu=h($i),tt=c($i,"A",{href:!0,target:!0,rel:!0});var md=u(tt);cu=s(md,"type-safe-errors"),md.forEach(t),$i.forEach(t),ii=h(e),Ne=c(e,"DIV",{class:!0});var Di=u(Ne);yn=c(Di,"SMALL",{class:!0});var dd=u(yn);uu=s(dd,"article"),dd.forEach(t),pu=h(Di),Re=c(Di,"A",{href:!0,class:!0,target:!0,rel:!0});var _d=u(Re);mu=s(_d,"Type-Safe Error Handling In TypeScript"),_d.forEach(t),Di.forEach(t),li=h(e),Ve=c(e,"DIV",{class:!0});var xi=u(Ve);vn=c(xi,"SMALL",{class:!0});var hd=u(vn);du=s(hd,"article"),hd.forEach(t),_u=h(xi),qe=c(xi,"A",{href:!0,class:!0,target:!0,rel:!0});var bd=u(qe);hu=s(bd,"Functional Error Handling"),bd.forEach(t),xi.forEach(t),ai=h(e),Le=c(e,"DIV",{class:!0});var ki=u(Le);En=c(ki,"SMALL",{class:!0});var wd=u(En);bu=s(wd,"article"),wd.forEach(t),wu=h(ki),Se=c(ki,"A",{href:!0,class:!0,target:!0,rel:!0});var yd=u(Se);yu=s(yd,"TypeScript / Implement Rust-style Result"),yd.forEach(t),ki.forEach(t),this.h()},h(){E(ne,"class","padding-bottom-large"),E(hn,"class","text-muted"),E(Ze,"href","https://github.com/nmacmunn/notry"),E(Ze,"target","_blank"),E(Ze,"rel","noreferrer"),E(Te,"class","margin-bottom"),E(bn,"class","text-muted"),E(et,"href","https://github.com/supermacro/neverthrow"),E(et,"target","_blank"),E(et,"rel","noreferrer"),E(Ae,"class","margin-bottom"),E(wn,"class","text-muted"),E(tt,"href","https://github.com/wiktor-obrebski/type-safe-errors"),E(tt,"target","_blank"),E(tt,"rel","noreferrer"),E(Ie,"class","margin-bottom"),E(yn,"class","text-muted"),E(Re,"href","https://dev.to/_gdelgado/type-safe-error-handling-in-typescript-1p4n"),E(Re,"class","success"),E(Re,"target","_blank"),E(Re,"rel","noreferrer"),E(Ne,"class","margin-bottom"),E(vn,"class","text-muted"),E(qe,"href","https://khalilstemmler.com/articles/enterprise-typescript-nodejs/functional-error-handling/"),E(qe,"class","success"),E(qe,"target","_blank"),E(qe,"rel","noreferrer"),E(Ve,"class","margin-bottom"),E(En,"class","text-muted"),E(Se,"href","https://www.huy.rocks/everyday/typescript-implement-rust-style-result"),E(Se,"class","success"),E(Se,"target","_blank"),E(Se,"rel","noreferrer"),E(Le,"class","margin-bottom")},m(e,a){p(e,r,a),n(r,l),n(r,m),n(m,d),n(r,b),p(e,w,a),N(g,e,a),p(e,C,a),p(e,y,a),n(y,T),n(y,U),n(U,Q),n(y,W),p(e,L,a),p(e,se,a),n(se,We),p(e,Z,a),N($,e,a),p(e,P,a),p(e,O,a),n(O,D),p(e,H,a),N(S,e,a),p(e,k,a),p(e,B,a),n(B,Me),n(B,pe),n(pe,At),n(B,It),n(B,ee),n(ee,Ni),n(B,Ri),p(e,go,a),p(e,Nt,a),n(Nt,Vi),p(e,$o,a),p(e,Rt,a),n(Rt,qi),p(e,Do,a),p(e,Vt,a),n(Vt,Li),p(e,xo,a),p(e,qt,a),n(qt,Si),p(e,ko,a),p(e,He,a),n(He,Bi),n(He,Rn),n(Rn,Ui),n(He,Wi),p(e,Po,a),p(e,Lt,a),n(Lt,Mi),p(e,Co,a),p(e,St,a),n(St,Hi),p(e,Oo,a),p(e,Bt,a),n(Bt,Yi),p(e,To,a),p(e,Ut,a),n(Ut,ji),p(e,Ao,a),p(e,Wt,a),n(Wt,Qi),p(e,Io,a),p(e,Mt,a),n(Mt,Fi),p(e,No,a),p(e,Ht,a),n(Ht,zi),p(e,Ro,a),p(e,me,a),n(me,Vn),n(Vn,Ji),n(me,Ki),n(me,qn),n(qn,Gi),n(me,Xi),n(me,Ln),n(Ln,Zi),p(e,Vo,a),p(e,Yt,a),n(Yt,el),p(e,qo,a),p(e,jt,a),n(jt,tl),p(e,Lo,a),p(e,Qt,a),n(Qt,nl),p(e,So,a),p(e,Ft,a),n(Ft,rl),p(e,Bo,a),N(lt,e,a),p(e,Uo,a),p(e,F,a),n(F,ol),n(F,Sn),n(Sn,sl),n(F,il),n(F,Bn),n(Bn,ll),n(F,al),n(F,Un),n(Un,fl),n(F,cl),n(F,Wn),n(Wn,ul),n(F,pl),p(e,Wo,a),p(e,zt,a),n(zt,ml),p(e,Mo,a),p(e,Ye,a),n(Ye,dl),n(Ye,Mn),n(Mn,_l),n(Ye,hl),p(e,Ho,a),N(at,e,a),p(e,Yo,a),p(e,de,a),n(de,bl),n(de,Hn),n(Hn,wl),n(de,yl),n(de,Yn),n(Yn,vl),n(de,El),p(e,jo,a),p(e,Jt,a),n(Jt,gl),p(e,Qo,a),p(e,ie,a),n(ie,Ce),n(Ce,$l),n(Ce,jn),n(jn,Dl),n(Ce,xl),n(Ce,Qn),n(Qn,kl),n(Ce,Pl),n(ie,Cl),n(ie,Fn),n(Fn,Ol),n(ie,Tl),n(ie,zn),n(zn,Al),n(ie,Il),n(ie,Kt),n(Kt,Nl),n(Kt,Jn),n(Jn,Rl),p(e,Fo,a),p(e,Gt,a),n(Gt,Vl),p(e,zo,a),p(e,Xt,a),n(Xt,ql),p(e,Jo,a),p(e,z,a),n(z,Ll),n(z,Kn),n(Kn,Sl),n(z,Bl),n(z,Gn),n(Gn,Ul),n(z,Wl),n(z,Xn),n(Xn,Ml),n(z,Hl),n(z,Zn),n(Zn,Yl),n(z,jl),p(e,Ko,a),N(ft,e,a),p(e,Go,a),p(e,Zt,a),n(Zt,Ql),p(e,Xo,a),p(e,je,a),n(je,Fl),n(je,er),n(er,zl),n(je,Jl),p(e,Zo,a),N(ct,e,a),p(e,es,a),p(e,ce,a),n(ce,tr),n(tr,Kl),n(ce,Gl),n(ce,nr),n(nr,Xl),n(ce,Zl),n(ce,rr),n(rr,ea),n(ce,ta),p(e,ts,a),N(ut,e,a),p(e,ns,a),p(e,te,a),n(te,or),n(or,na),n(te,ra),n(te,sr),n(sr,oa),n(te,sa),n(te,ir),n(ir,ia),n(te,la),n(te,lr),n(lr,aa),n(te,fa),p(e,rs,a),N(pt,e,a),p(e,os,a),p(e,Qe,a),n(Qe,ca),n(Qe,ar),n(ar,ua),n(Qe,pa),p(e,ss,a),p(e,le,a),n(le,ma),n(le,fr),n(fr,da),n(le,_a),n(le,cr),n(cr,ha),n(le,ba),n(le,ur),n(ur,wa),n(le,ya),p(e,is,a),N(mt,e,a),p(e,ls,a),p(e,_e,a),n(_e,va),n(_e,pr),n(pr,Ea),n(_e,ga),n(_e,mr),n(mr,$a),n(_e,Da),p(e,as,a),N(dt,e,a),p(e,fs,a),p(e,ue,a),n(ue,dr),n(dr,xa),n(ue,ka),n(ue,_r),n(_r,Pa),n(ue,Ca),n(ue,hr),n(hr,Oa),n(ue,Ta),p(e,cs,a),N(_t,e,a),p(e,us,a),p(e,J,a),n(J,Aa),n(J,br),n(br,Ia),n(J,Na),n(J,wr),n(wr,Ra),n(J,Va),n(J,yr),n(yr,qa),n(J,La),n(J,vr),n(vr,Sa),n(J,Ba),p(e,ps,a),N(ht,e,a),p(e,ms,a),p(e,en,a),n(en,Er),n(Er,Ua),p(e,ds,a),p(e,Fe,a),n(Fe,Wa),n(Fe,gr),n(gr,Ma),n(Fe,Ha),p(e,_s,a),N(bt,e,a),p(e,hs,a),p(e,he,a),n(he,Ya),n(he,$r),n($r,ja),n(he,Qa),n(he,Dr),n(Dr,Fa),n(he,za),p(e,bs,a),p(e,be,a),n(be,Ja),n(be,xr),n(xr,Ka),n(be,Ga),n(be,kr),n(kr,Xa),n(be,Za),p(e,ws,a),N(wt,e,a),p(e,ys,a),p(e,j,a),n(j,ef),n(j,Pr),n(Pr,tf),n(j,nf),n(j,Cr),n(Cr,rf),n(j,of),n(j,Or),n(Or,sf),n(j,lf),n(j,Tr),n(Tr,af),n(j,ff),n(j,Ar),n(Ar,cf),n(j,uf),p(e,vs,a),N(yt,e,a),p(e,Es,a),p(e,Y,a),n(Y,Ir),n(Ir,pf),n(Y,mf),n(Y,Nr),n(Nr,df),n(Y,_f),n(Y,Rr),n(Rr,hf),n(Y,bf),n(Y,Vr),n(Vr,wf),n(Y,yf),n(Y,qr),n(qr,vf),n(Y,Ef),n(Y,Lr),n(Lr,gf),n(Y,$f),p(e,gs,a),p(e,K,a),n(K,Df),n(K,Sr),n(Sr,xf),n(K,kf),n(K,Br),n(Br,Pf),n(K,Cf),n(K,Ur),n(Ur,Of),n(K,Tf),n(K,Wr),n(Wr,Af),n(K,If),p(e,$s,a),p(e,tn,a),n(tn,Nf),p(e,Ds,a),p(e,nn,a),n(nn,Rf),p(e,xs,a),N(vt,e,a),p(e,ks,a),p(e,G,a),n(G,Vf),n(G,Mr),n(Mr,qf),n(G,Lf),n(G,Hr),n(Hr,Sf),n(G,Bf),n(G,Yr),n(Yr,Uf),n(G,Wf),n(G,jr),n(jr,Mf),n(G,Hf),p(e,Ps,a),p(e,rn,a),n(rn,Yf),p(e,Cs,a),p(e,ze,a),n(ze,jf),n(ze,Qr),n(Qr,Qf),n(ze,Ff),p(e,Os,a),N(Et,e,a),p(e,Ts,a),p(e,on,a),n(on,zf),p(e,As,a),N(gt,e,a),p(e,Is,a),p(e,sn,a),n(sn,Jf),p(e,Ns,a),p(e,ln,a),n(ln,Kf),p(e,Rs,a),p(e,Je,a),n(Je,Gf),n(Je,Fr),n(Fr,Xf),n(Je,Zf),p(e,Vs,a),N($t,e,a),p(e,qs,a),p(e,we,a),n(we,ec),n(we,zr),n(zr,tc),n(we,nc),n(we,Jr),n(Jr,rc),n(we,oc),p(e,Ls,a),N(Dt,e,a),p(e,Ss,a),p(e,an,a),n(an,sc),p(e,Bs,a),p(e,fn,a),n(fn,ic),p(e,Us,a),p(e,Ke,a),n(Ke,lc),n(Ke,Kr),n(Kr,ac),n(Ke,fc),p(e,Ws,a),N(xt,e,a),p(e,Ms,a),p(e,Ge,a),n(Ge,cc),n(Ge,Gr),n(Gr,uc),n(Ge,pc),p(e,Hs,a),N(kt,e,a),p(e,Ys,a),p(e,Xe,a),n(Xe,mc),n(Xe,Xr),n(Xr,dc),n(Xe,_c),p(e,js,a),p(e,cn,a),n(cn,hc),p(e,Qs,a),p(e,un,a),n(un,bc),p(e,Fs,a),p(e,pn,a),n(pn,wc),p(e,zs,a),p(e,ae,a),n(ae,yc),n(ae,Zr),n(Zr,vc),n(ae,Ec),n(ae,eo),n(eo,gc),n(ae,$c),n(ae,to),n(to,Dc),n(ae,xc),p(e,Js,a),p(e,X,a),n(X,kc),n(X,no),n(no,Pc),n(X,Cc),n(X,ro),n(ro,Oc),n(X,Tc),n(X,oo),n(oo,Ac),n(X,Ic),n(X,so),n(so,Nc),n(X,Rc),p(e,Ks,a),p(e,mn,a),n(mn,Vc),p(e,Gs,a),p(e,ye,a),n(ye,qc),n(ye,io),n(io,Lc),n(ye,Sc),n(ye,lo),n(lo,Bc),n(ye,Uc),p(e,Xs,a),p(e,Pt,a),n(Pt,ao),n(ao,Wc),n(Pt,Mc),p(e,Zs,a),p(e,Oe,a),n(Oe,fo),n(fo,Hc),n(Oe,Yc),n(Oe,co),n(co,jc),n(Oe,Qc),p(e,ei,a),p(e,dn,a),n(dn,Fc),p(e,ti,a),p(e,ne,a),n(ne,zc),n(ne,uo),n(uo,Jc),n(ne,Kc),n(ne,po),n(po,Gc),n(ne,Xc),n(ne,mo),n(mo,Zc),n(ne,eu),p(e,ni,a),p(e,_n,a),n(_n,tu),p(e,ri,a),p(e,Te,a),n(Te,hn),n(hn,nu),n(Te,ru),n(Te,Ze),n(Ze,ou),p(e,oi,a),p(e,Ae,a),n(Ae,bn),n(bn,su),n(Ae,iu),n(Ae,et),n(et,lu),p(e,si,a),p(e,Ie,a),n(Ie,wn),n(wn,au),n(Ie,fu),n(Ie,tt),n(tt,cu),p(e,ii,a),p(e,Ne,a),n(Ne,yn),n(yn,uu),n(Ne,pu),n(Ne,Re),n(Re,mu),p(e,li,a),p(e,Ve,a),n(Ve,vn),n(vn,du),n(Ve,_u),n(Ve,qe),n(qe,hu),p(e,ai,a),p(e,Le,a),n(Le,En),n(En,bu),n(Le,wu),n(Le,Se),n(Se,yu),fi=!0},p:Ou,i(e){fi||(R(g.$$.fragment,e),R($.$$.fragment,e),R(S.$$.fragment,e),R(lt.$$.fragment,e),R(at.$$.fragment,e),R(ft.$$.fragment,e),R(ct.$$.fragment,e),R(ut.$$.fragment,e),R(pt.$$.fragment,e),R(mt.$$.fragment,e),R(dt.$$.fragment,e),R(_t.$$.fragment,e),R(ht.$$.fragment,e),R(bt.$$.fragment,e),R(wt.$$.fragment,e),R(yt.$$.fragment,e),R(vt.$$.fragment,e),R(Et.$$.fragment,e),R(gt.$$.fragment,e),R($t.$$.fragment,e),R(Dt.$$.fragment,e),R(xt.$$.fragment,e),R(kt.$$.fragment,e),fi=!0)},o(e){V(g.$$.fragment,e),V($.$$.fragment,e),V(S.$$.fragment,e),V(lt.$$.fragment,e),V(at.$$.fragment,e),V(ft.$$.fragment,e),V(ct.$$.fragment,e),V(ut.$$.fragment,e),V(pt.$$.fragment,e),V(mt.$$.fragment,e),V(dt.$$.fragment,e),V(_t.$$.fragment,e),V(ht.$$.fragment,e),V(bt.$$.fragment,e),V(wt.$$.fragment,e),V(yt.$$.fragment,e),V(vt.$$.fragment,e),V(Et.$$.fragment,e),V(gt.$$.fragment,e),V($t.$$.fragment,e),V(Dt.$$.fragment,e),V(xt.$$.fragment,e),V(kt.$$.fragment,e),fi=!1},d(e){e&&t(r),e&&t(w),q(g,e),e&&t(C),e&&t(y),e&&t(L),e&&t(se),e&&t(Z),q($,e),e&&t(P),e&&t(O),e&&t(H),q(S,e),e&&t(k),e&&t(B),e&&t(go),e&&t(Nt),e&&t($o),e&&t(Rt),e&&t(Do),e&&t(Vt),e&&t(xo),e&&t(qt),e&&t(ko),e&&t(He),e&&t(Po),e&&t(Lt),e&&t(Co),e&&t(St),e&&t(Oo),e&&t(Bt),e&&t(To),e&&t(Ut),e&&t(Ao),e&&t(Wt),e&&t(Io),e&&t(Mt),e&&t(No),e&&t(Ht),e&&t(Ro),e&&t(me),e&&t(Vo),e&&t(Yt),e&&t(qo),e&&t(jt),e&&t(Lo),e&&t(Qt),e&&t(So),e&&t(Ft),e&&t(Bo),q(lt,e),e&&t(Uo),e&&t(F),e&&t(Wo),e&&t(zt),e&&t(Mo),e&&t(Ye),e&&t(Ho),q(at,e),e&&t(Yo),e&&t(de),e&&t(jo),e&&t(Jt),e&&t(Qo),e&&t(ie),e&&t(Fo),e&&t(Gt),e&&t(zo),e&&t(Xt),e&&t(Jo),e&&t(z),e&&t(Ko),q(ft,e),e&&t(Go),e&&t(Zt),e&&t(Xo),e&&t(je),e&&t(Zo),q(ct,e),e&&t(es),e&&t(ce),e&&t(ts),q(ut,e),e&&t(ns),e&&t(te),e&&t(rs),q(pt,e),e&&t(os),e&&t(Qe),e&&t(ss),e&&t(le),e&&t(is),q(mt,e),e&&t(ls),e&&t(_e),e&&t(as),q(dt,e),e&&t(fs),e&&t(ue),e&&t(cs),q(_t,e),e&&t(us),e&&t(J),e&&t(ps),q(ht,e),e&&t(ms),e&&t(en),e&&t(ds),e&&t(Fe),e&&t(_s),q(bt,e),e&&t(hs),e&&t(he),e&&t(bs),e&&t(be),e&&t(ws),q(wt,e),e&&t(ys),e&&t(j),e&&t(vs),q(yt,e),e&&t(Es),e&&t(Y),e&&t(gs),e&&t(K),e&&t($s),e&&t(tn),e&&t(Ds),e&&t(nn),e&&t(xs),q(vt,e),e&&t(ks),e&&t(G),e&&t(Ps),e&&t(rn),e&&t(Cs),e&&t(ze),e&&t(Os),q(Et,e),e&&t(Ts),e&&t(on),e&&t(As),q(gt,e),e&&t(Is),e&&t(sn),e&&t(Ns),e&&t(ln),e&&t(Rs),e&&t(Je),e&&t(Vs),q($t,e),e&&t(qs),e&&t(we),e&&t(Ls),q(Dt,e),e&&t(Ss),e&&t(an),e&&t(Bs),e&&t(fn),e&&t(Us),e&&t(Ke),e&&t(Ws),q(xt,e),e&&t(Ms),e&&t(Ge),e&&t(Hs),q(kt,e),e&&t(Ys),e&&t(Xe),e&&t(js),e&&t(cn),e&&t(Qs),e&&t(un),e&&t(Fs),e&&t(pn),e&&t(zs),e&&t(ae),e&&t(Js),e&&t(X),e&&t(Ks),e&&t(mn),e&&t(Gs),e&&t(ye),e&&t(Xs),e&&t(Pt),e&&t(Zs),e&&t(Oe),e&&t(ei),e&&t(dn),e&&t(ti),e&&t(ne),e&&t(ni),e&&t(_n),e&&t(ri),e&&t(Te),e&&t(oi),e&&t(Ae),e&&t(si),e&&t(Ie),e&&t(ii),e&&t(Ne),e&&t(li),e&&t(Ve),e&&t(ai),e&&t(Le)}}}function I_(i){let r,l,m;return{c(){r=f("a"),l=o("notry-ts"),m=o(" is a type safe error handling alternative to try-catch"),this.h()},l(d){r=c(d,"A",{href:!0,target:!0,rel:!0});var b=u(r);l=s(b,"notry-ts"),b.forEach(t),m=s(d," is a type safe error handling alternative to try-catch"),this.h()},h(){E(r,"href","https://github.com/nmacmunn/notry"),E(r,"target","_blank"),E(r,"rel","noreferrer")},m(d,b){p(d,r,b),n(r,l),p(d,m,b)},p:Ou,d(d){d&&t(r),d&&t(m)}}}function N_(i){let r,l,m,d;return m=new zd({props:{title:R_,date:i[0],$$slots:{tldr:[I_],default:[A_]},$$scope:{ctx:i}}}),{c(){r=f("meta"),l=_(),A(m.$$.fragment),this.h()},l(b){const w=Yd("svelte-7fsaef",document.head);r=c(w,"META",{name:!0,content:!0}),w.forEach(t),l=h(b),I(m.$$.fragment,b),this.h()},h(){document.title="TypeScripting Try-Catch",E(r,"name","description"),E(r,"content","An exploration of type safe error-handling alternatives to try-catch in TypeScript.")},m(b,w){n(document.head,r),p(b,l,w),N(m,b,w),d=!0},p(b,[w]){const g={};w&1024&&(g.$$scope={dirty:w,ctx:b}),m.$set(g)},i(b){d||(R(m.$$.fragment,b),d=!0)},o(b){V(m.$$.fragment,b),d=!1},d(b){t(r),b&&t(l),q(m,b)}}}const R_="TypeScripting Try-Catch",V_='quit.unless(person, { type: "UserError", message: `${name} not found` });';function q_(i){return[new Date("February 25, 2023"),'type Why = { type: "UserError"; message: string } | { type: "DevError" };',"function getPerson(quit: Quit<Why>, name: string): Person",`quit({ type: "UserError", message: "message" }); 
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
  | { y: never; n: { val: N; exception: unknown } };`]}class M_ extends xu{constructor(r){super(),ku(this,r,q_,N_,Pu,{})}}export{M_ as default};
