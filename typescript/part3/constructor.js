var Dog = /** @class */ (function () {
    // invoke constructor methods when a new instance is created
    // ex. when const dog = new Dog();
    function Dog(name, age) {
        // this is one of the instance methods
        // "this" refers/points to current instance, in the instance method
        // we can use this to add property in this instance
        this.name = name;
        this.age = age;
    }
    Dog.prototype.bark = function () {
        // in such instance methods,
        // we can use "this" to see the instance that invoke this function
        alert("wang wang wang");
    };
    return Dog;
}());
var bai = new Dog("bai", 2);
var hei = new Dog("balck", 8);
console.log(bai);
console.log(hei);
