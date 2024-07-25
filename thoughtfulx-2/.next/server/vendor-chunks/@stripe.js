"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@stripe";
exports.ids = ["vendor-chunks/@stripe"];
exports.modules = {

/***/ "(ssr)/./node_modules/@stripe/stripe-js/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadStripe: () => (/* binding */ loadStripe)\n/* harmony export */ });\nvar V3_URL = 'https://js.stripe.com/v3';\nvar V3_URL_REGEX = /^https:\\/\\/js\\.stripe\\.com\\/v3\\/?(\\?.*)?$/;\nvar EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';\nvar findScript = function findScript() {\n  var scripts = document.querySelectorAll(\"script[src^=\\\"\".concat(V3_URL, \"\\\"]\"));\n\n  for (var i = 0; i < scripts.length; i++) {\n    var script = scripts[i];\n\n    if (!V3_URL_REGEX.test(script.src)) {\n      continue;\n    }\n\n    return script;\n  }\n\n  return null;\n};\n\nvar injectScript = function injectScript(params) {\n  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';\n  var script = document.createElement('script');\n  script.src = \"\".concat(V3_URL).concat(queryString);\n  var headOrBody = document.head || document.body;\n\n  if (!headOrBody) {\n    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');\n  }\n\n  headOrBody.appendChild(script);\n  return script;\n};\n\nvar registerWrapper = function registerWrapper(stripe, startTime) {\n  if (!stripe || !stripe._registerWrapper) {\n    return;\n  }\n\n  stripe._registerWrapper({\n    name: 'stripe-js',\n    version: \"4.0.0\",\n    startTime: startTime\n  });\n};\n\nvar stripePromise = null;\nvar onErrorListener = null;\nvar onLoadListener = null;\n\nvar onError = function onError(reject) {\n  return function () {\n    reject(new Error('Failed to load Stripe.js'));\n  };\n};\n\nvar onLoad = function onLoad(resolve, reject) {\n  return function () {\n    if (window.Stripe) {\n      resolve(window.Stripe);\n    } else {\n      reject(new Error('Stripe.js not available'));\n    }\n  };\n};\n\nvar loadScript = function loadScript(params) {\n  // Ensure that we only attempt to load Stripe.js at most once\n  if (stripePromise !== null) {\n    return stripePromise;\n  }\n\n  stripePromise = new Promise(function (resolve, reject) {\n    if (typeof window === 'undefined' || typeof document === 'undefined') {\n      // Resolve to null when imported server side. This makes the module\n      // safe to import in an isomorphic code base.\n      resolve(null);\n      return;\n    }\n\n    if (window.Stripe && params) {\n      console.warn(EXISTING_SCRIPT_MESSAGE);\n    }\n\n    if (window.Stripe) {\n      resolve(window.Stripe);\n      return;\n    }\n\n    try {\n      var script = findScript();\n\n      if (script && params) {\n        console.warn(EXISTING_SCRIPT_MESSAGE);\n      } else if (!script) {\n        script = injectScript(params);\n      } else if (script && onLoadListener !== null && onErrorListener !== null) {\n        var _script$parentNode;\n\n        // remove event listeners\n        script.removeEventListener('load', onLoadListener);\n        script.removeEventListener('error', onErrorListener); // if script exists, but we are reloading due to an error,\n        // reload script to trigger 'load' event\n\n        (_script$parentNode = script.parentNode) === null || _script$parentNode === void 0 ? void 0 : _script$parentNode.removeChild(script);\n        script = injectScript(params);\n      }\n\n      onLoadListener = onLoad(resolve, reject);\n      onErrorListener = onError(reject);\n      script.addEventListener('load', onLoadListener);\n      script.addEventListener('error', onErrorListener);\n    } catch (error) {\n      reject(error);\n      return;\n    }\n  }); // Resets stripePromise on error\n\n  return stripePromise[\"catch\"](function (error) {\n    stripePromise = null;\n    return Promise.reject(error);\n  });\n};\nvar initStripe = function initStripe(maybeStripe, args, startTime) {\n  if (maybeStripe === null) {\n    return null;\n  }\n\n  var stripe = maybeStripe.apply(undefined, args);\n  registerWrapper(stripe, startTime);\n  return stripe;\n}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types\n\nvar stripePromise$1;\nvar loadCalled = false;\n\nvar getStripePromise = function getStripePromise() {\n  if (stripePromise$1) {\n    return stripePromise$1;\n  }\n\n  stripePromise$1 = loadScript(null)[\"catch\"](function (error) {\n    // clear cache on error\n    stripePromise$1 = null;\n    return Promise.reject(error);\n  });\n  return stripePromise$1;\n}; // Execute our own script injection after a tick to give users time to do their\n// own script injection.\n\n\nPromise.resolve().then(function () {\n  return getStripePromise();\n})[\"catch\"](function (error) {\n  if (!loadCalled) {\n    console.warn(error);\n  }\n});\nvar loadStripe = function loadStripe() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  loadCalled = true;\n  var startTime = Date.now(); // if previous attempts are unsuccessful, will re-load script\n\n  return getStripePromise().then(function (maybeStripe) {\n    return initStripe(maybeStripe, args, startTime);\n  });\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zdHJpcGUtanMvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQSx3SUFBd0k7QUFDeEk7QUFDQTs7QUFFQSxrQkFBa0Isb0JBQW9CO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUc7O0FBRU47QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHNFQUFzRSxhQUFhO0FBQ25GO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFibG8tbmV4dGpzLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3RyaXBlLWpzL2Rpc3QvaW5kZXgubWpzPzliNWUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFYzX1VSTCA9ICdodHRwczovL2pzLnN0cmlwZS5jb20vdjMnO1xudmFyIFYzX1VSTF9SRUdFWCA9IC9eaHR0cHM6XFwvXFwvanNcXC5zdHJpcGVcXC5jb21cXC92M1xcLz8oXFw/LiopPyQvO1xudmFyIEVYSVNUSU5HX1NDUklQVF9NRVNTQUdFID0gJ2xvYWRTdHJpcGUuc2V0TG9hZFBhcmFtZXRlcnMgd2FzIGNhbGxlZCBidXQgYW4gZXhpc3RpbmcgU3RyaXBlLmpzIHNjcmlwdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgZG9jdW1lbnQ7IGV4aXN0aW5nIHNjcmlwdCBwYXJhbWV0ZXJzIHdpbGwgYmUgdXNlZCc7XG52YXIgZmluZFNjcmlwdCA9IGZ1bmN0aW9uIGZpbmRTY3JpcHQoKSB7XG4gIHZhciBzY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNjcmlwdFtzcmNePVxcXCJcIi5jb25jYXQoVjNfVVJMLCBcIlxcXCJdXCIpKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2NyaXB0ID0gc2NyaXB0c1tpXTtcblxuICAgIGlmICghVjNfVVJMX1JFR0VYLnRlc3Qoc2NyaXB0LnNyYykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzY3JpcHQ7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBpbmplY3RTY3JpcHQgPSBmdW5jdGlvbiBpbmplY3RTY3JpcHQocGFyYW1zKSB7XG4gIHZhciBxdWVyeVN0cmluZyA9IHBhcmFtcyAmJiAhcGFyYW1zLmFkdmFuY2VkRnJhdWRTaWduYWxzID8gJz9hZHZhbmNlZEZyYXVkU2lnbmFscz1mYWxzZScgOiAnJztcbiAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHQuc3JjID0gXCJcIi5jb25jYXQoVjNfVVJMKS5jb25jYXQocXVlcnlTdHJpbmcpO1xuICB2YXIgaGVhZE9yQm9keSA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keTtcblxuICBpZiAoIWhlYWRPckJvZHkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGRvY3VtZW50LmJvZHkgbm90IHRvIGJlIG51bGwuIFN0cmlwZS5qcyByZXF1aXJlcyBhIDxib2R5PiBlbGVtZW50LicpO1xuICB9XG5cbiAgaGVhZE9yQm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICByZXR1cm4gc2NyaXB0O1xufTtcblxudmFyIHJlZ2lzdGVyV3JhcHBlciA9IGZ1bmN0aW9uIHJlZ2lzdGVyV3JhcHBlcihzdHJpcGUsIHN0YXJ0VGltZSkge1xuICBpZiAoIXN0cmlwZSB8fCAhc3RyaXBlLl9yZWdpc3RlcldyYXBwZXIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzdHJpcGUuX3JlZ2lzdGVyV3JhcHBlcih7XG4gICAgbmFtZTogJ3N0cmlwZS1qcycsXG4gICAgdmVyc2lvbjogXCI0LjAuMFwiLFxuICAgIHN0YXJ0VGltZTogc3RhcnRUaW1lXG4gIH0pO1xufTtcblxudmFyIHN0cmlwZVByb21pc2UgPSBudWxsO1xudmFyIG9uRXJyb3JMaXN0ZW5lciA9IG51bGw7XG52YXIgb25Mb2FkTGlzdGVuZXIgPSBudWxsO1xuXG52YXIgb25FcnJvciA9IGZ1bmN0aW9uIG9uRXJyb3IocmVqZWN0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmVqZWN0KG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgU3RyaXBlLmpzJykpO1xuICB9O1xufTtcblxudmFyIG9uTG9hZCA9IGZ1bmN0aW9uIG9uTG9hZChyZXNvbHZlLCByZWplY3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAod2luZG93LlN0cmlwZSkge1xuICAgICAgcmVzb2x2ZSh3aW5kb3cuU3RyaXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignU3RyaXBlLmpzIG5vdCBhdmFpbGFibGUnKSk7XG4gICAgfVxuICB9O1xufTtcblxudmFyIGxvYWRTY3JpcHQgPSBmdW5jdGlvbiBsb2FkU2NyaXB0KHBhcmFtcykge1xuICAvLyBFbnN1cmUgdGhhdCB3ZSBvbmx5IGF0dGVtcHQgdG8gbG9hZCBTdHJpcGUuanMgYXQgbW9zdCBvbmNlXG4gIGlmIChzdHJpcGVQcm9taXNlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHN0cmlwZVByb21pc2U7XG4gIH1cblxuICBzdHJpcGVQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBSZXNvbHZlIHRvIG51bGwgd2hlbiBpbXBvcnRlZCBzZXJ2ZXIgc2lkZS4gVGhpcyBtYWtlcyB0aGUgbW9kdWxlXG4gICAgICAvLyBzYWZlIHRvIGltcG9ydCBpbiBhbiBpc29tb3JwaGljIGNvZGUgYmFzZS5cbiAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5TdHJpcGUgJiYgcGFyYW1zKSB7XG4gICAgICBjb25zb2xlLndhcm4oRVhJU1RJTkdfU0NSSVBUX01FU1NBR0UpO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cuU3RyaXBlKSB7XG4gICAgICByZXNvbHZlKHdpbmRvdy5TdHJpcGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB2YXIgc2NyaXB0ID0gZmluZFNjcmlwdCgpO1xuXG4gICAgICBpZiAoc2NyaXB0ICYmIHBhcmFtcykge1xuICAgICAgICBjb25zb2xlLndhcm4oRVhJU1RJTkdfU0NSSVBUX01FU1NBR0UpO1xuICAgICAgfSBlbHNlIGlmICghc2NyaXB0KSB7XG4gICAgICAgIHNjcmlwdCA9IGluamVjdFNjcmlwdChwYXJhbXMpO1xuICAgICAgfSBlbHNlIGlmIChzY3JpcHQgJiYgb25Mb2FkTGlzdGVuZXIgIT09IG51bGwgJiYgb25FcnJvckxpc3RlbmVyICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBfc2NyaXB0JHBhcmVudE5vZGU7XG5cbiAgICAgICAgLy8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZExpc3RlbmVyKTtcbiAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvckxpc3RlbmVyKTsgLy8gaWYgc2NyaXB0IGV4aXN0cywgYnV0IHdlIGFyZSByZWxvYWRpbmcgZHVlIHRvIGFuIGVycm9yLFxuICAgICAgICAvLyByZWxvYWQgc2NyaXB0IHRvIHRyaWdnZXIgJ2xvYWQnIGV2ZW50XG5cbiAgICAgICAgKF9zY3JpcHQkcGFyZW50Tm9kZSA9IHNjcmlwdC5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfc2NyaXB0JHBhcmVudE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zY3JpcHQkcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICBzY3JpcHQgPSBpbmplY3RTY3JpcHQocGFyYW1zKTtcbiAgICAgIH1cblxuICAgICAgb25Mb2FkTGlzdGVuZXIgPSBvbkxvYWQocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIG9uRXJyb3JMaXN0ZW5lciA9IG9uRXJyb3IocmVqZWN0KTtcbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkTGlzdGVuZXIpO1xuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvckxpc3RlbmVyKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0pOyAvLyBSZXNldHMgc3RyaXBlUHJvbWlzZSBvbiBlcnJvclxuXG4gIHJldHVybiBzdHJpcGVQcm9taXNlW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgc3RyaXBlUHJvbWlzZSA9IG51bGw7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfSk7XG59O1xudmFyIGluaXRTdHJpcGUgPSBmdW5jdGlvbiBpbml0U3RyaXBlKG1heWJlU3RyaXBlLCBhcmdzLCBzdGFydFRpbWUpIHtcbiAgaWYgKG1heWJlU3RyaXBlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgc3RyaXBlID0gbWF5YmVTdHJpcGUuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgcmVnaXN0ZXJXcmFwcGVyKHN0cmlwZSwgc3RhcnRUaW1lKTtcbiAgcmV0dXJuIHN0cmlwZTtcbn07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXG5cbnZhciBzdHJpcGVQcm9taXNlJDE7XG52YXIgbG9hZENhbGxlZCA9IGZhbHNlO1xuXG52YXIgZ2V0U3RyaXBlUHJvbWlzZSA9IGZ1bmN0aW9uIGdldFN0cmlwZVByb21pc2UoKSB7XG4gIGlmIChzdHJpcGVQcm9taXNlJDEpIHtcbiAgICByZXR1cm4gc3RyaXBlUHJvbWlzZSQxO1xuICB9XG5cbiAgc3RyaXBlUHJvbWlzZSQxID0gbG9hZFNjcmlwdChudWxsKVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnJvcikge1xuICAgIC8vIGNsZWFyIGNhY2hlIG9uIGVycm9yXG4gICAgc3RyaXBlUHJvbWlzZSQxID0gbnVsbDtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9KTtcbiAgcmV0dXJuIHN0cmlwZVByb21pc2UkMTtcbn07IC8vIEV4ZWN1dGUgb3VyIG93biBzY3JpcHQgaW5qZWN0aW9uIGFmdGVyIGEgdGljayB0byBnaXZlIHVzZXJzIHRpbWUgdG8gZG8gdGhlaXJcbi8vIG93biBzY3JpcHQgaW5qZWN0aW9uLlxuXG5cblByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZ2V0U3RyaXBlUHJvbWlzZSgpO1xufSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyb3IpIHtcbiAgaWYgKCFsb2FkQ2FsbGVkKSB7XG4gICAgY29uc29sZS53YXJuKGVycm9yKTtcbiAgfVxufSk7XG52YXIgbG9hZFN0cmlwZSA9IGZ1bmN0aW9uIGxvYWRTdHJpcGUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBsb2FkQ2FsbGVkID0gdHJ1ZTtcbiAgdmFyIHN0YXJ0VGltZSA9IERhdGUubm93KCk7IC8vIGlmIHByZXZpb3VzIGF0dGVtcHRzIGFyZSB1bnN1Y2Nlc3NmdWwsIHdpbGwgcmUtbG9hZCBzY3JpcHRcblxuICByZXR1cm4gZ2V0U3RyaXBlUHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKG1heWJlU3RyaXBlKSB7XG4gICAgcmV0dXJuIGluaXRTdHJpcGUobWF5YmVTdHJpcGUsIGFyZ3MsIHN0YXJ0VGltZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgbG9hZFN0cmlwZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@stripe/stripe-js/dist/index.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/@stripe/stripe-js/lib/index.mjs":
/*!******************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/lib/index.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadStripe: () => (/* reexport safe */ _dist_index_mjs__WEBPACK_IMPORTED_MODULE_0__.loadStripe)\n/* harmony export */ });\n/* harmony import */ var _dist_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/index.mjs */ \"(ssr)/./node_modules/@stripe/stripe-js/dist/index.mjs\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zdHJpcGUtanMvbGliL2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhYmxvLW5leHRqcy10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3N0cmlwZS1qcy9saWIvaW5kZXgubWpzPzFjNWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi4vZGlzdC9pbmRleC5tanMnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@stripe/stripe-js/lib/index.mjs\n");

/***/ })

};
;