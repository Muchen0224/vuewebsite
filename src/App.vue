<template>
  <div id="app">
    <router-view class="app-wrap"></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "./assets/all.scss";
  #app{
    min-height: 100%;
  }
  .app-wrap{
    height: 100vh;
  }
  ul{
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
  *{
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
  }

  a:hover{
    text-decoration: none;
  }
</style>
