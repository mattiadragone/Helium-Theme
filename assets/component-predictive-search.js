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

/***/ "./src/styles/components/component-predictive-search.css":
/*!***************************************************************!*\
  !*** ./src/styles/components/component-predictive-search.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://alessi-dawn/./src/styles/components/component-predictive-search.css?");

/***/ }),

/***/ "./src/scripts/components/component-predictive-search.js":
/*!***************************************************************!*\
  !*** ./src/scripts/components/component-predictive-search.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_components_component_predictive_search_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/components/component-predictive-search.css */ \"./src/styles/components/component-predictive-search.css\");\n\n\nclass PredictiveSearch extends HTMLElement {\n  constructor() {\n    super();\n    this.cachedResults = {};\n    this.input = this.querySelector('input[type=\"search\"]');\n    this.predictiveSearchResults = this.querySelector('[data-predictive-search]');\n    this.isOpen = false;\n\n    this.setupEventListeners();\n  }\n\n  setupEventListeners() {\n    const form = this.querySelector('form.search');\n    form.addEventListener('submit', this.onFormSubmit.bind(this));\n\n    this.input.addEventListener('input', debounce((event) => {\n      this.onChange(event);\n    }, 300).bind(this));\n    this.input.addEventListener('focus', this.onFocus.bind(this));\n    this.addEventListener('focusout', this.onFocusOut.bind(this));\n    this.addEventListener('keyup', this.onKeyup.bind(this));\n    this.addEventListener('keydown', this.onKeydown.bind(this));\n  }\n\n  getQuery() {\n    return this.input.value.trim();\n  }\n\n  onChange() {\n    const searchTerm = this.getQuery();\n\n    if (!searchTerm.length) {\n      this.close(true);\n      return;\n    }\n\n    this.getSearchResults(searchTerm);\n  }\n\n  onFormSubmit(event) {\n    if (!this.getQuery().length || this.querySelector('[aria-selected=\"true\"] a')) event.preventDefault();\n  }\n\n  onFocus() {\n    const searchTerm = this.getQuery();\n\n    if (!searchTerm.length) return;\n\n    if (this.getAttribute('results') === 'true') {\n      this.open();\n    } else {\n      this.getSearchResults(searchTerm);\n    }\n  }\n\n  onFocusOut() {\n    setTimeout(() => {\n      if (!this.contains(document.activeElement)) this.close();\n    })\n  }\n\n  onKeyup(event) {\n    if (!this.getQuery().length) this.close(true);\n    event.preventDefault();\n\n    switch (event.code) {\n      case 'ArrowUp':\n        this.switchOption('up')\n        break;\n      case 'ArrowDown':\n        this.switchOption('down');\n        break;\n      case 'Enter':\n        this.selectOption();\n        break;\n    }\n  }\n\n  onKeydown(event) {\n    // Prevent the cursor from moving in the input when using the up and down arrow keys\n    if (\n      event.code === 'ArrowUp' ||\n      event.code === 'ArrowDown'\n    ) {\n      event.preventDefault();\n    }\n  }\n\n  switchOption(direction) {\n    if (!this.getAttribute('open')) return;\n\n    const moveUp = direction === 'up';\n    const selectedElement = this.querySelector('[aria-selected=\"true\"]');\n    const allElements = this.querySelectorAll('li');\n    let activeElement = this.querySelector('li');\n\n    if (moveUp && !selectedElement) return;\n\n    this.statusElement.textContent = '';\n\n    if (!moveUp && selectedElement) {\n      activeElement = selectedElement.nextElementSibling || allElements[0];\n    } else if (moveUp) {\n      activeElement = selectedElement.previousElementSibling || allElements[allElements.length - 1];\n    }\n\n    if (activeElement === selectedElement) return;\n\n    activeElement.setAttribute('aria-selected', true);\n    if (selectedElement) selectedElement.setAttribute('aria-selected', false);\n\n    this.setLiveRegionText(activeElement.textContent);\n    this.input.setAttribute('aria-activedescendant', activeElement.id);\n  }\n\n  selectOption() {\n    const selectedProduct = this.querySelector('[aria-selected=\"true\"] a, [aria-selected=\"true\"] button');\n\n    if (selectedProduct) selectedProduct.click();\n  }\n\n  getSearchResults(searchTerm) {\n    const queryKey = searchTerm.replace(\" \", \"-\").toLowerCase();\n    this.setLiveRegionLoadingState();\n\n    if (this.cachedResults[queryKey]) {\n      this.renderSearchResults(this.cachedResults[queryKey]);\n      return;\n    }\n\n    fetch(`${routes.predictive_search_url}?q=${encodeURIComponent(searchTerm)}&${encodeURIComponent('resources[type]')}=product&${encodeURIComponent('resources[limit]')}=4&section_id=predictive-search`)\n      .then((response) => {\n        if (!response.ok) {\n          var error = new Error(response.status);\n          this.close();\n          throw error;\n        }\n\n        return response.text();\n      })\n      .then((text) => {\n        const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-predictive-search').innerHTML;\n        this.cachedResults[queryKey] = resultsMarkup;\n        this.renderSearchResults(resultsMarkup);\n      })\n      .catch((error) => {\n        this.close();\n        throw error;\n      });\n  }\n\n  setLiveRegionLoadingState() {\n    this.statusElement = this.statusElement || this.querySelector('.predictive-search-status');\n    this.loadingText = this.loadingText || this.getAttribute('data-loading-text');\n\n    this.setLiveRegionText(this.loadingText);\n    this.setAttribute('loading', true);\n  }\n\n  setLiveRegionText(statusText) {\n    this.statusElement.setAttribute('aria-hidden', 'false');\n    this.statusElement.textContent = statusText;\n\n    setTimeout(() => {\n      this.statusElement.setAttribute('aria-hidden', 'true');\n    }, 1000);\n  }\n\n  renderSearchResults(resultsMarkup) {\n    this.predictiveSearchResults.innerHTML = resultsMarkup;\n    this.setAttribute('results', true);\n\n    this.setLiveRegionResults();\n    this.open();\n  }\n\n  setLiveRegionResults() {\n    this.removeAttribute('loading');\n    this.setLiveRegionText(this.querySelector('[data-predictive-search-live-region-count-value]').textContent);\n  }\n\n  getResultsMaxHeight() {\n    this.resultsMaxHeight = window.innerHeight - document.getElementById('shopify-section-header').getBoundingClientRect().bottom;\n    return this.resultsMaxHeight;\n  }\n\n  open() {\n    this.predictiveSearchResults.style.maxHeight = this.resultsMaxHeight || `${this.getResultsMaxHeight()}px`;\n    this.setAttribute('open', true);\n    this.input.setAttribute('aria-expanded', true);\n    this.isOpen = true;\n  }\n\n  close(clearSearchTerm = false) {\n    if (clearSearchTerm) {\n      this.input.value = '';\n      this.removeAttribute('results');\n    }\n\n    const selected = this.querySelector('[aria-selected=\"true\"]');\n\n    if (selected) selected.setAttribute('aria-selected', false);\n\n    this.input.setAttribute('aria-activedescendant', '');\n    this.removeAttribute('open');\n    this.input.setAttribute('aria-expanded', false);\n    this.resultsMaxHeight = false\n    this.predictiveSearchResults.removeAttribute('style');\n\n    this.isOpen = false;\n  }\n}\n\ncustomElements.define('predictive-search', PredictiveSearch);\n\n\n//# sourceURL=webpack://alessi-dawn/./src/scripts/components/component-predictive-search.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/components/component-predictive-search.js");
/******/ 	
/******/ })()
;