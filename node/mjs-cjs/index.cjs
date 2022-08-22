/**
 * 使用node原生的方式，引入ES-module
 * 注意：此时并没有对ES中API进行转义，依赖的是node本身提供的ES能力。
 *      若需要使用不支持的API，仍需要引入 babel
 */

const fn = import('./main.mjs')

// import 返回的是一个 Promis
fn.then((childFn)=>{
  childFn.default()     // main fn!
})