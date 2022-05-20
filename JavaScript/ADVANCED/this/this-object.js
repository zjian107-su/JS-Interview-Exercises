// this.name = "Daniel";

/**
 * object => when you assign the function, "this" will point to the object. But if you have a nested function, "this" will point to the global window object. However, if you use arrow function, all of "this" will refer to the global object
 *
 * using "this" object is a BAD PRACTICE
 *
 * arrow function will directly go to global object
 */
let obj = {
  name: "asim",

  sayLaterArrow: function () {
    setTimeout(() => {
      console.log(`111      ${this.name}`);
    }, 1000);
    console.log(`222      ${this.name}`);
  },

  sayLaterRegular: function () {
    let self = this; // IMPORTANT
    setTimeout(function () {
      console.log(`333      ${self.name}`);
    }, 1000);
    console.log(`444      ${self.name}`);
  },

  sayOk: () => {
    setTimeout(() => {
      console.log(`555       ${this.name}`);
    }, 1000);
    console.log(`666       ${this.name}`);
  },
};

/**
 * way of object
 */
// obj.sayLaterArrow();
// obj.sayLaterRegular();
// obj.sayOk();

/**
 * way of var
 */
let a = obj.sayLaterArrow;
a(); // the context becomes global
