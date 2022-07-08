"use strict";
exports.__esModule = true;
var a;
a = 10; //fine
// a = 11; // not fine
// | means OR
// b can be male or female
var b;
b = "male";
b = "female";
// b= "hello" // wrong
var c;
c = true;
c = 'helo';
// c = 10
// ANY
var d = 10;
// let d; // same
// same as javascript
var z = d; // means e and d both have any type
// any data type can assign to variable with any data type
console.log(z);
// UNKNOWN
// similar with any: but it's safer any
var e;
e = 10;
e = "e";
e = true;
var zz;
zz = true; // fine
// zz = e; // wrong: unknown cannot be assigned to boolean;
if (typeof e === "boolean") {
    zz = e; // fine
}
// type assertion: make sure you're right
zz = e;
zz = e;
// same above;
//VOID : return void: "return";"return undefined"; "return null"
//NEVER: return nothing: 
// usually for function return value;
function fn() {
    // return 1
    throw new Error("error!");
}
