(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24d47c36"],{"0f9e":function(t,e,a){},1462:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"content"}},[a("div",{staticClass:"route"},[a("div",{staticClass:"container"},[a("router-link",{attrs:{to:"/"}},[t._v("首頁")]),a("span",{staticClass:"routeDivider"},[t._v("/")]),a("span",{staticClass:"current"},[t._v("確認訂單")])],1)]),a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.handleSubmit;return[a("div",{staticClass:"purchase-info py-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-6 buyer-info"},[a("div",{staticClass:"title my-3"},[t._v("購買人資訊")]),a("div",{staticClass:"border p-5"},[a("div",{staticClass:"row justify-content-center"},[a("form",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold",attrs:{for:"useremail"}},[t._v("信箱*")]),a("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("div",{class:r},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",attrs:{type:"email",id:"useremail",placeholder:"example@gamil.com"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold",attrs:{for:"username"}},[t._v("收件人姓名*")]),a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("div",{class:r},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold",attrs:{for:"usertel"}},[t._v("收件人電話*")]),a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("div",{class:r},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",attrs:{type:"tel",id:"usertel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold",attrs:{for:"useraddress"}},[t._v("收件人地址*")]),a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("div",{class:r},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))])])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold",attrs:{for:"comment"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10",placeholder:"給我們訂單訊息或是注意事項"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})])])])])]),a("div",{staticClass:"col-12 col-lg-6 order-info"},[a("div",{staticClass:"title my-3"},[t._v("訂單明細")]),a("div",{staticClass:"border p-5"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("產品名稱")]),a("th",{staticClass:"text-center"},[t._v("數量")]),a("th",{staticClass:"text-right"},[t._v("價格")])])]),a("tbody",t._l(t.cart.carts,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"text-primary"},[t._v(" "+t._s(e.product.title)+" "),e.total!==e.final_total?a("div",{staticClass:"text-success"},[t._v("已套用優惠券")]):t._e(),e.total==e.final_total?a("div",{staticClass:"text-secondary"},[t._v("未套用優惠券")]):t._e()]),a("td",{staticClass:"text-center"},[t._v(t._s(e.qty))]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(e.total)+" "),e.total!==e.final_total?a("div",{staticClass:"text-success"},[t._v(t._s(e.final_total))]):t._e()])])})),0)]),a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("td",{staticClass:"font-weight-bold"},[t._v("總金額")]),t.cart.total==t.cart.final_total?a("td",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t.cart.total))]):t._e(),t.cart.total!==t.cart.final_total?a("td",{staticClass:"text-right text-success font-weight-bold"},[t._v(t._s(t.cart.final_total))]):t._e()])])]),a("div",{staticClass:"create-order"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("button",{staticClass:"btn btn-primary btn-lg col-12 justify-content-center",on:{click:function(e){return e.preventDefault(),s(t.createOrder)}}},[t._v("確認訂單")])])])])])])])])])]}}])})],1)])},r=[],o=(a("99af"),{data:function(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""},isLoading:!1,cartLength:"",cart:[]}},methods:{createOrder:function(){var t=this,e="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/order"),a=t.form;t.isLoading=!0,this.$http.post(e,{data:a}).then((function(e){console.log("訂單已建立",e),t.getCartLength(),e.data.success&&t.$router.push("/payment/".concat(e.data.orderId)),t.isLoading=!1}))},getCartLength:function(){var t=this,e="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/cart");t.isLoading=!0,this.$http.get(e).then((function(e){t.cartLength=e.data.data.carts.length,t.$bus.$emit("updateCartNum",t.cartLength),t.isLoading=!1}))},getCart:function(){var t=this,e="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/cart");t.isLoading=!0,this.$http.get(e).then((function(e){t.cart=e.data.data,console.log(e),t.isLoading=!1}))}},created:function(){this.getCartLength(),this.getCart()},mounted:function(){window.scrollTo(0,0)}}),i=o,n=(a("bfa9"),a("2877")),l=Object(n["a"])(i,s,r,!1,null,"63601666",null);e["default"]=l.exports},"99af":function(t,e,a){"use strict";var s=a("23e7"),r=a("d039"),o=a("e8b5"),i=a("861d"),n=a("7b0b"),l=a("50c4"),c=a("8418"),d=a("65f0"),u=a("1dde"),f=a("b622"),m=a("2d00"),_=f("isConcatSpreadable"),v=9007199254740991,p="Maximum allowed index exceeded",g=m>=51||!r((function(){var t=[];return t[_]=!1,t.concat()[0]!==t})),C=u("concat"),h=function(t){if(!i(t))return!1;var e=t[_];return void 0!==e?!!e:o(t)},b=!g||!C;s({target:"Array",proto:!0,forced:b},{concat:function(t){var e,a,s,r,o,i=n(this),u=d(i,0),f=0;for(e=-1,s=arguments.length;e<s;e++)if(o=-1===e?i:arguments[e],h(o)){if(r=l(o.length),f+r>v)throw TypeError(p);for(a=0;a<r;a++,f++)a in o&&c(u,f,o[a])}else{if(f>=v)throw TypeError(p);c(u,f++,o)}return u.length=f,u}})},bfa9:function(t,e,a){"use strict";var s=a("0f9e"),r=a.n(s);r.a}}]);
//# sourceMappingURL=chunk-24d47c36.af997217.js.map