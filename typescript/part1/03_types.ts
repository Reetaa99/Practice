let a: 10;
a = 10; //fine
// a = 11; // not fine


// | means OR
// b can be male or female
let b: "male" | "female";
b = "male";
b = "female";
// b= "hello" // wrong


let c: boolean | string;
c = true;
c = 'helo';
// c = 10

// ANY
let d: any = 10;
// let d; // same
// same as javascript
let z: string = d; // means e and d both have any type
// any data type can assign to variable with any data type
console.log(z)

// UNKNOWN
// similar with any: but it's safer any
let e: unknown;
e = 10;
e = "e";
e = true;
let zz: boolean;
zz = true // fine
// zz = e; // wrong: unknown cannot be assigned to boolean;
if (typeof e === "boolean") {
    zz = e; // fine
}
// type assertion: make sure you're right
zz = e as boolean;
zz = <boolean>e;
// same above;

//VOID : return void: "return";"return undefined"; "return null"
//NEVER: return nothing: 
// usually for function return value;
function fn(): never {
    // return 1
    throw new Error("error!");
}

export { };