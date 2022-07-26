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

/***/ "./src/styles/components/component-show-more.css":
/*!*******************************************************!*\
  !*** ./src/styles/components/component-show-more.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://alessi-dawn/./src/styles/components/component-show-more.css?");

/***/ }),

/***/ "./src/scripts/components/component-show-more.js":
/*!*******************************************************!*\
  !*** ./src/scripts/components/component-show-more.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_components_component_show_more_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/components/component-show-more.css */ \"./src/styles/components/component-show-more.css\");\n\n\nclass ShowMoreButton extends HTMLElement {\n  constructor() {\n    super();\n    const button = this.querySelector('button');\n    button.addEventListener('click', (event) => {\n      this.expandShowMore(event);\n      const nextElementToFocus = event.target.closest('.parent-display').querySelector('.show-more-item')\n      if (nextElementToFocus && !nextElementToFocus.classList.contains('hidden')) {\n        nextElementToFocus.querySelector('input').focus()\n      }\n    });\n  }\n  expandShowMore(event) {\n    const parentDisplay = event.target.closest('[id^=\"Show-More-\"]').closest('.parent-display');\n    const parentWrap = parentDisplay.querySelector('.parent-wrap');\n    this.querySelectorAll('.label-text').forEach(element => element.classList.toggle('hidden'));\n    parentDisplay.querySelectorAll('.show-more-item').forEach(item => item.classList.toggle('hidden'))\n  }\n}\n\ncustomElements.define('show-more-button', ShowMoreButton);\n\n\n\n//# sourceURL=webpack://alessi-dawn/./src/scripts/components/component-show-more.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/components/component-show-more.js");
/******/ 	
/******/ })()
;