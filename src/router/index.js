import Vue from 'vue'
import Router from 'vue-router'
import todo from '@/components/todo'
import news from '@/components/news'
import home from '@/components/home'
import task1 from '@/components/task/task1'
import task2 from '@/components/task/task2'
import task3 from '@/components/task/task3'
import task4 from '@/components/task/task4'
import defalut from '@/components/defalut'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/todo',
      name: 'todo',
      component: todo
    },
    {
      path: '/home',
      name: home,
      component: home
    },
    {
      path: '/news',
      name: news,
      component: news,
      children: [
        {
          path: 'task1',
          name: 'task1',
          component: task1
        },
        {
          path: 'task2',
          name: 'task2',
          component: task2
        },
        {
          path: 'task3',
          name: 'task3',
          component: task3
        },
        {
          path: 'task4',
          name: 'task4',
          component: task4
        }
      ]
    },
    {
      path: 'defalut',
      name: 'defalut',
      component: defalut
    },
    {
      path: '',
      name: defalut,
      component: defalut
    }
  ]
})
