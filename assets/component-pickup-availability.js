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

/***/ "./src/styles/components/component-pickup-availability.css":
/*!*****************************************************************!*\
  !*** ./src/styles/components/component-pickup-availability.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://alessi-dawn/./src/styles/components/component-pickup-availability.css?");

/***/ }),

/***/ "./src/scripts/components/component-pickup-availability.js":
/*!*****************************************************************!*\
  !*** ./src/scripts/components/component-pickup-availability.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_components_component_pickup_availability_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/components/component-pickup-availability.css */ \"./src/styles/components/component-pickup-availability.css\");\n\n\nif (!customElements.get('pickup-availability')) {\n  customElements.define('pickup-availability', class PickupAvailability extends HTMLElement {\n    constructor() {\n      super();\n\n      if(!this.hasAttribute('available')) return;\n\n      this.errorHtml = this.querySelector('template').content.firstElementChild.cloneNode(true);\n      this.onClickRefreshList = this.onClickRefreshList.bind(this);\n      this.fetchAvailability(this.dataset.variantId);\n    }\n\n    fetchAvailability(variantId) {\n      let rootUrl = this.dataset.rootUrl;\n      if (!rootUrl.endsWith(\"/\")) {\n        rootUrl = rootUrl + \"/\";\n      }\n      const variantSectionUrl = `${rootUrl}variants/${variantId}/?section_id=pickup-availability`;\n\n      fetch(variantSectionUrl)\n        .then(response => response.text())\n        .then(text => {\n          const sectionInnerHTML = new DOMParser()\n            .parseFromString(text, 'text/html')\n            .querySelector('.shopify-section');\n          this.renderPreview(sectionInnerHTML);\n        })\n        .catch(e => {\n          const button = this.querySelector('button');\n          if (button) button.removeEventListener('click', this.onClickRefreshList);\n          this.renderError();\n        });\n    }\n\n    onClickRefreshList(evt) {\n      this.fetchAvailability(this.dataset.variantId);\n    }\n\n    renderError() {\n      this.innerHTML = '';\n      this.appendChild(this.errorHtml);\n\n      this.querySelector('button').addEventListener('click', this.onClickRefreshList);\n    }\n\n    renderPreview(sectionInnerHTML) {\n      const drawer = document.querySelector('pickup-availability-drawer');\n      if (drawer) drawer.remove();\n      if (!sectionInnerHTML.querySelector('pickup-availability-preview')) {\n        this.innerHTML = \"\";\n        this.removeAttribute('available');\n        return;\n      }\n\n      this.innerHTML = sectionInnerHTML.querySelector('pickup-availability-preview').outerHTML;\n      this.setAttribute('available', '');\n\n      document.body.appendChild(sectionInnerHTML.querySelector('pickup-availability-drawer'));\n\n      const button = this.querySelector('button');\n      if (button) button.addEventListener('click', (evt) => {\n        document.querySelector('pickup-availability-drawer').show(evt.target);\n      });\n    }\n  });\n}\n\nif (!customElements.get('pickup-availability-drawer')) {\n  customElements.define('pickup-availability-drawer', class PickupAvailabilityDrawer extends HTMLElement {\n    constructor() {\n      super();\n\n      this.onBodyClick = this.handleBodyClick.bind(this);\n\n      this.querySelector('button').addEventListener('click', () => {\n        this.hide();\n      });\n\n      this.addEventListener('keyup', () => {\n        if(event.code.toUpperCase() === 'ESCAPE') this.hide();\n      });\n    }\n\n    handleBodyClick(evt) {\n      const target = evt.target;\n      if (target != this && !target.closest('pickup-availability-drawer') && target.id != 'ShowPickupAvailabilityDrawer') {\n        this.hide();\n      }\n    }\n\n    hide() {\n      this.removeAttribute('open');\n      document.body.removeEventListener('click', this.onBodyClick);\n      document.body.classList.remove('overflow-hidden');\n      removeTrapFocus(this.focusElement);\n    }\n\n    show(focusElement) {\n      this.focusElement = focusElement;\n      this.setAttribute('open', '');\n      document.body.addEventListener('click', this.onBodyClick);\n      document.body.classList.add('overflow-hidden');\n      trapFocus(this);\n    }\n  });\n}\n\n\n//# sourceURL=webpack://alessi-dawn/./src/scripts/components/component-pickup-availability.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/components/component-pickup-availability.js");
/******/ 	
/******/ })()
;