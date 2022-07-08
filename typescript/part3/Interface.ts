// INTERFACE
// 接口：用来定义一个类的结构
// 用来定义一个类中应该包含哪些属性和方法
// 同时可以当作类型声明去使用

//类型声明：
type myType = {
    name: string,
    age: number
}


// type myType = {} // wrong: cannot repeat declare

// INTERFACE can be repeat declaration
interface myInterface {
    name: string,
    age: number
}
interface myInterface {
    gender: string;
}
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
const obj: myInterface = {
    name: "s",
    age: 1,
    gender: "male"
}
const obj2: myType = {
    name: "s",
    age: 1
}

// DIFFERENCE: Interface can be used for restricting the structure of class
// In this functionality, it's kinda like abstract class


// ALL properties / methods in interface cannot have actual values
//      all of methods in here are abstract methods
// it just defines the structure, not considering about actual value
interface classInterface {
    name: string
    sayHello(): void;
}


// when we define a class, we can implements interface
// 定义类时，可以使类去实现一个接口
// let class to satisfy interface requirment
// 实现接口就是：使类能满足接口的要求
class myClass implements classInterface {
    name: string

    constructor(name: string) {
        this.name = name
    }
    sayHello(): void {
        console.log("hello");
    }

}


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
