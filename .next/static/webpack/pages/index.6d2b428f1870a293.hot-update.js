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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), walletConnected = ref[0], setWalletConnected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0), numberOfWhitelisted = ref1[0], setNumberOfWhitelisted = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), joinedWhitelist = ref2[0], setJoinedWhitelist = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), loading = ref3[0], setLoading = ref3[1];\n    var web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    var getProviderOrSigner = function() {\n        var _ref = _asyncToGenerator(_Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var needSigner, provider, web3Provider, chainId, signer, _args = arguments;\n            return _Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        needSigner = _args.length > 0 && _args[0] !== void 0 ? _args[0] : false;\n                        console.log('=-=-==-=-==-=>>');\n                        _ctx.next = 4;\n                        return web3ModalRef.current.connect();\n                    case 4:\n                        provider = _ctx.sent;\n                        console.log('=-=-==-=-==-=');\n                        web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.providers.Web3Provider(provider);\n                        _ctx.next = 9;\n                        return web3Provider.getNetwork();\n                    case 9:\n                        chainId = _ctx.sent.chainId;\n                        if (!(chainId !== 4)) {\n                            _ctx.next = 13;\n                            break;\n                        }\n                        window.alert(\"Change the network to Rinkeby\");\n                        throw new Error(\"Change network to Rinkeby\");\n                    case 13:\n                        if (!needSigner) {\n                            _ctx.next = 16;\n                            break;\n                        }\n                        signer = web3Provider.getSigner();\n                        return _ctx.abrupt(\"return\", signer);\n                    case 16:\n                        return _ctx.abrupt(\"return\", web3Provider);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getProviderOrSigner() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var addAddressToWhitelist = function() {\n        var _ref = _asyncToGenerator(_Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, whitelistContract, tx;\n            return _Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner(true);\n                    case 3:\n                        signer = _ctx.sent;\n                        whitelistContract = new ethers__WEBPACK_IMPORTED_MODULE_7__.Contract(_constants__WEBPACK_IMPORTED_MODULE_6__.WHITELIST_CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_6__.abi, signer);\n                        _ctx.next = 7;\n                        return whitelistContract.addAddressToWhitelis();\n                    case 7:\n                        tx = _ctx.sent;\n                        setLoading(true);\n                        _ctx.next = 13;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11\n                ]\n            ]);\n        }));\n        return function addAddressToWhitelist() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner();\n                    case 3:\n                        setWalletConnected(true);\n                        checkIfAddressWhitelisted();\n                        getNumberOfWhitelisted();\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!walletConnected) {\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())({\n                network: \"rinkeby\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet();\n        }\n    }, [\n        walletConnected\n    ]);\n    var renderButton = function() {\n        if (walletConnected) {\n            if (joinedWhitelist) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),\n                    children: \"Thanks for joining whitelist!\"\n                }, void 0, false, {\n                    fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                    lineNumber: 89,\n                    columnNumber: 11\n                }, _this));\n            } else if (loading) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().button),\n                    children: \" Loading...\"\n                }, void 0, false, {\n                    fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                    lineNumber: 95,\n                    columnNumber: 16\n                }, _this));\n            } else {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: addAddressToWhitelist,\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().button),\n                    children: \"Join whitelist\"\n                }, void 0, false, {\n                    fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                    lineNumber: 100,\n                    columnNumber: 11\n                }, _this));\n            }\n        } else {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: connectWallet,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().button),\n                children: \"Connect wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                lineNumber: 110,\n                columnNumber: 9\n            }, _this));\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Whitelist Dapp\"\n                    }, void 0, false, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"whitelist-dapp\"\n                    }, void 0, false, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),\n                                children: \"Welcome to Crypto Devs!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                                lineNumber: 128,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),\n                                children: \"Its an NFT collection for developers in Crypto.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                                lineNumber: 129,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),\n                                children: [\n                                    numberOfWhitelisted,\n                                    \" have already joined the Whitelist\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                                lineNumber: 132,\n                                columnNumber: 11\n                            }, this),\n                            renderButton()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().image),\n                            src: \"./crypto-devs.svg\"\n                        }, void 0, false, {\n                            fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                            lineNumber: 138,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 137,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().footer),\n                children: \"Made with ❤ by Crypto Devs\"\n            }, void 0, false, {\n                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"+4YOlys5PudgnFF1p4/9LUe5rn4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Vzs7Z0dBQ3hCd0MsQ0FBRzs7d0dBQ0RhLENBQUU7Z0NBQUNaLFNBQVMsRUFBRXpDLHNFQUFZOzBDQUFFLENBQXVCOzs7Ozs7d0dBQ25Ed0MsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFFekMsNEVBQWtCOzBDQUFFLENBRXBDOzs7Ozs7d0dBQ0N3QyxDQUFHO2dDQUFDQyxTQUFTLEVBQUV6Qyw0RUFBa0I7O29DQUMvQk0sbUJBQW1CO29DQUFDLENBQ3ZCOzs7Ozs7OzRCQUNDaUMsWUFBWTs7Ozs7OztnR0FFZEMsQ0FBRzs4R0FDRGMsQ0FBRzs0QkFBQ2IsU0FBUyxFQUFFekMsc0VBQVk7NEJBQUV3RCxHQUFHLEVBQUMsQ0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUl4REMsQ0FBTTtnQkFBQ2hCLFNBQVMsRUFBRXpDLHVFQUFhOzBCQUFFLENBRWxDOzs7Ozs7Ozs7Ozs7QUFJTixDQUFDO0dBMUl1QkcsSUFBSTtLQUFKQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM21vZGFsJztcbmltcG9ydCB7IHByb3ZpZGVycywgQ29udHJhY3QgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgYWJpLCBXSElURUxJU1RfQ09OVFJBQ1RfQUREUkVTUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiBcbiAgY29uc3QgW3dhbGxldENvbm5lY3RlZCwgc2V0V2FsbGV0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW251bWJlck9mV2hpdGVsaXN0ZWQsIHNldE51bWJlck9mV2hpdGVsaXN0ZWRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtqb2luZWRXaGl0ZWxpc3QsIHNldEpvaW5lZFdoaXRlbGlzdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB3ZWIzTW9kYWxSZWYgPSB1c2VSZWYoKTtcbiAgXG5cblxuICBjb25zdCBnZXRQcm92aWRlck9yU2lnbmVyID0gYXN5bmMgKG5lZWRTaWduZXIgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCc9LT0tPT0tPS09PS09Pj4nKVxuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgd2ViM01vZGFsUmVmLmN1cnJlbnQuY29ubmVjdCgpO1xuICAgIGNvbnNvbGUubG9nKCc9LT0tPT0tPS09PS09JylcbiAgICBjb25zdCB3ZWIzUHJvdmlkZXIgPSBuZXcgcHJvdmlkZXJzLldlYjNQcm92aWRlcihwcm92aWRlcik7XG5cbiAgICBjb25zdCB7IGNoYWluSWQgfSA9IGF3YWl0IHdlYjNQcm92aWRlci5nZXROZXR3b3JrKCk7XG4gICAgaWYgKGNoYWluSWQgIT09IDQpIHtcbiAgICAgIHdpbmRvdy5hbGVydChcIkNoYW5nZSB0aGUgbmV0d29yayB0byBSaW5rZWJ5XCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2hhbmdlIG5ldHdvcmsgdG8gUmlua2VieVwiKTtcbiAgICB9XG5cbiAgICBpZiAobmVlZFNpZ25lcikge1xuICAgICAgY29uc3Qgc2lnbmVyID0gd2ViM1Byb3ZpZGVyLmdldFNpZ25lcigpXG4gICAgICByZXR1cm4gc2lnbmVyO1xuICAgIH1cbiAgIFxuICAgIHJldHVybiB3ZWIzUHJvdmlkZXI7XG5cbiAgfVxuXG4gIGNvbnN0IGFkZEFkZHJlc3NUb1doaXRlbGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcih0cnVlKTtcblxuICAgICAgY29uc3Qgd2hpdGVsaXN0Q29udHJhY3QgPSBuZXcgQ29udHJhY3QoXG4gICAgICAgIFdISVRFTElTVF9DT05UUkFDVF9BRERSRVNTLFxuICAgICAgICBhYmksXG4gICAgICAgIHNpZ25lclxuICAgICAgKVxuXG4gICAgICBjb25zdCB0eCA9IGF3YWl0IHdoaXRlbGlzdENvbnRyYWN0LmFkZEFkZHJlc3NUb1doaXRlbGlzKCk7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgXG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgXG4gICAgfVxuICB9XG5cblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIoKTtcbiAgICAgIHNldFdhbGxldENvbm5lY3RlZCh0cnVlKTtcbiAgICAgIGNoZWNrSWZBZGRyZXNzV2hpdGVsaXN0ZWQoKTtcbiAgICAgIGdldE51bWJlck9mV2hpdGVsaXN0ZWQoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghd2FsbGV0Q29ubmVjdGVkKSB7XG5cbiAgICAgIHdlYjNNb2RhbFJlZi5jdXJyZW50ID0gbmV3IFdlYjNNb2RhbCh7XG4gICAgICAgIG5ldHdvcms6IFwicmlua2VieVwiLFxuICAgICAgICBwcm92aWRlck9wdGlvbnM6IHt9LFxuICAgICAgICBkaXNhYmxlSW5qZWN0ZWRQcm92aWRlcjogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIGNvbm5lY3RXYWxsZXQoKTtcbiAgICB9XG4gIH0sIFt3YWxsZXRDb25uZWN0ZWRdKTtcblxuICBjb25zdCByZW5kZXJCdXR0b24gPSAoKSA9PiB7XG4gICAgaWYgKHdhbGxldENvbm5lY3RlZCkge1xuXG4gICAgICBpZiAoam9pbmVkV2hpdGVsaXN0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgVGhhbmtzIGZvciBqb2luaW5nIHdoaXRlbGlzdCFcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgICBcbiAgICAgIH0gZWxzZSBpZiAobG9hZGluZykge1xuICAgICAgICByZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PiBMb2FkaW5nLi4uPC9idXR0b24+XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRBZGRyZXNzVG9XaGl0ZWxpc3R9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICBKb2luIHdoaXRlbGlzdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y29ubmVjdFdhbGxldH0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgIENvbm5lY3Qgd2FsbGV0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiA+XG5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+V2hpdGVsaXN0IERhcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwid2hpdGVsaXN0LWRhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5XZWxjb21lIHRvIENyeXB0byBEZXZzITwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICBJdHMgYW4gTkZUIGNvbGxlY3Rpb24gZm9yIGRldmVsb3BlcnMgaW4gQ3J5cHRvLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAge251bWJlck9mV2hpdGVsaXN0ZWR9IGhhdmUgYWxyZWFkeSBqb2luZWQgdGhlIFdoaXRlbGlzdFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtyZW5kZXJCdXR0b24oKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gc3JjPVwiLi9jcnlwdG8tZGV2cy5zdmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIE1hZGUgd2l0aCAmIzEwMDg0OyBieSBDcnlwdG8gRGV2c1xuICAgICAgPC9mb290ZXI+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiV2ViM01vZGFsIiwicHJvdmlkZXJzIiwiQ29udHJhY3QiLCJzdHlsZXMiLCJhYmkiLCJXSElURUxJU1RfQ09OVFJBQ1RfQUREUkVTUyIsIkhvbWUiLCJ3YWxsZXRDb25uZWN0ZWQiLCJzZXRXYWxsZXRDb25uZWN0ZWQiLCJudW1iZXJPZldoaXRlbGlzdGVkIiwic2V0TnVtYmVyT2ZXaGl0ZWxpc3RlZCIsImpvaW5lZFdoaXRlbGlzdCIsInNldEpvaW5lZFdoaXRlbGlzdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwid2ViM01vZGFsUmVmIiwiZ2V0UHJvdmlkZXJPclNpZ25lciIsIm5lZWRTaWduZXIiLCJwcm92aWRlciIsIndlYjNQcm92aWRlciIsImNoYWluSWQiLCJzaWduZXIiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsImNvbm5lY3QiLCJXZWIzUHJvdmlkZXIiLCJnZXROZXR3b3JrIiwid2luZG93IiwiYWxlcnQiLCJFcnJvciIsImdldFNpZ25lciIsImFkZEFkZHJlc3NUb1doaXRlbGlzdCIsIndoaXRlbGlzdENvbnRyYWN0IiwidHgiLCJhZGRBZGRyZXNzVG9XaGl0ZWxpcyIsImNvbm5lY3RXYWxsZXQiLCJjaGVja0lmQWRkcmVzc1doaXRlbGlzdGVkIiwiZ2V0TnVtYmVyT2ZXaGl0ZWxpc3RlZCIsIm5ldHdvcmsiLCJwcm92aWRlck9wdGlvbnMiLCJkaXNhYmxlSW5qZWN0ZWRQcm92aWRlciIsInJlbmRlckJ1dHRvbiIsImRpdiIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwib25DbGljayIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJpbWciLCJpbWFnZSIsInNyYyIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});