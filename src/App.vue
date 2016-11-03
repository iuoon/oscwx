<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
@import '~vux/src/styles/reset';
body {
  background-color: #fbf9fe;
  line-height: 1.2;
}
</style>
<script>
  import store from './vuex/store'
  export default {
    store: store, // 在根组件加入 store，让它的子组件和 store 连接

  }

</script>
