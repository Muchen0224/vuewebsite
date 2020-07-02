<template>
  <div>
    <div class="body-wrap">
      <div class="site-wrap" :class="{ 'side-open' : sideMenu}">
        <!--header-->
        <homeNav @openSideMenu="sideMenu = !sideMenu"></homeNav>
        <!--body-->
        <div class="wraper">
          <router-view></router-view>
        </div>
        <hr class="divider" />
        <!--footer-->
        <Footer class="footer"></Footer>
      </div>
    </div>
  </div>
</template>

<style scoped>

.body-wrap {
  overflow: hidden;
  width: 100%;
  min-height: 100%;
}

.footer{
  position: absolute;
  bottom: 0;
  height: 50px;
}

.site-wrap {
  position: relative;
  transition: all 0.5s;
  min-height: 100vh;
  padding-bottom: 350px;
}

.site-wrap.side-open {
  transform: translateX(-270px);
}

.footer{
  position: absolute;
  bottom: 0px;
  height: 350px;
  width: 100%;
}
</style>

<script>
import HomeNav from '@/components/frontend/HomeNav.vue'
import Footer from '@/components/frontend/Footer.vue'

export default {
  components: {
    HomeNav,
    Footer
  },
  data () {
    return {
      sideMenu: false
    }
  },
  methods: {
    getCartLength () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.isLoading = true
      vm.$http.get(url).then(response => {
        vm.cartLength = response.data.data.carts.length
        vm.isLoading = false
      })
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
