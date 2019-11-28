export default [
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "article" */ 'views/Mine.vue'),
    meta: {
      auth: true,
      title: '个人中心',
      keepAlive: true
    }
  }
]