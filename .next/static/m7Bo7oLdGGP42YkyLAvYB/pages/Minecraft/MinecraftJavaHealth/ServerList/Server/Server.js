(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{498:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return u});var n=r(0),o=r.n(n);r(521);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,l(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.counter,r=e.ip,n=e.favicon,a=e.name,c=e.version,i=e.region,l=e.players,s=e.record,u=e.minutes;return o.a.createElement("div",{className:"server",title:r},o.a.createElement("img",{className:"server-favicon",src:n}),o.a.createElement("div",{className:"server-name"},void 0!==t&&o.a.createElement(o.a.Fragment,null,"#",t)," ",a,o.a.createElement("br",null)," ",o.a.createElement("div",{className:"server-region-version"},o.a.createElement("span",{className:c?"server-version":""},c),i&&o.a.createElement("span",{className:"flag-icon flag-icon-".concat(i),title:"Servers are hosted in ".concat(i.toUpperCase())}))),o.a.createElement("div",{className:"server-players"},o.a.createElement("div",null,"Players: ",l.toLocaleString()),s&&o.a.createElement("div",null,"Record: ",s.toLocaleString())),void 0!==u&&o.a.createElement("div",null,"Updated ",u,"m ago"))}}])&&c(r.prototype,n),a&&c(r,a),t}()},649:function(e,t,r){__NEXT_REGISTER_PAGE("/Minecraft/MinecraftJavaHealth/ServerList/Server/Server",function(){return e.exports=r(498),{page:e.exports.default}})}},[[649,0,1,2]]]);