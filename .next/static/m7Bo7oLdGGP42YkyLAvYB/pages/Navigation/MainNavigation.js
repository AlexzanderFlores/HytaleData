(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{111:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d});var o=t(0),a=t.n(o),r=t(3),i=t(21);t(500);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var d=function(e){function n(){var e,t,o,a;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return o=this,a=(e=s(n)).call.apply(e,[this].concat(i)),t=!a||"object"!==c(a)&&"function"!=typeof a?p(o):a,f(p(p(t)),"state",{dropDownClass:"",width:0}),f(p(p(t)),"navigation",[{display:"HOME",link:""},{display:"PRODUCTS",link:"planned-solutions",dropDown:[{display:"Planned Solutions",link:"planned-solutions"},{display:"Minecraft Java Health",link:"minecraft-java-health"}]},{display:"BLOG",link:"//blog.hytaledata.com/",newTab:!0},{display:"BETA TESTING",link:"beta-testing"}]),f(p(p(t)),"updateWindowDimensions",function(){if(window){var e=window.innerWidth;t.setState({width:e})}}),f(p(p(t)),"onDropDownClick",function(){t.setState({dropDownClass:t.state.dropDownClass?"":"close"})}),f(p(p(t)),"onMenuDropDownToggle",function(e){var n;t.state.width>=930||(e="".concat(e,"-clicked"),t.setState((f(n={},e,!t.state[e]),f(n,"".concat(e,"-down"),!1),n)))}),f(p(p(t)),"onMouseEnter",function(e){t.state.width<930||(e="".concat(e,"-down"),t.setState(f({},e,!t.state[e])))}),f(p(p(t)),"onMouseLeave",function(e){t.state.width<930||(e="".concat(e,"-down"),t.setState(f({},e,!t.state[e])))}),t}var t,o,d;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(n,a.a.Component),t=n,(o=[{key:"componentDidMount",value:function(){window&&(this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions))}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){var e=this,n=this.state.dropDownClass;return a.a.createElement("nav",{className:"center-v"},a.a.createElement("div",{id:"nav",className:"center-v"},a.a.createElement(r.default,{id:"nav-home",className:"center",link:""},a.a.createElement("img",{src:"https://cdn.hytaledata.com/logo-slim-black.png",alt:"Hytale Data Logo"}),"HYTALE DATA"),a.a.createElement("ul",{id:"nav-links",className:"center ".concat(n)},this.navigation.map(function(n){return a.a.createElement("li",{key:n.display},n.dropDown&&n.dropDown.length>0?a.a.createElement("div",{className:"nav-menu-drop-down-control",onClick:e.onMenuDropDownToggle.bind(e,n.display),onMouseEnter:e.onMouseEnter.bind(e,n.display),onMouseLeave:e.onMouseLeave.bind(e,n.display)},n.display,a.a.createElement("ul",{className:"nav-menu-drop-down ".concat(e.state["".concat(n.display,"-clicked")]||e.state["".concat(n.display,"-down")]?"menu-down":"menu-up")},n.dropDown.map(function(e){return a.a.createElement("li",{key:e.link},a.a.createElement(r.default,{display:e.display,link:e.link,newTab:!0===e.newTab}))}))):a.a.createElement(r.default,{display:n.display,link:n.link,newTab:!0===n.newTab}))}),a.a.createElement("li",{className:"center"},a.a.createElement(i.default,{source:"drop-down-navigation",classes:"nav-mobile-social-media"}))),a.a.createElement(i.default,{source:"navigation",classes:"nav-main-social-media"}),a.a.createElement("div",{id:"drop-down",className:n,onClick:this.onDropDownClick},a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null))))}}])&&l(t.prototype,o),d&&l(t,d),n}()},21:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return p});var o=t(0),a=t.n(o),r=t(3);t(356);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function n(){var e,t,o,a,r,c,s;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var p=arguments.length,f=new Array(p),d=0;d<p;d++)f[d]=arguments[d];return o=this,t=!(a=(e=l(n)).call.apply(e,[this].concat(f)))||"object"!==i(a)&&"function"!=typeof a?u(o):a,r=u(u(t)),s=["discord","twitter","instagram","youtube"],(c="platforms")in r?Object.defineProperty(r,c,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[c]=s,t}var t,o,p;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(n,a.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.only,t=e.classes,o=e.source;return a.a.createElement("ul",{className:"center social-media ".concat(t||"")},this.platforms.map(function(e){if(!n||e===n)return a.a.createElement("li",{key:e},a.a.createElement(r.default,{link:"sm/".concat(e,"?s=").concat(o),newTab:!0},a.a.createElement("i",{className:"fab fa-".concat(e)})))}))}}])&&c(t.prototype,o),p&&c(t,p),n}()},655:function(e,n,t){__NEXT_REGISTER_PAGE("/Navigation/MainNavigation",function(){return e.exports=t(111),{page:e.exports.default}})}},[[655,0,1,2]]]);