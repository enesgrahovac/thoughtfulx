"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/components/pageContent/Dashboard/Dashboard.tsx":
/*!************************************************************!*\
  !*** ./src/components/pageContent/Dashboard/Dashboard.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   copyTextToClipboard: function() { return /* binding */ copyTextToClipboard; },\n/* harmony export */   \"default\": function() { return /* binding */ DashboardContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.module.css */ \"(app-pages-browser)/./src/components/pageContent/Dashboard/Dashboard.module.css\");\n/* harmony import */ var _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/UserContext */ \"(app-pages-browser)/./src/contexts/UserContext.tsx\");\n/* harmony import */ var _components_patterns_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/patterns/Button/Button */ \"(app-pages-browser)/./src/components/patterns/Button/Button.tsx\");\n/* harmony import */ var _components_PageLayout_PageLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/PageLayout/PageLayout */ \"(app-pages-browser)/./src/components/PageLayout/PageLayout.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nasync function copyTextToClipboard(text) {\n    try {\n        await navigator.clipboard.writeText(text);\n    } catch (err) {}\n}\nfunction DashboardContent() {\n    _s();\n    // const [ showCopiedMessage, setShowCopiedMessage ] = useState(false);\n    const { userId } = (0,_contexts_UserContext__WEBPACK_IMPORTED_MODULE_2__.useUser)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageLayout_PageLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        title: \"Home\",\n        showStaticHeader: true,\n        showMenu: false,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_1___default().dashboardContainer),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_1___default().description),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Choose an Action!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Dashboard/Dashboard.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_1___default().actionButtons),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_patterns_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                label: \"Send Message\",\n                                onClick: ()=>{\n                                    window.location.href = \"https://x.com/messages/compose\";\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Dashboard/Dashboard.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_patterns_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                label: \"Write a Post\",\n                                onClick: ()=>{\n                                    window.location.href = \"https://x.com/compose/post\";\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Dashboard/Dashboard.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_patterns_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                label: \"Check Inbox\",\n                                onClick: ()=>{\n                                    window.location.href = \"https://x.com/messages\";\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Dashboard/Dashboard.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_patterns_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                label: \"View Profile\",\n                                onClick: ()=>{\n                                    window.location.href = \"https://x.com/profile\";\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Dashboard/Dashboard.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Dashboard/Dashboard.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Missing something? \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.google.com\",\n                                children: \"request a new action\"\n                            }, void 0, false, {\n                                fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Dashboard/Dashboard.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 44\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Dashboard/Dashboard.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Dashboard/Dashboard.tsx\",\n                lineNumber: 24,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Dashboard/Dashboard.tsx\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Dashboard/Dashboard.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(DashboardContent, \"9MpxnjvQ90Id6ipcPUm2ysVyNYw=\", false, function() {\n    return [\n        _contexts_UserContext__WEBPACK_IMPORTED_MODULE_2__.useUser\n    ];\n});\n_c = DashboardContent;\nvar _c;\n$RefreshReg$(_c, \"DashboardContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3BhZ2VDb250ZW50L0Rhc2hib2FyZC9EYXNoYm9hcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDSTtBQUNTO0FBSUc7QUFFckQsZUFBZUksb0JBQW9CQyxJQUFZO0lBQ2xELElBQUk7UUFDQSxNQUFNQyxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0g7SUFDeEMsRUFBRSxPQUFPSSxLQUFLLENBQUU7QUFDcEI7QUFFZSxTQUFTQzs7SUFFcEIsdUVBQXVFO0lBQ3ZFLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdWLDhEQUFPQTtJQUUxQixxQkFDSSw4REFBQ0UseUVBQVVBO1FBQUNTLE9BQU07UUFBT0Msa0JBQWtCO1FBQU1DLFVBQVU7a0JBQ3ZELDRFQUFDQztZQUFJQyxXQUFXaEIsaUZBQXlCO3NCQUNyQyw0RUFBQ2U7Z0JBQUlDLFdBQVdoQiwwRUFBa0I7O2tDQUM5Qiw4REFBQ21CO2tDQUFJOzs7Ozs7a0NBQ0wsOERBQUNKO3dCQUFJQyxXQUFXaEIsNEVBQW9COzswQ0FDaEMsOERBQUNFLDBFQUFNQTtnQ0FBQ21CLE9BQU07Z0NBQWVDLFNBQVM7b0NBQVFDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO2dDQUFrQzs7Ozs7OzBDQUN2Ryw4REFBQ3ZCLDBFQUFNQTtnQ0FBQ21CLE9BQU07Z0NBQWVDLFNBQVM7b0NBQVFDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO2dDQUE4Qjs7Ozs7OzBDQUNuRyw4REFBQ3ZCLDBFQUFNQTtnQ0FBQ21CLE9BQU07Z0NBQWNDLFNBQVM7b0NBQVFDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO2dDQUEwQjs7Ozs7OzBDQUM5Riw4REFBQ3ZCLDBFQUFNQTtnQ0FBQ21CLE9BQU07Z0NBQWVDLFNBQVM7b0NBQVFDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO2dDQUF5Qjs7Ozs7Ozs7Ozs7O2tDQUVsRyw4REFBQ1Y7OzRCQUFJOzBDQUNrQiw4REFBQ1c7Z0NBQUVELE1BQUs7MENBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVFO0dBdkJ3QmY7O1FBR0RULDBEQUFPQTs7O0tBSE5TIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3BhZ2VDb250ZW50L0Rhc2hib2FyZC9EYXNoYm9hcmQudHN4PzNkM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9EYXNoYm9hcmQubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnQC9jb250ZXh0cy9Vc2VyQ29udGV4dCdcbmltcG9ydCBCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9wYXR0ZXJucy9CdXR0b24vQnV0dG9uXCI7XG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQC9jb21wb25lbnRzL3BhdHRlcm5zL0RpdmlkZXIvRGl2aWRlclwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL3BhdHRlcm5zL0hlYWRlci9IZWFkZXJcIjtcbmltcG9ydCB7IEFsZXJ0Q2lyY2xlLCBCZWxsLCBCZWxsT2ZmLCBDaGVjaywgQ2xvY2ssIFNoYXJlIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IFBhZ2VMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9QYWdlTGF5b3V0L1BhZ2VMYXlvdXRcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvcHlUZXh0VG9DbGlwYm9hcmQodGV4dDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkQ29udGVudCgpIHtcblxuICAgIC8vIGNvbnN0IFsgc2hvd0NvcGllZE1lc3NhZ2UsIHNldFNob3dDb3BpZWRNZXNzYWdlIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgeyB1c2VySWQgfSA9IHVzZVVzZXIoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdlTGF5b3V0IHRpdGxlPVwiSG9tZVwiIHNob3dTdGF0aWNIZWFkZXI9e3RydWV9IHNob3dNZW51PXtmYWxzZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhc2hib2FyZENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxoMiA+Q2hvb3NlIGFuIEFjdGlvbiE8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbkJ1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIlNlbmQgTWVzc2FnZVwiIG9uQ2xpY2s9eygpID0+IHsgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaHR0cHM6Ly94LmNvbS9tZXNzYWdlcy9jb21wb3NlJzsgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJXcml0ZSBhIFBvc3RcIiBvbkNsaWNrPXsoKSA9PiB7IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2h0dHBzOi8veC5jb20vY29tcG9zZS9wb3N0JzsgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJDaGVjayBJbmJveFwiIG9uQ2xpY2s9eygpID0+IHsgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaHR0cHM6Ly94LmNvbS9tZXNzYWdlcyc7IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiVmlldyBQcm9maWxlXCIgb25DbGljaz17KCkgPT4geyB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdodHRwczovL3guY29tL3Byb2ZpbGUnOyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1pc3Npbmcgc29tZXRoaW5nPyA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbVwiPnJlcXVlc3QgYSBuZXcgYWN0aW9uPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhZ2VMYXlvdXQ+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VVc2VyIiwiQnV0dG9uIiwiUGFnZUxheW91dCIsImNvcHlUZXh0VG9DbGlwYm9hcmQiLCJ0ZXh0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZXJyIiwiRGFzaGJvYXJkQ29udGVudCIsInVzZXJJZCIsInRpdGxlIiwic2hvd1N0YXRpY0hlYWRlciIsInNob3dNZW51IiwiZGl2IiwiY2xhc3NOYW1lIiwiZGFzaGJvYXJkQ29udGFpbmVyIiwiZGVzY3JpcHRpb24iLCJoMiIsImFjdGlvbkJ1dHRvbnMiLCJsYWJlbCIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/pageContent/Dashboard/Dashboard.tsx\n"));

/***/ })

});