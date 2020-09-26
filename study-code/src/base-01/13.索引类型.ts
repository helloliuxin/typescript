// 场景：从对象中获取属性的值建立一个集合 例如：抽取下面对象obj3的属性值形成一个数组
let obj3 = {
  a: 1,
  b: 2,
  c: 3
}
// 首先我们定义一个方法实现
// function getValues(obj: any, keys: string[]) {
//     return keys.map(key => obj[key])
// }
console.log(getValues(obj3, ['a', 'b'])) // [1, 2]
// 随意指定一个obj3中没有的属性 如下获得的结果为[undefined, undefined] 但是TS编译器并没有报错
// console.log(getValues(obj3, ['d', 'e'])) // [undefined, undefined]

// 如何使用TS对这种模式进行约束呢  这里需要用到索引类型
// 首先我们需要三个概念
//  1、索引类型查询操作符 keyof T
//  对于任何类型 T， keyof T的结果为 T上已知的公共属性名的联合。 例如：
interface Obj {
  a: number,
  b: string
}
let key: keyof Obj // 此时key的类型为字面量a,b的联合类型 => 'a' | 'b' 

//  2、索引访问操作符 T[K]
//  此操作符的含义表示对象T的属性K所代表的类型
let value: Obj['a'] // value的类型就是number类型

// 泛型约束 
// T extends U 表示泛型变量T可以继承类型U获得U的某些属性

// 清楚了这三个概念我们来改造一下getValues函数
// 将getValues函数改造成泛型函数我们需要做一些约束,我们需要参数keys数组里面的元素一定要是obj里面的属性
// 我们定义泛型变量T来约束obj 泛型变量K来约束keys数组
// 然后将K增加泛型约束  用K继承(extends)obj所有属性的联合类型(keyof T) => K extends keyof T
// 函数的返回值是一个属性K对应的类型数组 => T[k][]
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}
// 这样我们就通过一个索引类型将getValues函数改造完毕了，此时TS的类型检查就发挥作用了 如果我们指定一个不在obj3里的属性的话编译器就会报错
// 不能将类型“"d"”分配给类型“"a" | "b" | "c"”。
// 不能将类型“"e"”分配给类型“"a" | "b" | "c"”。
// console.log(getValues(obj3, ['d', 'e'])) 

// 由此可以看见索引类型可以实现对对象属性的查询和访问，然后配合泛型约束就可以建立对象、对象属性、属性值之间的约束关系
