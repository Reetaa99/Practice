var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    // abstract class
    // class cannot be used to create new instance
    // it is just for inheritance
    //       parent class for other class
    // in abstract class, we can add abstract methods
    var Animal = /** @class */ (function () {
        // invoke constructor methods when a new instance is created
        // ex. when const dog = new Dog();
        function Animal(name, age) {
            // this is one of the instance methods
            // "this" refers/points to current instance, in the instance method
            // we can use this to add property in this instance
            this.name = name;
            this.age = age;
        }
        return Animal;
    }());
    // inheritance
    // Animal is parent, Dog/Cat is children
    // children have all properties and methods in Animal
    // like copy and paste all codes in Animal
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        // if constructor in children exists,
        // it override the constructor in parent
        // so we have to invoke the constructor from parent
        function Dog(name, age, gender) {
            var _this = _super.call(this, name, age) || this;
            _this.gender = gender;
            return _this;
        }
        // add new methods
        Dog.prototype.run = function () {
            console.log("running");
        };
        // override the parent methods with same name of methods
        Dog.prototype.sayHello = function () {
            console.log("wangwangwang");
        };
        return Dog;
    }(Animal));
    var Cat = /** @class */ (function () {
        function Cat() {
        }
        return Cat;
    }());
})();
