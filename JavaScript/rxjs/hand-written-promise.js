/**
 * Promise will need a call backfunction.
 * It needs resolve and reject function, and in the return function, you need to define the condition of resolve and reject
 *
 * To use it, you need to chain it with then() and catch()
 * */

function myPromise() {
  return new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      resolve("Daniel is resolved!");
    } else {
      reject("Error");
    }
  });
}

/**
 * Method 01
 */
// myPromise()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

/**
 * Method 02
 */
// async function asyncPromise() {
//   console.log("Daniel is calling");
//   const res = await myPromise();
//   console.log(res);
// }

// asyncPromise();

/**
 * Method 03
 */

// const constMyPromise = async () => {
//   console.log("constMyPromise")
//   let res = await myPromise()
//   console.log(res)
// }

// constMyPromise()
