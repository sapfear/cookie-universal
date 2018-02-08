var Cookie=function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=o(1);e.exports=function(t,o){var r="object"===("undefined"==typeof document?"undefined":n(document))&&"string"==typeof document.cookie,s=function(){if("object"===(void 0===t?"undefined":n(t))&&"object"===(void 0===o?"undefined":n(o))&&void 0!==e)return!0}();if(!r&&!s||r&&s)throw"Cannot detect env, something went wrong!";var a=function(e){if(s){var n=t.headers.cookie||"";return e&&(n=o.getHeaders(),n=n["set-cookie"]?n["set-cookie"].map(function(e){return e.split(";")[0]}).join(";"):""),n}if(r)return document.cookie||""},c=function(){var e=o.getHeader("Set-Cookie");return(e="string"==typeof e?[e]:e)||[]},u=function(e){return o.setHeader("Set-Cookie",e)},p={set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{path:"/"};if(s){var n=c();n.push(i.serialize(e,t,o)),u(n)}else document.cookie=i.serialize(e,t,o)},setAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Array.isArray(e)&&e.forEach(function(e){var t=e.name,o=void 0===t?"":t,n=e.value,i=void 0===n?"":n,r=e.opts,s=void 0===r?{path:"/"}:r;p.set(o,i,s)})},get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];return i.parse(a(t))[e]},getAll:function(e){return i.parse(a(e))},remove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{path:"/"},o=p.get(e);t.expires=new Date(0),o&&p.set(e,"",t)},removeAll:function(){var e=i.parse(a());for(var t in e)p.remove(t)}};return p},e.exports.meta=o(2)},function(e,t,o){"use strict";function n(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var o={},n=t||{},i=e.split(c),a=n.decode||s,u=0;u<i.length;u++){var p=i[u],l=p.indexOf("=");if(!(l<0)){var d=p.substr(0,l).trim(),m=p.substr(++l,p.length).trim();'"'==m[0]&&(m=m.slice(1,-1)),void 0==o[d]&&(o[d]=r(m,a))}}return o}function i(e,t,o){var n=o||{},i=n.encode||a;if("function"!=typeof i)throw new TypeError("option encode is invalid");if(!u.test(e))throw new TypeError("argument name is invalid");var r=i(t);if(r&&!u.test(r))throw new TypeError("argument val is invalid");var s=e+"="+r;if(null!=n.maxAge){var c=n.maxAge-0;if(isNaN(c))throw new Error("maxAge should be a Number");s+="; Max-Age="+Math.floor(c)}if(n.domain){if(!u.test(n.domain))throw new TypeError("option domain is invalid");s+="; Domain="+n.domain}if(n.path){if(!u.test(n.path))throw new TypeError("option path is invalid");s+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.sameSite){switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;default:throw new TypeError("option sameSite is invalid")}}return s}function r(e,t){try{return t(e)}catch(t){return e}}/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
t.parse=n,t.serialize=i;var s=decodeURIComponent,a=encodeURIComponent,c=/; */,u=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},function(e,t){e.exports={name:"cookie-universal",version:"1.0.10",description:"Universal cookie plugin, perfect for SSR",main:"index.js",author:"Salvatore Tedde <microcipcip@gmail.com>",license:"MIT",bugs:"https://github.com/microcipcip/cookie-universal/issues",homepage:"https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal#readme",repository:"https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal",scripts:{build:"webpack","demo-node":"nodemon ./demo/server","demo-express":"nodemon ./demo/server-express",dev:'nodemon index.js --exec "npm run lint && node"',lint:"eslint index.js","test-nodemon":'nodemon --exec "npm run testlint && npm run mocha"',test:"npm run testlint && npm run mocha",testlint:"eslint **/*.spec.js",mocha:'mocha "./{,!(node_modules)/**/}*.spec.js"'},keywords:["universal cookie","SSR cookie","node cookie","browser cookie","cookies","cookie"],publishConfig:{access:"public"},dependencies:{cookie:"^0.3.1"},devDependencies:{"babel-core":"^6.26.0","babel-eslint":"^7.2.3","babel-loader":"^7.1.2","babel-preset-es2015":"^6.24.1",chai:"^4.1.2","chai-http":"^3.0.0","clean-webpack-plugin":"^0.1.17","date-fns":"^1.29.0",eslint:"^4.3.0","eslint-config-standard":"^10.2.1","eslint-plugin-import":"^2.8.0","eslint-plugin-node":"^5.1.1","eslint-plugin-promise":"^3.5.0","eslint-plugin-standard":"^3.0.1",express:"^4.16.2",jsdom:"^11.5.1",mocha:"^4.0.1",webpack:"^3.10.0","webpack-merge":"^4.1.1"},files:["package.json"]}}]);