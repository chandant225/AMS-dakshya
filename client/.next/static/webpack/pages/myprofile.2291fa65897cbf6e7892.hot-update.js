"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/myprofile",{

/***/ "./components/forms/image_uploader/image_uploader.jsx":
/*!************************************************************!*\
  !*** ./components/forms/image_uploader/image_uploader.jsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/chandan/My Projects/new/ems-Dakshya/client/components/forms/image_uploader/image_uploader.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Imageuploader = function Imageuploader() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      image = _useState[0],\n      setImage = _useState[1];\n\n  var formdata = new FormData();\n  formdata.append('image', image);\n\n  var handleUpload = function handleUpload() {\n    fetch('http://localhost:4000/user/upload-image', {\n      method: 'POST',\n      headers: {\n        \"auth-token\": localStorage.getItem('user_token')\n      }\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n    onSubmit: handleUpload,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n      onChange: function onChange(e) {\n        return setImage(e.target.files);\n      },\n      type: \"file\",\n      className: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 14\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      className: \"bg-blue-600 mt-4 rounded-full px-6 py-1 text-gray-100\",\n      children: \"upload\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 14\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Imageuploader, \"mP4q0FKgVbBmATmZZXQmS8mhEdQ=\");\n\n_c = Imageuploader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Imageuploader);\n\nvar _c;\n\n$RefreshReg$(_c, \"Imageuploader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm1zL2ltYWdlX3VwbG9hZGVyL2ltYWdlX3VwbG9hZGVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUVBLElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUN4QixrQkFBMEJELCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9FLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCO0FBQ0FELEVBQUFBLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixPQUFoQixFQUF5QkosS0FBekI7O0FBQ0EsTUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QkMsSUFBQUEsS0FBSyxDQUFDLHlDQUFELEVBQTJDO0FBQzVDQyxNQUFBQSxNQUFNLEVBQUUsTUFEb0M7QUFFNUNDLE1BQUFBLE9BQU8sRUFBRTtBQUNMLHNCQUFjQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckI7QUFEVDtBQUZtQyxLQUEzQyxDQUFMO0FBTUgsR0FQRDs7QUFVQSxzQkFDSTtBQUFNLFlBQVEsRUFBRUwsWUFBaEI7QUFBQSw0QkFDSztBQUFPLGNBQVEsRUFBRSxrQkFBQ00sQ0FBRDtBQUFBLGVBQU9WLFFBQVEsQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBLE9BQWpCO0FBQWtELFVBQUksRUFBQyxNQUF2RDtBQUErRCxlQUFTLEVBQUM7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURMLGVBRUs7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFTLEVBQUMsdURBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQXJCRDs7R0FBTWQ7O0tBQUFBO0FBdUJOLCtEQUFlQSxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9ybXMvaW1hZ2VfdXBsb2FkZXIvaW1hZ2VfdXBsb2FkZXIuanN4PzM5YjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEltYWdldXBsb2FkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSgnJylcblxuICAgIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybWRhdGEuYXBwZW5kKCdpbWFnZScsIGltYWdlKTtcbiAgICBjb25zdCBoYW5kbGVVcGxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvdXNlci91cGxvYWQtaW1hZ2UnLHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiYXV0aC10b2tlblwiOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcl90b2tlbicpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlVXBsb2FkfT5cbiAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbWFnZShlLnRhcmdldC5maWxlcyl9IHR5cGU9XCJmaWxlXCIgIGNsYXNzTmFtZT1cIlwiIC8+IFxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJnLWJsdWUtNjAwIG10LTQgcm91bmRlZC1mdWxsIHB4LTYgcHktMSB0ZXh0LWdyYXktMTAwXCI+dXBsb2FkPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdldXBsb2FkZXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2V1cGxvYWRlciIsImltYWdlIiwic2V0SW1hZ2UiLCJmb3JtZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaGFuZGxlVXBsb2FkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImUiLCJ0YXJnZXQiLCJmaWxlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/forms/image_uploader/image_uploader.jsx\n");

/***/ })

});