export default [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/index'
  }
]
