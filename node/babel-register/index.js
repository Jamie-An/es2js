/**
 * 使用 @babel/register 提供一个dev的ES开发环境 
 * 可以
 */
require('@babel/register')
// 若根目录下没有 babel.config.js 则需要这此处定义配置
// require('@babel/register')({
//   presets: [ '@babel/preset-env' ]
// })
import('./main.js')

// console.log(B?.xx)   // 此处会报错，register只支持引入的文件


