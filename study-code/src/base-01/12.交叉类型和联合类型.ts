/*
  交叉类型(Intersection Types)
  交叉类型是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。 例如， Person & Serializable & Loggable同时是 Person 和 Serializable 和 Loggable。 就是说这个类型的对象同时拥有了这三种类型的成员。
  我们大多是在混入（mixins）或其它不适合典型面向对象模型的地方看到交叉类型的使用。
*/
interface DogInterface {
  run(): void;
}
interface CatInterface {
  jump(): void;
}

let pet: DogInterface & CatInterface = {
  run() {},
  jump() {}
};

// 联合类型
let a5: number | string = 1;
// 字面量联合类型
let b5: "a" | "b" | "c";
let c5: 1 | 2 | 3;

// 对象的联合类型
class Dog5 implements DogInterface {
  run() {}
  eat() {}
}

class Cat5 implements CatInterface {
  jump() {}
  eat() {}
}

enum Master {
  Boy,
  Girl
}
function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dog5() : new Cat5();
  // 如果一个对象时联合类型，在类型未确定的情况下只能访问类型的共有成员
  pet.eat(); // eat为公有方法
  // pet.run()
  // pet.eat()
  return pet;
}

// 可区分的联合类型: 这种模式是结合了联合类型和字面量类型的一种类型保护方法
// 它的核心思想是 一个类型如果是多个类型的联合类型并且每个类型之间有一个公共属性，那么可以凭借这个公共类型创建类型保护区块
interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}
// 使用类型别名声明一个联合类型
type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
  // 通过两个接口的公有属性kind创建不同的类型保护区块
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    case 'circle':
      return Math.PI * s.radius ** 2
    default:
      return ((e: never) => {throw new Error(e)})(s)
  }
}
console.log(area({kind: 'circle', radius: 1}))
