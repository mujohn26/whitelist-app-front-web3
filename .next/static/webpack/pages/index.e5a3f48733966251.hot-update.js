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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), walletConnected = ref[0], setWalletConnected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0), numberOfWhitelisted = ref1[0], setNumberOfWhitelisted = ref1[1];\n    var web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    // const getProviderOrSigner = async (needSigner = false) => {\n    //   console.log('=-=-==-=-==-=>>')\n    //   const provider = await web3ModalRef.current.connect();\n    //   console.log('=-=-==-=-==-=')\n    //   const web3Provider = new providers.Web3Provider(provider);\n    //   const { chainId } = await web3Provider.getNetwork();\n    //   if (chainId !== 4) {\n    //     window.alert(\"Change the network to Rinkeby\");\n    //     throw new Error(\"Change network to Rinkeby\");\n    //   }\n    //   if (needSigner) {\n    //     const signer = web3Provider.getSigner()\n    //     return signer;\n    //   }\n    //   return web3Provider;\n    // }\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner();\n                    case 3:\n                        setWalletConnected(true);\n                        checkIfAddressWhitelisted();\n                        getNumberOfWhitelisted();\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var renderButton = function() {\n        if (walletConnected) {\n            if (joinedWhitelist) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().description),\n                    children: \"Thanks for joining whitelist!\"\n                }, void 0, false, {\n                    fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, _this));\n            } else if (loading) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                    children: \" Loading...\"\n                }, void 0, false, {\n                    fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 16\n                }, _this));\n            } else {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: addToWhiteList,\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                    children: \"Join whitelist\"\n                }, void 0, false, {\n                    fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, _this));\n            }\n        } else {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: connectWallet,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                children: \"Connect wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, _this));\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Whitelist Dapp\"\n                    }, void 0, false, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"whitelist-dapp\"\n                    }, void 0, false, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                                children: \"Welcome to Crypto Devs!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().description),\n                                children: \"Its an NFT collection for developers in Crypto.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().description),\n                                children: [\n                                    numberOfWhitelisted,\n                                    \" have already joined the Whitelist\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            renderButton()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().image),\n                            src: \"./crypto-devs.svg\"\n                        }, void 0, false, {\n                            fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),\n                children: \"Made with ❤ by Crypto Devs\"\n            }, void 0, false, {\n                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"v4g+rdrguvYOMNuahhHNyBRCyRM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RWlDLEdBQUcsRUFBQyxDQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSXhEQyxDQUFNO2dCQUFDbEIsU0FBUyxFQUFFaEIsdUVBQWE7MEJBQUUsQ0FFbEM7Ozs7Ozs7Ozs7OztBQUlOLENBQUM7R0ExR3VCQyxJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tICd3ZWIzbW9kYWwnO1xuaW1wb3J0IHsgcHJvdmlkZXJzLCBDb250cmFjdCB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiBcbiAgY29uc3QgW3dhbGxldENvbm5lY3RlZCwgc2V0V2FsbGV0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW251bWJlck9mV2hpdGVsaXN0ZWQsIHNldE51bWJlck9mV2hpdGVsaXN0ZWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3Qgd2ViM01vZGFsUmVmID0gdXNlUmVmKCk7XG4gIFxuXG5cbiAgLy8gY29uc3QgZ2V0UHJvdmlkZXJPclNpZ25lciA9IGFzeW5jIChuZWVkU2lnbmVyID0gZmFsc2UpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZygnPS09LT09LT0tPT0tPT4+JylcbiAgLy8gICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHdlYjNNb2RhbFJlZi5jdXJyZW50LmNvbm5lY3QoKTtcbiAgLy8gICBjb25zb2xlLmxvZygnPS09LT09LT0tPT0tPScpXG4gIC8vICAgY29uc3Qgd2ViM1Byb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIocHJvdmlkZXIpO1xuXG4gIC8vICAgY29uc3QgeyBjaGFpbklkIH0gPSBhd2FpdCB3ZWIzUHJvdmlkZXIuZ2V0TmV0d29yaygpO1xuICAvLyAgIGlmIChjaGFpbklkICE9PSA0KSB7XG4gIC8vICAgICB3aW5kb3cuYWxlcnQoXCJDaGFuZ2UgdGhlIG5ldHdvcmsgdG8gUmlua2VieVwiKTtcbiAgLy8gICAgIHRocm93IG5ldyBFcnJvcihcIkNoYW5nZSBuZXR3b3JrIHRvIFJpbmtlYnlcIik7XG4gIC8vICAgfVxuXG4gIC8vICAgaWYgKG5lZWRTaWduZXIpIHtcbiAgLy8gICAgIGNvbnN0IHNpZ25lciA9IHdlYjNQcm92aWRlci5nZXRTaWduZXIoKVxuICAvLyAgICAgcmV0dXJuIHNpZ25lcjtcbiAgLy8gICB9XG4gICBcbiAgLy8gICByZXR1cm4gd2ViM1Byb3ZpZGVyO1xuXG4gIC8vIH1cblxuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYygpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcigpO1xuICAgICAgc2V0V2FsbGV0Q29ubmVjdGVkKHRydWUpO1xuICAgICAgY2hlY2tJZkFkZHJlc3NXaGl0ZWxpc3RlZCgpO1xuICAgICAgZ2V0TnVtYmVyT2ZXaGl0ZWxpc3RlZCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVuZGVyQnV0dG9uID0gKCkgPT4ge1xuICAgIGlmICh3YWxsZXRDb25uZWN0ZWQpIHtcblxuICAgICAgaWYgKGpvaW5lZFdoaXRlbGlzdCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgIFRoYW5rcyBmb3Igam9pbmluZyB3aGl0ZWxpc3QhXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICB9IGVsc2UgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT4gTG9hZGluZy4uLjwvYnV0dG9uPlxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkVG9XaGl0ZUxpc3R9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICBKb2luIHdoaXRlbGlzdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y29ubmVjdFdhbGxldH0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgIENvbm5lY3Qgd2FsbGV0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiA+XG5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+V2hpdGVsaXN0IERhcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwid2hpdGVsaXN0LWRhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5XZWxjb21lIHRvIENyeXB0byBEZXZzITwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICBJdHMgYW4gTkZUIGNvbGxlY3Rpb24gZm9yIGRldmVsb3BlcnMgaW4gQ3J5cHRvLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAge251bWJlck9mV2hpdGVsaXN0ZWR9IGhhdmUgYWxyZWFkeSBqb2luZWQgdGhlIFdoaXRlbGlzdFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtyZW5kZXJCdXR0b24oKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gc3JjPVwiLi9jcnlwdG8tZGV2cy5zdmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIE1hZGUgd2l0aCAmIzEwMDg0OyBieSBDcnlwdG8gRGV2c1xuICAgICAgPC9mb290ZXI+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiV2ViM01vZGFsIiwicHJvdmlkZXJzIiwiQ29udHJhY3QiLCJzdHlsZXMiLCJIb21lIiwid2FsbGV0Q29ubmVjdGVkIiwic2V0V2FsbGV0Q29ubmVjdGVkIiwibnVtYmVyT2ZXaGl0ZWxpc3RlZCIsInNldE51bWJlck9mV2hpdGVsaXN0ZWQiLCJ3ZWIzTW9kYWxSZWYiLCJjb25uZWN0V2FsbGV0IiwiZ2V0UHJvdmlkZXJPclNpZ25lciIsImNoZWNrSWZBZGRyZXNzV2hpdGVsaXN0ZWQiLCJnZXROdW1iZXJPZldoaXRlbGlzdGVkIiwiY29uc29sZSIsImxvZyIsInJlbmRlckJ1dHRvbiIsImpvaW5lZFdoaXRlbGlzdCIsImRpdiIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwibG9hZGluZyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhZGRUb1doaXRlTGlzdCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJpbWciLCJpbWFnZSIsInNyYyIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});