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

/***/ "./src/scripts/templates/theme-editor.js":
/*!***********************************************!*\
  !*** ./src/scripts/templates/theme-editor.js ***!
  \***********************************************/
/***/ (() => {

eval("document.addEventListener('shopify:block:select', function(event) {\n  const blockSelectedIsSlide = event.target.classList.contains('slideshow__slide');\n  if (!blockSelectedIsSlide) return;\n\n  const parentSlideshowComponent = event.target.closest('slideshow-component');\n  parentSlideshowComponent.pause();\n\n  setTimeout(function() {\n    parentSlideshowComponent.slider.scrollTo({\n      left: event.target.offsetLeft\n    });\n  }, 200);\n});\n\ndocument.addEventListener('shopify:block:deselect', function(event) {\n  const blockDeselectedIsSlide = event.target.classList.contains('slideshow__slide');\n  if (!blockDeselectedIsSlide) return;\n  const parentSlideshowComponent = event.target.closest('slideshow-component');\n  if (parentSlideshowComponent.autoplayButtonIsSetToPlay) parentSlideshowComponent.play();\n});\n\n\n//# sourceURL=webpack://alessi-dawn/./src/scripts/templates/theme-editor.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/templates/theme-editor.js"]();
/******/ 	
/******/ })()
;