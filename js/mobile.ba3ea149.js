(function(e){function t(t){for(var a,o,c=t[0],u=t[1],l=t[2],s=0,f=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},o={mobile:0},r={mobile:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0e54f217":"5bf63911","chunk-64b6f458":"fa7f4ee6"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0e54f217":1,"chunk-64b6f458":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0e54f217":"ef5c4148","chunk-64b6f458":"7337fa94"}[e]+".css",r=u.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===r))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===a||s===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,n[1](f)}r[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;i.push([1,"chunk-vendors"]),n()})({1:function(e,t,n){e.exports=n("77d5")},"3a0d":function(e,t,n){"use strict";var a="0.1.12",o=[],r=function e(t){e.installed||o.forEach((function(e){t.use(e)}))};"undefined"!==typeof window&&window.Vue&&r(window.Vue),t["a"]={install:r,version:a}},"77d5":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"mobile"}},[n("router-view",{staticClass:"demo-view",class:{"is-inner":e.showNav}})],1)},r=[],i=(n("7f7f"),n("897e"),n("ea0c"),{name:"mobile-app",data:function(){return{showNav:!1}},watch:{$route:function(e,t){this.showNav="index"!==e.name,"index"!==e.name&&(window.parent.location.hash=e.name)}}}),c=i,u=(n("99ee"),n("2877")),l=Object(u["a"])(c,o,r,!1,null,null,null),s=l.exports,f=(n("456d"),n("ac6a"),n("8c4f")),d=n("ee95");a["a"].use(f["a"]);var p=[];Object.keys(d).forEach((function(e){p=p.concat(d[e])}));var m=function e(t){t.forEach((function(t){if(t.items)e(t.items),p=p.concat(t.items);else if("1"===t.isMobile){if("pages"===t.type)return void(t.component=function(e){return n.e("chunk-0e54f217").then(function(){return e(n("7678")("./".concat(t.name,".vue")))}.bind(null,n)).catch(n.oe)});t.component=function(e){return n.e("chunk-64b6f458").then(function(){return e(n("f26a")("./".concat(t.name,".vue")))}.bind(null,n)).catch(n.oe)}}}))};m(p);var h=p.filter((function(e){return e.path})),b=new f["a"]({routes:h}),g=n("3a0d"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"45px"}},[n("div",{staticClass:"cu-bar fixed",class:[""!=e.bgImage?"none-bg text-white bg-img":"",e.bgColor],style:e.style},[e.isBack?n("div",{staticClass:"action",on:{click:e.BackPage}},[n("span",{staticClass:"cuIcon-back"}),e._t("backText")],2):e._e(),n("div",{staticClass:"content text-bold"},[e._t("content")],2),e._t("right")],2)])},y=[],w={data:function(){return{}},name:"cu-custom",computed:{style:function(){var e="";return this.bgImage&&(e="background-image:url(".concat(this.bgImage,");")),e}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){this.$router.push("index")}}},k=w,x=Object(u["a"])(k,v,y,!1,null,null,null),M=x.exports;a["a"].use(g["a"]),a["a"].component("cu-custom",M),a["a"].prototype.ColorList=[{title:"嫣红",name:"red",color:"#e54d42"},{title:"桔橙",name:"orange",color:"#f37b1d"},{title:"明黄",name:"yellow",color:"#fbbd08"},{title:"橄榄",name:"olive",color:"#8dc63f"},{title:"森绿",name:"green",color:"#39b54a"},{title:"天青",name:"cyan",color:"#1cbbb4"},{title:"海蓝",name:"blue",color:"#0081ff"},{title:"姹紫",name:"purple",color:"#6739b6"},{title:"木槿",name:"mauve",color:"#9c26b0"},{title:"桃粉",name:"pink",color:"#e03997"},{title:"棕褐",name:"brown",color:"#a5673f"},{title:"玄灰",name:"grey",color:"#8799a3"},{title:"草灰",name:"gray",color:"#aaaaaa"},{title:"墨黑",name:"black",color:"#333333"},{title:"雅白",name:"white",color:"#ffffff"}],a["a"].config.productionTip=!1,new a["a"]({el:"#mobile",router:b,render:function(e){return e(s)}})},"897e":function(e,t,n){},"99ee":function(e,t,n){"use strict";var a=n("cab9"),o=n.n(a);o.a},cab9:function(e,t,n){},ea0c:function(e,t,n){},ee95:function(e){e.exports=JSON.parse('{"开发指南":[{"name":"site-index","path":"/"},{"name":"introduce","path":"/introduce","desc":"介绍"},{"name":"start","path":"/start","desc":"快速上手"},{"name":"contribute","path":"/contribute","desc":"开发指南"},{"name":"plan","path":"/plan","desc":"开发计划"},{"name":"index","isMobile":"1","path":"/index","type":"pages"}],"组件":[{"desc":"基础组件","items":[{"desc":"布局","isMobile":"1","name":"layout","path":"/layout"},{"desc":"背景","isMobile":"1","name":"background","path":"/background"},{"desc":"文本","isMobile":"1","name":"text","path":"/text"},{"desc":"图标","isMobile":"1","name":"icon","path":"/icon"},{"desc":"按钮","isMobile":"1","name":"button","path":"/button"},{"desc":"标签","name":"tag","isMobile":"1","path":"/tag"},{"desc":"头像","name":"avatar","isMobile":"1","path":"/avatar"},{"desc":"进度条","isMobile":"1","name":"progress","path":"/progress"},{"desc":"阴影","name":"shadow","isMobile":"1","path":"/shadow"},{"desc":"加载","isMobile":"1","name":"loading","path":"/loading"}]},{"desc":"拓展组件","items":[{"desc":"操纵条","isMobile":"1","name":"bar","path":"/bar"}]}]}')}});
//# sourceMappingURL=mobile.ba3ea149.js.map