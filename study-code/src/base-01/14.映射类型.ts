// 映射类型 : 映射类型本质上是一种预先定义的泛型接口，通常还会结合索引类型取对象的属性和属性值从而将一个对象映射成我们想要的结构
// 通过映射类型我们可以从一个旧的类型生成一个新的类型
// 比如说我们可以把一个对象中的所有属性变为只读
// 例子：将如下Obj2的所有属性变为只读
interface Obj2 {
  a: string;
  b: number;
  c: boolean
}

// 定义一个类型别名，这个类型别名就是TS内置的泛型接口(Readonly、Partial、Pick、Record)
// TS内置的类库地址 lib.es5.d.ts（crtl + 左键点击映射跳转）
// ReadonlyObj是一个可索引类型的泛型接口
type ReadonlyObj = Readonly<Obj2>
/* Readonly的实现如下：
  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };

  它的索引签名是[P in keyof T]
  keyof T :就是一个索引类型查询操作符 表示类型T所有属性的联合类型
  P in :相当于执行了一些for...in操作 它会把变量P依次绑定到T的所有属性上
  索引签名的返回值就是一个索引访问操作符T[P] 代表属性P所指定的类型 
  最后加上readonly修饰符就把所有变量变为了只读
*/

type PartialObj = Partial<Obj2>
// type Partial<T> = {
//   [P in keyof T]? : T[P]
// }

type PickObj = Pick<Obj2, 'a' | 'b'>
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P]
// }

// Readonly， Partial和 Pick是同态的，但 Record不是。 因为 Record并不需要输入类型来拷贝属性，所以它不属于同态
// 非同态类型本质上会创建新的属性，因此它们不会从它处拷贝属性修饰符

type RecordObj = Record<'x' | 'y', Obj2>
// type Record<K extends keyof any, T> = {
//   [P in K]: T
// }
