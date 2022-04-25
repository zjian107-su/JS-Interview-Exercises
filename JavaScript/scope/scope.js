// block scope in IF or LOOP
// var will be hoisted
{
  var a = "block";
}
console.log(a);

// function scope: Error
function random() {
  var randomVal = 5;
}
console.log(randomVal);

// arrow function: Error
const arrow = () => {
  var arrowValue = 5;
};
console.log(arrowValue);
