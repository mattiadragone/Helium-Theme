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

/***/ "./src/scripts/components/component-details-modal.js":
/*!***********************************************************!*\
  !*** ./src/scripts/components/component-details-modal.js ***!
  \***********************************************************/
/***/ (() => {

eval("class DetailsModal extends HTMLElement {\n  constructor() {\n    super();\n    this.detailsContainer = this.querySelector('details');\n    this.summaryToggle = this.querySelector('summary');\n\n    this.detailsContainer.addEventListener(\n      'keyup',\n      (event) => event.code.toUpperCase() === 'ESCAPE' && this.close()\n    );\n    this.summaryToggle.addEventListener(\n      'click',\n      this.onSummaryClick.bind(this)\n    );\n    this.querySelector('button[type=\"button\"]').addEventListener(\n      'click',\n      this.close.bind(this)\n    );\n\n    this.summaryToggle.setAttribute('role', 'button');\n  }\n\n  isOpen() {\n    return this.detailsContainer.hasAttribute('open');\n  }\n\n  onSummaryClick(event) {\n    event.preventDefault();\n    event.target.closest('details').hasAttribute('open')\n      ? this.close()\n      : this.open(event);\n  }\n\n  onBodyClick(event) {\n    if (!this.contains(event.target) || event.target.classList.contains('modal-overlay')) this.close(false);\n  }\n\n  open(event) {\n    this.onBodyClickEvent =\n      this.onBodyClickEvent || this.onBodyClick.bind(this);\n    event.target.closest('details').setAttribute('open', true);\n    document.body.addEventListener('click', this.onBodyClickEvent);\n    document.body.classList.add('overflow-hidden');\n\n    trapFocus(\n      this.detailsContainer.querySelector('[tabindex=\"-1\"]'),\n      this.detailsContainer.querySelector('input:not([type=\"hidden\"])')\n    );\n  }\n\n  close(focusToggle = true) {\n    removeTrapFocus(focusToggle ? this.summaryToggle : null);\n    this.detailsContainer.removeAttribute('open');\n    document.body.removeEventListener('click', this.onBodyClickEvent);\n    document.body.classList.remove('overflow-hidden');\n  }\n}\n\ncustomElements.define('details-modal', DetailsModal);\n\n\n//# sourceURL=webpack://alessi-dawn/./src/scripts/components/component-details-modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/components/component-details-modal.js"]();
/******/ 	
/******/ })()
;