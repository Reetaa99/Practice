(function () {

    // abstract class
    // class cannot be used to create new instance
    // it is just for inheritance
    //       parent class for other class
    // in abstract class, we can add abstract methods

    abstract class Animal {
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

        // define a abstract method
        // only define its structure, not define its implemention of functionality
        // just for children class override

        // using "abstract" keyword: no function body
        // can only exists inside abstract class
        // children/inherited class must override this method
        abstract sayHello(): void; // return value is void
        byby = () => {
            console.log("BYEBYE");
        }
    }

    // inheritance
    // Animal is parent, Dog/Cat is children
    // children have all properties and methods in Animal
    // like copy and paste all codes in Animal
    class Dog extends Animal {
        gender: number;

        // if constructor in children exists,
        // it override the constructor in parent
        // so we have to invoke the constructor from parent
        constructor(name: string, age: number, gender: number) {
            super(name, age); // invoke parent's constructor
            this.gender = gender;
        }



        // add new methods
        run(): void {
            console.log("running");

        }

        // override the parent methods with same name of methods
        sayHello(): void {
            console.log("wangwangwang");
        }

        // SUPER

        // in the instance methods, super refers to instance of parent class 
    }

    class Cat {
        //...
    }




})();