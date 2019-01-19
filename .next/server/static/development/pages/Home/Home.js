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

/***/ "./pages/BetaTesting/BetaTesting.css":
/*!*******************************************!*\
  !*** ./pages/BetaTesting/BetaTesting.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/BetaTesting/BetaTesting.js":
/*!******************************************!*\
  !*** ./pages/BetaTesting/BetaTesting.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BetaTesting; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavFooter */ "./pages/NavFooter.js");
/* harmony import */ var _Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Checkbox/Checkbox */ "./pages/Checkbox/Checkbox.js");
/* harmony import */ var _Features__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Features */ "./pages/Features.js");
/* harmony import */ var _UserPool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UserPool */ "./pages/UserPool.js");
/* harmony import */ var _SmartLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SmartLink */ "./pages/SmartLink.js");
/* harmony import */ var _Recaptcha_Recaptcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Recaptcha/Recaptcha */ "./pages/Recaptcha/Recaptcha.js");
/* harmony import */ var _BetaTesting_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BetaTesting.css */ "./pages/BetaTesting/BetaTesting.css");
/* harmony import */ var _BetaTesting_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_BetaTesting_css__WEBPACK_IMPORTED_MODULE_8__);


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

      _this.setState(_defineProperty({}, name, value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit", function (event) {
      event.preventDefault();
      var keys = Object.keys(_this.state);
      keys = keys.filter(function (key) {
        return _this.state[key];
      });
      var params = {};
      keys.forEach(function (key) {
        params[key] = _this.state[key];
      });

      if (!params.email) {
        return _this.setState({
          result: "An Email address is required"
        });
      }

      var email = params.email,
          password = params.password;
      var uri = "/email-subscribe?email=".concat(email);
      delete params.email;
      delete params.result;
      delete params.password;
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

      if (password) {
        _UserPool__WEBPACK_IMPORTED_MODULE_5__["default"].signUp(email, password, [], null, function (err, data) {
          if (err) {
            _this.setState({
              result: err.message
            });
          } else {
            console.log(data);

            _this.setState({
              result: "Account Created! Check your email to confirm your account. You will be notified when beta testing is live. Follow our social media below for frequent updates or to get in contact!"
            });
          }
        });
      }
    });

    _this.projects = [{
      name: "projectServer",
      display: "Server Network"
    }, {
      name: "projectList",
      display: "Server List Website"
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
      password: "",
      projectOther: false,
      projectOtherDescription: ""
    };
    _Features__WEBPACK_IMPORTED_MODULE_4__["default"].forEach(function (feature) {
      return defaultState[feature.id] = false;
    });

    _this.projects.forEach(function (project) {
      return defaultState[project.name] = false;
    });

    _this.state = defaultState;
    return _this;
  }

  _createClass(BetaTesting, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavFooter__WEBPACK_IMPORTED_MODULE_2__["default"], {
        noNav: this.props.noNav
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Hytale Data Beta Testing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "beta-testing-container",
        className: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "beta-testing"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "beta-testing-title",
        className: "center"
      }, "Signup for Free Beta Testing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        className: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "center-v"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "email"
      }, "Your Email", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "required"
      }, "*")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "email",
        id: "email",
        name: "email",
        value: this.state.email,
        onChange: this.onChange,
        placeholder: "Required",
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "center-v"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "password"
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        id: "password",
        name: "password",
        value: this.state.password,
        onChange: this.onChange,
        placeholder: "Optional"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "features-container",
        className: "center-v"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Which features are you interested in?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "features",
        className: "center-v"
      }, _Features__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (feature) {
        var id = feature.id;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          key: id,
          className: "feature"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: id,
          handler: _this2.onToggle,
          checked: _this2.state[id]
        }, feature.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "fa fa-question-circle"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "center more-info"
        }, "Checking this box will help us prioritize the features you want.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
          link: "/planned-solutions?s=".concat(id),
          newTab: true
        }, "Learn More about this Feature"))));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "project-type",
        className: "center-v"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "What are you making in Hytale?"), this.projects.map(function (project) {
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
        checked: this.state.projectOther
      }, "Other"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "projectOtherDescription",
        name: "projectOtherDescription",
        value: this.state.projectOtherDescription,
        onChange: this.onChange,
        placeholder: "Description (Optional)"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "legal-agree"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Recaptcha_Recaptcha__WEBPACK_IMPORTED_MODULE_7__["default"], {
        action: "beta_signup"
      }), "By signing up you agree to the Hytale Data", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
        display: "terms of service"
      }), " and", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
        display: "privacy policy"
      }), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "submit-button"
      }, this.state.password ? "CREATE ACCOUNT & BETA SIGNUP" : "BETA SIGNUP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "email-sub-result",
        className: "center"
      }, this.state.result))))));
    }
  }]);

  return BetaTesting;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./pages/Checkbox/Checkbox.css":
