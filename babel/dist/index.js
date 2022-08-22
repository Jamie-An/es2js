"use strict";

var _main = _interopRequireDefault(require("./main"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 使用 babel-cli 工具转义 ES6=>ES5
 */
(0, _main["default"])(); // undefined, main function!

var A = {};
console.log(A === null || A === void 0 ? void 0 : A.b);
//# sourceMappingURL=index.js.map