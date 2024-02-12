exports.ids = [15,3];
exports.modules = {

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.e97530d.png";

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=template&id=ac56e43a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\" style=\"margin-top: 0px\"><div class=\"col s12 m3\"></div> <div class=\"col s12 m6 center\"><img" + _vm._ssrAttr("src", __webpack_require__(39)) + " alt class=\"responsive-img circle\" style=\"max-width:100px; max-height:100px\"></div> <div class=\"col s12 m3\"></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Logo.vue?vue&type=template&id=ac56e43a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=script&lang=js&
/* harmony default export */ var Logovue_type_script_lang_js_ = ({
  name: 'TinaLogo'
});
// CONCATENATED MODULE: ./components/Logo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Logovue_type_script_lang_js_ = (Logovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Logo.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Logovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5baecdd6"
  
)

/* harmony default export */ var Logo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard.vue?vue&type=template&id=098593e8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "padding-top": "20px"
    }
  }, [_vm._ssrNode("<div class=\"row\" data-v-098593e8>", "</div>", [_c('Logo', {
    staticStyle: {
      "margin-bottom": "50px",
      "margin-top": "50px"
    }
  })], 1), _vm._ssrNode(" <div class=\"row\" style=\"padding-bottom: 10px;\" data-v-098593e8><div class=\"col s12\" data-v-098593e8><b class=\"grey-text darken-4\" data-v-098593e8>Welcome,</b> <br data-v-098593e8> <b style=\"font-size: 20px; color: #757575;\" data-v-098593e8>" + _vm._ssrEscape(_vm._s(_vm.fullname)) + "</b></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-098593e8>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-098593e8>", "</div>", [_vm._ssrNode("<div class=\"col s12 center\" data-v-098593e8>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/crmd"
    }
  }, [_c('div', {
    staticClass: "card-panel orange"
  }, [_c('span', {
    staticClass: "white-text"
  }, [_c('i', {
    staticClass: "material-icons"
  }, [_vm._v("folder_open")]), _vm._v(" "), _c('h6', [_vm._v("CRMD")])])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col s12 center\" data-v-098593e8>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "./about"
    }
  }, [_c('div', {
    staticClass: "card-panel red lighten-1"
  }, [_c('span', {
    staticClass: "white-text"
  }, [_c('i', {
    staticClass: "material-icons"
  }, [_vm._v("info")]), _vm._v(" "), _c('h6', [_vm._v("About")])])])])], 1), _vm._ssrNode(" <div class=\"col s12 center\" data-v-098593e8><div class=\"card-panel red\" data-v-098593e8><span class=\"white-text\" data-v-098593e8><i class=\"material-icons\" data-v-098593e8>lock</i> <h6 data-v-098593e8>Logout</h6></span></div></div>")], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/dashboard.vue?vue&type=template&id=098593e8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard.vue?vue&type=script&lang=js&
/* harmony default export */ var dashboardvue_type_script_lang_js_ = ({
  layout: 'admin_main',
  data() {
    return {
      fullname: '',
      name: '',
      email: '',
      message: '',
      scheduleList: []
    };
  },
  methods: {
    logOut() {
      if (false) {}
    },
    async getFullname() {
      this.fullname = localStorage.getItem('fullname');
    }
  },
  created() {
    this.getFullname();
  }
});
// CONCATENATED MODULE: ./pages/dashboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_dashboardvue_type_script_lang_js_ = (dashboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/dashboard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_dashboardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "098593e8",
  "6343ef8a"
  
)

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Logo: __webpack_require__(41).default})


/***/ })

};;
//# sourceMappingURL=dashboard.js.map