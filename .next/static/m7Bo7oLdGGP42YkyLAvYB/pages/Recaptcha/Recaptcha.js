(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{497:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var o=n(0),r=n.n(o),a=n(3);n(516);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return o=this,r=(e=u(t)).call.apply(e,[this].concat(i)),n=!r||"object"!==c(r)&&"function"!=typeof r?p(o):r,f(p(p(n)),"siteKey","6Ld31IkUAAAAAN--L8Z5eYfuQ3vjUZI4DgqSR0dY"),f(p(p(n)),"initRecaptcha",function(){window.grecaptcha?window.grecaptcha.ready(function(){window.grecaptcha.execute(n.siteKey,{action:n.props.action}).then(function(e){return fetch("/recaptcha?response=".concat(e))})}):(console.log("Recaptcha failed to load, trying again..."),setTimeout(n.initRecaptcha,2500))}),n}var n,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.initRecaptcha()}},{key:"render",value:function(){return r.a.createElement("div",{className:"recaptcha-disclaimer"},r.a.createElement("span",null,"This site is protected by reCAPTCHA and the Google"),r.a.createElement(a.default,{display:"Privacy Policy",link:"//policies.google.com/privacy",newTab:!0}),r.a.createElement("span",null,"and"),r.a.createElement(a.default,{display:"Terms of Service",link:"//policies.google.com/terms",newTab:!0}),r.a.createElement("span",null,"apply."))}}])&&i(n.prototype,o),s&&i(n,s),t}()},662:function(e,t,n){__NEXT_REGISTER_PAGE("/Recaptcha/Recaptcha",function(){return e.exports=n(497),{page:e.exports.default}})}},[[662,0,1,2]]]);