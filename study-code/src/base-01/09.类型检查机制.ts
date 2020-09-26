/*
  类型检查机制：
    TypeScript编译器在做类型检查时，所秉承的一些原则，以及表现出的一些行为。
    作用：辅助开发，提高开发效率。

  - 类型推断
  - 类型兼容性
  - 类型保护
*/

// 1、类型推断
  // 不需要指定变量的类型(函数的返回值类型)，TypeScript可以根据某些规则自动地为其推断出一个类型

// - **基础类型推断**
// 常见的类型推断一般发生在以下几个场景
// 1) 声明变量时
// let a; // any
let b = 1; // number
let c = []; // any[]
let d = [1]; // number[]
// 2) 设置函数默认参数时
let fun = (x = 1) => {}; // x被推断为number类型 fun被推断为void
// 3) 确定函数返回值的时候
let fun1 = (x = 1) => x + 1; // fun1被推断为number类型

// - **最佳通用类型推断**
// 当要从多个类型中推断出一个类型的时候，TS就会尽可能的推断出一个兼容当前所有类型的通过类型，这就是最佳通用类型推断
let dd = [1, '2']; // (string | number)[]
// 注意：当在tsconfig中关闭strictNullChecks配置项的时候 "strictNullChecks": false 变量aa被推断为number[]
let aa = [1, null]; // (number | null)[] 

// - **上下文类型推断**
// 以上的类型推断都是从右向左的推断  就是根据右侧表达式的值来进行推断
// 还有一种推断就是从左向右的推断就是上下文类型推断 通常发生在事件处理中
window.onkeydown = function(mouseEvent: KeyboardEvent) {
  console.log(mouseEvent);
};

// 类型断言 可以增加代码的灵活性 在更改旧代码时非常有效，但是要避免滥用 要对自己上下文有充分了解
interface Foo {
  bar: number;
}
let foo = {} as Foo;
foo.bar = 1;