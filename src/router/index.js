/*
 * @Name: 路由配置
 */

import { createRouter, createWebHistory } from 'vue-router'

import common from './common'
import Error404 from '@/views/exception/404.vue'
import Success from '@/views/result/Success.vue'
import Failure from '@/views/result/Failure.vue'
import Status from '@/views/result/Status.vue'

import Demo from '@/views/demo/index.vue'

const routes = [
  {
    path: '/index',
    name: 'index',
    redirect: '/404'
  },

  // exception
  {
    path: '/404',
    name: '404',
    component: Error404,
    meta: {
      title: '广东省人民医院'
    }
  },

  // result
  {
    path: '/success',
    name: 'success',
    component: Success,
    meta: {
      title: '提交完成'
    }
  },
  {
    path: '/failure',
    name: 'failure',
    component: Failure,
    meta: {
      title: '错误'
    }
  },
  {
    path: '/result',
    name: 'result',
    component: Status,
    meta: {
      title: '提交结果'
    }
  },

  // demo
  {
    path: '/demo',
    name: 'Demo',
    component: Demo,
    meta: {
      title: 'demo'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...common]
})

export default router
