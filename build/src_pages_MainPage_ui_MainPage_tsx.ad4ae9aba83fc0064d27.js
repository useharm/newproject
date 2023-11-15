"use strict";
(self["webpackChunknew_project"] = self["webpackChunknew_project"] || []).push([["src_pages_MainPage_ui_MainPage_tsx"],{

/***/ "./src/app/providers/ErrorBoundary/ui/BugButton.tsx":
/*!**********************************************************!*\
  !*** ./src/app/providers/ErrorBoundary/ui/BugButton.tsx ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BugButton: () => (/* binding */ BugButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




// Компонент для тестирования
var BugButton = function BugButton() {
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    error = _a[0],
    setError = _a[1];
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('translation').t;
  function onThrow() {
    setError(true);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
    onClick: onThrow,
    children: t('throwError')
  });
};

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/pages/MainPage/ui/MainPage.tsx":
/*!********************************************!*\
  !*** ./src/pages/MainPage/ui/MainPage.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var app_providers_ErrorBoundary_ui_BugButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/providers/ErrorBoundary/ui/BugButton */ "./src/app/providers/ErrorBoundary/ui/BugButton.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




function MainPage() {
  var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('main').t;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_providers_ErrorBoundary_ui_BugButton__WEBPACK_IMPORTED_MODULE_1__.BugButton, {}), t('Main page')]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX01haW5QYWdlX3VpX01haW5QYWdlX3RzeC5hZDRhZTlhYmE4M2ZjMDA2NGQyNy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNKO0FBQ0c7QUFDL0M7QUFDTyxJQUFJSyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFlO0VBQy9CLElBQUlDLEVBQUUsR0FBR0gsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBRUksS0FBSyxHQUFHRCxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQUVFLFFBQVEsR0FBR0YsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUN6RCxJQUFJRyxDQUFDLEdBQUdMLDZEQUFjLENBQUMsYUFBYSxDQUFDLENBQUNLLENBQUM7RUFDdkMsU0FBU0MsT0FBT0EsQ0FBQSxFQUFHO0lBQ2ZGLFFBQVEsQ0FBQyxJQUFJLENBQUM7RUFDbEI7RUFDQU4sZ0RBQVMsQ0FBQyxZQUFZO0lBQ2xCLElBQUlLLEtBQUssRUFBRTtNQUNQLE1BQU0sSUFBSUksS0FBSyxDQUFDLENBQUM7SUFDckI7RUFDSixDQUFDLEVBQUUsQ0FBQ0osS0FBSyxDQUFDLENBQUM7RUFDWCxPQUFRTixzREFBSSxDQUFDLFFBQVEsRUFBRTtJQUFFVyxPQUFPLEVBQUVGLE9BQU87SUFBRUcsUUFBUSxFQUFFSixDQUFDLENBQUMsWUFBWTtFQUFFLENBQUMsQ0FBQztBQUMzRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEI4RDtBQUNNO0FBQ3RCO0FBQy9DLFNBQVNPLFFBQVFBLENBQUEsRUFBRztFQUNoQixJQUFJUCxDQUFDLEdBQUdMLDZEQUFjLENBQUMsTUFBTSxDQUFDLENBQUNLLENBQUM7RUFDaEMsT0FBUU0sdURBQUssQ0FBQyxLQUFLLEVBQUU7SUFBRUYsUUFBUSxFQUFFLENBQUNaLHNEQUFJLENBQUNJLCtFQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRUksQ0FBQyxDQUFDLFdBQVcsQ0FBQztFQUFFLENBQUMsQ0FBQztBQUM3RTtBQUNBLGlFQUFlTyxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3LXByb2plY3QvLi9zcmMvYXBwL3Byb3ZpZGVycy9FcnJvckJvdW5kYXJ5L3VpL0J1Z0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vbmV3LXByb2plY3QvLi9zcmMvcGFnZXMvTWFpblBhZ2UvdWkvTWFpblBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0Jztcbi8vINCa0L7QvNC/0L7QvdC10L3RgiDQtNC70Y8g0YLQtdGB0YLQuNGA0L7QstCw0L3QuNGPXG5leHBvcnQgdmFyIEJ1Z0J1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmYWxzZSksIGVycm9yID0gX2FbMF0sIHNldEVycm9yID0gX2FbMV07XG4gICAgdmFyIHQgPSB1c2VUcmFuc2xhdGlvbigndHJhbnNsYXRpb24nKS50O1xuICAgIGZ1bmN0aW9uIG9uVGhyb3coKSB7XG4gICAgICAgIHNldEVycm9yKHRydWUpO1xuICAgIH1cbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgfSwgW2Vycm9yXSk7XG4gICAgcmV0dXJuIChfanN4KFwiYnV0dG9uXCIsIHsgb25DbGljazogb25UaHJvdywgY2hpbGRyZW46IHQoJ3Rocm93RXJyb3InKSB9KSk7XG59O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IEJ1Z0J1dHRvbiB9IGZyb20gJ2FwcC9wcm92aWRlcnMvRXJyb3JCb3VuZGFyeS91aS9CdWdCdXR0b24nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmZ1bmN0aW9uIE1haW5QYWdlKCkge1xuICAgIHZhciB0ID0gdXNlVHJhbnNsYXRpb24oJ21haW4nKS50O1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3goQnVnQnV0dG9uLCB7fSksIHQoJ01haW4gcGFnZScpXSB9KSk7XG59XG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcbiJdLCJuYW1lcyI6WyJqc3giLCJfanN4IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsIkJ1Z0J1dHRvbiIsIl9hIiwiZXJyb3IiLCJzZXRFcnJvciIsInQiLCJvblRocm93IiwiRXJyb3IiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJqc3hzIiwiX2pzeHMiLCJNYWluUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=