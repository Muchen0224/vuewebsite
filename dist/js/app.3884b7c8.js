(function(e){function n(n){for(var c,a,o=n[0],d=n[1],i=n[2],h=0,l=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(e[c]=d[c]);f&&f(n);while(l.length)l.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,a=1;a<t.length;a++){var o=t[a];0!==r[o]&&(c=!1)}c&&(u.splice(n--,1),e=d(d.s=t[0]))}return e}var c={},a={app:0},r={app:0},u=[];function o(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-0515b5c4":"45df95e7","chunk-24d47c36":"2d0cd4fd","chunk-2718e957":"3ccbfbba","chunk-285c78b2":"90594b25","chunk-3baabfb6":"ba0ebe8e","chunk-3dcbdc57":"a0289503","chunk-4232624c":"d222e1f5","chunk-4d17dc99":"0dfbbbb3","chunk-21c8a146":"b5de0995","chunk-329e982e":"6065cf1e","chunk-6366f624":"8f3a7598","chunk-741e40e5":"6ac22ac2","chunk-76967deb":"ab6da55e","chunk-99c3e398":"abad216a","chunk-cf9c7d8a":"b929901c","chunk-e1243600":"49bea5dc"}[e]+".js"}function d(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-0515b5c4":1,"chunk-24d47c36":1,"chunk-2718e957":1,"chunk-285c78b2":1,"chunk-3baabfb6":1,"chunk-3dcbdc57":1,"chunk-4d17dc99":1,"chunk-21c8a146":1,"chunk-329e982e":1,"chunk-6366f624":1,"chunk-741e40e5":1,"chunk-76967deb":1,"chunk-cf9c7d8a":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-0515b5c4":"9fbee2a7","chunk-24d47c36":"6522498e","chunk-2718e957":"abfe6228","chunk-285c78b2":"efb5a45f","chunk-3baabfb6":"6d3100d8","chunk-3dcbdc57":"a7ad054e","chunk-4232624c":"31d6cfe0","chunk-4d17dc99":"caad6548","chunk-21c8a146":"a59e1d90","chunk-329e982e":"e2152e2d","chunk-6366f624":"344e97f1","chunk-741e40e5":"48739fde","chunk-76967deb":"bf3a2783","chunk-99c3e398":"31d6cfe0","chunk-cf9c7d8a":"6ed2b846","chunk-e1243600":"31d6cfe0"}[e]+".css",r=d.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var i=u[o],h=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(h===c||h===r))return n()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){i=l[o],h=i.getAttribute("data-href");if(h===c||h===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete a[e],f.parentNode.removeChild(f),t(u)},f.href=r;var s=document.getElementsByTagName("head")[0];s.appendChild(f)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=u);var i,h=document.createElement("script");h.charset="utf-8",h.timeout=120,d.nc&&h.setAttribute("nonce",d.nc),h.src=o(e);var l=new Error;i=function(n){h.onerror=h.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",l.name="ChunkLoadError",l.type=c,l.request=a,t[1](l)}r[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:h})}),12e4);h.onerror=h.onload=i,document.head.appendChild(h)}return Promise.all(n)},d.m=e,d.c=c,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)d.d(t,c,function(n){return e[n]}.bind(null,c));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/vuewebsite/dist/",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],h=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var f=h;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4");var c=t("5530"),a=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("2b0e")),r=t("bc3a"),u=t.n(r),o=t("a7fe"),d=t.n(o),i=t("9062"),h=t.n(i),l=(t("e40d"),t("ecee")),f=t("c074"),s=t("ad3d"),p=(t("4989"),t("7bb1")),b=t("4c93"),m=t("60d4"),k=(t("d3b7"),t("8c4f"));a["default"].use(k["a"]);var v=[{path:"*",redirect:"/login"},{path:"/login",name:"Login",component:function(){return t.e("chunk-3baabfb6").then(t.bind(null,"2ab8"))}},{path:"/admin",name:"Dashboard",component:function(){return t.e("chunk-3dcbdc57").then(t.bind(null,"0c7c"))},children:[{path:"products",name:"products",component:function(){return t.e("chunk-4232624c").then(t.bind(null,"1dd8"))},meta:{requiresAuth:!0}},{path:"orders",name:"orders",component:function(){return t.e("chunk-99c3e398").then(t.bind(null,"526f"))},meta:{requiresAuth:!0}},{path:"coupons",name:"coupons",component:function(){return t.e("chunk-e1243600").then(t.bind(null,"5930"))},meta:{requiresAuth:!0}}]},{path:"/catshop_home",alias:"/",name:"catShop",component:function(){return t.e("chunk-0515b5c4").then(t.bind(null,"78ae"))},children:[{path:"/catshop_home",name:"shopHome",component:function(){return Promise.all([t.e("chunk-4d17dc99"),t.e("chunk-21c8a146")]).then(t.bind(null,"de82"))}},{path:"/about",name:"About",component:function(){return t.e("chunk-741e40e5").then(t.bind(null,"6322"))}},{path:"/shoppage",name:"ShopPage",component:function(){return t.e("chunk-cf9c7d8a").then(t.bind(null,"8f16"))}},{path:"/shopItem/:id",name:"ShopItem",component:function(){return Promise.all([t.e("chunk-4d17dc99"),t.e("chunk-329e982e")]).then(t.bind(null,"5b21"))}},{path:"/location",name:"Location",component:function(){return t.e("chunk-76967deb").then(t.bind(null,"6f73"))}},{path:"/wishlist",name:"WishList",component:function(){return t.e("chunk-6366f624").then(t.bind(null,"8589"))}},{path:"/cart",name:"Cart",component:function(){return t.e("chunk-285c78b2").then(t.bind(null,"9dc5"))}},{path:"/checkout",name:"Check",component:function(){return t.e("chunk-24d47c36").then(t.bind(null,"1462"))}},{path:"/payment/:orderId",name:"Payment",component:function(){return t.e("chunk-2718e957").then(t.bind(null,"00ad"))}}]}],g=new k["a"]({routes:v}),y=g,O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},w=[],j={},_=j,P=(t("5c0b"),t("2877")),A=Object(P["a"])(_,O,w,!1,null,null,null),E=A.exports;a["default"].prototype.$bus=new a["default"];t("a9e3"),t("b680"),t("ac1f"),t("5319");var S=function(e){var n=Number(e);return"$".concat(n.toFixed(0).replace(/./g,(function(e,n,t){var c=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return c})))},L=function(e){var n=new Date(1e3*e);return n.toLocaleDateString()},C=function(e){var n=Math.floor(e);return n};for(var x in b)Object(p["d"])(x,Object(c["a"])(Object(c["a"])({},b[x]),{},{message:m.messages[x]}));Object(p["c"])({classes:{valid:"valid",invalid:"invalid"}}),Object(p["e"])("zh_TW",m),Object(p["d"])("email",Object(c["a"])(Object(c["a"])({},b["email"]),{},{message:"郵件地址不正確"})),Object(p["d"])("required",Object(c["a"])(Object(c["a"])({},b["required"]),{},{message:"此欄位不可為空"})),l["c"].add(f["c"],f["b"],f["a"]),a["default"].component("Loading",h.a),a["default"].component("font-awesome-icon",s["a"]),a["default"].component("ValidationProvider",p["b"]),a["default"].component("ValidationObserver",p["a"]),a["default"].config.productionTip=!1,a["default"].use(d.a,u.a),a["default"].filter("currency",S),a["default"].filter("date",L),a["default"].filter("floor",C),u.a.defaults.withCredentials=!0,new a["default"]({router:y,render:function(e){return e(E)}}).$mount("#app"),y.beforeEach((function(e,n,t){if(console.log("to",e,"from",n,"next",t),e.meta.requiresAuth){var c="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/vuewebsite/dist/"}).VUE_APP_APIPATH,"/api/user/check");u.a.post(c).then((function(e){console.log(e.data),e.data.success?t():t({path:"/login"})}))}else t()}))},"5c0b":function(e,n,t){"use strict";var c=t("9c0c"),a=t.n(c);a.a},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.3884b7c8.js.map