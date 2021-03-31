/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const container = document.createElement('div');
  container.classList.add('section-container');

  const heading1 = document.createElement('h3');
  const heading2 = document.createElement('h3');
  const heading3 = document.createElement('h3');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');

  heading1.textContent = 'Our Story'
  heading2.textContent = 'Our People'
  heading3.textContent = 'Our Pasta'

  p1.textContent = 'We are Monzu Fresh Pasta, serving Italian and contemporary flavors made from scratch in the heart of San Diego’s East Village. In drawing upon our European heritage and passion for hand-crafted meals, we take pride in transporting you to Italy via our home country’s most beloved staple: fresh pasta. Monzu is a Neapolitan corruption of the French term “monsieur.” Neapolitan and Sicilian Monzu were renowned professional French-trained chefs who worked for aristocracy and members of the Bourbon court in 18th and 19th century Southern Italy. They became especially popular for their ability to mix French cuisine and Southern Italian ingredients. Their secret recipes, among them many different pasta specialties, are today part of the Italian food tradition.'
  p2.textContent = 'Monzu Fresh Pasta is the family-owned creation of Neapolitan Aldo de Dominicis Rotondi and Serena Romano, a husband-wife team who share a strong belief in the Slow Food movement. Having trained with Italy\'s master pasta makers, Aldo and Serena lead the kitchen with centuries-old pasta making techniques and recipes hailing from distinct Italian regions including Sicily, Campania and Puglia.'
  p3.textContent = 'Here you’ll discover authentic fresh pastas and sauces crafted in-house using local, organic and seasonal ingredients as well as pasture-raised eggs. From ravioli to tagliatelle and lasagna, every pasta is personalized with your choice of sauce, like Bolognese and Ligurian pesto. Plus, enjoy daily and weekly specials and savor the fact that several of our dishes cater to dairy-free, vegetarian and vegan diets.'

  container.appendChild(heading1);
  container.appendChild(p1);
  container.appendChild(heading2);
  container.appendChild(p2);
  container.appendChild(heading3);
  container.appendChild(p3);

  return container;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const container = document.createElement('div');
  container.classList.add('homepage-container');

  const heading = document.createElement('h1');
  heading.textContent = 'Monzú Fresh Pasta'

  const tagline = document.createElement('h4');
  tagline.textContent = 'Made from scratch in San Diego';

  container.appendChild(heading);
  container.appendChild(tagline);

  return container;
}

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ "./src/about.js");



const content = document.getElementById('content')
content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)());

const tabsHandler = (() => {
  const tabs = document.querySelectorAll('.tab');

  const clearActiveTabs = () => {
    tabs.forEach((tab) => tab.classList.remove('tab-active'));
  }

  tabs.forEach((tab) => tab.addEventListener('click', clearActiveTabs));

  const homeTab = document.querySelector('.home');
  homeTab.addEventListener('click', () => {
    homeTab.classList.add('tab-active');
    content.firstChild.replaceWith((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)());
  })

  const aboutTab = document.querySelector('.about');
  aboutTab.addEventListener('click', () => {
    aboutTab.classList.add('tab-active');
    content.firstChild.replaceWith((0,_about_js__WEBPACK_IMPORTED_MODULE_1__.default)());
  })
})();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map