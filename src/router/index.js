import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Todo from '@/components/todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Todo
    }
  ]
})
