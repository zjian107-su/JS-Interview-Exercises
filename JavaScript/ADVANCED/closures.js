// CLOSURES

/**
 * Function scope means that you can only access the variable within the function. However, if you declare a function inside another function, the inner function can access the outer function's variables and functions, even if it was not passed in as arguments.
 *
 * The inner function creates a closure that preserves the outer function's var and func, and retain the access.
 */

// The following code used both bind() and closure. The closure used the out function sayMyName's context and attribute.
let obj = {
  name: "Nabi",
  sayMyName: function () {
    return function changeName(newName) {
      console.log(`${this.name} is dancing`);
      this.name = newName;
      console.log(`Now ${this.name} is dancing`);
    }.bind(this);
  },
};

let aFunc = obj.sayMyName();
aFunc("Miky");
