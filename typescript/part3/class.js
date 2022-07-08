var Person = /** @class */ (function () {
    function Person() {
        /*
        INSTANCE PROPERTIES
        all the properties that defined directly are instance properties,
        they are saved inside istance
        we have to create new instance to acceess it
        using:
        const per = new Person();
        console.log(per.name);
        
        CLASS/STATIC property
        // no need to create new instance to access it
        // can directly access using class
        // using:
        // console.log(Person.gender)
        
        
        readonly: set a property readonly
        // BY DEFAULT: they both duplex: writable and readable;
        // you can change it to one of them using
        // readonly
        // syntax: readonly name: string = "kevin"
        // syntax: static readonly age: number = 18
        
        */
        // this is instance property: saved inside the instance
        // you have to use "new" to create instance to access those property
        this.name = "kevin";
        this.age = 18;
    }
    // METHODS 
    // here is instance mthods
    Person.prototype.sayHello = function () {
        console.log("hi ");
    };
    // here is class methods
    Person.sayBye = function () {
        console.log("BYE");
    };
    // this is class/static properties
    // save inside the class
    // no need to create a new instance to access
    Person.gender = "male";
    return Person;
}());
// how to access instance property
var p = new Person();
console.log(p);
console.log(p.name, p.age);
// console.log(Person.age); // age not exists in class
// how to access class/static property
console.log(Person.gender);
// console.log(p.gender); // gender not exists in instance of class
p.sayHello();
Person.sayBye();
