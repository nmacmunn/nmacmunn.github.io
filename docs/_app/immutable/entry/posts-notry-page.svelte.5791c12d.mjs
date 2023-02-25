import{S as bn,i as wn,s as En,o as Ps,y as k,a as g,k as u,z as A,c as _,l as f,m as d,h as i,n as w,A as M,b as re,D as t,L as Cs,H as Md,g as R,d as L,B,w as sg,q as s,r as a,p as Yg,O as Ah,e as Mh,K as Rh,u as ag,J as Qg}from"../chunks/index.b3870b5c.mjs";import{_ as Rd}from"../chunks/preload-helper.41c905a7.mjs";function Kg(){return new Worker(""+new URL("../workers/ts.worker-dd39f5f5.js",import.meta.url).href)}function Gg(){return new Worker(""+new URL("../workers/editor.worker-d809e5e3.js",import.meta.url).href)}function Jg(e,n){return n==="typescript"||n==="javascript"?new Kg:new Gg}let ig=()=>{window.MonacoEnvironment={getWorker:Jg},ig=()=>{}};function Xg(e){return Ps(()=>ig()),[]}class cg extends bn{constructor(n){super(),wn(this,n,Xg,null,En,{})}}function Zg(e){let n,o,r,c,m,p,h,y;return n=new cg({}),{c(){k(n.$$.fragment),o=g(),r=u("div"),c=u("div"),m=u("div"),this.h()},l(b){A(n.$$.fragment,b),o=_(b),r=f(b,"DIV",{class:!0});var O=d(r);c=f(O,"DIV",{class:!0});var $=d(c);m=f($,"DIV",{}),d(m).forEach(i),$.forEach(i),O.forEach(i),this.h()},h(){w(c,"class","card-body"),w(r,"class","card margin-bottom-large")},m(b,O){M(n,b,O),re(b,o,O),re(b,r,O),t(r,c),t(c,m),e[4](m),p=!0,h||(y=Cs(window,"resize",e[1]),h=!0)},p:Md,i(b){p||(R(n.$$.fragment,b),p=!0)},o(b){L(n.$$.fragment,b),p=!1},d(b){B(n,b),b&&i(o),b&&i(r),e[4](null),h=!1,y()}}}function e_(e,n,o){let{original:r}=n,{modified:c}=n,m,p;function h(){if(!p)return;const b=Math.min(1e3,Math.max(p.getOriginalEditor().getContentHeight(),p.getModifiedEditor().getContentHeight())+20);o(0,m.style.height=`${b}px`,m);const{width:O}=m.getBoundingClientRect();p.layout({width:O,height:b})}Ps(async()=>{const b=await Rd(()=>import("../chunks/editor.main.0a978303.mjs").then($=>$.e),["..\\chunks\\editor.main.0a978303.mjs","..\\chunks\\preload-helper.41c905a7.mjs","..\\assets\\editor.911c6360.css"],import.meta.url),O=document.body.clientWidth>=640;return p=b.editor.createDiffEditor(m,{fontSize:O?14:12,minimap:{enabled:!1},overviewRulerLanes:0,readOnly:!0,renderSideBySide:O,scrollBeyondLastLine:!1}),p.setModel({original:b.editor.createModel(r,"typescript"),modified:b.editor.createModel(c,"typescript")}),h(),()=>p==null?void 0:p.dispose()});function y(b){sg[b?"unshift":"push"](()=>{m=b,o(0,m)})}return e.$$set=b=>{"original"in b&&o(2,r=b.original),"modified"in b&&o(3,c=b.modified)},[m,h,r,c,y]}class xd extends bn{constructor(n){super(),wn(this,n,e_,Zg,En,{original:2,modified:3})}}let W;const lg=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});lg.decode();let Ho=null;function Os(){return(Ho===null||Ho.byteLength===0)&&(Ho=new Uint8Array(W.memory.buffer)),Ho}function xs(e,n){return lg.decode(Os().subarray(e,e+n))}const je=new Array(128).fill(void 0);je.push(void 0,null,!0,!1);let Ko=je.length;function C(e){Ko===je.length&&je.push(je.length+1);const n=Ko;return Ko=je[n],je[n]=e,n}function E(e){return je[e]}function t_(e){e<132||(je[e]=Ko,Ko=e)}function zt(e){const n=E(e);return t_(e),n}let _n=0;const Ds=new TextEncoder("utf-8"),n_=typeof Ds.encodeInto=="function"?function(e,n){return Ds.encodeInto(e,n)}:function(e,n){const o=Ds.encode(e);return n.set(o),{read:e.length,written:o.length}};function ys(e,n,o){if(o===void 0){const h=Ds.encode(e),y=n(h.length);return Os().subarray(y,y+h.length).set(h),_n=h.length,y}let r=e.length,c=n(r);const m=Os();let p=0;for(;p<r;p++){const h=e.charCodeAt(p);if(h>127)break;m[c+p]=h}if(p!==r){p!==0&&(e=e.slice(p)),c=o(c,r,r=p+e.length*3);const h=Os().subarray(c+p,c+r),y=n_(e,h);p+=y.written}return _n=p,c}function qo(e){return e==null}let zo=null;function ne(){return(zo===null||zo.byteLength===0)&&(zo=new Int32Array(W.memory.buffer)),zo}let Yo=null;function r_(){return(Yo===null||Yo.byteLength===0)&&(Yo=new BigInt64Array(W.memory.buffer)),Yo}let Qo=null;function o_(){return(Qo===null||Qo.byteLength===0)&&(Qo=new Float64Array(W.memory.buffer)),Qo}function Sd(e){const n=typeof e;if(n=="number"||n=="boolean"||e==null)return`${e}`;if(n=="string")return`"${e}"`;if(n=="symbol"){const c=e.description;return c==null?"Symbol":`Symbol(${c})`}if(n=="function"){const c=e.name;return typeof c=="string"&&c.length>0?`Function(${c})`:"Function"}if(Array.isArray(e)){const c=e.length;let m="[";c>0&&(m+=Sd(e[0]));for(let p=1;p<c;p++)m+=", "+Sd(e[p]);return m+="]",m}const o=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(o.length>1)r=o[1];else return toString.call(e);if(r=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:r}function s_(e,n,o,r){const c={a:e,b:n,cnt:1,dtor:o},m=(...p)=>{c.cnt++;const h=c.a;c.a=0;try{return r(h,c.b,...p)}finally{--c.cnt===0?W.__wbindgen_export_2.get(c.dtor)(h,c.b):c.a=h}};return m.original=c,m}function a_(e,n,o){W.__wbindgen_export_3(e,n,C(o))}function i_(e,n,o){try{const p=W.__wbindgen_add_to_stack_pointer(-16);W.transformSync(p,C(e),C(n),C(o));var r=ne()[p/4+0],c=ne()[p/4+1],m=ne()[p/4+2];if(m)throw zt(c);return zt(r)}finally{W.__wbindgen_add_to_stack_pointer(16)}}function Lh(e,n){return e===0?E(n):xs(e,n)}function nt(e,n){try{return e.apply(this,n)}catch(o){W.__wbindgen_export_5(C(o))}}function c_(e,n,o,r){W.__wbindgen_export_6(e,n,C(o),C(r))}async function l_(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const o=await e.arrayBuffer();return await WebAssembly.instantiate(o,n)}else{const o=await WebAssembly.instantiate(e,n);return o instanceof WebAssembly.Instance?{instance:o,module:e}:o}}function u_(){const e={};return e.wbg={},e.wbg.__wbg_new_f9876326328f45ed=function(){const n=new Object;return C(n)},e.wbg.__wbindgen_string_new=function(n,o){const r=xs(n,o);return C(r)},e.wbg.__wbg_set_20cbc34131e76824=function(n,o,r){E(n)[zt(o)]=zt(r)},e.wbg.__wbindgen_object_drop_ref=function(n){zt(n)},e.wbg.__wbindgen_number_new=function(n){return C(n)},e.wbg.__wbg_new_b525de17f44a8943=function(){const n=new Array;return C(n)},e.wbg.__wbg_set_17224bc548dd1d7b=function(n,o,r){E(n)[o>>>0]=zt(r)},e.wbg.__wbindgen_string_get=function(n,o){const r=E(o),c=typeof r=="string"?r:void 0;var m=qo(c)?0:ys(c,W.__wbindgen_export_0,W.__wbindgen_export_1),p=_n;ne()[n/4+1]=p,ne()[n/4+0]=m},e.wbg.__wbindgen_jsval_loose_eq=function(n,o){return E(n)==E(o)},e.wbg.__wbindgen_error_new=function(n,o){const r=new Error(xs(n,o));return C(r)},e.wbg.__wbindgen_is_string=function(n){return typeof E(n)=="string"},e.wbg.__wbindgen_is_object=function(n){const o=E(n);return typeof o=="object"&&o!==null},e.wbg.__wbg_entries_4e1315b774245952=function(n){const o=Object.entries(E(n));return C(o)},e.wbg.__wbg_length_e498fbc24f9c1d4f=function(n){return E(n).length},e.wbg.__wbg_get_27fe3dac1c4d0224=function(n,o){const r=E(n)[o>>>0];return C(r)},e.wbg.__wbg_getwithrefkey_15c62c2b8546208d=function(n,o){const r=E(n)[E(o)];return C(r)},e.wbg.__wbindgen_is_undefined=function(n){return E(n)===void 0},e.wbg.__wbindgen_in=function(n,o){return E(n)in E(o)},e.wbg.__wbg_set_388c4c6422704173=function(n,o,r){const c=E(n).set(E(o),E(r));return C(c)},e.wbg.__wbindgen_boolean_get=function(n){const o=E(n);return typeof o=="boolean"?o?1:0:2},e.wbg.__wbindgen_is_bigint=function(n){return typeof E(n)=="bigint"},e.wbg.__wbindgen_bigint_get_as_i64=function(n,o){const r=E(o),c=typeof r=="bigint"?r:void 0;r_()[n/8+1]=qo(c)?BigInt(0):c,ne()[n/4+0]=!qo(c)},e.wbg.__wbindgen_bigint_from_i64=function(n){return C(n)},e.wbg.__wbindgen_jsval_eq=function(n,o){return E(n)===E(o)},e.wbg.__wbindgen_number_get=function(n,o){const r=E(o),c=typeof r=="number"?r:void 0;o_()[n/8+1]=qo(c)?0:c,ne()[n/4+0]=!qo(c)},e.wbg.__wbg_isSafeInteger_8c4789029e885159=function(n){return Number.isSafeInteger(E(n))},e.wbg.__wbg_isArray_39d28997bf6b96b4=function(n){return Array.isArray(E(n))},e.wbg.__wbg_iterator_55f114446221aa5a=function(){return C(Symbol.iterator)},e.wbg.__wbindgen_bigint_from_u64=function(n){const o=BigInt.asUintN(64,n);return C(o)},e.wbg.__wbg_new_f841cc6f2098f4b5=function(){return C(new Map)},e.wbg.__wbg_call_9495de66fdbe016b=function(){return nt(function(n,o,r){const c=E(n).call(E(o),E(r));return C(c)},arguments)},e.wbg.__wbindgen_is_null=function(n){return E(n)===null},e.wbg.__wbg_next_88560ec06a094dea=function(){return nt(function(n){const o=E(n).next();return C(o)},arguments)},e.wbg.__wbg_done_1ebec03bbd919843=function(n){return E(n).done},e.wbg.__wbg_value_6ac8da5cc5b3efda=function(n){const o=E(n).value;return C(o)},e.wbg.__wbg_new_9d3a9ce4282a18a8=function(n,o){try{var r={a:n,b:o},c=(p,h)=>{const y=r.a;r.a=0;try{return c_(y,r.b,p,h)}finally{r.a=y}};const m=new Promise(c);return C(m)}finally{r.a=r.b=0}},e.wbg.__wbg_new0_25059e40b1c02766=function(){const n=new Date;return C(n)},e.wbg.__wbg_getTimezoneOffset_2a6b27fb18493a56=function(n){return E(n).getTimezoneOffset()},e.wbg.__wbg_self_e7c1f827057f6584=function(){return nt(function(){const n=self.self;return C(n)},arguments)},e.wbg.__wbg_window_a09ec664e14b1b81=function(){return nt(function(){const n=window.window;return C(n)},arguments)},e.wbg.__wbg_globalThis_87cbb8506fecf3a9=function(){return nt(function(){const n=globalThis.globalThis;return C(n)},arguments)},e.wbg.__wbg_global_c85a9259e621f3db=function(){return nt(function(){const n=global.global;return C(n)},arguments)},e.wbg.__wbg_newnoargs_2b8b6bd7753c76ba=function(n,o){var r=Lh(n,o);const c=new Function(r);return C(c)},e.wbg.__wbg_call_95d1ea488d03e4e8=function(){return nt(function(n,o){const r=E(n).call(E(o));return C(r)},arguments)},e.wbg.__wbindgen_object_clone_ref=function(n){const o=E(n);return C(o)},e.wbg.__wbg_get_baf4855f9a986186=function(){return nt(function(n,o){const r=Reflect.get(E(n),E(o));return C(r)},arguments)},e.wbg.__wbg_getTime_7c59072d1651a3cf=function(n){return E(n).getTime()},e.wbg.__wbg_new_abda76e883ba8a5f=function(){const n=new Error;return C(n)},e.wbg.__wbg_stack_658279fe44541cf6=function(n,o){const r=E(o).stack,c=ys(r,W.__wbindgen_export_0,W.__wbindgen_export_1),m=_n;ne()[n/4+1]=m,ne()[n/4+0]=c},e.wbg.__wbg_error_f851667af71bcfc6=function(n,o){var r=Lh(n,o);n!==0&&W.__wbindgen_export_4(n,o),console.error(r)},e.wbg.__wbindgen_is_function=function(n){return typeof E(n)=="function"},e.wbg.__wbg_next_b7d530c04fd8b217=function(n){const o=E(n).next;return C(o)},e.wbg.__wbg_length_27a2afe8ab42b09f=function(n){return E(n).length},e.wbg.__wbindgen_memory=function(){const n=W.memory;return C(n)},e.wbg.__wbg_buffer_cf65c07de34b9a08=function(n){const o=E(n).buffer;return C(o)},e.wbg.__wbg_new_537b7341ce90bb31=function(n){const o=new Uint8Array(E(n));return C(o)},e.wbg.__wbg_set_17499e8aa4003ebd=function(n,o,r){E(n).set(E(o),r>>>0)},e.wbg.__wbg_instanceof_Uint8Array_01cebe79ca606cca=function(n){let o;try{o=E(n)instanceof Uint8Array}catch{o=!1}return o},e.wbg.__wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065=function(n){let o;try{o=E(n)instanceof ArrayBuffer}catch{o=!1}return o},e.wbg.__wbg_String_91fba7ded13ba54c=function(n,o){const r=String(E(o)),c=ys(r,W.__wbindgen_export_0,W.__wbindgen_export_1),m=_n;ne()[n/4+1]=m,ne()[n/4+0]=c},e.wbg.__wbindgen_debug_string=function(n,o){const r=Sd(E(o)),c=ys(r,W.__wbindgen_export_0,W.__wbindgen_export_1),m=_n;ne()[n/4+1]=m,ne()[n/4+0]=c},e.wbg.__wbindgen_throw=function(n,o){throw new Error(xs(n,o))},e.wbg.__wbg_resolve_fd40f858d9db1a04=function(n){const o=Promise.resolve(E(n));return C(o)},e.wbg.__wbindgen_cb_drop=function(n){const o=zt(n).original;return o.cnt--==1?(o.a=0,!0):!1},e.wbg.__wbg_then_ec5db6d509eb475f=function(n,o){const r=E(n).then(E(o));return C(r)},e.wbg.__wbindgen_closure_wrapper19025=function(n,o,r){const c=s_(n,o,236,a_);return C(c)},e}function f_(e,n){return W=e.exports,ug.__wbindgen_wasm_module=n,Yo=null,Qo=null,zo=null,Ho=null,W}async function ug(e){typeof e>"u"&&(e=new URL(""+new URL("../assets/wasm-web_bg.09007752.wasm",import.meta.url).href,self.location));const n=u_();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:o,module:r}=await l_(await e,n);return f_(o,r)}const d_=""+new URL("../assets/wasm-web_bg.09007752.wasm",import.meta.url).href;var Ld={};Object.defineProperty(Ld,"__esModule",{value:!0});var fg=Ld.notry=void 0;class gn{constructor(n,o=void 0){this.val=n,this.exception=o}}const p_=Object.assign(e=>{throw new gn(e)},{if:(e,n)=>{if(e)throw new gn(n)},catch:(e,...n)=>{const o=n.pop();try{const r=e(...n);return r instanceof Promise?r.catch(c=>{throw new gn(o,c)}):r}catch(r){throw new gn(o,r)}},unless:(e,n)=>{if(!e)throw new gn(n)}});function m_(e,...n){function o(r){if(r instanceof gn)return{ok:!1,n:r.val,exception:r.exception};throw r}try{const r=e(p_,...n);return r instanceof Promise?r.then(c=>({ok:!0,y:c})).catch(o):{ok:!0,y:r}}catch(r){return o(r)}}fg=Ld.notry=m_;var ut={},kd={},h_={get exports(){return kd},set exports(e){kd=e}};(function(e){const o=(m=0)=>p=>`\x1B[${38+m};5;${p}m`,r=(m=0)=>(p,h,y)=>`\x1B[${38+m};2;${p};${h};${y}m`;function c(){const m=new Map,p={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};p.color.gray=p.color.blackBright,p.bgColor.bgGray=p.bgColor.bgBlackBright,p.color.grey=p.color.blackBright,p.bgColor.bgGrey=p.bgColor.bgBlackBright;for(const[h,y]of Object.entries(p)){for(const[b,O]of Object.entries(y))p[b]={open:`\x1B[${O[0]}m`,close:`\x1B[${O[1]}m`},y[b]=p[b],m.set(O[0],O[1]);Object.defineProperty(p,h,{value:y,enumerable:!1})}return Object.defineProperty(p,"codes",{value:m,enumerable:!1}),p.color.close="\x1B[39m",p.bgColor.close="\x1B[49m",p.color.ansi256=o(),p.color.ansi16m=r(),p.bgColor.ansi256=o(10),p.bgColor.ansi16m=r(10),Object.defineProperties(p,{rgbToAnsi256:{value:(h,y,b)=>h===y&&y===b?h<8?16:h>248?231:Math.round((h-8)/247*24)+232:16+36*Math.round(h/255*5)+6*Math.round(y/255*5)+Math.round(b/255*5),enumerable:!1},hexToRgb:{value:h=>{const y=/(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(h.toString(16));if(!y)return[0,0,0];let{colorString:b}=y.groups;b.length===3&&(b=b.split("").map($=>$+$).join(""));const O=Number.parseInt(b,16);return[O>>16&255,O>>8&255,O&255]},enumerable:!1},hexToAnsi256:{value:h=>p.rgbToAnsi256(...p.hexToRgb(h)),enumerable:!1}}),p}Object.defineProperty(e,"exports",{enumerable:!0,get:c})})(h_);var Ve={};Object.defineProperty(Ve,"__esModule",{value:!0});Ve.printIteratorEntries=__;Ve.printIteratorValues=y_;Ve.printListItems=b_;Ve.printObjectProperties=w_;const g_=(e,n)=>{const o=Object.keys(e),r=n!==null?o.sort(n):o;return Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(e).forEach(c=>{Object.getOwnPropertyDescriptor(e,c).enumerable&&r.push(c)}),r};function __(e,n,o,r,c,m,p=": "){let h="",y=0,b=e.next();if(!b.done){h+=n.spacingOuter;const O=o+n.indent;for(;!b.done;){if(h+=O,y++===n.maxWidth){h+="…";break}const $=m(b.value[0],n,O,r,c),S=m(b.value[1],n,O,r,c);h+=$+p+S,b=e.next(),b.done?n.min||(h+=","):h+=`,${n.spacingInner}`}h+=n.spacingOuter+o}return h}function y_(e,n,o,r,c,m){let p="",h=0,y=e.next();if(!y.done){p+=n.spacingOuter;const b=o+n.indent;for(;!y.done;){if(p+=b,h++===n.maxWidth){p+="…";break}p+=m(y.value,n,b,r,c),y=e.next(),y.done?n.min||(p+=","):p+=`,${n.spacingInner}`}p+=n.spacingOuter+o}return p}function b_(e,n,o,r,c,m){let p="";if(e.length){p+=n.spacingOuter;const h=o+n.indent;for(let y=0;y<e.length;y++){if(p+=h,y===n.maxWidth){p+="…";break}y in e&&(p+=m(e[y],n,h,r,c)),y<e.length-1?p+=`,${n.spacingInner}`:n.min||(p+=",")}p+=n.spacingOuter+o}return p}function w_(e,n,o,r,c,m){let p="";const h=g_(e,n.compareKeys);if(h.length){p+=n.spacingOuter;const y=o+n.indent;for(let b=0;b<h.length;b++){const O=h[b],$=m(O,n,y,r,c),S=m(e[O],n,y,r,c);p+=`${y+$}: ${S}`,b<h.length-1?p+=`,${n.spacingInner}`:n.min||(p+=",")}p+=n.spacingOuter+o}return p}var ot={};Object.defineProperty(ot,"__esModule",{value:!0});ot.test=ot.serialize=ot.default=void 0;var Bh=Ve,Dd=globalThis["jest-symbol-do-not-touch"]||globalThis.Symbol;const E_=typeof Dd=="function"&&Dd.for?Dd.for("jest.asymmetricMatcher"):1267621,bs=" ",dg=(e,n,o,r,c,m)=>{const p=e.toString();if(p==="ArrayContaining"||p==="ArrayNotContaining")return++r>n.maxDepth?`[${p}]`:`${p+bs}[${(0,Bh.printListItems)(e.sample,n,o,r,c,m)}]`;if(p==="ObjectContaining"||p==="ObjectNotContaining")return++r>n.maxDepth?`[${p}]`:`${p+bs}{${(0,Bh.printObjectProperties)(e.sample,n,o,r,c,m)}}`;if(p==="StringMatching"||p==="StringNotMatching"||p==="StringContaining"||p==="StringNotContaining")return p+bs+m(e.sample,n,o,r,c);if(typeof e.toAsymmetricMatcher!="function")throw new Error(`Asymmetric matcher ${e.constructor.name} does not implement toAsymmetricMatcher()`);return e.toAsymmetricMatcher()};ot.serialize=dg;const pg=e=>e&&e.$$typeof===E_;ot.test=pg;const v_={serialize:dg,test:pg};var $_=v_;ot.default=$_;var st={};Object.defineProperty(st,"__esModule",{value:!0});st.test=st.serialize=st.default=void 0;var jh=Ve;const O_=" ",mg=["DOMStringMap","NamedNodeMap"],x_=/^(HTML\w*Collection|NodeList)$/,D_=e=>mg.indexOf(e)!==-1||x_.test(e),hg=e=>e&&e.constructor&&!!e.constructor.name&&D_(e.constructor.name);st.test=hg;const P_=e=>e.constructor.name==="NamedNodeMap",gg=(e,n,o,r,c,m)=>{const p=e.constructor.name;return++r>n.maxDepth?`[${p}]`:(n.min?"":p+O_)+(mg.indexOf(p)!==-1?`{${(0,jh.printObjectProperties)(P_(e)?Array.from(e).reduce((h,y)=>(h[y.name]=y.value,h),{}):{...e},n,o,r,c,m)}}`:`[${(0,jh.printListItems)(Array.from(e),n,o,r,c,m)}]`)};st.serialize=gg;const C_={serialize:gg,test:hg};var T_=C_;st.default=T_;var at={},z={},Bd={};Object.defineProperty(Bd,"__esModule",{value:!0});Bd.default=N_;function N_(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}Object.defineProperty(z,"__esModule",{value:!0});z.printText=z.printProps=z.printElementAsLeaf=z.printElement=z.printComment=z.printChildren=void 0;var _g=I_(Bd);function I_(e){return e&&e.__esModule?e:{default:e}}const S_=(e,n,o,r,c,m,p)=>{const h=r+o.indent,y=o.colors;return e.map(b=>{const O=n[b];let $=p(O,o,h,c,m);return typeof O!="string"&&($.indexOf(`
`)!==-1&&($=o.spacingOuter+h+$+o.spacingOuter+r),$=`{${$}}`),`${o.spacingInner+r+y.prop.open+b+y.prop.close}=${y.value.open}${$}${y.value.close}`}).join("")};z.printProps=S_;const k_=(e,n,o,r,c,m)=>e.map(p=>n.spacingOuter+o+(typeof p=="string"?yg(p,n):m(p,n,o,r,c))).join("");z.printChildren=k_;const yg=(e,n)=>{const o=n.colors.content;return o.open+(0,_g.default)(e)+o.close};z.printText=yg;const A_=(e,n)=>{const o=n.colors.comment;return`${o.open}<!--${(0,_g.default)(e)}-->${o.close}`};z.printComment=A_;const M_=(e,n,o,r,c)=>{const m=r.colors.tag;return`${m.open}<${e}${n&&m.close+n+r.spacingOuter+c+m.open}${o?`>${m.close}${o}${r.spacingOuter}${c}${m.open}</${e}`:`${n&&!r.min?"":" "}/`}>${m.close}`};z.printElement=M_;const R_=(e,n)=>{const o=n.colors.tag;return`${o.open}<${e}${o.close} …${o.open} />${o.close}`};z.printElementAsLeaf=R_;Object.defineProperty(at,"__esModule",{value:!0});at.test=at.serialize=at.default=void 0;var mn=z;const L_=1,bg=3,wg=8,Eg=11,B_=/^((HTML|SVG)\w*)?Element$/,j_=e=>{try{return typeof e.hasAttribute=="function"&&e.hasAttribute("is")}catch{return!1}},V_=e=>{const n=e.constructor.name,{nodeType:o,tagName:r}=e,c=typeof r=="string"&&r.includes("-")||j_(e);return o===L_&&(B_.test(n)||c)||o===bg&&n==="Text"||o===wg&&n==="Comment"||o===Eg&&n==="DocumentFragment"},vg=e=>{var n;return((n=e==null?void 0:e.constructor)==null?void 0:n.name)&&V_(e)};at.test=vg;function U_(e){return e.nodeType===bg}function W_(e){return e.nodeType===wg}function Pd(e){return e.nodeType===Eg}const $g=(e,n,o,r,c,m)=>{if(U_(e))return(0,mn.printText)(e.data,n);if(W_(e))return(0,mn.printComment)(e.data,n);const p=Pd(e)?"DocumentFragment":e.tagName.toLowerCase();return++r>n.maxDepth?(0,mn.printElementAsLeaf)(p,n):(0,mn.printElement)(p,(0,mn.printProps)(Pd(e)?[]:Array.from(e.attributes).map(h=>h.name).sort(),Pd(e)?{}:Array.from(e.attributes).reduce((h,y)=>(h[y.name]=y.value,h),{}),n,o+n.indent,r,c,m),(0,mn.printChildren)(Array.prototype.slice.call(e.childNodes||e.children),n,o+n.indent,r,c,m),n,o)};at.serialize=$g;const q_={serialize:$g,test:vg};var F_=q_;at.default=F_;var it={};Object.defineProperty(it,"__esModule",{value:!0});it.test=it.serialize=it.default=void 0;var Go=Ve;const H_="@@__IMMUTABLE_ITERABLE__@@",z_="@@__IMMUTABLE_LIST__@@",Y_="@@__IMMUTABLE_KEYED__@@",Q_="@@__IMMUTABLE_MAP__@@",Vh="@@__IMMUTABLE_ORDERED__@@",K_="@@__IMMUTABLE_RECORD__@@",G_="@@__IMMUTABLE_SEQ__@@",J_="@@__IMMUTABLE_SET__@@",X_="@@__IMMUTABLE_STACK__@@",yn=e=>`Immutable.${e}`,Ts=e=>`[${e}]`,Jo=" ",Uh="…",Z_=(e,n,o,r,c,m,p)=>++r>n.maxDepth?Ts(yn(p)):`${yn(p)+Jo}{${(0,Go.printIteratorEntries)(e.entries(),n,o,r,c,m)}}`;function ey(e){let n=0;return{next(){if(n<e._keys.length){const o=e._keys[n++];return{done:!1,value:[o,e.get(o)]}}return{done:!0,value:void 0}}}}const ty=(e,n,o,r,c,m)=>{const p=yn(e._name||"Record");return++r>n.maxDepth?Ts(p):`${p+Jo}{${(0,Go.printIteratorEntries)(ey(e),n,o,r,c,m)}}`},ny=(e,n,o,r,c,m)=>{const p=yn("Seq");return++r>n.maxDepth?Ts(p):e[Y_]?`${p+Jo}{${e._iter||e._object?(0,Go.printIteratorEntries)(e.entries(),n,o,r,c,m):Uh}}`:`${p+Jo}[${e._iter||e._array||e._collection||e._iterable?(0,Go.printIteratorValues)(e.values(),n,o,r,c,m):Uh}]`},Cd=(e,n,o,r,c,m,p)=>++r>n.maxDepth?Ts(yn(p)):`${yn(p)+Jo}[${(0,Go.printIteratorValues)(e.values(),n,o,r,c,m)}]`,Og=(e,n,o,r,c,m)=>e[Q_]?Z_(e,n,o,r,c,m,e[Vh]?"OrderedMap":"Map"):e[z_]?Cd(e,n,o,r,c,m,"List"):e[J_]?Cd(e,n,o,r,c,m,e[Vh]?"OrderedSet":"Set"):e[X_]?Cd(e,n,o,r,c,m,"Stack"):e[G_]?ny(e,n,o,r,c,m):ty(e,n,o,r,c,m);it.serialize=Og;const xg=e=>e&&(e[H_]===!0||e[K_]===!0);it.test=xg;const ry={serialize:Og,test:xg};var oy=ry;it.default=oy;var ct={},Ad={},sy={get exports(){return Ad},set exports(e){Ad=e}},I={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd=Symbol.for("react.element"),Vd=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),Is=Symbol.for("react.strict_mode"),Ss=Symbol.for("react.profiler"),ks=Symbol.for("react.provider"),As=Symbol.for("react.context"),ay=Symbol.for("react.server_context"),Ms=Symbol.for("react.forward_ref"),Rs=Symbol.for("react.suspense"),Ls=Symbol.for("react.suspense_list"),Bs=Symbol.for("react.memo"),js=Symbol.for("react.lazy"),iy=Symbol.for("react.offscreen"),Dg;Dg=Symbol.for("react.module.reference");function ue(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case jd:switch(e=e.type,e){case Ns:case Ss:case Is:case Rs:case Ls:return e;default:switch(e=e&&e.$$typeof,e){case ay:case As:case Ms:case js:case Bs:case ks:return e;default:return n}}case Vd:return n}}}I.ContextConsumer=As;I.ContextProvider=ks;I.Element=jd;I.ForwardRef=Ms;I.Fragment=Ns;I.Lazy=js;I.Memo=Bs;I.Portal=Vd;I.Profiler=Ss;I.StrictMode=Is;I.Suspense=Rs;I.SuspenseList=Ls;I.isAsyncMode=function(){return!1};I.isConcurrentMode=function(){return!1};I.isContextConsumer=function(e){return ue(e)===As};I.isContextProvider=function(e){return ue(e)===ks};I.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===jd};I.isForwardRef=function(e){return ue(e)===Ms};I.isFragment=function(e){return ue(e)===Ns};I.isLazy=function(e){return ue(e)===js};I.isMemo=function(e){return ue(e)===Bs};I.isPortal=function(e){return ue(e)===Vd};I.isProfiler=function(e){return ue(e)===Ss};I.isStrictMode=function(e){return ue(e)===Is};I.isSuspense=function(e){return ue(e)===Rs};I.isSuspenseList=function(e){return ue(e)===Ls};I.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ns||e===Ss||e===Is||e===Rs||e===Ls||e===iy||typeof e=="object"&&e!==null&&(e.$$typeof===js||e.$$typeof===Bs||e.$$typeof===ks||e.$$typeof===As||e.$$typeof===Ms||e.$$typeof===Dg||e.getModuleId!==void 0)};I.typeOf=ue;(function(e){e.exports=I})(sy);Object.defineProperty(ct,"__esModule",{value:!0});ct.test=ct.serialize=ct.default=void 0;var Ht=cy(Ad),ws=z;function Pg(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,o=new WeakMap;return(Pg=function(r){return r?o:n})(e)}function cy(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var o=Pg(n);if(o&&o.has(e))return o.get(e);var r={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in e)if(m!=="default"&&Object.prototype.hasOwnProperty.call(e,m)){var p=c?Object.getOwnPropertyDescriptor(e,m):null;p&&(p.get||p.set)?Object.defineProperty(r,m,p):r[m]=e[m]}return r.default=e,o&&o.set(e,r),r}const Cg=(e,n=[])=>(Array.isArray(e)?e.forEach(o=>{Cg(o,n)}):e!=null&&e!==!1&&n.push(e),n),Wh=e=>{const n=e.type;if(typeof n=="string")return n;if(typeof n=="function")return n.displayName||n.name||"Unknown";if(Ht.isFragment(e))return"React.Fragment";if(Ht.isSuspense(e))return"React.Suspense";if(typeof n=="object"&&n!==null){if(Ht.isContextProvider(e))return"Context.Provider";if(Ht.isContextConsumer(e))return"Context.Consumer";if(Ht.isForwardRef(e)){if(n.displayName)return n.displayName;const o=n.render.displayName||n.render.name||"";return o!==""?`ForwardRef(${o})`:"ForwardRef"}if(Ht.isMemo(e)){const o=n.displayName||n.type.displayName||n.type.name||"";return o!==""?`Memo(${o})`:"Memo"}}return"UNDEFINED"},ly=e=>{const{props:n}=e;return Object.keys(n).filter(o=>o!=="children"&&n[o]!==void 0).sort()},Tg=(e,n,o,r,c,m)=>++r>n.maxDepth?(0,ws.printElementAsLeaf)(Wh(e),n):(0,ws.printElement)(Wh(e),(0,ws.printProps)(ly(e),e.props,n,o+n.indent,r,c,m),(0,ws.printChildren)(Cg(e.props.children),n,o+n.indent,r,c,m),n,o);ct.serialize=Tg;const Ng=e=>e!=null&&Ht.isElement(e);ct.test=Ng;const uy={serialize:Tg,test:Ng};var fy=uy;ct.default=fy;var lt={};Object.defineProperty(lt,"__esModule",{value:!0});lt.test=lt.serialize=lt.default=void 0;var Es=z,Td=globalThis["jest-symbol-do-not-touch"]||globalThis.Symbol;const dy=typeof Td=="function"&&Td.for?Td.for("react.test.json"):245830487,py=e=>{const{props:n}=e;return n?Object.keys(n).filter(o=>n[o]!==void 0).sort():[]},Ig=(e,n,o,r,c,m)=>++r>n.maxDepth?(0,Es.printElementAsLeaf)(e.type,n):(0,Es.printElement)(e.type,e.props?(0,Es.printProps)(py(e),e.props,n,o+n.indent,r,c,m):"",e.children?(0,Es.printChildren)(e.children,n,o+n.indent,r,c,m):"",n,o);lt.serialize=Ig;const Sg=e=>e&&e.$$typeof===dy;lt.test=Sg;const my={serialize:Ig,test:Sg};var hy=my;lt.default=hy;Object.defineProperty(ut,"__esModule",{value:!0});var kg=ut.default=ut.DEFAULT_OPTIONS=void 0;ut.format=Fg;ut.plugins=void 0;var gy=Yt(kd),Fo=Ve,_y=Yt(ot),yy=Yt(st),by=Yt(at),wy=Yt(it),Ey=Yt(ct),vy=Yt(lt);function Yt(e){return e&&e.__esModule?e:{default:e}}const Ag=Object.prototype.toString,$y=Date.prototype.toISOString,Oy=Error.prototype.toString,qh=RegExp.prototype.toString,Nd=e=>typeof e.constructor=="function"&&e.constructor.name||"Object",xy=e=>typeof window<"u"&&e===window,Dy=/^Symbol\((.*)\)(.*)$/,Py=/\n/gi;class Mg extends Error{constructor(n,o){super(n),this.stack=o,this.name=this.constructor.name}}function Cy(e){return e==="[object Array]"||e==="[object ArrayBuffer]"||e==="[object DataView]"||e==="[object Float32Array]"||e==="[object Float64Array]"||e==="[object Int8Array]"||e==="[object Int16Array]"||e==="[object Int32Array]"||e==="[object Uint8Array]"||e==="[object Uint8ClampedArray]"||e==="[object Uint16Array]"||e==="[object Uint32Array]"}function Ty(e){return Object.is(e,-0)?"-0":String(e)}function Ny(e){return String(`${e}n`)}function Fh(e,n){return n?`[Function ${e.name||"anonymous"}]`:"[Function]"}function Hh(e){return String(e).replace(Dy,"Symbol($1)")}function zh(e){return`[${Oy.call(e)}]`}function Rg(e,n,o,r){if(e===!0||e===!1)return`${e}`;if(e===void 0)return"undefined";if(e===null)return"null";const c=typeof e;if(c==="number")return Ty(e);if(c==="bigint")return Ny(e);if(c==="string")return r?`"${e.replace(/"|\\/g,"\\$&")}"`:`"${e}"`;if(c==="function")return Fh(e,n);if(c==="symbol")return Hh(e);const m=Ag.call(e);return m==="[object WeakMap]"?"WeakMap {}":m==="[object WeakSet]"?"WeakSet {}":m==="[object Function]"||m==="[object GeneratorFunction]"?Fh(e,n):m==="[object Symbol]"?Hh(e):m==="[object Date]"?isNaN(+e)?"Date { NaN }":$y.call(e):m==="[object Error]"?zh(e):m==="[object RegExp]"?o?qh.call(e).replace(/[\\^$*+?.()|[\]{}]/g,"\\$&"):qh.call(e):e instanceof Error?zh(e):null}function Lg(e,n,o,r,c,m){if(c.indexOf(e)!==-1)return"[Circular]";c=c.slice(),c.push(e);const p=++r>n.maxDepth,h=n.min;if(n.callToJSON&&!p&&e.toJSON&&typeof e.toJSON=="function"&&!m)return rt(e.toJSON(),n,o,r,c,!0);const y=Ag.call(e);return y==="[object Arguments]"?p?"[Arguments]":`${h?"":"Arguments "}[${(0,Fo.printListItems)(e,n,o,r,c,rt)}]`:Cy(y)?p?`[${e.constructor.name}]`:`${h||!n.printBasicPrototype&&e.constructor.name==="Array"?"":`${e.constructor.name} `}[${(0,Fo.printListItems)(e,n,o,r,c,rt)}]`:y==="[object Map]"?p?"[Map]":`Map {${(0,Fo.printIteratorEntries)(e.entries(),n,o,r,c,rt," => ")}}`:y==="[object Set]"?p?"[Set]":`Set {${(0,Fo.printIteratorValues)(e.values(),n,o,r,c,rt)}}`:p||xy(e)?`[${Nd(e)}]`:`${h||!n.printBasicPrototype&&Nd(e)==="Object"?"":`${Nd(e)} `}{${(0,Fo.printObjectProperties)(e,n,o,r,c,rt)}}`}function Iy(e){return e.serialize!=null}function Bg(e,n,o,r,c,m){let p;try{p=Iy(e)?e.serialize(n,o,r,c,m,rt):e.print(n,h=>rt(h,o,r,c,m),h=>{const y=r+o.indent;return y+h.replace(Py,`
${y}`)},{edgeSpacing:o.spacingOuter,min:o.min,spacing:o.spacingInner},o.colors)}catch(h){throw new Mg(h.message,h.stack)}if(typeof p!="string")throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof p}".`);return p}function jg(e,n){for(let o=0;o<e.length;o++)try{if(e[o].test(n))return e[o]}catch(r){throw new Mg(r.message,r.stack)}return null}function rt(e,n,o,r,c,m){const p=jg(n.plugins,e);if(p!==null)return Bg(p,e,n,o,r,c);const h=Rg(e,n.printFunctionName,n.escapeRegex,n.escapeString);return h!==null?h:Lg(e,n,o,r,c,m)}const Ud={comment:"gray",content:"reset",prop:"yellow",tag:"cyan",value:"green"},Vg=Object.keys(Ud),Sy=e=>e,le=Sy({callToJSON:!0,compareKeys:void 0,escapeRegex:!1,escapeString:!0,highlight:!1,indent:2,maxDepth:1/0,maxWidth:1/0,min:!1,plugins:[],printBasicPrototype:!0,printFunctionName:!0,theme:Ud});ut.DEFAULT_OPTIONS=le;function ky(e){if(Object.keys(e).forEach(n=>{if(!Object.prototype.hasOwnProperty.call(le,n))throw new Error(`pretty-format: Unknown option "${n}".`)}),e.min&&e.indent!==void 0&&e.indent!==0)throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');if(e.theme!==void 0){if(e.theme===null)throw new Error('pretty-format: Option "theme" must not be null.');if(typeof e.theme!="object")throw new Error(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`)}}const Ay=e=>Vg.reduce((n,o)=>{const r=e.theme&&e.theme[o]!==void 0?e.theme[o]:Ud[o],c=r&&gy.default[r];if(c&&typeof c.close=="string"&&typeof c.open=="string")n[o]=c;else throw new Error(`pretty-format: Option "theme" has a key "${o}" whose value "${r}" is undefined in ansi-styles.`);return n},Object.create(null)),My=()=>Vg.reduce((e,n)=>(e[n]={close:"",open:""},e),Object.create(null)),Ug=e=>(e==null?void 0:e.printFunctionName)??le.printFunctionName,Wg=e=>(e==null?void 0:e.escapeRegex)??le.escapeRegex,qg=e=>(e==null?void 0:e.escapeString)??le.escapeString,Yh=e=>({callToJSON:(e==null?void 0:e.callToJSON)??le.callToJSON,colors:e!=null&&e.highlight?Ay(e):My(),compareKeys:typeof(e==null?void 0:e.compareKeys)=="function"||(e==null?void 0:e.compareKeys)===null?e.compareKeys:le.compareKeys,escapeRegex:Wg(e),escapeString:qg(e),indent:e!=null&&e.min?"":Ry((e==null?void 0:e.indent)??le.indent),maxDepth:(e==null?void 0:e.maxDepth)??le.maxDepth,maxWidth:(e==null?void 0:e.maxWidth)??le.maxWidth,min:(e==null?void 0:e.min)??le.min,plugins:(e==null?void 0:e.plugins)??le.plugins,printBasicPrototype:(e==null?void 0:e.printBasicPrototype)??!0,printFunctionName:Ug(e),spacingInner:e!=null&&e.min?" ":`
`,spacingOuter:e!=null&&e.min?"":`
`});function Ry(e){return new Array(e+1).join(" ")}function Fg(e,n){if(n&&(ky(n),n.plugins)){const r=jg(n.plugins,e);if(r!==null)return Bg(r,e,Yh(n),"",0,[])}const o=Rg(e,Ug(n),Wg(n),qg(n));return o!==null?o:Lg(e,Yh(n),"",0,[])}const Ly={AsymmetricMatcher:_y.default,DOMCollection:yy.default,DOMElement:by.default,Immutable:wy.default,ReactElement:Ey.default,ReactTestComponent:vy.default};ut.plugins=Ly;var By=Fg;kg=ut.default=By;function jy(e){let n,o,r,c,m,p;return n=new cg({}),{c(){k(n.$$.fragment),o=g(),r=u("div")},l(h){A(n.$$.fragment,h),o=_(h),r=f(h,"DIV",{}),d(r).forEach(i)},m(h,y){M(n,h,y),re(h,o,y),re(h,r,y),e[7](r),c=!0,m||(p=Cs(window,"resize",e[1]),m=!0)},p:Md,i(h){c||(R(n.$$.fragment,h),c=!0)},o(h){L(n.$$.fragment,h),c=!1},d(h){B(n,h),h&&i(o),h&&i(r),e[7](null),m=!1,p()}}}function Vy(e,n,o){let{lineNumbers:r="on"}=n,{model:c=null}=n,{readOnly:m=!1}=n,{value:p=void 0}=n,h,y;function b(){if(!y)return;const $=Math.min(1e3,y.getContentHeight());o(0,h.style.height=`${$}px`,h);const{width:S}=h.getBoundingClientRect();y.layout({width:S,height:$})}Ps(async()=>{const $=await Rd(()=>import("../chunks/editor.main.0a978303.mjs").then(V=>V.e),["..\\chunks\\editor.main.0a978303.mjs","..\\chunks\\preload-helper.41c905a7.mjs","..\\assets\\editor.911c6360.css"],import.meta.url),S=document.body.clientWidth>=640;o(6,y=$.editor.create(h,{fontSize:S?14:12,language:"typescript",lineNumbers:r,minimap:{enabled:!1},overviewRulerLanes:0,readOnly:m,scrollBeyondLastLine:!1,value:p}));const j=y.onDidContentSizeChange(b);return b(),()=>{j.dispose(),y==null||y.dispose()}});function O($){sg[$?"unshift":"push"](()=>{h=$,o(0,h)})}return e.$$set=$=>{"lineNumbers"in $&&o(2,r=$.lineNumbers),"model"in $&&o(3,c=$.model),"readOnly"in $&&o(4,m=$.readOnly),"value"in $&&o(5,p=$.value)},e.$$.update=()=>{e.$$.dirty&72&&c&&(y==null||y.setModel(c),c.setValue(c.getValue()))},[h,b,r,c,m,p,y,O]}class Hg extends bn{constructor(n){super(),wn(this,n,Vy,jy,En,{lineNumbers:2,model:3,readOnly:4,value:5})}}function Qh(e,n,o){const r=e.slice();return r[15]=n[o].level,r[16]=n[o].msg,r}function Kh(e,n,o){const r=e.slice();return r[19]=n[o].model,r[20]=n[o].name,r[21]=n[o].show,r}function Gh(e){let n,o,r,c,m,p=e[20]+"",h,y,b,O,$;function S(){return e[6](e[19])}return{c(){n=u("input"),c=g(),m=u("label"),h=s(p),y=s(".ts"),this.h()},l(j){n=f(j,"INPUT",{id:!0,type:!0,name:!0}),c=_(j),m=f(j,"LABEL",{for:!0});var V=d(m);h=a(V,p),y=a(V,".ts"),V.forEach(i),this.h()},h(){w(n,"id",o=e[19].uri.path),w(n,"type","radio"),w(n,"name","tabs-"+e[3]),n.checked=r=e[19]===e[1],w(m,"for",b=e[19].uri.path)},m(j,V){re(j,n,V),re(j,c,V),re(j,m,V),t(m,h),t(m,y),O||($=Cs(n,"change",S),O=!0)},p(j,V){e=j,V&1&&o!==(o=e[19].uri.path)&&w(n,"id",o),V&3&&r!==(r=e[19]===e[1])&&(n.checked=r),V&1&&p!==(p=e[20]+"")&&ag(h,p),V&1&&b!==(b=e[19].uri.path)&&w(m,"for",b)},d(j){j&&i(n),j&&i(c),j&&i(m),O=!1,$()}}}function Jh(e){let n,o=e[21]!==!1&&Gh(e);return{c(){o&&o.c(),n=Mh()},l(r){o&&o.l(r),n=Mh()},m(r,c){o&&o.m(r,c),re(r,n,c)},p(r,c){r[21]!==!1?o?o.p(r,c):(o=Gh(r),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},d(r){o&&o.d(r),r&&i(n)}}}function Xh(e){let n,o=e[16]+"",r;return{c(){n=u("div"),r=s(o),this.h()},l(c){n=f(c,"DIV",{});var m=d(n);r=a(m,o),m.forEach(i),this.h()},h(){Rh(n,"text-danger",e[15]==="error")},m(c,m){re(c,n,m),t(n,r)},p(c,m){m&4&&o!==(o=c[16]+"")&&ag(r,o),m&4&&Rh(n,"text-danger",c[15]==="error")},d(c){c&&i(n)}}}function Uy(e){let n,o,r,c,m,p,h,y,b,O,$,S,j,V,xe,oe,se=e[0],x=[];for(let D=0;D<se.length;D+=1)x[D]=Jh(Kh(e,se,D));m=new Hg({props:{model:e[1]}});let T=e[2],N=[];for(let D=0;D<T.length;D+=1)N[D]=Xh(Qh(e,T,D));return{c(){n=u("div"),o=u("div");for(let D=0;D<x.length;D+=1)x[D].c();r=g(),c=u("div"),k(m.$$.fragment),p=g(),h=u("div"),y=u("div"),b=u("pre");for(let D=0;D<N.length;D+=1)N[D].c();O=g(),$=u("div"),S=u("button"),j=s("Run!"),this.h()},l(D){n=f(D,"DIV",{class:!0});var U=d(n);o=f(U,"DIV",{class:!0});var q=d(o);for(let Q=0;Q<x.length;Q+=1)x[Q].l(q);q.forEach(i),r=_(U),c=f(U,"DIV",{class:!0});var P=d(c);A(m.$$.fragment,P),P.forEach(i),p=_(U),h=f(U,"DIV",{class:!0});var F=d(h);y=f(F,"DIV",{});var me=d(y);b=f(me,"PRE",{class:!0});var Ue=d(b);for(let Q=0;Q<N.length;Q+=1)N[Q].l(Ue);Ue.forEach(i),me.forEach(i),O=_(F),$=f(F,"DIV",{class:!0});var Qt=d($);S=f(Qt,"BUTTON",{class:!0});var Kt=d(S);j=a(Kt,"Run!"),Kt.forEach(i),Qt.forEach(i),F.forEach(i),U.forEach(i),this.h()},h(){w(o,"class","tabs svelte-qpule3"),w(c,"class","card-body"),w(b,"class","svelte-qpule3"),Yg(y,"flex","1"),w(S,"class","btn-small"),w($,"class","margin-left"),w(h,"class","card-footer svelte-qpule3"),w(n,"class","card margin-bottom-large")},m(D,U){re(D,n,U),t(n,o);for(let q=0;q<x.length;q+=1)x[q].m(o,null);t(n,r),t(n,c),M(m,c,null),t(n,p),t(n,h),t(h,y),t(y,b);for(let q=0;q<N.length;q+=1)N[q].m(b,null);t(h,O),t(h,$),t($,S),t(S,j),V=!0,xe||(oe=Cs(S,"click",e[4]),xe=!0)},p(D,[U]){if(U&11){se=D[0];let P;for(P=0;P<se.length;P+=1){const F=Kh(D,se,P);x[P]?x[P].p(F,U):(x[P]=Jh(F),x[P].c(),x[P].m(o,null))}for(;P<x.length;P+=1)x[P].d(1);x.length=se.length}const q={};if(U&2&&(q.model=D[1]),m.$set(q),U&4){T=D[2];let P;for(P=0;P<T.length;P+=1){const F=Qh(D,T,P);N[P]?N[P].p(F,U):(N[P]=Xh(F),N[P].c(),N[P].m(b,null))}for(;P<N.length;P+=1)N[P].d(1);N.length=T.length}},i(D){V||(R(m.$$.fragment,D),V=!0)},o(D){L(m.$$.fragment,D),V=!1},d(D){D&&i(n),Ah(x,D),B(m),Ah(N,D),xe=!1,oe()}}}let zg=()=>{ug(d_),zg=()=>{}};function Wy(e,n){const o=r=>{r.source===n.contentWindow&&(e.document.body.removeChild(n),e.removeEventListener("message",o))};e.addEventListener("message",o)}function qy(e){const n=document.createElement("iframe");return n.style.display="none",document.body.append(n),(!n.contentDocument||!n.contentWindow)&&e("Run Failed"),n}function Fy(e,n){const o=e.createElement("script");o.type="module",o.innerHTML=n,e.body.appendChild(o)}function Hy(e,n,o){let r;const c=Math.floor(Math.random()*1e9).toString(36);let{files:m}=n,p=[],h,y;function b(x,T){r.push({level:x,msg:typeof T=="object"?kg(T):`${T}`}),o(2,r)}function O(x){return i_(x,{jsc:{parser:{syntax:"typescript",tsx:!1},target:"es5",loose:!1,minify:{compress:!1,mangle:!1}},module:{type:"es6"},minify:!1,isModule:"unknown"}).code}function $(x,T,N={}){let D=O(`${T}`);const U={};for(const[q,P]of D.matchAll(/import.*['"]\.\/(.+)['"]/g)){x.if(N[P],"Dependency Cycle");const F=p.find(Ue=>P===Ue.name);x.unless(F,"Missing Import");const me={...N,[P]:!0};U[P]=$(x,F.model.getValue(),me)}for(const[q,P]of Object.entries(U))D=D.replace(`./${q}`,`data:text/javascript;base64,${btoa(P)}`);return D}function S(x){x.addEventListener("error",T=>b("error",T.error))}function j(x){x.addEventListener("unhandledrejection",T=>b("error",T.reason))}function V(x,T){return $(x,T)+`
window.parent.postMessage("done");`}function xe(x){Object.assign(x,{console:{error:T=>b("error",T),log:T=>b("log",T)}})}function oe(){const x=fg(T=>{o(2,r.length=0,r);const N=qy(T);Wy(window,N),S(N.contentWindow),j(N.contentWindow),xe(N.contentWindow);const D=V(T,h.getValue());Fy(N.contentDocument,D)});x.ok||b("error",x.n)}Ps(async()=>{const x=await Rd(()=>import("../chunks/editor.main.0a978303.mjs").then(T=>T.e),["..\\chunks\\editor.main.0a978303.mjs","..\\chunks\\preload-helper.41c905a7.mjs","..\\assets\\editor.911c6360.css"],import.meta.url);o(0,p=m.map(T=>{const N=x.Uri.file(`${c}/${T.name}.ts`),D=x.editor.createModel(T.src,"typescript",N);return{...T,model:D}})),o(1,y=p[0].model),h=p[0].model,zg()});const se=x=>o(1,y=x);return e.$$set=x=>{"files"in x&&o(5,m=x.files)},o(2,r=[]),[p,y,r,c,oe,m,se]}class $e extends bn{constructor(n){super(),wn(this,n,Hy,Uy,En,{files:5})}}function zy(e){let n,o,r,c;return r=new Hg({props:{lineNumbers:"off",readOnly:!0,value:e[0]}}),{c(){n=u("div"),o=u("div"),k(r.$$.fragment),this.h()},l(m){n=f(m,"DIV",{class:!0});var p=d(n);o=f(p,"DIV",{class:!0});var h=d(o);A(r.$$.fragment,h),h.forEach(i),p.forEach(i),this.h()},h(){w(o,"class","card-body"),w(n,"class","card margin-bottom-large")},m(m,p){re(m,n,p),t(n,o),M(r,o,null),c=!0},p(m,[p]){const h={};p&1&&(h.value=m[0]),r.$set(h)},i(m){c||(R(r.$$.fragment,m),c=!0)},o(m){L(r.$$.fragment,m),c=!1},d(m){m&&i(n),B(r)}}}function Yy(e,n,o){let{value:r}=n;return e.$$set=c=>{"value"in c&&o(0,r=c.value)},[r]}class Oe extends bn{constructor(n){super(),wn(this,n,Yy,zy,En,{value:0})}}const Zh=`// error.ts
export class DevError extends Error {
  constructor(public exception: unknown = undefined) {
    super();
  }
}

