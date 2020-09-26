// 命名空间
// 使用namespace关键字来声明一个命名空间


// 声明一个Shape命名空间 在命名空间之类可以定义任意多的变量，这些变量只在Shape命名空间内可见
// 如果想要这些变量在全局可见 需要使用export关键字导出
namespace Shape {
  const pi = Math.PI;
  export function cricle(r: number) {
    return pi * r ** 2;
  }
}

// 命名空间也是可以拆分的
// 在b.ts文件中也有一个同名的命名空间Shape 那么这个命名空间分布在两个不同文件中 他们是共享一个命名空间的

// 命名空间的调用方法也比较简单 我们直接使用Shape访问就行了
// 如何看到效果呢 这里需要明确一个原则:命名空间跟模块不要混用，不要在模块中使用命名空间，命名空间最好在一个全局空间中使用

/* 
命名空间
作用
隔离作用域，主要是兼容旧系统全局变量
特点
  利用闭包的原理，创建了一个立即执行函数
用法
1.在全局环境下使用
2.在需要引用其他变量时，而引入其他文件时，利用///加相对路径
 /// <reference path="Validation.ts" />
3.存储命名空间变量
  export 变量=命名空间.变量
*/
