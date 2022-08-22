/**
 * 子文件
 */

import fs from 'fs'

const persion = {
  age: 18
}

console.log(persion?.age, persion?.xxx)  // 18, undefined