/*
  类型兼容性：
    当一个类型Y可以被赋值给另一个类型X时，我们就可以说类型X兼容类型Y
      X兼容Y: X(目标类型) = Y(源类型)

    鸭式变形法  
    源类型必须具备目标类型的必要属性

    口诀: 
      结构之间兼容: 成员少的兼容成员多的
      函数之间兼容: 参数多的兼容参数少的
*/

let s: string = 'a';
// 在关闭strictNullChecks配置的情况下 string类型兼容null
s = null;

// 接口兼容性：
interface X {
  a: any;
  b: any;
}
interface Y {
  a: any;
  b: any;
  c: any;
}
let x1: X = {a: 1, b: 2}
let y1: Y = {a: 1, b: 2, c: 3}
x1 = y1;
// y1 = x1; // 类型 "X" 中缺少属性 "c"，但类型 "Y" 中需要该属性。

// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
    return handler
}

// 1)参数个数
let handler1 = (a: number) => {}
hof(handler1)
let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2)

// 可选参数和剩余参数
let a1 = (p1: number, p2: number) => {} // 固定参数
let b1 = (p1?: number, p2?: number) => {} // 可选参数
let c1 = (...args: number[]) => {} // 剩余参数
// 1. 固定参数可以兼容可选、剩余参数
a1 = b1;
b1 = c1;
// 2. 可选参数不兼容固定、剩余参数
// 关闭strictFunctionTypes配置项可实现兼容
b1 = a1;
b1 = c1;
// 3. 剩余参数兼容固定、可选参数
c1 = a1;
c1 = b1;

// 2) 参数类型
let handler3 = (a: string) => {};
// hof(handler3);

interface Point3D {
  x: number;
  y: number;
  z: number;
}
interface Point2D {
  x: number;
  y: number;
}
let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}
p3d = p2d;
// 关闭strictFunctionTypes配置项时p2d可以兼容p3d 
// 这种函数参数之间可以相互赋值的情况叫做函数参数的双向协变 这种情况允许我们把一个精确的类型赋值给一个不那么精确的类型
// 这样做的方便是我们不用把一个不精确的类型断言成一个精确的类型
// p2d = p3d;

// 3) 返回值类型: TS要求目标函数的返回值类型必须与源函数的返回值类型相同或者为其子类型
let ff = () => ({name: 'Alice'})
let gg = () => ({name: 'Alice', location: 'Beijing'})
ff = gg
// gg = ff

// 函数的重载
function overload(a: number, b: number): number
function overload(a: string, b: string): string
function overload(a: any, b: any): any {}
// function overload(a: any): any {}
// function overload(a: any, b: any, c: any): any {}
// function overload(a: any, b: any) {}

// 枚举兼容性
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
// 枚举类型和数值类型是可以完全兼容的
let fruit: Fruit.Apple = 1
let no: number = Fruit.Apple
// 枚举之间是完全不兼容的
// let color: Color.Red = Fruit.Apple

// 类兼容性
// 如果两个类的实例成员相同 那他们就是兼容的
// 注意：在比较两个类之间是否兼容是，静态成员和构造函数是不参与比较的
// 如果类中含有私有成员 那么只有父类和子类至今才是相互兼容的
class A {
  constructor(p: number, q: number) {}
  id: number = 1
  private name: string = ''
}
class B {
  static s = 1
  constructor(p: number) {}
  id: number = 2
  private name: string = ''
}
class C1 extends A {}
let aaa = new A(1, 2)
let bbb = new B(1)
// aaa = bbb
// bbb = aaa
// 如果类中含有私有成员 那么只有父类和子类之间才是相互兼容的
let cc = new C1(1, 2)
aaa = cc
cc = aaa

// 泛型兼容性 只有类型参数T在泛型接口使用的时候才会影响兼容性
// 泛型接口兼容
interface Empty<T> {
  // value: T
}
let obj1: Empty<number> = {};
let obj2: Empty<string> = {};
obj1 = obj2

// 泛型函数兼容
let log4 = <T>(x: T): T => {
  console.log('x')
  return x
}
let log5 = <U>(y: U): U => {
  console.log('y')
  return y
}
log4 = log5

