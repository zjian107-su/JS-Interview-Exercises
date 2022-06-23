const events = [
  ["CONNECT", "Alice", "Bob"],
  ["DISCONNECT", "Bob", "Alice"],
  ["CONNECT", "Alice", "Charlie"],
  ["CONNECT", "Dennis", "Bob"],
  ["CONNECT", "Pam", "Dennis"],
  ["DISCONNECT", "Pam", "Dennis"],
  ["CONNECT", "Pam", "Dennis"],
  ["CONNECT", "Edward", "Bob"],
  ["CONNECT", "Dennis", "Charlie"],
  ["CONNECT", "Alice", "Nicole"],
  ["CONNECT", "Pam", "Edward"],
  ["DISCONNECT", "Dennis", "Charlie"],
  ["CONNECT", "Dennis", "Edward"],
  ["CONNECT", "Charlie", "Bob"],
];

const grouping = function (events, number) {
  let map = {};
  let more = [];
  let less = [];
  events.map(([operation, personA, personB]) => {
    if (operation === "CONNECT") {
      if (!map[personA]) {
        map[personA] = [];
      }
      if (!map[personB]) {
        map[personB] = [];
      }
      map[personA].push(personB);
      map[personB].push(personA);
    } else if (operation === "DISCONNECT" && map[personA] && map[personB]) {
      let indexA = map[personA].indexOf(personB);
      let indexB = map[personB].indexOf(personA);
      map[personA] = map[personA].splice(indexA, 1);
      map[personB] = map[personB].splice(indexB, 1);
    }
  });

  for (let [key, value] of Object.entries(map)) {
    if (value.length >= number) {
      more.push(key);
    } else if (value.length < number) {
      less.push(key);
    }
  }

  console.log(`number is ${number}`);
  return { more: more, less: less };
};
console.log(grouping(events, 3));
console.log(grouping(events, 2));
console.log(grouping(events, 1));
