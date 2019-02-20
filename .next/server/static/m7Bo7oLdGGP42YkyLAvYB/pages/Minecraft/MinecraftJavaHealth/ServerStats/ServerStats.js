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
/******/ 	return __webpack_require__(__webpack_require__.s = 90);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServerStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ServerStats_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _ServerStats_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ServerStats_css__WEBPACK_IMPORTED_MODULE_2__);


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




var ServerStats =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ServerStats, _React$Component);

  function ServerStats() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ServerStats);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ServerStats)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      loaded: false,
      timestamps: [],
      hourDistance: [],
      totalPlayers: [],
      currentPlayers: 0,
      totalServers: 0,
      recordPlayers: 0,
      recordTimestamp: new Date()
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getOrdinal", function (n) {
      var s = ["th", "st", "nd", "rd"];
      var v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    });

    return _this;
  }

  _createClass(ServerStats, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("https://api.hytaledata.com/dev/minecraft/stats").then(function (data) {
        return data.json();
      }).then(function (stats) {
        var recordPlayers = stats.recordPlayers;
        var recordTimestamp = new Date("2019-02-17T18:00:00.685Z");
        stats = stats.totalPlayers;
        var timestamps = [];
        var hourDistance = [];
        var totalPlayers = [];
        var currentPlayers = -1;
        var totalServers = -1;
        var keys = Object.keys(stats).splice(0, 24);
        var today = new Date();

        for (var a = keys.length - 1; a >= 0; --a) {
          var date = new Date(stats[keys[a]].timestamp);
          timestamps.push(date.toLocaleString());
          var hours = Math.floor((today - date) / 3600000);
          hourDistance.push("".concat(hours, "h ago"));
          var total = stats[keys[a]].totalPlayers;
          totalPlayers.push(total);
          currentPlayers = total;
          totalServers = stats[keys[a]].totalServers;
        }

        _this2.setState({
          timestamps: timestamps,
          hourDistance: hourDistance,
          totalPlayers: totalPlayers,
          currentPlayers: currentPlayers,
          totalServers: totalServers,
          recordPlayers: recordPlayers,
          recordTimestamp: recordTimestamp,
          loaded: true
        }, _this2.props.onLoaded);
      }).catch(console.error);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loaded = _this$state.loaded,
          timestamps = _this$state.timestamps,
          hourDistance = _this$state.hourDistance,
          totalPlayers = _this$state.totalPlayers,
          currentPlayers = _this$state.currentPlayers,
          totalServers = _this$state.totalServers,
          recordPlayers = _this$state.recordPlayers,
          recordTimestamp = _this$state.recordTimestamp;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "minecraft-stats-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "minecraft-stats"
      }, loaded && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "minecraft-stats-controls"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "minecraft-stats-global"
      }, "Tracking ", totalServers, " servers with a total of", " ", currentPlayers.toLocaleString(), " players.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Record player count:", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "record-player-count",
        title: recordTimestamp.toLocaleString()
      }, recordPlayers.toLocaleString(), "."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "minecraft-stats-chart"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: {
          labels: hourDistance,
          datasets: [{
            label: "Players",
            data: totalPlayers,
            fill: false,
            borderColor: "#018acf",
            backgroundColor: "#018acf"
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
            intersect: false,
            callbacks: {
              label: function label(tooltipItems) {
                return ["".concat(tooltipItems.yLabel.toLocaleString(), " players"), timestamps[tooltipItems.index]];
              }
            }
          },
          hover: {
            mode: "nearest",
            intersect: true
          },
          height: "100%",
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: "Player Count",
                fontSize: 16
              },
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      })))));
    }
  }]);

  return ServerStats;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 46:
/***/ (function(module, exports) {



/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ })

/******/ });