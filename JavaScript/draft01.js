const items = [
  "Animals",
  "Anime",
  "Anti-Malware",
  "Art & Design",
  "Authentication & Authorization",
  "Blockchain",
  "Books",
  "Business",
  "Calendar",
  "Cloud Storage & File Sharing",
  "Continuous Integration",
  "Cryptocurrency",
  "Currency Exchange",
  "Data Validation",
  "Development",
  "Dictionaries",
  "Documents & Productivity",
];

const map = new Map();

// Loop through the items and populate the map
items.forEach((item) => {
  const firstLetter = item.charAt(0).toUpperCase();

  if (!map.has(firstLetter)) {
    map.set(firstLetter, []);
  }

  map.get(firstLetter).push(item);
});

for (let [key, value] of map) {
  console.log("new entry");
  console.log(key, value);
}
