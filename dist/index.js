require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 109:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatDate = exports.createUserPayload = void 0;
function createUserPayload(firstName, lastName) {
    const currentDate = new Date();
    const expirationDate = currentDate;
    expirationDate.setMonth(currentDate.getMonth() + 12);
    const user = {
        firstName,
        lastName,
        createdAt: (0, exports.formatDate)(currentDate),
        validUntil: (0, exports.formatDate)(expirationDate)
    };
    // TODO implement BE POST request
    return user;
}
exports.createUserPayload = createUserPayload;
const formatDate = (date) => {
    if (date === null || date === undefined)
        return '';
    return date.toISOString().slice(0, 10);
};
exports.formatDate = formatDate;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[109](0, __webpack_exports__);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map