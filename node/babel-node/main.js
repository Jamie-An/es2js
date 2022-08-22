import fs from 'fs'

export default () => {
  const A = {}
  // console.log(A?.b)    // 此处会报错，因为没有 polyfill
  console.log('mian fn!')
}