// 抽象类：只能被继承 不能被实例化的类
// 抽象类的好处：
  // 可以抽离出一些事物的共性，有利于代码的复用和扩展，
  // 另外抽象类也可以实现多态，所谓多态就是在父类中定义一个抽象方法，
  // 在多个子类中对这个方法有不同的实现，在程序运行的时候会根据不同的对象执行不同的操作，这样就实现了运行时的绑定
abstract class Animal {
  eat() {
    console.log("eat");
  }
  // 抽象方法 在抽象类中可以不指定方法的具体实现 
  // 抽象方法的好处是当你明确知道在子类中有其他的实现就没必要在父类中实现了
  // 内部如果有抽象方法，那么这个方法必须被子类实现
  abstract sleep(): void
}
// let animal = new Animal(); // 无法创建抽象类的实例

class Dog1 extends Animal{
  constructor(name: string) {
    super();
    this.name = name;
  }
  name: string;
  run() {};
  sleep() {
    console.log('dog sleep');
  }
}
let dog1 = new Dog1('wangwang');
dog1.eat();

// 实现TS中的多态
class Cat extends Animal {
  sleep() {
    console.log('Cat sleep');
  }
}
let cat = new Cat();

let animals: Animal[] = [dog1, cat];
animals.forEach(i => {
  i.sleep();
})

// TS特殊的类型：this类型 类的成员方法可以直接返回一个this 这样可以方便链式调用
class Workflow {
  step1() {
      return this
  }
  step2() {
      return this
  }
}
new Workflow().step1().step2();

// 在继承的时候this类型也可以表现出多态，这里的多态是指this既可以是父类型也可以是子类型
class MyFlow extends Workflow {
  next() {
    return this;
  }
}
new MyFlow().next().step1().next().step2();