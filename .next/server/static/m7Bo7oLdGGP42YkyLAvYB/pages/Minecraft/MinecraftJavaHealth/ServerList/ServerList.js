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
/******/ 	return __webpack_require__(__webpack_require__.s = 89);
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServerList; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Spinner_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _Server_Server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _ServerList_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var _ServerList_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ServerList_css__WEBPACK_IMPORTED_MODULE_4__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ServerList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ServerList, _React$Component);

  function ServerList(props) {
    var _this;

    _classCallCheck(this, ServerList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ServerList).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loadInitialServers",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var a;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              a = 0;

            case 1:
              if (!(a < 2)) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return _this.renderServers();

            case 4:
              ++a, _this.startingIndex += 10;
              _context.next = 1;
              break;

            case 7:
              _this.setState({
                loaded: true
              }, _this.props.onLoaded);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderServers",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var uri;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              uri = "https://api.hytaledata.com/dev/minecraft/servers?start=".concat(_this.startingIndex);
              console.log(_this.startingIndex);
              _context2.next = 4;
              return fetch(uri).then(function (data) {
                return data.json();
              }).then(function (servers) {
                _this.setState({
                  servers: [].concat(_toConsumableArray(_this.state.servers), _toConsumableArray(servers.map(function (server) {
                    return _objectSpread({}, server, {
                      favicon: server.favicon ? server.favicon.replace(/\\u003d/g, "=") : ""
                    });
                  })))
                });
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loadMore", function () {
      _this.setState({
        loaded: false
      },
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var a;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                a = 0;

              case 1:
                if (!(a < 2)) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 4;
                return _this.renderServers();

              case 4:
                _this.startingIndex += 10;

              case 5:
                ++a;
                _context3.next = 1;
                break;

              case 8:
                _this.setState({
                  loaded: true
                });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      })));
    });

    _this.startingIndex = 0;
    _this.state = {
      data: [],
      servers: [],
      loaded: false
    };
    return _this;
  }

  _createClass(ServerList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadInitialServers();
    }
  }, {
    key: "render",
    value: function render() {
      var counter = 1;
      var _this$state = this.state,
          servers = _this$state.servers,
          loaded = _this$state.loaded;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "servers-container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "servers"
      }, servers.map(function (server) {
        var today = new Date();
        var diff = (today.getTime() - new Date(server.timestamp).getTime()) / 1000;
        diff /= 60;
        var minutes = Math.abs(Math.round(diff));
        var version = server.version;

        if (version) {
          version = version.replace(/.0/g, ".");

          if (version.indexOf("undefined") >= 0) {
            version = null;
          }
        }

        var favicon = server.favicon,
            name = server.name,
            region = server.region,
            players = server.players,
            record = server.record;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Server_Server__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: server.ip,
          counter: counter++,
          ip: server.ip,
          favicon: favicon,
          name: name,
          version: version,
          region: region,
          players: players,
          record: record,
          minutes: minutes
        });
      })), !loaded && servers.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "server-spinner-container",
        className: "center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
        display: true
      })), servers.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "load-more-container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.loadMore
      }, "Load More Servers")));
    }
  }]);

  return ServerList;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ 47:
/***/ (function(module, exports) {



/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(41);


/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ })

/******/ });