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
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmartLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScrollToTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
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
          underline = _this$props.underline,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style;

      if (!link.startsWith("/")) {
        link = "/".concat(link);
      }

      if (underline) {
        style.textDecoration = "underline";
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {



/***/ }),

/***/ 13:
/***/ (function(module, exports) {



/***/ }),

/***/ 2:
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

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocialMedia; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SmartLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _SocialMedia_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "platforms", ["discord", "twitter", "instagram", "youtube"]);

    return _this;
  }

  _createClass(SocialMedia, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          only = _this$props.only,
          classes = _this$props.classes,
          source = _this$props.source;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "center social-media ".concat(classes || "")
      }, this.platforms.map(function (platform) {
        if (only && platform !== only) {
          return;
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: platform
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
          link: "/sm/".concat(platform, "?s=").concat(source),
          newTab: true
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fab fa-".concat(platform)
        })));
      }));
    }
  }]);

  return SocialMedia;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 4:
/***/ (function(module, exports) {



/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(52);


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Legal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _SmartLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _Legal_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53);
/* harmony import */ var _Legal_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Legal_css__WEBPACK_IMPORTED_MODULE_4__);


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






var Legal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Legal, _React$Component);

  function Legal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Legal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Legal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "company", "Hytale Data");

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollTo", function (target) {
      var element = document.getElementById(target);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }
    });

    return _this;
  }

  _createClass(Legal, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavFooter__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Hytale Data - Legal")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "legal-container center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "legal center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "These terms were last updated on January 18th, 2019.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "legal-definitions"
      }, "Throughout the site, the terms \"we\", \"us\", and \"our\" refer to Hytale Data. The terms \"site\" and \"website\" refer to HytaleData.com, which is owned and operated by Hytale Data. The terms \"you\", and \"your\" refer to website visitors, users, and customers. We offer this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "By visiting our site, creating an account, or subscribing to a paid plan, you engage in our \"Service\" and agree to be bound by the following terms and conditions, privacy policy, and refund policy (Collectively \"Terms\"). These Terms apply to all users of the site. Please read the Terms of Service, Privacy Policy, and Refund Policy carefully before accessing or using our website."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "terms-of-service"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "legal-title"
      }, "Terms of Service"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "We reserves the right to terminate your account at any time with or without prior warning if we believe you are breaking our terms."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "You may NOT modify, redistribute, decompile, or reverse engineer any our plugins, source code, or services in any way."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "We are NOT responsible for any loss of data, revenue, or uptime that may occur when using our services. This includes, but is not limited to, downtime, bugs, and glitches."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "You may NOT attempt to chargeback or request a refund outside of the", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "legal-scroll-to",
        onClick: this.scrollTo.bind(this, "refund-policy")
      }, "Refund Policy's"), " ", "terms listed on this page."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "We reserves the right to remove, change, and limit any of our features at any time with or without prior warning."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "All of our features are provided on an \"as-is\" basis."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "You may NOT send data to our servers outside of the official APIs and plugins."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Any data you provide to us may be used internally to improve our services."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "We cannot guarantee the accuracy or legitimacy of any data provided by our services."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "These terms and conditions are governed and construed in accordance with the laws of California, United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "privacy-policy"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "legal-title"
      }, "Privacy Policy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "This Privacy Policy governs what data we collect and what we do with that data. This Privacy Policy only applies to our website. Downloadable content and software such as plugins and scripts will have their own Privacy Policy on the download page.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "This website is not intended for children and we do not knowingly collect data relating to children. We realise and understand that children and young people may visit this website, or otherwise interact with us and our commercial partners. It is our policy to encourage all minors to consult with their parents or legal guardian before submitting any content or information to us, our commercial partners or other third parties."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-title"
      }, "When do we collect data?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We collect user data whenever a user opts in to our email list, creates an account, pays for a subscription billing plan, or contacts customer support.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-title"
      }, "What data do we collect?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Often times we only collect email addresses from our users. Only when necessary will we ask for and collect mailing addresses and phone numbers.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-title"
      }, "Why do we need your data?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Data is collected for a number of reasons:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        style: {
          listStyleType: "disc"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Deliver a more personalized experience to our users."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Confirm and secure registered accounts and customer support contact sessions."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Optimize our digital advertising campaigns."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Reach out to our customers via email for promotions, surveys, and contest results."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-title"
      }, "How is payment information collected and stored?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We use", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        display: "Stripe",
        link: "//stripe.com",
        newTab: true,
        underline: true
      }), " ", "to process all payments. We cannot view or access your full credit card number, expiration date, or security code. We are only given access to the last 4 digits of your card number for verification purposes.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "All payments are secure and up to PCI standards to ensure your payment data never gets into the wrong hands. Click", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        display: "here",
        link: "//stripe.com/docs/security",
        newTab: true,
        underline: true
      }), " ", "for more information on how Stripe handles payments and legal compliance.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-title"
      }, "How do we protect your data?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "All data collected is done so over SSL (Secure Socket Layer) technology which encrypts your data. Our website and servers are hosted on", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        display: "Amazon Web Services",
        link: "//aws.amazon.com",
        newTab: true,
        underline: true
      }), " ", "and the industry standard security practices are in place.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-title"
      }, "Do we use \"cookies\"?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Yes, browser cookies are used to improve your experience on our website. Browser cookies are very small files that are stored on your computer whenever you visit a website. These files help us remember your preferences and settings for your next visit. Browser cookies are used on nearly every website and do not pose any harm or negative affects.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-title"
      }, "Do we share your data?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The only data that would potentially be shared is your email addresses. Social media advertising platforms allow us to submit a list of emails to better understand the audience that our company is trying to reach. You will never be sent an email from this process.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-title"
      }, "When is my data deleted?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Any and all data we have collected from a user will be deleted 7 days after they have terminated their own account.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-title"
      }, "Compliance with children's online privacy protection act"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Protecting the privacy of the very young is especially important. For that reason, we never collect or maintain information at our Site from those we actually know are under 13, and no part of our website is structured to attract anyone under 13.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pp-title"
      }, "Changes to this Privacy Policy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We reserve the right to update this policy at any time with or without prior warning. It is your responsibility to check this page for updates to our terms. The date this page has been updated at can always be found at the top."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "refund-policy"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "legal-title"
      }, "Refund Policy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "The refund policy will be made public once open beta testing begins.")))));
    }
  }]);

  return Legal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 53:
