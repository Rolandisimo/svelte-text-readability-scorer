(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var l=c(0);function a(e){var t,c,a,r,s,b,n;return{c(){t=Object(l.p)("div"),c=Object(l.p)("label"),a=Object(l.N)(e.labelText),s=Object(l.M)(),b=Object(l.p)("textarea"),this.h()},l(r){t=Object(l.j)(r,"DIV",{class:!0},!1);var n=Object(l.i)(t);c=Object(l.j)(n,"LABEL",{for:!0,class:!0},!1);var o=Object(l.i)(c);a=Object(l.k)(o,e.labelText),o.forEach(l.o),s=Object(l.k)(n,"\n  "),b=Object(l.j)(n,"TEXTAREA",{id:!0,class:!0,type:!0,placeholder:!0,"aria-placeholder":!0},!1),Object(l.i)(b).forEach(l.o),n.forEach(l.o),this.h()},h(){Object(l.e)(c,"for",e.id),Object(l.e)(c,"class",r=Object(l.G)(`label ${e.selected===e.id?"active":""}`)+" svelte-zw7kt"),Object(l.e)(b,"id",e.id),Object(l.e)(b,"class","form-input svelte-zw7kt"),Object(l.e)(b,"type","text"),Object(l.e)(b,"placeholder",e.placeholder),Object(l.e)(b,"aria-placeholder",e.placeholder),Object(l.e)(t,"class","form-group svelte-zw7kt"),n=Object(l.B)(b,"input",e.textarea_input_handler)},m(r,n){Object(l.z)(r,t,n),Object(l.c)(t,c),Object(l.c)(c,a),Object(l.c)(t,s),Object(l.c)(t,b),b.value=e.value},p(e,t){e.labelText&&Object(l.L)(a,t.labelText),e.id&&Object(l.e)(c,"for",t.id),(e.selected||e.id)&&r!==(r=Object(l.G)(`label ${t.selected===t.id?"active":""}`)+" svelte-zw7kt")&&Object(l.e)(c,"class",r),e.value&&(b.value=t.value),e.id&&Object(l.e)(b,"id",t.id),e.placeholder&&(Object(l.e)(b,"placeholder",t.placeholder),Object(l.e)(b,"aria-placeholder",t.placeholder))},i:l.E,o:l.E,d(e){e&&Object(l.o)(t),n()}}}function r(e,t,c){let{value:l="",selected:a="",labelText:r="",id:s="",placeholder:b=""}=t;return e.$set=e=>{"value"in e&&c("value",l=e.value),"selected"in e&&c("selected",a=e.selected),"labelText"in e&&c("labelText",r=e.labelText),"id"in e&&c("id",s=e.id),"placeholder"in e&&c("placeholder",b=e.placeholder)},{value:l,selected:a,labelText:r,id:s,placeholder:b,textarea_input_handler:function(){l=this.value,c("value",l)}}}var s=class extends l.a{constructor(e){var t;super(),document.getElementById("svelte-zw7kt-style")||((t=Object(l.p)("style")).id="svelte-zw7kt-style",t.textContent=".form-group.svelte-zw7kt{display:flex;flex-direction:column}.label.svelte-zw7kt{font-size:1.2em;color:rgba(0, 0, 0, 0.1)}.label.active.svelte-zw7kt{color:rgba(0, 0, 0, 0.9)}.form-input.svelte-zw7kt{padding:0.5em;width:100% !important;min-height:10em}",Object(l.c)(document.head,t)),Object(l.y)(this,e,r,a,l.J,["value","selected","labelText","id","placeholder"])}},b=c(2),n=c(5),o=c(4);const{document:i}=l.v;function j(e){var t,c,a,r,s,b,n,o,i,j,O,u,d,h;return{c(){t=Object(l.p)("div"),c=Object(l.p)("div"),a=Object(l.p)("div"),r=Object(l.M)(),s=Object(l.p)("div"),b=Object(l.p)("span"),n=Object(l.N)(e.leftValue),o=Object(l.M)(),i=Object(l.p)("div"),j=Object(l.p)("span"),O=Object(l.N)(e.rightValue),u=Object(l.M)(),d=Object(l.p)("div"),this.h()},l(h){t=Object(l.j)(h,"DIV",{class:!0},!1);var v=Object(l.i)(t);c=Object(l.j)(v,"DIV",{class:!0},!1);var g=Object(l.i)(c);a=Object(l.j)(g,"DIV",{class:!0},!1),Object(l.i)(a).forEach(l.o),r=Object(l.k)(g,"\n    "),s=Object(l.j)(g,"DIV",{class:!0},!1);var f=Object(l.i)(s);b=Object(l.j)(f,"SPAN",{class:!0},!1);var p=Object(l.i)(b);n=Object(l.k)(p,e.leftValue),p.forEach(l.o),f.forEach(l.o),o=Object(l.k)(g,"\n    "),i=Object(l.j)(g,"DIV",{class:!0},!1);var m=Object(l.i)(i);j=Object(l.j)(m,"SPAN",{class:!0},!1);var x=Object(l.i)(j);O=Object(l.k)(x,e.rightValue),x.forEach(l.o),m.forEach(l.o),u=Object(l.k)(g,"\n    "),d=Object(l.j)(g,"DIV",{class:!0,style:!0},!1),Object(l.i)(d).forEach(l.o),g.forEach(l.o),v.forEach(l.o),this.h()},h(){Object(l.e)(a,"class","range svelte-1eu73sz"),Object(l.e)(b,"class","limitLabel svelte-1eu73sz"),Object(l.e)(s,"class","minValue svelte-1eu73sz"),Object(l.e)(j,"class","limitLabel svelte-1eu73sz"),Object(l.e)(i,"class","maxValue svelte-1eu73sz"),Object(l.e)(d,"class","currentValue svelte-1eu73sz"),Object(l.e)(d,"style",e.currentValueStyle),Object(l.e)(c,"class","valueContainer svelte-1eu73sz"),Object(l.e)(t,"class","container svelte-1eu73sz"),h=Object(l.B)(window,"resize",e.setCurrentElementWidth)},m(e,h){Object(l.z)(e,t,h),Object(l.c)(t,c),Object(l.c)(c,a),Object(l.c)(c,r),Object(l.c)(c,s),Object(l.c)(s,b),Object(l.c)(b,n),Object(l.c)(c,o),Object(l.c)(c,i),Object(l.c)(i,j),Object(l.c)(j,O),Object(l.c)(c,u),Object(l.c)(c,d)},p(e,t){e.leftValue&&Object(l.L)(n,t.leftValue),e.rightValue&&Object(l.L)(O,t.rightValue),e.currentValueStyle&&Object(l.e)(d,"style",t.currentValueStyle)},i:l.E,o:l.E,d(e){e&&Object(l.o)(t),h()}}}function O(e,t,c){let a;const r=Object(n.a)(0,{duration:300,easing:o.a});Object(l.l)(e,r,e=>{c("$progress",a=e)});let{leftValue:s,rightValue:i,value:j,reverse:O=!1}=t,u=0;const d=()=>{c("currentElementWidth",u=document.querySelector(".currentValue").getBoundingClientRect().width)};let h,v,g;return Object(b.b)(d),e.$set=e=>{"leftValue"in e&&c("leftValue",s=e.leftValue),"rightValue"in e&&c("rightValue",i=e.rightValue),"value"in e&&c("value",j=e.value),"reverse"in e&&c("reverse",O=e.reverse)},e.$$.update=(e={value:1,rightValue:1,leftValue:1,reverse:1,$progress:1,currentValueElementWidthHasToBeSubtracted:1,currentElementWidth:1,subtractValueToPreventOverflow:1})=>{(e.value||e.rightValue||e.leftValue)&&r.set(j/Math.max(i,s)),(e.reverse||e.$progress)&&c("currentValueElementWidthHasToBeSubtracted",h=O?a<.5:a>.5),(e.currentValueElementWidthHasToBeSubtracted||e.currentElementWidth)&&c("subtractValueToPreventOverflow",v=`${h?u:0}px`),(e.reverse||e.$progress||e.subtractValueToPreventOverflow)&&c("currentValueStyle",g=`left: calc(${O?"100% - ":""}${100*a}% - ${v});`)},{progress:r,leftValue:s,rightValue:i,value:j,reverse:O,setCurrentElementWidth:d,currentValueStyle:g}}var u=class extends l.a{constructor(e){var t;super(),i.getElementById("svelte-1eu73sz-style")||((t=Object(l.p)("style")).id="svelte-1eu73sz-style",t.textContent=".container.svelte-1eu73sz{text-align:center;width:100%}.valueContainer.svelte-1eu73sz{position:relative;width:50%;margin:0 auto;display:flex;align-items:center;height:1.5em}.range.svelte-1eu73sz{height:2px;left:0;right:0;top:50%;transform:translateY(-50%);background-color:#ecf0f1;flex:1}.minValue.svelte-1eu73sz{left:0;transform:translate(-100%, -50%);position:absolute;top:50%;width:1px;height:1.5em;background-color:#34495e;border-radius:100px}.maxValue.svelte-1eu73sz{right:0;transform:translate(100%, -50%);position:absolute;top:50%;width:1px;height:1.5em;background-color:#34495e;border-radius:100px}.currentValue.svelte-1eu73sz{position:absolute;background-color:#34495e;width:3vw;height:3vw;max-width:1em;max-height:1em;border-radius:1000px;left:43%;top:50%;transform:translateY(-50%);border:1px solid #34495e}.limitLabel.svelte-1eu73sz{bottom:-100%;position:absolute;left:50%;transform:translateX(-50%)}",Object(l.c)(i.head,t)),Object(l.y)(this,e,O,j,l.J,["leftValue","rightValue","value","reverse"])}},d=c(6),h=c.n(d);function v(e){return g(e).length||1}function g(e){return e.match(/([^\u0000-\u007F]|\w)+/g)||[]}function f(e){return(e.match(/[\w]\)?[.?!](\s|$)/g)||[]).length||1}function p(e){return h()(e)}const m=120,x=0;class V{static calculate(e){if(!e)return m;const t=v(e);let c=206.835-1.015*(t/f(e))-84.6*(function(e){const t=e.toLowerCase();let c=0;return g(t).forEach(e=>{c+=p(e)}),c}(e)/t);return c>m?c=m:c<x&&(c=x),c}}const E=0,$=30,k={20:"Post-graduate Plus",19:"Post-graduate",18:"Post-graduate",17:"College graduate",16:"College senior",15:"College junior",14:"College sophomore",13:"College freshman",12:"High school senior",11:"High school junior",10:"High school sophomore",9:"High school freshman",8:"Eighth grade",7:"Seventh grade",6:"Sixth grade"};class w{static calculate(e){if(!e)return E;const t=v(e);let c=.4*(t/f(e)+function(e){const t=e.toLowerCase();let c=0;return g(t).forEach(e=>{p(e)>=3&&(c+=1)}),c}(e)/t*100);return c>$?c=$:c<E&&(c=E),c}static scoringLevel(e){const t=parseInt(e),c=Object.keys(k),l=c[0],a=c[c.length-1];return t<l?"":e>a?k[a]:e<l?k[l]:k[t]}}function S(e){var t,c,a,r,b,n,o,i,j,O,d,h,v,g,f,p,V,k,S,y,z,T,L,M,N,F,I,C,P,_,A,D,K,B,H=e.fleschKincaidScore.toFixed(2),G=e.gunningFlogScore.toFixed(2),W=w.scoringLevel(e.gunningFlogScore);function R(t){e.formgroup_value_binding.call(null,t),O=!0,Object(l.b)(()=>O=!1)}let J={id:"subjectText",placeholder:"Write your text here and see the score being calculated"};void 0!==e.subjectText&&(J.value=e.subjectText);var X=new s({props:J});l.g.push(()=>Object(l.f)(X,"value",R));var U=new u({props:{reverse:!0,rightValue:x,leftValue:m,value:e.fleschKincaidScore}}),Y=new u({props:{leftValue:E,rightValue:$,value:e.gunningFlogScore}});return{c(){t=Object(l.M)(),c=Object(l.p)("div"),a=Object(l.p)("h1"),r=Object(l.N)("How readable is your text?"),b=Object(l.M)(),n=Object(l.p)("small"),o=Object(l.M)(),i=Object(l.p)("hr"),j=Object(l.M)(),X.$$.fragment.c(),d=Object(l.M)(),h=Object(l.p)("div"),v=Object(l.p)("p"),g=Object(l.p)("small"),f=Object(l.N)("Flesch Kincaid Reading Ease:"),p=Object(l.M)(),V=Object(l.p)("span"),k=Object(l.N)(H),S=Object(l.M)(),U.$$.fragment.c(),y=Object(l.M)(),z=Object(l.p)("div"),T=Object(l.p)("p"),L=Object(l.p)("small"),M=Object(l.N)("Gunning fog index:"),N=Object(l.M)(),F=Object(l.p)("span"),I=Object(l.N)(G),C=Object(l.M)(),P=Object(l.p)("br"),_=Object(l.M)(),A=Object(l.p)("small"),D=Object(l.N)(W),K=Object(l.M)(),Y.$$.fragment.c(),this.h()},l(e){t=Object(l.k)(e,"\n\n"),c=Object(l.j)(e,"DIV",{class:!0},!1);var s=Object(l.i)(c);a=Object(l.j)(s,"H1",{class:!0},!1);var O=Object(l.i)(a);r=Object(l.k)(O,"How readable is your text?"),O.forEach(l.o),b=Object(l.k)(s,"\n  "),n=Object(l.j)(s,"SMALL",{class:!0},!1),Object(l.i)(n).forEach(l.o),o=Object(l.k)(s,"\n  "),i=Object(l.j)(s,"HR",{class:!0},!1),Object(l.i)(i).forEach(l.o),j=Object(l.k)(s,"\n  "),X.$$.fragment.l(s),d=Object(l.k)(s,"\n  "),h=Object(l.j)(s,"DIV",{class:!0},!1);var u=Object(l.i)(h);v=Object(l.j)(u,"P",{class:!0},!1);var m=Object(l.i)(v);g=Object(l.j)(m,"SMALL",{class:!0},!1);var x=Object(l.i)(g);f=Object(l.k)(x,"Flesch Kincaid Reading Ease:"),x.forEach(l.o),p=Object(l.k)(m,"\n      "),V=Object(l.j)(m,"SPAN",{class:!0},!1);var E=Object(l.i)(V);k=Object(l.k)(E,H),E.forEach(l.o),m.forEach(l.o),S=Object(l.k)(u,"\n    "),U.$$.fragment.l(u),u.forEach(l.o),y=Object(l.k)(s,"\n  "),z=Object(l.j)(s,"DIV",{class:!0},!1);var $=Object(l.i)(z);T=Object(l.j)($,"P",{class:!0},!1);var w=Object(l.i)(T);L=Object(l.j)(w,"SMALL",{class:!0},!1);var B=Object(l.i)(L);M=Object(l.k)(B,"Gunning fog index:"),B.forEach(l.o),N=Object(l.k)(w,"\n      "),F=Object(l.j)(w,"SPAN",{class:!0},!1);var R=Object(l.i)(F);I=Object(l.k)(R,G),R.forEach(l.o),C=Object(l.k)(w,"\n      "),P=Object(l.j)(w,"BR",{class:!0},!1),Object(l.i)(P).forEach(l.o),_=Object(l.k)(w,"\n      "),A=Object(l.j)(w,"SMALL",{class:!0},!1);var J=Object(l.i)(A);D=Object(l.k)(J,W),J.forEach(l.o),w.forEach(l.o),K=Object(l.k)($,"\n    "),Y.$$.fragment.l($),$.forEach(l.o),s.forEach(l.o),this.h()},h(){document.title="Text Score",Object(l.e)(a,"class","svelte-e4imdx"),Object(l.e)(n,"class","svelte-e4imdx"),Object(l.e)(i,"class","svelte-e4imdx"),Object(l.e)(g,"class","svelte-e4imdx"),Object(l.e)(V,"class","score-value svelte-e4imdx"),Object(l.e)(v,"class","score-label svelte-e4imdx"),Object(l.e)(h,"class","score-container svelte-e4imdx"),Object(l.e)(L,"class","svelte-e4imdx"),Object(l.e)(F,"class","score-value svelte-e4imdx"),Object(l.e)(P,"class","svelte-e4imdx"),Object(l.e)(A,"class","score-label svelte-e4imdx"),Object(l.e)(T,"class","score-label svelte-e4imdx"),Object(l.e)(z,"class","score-container svelte-e4imdx"),Object(l.e)(c,"class","container svelte-e4imdx")},m(e,s){Object(l.z)(e,t,s),Object(l.z)(e,c,s),Object(l.c)(c,a),Object(l.c)(a,r),Object(l.c)(c,b),Object(l.c)(c,n),Object(l.c)(c,o),Object(l.c)(c,i),Object(l.c)(c,j),Object(l.D)(X,c,null),Object(l.c)(c,d),Object(l.c)(c,h),Object(l.c)(h,v),Object(l.c)(v,g),Object(l.c)(g,f),Object(l.c)(v,p),Object(l.c)(v,V),Object(l.c)(V,k),Object(l.c)(h,S),Object(l.D)(U,h,null),Object(l.c)(c,y),Object(l.c)(c,z),Object(l.c)(z,T),Object(l.c)(T,L),Object(l.c)(L,M),Object(l.c)(T,N),Object(l.c)(T,F),Object(l.c)(F,I),Object(l.c)(T,C),Object(l.c)(T,P),Object(l.c)(T,_),Object(l.c)(T,A),Object(l.c)(A,D),Object(l.c)(z,K),Object(l.D)(Y,z,null),B=!0},p(e,t){var c={};!O&&e.subjectText&&(c.value=t.subjectText),X.$set(c),B&&!e.fleschKincaidScore||H===(H=t.fleschKincaidScore.toFixed(2))||Object(l.L)(k,H);var a={};e.MIN_FLESC_KINCAID&&(a.rightValue=x),e.MAX_FLESC_KINCAID&&(a.leftValue=m),e.fleschKincaidScore&&(a.value=t.fleschKincaidScore),U.$set(a),B&&!e.gunningFlogScore||G===(G=t.gunningFlogScore.toFixed(2))||Object(l.L)(I,G),B&&!e.gunningFlogScore||W===(W=w.scoringLevel(t.gunningFlogScore))||Object(l.L)(D,W);var r={};e.MIN_GUNNING_FLOG&&(r.leftValue=E),e.MAX_GUNNING_FLOG&&(r.rightValue=$),e.gunningFlogScore&&(r.value=t.gunningFlogScore),Y.$set(r)},i(e){B||(Object(l.O)(X.$$.fragment,e),Object(l.O)(U.$$.fragment,e),Object(l.O)(Y.$$.fragment,e),B=!0)},o(e){Object(l.P)(X.$$.fragment,e),Object(l.P)(U.$$.fragment,e),Object(l.P)(Y.$$.fragment,e),B=!1},d(e){e&&(Object(l.o)(t),Object(l.o)(c)),Object(l.n)(X),Object(l.n)(U),Object(l.n)(Y)}}}function y(e,t,c){let l,a,r="";return e.$$.update=(e={subjectText:1})=>{e.subjectText&&c("fleschKincaidScore",l=V.calculate(r)),e.subjectText&&c("gunningFlogScore",a=w.calculate(r))},{subjectText:r,fleschKincaidScore:l,gunningFlogScore:a,formgroup_value_binding:function(e){c("subjectText",r=e)}}}t.default=class extends l.a{constructor(e){var t;super(),document.getElementById("svelte-e4imdx-style")||((t=Object(l.p)("style")).id="svelte-e4imdx-style",t.textContent='.svelte-e4imdx{font-family:"Montserrat", sans-serif}input,textarea{box-shadow:0 0 0.5em rgba(0, 0, 0, 0.1);border:0;font-family:inherit;font-size:inherit}.container.svelte-e4imdx{display:flex;flex-direction:column;text-align:center}.score-container.svelte-e4imdx{margin:1em 0}.score-label.svelte-e4imdx{margin:0;color:#34495e}',Object(l.c)(document.head,t)),Object(l.y)(this,e,y,S,l.J,[])}}}}]);