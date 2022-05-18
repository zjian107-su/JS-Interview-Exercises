/**
 * CALL
 * @param {*} greeting
 * @param {*} punctuation
 */
function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const person = { name: "Alice" };

greet.call(person, "Hello", "!");
// Output: Hello, Alice!

/**
 * APPLY
 * @param {*} greeting
 * @param {*} punctuation
 */
function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const person01 = { name: "Bob" };

greet.apply(person01, ["Hi", "?"]);
// Output: Hi, Bob?
