// 原始类型
let bool: boolean = true;
// let num: number | undefined | null = 123;
let num: number = 123;

let str: string = 'abc';
// str = 123;

// 数组 两种声明方式
let arr1: number[] = [1, 2, 3];
let arr2: Array<number | string> = [1, 2, 3, 'string'];


// 元组
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 
// 比如，你可以定义一对值分别为 string和number类型的元组。
let tuple: [number, string] = [0, '1'];
tuple.push(2);
tuple[1] = "2";
console.log('tuple: ', tuple);
// 不能获取元组原本规定的数组长度之外的值
// tuple[2];  // 长度为"2"的元组类型 "[number, string]" 在索引 "2" 处没有元素。

// 函数
let add = (x: number, y: number) =>  x + y; // 没有规定返回值类型，利用TS的类型推断得到返回值为number类型
let compute: (x: number, y: number) => number;
compute = (a, b) => a +b;

// 对象
let obj: {x: number, y: number} = {x: 1 , y: 2};
obj.x = 3;
console.log('obj: ', obj);

// symbol
let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1 === s2);

// undefined, null
let un: undefined = undefined;
let nu: null = null;
num = undefined;
num = null;

// void
let noReturn = () => {};

// any
let x;
x = 1;
x = [];
x = () => {};

// never
let error = () => {
  throw new Error('error');
}

let endless = () => {
  while(true) {}
}



