// async function will be run after sync tasks

function doStuff(callback) {
  /* ... */
  console.log("A");
  callback();
  console.log("B");
  /* ... */
}

function justLogSomething() {
  console.log("callback called");
}
// You have to pass a func to make this call back work because
doStuff(justLogSomething); // Output: "callback called"

/**
 * 1. What is a call back: A callback is a function that is passed into another fucntion as a parameter. Let's say you have a pre-proccessing function that need to fetch, clean then display data, it will look like a callback hell.
 *
 * 2. What is a promise. A promise is an object representing the eventual completion or failure of an asynchronous operation. Pending, Fulfilled, Rejected. Resolve, Reject.
 *
 */

// hand-made promise --------->
let state = true;

let myPromise = new Promise((resolve, reject) => {
  if (state) {
    resolve("Daniel");
  } else {
    reject("leinad");
  }
});

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const getData = async () => {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
getData();
// <--------- hand-made promise
