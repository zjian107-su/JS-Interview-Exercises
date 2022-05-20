function a(callback) {
  let b = 15;
  return function b() {
    console.log(b);
  };
}

let b = a()();
