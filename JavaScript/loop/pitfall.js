var funcs = [];
for (var i = 0; i < 5; i += 1) {
  var y = i;
  funcs.push(function () {
    console.log(y);
  });
}
funcs.forEach(function (func) {
  func();
});
// It will return 5 of 4 due to y is hoisted
// y is not block level

// Asynchronous nature of setTimeout
// when setTimeout starts to run, the for loop has already finished
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Outputs 3 three times
  }, 1000);
}

// You can’t return from the enclosing function using a return statement.
function findEvenNumber(arr) {
  arr.forEach(function(value) {
    if (value % 2 === 0) {
      return true;  // This will only exit the callback of the forEach, not findEvenNumber
    }
  });
  return false;
}

console.log(findEvenNumber([1, 3, 5])); // Outputs: false
console.log(findEvenNumber([1, 4, 5])); // Outputs: false, even though there's an even number!