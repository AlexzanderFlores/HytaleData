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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmartLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScrollToTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _ScrollToTop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ScrollToTop__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        link = "https://hytaledata.com/".concat(link);
      }

      if (underline) {
        style.textDecoration = "underline";
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", _defineProperty({
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
      }, "target", "_parent"), display || this.props.children);
    }
  }]);

  return SmartLink;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),
/* 2 */
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
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = require("amazon-cognito-identity-js");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Checkbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Checkbox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _Checkbox_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Checkbox_css__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Checkbox =
/*#__PURE__*/
function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var handler = this.props.handler || null;
      var classes = this.props.classes ? this.props.classes + " checkbox" : "checkbox";
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.cbId,
        className: "checkbox",
        title: this.props.title
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        id: this.props.id,
        name: this.props.id,
        className: classes,
        onChange: handler,
        checked: this.props.checked
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: this.props.id
      }, this.props.children));
    }
  }]);

  return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_0__);

var poolData = {
  UserPoolId: "us-east-1_IQYwWPwjw",
  ClientId: "4duqbvk8skova44qfurqdh29et"
};
/* harmony default export */ __webpack_exports__["default"] = (new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_0__["CognitoUserPool"](poolData));

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Recaptcha; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SmartLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _Recaptcha_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _Recaptcha_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Recaptcha_css__WEBPACK_IMPORTED_MODULE_2__);


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




var Recaptcha =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Recaptcha, _React$Component);

  function Recaptcha() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Recaptcha);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Recaptcha)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "siteKey", "6Ld31IkUAAAAAN--L8Z5eYfuQ3vjUZI4DgqSR0dY");

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initRecaptcha", function () {
      if (window.grecaptcha) {
        window.grecaptcha.ready(function () {
          window.grecaptcha.execute(_this.siteKey, {
            action: _this.props.action
          }).then(function (response) {
            return fetch("/recaptcha?response=".concat(response));
          });
        });
      } else {
        console.log("Recaptcha failed to load, trying again...");
        setTimeout(_this.initRecaptcha, 2500);
      }
    });

    return _this;
  }

  _createClass(Recaptcha, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initRecaptcha();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "recaptcha-disclaimer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "This site is protected by reCAPTCHA and the Google"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "Privacy Policy",
        link: "//policies.google.com/privacy",
        newTab: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "and"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "Terms of Service",
        link: "//policies.google.com/terms",
        newTab: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "apply."));
    }
  }]);

  return Recaptcha;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports) {



/***/ }),
/* 19 */
/***/ (function(module, exports) {



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BetaTesting; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _UserPool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _SmartLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _Recaptcha_Recaptcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var _BetaTesting_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23);
/* harmony import */ var _BetaTesting_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_BetaTesting_css__WEBPACK_IMPORTED_MODULE_7__);


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









