<template>
  <div>
    <div class="categories">
      <div class="container">
        <div class="title">商品分類</div>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4 category cat-food">
            <a href="#" class="d-block" @click.prevent="goToShopPage('貓食')">
              <img src="@/assets/img/catfood.jpg" class="img-fluid" alt="">
              <div class="text-wrap">
                <span>商品分類</span>
                <h3>貓食</h3>
              </div>
            </a>

          </div>
          <div class="col-sm-12 col-md-6 col-lg-4 category other">
            <a href="#" class="d-block"  @click.prevent="goToShopPage('貓抓板')">
              <img src="@/assets/img/catsplay.jpg" class="img-fluid" alt="">
              <div class="text-wrap">
                <span>商品分類</span>
                <h3>貓抓板</h3>
              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4 category clean">
            <a href="#" class="d-block" @click.prevent="goToShopPage('寵物周邊')">
              <img src="@/assets/img/catclean.jpg" class="img-fluid" alt="">
              <div class="text-wrap">
                <span>商品分類</span>
                <h3>貓咪周邊</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .categories .title{
  text-align: center;
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 30px;
  }

  .categories .category{
    position: relative;
    margin-bottom: 30px;
    overflow: hidden;
  }

  .categories .category .text-wrap{
    position: absolute;
    bottom: 3%;
    left: 8%;
    color: black;
  }

  .categories .category img{
    transform: scale(1,1);
    transition: all 0.5s ease-out;
  }

  .categories .category img:hover{
    transform:scale(1.2,1.2);
  }
</style>

<script>

export default {
  data () {
    return {
      category: ''
    }
  },
  methods: {
    goToShopPage (category) {
      const vm = this
      vm.category = category
      vm.$router.push('/shoppage')
    }
  },
  beforeDestroy () {
    const vm = this
    vm.$bus.$emit('changeFilter', vm.category)
  }
}
</script>
