let base = { a: 1, b: 2 };
let obj = Object.create(base);
obj[c] = 3;
for (prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(prop);
  }
}
