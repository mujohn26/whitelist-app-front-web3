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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), walletConnected = ref[0], setWalletConnected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0), numberOfWhitelisted = ref1[0], setNumberOfWhitelisted = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), joinedWhitelist = ref2[0], setJoinedWhitelist = ref2[1];\n    var web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    var getProviderOrSigner = function() {\n        var _ref = _asyncToGenerator(_Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var needSigner, provider, web3Provider, chainId, signer, _args = arguments;\n            return _Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        needSigner = _args.length > 0 && _args[0] !== void 0 ? _args[0] : false;\n                        console.log('=-=-==-=-==-=>>');\n                        _ctx.next = 4;\n                        return web3ModalRef.current.connect();\n                    case 4:\n                        provider = _ctx.sent;\n                        console.log('=-=-==-=-==-=');\n                        web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.providers.Web3Provider(provider);\n                        _ctx.next = 9;\n                        return web3Provider.getNetwork();\n                    case 9:\n                        chainId = _ctx.sent.chainId;\n                        if (!(chainId !== 4)) {\n                            _ctx.next = 13;\n                            break;\n                        }\n                        window.alert(\"Change the network to Rinkeby\");\n                        throw new Error(\"Change network to Rinkeby\");\n                    case 13:\n                        if (!needSigner) {\n                            _ctx.next = 16;\n                            break;\n                        }\n                        signer = web3Provider.getSigner();\n                        return _ctx.abrupt(\"return\", signer);\n                    case 16:\n                        return _ctx.abrupt(\"return\", web3Provider);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getProviderOrSigner() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_john_Documents_blockchain_web3Dao_whitelist_app_front_web3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner();\n                    case 3:\n                        setWalletConnected(true);\n                        checkIfAddressWhitelisted();\n                        getNumberOfWhitelisted();\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!walletConnected) {\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())({\n                network: \"rinkeby\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet();\n        }\n    }, [\n        walletConnected\n    ]);\n    var renderButton = function() {\n        if (walletConnected) {\n            if (joinedWhitelist) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                    children: \"Thanks for joining whitelist!\"\n                }, void 0, false, {\n                    fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, _this));\n            } else if (loading) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                    children: \" Loading...\"\n                }, void 0, false, {\n                    fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                    lineNumber: 74,\n                    columnNumber: 16\n                }, _this));\n            } else {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: addToWhiteList,\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                    children: \"Join whitelist\"\n                }, void 0, false, {\n                    fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, _this));\n            }\n        } else {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: connectWallet,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                children: \"Connect wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, _this));\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Whitelist Dapp\"\n                    }, void 0, false, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"whitelist-dapp\"\n                    }, void 0, false, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                children: \"Welcome to Crypto Devs!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                                children: \"Its an NFT collection for developers in Crypto.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                                children: [\n                                    numberOfWhitelisted,\n                                    \" have already joined the Whitelist\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, this),\n                            renderButton()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().image),\n                            src: \"./crypto-devs.svg\"\n                        }, void 0, false, {\n                            fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: \"Made with ❤ by Crypto Devs\"\n            }, void 0, false, {\n                fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/john/Documents/blockchain/web3Dao/whitelist-app-front-web3/pages/index.js\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"nf/Ip8px8/GN2wkdyTGha1cCq78=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0U7QUFDcUI7QUFDbEI7QUFDVztBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRy9CLFFBQVEsQ0FBQ1MsSUFBSSxHQUFHLENBQUM7OztJQUU5QixHQUFLLENBQXlDTCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFyRE0sZUFBZSxHQUF3Qk4sR0FBZSxLQUFyQ08sa0JBQWtCLEdBQUlQLEdBQWU7SUFDN0QsR0FBSyxDQUFpREEsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBekRRLG1CQUFtQixHQUE0QlIsSUFBVyxLQUFyQ1Msc0JBQXNCLEdBQUlULElBQVc7SUFDakUsR0FBSyxDQUF5Q0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBckRVLGVBQWUsR0FBd0JWLElBQWUsS0FBckNXLGtCQUFrQixHQUFJWCxJQUFlO0lBRTdELEdBQUssQ0FBQ1ksWUFBWSxHQUFHYiw2Q0FBTTtJQUkzQixHQUFLLENBQUNjLG1CQUFtQjtrTkFBRyxRQUFRLFdBQXNCLENBQUM7Z0JBQXhCQyxVQUFVLEVBRXJDQyxRQUFRLEVBRVJDLFlBQVksRUFFVkMsT0FBTyxFQU9QQyxNQUFNOzs7O3dCQWJtQkosVUFBVSx3REFBRyxLQUFLO3dCQUNuREssT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBaUI7OytCQUNOUixZQUFZLENBQUNTLE9BQU8sQ0FBQ0MsT0FBTzs7d0JBQTdDUCxRQUFRO3dCQUNkSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFlO3dCQUNyQkosWUFBWSxHQUFHLEdBQUcsQ0FBQ2QsMERBQXNCLENBQUNhLFFBQVE7OytCQUU5QkMsWUFBWSxDQUFDUSxVQUFVOzt3QkFBekNQLE9BQU8sYUFBUEEsT0FBTzs4QkFDWEEsT0FBTyxLQUFLLENBQUM7Ozs7d0JBQ2ZRLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQStCO3dCQUM1QyxLQUFLLENBQUMsR0FBRyxDQUFDQyxLQUFLLENBQUMsQ0FBMkI7OzZCQUd6Q2IsVUFBVTs7Ozt3QkFDTkksTUFBTSxHQUFHRixZQUFZLENBQUNZLFNBQVM7cURBQzlCVixNQUFNOztxREFHUkYsWUFBWTs7Ozs7O1FBRXJCLENBQUM7d0JBbkJLSCxtQkFBbUI7Ozs7SUFzQnpCLEdBQUssQ0FBQ2dCLGFBQWE7a05BQUcsUUFBUSxXQUFHLENBQUM7Ozs7OzsrQkFFeEJoQixtQkFBbUI7O3dCQUN6Qk4sa0JBQWtCLENBQUMsSUFBSTt3QkFDdkJ1Qix5QkFBeUI7d0JBQ3pCQyxzQkFBc0I7Ozs7Ozt3QkFFdEJaLE9BQU8sQ0FBQ0MsR0FBRzs7Ozs7Ozs7Ozs7UUFFZixDQUFDO3dCQVRLUyxhQUFhOzs7O0lBVW5CL0IsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixFQUFFLEdBQUdRLGVBQWUsRUFBRSxDQUFDO1lBRXJCTSxZQUFZLENBQUNTLE9BQU8sR0FBRyxHQUFHLENBQUNwQixrREFBUyxDQUFDLENBQUM7Z0JBQ3BDK0IsT0FBTyxFQUFFLENBQVM7Z0JBQ2xCQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQkMsdUJBQXVCLEVBQUUsS0FBSztZQUNoQyxDQUFDO1lBQ0RMLGFBQWE7UUFDZixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUN2QjtRQUFBQSxlQUFlO0lBQUEsQ0FBQztJQUVwQixHQUFLLENBQUM2QixZQUFZLEdBQUcsUUFDdkIsR0FENkIsQ0FBQztRQUMxQixFQUFFLEVBQUU3QixlQUFlLEVBQUUsQ0FBQztZQUVwQixFQUFFLEVBQUVJLGVBQWUsRUFBRSxDQUFDO2dCQUNwQixNQUFNLDZFQUNIMEIsQ0FBRztvQkFBQ0MsU0FBUyxFQUFFakMsNEVBQWtCOzhCQUFFLENBRXBDOzs7Ozs7WUFHSixDQUFDLE1BQU0sRUFBRSxFQUFFbUMsT0FBTyxFQUFFLENBQUM7Z0JBQ25CLE1BQU0sNkVBQUVDLENBQU07b0JBQUNILFNBQVMsRUFBRWpDLHVFQUFhOzhCQUFFLENBQVc7Ozs7OztZQUV0RCxDQUFDLE1BQ0ksQ0FBQztnQkFDSixNQUFNLDZFQUNIb0MsQ0FBTTtvQkFBQ0MsT0FBTyxFQUFFQyxjQUFjO29CQUFFTCxTQUFTLEVBQUVqQyx1RUFBYTs4QkFBRSxDQUUzRDs7Ozs7O1lBRUosQ0FBQztRQUdILENBQUMsTUFDSSxDQUFDO1lBQ0osTUFBTSw2RUFDSG9DLENBQU07Z0JBQUNDLE9BQU8sRUFBRVosYUFBYTtnQkFBRVEsU0FBUyxFQUFFakMsdUVBQWE7MEJBQUUsQ0FFMUQ7Ozs7OztRQUVKLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSw2RUFDSGdDLENBQUc7O3dGQUVEeEMsa0RBQUk7O2dHQUNGK0MsQ0FBSztrQ0FBQyxDQUFjOzs7Ozs7Z0dBQ3BCQyxDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYTt3QkFBQ0MsT0FBTyxFQUFDLENBQWdCOzs7Ozs7Z0dBQ2hEQyxDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFDLENBQWM7Ozs7Ozs7Ozs7Ozt3RkFHckNiLENBQUc7Z0JBQUNDLFNBQVMsRUFBRWpDLHFFQUFXOztnR0FDeEJnQyxDQUFHOzt3R0FDRGUsQ0FBRTtnQ0FBQ2QsU0FBUyxFQUFFakMsc0VBQVk7MENBQUUsQ0FBdUI7Ozs7Ozt3R0FDbkRnQyxDQUFHO2dDQUFDQyxTQUFTLEVBQUVqQyw0RUFBa0I7MENBQUUsQ0FFcEM7Ozs7Ozt3R0FDQ2dDLENBQUc7Z0NBQUNDLFNBQVMsRUFBRWpDLDRFQUFrQjs7b0NBQy9CSSxtQkFBbUI7b0NBQUMsQ0FDdkI7Ozs7Ozs7NEJBQ0MyQixZQUFZOzs7Ozs7O2dHQUVkQyxDQUFHOzhHQUNEZ0IsQ0FBRzs0QkFBQ2YsU0FBUyxFQUFFakMsc0VBQVk7NEJBQUVrRCxHQUFHLEVBQUMsQ0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUl4REMsQ0FBTTtnQkFBQ2xCLFNBQVMsRUFBRWpDLHVFQUFhOzBCQUFFLENBRWxDOzs7Ozs7Ozs7Ozs7QUFJTixDQUFDO0dBdEh1QkMsSUFBSTtLQUFKQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM21vZGFsJztcbmltcG9ydCB7IHByb3ZpZGVycywgQ29udHJhY3QgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gXG4gIGNvbnN0IFt3YWxsZXRDb25uZWN0ZWQsIHNldFdhbGxldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtudW1iZXJPZldoaXRlbGlzdGVkLCBzZXROdW1iZXJPZldoaXRlbGlzdGVkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbam9pbmVkV2hpdGVsaXN0LCBzZXRKb2luZWRXaGl0ZWxpc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHdlYjNNb2RhbFJlZiA9IHVzZVJlZigpO1xuICBcblxuXG4gIGNvbnN0IGdldFByb3ZpZGVyT3JTaWduZXIgPSBhc3luYyAobmVlZFNpZ25lciA9IGZhbHNlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJz0tPS09PS09LT09LT0+PicpXG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB3ZWIzTW9kYWxSZWYuY3VycmVudC5jb25uZWN0KCk7XG4gICAgY29uc29sZS5sb2coJz0tPS09PS09LT09LT0nKVxuICAgIGNvbnN0IHdlYjNQcm92aWRlciA9IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKTtcblxuICAgIGNvbnN0IHsgY2hhaW5JZCB9ID0gYXdhaXQgd2ViM1Byb3ZpZGVyLmdldE5ldHdvcmsoKTtcbiAgICBpZiAoY2hhaW5JZCAhPT0gNCkge1xuICAgICAgd2luZG93LmFsZXJ0KFwiQ2hhbmdlIHRoZSBuZXR3b3JrIHRvIFJpbmtlYnlcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDaGFuZ2UgbmV0d29yayB0byBSaW5rZWJ5XCIpO1xuICAgIH1cblxuICAgIGlmIChuZWVkU2lnbmVyKSB7XG4gICAgICBjb25zdCBzaWduZXIgPSB3ZWIzUHJvdmlkZXIuZ2V0U2lnbmVyKClcbiAgICAgIHJldHVybiBzaWduZXI7XG4gICAgfVxuICAgXG4gICAgcmV0dXJuIHdlYjNQcm92aWRlcjtcblxuICB9XG5cblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIoKTtcbiAgICAgIHNldFdhbGxldENvbm5lY3RlZCh0cnVlKTtcbiAgICAgIGNoZWNrSWZBZGRyZXNzV2hpdGVsaXN0ZWQoKTtcbiAgICAgIGdldE51bWJlck9mV2hpdGVsaXN0ZWQoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghd2FsbGV0Q29ubmVjdGVkKSB7XG5cbiAgICAgIHdlYjNNb2RhbFJlZi5jdXJyZW50ID0gbmV3IFdlYjNNb2RhbCh7XG4gICAgICAgIG5ldHdvcms6IFwicmlua2VieVwiLFxuICAgICAgICBwcm92aWRlck9wdGlvbnM6IHt9LFxuICAgICAgICBkaXNhYmxlSW5qZWN0ZWRQcm92aWRlcjogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIGNvbm5lY3RXYWxsZXQoKTtcbiAgICB9XG4gIH0sIFt3YWxsZXRDb25uZWN0ZWRdKTtcblxuICBjb25zdCByZW5kZXJCdXR0b24gPSAoKSA9PiB7XG4gICAgaWYgKHdhbGxldENvbm5lY3RlZCkge1xuXG4gICAgICBpZiAoam9pbmVkV2hpdGVsaXN0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgVGhhbmtzIGZvciBqb2luaW5nIHdoaXRlbGlzdCFcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgICBcbiAgICAgIH0gZWxzZSBpZiAobG9hZGluZykge1xuICAgICAgICByZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PiBMb2FkaW5nLi4uPC9idXR0b24+XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRUb1doaXRlTGlzdH0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgIEpvaW4gd2hpdGVsaXN0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxuICAgICAgQ29ubmVjdCB3YWxsZXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2ID5cblxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XaGl0ZWxpc3QgRGFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJ3aGl0ZWxpc3QtZGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PldlbGNvbWUgdG8gQ3J5cHRvIERldnMhPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIEl0cyBhbiBORlQgY29sbGVjdGlvbiBmb3IgZGV2ZWxvcGVycyBpbiBDcnlwdG8uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICB7bnVtYmVyT2ZXaGl0ZWxpc3RlZH0gaGF2ZSBhbHJlYWR5IGpvaW5lZCB0aGUgV2hpdGVsaXN0XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3JlbmRlckJ1dHRvbigpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBzcmM9XCIuL2NyeXB0by1kZXZzLnN2Z1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgTWFkZSB3aXRoICYjMTAwODQ7IGJ5IENyeXB0byBEZXZzXG4gICAgICA8L2Zvb3Rlcj5cblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJXZWIzTW9kYWwiLCJwcm92aWRlcnMiLCJDb250cmFjdCIsInN0eWxlcyIsIkhvbWUiLCJ3YWxsZXRDb25uZWN0ZWQiLCJzZXRXYWxsZXRDb25uZWN0ZWQiLCJudW1iZXJPZldoaXRlbGlzdGVkIiwic2V0TnVtYmVyT2ZXaGl0ZWxpc3RlZCIsImpvaW5lZFdoaXRlbGlzdCIsInNldEpvaW5lZFdoaXRlbGlzdCIsIndlYjNNb2RhbFJlZiIsImdldFByb3ZpZGVyT3JTaWduZXIiLCJuZWVkU2lnbmVyIiwicHJvdmlkZXIiLCJ3ZWIzUHJvdmlkZXIiLCJjaGFpbklkIiwic2lnbmVyIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJjb25uZWN0IiwiV2ViM1Byb3ZpZGVyIiwiZ2V0TmV0d29yayIsIndpbmRvdyIsImFsZXJ0IiwiRXJyb3IiLCJnZXRTaWduZXIiLCJjb25uZWN0V2FsbGV0IiwiY2hlY2tJZkFkZHJlc3NXaGl0ZWxpc3RlZCIsImdldE51bWJlck9mV2hpdGVsaXN0ZWQiLCJuZXR3b3JrIiwicHJvdmlkZXJPcHRpb25zIiwiZGlzYWJsZUluamVjdGVkUHJvdmlkZXIiLCJyZW5kZXJCdXR0b24iLCJkaXYiLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsImxvYWRpbmciLCJidXR0b24iLCJvbkNsaWNrIiwiYWRkVG9XaGl0ZUxpc3QiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiaW1nIiwiaW1hZ2UiLCJzcmMiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});