(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76967deb"],{2949:function(t,s,i){"use strict";var a=i("5e7a"),e=i.n(a);e.a},"5e7a":function(t,s,i){},"6f73":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{attrs:{id:"content"}},[i("div",{staticClass:"route"},[i("div",{staticClass:"container"},[i("router-link",{attrs:{to:"/"}},[t._v("首頁")]),i("span",{staticClass:"routeDivider"},[t._v("/")]),i("span",{staticClass:"current"},[t._v("實體店面")])],1)]),t._m(0)])])},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"location"},[i("div",{staticClass:"container"},[i("div",{staticClass:"title"},[t._v("實體店面")]),i("span",{staticClass:"mb-5"},[t._v("110台北市信義區信義路五段7號")]),i("div",{staticClass:"row mt-4"},[i("iframe",{staticClass:"col-12",staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7642.329745513127!2d121.56404805448642!3d25.032643951214023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da9c9e1f%3A0x1206bcf082fd10a6!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5L-h576p6Lev5LqU5q61N-iZnw!5e0!3m2!1szh-TW!2stw!4v1582604750415!5m2!1szh-TW!2stw",frameborder:"0",allowfullscreen:""}}),i("div",{staticClass:"transport col-12 col-md-6 col-lg-4 position-relative mt-4"},[i("div",{staticClass:"icon d-flex justify-content-center align-items-center"},[i("i",{staticClass:"fas fa-subway"})]),i("div",{staticClass:"method"},[t._v("搭乘捷運")]),i("div",{staticClass:"subtitle"},[t._v("信義線")]),i("p",[t._v("台北101站，4 號出口")]),i("div",{staticClass:"subtitle"},[t._v("板南線")]),i("p",[t._v("政府站，2 號出口步行約 10 分鐘")])]),i("div",{staticClass:"transport col-12 col-md-6 col-lg-4 position-relative mt-4"},[i("div",{staticClass:"icon d-flex justify-content-center align-items-center"},[i("i",{staticClass:"fas fa-bus"})]),i("div",{staticClass:"method"},[t._v("搭乘公車")]),i("div",{staticClass:"subtitle"},[t._v("一般公車")]),i("p",[t._v("搭乘至市府站、世貿站、信義行政中心、君悅飯店路線之公車，均可到達貓咪星球停車站下車。")]),i("div",{staticClass:"subtitle"},[t._v("台北觀光雙層巴士")]),i("p",[t._v("搭乘至第 12 站 「101 貓咪星球」")])]),i("div",{staticClass:"transport col-12 col-md-6 col-lg-4 position-relative mt-4"},[i("div",{staticClass:"icon d-flex justify-content-center align-items-center"},[i("i",{staticClass:"fas fa-car"})]),i("div",{staticClass:"method"},[t._v("自行開車")]),i("div",{staticClass:"subtitle"},[t._v("中山高北上建國高架橋信義路出口下")]),i("p",[t._v("左轉信義路 → 左轉基隆路 → 右轉松壽路。")]),i("div",{staticClass:"subtitle"},[t._v("中山高南下成功路出口下")]),i("p",[t._v("右轉成功路二段 → 向陽路 → 右轉忠孝東路 → 左轉松仁路 → 右轉松壽路。")])]),i("div",{staticClass:"transport col-12 col-md-6 col-lg-4 position-relative mt-4"},[i("div",{staticClass:"icon d-flex justify-content-center align-items-center"},[i("i",{staticClass:"fas fa-train"})]),i("div",{staticClass:"method"},[t._v("如何前往台北火車站?")]),i("div",{staticClass:"subtitle"},[t._v("搭乘捷運")]),i("p",[t._v("「淡水信義線」至台北火車站下車。")]),i("div",{staticClass:"subtitle"},[t._v("搭乘公車")]),i("p",[t._v("信義路五段方向，搭乘「信義幹線」於台北火車站下車。")])]),i("div",{staticClass:"transport col-12 col-md-6 col-lg-4 position-relative mt-4"},[i("div",{staticClass:"icon d-flex justify-content-center align-items-center"},[i("i",{staticClass:"fas fa-plane-departure"})]),i("div",{staticClass:"method"},[t._v("如何自行前往桃園機場?")]),i("div",{staticClass:"subtitle"},[t._v("搭乘捷運")]),i("p",[t._v("「淡水信義線」轉「機場線」於第二航廈站下車。")]),i("div",{staticClass:"subtitle"},[t._v("自行開車")]),i("p",[t._v("往基隆路一段、堤頂大道一段，走國道一號至大園區機場端出口。")])])])])])}],c=(i("99af"),{components:{},data:function(){return{sideMenu:!1,cartLength:""}},methods:{getCartLength:function(){var t=this,s="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/vuewebsite/dist/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/vuewebsite/dist/"}).VUE_APP_CUSTOMPATH,"/cart");t.isLoading=!0,this.$http.get(s).then((function(s){t.cartLength=s.data.data.carts.length,t.isLoading=!1}))}},created:function(){this.getCartLength()},mounted:function(){window.scrollTo(0,0)}}),n=c,l=(i("2949"),i("2877")),o=Object(l["a"])(n,a,e,!1,null,"2c1583e2",null);s["default"]=o.exports},"99af":function(t,s,i){"use strict";var a=i("23e7"),e=i("d039"),c=i("e8b5"),n=i("861d"),l=i("7b0b"),o=i("50c4"),r=i("8418"),d=i("65f0"),v=i("1dde"),u=i("b622"),f=i("2d00"),_=u("isConcatSpreadable"),C=9007199254740991,p="Maximum allowed index exceeded",m=f>=51||!e((function(){var t=[];return t[_]=!1,t.concat()[0]!==t})),b=v("concat"),h=function(t){if(!n(t))return!1;var s=t[_];return void 0!==s?!!s:c(t)},g=!m||!b;a({target:"Array",proto:!0,forced:g},{concat:function(t){var s,i,a,e,c,n=l(this),v=d(n,0),u=0;for(s=-1,a=arguments.length;s<a;s++)if(c=-1===s?n:arguments[s],h(c)){if(e=o(c.length),u+e>C)throw TypeError(p);for(i=0;i<e;i++,u++)i in c&&r(v,u,c[i])}else{if(u>=C)throw TypeError(p);r(v,u++,c)}return v.length=u,v}})}}]);
//# sourceMappingURL=chunk-76967deb.ab6da55e.js.map