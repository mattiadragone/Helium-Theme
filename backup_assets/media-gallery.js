!function(){"use strict";var e,t={233:function(e,t,n){var i=n(671),r=n(144),a=n(326),s=n(136),l=n(215),o=n(798),c=n(112);function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,o.Z)(e);if(t){var r=(0,o.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,l.Z)(this,n)}}customElements.get("media-gallery")||customElements.define("media-gallery",function(e){(0,s.Z)(n,e);var t=u(n);function n(){var e;return(0,i.Z)(this,n),(e=t.call(this)).elements={liveRegion:e.querySelector('[id^="GalleryStatus"]'),viewer:e.querySelector('[id^="GalleryViewer"]'),thumbnails:e.querySelector('[id^="GalleryThumbnails"]')},e.mql=window.matchMedia("(min-width: 750px)"),e.elements.thumbnails?(e.elements.viewer.addEventListener("slideChanged",debounce(e.onSlideChanged.bind((0,a.Z)(e)),500)),e.elements.thumbnails.querySelectorAll("[data-target]").forEach((function(t){t.querySelector("button").addEventListener("click",e.setActiveMedia.bind((0,a.Z)(e),t.dataset.target,!1))})),"stacked"!==e.dataset.desktopLayout&&e.mql.matches&&e.removeListSemantic(),e):(0,l.Z)(e)}return(0,r.Z)(n,[{key:"onSlideChanged",value:function(e){var t=this.elements.thumbnails.querySelector('[data-target="'.concat(e.detail.currentElement.dataset.mediaId,'"]'));this.setActiveThumbnail(t)}},{key:"setActiveMedia",value:function(e,t){var n=this,i=this.elements.viewer.querySelector('[data-media-id="'.concat(e,'"]'));if(this.elements.viewer.querySelectorAll("[data-media-id]").forEach((function(e){e.classList.remove("is-active")})),i.classList.add("is-active"),t){if(i.parentElement.prepend(i),this.elements.thumbnails){var r=this.elements.thumbnails.querySelector('[data-target="'.concat(e,'"]'));r.parentElement.prepend(r)}this.elements.viewer.slider&&this.elements.viewer.resetPages()}if(this.preventStickyHeader(),window.setTimeout((function(){n.elements.thumbnails&&i.parentElement.scrollTo({left:i.offsetLeft}),n.elements.thumbnails&&"stacked"!==n.dataset.desktopLayout||i.scrollIntoView({behavior:"smooth"})})),this.playActiveMedia(i),this.elements.thumbnails){var a=this.elements.thumbnails.querySelector('[data-target="'.concat(e,'"]'));this.setActiveThumbnail(a),this.announceLiveRegion(i,a.dataset.mediaPosition)}}},{key:"setActiveThumbnail",value:function(e){this.elements.thumbnails&&e&&(this.elements.thumbnails.querySelectorAll("button").forEach((function(e){return e.removeAttribute("aria-current")})),e.querySelector("button").setAttribute("aria-current",!0),this.elements.thumbnails.isSlideVisible(e,10)||this.elements.thumbnails.slider.scrollTo({left:e.offsetLeft}))}},{key:"announceLiveRegion",value:function(e,t){var n=this,i=e.querySelector(".product__modal-opener--image img");i&&(i.onload=function(){n.elements.liveRegion.setAttribute("aria-hidden",!1),n.elements.liveRegion.innerHTML=window.accessibilityStrings.imageAvailable.replace("[index]",t),setTimeout((function(){n.elements.liveRegion.setAttribute("aria-hidden",!0)}),2e3)},i.src=i.src)}},{key:"playActiveMedia",value:function(e){window.pauseAllMedia();var t=e.querySelector(".deferred-media");t&&t.loadContent(!1)}},{key:"preventStickyHeader",value:function(){this.stickyHeader=this.stickyHeader||document.querySelector("sticky-header"),this.stickyHeader&&this.stickyHeader.dispatchEvent(new Event("preventHeaderReveal"))}},{key:"removeListSemantic",value:function(){this.elements.viewer.slider&&(this.elements.viewer.slider.setAttribute("role","presentation"),this.elements.viewer.sliderItems.forEach((function(e){return e.setAttribute("role","presentation")})))}}]),n}((0,c.Z)(HTMLElement)))}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,i),a.exports}i.m=t,e=[],i.O=function(t,n,r,a){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],a=e[u][2];for(var l=!0,o=0;o<n.length;o++)(!1&a||s>=a)&&Object.keys(i.O).every((function(e){return i.O[e](n[o])}))?n.splice(o--,1):(l=!1,a<s&&(s=a));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.j=838,function(){var e={838:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,s=n[0],l=n[1],o=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in l)i.o(l,r)&&(i.m[r]=l[r]);if(o)var u=o(i)}for(t&&t(n);c<s.length;c++)a=s[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(u)},n=self.webpackChunkalessi_dawn=self.webpackChunkalessi_dawn||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=i.O(void 0,[736],(function(){return i(233)}));r=i.O(r)}();