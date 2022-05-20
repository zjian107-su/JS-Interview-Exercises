// class
class obj04 {
  name = "asim";

  sayLater = function () {
    // let self = this;
    setTimeout(() => {
      console.log(`111      ${this.name}`);
    }, 1000);
  };

  sayLater01 = function () {
    let self = this;
    setTimeout(function () {
      console.log(`222      ${self.name}`);
    }, 1000);
  };

  sayOk = () => {
    setTimeout(() => {
      console.log(`333       ${this.name}`);
    }, 1000);
    console.log(`444       ${this.name}`);
  };
}

let obj04Ins = new obj04();

obj04Ins.sayLater(); // Outputs: "asim" after 1 second

obj04Ins.sayOk();

obj04Ins.sayLater01();

// object
let obj = {
  name: "asim",

  sayLater: function () {
    // let self = this;
    setTimeout(() => {
      console.log(`555      ${this.name}`);
    }, 1000);
  },

  sayLater01: function () {
    let self = this;
    setTimeout(function () {
      console.log(`666      ${self.name}`);
    }, 1000);
  },

  sayOk: () => {
    setTimeout(() => {
      console.log(`777       ${this.name}`);
    }, 1000);
    console.log(`888       ${this.name}`);
  },
};

obj.sayLater(); // Outputs: "asim" after 1 second

obj.sayOk();

obj.sayLater01();
