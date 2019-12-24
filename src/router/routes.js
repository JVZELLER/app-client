
const routes = [
  {
    path: '/login',
    component: () => import('layouts/NoMenuLayout.vue'),
    children: [
      {
        path: '',
        name: 'app.login',
        component: () => import('pages/TheLogin/index.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