var BetaTesting =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BetaTesting, _React$Component);

  function BetaTesting(props) {
    var _this;

    _classCallCheck(this, BetaTesting);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BetaTesting).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onToggle", function (event) {
      var name = event.target.name;

      _this.setState(_defineProperty({}, name, !_this.state[name]));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      if (name === "password") {
        _this.passwordCheck(value);
      }

      _this.setState(_defineProperty({}, name, value), _this.formCheck);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "passwordCheck", function (password) {
      if (password.length < 8) {
        _this.setState({
          passwordError: "Password must be at least 8 characters long."
        }, _this.formCheck);

        return;
      }

      if (!password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/g)) {
        _this.setState({
          passwordError: "Password must contain an upper and lower case letter, and a number."
        }, _this.formCheck);

        return;
      }

      _this.setState({
        passwordError: ""
      }, _this.formCheck);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "formCheck", function () {
      var _this$state = _this.state,
          email = _this$state.email,
          firstname = _this$state.firstname,
          password = _this$state.password,
          passwordError = _this$state.passwordError;
      var surveyHeight = "0";

      if (email && firstname && password && !passwordError) {
        surveyHeight = "325px";
      }

      _this.setState({
        surveyHeight: surveyHeight
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit", function (event) {
      event.preventDefault();

      if (_this.state.passwordError) {
        _this.setState({
          result: "Please fix password errors above."
        });

        return;
      }

      var keys = Object.keys(_this.state);
      keys = keys.filter(function (key) {
        return _this.state[key];
      });
      var params = {};
      keys.forEach(function (key) {
        params[key] = _this.state[key];
      });
      var _this$state2 = _this.state,
          email = _this$state2.email,
          firstname = _this$state2.firstname,
          password = _this$state2.password;
      var uri = "/email-subscribe?email=".concat(email, "&firstname=").concat(firstname);
      console.log(uri);
      delete params.email;
      delete params.firstname;
      delete params.password;
      delete params.passwordError;
      delete params.result;
      delete params.surveyHeight;
      delete params.showSurvey;
      fetch(uri, {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (data) {
        return data.json();
      }).then(function (result) {
        // Don't set the result text here if we're creating an account
        if (!password) {
          _this.setState({
            result: result.message
          });
        }
      }).catch(function (error) {
        // Don't set the result text here if we're creating an account
        if (!password) {
          _this.setState({
            result: error.message || error
          });
        }
      });
      var attributes = [new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUserAttribute"]({
        Name: "name",
        Value: firstname
      })];
      _UserPool__WEBPACK_IMPORTED_MODULE_4__["default"].signUp(email, password, attributes, null, function (err, data) {
        if (err) {
          _this.setState({
            result: err.message
          });
        } else {
          _this.setState({
            result: "Account Created! Check your email to confirm your account. You will be notified when beta testing is live. Follow our social media below for frequent updates or to get in contact!"
          });
        }
      });
    });

    _this.projects = [{
      name: "projectServer",
      display: "Server Network"
    }, {
      name: "projectList",
      display: "Server List Website"
    }, {
      name: "projectHost",
      display: "Server Host"
    }, {
      name: "projectCommunity",
      display: "Forum/Discord/etc Community"
    }, {
      name: "projectMarketplace",
      display: "Marketplace Website"
    }];
    var defaultState = {
      result: "",
      email: "",
      firstname: "",
      password: "",
      passwordError: "",
      projectOther: false,
      projectOtherDescription: "",
      affiliateProgram: false,
      showSurvey: true,
      surveyHeight: "0"
    };

    _this.projects.forEach(function (project) {
      return defaultState[project.name] = false;
    });

    _this.state = defaultState;
    return _this;
  }

  _createClass(BetaTesting, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var query = window.location.search;
      var values = new URLSearchParams(query);
      var noSurvey = values.get("noSurvey") === "true";
      var projectList = values.get("projectList") === "true";

      if (noSurvey) {
        this.setState({
          showSurvey: false,
          projectList: projectList
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state3 = this.state,
          email = _this$state3.email,
          firstname = _this$state3.firstname,
          password = _this$state3.password,
          passwordError = _this$state3.passwordError,
          surveyHeight = _this$state3.surveyHeight,
          projectOther = _this$state3.projectOther,
          projectOtherDescription = _this$state3.projectOtherDescription,
          result = _this$state3.result;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Hytale Data - The tools & metrics you need to grow your Hytale server.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "beta-testing-container",
        className: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "beta-testing"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Signup for Free Beta Testing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        className: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "center-v"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "email"
      }, "Email Address", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "required"
      }, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "email",
        id: "email",
        name: "email",
        value: email,
        onChange: this.onChange,
        placeholder: "Required",
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "center-v"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "name"
      }, "First Name", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "required"
      }, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "firstname",
        id: "firstname",
        name: "firstname",
        value: firstname,
        onChange: this.onChange,
        placeholder: "Required",
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "center-v"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "password"
      }, "Password", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "required"
      }, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        id: "password",
        name: "password",
        value: password,
        onChange: this.onChange,
        placeholder: "Required",
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "password-error"
      }, passwordError), this.state.showSurvey && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "optional-survey",
        style: {
          height: surveyHeight
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "project-type",
        className: "center-v"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "What are you making in Hytale?", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "optional"
      }, "(Optional)")), this.projects.map(function (project) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: project.name,
          id: project.name,
          handler: _this2.onToggle,
          checked: _this2.state[project.name]
        }, project.display);
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "other"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "projectOther",
        handler: this.onToggle,
        checked: projectOther
      }, "Other"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "projectOtherDescription",
        name: "projectOtherDescription",
        value: projectOtherDescription,
        onChange: this.onChange,
        placeholder: "Description (Optional)"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "affiliate-program"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: "affiliateProgram",
        id: "affiliateProgram",
        handler: this.onToggle,
        checked: this.state.affiliateProgram
      }, "Are you interested in our Affiliate Program?")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "legal-agree"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Recaptcha_Recaptcha__WEBPACK_IMPORTED_MODULE_6__["default"], {
        action: "beta_signup"
      }), "By signing up you agree to the Hytale Data", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
        display: "terms of service"
      }), " and", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
        display: "privacy policy"
      }), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "submit-button ".concat(surveyHeight === "0" ? "disabled-button" : "")
      }, "CREATE ACCOUNT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "email-sub-result",
        className: "center"
      }, result))))));
    }
  }]);

  return BetaTesting;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports) {



/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ })
/******/ ]);