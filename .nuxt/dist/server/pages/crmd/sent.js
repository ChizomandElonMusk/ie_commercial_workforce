exports.ids = [13];
exports.modules = {

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(174);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("de5d763e", content, true, context)
};

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_vue_vue_type_style_index_0_id_b98ced06_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_vue_vue_type_style_index_0_id_b98ced06_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_vue_vue_type_style_index_0_id_b98ced06_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_vue_vue_type_style_index_0_id_b98ced06_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_vue_vue_type_style_index_0_id_b98ced06_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#sig-canvas[data-v-b98ced06]{border:2px dotted #ccc;border-radius:15px;cursor:crosshair}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/crmd/sent.vue?vue&type=template&id=b98ced06&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticStyle: {
      "padding-left": "40px",
      "padding-right": "40px",
      "padding-top": "20px"
    }
  }, [_vm._ssrNode("<div class=\"row\" data-v-b98ced06></div> <div class=\"row\" data-v-b98ced06></div> "), _vm._ssrNode("<div class=\"row\" style=\"margin-top: 200px\" data-v-b98ced06>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-b98ced06>", "</div>", [_vm._ssrNode("<div class=\"col s12 center\" data-v-b98ced06><i class=\"material-icons large red-text\" data-v-b98ced06>send</i></div> <div class=\"col s12 center red-text\" data-v-b98ced06><h6 data-v-b98ced06>\n                Form has been submited\n            </h6></div> "), _vm._ssrNode("<div class=\"col s12 center red-text\" data-v-b98ced06>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-b98ced06>", "</div>", [_vm._ssrNode("<div class=\"col s12 center\" data-v-b98ced06>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "./"
    }
  }, [_c('div', {
    staticClass: "card-panel orange"
  }, [_c('span', {
    staticClass: "white-text"
  }, [_c('h6', [_vm._v("Back to forms")])])])])], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\" data-v-b98ced06>", "</div>", [_vm._ssrNode("<div class=\"col s12 center\" data-v-b98ced06>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "../dashboard_ie_force"
    }
  }, [_c('div', {
    staticClass: "card-panel red"
  }, [_c('span', {
    staticClass: "white-text"
  }, [_c('h6', [_vm._v("Back to menu")])])])])], 1)])], 2)], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/crmd/sent.vue?vue&type=template&id=b98ced06&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/crmd/sent.vue?vue&type=script&lang=js
/* harmony default export */ var sentvue_type_script_lang_js = ({
  layout: 'admin_main',
  data() {
    return {};
  },
  methods: {},
  mounted() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, options);
    });
  },
  created() {}
});
// CONCATENATED MODULE: ./pages/crmd/sent.vue?vue&type=script&lang=js
 /* harmony default export */ var crmd_sentvue_type_script_lang_js = (sentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/crmd/sent.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(173)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  crmd_sentvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b98ced06",
  "10a2be30"
  
)

/* harmony default export */ var sent = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sent.js.map