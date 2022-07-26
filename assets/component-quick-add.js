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

/***/ "./src/styles/components/component-quick-add.css":
/*!*******************************************************!*\
  !*** ./src/styles/components/component-quick-add.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://alessi-dawn/./src/styles/components/component-quick-add.css?");

/***/ }),

/***/ "./src/scripts/components/component-quick-add.js":
/*!*******************************************************!*\
  !*** ./src/scripts/components/component-quick-add.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_components_component_quick_add_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/components/component-quick-add.css */ \"./src/styles/components/component-quick-add.css\");\n\n\nif (!customElements.get('quick-add-modal')) {\n  customElements.define('quick-add-modal', class QuickAddModal extends ModalDialog {\n    constructor() {\n      super();\n      this.modalContent = this.querySelector('[id^=\"QuickAddInfo-\"]');\n    }\n\n    hide(preventFocus = false) {\n      const cartNotification = document.querySelector('cart-notification') || document.querySelector('cart-drawer');\n      if (cartNotification) cartNotification.setActiveElement(this.openedBy);\n      this.modalContent.innerHTML = '';\n\n      if (preventFocus) this.openedBy = null;\n      super.hide();\n    }\n\n    show(opener) {\n      opener.setAttribute('aria-disabled', true);\n      opener.classList.add('loading');\n      opener.querySelector('.loading-overlay__spinner').classList.remove('hidden');\n\n      fetch(opener.getAttribute('data-product-url'))\n        .then((response) => response.text())\n        .then((responseText) => {\n          const responseHTML = new DOMParser().parseFromString(responseText, 'text/html');\n          this.productElement = responseHTML.querySelector('section[id^=\"MainProduct-\"]');\n          this.preventDuplicatedIDs();\n          this.removeDOMElements();\n          this.setInnerHTML(this.modalContent, this.productElement.innerHTML);\n\n          if (window.Shopify && Shopify.PaymentButton) {\n            Shopify.PaymentButton.init();\n          }\n\n          if (window.ProductModel) window.ProductModel.loadShopifyXR();\n\n          this.removeGalleryListSemantic();\n          this.preventVariantURLSwitching();\n          super.show(opener);\n        })\n        .finally(() => {\n          opener.removeAttribute('aria-disabled');\n          opener.classList.remove('loading');\n          opener.querySelector('.loading-overlay__spinner').classList.add('hidden');\n        });\n    }\n\n    setInnerHTML(element, html) {\n      element.innerHTML = html;\n\n      // Reinjects the script tags to allow execution. By default, scripts are disabled when using element.innerHTML.\n      element.querySelectorAll('script').forEach(oldScriptTag => {\n        const newScriptTag = document.createElement('script');\n        Array.from(oldScriptTag.attributes).forEach(attribute => {\n          newScriptTag.setAttribute(attribute.name, attribute.value)\n        });\n        newScriptTag.appendChild(document.createTextNode(oldScriptTag.innerHTML));\n        oldScriptTag.parentNode.replaceChild(newScriptTag, oldScriptTag);\n      });\n    }\n\n    preventVariantURLSwitching() {\n      this.modalContent.querySelector('variant-radios,variant-selects').setAttribute('data-update-url', 'false');\n    }\n\n    removeDOMElements() {\n      const pickupAvailability = this.productElement.querySelector('pickup-availability');\n      if (pickupAvailability) pickupAvailability.remove();\n\n      const productModal = this.productElement.querySelector('product-modal');\n      if (productModal) productModal.remove();\n    }\n\n    preventDuplicatedIDs() {\n      const sectionId = this.productElement.dataset.section;\n      this.productElement.innerHTML = this.productElement.innerHTML.replaceAll(sectionId, `quickadd-${ sectionId }`);\n      this.productElement.querySelectorAll('variant-selects, variant-radios').forEach((variantSelect) => {\n        variantSelect.dataset.originalSection = sectionId;\n      });\n    }\n\n    removeGalleryListSemantic() {\n      const galleryList = this.modalContent.querySelector('[id^=\"Slider-Gallery\"]');\n      if (!galleryList) return;\n\n      galleryList.setAttribute('role', 'presentation');\n      galleryList.querySelectorAll('[id^=\"Slide-\"]').forEach(li => li.setAttribute('role', 'presentation'));\n    }\n  });\n}\n\n\n//# sourceURL=webpack://alessi-dawn/./src/scripts/components/component-quick-add.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/components/component-quick-add.js");
/******/ 	
/******/ })()
;