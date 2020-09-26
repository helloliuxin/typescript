// 类和接口的关系

interface Human {
  // new (name: string): void; // 接口不能约束类的构造函数
  name: string;
  // protected name: string;
  eat(): void;
}

// 1、使用implements关键字实现接口
// 注意：类实现接口的时候，必须实现接口声明中所有的属性
// 接口只能约束类的公有成员 也不能约束类的构造函数
class Asian implements Human {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  name: string;
  // private name: string; // 类“Asian”错误实现接口“Human”。属性“name”在类型“Asian”中是私有属性，但在类型“Human”中不是。
  eat() {}
  sleep() {} // 类也可以定义自己的属性
  private age: number;
}

// 2、接口的继承
// 2.1：接口继承接口库
interface Man extends Human {
  run(): void;
}

interface Child {
  cry(): void;
}
// 接口可以同时继承多个接口，中间用逗号隔开
interface Boy extends Man, Child {}

let boy: Boy = {
  name: "",
  run() {},
  eat() {},
  cry() {}
};

// 接口继承类  
// 就相当于接口把类的成员都抽象了出来 也就是只有类的成员接口而没有具体的实现
// 注意：接口再抽离类的时候，不仅抽离了公有成员，也抽离了私有成员和受保护成员
class Auto {
  state = 1
  // private state2 = 1
}

interface AutoInterface extends Auto { // 接口中隐含了state属性

}

class C implements AutoInterface {
  state = 1;
}

class Bus extends Auto implements AutoInterface {

}