// 条件类型是一种由条件表达式所决定的类型
// T extends U ? X : Y 代表如果类型T可以被赋值给类型U则为X类型，否则为Y类型

type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

type T1 = TypeName<string> // string
type T2 = TypeName<string[]> // object

// 分布式条件类型 : 如果类型T是一个联合类型的情况下，则为多个类型的条件类型的联合类型
// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)
type T3 = TypeName<string | string[]> // 'string' | 'object'

// 例如: 利用这个特性可以帮助我们实现一些类型的过滤
type Diff<T, U> = T extends U ? never : T
type T4 = Diff<"a" | "b" | "c", "a" | "e">
// Diff<"a", "a" | "e"> | Diff<"b", "a" | "e"> | Diff<"c", "a" | "e">
// never | "b" | "c"
// "b" | "c"

// 过滤掉null和undefined类型
type NotNull<T> = Diff<T, null | undefined>
type T5 = NotNull<string | number | undefined | null>


// 官方预置的条件类型
// Exclude<T, U>
// NonNullable<T>

// Extract<T, U>
type T6 = Extract<"a" | "b" | "c", "a" | "e">

// ReturnType<T> 可以获取一个函数返回值的类型
type T8 = ReturnType<() => string>

/* 
  ReturnType的实现
  type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

  infer关键字表示待推断或者是延时推断，需要根据当时的情况来决定
  如果实际的情况返回的是类型R，结果类型就是R，否则为any
*/