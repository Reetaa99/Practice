"use strict";
// OBJECT: not very useful
exports.__esModule = true;
var a;
a = {};
a = function () { };
// too many types of object
// {prop: value} used to define how many props can be included inside object
var b;
// b ={} // wrong: need a prop name inside
b = { name: "kevin" }; // fine
// b = {name: "kevin", age=18} // wrong, one extra
var c;
// ? means optional
c = { name: "name", age: 1 }; //fine
c = { name: 'asd' }; // fine
var d;
d = { name: "hi", gender: "male", age: 19, bool: true };
// name is required prop
// you can add any # of extra properties
// property name should be string, property value can be any type
var e;
// two number arguments, return one number
e = function (a1, b1) {
    return a1 + b1;
    // return "he"
};
//ARRAY 
var f; // string array
var g; // number array
// TUPLE: array with fixed length
var h;
h = [123, "abc"];
// h = [123] // number of things in array wrong
// h = ["hi", 123] // data type is number
// ENUM
// let i : {name: string, gender: 0|1}
// i = {
//     name: "k",
//     gender: 1 // 
// }
// change to enum;
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: "k",
    gender: Gender.Male // other programmer knows what it is, but save number in memory
};
console.log(i.gender === Gender.Male);
// & : means AND
var j;
j = {
    name: 'k',
    age: 18
};
var k;
var l;
// ...
k = 1;
k = 2;
//The error "Cannot redeclare block-scoped variable" occurs when we redeclare a variable in the same block or when TypeScript uses global typings, which interfere with local variable names. To solve the error, only declare a variable once in a block and use ES modules.
