// INTERFACE
// 接口：用来定义一个类的结构
// 用来定义一个类中应该包含哪些属性和方法
// 同时可以当作类型声明去使用
// result => add all properties together in this interface 
// same as :
/*
interface myInterface {
    name: string,
    age: number,
    gender: string
}
*/
// same => very similar
// if just used as 类型声明
var obj = {
    name: "s",
    age: 1,
    gender: "male"
};
var obj2 = {
    name: "s",
    age: 1
};
// when we define a class, we can implements interface
// 定义类时，可以使类去实现一个接口
// let class to satisfy interface requirment
// 实现接口就是：使类能满足接口的要求
var myClass = /** @class */ (function () {
    function myClass(name) {
        this.name = name;
    }
    myClass.prototype.sayHello = function () {
        console.log("hello");
    };
    return myClass;
}());
// DIFFERENCE BETWEEN INTERFACE AND ABSTRACT CLASS
//  Generally they are very similar
//  BUT:
//      abstract class can have normal methods
//      interface cannot have normal methods
//
//      extends vs implements
// !!!IMPORTANT!!!
// ABSTRACT CLASS, INTERFACE only exists in TS file
// disappear after compilation
