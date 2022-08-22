/**
 * 子文件
 */
import fs from 'fs'

const A = {}

export default () => {
  console.log('main fn!')
}

// console.log(A?.b)   // 此处会报错，因为没有 polyfill