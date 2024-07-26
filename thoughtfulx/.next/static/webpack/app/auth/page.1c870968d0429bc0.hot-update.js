"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/page",{

/***/ "(app-pages-browser)/./src/components/pageContent/Authentication/Register.tsx":
/*!****************************************************************!*\
  !*** ./src/components/pageContent/Authentication/Register.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PageLayout_PageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/PageLayout/PageLayout */ \"(app-pages-browser)/./src/components/PageLayout/PageLayout.tsx\");\n/* harmony import */ var _Register_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Register.module.css */ \"(app-pages-browser)/./src/components/pageContent/Authentication/Register.module.css\");\n/* harmony import */ var _Register_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Register_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_patterns_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/patterns/Header/Header */ \"(app-pages-browser)/./src/components/patterns/Header/Header.tsx\");\n/* harmony import */ var _components_patterns_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/patterns/Button/Button */ \"(app-pages-browser)/./src/components/patterns/Button/Button.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_img_google_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/public/img/google.png */ \"(app-pages-browser)/./src/public/img/google.png\");\n/* harmony import */ var _utils_supabase_auth_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/supabase/auth/client */ \"(app-pages-browser)/./src/utils/supabase/auth/client.ts\");\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/contexts/UserContext */ \"(app-pages-browser)/./src/contexts/UserContext.tsx\");\n// Register.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst RegisterContent = (param)=>{\n    let {} = param;\n    _s();\n    const supabase = (0,_utils_supabase_auth_client__WEBPACK_IMPORTED_MODULE_8__.createClient)();\n    const { lastFileID, setLastFileID } = (0,_contexts_UserContext__WEBPACK_IMPORTED_MODULE_9__.useUser)();\n    const [login, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [titleText, setTitleText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Register for ThoughtfulX\");\n    const [preLinkText, setPreLinkText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Have an account?\");\n    const [linkText, setLinkText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Sign in instead\");\n    const [labelText, setLabelText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Register with X\");\n    // const [fromUpload, setFromUpload] = useState(false)\n    // Check for a fromUpload query parameter\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const urlParams = new URLSearchParams(window.location.search);\n        const fromUpload = urlParams.get(\"fromUpload\");\n    // if (fromUpload === 'true') {\n    //     setFromUpload(true);\n    // } else {\n    //     setFromUpload(false);\n    // }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (login === true) {\n            setTitleText(\"Log in to ThoughtfulX\");\n            setPreLinkText(\"Don't have an account?\");\n            setLinkText(\"Sign up instead\");\n            setLabelText(\"Log in with X (Twitter)\");\n        } else {\n            setTitleText(\"Register for ThoughtfulX\");\n            setPreLinkText(\"Have an account?\");\n            setLinkText(\"Sign in instead\");\n            setLabelText(\"Register with X (Twitter)\");\n        }\n    }, [\n        login\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [\n        supabase.auth\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [\n        lastFileID\n    ]);\n    const callGoogleAuth = async (nextUrl)=>{\n        const redirectToURL = \"\".concat(window.location.origin, \"/auth/callback?next=\").concat(nextUrl || \"\");\n        const result = await supabase.auth.signInWithOAuth({\n            provider: \"google\",\n            options: {\n                redirectTo: redirectToURL\n            }\n        });\n        return result;\n    };\n    const handleLogin = async ()=>{\n        const result = await callGoogleAuth(\"/home\");\n        const { data, error } = result;\n        if (error) {\n            console.error(\"Error logging in:\", error.message);\n        } else {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageLayout_PageLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        showHeader: false,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_patterns_Header_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        title: titleText,\n                        subtitle: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                preLinkText,\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    onClick: (e)=>{\n                                        e.preventDefault();\n                                        setLogin(!login);\n                                    },\n                                    children: linkText\n                                }, void 0, false, {\n                                    fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Authentication/Register.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 33\n                                }, void 0),\n                                \".\"\n                            ]\n                        }, void 0, true),\n                        className: (_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default().header)\n                    }, void 0, false, {\n                        fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Authentication/Register.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonWrapper),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_patterns_Button_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            variant: \"primary\",\n                            label: labelText,\n                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default().iconWrapper),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    alt: \"Google\",\n                                    src: _public_img_google_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                    width: 16,\n                                    height: 16\n                                }, void 0, false, {\n                                    fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Authentication/Register.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 37\n                                }, void 0)\n                            }, void 0, false, {\n                                fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Authentication/Register.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 33\n                            }, void 0),\n                            className: (_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                            onClick: handleLogin\n                        }, void 0, false, {\n                            fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Authentication/Register.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Authentication/Register.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Authentication/Register.tsx\",\n                lineNumber: 91,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Authentication/Register.tsx\",\n            lineNumber: 90,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/enes/Documents/Software Development/thoughtfulx/thoughtfulx/src/components/pageContent/Authentication/Register.tsx\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, undefined);\n};\n_s(RegisterContent, \"7HbybzSKT57Y+pfb20Olq74MrQM=\", false, function() {\n    return [\n        _contexts_UserContext__WEBPACK_IMPORTED_MODULE_9__.useUser\n    ];\n});\n_c = RegisterContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterContent);\nvar _c;\n$RefreshReg$(_c, \"RegisterContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3BhZ2VDb250ZW50L0F1dGhlbnRpY2F0aW9uL1JlZ2lzdGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsZUFBZTs7O0FBQ2tDO0FBQ3ZCO0FBRWtDO0FBQ2pCO0FBQ2M7QUFDQTtBQUMxQjtBQUNjO0FBQ2U7QUFDZDtBQUM5QyxNQUFNVyxrQkFBa0I7UUFBQyxFQUFPOztJQUM1QixNQUFNQyxXQUFXSCx5RUFBWUE7SUFDN0IsTUFBTSxFQUFFSSxVQUFVLEVBQUVDLGFBQWEsRUFBRSxHQUFHSiw4REFBT0E7SUFDN0MsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2dCLFdBQVdDLGFBQWEsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2tCLGFBQWFDLGVBQWUsR0FBR25CLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ29CLFVBQVVDLFlBQVksR0FBR3JCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ3NCLFdBQVdDLGFBQWEsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBSTNDLHNEQUFzRDtJQUN0RCx5Q0FBeUM7SUFDekNELGdEQUFTQSxDQUFDO1FBQ04sTUFBTXlCLFlBQVksSUFBSUMsZ0JBQWdCQyxPQUFPQyxRQUFRLENBQUNDLE1BQU07UUFDNUQsTUFBTUMsYUFBYUwsVUFBVU0sR0FBRyxDQUFDO0lBQ2pDLCtCQUErQjtJQUMvQiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixJQUFJO0lBQ1IsR0FBRyxFQUFFO0lBRUwvQixnREFBU0EsQ0FBQztRQUNOLElBQUllLFVBQVUsTUFBTTtZQUNoQkcsYUFBYTtZQUNiRSxlQUFlO1lBQ2ZFLFlBQVk7WUFDWkUsYUFBYTtRQUNqQixPQUFPO1lBQ0hOLGFBQWE7WUFDYkUsZUFBZTtZQUNmRSxZQUFZO1lBQ1pFLGFBQWE7UUFFakI7SUFDSixHQUFHO1FBQUNUO0tBQU07SUFFVmYsZ0RBQVNBLENBQUMsS0FHVixHQUFHO1FBQUNZLFNBQVNvQixJQUFJO0tBQUM7SUFHbEJoQyxnREFBU0EsQ0FBQyxLQUVWLEdBQUc7UUFBQ2E7S0FBVztJQUVmLE1BQU1vQixpQkFBaUIsT0FBT0M7UUFFMUIsTUFBTUMsZ0JBQWUsR0FBZ0RELE9BQTdDUCxPQUFPQyxRQUFRLENBQUNRLE1BQU0sRUFBQyx3QkFBb0MsT0FBZEYsV0FBVztRQUVoRixNQUFNRyxTQUFTLE1BQU16QixTQUFTb0IsSUFBSSxDQUFDTSxlQUFlLENBQUM7WUFDL0NDLFVBQVU7WUFDVkMsU0FBUztnQkFDTEMsWUFBWU47WUFDaEI7UUFDRjtRQUVGLE9BQU9FO0lBQ1g7SUFFQSxNQUFNSyxjQUFjO1FBQ2hCLE1BQU1MLFNBQVMsTUFBTUosZUFBZTtRQUVwQyxNQUFNLEVBQUVVLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdQO1FBR3hCLElBQUlPLE9BQU87WUFDUEMsUUFBUUQsS0FBSyxDQUFDLHFCQUFxQkEsTUFBTUUsT0FBTztRQUNwRCxPQUFPLENBRVA7SUFDSjtJQUVBLHFCQUNJLDhEQUFDM0MseUVBQVVBO1FBQUM0QyxZQUFZO2tCQUNwQiw0RUFBQ0M7WUFBSUMsV0FBVzdDLHFFQUFjO3NCQUMxQiw0RUFBQzRDO2dCQUFJQyxXQUFXN0Msa0VBQVc7O2tDQUN2Qiw4REFBQ0MsMEVBQU1BO3dCQUNIK0MsT0FBT25DO3dCQUNQb0Msd0JBQ0k7O2dDQUNLbEM7Z0NBQWE7OENBQ2QsOERBQUNtQztvQ0FBRUMsTUFBSztvQ0FBSUMsU0FBUyxDQUFDQzt3Q0FDbEJBLEVBQUVDLGNBQWM7d0NBQ2hCMUMsU0FBUyxDQUFDRDtvQ0FDZDs4Q0FDS007Ozs7OztnQ0FDRDs7O3dCQUdaNEIsV0FBVzdDLG9FQUFhOzs7Ozs7a0NBRTVCLDhEQUFDNEM7d0JBQUlDLFdBQVc3QywyRUFBb0I7a0NBQ2hDLDRFQUFDRSwwRUFBTUE7NEJBQ0h1RCxTQUFROzRCQUNSQyxPQUFPdkM7NEJBQ1B3QyxvQkFDSSw4REFBQ2Y7Z0NBQUlDLFdBQVc3Qyx5RUFBa0I7MENBQzlCLDRFQUFDRyxrREFBS0E7b0NBQUMwRCxLQUFJO29DQUFTQyxLQUFLMUQsOERBQU1BO29DQUFFMkQsT0FBTztvQ0FBSUMsUUFBUTs7Ozs7Ozs7Ozs7NEJBRzVEbkIsV0FBVzdDLG9FQUFhOzRCQUN4Qm9ELFNBQVNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckM7R0EvR00vQjs7UUFFb0NELDBEQUFPQTs7O0tBRjNDQztBQWlITiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wYWdlQ29udGVudC9BdXRoZW50aWNhdGlvbi9SZWdpc3Rlci50c3g/NTVjZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZWdpc3Rlci50c3hcbmltcG9ydCB7IHVzZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgUGFnZUxheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL1BhZ2VMYXlvdXQvUGFnZUxheW91dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9SZWdpc3Rlci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvcGF0dGVybnMvSGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL3BhdHRlcm5zL0J1dHRvbi9CdXR0b25cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGdvb2dsZSBmcm9tIFwiQC9wdWJsaWMvaW1nL2dvb2dsZS5wbmdcIjtcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0AvdXRpbHMvc3VwYWJhc2UvYXV0aC9jbGllbnQnO1xuaW1wb3J0IHt1c2VVc2VyfSBmcm9tICdAL2NvbnRleHRzL1VzZXJDb250ZXh0J1xuY29uc3QgUmVnaXN0ZXJDb250ZW50ID0gKHsgfToge30pID0+IHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudCgpO1xuICAgIGNvbnN0IHsgbGFzdEZpbGVJRCwgc2V0TGFzdEZpbGVJRCB9ID0gdXNlVXNlcigpO1xuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3RpdGxlVGV4dCwgc2V0VGl0bGVUZXh0XSA9IHVzZVN0YXRlKFwiUmVnaXN0ZXIgZm9yIFRob3VnaHRmdWxYXCIpXG4gICAgY29uc3QgW3ByZUxpbmtUZXh0LCBzZXRQcmVMaW5rVGV4dF0gPSB1c2VTdGF0ZShcIkhhdmUgYW4gYWNjb3VudD9cIilcbiAgICBjb25zdCBbbGlua1RleHQsIHNldExpbmtUZXh0XSA9IHVzZVN0YXRlKFwiU2lnbiBpbiBpbnN0ZWFkXCIpXG4gICAgY29uc3QgW2xhYmVsVGV4dCwgc2V0TGFiZWxUZXh0XSA9IHVzZVN0YXRlKFwiUmVnaXN0ZXIgd2l0aCBYXCIpXG5cbiAgICBcblxuICAgIC8vIGNvbnN0IFtmcm9tVXBsb2FkLCBzZXRGcm9tVXBsb2FkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIC8vIENoZWNrIGZvciBhIGZyb21VcGxvYWQgcXVlcnkgcGFyYW1ldGVyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgY29uc3QgZnJvbVVwbG9hZCA9IHVybFBhcmFtcy5nZXQoJ2Zyb21VcGxvYWQnKTtcbiAgICAgICAgLy8gaWYgKGZyb21VcGxvYWQgPT09ICd0cnVlJykge1xuICAgICAgICAvLyAgICAgc2V0RnJvbVVwbG9hZCh0cnVlKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIHNldEZyb21VcGxvYWQoZmFsc2UpO1xuICAgICAgICAvLyB9XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGxvZ2luID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzZXRUaXRsZVRleHQoXCJMb2cgaW4gdG8gVGhvdWdodGZ1bFhcIilcbiAgICAgICAgICAgIHNldFByZUxpbmtUZXh0KFwiRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P1wiKVxuICAgICAgICAgICAgc2V0TGlua1RleHQoXCJTaWduIHVwIGluc3RlYWRcIilcbiAgICAgICAgICAgIHNldExhYmVsVGV4dChcIkxvZyBpbiB3aXRoIFggKFR3aXR0ZXIpXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaXRsZVRleHQoXCJSZWdpc3RlciBmb3IgVGhvdWdodGZ1bFhcIilcbiAgICAgICAgICAgIHNldFByZUxpbmtUZXh0KFwiSGF2ZSBhbiBhY2NvdW50P1wiKVxuICAgICAgICAgICAgc2V0TGlua1RleHQoXCJTaWduIGluIGluc3RlYWRcIilcbiAgICAgICAgICAgIHNldExhYmVsVGV4dChcIlJlZ2lzdGVyIHdpdGggWCAoVHdpdHRlcilcIilcblxuICAgICAgICB9XG4gICAgfSwgW2xvZ2luXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9LCBbc3VwYWJhc2UuYXV0aF0pXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIFxuICAgIH0sIFtsYXN0RmlsZUlEXSlcblxuICAgIGNvbnN0IGNhbGxHb29nbGVBdXRoID0gYXN5bmMgKG5leHRVcmw6c3RyaW5nKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZWRpcmVjdFRvVVJMPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hdXRoL2NhbGxiYWNrP25leHQ9JHtuZXh0VXJsIHx8IFwiXCJ9YFxuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduSW5XaXRoT0F1dGgoe1xuICAgICAgICAgICAgcHJvdmlkZXI6IFwiZ29vZ2xlXCIsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RUbzogcmVkaXJlY3RUb1VSTCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYWxsR29vZ2xlQXV0aChcIi9ob21lXCIpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gcmVzdWx0O1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9nZ2luZyBpbjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdlTGF5b3V0IHNob3dIZWFkZXI9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlTGlua1RleHR9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dpbighbG9naW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5rVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25XcmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiR29vZ2xlXCIgc3JjPXtnb29nbGV9IHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dpbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFnZUxheW91dD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJDb250ZW50O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVhY3QiLCJQYWdlTGF5b3V0Iiwic3R5bGVzIiwiSGVhZGVyIiwiQnV0dG9uIiwiSW1hZ2UiLCJnb29nbGUiLCJjcmVhdGVDbGllbnQiLCJ1c2VVc2VyIiwiUmVnaXN0ZXJDb250ZW50Iiwic3VwYWJhc2UiLCJsYXN0RmlsZUlEIiwic2V0TGFzdEZpbGVJRCIsImxvZ2luIiwic2V0TG9naW4iLCJ0aXRsZVRleHQiLCJzZXRUaXRsZVRleHQiLCJwcmVMaW5rVGV4dCIsInNldFByZUxpbmtUZXh0IiwibGlua1RleHQiLCJzZXRMaW5rVGV4dCIsImxhYmVsVGV4dCIsInNldExhYmVsVGV4dCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiZnJvbVVwbG9hZCIsImdldCIsImF1dGgiLCJjYWxsR29vZ2xlQXV0aCIsIm5leHRVcmwiLCJyZWRpcmVjdFRvVVJMIiwib3JpZ2luIiwicmVzdWx0Iiwic2lnbkluV2l0aE9BdXRoIiwicHJvdmlkZXIiLCJvcHRpb25zIiwicmVkaXJlY3RUbyIsImhhbmRsZUxvZ2luIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJzaG93SGVhZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwid3JhcHBlciIsIm1haW4iLCJ0aXRsZSIsInN1YnRpdGxlIiwiYSIsImhyZWYiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGVhZGVyIiwiYnV0dG9uV3JhcHBlciIsInZhcmlhbnQiLCJsYWJlbCIsImljb24iLCJpY29uV3JhcHBlciIsImFsdCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/pageContent/Authentication/Register.tsx\n"));

/***/ })

});