/*!*************************************!*\
  !*** ./pages/Checkbox/Checkbox.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Checkbox/Checkbox.js":
/*!************************************!*\
  !*** ./pages/Checkbox/Checkbox.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Checkbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Checkbox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox.css */ "./pages/Checkbox/Checkbox.css");
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
      var handler = this.props.handler ? this.props.handler : null;
      var classes = this.props.classes ? this.props.classes + " checkbox" : "checkbox";
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.cbId,
        className: "Checkbox",
        title: this.props.title
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        id: this.props.id,
        name: this.props.id,
        className: classes,
        style: {
          display: "none"
        },
        onChange: handler,
        checked: this.props.checked,
        display: this.props.children
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: this.props.id,
        className: "checkbox-input"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.props.svg || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        width: "12px",
        height: "10px",
        viewBox: "0 0 12 10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
        points: "1.5 6 4.5 9 10.5 1"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "checkbox-label"
      }, this.props.children)));
    }
  }]);

  return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./pages/Features.js":
/*!***************************!*\
  !*** ./pages/Features.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var features = [{
  name: "Income Stats",
  description: "Understanding your conversion rate, average income per player, cost to acquire a player, and other similar stats is critical to making your server more profitable. Our solution helps you track and manage your revenue in a single dashboard."
}, {
  name: "Game Play Stats",
  description: "Insights into what your players enjoy will help you create more content that keeps them online. View metrics such as map votes, kits selected, map rating, and more. Our API will allow you track custom data points in your games."
}, {
  name: "Competitor Tracking & Comparison",
  description: "Track your competitor's player count, recent updates, vote count, package prices, and more. Customizable notifications and tracking will help you stay ontop of your competitor's progress."
}, {
  name: "Influencer Management",
  description: "Log your brand deals and get estimates on players to expect from future brand deals. We'll even track how many estimated players an influencer brought to another server network in past deals."
}, {
  name: "Projections Based off Previous Data",
  description: "See what the next 3, 6, and 12 months look like for your server in terms of average player count, new players joining, daily votes, and more. New customers of ours won't be provided projections while our software gathers data on your server."
}, {
  name: "A/B Testing",
  description: "Test out different wordings and colors on alerts, MOTDs, and more. Provide multiple messages to split test and see how players react to them. Use this to continuously optimize the amount of players clicking on Voting or Shop links."
}, {
  name: "Complete Staffing Solution",
  description: "Keep your staff members connected through chat and ticketing systems over your website, Discord server, and your Hytale server. Staff logs can be viewed in the dashboard."
}, {
  name: "Discord & Social Media Integrations",
  description: 'Manage and post from your Discord, Twitter, and Instagram all in one dashboard. Use our "Team Member" feature to give admins limited access to these accounts without sharing any passwords.'
}, {
  name: "Embeddable Graphs & Charts",
  description: "Embed charts of player and vote counts on your website. Vote counts will be across all server listing websites. Partnered server listing websites will gain access to graphs that only show their website's vote count."
}, {
  name: "Team Members / Sub Accounts",
  description: "Give your admins access to your Hytale Data account without sharing any passwords. You have full control over what features they can access."
}, {
  name: "Developer's API",
  description: "Your developers can use our RESTful API to track custom data points, add custom staffing system functionality, access specific metrics, and more."
}, {
  name: "Affiliate / Referral Program",
  description: "Earn monthly commissions for each server owner you send to Hytale Data. Great to increase the lifetime value of your customers if you own a server list, hosting company, or any other similar website who's customer is a server owner."
}];
features.forEach(function (feature, index) {
  features[index].id = feature.name.replace(/[-,&%()']/g, "").replace(/[ /]/g, "-").replace(/--/g, "-").replace(/--/g, "-").toLowerCase();
});
/* harmony default export */ __webpack_exports__["default"] = (features);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SmartLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SmartLink */ "./pages/SmartLink.js");
/* harmony import */ var _AboveTheFold_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboveTheFold.css */ "./pages/Home/AboveTheFold/AboveTheFold.css");
/* harmony import */ var _AboveTheFold_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AboveTheFold_css__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "above-the-fold-container",
    className: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "above-the-fold",
    className: "center-v"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "intro-text",
    className: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hytale Server Analytics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "The tools & metrics you need to grow your Hytale server."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "cta-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: "/planned-solutions"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "PLANNED SOLUTIONS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: "/sm/discord?s=header",
    newTab: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "JOIN OUR DISCORD"))))));
});

