(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24d47c36"],{"0f9e":function(t,e,s){},1462:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{attrs:{id:"content"}},[s("div",{staticClass:"route"},[s("div",{staticClass:"container"},[s("router-link",{attrs:{to:"/"}},[t._v("首頁")]),s("span",{staticClass:"routeDivider"},[t._v("/")]),s("span",{staticClass:"current"},[t._v("確認訂單")])],1)]),s("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.handleSubmit;return[s("div",{staticClass:"purchase-info py-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-lg-6 buyer-info"},[s("div",{staticClass:"title my-3"},[t._v("購買人資訊")]),s("div",{staticClass:"border p-5"},[s("div",{staticClass:"row justify-content-center"},[s("form",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"useremail"}},[t._v("信箱*")]),s("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("div",{class:r},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",attrs:{type:"email",id:"useremail",placeholder:"example@gamil.com"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"username"}},[t._v("收件人姓名*")]),s("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("div",{class:r},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"usertel"}},[t._v("收件人電話*")]),s("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("div",{class:r},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",attrs:{type:"tel",id:"usertel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"useraddress"}},[t._v("收件人地址*")]),s("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,r=e.classes;return[s("div",{class:r},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),s("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))])])]}}],null,!0)})],1),s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"comment"}},[t._v("留言")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10",placeholder:"給我們訂單訊息或是注意事項"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})])])])])]),s("div",{staticClass:"col-12 col-lg-6 order-info"},[s("div",{staticClass:"title my-3"},[t._v("訂單明細")]),s("div",{staticClass:"border p-5"},[s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",[t._v("產品名稱")]),s("th",{staticClass:"text-center"},[t._v("數量")]),s("th",{staticClass:"text-right"},[t._v("價格")])])]),s("tbody",t._l(t.cart.carts,(function(e){return s("tr",{key:e.id},[s("td",{staticClass:"text-primary"},[t._v(" "+t._s(e.product.title)+" "),e.total!==e.final_total?s("div",{staticClass:"text-success"},[t._v("已套用優惠券")]):t._e(),e.total==e.final_total?s("div",{staticClass:"text-secondary"},[t._v("未套用優惠券")]):t._e()]),s("td",{staticClass:"text-center"},[t._v(t._s(e.qty))]),s("td",{staticClass:"text-right"},[t._v(" "+t._s(e.total)+" "),e.total!==e.final_total?s("div",{staticClass:"text-success"},[t._v(t._s(e.final_total))]):t._e()])])})),0)]),s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("td",{staticClass:"font-weight-bold"},[t._v("總金額")]),t.cart.total==t.cart.final_total?s("td",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t.cart.total))]):t._e(),t.cart.total!==t.cart.final_total?s("td",{staticClass:"text-right text-success font-weight-bold"},[t._v(t._s(t.cart.final_total))]):t._e()])])]),s("div",{staticClass:"create-order"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("button",{staticClass:"btn btn-primary btn-lg col-12 justify-content-center",on:{click:function(e){return e.preventDefault(),a(t.createOrder)}}},[t._v("確認訂單")])])])])])])])])])]}}])})],1)])},r=[],o=(s("99af"),{data:function(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""},isLoading:!1,cartLength:"",cart:[]}},methods:{createOrder:function(){var t=this,e="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/vuewebsite/dist/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/vuewebsite/dist/"}).VUE_APP_CUSTOMPATH,"/order"),s=t.form;t.isLoading=!0,this.$http.post(e,{data:s}).then((function(e){console.log("訂單已建立",e),t.getCartLength(),e.data.success&&t.$router.push("/payment/".concat(e.data.orderId)),t.isLoading=!1}))},getCartLength:function(){var t=this,e="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/vuewebsite/dist/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/vuewebsite/dist/"}).VUE_APP_CUSTOMPATH,"/cart");t.isLoading=!0,this.$http.get(e).then((function(e){t.cartLength=e.data.data.carts.length,t.$bus.$emit("updateCartNum",t.cartLength),t.isLoading=!1}))},getCart:function(){var t=this,e="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/vuewebsite/dist/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/vuewebsite/dist/"}).VUE_APP_CUSTOMPATH,"/cart");t.isLoading=!0,this.$http.get(e).then((function(e){t.cart=e.data.data,console.log(e),t.isLoading=!1}))}},created:function(){this.getCartLength(),this.getCart()},mounted:function(){window.scrollTo(0,0)}}),i=o,n=(s("bfa9"),s("2877")),l=Object(n["a"])(i,a,r,!1,null,"63601666",null);e["default"]=l.exports},"99af":function(t,e,s){"use strict";var a=s("23e7"),r=s("d039"),o=s("e8b5"),i=s("861d"),n=s("7b0b"),l=s("50c4"),c=s("8418"),d=s("65f0"),u=s("1dde"),f=s("b622"),v=s("2d00"),m=f("isConcatSpreadable"),_=9007199254740991,p="Maximum allowed index exceeded",g=v>=51||!r((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),C=u("concat"),h=function(t){if(!i(t))return!1;var e=t[m];return void 0!==e?!!e:o(t)},b=!g||!C;a({target:"Array",proto:!0,forced:b},{concat:function(t){var e,s,a,r,o,i=n(this),u=d(i,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(o=-1===e?i:arguments[e],h(o)){if(r=l(o.length),f+r>_)throw TypeError(p);for(s=0;s<r;s++,f++)s in o&&c(u,f,o[s])}else{if(f>=_)throw TypeError(p);c(u,f++,o)}return u.length=f,u}})},bfa9:function(t,e,s){"use strict";var a=s("0f9e"),r=s.n(a);r.a}}]);
//# sourceMappingURL=chunk-24d47c36.2d0cd4fd.js.map