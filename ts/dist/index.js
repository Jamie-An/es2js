"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 使用 babel-cli 工具转义 ES6=>ES5
 */
const main_1 = __importDefault(require("./main"));
(0, main_1.default)(); // undefined, main function!
const A = {};
console.log(A === null || A === void 0 ? void 0 : A.b);
