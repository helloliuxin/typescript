// any类型丢失了一些信息 也就是类型之间的约束关系 它忽略了输入参数的类型和返回值的类型必须是一直的

// 泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定
// 泛型的好处：
// 1. 增强程序的可扩展性：函数或类可以很轻松地支持多种数据类型
// 2. 增强代码的可读性：不必写多条函数重载，或者冗长的联合类型声明
// 3. 灵活地控制类型之间的约束

function log<T>(value: T): T {
  console.log(value);
  return value;
}

// 泛型的两种调用方式
// 1. 传入类型参数，指定参数类型  例如指定log函数的参数和返回值为string[]
log<string[]>(['a', 'b']);
// 2. 利用TS的类型推断省略类型的参数 直接传入参数  这也是比较推荐的方式
log(['a', 'b']);

// 定义一个泛型函数类型 例：定义一个泛型函数
type Log = <T>(value: T) => T
// 泛型函数的实现
let myLog: Log = log;

// 泛型接口
interface Log2<T = string> {
  (value: T): T
}
// 泛型接口的使用必须指定类型
let myLog2: Log2<number> = log;
myLog2(1);
// 或者使用泛型接口的默认类型参数
let myLog3: Log2 = log;
myLog3('1');

// 泛型类与泛型约束
// 注意：泛型不能应用于类的静态成员
class Log3<T> {
  // static run (value: T) { // 静态成员不能引用类类型参数。
  run(value: T) {
    console.log(value);
    return value;
  }
}
// 实例化泛型类
// 1. 显示的传入T的类型 如：number类型 那么实例的方法将会受到约束 run的参数只能是number
let log1 = new Log3<number>();
log1.run(999);
// 2. 不传入类型参数(泛型变量) 此时value值可以是任意值
let log2 = new Log3();
log2.run('2');

// 泛型约束
interface Length {
  length: number;
}
// 类型T类型继承Length接口表示T受到了约束，不再是任意类型都可以传入，输入的参数不管是什么类型但必须要具有length属性
function log3<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}
// log3(1); //number不具有length属性报错
// 例如下参数都具有length属性
log3([1]);
log3('123');
log3({length: 1});