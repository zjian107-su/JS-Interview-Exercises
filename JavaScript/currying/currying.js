/**
 * CURRYING
 */

function curr() {
  return function (a) {
    console.log(`a is ${a}`);
    return function (b) {
      console.log(`b is ${b}`);
      return a + b;
    };
  };
}

let returnA = curr();
let returnB = returnA(5);
let returnFinal = returnB(3);
console.log(returnFinal);
