import Vue from 'vue'
import VueRouter from 'vue-router'
import { AuthService } from 'src/services'
import * as SnackBar from 'src/services/snackBar.service'

import routes from './routes'

Vue.use(VueRouter)

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  // Login interceptor
  Router.beforeEach((to, from, next) => {
    if (to.name !== 'app.login') {
      if (AuthService.isSessionExpired()) {
        AuthService.logout()
        SnackBar.error({ message: 'Session expired. Please, log in again.' })
        return next({ name: 'app.login' })
      }
      return next()
    }
    return next()
  })

  return Router
}
