(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{128:function(e,t,r){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,a=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r(131),o)n.regeneratorRuntime=a;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}},131:function(e,t){!function(t){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",u="object"==typeof e,l=t.regeneratorRuntime;if(l)u&&(e.exports=l);else{(l=t.regeneratorRuntime=u?e.exports:{}).wrap=w;var f="suspendedStart",p="suspendedYield",h="executing",v="completed",d={},y={};y[i]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(R([])));g&&g!==n&&o.call(g,i)&&(y=g);var b=O.prototype=x.prototype=Object.create(y);k.prototype=b.constructor=O,O.constructor=k,O[s]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===k||"GeneratorFunction"===(t.displayName||t.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,O):(e.__proto__=O,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(b),e},l.awrap=function(e){return{__await:e}},S(j.prototype),j.prototype[c]=function(){return this},l.AsyncIterator=j,l.async=function(e,t,r,n){var o=new j(w(e,t,r,n));return l.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},S(b),b[s]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=R,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return c.type="throw",c.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:R(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function w(e,t,r,n){var o=t&&t.prototype instanceof x?t:x,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=function(e,t,r){var n=f;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=E(e,t,r);if("normal"===s.type){if(n=r.done?v:p,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=v,r.method="throw",r.arg=s.arg)}}}(e,r,i),a}function E(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function x(){}function k(){}function O(){}function S(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function j(e){var t;this._invoke=function(r,n){function a(){return new Promise(function(t,a){!function t(r,n,a,i){var c=E(e[r],e,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(e){t("next",e,a,i)},function(e){t("throw",e,a,i)}):Promise.resolve(u).then(function(e){s.value=e,a(s)},function(e){return t("throw",e,a,i)})}i(c.arg)}(r,n,t,a)})}return t=t?t.then(a,a):a()}}function _(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,_(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=E(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function R(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}return{next:T}}function T(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},340:function(e,t,r){e.exports=r(128)},498:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return l});var n=r(0),o=r.n(n);r(521);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,s(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.counter,r=e.ip,n=e.favicon,a=e.name,i=e.version,c=e.region,s=e.players,u=e.record,l=e.minutes;return o.a.createElement("div",{className:"server",title:r},o.a.createElement("img",{className:"server-favicon",src:n}),o.a.createElement("div",{className:"server-name"},void 0!==t&&o.a.createElement(o.a.Fragment,null,"#",t)," ",a,o.a.createElement("br",null)," ",o.a.createElement("div",{className:"server-region-version"},o.a.createElement("span",{className:i?"server-version":""},i),c&&o.a.createElement("span",{className:"flag-icon flag-icon-".concat(c),title:"Servers are hosted in ".concat(c.toUpperCase())}))),o.a.createElement("div",{className:"server-players"},o.a.createElement("div",null,"Players: ",s.toLocaleString()),u&&o.a.createElement("div",null,"Record: ",u.toLocaleString())),void 0!==l&&o.a.createElement("div",null,"Updated ",l,"m ago"))}}])&&i(r.prototype,n),a&&i(r,a),t}()},499:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);r(522);t.default=function(e){return e.display?o.a.createElement("div",{className:"spinner sk-fading-circle"},o.a.createElement("div",{className:"sk-circle1 sk-circle"}),o.a.createElement("div",{className:"sk-circle2 sk-circle"}),o.a.createElement("div",{className:"sk-circle3 sk-circle"}),o.a.createElement("div",{className:"sk-circle4 sk-circle"}),o.a.createElement("div",{className:"sk-circle5 sk-circle"}),o.a.createElement("div",{className:"sk-circle6 sk-circle"}),o.a.createElement("div",{className:"sk-circle7 sk-circle"}),o.a.createElement("div",{className:"sk-circle8 sk-circle"}),o.a.createElement("div",{className:"sk-circle9 sk-circle"}),o.a.createElement("div",{className:"sk-circle10 sk-circle"}),o.a.createElement("div",{className:"sk-circle11 sk-circle"}),o.a.createElement("div",{className:"sk-circle12 sk-circle"})):null}},532:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return b});var n=r(340),o=r.n(n),a=r(0),i=r.n(a),c=r(499),s=r(498);r(570);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){g(e,t,r[t])})}return e}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function h(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var a=e.apply(t,r);function i(e){p(a,n,o,i,c,"next",e)}function c(e){p(a,n,o,i,c,"throw",e)}i(void 0)})}}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){function t(e){var r,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=d(t).call(this,e),r=!a||"object"!==u(a)&&"function"!=typeof a?m(n):a,g(m(m(r)),"loadInitialServers",h(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<2)){e.next=7;break}return e.next=4,r.renderServers();case 4:++t,r.startingIndex+=10,e.next=1;break;case 7:r.setState({loaded:!0},r.props.onLoaded);case 8:case"end":return e.stop()}},e,this)}))),g(m(m(r)),"renderServers",h(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.hytaledata.com/dev/minecraft/servers?start=".concat(r.startingIndex),console.log(r.startingIndex),e.next=4,fetch(t).then(function(e){return e.json()}).then(function(e){r.setState({servers:[].concat(f(r.state.servers),f(e.map(function(e){return l({},e,{favicon:e.favicon?e.favicon.replace(/\\u003d/g,"="):""})})))})});case 4:case"end":return e.stop()}},e,this)}))),g(m(m(r)),"loadMore",function(){r.setState({loaded:!1},h(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<2)){e.next=8;break}return e.next=4,r.renderServers();case 4:r.startingIndex+=10;case 5:++t,e.next=1;break;case 8:r.setState({loaded:!0});case 9:case"end":return e.stop()}},e,this)})))}),r.startingIndex=0,r.state={data:[],servers:[],loaded:!1},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,i.a.Component),r=t,(n=[{key:"componentDidMount",value:function(){this.loadInitialServers()}},{key:"render",value:function(){var e=1,t=this.state,r=t.servers,n=t.loaded;return i.a.createElement("div",{id:"servers-container"},i.a.createElement("div",{id:"servers"},r.map(function(t){var r=((new Date).getTime()-new Date(t.timestamp).getTime())/1e3;r/=60;var n=Math.abs(Math.round(r)),o=t.version;o&&(o=o.replace(/.0/g,".")).indexOf("undefined")>=0&&(o=null);var a=t.favicon,c=t.name,u=t.region,l=t.players,f=t.record;return i.a.createElement(s.default,{key:t.ip,counter:e++,ip:t.ip,favicon:a,name:c,version:o,region:u,players:l,record:f,minutes:n})})),!n&&r.length>0&&i.a.createElement("div",{id:"server-spinner-container",className:"center"},i.a.createElement(c.default,{display:!0})),r.length>0&&i.a.createElement("div",{id:"load-more-container"},i.a.createElement("button",{onClick:this.loadMore},"Load More Servers")))}}])&&v(r.prototype,n),a&&v(r,a),t}()},650:function(e,t,r){__NEXT_REGISTER_PAGE("/Minecraft/MinecraftJavaHealth/ServerList/ServerList",function(){return e.exports=r(532),{page:e.exports.default}})}},[[650,0,1,2]]]);