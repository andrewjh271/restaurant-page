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

  heading1.textContent = 'Our Story';
  heading2.textContent = 'Our People';
  heading3.textContent = 'Our Pasta';

  p1.textContent =
    'We are Monzu Fresh Pasta, serving Italian and contemporary flavors made from scratch in the heart of San Diego’s East Village. In drawing upon our European heritage and passion for hand-crafted meals, we take pride in transporting you to Italy via our home country’s most beloved staple: fresh pasta. Monzu is a Neapolitan corruption of the French term “monsieur.” Neapolitan and Sicilian Monzu were renowned professional French-trained chefs who worked for aristocracy and members of the Bourbon court in 18th and 19th century Southern Italy. They became especially popular for their ability to mix French cuisine and Southern Italian ingredients. Their secret recipes, among them many different pasta specialties, are today part of the Italian food tradition.';
  p2.textContent =
    "Monzu Fresh Pasta is the family-owned creation of Neapolitan Aldo de Dominicis Rotondi and Serena Romano, a husband-wife team who share a strong belief in the Slow Food movement. Having trained with Italy's master pasta makers, Aldo and Serena lead the kitchen with centuries-old pasta making techniques and recipes hailing from distinct Italian regions including Sicily, Campania and Puglia.";
  p3.textContent =
    'Here you’ll discover authentic fresh pastas and sauces crafted in-house using local, organic and seasonal ingredients as well as pasture-raised eggs. From ravioli to tagliatelle and lasagna, every pasta is personalized with your choice of sauce, like Bolognese and Ligurian pesto. Plus, enjoy daily and weekly specials and savor the fact that several of our dishes cater to dairy-free, vegetarian and vegan diets.';

  container.appendChild(heading1);
  container.appendChild(p1);
  container.appendChild(heading2);
  container.appendChild(p2);
  container.appendChild(heading3);
  container.appendChild(p3);

  return container;
}


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
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

  heading1.textContent = 'Address';
  heading2.textContent = 'Phone';
  heading3.textContent = 'Email';

  p1.innerHTML = '455 10th Avenue <br> San Diego, CA 92101';
  p2.textContent = '619.255.5032';
  p3.textContent = 'info@monzufreshpasta.com';

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
  heading.textContent = 'Monzú Fresh Pasta';

  const tagline = document.createElement('h4');
  tagline.textContent = 'Made from scratch in San Diego';

  container.appendChild(heading);
  container.appendChild(tagline);

  return container;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const container = document.createElement('div');
  container.classList.add('section-container', 'menu-container');

  const heading1 = document.createElement('h2');
  heading1.textContent = 'APPETIZERS AND SALADS';

  const plate1 = document.createElement('h3');
  plate1.textContent = 'FIORILLI PLATE | 15';
  const description1 = document.createElement('p');
  description1.textContent =
    'Deep fried zucchini blossoms stuffed with cheese and mozzarella, served with a side of zucchini spaghetti, arugula and tomatoes';

  const plate2 = document.createElement('h3');
  plate2.textContent = 'GRILLED SCALLOPS | 14';
  const description2 = document.createElement('p');
  description2.textContent =
    'Served over our pesto vinaigrette and toasted focaccia';

  const plate3 = document.createElement('h3');
  plate3.textContent = 'CALAMARI FRITTI | 12';
  const description3 = document.createElement('p');
  description3.textContent = 'Fried calamari served with our marinara sauce';

  const plate4 = document.createElement('h3');
  plate4.textContent = 'CLASSIC BURRATA SALAD | 15';
  const description4 = document.createElement('p');
  description4.textContent =
    'Spring mix, burrata cheese, tomatoes, Italian olives, extra virgin olive oil, balsamic galze';

  const heading2 = document.createElement('h2');
  heading2.textContent = 'ITALIAN STYLE FLATBREADS';

  const plate5 = document.createElement('h3');
  plate5.textContent = 'ROSA | 15';
  const description5 = document.createElement('p');
  description5.textContent =
    'Red sauce, cherry tomatoes, mozzarella, basil, grated cheese';

  const plate6 = document.createElement('h3');
  plate6.textContent = 'SPICY CALABRIAN SAUSAGE | 16';
  const description6 = document.createElement('p');
  description6.textContent =
    'Red sauce, italian sausage, mushroom, Calabrian Nduja, mozzarella, grated cheese';

  const plate7 = document.createElement('h3');
  plate7.textContent = 'TARTUFO | 17';
  const description7 = document.createElement('p');
  description7.textContent =
    'Burrata, truffle honey, truffle carpaccio, black pepper';

  const column1 = document.createElement('div');

  column1.appendChild(heading1);
  column1.appendChild(plate1);
  column1.appendChild(description1);
  column1.appendChild(plate2);
  column1.appendChild(description2);
  column1.appendChild(plate2);
  column1.appendChild(description2);
  column1.appendChild(plate3);
  column1.appendChild(description3);
  column1.appendChild(plate4);
  column1.appendChild(description4);

  column1.appendChild(heading2);
  column1.appendChild(plate5);
  column1.appendChild(description5);
  column1.appendChild(plate6);
  column1.appendChild(description6);
  column1.appendChild(plate7);
  column1.appendChild(description7);

  const heading3 = document.createElement('h2');
  heading3.textContent = 'PASTA';

  const plate8 = document.createElement('h3');
  plate8.textContent = 'SPAGHETTI GAMBERI E LIMONE | 20';
  const description8 = document.createElement('p');
  description8.textContent =
    'Spaghetti served with a shrimp sauteed in a lemon butter and garlic sauce.';

  const plate9 = document.createElement('h3');
  plate9.textContent = 'PISTACHIO PESTO GNOCCHI | 22';
  const description9 = document.createElement('p');
  description9.textContent =
    'Giant asiago-stuffed gnocchi served with a Sicilian Pistachio pesto, burrata flakes and cherry tomato';

  const plate10 = document.createElement('h3');
  plate10.textContent = 'CASARECCE AL POMODORO | 15';
  const description10 = document.createElement('p');
  description10.textContent = 'Red sauce, basil, grated pecorino cheese';

  const plate11 = document.createElement('h3');
  plate11.textContent = 'TAGLIATELLE ALLA BOLOGNESE | 17';
  const description11 = document.createElement('p');
  description11.textContent =
    'Tender slow-cooked ground beef and tomato sauce, served with cheese';

  const plate12 = document.createElement('h3');
  plate12.textContent = 'PORCINI E SALSICCIA FUSILLI | 18';
  const description12 = document.createElement('p');
  description12.textContent =
    'Imported porcini mushrooms, fennel sausage, cream sauce, pepper and cheese';

  const heading4 = document.createElement('h2');
  heading4.textContent = 'DESSERTS';

  const plate13 = document.createElement('h3');
  plate13.textContent = 'TIRAMISU | 8';

  const plate14 = document.createElement('h3');
  plate14.textContent = 'CANNOLI | 7';

  const plate15 = document.createElement('h3');
  plate15.textContent = 'AMALFI LEMON CAKE | 7';

  const plate16 = document.createElement('h3');
  plate16.textContent = 'ESPRESSO COFFEE | 3.5';

  const column2 = document.createElement('div');

  column2.appendChild(heading3);
  column2.appendChild(plate8);
  column2.appendChild(description8);
  column2.appendChild(plate9);
  column2.appendChild(description9);
  column2.appendChild(plate10);
  column2.appendChild(description10);
  column2.appendChild(plate11);
  column2.appendChild(description11);
  column2.appendChild(plate12);
  column2.appendChild(description12);

  column2.appendChild(heading4);
  column2.appendChild(plate13);
  column2.appendChild(plate14);
  column2.appendChild(plate15);
  column2.appendChild(plate16);

  container.appendChild(column1);
  container.appendChild(column2);

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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





