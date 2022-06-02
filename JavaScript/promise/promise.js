// random
function doAsyncTask(cb) {
  setTimeout(() => {
    console.log("Async Task Calling Callback");
    cb();
  }, 1000);
}

doAsyncTask(() => console.log("Callback Called"));

// basic promise in function
function basicPromise(status) {
  return new Promise((resolve, reject) => {
    if (status) {
      resolve("data");
    } else {
      reject("error");
    }
  });
}

// quick resolved
let resolvedPromise = Promise.resolve("done");
resolvedPromise.then((data) => {
  console.log("quick resolved---");
  console.log(data);
});

// quick rejected
let rejectedPromise = Promise.reject("error");
rejectedPromise.catch((error) => {
  console.log("quick rejected---");
  console.log(error);
});

// Example 02: promise
let myPromise = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    resolve(5);
  } else {
    reject("error message");
  }
});

myPromise
  .then((data) => {
    console.log(data);
    console.log("example 02 finsihed -----------");
  })
  .catch((error) => {
    console.log(error);
    console.log("example 02 finsihed -----------");
  });

// Example 03: async await

// (async function myPromise01() {
//   try {
//     let data = await myPromise;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// })();