/***/ }),

/***/ "./pages/Home/Home.css":
/*!*****************************!*\
  !*** ./pages/Home/Home.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var _NavFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavFooter */ "./pages/NavFooter.js");
/* harmony import */ var _AboveTheFold_AboveTheFold__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AboveTheFold/AboveTheFold */ "./pages/Home/AboveTheFold/AboveTheFold.js");
/* harmony import */ var _PlannedSolutions_IncomeStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlannedSolutions/IncomeStats */ "./pages/Home/PlannedSolutions/IncomeStats.js");
/* harmony import */ var _PlannedSolutions_GameStats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlannedSolutions/GameStats */ "./pages/Home/PlannedSolutions/GameStats.js");
/* harmony import */ var _PlannedSolutions_ABTesting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PlannedSolutions/ABTesting */ "./pages/Home/PlannedSolutions/ABTesting.js");
/* harmony import */ var _BetaTesting_BetaTesting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BetaTesting/BetaTesting */ "./pages/BetaTesting/BetaTesting.js");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Home.css */ "./pages/Home/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_8__);









/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavFooter__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Hytale Data - The tools & metrics you need to grow your Hytale server.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AboveTheFold_AboveTheFold__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlannedSolutions_IncomeStats__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlannedSolutions_GameStats__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlannedSolutions_ABTesting__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BetaTesting_BetaTesting__WEBPACK_IMPORTED_MODULE_7__["default"], {
    noNav: true
  })));
});

/***/ }),

/***/ "./pages/Home/LearnMore/LearnMore.css":
/*!********************************************!*\
  !*** ./pages/Home/LearnMore/LearnMore.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Home/LearnMore/LearnMore.js":
/*!*******************************************!*\
  !*** ./pages/Home/LearnMore/LearnMore.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LearnMore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SmartLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SmartLink */ "./pages/SmartLink.js");
/* harmony import */ var _LearnMore_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LearnMore.css */ "./pages/Home/LearnMore/LearnMore.css");
/* harmony import */ var _LearnMore_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LearnMore_css__WEBPACK_IMPORTED_MODULE_2__);


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




var LearnMore =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LearnMore, _React$Component);

  function LearnMore() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LearnMore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LearnMore)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function () {
      console.log(_this.props.solution);
    });

    return _this;
  }

  _createClass(LearnMore, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "learn-more"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        link: "/planned-solutions?s=".concat(this.props.solution),
        newTab: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "LEARN MORE")));
    }
  }]);

  return LearnMore;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./pages/Home/PlannedSolutions/ABTesting.js":
