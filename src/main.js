import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'

Vue.use(VueRouter)
const router = new VueRouter()
const FastClick = require('fastclick')
FastClick.attach(document.body)

router.map({
  '/': {
    component: Home
  }
})

router.start(App, '#app')

