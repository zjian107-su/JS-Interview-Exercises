let error = true;

function doAsyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("error");
      } else {
        resolve("done");
      }
    }, 1000);
  });
}

doAsyncTask().then(
  () => {
    console.log("success");
  },
  () => {
    console.log("failed");
  }
);
