(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{90:function(e,t,l){"use strict";l.r(t);var a=l(0),c=l(2);l(1);function r(e){var t,l,c;return{c(){t=Object(a.r)("div"),l=Object(a.r)("textarea"),this.h()},l(e){t=Object(a.l)(e,"DIV",{class:!0},!1);var c=Object(a.k)(t);l=Object(a.l)(c,"TEXTAREA",{id:!0,class:!0,type:!0,placeholder:!0,"aria-placeholder":!0},!1),Object(a.k)(l).forEach(a.q),c.forEach(a.q),this.h()},h(){Object(a.f)(l,"id",e.id),Object(a.f)(l,"class","form-input svelte-1qjh3vx"),Object(a.f)(l,"type","text"),Object(a.f)(l,"placeholder",e.placeholder),Object(a.f)(l,"aria-placeholder",e.placeholder),Object(a.f)(t,"class","form-group svelte-1qjh3vx"),c=Object(a.D)(l,"input",e.textarea_input_handler)},m(c,r){Object(a.B)(c,t,r),Object(a.d)(t,l),l.value=e.value},p(e,t){e.value&&(l.value=t.value),e.id&&Object(a.f)(l,"id",t.id),e.placeholder&&(Object(a.f)(l,"placeholder",t.placeholder),Object(a.f)(l,"aria-placeholder",t.placeholder))},i:a.G,o:a.G,d(e){e&&Object(a.q)(t),c()}}}function n(e,t,l){let{value:a="",selected:c="",labelText:r="",id:n="",placeholder:s=""}=t;return e.$set=e=>{"value"in e&&l("value",a=e.value),"selected"in e&&l("selected",c=e.selected),"labelText"in e&&l("labelText",r=e.labelText),"id"in e&&l("id",n=e.id),"placeholder"in e&&l("placeholder",s=e.placeholder)},{value:a,selected:c,labelText:r,id:n,placeholder:s,textarea_input_handler:function(){a=this.value,l("value",a)}}}var s=class extends a.b{constructor(e){var t;super(),document.getElementById("svelte-1qjh3vx-style")||((t=Object(a.r)("style")).id="svelte-1qjh3vx-style",t.textContent=".form-group.svelte-1qjh3vx{display:flex;flex-direction:column}.form-input.svelte-1qjh3vx{padding:0.5em;width:100% !important;min-height:8em}",Object(a.d)(document.head,t)),Object(a.A)(this,e,n,r,a.K,["value","selected","labelText","id","placeholder"])}},o=l(19),i=l.n(o);const u={"dr.":"doctor","mr.":"mister","mrs.":"mistress","ms.":"miz","mx.":"mister or miss","a.k.a.":"also known as","a.m.":"before noon","p.m.":"after noon","et al.":"and others","prof.":"professor"};function b(e){return O(e).length}function O(e){return e.match(/([^\u0000-\u007F]|\w)+/g)||[]}function d(e){return(e.match(/[\w\"\'\)\.]?[.?!](\s|$)/g)||[]).length}function j(e){var t,l,c,r,n,s,o,i,u,O,j,f,m=b(e.text),h=d(e.text);return{c(){t=Object(a.r)("div"),l=Object(a.r)("p"),c=Object(a.r)("small"),r=Object(a.O)("Word Count:"),n=Object(a.N)(),s=Object(a.O)(m),o=Object(a.N)(),i=Object(a.r)("p"),u=Object(a.r)("small"),O=Object(a.O)("Number of Sentences:"),j=Object(a.N)(),f=Object(a.O)(h),this.h()},l(e){t=Object(a.l)(e,"DIV",{class:!0},!1);var b=Object(a.k)(t);l=Object(a.l)(b,"P",{class:!0},!1);var d=Object(a.k)(l);c=Object(a.l)(d,"SMALL",{class:!0},!1);var v=Object(a.k)(c);r=Object(a.m)(v,"Word Count:"),v.forEach(a.q),n=Object(a.m)(d," "),s=Object(a.m)(d,m),d.forEach(a.q),o=Object(a.m)(b,"\n  "),i=Object(a.l)(b,"P",{class:!0},!1);var g=Object(a.k)(i);u=Object(a.l)(g,"SMALL",{class:!0},!1);var p=Object(a.k)(u);O=Object(a.m)(p,"Number of Sentences:"),p.forEach(a.q),j=Object(a.m)(g," "),f=Object(a.m)(g,h),g.forEach(a.q),b.forEach(a.q),this.h()},h(){Object(a.f)(c,"class","svelte-uz1s28"),Object(a.f)(l,"class","svelte-uz1s28"),Object(a.f)(u,"class","svelte-uz1s28"),Object(a.f)(i,"class","svelte-uz1s28"),Object(a.f)(t,"class","meta-scores svelte-uz1s28")},m(e,b){Object(a.B)(e,t,b),Object(a.d)(t,l),Object(a.d)(l,c),Object(a.d)(c,r),Object(a.d)(l,n),Object(a.d)(l,s),Object(a.d)(t,o),Object(a.d)(t,i),Object(a.d)(i,u),Object(a.d)(u,O),Object(a.d)(i,j),Object(a.d)(i,f)},p(e,t){e.text&&m!==(m=b(t.text))&&Object(a.M)(s,m),e.text&&h!==(h=d(t.text))&&Object(a.M)(f,h)},i:a.G,o:a.G,d(e){e&&Object(a.q)(t)}}}function f(e,t,l){let{text:a=""}=t;return e.$set=e=>{"text"in e&&l("text",a=e.text)},{text:a}}var m=class extends a.b{constructor(e){var t;super(),document.getElementById("svelte-uz1s28-style")||((t=Object(a.r)("style")).id="svelte-uz1s28-style",t.textContent=".meta-scores.svelte-uz1s28{margin:1em 0;align-self:flex-start;text-align:left;font-size:.8em}p.svelte-uz1s28{margin:0}small.svelte-uz1s28{margin:0;color:#34495e}",Object(a.d)(document.head,t)),Object(a.A)(this,e,f,j,a.K,["text"])}},h=l(24),v=l(10);function g(e,t,l){return t+(l-t)/100*Math.floor(100*e)}const{document:p}=a.x;function x(e){var t,l,c,r,n,s,o,i,u,b,O,d,j,f;return{c(){t=Object(a.r)("div"),l=Object(a.r)("div"),c=Object(a.r)("div"),r=Object(a.N)(),n=Object(a.r)("div"),s=Object(a.r)("span"),o=Object(a.O)(e.leftValue),i=Object(a.N)(),u=Object(a.r)("div"),b=Object(a.r)("span"),O=Object(a.O)(e.rightValue),d=Object(a.N)(),j=Object(a.r)("div"),this.h()},l(f){t=Object(a.l)(f,"DIV",{class:!0},!1);var m=Object(a.k)(t);l=Object(a.l)(m,"DIV",{class:!0},!1);var h=Object(a.k)(l);c=Object(a.l)(h,"DIV",{class:!0},!1),Object(a.k)(c).forEach(a.q),r=Object(a.m)(h,"\n    "),n=Object(a.l)(h,"DIV",{class:!0},!1);var v=Object(a.k)(n);s=Object(a.l)(v,"SPAN",{class:!0},!1);var g=Object(a.k)(s);o=Object(a.m)(g,e.leftValue),g.forEach(a.q),v.forEach(a.q),i=Object(a.m)(h,"\n    "),u=Object(a.l)(h,"DIV",{class:!0},!1);var p=Object(a.k)(u);b=Object(a.l)(p,"SPAN",{class:!0},!1);var x=Object(a.k)(b);O=Object(a.m)(x,e.rightValue),x.forEach(a.q),p.forEach(a.q),d=Object(a.m)(h,"\n    "),j=Object(a.l)(h,"DIV",{class:!0,style:!0},!1),Object(a.k)(j).forEach(a.q),h.forEach(a.q),m.forEach(a.q),this.h()},h(){Object(a.f)(c,"class","range svelte-1iazmd3"),Object(a.f)(s,"class","limitLabel svelte-1iazmd3"),Object(a.f)(n,"class","minValue svelte-1iazmd3"),Object(a.f)(b,"class","limitLabel svelte-1iazmd3"),Object(a.f)(u,"class","maxValue svelte-1iazmd3"),Object(a.f)(j,"class","currentValue svelte-1iazmd3"),Object(a.f)(j,"style",e.currentValueStyle),Object(a.f)(l,"class","valueContainer svelte-1iazmd3"),Object(a.f)(t,"class","container svelte-1iazmd3"),f=Object(a.D)(window,"resize",e.setCurrentElementWidth)},m(e,f){Object(a.B)(e,t,f),Object(a.d)(t,l),Object(a.d)(l,c),Object(a.d)(l,r),Object(a.d)(l,n),Object(a.d)(n,s),Object(a.d)(s,o),Object(a.d)(l,i),Object(a.d)(l,u),Object(a.d)(u,b),Object(a.d)(b,O),Object(a.d)(l,d),Object(a.d)(l,j)},p(e,t){e.leftValue&&Object(a.M)(o,t.leftValue),e.rightValue&&Object(a.M)(O,t.rightValue),e.currentValueStyle&&Object(a.f)(j,"style",t.currentValueStyle)},i:a.G,o:a.G,d(e){e&&Object(a.q)(t),f()}}}function $(e,t,l){let r,{leftValue:n,rightValue:s,value:o,reverse:i=!1}=t,u=0;const b=[{red:46,green:204,blue:113},{red:243,green:156,blue:18},{red:231,green:76,blue:60}],O=Object(h.a)(0,{duration:300,easing:v.a});Object(a.n)(e,O,e=>{l("$progress",r=e)});const d=()=>{l("currentElementWidth",u=document.querySelector(".currentValue").getBoundingClientRect().width)};let j,f,m,p,x;return Object(c.c)(d),e.$set=e=>{"leftValue"in e&&l("leftValue",n=e.leftValue),"rightValue"in e&&l("rightValue",s=e.rightValue),"value"in e&&l("value",o=e.value),"reverse"in e&&l("reverse",i=e.reverse)},e.$$.update=(e={leftValue:1,rightValue:1,value:1,reverse:1,$progress:1,currentValueElementWidthHasToBeSubtracted:1,currentElementWidth:1,color:1,rgb:1,subtractValueToPreventOverflow:1})=>{(e.leftValue||e.rightValue||e.value)&&(n<s&&o===n||s<n&&o===s)&&l("value",o=0),(e.value||e.rightValue||e.leftValue)&&O.set(o/Math.max(s,n)),(e.reverse||e.$progress)&&l("currentValueElementWidthHasToBeSubtracted",j=i?r<.5:r>.5),(e.currentValueElementWidthHasToBeSubtracted||e.currentElementWidth)&&l("subtractValueToPreventOverflow",f=`${j?u:0}px`),(e.reverse||e.$progress)&&l("color",m=function(e,t){let l,a,c;const[r,n,s]=t;return{red:l=e>.5?g((e-.5)/.5,n.red,s.red):g(e/.5,r.red,n.red),green:a=e>.5?g((e-.5)/.5,n.green,s.green):g(e/.5,r.green,n.green),blue:c=e>.5?g((e-.5)/.5,n.blue,s.blue):g(e/.5,r.blue,n.blue)}}(i?1-r:r,b)),e.color&&l("rgb",p=`rgb(${m.red}, ${m.green}, ${m.blue})`),(e.rgb||e.reverse||e.$progress||e.subtractValueToPreventOverflow)&&l("currentValueStyle",x=`background-color: ${p}; left: calc(${i?"100% - ":""}${100*r}% - ${f});`)},{leftValue:n,rightValue:s,value:o,reverse:i,progress:O,setCurrentElementWidth:d,currentValueStyle:x}}var V=class extends a.b{constructor(e){var t;super(),p.getElementById("svelte-1iazmd3-style")||((t=Object(a.r)("style")).id="svelte-1iazmd3-style",t.textContent=".container.svelte-1iazmd3{text-align:center;width:100%}.valueContainer.svelte-1iazmd3{position:relative;width:50%;margin:0 auto;display:flex;align-items:center;height:1.5em}@media(max-width: 768px){.valueContainer.svelte-1iazmd3{width:100%}}.range.svelte-1iazmd3{height:2px;left:0;right:0;top:50%;transform:translateY(-50%);background-color:#ecf0f1;flex:1}.minValue.svelte-1iazmd3{left:0;transform:translate(-100%, -50%);position:absolute;top:50%;width:1px;height:1.5em;background-color:#34495e;border-radius:100px}.maxValue.svelte-1iazmd3{right:0;transform:translate(100%, -50%);position:absolute;top:50%;width:1px;height:1.5em;background-color:#34495e;border-radius:100px}.currentValue.svelte-1iazmd3{position:absolute;background-color:#34495e;width:3vw;height:3vw;max-width:1em;max-height:1em;border-radius:1000px;left:43%;top:50%;transform:translateY(-50%)}.limitLabel.svelte-1iazmd3{bottom:-100%;position:absolute;left:50%;transform:translateX(-50%)}",Object(a.d)(p.head,t)),Object(a.A)(this,e,$,x,a.K,["leftValue","rightValue","value","reverse"])}};function w(e){var t,l,c,r;return{c(){t=Object(a.r)("br"),l=Object(a.N)(),c=Object(a.r)("small"),r=Object(a.O)(e.subtitle),this.h()},l(n){t=Object(a.l)(n,"BR",{},!1),Object(a.k)(t).forEach(a.q),l=Object(a.m)(n,"\n      "),c=Object(a.l)(n,"SMALL",{class:!0},!1);var s=Object(a.k)(c);r=Object(a.m)(s,e.subtitle),s.forEach(a.q),this.h()},h(){Object(a.f)(c,"class","label svelte-zmqqf9")},m(e,n){Object(a.B)(e,t,n),Object(a.B)(e,l,n),Object(a.B)(e,c,n),Object(a.d)(c,r)},p(e,t){e.subtitle&&Object(a.M)(r,t.subtitle)},d(e){e&&(Object(a.q)(t),Object(a.q)(l),Object(a.q)(c))}}}function q(e){var t,l,c,r,n,s,o,i,u,b,O=e.value&&e.value.toFixed(2).replace(".00",""),d=e.subtitle&&w(e),j=[e.valueRangeProps];let f={};for(var m=0;m<j.length;m+=1)f=Object(a.e)(f,j[m]);var h=new V({props:f});return{c(){t=Object(a.r)("div"),l=Object(a.r)("p"),c=Object(a.r)("small"),n=Object(a.O)(":"),s=Object(a.N)(),o=Object(a.O)(O),i=Object(a.N)(),d&&d.c(),u=Object(a.N)(),h.$$.fragment.c(),this.h()},l(e){t=Object(a.l)(e,"DIV",{class:!0},!1);var r=Object(a.k)(t);l=Object(a.l)(r,"P",{class:!0},!1);var b=Object(a.k)(l);c=Object(a.l)(b,"SMALL",{class:!0},!1);var j=Object(a.k)(c);n=Object(a.m)(j,":"),j.forEach(a.q),s=Object(a.m)(b,"\n    "),o=Object(a.m)(b,O),i=Object(a.m)(b,"\n\n    "),d&&d.l(b),b.forEach(a.q),u=Object(a.m)(r,"\n\n  "),h.$$.fragment.l(r),r.forEach(a.q),this.h()},h(){r=new a.a(e.title,n),Object(a.f)(c,"class","page-link svelte-zmqqf9"),Object(a.f)(l,"class","label svelte-zmqqf9"),Object(a.f)(t,"class","container svelte-zmqqf9")},m(e,O){Object(a.B)(e,t,O),Object(a.d)(t,l),Object(a.d)(l,c),r.m(c),Object(a.d)(c,n),Object(a.d)(l,s),Object(a.d)(l,o),Object(a.d)(l,i),d&&d.m(l,null),Object(a.d)(t,u),Object(a.F)(h,t,null),b=!0},p(e,t){b&&!e.title||r.p(t.title),b&&!e.value||O===(O=t.value&&t.value.toFixed(2).replace(".00",""))||Object(a.M)(o,O),t.subtitle?d?d.p(e,t):((d=w(t)).c(),d.m(l,null)):d&&(d.d(1),d=null);var c=e.valueRangeProps?Object(a.w)(j,[t.valueRangeProps]):{};h.$set(c)},i(e){b||(Object(a.P)(h.$$.fragment,e),b=!0)},o(e){Object(a.Q)(h.$$.fragment,e),b=!1},d(e){e&&Object(a.q)(t),d&&d.d(),Object(a.p)(h)}}}function E(e,t,l){let a,{title:c,subtitle:r="",value:n=.5,leftValue:s,rightValue:o,reverse:i}=t;return e.$set=e=>{"title"in e&&l("title",c=e.title),"subtitle"in e&&l("subtitle",r=e.subtitle),"value"in e&&l("value",n=e.value),"leftValue"in e&&l("leftValue",s=e.leftValue),"rightValue"in e&&l("rightValue",o=e.rightValue),"reverse"in e&&l("reverse",i=e.reverse)},e.$$.update=(e={value:1,leftValue:1,rightValue:1,reverse:1})=>{(e.value||e.leftValue||e.rightValue||e.reverse)&&l("valueRangeProps",a={value:n,leftValue:s,rightValue:o,reverse:i})},{title:c,subtitle:r,value:n,leftValue:s,rightValue:o,reverse:i,valueRangeProps:a}}var y=class extends a.b{constructor(e){var t;super(),document.getElementById("svelte-zmqqf9-style")||((t=Object(a.r)("style")).id="svelte-zmqqf9-style",t.textContent=".container.svelte-zmqqf9{margin:1em 0}.label.svelte-zmqqf9{margin:0;color:#34495e}.page-link.svelte-zmqqf9{text-decoration:none}.page-link.svelte-zmqqf9:hover{text-decoration:initial}",Object(a.d)(document.head,t)),Object(a.A)(this,e,E,q,a.K,["title","subtitle","value","leftValue","rightValue","reverse"])}};const S=()=>{let e="/svelte-text-readability-scorer";return window&&!window.location.href.includes("svelte-text-readability-scorer")&&(e=""),e},I=100,z=0;class k{static calculate({text:e,words:t,asl:l}){if(!e)return I;let a=206.835-1.015*l-84.6*(function(e){const t=e.toLowerCase();let l=0;return O(t).forEach(e=>{l+=i()(e)}),l}(e)/t);return a>I?a=I:a<z&&(a=z),a}}const N=0,A=30;class L{static calculate({text:e,words:t,sentences:l,anl:a}){if(!e)return N;let c=5.89*a-.296*(l/t)-15.8;return c>A?c=A:c<N&&(c=N),c}}const C=0,T=30,F={20:"Post-graduate Plus",19:"Post-graduate",18:"Post-graduate",17:"College graduate",16:"College senior",15:"College junior",14:"College sophomore",13:"College freshman",12:"High school senior",11:"High school junior",10:"High school sophomore",9:"High school freshman",8:"Eighth grade",7:"Seventh grade",6:"Sixth grade"};class _{static calculate({text:e,words:t,asl:l}){if(!e)return C;let a=.4*(l+function(e){const t=e.toLowerCase();let l=0;return O(t).forEach(e=>{i()(e)>=3&&(l+=1)}),l}(e)/t*100);return a>T?a=T:a<C&&(a=C),a}static scoringLevel(e){const t=parseInt(e),l=Object.keys(F),a=l[0],c=l[l.length-1];return t<a?"":e>c?F[c]:e<a?F[a]:F[t]}}const P=14,M=1;class B{static calculate({text:e,words:t,sentences:l,anl:a}){if(!e)return M;let c=4.71*a+.5*(t/l)-21.43;return c>P?c=P:c<M&&(c=M),c}}function D(e){var t,l,c,r,n=new y({props:{title:`<a href="${e.root}/formulas/flesch-kincaid">Flesch Kincaid Reading Ease</a>`,value:e.fleschKincaidScore,leftValue:I,rightValue:z,reverse:!0}}),s=new y({props:{title:`<a href="${e.root}/formulas/gunning-flog">Gunning Fog Index</a>`,value:e.gunningFlogScore,subtitle:_.scoringLevel(e.gunningFlogScore),leftValue:C,rightValue:T}}),o=new y({props:{title:`<a href="${e.root}/formulas/coleman-liau">Coleman Liau Index</a>`,value:e.colemanLiauScore,leftValue:N,rightValue:A}}),i=new y({props:{title:`<a href="${e.root}/formulas/automated-readability">Automated Readability Index</a>`,value:e.automatedReadabilityScore,leftValue:M,rightValue:P}});return{c(){n.$$.fragment.c(),t=Object(a.N)(),s.$$.fragment.c(),l=Object(a.N)(),o.$$.fragment.c(),c=Object(a.N)(),i.$$.fragment.c()},l(e){n.$$.fragment.l(e),t=Object(a.m)(e,"\n"),s.$$.fragment.l(e),l=Object(a.m)(e,"\n"),o.$$.fragment.l(e),c=Object(a.m)(e,"\n"),i.$$.fragment.l(e)},m(e,u){Object(a.F)(n,e,u),Object(a.B)(e,t,u),Object(a.F)(s,e,u),Object(a.B)(e,l,u),Object(a.F)(o,e,u),Object(a.B)(e,c,u),Object(a.F)(i,e,u),r=!0},p(e,t){var l={};e.root&&(l.title=`<a href="${t.root}/formulas/flesch-kincaid">Flesch Kincaid Reading Ease</a>`),e.fleschKincaidScore&&(l.value=t.fleschKincaidScore),e.MAX_FLESC_KINCAID&&(l.leftValue=I),e.MIN_FLESC_KINCAID&&(l.rightValue=z),n.$set(l);var a={};e.root&&(a.title=`<a href="${t.root}/formulas/gunning-flog">Gunning Fog Index</a>`),e.gunningFlogScore&&(a.value=t.gunningFlogScore),(e.GunningFlogScorer||e.gunningFlogScore)&&(a.subtitle=_.scoringLevel(t.gunningFlogScore)),e.MIN_GUNNING_FLOG&&(a.leftValue=C),e.MAX_GUNNING_FLOG&&(a.rightValue=T),s.$set(a);var c={};e.root&&(c.title=`<a href="${t.root}/formulas/coleman-liau">Coleman Liau Index</a>`),e.colemanLiauScore&&(c.value=t.colemanLiauScore),e.MIN_COLEMAN_LIAU_INDEX&&(c.leftValue=N),e.MAX_COLEMAN_LIAU_INDEX&&(c.rightValue=A),o.$set(c);var r={};e.root&&(r.title=`<a href="${t.root}/formulas/automated-readability">Automated Readability Index</a>`),e.automatedReadabilityScore&&(r.value=t.automatedReadabilityScore),e.MIN_AUTOMATED_READABILITY&&(r.leftValue=M),e.MAX_AUTOMATED_READABILITY&&(r.rightValue=P),i.$set(r)},i(e){r||(Object(a.P)(n.$$.fragment,e),Object(a.P)(s.$$.fragment,e),Object(a.P)(o.$$.fragment,e),Object(a.P)(i.$$.fragment,e),r=!0)},o(e){Object(a.Q)(n.$$.fragment,e),Object(a.Q)(s.$$.fragment,e),Object(a.Q)(o.$$.fragment,e),Object(a.Q)(i.$$.fragment,e),r=!1},d(e){Object(a.p)(n,e),e&&Object(a.q)(t),Object(a.p)(s,e),e&&Object(a.q)(l),Object(a.p)(o,e),e&&Object(a.q)(c),Object(a.p)(i,e)}}}function R(e,t,l){let a,r,n,s,o,i,u,j,f,{text:m=""}=t;return Object(c.c)(()=>{l("root",f=S())}),e.$set=e=>{"text"in e&&l("text",m=e.text)},e.$$.update=(e={text:1,words:1,sentences:1,asl:1,anl:1})=>{e.text&&l("words",a=b(m)||1),e.text&&l("sentences",r=d(m)||1),e.text&&l("anl",n=function(e){const t=O(e);return t.reduce((e,t)=>e+=t.length,0)/(t.length||1)}(m)),(e.words||e.sentences)&&l("asl",s=a/r),(e.text||e.words||e.asl)&&l("fleschKincaidScore",o=k.calculate({text:m,words:a,asl:s})),(e.text||e.words||e.asl)&&l("gunningFlogScore",i=_.calculate({text:m,words:a,asl:s})),(e.text||e.words||e.sentences||e.anl)&&l("colemanLiauScore",u=L.calculate({text:m,words:a,sentences:r,anl:n})),(e.text||e.words||e.sentences||e.anl)&&l("automatedReadabilityScore",j=B.calculate({text:m,words:a,sentences:r,anl:n}))},l("root",f=""),{text:m,fleschKincaidScore:o,gunningFlogScore:i,colemanLiauScore:u,automatedReadabilityScore:j,root:f}}var G=class extends a.b{constructor(e){super(),Object(a.A)(this,e,R,D,a.K,["text"])}};function K(e){var t,l,c,r,n,o,i,u,b,O,d;function j(t){e.formgroup_value_binding.call(null,t),n=!0,Object(a.c)(()=>n=!1)}let f={id:"subjectText",placeholder:"Write your text here and see the score being calculated"};void 0!==e.text&&(f.value=e.text);var h=new s({props:f});a.i.push(()=>Object(a.h)(h,"value",j));var v=new m({props:{text:e.cleanText}}),g=new G({props:{text:e.cleanText}});return{c(){t=Object(a.r)("div"),l=Object(a.r)("h1"),c=Object(a.O)("How readable is your text?"),r=Object(a.N)(),h.$$.fragment.c(),o=Object(a.N)(),v.$$.fragment.c(),i=Object(a.N)(),u=Object(a.r)("h6"),b=Object(a.O)("Click on the titles to learn more about the formulas!"),O=Object(a.N)(),g.$$.fragment.c(),this.h()},l(e){t=Object(a.l)(e,"DIV",{class:!0},!1);var n=Object(a.k)(t);l=Object(a.l)(n,"H1",{},!1);var s=Object(a.k)(l);c=Object(a.m)(s,"How readable is your text?"),s.forEach(a.q),r=Object(a.m)(n,"\n\n  "),h.$$.fragment.l(n),o=Object(a.m)(n,"\n\n  "),v.$$.fragment.l(n),i=Object(a.m)(n,"\n  "),u=Object(a.l)(n,"H6",{class:!0},!1);var d=Object(a.k)(u);b=Object(a.m)(d,"Click on the titles to learn more about the formulas!"),d.forEach(a.q),O=Object(a.m)(n,"\n\n  "),g.$$.fragment.l(n),n.forEach(a.q),this.h()},h(){Object(a.f)(u,"class","read-more-info svelte-xpmtf9"),Object(a.f)(t,"class","container svelte-xpmtf9")},m(e,n){Object(a.B)(e,t,n),Object(a.d)(t,l),Object(a.d)(l,c),Object(a.d)(t,r),Object(a.F)(h,t,null),Object(a.d)(t,o),Object(a.F)(v,t,null),Object(a.d)(t,i),Object(a.d)(t,u),Object(a.d)(u,b),Object(a.d)(t,O),Object(a.F)(g,t,null),d=!0},p(e,t){var l={};!n&&e.text&&(l.value=t.text),h.$set(l);var a={};e.cleanText&&(a.text=t.cleanText),v.$set(a);var c={};e.cleanText&&(c.text=t.cleanText),g.$set(c)},i(e){d||(Object(a.P)(h.$$.fragment,e),Object(a.P)(v.$$.fragment,e),Object(a.P)(g.$$.fragment,e),d=!0)},o(e){Object(a.Q)(h.$$.fragment,e),Object(a.Q)(v.$$.fragment,e),Object(a.Q)(g.$$.fragment,e),d=!1},d(e){e&&Object(a.q)(t),Object(a.p)(h),Object(a.p)(v),Object(a.p)(g)}}}function H(e,t,l){let a,r=null;return Object(c.a)(()=>{l("text",r=null!==r?r:window.sessionStorage.getItem("text")),window.sessionStorage.setItem("text",r)}),e.$$.update=(e={text:1})=>{e.text&&l("cleanText",a=function(e){return e.toLowerCase().split(" ").map(e=>u[e]||e).join(" ")}((r||"").trim()))},{text:r,cleanText:a,formgroup_value_binding:function(e){l("text",r=e)}}}t.default=class extends a.b{constructor(e){var t;super(),document.getElementById("svelte-xpmtf9-style")||((t=Object(a.r)("style")).id="svelte-xpmtf9-style",t.textContent=".container.svelte-xpmtf9{display:flex;flex-direction:column;text-align:center}.read-more-info.svelte-xpmtf9{font-style:italic;color:rgba(127, 140, 141, 0.7);margin:1em 0}",Object(a.d)(document.head,t)),Object(a.A)(this,e,H,K,a.K,[])}}}}]);