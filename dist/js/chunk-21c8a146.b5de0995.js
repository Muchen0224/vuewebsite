(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21c8a146"],{"0d03":function(t,e,i){"use strict";var s=i("70b8"),a=i.n(s);a.a},"70b8":function(t,e,i){},de82:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"content"}},[i("div",{staticClass:"slider"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row align-items-center justify-content-center"},[i("div",{staticClass:"text-wrap"},[i("div",{staticClass:"title"},[t._v("貓咪星球")]),i("div",{staticClass:"subtitle"},[t._v("Cat World")]),i("p",[t._v("一起在貓咪星球探索吧")]),i("div",{staticClass:"buy-now"},[i("router-link",{staticClass:"btn btn-primary",attrs:{to:"/shoppage"}},[t._v("立即購買")])],1)])])])]),i("hr",{staticClass:"divider"}),i("Categories"),i("hr",{staticClass:"divider"}),i("div",{staticClass:"new-sale"},[i("div",{staticClass:"container"},[i("div",{staticClass:"title"},[t._v("新品上市")]),i("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},[t._l(t.newProduct,(function(e){return i("swiper-slide",{key:e.id},[i("router-link",{attrs:{to:{name:"ShopItem",params:{id:e.id}}}},[i("img",{staticClass:"d-block w-100",attrs:{src:e.imageUrl,alt:"..."}})]),i("div",{staticClass:"text-wrap text-center"},[i("router-link",{attrs:{to:{name:"ShopItem",params:{id:e.id}}}},[i("h5",[t._v(t._s(e.title))])]),i("div",{staticClass:"price"},[t._v(t._s(t._f("currency")(e.price)))])],1)],1)})),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])],1)])},a=[],n=(i("99af"),i("4de4"),i("c740"),i("1157"),i("dbae")),r=i("7212"),c=(i("a7a3"),{components:{Categories:n["a"],Swiper:r["Swiper"],SwiperSlide:r["SwiperSlide"]},data:function(){return{sideMenu:!1,swiperOption:{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:40},1024:{slidesPerView:3,spaceBetween:50}}},cartLength:"",newProductList:["乾貓草-貓薄荷棒","主食生肉餐","消臭抗菌噴霧","火箭貓抓板"],newProduct:[]}},methods:{getCartLength:function(){var t=this,e="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/vuewebsite/dist/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/vuewebsite/dist/"}).VUE_APP_CUSTOMPATH,"/cart");t.isLoading=!0,this.$http.get(e).then((function(e){t.cartLength=e.data.data.carts.length,t.isLoading=!1}))},getNewProducts:function(){var t="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/vuewebsite/dist/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/vuewebsite/dist/"}).VUE_APP_CUSTOMPATH,"/products/all"),e=this;this.$http.get(t).then((function(t){console.log("getNewProducts",t.data),e.newProduct=t.data.products.filter((function(t){var i=e.newProductList.findIndex((function(e){return e===t.title}));return-1!=i})),console.log("new",e.newProduct)}))}},created:function(){this.getCartLength(),this.getNewProducts()},mounted:function(){window.scrollTo(0,0)}}),o=c,d=(i("0d03"),i("2877")),l=Object(d["a"])(o,s,a,!1,null,"2c047512",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-21c8a146.b5de0995.js.map