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

/***/ "./src/scripts/components/component-media-gallery.js":
/*!***********************************************************!*\
  !*** ./src/scripts/components/component-media-gallery.js ***!
  \***********************************************************/
/***/ (() => {

eval("if (!customElements.get('media-gallery')) {\n  customElements.define('media-gallery', class MediaGallery extends HTMLElement {\n    constructor() {\n      super();\n      this.elements = {\n        liveRegion: this.querySelector('[id^=\"GalleryStatus\"]'),\n        viewer: this.querySelector('[id^=\"GalleryViewer\"]'),\n        thumbnails: this.querySelector('[id^=\"GalleryThumbnails\"]')\n      }\n      this.mql = window.matchMedia('(min-width: 750px)');\n      if (!this.elements.thumbnails) return;\n\n      this.elements.viewer.addEventListener('slideChanged', debounce(this.onSlideChanged.bind(this), 500));\n      this.elements.thumbnails.querySelectorAll('[data-target]').forEach((mediaToSwitch) => {\n        mediaToSwitch.querySelector('button').addEventListener('click', this.setActiveMedia.bind(this, mediaToSwitch.dataset.target, false));\n      });\n      if (this.dataset.desktopLayout !== 'stacked' && this.mql.matches) this.removeListSemantic();\n    }\n\n    onSlideChanged(event) {\n      const thumbnail = this.elements.thumbnails.querySelector(`[data-target=\"${ event.detail.currentElement.dataset.mediaId }\"]`);\n      this.setActiveThumbnail(thumbnail);\n    }\n\n    setActiveMedia(mediaId, prepend) {\n      const activeMedia = this.elements.viewer.querySelector(`[data-media-id=\"${ mediaId }\"]`);\n      this.elements.viewer.querySelectorAll('[data-media-id]').forEach((element) => {\n        element.classList.remove('is-active');\n      });\n      activeMedia.classList.add('is-active');\n\n      if (prepend) {\n        activeMedia.parentElement.prepend(activeMedia);\n        if (this.elements.thumbnails) {\n          const activeThumbnail = this.elements.thumbnails.querySelector(`[data-target=\"${ mediaId }\"]`);\n          activeThumbnail.parentElement.prepend(activeThumbnail);\n        }\n        if (this.elements.viewer.slider) this.elements.viewer.resetPages();\n      }\n\n      this.preventStickyHeader();\n      window.setTimeout(() => {\n        if (this.elements.thumbnails) {\n          activeMedia.parentElement.scrollTo({ left: activeMedia.offsetLeft });\n        }\n        if (!this.elements.thumbnails || this.dataset.desktopLayout === 'stacked') {\n          activeMedia.scrollIntoView({behavior: 'smooth'});\n        }\n      });\n      this.playActiveMedia(activeMedia);\n\n      if (!this.elements.thumbnails) return;\n      const activeThumbnail = this.elements.thumbnails.querySelector(`[data-target=\"${ mediaId }\"]`);\n      this.setActiveThumbnail(activeThumbnail);\n      this.announceLiveRegion(activeMedia, activeThumbnail.dataset.mediaPosition);\n    }\n\n    setActiveThumbnail(thumbnail) {\n      if (!this.elements.thumbnails || !thumbnail) return;\n\n      this.elements.thumbnails.querySelectorAll('button').forEach((element) => element.removeAttribute('aria-current'));\n      thumbnail.querySelector('button').setAttribute('aria-current', true);\n      if (this.elements.thumbnails.isSlideVisible(thumbnail, 10)) return;\n\n      this.elements.thumbnails.slider.scrollTo({ left: thumbnail.offsetLeft });\n    }\n\n    announceLiveRegion(activeItem, position) {\n      const image = activeItem.querySelector('.product__modal-opener--image img');\n      if (!image) return;\n      image.onload = () => {\n        this.elements.liveRegion.setAttribute('aria-hidden', false);\n        this.elements.liveRegion.innerHTML = window.accessibilityStrings.imageAvailable.replace(\n          '[index]',\n          position\n        );\n        setTimeout(() => {\n          this.elements.liveRegion.setAttribute('aria-hidden', true);\n        }, 2000);\n      };\n      image.src = image.src;\n    }\n\n    playActiveMedia(activeItem) {\n      window.pauseAllMedia();\n      const deferredMedia = activeItem.querySelector('.deferred-media');\n      if (deferredMedia) deferredMedia.loadContent(false);\n    }\n\n    preventStickyHeader() {\n      this.stickyHeader = this.stickyHeader || document.querySelector('sticky-header');\n      if (!this.stickyHeader) return;\n      this.stickyHeader.dispatchEvent(new Event('preventHeaderReveal'));\n    }\n\n    removeListSemantic() {\n      if (!this.elements.viewer.slider) return;\n      this.elements.viewer.slider.setAttribute('role', 'presentation');\n      this.elements.viewer.sliderItems.forEach(slide => slide.setAttribute('role', 'presentation'));\n    }\n  });\n}\n\n\n//# sourceURL=webpack://alessi-dawn/./src/scripts/components/component-media-gallery.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/components/component-media-gallery.js"]();
/******/ 	
/******/ })()
;