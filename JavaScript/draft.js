// let students = [
//   { name: "Alice", score: 95 },
//   { name: "Bob", score: 85 },
//   { name: "Jack", score: 95 },
// ];

// const validate = (object) => {
//   if (typeof object.name !== "string") {
//     return false;
//   }
//   if (typeof object.score !== "number") {
//     return false;
//   }
//   return true;
// };

// const findHighest = (students) => {
//   let tempStudents = students.sort((studentA, studentB) => {
//     return studentB.score - studentA.score;
//   });
//   let highest = tempStudents[0].score;

//   let res = tempStudents.filter((student) => {
//     return student.score === highest;
//   });

//   return res;
// };

// const removeName = (students) => {
//   return students.map((student) => {
//     return student.name;
//   });
// };

// // console.log(findHighest(students));

// let myPromise = new Promise((resolve, reject) => {
//   let data = students;
//   let res = students.map((student) => {
//     return validate(student);
//   });

//   if (!res.includes(false)) {
//     res = findHighest(data);
//     res = removeName(res);
//     resolve(res);
//   } else {
//     reject("Data is not valid");
//   }
// });

// async function run() {
//   try {
//     let res = await myPromise;
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }

// // run();

// myPromise
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// let a = "";
// a = null;

// if (a == null) {
//   console.log("Daniel");
// }

// validate methdo using promise, then return the highest names.
