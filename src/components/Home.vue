<template>
  <div>
    <app-header></app-header>
    <app-footer></app-footer>
    <tab :line-width="2" >
      <tab-item :selected="tag === item" v-for="item in taglist" @click="tag = item">{{item}}</tab-item>
    </tab>

  </div>
</template>
<style>
@import '~vux/dist/vux.css';
</style>
<script>
  import Tab from 'vux/dist/components/tab'
  import TabItem from 'vux/dist/components/tab-item'
  import AppHeader from './Header'
  import AppFooter from './Footer'

  export default {
    data () {
      return {
        tag: '资讯',
        taglist: ['资讯', '博客', '问答', '活动']
    }
  },
  components: {
      Tab,
      TabItem,
      AppHeader,
      AppFooter,
  },
}
</script>
