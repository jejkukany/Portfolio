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

/***/ "./components/projects.tsx":
/*!*********************************!*\
  !*** ./components/projects.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n\n\n\n\nconst projects = ()=>{\n    const projectsArrName = [\n        \"Christmas Quiz\",\n        \"Dorost Web\"\n    ];\n    const projectsArrImage = [\n        \"/ChristmasQuiz.png\",\n        \"/DorostWeb.jpeg\"\n    ];\n    const projectsArrDescription = [\n        \"A Quiz about the typical Czech Christmas. Firebase is used as the authentication and DB service. React for frontend. Vite For quick build times. Login: user@gmail.com user1234\"\n    ];\n    const projectArrLink = [\n        \"https://christmas-quiz-ten.vercel.app/\",\n        \"https://dorost-tranovice.cz\"\n    ];\n    return projectsArrName.map((element, id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            className: \"flex flex-col md:flex-row p-10 text-center md:text-left max-h-[500px]\",\n            initial: {\n                x: -300\n            },\n            whileInView: {\n                x: 0\n            },\n            transition: {\n                duration: 0.5\n            },\n            viewport: {\n                once: true\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-hidden rounded-md basis-1/2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: projectsArrImage[id],\n                        width: 500,\n                        height: 500,\n                        alt: \"Project Image\",\n                        className: \"px-2 m-auto mb-3 bg-cover md:px-5 md:mb-0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danielyoung/Developer/Portfolio/components/projects.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/danielyoung/Developer/Portfolio/components/projects.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-auto basis-1/2 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-3xl text-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: element\n                            }, void 0, false, {\n                                fileName: \"/Users/danielyoung/Developer/Portfolio/components/projects.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/danielyoung/Developer/Portfolio/components/projects.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl text-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                children: projectsArrDescription[id]\n                            }, void 0, false, {\n                                fileName: \"/Users/danielyoung/Developer/Portfolio/components/projects.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/danielyoung/Developer/Portfolio/components/projects.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: projectArrLink[id],\n                            className: \"text-5xl text-black\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"flex m-auto bg-white rounded-md w-[100px] mt-3 py-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiGlobeAlt, {\n                                    size: 48\n                                }, void 0, false, {\n                                    fileName: \"/Users/danielyoung/Developer/Portfolio/components/projects.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/danielyoung/Developer/Portfolio/components/projects.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/danielyoung/Developer/Portfolio/components/projects.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/danielyoung/Developer/Portfolio/components/projects.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, id, true, {\n            fileName: \"/Users/danielyoung/Developer/Portfolio/components/projects.tsx\",\n            lineNumber: 14,\n            columnNumber: 5\n        }, undefined));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (projects);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUNSO0FBQ2E7QUFHNUMsTUFBTUcsV0FBVyxJQUFNO0lBQ3JCLE1BQU1DLGtCQUFrQjtRQUFDO1FBQWtCO0tBQWE7SUFDeEQsTUFBTUMsbUJBQW1CO1FBQUM7UUFBc0I7S0FBa0I7SUFDbEUsTUFBTUMseUJBQXlCO1FBQzdCO0tBQ0Q7SUFDRCxNQUFNQyxpQkFBaUI7UUFBQztRQUEwQztLQUE4QjtJQUNoRyxPQUFPSCxnQkFBZ0JJLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxtQkFDbkMsOERBQUNWLHFEQUFVO1lBQ1RZLFdBQVU7WUFFVkMsU0FBUztnQkFBRUMsR0FBRyxDQUFDO1lBQUk7WUFDbkJDLGFBQWE7Z0JBQUVELEdBQUc7WUFBRTtZQUNwQkUsWUFBWTtnQkFBRUMsVUFBVTtZQUFJO1lBQzVCQyxVQUFVO2dCQUFFQyxNQUFNLElBQUk7WUFBQzs7OEJBRXZCLDhEQUFDUjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ1gsbURBQUtBO3dCQUNKbUIsS0FBS2YsZ0JBQWdCLENBQUNLLEdBQUc7d0JBQ3pCVyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxLQUFJO3dCQUNKWCxXQUFVOzs7Ozs7Ozs7Ozs4QkFHZCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDWTs0QkFBRVosV0FBVTtzQ0FDWCw0RUFBQ2E7MENBQUdoQjs7Ozs7Ozs7Ozs7c0NBRU4sOERBQUNlOzRCQUFFWixXQUFVO3NDQUNYLDRFQUFDYzswQ0FBR3BCLHNCQUFzQixDQUFDSSxHQUFHOzs7Ozs7Ozs7OztzQ0FFaEMsOERBQUNpQjs0QkFBRUMsTUFBTXJCLGNBQWMsQ0FBQ0csR0FBRzs0QkFBRUUsV0FBVTtzQ0FDckMsNEVBQUNpQjtnQ0FBS2pCLFdBQVU7MENBQ2QsNEVBQUNWLHNEQUFVQTtvQ0FBQzRCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBeEJuQnBCOzs7OztBQThCWDtBQUNBLCtEQUFlUCxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvamVjdHMudHN4PzlkMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgSGlHbG9iZUFsdCB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xuXG5cbmNvbnN0IHByb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0c0Fyck5hbWUgPSBbXCJDaHJpc3RtYXMgUXVpelwiLCBcIkRvcm9zdCBXZWJcIl07XG4gIGNvbnN0IHByb2plY3RzQXJySW1hZ2UgPSBbXCIvQ2hyaXN0bWFzUXVpei5wbmdcIiwgXCIvRG9yb3N0V2ViLmpwZWdcIl07XG4gIGNvbnN0IHByb2plY3RzQXJyRGVzY3JpcHRpb24gPSBbXG4gICAgXCJBIFF1aXogYWJvdXQgdGhlIHR5cGljYWwgQ3plY2ggQ2hyaXN0bWFzLiBGaXJlYmFzZSBpcyB1c2VkIGFzIHRoZSBhdXRoZW50aWNhdGlvbiBhbmQgREIgc2VydmljZS4gUmVhY3QgZm9yIGZyb250ZW5kLiBWaXRlIEZvciBxdWljayBidWlsZCB0aW1lcy4gTG9naW46IHVzZXJAZ21haWwuY29tIHVzZXIxMjM0XCIsXG4gIF07XG4gIGNvbnN0IHByb2plY3RBcnJMaW5rID0gW1wiaHR0cHM6Ly9jaHJpc3RtYXMtcXVpei10ZW4udmVyY2VsLmFwcC9cIiwgXCJodHRwczovL2Rvcm9zdC10cmFub3ZpY2UuY3pcIl07XG4gIHJldHVybiBwcm9qZWN0c0Fyck5hbWUubWFwKChlbGVtZW50LCBpZCkgPT4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IHAtMTAgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0IG1heC1oLVs1MDBweF1cIlxuICAgICAga2V5PXtpZH1cbiAgICAgIGluaXRpYWw9e3sgeDogLTMwMCB9fVxuICAgICAgd2hpbGVJblZpZXc9e3sgeDogMCB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XG4gICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBiYXNpcy0xLzJcIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtwcm9qZWN0c0FyckltYWdlW2lkXX1cbiAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgIGFsdD1cIlByb2plY3QgSW1hZ2VcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgbS1hdXRvIG1iLTMgYmctY292ZXIgbWQ6cHgtNSBtZDptYi0wXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS1hdXRvIGJhc2lzLTEvMiBcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8Yj57ZWxlbWVudH08L2I+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxpPntwcm9qZWN0c0FyckRlc2NyaXB0aW9uW2lkXX08L2k+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGEgaHJlZj17cHJvamVjdEFyckxpbmtbaWRdfSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCB0ZXh0LWJsYWNrXCIgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggbS1hdXRvIGJnLXdoaXRlIHJvdW5kZWQtbWQgdy1bMTAwcHhdIG10LTMgcHktMVwiPlxuICAgICAgICAgICAgPEhpR2xvYmVBbHQgc2l6ZT17NDh9Lz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7XG4iXSwibmFtZXMiOlsibW90aW9uIiwiSW1hZ2UiLCJIaUdsb2JlQWx0IiwicHJvamVjdHMiLCJwcm9qZWN0c0Fyck5hbWUiLCJwcm9qZWN0c0FyckltYWdlIiwicHJvamVjdHNBcnJEZXNjcmlwdGlvbiIsInByb2plY3RBcnJMaW5rIiwibWFwIiwiZWxlbWVudCIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIngiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInZpZXdwb3J0Iiwib25jZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwicCIsImIiLCJpIiwiYSIsImhyZWYiLCJzcGFuIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/projects.tsx\n"));

/***/ })

});