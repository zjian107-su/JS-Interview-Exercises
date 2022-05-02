let a = setTimeout(function () {
  console.log(`${this.name}`);
  console.log("Daniel out of an object");
}, 1000);

// within node, setTimeout returns an object
console.log(typeof a);
// within a browser, it returns the global object if NOT under strict mode
