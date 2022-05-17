// sort
const numbers = [3, 5, 1, 2, 4];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]

// reduce
const numbers01 = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 15

// filter
const numbers02 = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// forEach
const numbers03 = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));
// Output:
// 1
// 2
// 3
// 4
// 5
