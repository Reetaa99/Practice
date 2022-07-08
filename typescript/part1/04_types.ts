// OBJECT: not very useful

let a: object;
a = {};
a = function () { };
// too many types of object

// {prop: value} used to define how many props can be included inside object
let b: { name: string };
// b ={} // wrong: need a prop name inside
b = { name: "kevin" } // fine
// b = {name: "kevin", age=18} // wrong, one extra
let c: { name: string, age?: number }
// ? means optional
c = { name: "name", age: 1 } //fine
c = { name: 'asd' } // fine

let d: { name: string, [propName: string]: any }
d = { name: "hi", gender: "male", age: 19, bool: true }
// name is required prop
// you can add any # of extra properties
// property name should be string, property value can be any type

let e: (z: number, zz: number) => number;
// two number arguments, return one number
e = (a1: number, b1: number): number => {
    return a1 + b1;
    // return "he"
}



//ARRAY 
let f: string[] // string array
let g: Array<number> // number array



// TUPLE: array with fixed length
let h: [number, string];
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
enum Gender {
    Male = 0,
    Female = 1
}

let i: { name: string, gender: Gender }
i = {
    name: "k",
    gender: Gender.Male // other programmer knows what it is, but save number in memory
}

console.log(i.gender === Gender.Male)



// & : means AND
let j: { name: string } & { age: number }
j = {
    name: 'k',
    age: 18,
    // gender: "male"
}


// assign data type to a variable 
type myType = 1 | 2 | 3 | 4 | 5; // myType = another name of 1||2|3|4|5;
let k: myType;
let l: myType;
// ...

k = 1
k = 2
// k = 6














// avoid using global variable because of ts
export { };

//The error "Cannot redeclare block-scoped variable" occurs when we redeclare a variable in the same block or when TypeScript uses global typings, which interfere with local variable names. To solve the error, only declare a variable once in a block and use ES modules.