<template>
  <div>
    <app-header></app-header>

    <tab :line-width="2" >
      <tab-item :selected="tag === item" v-for="item in taglist" @click="tag = item">{{item}}</tab-item>
    </tab>
    <news-list></news-list>
    <app-footer></app-footer>
  </div>
</template>
<style>
@import '~vux/dist/vux.css';
body{
line-height: 1.2;
}
</style>
<script>
  import Tab from 'vux/dist/components/tab'
  import TabItem from 'vux/dist/components/tab-item'
  import Scroller from 'vux/dist/components/scroller'
  import Cell from 'vux/dist/components/cell'
  import Group from 'vux/dist/components/group'
  import AppHeader from './Header'
  import AppFooter from './Footer'
  import NewsList from './NewsList'
  import ScrollerDemo from './scrollerdemo'

  export default {
    data () {
      return {
        tag: '资讯',
        taglist: ['资讯', '博客', '问答', '活动'],
    }
  },
  components: {
      Tab,
      TabItem,
      AppHeader,
      AppFooter,
      Scroller,
      Cell,
      Group,
      NewsList,
      ScrollerDemo
  },
  ready () {

  },
  methods:{

  }

}
</script>
