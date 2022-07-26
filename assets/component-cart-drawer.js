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

/***/ "./src/styles/components/component-cart-drawer.css":
/*!*********************************************************!*\
  !*** ./src/styles/components/component-cart-drawer.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://alessi-dawn/./src/styles/components/component-cart-drawer.css?");

/***/ }),

/***/ "./src/scripts/components/component-cart-drawer.js":
/*!*********************************************************!*\
  !*** ./src/scripts/components/component-cart-drawer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_components_component_cart_drawer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/components/component-cart-drawer.css */ \"./src/styles/components/component-cart-drawer.css\");\n\n\nclass CartDrawer extends HTMLElement {\n  constructor() {\n    super();\n\n    this.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());\n    this.querySelector('#CartDrawer-Overlay').addEventListener('click', this.close.bind(this));\n    this.setHeaderCartIconAccessibility();\n  }\n\n  setHeaderCartIconAccessibility() {\n    const cartLink = document.querySelector('#cart-icon-bubble');\n    cartLink.setAttribute('role', 'button');\n    cartLink.setAttribute('aria-haspopup', 'dialog');\n    cartLink.addEventListener('click', (event) => {\n      event.preventDefault();\n      this.open(cartLink)\n    });\n    cartLink.addEventListener('keydown', (event) => {\n      if (event.code.toUpperCase() === 'SPACE') {\n        event.preventDefault();\n        this.open(cartLink);\n      }\n    });\n  }\n\n  open(triggeredBy) {\n    if (triggeredBy) this.setActiveElement(triggeredBy);\n    const cartDrawerNote = this.querySelector('[id^=\"Details-\"] summary');\n    if (cartDrawerNote && !cartDrawerNote.hasAttribute('role')) this.setSummaryAccessibility(cartDrawerNote);\n    // here the animation doesn't seem to always get triggered. A timeout seem to help\n    setTimeout(() => {this.classList.add('animate', 'active')});\n\n    this.addEventListener('transitionend', () => {\n      const containerToTrapFocusOn = this.classList.contains('is-empty') ? this.querySelector('.drawer__inner-empty') : document.getElementById('CartDrawer');\n      const focusElement = this.querySelector('.drawer__inner') || this.querySelector('.drawer__close');\n      trapFocus(containerToTrapFocusOn, focusElement);\n    }, { once: true });\n\n    document.body.classList.add('overflow-hidden');\n  }\n\n  close() {\n    this.classList.remove('active');\n    removeTrapFocus(this.activeElement);\n    document.body.classList.remove('overflow-hidden');\n  }\n\n  setSummaryAccessibility(cartDrawerNote) {\n    cartDrawerNote.setAttribute('role', 'button');\n    cartDrawerNote.setAttribute('aria-expanded', 'false');\n\n    if(cartDrawerNote.nextElementSibling.getAttribute('id')) {\n      cartDrawerNote.setAttribute('aria-controls', cartDrawerNote.nextElementSibling.id);\n    }\n\n    cartDrawerNote.addEventListener('click', (event) => {\n      event.currentTarget.setAttribute('aria-expanded', !event.currentTarget.closest('details').hasAttribute('open'));\n    });\n\n    cartDrawerNote.parentElement.addEventListener('keyup', onKeyUpEscape);\n  }\n\n  renderContents(parsedState) {\n    this.querySelector('.drawer__inner').classList.contains('is-empty') && this.querySelector('.drawer__inner').classList.remove('is-empty');\n    this.productId = parsedState.id;\n    this.getSectionsToRender().forEach((section => {\n      const sectionElement = section.selector ? document.querySelector(section.selector) : document.getElementById(section.id);\n      sectionElement.innerHTML =\n          this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);\n    }));\n\n    setTimeout(() => {\n      this.querySelector('#CartDrawer-Overlay').addEventListener('click', this.close.bind(this));\n      this.open();\n    });\n  }\n\n  getSectionInnerHTML(html, selector = '.shopify-section') {\n    return new DOMParser()\n      .parseFromString(html, 'text/html')\n      .querySelector(selector).innerHTML;\n  }\n\n  getSectionsToRender() {\n    return [\n      {\n        id: 'cart-drawer',\n        selector: '#CartDrawer'\n      },\n      {\n        id: 'cart-icon-bubble'\n      }\n    ];\n  }\n\n  getSectionDOM(html, selector = '.shopify-section') {\n    return new DOMParser()\n      .parseFromString(html, 'text/html')\n      .querySelector(selector);\n  }\n\n  setActiveElement(element) {\n    this.activeElement = element;\n  }\n}\n\ncustomElements.define('cart-drawer', CartDrawer);\n\nclass CartDrawerItems extends CartItems {\n  getSectionsToRender() {\n    return [\n      {\n        id: 'CartDrawer',\n        section: 'cart-drawer',\n        selector: '.drawer__inner'\n      },\n      {\n        id: 'cart-icon-bubble',\n        section: 'cart-icon-bubble',\n        selector: '.shopify-section'\n      }\n    ];\n  }\n}\n\ncustomElements.define('cart-drawer-items', CartDrawerItems);\n\n\n//# sourceURL=webpack://alessi-dawn/./src/scripts/components/component-cart-drawer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/components/component-cart-drawer.js");
/******/ 	
/******/ })()
;