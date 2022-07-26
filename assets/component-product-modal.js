/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/component-product-modal.js":
/*!***********************************************************!*\
  !*** ./src/scripts/components/component-product-modal.js ***!
  \***********************************************************/
/***/ (() => {

eval("if (!customElements.get('product-modal')) {\n  customElements.define('product-modal', class ProductModal extends ModalDialog {\n    constructor() {\n      super();\n    }\n\n    hide() {\n      super.hide();\n    }\n\n    show(opener) {\n      super.show(opener);\n      this.showActiveMedia();\n    }\n\n    showActiveMedia() {\n      this.querySelectorAll(`[data-media-id]:not([data-media-id=\"${this.openedBy.getAttribute(\"data-media-id\")}\"])`).forEach((element) => {\n          element.classList.remove('active');\n        }\n      )\n      const activeMedia = this.querySelector(`[data-media-id=\"${this.openedBy.getAttribute(\"data-media-id\")}\"]`);\n      const activeMediaTemplate = activeMedia.querySelector('template');\n      const activeMediaContent = activeMediaTemplate ? activeMediaTemplate.content : null;\n      activeMedia.classList.add('active');\n      activeMedia.scrollIntoView();\n\n      const container = this.querySelector('[role=\"document\"]');\n      container.scrollLeft = (activeMedia.width - container.clientWidth) / 2;\n\n      if (activeMedia.nodeName == 'DEFERRED-MEDIA' && activeMediaContent && activeMediaContent.querySelector('.js-youtube'))\n        activeMedia.loadContent();\n    }\n  });\n}\n\n\n//# sourceURL=webpack://alessi-dawn/./src/scripts/components/component-product-modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/components/component-product-modal.js"]();
/******/ 	
/******/ })()
;