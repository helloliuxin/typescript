// 函数定义 4种定义方式
// 1、function定义
function add1(x: number, y: number) {
  return x + y
}

// 2、变量定义
let add2: (x: number, y: number) => number;

// 3、类型别名
type add3 = (x: number, y: number) => number;

// 4、接口定义
interface add4 {
  (x: number, y: number): number
}

/*
type和interface在使用场景上有啥区别？
type：不创建新的类型，只是给一个类型起一个名字，比如联合类型，写起来不方便，用type定义后就很简洁，你可以把type当做一种快捷访问方式；
interface：创建新的类型，接口之间还可以继承（type不可以）。如果可能，建议优先使用 interface。
*/

// ts中形参跟实参必须一一对应
// add1(1, 2, 3);

// 可选参数 必须位于必选参数之后
function add5(x:number, y?:number) {
  return y? x + y : x;
}
add5(1);

// 参数默认值
// 必选参数前面的默认参数是不可省略的，需传入 undefined 来获取它的默认值；
// 必选参数后面的默认参数是可以省略的。
function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q
}
add6(1, undefined, 3)
console.log('add6(1, undefined, 3): ', add6(1, undefined, 3));

// 当参数不确定的时候  使用剩余参数
function add7(x:number, ...rest:number[]) {
  return x + rest.reduce((pre, cur) => pre +cur);
}
add7(1, 2, 3, 4, 5);
console.log('add7(1, 2, 3, 4, 5): ', add7(1, 2, 3, 4, 5));

// 函数重载  
/*
在C++或者java等静态语言中，两个函数名称相同，但是参数类型不同或者参数个数不同，实现了函数重载。
函数重载的好处是：不需要为功能相似的函数起不同的名称。

ts实现函数重载的时候，要求定义一系列的函数声明，在类型最宽泛的版本中实现重载
*/
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]) {
    let first = rest[0];
    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
    if (typeof first === 'string') {
        return rest.join('');
    }
}
console.log(add8(1, 2))
console.log(add8('a', 'b', 'c'))
