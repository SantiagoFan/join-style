(function(e){function t(t){for(var a,r,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={mobile:0},o={mobile:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-1cb69006":"8753dee3","chunk-6374f1f4":"3e8d07a7"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-6374f1f4":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-1cb69006":"31d6cfe0","chunk-6374f1f4":"9a6e4119"}[e]+".css",o=u.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([1,"chunk-vendors"]),n()})({1:function(e,t,n){e.exports=n("77d5")},"3a0d":function(e,t,n){"use strict";var a="0.1.12",r=[],o=function e(t){e.installed||r.forEach((function(e){t.use(e)}))};"undefined"!==typeof window&&window.Vue&&o(window.Vue),t["a"]={install:o,version:a}},"77d5":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"mobile"}},[n("router-view",{staticClass:"demo-view",class:{"is-inner":e.showNav}})],1)},o=[],i=(n("7f7f"),n("897e"),n("ea0c"),{name:"mobile-app",data:function(){return{showNav:!1}},watch:{$route:function(e,t){this.showNav="index"!==e.name,"index"!==e.name&&(window.parent.location.hash=e.name)}}}),c=i,u=(n("99ee"),n("2877")),s=Object(u["a"])(c,r,o,!1,null,null,null),l=s.exports,d=(n("456d"),n("ac6a"),n("8c4f")),f=n("ee95");a["a"].use(d["a"]);var p=[];Object.keys(f).forEach((function(e){p=p.concat(f[e])}));var h=function e(t){t.forEach((function(t){if(t.items)e(t.items),p=p.concat(t.items);else if("1"===t.isMobile){if("pages"===t.type)return void(t.component=function(e){return n.e("chunk-6374f1f4").then(function(){return e(n("7678")("./".concat(t.name,".vue")))}.bind(null,n)).catch(n.oe)});t.component=function(e){return n.e("chunk-1cb69006").then(function(){return e(n("f26a")("./".concat(t.name,".vue")))}.bind(null,n)).catch(n.oe)}}}))};h(p);var m=p.filter((function(e){return e.path})),b=new d["a"]({routes:m}),g=n("3a0d"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"cu-bar fixed",class:[""!=e.bgImage?"none-bg text-white bg-img":"",e.bgColor],style:e.style},[e.isBack?n("div",{staticClass:"action",on:{click:e.BackPage}},[n("span",{staticClass:"cuIcon-back"}),e._t("backText")],2):e._e(),n("div",{staticClass:"content text-bold"},[e._t("content")],2),e._t("right")],2)])},y=[],w={data:function(){return{}},name:"cu-custom",computed:{style:function(){var e="";return this.bgImage&&(e="background-image:url(".concat(this.bgImage,");")),e}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){this.$router.push("index")}}},k=w,x=Object(u["a"])(k,v,y,!1,null,null,null),M=x.exports;a["a"].use(g["a"]),a["a"].component("cu-custom",M),a["a"].config.productionTip=!1,new a["a"]({el:"#mobile",router:b,render:function(e){return e(l)}})},"897e":function(e,t,n){},"99ee":function(e,t,n){"use strict";var a=n("cab9"),r=n.n(a);r.a},cab9:function(e,t,n){},ea0c:function(e,t,n){},ee95:function(e){e.exports=JSON.parse('{"开发指南":[{"name":"site-index","path":"/"},{"name":"introduce","path":"/introduce","desc":"介绍"},{"name":"start","path":"/start","desc":"快速上手"},{"name":"contribute","path":"/contribute","desc":"开发指南"},{"name":"plan","path":"/plan","desc":"开发计划"},{"name":"index","isMobile":"1","path":"/index","type":"pages"}],"组件":[{"desc":"基础组件","items":[{"desc":"颜色","isMobile":"1","name":"color","path":"/color"},{"desc":"文本","isMobile":"1","name":"text","path":"/text"},{"desc":"布局","isMobile":"1","name":"layout","path":"/layout"},{"desc":"图标","isMobile":"1","name":"icon","path":"/icon"},{"desc":"按钮","isMobile":"1","name":"button","path":"/button"},{"desc":"标签","name":"tag","isMobile":"1","path":"/tag"},{"desc":"头像","name":"avatar","isMobile":"1","path":"/avatar"},{"desc":"进度条","isMobile":"1","name":"progress","path":"/progress"},{"desc":"阴影","name":"shadow","isMobile":"1","path":"/shadow"},{"desc":"加载","isMobile":"1","name":"loading","path":"/loading"}]},{"desc":"拓展组件","items":[{"desc":"操纵条","isMobile":"1","name":"bar","path":"/bar"}]}]}')}});
//# sourceMappingURL=mobile.57a22b8e.js.map