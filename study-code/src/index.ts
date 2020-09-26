import "./base-01/01.datatype"
import "./base-01/02.enum"
// import "./base-01/03.interface"
// import "./base-01/04.function"
// import "./base-01/05.class"
// import "./base-01/06.abstract-class"
// import "./base-01/07.class-interface"
// import "./base-01/08.generics"
// import "./base-01/09.类型检查机制"
// import "./base-01/10.类型兼容性"
// import "./base-01/11.类型保护"
// import "./base-01/12.交叉类型和联合类型"
// import "./base-01/13.索引类型"
// import "./base-01/14.映射类型"
// import "./base-01/15.条件类型"
// import "./base-02/01.module/es6/c"
// import "./base-02/03.merge/merge"
// import "./base-02/04.libs/index"

let hello: string = "Hello TypeScript";
document.querySelectorAll(".app")[0].innerHTML = hello;

// function logMethod(
//   target: Object,
//   propertyName: string,
//   propertyDesciptor: PropertyDescriptor
// ): PropertyDescriptor {
//   // target === Employee.prototype
//   // propertyName === "greet"
//   // propertyDesciptor === Object.getOwnPropertyDescriptor(Employee.prototype, "greet")

//   const method = propertyDesciptor.value;

//   propertyDesciptor.value = function (...args: any[]) {
//     // 将参数列表转换为字符串
//     const params = args.map((a) => JSON.stringify(a)).join();

//     // 调用该方法并让它返回结果
//     const result = method.apply(this, args);

//     // 转换结果为字符串
//     const r = JSON.stringify(result);

//     // 在控制台中显示函数调用细节
//     console.log(`Call: ${propertyName}(${params}) => ${r}`);

//     // 返回调用的结果
//     return result;
//   };
//   return propertyDesciptor;
// }

// class Employee {
//   constructor(private firstName: string, private lastName: string) {}

//   @logMethod
//   greet(message: string): string {
//     console.log('message: ', message);
//     return `${this.firstName} ${this.lastName} : ${message}`;
//   }
// }

// const emp = new Employee("三月风情", "陌上花开");
// emp.greet("三月风情陌上花"); // return: '三月风情 陌上花开 : 三月风情陌上花'
