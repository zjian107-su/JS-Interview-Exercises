/**
 * 1. What is hoisting:
 * Hoisting mechanism in JavaScript moves variable and function declarations to the top of their respective scropes during compilation.
 * Reguardless of the place where they are defined in the source code.
 *
 * Only declaration is hoisted but not the initiation
 */

console.log(`x is ${x}`); // Output: undefined

console.log(`y is ${y}`); // Output: undefined
function x() {
  console.log("Apple");
}

var y = () => {
  console.log("Banana");
};

/**
 * In a nutshell, function keyword -> everything is hoisted. var variable -> only declaration is hoisted.
 */
