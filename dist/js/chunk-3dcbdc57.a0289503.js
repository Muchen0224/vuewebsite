(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3dcbdc57"],{"0c7c":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Navbar"),e("Alert"),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("Sidebar"),e("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-md-4",attrs:{role:"main"}},[e("router-view")],1)],1)])],1)},n=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"},[e("a",{staticClass:"navbar-brand col-md-3 col-lg-2 mr-0 px-3",attrs:{href:"#"}},[t._v("Company name")]),t._m(0),e("input",{staticClass:"form-control form-control-dark w-100",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),e("ul",{staticClass:"navbar-nav px-3"},[e("li",{staticClass:"nav-item text-nowrap"},[e("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.signout(a)}}},[t._v("Sign out")])])])])])},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler position-absolute d-md-none collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],r={name:"Navbar",methods:{signout:function(){var t=this,a="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/vuewebsite/dist/"}).VUE_APP_APIPATH,"/logout");this.$http.post(a).then((function(a){console.log(a.data),a.data.success&&t.$router.push("/signin")}))}}},c=r,o=e("2877"),u=Object(o["a"])(c,i,l,!1,null,null,null),d=u.exports,m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse",attrs:{id:"sidebarMenu"}},[e("div",{staticClass:"sidebar-sticky pt-3"},[t._m(0),e("ul",{staticClass:"nav flex-column mb-2"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/admin/products"}},[e("i",{staticClass:"fas fa-box-open"}),t._v(" 產品列表 ")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/admin/orders"}},[e("i",{staticClass:"far fa-list-alt"}),t._v(" 訂單列表 ")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/admin/coupons"}},[e("i",{staticClass:"fas fa-ticket-alt"}),t._v(" 優惠券 ")])],1)]),t._m(1),e("ul",{staticClass:"nav flex-column mb-2"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/customer_orders"}},[e("i",{staticClass:"fas fa-shopping-cart"}),t._v(" 模擬訂單 ")])],1)])])])])},f=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[e("span",[t._v("管理員")]),e("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#","aria-label":"Add a new report"}},[e("span",{attrs:{"data-feather":"plus-circle"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[e("span",[t._v("模擬功能")]),e("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#","aria-label":"Add a new report"}},[e("span",{attrs:{"data-feather":"plus-circle"}})])])}],v={},p=Object(o["a"])(v,m,f,!1,null,null,null),b=p.exports,g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message-alert"},t._l(t.messages,(function(a,s){return e("div",{key:s,staticClass:"alert alert-dismissible",class:"alert-"+a.status},[t._v(" "+t._s(a.message)+" "),e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.removeMessage(s)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},h=[],C=(e("4160"),e("a434"),e("159b"),{name:"Navbar",data:function(){return{messages:[]}},methods:{updateMessage:function(t,a){var e=Math.floor(new Date/1e3);this.messages.push({message:t,status:a,timestamp:e}),this.removeMessageWithTiming(e)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var a=this;setTimeout((function(){a.messages.forEach((function(e,s){e.timestamp===t&&a.messages.splice(s,1)}))}),5e3)}},created:function(){var t=this;t.$bus.$on("message:push",(function(a,e){t.updateMessage(a,e)}))}}),_=C,x=(e("7d6d"),Object(o["a"])(_,g,h,!1,null,null,null)),k=x.exports,w={components:{Navbar:d,Sidebar:b,Alert:k}},E=w,M=Object(o["a"])(E,s,n,!1,null,null,null);a["default"]=M.exports},"2d32":function(t,a,e){},"7d6d":function(t,a,e){"use strict";var s=e("2d32"),n=e.n(s);n.a},a434:function(t,a,e){"use strict";var s=e("23e7"),n=e("23cb"),i=e("a691"),l=e("50c4"),r=e("7b0b"),c=e("65f0"),o=e("8418"),u=e("1dde"),d=e("ae40"),m=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,p=Math.min,b=9007199254740991,g="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!m||!f},{splice:function(t,a){var e,s,u,d,m,f,h=r(this),C=l(h.length),_=n(t,C),x=arguments.length;if(0===x?e=s=0:1===x?(e=0,s=C-_):(e=x-2,s=p(v(i(a),0),C-_)),C+e-s>b)throw TypeError(g);for(u=c(h,s),d=0;d<s;d++)m=_+d,m in h&&o(u,d,h[m]);if(u.length=s,e<s){for(d=_;d<C-s;d++)m=d+s,f=d+e,m in h?h[f]=h[m]:delete h[f];for(d=C;d>C-s+e;d--)delete h[d-1]}else if(e>s)for(d=C-s;d>_;d--)m=d+s-1,f=d+e-1,m in h?h[f]=h[m]:delete h[f];for(d=0;d<e;d++)h[d+_]=arguments[d+2];return h.length=C-s+e,u}})}}]);
//# sourceMappingURL=chunk-3dcbdc57.a0289503.js.map