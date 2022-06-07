// NaN
console.log(NaN === NaN); // false
console.log(NaN == NaN); // false
// if they are the same, math would cause bugs

function createCounterArray() {
  const counters = [];

  for (let i = 0; i < 5; i++) {
    counters.push(function () {
      console.log(i);
    });
  }

  return counters;
}

const counters = createCounterArray();

for (const counter of counters) {
  counter(); // What does this log, and why?
}
