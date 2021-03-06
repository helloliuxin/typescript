import $ from 'jquery'

$('.app').css('color', 'red')

globalLib({x: 1})
globalLib.doSomething()

import moduleLib from './module-lib'
moduleLib({y: 2})
moduleLib.doSomething()

import umdLib from './umd-lib'
umdLib.doSomething()

import m from 'moment'
declare module 'moment' {
  // 在这里导出自定义方法
  export function myFunction(): void
}
m.myFunction = () => {}

declare global {
  namespace globalLib {
    function doAnything(): void
  }
}
globalLib.doAnything = () => {}