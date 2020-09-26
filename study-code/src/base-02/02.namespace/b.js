// 三斜线指令 命名空间的引用a.ts
/// <reference path="a.ts"/>
var Shape;
(function (Shape) {
    function square(x) {
        return x * x;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
console.log(Shape.cricle(1));
console.log(Shape.square(1));
// 在html中引用
// 命名空间成员的别名问题
// 现在我们在访问命名空间的时候都会加上Shape前缀
// 为了简便我们可以给函数(比如Shape.cricle)起别名
var cricle = Shape.cricle; // 注意这里import跟模块里的import没有任何关系
console.log(cricle(2));
