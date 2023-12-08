"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/utilities/navigations.js":
/*!**************************************!*\
  !*** ./src/utilities/navigations.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FooterItems: function() { return /* binding */ FooterItems; },\n/* harmony export */   NavigationObj: function() { return /* binding */ NavigationObj; },\n/* harmony export */   SidebarNavs: function() { return /* binding */ SidebarNavs; }\n/* harmony export */ });\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../next.config */ \"./next.config.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_0__);\n\nconst NavigationObj = ()=>{\n    const headerItems = [\n        /*  {\n      name: \"Home\",\n      href: \"/\",\n    }, */ {\n            name: \"About\",\n            href: \"/#about\"\n        },\n        {\n            name: \"People\",\n            href: \"/#people\"\n        },\n        {\n            name: \"Help\",\n            subNav: [\n                {\n                    name: \"Event\",\n                    href: \"/help/event\"\n                },\n                {\n                    name: \"Account\",\n                    href: \"/help/account\"\n                },\n                {\n                    name: \"Security\",\n                    href: \"/help/security\"\n                }\n            ]\n        }\n    ];\n    return headerItems;\n};\n_c = NavigationObj;\nconst FooterItems = ()=>{\n    const footerItems = [\n        {\n            title: \"SITE MAP\",\n            contents: [\n                {\n                    name: \"runit\",\n                    href: \"http://170.64.220.126:3000/signup\"\n                },\n                {\n                    name: \"runit.github.io\",\n                    href: _next_config__WEBPACK_IMPORTED_MODULE_0__.basePath\n                }\n            ]\n        },\n        {\n            title: \"Contact Julian\",\n            contents: [\n                {\n                    name: \"Github\",\n                    href: \"https://github.com/juliantjg\"\n                },\n                {\n                    name: \"Email\",\n                    href: \"mailto:juliantj88@gmail.com\"\n                }\n            ]\n        },\n        {\n            title: \"Contact Manan\",\n            contents: [\n                {\n                    name: \"Github\",\n                    href: \"https://github.com/mananlodhia1\"\n                },\n                {\n                    name: \"Email\",\n                    href: \"mailto:mananlodhia@hotmail.com\"\n                }\n            ]\n        }\n    ];\n    return footerItems;\n};\n_c1 = FooterItems;\nconst SidebarNavs = ()=>{\n    const sidebarNavs = [\n        {\n            path: \"event\",\n            title: \"Events\",\n            // icons: <span className=\"font-semibold text-gray-500\">AU</span>,\n            subNav: [\n                {\n                    path: \"event#Browsing-Events\",\n                    title: \"Browsing Events\"\n                },\n                {\n                    path: \"event#Event-Suggestions\",\n                    title: \"Event Suggestions\"\n                },\n                {\n                    path: \"event#Creating-An-Event\",\n                    title: \"Creating An Event\"\n                },\n                {\n                    path: \"event#Joining-An-Event\",\n                    title: \"Joining An Event\"\n                },\n                {\n                    path: \"event#Event-Page\",\n                    title: \"Event Page\"\n                },\n                {\n                    path: \"event#Writing-Comments\",\n                    title: \"Writing Comments\"\n                },\n                {\n                    path: \"event#Viewing-Members\",\n                    title: \"Viewing Members\"\n                },\n                {\n                    path: \"event#Managing-Applicants\",\n                    title: \"Managing Applicants\"\n                },\n                {\n                    path: \"event#Notifications\",\n                    title: \"Notifications\"\n                }\n            ]\n        },\n        {\n            path: \"account\",\n            title: \"Account\",\n            subNav: [\n                {\n                    path: \"account#Profile\",\n                    title: \"Profile\"\n                },\n                {\n                    path: \"account#Calendar\",\n                    title: \"Calendar\"\n                },\n                {\n                    path: \"account#View-List-of-Starred-Users\",\n                    title: \"Starred Users\"\n                },\n                {\n                    path: \"account#Giving-Stars\",\n                    title: \"Giving Stars\"\n                },\n                {\n                    path: \"account#Sending-Feedback\",\n                    title: \"Sending Feedback\"\n                }\n            ]\n        },\n        {\n            path: \"security\",\n            title: \"Security\",\n            subNav: [\n                {\n                    path: \"security#Change-Password\",\n                    title: \"Change Password\"\n                },\n                {\n                    path: \"security#Unverified-Account-Restricted-Access\",\n                    title: \"Unverified Accounts\"\n                },\n                {\n                    path: \"security#Verifying-Account\",\n                    title: \"Verifying Accounts\"\n                }\n            ]\n        }\n    ];\n    return sidebarNavs;\n};\n_c2 = SidebarNavs;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"NavigationObj\");\n$RefreshReg$(_c1, \"FooterItems\");\n$RefreshReg$(_c2, \"SidebarNavs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbGl0aWVzL25hdmlnYXRpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZDO0FBRXRDLE1BQU1DLGdCQUFnQjtJQUMzQixNQUFNQyxjQUFjO1FBQ2xCOzs7T0FHRyxHQUNIO1lBQ0VDLE1BQU07WUFDTkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxNQUFNO1lBQ05FLFFBQVE7Z0JBQ047b0JBQ0VGLE1BQU07b0JBQ05DLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VELE1BQU07b0JBQ05DLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VELE1BQU07b0JBQ05DLE1BQU07Z0JBQ1I7YUFDRDtRQUNIO0tBQ0Q7SUFFRCxPQUFPRjtBQUNULEVBQUU7S0FsQ1dEO0FBb0NOLE1BQU1LLGNBQWM7SUFDekIsTUFBTUMsY0FBYztRQUNsQjtZQUNFQyxPQUFPO1lBQ1BDLFVBQVU7Z0JBQ1I7b0JBQ0VOLE1BQU07b0JBQ05DLE1BQU87Z0JBQ1Q7Z0JBQ0E7b0JBQ0VELE1BQU07b0JBQ05DLE1BQU1KLGtEQUFRQTtnQkFDaEI7YUFDRDtRQUNIO1FBQ0E7WUFDRVEsT0FBTztZQUNQQyxVQUFVO2dCQUNSO29CQUNFTixNQUFNO29CQUNOQyxNQUFNO2dCQUNSO2dCQUNBO29CQUNFRCxNQUFNO29CQUNOQyxNQUFPO2dCQUNUO2FBQ0Q7UUFDSDtRQUNBO1lBQ0VJLE9BQU87WUFDUEMsVUFBVTtnQkFDUjtvQkFDRU4sTUFBTTtvQkFDTkMsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUQsTUFBTTtvQkFDTkMsTUFBTztnQkFDVDthQUNEO1FBQ0g7S0FDRDtJQUVELE9BQU9HO0FBQ1QsRUFBRTtNQTVDV0Q7QUE4Q04sTUFBTUksY0FBYztJQUN6QixNQUFNQyxjQUFjO1FBQ2xCO1lBQ0VDLE1BQU07WUFDTkosT0FBTztZQUNQLGtFQUFrRTtZQUNsRUgsUUFBUTtnQkFDTjtvQkFDRU8sTUFBTTtvQkFDTkosT0FBTztnQkFDVDtnQkFDQTtvQkFDRUksTUFBTTtvQkFDTkosT0FBTztnQkFDVDtnQkFDQTtvQkFDRUksTUFBTTtvQkFDTkosT0FBTztnQkFDVDtnQkFDQTtvQkFDRUksTUFBTTtvQkFDTkosT0FBTztnQkFDVDtnQkFDQTtvQkFDRUksTUFBTTtvQkFDTkosT0FBTztnQkFDVDtnQkFDQTtvQkFDRUksTUFBTTtvQkFDTkosT0FBTztnQkFDVDtnQkFDQTtvQkFDRUksTUFBTTtvQkFDTkosT0FBTztnQkFDVDtnQkFDQTtvQkFDRUksTUFBTTtvQkFDTkosT0FBTztnQkFDVDtnQkFDQTtvQkFDRUksTUFBTTtvQkFDTkosT0FBTztnQkFDVDthQUNEO1FBQ0g7UUFDQTtZQUNFSSxNQUFNO1lBQ05KLE9BQU87WUFDUEgsUUFBUTtnQkFDTjtvQkFDRU8sTUFBTTtvQkFDTkosT0FBTztnQkFDVDtnQkFDQTtvQkFDRUksTUFBTTtvQkFDTkosT0FBTztnQkFDVDtnQkFDQTtvQkFDRUksTUFBTTtvQkFDTkosT0FBTztnQkFDVDtnQkFDQTtvQkFDRUksTUFBTTtvQkFDTkosT0FBTztnQkFDVDtnQkFDQTtvQkFDRUksTUFBTTtvQkFDTkosT0FBTztnQkFDVDthQUNEO1FBRUg7UUFDQTtZQUNFSSxNQUFNO1lBQ05KLE9BQU87WUFDUEgsUUFBUTtnQkFDTjtvQkFDRU8sTUFBTTtvQkFDTkosT0FBTztnQkFDVDtnQkFDQTtvQkFDRUksTUFBTTtvQkFDTkosT0FBTztnQkFDVDtnQkFDQTtvQkFDRUksTUFBTTtvQkFDTkosT0FBTztnQkFDVDthQUNEO1FBRUg7S0FDRDtJQUVELE9BQU9HO0FBQ1QsRUFBRTtNQTlGV0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxpdGllcy9uYXZpZ2F0aW9ucy5qcz8zZjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJhc2VQYXRoIH0gZnJvbSBcIi4uLy4uL25leHQuY29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uT2JqID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXJJdGVtcyA9IFtcbiAgICAvKiAge1xuICAgICAgbmFtZTogXCJIb21lXCIsXG4gICAgICBocmVmOiBcIi9cIixcbiAgICB9LCAqL1xuICAgIHtcbiAgICAgIG5hbWU6IFwiQWJvdXRcIixcbiAgICAgIGhyZWY6IFwiLyNhYm91dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJQZW9wbGVcIixcbiAgICAgIGhyZWY6IFwiLyNwZW9wbGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiSGVscFwiLFxuICAgICAgc3ViTmF2OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIkV2ZW50XCIsXG4gICAgICAgICAgaHJlZjogXCIvaGVscC9ldmVudFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJBY2NvdW50XCIsXG4gICAgICAgICAgaHJlZjogXCIvaGVscC9hY2NvdW50XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIlNlY3VyaXR5XCIsXG4gICAgICAgICAgaHJlZjogXCIvaGVscC9zZWN1cml0eVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiBoZWFkZXJJdGVtcztcbn07XG5cbmV4cG9ydCBjb25zdCBGb290ZXJJdGVtcyA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVySXRlbXMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiU0lURSBNQVBcIixcbiAgICAgIGNvbnRlbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInJ1bml0XCIsXG4gICAgICAgICAgaHJlZjogYGh0dHA6Ly8xNzAuNjQuMjIwLjEyNjozMDAwL3NpZ251cGAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInJ1bml0LmdpdGh1Yi5pb1wiLFxuICAgICAgICAgIGhyZWY6IGJhc2VQYXRoLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNvbnRhY3QgSnVsaWFuXCIsXG4gICAgICBjb250ZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJHaXRodWJcIixcbiAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qdWxpYW50amdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiRW1haWxcIixcbiAgICAgICAgICBocmVmOiBgbWFpbHRvOmp1bGlhbnRqODhAZ21haWwuY29tYCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJDb250YWN0IE1hbmFuXCIsXG4gICAgICBjb250ZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJHaXRodWJcIixcbiAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9tYW5hbmxvZGhpYTFcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiRW1haWxcIixcbiAgICAgICAgICBocmVmOiBgbWFpbHRvOm1hbmFubG9kaGlhQGhvdG1haWwuY29tYCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gZm9vdGVySXRlbXM7XG59O1xuXG5leHBvcnQgY29uc3QgU2lkZWJhck5hdnMgPSAoKSA9PiB7XG4gIGNvbnN0IHNpZGViYXJOYXZzID0gW1xuICAgIHtcbiAgICAgIHBhdGg6IFwiZXZlbnRcIixcbiAgICAgIHRpdGxlOiBcIkV2ZW50c1wiLFxuICAgICAgLy8gaWNvbnM6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTUwMFwiPkFVPC9zcGFuPixcbiAgICAgIHN1Yk5hdjogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJldmVudCNCcm93c2luZy1FdmVudHNcIixcbiAgICAgICAgICB0aXRsZTogXCJCcm93c2luZyBFdmVudHNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwiZXZlbnQjRXZlbnQtU3VnZ2VzdGlvbnNcIixcbiAgICAgICAgICB0aXRsZTogXCJFdmVudCBTdWdnZXN0aW9uc1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJldmVudCNDcmVhdGluZy1Bbi1FdmVudFwiLFxuICAgICAgICAgIHRpdGxlOiBcIkNyZWF0aW5nIEFuIEV2ZW50XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImV2ZW50I0pvaW5pbmctQW4tRXZlbnRcIixcbiAgICAgICAgICB0aXRsZTogXCJKb2luaW5nIEFuIEV2ZW50XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImV2ZW50I0V2ZW50LVBhZ2VcIixcbiAgICAgICAgICB0aXRsZTogXCJFdmVudCBQYWdlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImV2ZW50I1dyaXRpbmctQ29tbWVudHNcIixcbiAgICAgICAgICB0aXRsZTogXCJXcml0aW5nIENvbW1lbnRzXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImV2ZW50I1ZpZXdpbmctTWVtYmVyc1wiLFxuICAgICAgICAgIHRpdGxlOiBcIlZpZXdpbmcgTWVtYmVyc1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJldmVudCNNYW5hZ2luZy1BcHBsaWNhbnRzXCIsXG4gICAgICAgICAgdGl0bGU6IFwiTWFuYWdpbmcgQXBwbGljYW50c1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJldmVudCNOb3RpZmljYXRpb25zXCIsXG4gICAgICAgICAgdGl0bGU6IFwiTm90aWZpY2F0aW9uc1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6IFwiYWNjb3VudFwiLFxuICAgICAgdGl0bGU6IFwiQWNjb3VudFwiLFxuICAgICAgc3ViTmF2OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImFjY291bnQjUHJvZmlsZVwiLFxuICAgICAgICAgIHRpdGxlOiBcIlByb2ZpbGVcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwiYWNjb3VudCNDYWxlbmRhclwiLFxuICAgICAgICAgIHRpdGxlOiBcIkNhbGVuZGFyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImFjY291bnQjVmlldy1MaXN0LW9mLVN0YXJyZWQtVXNlcnNcIixcbiAgICAgICAgICB0aXRsZTogXCJTdGFycmVkIFVzZXJzXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImFjY291bnQjR2l2aW5nLVN0YXJzXCIsXG4gICAgICAgICAgdGl0bGU6IFwiR2l2aW5nIFN0YXJzXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImFjY291bnQjU2VuZGluZy1GZWVkYmFja1wiLFxuICAgICAgICAgIHRpdGxlOiBcIlNlbmRpbmcgRmVlZGJhY2tcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICAvLyBpY29uczogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNTAwXCI+QVU8L3NwYW4+LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogXCJzZWN1cml0eVwiLFxuICAgICAgdGl0bGU6IFwiU2VjdXJpdHlcIixcbiAgICAgIHN1Yk5hdjogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJzZWN1cml0eSNDaGFuZ2UtUGFzc3dvcmRcIixcbiAgICAgICAgICB0aXRsZTogXCJDaGFuZ2UgUGFzc3dvcmRcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IFwic2VjdXJpdHkjVW52ZXJpZmllZC1BY2NvdW50LVJlc3RyaWN0ZWQtQWNjZXNzXCIsXG4gICAgICAgICAgdGl0bGU6IFwiVW52ZXJpZmllZCBBY2NvdW50c1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJzZWN1cml0eSNWZXJpZnlpbmctQWNjb3VudFwiLFxuICAgICAgICAgIHRpdGxlOiBcIlZlcmlmeWluZyBBY2NvdW50c1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIC8vIGljb25zOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS01MDBcIj5BVTwvc3Bhbj4sXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gc2lkZWJhck5hdnM7XG59O1xuIl0sIm5hbWVzIjpbImJhc2VQYXRoIiwiTmF2aWdhdGlvbk9iaiIsImhlYWRlckl0ZW1zIiwibmFtZSIsImhyZWYiLCJzdWJOYXYiLCJGb290ZXJJdGVtcyIsImZvb3Rlckl0ZW1zIiwidGl0bGUiLCJjb250ZW50cyIsIlNpZGViYXJOYXZzIiwic2lkZWJhck5hdnMiLCJwYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utilities/navigations.js\n"));

/***/ })

});