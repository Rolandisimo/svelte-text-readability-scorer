!function(e){function t(t){for(var n,o,c=t[0],s=t[1],i=0,u=[];i<c.length;i++)o=c[i],r[o]&&u.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(a&&a(t);u.length;)u.shift()()}var n={},r={6:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=c);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=function(e){return o.p+"fe8697245583f0f4528b/"+({0:"vendors~formulas_coleman$45liau~formulas_flesch$45kincaid~formulas_gunning$45flog",1:"formulas__layout",2:"formulas_coleman$45liau",3:"formulas_flesch$45kincaid",4:"formulas_gunning$45flog",5:"index",7:"vendors~index"}[e]||e)+"."+e+".js"}(e);var a=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",a.name="ChunkLoadError",a.type=o,a.request=c,n[1](a)}r[e]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:i})},12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="client/",o.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var a=s;o(o.s=3)}([function(e,t,n){"use strict";function r(){}n.d(t,"a",function(){return M}),n.d(t,"b",function(){return pe}),n.d(t,"c",function(){return Y}),n.d(t,"d",function(){return w}),n.d(t,"e",function(){return c}),n.d(t,"f",function(){return k}),n.d(t,"g",function(){return ue}),n.d(t,"h",function(){return D}),n.d(t,"i",function(){return re}),n.d(t,"j",function(){return C}),n.d(t,"k",function(){return R}),n.d(t,"l",function(){return q}),n.d(t,"m",function(){return d}),n.d(t,"n",function(){return p}),n.d(t,"o",function(){return fe}),n.d(t,"p",function(){return E}),n.d(t,"q",function(){return x}),n.d(t,"r",function(){return A}),n.d(t,"s",function(){return H}),n.d(t,"t",function(){return m}),n.d(t,"u",function(){return b}),n.d(t,"v",function(){return ie}),n.d(t,"w",function(){return se}),n.d(t,"x",function(){return ne}),n.d(t,"y",function(){return o}),n.d(t,"z",function(){return de}),n.d(t,"A",function(){return _}),n.d(t,"B",function(){return u}),n.d(t,"C",function(){return L}),n.d(t,"D",function(){return y}),n.d(t,"E",function(){return le}),n.d(t,"F",function(){return r}),n.d(t,"G",function(){return O}),n.d(t,"H",function(){return J}),n.d(t,"I",function(){return a}),n.d(t,"J",function(){return l}),n.d(t,"K",function(){return U}),n.d(t,"L",function(){return N}),n.d(t,"M",function(){return S}),n.d(t,"N",function(){return P}),n.d(t,"O",function(){return oe}),n.d(t,"P",function(){return ce});const o=e=>e;function c(e,t){for(const n in t)e[n]=t[n];return e}function s(e){return e()}function i(){return Object.create(null)}function a(e){e.forEach(s)}function u(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function f(e,t){const n=e.subscribe(t);return n.unsubscribe?()=>n.unsubscribe():n}function d(e,t,n){e.$$.on_destroy.push(f(t,n))}function p(e,t,n){if(e){const r=b(e,t,n);return e[0](r)}}function b(e,t,n){return e[1]?c({},c(t.$$scope.ctx,e[1](n?n(t):{}))):t.$$scope.ctx}function m(e,t,n,r){return e[1]?c({},c(t.$$scope.changed||{},e[1](r?r(n):{}))):t.$$scope.changed||{}}const h="undefined"!=typeof window;let O=h?()=>window.performance.now():()=>Date.now(),g=h?e=>requestAnimationFrame(e):r;const j=new Set;let $=!1;function v(){j.forEach(e=>{e[0](O())||(j.delete(e),e[1]())}),($=j.size>0)&&g(v)}function y(e){let t;return $||($=!0,g(v)),{promise:new Promise(n=>{j.add(t=[e,n])}),abort(){j.delete(t)}}}function w(e,t){e.appendChild(t)}function _(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode.removeChild(e)}function x(e){return document.createElement(e)}function P(e){return document.createTextNode(e)}function S(){return P(" ")}function A(){return P("")}function L(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function k(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function C(e){return Array.from(e.childNodes)}function R(e,t,n,r){for(let r=0;r<e.length;r+=1){const o=e[r];if(o.nodeName===t){for(let e=0;e<o.attributes.length;e+=1){const t=o.attributes[e];n[t.name]||o.removeAttribute(t.name)}return e.splice(r,1)[0]}}return r?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):x(t)}function q(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=t,e.splice(n,1)[0]}return P(t)}function N(e,t){t=""+t,e.data!==t&&(e.data=t)}class M{constructor(e,t=null){this.e=x("div"),this.a=t,this.u(e)}m(e,t=null){for(let n=0;n<this.n.length;n+=1)_(e,this.n[n],t);this.t=e}u(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}p(e){this.d(),this.u(e),this.m(this.t,this.a)}d(){this.n.forEach(E)}}let T;function F(e){T=e}function I(){if(!T)throw new Error("Function called outside component initialization");return T}function J(e){I().$$.on_mount.push(e)}function U(e,t){I().$$.context.set(e,t)}function H(e){return I().$$.context.get(e)}const z=[],D=[],K=[],B=[],G=Promise.resolve();let V=!1;function W(){V||(V=!0,G.then(Q))}function X(e){K.push(e)}function Y(e){B.push(e)}function Q(){const e=new Set;do{for(;z.length;){const e=z.shift();F(e),Z(e.$$)}for(;D.length;)D.pop()();for(let t=0;t<K.length;t+=1){const n=K[t];e.has(n)||(n(),e.add(n))}K.length=0}while(z.length);for(;B.length;)B.pop()();V=!1}function Z(e){e.fragment&&(e.update(e.dirty),a(e.before_update),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(X))}const ee=new Set;let te;function ne(){te={r:0,c:[],p:te}}function re(){te.r||a(te.c),te=te.p}function oe(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function ce(e,t,n,r){if(e&&e.o){if(ee.has(e))return;ee.add(e),te.c.push(()=>{ee.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}const se="undefined"!=typeof window?window:global;function ie(e,t){const n={},r={},o={$$scope:1};let c=e.length;for(;c--;){const s=e[c],i=t[c];if(i){for(const e in s)e in i||(r[e]=1);for(const e in i)o[e]||(n[e]=i[e],o[e]=1);e[c]=i}else for(const e in s)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}let ae;function ue(e,t,n){-1!==e.$$.props.indexOf(t)&&(e.$$.bound[t]=n,n(e.$$.ctx[t]))}function le(e,t,n){const{fragment:r,on_mount:o,on_destroy:c,after_update:i}=e.$$;r.m(t,n),X(()=>{const t=o.map(s).filter(u);c?c.push(...t):a(t),e.$$.on_mount=[]}),i.forEach(X)}function fe(e,t){e.$$.fragment&&(a(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={})}function de(e,t,n,o,c,s){const u=T;F(e);const l=t.props||{},f=e.$$={fragment:null,ctx:null,props:s,update:r,not_equal:c,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:i(),dirty:null};let d=!1;f.ctx=n?n(e,l,(t,n)=>{f.ctx&&c(f.ctx[t],f.ctx[t]=n)&&(f.bound[t]&&f.bound[t](n),d&&function(e,t){e.$$.dirty||(z.push(e),W(),e.$$.dirty=i()),e.$$.dirty[t]=!0}(e,t))}):l,f.update(),d=!0,a(f.before_update),f.fragment=o(f.ctx),t.target&&(t.hydrate?f.fragment.l(C(t.target)):f.fragment.c(),t.intro&&oe(e.$$.fragment),le(e,t.target,t.anchor),Q()),F(u)}"undefined"!=typeof HTMLElement&&(ae=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){fe(this,1),this.$destroy=r}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}});class pe{$destroy(){fe(this,1),this.$destroy=r}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}},function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(0);const o=[];function c(e,t=r.F){let n;const c=[];function s(t){if(Object(r.J)(e,t)&&(e=t,n)){const t=!o.length;for(let t=0;t<c.length;t+=1){const n=c[t];n[1](),o.push(n,e)}if(t){for(let e=0;e<o.length;e+=2)o[e][0](o[e+1]);o.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(o,i=r.F){const a=[o,i];return c.push(a),1===c.length&&(n=t(s)||r.F),o(e),()=>{const e=c.indexOf(a);-1!==e&&c.splice(e,1),0===c.length&&(n(),n=null)}}}}},function(e,t,n){"use strict";var r=n(0);n.d(t,"a",function(){return r.s}),n.d(t,"b",function(){return r.H}),n.d(t,"c",function(){return r.K})},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(1);const c={},s=()=>({});var i=n(0);function a(e){var t,n,r,o,c,s;const a=e.$$slots.default,u=Object(i.n)(a,e,null);return{c(){t=Object(i.q)("meta"),n=Object(i.q)("meta"),r=Object(i.q)("meta"),o=Object(i.M)(),c=Object(i.q)("main"),u&&u.c(),this.h()},l(e){t=Object(i.k)(e,"META",{name:!0,content:!0},!1),Object(i.j)(t).forEach(i.p),n=Object(i.k)(e,"META",{name:!0,content:!0},!1),Object(i.j)(n).forEach(i.p),r=Object(i.k)(e,"META",{name:!0,content:!0},!1),Object(i.j)(r).forEach(i.p),o=Object(i.l)(e,"\n\n"),c=Object(i.k)(e,"MAIN",{class:!0},!1);var s=Object(i.j)(c);u&&u.l(s),s.forEach(i.p),this.h()},h(){document.title="Text Readability Evaluator",Object(i.f)(t,"name","author"),Object(i.f)(t,"content","Rolands Jegorovs https://github.com/Rolandisimo"),Object(i.f)(n,"name","description"),Object(i.f)(n,"content","A real-time svelte text readabilty evaluator based on various linguistic formulas such as Coleman Liau Index, Flesch-Kincaid Readability Ease, Gunning Flog Index, etc."),Object(i.f)(r,"name","keywords"),Object(i.f)(r,"content","Flesch-Kincaid,Flesch-Kincaid Readability Ease,Gunning Flog Index,Readability,readability,text evaluator,Coleman Liau Index,Coleam-Liau,Gunning-Flog"),Object(i.f)(c,"class","svelte-oosp9s")},m(e,a){Object(i.d)(document.head,t),Object(i.d)(document.head,n),Object(i.d)(document.head,r),Object(i.A)(e,o,a),Object(i.A)(e,c,a),u&&u.m(c,null),s=!0},p(e,t){u&&u.p&&e.$$scope&&u.p(Object(i.t)(a,t,e,null),Object(i.u)(a,t,null))},i(e){s||(Object(i.O)(u,e),s=!0)},o(e){Object(i.P)(u,e),s=!1},d(e){Object(i.p)(t),Object(i.p)(n),Object(i.p)(r),e&&(Object(i.p)(o),Object(i.p)(c)),u&&u.d(e)}}}function u(e,t,n){let{$$slots:r={},$$scope:o}=t;return e.$set=e=>{"$$scope"in e&&n("$$scope",o=e.$$scope)},{$$slots:r,$$scope:o}}var l=class extends i.b{constructor(e){var t;super(),document.getElementById("svelte-oosp9s-style")||((t=Object(i.q)("style")).id="svelte-oosp9s-style",t.textContent="main.svelte-oosp9s{position:relative;max-width:56em;background-color:white;padding:2em;margin:0 auto;box-sizing:border-box}",Object(i.d)(document.head,t)),Object(i.z)(this,e,u,a,i.J,[])}};function f(e){var t,n,r=e.error.stack;return{c(){t=Object(i.q)("pre"),n=Object(i.N)(r)},l(e){t=Object(i.k)(e,"PRE",{},!1);var o=Object(i.j)(t);n=Object(i.l)(o,r),o.forEach(i.p)},m(e,r){Object(i.A)(e,t,r),Object(i.d)(t,n)},p(e,t){e.error&&r!==(r=t.error.stack)&&Object(i.L)(n,r)},d(e){e&&Object(i.p)(t)}}}function d(e){var t,n,r,o,c,s,a,u,l,d=e.error.message;document.title=t=e.status;var p=e.dev&&e.error.stack&&f(e);return{c(){n=Object(i.M)(),r=Object(i.q)("h1"),o=Object(i.N)(e.status),c=Object(i.M)(),s=Object(i.q)("p"),a=Object(i.N)(d),u=Object(i.M)(),p&&p.c(),l=Object(i.r)(),this.h()},l(t){n=Object(i.l)(t,"\n\n"),r=Object(i.k)(t,"H1",{class:!0},!1);var f=Object(i.j)(r);o=Object(i.l)(f,e.status),f.forEach(i.p),c=Object(i.l)(t,"\n\n"),s=Object(i.k)(t,"P",{class:!0},!1);var b=Object(i.j)(s);a=Object(i.l)(b,d),b.forEach(i.p),u=Object(i.l)(t,"\n\n"),p&&p.l(t),l=Object(i.r)(),this.h()},h(){Object(i.f)(r,"class","svelte-8od9u6"),Object(i.f)(s,"class","svelte-8od9u6")},m(e,t){Object(i.A)(e,n,t),Object(i.A)(e,r,t),Object(i.d)(r,o),Object(i.A)(e,c,t),Object(i.A)(e,s,t),Object(i.d)(s,a),Object(i.A)(e,u,t),p&&p.m(e,t),Object(i.A)(e,l,t)},p(e,n){e.status&&t!==(t=n.status)&&(document.title=t),e.status&&Object(i.L)(o,n.status),e.error&&d!==(d=n.error.message)&&Object(i.L)(a,d),n.dev&&n.error.stack?p?p.p(e,n):((p=f(n)).c(),p.m(l.parentNode,l)):p&&(p.d(1),p=null)},i:i.F,o:i.F,d(e){e&&(Object(i.p)(n),Object(i.p)(r),Object(i.p)(c),Object(i.p)(s),Object(i.p)(u)),p&&p.d(e),e&&Object(i.p)(l)}}}function p(e,t,n){let{status:r,error:o}=t;return e.$set=e=>{"status"in e&&n("status",r=e.status),"error"in e&&n("error",o=e.error)},{status:r,error:o,dev:!1}}var b=class extends i.b{constructor(e){var t;super(),document.getElementById("svelte-8od9u6-style")||((t=Object(i.q)("style")).id="svelte-8od9u6-style",t.textContent="h1.svelte-8od9u6,p.svelte-8od9u6{margin:0 auto}h1.svelte-8od9u6{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-8od9u6{margin:1em auto}@media(min-width: 480px){h1.svelte-8od9u6{font-size:4em}}",Object(i.d)(document.head,t)),Object(i.z)(this,e,p,d,i.J,["status","error"])}};function m(e){var t,n,r=[{segment:e.segments[1]},e.level1.props],o=e.level1.component;function c(e){let t={$$slots:{default:[g]},$$scope:{ctx:e}};for(var n=0;n<r.length;n+=1)t=Object(i.e)(t,r[n]);return{props:t}}if(o)var s=new o(c(e));return{c(){s&&s.$$.fragment.c(),t=Object(i.r)()},l(e){s&&s.$$.fragment.l(e),t=Object(i.r)()},m(e,r){s&&Object(i.E)(s,e,r),Object(i.A)(e,t,r),n=!0},p(e,n){var a=e.segments||e.level1?Object(i.v)(r,[e.segments&&{segment:n.segments[1]},e.level1&&n.level1.props]):{};if((e.$$scope||e.level2)&&(a.$$scope={changed:e,ctx:n}),o!==(o=n.level1.component)){if(s){Object(i.x)();const e=s;Object(i.P)(e.$$.fragment,1,0,()=>{Object(i.o)(e,1)}),Object(i.i)()}o?((s=new o(c(n))).$$.fragment.c(),Object(i.O)(s.$$.fragment,1),Object(i.E)(s,t.parentNode,t)):s=null}else o&&s.$set(a)},i(e){n||(s&&Object(i.O)(s.$$.fragment,e),n=!0)},o(e){s&&Object(i.P)(s.$$.fragment,e),n=!1},d(e){e&&Object(i.p)(t),s&&Object(i.o)(s,e)}}}function h(e){var t,n=new b({props:{error:e.error,status:e.status}});return{c(){n.$$.fragment.c()},l(e){n.$$.fragment.l(e)},m(e,r){Object(i.E)(n,e,r),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),n.$set(r)},i(e){t||(Object(i.O)(n.$$.fragment,e),t=!0)},o(e){Object(i.P)(n.$$.fragment,e),t=!1},d(e){Object(i.o)(n,e)}}}function O(e){var t,n,r=[e.level2.props],o=e.level2.component;function c(e){let t={};for(var n=0;n<r.length;n+=1)t=Object(i.e)(t,r[n]);return{props:t}}if(o)var s=new o(c());return{c(){s&&s.$$.fragment.c(),t=Object(i.r)()},l(e){s&&s.$$.fragment.l(e),t=Object(i.r)()},m(e,r){s&&Object(i.E)(s,e,r),Object(i.A)(e,t,r),n=!0},p(e,n){var a=e.level2?Object(i.v)(r,[n.level2.props]):{};if(o!==(o=n.level2.component)){if(s){Object(i.x)();const e=s;Object(i.P)(e.$$.fragment,1,0,()=>{Object(i.o)(e,1)}),Object(i.i)()}o?((s=new o(c())).$$.fragment.c(),Object(i.O)(s.$$.fragment,1),Object(i.E)(s,t.parentNode,t)):s=null}else o&&s.$set(a)},i(e){n||(s&&Object(i.O)(s.$$.fragment,e),n=!0)},o(e){s&&Object(i.P)(s.$$.fragment,e),n=!1},d(e){e&&Object(i.p)(t),s&&Object(i.o)(s,e)}}}function g(e){var t,n,r=e.level2&&O(e);return{c(){r&&r.c(),t=Object(i.r)()},l(e){r&&r.l(e),t=Object(i.r)()},m(e,o){r&&r.m(e,o),Object(i.A)(e,t,o),n=!0},p(e,n){n.level2?r?(r.p(e,n),Object(i.O)(r,1)):((r=O(n)).c(),Object(i.O)(r,1),r.m(t.parentNode,t)):r&&(Object(i.x)(),Object(i.P)(r,1,1,()=>{r=null}),Object(i.i)())},i(e){n||(Object(i.O)(r),n=!0)},o(e){Object(i.P)(r),n=!1},d(e){r&&r.d(e),e&&Object(i.p)(t)}}}function j(e){var t,n,r,o,c=[h,m],s=[];function a(e){return e.error?0:1}return t=a(e),n=s[t]=c[t](e),{c(){n.c(),r=Object(i.r)()},l(e){n.l(e),r=Object(i.r)()},m(e,n){s[t].m(e,n),Object(i.A)(e,r,n),o=!0},p(e,o){var u=t;(t=a(o))===u?s[t].p(e,o):(Object(i.x)(),Object(i.P)(s[u],1,1,()=>{s[u]=null}),Object(i.i)(),(n=s[t])||(n=s[t]=c[t](o)).c(),Object(i.O)(n,1),n.m(r.parentNode,r))},i(e){o||(Object(i.O)(n),o=!0)},o(e){Object(i.P)(n),o=!1},d(e){s[t].d(e),e&&Object(i.p)(r)}}}function $(e){var t,n=[{segment:e.segments[0]},e.level0.props];let r={$$slots:{default:[j]},$$scope:{ctx:e}};for(var o=0;o<n.length;o+=1)r=Object(i.e)(r,n[o]);var c=new l({props:r});return{c(){c.$$.fragment.c()},l(e){c.$$.fragment.l(e)},m(e,n){Object(i.E)(c,e,n),t=!0},p(e,t){var r=e.segments||e.level0?Object(i.v)(n,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1||e.segments||e.level2)&&(r.$$scope={changed:e,ctx:t}),c.$set(r)},i(e){t||(Object(i.O)(c.$$.fragment,e),t=!0)},o(e){Object(i.P)(c.$$.fragment,e),t=!1},d(e){Object(i.o)(c,e)}}}function v(e,t,n){let{stores:o,error:s,status:i,segments:a,level0:u,level1:l=null,level2:f=null}=t;return Object(r.c)(c,o),e.$set=e=>{"stores"in e&&n("stores",o=e.stores),"error"in e&&n("error",s=e.error),"status"in e&&n("status",i=e.status),"segments"in e&&n("segments",a=e.segments),"level0"in e&&n("level0",u=e.level0),"level1"in e&&n("level1",l=e.level1),"level2"in e&&n("level2",f=e.level2)},{stores:o,error:s,status:i,segments:a,level0:u,level1:l,level2:f}}var y=class extends i.b{constructor(e){super(),Object(i.z)(this,e,v,$,i.J,["stores","error","status","segments","level0","level1","level2"])}};const w=[],_=[{js:()=>Promise.all([n.e(7),n.e(5)]).then(n.bind(null,88)),css:"__SAPPER_CSS_PLACEHOLDER:index.svelte__"},{js:()=>n.e(1).then(n.bind(null,84)),css:"__SAPPER_CSS_PLACEHOLDER:formulas/_layout.svelte__"},{js:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,85)),css:"__SAPPER_CSS_PLACEHOLDER:formulas/flesch-kincaid.svelte__"},{js:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,86)),css:"__SAPPER_CSS_PLACEHOLDER:formulas/coleman-liau.svelte__"},{js:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,87)),css:"__SAPPER_CSS_PLACEHOLDER:formulas/gunning-flog.svelte__"}],E=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/formulas\/flesch-kincaid\/?$/,parts:[{i:1},{i:2}]},{pattern:/^\/formulas\/coleman-liau\/?$/,parts:[{i:1},{i:3}]},{pattern:/^\/formulas\/gunning-flog\/?$/,parts:[{i:1},{i:4}]}];const x="undefined"!=typeof __SAPPER__&&__SAPPER__;let P,S,A,L=!1,k=[],C="{}";const R={page:Object(o.a)({}),preloading:Object(o.a)(null),session:Object(o.a)(x&&x.session)};let q,N;R.session.subscribe(async e=>{if(q=e,!L)return;N=!0;const t=z(new URL(location.href)),n=S={},{redirect:r,props:o,branch:c}=await G(t);n===S&&await B(r,c,o,t.page)});let M,T=null;let F,I=1;const J="undefined"!=typeof history?history:{pushState:(e,t,n)=>{},replaceState:(e,t,n)=>{},scrollRestoration:""},U={};function H(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(r):t[n]=r}),t}function z(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(x.baseUrl))return null;let t=e.pathname.slice(x.baseUrl.length);if(""===t&&(t="/"),!w.some(e=>e.test(t)))for(let n=0;n<E.length;n+=1){const r=E[n],o=r.pattern.exec(t);if(o){const n=H(e.search),c=r.parts[r.parts.length-1],s=c.params?c.params(o):{},i={host:location.host,path:t,query:n,params:s};return{href:e.href,route:r,match:o,page:i}}}}function D(){return{x:pageXOffset,y:pageYOffset}}async function K(e,t,n,r){if(t)F=t;else{const e=D();U[F]=e,t=F=++I,U[F]=n?e:{x:0,y:0}}F=t,P&&R.preloading.set(!0);const o=T&&T.href===e.href?T.promise:G(e);T=null;const c=S={},{redirect:s,props:i,branch:a}=await o;if(c===S&&(await B(s,a,i,e.page),document.activeElement&&document.activeElement.blur(),!n)){let e=U[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}U[F]=e,e&&scrollTo(e.x,e.y)}}async function B(e,t,n,r){if(e)return function(e,t={replaceState:!1}){const n=z(new URL(e,document.baseURI));return n?(J[t.replaceState?"replaceState":"pushState"]({id:F},"",e),K(n,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(R.page.set(r),R.preloading.set(!1),P)P.$set(n);else{n.stores={page:{subscribe:R.page.subscribe},preloading:{subscribe:R.preloading.subscribe},session:R.session},n.level0={props:await A};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)X(e.nextSibling);X(e),X(t)}P=new y({target:M,props:n,hydrate:!0})}k=t,C=JSON.stringify(r.query),L=!0,N=!1}async function G(e){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let o=null;const c={error:null,status:200,segments:[r[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(o&&(o.statusCode!==e||o.location!==t))throw new Error("Conflicting redirects");o={statusCode:e,location:t}},error:(e,t)=>{c.error="string"==typeof t?new Error(t):t,c.status=e}};let a;A||(A=x.preloaded[0]||s.call(i,{host:n.host,path:n.path,query:n.query,params:{}},q));let u=1;try{const o=JSON.stringify(n.query),s=t.pattern.exec(n.path);let l=!1;a=await Promise.all(t.parts.map(async(t,a)=>{const f=r[a];if(function(e,t,n,r){if(r!==C)return!0;const o=k[e];return!!o&&(t!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,f,s,o)&&(l=!0),c.segments[u]=r[a+1],!t)return{segment:f};const d=u++;if(!N&&!l&&k[a]&&k[a].part===t.i)return k[a];l=!1;const{default:p,preload:b}=await W(_[t.i]);let m;return m=L||!x.preloaded[a+1]?b?await b.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},q):{}:x.preloaded[a+1],c[`level${d}`]={component:p,props:m,segment:f,match:s,part:t.i}}))}catch(e){c.error=e,c.status=500,a=[]}return{redirect:o,props:c,branch:a}}function V(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=n,document.head.appendChild(r)})}function W(e){const t="string"==typeof e.css?[]:e.css.map(V);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}function X(e){e.parentNode.removeChild(e)}function Y(e){const t=z(new URL(e,document.baseURI));if(t)return T&&e===T.href||function(e,t){T={href:e,promise:t}}(e,G(t)),T.promise}let Q;function Z(e){clearTimeout(Q),Q=setTimeout(()=>{ee(e)},20)}function ee(e){const t=ne(e.target);t&&"prefetch"===t.rel&&Y(t.href)}function te(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=ne(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const c=z(o);if(c){K(c,null,t.hasAttribute("sapper-noscroll"),o.hash),e.preventDefault(),J.pushState({id:F},"",o.href)}}function ne(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function re(e){if(U[F]=D(),e.state){const t=z(new URL(location.href));t?K(t,e.state.id):location.href=location.href}else(function(e){F=e})(I=I+1),J.replaceState({id:F},"",location.href)}var oe,ce;oe={target:document.querySelector("#sapper")},"scrollRestoration"in J&&(J.scrollRestoration="manual"),ce=oe.target,M=ce,addEventListener("click",te),addEventListener("popstate",re),addEventListener("touchstart",ee),addEventListener("mousemove",Z),Promise.resolve().then(()=>{const{hash:e,href:t}=location;J.replaceState({id:I},"",t);const n=new URL(location.href);if(x.error)return function(e){const{host:t,pathname:n,search:r}=location,{session:o,preloaded:c,status:s,error:i}=x;A||(A=c&&c[0]),B(null,[],{error:i,status:s,session:o,level0:{props:A},level1:{props:{status:s,error:i},component:b},segments:c},{host:t,path:n,query:H(r),params:{}})}();const r=z(n);return r?K(r,I,!0,e):void 0})}]);