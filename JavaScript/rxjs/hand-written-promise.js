/**
 * Promise will need a call backfunction.
 * It needs resolve and reject function, and in the return function, you need to define the condition of resolve and reject
 *
 * To use it, you need to chain it with then() and catch()
 * */

let myPromise = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    resolve("Daniel is resolved!");
  } else {
    reject("Error");
  }
});

myPromise
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
