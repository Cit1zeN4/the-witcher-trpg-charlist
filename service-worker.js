if(!self.define){let e,r={};const t=(t,s)=>(t=new URL(t+".js",s).href,r[t]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=r,document.head.appendChild(e)}else e=t,importScripts(t),r()})).then((()=>{let e=r[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(s,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(r[c])return;let n={};const l=e=>t(e,c),o={module:{uri:c},exports:n,require:l};r[c]=Promise.all(s.map((e=>o[e]||l(e)))).then((e=>(i(...e),n)))}}define(["./workbox-d6430d1c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"the-witcher-trpg-charlist"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/the-witcher-trpg-charlist/css/app.8591977e.css",revision:null},{url:"/the-witcher-trpg-charlist/css/chunk-vendors.7e3ff90d.css",revision:null},{url:"/the-witcher-trpg-charlist/index.html",revision:"2a90baf71ae74358819a79e03248bc97"},{url:"/the-witcher-trpg-charlist/js/app.69a2ee8e.js",revision:null},{url:"/the-witcher-trpg-charlist/js/chunk-vendors.b6e597f5.js",revision:null},{url:"/the-witcher-trpg-charlist/manifest.json",revision:"fc4900f48fbeb3327c646fb124c08309"},{url:"/the-witcher-trpg-charlist/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
