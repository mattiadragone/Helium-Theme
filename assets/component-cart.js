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

/***/ "./src/styles/components/component-cart.css":
/*!**************************************************!*\
  !*** ./src/styles/components/component-cart.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://alessi-dawn/./src/styles/components/component-cart.css?");

/***/ }),

/***/ "./src/scripts/components/component-cart.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/component-cart.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_components_component_cart_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/components/component-cart.css */ \"./src/styles/components/component-cart.css\");\n\n\nclass CartRemoveButton extends HTMLElement {\n  constructor() {\n    super();\n    this.addEventListener('click', (event) => {\n      event.preventDefault();\n      const cartItems = this.closest('cart-items') || this.closest('cart-drawer-items');\n      cartItems.updateQuantity(this.dataset.index, 0);\n    });\n  }\n}\n\ncustomElements.define('cart-remove-button', CartRemoveButton);\n\nclass CartItems extends HTMLElement {\n  constructor() {\n    super();\n\n    this.lineItemStatusElement = document.getElementById('shopping-cart-line-item-status') || document.getElementById('CartDrawer-LineItemStatus');\n\n    this.currentItemCount = Array.from(this.querySelectorAll('[name=\"updates[]\"]'))\n      .reduce((total, quantityInput) => total + parseInt(quantityInput.value), 0);\n\n    this.debouncedOnChange = debounce((event) => {\n      this.onChange(event);\n    }, 300);\n\n    this.addEventListener('change', this.debouncedOnChange.bind(this));\n  }\n\n  onChange(event) {\n    this.updateQuantity(event.target.dataset.index, event.target.value, document.activeElement.getAttribute('name'));\n  }\n\n  getSectionsToRender() {\n    return [\n      {\n        id: 'main-cart-items',\n        section: document.getElementById('main-cart-items').dataset.id,\n        selector: '.js-contents',\n      },\n      {\n        id: 'cart-icon-bubble',\n        section: 'cart-icon-bubble',\n        selector: '.shopify-section'\n      },\n      {\n        id: 'cart-live-region-text',\n        section: 'cart-live-region-text',\n        selector: '.shopify-section'\n      },\n      {\n        id: 'main-cart-footer',\n        section: document.getElementById('main-cart-footer').dataset.id,\n        selector: '.js-contents',\n      }\n    ];\n  }\n\n  updateQuantity(line, quantity, name) {\n    this.enableLoading(line);\n\n    const body = JSON.stringify({\n      line,\n      quantity,\n      sections: this.getSectionsToRender().map((section) => section.section),\n      sections_url: window.location.pathname\n    });\n\n    fetch(`${routes.cart_change_url}`, {...fetchConfig(), ...{ body }})\n      .then((response) => {\n        return response.text();\n      })\n      .then((state) => {\n        const parsedState = JSON.parse(state);\n        this.classList.toggle('is-empty', parsedState.item_count === 0);\n        const cartDrawerWrapper = document.querySelector('cart-drawer');\n        const cartFooter = document.getElementById('main-cart-footer');\n\n        if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);\n        if (cartDrawerWrapper) cartDrawerWrapper.classList.toggle('is-empty', parsedState.item_count === 0);\n\n        this.getSectionsToRender().forEach((section => {\n          const elementToReplace =\n            document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);\n          elementToReplace.innerHTML =\n            this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);\n        }));\n\n        this.updateLiveRegions(line, parsedState.item_count);\n        const lineItem =  document.getElementById(`CartItem-${line}`) || document.getElementById(`CartDrawer-Item-${line}`);\n        if (lineItem && lineItem.querySelector(`[name=\"${name}\"]`)) {\n          cartDrawerWrapper ? trapFocus(cartDrawerWrapper, lineItem.querySelector(`[name=\"${name}\"]`)) : lineItem.querySelector(`[name=\"${name}\"]`).focus();\n        } else if (parsedState.item_count === 0 && cartDrawerWrapper) {\n          trapFocus(cartDrawerWrapper.querySelector('.drawer__inner-empty'), cartDrawerWrapper.querySelector('a'))\n        } else if (document.querySelector('.cart-item') && cartDrawerWrapper) {\n          trapFocus(cartDrawerWrapper, document.querySelector('.cart-item__name'))\n        }\n        this.disableLoading();\n      }).catch(() => {\n        this.querySelectorAll('.loading-overlay').forEach((overlay) => overlay.classList.add('hidden'));\n        const errors = document.getElementById('cart-errors') || document.getElementById('CartDrawer-CartErrors');\n        errors.textContent = window.cartStrings.error;\n        this.disableLoading();\n      });\n  }\n\n  updateLiveRegions(line, itemCount) {\n    if (this.currentItemCount === itemCount) {\n      const lineItemError = document.getElementById(`Line-item-error-${line}`) || document.getElementById(`CartDrawer-LineItemError-${line}`);\n      const quantityElement = document.getElementById(`Quantity-${line}`) || document.getElementById(`Drawer-quantity-${line}`);\n\n      lineItemError\n        .querySelector('.cart-item__error-text')\n        .innerHTML = window.cartStrings.quantityError.replace(\n          '[quantity]',\n          quantityElement.value\n        );\n    }\n\n    this.currentItemCount = itemCount;\n    this.lineItemStatusElement.setAttribute('aria-hidden', true);\n\n    const cartStatus = document.getElementById('cart-live-region-text') || document.getElementById('CartDrawer-LiveRegionText');\n    cartStatus.setAttribute('aria-hidden', false);\n\n    setTimeout(() => {\n      cartStatus.setAttribute('aria-hidden', true);\n    }, 1000);\n  }\n\n  getSectionInnerHTML(html, selector) {\n    return new DOMParser()\n      .parseFromString(html, 'text/html')\n      .querySelector(selector).innerHTML;\n  }\n\n  enableLoading(line) {\n    const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');\n    mainCartItems.classList.add('cart__items--disabled');\n\n    const cartItemElements = this.querySelectorAll(`#CartItem-${line} .loading-overlay`);\n    const cartDrawerItemElements = this.querySelectorAll(`#CartDrawer-Item-${line} .loading-overlay`);\n\n    [...cartItemElements, ...cartDrawerItemElements].forEach((overlay) => overlay.classList.remove('hidden'));\n\n    document.activeElement.blur();\n    this.lineItemStatusElement.setAttribute('aria-hidden', false);\n  }\n\n  disableLoading() {\n    const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');\n    mainCartItems.classList.remove('cart__items--disabled');\n  }\n}\n\ncustomElements.define('cart-items', CartItems);\n\nif (!customElements.get('cart-note')) {\n  customElements.define('cart-note', class CartNote extends HTMLElement {\n    constructor() {\n      super();\n\n      this.addEventListener('change', debounce((event) => {\n        const body = JSON.stringify({ note: event.target.value });\n        fetch(`${routes.cart_update_url}`, {...fetchConfig(), ...{ body }});\n      }, 300))\n    }\n  });\n}\n\n\n//# sourceURL=webpack://alessi-dawn/./src/scripts/components/component-cart.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/components/component-cart.js");
/******/ 	
/******/ })()
;