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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), walletConnected = ref[0], setWalletConnected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0), numberOfWhitelisted = ref1[0], setNumberOfWhitelisted = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), joinedWhitelist = ref2[0], setJoinedWhitelist = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), loading = ref3[0], setLoading = ref3[1];\n    var web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    var getProviderOrSigner = function() {\n        var _ref = _asyncToGenerator(_Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var needSigner, provider, web3Provider, chainId, signer, _args = arguments;\n            return _Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        needSigner = _args.length > 0 && _args[0] !== void 0 ? _args[0] : false;\n                        console.log('=-=-==-=-==-=>>');\n                        _ctx.next = 4;\n                        return web3ModalRef.current.connect();\n                    case 4:\n                        provider = _ctx.sent;\n                        console.log('=-=-==-=-==-=');\n                        web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.providers.Web3Provider(provider);\n                        _ctx.next = 9;\n                        return web3Provider.getNetwork();\n                    case 9:\n                        chainId = _ctx.sent.chainId;\n                        if (!(chainId !== 4)) {\n                            _ctx.next = 13;\n                            break;\n                        }\n                        window.alert(\"Change the network to Rinkeby\");\n                        throw new Error(\"Change network to Rinkeby\");\n                    case 13:\n                        if (!needSigner) {\n                            _ctx.next = 16;\n                            break;\n                        }\n                        signer = web3Provider.getSigner();\n                        return _ctx.abrupt(\"return\", signer);\n                    case 16:\n                        return _ctx.abrupt(\"return\", web3Provider);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getProviderOrSigner() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var addAddressToWhitelist = function() {\n        var _ref = _asyncToGenerator(_Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, whitelistContract, tx;\n            return _Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner(true);\n                    case 3:\n                        signer = _ctx.sent;\n                        whitelistContract = new ethers__WEBPACK_IMPORTED_MODULE_7__.Contract(_constants__WEBPACK_IMPORTED_MODULE_6__.WHITELIST_CONTRACT_ADDRESS, _constants__WEBPACK_IMPORTED_MODULE_6__.abi, signer);\n                        _ctx.next = 7;\n                        return whitelistContract.addAddressToWhitelis();\n                    case 7:\n                        tx = _ctx.sent;\n                        setLoading(true);\n                        _ctx.next = 11;\n                        return tx.a;\n                    case 11:\n                        _ctx.next = 15;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    13\n                ]\n            ]);\n        }));\n        return function addAddressToWhitelist() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner();\n                    case 3:\n                        setWalletConnected(true);\n                        checkIfAddressWhitelisted();\n                        getNumberOfWhitelisted();\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!walletConnected) {\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())({\n                network: \"rinkeby\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet();\n        }\n    }, [\n        walletConnected\n    ]);\n    var renderButton = function() {\n        if (walletConnected) {\n            if (joinedWhitelist) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),\n                    children: \"Thanks for joining whitelist!\"\n                }, void 0, false, {\n                    fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                    lineNumber: 89,\n                    columnNumber: 11\n                }, _this));\n            } else if (loading) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().button),\n                    children: \" Loading...\"\n                }, void 0, false, {\n                    fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                    lineNumber: 95,\n                    columnNumber: 16\n                }, _this));\n            } else {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: addAddressToWhitelist,\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().button),\n                    children: \"Join whitelist\"\n                }, void 0, false, {\n                    fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                    lineNumber: 100,\n                    columnNumber: 11\n                }, _this));\n            }\n        } else {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: connectWallet,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().button),\n                children: \"Connect wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                lineNumber: 110,\n                columnNumber: 9\n            }, _this));\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Whitelist Dapp\"\n                    }, void 0, false, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"whitelist-dapp\"\n                    }, void 0, false, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),\n                                children: \"Welcome to Crypto Devs!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                                lineNumber: 128,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),\n                                children: \"Its an NFT collection for developers in Crypto.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                                lineNumber: 129,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),\n                                children: [\n                                    numberOfWhitelisted,\n                                    \" have already joined the Whitelist\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                                lineNumber: 132,\n                                columnNumber: 11\n                            }, this),\n                            renderButton()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().image),\n                            src: \"./crypto-devs.svg\"\n                        }, void 0, false, {\n                            fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                            lineNumber: 138,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 137,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().footer),\n                children: \"Made with ❤ by Crypto Devs\"\n            }, void 0, false, {\n                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"+4YOlys5PudgnFF1p4/9LUe5rn4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztnQkFBQ0MsU0FBUyxFQUFFMUMscUVBQVc7O2dHQUN4QnlDLENBQUc7O3dHQUNEYSxDQUFFO2dDQUFDWixTQUFTLEVBQUUxQyxzRUFBWTswQ0FBRSxDQUF1Qjs7Ozs7O3dHQUNuRHlDLENBQUc7Z0NBQUNDLFNBQVMsRUFBRTFDLDRFQUFrQjswQ0FBRSxDQUVwQzs7Ozs7O3dHQUNDeUMsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFFMUMsNEVBQWtCOztvQ0FDL0JNLG1CQUFtQjtvQ0FBQyxDQUN2Qjs7Ozs7Ozs0QkFDQ2tDLFlBQVk7Ozs7Ozs7Z0dBRWRDLENBQUc7OEdBQ0RjLENBQUc7NEJBQUNiLFNBQVMsRUFBRTFDLHNFQUFZOzRCQUFFeUQsR0FBRyxFQUFDLENBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFJeERDLENBQU07Z0JBQUNoQixTQUFTLEVBQUUxQyx1RUFBYTswQkFBRSxDQUVsQzs7Ozs7Ozs7Ozs7O0FBSU4sQ0FBQztHQTFJdUJHLElBQUk7S0FBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gJ3dlYjNtb2RhbCc7XG5pbXBvcnQgeyBwcm92aWRlcnMsIENvbnRyYWN0IH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IGFiaSwgV0hJVEVMSVNUX0NPTlRSQUNUX0FERFJFU1MgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gXG4gIGNvbnN0IFt3YWxsZXRDb25uZWN0ZWQsIHNldFdhbGxldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtudW1iZXJPZldoaXRlbGlzdGVkLCBzZXROdW1iZXJPZldoaXRlbGlzdGVkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbam9pbmVkV2hpdGVsaXN0LCBzZXRKb2luZWRXaGl0ZWxpc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgd2ViM01vZGFsUmVmID0gdXNlUmVmKCk7XG4gIFxuXG5cbiAgY29uc3QgZ2V0UHJvdmlkZXJPclNpZ25lciA9IGFzeW5jIChuZWVkU2lnbmVyID0gZmFsc2UpID0+IHtcbiAgICBjb25zb2xlLmxvZygnPS09LT09LT0tPT0tPT4+JylcbiAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHdlYjNNb2RhbFJlZi5jdXJyZW50LmNvbm5lY3QoKTtcbiAgICBjb25zb2xlLmxvZygnPS09LT09LT0tPT0tPScpXG4gICAgY29uc3Qgd2ViM1Byb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIocHJvdmlkZXIpO1xuXG4gICAgY29uc3QgeyBjaGFpbklkIH0gPSBhd2FpdCB3ZWIzUHJvdmlkZXIuZ2V0TmV0d29yaygpO1xuICAgIGlmIChjaGFpbklkICE9PSA0KSB7XG4gICAgICB3aW5kb3cuYWxlcnQoXCJDaGFuZ2UgdGhlIG5ldHdvcmsgdG8gUmlua2VieVwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNoYW5nZSBuZXR3b3JrIHRvIFJpbmtlYnlcIik7XG4gICAgfVxuXG4gICAgaWYgKG5lZWRTaWduZXIpIHtcbiAgICAgIGNvbnN0IHNpZ25lciA9IHdlYjNQcm92aWRlci5nZXRTaWduZXIoKVxuICAgICAgcmV0dXJuIHNpZ25lcjtcbiAgICB9XG4gICBcbiAgICByZXR1cm4gd2ViM1Byb3ZpZGVyO1xuXG4gIH1cblxuICBjb25zdCBhZGRBZGRyZXNzVG9XaGl0ZWxpc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIodHJ1ZSk7XG5cbiAgICAgIGNvbnN0IHdoaXRlbGlzdENvbnRyYWN0ID0gbmV3IENvbnRyYWN0KFxuICAgICAgICBXSElURUxJU1RfQ09OVFJBQ1RfQUREUkVTUyxcbiAgICAgICAgYWJpLFxuICAgICAgICBzaWduZXJcbiAgICAgIClcblxuICAgICAgY29uc3QgdHggPSBhd2FpdCB3aGl0ZWxpc3RDb250cmFjdC5hZGRBZGRyZXNzVG9XaGl0ZWxpcygpO1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGF3YWl0IHR4LmFcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBcbiAgICB9XG4gIH1cblxuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYygpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcigpO1xuICAgICAgc2V0V2FsbGV0Q29ubmVjdGVkKHRydWUpO1xuICAgICAgY2hlY2tJZkFkZHJlc3NXaGl0ZWxpc3RlZCgpO1xuICAgICAgZ2V0TnVtYmVyT2ZXaGl0ZWxpc3RlZCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF3YWxsZXRDb25uZWN0ZWQpIHtcblxuICAgICAgd2ViM01vZGFsUmVmLmN1cnJlbnQgPSBuZXcgV2ViM01vZGFsKHtcbiAgICAgICAgbmV0d29yazogXCJyaW5rZWJ5XCIsXG4gICAgICAgIHByb3ZpZGVyT3B0aW9uczoge30sXG4gICAgICAgIGRpc2FibGVJbmplY3RlZFByb3ZpZGVyOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgY29ubmVjdFdhbGxldCgpO1xuICAgIH1cbiAgfSwgW3dhbGxldENvbm5lY3RlZF0pO1xuXG4gIGNvbnN0IHJlbmRlckJ1dHRvbiA9ICgpID0+IHtcbiAgICBpZiAod2FsbGV0Q29ubmVjdGVkKSB7XG5cbiAgICAgIGlmIChqb2luZWRXaGl0ZWxpc3QpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICBUaGFua3MgZm9yIGpvaW5pbmcgd2hpdGVsaXN0IVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICAgIFxuICAgICAgfSBlbHNlIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+IExvYWRpbmcuLi48L2J1dHRvbj5cbiAgICAgICAgXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZEFkZHJlc3NUb1doaXRlbGlzdH0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgIEpvaW4gd2hpdGVsaXN0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxuICAgICAgQ29ubmVjdCB3YWxsZXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2ID5cblxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XaGl0ZWxpc3QgRGFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJ3aGl0ZWxpc3QtZGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PldlbGNvbWUgdG8gQ3J5cHRvIERldnMhPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIEl0cyBhbiBORlQgY29sbGVjdGlvbiBmb3IgZGV2ZWxvcGVycyBpbiBDcnlwdG8uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICB7bnVtYmVyT2ZXaGl0ZWxpc3RlZH0gaGF2ZSBhbHJlYWR5IGpvaW5lZCB0aGUgV2hpdGVsaXN0XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3JlbmRlckJ1dHRvbigpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBzcmM9XCIuL2NyeXB0by1kZXZzLnN2Z1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgTWFkZSB3aXRoICYjMTAwODQ7IGJ5IENyeXB0byBEZXZzXG4gICAgICA8L2Zvb3Rlcj5cblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJXZWIzTW9kYWwiLCJwcm92aWRlcnMiLCJDb250cmFjdCIsInN0eWxlcyIsImFiaSIsIldISVRFTElTVF9DT05UUkFDVF9BRERSRVNTIiwiSG9tZSIsIndhbGxldENvbm5lY3RlZCIsInNldFdhbGxldENvbm5lY3RlZCIsIm51bWJlck9mV2hpdGVsaXN0ZWQiLCJzZXROdW1iZXJPZldoaXRlbGlzdGVkIiwiam9pbmVkV2hpdGVsaXN0Iiwic2V0Sm9pbmVkV2hpdGVsaXN0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ3ZWIzTW9kYWxSZWYiLCJnZXRQcm92aWRlck9yU2lnbmVyIiwibmVlZFNpZ25lciIsInByb3ZpZGVyIiwid2ViM1Byb3ZpZGVyIiwiY2hhaW5JZCIsInNpZ25lciIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiY29ubmVjdCIsIldlYjNQcm92aWRlciIsImdldE5ldHdvcmsiLCJ3aW5kb3ciLCJhbGVydCIsIkVycm9yIiwiZ2V0U2lnbmVyIiwiYWRkQWRkcmVzc1RvV2hpdGVsaXN0Iiwid2hpdGVsaXN0Q29udHJhY3QiLCJ0eCIsImFkZEFkZHJlc3NUb1doaXRlbGlzIiwiYSIsImNvbm5lY3RXYWxsZXQiLCJjaGVja0lmQWRkcmVzc1doaXRlbGlzdGVkIiwiZ2V0TnVtYmVyT2ZXaGl0ZWxpc3RlZCIsIm5ldHdvcmsiLCJwcm92aWRlck9wdGlvbnMiLCJkaXNhYmxlSW5qZWN0ZWRQcm92aWRlciIsInJlbmRlckJ1dHRvbiIsImRpdiIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwib25DbGljayIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJpbWciLCJpbWFnZSIsInNyYyIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});