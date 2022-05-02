"use strict";

// const and let, is block scope within the closest curly braces
function func() {
  if (true) {
    const tmp = 123;
  }
  console.log(tmp); // Uncaught ReferenceError: tmp is not defined
}
func();

// However, const object can be modified, unless you use Object.freeze()
const foo = {};
foo["prop"] = "Moo"; // This works!
console.log(foo);
