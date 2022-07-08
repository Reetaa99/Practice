"use strict";
exports.__esModule = true;
// 声明一个变量a，同时指定它的类型为number
var a;
// a = 10;
// a = 22;
// // the string is not assignable to type "number"
// a = "hello"
// if declaration and initialization are at the same type,
// then ts would automatically do type check and set it to this data type
// let c: boolean = true;
// let d = true;
// same 
// (): number => return a number
function sum(a, b) {
    return a + b;
    // return "hi"; // wrong!
}
sum(123, 34); // fine
