/**
 * 使用 babel-cli 工具转义 ES6=>ES5
 */
import fn from './main'    

fn()   // undefined, main function!

const A = {}
console.log(A?.b)    