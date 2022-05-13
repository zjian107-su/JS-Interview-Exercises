/**
 * This is <ES6 style. You basically use this method liek a constructor. The this will refer to the var you initiated.
 */

function Person(name, website) {
  this.name = name;
  this.website = website;
}

Person.prototype.sayHello = function () {
  console.log(
    `Hello, my name is ${this.name} and this is my website: ${this.website}`
  );
};

const dan = new Person("dan", "https://nabi.io");
dan.sayHello();
