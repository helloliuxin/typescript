// 接口可以用来约束对象、函数、以及类的结构和类型
interface List {
  readonly id: number;
  name: string;
  // 下面这句的含义是用任意的字符串去索引List可以得到any类型的结果
  // [x:string]: any; // 索引签名
  age?: number;
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name);
    if (value.age) {
      console.log(value.age);
    }
    // value.id++ // 只读属性
  })
}


// 如果直接传入对象字面量的话，会对额外的字段进行类型检查
/*
render({
  data: [
    {id: 1, name: 'A', sex: 'male'},
    {id: 2, name: 'B'}
  ]
})
*/
// 绕过类型检查的三种方法
// 1、把对象字面量赋值给一个变量
let result = {
  data: [
    {id: 1, name: 'A', sex: 'male'},
    {id: 2, name: 'B', age: 10}
  ]
}
render(result);

// 2、使用类型断言
// render({
//   data: [
//     {id: 1, name: 'A', sex: 'male'},
//     {id: 2, name: 'B'}
//   ]
// } as Result);

// 3、使用字符串索引签名 使用例子：见代码第六行


// 索引签名
// TypeScript支持两种索引签名：字符串和数字。 
// 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 
// 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 
// 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
interface StringArray {
  // 索引签名 用任意的number去所以StringArray都会得到一个string
  [index: number]: string
}

let chars: StringArray = ['a', 'b'];

interface Names {
  // [x: string]: string;
  [x: string]: any;
  // y: number; 
  // 数字类型索引和字符类型索引可以混用，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
  // 因为 数字索引或转化为字符串索引，而转化的这部分索引对应的值的类型范围 超过了 字符串索引类型的范围，就会报错，相当于超出范围。
  [z: number]: number;
}

// 用接口定义函数
// let add2: (x: number, y: number) => number;
// 等价于
// interface Add {
//   (x:number, y: number) : number;
// }

// 类型别名 type
type Add = (x: number, y: number) => number;
let add0: Add = (a, b) => a + b;

// 混合类型接口
interface Lib {
  (): void;
  version: string;
  doSomething(): void
}


function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = '1.0';
  lib.doSomething = () => {};
  return lib;
}

let lib1 = getLib();
lib1();
let lib2 = getLib()
lib2.doSomething()
