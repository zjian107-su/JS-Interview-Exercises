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
