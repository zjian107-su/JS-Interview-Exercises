let obj = {
  myFunction: function () {
    console.log(this);
  },
};

obj.myFunction(); // Output: {myFunction: ƒ}

let func = obj.myFunction;
func(); // Output: Window object