/*!**************************************************!*\
  !*** ./pages/Home/PlannedSolutions/ABTesting.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IncomeStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LearnMore_LearnMore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LearnMore/LearnMore */ "./pages/Home/LearnMore/LearnMore.js");


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




var IncomeStats =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IncomeStats, _React$Component);

  function IncomeStats() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IncomeStats);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IncomeStats)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      A: [],
      B: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setNewData", function () {
      _this.setState({
        A: _this.getRandomData(4, 100, 1000),
        B: _this.getRandomData(4, 100, 1000)
      }, function () {
        return setTimeout(_this.setNewData, 10000);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getRandomData", function (number, min, max) {
      var data = [];

      for (var a = 0; a < number; ++a) {
        data.push(Math.floor(Math.random() * max) + min);
      }

      return data;
    });

    return _this;
  }

  _createClass(IncomeStats, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setNewData();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "center planned-solution-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "ab-testing",
        className: "center planned-solution"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "planned-solution-information"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "A/B Testing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Test out different wordings and colors on alerts, MOTDs, and more with A/B testing. Provide multiple messages to split test and see how players react to them. Use this to continuously optimize the amount of players clicking on Voting or Shop links."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LearnMore_LearnMore__WEBPACK_IMPORTED_MODULE_2__["default"], {
        solution: "a-b-testing"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "center planned-solution-graphs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        data: {
          labels: ["April 21st", "April 22nd", "April 23rd"],
          datasets: [{
            label: "Vote Alert A",
            data: this.state.A,
            borderColor: "#018acf",
            backgroundColor: "#018acf"
          }, {
            label: "Vote Alert B",
            data: this.state.B,
            borderColor: "#ee4130",
            backgroundColor: "#ee4130"
          }]
        },
        options: {
          maintainAspectRatio: true,
          responsive: true,
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
              scaleLabel: {
                display: true,
                labelString: "Website Clicks",
                fontSize: 16
              },
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      }))));
    }
  }]);

  return IncomeStats;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./pages/Home/PlannedSolutions/GameStats.js":
/*!**************************************************!*\
  !*** ./pages/Home/PlannedSolutions/GameStats.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SmartLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SmartLink */ "./pages/SmartLink.js");
/* harmony import */ var _LearnMore_LearnMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LearnMore/LearnMore */ "./pages/Home/LearnMore/LearnMore.js");


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





var GameStats =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GameStats, _React$Component);

  function GameStats() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GameStats);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameStats)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      data: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setNewData", function () {
      _this.setState({
        data: _this.getRandomData(3, 2500, 7500)
      }, function () {
        return setTimeout(_this.setNewData, 10000);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getRandomData", function (number, min, max) {
      var data = [];

      for (var a = 0; a < number; ++a) {
        data.push(Math.floor(Math.random() * max) + min);
      }

      return data;
    });

    return _this;
  }

  _createClass(GameStats, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setNewData();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "center planned-solution-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "game-stats",
        className: "center planned-solution"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "center planned-solution-graphs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Pie"], {
        data: {
          labels: ["Archer", "Knight", "Mage"],
          datasets: [{
            data: this.state.data,
            backgroundColor: ["#fa9d1c", "#018acf", "#ee4130"]
          }]
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            position: "bottom"
          }
        },
        height: 275
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "planned-solution-information"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Game Statistics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Better understand what your players like by tracking", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "map votes"), ", ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "kits selected"), ",", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "map ratings"), ", and more. Use this data to create new content you know your players will love.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Have a complex game with a lot of data points? Our powerful", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
        display: "API",
        newTab: true
      }), " lets you control what data you collect and display in your dashboard."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LearnMore_LearnMore__WEBPACK_IMPORTED_MODULE_3__["default"], {
        solution: "game-play-stats"
      }))));
    }
  }]);

  return GameStats;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./pages/Home/PlannedSolutions/IncomeStats.js":