/***/ (function(module, exports) {



/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainNavigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SmartLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _MainNavigation_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
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
      style: {}
    });

    return _this;
  }

  _createClass(MainNavigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          style: {
            opacity: 1
          }
        });
      }, 750);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "center-v"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "nav",
        className: "center-v"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: "nav-home",
        className: "center",
        link: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "https://cdn.hytaledata.com/logo-slim-black.png",
        alt: "Hytale Data Logo"
      }), "Hytale Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: "beta-testing-button",
        link: "/beta-testing"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        style: this.state.style
      }, "FREE BETA TESTING")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_2__["default"], {
        source: "navigation",
        classes: "nav-main-social-media"
      })));
    }
  }]);

  return MainNavigation;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SmartLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
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
        src: "https://cdn.hytaledata.com/logo-slim-black.png",
        alt: "Hytale Data Logo"
      }), "Hytale Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "footer-title"
      }, "LEGAL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "Terms of Service",
        link: "/legal#terms-of-service"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "Privacy Policy",
        link: "/legal#privacy-policy"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "Refund Policy",
        link: "/legal#refund-policy"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "footer-social-media"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer-title"
      }, "SOCIAL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_2__["default"], {
        source: "footer"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "copyright"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xA9 ", this.getDate(), " Hytale Data."), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Not affiliated with", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "Hytale",
        link: "//hytale.com",
        newTab: true
      }), " or", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "Hypixel Studios",
        link: "//hypixelstudios.com",
        newTab: true
      }), ". Hytale and Hytale images are trademarked property of Hypixel Studios.")));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation_MainNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return props.noNav ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.children) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_MainNavigation__WEBPACK_IMPORTED_MODULE_1__["default"], null), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
});

/***/ })

/******/ });