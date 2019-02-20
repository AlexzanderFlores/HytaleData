module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 84);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Server; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Server_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _Server_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Server_css__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Server =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Server, _React$Component);

  function Server() {
    _classCallCheck(this, Server);

    return _possibleConstructorReturn(this, _getPrototypeOf(Server).apply(this, arguments));
  }

  _createClass(Server, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          counter = _this$props.counter,
          ip = _this$props.ip,
          favicon = _this$props.favicon,
          name = _this$props.name,
          version = _this$props.version,
          region = _this$props.region,
          players = _this$props.players,
          record = _this$props.record,
          minutes = _this$props.minutes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "server",
        title: ip
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "server-favicon",
        src: favicon
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "server-name"
      }, counter !== undefined && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "#", counter), " ", name, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "server-region-version"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: version ? "server-version" : ""
      }, version), region && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "flag-icon flag-icon-".concat(region),
        title: "Servers are hosted in ".concat(region.toUpperCase())
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "server-players"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Players: ", players.toLocaleString()), record && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Record: ", record.toLocaleString())), minutes !== undefined && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Updated ", minutes, "m ago"));
    }
  }]);

  return Server;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spinner_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _Spinner_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Spinner_css__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  if (!props.display) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spinner sk-fading-circle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sk-circle1 sk-circle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sk-circle2 sk-circle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sk-circle3 sk-circle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sk-circle4 sk-circle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sk-circle5 sk-circle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sk-circle6 sk-circle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sk-circle7 sk-circle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sk-circle8 sk-circle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sk-circle9 sk-circle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sk-circle10 sk-circle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sk-circle11 sk-circle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sk-circle12 sk-circle"
  }));
});

/***/ }),

/***/ 25:
/***/ (function(module, exports) {



/***/ }),

/***/ 26:
/***/ (function(module, exports) {



/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddServer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ServerList_Server_Server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _Spinner_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _AddServer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var _AddServer_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AddServer_css__WEBPACK_IMPORTED_MODULE_3__);


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





var AddServer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AddServer, _React$Component);

  function AddServer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AddServer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddServer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      ip: "",
      name: "",
      result: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit", function (event) {
      event.preventDefault();
      var _this$state = _this.state,
          ip = _this$state.ip,
          name = _this$state.name;

      _this.setState({
        result: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
          display: true
        })
      });

      fetch("/add-server?ip=".concat(ip, "&name=").concat(name), {
        method: "POST"
      }).then(function (data) {
        return data.json();
      }).then(function (data) {
        console.log(data);

        if (data.error) {
          throw new Error("err");
        } else if (data.rateLimit) {
          _this.setState({
            result: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "You can only submit a server once every 2 minutes.")
          });
        } else if (data.failedToPing) {
          _this.setState({
            result: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Failed to ping server! Are you sure it is online?")
          });
        } else if (data.alreadyExists) {
          _this.setState({
            result: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "We are already tracking this server.")
          });
        } else {
          var favicon = data.favicon,
              version = data.version,
              region = data.region,
              players = data.players;

          _this.setState({
            result: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ServerList_Server_Server__WEBPACK_IMPORTED_MODULE_1__["default"], {
              ip: _this.state.ip,
              favicon: favicon,
              name: _this.state.name,
              version: version,
              region: region,
              players: players
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
              id: "added-server"
            }, "Successfully added server! Data will be collected in less than 15 minutes."))
          });
        }
      }).catch(function (err) {
        console.error(err);

        _this.setState({
          result: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "An error occurred, please try again later.")
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      _this.setState(_defineProperty({}, name, value));
    });

    return _this;
  }

  _createClass(AddServer, [{
    key: "render",
    value: function render() {
      return this.props.loaded && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "add-server",
        className: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Are we Missing a Server?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "add-server-inputs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "ip",
        placeholder: "Server IP",
        value: this.state.ip,
        onChange: this.onChange,
        required: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "name",
        placeholder: "Server Name",
        value: this.state.name,
        onChange: this.onChange,
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit"
      }, "Add Server"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "add-server-result",
        className: "center"
      }, this.state.result)));
    }
  }]);

  return AddServer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 45:
/***/ (function(module, exports) {



/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ })

/******/ });