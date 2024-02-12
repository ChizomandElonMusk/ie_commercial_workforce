import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cedb2656 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _098aca9e = () => interopDefault(import('../pages/crmd/index.vue' /* webpackChunkName: "pages/crmd/index" */))
const _4449405c = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _14e1cd0b = () => interopDefault(import('../pages/forgot.vue' /* webpackChunkName: "pages/forgot" */))
const _5555b477 = () => interopDefault(import('../pages/forms.vue' /* webpackChunkName: "pages/forms" */))
const _fc1c2a9e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _e0b2aeac = () => interopDefault(import('../pages/md-customer-ir.vue' /* webpackChunkName: "pages/md-customer-ir" */))
const _1966c018 = () => interopDefault(import('../pages/nmd-activity-checklist.vue' /* webpackChunkName: "pages/nmd-activity-checklist" */))
const _65bb8fe6 = () => interopDefault(import('../pages/nmd-pre-survey-checklist.vue' /* webpackChunkName: "pages/nmd-pre-survey-checklist" */))
const _6e306bf8 = () => interopDefault(import('../pages/payment-channel.vue' /* webpackChunkName: "pages/payment-channel" */))
const _18dc6b00 = () => interopDefault(import('../pages/sent.vue' /* webpackChunkName: "pages/sent" */))
const _08a55880 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _f3926d90 = () => interopDefault(import('../pages/user-info.vue' /* webpackChunkName: "pages/user-info" */))
const _21cee4b1 = () => interopDefault(import('../pages/vsm-checklist.vue' /* webpackChunkName: "pages/vsm-checklist" */))
const _59dc5a4c = () => interopDefault(import('../pages/crmd/account_reactivation.vue' /* webpackChunkName: "pages/crmd/account_reactivation" */))
const _1714a360 = () => interopDefault(import('../pages/crmd/account_suspension.vue' /* webpackChunkName: "pages/crmd/account_suspension" */))
const _169e66fb = () => interopDefault(import('../pages/crmd/correction_of_dials.vue' /* webpackChunkName: "pages/crmd/correction_of_dials" */))
const _3792d8f7 = () => interopDefault(import('../pages/crmd/correction_of_lar_par.vue' /* webpackChunkName: "pages/crmd/correction_of_lar_par" */))
const _2498e7a6 = () => interopDefault(import('../pages/crmd/switch_to_actual_read.vue' /* webpackChunkName: "pages/crmd/switch_to_actual_read" */))
const _9a69f6b2 = () => interopDefault(import('../pages/crmd/switch_to_dormant.vue' /* webpackChunkName: "pages/crmd/switch_to_dormant" */))
const _63895f7e = () => interopDefault(import('../pages/crmd/switch_to_quantitative.vue' /* webpackChunkName: "pages/crmd/switch_to_quantitative" */))
const _8f6b70cc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _cedb2656,
    name: "about"
  }, {
    path: "/crmd",
    component: _098aca9e,
    name: "crmd"
  }, {
    path: "/dashboard",
    component: _4449405c,
    name: "dashboard"
  }, {
    path: "/forgot",
    component: _14e1cd0b,
    name: "forgot"
  }, {
    path: "/forms",
    component: _5555b477,
    name: "forms"
  }, {
    path: "/login",
    component: _fc1c2a9e,
    name: "login"
  }, {
    path: "/md-customer-ir",
    component: _e0b2aeac,
    name: "md-customer-ir"
  }, {
    path: "/nmd-activity-checklist",
    component: _1966c018,
    name: "nmd-activity-checklist"
  }, {
    path: "/nmd-pre-survey-checklist",
    component: _65bb8fe6,
    name: "nmd-pre-survey-checklist"
  }, {
    path: "/payment-channel",
    component: _6e306bf8,
    name: "payment-channel"
  }, {
    path: "/sent",
    component: _18dc6b00,
    name: "sent"
  }, {
    path: "/signup",
    component: _08a55880,
    name: "signup"
  }, {
    path: "/user-info",
    component: _f3926d90,
    name: "user-info"
  }, {
    path: "/vsm-checklist",
    component: _21cee4b1,
    name: "vsm-checklist"
  }, {
    path: "/crmd/account_reactivation",
    component: _59dc5a4c,
    name: "crmd-account_reactivation"
  }, {
    path: "/crmd/account_suspension",
    component: _1714a360,
    name: "crmd-account_suspension"
  }, {
    path: "/crmd/correction_of_dials",
    component: _169e66fb,
    name: "crmd-correction_of_dials"
  }, {
    path: "/crmd/correction_of_lar_par",
    component: _3792d8f7,
    name: "crmd-correction_of_lar_par"
  }, {
    path: "/crmd/switch_to_actual_read",
    component: _2498e7a6,
    name: "crmd-switch_to_actual_read"
  }, {
    path: "/crmd/switch_to_dormant",
    component: _9a69f6b2,
    name: "crmd-switch_to_dormant"
  }, {
    path: "/crmd/switch_to_quantitative",
    component: _63895f7e,
    name: "crmd-switch_to_quantitative"
  }, {
    path: "/",
    component: _8f6b70cc,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
