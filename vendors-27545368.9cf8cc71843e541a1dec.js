"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[489],{588:(e,t,n)=>{
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}var r;n.d(t,{AO:()=>h,B6:()=>W,Gh:()=>R,HS:()=>j,Oi:()=>o,RO:()=>$,Rr:()=>f,TM:()=>l,pX:()=>U,pb:()=>I,rc:()=>r,tH:()=>N,ue:()=>m,yD:()=>C}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(r||(r={}));const i="popstate";function l(e){return void 0===e&&(e={}),p((function(e,t){let{pathname:n="/",search:a="",hash:r=""}=f(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),c("",{pathname:n,search:a,hash:r},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),a="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");a=-1===n?t:t.slice(0,n)}return a+"#"+("string"==typeof t?t:h(t))}),(function(e,t){s("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),e)}function o(e,t){if(!1===e||null==e)throw new Error(t)}function s(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function u(e,t){return{usr:e.state,key:e.key,idx:t}}function c(e,t,n,r){return void 0===n&&(n=null),a({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?f(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),a&&"#"!==a&&(t+="#"===a.charAt(0)?a:"#"+a),t}function f(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function p(e,t,n,l){void 0===l&&(l={});let{window:s=document.defaultView,v5Compat:f=!1}=l,p=s.history,d=r.Pop,m=null,v=g();function g(){return(p.state||{idx:null}).idx}function y(){d=r.Pop;let e=g(),t=null==e?null:e-v;v=e,m&&m({action:d,location:w.location,delta:t})}function b(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,n="string"==typeof e?e:h(e);return n=n.replace(/ $/,"%20"),o(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==v&&(v=0,p.replaceState(a({},p.state,{idx:v}),""));let w={get action(){return d},get location(){return e(s,p)},listen(e){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(i,y),m=e,()=>{s.removeEventListener(i,y),m=null}},createHref:e=>t(s,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){d=r.Push;let a=c(w.location,e,t);n&&n(a,e),v=g()+1;let i=u(a,v),l=w.createHref(a);try{p.pushState(i,"",l)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;s.location.assign(l)}f&&m&&m({action:d,location:w.location,delta:1})},replace:function(e,t){d=r.Replace;let a=c(w.location,e,t);n&&n(a,e),v=g();let i=u(a,v),l=w.createHref(a);p.replaceState(i,"",l),f&&m&&m({action:d,location:w.location,delta:0})},go:e=>p.go(e)};return w}var d;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(d||(d={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function m(e,t,n){return void 0===n&&(n="/"),v(e,t,n,!1)}function v(e,t,n,a){let r=I(("string"==typeof t?f(t):t).pathname||"/",n);if(null==r)return null;let i=g(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let l=null;for(let e=0;null==l&&e<i.length;++e){let t=$(r);l=O(i[e],t,a)}return l}function g(e,t,n,a){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===a&&(a="");let r=(e,r,i)=>{let l={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:r,route:e};l.relativePath.startsWith("/")&&(o(l.relativePath.startsWith(a),'Absolute route path "'+l.relativePath+'" nested under path "'+a+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),l.relativePath=l.relativePath.slice(a.length));let s=j([a,l.relativePath]),u=n.concat(l);e.children&&e.children.length>0&&(o(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),g(e.children,t,u,s)),(null!=e.path||e.index)&&t.push({path:s,score:E(s,e.index),routesMeta:u})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of y(e.path))r(e,t,n);else r(e,t)})),t}function y(e){let t=e.split("/");if(0===t.length)return[];let[n,...a]=t,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===a.length)return r?[i,""]:[i];let l=y(a.join("/")),o=[];return o.push(...l.map((e=>""===e?i:[i,e].join("/")))),r&&o.push(...l),o.map((t=>e.startsWith("/")&&""===t?"/":t))}const b=/^:[\w-]+$/,w=3,x=2,S=1,P=10,k=-2,_=e=>"*"===e;function E(e,t){let n=e.split("/"),a=n.length;return n.some(_)&&(a+=k),t&&(a+=x),n.filter((e=>!_(e))).reduce(((e,t)=>e+(b.test(t)?w:""===t?S:P)),a)}function O(e,t,n){void 0===n&&(n=!1);let{routesMeta:a}=e,r={},i="/",l=[];for(let e=0;e<a.length;++e){let o=a[e],s=e===a.length-1,u="/"===i?t:t.slice(i.length)||"/",c=W({path:o.relativePath,caseSensitive:o.caseSensitive,end:s},u),h=o.route;if(!c&&s&&n&&!a[a.length-1].route.index&&(c=W({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},u)),!c)return null;Object.assign(r,c.params),l.push({params:r,pathname:j([i,c.pathname]),pathnameBase:A(j([i,c.pathnameBase])),route:h}),"/"!==c.pathnameBase&&(i=j([i,c.pathnameBase]))}return l}function W(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(a.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(a.push({paramName:"*"}),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":""!==e&&"/"!==e&&(r+="(?:(?=\\/|$))");let i=new RegExp(r,t?void 0:"i");return[i,a]}(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],l=i.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:a.reduce(((e,t,n)=>{let{paramName:a,isOptional:r}=t;if("*"===a){let e=o[n]||"";l=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=o[n];return e[a]=r&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:i,pathnameBase:l,pattern:e}}function $(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function I(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&"/"!==a?null:e.slice(n)||"/"}function L(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function T(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function C(e,t){let n=T(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function R(e,t,n,r){let i;void 0===r&&(r=!1),"string"==typeof e?i=f(e):(i=a({},e),o(!i.pathname||!i.pathname.includes("?"),L("?","pathname","search",i)),o(!i.pathname||!i.pathname.includes("#"),L("#","pathname","hash",i)),o(!i.search||!i.search.includes("#"),L("#","search","hash",i)));let l,s=""===e||""===i.pathname,u=s?"/":i.pathname;if(null==u)l=n;else{let e=t.length-1;if(!r&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}l=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:a="",hash:r=""}="string"==typeof e?f(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:M(a),hash:B(r)}}(i,l),h=u&&"/"!==u&&u.endsWith("/"),p=(s||"."===u)&&n.endsWith("/");return c.pathname.endsWith("/")||!h&&!p||(c.pathname+="/"),c}const j=e=>e.join("/").replace(/\/\/+/g,"/"),A=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",B=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class N extends Error{}function U(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const H=["post","put","patch","delete"],D=(new Set(H),["get",...H]);new Set(D),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred")},463:(e,t)=>{
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var a=n-1>>>1,r=e[a];if(!(0<i(r,t)))break e;e[a]=t,e[n]=r,n=a}}function a(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var a=0,r=e.length,l=r>>>1;a<l;){var o=2*(a+1)-1,s=e[o],u=o+1,c=e[u];if(0>i(s,n))u<r&&0>i(c,s)?(e[a]=c,e[u]=n,a=u):(e[a]=s,e[o]=n,a=o);else{if(!(u<r&&0>i(c,n)))break e;e[a]=c,e[u]=n,a=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var l=performance;t.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();t.unstable_now=function(){return o.now()-s}}var u=[],c=[],h=1,f=null,p=3,d=!1,m=!1,v=!1,g="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,b="undefined"!=typeof setImmediate?setImmediate:null;function w(e){for(var t=a(c);null!==t;){if(null===t.callback)r(c);else{if(!(t.startTime<=e))break;r(c),t.sortIndex=t.expirationTime,n(u,t)}t=a(c)}}function x(e){if(v=!1,w(e),!m)if(null!==a(u))m=!0,C(S);else{var t=a(c);null!==t&&R(x,t.startTime-e)}}function S(e,n){m=!1,v&&(v=!1,y(E),E=-1),d=!0;var i=p;try{for(w(n),f=a(u);null!==f&&(!(f.expirationTime>n)||e&&!$());){var l=f.callback;if("function"==typeof l){f.callback=null,p=f.priorityLevel;var o=l(f.expirationTime<=n);n=t.unstable_now(),"function"==typeof o?f.callback=o:f===a(u)&&r(u),w(n)}else r(u);f=a(u)}if(null!==f)var s=!0;else{var h=a(c);null!==h&&R(x,h.startTime-n),s=!1}return s}finally{f=null,p=i,d=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var P,k=!1,_=null,E=-1,O=5,W=-1;function $(){return!(t.unstable_now()-W<O)}function I(){if(null!==_){var e=t.unstable_now();W=e;var n=!0;try{n=_(!0,e)}finally{n?P():(k=!1,_=null)}}else k=!1}if("function"==typeof b)P=function(){b(I)};else if("undefined"!=typeof MessageChannel){var L=new MessageChannel,T=L.port2;L.port1.onmessage=I,P=function(){T.postMessage(null)}}else P=function(){g(I,0)};function C(e){_=e,k||(k=!0,P())}function R(e,n){E=g((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||d||(m=!0,C(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return a(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,r,i){var l=t.unstable_now();switch("object"==typeof i&&null!==i?i="number"==typeof(i=i.delay)&&0<i?l+i:l:i=l,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return e={id:h++,callback:r,priorityLevel:e,startTime:i,expirationTime:o=i+o,sortIndex:-1},i>l?(e.sortIndex=i,n(c,e),null===a(u)&&e===a(c)&&(v?(y(E),E=-1):v=!0,R(x,i-l))):(e.sortIndex=o,n(u,e),m||d||(m=!0,C(S))),e},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},982:(e,t,n)=>{e.exports=n(463)},63:(e,t,n)=>{
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var a=n(540);var r="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=a.useState,l=a.useEffect,o=a.useLayoutEffect,s=a.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!r(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),a=i({inst:{value:n,getSnapshot:t}}),r=a[0].inst,c=a[1];return o((function(){r.value=n,r.getSnapshot=t,u(r)&&c({inst:r})}),[e,n,t]),l((function(){return u(r)&&c({inst:r}),e((function(){u(r)&&c({inst:r})}))}),[e]),s(n),n};t.useSyncExternalStore=void 0!==a.useSyncExternalStore?a.useSyncExternalStore:c},888:(e,t,n)=>{e.exports=n(63)}}]);