export class UserError extends Error {}
`,Qy=`import { getRecord } from "./store";

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
`,Ky=`// vote.ts
import { getPerson } from "./person";

export function canVote(name: string): boolean {
  const person = getPerson(name);
  return person.age >= 18;
}

console.log(canVote("Neil"));
`,Gy=`import { canVote } from "./vote";

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
`,Jy=`import { DevError, UserError } from "./error";
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
`,Xy=`import { DevError, UserError } from "./error";
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
`,Zy=`import { notry } from "./notry-ts";
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
`,vs=`export function c(num: number) {
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
`,eg=`class Carrier<T> {
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
`,eb=`import type { Quit } from "./notry-ts";
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
`,tb=`import { DevError, UserError } from "./error";
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
`,nb=`// persontc.ts
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
`,tg=`import { getRecord } from "./store";

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
`,Id=`export function reportError(error: unknown) {
  console.error(error);
}
`,rb=`export function safe<Y, N, Args extends unknown[]>(
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
`,ob=`export function safe<Y, N, Args extends unknown[]>(
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
`,$s=`import { c, d, e } from "./ext";

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
`,ng=`import { c, d, e } from "./ext";
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
`,rg=`import { c, d, e } from "./ext";
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
`,og=`import { c, d, e } from "./ext";
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
`,hn=`let succeeded = false;

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
`,sb=`import type { Of, Quit } from "./notry-ts";
import { getPerson } from "./person-notry";

export function canVote(
  quit: Quit<Of<typeof getPerson>>,
  name: string
): boolean {
  const person = getPerson(quit, name);
  return person.age >= 18;
}
`,ab=`import type { DevError, UserError } from "./error";
import { getPerson } from "./person-return";

export function canVote(name: string): boolean | UserError | DevError {
  const maybePerson = getPerson(name);
  if (maybePerson instanceof Error) {
    return maybePerson;
  }
  return maybePerson.age >= 18;
}
`,ib=`// votetc.ts
import { getPerson } from "./person-try-catch";

export function canVote(name: string): boolean {
  const person = getPerson(name);
  return person.age >= 18;
}
`,cb=`import { getPerson } from "./person";

export function canVote(name: string): boolean {
  const person = getPerson(name);
  return person.age >= 18;
}
`;function lb(e){let n,o,r,c,m,p,h,y,b,O,$,S,j,V,xe,oe,se,x,T,N,D,U,q,P,F,me,Ue,Qt,Kt,Q,Vs,Us,ft,Ws,vn,qs,Fs,dt,Hs,De,zs,$n,Ys,Qs,On,Ks,Gs,Js,xn,Xs,Zs,Dn,ea,ta,Pn,na,ra,Cn,oa,sa,pt,aa,Tn,ia,ca,la,Nn,ua,fa,In,da,pa,Sn,ma,ha,kn,ga,_a,An,ya,ba,Mn,wa,Ea,Rn,va,$a,Pe,Ln,Oa,xa,Bn,Da,Pa,jn,Ca,Ta,Vn,Na,Ia,Un,Sa,ka,Wn,Aa,Ma,qn,Ra,La,mt,Ba,K,ja,Fn,Va,Ua,Hn,Wa,qa,zn,Fa,Ha,Yn,za,Ya,Qa,Qn,Ka,Ga,ht,Ja,Kn,Xa,Za,ei,gt,ti,Ce,ni,Gn,ri,oi,Jn,si,ai,ii,Xn,ci,li,fe,Te,ui,Zn,fi,di,er,pi,mi,hi,tr,gi,_i,nr,yi,bi,Gt,wi,rr,Ei,vi,or,$i,Oi,sr,xi,Di,G,Pi,ar,Ci,Ti,ir,Ni,Ii,cr,Si,ki,lr,Ai,Mi,Ri,_t,Li,ur,Bi,ji,yt,Vi,fr,Ui,Wi,qi,bt,Fi,he,dr,Hi,zi,pr,Yi,Qi,mr,Ki,Gi,Ji,wt,Xi,ae,hr,Zi,ec,gr,tc,nc,_r,rc,oc,yr,sc,ac,ic,Et,cc,vt,lc,br,uc,fc,dc,de,pc,wr,Wd='{ type: "DevError" }',mc,hc,Er,qd='getRecord("person", name)',gc,_c,vr,yc,bc,wc,$t,Ec,Ne,vc,$r,Fd='{ type: "UserError", message: "<name> not found" }',$c,Oc,Or,xc,Dc,Pc,Ot,Cc,ge,xr,Tc,Nc,Dr,Ic,Sc,Pr,kc,Ac,Mc,xt,Rc,J,Lc,Cr,Bc,jc,Tr,Vc,Uc,Nr,Wc,qc,Ir,Fc,Hc,zc,Dt,Yc,Sr,kr,Qc,Kc,Pt,Gc,Ar,Jc,Xc,Zc,Ct,el,Ie,tl,Mr,Hd="<Y, N, Args extends unknown[]>",nl,rl,Rr,ol,sl,al,Se,il,Lr,cl,ll,Br,ul,fl,dl,Tt,pl,Y,ml,jr,hl,gl,Vr,_l,yl,Ur,bl,wl,Wr,El,vl,qr,$l,Ol,xl,Nt,Dl,H,Fr,Pl,Cl,Hr,Tl,Nl,zr,Il,Sl,Yr,kl,Al,Qr,zd="{ y: { val: boolean } }",Ml,Rl,Kr,Yd="{ n: { val: Why, exception: unknown } }",Ll,Bl,jl,X,Vl,Gr,Qd="MaybeAsyncDid<Y, N>",Ul,Wl,Jr,Kd="Did<Y, N>",ql,Fl,Xr,Gd="Promise<Did<Y, N>>",Hl,zl,Zr,Yl,Ql,Kl,eo,Gl,Jl,to,Xl,Zl,It,eu,Z,tu,no,nu,ru,ro,ou,su,oo,au,iu,so,cu,lu,uu,ao,fu,du,St,pu,io,mu,hu,gu,kt,_u,co,yu,bu,At,wu,lo,Eu,vu,uo,$u,Ou,Mt,xu,fo,Du,Pu,Cu,Rt,Tu,ke,Nu,po,Iu,Su,mo,ku,Au,Mu,Lt,Ru,ho,Lu,Bu,go,ju,Vu,Bt,Uu,_o,Wu,qu,Fu,jt,Hu,Vt,zu,yo,Yu,Qu,Ku,Ut,Gu,Wt,Ju,bo,Jd="quit: Quit<Why>",Xu,Zu,ef,wo,tf,nf,Eo,rf,of,vo,sf,af,pe,cf,$o,lf,uf,Oo,ff,df,xo,pf,mf,hf,ee,gf,Do,_f,yf,Po,bf,wf,Co,Ef,vf,To,$f,Of,xf,No,Df,Pf,Ae,Cf,Io,Tf,Nf,So,If,Sf,kf,Jt,ko,Af,Mf,Rf,We,Ao,Lf,Bf,Mo,jf,Vf,Uf,Ro,Wf,qf,ie,Ff,Lo,Hf,zf,Bo,Yf,Qf,jo,Kf,Gf,Jf,Vo,Xf,Zf,qe,Xt,ed,td,Fe,nd,rd,He,Zt,od,sd,ze,ad,id,Ye,en,cd,ld,Qe,ud,fd,Ke,tn,dd,pd,Me,md,hd,Ge,nn,gd,_d,Re,yd,bd,Je,rn,wd,Ed,Le,vd,Xo;return U=new $e({props:{files:[{name:"person",src:Qy},{name:"store",src:hn,show:!1}]}}),ft=new $e({props:{files:[{name:"vote",src:Ky},{name:"person",src:tg},{name:"store",src:hn,show:!1}]}}),dt=new $e({props:{files:[{name:"main",src:Gy},{name:"vote",src:cb},{name:"person",src:tg},{name:"store",src:hn,show:!1}]}}),mt=new $e({props:{files:[{name:"main",src:Jy},{name:"vote-try-catch",src:ib},{name:"person-try-catch",src:nb},{name:"error",src:Zh},{name:"report",src:Id,show:!1},{name:"store",src:hn,show:!1}]}}),gt=new $e({props:{files:[{name:"main",src:Xy},{name:"vote-return",src:ab},{name:"person-return",src:tb},{name:"error",src:Zh},{name:"report",src:Id,show:!1},{name:"store",src:hn,show:!1}]}}),_t=new $e({props:{files:[{name:"main",src:Zy},{name:"vote-notry",src:sb},{name:"person-notry",src:eb},{name:"report",src:Id,show:!1},{name:"store",src:hn,show:!1},{name:"notry-ts",src:eg,show:!1}]}}),bt=new Oe({props:{value:e[0]}}),wt=new Oe({props:{value:e[1]}}),Et=new Oe({props:{value:e[2]}}),$t=new Oe({props:{value:e[3]}}),Ot=new Oe({props:{value:ub}}),xt=new Oe({props:{value:e[4]}}),Dt=new Oe({props:{value:e[5]}}),Ct=new Oe({props:{value:e[6]}}),Tt=new Oe({props:{value:e[7]}}),Nt=new Oe({props:{value:e[8]}}),It=new $e({props:{files:[{name:"main",src:$s},{name:"ext",src:vs,show:!1}]}}),kt=new $e({props:{files:[{name:"main",src:og},{name:"safe-try-catch",src:ob},{name:"ext",src:vs,show:!1}]}}),At=new xd({props:{original:$s,modified:og}}),Rt=new $e({props:{files:[{name:"main",src:rg},{name:"safe-return",src:rb},{name:"ext",src:vs,show:!1}]}}),Lt=new xd({props:{original:$s,modified:rg}}),jt=new $e({props:{files:[{name:"main",src:ng},{name:"ext",src:vs,show:!1},{name:"notry-ts",src:eg,show:!1}]}}),Ut=new xd({props:{original:$s,modified:ng}}),{c(){n=u("meta"),o=g(),r=u("article"),c=u("h1"),m=s("TypeScripting Try-Catch"),p=g(),h=u("p"),y=s("Feb. 25, 2023"),b=g(),O=u("p"),$=s("tl;dr: "),S=u("a"),j=s("notry-ts"),V=s(" is a type safe error handling alternative to try-catch"),xe=g(),oe=u("p"),se=s(`Suppose you're asked to write a new function to determine whether a person
    can vote. It should be easy since there's already a `),x=u("code"),T=s("getPerson"),N=s(" function."),D=g(),k(U.$$.fragment),q=g(),P=u("p"),F=s("Notice that the function signature gives no hint that "),me=u("code"),Ue=s("getPerson"),Qt=s(`
    could throw. This is one problem we want to address.`),Kt=g(),Q=u("p"),Vs=s("Here's the new function."),Us=g(),k(ft.$$.fragment),Ws=g(),vn=u("p"),qs=s("And last but not least, the main progam."),Fs=g(),k(dt.$$.fragment),Hs=g(),De=u("p"),zs=s("Note here that the type of "),$n=u("code"),Ys=s("exceptionVar"),Qs=s(` is
    `),On=u("code"),Ks=s("unknown"),Gs=s(`. If you make it something more specific you'll get a
    compiler error.`),Js=g(),xn=u("pre"),Xs=s("Catch clause variable type annotation must be 'any' or 'unknown' if specified."),Zs=g(),Dn=u("p"),ea=s("This is another problem we'll try to tackle."),ta=g(),Pn=u("h4"),na=s("Test Cases"),ra=g(),Cn=u("p"),oa=s(`If you run the previous example, you should see three lines written to the
    console.`),sa=g(),pt=u("p"),aa=s("The first shows the output of a successful invocation of "),Tn=u("code"),ia=s("main"),ca=s("."),la=g(),Nn=u("pre"),ua=s("Neil can't vote"),fa=g(),In=u("p"),da=s("The second invocation failed with what is probably a user error."),pa=g(),Sn=u("pre"),ma=s("Error: Neal not found"),ha=g(),kn=u("p"),ga=s(`The final result is another error but this time the meaning is less clear.
    It could be an environmental or maybe a programming error. In either case,
    it's not something we expect the user to be able to handle.`),_a=g(),An=u("pre"),ya=s("Error: Failed to get record"),ba=g(),Mn=u("p"),wa=s(`Unfortunately, this isn't terribly helpful. It means nothing to the user and
    doesn't give the developer much to debug with.`),Ea=g(),Rn=u("p"),va=s("So how could we improve? A few ideas:"),$a=g(),Pe=u("ol"),Ln=u("li"),Oa=s(`Log the error stack trace: this would be helpful to the developer, but
      probably scare the user.`),xa=g(),Bn=u("li"),Da=s(`Report the stack trace to the developer. On user errors, this would
      produce noise for the developer. On developer errors, the message would
      still be confusing to the user.`),Pa=g(),jn=u("li"),Ca=s("Find a mechanism for differentiating error types."),Ta=g(),Vn=u("h3"),Na=s("Approaches"),Ia=g(),Un=u("p"),Sa=s(`Let's explore idea #3 and compare error handling approaches using the three
    test cases.`),ka=g(),Wn=u("h4"),Aa=s("try-catch"),Ma=g(),qn=u("p"),Ra=s("One simple solution is to throw subclassed Error objects."),La=g(),k(mt.$$.fragment),Ba=g(),K=u("p"),ja=s(`That's better but the type checker doesn't help much. Without reading the
    `),Fn=u("code"),Va=s("getPerson"),Ua=s(` source, we can't tell what (or even if) it could
    throw. `),Hn=u("code"),Wa=s("exceptionVar"),qa=s(" still has type "),zn=u("code"),Fa=s("unknown"),Ha=s(`.
    Narrowing it takes extra effort and if `),Yn=u("code"),za=s("getPerson"),Ya=s(` starts throwing
    something different, the compiler won't tell us.`),Qa=g(),Qn=u("h4"),Ka=s("Return Types"),Ga=g(),ht=u("p"),Ja=s(`One way to lean on the type system for error handling is by using a
    specialized return type. We'll use a union of the successful return type and
    `),Kn=u("code"),Xa=s("Error"),Za=s("s to keep things simple."),ei=g(),k(gt.$$.fragment),ti=g(),Ce=u("p"),ni=s("This yields the same result as "),Gn=u("b"),ri=s("try-catch"),oi=s(` with the added benefit of
    type safety. The biggest downside is the extra check in `),Jn=u("code"),si=s("canVote"),ai=s(`
    (more on that later).`),ii=g(),Xn=u("p"),ci=s("Following this approach boils down to:"),li=g(),fe=u("ol"),Te=u("li"),ui=s("Replacing "),Zn=u("code"),fi=s("throw"),di=s(" with "),er=u("code"),pi=s("return"),mi=s(" in your code"),hi=g(),tr=u("li"),gi=s("Updating the return types"),_i=g(),nr=u("li"),yi=s("Propagating errors up the call stack"),bi=g(),Gt=u("li"),wi=s("Wrapping invocations of code you don't control in "),rr=u("code"),Ei=s("try-catch"),vi=g(),or=u("p"),$i=s(`There are some simple utilities you can write to make this easier. Still,
    one can't help but wonder - is there a better way?`),Oi=g(),sr=u("h4"),xi=s("notry-ts"),Di=g(),G=u("p"),Pi=s("What if we could get the convenience of "),ar=u("b"),Ci=s("try-catch"),Ti=s(` and the type safety
    of `),ir=u("b"),Ni=s("return types"),Ii=s(`? That's what I set out to answer when I created
    `),cr=u("b"),Si=s("notry-ts"),ki=s(". Let's see how our example looks with "),lr=u("code"),Ai=s("notry"),Mi=s("."),Ri=g(),k(_t.$$.fragment),Li=g(),ur=u("p"),Bi=s(`This produces the same output as the two previous solutions, so how does it
    work?`),ji=g(),yt=u("p"),Vi=s("The first thing you'll notice is the new "),fr=u("code"),Ui=s("Why"),Wi=s(" type."),qi=g(),k(bt.$$.fragment),Fi=g(),he=u("p"),dr=u("code"),Hi=s("Why"),zi=s(" represents the type returned when "),pr=u("code"),Yi=s("getPerson"),Qi=s(`
    fails. It's used in the new first parameter of `),mr=u("code"),Ki=s("getPerson"),Gi=s("."),Ji=g(),k(wt.$$.fragment),Xi=g(),ae=u("p"),hr=u("code"),Zi=s("quit"),ec=s(` has the call signature
    `),gr=u("code"),tc=s("(val: Why) => never"),nc=s(`. Calling it immediately terminates
    `),_r=u("code"),rc=s("getPerson"),oc=s(`. So in this case, we could terminate
    `),yr=u("code"),sc=s("getPerson"),ac=s(`
    by calling:`),ic=g(),k(Et.$$.fragment),cc=g(),vt=u("p"),lc=s("Rather than call "),br=u("code"),uc=s("quit"),fc=s(" directly, we use two convenience functions."),dc=g(),de=u("p"),pc=s(`This quits with
    `),wr=u("code"),mc=s(Wd),hc=s(` if
    `),Er=u("code"),gc=s(qd),_c=s(`
    throws, returning a `),vr=u("code"),yc=s("Person"),bc=s(" otherwise."),wc=g(),k($t.$$.fragment),Ec=g(),Ne=u("p"),vc=s(`This quits with
    `),$r=u("code"),$c=s(Fd),Oc=s(`
    if `),Or=u("code"),xc=s("person"),Dc=s(" is undefined."),Pc=g(),k(Ot.$$.fragment),Cc=g(),ge=u("p"),xr=u("code"),Tc=s("canVote"),Nc=s(" is straightforward. It takes a "),Dr=u("code"),Ic=s("quit"),Sc=s(`
    parameter of the same type as `),Pr=u("code"),kc=s("getPerson"),Ac=s(" and forwards it."),Mc=g(),k(xt.$$.fragment),Rc=g(),J=u("p"),Lc=s("At the top level, "),Cr=u("code"),Bc=s("main"),jc=s(" invokes "),Tr=u("code"),Vc=s("canVote"),Uc=s(` with
    `),Nr=u("code"),Wc=s("notry"),qc=s(" and assigns the result to "),Ir=u("code"),Fc=s("did"),Hc=s("."),zc=g(),k(Dt.$$.fragment),Yc=g(),Sr=u("p"),kr=u("b"),Qc=s("How it works"),Kc=g(),Pt=u("p"),Gc=s("Here is the function signature of "),Ar=u("code"),Jc=s("notry"),Xc=s("."),Zc=g(),k(Ct.$$.fragment),el=g(),Ie=u("p"),tl=s("The generic types "),Mr=u("code"),nl=s(Hd),rl=s(` represent
    the successful return type, failed return type, and `),Rr=u("code"),ol=s("quitable"),sl=s(" arguments."),al=g(),Se=u("p"),il=s("Any function that accepts "),Lr=u("code"),cl=s("Quit"),ll=s(` as it's first parameter is a
    `),Br=u("code"),ul=s("Quitable"),fl=s("."),dl=g(),k(Tt.$$.fragment),pl=g(),Y=u("p"),ml=s("So "),jr=u("code"),hl=s("notry"),gl=s(" requires a "),Vr=u("code"),_l=s("Quitable"),yl=s(` function and
    arguments to pass it and returns a `),Ur=u("code"),bl=s("Did"),wl=s(` containing the result
    (either `),Wr=u("code"),El=s("Y"),vl=s(" or "),qr=u("code"),$l=s("N"),Ol=s(")."),xl=g(),k(Nt.$$.fragment),Dl=g(),H=u("p"),Fr=u("code"),Pl=s("Did"),Cl=s(" is a riff on the popular "),Hr=u("code"),Tl=s("Either"),Nl=s(` or
    `),zr=u("code"),Il=s("Result"),Sl=s(`
    types. It's a discriminated union that indicates whether
    `),Yr=u("code"),kl=s("quitable"),Al=s(` returned or quit. In this case, it'll be
    `),Qr=u("code"),Ml=s(zd),Rl=s(` or
    `),Kr=u("code"),Ll=s(Yd),Bl=s("."),jl=g(),X=u("p"),Vl=s("The last piece of the puzzle is "),Gr=u("code"),Ul=s(Qd),Wl=s(`. It
    resolves to `),Jr=u("code"),ql=s(Kd),Fl=s(` or
    `),Xr=u("code"),Hl=s(Gd),zl=s(`
    depending on whether `),Zr=u("code"),Yl=s("quitable"),Ql=s(" returns a promise."),Kl=g(),eo=u("h3"),Gl=s("Error Handling At Scale"),Jl=g(),to=u("p"),Xl=s(`In the preceding problem, the difference in error handling solutions might
    seem insignificant. Here we'll look at a fleshier example and try to
    understand how each approach scales.`),Zl=g(),k(It.$$.fragment),eu=g(),Z=u("p"),tu=s("The three external functions "),no=u("code"),nu=s("c"),ru=s(", "),ro=u("code"),ou=s("d"),su=s(`, and
    `),oo=u("code"),au=s("e"),iu=s(`
    could throw so `),so=u("code"),cu=s("main"),lu=s(` catches and logs the exception. In the base
    case there is no way to differentiate the three possible failures.`),uu=g(),ao=u("h4"),fu=s("try-catch"),du=g(),St=u("p"),pu=s("Let's introduce a utility "),io=u("code"),mu=s("safe"),hu=s(` to catch arbitary exceptions and
    throw something specific.`),gu=g(),k(kt.$$.fragment),_u=g(),co=u("p"),yu=s("The diff shows that it's an unobtrusive change."),bu=g(),k(At.$$.fragment),wu=g(),lo=u("p"),Eu=s("However, no type safety."),vu=g(),uo=u("h4"),$u=s("Return types"),Ou=g(),Mt=u("p"),xu=s("This time we use a variant of "),fo=u("code"),Du=s("safe"),Pu=s(` that catch exceptions and returns
    something specific.`),Cu=g(),k(Rt.$$.fragment),Tu=g(),ke=u("p"),Nu=s("Unfortunately now three of the five lines in both "),po=u("code"),Iu=s("a"),Su=s(` and
    `),mo=u("code"),ku=s("b"),Au=s(` are error handling. It's easy to see how this can get unwieldy
    at scale.`),Mu=g(),k(Lt.$$.fragment),Ru=g(),ho=u("p"),Lu=s("But now we have type safety."),Bu=g(),go=u("h4"),ju=s("notry-ts"),Vu=g(),Bt=u("p"),Uu=s("Finally, an implementation using "),_o=u("code"),Wu=s("notry"),qu=s("."),Fu=g(),k(jt.$$.fragment),Hu=g(),Vt=u("p"),zu=s("Apart from the "),yo=u("code"),Yu=s("quit"),Qu=s(` parameters, this looks more or less like the
    base case.`),Ku=g(),k(Ut.$$.fragment),Gu=g(),Wt=u("p"),Ju=s("Admittedly, all those "),bo=u("code"),Xu=s(Jd),Zu=s(` parameters are a bit cumbersome
    so, like anything, you should weigh the benefits against the costs.`),ef=g(),wo=u("h3"),tf=s("Comparison"),nf=g(),Eo=u("p"),rf=s("Let's wrap up by looking at what we get from each approach."),of=g(),vo=u("h4"),sf=s("Type Safety"),af=g(),pe=u("p"),cf=s("None with "),$o=u("b"),lf=s("try-catch"),uf=s(` and roughly the same degree with
    `),Oo=u("b"),ff=s("return types"),df=s(" and "),xo=u("b"),pf=s("notry-ts"),mf=s(` including the ability to tell at a glance
    if and what errors could occur.`),hf=g(),ee=u("p"),gf=s("The biggest difference is that it's easier to ignore "),Do=u("b"),_f=s("return types"),yf=s(`. If
    you call a function that normally returns `),Po=u("code"),bf=s("void"),wf=s(`, you can easily
    forget to check whether an error occurred. This problem only affects
    `),Co=u("b"),Ef=s("notry-ts"),vf=s(" where "),To=u("code"),$f=s("notry"),Of=s(" is called."),xf=g(),No=u("h4"),Df=s("Developer Experience"),Pf=g(),Ae=u("p"),Cf=s("With "),Io=u("b"),Tf=s("try-catch"),Nf=s(", you could use a utility like "),So=u("code"),If=s("safe"),Sf=s(` to incrementally
    improve your error handling done with minimal effect on readability.`),kf=g(),Jt=u("p"),ko=u("b"),Af=s("return types"),Mf=s(` are intuitive since it's natural to associate a function's
    return value with its outcome. This solution requires the greatest amount of
    code and gains usefulness the more it's used.`),Rf=g(),We=u("p"),Ao=u("b"),Lf=s("notry"),Bf=s(` has the least intuitive and most sophisticated typing. The
    function body's intent remains clear with error handling is mostly out of
    view. As with
    `),Mo=u("b"),jf=s("return types"),Vf=s(", its usefulness is dependent on how widely it's used."),Uf=g(),Ro=u("h3"),Wf=s("Conclusion"),qf=g(),ie=u("p"),Ff=s(`If you care about type safety (why else would you be here), use
    `),Lo=u("b"),Hf=s("return types"),zf=s(" or "),Bo=u("b"),Yf=s("notry"),Qf=s(". Choose "),jo=u("b"),Kf=s("notry"),Gf=s(` for added readability
    and safety at the cost of complexity.`),Jf=g(),Vo=u("h3"),Xf=s("Resources"),Zf=g(),qe=u("div"),Xt=u("small"),ed=s("package"),td=g(),Fe=u("a"),nd=s("notry-ts"),rd=g(),He=u("div"),Zt=u("small"),od=s("package"),sd=g(),ze=u("a"),ad=s("neverthrow"),id=g(),Ye=u("div"),en=u("small"),cd=s("package"),ld=g(),Qe=u("a"),ud=s("type-safe-errors"),fd=g(),Ke=u("div"),tn=u("small"),dd=s("article"),pd=g(),Me=u("a"),md=s("Type-Safe Error Handling In TypeScript"),hd=g(),Ge=u("div"),nn=u("small"),gd=s("article"),_d=g(),Re=u("a"),yd=s("Functional Error Handling"),bd=g(),Je=u("div"),rn=u("small"),wd=s("article"),Ed=g(),Le=u("a"),vd=s("TypeScript / Implement Rust-style Result"),this.h()},l(v){const Uo=Qg("svelte-7fsaef",document.head);n=f(Uo,"META",{name:!0,content:!0}),Uo.forEach(i),o=_(v),r=f(v,"ARTICLE",{class:!0});var l=d(r);c=f(l,"H1",{class:!0});var Xd=d(c);m=a(Xd,"TypeScripting Try-Catch"),Xd.forEach(i),p=_(l),h=f(l,"P",{class:!0});var Zd=d(h);y=a(Zd,"Feb. 25, 2023"),Zd.forEach(i),b=_(l),O=f(l,"P",{class:!0});var Zo=d(O);$=a(Zo,"tl;dr: "),S=f(Zo,"A",{href:!0,target:!0,rel:!0});var ep=d(S);j=a(ep,"notry-ts"),ep.forEach(i),V=a(Zo," is a type safe error handling alternative to try-catch"),Zo.forEach(i),xe=_(l),oe=f(l,"P",{});var es=d(oe);se=a(es,`Suppose you're asked to write a new function to determine whether a person
    can vote. It should be easy since there's already a `),x=f(es,"CODE",{});var tp=d(x);T=a(tp,"getPerson"),tp.forEach(i),N=a(es," function."),es.forEach(i),D=_(l),A(U.$$.fragment,l),q=_(l),P=f(l,"P",{});var ts=d(P);F=a(ts,"Notice that the function signature gives no hint that "),me=f(ts,"CODE",{});var np=d(me);Ue=a(np,"getPerson"),np.forEach(i),Qt=a(ts,`
    could throw. This is one problem we want to address.`),ts.forEach(i),Kt=_(l),Q=f(l,"P",{});var rp=d(Q);Vs=a(rp,"Here's the new function."),rp.forEach(i),Us=_(l),A(ft.$$.fragment,l),Ws=_(l),vn=f(l,"P",{});var op=d(vn);qs=a(op,"And last but not least, the main progam."),op.forEach(i),Fs=_(l),A(dt.$$.fragment,l),Hs=_(l),De=f(l,"P",{});var on=d(De);zs=a(on,"Note here that the type of "),$n=f(on,"CODE",{});var sp=d($n);Ys=a(sp,"exceptionVar"),sp.forEach(i),Qs=a(on,` is
    `),On=f(on,"CODE",{});var ap=d(On);Ks=a(ap,"unknown"),ap.forEach(i),Gs=a(on,`. If you make it something more specific you'll get a
    compiler error.`),on.forEach(i),Js=_(l),xn=f(l,"PRE",{});var ip=d(xn);Xs=a(ip,"Catch clause variable type annotation must be 'any' or 'unknown' if specified."),ip.forEach(i),Zs=_(l),Dn=f(l,"P",{});var cp=d(Dn);ea=a(cp,"This is another problem we'll try to tackle."),cp.forEach(i),ta=_(l),Pn=f(l,"H4",{});var lp=d(Pn);na=a(lp,"Test Cases"),lp.forEach(i),ra=_(l),Cn=f(l,"P",{});var up=d(Cn);oa=a(up,`If you run the previous example, you should see three lines written to the
    console.`),up.forEach(i),sa=_(l),pt=f(l,"P",{});var ns=d(pt);aa=a(ns,"The first shows the output of a successful invocation of "),Tn=f(ns,"CODE",{});var fp=d(Tn);ia=a(fp,"main"),fp.forEach(i),ca=a(ns,"."),ns.forEach(i),la=_(l),Nn=f(l,"PRE",{});var dp=d(Nn);ua=a(dp,"Neil can't vote"),dp.forEach(i),fa=_(l),In=f(l,"P",{});var pp=d(In);da=a(pp,"The second invocation failed with what is probably a user error."),pp.forEach(i),pa=_(l),Sn=f(l,"PRE",{});var mp=d(Sn);ma=a(mp,"Error: Neal not found"),mp.forEach(i),ha=_(l),kn=f(l,"P",{});var hp=d(kn);ga=a(hp,`The final result is another error but this time the meaning is less clear.
    It could be an environmental or maybe a programming error. In either case,
    it's not something we expect the user to be able to handle.`),hp.forEach(i),_a=_(l),An=f(l,"PRE",{});var gp=d(An);ya=a(gp,"Error: Failed to get record"),gp.forEach(i),ba=_(l),Mn=f(l,"P",{});var _p=d(Mn);wa=a(_p,`Unfortunately, this isn't terribly helpful. It means nothing to the user and
    doesn't give the developer much to debug with.`),_p.forEach(i),Ea=_(l),Rn=f(l,"P",{});var yp=d(Rn);va=a(yp,"So how could we improve? A few ideas:"),yp.forEach(i),$a=_(l),Pe=f(l,"OL",{});var sn=d(Pe);Ln=f(sn,"LI",{});var bp=d(Ln);Oa=a(bp,`Log the error stack trace: this would be helpful to the developer, but
      probably scare the user.`),bp.forEach(i),xa=_(sn),Bn=f(sn,"LI",{});var wp=d(Bn);Da=a(wp,`Report the stack trace to the developer. On user errors, this would
      produce noise for the developer. On developer errors, the message would
      still be confusing to the user.`),wp.forEach(i),Pa=_(sn),jn=f(sn,"LI",{});var Ep=d(jn);Ca=a(Ep,"Find a mechanism for differentiating error types."),Ep.forEach(i),sn.forEach(i),Ta=_(l),Vn=f(l,"H3",{});var vp=d(Vn);Na=a(vp,"Approaches"),vp.forEach(i),Ia=_(l),Un=f(l,"P",{});var $p=d(Un);Sa=a($p,`Let's explore idea #3 and compare error handling approaches using the three
    test cases.`),$p.forEach(i),ka=_(l),Wn=f(l,"H4",{});var Op=d(Wn);Aa=a(Op,"try-catch"),Op.forEach(i),Ma=_(l),qn=f(l,"P",{});var xp=d(qn);Ra=a(xp,"One simple solution is to throw subclassed Error objects."),xp.forEach(i),La=_(l),A(mt.$$.fragment,l),Ba=_(l),K=f(l,"P",{});var _e=d(K);ja=a(_e,`That's better but the type checker doesn't help much. Without reading the
    `),Fn=f(_e,"CODE",{});var Dp=d(Fn);Va=a(Dp,"getPerson"),Dp.forEach(i),Ua=a(_e,` source, we can't tell what (or even if) it could
    throw. `),Hn=f(_e,"CODE",{});var Pp=d(Hn);Wa=a(Pp,"exceptionVar"),Pp.forEach(i),qa=a(_e," still has type "),zn=f(_e,"CODE",{});var Cp=d(zn);Fa=a(Cp,"unknown"),Cp.forEach(i),Ha=a(_e,`.
    Narrowing it takes extra effort and if `),Yn=f(_e,"CODE",{});var Tp=d(Yn);za=a(Tp,"getPerson"),Tp.forEach(i),Ya=a(_e,` starts throwing
    something different, the compiler won't tell us.`),_e.forEach(i),Qa=_(l),Qn=f(l,"H4",{});var Np=d(Qn);Ka=a(Np,"Return Types"),Np.forEach(i),Ga=_(l),ht=f(l,"P",{});var rs=d(ht);Ja=a(rs,`One way to lean on the type system for error handling is by using a
    specialized return type. We'll use a union of the successful return type and
    `),Kn=f(rs,"CODE",{});var Ip=d(Kn);Xa=a(Ip,"Error"),Ip.forEach(i),Za=a(rs,"s to keep things simple."),rs.forEach(i),ei=_(l),A(gt.$$.fragment,l),ti=_(l),Ce=f(l,"P",{});var an=d(Ce);ni=a(an,"This yields the same result as "),Gn=f(an,"B",{});var Sp=d(Gn);ri=a(Sp,"try-catch"),Sp.forEach(i),oi=a(an,` with the added benefit of
    type safety. The biggest downside is the extra check in `),Jn=f(an,"CODE",{});var kp=d(Jn);si=a(kp,"canVote"),kp.forEach(i),ai=a(an,`
    (more on that later).`),an.forEach(i),ii=_(l),Xn=f(l,"P",{});var Ap=d(Xn);ci=a(Ap,"Following this approach boils down to:"),Ap.forEach(i),li=_(l),fe=f(l,"OL",{});var Xe=d(fe);Te=f(Xe,"LI",{});var cn=d(Te);ui=a(cn,"Replacing "),Zn=f(cn,"CODE",{});var Mp=d(Zn);fi=a(Mp,"throw"),Mp.forEach(i),di=a(cn," with "),er=f(cn,"CODE",{});var Rp=d(er);pi=a(Rp,"return"),Rp.forEach(i),mi=a(cn," in your code"),cn.forEach(i),hi=_(Xe),tr=f(Xe,"LI",{});var Lp=d(tr);gi=a(Lp,"Updating the return types"),Lp.forEach(i),_i=_(Xe),nr=f(Xe,"LI",{});var Bp=d(nr);yi=a(Bp,"Propagating errors up the call stack"),Bp.forEach(i),bi=_(Xe),Gt=f(Xe,"LI",{});var $d=d(Gt);wi=a($d,"Wrapping invocations of code you don't control in "),rr=f($d,"CODE",{});var jp=d(rr);Ei=a(jp,"try-catch"),jp.forEach(i),$d.forEach(i),Xe.forEach(i),vi=_(l),or=f(l,"P",{});var Vp=d(or);$i=a(Vp,`There are some simple utilities you can write to make this easier. Still,
    one can't help but wonder - is there a better way?`),Vp.forEach(i),Oi=_(l),sr=f(l,"H4",{});var Up=d(sr);xi=a(Up,"notry-ts"),Up.forEach(i),Di=_(l),G=f(l,"P",{});var ye=d(G);Pi=a(ye,"What if we could get the convenience of "),ar=f(ye,"B",{});var Wp=d(ar);Ci=a(Wp,"try-catch"),Wp.forEach(i),Ti=a(ye,` and the type safety
    of `),ir=f(ye,"B",{});var qp=d(ir);Ni=a(qp,"return types"),qp.forEach(i),Ii=a(ye,`? That's what I set out to answer when I created
    `),cr=f(ye,"B",{});var Fp=d(cr);Si=a(Fp,"notry-ts"),Fp.forEach(i),ki=a(ye,". Let's see how our example looks with "),lr=f(ye,"CODE",{});var Hp=d(lr);Ai=a(Hp,"notry"),Hp.forEach(i),Mi=a(ye,"."),ye.forEach(i),Ri=_(l),A(_t.$$.fragment,l),Li=_(l),ur=f(l,"P",{});var zp=d(ur);Bi=a(zp,`This produces the same output as the two previous solutions, so how does it
    work?`),zp.forEach(i),ji=_(l),yt=f(l,"P",{});var os=d(yt);Vi=a(os,"The first thing you'll notice is the new "),fr=f(os,"CODE",{});var Yp=d(fr);Ui=a(Yp,"Why"),Yp.forEach(i),Wi=a(os," type."),os.forEach(i),qi=_(l),A(bt.$$.fragment,l),Fi=_(l),he=f(l,"P",{});var qt=d(he);dr=f(qt,"CODE",{});var Qp=d(dr);Hi=a(Qp,"Why"),Qp.forEach(i),zi=a(qt," represents the type returned when "),pr=f(qt,"CODE",{});var Kp=d(pr);Yi=a(Kp,"getPerson"),Kp.forEach(i),Qi=a(qt,`
    fails. It's used in the new first parameter of `),mr=f(qt,"CODE",{});var Gp=d(mr);Ki=a(Gp,"getPerson"),Gp.forEach(i),Gi=a(qt,"."),qt.forEach(i),Ji=_(l),A(wt.$$.fragment,l),Xi=_(l),ae=f(l,"P",{});var Be=d(ae);hr=f(Be,"CODE",{});var Jp=d(hr);Zi=a(Jp,"quit"),Jp.forEach(i),ec=a(Be,` has the call signature
    `),gr=f(Be,"CODE",{});var Xp=d(gr);tc=a(Xp,"(val: Why) => never"),Xp.forEach(i),nc=a(Be,`. Calling it immediately terminates
    `),_r=f(Be,"CODE",{});var Zp=d(_r);rc=a(Zp,"getPerson"),Zp.forEach(i),oc=a(Be,`. So in this case, we could terminate
    `),yr=f(Be,"CODE",{});var em=d(yr);sc=a(em,"getPerson"),em.forEach(i),ac=a(Be,`
    by calling:`),Be.forEach(i),ic=_(l),A(Et.$$.fragment,l),cc=_(l),vt=f(l,"P",{});var ss=d(vt);lc=a(ss,"Rather than call "),br=f(ss,"CODE",{});var tm=d(br);uc=a(tm,"quit"),tm.forEach(i),fc=a(ss," directly, we use two convenience functions."),ss.forEach(i),dc=_(l),de=f(l,"P",{});var Ze=d(de);pc=a(Ze,`This quits with
    `),wr=f(Ze,"CODE",{});var nm=d(wr);mc=a(nm,Wd),nm.forEach(i),hc=a(Ze,` if
    `),Er=f(Ze,"CODE",{});var rm=d(Er);gc=a(rm,qd),rm.forEach(i),_c=a(Ze,`
    throws, returning a `),vr=f(Ze,"CODE",{});var om=d(vr);yc=a(om,"Person"),om.forEach(i),bc=a(Ze," otherwise."),Ze.forEach(i),wc=_(l),A($t.$$.fragment,l),Ec=_(l),Ne=f(l,"P",{});var ln=d(Ne);vc=a(ln,`This quits with
    `),$r=f(ln,"CODE",{});var sm=d($r);$c=a(sm,Fd),sm.forEach(i),Oc=a(ln,`
    if `),Or=f(ln,"CODE",{});var am=d(Or);xc=a(am,"person"),am.forEach(i),Dc=a(ln," is undefined."),ln.forEach(i),Pc=_(l),A(Ot.$$.fragment,l),Cc=_(l),ge=f(l,"P",{});var Ft=d(ge);xr=f(Ft,"CODE",{});var im=d(xr);Tc=a(im,"canVote"),im.forEach(i),Nc=a(Ft," is straightforward. It takes a "),Dr=f(Ft,"CODE",{});var cm=d(Dr);Ic=a(cm,"quit"),cm.forEach(i),Sc=a(Ft,`
    parameter of the same type as `),Pr=f(Ft,"CODE",{});var lm=d(Pr);kc=a(lm,"getPerson"),lm.forEach(i),Ac=a(Ft," and forwards it."),Ft.forEach(i),Mc=_(l),A(xt.$$.fragment,l),Rc=_(l),J=f(l,"P",{});var be=d(J);Lc=a(be,"At the top level, "),Cr=f(be,"CODE",{});var um=d(Cr);Bc=a(um,"main"),um.forEach(i),jc=a(be," invokes "),Tr=f(be,"CODE",{});var fm=d(Tr);Vc=a(fm,"canVote"),fm.forEach(i),Uc=a(be,` with
    `),Nr=f(be,"CODE",{});var dm=d(Nr);Wc=a(dm,"notry"),dm.forEach(i),qc=a(be," and assigns the result to "),Ir=f(be,"CODE",{});var pm=d(Ir);Fc=a(pm,"did"),pm.forEach(i),Hc=a(be,"."),be.forEach(i),zc=_(l),A(Dt.$$.fragment,l),Yc=_(l),Sr=f(l,"P",{});var mm=d(Sr);kr=f(mm,"B",{});var hm=d(kr);Qc=a(hm,"How it works"),hm.forEach(i),mm.forEach(i),Kc=_(l),Pt=f(l,"P",{});var as=d(Pt);Gc=a(as,"Here is the function signature of "),Ar=f(as,"CODE",{});var gm=d(Ar);Jc=a(gm,"notry"),gm.forEach(i),Xc=a(as,"."),as.forEach(i),Zc=_(l),A(Ct.$$.fragment,l),el=_(l),Ie=f(l,"P",{});var un=d(Ie);tl=a(un,"The generic types "),Mr=f(un,"CODE",{});var _m=d(Mr);nl=a(_m,Hd),_m.forEach(i),rl=a(un,` represent
    the successful return type, failed return type, and `),Rr=f(un,"CODE",{});var ym=d(Rr);ol=a(ym,"quitable"),ym.forEach(i),sl=a(un," arguments."),un.forEach(i),al=_(l),Se=f(l,"P",{});var fn=d(Se);il=a(fn,"Any function that accepts "),Lr=f(fn,"CODE",{});var bm=d(Lr);cl=a(bm,"Quit"),bm.forEach(i),ll=a(fn,` as it's first parameter is a
    `),Br=f(fn,"CODE",{});var wm=d(Br);ul=a(wm,"Quitable"),wm.forEach(i),fl=a(fn,"."),fn.forEach(i),dl=_(l),A(Tt.$$.fragment,l),pl=_(l),Y=f(l,"P",{});var ce=d(Y);ml=a(ce,"So "),jr=f(ce,"CODE",{});var Em=d(jr);hl=a(Em,"notry"),Em.forEach(i),gl=a(ce," requires a "),Vr=f(ce,"CODE",{});var vm=d(Vr);_l=a(vm,"Quitable"),vm.forEach(i),yl=a(ce,` function and
    arguments to pass it and returns a `),Ur=f(ce,"CODE",{});var $m=d(Ur);bl=a($m,"Did"),$m.forEach(i),wl=a(ce,` containing the result
    (either `),Wr=f(ce,"CODE",{});var Om=d(Wr);El=a(Om,"Y"),Om.forEach(i),vl=a(ce," or "),qr=f(ce,"CODE",{});var xm=d(qr);$l=a(xm,"N"),xm.forEach(i),Ol=a(ce,")."),ce.forEach(i),xl=_(l),A(Nt.$$.fragment,l),Dl=_(l),H=f(l,"P",{});var te=d(H);Fr=f(te,"CODE",{});var Dm=d(Fr);Pl=a(Dm,"Did"),Dm.forEach(i),Cl=a(te," is a riff on the popular "),Hr=f(te,"CODE",{});var Pm=d(Hr);Tl=a(Pm,"Either"),Pm.forEach(i),Nl=a(te,` or
    `),zr=f(te,"CODE",{});var Cm=d(zr);Il=a(Cm,"Result"),Cm.forEach(i),Sl=a(te,`
    types. It's a discriminated union that indicates whether
    `),Yr=f(te,"CODE",{});var Tm=d(Yr);kl=a(Tm,"quitable"),Tm.forEach(i),Al=a(te,` returned or quit. In this case, it'll be
    `),Qr=f(te,"CODE",{});var Nm=d(Qr);Ml=a(Nm,zd),Nm.forEach(i),Rl=a(te,` or
    `),Kr=f(te,"CODE",{});var Im=d(Kr);Ll=a(Im,Yd),Im.forEach(i),Bl=a(te,"."),te.forEach(i),jl=_(l),X=f(l,"P",{});var we=d(X);Vl=a(we,"The last piece of the puzzle is "),Gr=f(we,"CODE",{});var Sm=d(Gr);Ul=a(Sm,Qd),Sm.forEach(i),Wl=a(we,`. It
    resolves to `),Jr=f(we,"CODE",{});var km=d(Jr);ql=a(km,Kd),km.forEach(i),Fl=a(we,` or
    `),Xr=f(we,"CODE",{});var Am=d(Xr);Hl=a(Am,Gd),Am.forEach(i),zl=a(we,`
    depending on whether `),Zr=f(we,"CODE",{});var Mm=d(Zr);Yl=a(Mm,"quitable"),Mm.forEach(i),Ql=a(we," returns a promise."),we.forEach(i),Kl=_(l),eo=f(l,"H3",{});var Rm=d(eo);Gl=a(Rm,"Error Handling At Scale"),Rm.forEach(i),Jl=_(l),to=f(l,"P",{});var Lm=d(to);Xl=a(Lm,`In the preceding problem, the difference in error handling solutions might
    seem insignificant. Here we'll look at a fleshier example and try to
    understand how each approach scales.`),Lm.forEach(i),Zl=_(l),A(It.$$.fragment,l),eu=_(l),Z=f(l,"P",{});var Ee=d(Z);tu=a(Ee,"The three external functions "),no=f(Ee,"CODE",{});var Bm=d(no);nu=a(Bm,"c"),Bm.forEach(i),ru=a(Ee,", "),ro=f(Ee,"CODE",{});var jm=d(ro);ou=a(jm,"d"),jm.forEach(i),su=a(Ee,`, and
    `),oo=f(Ee,"CODE",{});var Vm=d(oo);au=a(Vm,"e"),Vm.forEach(i),iu=a(Ee,`
    could throw so `),so=f(Ee,"CODE",{});var Um=d(so);cu=a(Um,"main"),Um.forEach(i),lu=a(Ee,` catches and logs the exception. In the base
    case there is no way to differentiate the three possible failures.`),Ee.forEach(i),uu=_(l),ao=f(l,"H4",{});var Wm=d(ao);fu=a(Wm,"try-catch"),Wm.forEach(i),du=_(l),St=f(l,"P",{});var is=d(St);pu=a(is,"Let's introduce a utility "),io=f(is,"CODE",{});var qm=d(io);mu=a(qm,"safe"),qm.forEach(i),hu=a(is,` to catch arbitary exceptions and
    throw something specific.`),is.forEach(i),gu=_(l),A(kt.$$.fragment,l),_u=_(l),co=f(l,"P",{});var Fm=d(co);yu=a(Fm,"The diff shows that it's an unobtrusive change."),Fm.forEach(i),bu=_(l),A(At.$$.fragment,l),wu=_(l),lo=f(l,"P",{});var Hm=d(lo);Eu=a(Hm,"However, no type safety."),Hm.forEach(i),vu=_(l),uo=f(l,"H4",{});var zm=d(uo);$u=a(zm,"Return types"),zm.forEach(i),Ou=_(l),Mt=f(l,"P",{});var cs=d(Mt);xu=a(cs,"This time we use a variant of "),fo=f(cs,"CODE",{});var Ym=d(fo);Du=a(Ym,"safe"),Ym.forEach(i),Pu=a(cs,` that catch exceptions and returns
    something specific.`),cs.forEach(i),Cu=_(l),A(Rt.$$.fragment,l),Tu=_(l),ke=f(l,"P",{});var dn=d(ke);Nu=a(dn,"Unfortunately now three of the five lines in both "),po=f(dn,"CODE",{});var Qm=d(po);Iu=a(Qm,"a"),Qm.forEach(i),Su=a(dn,` and
    `),mo=f(dn,"CODE",{});var Km=d(mo);ku=a(Km,"b"),Km.forEach(i),Au=a(dn,` are error handling. It's easy to see how this can get unwieldy
    at scale.`),dn.forEach(i),Mu=_(l),A(Lt.$$.fragment,l),Ru=_(l),ho=f(l,"P",{});var Gm=d(ho);Lu=a(Gm,"But now we have type safety."),Gm.forEach(i),Bu=_(l),go=f(l,"H4",{});var Jm=d(go);ju=a(Jm,"notry-ts"),Jm.forEach(i),Vu=_(l),Bt=f(l,"P",{});var ls=d(Bt);Uu=a(ls,"Finally, an implementation using "),_o=f(ls,"CODE",{});var Xm=d(_o);Wu=a(Xm,"notry"),Xm.forEach(i),qu=a(ls,"."),ls.forEach(i),Fu=_(l),A(jt.$$.fragment,l),Hu=_(l),Vt=f(l,"P",{});var us=d(Vt);zu=a(us,"Apart from the "),yo=f(us,"CODE",{});var Zm=d(yo);Yu=a(Zm,"quit"),Zm.forEach(i),Qu=a(us,` parameters, this looks more or less like the
    base case.`),us.forEach(i),Ku=_(l),A(Ut.$$.fragment,l),Gu=_(l),Wt=f(l,"P",{});var fs=d(Wt);Ju=a(fs,"Admittedly, all those "),bo=f(fs,"CODE",{});var eh=d(bo);Xu=a(eh,Jd),eh.forEach(i),Zu=a(fs,` parameters are a bit cumbersome
    so, like anything, you should weigh the benefits against the costs.`),fs.forEach(i),ef=_(l),wo=f(l,"H3",{});var th=d(wo);tf=a(th,"Comparison"),th.forEach(i),nf=_(l),Eo=f(l,"P",{});var nh=d(Eo);rf=a(nh,"Let's wrap up by looking at what we get from each approach."),nh.forEach(i),of=_(l),vo=f(l,"H4",{});var rh=d(vo);sf=a(rh,"Type Safety"),rh.forEach(i),af=_(l),pe=f(l,"P",{});var et=d(pe);cf=a(et,"None with "),$o=f(et,"B",{});var oh=d($o);lf=a(oh,"try-catch"),oh.forEach(i),uf=a(et,` and roughly the same degree with
    `),Oo=f(et,"B",{});var sh=d(Oo);ff=a(sh,"return types"),sh.forEach(i),df=a(et," and "),xo=f(et,"B",{});var ah=d(xo);pf=a(ah,"notry-ts"),ah.forEach(i),mf=a(et,` including the ability to tell at a glance
    if and what errors could occur.`),et.forEach(i),hf=_(l),ee=f(l,"P",{});var ve=d(ee);gf=a(ve,"The biggest difference is that it's easier to ignore "),Do=f(ve,"B",{});var ih=d(Do);_f=a(ih,"return types"),ih.forEach(i),yf=a(ve,`. If
    you call a function that normally returns `),Po=f(ve,"CODE",{});var ch=d(Po);bf=a(ch,"void"),ch.forEach(i),wf=a(ve,`, you can easily
    forget to check whether an error occurred. This problem only affects
    `),Co=f(ve,"B",{});var lh=d(Co);Ef=a(lh,"notry-ts"),lh.forEach(i),vf=a(ve," where "),To=f(ve,"CODE",{});var uh=d(To);$f=a(uh,"notry"),uh.forEach(i),Of=a(ve," is called."),ve.forEach(i),xf=_(l),No=f(l,"H4",{});var fh=d(No);Df=a(fh,"Developer Experience"),fh.forEach(i),Pf=_(l),Ae=f(l,"P",{});var pn=d(Ae);Cf=a(pn,"With "),Io=f(pn,"B",{});var dh=d(Io);Tf=a(dh,"try-catch"),dh.forEach(i),Nf=a(pn,", you could use a utility like "),So=f(pn,"CODE",{});var ph=d(So);If=a(ph,"safe"),ph.forEach(i),Sf=a(pn,` to incrementally
    improve your error handling done with minimal effect on readability.`),pn.forEach(i),kf=_(l),Jt=f(l,"P",{});var Od=d(Jt);ko=f(Od,"B",{});var mh=d(ko);Af=a(mh,"return types"),mh.forEach(i),Mf=a(Od,` are intuitive since it's natural to associate a function's
    return value with its outcome. This solution requires the greatest amount of
    code and gains usefulness the more it's used.`),Od.forEach(i),Rf=_(l),We=f(l,"P",{});var Wo=d(We);Ao=f(Wo,"B",{});var hh=d(Ao);Lf=a(hh,"notry"),hh.forEach(i),Bf=a(Wo,` has the least intuitive and most sophisticated typing. The
    function body's intent remains clear with error handling is mostly out of
    view. As with
    `),Mo=f(Wo,"B",{});var gh=d(Mo);jf=a(gh,"return types"),gh.forEach(i),Vf=a(Wo,", its usefulness is dependent on how widely it's used."),Wo.forEach(i),Uf=_(l),Ro=f(l,"H3",{});var _h=d(Ro);Wf=a(_h,"Conclusion"),_h.forEach(i),qf=_(l),ie=f(l,"P",{class:!0});var tt=d(ie);Ff=a(tt,`If you care about type safety (why else would you be here), use
    `),Lo=f(tt,"B",{});var yh=d(Lo);Hf=a(yh,"return types"),yh.forEach(i),zf=a(tt," or "),Bo=f(tt,"B",{});var bh=d(Bo);Yf=a(bh,"notry"),bh.forEach(i),Qf=a(tt,". Choose "),jo=f(tt,"B",{});var wh=d(jo);Kf=a(wh,"notry"),wh.forEach(i),Gf=a(tt,` for added readability
    and safety at the cost of complexity.`),tt.forEach(i),Jf=_(l),Vo=f(l,"H3",{});var Eh=d(Vo);Xf=a(Eh,"Resources"),Eh.forEach(i),Zf=_(l),qe=f(l,"DIV",{class:!0});var ds=d(qe);Xt=f(ds,"SMALL",{class:!0});var vh=d(Xt);ed=a(vh,"package"),vh.forEach(i),td=_(ds),Fe=f(ds,"A",{href:!0,target:!0,rel:!0});var $h=d(Fe);nd=a($h,"notry-ts"),$h.forEach(i),ds.forEach(i),rd=_(l),He=f(l,"DIV",{class:!0});var ps=d(He);Zt=f(ps,"SMALL",{class:!0});var Oh=d(Zt);od=a(Oh,"package"),Oh.forEach(i),sd=_(ps),ze=f(ps,"A",{href:!0,target:!0,rel:!0});var xh=d(ze);ad=a(xh,"neverthrow"),xh.forEach(i),ps.forEach(i),id=_(l),Ye=f(l,"DIV",{class:!0});var ms=d(Ye);en=f(ms,"SMALL",{class:!0});var Dh=d(en);cd=a(Dh,"package"),Dh.forEach(i),ld=_(ms),Qe=f(ms,"A",{href:!0,target:!0,rel:!0});var Ph=d(Qe);ud=a(Ph,"type-safe-errors"),Ph.forEach(i),ms.forEach(i),fd=_(l),Ke=f(l,"DIV",{class:!0});var hs=d(Ke);tn=f(hs,"SMALL",{class:!0});var Ch=d(tn);dd=a(Ch,"article"),Ch.forEach(i),pd=_(hs),Me=f(hs,"A",{href:!0,class:!0,target:!0,rel:!0});var Th=d(Me);md=a(Th,"Type-Safe Error Handling In TypeScript"),Th.forEach(i),hs.forEach(i),hd=_(l),Ge=f(l,"DIV",{class:!0});var gs=d(Ge);nn=f(gs,"SMALL",{class:!0});var Nh=d(nn);gd=a(Nh,"article"),Nh.forEach(i),_d=_(gs),Re=f(gs,"A",{href:!0,class:!0,target:!0,rel:!0});var Ih=d(Re);yd=a(Ih,"Functional Error Handling"),Ih.forEach(i),gs.forEach(i),bd=_(l),Je=f(l,"DIV",{class:!0});var _s=d(Je);rn=f(_s,"SMALL",{class:!0});var Sh=d(rn);wd=a(Sh,"article"),Sh.forEach(i),Ed=_(_s),Le=f(_s,"A",{href:!0,class:!0,target:!0,rel:!0});var kh=d(Le);vd=a(kh,"TypeScript / Implement Rust-style Result"),kh.forEach(i),_s.forEach(i),l.forEach(i),this.h()},h(){document.title="TypeScripting Try-Catch",w(n,"name","description"),w(n,"content","An exploration of type safe error-handling alternatives to try-catch in TypeScript."),w(c,"class","article-title"),w(h,"class","article-meta"),w(S,"href","https://github.com/nmacmunn/notry"),w(S,"target","_blank"),w(S,"rel","noreferrer"),w(O,"class","text-lead"),w(ie,"class","padding-bottom-large"),w(Xt,"class","text-muted"),w(Fe,"href","https://github.com/nmacmunn/notry"),w(Fe,"target","_blank"),w(Fe,"rel","noreferrer"),w(qe,"class","margin-bottom"),w(Zt,"class","text-muted"),w(ze,"href","https://github.com/supermacro/neverthrow"),w(ze,"target","_blank"),w(ze,"rel","noreferrer"),w(He,"class","margin-bottom"),w(en,"class","text-muted"),w(Qe,"href","https://github.com/wiktor-obrebski/type-safe-errors"),w(Qe,"target","_blank"),w(Qe,"rel","noreferrer"),w(Ye,"class","margin-bottom"),w(tn,"class","text-muted"),w(Me,"href","https://dev.to/_gdelgado/type-safe-error-handling-in-typescript-1p4n"),w(Me,"class","success"),w(Me,"target","_blank"),w(Me,"rel","noreferrer"),w(Ke,"class","margin-bottom"),w(nn,"class","text-muted"),w(Re,"href","https://khalilstemmler.com/articles/enterprise-typescript-nodejs/functional-error-handling/"),w(Re,"class","success"),w(Re,"target","_blank"),w(Re,"rel","noreferrer"),w(Ge,"class","margin-bottom"),w(rn,"class","text-muted"),w(Le,"href","https://www.huy.rocks/everyday/typescript-implement-rust-style-result"),w(Le,"class","success"),w(Le,"target","_blank"),w(Le,"rel","noreferrer"),w(Je,"class","margin-bottom"),w(r,"class","article container container-sm padding-bottom-large")},m(v,Uo){t(document.head,n),re(v,o,Uo),re(v,r,Uo),t(r,c),t(c,m),t(r,p),t(r,h),t(h,y),t(r,b),t(r,O),t(O,$),t(O,S),t(S,j),t(O,V),t(r,xe),t(r,oe),t(oe,se),t(oe,x),t(x,T),t(oe,N),t(r,D),M(U,r,null),t(r,q),t(r,P),t(P,F),t(P,me),t(me,Ue),t(P,Qt),t(r,Kt),t(r,Q),t(Q,Vs),t(r,Us),M(ft,r,null),t(r,Ws),t(r,vn),t(vn,qs),t(r,Fs),M(dt,r,null),t(r,Hs),t(r,De),t(De,zs),t(De,$n),t($n,Ys),t(De,Qs),t(De,On),t(On,Ks),t(De,Gs),t(r,Js),t(r,xn),t(xn,Xs),t(r,Zs),t(r,Dn),t(Dn,ea),t(r,ta),t(r,Pn),t(Pn,na),t(r,ra),t(r,Cn),t(Cn,oa),t(r,sa),t(r,pt),t(pt,aa),t(pt,Tn),t(Tn,ia),t(pt,ca),t(r,la),t(r,Nn),t(Nn,ua),t(r,fa),t(r,In),t(In,da),t(r,pa),t(r,Sn),t(Sn,ma),t(r,ha),t(r,kn),t(kn,ga),t(r,_a),t(r,An),t(An,ya),t(r,ba),t(r,Mn),t(Mn,wa),t(r,Ea),t(r,Rn),t(Rn,va),t(r,$a),t(r,Pe),t(Pe,Ln),t(Ln,Oa),t(Pe,xa),t(Pe,Bn),t(Bn,Da),t(Pe,Pa),t(Pe,jn),t(jn,Ca),t(r,Ta),t(r,Vn),t(Vn,Na),t(r,Ia),t(r,Un),t(Un,Sa),t(r,ka),t(r,Wn),t(Wn,Aa),t(r,Ma),t(r,qn),t(qn,Ra),t(r,La),M(mt,r,null),t(r,Ba),t(r,K),t(K,ja),t(K,Fn),t(Fn,Va),t(K,Ua),t(K,Hn),t(Hn,Wa),t(K,qa),t(K,zn),t(zn,Fa),t(K,Ha),t(K,Yn),t(Yn,za),t(K,Ya),t(r,Qa),t(r,Qn),t(Qn,Ka),t(r,Ga),t(r,ht),t(ht,Ja),t(ht,Kn),t(Kn,Xa),t(ht,Za),t(r,ei),M(gt,r,null),t(r,ti),t(r,Ce),t(Ce,ni),t(Ce,Gn),t(Gn,ri),t(Ce,oi),t(Ce,Jn),t(Jn,si),t(Ce,ai),t(r,ii),t(r,Xn),t(Xn,ci),t(r,li),t(r,fe),t(fe,Te),t(Te,ui),t(Te,Zn),t(Zn,fi),t(Te,di),t(Te,er),t(er,pi),t(Te,mi),t(fe,hi),t(fe,tr),t(tr,gi),t(fe,_i),t(fe,nr),t(nr,yi),t(fe,bi),t(fe,Gt),t(Gt,wi),t(Gt,rr),t(rr,Ei),t(r,vi),t(r,or),t(or,$i),t(r,Oi),t(r,sr),t(sr,xi),t(r,Di),t(r,G),t(G,Pi),t(G,ar),t(ar,Ci),t(G,Ti),t(G,ir),t(ir,Ni),t(G,Ii),t(G,cr),t(cr,Si),t(G,ki),t(G,lr),t(lr,Ai),t(G,Mi),t(r,Ri),M(_t,r,null),t(r,Li),t(r,ur),t(ur,Bi),t(r,ji),t(r,yt),t(yt,Vi),t(yt,fr),t(fr,Ui),t(yt,Wi),t(r,qi),M(bt,r,null),t(r,Fi),t(r,he),t(he,dr),t(dr,Hi),t(he,zi),t(he,pr),t(pr,Yi),t(he,Qi),t(he,mr),t(mr,Ki),t(he,Gi),t(r,Ji),M(wt,r,null),t(r,Xi),t(r,ae),t(ae,hr),t(hr,Zi),t(ae,ec),t(ae,gr),t(gr,tc),t(ae,nc),t(ae,_r),t(_r,rc),t(ae,oc),t(ae,yr),t(yr,sc),t(ae,ac),t(r,ic),M(Et,r,null),t(r,cc),t(r,vt),t(vt,lc),t(vt,br),t(br,uc),t(vt,fc),t(r,dc),t(r,de),t(de,pc),t(de,wr),t(wr,mc),t(de,hc),t(de,Er),t(Er,gc),t(de,_c),t(de,vr),t(vr,yc),t(de,bc),t(r,wc),M($t,r,null),t(r,Ec),t(r,Ne),t(Ne,vc),t(Ne,$r),t($r,$c),t(Ne,Oc),t(Ne,Or),t(Or,xc),t(Ne,Dc),t(r,Pc),M(Ot,r,null),t(r,Cc),t(r,ge),t(ge,xr),t(xr,Tc),t(ge,Nc),t(ge,Dr),t(Dr,Ic),t(ge,Sc),t(ge,Pr),t(Pr,kc),t(ge,Ac),t(r,Mc),M(xt,r,null),t(r,Rc),t(r,J),t(J,Lc),t(J,Cr),t(Cr,Bc),t(J,jc),t(J,Tr),t(Tr,Vc),t(J,Uc),t(J,Nr),t(Nr,Wc),t(J,qc),t(J,Ir),t(Ir,Fc),t(J,Hc),t(r,zc),M(Dt,r,null),t(r,Yc),t(r,Sr),t(Sr,kr),t(kr,Qc),t(r,Kc),t(r,Pt),t(Pt,Gc),t(Pt,Ar),t(Ar,Jc),t(Pt,Xc),t(r,Zc),M(Ct,r,null),t(r,el),t(r,Ie),t(Ie,tl),t(Ie,Mr),t(Mr,nl),t(Ie,rl),t(Ie,Rr),t(Rr,ol),t(Ie,sl),t(r,al),t(r,Se),t(Se,il),t(Se,Lr),t(Lr,cl),t(Se,ll),t(Se,Br),t(Br,ul),t(Se,fl),t(r,dl),M(Tt,r,null),t(r,pl),t(r,Y),t(Y,ml),t(Y,jr),t(jr,hl),t(Y,gl),t(Y,Vr),t(Vr,_l),t(Y,yl),t(Y,Ur),t(Ur,bl),t(Y,wl),t(Y,Wr),t(Wr,El),t(Y,vl),t(Y,qr),t(qr,$l),t(Y,Ol),t(r,xl),M(Nt,r,null),t(r,Dl),t(r,H),t(H,Fr),t(Fr,Pl),t(H,Cl),t(H,Hr),t(Hr,Tl),t(H,Nl),t(H,zr),t(zr,Il),t(H,Sl),t(H,Yr),t(Yr,kl),t(H,Al),t(H,Qr),t(Qr,Ml),t(H,Rl),t(H,Kr),t(Kr,Ll),t(H,Bl),t(r,jl),t(r,X),t(X,Vl),t(X,Gr),t(Gr,Ul),t(X,Wl),t(X,Jr),t(Jr,ql),t(X,Fl),t(X,Xr),t(Xr,Hl),t(X,zl),t(X,Zr),t(Zr,Yl),t(X,Ql),t(r,Kl),t(r,eo),t(eo,Gl),t(r,Jl),t(r,to),t(to,Xl),t(r,Zl),M(It,r,null),t(r,eu),t(r,Z),t(Z,tu),t(Z,no),t(no,nu),t(Z,ru),t(Z,ro),t(ro,ou),t(Z,su),t(Z,oo),t(oo,au),t(Z,iu),t(Z,so),t(so,cu),t(Z,lu),t(r,uu),t(r,ao),t(ao,fu),t(r,du),t(r,St),t(St,pu),t(St,io),t(io,mu),t(St,hu),t(r,gu),M(kt,r,null),t(r,_u),t(r,co),t(co,yu),t(r,bu),M(At,r,null),t(r,wu),t(r,lo),t(lo,Eu),t(r,vu),t(r,uo),t(uo,$u),t(r,Ou),t(r,Mt),t(Mt,xu),t(Mt,fo),t(fo,Du),t(Mt,Pu),t(r,Cu),M(Rt,r,null),t(r,Tu),t(r,ke),t(ke,Nu),t(ke,po),t(po,Iu),t(ke,Su),t(ke,mo),t(mo,ku),t(ke,Au),t(r,Mu),M(Lt,r,null),t(r,Ru),t(r,ho),t(ho,Lu),t(r,Bu),t(r,go),t(go,ju),t(r,Vu),t(r,Bt),t(Bt,Uu),t(Bt,_o),t(_o,Wu),t(Bt,qu),t(r,Fu),M(jt,r,null),t(r,Hu),t(r,Vt),t(Vt,zu),t(Vt,yo),t(yo,Yu),t(Vt,Qu),t(r,Ku),M(Ut,r,null),t(r,Gu),t(r,Wt),t(Wt,Ju),t(Wt,bo),t(bo,Xu),t(Wt,Zu),t(r,ef),t(r,wo),t(wo,tf),t(r,nf),t(r,Eo),t(Eo,rf),t(r,of),t(r,vo),t(vo,sf),t(r,af),t(r,pe),t(pe,cf),t(pe,$o),t($o,lf),t(pe,uf),t(pe,Oo),t(Oo,ff),t(pe,df),t(pe,xo),t(xo,pf),t(pe,mf),t(r,hf),t(r,ee),t(ee,gf),t(ee,Do),t(Do,_f),t(ee,yf),t(ee,Po),t(Po,bf),t(ee,wf),t(ee,Co),t(Co,Ef),t(ee,vf),t(ee,To),t(To,$f),t(ee,Of),t(r,xf),t(r,No),t(No,Df),t(r,Pf),t(r,Ae),t(Ae,Cf),t(Ae,Io),t(Io,Tf),t(Ae,Nf),t(Ae,So),t(So,If),t(Ae,Sf),t(r,kf),t(r,Jt),t(Jt,ko),t(ko,Af),t(Jt,Mf),t(r,Rf),t(r,We),t(We,Ao),t(Ao,Lf),t(We,Bf),t(We,Mo),t(Mo,jf),t(We,Vf),t(r,Uf),t(r,Ro),t(Ro,Wf),t(r,qf),t(r,ie),t(ie,Ff),t(ie,Lo),t(Lo,Hf),t(ie,zf),t(ie,Bo),t(Bo,Yf),t(ie,Qf),t(ie,jo),t(jo,Kf),t(ie,Gf),t(r,Jf),t(r,Vo),t(Vo,Xf),t(r,Zf),t(r,qe),t(qe,Xt),t(Xt,ed),t(qe,td),t(qe,Fe),t(Fe,nd),t(r,rd),t(r,He),t(He,Zt),t(Zt,od),t(He,sd),t(He,ze),t(ze,ad),t(r,id),t(r,Ye),t(Ye,en),t(en,cd),t(Ye,ld),t(Ye,Qe),t(Qe,ud),t(r,fd),t(r,Ke),t(Ke,tn),t(tn,dd),t(Ke,pd),t(Ke,Me),t(Me,md),t(r,hd),t(r,Ge),t(Ge,nn),t(nn,gd),t(Ge,_d),t(Ge,Re),t(Re,yd),t(r,bd),t(r,Je),t(Je,rn),t(rn,wd),t(Je,Ed),t(Je,Le),t(Le,vd),Xo=!0},p:Md,i(v){Xo||(R(U.$$.fragment,v),R(ft.$$.fragment,v),R(dt.$$.fragment,v),R(mt.$$.fragment,v),R(gt.$$.fragment,v),R(_t.$$.fragment,v),R(bt.$$.fragment,v),R(wt.$$.fragment,v),R(Et.$$.fragment,v),R($t.$$.fragment,v),R(Ot.$$.fragment,v),R(xt.$$.fragment,v),R(Dt.$$.fragment,v),R(Ct.$$.fragment,v),R(Tt.$$.fragment,v),R(Nt.$$.fragment,v),R(It.$$.fragment,v),R(kt.$$.fragment,v),R(At.$$.fragment,v),R(Rt.$$.fragment,v),R(Lt.$$.fragment,v),R(jt.$$.fragment,v),R(Ut.$$.fragment,v),Xo=!0)},o(v){L(U.$$.fragment,v),L(ft.$$.fragment,v),L(dt.$$.fragment,v),L(mt.$$.fragment,v),L(gt.$$.fragment,v),L(_t.$$.fragment,v),L(bt.$$.fragment,v),L(wt.$$.fragment,v),L(Et.$$.fragment,v),L($t.$$.fragment,v),L(Ot.$$.fragment,v),L(xt.$$.fragment,v),L(Dt.$$.fragment,v),L(Ct.$$.fragment,v),L(Tt.$$.fragment,v),L(Nt.$$.fragment,v),L(It.$$.fragment,v),L(kt.$$.fragment,v),L(At.$$.fragment,v),L(Rt.$$.fragment,v),L(Lt.$$.fragment,v),L(jt.$$.fragment,v),L(Ut.$$.fragment,v),Xo=!1},d(v){i(n),v&&i(o),v&&i(r),B(U),B(ft),B(dt),B(mt),B(gt),B(_t),B(bt),B(wt),B(Et),B($t),B(Ot),B(xt),B(Dt),B(Ct),B(Tt),B(Nt),B(It),B(kt),B(At),B(Rt),B(Lt),B(jt),B(Ut)}}}const ub='quit.unless(person, { type: "UserError", message: `${name} not found` });';function fb(e){return['type Why = { type: "UserError"; message: string } | { type: "DevError" };',"function getPerson(quit: Quit<Why>, name: string): Person",`quit({ type: "UserError", message: "message" }); 
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
  | { y: never; n: { val: N; exception: unknown } };`]}class mb extends bn{constructor(n){super(),wn(this,n,fb,lb,En,{})}}export{mb as default};
