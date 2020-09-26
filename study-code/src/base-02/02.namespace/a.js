// 命名空间
// 使用namespace关键字来声明一个命名空间
// 声明一个Shape命名空间 在命名空间之类可以定义任意多的变量，这些变量只在Shape命名空间内可见
// 如果想要这些变量在全局可见 需要使用export关键字导出
var Shape;
(function (Shape) {
    var pi = Math.PI;
    function cricle(r) {
        return pi * Math.pow(r, 2);
    }
    Shape.cricle = cricle;
})(Shape || (Shape = {}));
// 命名空间也是可以拆分的
// 在b.ts文件中也有一个同名的命名空间Shape 那么这个命名空间分布在两个不同文件中 他们是共享一个命名空间的
// 命名空间的调用方法也比较简单 我们直接使用Shape访问就行了
// 如何看到效果呢 这里需要明确一个原则:命名空间跟模块不要混用，不要在模块中使用命名空间，命名空间最好在一个全局空间中使用