const content = document.getElementById('content');
content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.default)());

const tabsHandler = (() => {
  const tabs = document.querySelectorAll('.tab');

  const clearActiveTabs = () => {
    tabs.forEach((tab) => tab.classList.remove('tab-active'));
  };

  tabs.forEach((tab) => tab.addEventListener('click', clearActiveTabs));

  const homeTab = document.querySelector('.home');
  homeTab.addEventListener('click', () => {
    homeTab.classList.add('tab-active');
    content.firstChild.replaceWith((0,_home__WEBPACK_IMPORTED_MODULE_0__.default)());
  });

  const aboutTab = document.querySelector('.about');
  aboutTab.addEventListener('click', () => {
    aboutTab.classList.add('tab-active');
    content.firstChild.replaceWith((0,_about__WEBPACK_IMPORTED_MODULE_1__.default)());
  });

  const menuTab = document.querySelector('.menu');
  menuTab.addEventListener('click', () => {
    menuTab.classList.add('tab-active');
    content.firstChild.replaceWith((0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)());
  });

  const locationTab = document.querySelector('.contact');
  locationTab.addEventListener('click', () => {
    locationTab.classList.add('tab-active');
    content.firstChild.replaceWith((0,_contact__WEBPACK_IMPORTED_MODULE_3__.default)());
  });
})();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map