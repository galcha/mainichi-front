import Vue from 'vue'
import Router from 'vue-router'
import Word from '@/components/Word'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Word',
      component: Word
    }
  ]
})
