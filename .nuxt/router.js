import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cedb2656 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _098aca9e = () => interopDefault(import('../pages/crmd/index.vue' /* webpackChunkName: "pages/crmd/index" */))
const _028ba116 = () => interopDefault(import('../pages/customer_categorization/index.vue' /* webpackChunkName: "pages/customer_categorization/index" */))
const _724fad34 = () => interopDefault(import('../pages/customer_complaints/index.vue' /* webpackChunkName: "pages/customer_complaints/index" */))
const _39223022 = () => interopDefault(import('../pages/customer_details_validation/index.vue' /* webpackChunkName: "pages/customer_details_validation/index" */))
const _b123b5d0 = () => interopDefault(import('../pages/customer_mapping/index.vue' /* webpackChunkName: "pages/customer_mapping/index" */))
const _41b24616 = () => interopDefault(import('../pages/customer_visitation/index.vue' /* webpackChunkName: "pages/customer_visitation/index" */))
const _3a913d3b = () => interopDefault(import('../pages/dashboard_ie_force.vue' /* webpackChunkName: "pages/dashboard_ie_force" */))
const _e0401c36 = () => interopDefault(import('../pages/dt_assigned.vue' /* webpackChunkName: "pages/dt_assigned" */))
const _1f1030e3 = () => interopDefault(import('../pages/e_services/index.vue' /* webpackChunkName: "pages/e_services/index" */))
const _1898aa73 = () => interopDefault(import('../pages/energy_theft/index.vue' /* webpackChunkName: "pages/energy_theft/index" */))
const _1ca1e05c = () => interopDefault(import('../pages/esr_form_history.vue' /* webpackChunkName: "pages/esr_form_history" */))
const _14e1cd0b = () => interopDefault(import('../pages/forgot.vue' /* webpackChunkName: "pages/forgot" */))
const _5555b477 = () => interopDefault(import('../pages/forms.vue' /* webpackChunkName: "pages/forms" */))
const _4dda24a0 = () => interopDefault(import('../pages/idb_customer_mapping/index.vue' /* webpackChunkName: "pages/idb_customer_mapping/index" */))
const _58bd967e = () => interopDefault(import('../pages/idb_customer_visitation/index.vue' /* webpackChunkName: "pages/idb_customer_visitation/index" */))
const _38b49d20 = () => interopDefault(import('../pages/ie_force.vue' /* webpackChunkName: "pages/ie_force" */))
const _fc1c2a9e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _e0b2aeac = () => interopDefault(import('../pages/md-customer-ir.vue' /* webpackChunkName: "pages/md-customer-ir" */))
const _acb91572 = () => interopDefault(import('../pages/menu.vue' /* webpackChunkName: "pages/menu" */))
const _4acaa93e = () => interopDefault(import('../pages/newly_installed_ppm/index.vue' /* webpackChunkName: "pages/newly_installed_ppm/index" */))
const _1966c018 = () => interopDefault(import('../pages/nmd-activity-checklist.vue' /* webpackChunkName: "pages/nmd-activity-checklist" */))
const _65bb8fe6 = () => interopDefault(import('../pages/nmd-pre-survey-checklist.vue' /* webpackChunkName: "pages/nmd-pre-survey-checklist" */))
const _5de6653c = () => interopDefault(import('../pages/non_inclusion_capture/index.vue' /* webpackChunkName: "pages/non_inclusion_capture/index" */))
const _57e91787 = () => interopDefault(import('../pages/none_vending_cv/index.vue' /* webpackChunkName: "pages/none_vending_cv/index" */))
const _6e306bf8 = () => interopDefault(import('../pages/payment-channel.vue' /* webpackChunkName: "pages/payment-channel" */))
const _18dc6b00 = () => interopDefault(import('../pages/sent.vue' /* webpackChunkName: "pages/sent" */))
const _0e434446 = () => interopDefault(import('../pages/sent_tracking.vue' /* webpackChunkName: "pages/sent_tracking" */))
const _08a55880 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _1954fefc = () => interopDefault(import('../pages/suspended_cv/index.vue' /* webpackChunkName: "pages/suspended_cv/index" */))
const _7cb80958 = () => interopDefault(import('../pages/token_request/index.vue' /* webpackChunkName: "pages/token_request/index" */))
const _f3926d90 = () => interopDefault(import('../pages/user-info.vue' /* webpackChunkName: "pages/user-info" */))
const _21cee4b1 = () => interopDefault(import('../pages/vsm-checklist.vue' /* webpackChunkName: "pages/vsm-checklist" */))
const _59dc5a4c = () => interopDefault(import('../pages/crmd/account_reactivation.vue' /* webpackChunkName: "pages/crmd/account_reactivation" */))
const _1714a360 = () => interopDefault(import('../pages/crmd/account_suspension.vue' /* webpackChunkName: "pages/crmd/account_suspension" */))
const _169e66fb = () => interopDefault(import('../pages/crmd/correction_of_dials.vue' /* webpackChunkName: "pages/crmd/correction_of_dials" */))
const _3792d8f7 = () => interopDefault(import('../pages/crmd/correction_of_lar_par.vue' /* webpackChunkName: "pages/crmd/correction_of_lar_par" */))
const _6d99d909 = () => interopDefault(import('../pages/crmd/sent.vue' /* webpackChunkName: "pages/crmd/sent" */))
const _2498e7a6 = () => interopDefault(import('../pages/crmd/switch_to_actual_read.vue' /* webpackChunkName: "pages/crmd/switch_to_actual_read" */))
const _9a69f6b2 = () => interopDefault(import('../pages/crmd/switch_to_dormant.vue' /* webpackChunkName: "pages/crmd/switch_to_dormant" */))
const _63895f7e = () => interopDefault(import('../pages/crmd/switch_to_quantitative.vue' /* webpackChunkName: "pages/crmd/switch_to_quantitative" */))
const _d7044ebe = () => interopDefault(import('../pages/e_services/billing_history.vue' /* webpackChunkName: "pages/e_services/billing_history" */))
const _5eabefac = () => interopDefault(import('../pages/e_services/payment_history.vue' /* webpackChunkName: "pages/e_services/payment_history" */))
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
    path: "/customer_categorization",
    component: _028ba116,
    name: "customer_categorization"
  }, {
    path: "/customer_complaints",
    component: _724fad34,
    name: "customer_complaints"
  }, {
    path: "/customer_details_validation",
    component: _39223022,
    name: "customer_details_validation"
  }, {
    path: "/customer_mapping",
    component: _b123b5d0,
    name: "customer_mapping"
  }, {
    path: "/customer_visitation",
    component: _41b24616,
    name: "customer_visitation"
  }, {
    path: "/dashboard_ie_force",
    component: _3a913d3b,
    name: "dashboard_ie_force"
  }, {
    path: "/dt_assigned",
    component: _e0401c36,
    name: "dt_assigned"
  }, {
    path: "/e_services",
    component: _1f1030e3,
    name: "e_services"
  }, {
    path: "/energy_theft",
    component: _1898aa73,
    name: "energy_theft"
  }, {
    path: "/esr_form_history",
    component: _1ca1e05c,
    name: "esr_form_history"
  }, {
    path: "/forgot",
    component: _14e1cd0b,
    name: "forgot"
  }, {
    path: "/forms",
    component: _5555b477,
    name: "forms"
  }, {
    path: "/idb_customer_mapping",
    component: _4dda24a0,
    name: "idb_customer_mapping"
  }, {
    path: "/idb_customer_visitation",
    component: _58bd967e,
    name: "idb_customer_visitation"
  }, {
    path: "/ie_force",
    component: _38b49d20,
    name: "ie_force"
  }, {
    path: "/login",
    component: _fc1c2a9e,
    name: "login"
  }, {
    path: "/md-customer-ir",
    component: _e0b2aeac,
    name: "md-customer-ir"
  }, {
    path: "/menu",
    component: _acb91572,
    name: "menu"
  }, {
    path: "/newly_installed_ppm",
    component: _4acaa93e,
    name: "newly_installed_ppm"
  }, {
    path: "/nmd-activity-checklist",
    component: _1966c018,
    name: "nmd-activity-checklist"
  }, {
    path: "/nmd-pre-survey-checklist",
    component: _65bb8fe6,
    name: "nmd-pre-survey-checklist"
  }, {
    path: "/non_inclusion_capture",
    component: _5de6653c,
    name: "non_inclusion_capture"
  }, {
    path: "/none_vending_cv",
    component: _57e91787,
    name: "none_vending_cv"
  }, {
    path: "/payment-channel",
    component: _6e306bf8,
    name: "payment-channel"
  }, {
    path: "/sent",
    component: _18dc6b00,
    name: "sent"
  }, {
    path: "/sent_tracking",
    component: _0e434446,
    name: "sent_tracking"
  }, {
    path: "/signup",
    component: _08a55880,
    name: "signup"
  }, {
    path: "/suspended_cv",
    component: _1954fefc,
    name: "suspended_cv"
  }, {
    path: "/token_request",
    component: _7cb80958,
    name: "token_request"
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
    path: "/crmd/sent",
    component: _6d99d909,
    name: "crmd-sent"
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
    path: "/e_services/billing_history",
    component: _d7044ebe,
    name: "e_services-billing_history"
  }, {
    path: "/e_services/payment_history",
    component: _5eabefac,
    name: "e_services-payment_history"
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
