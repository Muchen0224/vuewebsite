(function(e){function n(n){for(var c,a,o=n[0],i=n[1],d=n[2],h=0,l=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(n);while(l.length)l.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,a=1;a<t.length;a++){var o=t[a];0!==r[o]&&(c=!1)}c&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},a={app:0},r={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0f01cbc7":"994b36fe","chunk-16f3be2e":"b64a64bb","chunk-195e75ca":"71b82dd8","chunk-199b977a":"b2749719","chunk-1c1614b6":"9f81212a","chunk-2b0b326f":"ae052c6b","chunk-431894f8":"0b158edd","chunk-46644eac":"751dfa85","chunk-58d888df":"29a8d6f5","chunk-62c06bda":"08b4bb4d","chunk-6376e52a":"62b0a4e8","chunk-6d72c096":"6dad8385","chunk-28561534":"7d8691c8","chunk-6550d9c3":"d1fdc69b","chunk-71b863da":"14d123e3","chunk-7f729895":"848a4a32"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0f01cbc7":1,"chunk-16f3be2e":1,"chunk-195e75ca":1,"chunk-199b977a":1,"chunk-2b0b326f":1,"chunk-431894f8":1,"chunk-46644eac":1,"chunk-58d888df":1,"chunk-6d72c096":1,"chunk-28561534":1,"chunk-6550d9c3":1,"chunk-71b863da":1,"chunk-7f729895":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-0f01cbc7":"263be4a7","chunk-16f3be2e":"2c9ec1c4","chunk-195e75ca":"9263b4b6","chunk-199b977a":"98b3a28d","chunk-1c1614b6":"31d6cfe0","chunk-2b0b326f":"bcf57b66","chunk-431894f8":"0434ecf3","chunk-46644eac":"378a4ddf","chunk-58d888df":"c1105529","chunk-62c06bda":"31d6cfe0","chunk-6376e52a":"31d6cfe0","chunk-6d72c096":"24fac0fc","chunk-28561534":"0e244627","chunk-6550d9c3":"fae8b1c6","chunk-71b863da":"d08ded10","chunk-7f729895":"a7ad054e"}[e]+".css",r=i.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var d=u[o],h=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(h===c||h===r))return n()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){d=l[o],h=d.getAttribute("data-href");if(h===c||h===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete a[e],f.parentNode.removeChild(f),t(u)},f.href=r;var s=document.getElementsByTagName("head")[0];s.appendChild(f)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=u);var d,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=o(e);var l=new Error;d=function(n){h.onerror=h.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",l.name="ChunkLoadError",l.type=c,l.request=a,t[1](l)}r[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:h})}),12e4);h.onerror=h.onload=d,document.head.appendChild(h)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],h=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var f=h;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4");var c=t("5530"),a=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("2b0e")),r=t("bc3a"),u=t.n(r),o=t("a7fe"),i=t.n(o),d=t("9062"),h=t.n(d),l=(t("e40d"),t("ecee")),f=t("c074"),s=t("ad3d"),p=(t("4989"),t("7bb1")),b=t("4c93"),m=t("60d4"),k=(t("d3b7"),t("8c4f"));a["default"].use(k["a"]);var v=[{path:"*",redirect:"/login"},{path:"/login",name:"Login",component:function(){return t.e("chunk-46644eac").then(t.bind(null,"294f"))}},{path:"/admin",name:"Dashboard",component:function(){return t.e("chunk-7f729895").then(t.bind(null,"e313"))},children:[{path:"products",name:"products",component:function(){return t.e("chunk-1c1614b6").then(t.bind(null,"61bc"))},meta:{requiresAuth:!0}},{path:"orders",name:"orders",component:function(){return t.e("chunk-6376e52a").then(t.bind(null,"efd9"))},meta:{requiresAuth:!0}},{path:"coupons",name:"coupons",component:function(){return t.e("chunk-62c06bda").then(t.bind(null,"8c58"))},meta:{requiresAuth:!0}}]},{path:"/catshop_home",alias:"/",name:"catShop",component:function(){return t.e("chunk-71b863da").then(t.bind(null,"3962"))},children:[{path:"/catshop_home",name:"shopHome",component:function(){return Promise.all([t.e("chunk-6d72c096"),t.e("chunk-28561534")]).then(t.bind(null,"0866"))}},{path:"/about",name:"About",component:function(){return t.e("chunk-195e75ca").then(t.bind(null,"7a85"))}},{path:"/shoppage",name:"ShopPage",component:function(){return t.e("chunk-199b977a").then(t.bind(null,"911c"))}},{path:"/shopItem/:id",name:"ShopItem",component:function(){return Promise.all([t.e("chunk-6d72c096"),t.e("chunk-6550d9c3")]).then(t.bind(null,"2df6"))}},{path:"/location",name:"Location",component:function(){return t.e("chunk-2b0b326f").then(t.bind(null,"2aa4"))}},{path:"/wishlist",name:"WishList",component:function(){return t.e("chunk-16f3be2e").then(t.bind(null,"8933"))}},{path:"/cart",name:"Cart",component:function(){return t.e("chunk-0f01cbc7").then(t.bind(null,"2355"))}},{path:"/checkout",name:"Check",component:function(){return t.e("chunk-58d888df").then(t.bind(null,"b7c8"))}},{path:"/payment/:orderId",name:"Payment",component:function(){return t.e("chunk-431894f8").then(t.bind(null,"b275"))}}]}],g=new k["a"]({routes:v}),y=g,O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view",{staticClass:"app-wrap"})],1)},w=[],j={},P=j,_=(t("5c0b"),t("2877")),S=Object(_["a"])(P,O,w,!1,null,null,null),x=S.exports;a["default"].prototype.$bus=new a["default"];t("a9e3"),t("b680"),t("ac1f"),t("5319");var A=function(e){var n=Number(e);return"$".concat(n.toFixed(0).replace(/./g,(function(e,n,t){var c=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return c})))},C=function(e){var n=new Date(1e3*e);return n.toLocaleDateString()},E=function(e){var n=Math.floor(e);return n};for(var L in b)Object(p["d"])(L,Object(c["a"])(Object(c["a"])({},b[L]),{},{message:m.messages[L]}));Object(p["c"])({classes:{valid:"valid",invalid:"invalid"}}),Object(p["e"])("zh_TW",m),Object(p["d"])("email",Object(c["a"])(Object(c["a"])({},b["email"]),{},{message:"郵件地址不正確"})),Object(p["d"])("required",Object(c["a"])(Object(c["a"])({},b["required"]),{},{message:"此欄位不可為空"})),l["c"].add(f["c"],f["b"],f["a"]),a["default"].component("Loading",h.a),a["default"].component("font-awesome-icon",s["a"]),a["default"].component("ValidationProvider",p["b"]),a["default"].component("ValidationObserver",p["a"]),a["default"].config.productionTip=!1,a["default"].use(i.a,u.a),a["default"].filter("currency",A),a["default"].filter("date",C),a["default"].filter("floor",E),u.a.defaults.withCredentials=!0,new a["default"]({router:y,render:function(e){return e(x)}}).$mount("#app"),y.beforeEach((function(e,n,t){if(console.log("to",e,"from",n,"next",t),e.meta.requiresAuth){var c="".concat("https://vue-course-api.hexschool.io","/api/user/check");u.a.post(c).then((function(e){console.log(e.data),e.data.success?t():t({path:"/login"})}))}else t()}))},"5c0b":function(e,n,t){"use strict";var c=t("9c0c"),a=t.n(c);a.a},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.1843f0e3.js.map