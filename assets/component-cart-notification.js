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

/***/ "./src/styles/components/component-cart-notification.css":
/*!***************************************************************!*\
  !*** ./src/styles/components/component-cart-notification.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://alessi-dawn/./src/styles/components/component-cart-notification.css?");

/***/ }),

/***/ "./src/scripts/components/component-cart-notification.js":
/*!***************************************************************!*\
  !*** ./src/scripts/components/component-cart-notification.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_components_component_cart_notification_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/components/component-cart-notification.css */ \"./src/styles/components/component-cart-notification.css\");\n\n\nclass CartNotification extends HTMLElement {\n  constructor() {\n    super();\n\n    this.notification = document.getElementById('cart-notification');\n    this.header = document.querySelector('sticky-header');\n    this.onBodyClick = this.handleBodyClick.bind(this);\n\n    this.notification.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());\n    this.querySelectorAll('button[type=\"button\"]').forEach((closeButton) =>\n      closeButton.addEventListener('click', this.close.bind(this))\n    );\n  }\n\n  open() {\n    this.notification.classList.add('animate', 'active');\n\n    this.notification.addEventListener('transitionend', () => {\n      this.notification.focus();\n      trapFocus(this.notification);\n    }, { once: true });\n\n    document.body.addEventListener('click', this.onBodyClick);\n  }\n\n  close() {\n    this.notification.classList.remove('active');\n\n    document.body.removeEventListener('click', this.onBodyClick);\n\n    removeTrapFocus(this.activeElement);\n  }\n\n  renderContents(parsedState) {\n      this.cartItemKey = parsedState.key;\n      this.getSectionsToRender().forEach((section => {\n        document.getElementById(section.id).innerHTML =\n          this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);\n      }));\n\n      if (this.header) this.header.reveal();\n      this.open();\n  }\n\n  getSectionsToRender() {\n    return [\n      {\n        id: 'cart-notification-product',\n        selector: `[id=\"cart-notification-product-${this.cartItemKey}\"]`,\n      },\n      {\n        id: 'cart-notification-button'\n      },\n      {\n        id: 'cart-icon-bubble'\n      }\n    ];\n  }\n\n  getSectionInnerHTML(html, selector = '.shopify-section') {\n    return new DOMParser()\n      .parseFromString(html, 'text/html')\n      .querySelector(selector).innerHTML;\n  }\n\n  handleBodyClick(evt) {\n    const target = evt.target;\n    if (target !== this.notification && !target.closest('cart-notification')) {\n      const disclosure = target.closest('details-disclosure, header-menu');\n      this.activeElement = disclosure ? disclosure.querySelector('summary') : null;\n      this.close();\n    }\n  }\n\n  setActiveElement(element) {\n    this.activeElement = element;\n  }\n}\n\ncustomElements.define('cart-notification', CartNotification);\n\n\n//# sourceURL=webpack://alessi-dawn/./src/scripts/components/component-cart-notification.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/components/component-cart-notification.js");
/******/ 	
/******/ })()
;