/*!****************************************************!*\
  !*** ./pages/Home/PlannedSolutions/IncomeStats.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IncomeStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LearnMore_LearnMore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LearnMore/LearnMore */ "./pages/Home/LearnMore/LearnMore.js");


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




var IncomeStats =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IncomeStats, _React$Component);

  function IncomeStats() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IncomeStats);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IncomeStats)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      data: [[]]
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setNewData", function () {
      _this.setState({
        data: [_this.getRandomData(3, 0.5, 6), _this.getRandomData(3, 0.5, 6)]
      }, function () {
        return setTimeout(_this.setNewData, 10000);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getRandomData", function (number, min, max) {
      var data = [];

      for (var a = 0; a < number; ++a) {
        data.push(Math.floor(Math.random() * max) + min);
      }

      return data;
    });

    return _this;
  }

  _createClass(IncomeStats, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setNewData();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "center planned-solution-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "income-stats",
        className: "center planned-solution"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "planned-solution-information"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Income Statistics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Knowing your numbers is the first step to increasing your revenue. Income Statistics help track ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "conversion rate"), ",", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "average income per player"), ", and more."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LearnMore_LearnMore__WEBPACK_IMPORTED_MODULE_2__["default"], {
        solution: "income-stats"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "center planned-solution-graphs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: {
          labels: ["April", "May", "June"],
          datasets: [{
            label: "Conversion Rate",
            data: this.state.data[0],
            fill: false,
            borderColor: "#018acf",
            backgroundColor: "#018acf"
          }, {
            label: "Churn Rate",
            data: this.state.data[1],
            fill: false,
            borderColor: "#ee4130",
            backgroundColor: "#ee4130"
          }]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
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
              scaleLabel: {
                display: true,
                labelString: "Percentage",
                fontSize: 16
              },
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      }))));
    }
  }]);

  return IncomeStats;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./pages/NavFooter.js":
/*!****************************!*\
  !*** ./pages/NavFooter.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation_MainNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation/MainNavigation */ "./pages/Navigation/MainNavigation.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer/Footer */ "./pages/Footer/Footer.js");



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return props.noNav ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.children) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_MainNavigation__WEBPACK_IMPORTED_MODULE_1__["default"], null), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
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

/***/ "./pages/Recaptcha/Recaptcha.css":
/*!***************************************!*\
  !*** ./pages/Recaptcha/Recaptcha.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Recaptcha/Recaptcha.js":
/*!**************************************!*\
  !*** ./pages/Recaptcha/Recaptcha.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Recaptcha; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SmartLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SmartLink */ "./pages/SmartLink.js");
/* harmony import */ var _Recaptcha_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Recaptcha.css */ "./pages/Recaptcha/Recaptcha.css");
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

    return _this;
  }

  _createClass(Recaptcha, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.grecaptcha.ready(function () {
        window.grecaptcha.execute(_this2.siteKey, {
          action: _this2.props.action
        }).then(function (response) {
          return fetch("/recaptcha?response=".concat(response));
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "recaptcha-disclaimer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "This site is protected by reCAPTCHA and the Google"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "Privacy Policy",
        link: "https://policies.google.com/privacy",
        newTab: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "and"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SmartLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        display: "Terms of Service",
        link: "https://policies.google.com/terms",
        newTab: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "apply."));
    }
  }]);

  return Recaptcha;
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

/***/ "./pages/UserPool.js":
/*!***************************!*\
  !*** ./pages/UserPool.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! amazon-cognito-identity-js */ "amazon-cognito-identity-js");
/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_0__);

var poolData = {
  UserPoolId: "us-east-1_IQYwWPwjw",
  ClientId: "4duqbvk8skova44qfurqdh29et"
};
/* harmony default export */ __webpack_exports__["default"] = (new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_0__["CognitoUserPool"](poolData));

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/Home/Home.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/Home/Home.js */"./pages/Home/Home.js");


/***/ }),

/***/ "amazon-cognito-identity-js":
/*!*********************************************!*\
  !*** external "amazon-cognito-identity-js" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("amazon-cognito-identity-js");

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