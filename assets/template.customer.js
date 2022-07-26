/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/templates/template-customer.css":
/*!****************************************************!*\
  !*** ./src/styles/templates/template-customer.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://alessi-dawn/./src/styles/templates/template-customer.css?");

/***/ }),

/***/ "./src/scripts/templates/template.customer.js":
/*!****************************************************!*\
  !*** ./src/scripts/templates/template.customer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_templates_template_customer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/templates/template-customer.css */ \"./src/styles/templates/template-customer.css\");\n\n\nconst selectors = {\n  customerAddresses: '[data-customer-addresses]',\n  addressCountrySelect: '[data-address-country-select]',\n  addressContainer: '[data-address]',\n  toggleAddressButton: 'button[aria-expanded]',\n  cancelAddressButton: 'button[type=\"reset\"]',\n  deleteAddressButton: 'button[data-confirm-message]'\n};\n\nconst attributes = {\n  expanded: 'aria-expanded',\n  confirmMessage: 'data-confirm-message'\n};\n\nclass CustomerAddresses {\n  constructor() {\n    this.elements = this._getElements();\n    if (Object.keys(this.elements).length === 0) return;\n    this._setupCountries();\n    this._setupEventListeners();\n  }\n\n  _getElements() {\n    const container = document.querySelector(selectors.customerAddresses);\n    return container ? {\n      container,\n      addressContainer: container.querySelector(selectors.addressContainer),\n      toggleButtons: document.querySelectorAll(selectors.toggleAddressButton),\n      cancelButtons: container.querySelectorAll(selectors.cancelAddressButton),\n      deleteButtons: container.querySelectorAll(selectors.deleteAddressButton),\n      countrySelects: container.querySelectorAll(selectors.addressCountrySelect)\n    } : {};\n  }\n\n  _setupCountries() {\n    if (Shopify && Shopify.CountryProvinceSelector) {\n      // eslint-disable-next-line no-new\n      new Shopify.CountryProvinceSelector('AddressCountryNew', 'AddressProvinceNew', {\n        hideElement: 'AddressProvinceContainerNew'\n      });\n      this.elements.countrySelects.forEach((select) => {\n        const formId = select.dataset.formId;\n        // eslint-disable-next-line no-new\n        new Shopify.CountryProvinceSelector(`AddressCountry_${formId}`, `AddressProvince_${formId}`, {\n          hideElement: `AddressProvinceContainer_${formId}`\n        });\n      });\n    }\n  }\n\n  _setupEventListeners() {\n    this.elements.toggleButtons.forEach((element) => {\n      element.addEventListener('click', this._handleAddEditButtonClick);\n    });\n    this.elements.cancelButtons.forEach((element) => {\n      element.addEventListener('click', this._handleCancelButtonClick);\n    });\n    this.elements.deleteButtons.forEach((element) => {\n      element.addEventListener('click', this._handleDeleteButtonClick);\n    });\n  }\n\n  _toggleExpanded(target) {\n    target.setAttribute(\n      attributes.expanded,\n      (target.getAttribute(attributes.expanded) === 'false').toString()\n    );\n  }\n\n  _handleAddEditButtonClick = ({ currentTarget }) => {\n    this._toggleExpanded(currentTarget);\n  }\n\n  _handleCancelButtonClick = ({ currentTarget }) => {\n    this._toggleExpanded(\n      currentTarget\n        .closest(selectors.addressContainer)\n        .querySelector(`[${attributes.expanded}]`)\n    )\n  }\n\n  _handleDeleteButtonClick = ({ currentTarget }) => {\n    // eslint-disable-next-line no-alert\n    if (confirm(currentTarget.getAttribute(attributes.confirmMessage))) {\n      Shopify.postLink(currentTarget.dataset.target, {\n        parameters: { _method: 'delete' },\n      });\n    }\n  }\n}\n\n\n//# sourceURL=webpack://alessi-dawn/./src/scripts/templates/template.customer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/templates/template.customer.js");
/******/ 	
/******/ })()
;