let obj = {
  name: "asim",
  sayLater: function () {
    console.log(`${this.name}`);
  },
};
obj.sayLater(); // will print asim

let obj01 = {
  name: "asim",
  sayLater: function () {
    setTimeout(function () {
      console.log(`${this.name}`);
    }, 1000);
  },
};
obj01.sayLater(); // will print undefined

// In order to make it work

// 1. Arrow Functions: Use an arrow function, which does not have its own this context and will use the enclosing scope's this.
let obj02 = {
  name: "asim",
  sayLater: function () {
    setTimeout(() => {
      console.log(`${this.name}`);
    }, 1000);
  },
};
obj02.sayLater();

// 2. Bind: Bind the function to the object's this context.
let obj03 = {
  name: "asim",
  sayLater: function () {
    setTimeout(
      function () {
        console.log(`${this.name}`);
      }.bind(this),
      1000
    );
  },
};
obj03.sayLater();

// 3. Self: Store a reference to the object's this context in a variable named self and use that variable in the inner function.
let obj04 = {
  name: "asim",
  sayLater: function () {
    let self = this;
    setTimeout(function () {
      console.log(`${self.name}`);
    }, 1000);
  },
};
obj04.sayLater();
