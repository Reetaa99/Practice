class Dog {
    // properties here needed to be pre-defined
    name: string
    age: number

    // invoke constructor methods when a new instance is created
    // ex. when const dog = new Dog();
    constructor(name: string, age: number) {
        // this is one of the instance methods
        // "this" refers/points to current instance, in the instance method
        // we can use this to add property in this instance
        this.name = name;
        this.age = age;
    }


    bark() {

        // in such instance methods,
        // we can use "this" to see the instance that invoke this function
        alert("wang wang wang")
    }
}


const bai = new Dog("bai", 2);
const hei = new Dog("balck", 8);

console.log(bai);
console.log(hei);


