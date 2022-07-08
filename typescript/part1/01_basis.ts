// 声明一个变量a，同时指定它的类型为number
let a: number;

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
function sum(a: number, b: number): any { // restrict data type of input arguments
    return a + b;
    // return "hi"; // wrong!
}

sum(123, 34) // fine
// sum(2, "2") // not fine because needs to be 2 number
// sum(2,2,4) // not fine: # of arguments not right

//
// BY DEFAULT, even we have data type error/mismatch, still can compile to JS.
//

export { }