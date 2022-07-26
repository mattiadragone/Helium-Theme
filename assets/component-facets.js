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

/***/ "./src/styles/components/component-facets.css":
/*!****************************************************!*\
  !*** ./src/styles/components/component-facets.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://alessi-dawn/./src/styles/components/component-facets.css?");

/***/ }),

/***/ "./src/scripts/components/component-facets.js":
/*!****************************************************!*\
  !*** ./src/scripts/components/component-facets.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_components_component_facets_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/components/component-facets.css */ \"./src/styles/components/component-facets.css\");\n\n\nclass FacetFiltersForm extends HTMLElement {\n  constructor() {\n    super();\n    this.onActiveFilterClick = this.onActiveFilterClick.bind(this);\n\n    this.debouncedOnSubmit = debounce((event) => {\n      this.onSubmitHandler(event);\n    }, 500);\n\n    const facetForm = this.querySelector('form');\n    facetForm.addEventListener('input', this.debouncedOnSubmit.bind(this));\n\n    const facetWrapper = this.querySelector('#FacetsWrapperDesktop');\n    if (facetWrapper) facetWrapper.addEventListener('keyup', onKeyUpEscape);\n  }\n\n  static setListeners() {\n    const onHistoryChange = (event) => {\n      const searchParams = event.state ? event.state.searchParams : FacetFiltersForm.searchParamsInitial;\n      if (searchParams === FacetFiltersForm.searchParamsPrev) return;\n      FacetFiltersForm.renderPage(searchParams, null, false);\n    }\n    window.addEventListener('popstate', onHistoryChange);\n  }\n\n  static toggleActiveFacets(disable = true) {\n    document.querySelectorAll('.js-facet-remove').forEach((element) => {\n      element.classList.toggle('disabled', disable);\n    });\n  }\n\n  static renderPage(searchParams, event, updateURLHash = true) {\n    FacetFiltersForm.searchParamsPrev = searchParams;\n    const sections = FacetFiltersForm.getSections();\n    const countContainer = document.getElementById('ProductCount');\n    const countContainerDesktop = document.getElementById('ProductCountDesktop');\n    document.getElementById('ProductGridContainer').querySelector('.collection').classList.add('loading');\n    if (countContainer){\n      countContainer.classList.add('loading');\n    }\n    if (countContainerDesktop){\n      countContainerDesktop.classList.add('loading');\n    }\n\n    sections.forEach((section) => {\n      const url = `${window.location.pathname}?section_id=${section.section}&${searchParams}`;\n      const filterDataUrl = element => element.url === url;\n\n      FacetFiltersForm.filterData.some(filterDataUrl) ?\n        FacetFiltersForm.renderSectionFromCache(filterDataUrl, event) :\n        FacetFiltersForm.renderSectionFromFetch(url, event);\n    });\n\n    if (updateURLHash) FacetFiltersForm.updateURLHash(searchParams);\n  }\n\n  static renderSectionFromFetch(url, event) {\n    fetch(url)\n      .then(response => response.text())\n      .then((responseText) => {\n        const html = responseText;\n        FacetFiltersForm.filterData = [...FacetFiltersForm.filterData, { html, url }];\n        FacetFiltersForm.renderFilters(html, event);\n        FacetFiltersForm.renderProductGridContainer(html);\n        FacetFiltersForm.renderProductCount(html);\n      });\n  }\n\n  static renderSectionFromCache(filterDataUrl, event) {\n    const html = FacetFiltersForm.filterData.find(filterDataUrl).html;\n    FacetFiltersForm.renderFilters(html, event);\n    FacetFiltersForm.renderProductGridContainer(html);\n    FacetFiltersForm.renderProductCount(html);\n  }\n\n  static renderProductGridContainer(html) {\n    document.getElementById('ProductGridContainer').innerHTML = new DOMParser().parseFromString(html, 'text/html').getElementById('ProductGridContainer').innerHTML;\n  }\n\n  static renderProductCount(html) {\n    const count = new DOMParser().parseFromString(html, 'text/html').getElementById('ProductCount').innerHTML\n    const container = document.getElementById('ProductCount');\n    const containerDesktop = document.getElementById('ProductCountDesktop');\n    container.innerHTML = count;\n    container.classList.remove('loading');\n    if (containerDesktop) {\n      containerDesktop.innerHTML = count;\n      containerDesktop.classList.remove('loading');\n    }\n  }\n\n  static renderFilters(html, event) {\n    const parsedHTML = new DOMParser().parseFromString(html, 'text/html');\n\n    const facetDetailsElements =\n      parsedHTML.querySelectorAll('#FacetFiltersForm .js-filter, #FacetFiltersFormMobile .js-filter, #FacetFiltersPillsForm .js-filter');\n    const matchesIndex = (element) => {\n      const jsFilter = event ? event.target.closest('.js-filter') : undefined;\n      return jsFilter ? element.dataset.index === jsFilter.dataset.index : false;\n    }\n    const facetsToRender = Array.from(facetDetailsElements).filter(element => !matchesIndex(element));\n    const countsToRender = Array.from(facetDetailsElements).find(matchesIndex);\n\n    facetsToRender.forEach((element) => {\n      document.querySelector(`.js-filter[data-index=\"${element.dataset.index}\"]`).innerHTML = element.innerHTML;\n    });\n\n    FacetFiltersForm.renderActiveFacets(parsedHTML);\n    FacetFiltersForm.renderAdditionalElements(parsedHTML);\n\n    if (countsToRender) FacetFiltersForm.renderCounts(countsToRender, event.target.closest('.js-filter'));\n  }\n\n  static renderActiveFacets(html) {\n    const activeFacetElementSelectors = ['.active-facets-mobile', '.active-facets-desktop'];\n\n    activeFacetElementSelectors.forEach((selector) => {\n      const activeFacetsElement = html.querySelector(selector);\n      if (!activeFacetsElement) return;\n      document.querySelector(selector).innerHTML = activeFacetsElement.innerHTML;\n    })\n\n    FacetFiltersForm.toggleActiveFacets(false);\n  }\n\n  static renderAdditionalElements(html) {\n    const mobileElementSelectors = ['.mobile-facets__open', '.mobile-facets__count', '.sorting'];\n\n    mobileElementSelectors.forEach((selector) => {\n      if (!html.querySelector(selector)) return;\n      document.querySelector(selector).innerHTML = html.querySelector(selector).innerHTML;\n    });\n\n    document.getElementById('FacetFiltersFormMobile').closest('menu-drawer').bindEvents();\n  }\n\n  static renderCounts(source, target) {\n    const targetElement = target.querySelector('.facets__selected');\n    const sourceElement = source.querySelector('.facets__selected');\n\n    const targetElementAccessibility = target.querySelector('.facets__summary');\n    const sourceElementAccessibility = source.querySelector('.facets__summary');\n\n    if (sourceElement && targetElement) {\n      target.querySelector('.facets__selected').outerHTML = source.querySelector('.facets__selected').outerHTML;\n    }\n\n    if (targetElementAccessibility && sourceElementAccessibility) {\n      target.querySelector('.facets__summary').outerHTML = source.querySelector('.facets__summary').outerHTML;\n    }\n  }\n\n  static updateURLHash(searchParams) {\n    history.pushState({ searchParams }, '', `${window.location.pathname}${searchParams && '?'.concat(searchParams)}`);\n  }\n\n  static getSections() {\n    return [\n      {\n        section: document.getElementById('product-grid').dataset.id,\n      }\n    ]\n  }\n\n  createSearchParams(form) {\n    const formData = new FormData(form);\n    return new URLSearchParams(formData).toString();\n  }\n\n  onSubmitForm(searchParams, event) {\n    FacetFiltersForm.renderPage(searchParams, event);\n  }\n\n  onSubmitHandler(event) {\n    event.preventDefault();\n    const sortFilterForms = document.querySelectorAll('facet-filters-form form');\n    if (event.srcElement.className == 'mobile-facets__checkbox') {\n      const searchParams = this.createSearchParams(event.target.closest('form'))\n      this.onSubmitForm(searchParams, event)\n    } else {\n      const forms = [];\n      const isMobile = event.target.closest('form').id === 'FacetFiltersFormMobile';\n\n      sortFilterForms.forEach((form) => {\n        if (!isMobile) {\n          if (form.id === 'FacetSortForm' || form.id === 'FacetFiltersForm' || form.id === 'FacetSortDrawerForm') {\n            forms.push(this.createSearchParams(form));\n          }\n        } else if (form.id === 'FacetFiltersFormMobile') {\n          forms.push(this.createSearchParams(form));\n        }\n      });\n      this.onSubmitForm(forms.join('&'), event)\n    }\n  }\n\n  onActiveFilterClick(event) {\n    event.preventDefault();\n    FacetFiltersForm.toggleActiveFacets();\n    const url = event.currentTarget.href.indexOf('?') == -1 ? '' : event.currentTarget.href.slice(event.currentTarget.href.indexOf('?') + 1);\n    FacetFiltersForm.renderPage(url);\n  }\n}\n\nFacetFiltersForm.filterData = [];\nFacetFiltersForm.searchParamsInitial = window.location.search.slice(1);\nFacetFiltersForm.searchParamsPrev = window.location.search.slice(1);\ncustomElements.define('facet-filters-form', FacetFiltersForm);\nFacetFiltersForm.setListeners();\n\nclass PriceRange extends HTMLElement {\n  constructor() {\n    super();\n    this.querySelectorAll('input')\n      .forEach(element => element.addEventListener('change', this.onRangeChange.bind(this)));\n    this.setMinAndMaxValues();\n  }\n\n  onRangeChange(event) {\n    this.adjustToValidValues(event.currentTarget);\n    this.setMinAndMaxValues();\n  }\n\n  setMinAndMaxValues() {\n    const inputs = this.querySelectorAll('input');\n    const minInput = inputs[0];\n    const maxInput = inputs[1];\n    if (maxInput.value) minInput.setAttribute('max', maxInput.value);\n    if (minInput.value) maxInput.setAttribute('min', minInput.value);\n    if (minInput.value === '') maxInput.setAttribute('min', 0);\n    if (maxInput.value === '') minInput.setAttribute('max', maxInput.getAttribute('max'));\n  }\n\n  adjustToValidValues(input) {\n    const value = Number(input.value);\n    const min = Number(input.getAttribute('min'));\n    const max = Number(input.getAttribute('max'));\n\n    if (value < min) input.value = min;\n    if (value > max) input.value = max;\n  }\n}\n\ncustomElements.define('price-range', PriceRange);\n\nclass FacetRemove extends HTMLElement {\n  constructor() {\n    super();\n    const facetLink = this.querySelector('a');\n    facetLink.setAttribute('role', 'button');\n    facetLink.addEventListener('click', this.closeFilter.bind(this));\n    facetLink.addEventListener('keyup', (event) => {\n      event.preventDefault();\n      if (event.code.toUpperCase() === 'SPACE') this.closeFilter(event);\n    });\n  }\n\n  closeFilter(event) {\n    event.preventDefault();\n    const form = this.closest('facet-filters-form') || document.querySelector('facet-filters-form');\n    form.onActiveFilterClick(event);\n  }\n}\n\ncustomElements.define('facet-remove', FacetRemove);\n\n\n//# sourceURL=webpack://alessi-dawn/./src/scripts/components/component-facets.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/components/component-facets.js");
/******/ 	
/******/ })()
;