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

/***/ "./src/styles/components/component-product-model.css":
/*!***********************************************************!*\
  !*** ./src/styles/components/component-product-model.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://alessi-dawn/./src/styles/components/component-product-model.css?");

/***/ }),

/***/ "./src/scripts/components/component-product-model.js":
/*!***********************************************************!*\
  !*** ./src/scripts/components/component-product-model.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_components_component_product_model_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/components/component-product-model.css */ \"./src/styles/components/component-product-model.css\");\n\n\nif (!customElements.get('product-model')) {\n  customElements.define('product-model', class ProductModel extends DeferredMedia {\n    constructor() {\n      super();\n    }\n\n    loadContent() {\n      super.loadContent();\n\n      Shopify.loadFeatures([\n        {\n          name: 'model-viewer-ui',\n          version: '1.0',\n          onLoad: this.setupModelViewerUI.bind(this),\n        },\n      ]);\n    }\n\n    setupModelViewerUI(errors) {\n      if (errors) return;\n\n      this.modelViewerUI = new Shopify.ModelViewerUI(this.querySelector('model-viewer'));\n    }\n  });\n}\n\nwindow.ProductModel = {\n  loadShopifyXR() {\n    Shopify.loadFeatures([\n      {\n        name: 'shopify-xr',\n        version: '1.0',\n        onLoad: this.setupShopifyXR.bind(this),\n      },\n    ]);\n  },\n\n  setupShopifyXR(errors) {\n    if (errors) return;\n\n    if (!window.ShopifyXR) {\n      document.addEventListener('shopify_xr_initialized', () =>\n        this.setupShopifyXR()\n      );\n      return;\n    }\n\n    document.querySelectorAll('[id^=\"ProductJSON-\"]').forEach((modelJSON) => {\n      window.ShopifyXR.addModels(JSON.parse(modelJSON.textContent));\n      modelJSON.remove();\n    });\n    window.ShopifyXR.setupXRElements();\n  },\n};\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  if (window.ProductModel) window.ProductModel.loadShopifyXR();\n});\n\n\n//# sourceURL=webpack://alessi-dawn/./src/scripts/components/component-product-model.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/components/component-product-model.js");
/******/ 	
/******/ })()
;