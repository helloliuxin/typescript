class Dog {
  // 实例的属性必须具有初始值，或者在构造函数中进行初始化
  // private constructor() {} 当我们给类的构造函数加上私有属性，表示这个类既不能被实例化也不能被继承
  // protected constructor() {} 这个类不能被实例化只能被继承  相当于一个基类
  constructor(name:string) {
    this.name = name;
  }
  public name: string = 'dog';
  run() {};
  private pri() {};
  protected pro() {};
  // 只读属性必须要初始化
  readonly legs: number = 4;
  // 静态成员只能通过类名来调用
  static food: string = 'booes';
}
console.log("Dog.prototype: ", Dog.prototype);

let dog = new Dog('wangwang');
console.log('dog: ', dog);
// dog.pri(); // 私有属性不能被类的实例调用
// dog.pro();
console.log(Dog.food);


class Husky extends Dog {
  // 派生类的构造函数必须包含super调用 super代表父类的实例
  // 构造函数的参数也可以添加修饰符 作用：将参数自动变成为实例的属性 使代码更简洁一些
  constructor (name: string, public color: string) {
    super(name);
    this.color = color;
    // this.pri(); // 私有属性不能被子类调用
    this.pro();
  }
  // color: string
}
console.log(Husky.food);

// 类的成员修饰符
// 1. public: 所有人可见（默认）。
// 2. private: 只能被类本身调用，不能被类的实例调用，也不能被子类调用。
  // private constructor() {} 当我们给类的构造函数加上私有属性，表示这个类既不能被实例化也不能被继承
// 3. protected: 受保护成员 只能在类或类的子类中访问，不能在类的实例中访问
  // protected constructor() {} 这个类不能被实例化只能被继承  相当于一个基类
// 4. readonly: 只读。
// 5. static: 静态属性，可以被类或类的子类调用，不能被实例调用。


// 抽象类：只能被继承 不能被实例化的类
