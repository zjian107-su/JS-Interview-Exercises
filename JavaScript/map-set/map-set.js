// url: https://codecraft.tv/courses/angular/es6-typescript/mapset/#_creating_getting_and_setting_2

// Map is an ordered dictionary

// map can't use for in loop
let map = new Map([
  ["APPLE", 1],
  ["ORANGE", 2],
  ["MANGO", 3],
]);

// will not work because map is not a plain object
for (let key in map) {
  console.log(key);
}

for (let [key, value] of map) {
  console.log(key, value);
}

for (let entry of map.entries()) {
  console.log(entry); // [key, value]
}

// map is chianable like a set
let map01 = new Map().set("A", 1).set("B", 2).set("C", 3);
