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

/***/ "./src/scripts/components/component-product-form.js":
/*!**********************************************************!*\
  !*** ./src/scripts/components/component-product-form.js ***!
  \**********************************************************/
/***/ (() => {

eval("if (!customElements.get('product-form')) {\n  customElements.define('product-form', class ProductForm extends HTMLElement {\n    constructor() {\n      super();\n\n      this.form = this.querySelector('form');\n      this.form.querySelector('[name=id]').disabled = false;\n      this.form.addEventListener('submit', this.onSubmitHandler.bind(this));\n      this.cart = document.querySelector('cart-notification') || document.querySelector('cart-drawer');\n      this.submitButton = this.querySelector('[type=\"submit\"]');\n      if (document.querySelector('cart-drawer')) this.submitButton.setAttribute('aria-haspopup', 'dialog');\n    }\n\n    onSubmitHandler(evt) {\n      evt.preventDefault();\n      if (this.submitButton.getAttribute('aria-disabled') === 'true') return;\n\n      this.handleErrorMessage();\n\n      this.submitButton.setAttribute('aria-disabled', true);\n      this.submitButton.classList.add('loading');\n      this.querySelector('.loading-overlay__spinner').classList.remove('hidden');\n\n      const config = fetchConfig('javascript');\n      config.headers['X-Requested-With'] = 'XMLHttpRequest';\n      delete config.headers['Content-Type'];\n\n      const formData = new FormData(this.form);\n      if (this.cart) {\n        formData.append('sections', this.cart.getSectionsToRender().map((section) => section.id));\n        formData.append('sections_url', window.location.pathname);\n        this.cart.setActiveElement(document.activeElement);\n      }\n      config.body = formData;\n\n      fetch(`${routes.cart_add_url}`, config)\n        .then((response) => response.json())\n        .then((response) => {\n          if (response.status) {\n            this.handleErrorMessage(response.description);\n\n            const soldOutMessage = this.submitButton.querySelector('.sold-out-message');\n            if (!soldOutMessage) return;\n            this.submitButton.setAttribute('aria-disabled', true);\n            this.submitButton.querySelector('span').classList.add('hidden');\n            soldOutMessage.classList.remove('hidden');\n            this.error = true;\n            return;\n          } else if (!this.cart) {\n            window.location = window.routes.cart_url;\n            return;\n          }\n\n          this.error = false;\n          const quickAddModal = this.closest('quick-add-modal');\n          if (quickAddModal) {\n            document.body.addEventListener('modalClosed', () => {\n              setTimeout(() => { this.cart.renderContents(response) });\n            }, { once: true });\n            quickAddModal.hide(true);\n          } else {\n            this.cart.renderContents(response);\n          }\n        })\n        .catch((e) => {\n          console.error(e);\n        })\n        .finally(() => {\n          this.submitButton.classList.remove('loading');\n          if (this.cart && this.cart.classList.contains('is-empty')) this.cart.classList.remove('is-empty');\n          if (!this.error) this.submitButton.removeAttribute('aria-disabled');\n          this.querySelector('.loading-overlay__spinner').classList.add('hidden');\n        });\n    }\n\n    handleErrorMessage(errorMessage = false) {\n      this.errorMessageWrapper = this.errorMessageWrapper || this.querySelector('.product-form__error-message-wrapper');\n      if (!this.errorMessageWrapper) return;\n      this.errorMessage = this.errorMessage || this.errorMessageWrapper.querySelector('.product-form__error-message');\n\n      this.errorMessageWrapper.toggleAttribute('hidden', !errorMessage);\n\n      if (errorMessage) {\n        this.errorMessage.textContent = errorMessage;\n      }\n    }\n  });\n}\n\n\n//# sourceURL=webpack://alessi-dawn/./src/scripts/components/component-product-form.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/components/component-product-form.js"]();
/******/ 	
/******/ })()
;