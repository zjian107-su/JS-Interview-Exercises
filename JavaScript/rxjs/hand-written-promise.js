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
