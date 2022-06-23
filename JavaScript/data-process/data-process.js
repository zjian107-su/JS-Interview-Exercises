let students = [
  { name: "Alice", score: 95 },
  { name: "Bob", score: 85 },
  { name: "Jack", score: 95 },
];

function isValid(students) {
  return students.every((student) => {
    return (
      typeof student.name === "string" && typeof student.score === "number"
    );
  });
}

function extractName(student) {
  return student.name;
}

function descSort(studentA, studentB) {
  return studentB.score - studentA.score;
}

function getHighestStudents(highestScore) {
  return (student) => student.score === highestScore;
}

function process(students) {
  let highestScore = students[0].score;
  return students
    .slice()
    .sort(descSort)
    .filter(getHighestStudents(highestScore))
    .map(extractName);
}

function myPromise(students) {
  return new Promise((resolve, reject) => {
    if (isValid(students)) {
      resolve(process(students));
    } else {
      reject("data is not valid");
    }
  });
}

async function myProgram() {
  try {
    console.log("running!");
    let res = await myPromise(students);
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
}

myProgram();
