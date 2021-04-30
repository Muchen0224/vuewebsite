(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62c06bda"],{1799:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination justify-content-center"},[e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.changePage(t.pagination.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.pagination.current_page==a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.changePage(t.pagination.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},n=[],s={props:["pagination"],methods:{changePage:function(t){this.$emit("turnPage",t)}}},i=s,l=e("2877"),c=Object(l["a"])(i,o,n,!1,null,null,null);a["a"]=c.exports},"8c58":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.openCouponModal(!0)}}},[t._v("建立新的優惠券")])]),e("table",{staticClass:"table mt-4"},[t._m(0),e("tbody",t._l(t.coupons,(function(a,o){return e("tr",{key:o},[e("td",[t._v(t._s(a.title))]),e("td",[t._v(t._s(a.percent)+"%")]),e("td",[t._v(t._s(a.due_date))]),e("td",[1===a.is_enabled?e("span",{staticClass:"text-success"},[t._v("啟用")]):e("span",{staticClass:"text-muted"},[t._v("未起用")])]),e("td",[e("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(e){return t.openCouponModal(!1,a)}}},[t._v("編輯")])]),e("td",[e("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(e){return t.delModal(a)}}},[t._v("刪除")])])])})),0)]),e("Pagination",{attrs:{pagination:t.pagination},on:{turnPage:t.getCoupons}}),e("div",{staticClass:"modal fade",attrs:{id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(1),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("標題")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempCoupon.title},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"title",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"coupon_code"}},[t._v("優惠碼")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{type:"text",id:"coupon_code",placeholder:"請輸入優惠碼"},domProps:{value:t.tempCoupon.code},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"code",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"due_date"}},[t._v("到期日")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.due_date,expression:"tempCoupon.due_date"}],staticClass:"form-control",attrs:{type:"date",id:"due_date"},domProps:{value:t.tempCoupon.due_date},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"due_date",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"price"}},[t._v("折扣百分比")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入折扣百分比"},domProps:{value:t.tempCoupon.percent},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"percent",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.is_enabled,expression:"tempCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempCoupon.is_enabled)?t._i(t.tempCoupon.is_enabled,null)>-1:t._q(t.tempCoupon.is_enabled,1)},on:{change:function(a){var e=t.tempCoupon.is_enabled,o=a.target,n=o.checked?1:0;if(Array.isArray(e)){var s=null,i=t._i(e,s);o.checked?i<0&&t.$set(t.tempCoupon,"is_enabled",e.concat([s])):i>-1&&t.$set(t.tempCoupon,"is_enabled",e.slice(0,i).concat(e.slice(i+1)))}else t.$set(t.tempCoupon,"is_enabled",n)}}}),e("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateCoupon}},[t._v("確認")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"delCouponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(2),e("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),e("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempCoupon.title))]),t._v(" 優惠券(刪除後將無法恢復)。 ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.delCoupon(a)}}},[t._v("確認刪除")])])])])])],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("名稱")]),e("th",[t._v("折扣百分比")]),e("th",[t._v("到期日")]),e("th",[t._v("是否啟用")]),e("th",[t._v("編輯")]),e("th",[t._v("刪除")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("新增優惠券")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("刪除優惠卷")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],s=(e("99af"),e("1157")),i=e.n(s),l=e("1799"),c={data:function(){return{coupons:[],pagination:{},tempCoupon:{},isNew:!1,isLoading:!1}},components:{Pagination:l["a"]},methods:{getCoupons:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("muchen","/admin/coupons?page=").concat(t);a.isLoading=!0,this.$http.get(e).then((function(t){a.isLoading=!1,a.coupons=t.data.coupons,a.pagination=t.data.pagination}))},openCouponModal:function(t,a){var e=this;i()("#couponModal").modal("show"),e.isNew=t,e.isNew?e.tempCoupon={}:e.tempCoupon=Object.assign({},a)},updateCoupon:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("muchen","/admin/coupon"),e="post";t.isNew||(a="".concat("https://vue-course-api.hexschool.io","/api/").concat("muchen","/admin/coupon/").concat(t.tempCoupon.id),e="put"),this.$http[e](a,{data:t.tempCoupon}).then((function(a){a.data.success?(i()("#couponModal").modal("hide"),t.getCoupons()):(i()("#couponModal").modal("hide"),console.log("新增失敗"))}))},delModal:function(t){var a=this;i()("#delCouponModal").modal("show"),a.tempCoupon=Object.assign({},t)},delCoupon:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("muchen","/admin/coupon/").concat(t.tempCoupon.id);t.isLoading=!0,t.$http.delete(a).then((function(a){t.isLoading=!1,a.data.success?(i()("#delCouponModal").modal("hide"),t.getCoupons()):(i()("#delCouponModal").modal("hide"),console.log("刪除失敗"))}))}},created:function(){this.getCoupons()}},r=c,d=e("2877"),u=Object(d["a"])(r,o,n,!1,null,null,null);a["default"]=u.exports},"99af":function(t,a,e){"use strict";var o=e("23e7"),n=e("d039"),s=e("e8b5"),i=e("861d"),l=e("7b0b"),c=e("50c4"),r=e("8418"),d=e("65f0"),u=e("1dde"),p=e("b622"),m=e("2d00"),v=p("isConcatSpreadable"),C=9007199254740991,h="Maximum allowed index exceeded",g=m>=51||!n((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=u("concat"),f=function(t){if(!i(t))return!1;var a=t[v];return void 0!==a?!!a:s(t)},_=!g||!b;o({target:"Array",proto:!0,forced:_},{concat:function(t){var a,e,o,n,s,i=l(this),u=d(i,0),p=0;for(a=-1,o=arguments.length;a<o;a++)if(s=-1===a?i:arguments[a],f(s)){if(n=c(s.length),p+n>C)throw TypeError(h);for(e=0;e<n;e++,p++)e in s&&r(u,p,s[e])}else{if(p>=C)throw TypeError(h);r(u,p++,s)}return u.length=p,u}})}}]);
//# sourceMappingURL=chunk-62c06bda.08b4bb4d.js.map