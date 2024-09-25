exports.ids = [34];
exports.modules = {

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/menu.vue?vue&type=template&id=25f042a3&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "padding-top": "20px"
    }
  }, [_vm._ssrNode("<div class=\"row\" data-v-25f042a3><div class=\"col s12\" data-v-25f042a3><b class=\"red white-text btn\" data-v-25f042a3><i class=\"material-icons\" data-v-25f042a3>lock</i></b> <b class=\"grey-text btn disabled\" data-v-25f042a3>Menu</b></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-25f042a3>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-25f042a3>", "</div>", [_vm._ssrNode("<div class=\"col s12 center\" data-v-25f042a3>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/ie_force"
    }
  }, [_c('div', {
    staticClass: "card-panel orange"
  }, [_c('span', {
    staticClass: "white-text"
  }, [_c('i', {
    staticClass: "material-icons"
  }, [_vm._v("folder_open")]), _vm._v(" "), _c('h6', [_vm._v("IE Force")])])])])], 1)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/menu.vue?vue&type=template&id=25f042a3&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/menu.vue?vue&type=script&lang=js
/* harmony default export */ var menuvue_type_script_lang_js = ({
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
      localStorage.setItem('service_type', '');
      localStorage.setItem('meter_number', '');
      localStorage.setItem('token', '');
      localStorage.setItem('forms', '');
      localStorage.setItem('userId', '');
    },
    async getFullname() {
      // this.fullname = localStorage.getItem('fullname')
    }
  },
  mounted() {
    localStorage.setItem('service_type', '');
    localStorage.setItem('meter_number', '');
  },
  created() {

    // this.getFullname()
  }
});
// CONCATENATED MODULE: ./pages/menu.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_menuvue_type_script_lang_js = (menuvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/menu.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_menuvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "25f042a3",
  "534a03f0"
  
)

/* harmony default export */ var menu = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=menu.js.map