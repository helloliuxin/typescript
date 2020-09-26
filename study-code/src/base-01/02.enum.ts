// 数字枚举 原理是构成反向映射
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log("Role.Reporter ==> ", Role.Reporter);
console.log("Role: ", Role);

// 字符串枚举 不能构成反向映射
enum Message {
  Success = "恭喜你，成功了",
  Fail = "抱歉，失败了"
}

// 异构枚举:数字枚举与字符串枚举混用  容易构成混淆不建议使用
enum Answer {
  N,
  Y = "Yes"
}

// 枚举成员
// Role.Reporter = 0;// 枚举成员的值是只读类型不可以修改
enum Char {
  // const mermber 编译时
  a,
  b = Char.a,
  // computed member  运行时环境才会被计算
  d = Math.random(),
  e = "123".length,
  // 在computed merber的枚举成员后面必须赋值
  f = 4
}

// 常量枚举 特性：编译阶段被移除，编译阶段没有任何代码
// 作用：当我们你不需要一个对象，而需要对象的值的时候，这个时候可以使用常量枚举，减少编译时的代码
const enum Month {
  Jan,
  Feb,
  Mar,
  Apr = Month.Mar + 1,
  // May = () => 5
}
let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

let e: E = 3
let f: F = 3
// console.log(e === f)

let e1: E.a = 3
let e2: E.b = 3
let e3: E.a = 3
// console.log(e1 === e2)
// console.log(e1 === e3)

let g1: G = G.a
let g2: G.a = G.a
