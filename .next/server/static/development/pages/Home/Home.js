module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Footer/Footer.css":
/*!*********************************!*\
  !*** ./pages/Footer/Footer.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Footer/Footer.js":
/*!********************************!*\
  !*** ./pages/Footer/Footer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SmartLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SmartLink */ "./pages/SmartLink.js");
/* harmony import */ var _SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SocialMedia/SocialMedia */ "./pages/SocialMedia/SocialMedia.js");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.css */ "./pages/Footer/Footer.css");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Footer_css__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Footer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Footer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getDate", function () {
      var year = new Date().getFullYear();

      if (year !== 2019) {
        return "2019 - ".concat(year);
      }

      return year;
    });

    return _this;
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        className: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "footer",
        className: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: "footer-home",
        link: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "https://cdn.hytaledata.com/logo-black.png",
        alt: "Hytale Data Logo"
      }), "Hytale Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "footer-title"
      }, "SOLUTIONS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "Analytics"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "Payment Gateway"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "Plugins"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "APIs"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        id: "footer-company"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "footer-title"
      }, "COMPANY"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "Affiliate Program"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "Contact Us"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "footer-title"
      }, "LEGAL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "Terms of Service"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "Privacy Policy"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "Refund Policy"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "footer-social-media"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer-title"
      }, "SOCIAL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_2__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "copyright"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xA9 ", this.getDate(), " Hytale Data, LLC."), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Not affiliated with", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "Hytale",
        link: "//hytale.com",
        newTab: true
      }), " or", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "Hypixel Studios",
        link: "//hypixelstudios.com",
        newTab: true
      }), ".")));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./pages/Home/AboveTheFold/AboveTheFold.css":
/*!**************************************************!*\
  !*** ./pages/Home/AboveTheFold/AboveTheFold.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Home/AboveTheFold/AboveTheFold.js":
/*!*************************************************!*\
  !*** ./pages/Home/AboveTheFold/AboveTheFold.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AboveTheFold; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AboveTheFold_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboveTheFold.css */ "./pages/Home/AboveTheFold/AboveTheFold.css");
/* harmony import */ var _AboveTheFold_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AboveTheFold_css__WEBPACK_IMPORTED_MODULE_2__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var AboveTheFold =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AboveTheFold, _React$Component);

  function AboveTheFold(props) {
    var _this;

    _classCallCheck(this, AboveTheFold);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AboveTheFold).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getRandomData", function () {
      var data = [];

      for (var a = 0; a < 4; ++a) {
        data.push(Math.floor(Math.random() * 400) + 300);
      }

      return data;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setNewData", function () {
      _this.setState({
        chartData: {
          labels: ["April 21st", "April 22nd", "April 23rd", "April 24th"],
          datasets: [{
            label: "Revenue",
            data: _this.getRandomData(),
            fill: false,
            borderColor: "#fa9d1c",
            backgroundColor: "#fa9d1c"
          }, {
            label: "Average Player Count",
            data: _this.getRandomData(),
            fill: false,
            borderColor: "#018acf",
            backgroundColor: "#018acf"
          }, {
            label: "New Players Joined",
            data: _this.getRandomData(),
            fill: false,
            borderColor: '#ee4130',
            backgroundColor: '#ee4130'
          }]
        }
      }, function () {
        return setTimeout(_this.setNewData, 5000);
      });
    });

    _this.state = {
      chartData: {}
    };
    return _this;
  }

  _createClass(AboveTheFold, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      setTimeout(this.setNewData, 500);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "above-the-fold",
        className: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "intro-text",
        className: "center-v"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hytale Server Analytics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "The tools & metrics you need to grow your Hytale server.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "chart",
        className: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: this.state.chartData,
        options: {
          maintainAspectRatio: true,
          responsive: true,
          title: {
            text: "Hytale Server Analytics"
          },
          legend: {
            position: "bottom"
          },
          tooltips: {
            mode: "index",
            intersect: false
          },
          hover: {
            mode: "nearest",
            intersect: true
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      })));
    }
  }]);

  return AboveTheFold;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./pages/Home/Home.js":
/*!****************************!*\
  !*** ./pages/Home/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navigation_MainNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navigation/MainNavigation */ "./pages/Navigation/MainNavigation.js");
/* harmony import */ var _AboveTheFold_AboveTheFold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AboveTheFold/AboveTheFold */ "./pages/Home/AboveTheFold/AboveTheFold.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Footer/Footer */ "./pages/Footer/Footer.js");





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Hytale Data - The tools & metrics you need to grow your Hytale server.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_MainNavigation__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AboveTheFold_AboveTheFold__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
});

/***/ }),

/***/ "./pages/Navigation/MainNavigation.css":
/*!*********************************************!*\
  !*** ./pages/Navigation/MainNavigation.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Navigation/MainNavigation.js":
/*!********************************************!*\
  !*** ./pages/Navigation/MainNavigation.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainNavigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SmartLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SmartLink */ "./pages/SmartLink.js");
