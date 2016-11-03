import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import NewsDetail from './components/NewsDetail'

Vue.use(VueRouter)
const router = new VueRouter()
const FastClick = require('fastclick')
FastClick.attach(document.body)

router.map({
  '/': {
    component: Home
  },
  '/newsdetail':{
    name:'newsdetail',
    component: NewsDetail
  }
})

router.start(App, '#app')

