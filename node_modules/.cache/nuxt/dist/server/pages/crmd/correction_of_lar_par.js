exports.ids = [10];
exports.modules = {

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/crmd/correction_of_lar_par.vue?vue&type=template&id=27a6f3fb&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "padding-top": "20px"
    }
  }, [_vm._ssrNode("<div class=\"row\" data-v-27a6f3fb>", "</div>", [_c('nuxt-link', {
    staticClass: "red white-text btn",
    attrs: {
      "to": "./"
    }
  }, [_vm._v("\n            Back\n        ")])], 1), _vm._ssrNode(" <div class=\"row\" data-v-27a6f3fb><div data-v-27a6f3fb><h6 class=\"red-text center\" style=\"font-weight: 100\" data-v-27a6f3fb>\n                Correction of LAR &amp; PAR\n            </h6></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-27a6f3fb>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><div" + _vm._ssrClass("row", {
    'hide': _vm.hideModal
  }) + " data-v-27a6f3fb><div class=\"row\" data-v-27a6f3fb><a href=\"#!\" class=\"waves-effect waves-red btn-large white red-text right\" data-v-27a6f3fb>DONE</a></div> <div class=\"row\" data-v-27a6f3fb><div class=\"container\" data-v-27a6f3fb><div class=\"row\" data-v-27a6f3fb><div class=\"col s12 center\" data-v-27a6f3fb><h6 data-v-27a6f3fb>Sign here!</h6></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12 center\" data-v-27a6f3fb><canvas id=\"sig-canvas\" width=\"250px\" data-v-27a6f3fb>\n                                    Your phone not supporting signature\n                                </canvas></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12 center\" data-v-27a6f3fb><div class=\"col s6\" data-v-27a6f3fb><button id=\"sig-submitBtn\" class=\"btn btn-large red\" data-v-27a6f3fb>Save</button></div> <div class=\"col s6\" data-v-27a6f3fb><button id=\"sig-clearBtn\" class=\"btn btn-large red\" data-v-27a6f3fb>Clear</button></div></div></div> <br data-v-27a6f3fb> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><textarea id=\"sig-dataUrl\" rows=\"5\" class=\"form-control hide\" data-v-27a6f3fb>Data URL for your signature will go here!</textarea></div></div></div></div></div></div></div> "), _vm._ssrNode("<div" + _vm._ssrClass("row", {
    'hide': _vm.hideForm
  }) + " data-v-27a6f3fb>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-27a6f3fb>", "</div>", [_vm._ssrNode("<form style=\"margin-top: 20px\" data-v-27a6f3fb>", "</form>", [_vm._ssrNode("<div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><input type=\"text\" placeholder=\"Account number\"" + _vm._ssrAttr("value", _vm.account_number) + " data-v-27a6f3fb></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><input type=\"text\" placeholder=\"Account type\"" + _vm._ssrAttr("value", _vm.account_type) + " data-v-27a6f3fb></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><input type=\"text\" placeholder=\"Account name\"" + _vm._ssrAttr("value", _vm.account_name) + " data-v-27a6f3fb></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><input type=\"text\" placeholder=\"Tarrif\"" + _vm._ssrAttr("value", _vm.tarrif) + " data-v-27a6f3fb></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><input type=\"text\" placeholder=\"Address\"" + _vm._ssrAttr("value", _vm.address) + " data-v-27a6f3fb></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-27a6f3fb>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-27a6f3fb>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.business_unit,
      expression: "business_unit"
    }],
    staticClass: "custom-select",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.business_unit = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Business Unit *")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Abule Egba"
    }
  }, [_vm._v("Abule Egba")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Akowonjo"
    }
  }, [_vm._v("Akowonjo")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Ikeja"
    }
  }, [_vm._v("Ikeja")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Ikorodu"
    }
  }, [_vm._v("Ikorodu")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Oshodi"
    }
  }, [_vm._v("Oshodi")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Shomolu"
    }
  }, [_vm._v("Shomolu")])])])]), _vm._ssrNode(" <br data-v-27a6f3fb> "), _vm._ssrNode("<div class=\"row\" data-v-27a6f3fb>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-27a6f3fb>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.undertaking_one,
      expression: "undertaking_one"
    }],
    staticClass: "custom-select",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.undertaking_one = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Undertaking *")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ABORU"
    }
  }, [_vm._v("ABORU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ABULE-ODU"
    }
  }, [_vm._v("ABULE-ODU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ABULE-TAYLOR"
    }
  }, [_vm._v("ABULE-TAYLOR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ADIYAN"
    }
  }, [_vm._v("ADIYAN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AGO"
    }
  }, [_vm._v("AGO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AIT"
    }
  }, [_vm._v("AIT")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AJAO"
    }
  }, [_vm._v("AJAO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AKUTE"
    }
  }, [_vm._v("AKUTE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AMUWO"
    }
  }, [_vm._v("AMUWO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ANIFOWOSHE"
    }
  }, [_vm._v("ANIFOWOSHE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ANTHONY MEGA"
    }
  }, [_vm._v("ANTHONY MEGA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AYANGBUREN"
    }
  }, [_vm._v("AYANGBUREN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AYOBO"
    }
  }, [_vm._v("AYOBO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BARIGA"
    }
  }, [_vm._v("BARIGA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DOPEMU"
    }
  }, [_vm._v("DOPEMU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "EGBEDA"
    }
  }, [_vm._v("EGBEDA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "EPE"
    }
  }, [_vm._v("EPE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "FAGBA"
    }
  }, [_vm._v("FAGBA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "GOWON-ESTATE"
    }
  }, [_vm._v("GOWON-ESTATE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IDIMU"
    }
  }, [_vm._v("IDIMU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IFAKO"
    }
  }, [_vm._v("IFAKO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IGANDO"
    }
  }, [_vm._v("IGANDO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IGBOBI"
    }
  }, [_vm._v("IGBOBI")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IGBOBI MEGA"
    }
  }, [_vm._v("IGBOBI MEGA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IGBOGBO"
    }
  }, [_vm._v("IGBOGBO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IJAIYE"
    }
  }, [_vm._v("IJAIYE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IJEDE"
    }
  }, [_vm._v("IJEDE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IJEGUN"
    }
  }, [_vm._v("IJEGUN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IJU"
    }
  }, [_vm._v("IJU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IKOSI"
    }
  }, [_vm._v("IKOSI")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IKOTUN"
    }
  }, [_vm._v("IKOTUN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ILUPEJU"
    }
  }, [_vm._v("ILUPEJU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ILUPEJU MEGA"
    }
  }, [_vm._v("ILUPEJU MEGA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IPAJA"
    }
  }, [_vm._v("IPAJA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ISOLO"
    }
  }, [_vm._v("ISOLO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "KETU"
    }
  }, [_vm._v("KETU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LAMBE"
    }
  }, [_vm._v("LAMBE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LASUNWON"
    }
  }, [_vm._v("LASUNWON")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MAGODO"
    }
  }, [_vm._v("MAGODO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MAGODO MEGA"
    }
  }, [_vm._v("MAGODO MEGA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MENDE"
    }
  }, [_vm._v("MENDE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OBA AKRAN"
    }
  }, [_vm._v("OBA AKRAN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ODOGUNYAN"
    }
  }, [_vm._v("ODOGUNYAN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OGBA"
    }
  }, [_vm._v("OGBA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OGUDU"
    }
  }, [_vm._v("OGUDU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OJODU"
    }
  }, [_vm._v("OJODU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OKE-AFA"
    }
  }, [_vm._v("OKE-AFA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OKE-IRA"
    }
  }, [_vm._v("OKE-IRA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OKE-ODO"
    }
  }, [_vm._v("OKE-ODO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OKOTA"
    }
  }, [_vm._v("OKOTA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OLATEJU"
    }
  }, [_vm._v("OLATEJU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OLOWORA"
    }
  }, [_vm._v("OLOWORA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OREGUN"
    }
  }, [_vm._v("OREGUN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ORILE-AGEGE"
    }
  }, [_vm._v("ORILE-AGEGE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OSHODI"
    }
  }, [_vm._v("OSHODI")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OWORO"
    }
  }, [_vm._v("OWORO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OWOROSHONKI MEGA"
    }
  }, [_vm._v("OWOROSHONKI MEGA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OWUTU"
    }
  }, [_vm._v("OWUTU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PTC"
    }
  }, [_vm._v("PTC")])])])]), _vm._ssrNode(" <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><input type=\"text\" placeholder=\"DT name\"" + _vm._ssrAttr("value", _vm.dt_name) + " data-v-27a6f3fb></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><input type=\"text\" placeholder=\"Phone number\"" + _vm._ssrAttr("value", _vm.phone_number) + " data-v-27a6f3fb></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><input type=\"text\" placeholder=\"Location\"" + _vm._ssrAttr("value", _vm.location) + " data-v-27a6f3fb></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><input type=\"text\" placeholder=\"Meter number\"" + _vm._ssrAttr("value", _vm.meter_number) + " data-v-27a6f3fb></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><input type=\"text\" placeholder=\"PAR\"" + _vm._ssrAttr("value", _vm.par) + " data-v-27a6f3fb></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><input type=\"text\" placeholder=\"LAR\"" + _vm._ssrAttr("value", _vm.lar) + " data-v-27a6f3fb></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><input type=\"text\" placeholder=\"Dials\"" + _vm._ssrAttr("value", _vm.dials) + " data-v-27a6f3fb></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><input type=\"text\" placeholder=\"Consumption\"" + _vm._ssrAttr("value", _vm.consumption) + " data-v-27a6f3fb></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><h6 class=\"red-text\" data-v-27a6f3fb>\n                            Pic 1\n                        </h6> <button class=\"btn red btn-large\" data-v-27a6f3fb><i class=\"material-icons white-text\" data-v-27a6f3fb>camera_alt</i></button></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><img id=\"output-pic-of-the-service-wire-from-pole-to-metering-point\" class=\"responsive-img\" data-v-27a6f3fb></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><h6 class=\"red-text\" data-v-27a6f3fb>\n                            Pic 2\n                        </h6> <button class=\"btn red btn-large\" data-v-27a6f3fb><i class=\"material-icons white-text\" data-v-27a6f3fb>camera_alt</i></button></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><img id=\"output-pic-of-building\" class=\"responsive-img\" data-v-27a6f3fb></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><h6 class=\"red-text\" data-v-27a6f3fb>\n                            Pic 3\n                        </h6> <button class=\"btn red btn-large\" data-v-27a6f3fb><i class=\"material-icons white-text\" data-v-27a6f3fb>camera_alt</i></button></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><img id=\"output-pic-of-installation-cut-out-metering-point-one\" class=\"responsive-img\" data-v-27a6f3fb></div></div> <div class=\"row\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><h6 class=\"red-text\" data-v-27a6f3fb>Remarks:</h6> <textarea placeholder=\"Remarks\" class=\"materialize-textarea\" data-v-27a6f3fb>" + _vm._ssrEscape(_vm._s(_vm.remarks)) + "</textarea></div></div> <div class=\"row center\" data-v-27a6f3fb></div> <div class=\"row center\" data-v-27a6f3fb><div class=\"col s12\" data-v-27a6f3fb><button class=\"btn btn-large red\" style=\"width: 300px; margin-top: 20px; margin-bottom: 20px;\" data-v-27a6f3fb>Submit</button></div></div>")], 2)])])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/crmd/correction_of_lar_par.vue?vue&type=template&id=27a6f3fb&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/crmd/correction_of_lar_par.vue?vue&type=script&lang=js&