/* harmony import */ var _SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SocialMedia/SocialMedia */ "./pages/SocialMedia/SocialMedia.js");
/* harmony import */ var _MainNavigation_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainNavigation.css */ "./pages/Navigation/MainNavigation.css");
/* harmony import */ var _MainNavigation_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MainNavigation_css__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var MainNavigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainNavigation, _React$Component);

  function MainNavigation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MainNavigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MainNavigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      dropDownClass: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "navigation", ["Solutions", "Pricing", "Login", "Signup"]);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDropDownClick", function () {
      _this.setState({
        dropDownClass: _this.state.dropDownClass ? "" : "close"
      });
    });

    return _this;
  }

  _createClass(MainNavigation, [{
    key: "render",
    value: function render() {
      var dropDownClass = this.state.dropDownClass;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "center-v"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: "nav-home",
        className: "center",
        link: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "https://cdn.hytaledata.com/logo.png",
        alt: "Hytale Data Logo"
      }), "Hytale Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        id: "nav-links",
        className: "center ".concat(dropDownClass)
      }, this.navigation.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: item,
          className: "center"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
          link: "/".concat(item.toLowerCase())
        }, item));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_2__["default"], {
        classes: "nav-mobile-social-media"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_2__["default"], {
        classes: "nav-main-social-media"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "drop-down",
        className: dropDownClass,
        onClick: this.onDropDownClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)));
    }
  }]);

  return MainNavigation;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./pages/ScrollToTop.js":
/*!******************************!*\
  !*** ./pages/ScrollToTop.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
  var element = document.getElementById('top');

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  } else if (window) {
    window.scrollTo(0, 0);
  }
};

/***/ }),

/***/ "./pages/SmartLink.js":
/*!****************************!*\
  !*** ./pages/SmartLink.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmartLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScrollToTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollToTop */ "./pages/ScrollToTop.js");
/* harmony import */ var _ScrollToTop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ScrollToTop__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var SmartLink =
/*#__PURE__*/
function (_Component) {
  _inherits(SmartLink, _Component);

  function SmartLink() {
    _classCallCheck(this, SmartLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(SmartLink).apply(this, arguments));
  }

  _createClass(SmartLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          display = _this$props.display,
          _this$props$link = _this$props.link,
          link = _this$props$link === void 0 ? display.toLowerCase().replace(/ /g, "-") : _this$props$link,
          _this$props$newTab = _this$props.newTab,
          newTab = _this$props$newTab === void 0 ? false : _this$props$newTab,
          _this$props$id = _this$props.id,
          id = _this$props$id === void 0 ? "" : _this$props$id,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? "" : _this$props$className,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style;

      if (!link.startsWith("/")) {
        link = "/".concat(link);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: link,
        onClick: function onClick(event) {
          if (window) {
            var target = window.location.pathname.toLowerCase();

            if (link === target) {
              event.preventDefault();
              _ScrollToTop__WEBPACK_IMPORTED_MODULE_1___default()();
            }
          }
        },
        target: newTab ? "_blank" : "_self",
        rel: newTab ? "noopener noreferrer" : "",
        id: id,
        className: className,
        style: style
      }, display || this.props.children);
    }
  }]);

  return SmartLink;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./pages/SocialMedia/SocialMedia.css":
/*!*******************************************!*\
  !*** ./pages/SocialMedia/SocialMedia.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/SocialMedia/SocialMedia.js":
/*!******************************************!*\
  !*** ./pages/SocialMedia/SocialMedia.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocialMedia; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SmartLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SmartLink */ "./pages/SmartLink.js");
/* harmony import */ var _SocialMedia_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocialMedia.css */ "./pages/SocialMedia/SocialMedia.css");
/* harmony import */ var _SocialMedia_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SocialMedia_css__WEBPACK_IMPORTED_MODULE_2__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var SocialMedia =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SocialMedia, _React$Component);

  function SocialMedia() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SocialMedia);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SocialMedia)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "platforms", [{
      name: "discord",
      url: "//discord.gg/UGADfhu"
    }, {
      name: "twitter"
    }, {
      name: "instagram"
    }, {
      name: "youtube",
      url: "//www.youtube.com/channel/UCDedgLAW1v4AYMllKUKzw2w"
    }]);

    return _this;
  }

  _createClass(SocialMedia, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "center social-media ".concat(this.props.classes || "")
      }, this.platforms.map(function (platform) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: platform.name
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
          link: platform.url || "//".concat(platform.name, ".com/HytaleData"),
          newTab: true
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fab fa-".concat(platform.name)
        })));
      }));
    }
  }]);

  return SocialMedia;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/Home/Home.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/Home/Home.js */"./pages/Home/Home.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ })

/******/ });
//# sourceMappingURL=Home.js.map