// immediately involved function express
var res = (function () {
  var a = "IIFE";
  console.log(a);
})();
// you saved the result of the function in a variable

// IIFE to create modules
var module = (function () {
  var privateVar = "I am private";

  function privateFunction() {
    return "This is a private function";
  }

  return {
    publicMethod: function () {
      return "Public can see me!";
    },
    accessPrivate: function () {
      return privateFunction();
    },
  };
})();

console.log(module.publicMethod()); // "Public can see me!"
console.log(module.accessPrivate()); // "This is a private function"