var correction_of_lar_parvue_type_script_lang_js_ = __webpack_require__(51);

// CONCATENATED MODULE: ./pages/crmd/correction_of_lar_par.vue?vue&type=script&lang=js&
 /* harmony default export */ var crmd_correction_of_lar_parvue_type_script_lang_js_ = (correction_of_lar_parvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/crmd/correction_of_lar_par.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(89)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  crmd_correction_of_lar_parvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "27a6f3fb",
  "39d8eaf8"
  
)

/* harmony default export */ var correction_of_lar_par = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_capacitor_geolocation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(browser_image_compression__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_capacitor_camera__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["a"] = ({
  layout: 'admin_main',
  data() {
    return {
      account_number: '',
      account_type: '',
      account_name: '',
      tarrif: '',
      address: '',
      business_unit: '',
      undertaking_one: '',
      dt_name: '',
      phone_number: '',
      location: '',
      meter_number: '',
      par: '',
      lar: '',
      dials: '',
      consumption: '',
      pic_of_the_service_wire_from_pole_to_metering_point: '',
      pic_of_building: null,
      pic_of_installation_cutout_metering_point: null,
      pic_of_installation_cutout_metering_point2: '',
      pic_of_installation_cutout_metering_point3: '',
      pic_of_meter_nameplate: '',
      pic_of_meter_nameplate2: '',
      pic_of_meter_nameplate3: '',
      pic_of_seal_as_met: '',
      pic_of_internal_connection_if_seal_is_broken: '',
      pic_of_internal_connection_if_seal_is_broken2: '',
      pic_of_bypass: '',
      pic_of_bypass2: '',
      pic_of_bypass3: '',
      pic_of_last_bill_vending_receipt: '',
      pic_of_last_bill_vending_receipt2: '',
      pic_of_last_bill_vending_receipt3: '',
      pic_of_invitation_notice_to_customer: '',
      remarks: '',
      additional_remark: '',
      // remember to clean variables
      customer_name: '',
      customer_category: '',
      customer_type: '',
      nature_of_business: '',
      feeder_name: '',
      dt_capacity: '',
      alignment_status: '',
      current_tariff: '',
      recommended_tariff: '',
      meter_status: '',
      meter_serial_number: '',
      replacement_meter_serial_number: '',
      /*here*/
      meter_manufacturer: '',
      meter_type_by_manufacturer: '',
      meter_payment_type: '',
      meter_type: '',
      meter_type_box: '',
      tube: false,
      mcb: '',
      meter_condition: '',
      no_of_service_wires: '',
      last_purchase_date: '',
      last_purchase_amount: '',
      credit_reading_on_meter: '',
      seal_status: '',
      old_seal: '',
      new_seal: '',
      inspection_conclusion: '',
      recommendation: '',
      further_remarks: '',
      signature: '',
      lat: '',
      long: '',
      dataURL: '',
      hideLoader: true,
      showSignature: false,
      hideModal: true,
      hideForm: false,
      img: "",
      scale: 100,
      quality: 50,
      originalSize: true,
      original: {},
      dataURI: ''
    };
  },
  methods: {
    trySign() {
      (function () {
        window.requestAnimFrame = function (callback) {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimaitonFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
          };
        }();
        var canvas = document.getElementById("sig-canvas");
        var ctx = canvas.getContext("2d");
        ctx.strokeStyle = "#222222";
        ctx.lineWidth = 4;
        var drawing = false;
        var mousePos = {
          x: 0,
          y: 0
        };
        var lastPos = mousePos;
        canvas.addEventListener("mousedown", function (e) {
          drawing = true;
          lastPos = getMousePos(canvas, e);
        }, false);
        canvas.addEventListener("mouseup", function (e) {
          drawing = false;
        }, false);
        canvas.addEventListener("mousemove", function (e) {
          mousePos = getMousePos(canvas, e);
        }, false);

        // Add touch event support for mobile
        canvas.addEventListener("touchstart", function (e) {}, false);
        canvas.addEventListener("touchmove", function (e) {
          var touch = e.touches[0];
          var me = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
          });
          canvas.dispatchEvent(me);
        }, false);
        canvas.addEventListener("touchstart", function (e) {
          mousePos = getTouchPos(canvas, e);
          var touch = e.touches[0];
          var me = new MouseEvent("mousedown", {
            clientX: touch.clientX,
            clientY: touch.clientY
          });
          canvas.dispatchEvent(me);
        }, false);
        canvas.addEventListener("touchend", function (e) {
          var me = new MouseEvent("mouseup", {});
          canvas.dispatchEvent(me);
        }, false);
        function getMousePos(canvasDom, mouseEvent) {
          var rect = canvasDom.getBoundingClientRect();
          return {
            x: mouseEvent.clientX - rect.left,
            y: mouseEvent.clientY - rect.top
          };
        }
        function getTouchPos(canvasDom, touchEvent) {
          var rect = canvasDom.getBoundingClientRect();
          return {
            x: touchEvent.touches[0].clientX - rect.left,
            y: touchEvent.touches[0].clientY - rect.top
          };
        }
        function renderCanvas() {
          if (drawing) {
            ctx.moveTo(lastPos.x, lastPos.y);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.stroke();
            lastPos = mousePos;
          }
        }

        // Prevent scrolling when touching the canvas
        document.body.addEventListener("touchstart", function (e) {
          if (e.target == canvas) {
            e.preventDefault();
          }
        }, false);
        document.body.addEventListener("touchend", function (e) {
          if (e.target == canvas) {
            e.preventDefault();
          }
        }, false);
        document.body.addEventListener("touchmove", function (e) {
          if (e.target == canvas) {
            e.preventDefault();
          }
        }, false);
        (function drawLoop() {
          requestAnimFrame(drawLoop);
          renderCanvas();
        })();
        function clearCanvas() {
          canvas.width = canvas.width;
        }

        // Set up the UI
        var sigText = document.getElementById("sig-dataUrl");
        var sigImage = document.getElementById("sig-image");
        var clearBtn = document.getElementById("sig-clearBtn");
        var submitBtn = document.getElementById("sig-submitBtn");
        clearBtn.addEventListener("click", function (e) {
          clearCanvas();
          sigText.innerHTML = "Data URL for your signature will go here!";
          sigImage.setAttribute("src", "");
        }, false);
        submitBtn.addEventListener("click", function (e) {
          var dataUrl = canvas.toDataURL();
          localStorage['vsmSignatureURL'] = dataUrl;
          sigText.innerHTML = dataUrl;
          sigImage.setAttribute("src", dataUrl);
          M.toast({
            html: '<b class="yellow-text">Signature saved</b>'
          });
        }, false);
      })();
    },
    getDataURLFromLocalStorage() {
      this.dataURI = localStorage.getItem('vsmSignatureURL');
      if (this.dataURI == null) {
        this.dataURI == '';
      } else {
        var byteString;
        if (this.dataURI.split(',')[0].indexOf('base64') >= 0) byteString = window.atob(this.dataURI.split(',')[1]);else byteString = decodeURI(dataURI.split(',')[1]);
        // separate out the mime component
        var mimeString = this.dataURI.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        var file = new Blob([ia], {
          type: mimeString
        });
        this.signature = new File([file], `ieOfficerSignature${file.type.replace('image/', '.')}`);
      }
    },
    // all test on compression comes here

    async imagePickerForTheServiceWireFromPoleToMeteringPoint() {
      // Call the element loader after the app has been rendered the first time
      Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_3__["defineCustomElements"])(window);
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/jpeg'
      });
      console.log(blob);
      this.doSomethingWithFilesImagePickerForTheServiceWireFromPoleToMeteringPoint(blob);
    },
    async doSomethingWithFilesImagePickerForTheServiceWireFromPoleToMeteringPoint(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-the-service-wire-from-pole-to-metering-point');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // console.log(`${compressedFile.size / 50 / 50} MB`)

        this.pic_of_the_service_wire_from_pole_to_metering_point = new File([compressedFile], `pictureOfTheServiceWireFromPole${compressedFile.type.replace('image/', '.')}`);
        console.log(this.pic_of_the_service_wire_from_pole_to_metering_point);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    // image picker for building
    async imagePickerBuilding() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      console.log(blob);
      const file = blob;
      this.doSomethingWithFilesImagePickerBuilding(blob);
    },
    async doSomethingWithFilesImagePickerBuilding(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-building');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB
        console.log(compressedFile);

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_building = new File([compressedFile], `pictureOfTheBuilding${compressedFile.type.replace('image/', '.')}`);
        console.log(this.pic_of_building);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // // console.log(error);
      }
    },
    // image picker for installation cut out metering point one
    async imagePickerForInstallationCutOutMeteringPointOne() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      console.log(blob);
      this.doSomethingWithFilesImagePickerForInstallationCutOutMeteringPointOne(blob);
    },
    async doSomethingWithFilesImagePickerForInstallationCutOutMeteringPointOne(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-installation-cut-out-metering-point-one');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_installation_cutout_metering_point = new File([compressedFile], `pictureOfInstallation${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // // console.log(error);
      }
    },
    // image picker for installation cut out metering point one
    async imagePickerForInstallationCutOutMeteringPointOne2() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      console.log(blob);
      this.doSomethingWithFilesImagePickerForInstallationCutOutMeteringPointOne2(blob);
    },
    async doSomethingWithFilesImagePickerForInstallationCutOutMeteringPointOne2(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-installation-cut-out-metering-point-one2');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_installation_cutout_metering_point2 = new File([compressedFile], `pictureOfInstallation2${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // // console.log(error);
      }
    },
    // image picker for installation cut out metering point one3
    async imagePickerForInstallationCutOutMeteringPointOne3() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      console.log(blob);
      this.doSomethingWithFilesImagePickerForInstallationCutOutMeteringPointOne3(blob);
    },
    async doSomethingWithFilesImagePickerForInstallationCutOutMeteringPointOne3(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-installation-cut-out-metering-point-one3');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_installation_cutout_metering_point3 = new File([compressedFile], `pictureOfInstallation3${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // // console.log(error);
      }
    },
    // pic of meter nameplate one
    async imagePickerForMeteringNameplateOne() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // // console.log(blob)

      this.doSomethingWithFilesImagePickerForMeteringNameplateOne(blob);
    },
    async doSomethingWithFilesImagePickerForMeteringNameplateOne(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-meter-nameplate-one');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_meter_nameplate = new File([compressedFile], `meterNameplate${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // // console.log(error);
      }
    },
    // pic of meter nameplate one 2
    async imagePickerForMeteringNameplateOne2() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // // console.log(blob)

      this.doSomethingWithFilesImagePickerForMeteringNameplateOne2(blob);
    },
    async doSomethingWithFilesImagePickerForMeteringNameplateOne2(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-meter-nameplate-one2');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_meter_nameplate2 = new File([compressedFile], `meterNameplate2${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // // console.log(error);
      }
    },
    // pic of meter nameplate one 3
    async imagePickerForMeteringNameplateOne3() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // // console.log(blob)

      this.doSomethingWithFilesImagePickerForMeteringNameplateOne3(blob);
    },
    async doSomethingWithFilesImagePickerForMeteringNameplateOne3(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-meter-nameplate-one3');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_meter_nameplate3 = new File([compressedFile], `meterNameplate3${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // // console.log(error);
      }
    },
    // pic of seal as met
    async imagePickerForSealAsMet() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // // console.log(blob)

      this.doSomethingWithFilesImagePickerForSealAsMet(blob);
    },
    async doSomethingWithFilesImagePickerForSealAsMet(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-seal-as-met');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_seal_as_met = new File([compressedFile], `pictureOfSealAsMet${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // // console.log(error);
      }
    },
    // pic of internal connection if seal is broken
    async imagePickerForInternalConnectionIfSealIsBroken() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // // console.log(blob)

      this.doSomethingWithFilesImagePickerForInternalConnectionIfSealIsBroken(blob);
    },
    async doSomethingWithFilesImagePickerForInternalConnectionIfSealIsBroken(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-internal-connection-if-seal-is-broken');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_internal_connection_if_seal_is_broken = new File([compressedFile], `pictureOfInternalConnection${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // console.log(error);
      }
    },
    // pic of internal connection if seal is broken
    async imagePickerForInternalConnectionIfSealIsBroken2() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // // console.log(blob)

      this.doSomethingWithFilesImagePickerForInternalConnectionIfSealIsBroken2(blob);
    },
    async doSomethingWithFilesImagePickerForInternalConnectionIfSealIsBroken2(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-internal-connection-if-seal-is-broken2');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_internal_connection_if_seal_is_broken2 = new File([compressedFile], `pictureOfInternalConnection2${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // console.log(error);
      }
    },
    // pic of bypass
    async imagePickerForByPass() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // console.log(blob)

      this.doSomethingWithFilesImagePickerForByPass(blob);
    },
    async doSomethingWithFilesImagePickerForByPass(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-bypass');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_bypass = new File([compressedFile], `pictureOfBypass${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // console.log(error);
      }
    },
    // pic of bypass2
    async imagePickerForByPass2() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // console.log(blob)
      this.doSomethingWithFilesImagePickerForByPass2(blob);
    },
    async doSomethingWithFilesImagePickerForByPass2(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-bypass2');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_bypass2 = new File([compressedFile], `pictureOfBypass2${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // console.log(error);
      }
    },
    // pic of bypass3
    async imagePickerForByPass3() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // console.log(blob)
      this.doSomethingWithFilesImagePickerForByPass3(blob);
    },
    async doSomethingWithFilesImagePickerForByPass3(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-bypass3');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_bypass3 = new File([compressedFile], `pictureOfBypass3${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // console.log(error);
      }
    },
    // pic of last bill vending receipt
    async imagePickerForLastBillVendingReceipt() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // console.log(blob)
      this.doSomethingWithFilesImagePickerForLastBillVendingReceipt(blob);
    },
    async doSomethingWithFilesImagePickerForLastBillVendingReceipt(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-last-billing-vending-receipt');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_last_bill_vending_receipt = new File([compressedFile], `lastBillReceipt${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // console.log(error); 
      }
    },
    // pic of last bill vending receipt2
    async imagePickerForLastBillVendingReceipt2() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // console.log(blob)
      this.doSomethingWithFilesImagePickerForLastBillVendingReceipt2(blob);
    },
    async doSomethingWithFilesImagePickerForLastBillVendingReceipt2(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-last-billing-vending-receipt2');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_last_bill_vending_receipt2 = new File([compressedFile], `lastBillReceipt2${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // console.log(error);
      }
    },
    // pic of last bill vending receipt3
    async imagePickerForLastBillVendingReceipt3() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // console.log(blob)
      this.doSomethingWithFilesImagePickerForLastBillVendingReceipt3(blob);
    },
    async doSomethingWithFilesImagePickerForLastBillVendingReceipt3(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-last-billing-vending-receipt3');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_last_bill_vending_receipt3 = new File([compressedFile], `lastBillReceipt3${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // console.log(error);
      }
    },
    // pic of invitation notice to customer
    async imagePickerForInvitationNoticeToCustomer() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // console.log(blob)
      this.doSomethingWithFilesImagePickerForInvitationNoticeToCustomer(blob);
    },
    async doSomethingWithFilesImagePickerForInvitationNoticeToCustomer(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-invitation-notice-customer');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_invitation_notice_to_customer = new File([compressedFile], `invitationNoticeToCustomer${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        console.log(this.pic_of_invitation_notice_to_customer);
      } catch (error) {
        // console.log(error);
      }
    },
    async sumbitVSM() {
      this.hideLoader = false;
      this.business_unit = this.business_unit.trim();
      this.undertaking_one = this.undertaking_one.trim();
      this.customer_name = this.customer_name.trim();
      this.address = this.address.trim();
      this.feeder_name = this.feeder_name.trim();
      this.dt_name = this.dt_name.trim();
      this.alignment_status = this.alignment_status.trim();
      this.recommended_tariff = this.recommended_tariff.trim();
      this.meter_type_by_manufacturer = this.meter_type_by_manufacturer.trim();
      this.credit_reading_on_meter = this.credit_reading_on_meter.trim();
      this.further_remarks = this.further_remarks.trim();
      this.phone_number = this.phone_number.trim();
      this.inspection_conclusion = this.inspection_conclusion.trim();
      this.getDataURLFromLocalStorage();
      var today = new Date(this.last_purchase_date);
      const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
      let month = months[today.getMonth()];
      var date = month + ' ' + today.getDate() + ', ' + today.getFullYear();
      var time = this.formatAMPM(new Date());
      this.last_purchase_date = date + ' ' + time;
      if (this.business_unit == '' || this.inspection_conclusion == '') {
        M.toast({
          html: '<b class="red-text">Fill all the field marked with *</b>'
        });
        this.hideLoader = true;
      } else {
        var checkList = "";
        checkList = {
          oldSealNumber: this.old_seal,
          businessUnit: this.business_unit,
          meterPaymentType: this.meter_payment_type,
          meterMake: this.meter_manufacturer,
          recommendation: this.recommendation,
          mcb: this.mcb,
          recommendedEnergyRecovery: "",
          recommendedTariff: this.recommended_tariff,
          remainingTime: "",
          customerType: this.customer_type,
          customerCategory: this.customer_category,
          dtName: this.dt_name,
          energyData: "",
          readingTime1: "",
          longitude: this.long,
          currentTariff: this.current_tariff,
          customersSignature: "",
          editEndTime: "",
          customerName: this.customer_name,
          meterBoxType: this.meter_type_box,
          meteringStatus: this.meter_status,
          tube: this.tube,
          numberOfServiceWires: this.no_of_service_wires,
          feederName: this.feeder_name,
          ieOfficersName: localStorage.getItem('fullname'),
          lastUpdateTime: "",
          meteringInitiative: '',
          customersName: this.customer_name,
          meterNumber: this.meter_serial_number,
          activity: '',
          newSealNumber: this.new_seal,
          latitude: this.lat,
          creditOnMeter: this.credit_reading_on_meter,
          simSerialNumber: "",
          readingTime: "",
          phoneNumber: this.phone_number,
          editStartTime: "",
          address: this.address,
          srNumber: this.meter_serial_number,
          meterSerialNumber: this.meter_serial_number,
          dtCapacity: this.dt_capacity,
          accountNumber: this.account_number,
          furtherRemarks: this.further_remarks,
          undertaking: this.undertaking_one,
          meterManufacturer: this.meter_manufacturer,
          meterType: this.meter_type,
          serviceWireToMeter: this.no_of_service_wires,
          inspectionConclusion: this.inspection_conclusion,
          user: localStorage.getItem('fullname'),
          natureOfBusiness: this.nature_of_business,
          alignmentStatus: this.alignment_status,
          replacementMeterSerialNumber: this.replacement_meter_serial_number,
          meterTypeByManufacturer: this.meter_type_by_manufacturer,
          meterCondition: this.meter_condition,
          lastPurchaseDate: this.last_purchase_date,
          lastPurchaseAmount: this.last_purchase_amount,
          sealStatus: this.seal_status
        };
        checkList = JSON.stringify(checkList);
        var formData = new FormData();
        formData.append("files", this.pic_of_the_service_wire_from_pole_to_metering_point);
        formData.append("files", this.pic_of_internal_connection_if_seal_is_broken);
        // formData.append("files", this.pic_of_internal_connection_if_seal_is_broken2);
        formData.append("files", this.pic_of_installation_cutout_metering_point);
        formData.append("files", this.pic_of_installation_cutout_metering_point2);
        formData.append("files", this.pic_of_installation_cutout_metering_point3);
        formData.append("files", this.pic_of_invitation_notice_to_customer);
        formData.append("files", this.pic_of_last_bill_vending_receipt);
        formData.append("files", this.pic_of_last_bill_vending_receipt2);
        formData.append("files", this.pic_of_last_bill_vending_receipt3);
        formData.append("files", this.pic_of_meter_nameplate);
        formData.append("files", this.pic_of_meter_nameplate2);
        formData.append("files", this.pic_of_meter_nameplate3);
        formData.append("files", this.pic_of_seal_as_met);
        formData.append("files", this.pic_of_building);
        formData.append("files", this.pic_of_bypass);
        formData.append("files", this.pic_of_bypass2);
        formData.append("files", this.pic_of_bypass3);
        formData.append('files', this.signature);
        formData.append("checklist", checkList);

        // console.log(this.signature)
        // console.log('clicked')

        try {
          const rawResponse = await fetch('https://api.ikejaelectric.com/ieforms/1.0/checklist/submit', {
            method: 'POST',
            headers: {
              'Authorization': 'Bearer ' + localStorage.token,
              'Auth': 'Bearer fae96b00-8ef4-3473-bfb6-c5b1107b2c2b',
              'form_type': 'vsm'
            },
            body: formData
          });
          const response = await rawResponse.json();

          // console.log(response)

          if (response.code == '00') {
            this.hideLoader = true;
            this.$router.push('./sent');
          } else if (response.status == 500) {
            console.log(response.status);
            M.toast({
              html: `<b class="red-text">Session expired</b>`
            });
            if (false) {}
          }
        } catch (error) {
          // console.log(error)
          M.toast({
            html: `<b class="red-text">${error}</b>`
          });
        }
      }
    },
    formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      var ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
      return strTime;
    },
    // addOldSeal() {
    //     this.old_seal.push({
    //         oldSealValue: ''
    //     })
    // },

    // removeOldSeal(index) {
    //     this.old_seal.splice(index, 1)
    // },

    // clearOldSeal() {
    //     this.old_seal = [
    //         {
    //             oldSealValue: ''
    //         }
    // ]
    // },

    // addNewSeal() {
    //     this.new_seal.push({
    //         newSealValue: ''
    //     })
    // },

    // removeNewSeal(index) {
    //     this.new_seal.splice(index, 1)
    // },

    // clearNewSeal() {
    //     this.new_seal = [
    //         {
    //             newSealValue: ''
    //         }
    //     ]
    // },

    // get longitude and latitude
    async printCurrentPosition() {
      const coordinates = await _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_0__["Geolocation"].getCurrentPosition();
      this.lat = coordinates.coords.latitude;
      this.long = coordinates.coords.longitude;
    },
    // let me try to create a new signature
    showSignatureModule() {
      this.hideModal = false;
      this.hideForm = true;
    },
    hideSignatureModule() {
      this.hideModal = true;
      this.hideForm = false;
    }
  },
  mounted() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, options);
    });
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems);
    });
    this.trySign();
  },
  created() {
    this.printCurrentPosition();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(34)["URL"]))

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0beace9f", content, true, context)
};

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correction_of_lar_par_vue_vue_type_style_index_0_id_27a6f3fb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correction_of_lar_par_vue_vue_type_style_index_0_id_27a6f3fb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correction_of_lar_par_vue_vue_type_style_index_0_id_27a6f3fb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correction_of_lar_par_vue_vue_type_style_index_0_id_27a6f3fb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correction_of_lar_par_vue_vue_type_style_index_0_id_27a6f3fb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#sig-canvas[data-v-27a6f3fb]{border:2px dotted #ccc;border-radius:15px;cursor:crosshair}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=correction_of_lar_par.js.map