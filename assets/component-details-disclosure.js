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

/***/ "./src/scripts/components/component-details-disclosure.js":
/*!****************************************************************!*\
  !*** ./src/scripts/components/component-details-disclosure.js ***!
  \****************************************************************/
/***/ (() => {

eval("class DetailsDisclosure extends HTMLElement {\n  constructor() {\n    super();\n    this.mainDetailsToggle = this.querySelector('details');\n    this.content = this.mainDetailsToggle.querySelector('summary').nextElementSibling;\n\n    this.mainDetailsToggle.addEventListener('focusout', this.onFocusOut.bind(this));\n    this.mainDetailsToggle.addEventListener('toggle', this.onToggle.bind(this));\n  }\n\n  onFocusOut() {\n    setTimeout(() => {\n      if (!this.contains(document.activeElement)) this.close();\n    })\n  }\n\n  onToggle() {\n    if (!this.animations) this.animations = this.content.getAnimations();\n\n    if (this.mainDetailsToggle.hasAttribute('open')) {\n      this.animations.forEach(animation => animation.play());\n    } else {\n      this.animations.forEach(animation => animation.cancel());\n    }\n  }\n\n  close() {\n    this.mainDetailsToggle.removeAttribute('open');\n    this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false);\n  }\n}\n\ncustomElements.define('details-disclosure', DetailsDisclosure);\n\nclass HeaderMenu extends DetailsDisclosure {\n  constructor() {\n    super();\n    this.header = document.querySelector('.header-wrapper');\n  }\n\n  onToggle() {\n    if (!this.header) return;\n    this.header.preventHide = this.mainDetailsToggle.open;\n\n    if (document.documentElement.style.getPropertyValue('--header-bottom-position-desktop') !== '') return;\n    document.documentElement.style.setProperty('--header-bottom-position-desktop', `${Math.floor(this.header.getBoundingClientRect().bottom)}px`);\n  }\n}\n\ncustomElements.define('header-menu', HeaderMenu);\n\n\n//# sourceURL=webpack://alessi-dawn/./src/scripts/components/component-details-disclosure.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/components/component-details-disclosure.js"]();
/******/ 	
/******/ })()
;