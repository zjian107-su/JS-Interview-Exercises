/**
 * If you initate an instance, within the function, "this" will refer to the instance.
 * If you assign the function within a variable, "this" will refer to the global object.
 *
 * In a nutshell, "this" will refer to whoever called it.
 */
class objClass {
  name = "asim";

  sayLaterFA = function () {
    setTimeout(() => {
      console.log(`111      ${this.name}`);
    }, 1000);
    console.log(`222      ${this.name}`);
  };

  sayLaterFF = function () {
    let self = this; // IMPORTANT
    setTimeout(function () {
      console.log(`333      ${self.name}`);
    }, 1000);
    console.log(`444      ${this.name}`);
  };

  sayLaterAA = () => {
    setTimeout(() => {
      console.log(`555       ${this.name}`);
    }, 1000);
    console.log(`666       ${this.name}`);
  };

  sayLaterAF = () => {
    let self = this; // IMPORTANT
    setTimeout(function () {
      console.log(`777       ${self.name}`); // will not work
    }, 1000);
    console.log(`888       ${this.name}`);
  };
}

/**
 * Way of instance
 */
let ins = new objClass();
// F = Function, A = Arrow
ins.sayLaterFA();
ins.sayLaterFF();
ins.sayLaterAA();
ins.sayLaterAF();

/**
 * Way of var
 * It will not work due to undefined
 */
// let varFA = ins.sayLaterFA;
// varFA();
// console.log(`999       ${varFA.enrties()}`);
