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

// normal
let condition = true;
let normalPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Success");
  } else {
    ("failure");
  }
});

normalPromise.then((data) => {
  console.log("normal---");
  console.log(data);
});
