// 1. function
// 1.1.
/*
function foo() {
    if (!new.target) {
        throw "Must be called with new.";
    }

    console.log("Is called with new.");
}

new foo();
//foo();
*/
// 1.2.
/*
function Person(firstName, lastName) {
    if(new.target) {
        throw new Error("Person is not a constructor");
    }

    return (firstName + ' ' + lastName);
}

console.log(Person("Vahan", "Teryan"));
*/
// 2. Constructor
// 2.1.
/*
class A {
    constructor() {
        console.log(new.target.name);
    }
};

class B extends A {};

let a = new A();
let b = new B();
*/
// 2.2.
/*
class A {
    constructor() {
      if (!new.target) {
        throw new Error("Must be called with new.");
      }
      console.log("Is called with new.");
    }
  }
  
const a = new A();
*/


