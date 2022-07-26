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

/***/ "./src/scripts/components/component-share.js":
/*!***************************************************!*\
  !*** ./src/scripts/components/component-share.js ***!
  \***************************************************/
/***/ (() => {

eval("if (!customElements.get('share-button')) {\n  customElements.define('share-button', class ShareButton extends DetailsDisclosure {\n    constructor() {\n      super();\n\n      this.elements = {\n        shareButton: this.querySelector('button'),\n        shareSummary: this.querySelector('summary'),\n        closeButton: this.querySelector('.share-button__close'),\n        successMessage: this.querySelector('[id^=\"ShareMessage\"]'),\n        urlInput: this.querySelector('input')\n      }\n      this.urlToShare = this.elements.urlInput ? this.elements.urlInput.value : document.location.href;\n\n      if (navigator.share) {\n        this.mainDetailsToggle.setAttribute('hidden', '');\n        this.elements.shareButton.classList.remove('hidden');\n        this.elements.shareButton.addEventListener('click', () => { navigator.share({ url: this.urlToShare, title: document.title }) });\n      } else {\n        this.mainDetailsToggle.addEventListener('toggle', this.toggleDetails.bind(this));\n        this.mainDetailsToggle.querySelector('.share-button__copy').addEventListener('click', this.copyToClipboard.bind(this));\n        this.mainDetailsToggle.querySelector('.share-button__close').addEventListener('click', this.close.bind(this));\n      }\n    }\n\n    toggleDetails() {\n      if (!this.mainDetailsToggle.open) {\n        this.elements.successMessage.classList.add('hidden');\n        this.elements.successMessage.textContent = '';\n        this.elements.closeButton.classList.add('hidden');\n        this.elements.shareSummary.focus();\n      }\n    }\n\n    copyToClipboard() {\n      navigator.clipboard.writeText(this.elements.urlInput.value).then(() => {\n        this.elements.successMessage.classList.remove('hidden');\n        this.elements.successMessage.textContent = window.accessibilityStrings.shareSuccess;\n        this.elements.closeButton.classList.remove('hidden');\n        this.elements.closeButton.focus();\n      });\n    }\n\n    updateUrl(url) {\n      this.urlToShare = url;\n      this.elements.urlInput.value = url;\n    }\n  });\n}\n\n\n//# sourceURL=webpack://alessi-dawn/./src/scripts/components/component-share.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/components/component-share.js"]();
/******/ 	
/******/ })()
;