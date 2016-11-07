<template>
  <div>
    <app-header></app-header>
    <tab :line-width="2"  :index.sync="index">
      <tab-item :selected="tag === item" v-for="item in taglist" @click="tag = item">{{item}}</tab-item>
    </tab>
    <div v-if="index==0"><news-list></news-list></div>
    <div v-if="index==1"><blog-list></blog-list></div>
    <div v-if="index==2"><question-list></question-list></div>
    <div v-if="index==3"><event-list></event-list></div>
    <app-footer></app-footer>
  </div>
</template>
<style>
@import '~vux/dist/vux.css';
body{
line-height: 1.2; /* 设置行间距为1.2 ,默认是1.6的太大*/
}
</style>
<script>
  import Tab from 'vux/dist/components/tab'
  import TabItem from 'vux/dist/components/tab-item'
  import Swiper from 'vux/dist/components/swiper'
  import SwiperItem from 'vux/dist/components/swiper-item'
  import Scroller from 'vux/dist/components/scroller'
  import Cell from 'vux/dist/components/cell'
  import Group from 'vux/dist/components/group'
  import AppHeader from './Header'
  import AppFooter from './Footer'
  import NewsList from './NewsList'
  import BlogList from './BlogList'
  import QuestionList from './QuestionList'
  import EventList from './EventList'
  import Tabbar from 'vux/dist/components/tabbar'
  import TabbarItem from 'vux/dist/components/tabbar-item'

  import { incrementag } from '../vuex/actions'



  export default {
    data () {
      return {
        tag: '资讯',
        taglist: ['资讯', '博客', '问答', '活动'],
        index:0,
    }
  },
  components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      AppHeader,
      AppFooter,
      Scroller,
      Cell,
      Group,
      NewsList,
      BlogList,
      QuestionList,
      EventList
  },
  vuex: {
     actions: {
        increment: incrementag
     }
  },
  ready () {

  },
  methods:{

  }

}
</script>
