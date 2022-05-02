"use strict";

/* // Declaring a const variable
const foo; // SyntaxError: Missing initializer in const declaration
*/

const foo = Object.assign({});
foo.prop = 1;
console.log(foo.prop);

let foo1 = Object.freeze({});
foo1.prop = 1;// TypeError: Cannot add property prop, object is not extensible
console.log(foo1.prop); // it will not work due to freeze method

let foo1 = {};
foo1.prop = 1;
console.log(foo1.prop); // it will work
