// Feature of ES6

// const {first: f} = obj; translates to extract the property first and store in a constant called f.
const obj = { first: "Asim", last: "Hussain", age: 39 };
const { first: f, last: l } = obj; // save value in f and l
console.log(f); // Asim
console.log(l); // Hussain
// since the saving var and the object attr name are the same, we can omit the :f and :l
const { first, last } = obj;
console.log(first); // Asim
console.log(last); // Hussain

// index destructuring
const arr = ["a", "b"];
const [x, y] = arr;
console.log(x); // a
console.log(y); // b

function foo({ x }) {
  console.log(x); // Refer to x directly
}
foo({ x: 1 });
